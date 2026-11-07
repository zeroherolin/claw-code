// 服务端拒答后，每次同模型重试使用的一份临时上传身份。这是本项目对原版有意做的改动，见 docs/runtime.md#拒答后的重试与换模型。
//
// 身份只替换发往 API 的三个字段：metadata 与默认请求头里的会话 ID、metadata 里的设备 ID、提示 ID（请求头与账单头）。
// 本地会话 ID、磁盘上的 userID、历史和存储都不动。设备 ID 的形状与 userID 相同（32 个随机字节的十六进制），
// 不用 UUID 拼接：UUID 的版本位和变体位是固定的，拼出来的值会带有可识别的规律。
import { randomBytes, randomUUID } from "node:crypto";

/**
 * @param {() => string} [uuid] 生成 UUID 的函数，默认用 crypto.randomUUID；循环里传依赖注入的 uuid
 * @returns {{ sessionId: string, deviceId: string, promptId: string }}
 */
export function newUploadIdentity(uuid = randomUUID) {
  return { sessionId: uuid(), deviceId: randomBytes(32).toString("hex"), promptId: uuid() };
}
