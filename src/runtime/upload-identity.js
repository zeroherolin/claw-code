// 服务端拒答后，同模型重试使用的上传身份。这是本项目对原版有意做的改动，见 docs/dev.md#临时上传身份。
//
// 身份只替换发往 API 的三个字段：metadata 与默认请求头里的会话 ID、metadata 里的设备 ID、提示 ID（请求头与账单头）。
// 本地会话 ID、磁盘上的 userID、历史和存储都不改动。设备 ID 的形状与 userID 相同（32 个随机字节的十六进制），
// 不用 UUID 拼接：UUID 的版本位和变体位是固定的，拼接得到的值带有可识别的规律。
// 另有两处随之调整：会话 ID 不是本地 ID 时，账单头不带按本地会话计数的问数与轮数（turnPositionFor）；
// claude.ai 连接器代理的客户端会话头改用与会话 ID 无关的进程级 ID（mcpClientSessionId）。
//
// 生命周期：
//   1. 每次拒答重试生成一份候选身份，只用于这一次重试请求；
//   2. 重试得到完整的响应（不是拒答、不是错误、没有被中断）后，候选身份被「采用」：此后发往模型的所有请求
//      （主线程、子代理、标题等辅助请求、工具轮、下一条消息）都沿用它，不再回到原来的 ID，直到下一次重试成功后被新的身份取代；
//   3. 重试再次被拒或出错时，候选身份作废，不采用；连续 10 轮用尽时同样不采用。之后的请求沿用此前采用的身份，没有时使用本地 ID；
//   4. 设备 ID 是安装级标识，采用后在整个进程内通用，/clear、/resume 之后也不回到真实的设备 ID；
//      会话 ID 属于对话，记在本地会话名下：切换本地会话（/clear、/resume 其他会话）后使用该会话自身的 ID；
//   5. 只保存在进程内存里，不写盘。重启进程（包括 --continue）从本地 ID 开始，再次被拒答时，同样重试并更换身份。
import { randomBytes, randomUUID } from "node:crypto";

let adoptedDeviceId;
// 本地会话 ID -> { sessionId, prompts }。prompts：自然提示 ID（原版逻辑生成的提示 ID）-> 采用时替换它的提示 ID，
// 使同一问后续的工具轮继续使用替换后的提示 ID；下一问的提示 ID 是新生成的，不会回到旧值
const adoptedBySession = new Map();

/**
 * @param {() => string} [uuid] 生成 UUID 的函数，默认为 crypto.randomUUID；查询循环传入依赖注入的 uuid
 * @returns {{ sessionId: string, deviceId: string, promptId: string, replaces?: string }}
 */
export function newUploadIdentity(uuid = randomUUID) {
  return { sessionId: uuid(), deviceId: randomBytes(32).toString("hex"), promptId: uuid() };
}

/**
 * 本次请求应使用的会话 ID 与设备 ID：重试请求携带的候选身份优先，否则为已采用的身份。
 * 字段缺省表示使用本地值，调用方写作 `身份?.sessionId ?? 本地会话 ID`。
 * @returns {{ sessionId?: string, deviceId?: string } | undefined}
 */
export function uploadIdentityFor(candidate, localSessionId) {
  if (candidate !== undefined) return candidate;
  const sessionId = adoptedBySession.get(localSessionId)?.sessionId;
  if (sessionId === undefined && adoptedDeviceId === undefined) return undefined;
  return { sessionId, deviceId: adoptedDeviceId };
}

/**
 * 本次请求应使用的提示 ID。重试请求使用候选身份的提示 ID，并记录它替换的自然提示 ID（采用时使用）；
 * 其他请求：该问的提示 ID 曾被替换时沿用替换后的，否则使用自然提示 ID。
 */
export function promptIdFor(candidate, naturalPromptId, localSessionId) {
  if (candidate !== undefined) {
    candidate.replaces = naturalPromptId;
    return candidate.promptId;
  }
  if (naturalPromptId === undefined) return undefined;
  return adoptedBySession.get(localSessionId)?.prompts.get(naturalPromptId) ?? naturalPromptId;
}

/**
 * 账单头里 cc_prompt_index / cc_turn_index 的来源（本会话第几问、第几轮）。它们由历史算出，更换会话 ID 时不会重新计数：
 * 新的会话 ID 加上延续原会话的序号，会把新 ID 关联回原会话。因此本次请求的会话 ID 不是本地 ID 时
 * （重试的候选身份或已采用的身份）不带序号。原版一方端点的主请求都带序号（压缩之后仍然计数），不带序号与原版不同，
 * 但不指向原会话；不改为从 1 重新计数：那样的序号是虚构的，与请求中已有的多轮历史不一致。
 */
export function turnPositionFor(candidate, turnPosition, localSessionId) {
  return uploadIdentityFor(candidate, localSessionId)?.sessionId === undefined ? turnPosition : undefined;
}

// claude.ai 连接器经 MCP 代理调用时，请求头 X-Mcp-Client-Session-Id 的值。代理连接在启动时建立，
// 服务端下发的 mcp-session-id 在整条连接上不变；原版这个头的值是本地会话 ID，重试更换会话 ID 之后，
// 原 ID 仍出现在同一连接的每次工具调用里，并且与更换之后的调用同属一条连接。改为进程内一个独立的随机 UUID：
// 形状与会话 ID 相同，各连接共用（原版各连接共用当时的会话 ID），与任何发往模型的会话 ID 都不同。
export const mcpClientSessionId = randomUUID();

/** 采用候选身份：此后的请求都使用它，直到被下一次采用取代 */
export function adoptUploadIdentity(identity, localSessionId) {
  if (identity === undefined || typeof localSessionId !== "string") return;
  adoptedDeviceId = identity.deviceId;
  let entry = adoptedBySession.get(localSessionId);
  if (entry === undefined) adoptedBySession.set(localSessionId, entry = { sessionId: identity.sessionId, prompts: new Map() });
  entry.sessionId = identity.sessionId;
  if (identity.replaces !== undefined) entry.prompts.set(identity.replaces, identity.promptId);
}

/**
 * 该消息是否为服务端已受理并返回的响应：助手消息，有停止原因，且不是拒答。
 * 输出被 max_tokens 或上下文窗口截断时，客户端把它合成为带 apiError: "max_output_tokens" 的错误消息。
 * 这种情况下服务端已受理请求，只是输出被截断，视为送达（之后的续写请求须沿用同一份身份）。
 * 其他 API 错误（4xx、5xx、过载、网络错误）表示请求没有被受理，不视为送达。
 */
export function isDeliveredResponse(message) {
  if (message?.type !== "assistant") return false;
  if (message.isApiErrorMessage === true) return message.apiError === "max_output_tokens";
  const stop = message.message?.stop_reason;
  return stop != null && stop !== "refusal";
}
