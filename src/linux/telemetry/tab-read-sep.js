// linux/telemetry/tab-read-sep.js — Claude Code 2.1.310（linux）模块 chunk-9r0d28dm.js
import { Wn } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { NAt } from "../fs/utf-8.aa9a.js";
import { Lo } from "../agents/chunk-44729602.js";
import { qe, rbe } from "../shared/allow-large.js";
var MVo = 25e3, KZs = ` To read it anyway, up to what still fits in your context, call ${qe} again with ${rbe}: true — only if you genuinely need all of it or the user asked for the whole file.`, DVo = ` Even with ${rbe}, this is more than fits in the context you have left this turn (other large reads in the same turn share that room).`, VZs = ` ${rbe} is not available where this read runs; read it in parts with offset and limit.`, HVo = 128;
class sue extends Error {
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
function LVo(e, t) {
  n.set(e, t);
}
function xer(e) {
  return n.get(e);
}
function o() {
  let e = i.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;
  if (e !== void 0 && e > 0) return e;
  return;
}
function bj() {
  let e = Lo();
  return e.defaultFileReadingLimits ??= { maxSizeBytes: NAt, maxTokens: o() ?? MVo }, e.defaultFileReadingLimits;
}
function Qtt() {
  return Wn("tengu_tab_read_sep", false);
}
export {
  DVo,
  HVo,
  KZs,
  LVo,
  MVo,
  Qtt,
  VZs,
  bj,
  sue,
  xer
};
