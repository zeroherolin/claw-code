// 服务端拒答后，同模型重试使用的上传身份。这是本项目对原版有意做的改动，见 docs/runtime.md#拒答后的重试与换模型。
//
// 身份只替换发往 API 的三个字段：metadata 与默认请求头里的会话 ID、metadata 里的设备 ID、提示 ID（请求头与账单头）。
// 本地会话 ID、磁盘上的 userID、历史和存储都不动。设备 ID 的形状与 userID 相同（32 个随机字节的十六进制），
// 不用 UUID 拼接：UUID 的版本位和变体位是固定的，拼出来的值会带有可识别的规律。
//
// 生命周期：
//   1. 每次拒答重试生成一份候选身份，只用于这一次重试请求；
//   2. 重试得到完整的响应（不是拒答、不是错误、没有被中断）后，候选身份被「采用」：此后发往模型的所有请求
//      （主线程、子代理、标题等辅助请求、工具轮、下一条消息）都沿用它，不再回到原来的 ID，直到下一次重试成功换成新的；
//   3. 重试又被拒或出错，候选身份作废，不采用；连续 10 轮用尽也不采用。之后的请求沿用此前采用的身份，没有就用本地 ID；
//   4. 设备 ID 是装机级标识，采用后在整个进程里通用，/clear、/resume 之后也不回到真实的设备 ID；
//      会话 ID 属于对话，记在本地会话名下：换了本地会话（/clear、/resume 别的会话）就用那个会话自己的 ID；
//   5. 只保存在进程内存里，不写盘。重启进程（包括 --continue）从本地 ID 开始，若又被拒答，照常重试并换新身份。
import { randomBytes, randomUUID } from "node:crypto";

let adoptedDeviceId;
// 本地会话 ID -> { sessionId, prompts }。prompts：自然提示 ID -> 采用时顶替它的提示 ID，
// 让同一问后面的工具轮继续用顶替后的提示 ID；下一问的提示 ID 是新生成的，本来就不会回到旧值
const adoptedBySession = new Map();

/**
 * @param {() => string} [uuid] 生成 UUID 的函数，默认用 crypto.randomUUID；循环里传依赖注入的 uuid
 * @returns {{ sessionId: string, deviceId: string, promptId: string, replaces?: string }}
 */
export function newUploadIdentity(uuid = randomUUID) {
  return { sessionId: uuid(), deviceId: randomBytes(32).toString("hex"), promptId: uuid() };
}

/**
 * 这次请求该用的会话 ID 与设备 ID：重试请求自带的候选身份优先，否则是已采用的身份。
 * 字段缺省表示用本地值，调用方写 `身份?.sessionId ?? 本地会话 ID`。
 * @returns {{ sessionId?: string, deviceId?: string } | undefined}
 */
export function uploadIdentityFor(candidate, localSessionId) {
  if (candidate !== undefined) return candidate;
  const sessionId = adoptedBySession.get(localSessionId)?.sessionId;
  if (sessionId === undefined && adoptedDeviceId === undefined) return undefined;
  return { sessionId, deviceId: adoptedDeviceId };
}

/**
 * 这次请求该用的提示 ID。重试请求用候选身份的提示 ID，并记下它顶替的是哪个自然提示 ID（采用时用）；
 * 其它请求：这一问曾被顶替过就沿用顶替后的，否则用自然的提示 ID。
 */
export function promptIdFor(candidate, naturalPromptId, localSessionId) {
  if (candidate !== undefined) {
    candidate.replaces = naturalPromptId;
    return candidate.promptId;
  }
  if (naturalPromptId === undefined) return undefined;
  return adoptedBySession.get(localSessionId)?.prompts.get(naturalPromptId) ?? naturalPromptId;
}

/** 采用候选身份：此后的请求都用它，直到被下一次采用取代 */
export function adoptUploadIdentity(identity, localSessionId) {
  if (identity === undefined || typeof localSessionId !== "string") return;
  adoptedDeviceId = identity.deviceId;
  let entry = adoptedBySession.get(localSessionId);
  if (entry === undefined) adoptedBySession.set(localSessionId, entry = { sessionId: identity.sessionId, prompts: new Map() });
  entry.sessionId = identity.sessionId;
  if (identity.replaces !== undefined) entry.prompts.set(identity.replaces, identity.promptId);
}

/**
 * 这条消息是不是服务端已经受理并返回的响应：助手消息，有停止原因，且不是拒答。
 * 输出被 max_tokens 或上下文窗口截断时，客户端把它合成为带 apiError: "max_output_tokens" 的错误消息。
 * 这是服务端受理了请求、只是输出被截断，算送达（之后的续写请求要沿用同一份身份）。
 * 其它 API 错误（4xx、5xx、过载、网络错误）是请求没有被受理，不算。
 */
export function isDeliveredResponse(message) {
  if (message?.type !== "assistant") return false;
  if (message.isApiErrorMessage === true) return message.apiError === "max_output_tokens";
  const stop = message.message?.stop_reason;
  return stop != null && stop !== "refusal";
}
