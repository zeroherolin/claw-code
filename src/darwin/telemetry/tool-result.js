// darwin/telemetry/tool-result.js — Claude Code 2.1.310（darwin）模块 chunk-v07vsc8c.js
import { $ui, xR } from "../git/utf-8.js";
import { Xe, k } from "../settings/global-config-and-gates.js";
import { xl, Te, Od, Qs, Ai } from "../models/total-tokens-reminder.js";
import { ES } from "../mcp/allowed-warning.js";
import { JS, pSt } from "./image-resize-fallback.js";
import { Ed } from "../shared/chunk-9134c1ac.js";
import { D } from "../shared/chunk-7027e6d5.js";
import { Ee } from "../shared/chunk-fee3c428.js";
function yyt(e) {
  return e === "now" || e === "next" || e === "later" ? e : void 0;
}
function K2e(e) {
  return e.type === "image" && e.content.length > 0;
}
function _yt(e) {
  return e.mode === "poll-event" || e.mode === "task-notification" || e.skipAttachments === true;
}
function p4n(e) {
  return e.findLast((t) => t.type === "user" || t.type === "assistant");
}
function sQe(e) {
  let t = (n) => n.type === "user" && Array.isArray(n.message.content) && n.message.content.length > 0 && n.message.content.every((i) => i.type === "tool_result"), o = e.filter((n) => n.type === "user" || n.type === "assistant"), r = o.length - 1, a = /* @__PURE__ */ new Set();
  while (r >= 0 && t(o[r])) {
    let n = o[r];
    if (n.type === "user" && Array.isArray(n.message.content)) {
      for (let i of n.message.content) if (i.type === "tool_result") a.add(i.tool_use_id);
    }
    r--;
  }
  for (; r >= 0 && o[r].type === "assistant"; r--) {
    let n = o[r];
    if (n.type === "assistant" && Array.isArray(n.message.content) && n.message.content.some((i) => i.type === "tool_use" && !a.has(i.id))) return true;
  }
  return false;
}
function Odn(e) {
  return e.findLast((t) => t.type === "assistant" && Array.isArray(t.message.content) && t.message.content.some((o) => o.type === "tool_use")) ?? e.at(-1);
}
var _ = 1568, H = { firstParty: 2e3, bedrock: 2e3, vertex: 2e3, foundry: 2e3, anthropicAws: 2e3, anthropicGoogleCloud: 2e3, mantle: 2e3, gateway: 2e3 };
function R(e) {
  return Qs() && k("tengu_mossy_gray", false) === true ? 1 / 0 : H[Od(e)];
}
function ld(e) {
  let t = w(), o = e ? Xe(e) : void 0, r = o ? xl(o)?.image_limits : void 0, a = void 0, n = R(e), i = n, l = Math.min(r?.maxWidth ?? xR.maxWidth, n), u = Math.min(r?.maxHeight ?? xR.maxHeight, n), s = Math.min(f(void 0, l), i), m = Math.min(f(void 0, u), i), c = r?.maxImageTokens, d = r?.maxBase64Size ?? t;
  if (c === void 0 && s === xR.maxWidth && m === xR.maxHeight && d === xR.maxBase64Size) return xR;
  return { maxWidth: s, maxHeight: m, maxImageTokens: c, rejectMaxWidth: Math.max(l, s), rejectMaxHeight: Math.max(u, m), maxBase64Size: d, targetRawSize: d * 3 / 4 };
}
function f(e, t) {
  return e === void 0 ? t : Math.max(_, e);
}
function w() {
  if (Te() === "firstParty" && Ai() && k("tengu_crimson_vector", false)) return $ui;
  return xR.maxBase64Size;
}
var f4n = 4194304;
var m4n = f4n;
import { randomUUID as L } from "crypto";
var y = 3;
function g(e, t) {
  if (e.bytes === void 0) return e;
  let o = e.bytes.length, r = Math.min(t + m4n, o), a = r < o ? r - (r - t) % y : r;
  return t > 0 && t >= o ? { deny: `offset ${t} is at or past the item's ${o} bytes` } : { type: e.type, mediaType: e.mediaType, base64: e.bytes.subarray(t, a).toString("base64"), size: o, ...a < o && { next: a } };
}
var tFr = Object.freeze({ deny: "no prompt.submit in flight carries an attachment under that id" });
function h() {
  let e = /* @__PURE__ */ new Map();
  return { hold: (t, o) => t.map((r) => {
    let a = `media_${L().replace(/-/g, "")}`;
    return e.set(a, ES(() => r.read(o))), { ...r.attachment, id: a };
  }), release: (t) => t.forEach((o) => e.delete(o.id ?? "")), read: async ({ id: t, offset: o }) => {
    let r = await e.get(t)?.();
    return r === void 0 || !e.has(t) ? tFr : g(r, o ?? 0);
  }, clear: () => e.clear() };
}
var nFr = Ee(h(), (e) => {
  e.clear();
});
function CSi(e, t, o) {
  let r = nFr.hold(e, t);
  return new Promise((a) => {
    a(o(r));
  }).finally(() => nFr.release(r));
}
var x = Object.freeze({ deny: "the image is not held inline: its block names a URL or a file" });
function b(e) {
  if (e.block.type === "text") return { unreadable: e.block.text };
  let { source: t } = e.block;
  return t.type === "base64" ? { type: "image", mediaType: t.media_type, bytes: Buffer.from(t.data, "base64") } : x;
}
var I = Object.freeze({ deny: "the document is not held as inline bytes: its block names a URL or a file, or nests other blocks" });
var M = "application/octet-stream";
function T(e) {
  let t = D(e) ? e : {}, { data: o, media_type: r } = t, a = t.type === "base64";
  return typeof o === "string" && (a || t.type === "text") ? { type: "document", mediaType: typeof r === "string" ? r : M, bytes: Buffer.from(o, a ? "base64" : "utf8") } : I;
}
var P = (e) => ({ attachment: { type: "document" }, read: async () => T(e.source) });
function v({ source: e }) {
  let t = Ed(e) ? e : void 0, o = t?.type === "base64" ? t.media_type : void 0;
  return { type: "image", mediaType: typeof o === "string" ? o : void 0 };
}
var A = (e) => ({ attachment: v(e), read: async (t) => b(await pSt(e, ld(t))) });
function S(e) {
  if (!Ed(e)) return [];
  return e.type === "image" ? [A(e)] : e.type === "document" ? [P(e)] : [];
}
var E = Object.freeze({ unreadable: "the pasted image is empty" });
var C = (e) => ({ attachment: { type: "image", mediaType: e.mediaType, filename: e.filename }, read: async (t) => K2e(e) ? b(await JS({ data: e.content, mediaType: e.mediaType, limits: ld(t) })) : E });
var aDo = (e, t) => [...typeof e === "string" ? [] : e.flatMap(S), ...Object.values(t ?? {}).filter((o) => o.type === "image").map(C)];
export {
  CSi,
  K2e,
  Odn,
  _yt,
  aDo,
  f4n,
  ld,
  m4n,
  nFr,
  p4n,
  sQe,
  tFr,
  yyt
};
