// linux/shared/chunk-00a3dc20.js — Claude Code 2.1.310（linux）模块 chunk-9rfk3x2s.js
import { mC } from "../vendor/aws-sdk/chunk-d15f3977.js";
import { Ce } from "../vendor/react/chunk-0b0bf45d.js";
var n = Ce(mC()), e = typeof Buffer < "u" && Buffer.from ? function(r) {
  return Buffer.from(r, "utf8");
} : n.fromUtf8;
function Szt(r) {
  if (r instanceof Uint8Array) return r;
  if (typeof r === "string") return e(r);
  if (ArrayBuffer.isView(r)) return new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  return new Uint8Array(r);
}
function zhn(r) {
  if (typeof r === "string") return r.length === 0;
  return r.byteLength === 0;
}
function yKo(r) {
  return new Uint8Array([(r & 4278190080) >> 24, (r & 16711680) >> 16, (r & 65280) >> 8, r & 255]);
}
function _Ko(r) {
  if (!Uint32Array.from) {
    var t = new Uint32Array(r.length), f = 0;
    while (f < r.length) t[f] = r[f], f += 1;
    return t;
  }
  return Uint32Array.from(r);
}
export {
  Szt,
  _Ko,
  yKo,
  zhn
};
