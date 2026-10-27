// telemetry/tab-read-sep.s134.js — Claude Code 2.1.310 模块 chunk-s134n34s.js
import { Wn } from "../settings/global-config-and-gates.27xj.js";
import { i } from "../shared/environment.9a41.js";
import { VTt } from "../fs/utf-8.fmbx.js";
import { Lo } from "../agents/chunk-j350yvzv.js";
import { qe, cSe } from "../shared/allow-large.djgw.js";
var lKo = 25e3, Pei = ` To read it anyway, up to what still fits in your context, call ${qe} again with ${cSe}: true — only if you genuinely need all of it or the user asked for the whole file.`, dKo = ` Even with ${cSe}, this is more than fits in the context you have left this turn (other large reads in the same turn share that room).`, Iei = ` ${cSe} is not available where this read runs; read it in parts with offset and limit.`, cKo = 128;
class pue extends Error {
  tokenCount;
  maxTokens;
  constructor(e, t, r = "") {
    super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.${r}`);
    this.tokenCount = e;
    this.maxTokens = t;
    this.name = "MaxFileReadTokenExceededError";
  }
}
var n = /* @__PURE__ */ new WeakMap();
function uKo(e, t) {
  n.set(e, t);
}
function Ker(e) {
  return n.get(e);
}
function o() {
  let e = i.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;
  if (e !== void 0 && e > 0) return e;
  return;
}
function Cj() {
  let e = Lo();
  return e.defaultFileReadingLimits ??= { maxSizeBytes: VTt, maxTokens: o() ?? lKo }, e.defaultFileReadingLimits;
}
function snt() {
  return Wn("tengu_tab_read_sep", false);
}
export {
  Cj,
  Iei,
  Ker,
  Pei,
  cKo,
  dKo,
  lKo,
  pue,
  snt,
  uKo
};
