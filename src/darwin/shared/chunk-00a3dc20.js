// darwin/shared/chunk-00a3dc20.js — Claude Code 2.1.310（darwin）模块 chunk-adhras41.js
import { bA } from "../vendor/aws-sdk/chunk-d15f3977.js";
import { Ae } from "../vendor/react/chunk-0b0bf45d.js";
var n = Ae(bA()), e = typeof Buffer < "u" && Buffer.from ? function(r) {
  return Buffer.from(r, "utf8");
} : n.fromUtf8;
function OGt(r) {
  if (r instanceof Uint8Array) return r;
  if (typeof r === "string") return e(r);
  if (ArrayBuffer.isView(r)) return new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  return new Uint8Array(r);
}
function lyn(r) {
  if (typeof r === "string") return r.length === 0;
  return r.byteLength === 0;
}
function V6o(r) {
  return new Uint8Array([(r & 4278190080) >> 24, (r & 16711680) >> 16, (r & 65280) >> 8, r & 255]);
}
function K6o(r) {
  if (!Uint32Array.from) {
    var t = new Uint32Array(r.length), f = 0;
    while (f < r.length) t[f] = r[f], f += 1;
    return t;
  }
  return Uint32Array.from(r);
}
export {
  K6o,
  OGt,
  V6o,
  lyn
};
