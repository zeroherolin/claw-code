// shared/chunk-tftf1nn4.js — Claude Code 2.1.310 模块 chunk-tftf1nn4.js
import { createHash as r } from "crypto";
var HS = /^[0-9a-f]{64}$/;
function et(e) {
  if (typeof e !== "string" && !ArrayBuffer.isView(e)) throw Object.assign(TypeError("sha256Hex: the data is neither text nor bytes"), { code: "ERR_INVALID_ARG_TYPE" });
  return r("sha256").update(e).digest("hex");
}
export {
  HS,
  et
};
