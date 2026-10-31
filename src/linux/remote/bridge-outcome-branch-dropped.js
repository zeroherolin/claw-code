// linux/remote/bridge-outcome-branch-dropped.js — Claude Code 2.1.310（linux）模块 chunk-mrftwq54.js
import { L, Y_, nt, U, es } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { R, N, d, Pp } from "../telemetry/anthropic-workspace-id.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { jy, Cp, _, t } from "../fs/gitlab-runner-authentication-token.js";
import { ip, xw } from "../shared/chunk-0542336f.js";
import { nai } from "../mcp/claude-browser.js";
import { Xl, l } from "../artifacts/cowritten-artifact-html.js";
import { tf } from "../shared/chunk-b5845da6.js";
import { g, m, f, fo } from "../telemetry/chunk-9d6962d2.js";
import { Vi } from "../mcp/allowed-warning.js";
import { BZo, mo, Fy, Tkn, pf, Yl, rr } from "../artifacts/chunk-a6c9d164.js";
import { Ht } from "../fs/content-encoding.js";
import { rn } from "../auth/oauth-2025-04-20.js";
import { oC, a_, V_e, q_e, P9, Doe, p4r, Re, ue } from "../settings/global-config-and-gates.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Ae } from "../models/total-tokens-reminder.js";
import { Ii } from "../shell/invalid-type.js";
import { Ro } from "../settings/workflow-launch-exec.js";
import { pe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { QP } from "../telemetry/service-error-detail-not-plain.js";
import { Jzo } from "../git/git-repository.js";
import { uAe } from "../shared/chunk-b6642a2b.js";
import { AZe } from "../shared/deferred-tools-delta.js";
import { pAe } from "../tasks/bridge-ingress-demoted.js";
import { k7 } from "../context/other-server.js";
import { mn } from "../shared/chunk-62f8d501.js";
import { H } from "../shared/chunk-7027e6d5.js";
import { o, M, T, u, $u } from "../vendor/zod/string-format.js";
import { en } from "../shared/chunk-4ac8e96b.js";
import { z } from "../shared/chunk-be29de51.js";
class SZe extends Error {
  constructor(e, n) {
    let r, s = e[0];
    if (e.length === 1 && s) r = `Image base64 size (${en(s.size)}) exceeds API limit (${en(n)}). Please resize the image before sending.`;
    else r = `${e.length} images exceed the API limit (${en(n)}): ` + e.map((i) => `Image ${i.index}: ${en(i.size)}`).join(", ") + ". Please resize these images before sending.";
    super(r);
    this.name = "ImageSizeError";
  }
}
function wZe(e) {
  if (!H(e) || !("source" in e)) return false;
  let n = e.source;
  if (!H(n)) return false;
  if (!("type" in n) || n.type !== "base64") return false;
  return "data" in n && typeof n.data === "string";
}
function H1t(e) {
  if (typeof e !== "object" || e === null) return false;
  if (!("type" in e) || e.type !== "image") return false;
  return wZe(e);
}
function Ge(e) {
  if (typeof e !== "object" || e === null) return false;
  if (!("type" in e) || e.type !== "tool_result") return false;
  return "content" in e && Array.isArray(e.content);
}
function me(e, n, r, s) {
  let i = e.source.data.length;
  if (i > r) a("tengu_image_api_validation_failed", { base64_size_bytes: i, max_bytes: r }), s.push({ index: n, size: i });
}
function y8n(e, n) {
  let r = [], s = 0;
  for (let i of e) {
    if (typeof i !== "object" || i === null) continue;
    if (!("type" in i) || i.type !== "user") continue;
    if (!("message" in i) || typeof i.message !== "object" || i.message === null) continue;
    let y = i.message;
    if (!("content" in y) || !Array.isArray(y.content)) continue;
    for (let S of y.content) {
      if (H1t(S)) {
        me(S, ++s, n, r);
        continue;
      }
      if (Ge(S)) {
        for (let E of S.content) if (H1t(E)) me(E, ++s, n, r);
      }
    }
  }
  if (r.length > 0) throw new SZe(r, n);
}
import { types as He } from "util";
var _e = () => false;
function K4s(e) {
  _e = e;
}
function _8n() {
  try {
    return _e();
  } catch (e) {
    return l(e), false;
  }
}
var Y = "[account memory text removed from this conversation]", he = { top: { plain: /* @__PURE__ */ new Set(["path", "path_prefix", "cursor", "include_preview", "if_version", "source_item", "name"]), text: /* @__PURE__ */ new Set(["old_str", "new_str", "content", "instruction", "query"]) }, op: { plain: /* @__PURE__ */ new Set(["op", "path", "if_version"]), text: /* @__PURE__ */ new Set(["old_str", "new_str", "content"]) } }, $e = /* @__PURE__ */ new Set(["path", "path_prefix", "cursor", "source_item", "name"]);
function X(e, n) {
  return k7(e, n, "history");
}
var ye = /* @__PURE__ */ new WeakMap();
function Se(e) {
  return e.type === "attachment" && e.attachment.type === "cowork_memory_context" && e.attachment.content === null && e.attachment.anchor !== true;
}
function OFo(e, n = _8n(), r) {
  let s = e.findLastIndex(Se), i = n ? e.length : s;
  if (i < 0) return { messages: e, epoch: void 0 };
  let y = Ee(e), S = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set(), b = [], w = 0, I, v = (h) => {
    w++, I = h.uuid;
  };
  return e.forEach((h, x) => {
    if (x >= i || x === s) {
      b.push(h);
      return;
    }
    if (h.type === "attachment" && (h.attachment.type === "cowork_memory_context" && h.attachment.anchor !== true || h.attachment.type === "account_memory_recall")) {
      v(h);
      return;
    }
    if (h.type === "assistant" && Array.isArray(h.message.content)) {
      let A = /* @__PURE__ */ new Map();
      for (let P of h.message.content) {
        if (P.type !== "tool_use" || !X(P.name, r)) continue;
        let F = gfn(P.input), W = y.has(P.id);
        if (W && F === P.input) continue;
        A.set(P.id, { input: F, blankResult: !W });
      }
      if (A.size === 0) {
        b.push(h);
        return;
      }
      for (let [P, { blankResult: F }] of A) if (E.add(P), F) S.add(P);
      v(h), b.push({ ...h, ...mn(h.wireToolInputs) && { wireToolInputs: Ye(h.wireToolInputs, E) }, message: { ...h.message, content: h.message.content.map((P) => P.type === "tool_use" && A.has(P.id) ? { ...P, input: A.get(P.id).input } : P) } });
      return;
    }
    if (h.type === "user" && S.size > 0 && Array.isArray(h.message.content) && h.message.content.some((A) => A.type === "tool_result" && S.has(A.tool_use_id))) {
      v(h), b.push({ ...h, message: { ...h.message, content: h.message.content.map((A) => A.type === "tool_result" && S.has(A.tool_use_id) ? { ...A, content: Y } : A) } });
      return;
    }
    b.push(h);
  }), w === 0 ? { messages: e, epoch: void 0 } : { messages: b, epoch: `${w}:${I}` };
}
function V4s(e, n) {
  let r = Ee(e);
  for (let s = e.length - 1; s >= 0; s--) {
    let i = e[s];
    if (Se(i)) return false;
    if (i.type === "assistant" && Array.isArray(i.message.content) && i.message.content.some((y) => y.type === "tool_use" && X(y.name, n) && (!r.has(y.id) || gfn(y.input) !== y.input))) return true;
  }
  return false;
}
function MFo(e) {
  let n = [], r = (s, i) => {
    if (typeof s !== "object" || s === null || tf(s)) return;
    for (let [y, S] of Object.entries(s)) if (he[i].text.has(y) && typeof S === "string") n.push(S);
    else if (i === "top" && y === "ops" && Array.isArray(S)) for (let E of S) r(E, "op");
  };
  return r(e, "top"), n;
}
function q4s(e, n) {
  let r = [], s = /* @__PURE__ */ new Set();
  for (let i of e) if (i.type === "assistant" && Array.isArray(i.message.content)) {
    for (let y of i.message.content) if (y.type === "tool_use" && X(y.name, n)) s.add(y.id), r.push(...MFo(y.input));
  } else if (i.type === "user" && s.size > 0 && Array.isArray(i.message.content)) for (let y of i.message.content) {
    if (y.type !== "tool_result" || !s.has(y.tool_use_id)) continue;
    if (typeof y.content === "string") r.push(y.content);
    else if (Array.isArray(y.content)) {
      for (let S of y.content) if (S.type === "text") r.push(S.text);
    }
  }
  return r;
}
function Ee(e) {
  let n = /* @__PURE__ */ new Set();
  for (let r of e) {
    if (r.type !== "user" || r.toolDenialKind === void 0 || r.toolResultRemedy?.kind !== "memory_paused" || !Array.isArray(r.message.content)) continue;
    let s = r.message.content.filter((i) => i.type === "tool_result");
    if (s.length === 1) n.add(s[0].tool_use_id);
  }
  return n;
}
function L1t(e, n, r) {
  return OFo(e, n, r).messages;
}
var Ve = 32, We = Object.freeze({ content: Y });
function B(e) {
  return e === Y ? We : Object.freeze({ content: e });
}
function gfn(e, n = 0, r = Y, s = false) {
  if (typeof e === "function") return B(r);
  if (typeof e === "string" || He.isStringObject(e)) return n === 0 ? B(r) : r;
  if (typeof e !== "object" || e === null) return e;
  if (tf(e) || n > 2) return B(r);
  let i = xw(e);
  if (i === ip) return B(r);
  if (i !== void 0) return i.map((h) => gfn(h, n + 1, r, s));
  let y;
  try {
    y = Object.keys(e);
  } catch {
    return B(r);
  }
  if (y.length > Ve) return B(r);
  let S = Object.getOwnPropertyNames(e).length !== y.length || Object.getOwnPropertySymbols(e).length > 0, E = n === 0 ? "top" : "op", b = [], w = false;
  for (let h of y) {
    let x = Object.getOwnPropertyDescriptor(e, h);
    if (x === void 0 || !("value" in x) || typeof x.value === "function") {
      w = true;
      continue;
    }
    let A = qe(E, h, x.value, n, r, s);
    if (A === we) {
      w = true;
      continue;
    }
    if (A instanceof Q) {
      w ||= !A.pristine, b.push([h, A.strings]);
      continue;
    }
    w ||= A !== x.value, b.push([h, A]);
  }
  let I = Object.getPrototypeOf(e);
  if (n === 0 && !w && !S && (I === Object.prototype || I === null) && Object.getOwnPropertyNames(e).length === y.length && Object.getOwnPropertySymbols(e).length === 0) return e;
  let v = {};
  for (let [h, x] of b) Object.defineProperty(v, h, { value: x, enumerable: true, writable: true, configurable: true });
  return v;
}
var ze = /* @__PURE__ */ new Set(["append", "str_replace", "delete"]), we = Symbol("dropped");
class Q {
  strings;
  pristine;
  constructor(e, n) {
    this.strings = e;
    this.pristine = n;
  }
}
function qe(e, n, r, s, i, y) {
  let S = he[e];
  if (S.plain.has(n)) {
    let E = y && $e.has(n);
    if (n === "op" ? typeof r === "string" && ze.has(r) : r === null || typeof r === "boolean" || n !== "include_preview" && (typeof r === "string" || typeof r === "number")) return E && (typeof r === "string" || typeof r === "number") ? i : r;
    if (e === "top" && n === "path" && typeof r === "object" && r !== null) return Ke(r, i, E);
    return i;
  }
  if (S.text.has(n)) return i;
  if (e === "top" && n === "ops") return !tf(r) && Array.isArray(r) ? gfn(r, s + 1, i, y) : i;
  return we;
}
function Ke(e, n, r) {
  if (tf(e)) return n;
  let s = Object.getOwnPropertyNames(e), i = Object.getPrototypeOf(e) === Array.prototype && Object.getOwnPropertySymbols(e).length === 0 && Array.isArray(e) && s.length === e.length + 1 && s.every((E) => {
    if (E === "length") return true;
    let b = Object.getOwnPropertyDescriptor(e, E);
    return /^(?:0|[1-9]\d*)$/u.test(E) && Number(E) < e.length && b !== void 0 && "value" in b;
  }), y = xw(e);
  if (!Array.isArray(y)) return n;
  let S = [];
  for (let E of y) {
    if (typeof E !== "string") return n;
    S.push(r ? n : E);
  }
  return new Q(S, i && !r);
}
function Ye(e, n) {
  let r = _(Object.keys(e).filter((y) => n.has(y)).sort()), s = ye.get(e);
  if (s === void 0) s = /* @__PURE__ */ new Map(), ye.set(e, s);
  let i = s.get(r);
  if (i === void 0) i = Ii(e, (y, S) => n.has(S)), s.set(r, i);
  return i;
}
var Je = 64;
function $4s(e) {
  let n = O();
  if (n.sessionId !== void 0 && n.sessionId !== e.sessionId) n.held.clear(), n.settled.length = 0;
  n.sessionId = e.sessionId, n.reporter = e;
}
function PFo(e) {
  let n = O();
  if (n.reporter?.owner === e) n.reporter = void 0;
}
function F4s(e, n) {
  let r = e.toLowerCase(), { held: s, settled: i } = O();
  if (!s.has(r)) s.set(r, { phase: "claimed", withheld: false });
  let y = i.indexOf(r);
  if (y !== -1) i.splice(y, 1);
  let S;
  try {
    S = n();
  } catch (E) {
    throw Z(r), E;
  }
  if (S instanceof Promise) return S.finally(() => Z(r));
  return Z(r), S;
}
function U4s(e) {
  let n = O().held.get(e.toLowerCase());
  if (n === void 0) return false;
  return n.withheld = true, true;
}
function Xe(e) {
  return O().held.has(e.toLowerCase());
}
function Qe(e) {
  return O().settled.includes(e.toLowerCase());
}
function Ze(e) {
  return e.payload.type === "user" && typeof e.processing_at === "string";
}
function B4s(e) {
  let n = false;
  if (Xe(e.event_id)) n = "redelivered_in_flight";
  else if (Qe(e.event_id)) n = "redelivered_settled";
  else if (Ze(e)) n = "redelivered_after_start";
  if (n !== false) f("bridge_read_receipt", n);
  return n;
}
function IFo(e) {
  D("queued_note_threw", () => {
    let n = e === void 0 ? void 0 : O().held.get(e.toLowerCase());
    if (n !== void 0) n.phase = "queued";
  });
}
function Z(e) {
  D("settle_threw", () => {
    let n = e.toLowerCase(), r = O().held.get(n);
    if (r?.phase === "claimed") ee(n, r);
  });
}
function Te(e) {
  D("settle_threw", () => {
    let n = e.toLowerCase(), r = O().held.get(n);
    if (r !== void 0 && r.phase !== "read") ee(n, r);
  });
}
function j4s(e) {
  for (let { uuid: n } of e) if (n !== void 0) Te(n);
}
function bZe(e) {
  D("read_note_threw", () => {
    let { held: n } = O();
    if (n.size === 0) return;
    for (let { uuid: r } of e) {
      let s = r?.toLowerCase(), i = s === void 0 ? void 0 : n.get(s);
      if (s === void 0 || i === void 0 || i.phase === "read") continue;
      if (i.phase = "read", i.withheld) J(s, "processing"), g("bridge_read_receipt");
    }
  });
}
function W4s() {
  D("settle_threw", () => {
    for (let [e, n] of O().held) if (n.phase === "read") ee(e, n);
  });
}
function G4s() {
  D("resend_threw", () => {
    let { held: e, settled: n } = O();
    for (let [r, s] of e) if (s.phase === "read" && s.withheld) J(r, "processing");
    for (let r of n) J(r, "processed");
  });
}
function z4s(e) {
  pAe(e, (n, r) => {
    if (r === "cancelled" || r === "refused") Te(n);
  });
}
function O() {
  return es(BZo).inboundReadReceipts;
}
function ee(e, n) {
  let { held: r, settled: s } = O();
  if (r.delete(e), !n.withheld) return;
  if (s.push(e), s.length > Je) s.shift();
  J(e, "processed");
}
function J(e, n) {
  D("report_threw", () => {
    O().reporter?.report(e, n);
  });
}
function D(e, n) {
  try {
    n();
  } catch (r) {
    m("bridge_read_receipt", e), l(r);
  }
}
class vZe {
  #e;
  constructor(e) {
    this.#e = e;
  }
  static of(e) {
    return new vZe(JSON.stringify(e));
  }
  toJSON() {
    return JSON.parse(this.#e);
  }
}
var et = /* @__PURE__ */ new Set(["content", "_meta", "structuredContent", "structuredContentOmitted", "resourceLinks"]);
function DFo(e, n) {
  if (n.media !== true) return e;
  if (e instanceof vZe) {
    let s = e.toJSON(), i = DFo(s, n);
    return i === s ? e : vZe.of(i);
  }
  if (!H(e)) return e;
  let r = e.file;
  if (H(r) && (e.type === "image" || e.type === "pdf") && typeof r.base64 === "string" && r.base64 !== "") return { ...e, file: { ...r, base64: "" } };
  return e;
}
function Y4s(e, n, r) {
  if (r.mcp_images !== true) return e;
  let s = (S) => be(S, n, (E, b) => E === b ? "" : E);
  if (!(e instanceof vZe)) return s(e);
  let i = e.toJSON(), y = s(i);
  return y === i ? e : vZe.of(y);
}
function hfn(e, n) {
  return be(e, n, (r, s) => r === "" ? s : r);
}
function yfn(e) {
  if (!H(e) || e.type !== "user") return e;
  let n = hfn(e.toolUseResult, e.message);
  return n === e.toolUseResult ? e : { ...e, toolUseResult: n };
}
function be(e, n, r) {
  let s = H(e) && Object.keys(e).every((I) => et.has(I)), i = s ? e.content : e, y = H(n) ? n.content : void 0;
  if (!Array.isArray(i) || !Array.isArray(y)) return e;
  let [S, ...E] = y.filter((I) => H(I) && I.type === "tool_result");
  if (E.length > 0 || !AZe(S) || S.content.length !== i.length) return e;
  let b = false, w = i.map((I, v) => {
    let h = S.content[v];
    if (!H1t(I) || !H1t(h)) return I;
    let x = r(I.source.data, h.source.data);
    if (x === I.source.data) return I;
    return b = true, { ...I, source: { ...I.source, data: x } };
  });
  if (!b) return e;
  return s ? { ...e, content: w } : w;
}
var tt = /* @__PURE__ */ new Set(["user", "assistant", "attachment", "system"]);
function _Br(e) {
  return H(e) && typeof e.type === "string" && tt.has(e.type);
}
var Ie = ["cwd", "gitBranch", "version", "userType", "entrypoint", "promptId"], ot = [...Ie, "requestId"];
function rt(e) {
  let n = e.message;
  return e.type === "assistant" && H(n) && typeof n.id === "string" && n.id.length > 0;
}
function X4s(e) {
  if (!_Br(e)) return e;
  let n = rt(e) ? ot : Ie, r;
  for (let s of n) if (s in e) r ??= { ...e }, delete r[s];
  return r ?? e;
}
function b8n(e, n) {
  if (!_Br(e)) return e;
  let r;
  for (let [s, i] of Object.entries(n)) if (i !== void 0 && e[s] === void 0) r ??= { ...e }, r[s] = i;
  return r ?? e;
}
function S8n(e) {
  let n = [], r = 0;
  while (r < e.length) {
    let s = e[r];
    if (s.type !== "assistant" || s.resumedFromIncompleteThinking !== true) {
      r++;
      continue;
    }
    let i = r, y = r - 1;
    for (; ; ) {
      while (y >= 0 && Y_(e[y])) y--;
      let w = y >= 0 ? e[y] : void 0;
      if (w?.type !== "assistant") break;
      let I = w.message.id, v = y;
      while (y >= 0) {
        let x = e[y];
        if (x.type === "assistant") if (x.message.id === I) v = y, y--;
        else break;
        else if (Y_(x)) y--;
        else {
          let A = y;
          while (A >= 0 && (e[A].type !== "assistant" || Y_(e[A]))) A--;
          let P = A >= 0 ? e[A] : void 0;
          if (P?.type === "assistant" && P.message.id === I) v = A, y = A - 1;
          else break;
        }
      }
      i = v;
      let h = e[v];
      if (h.type !== "assistant" || h.resumedFromIncompleteThinking !== true) break;
    }
    let S = r, E = s.message.id, b = r + 1;
    for (; ; ) {
      let w = b;
      while (w < e.length && Y_(e[w])) w++;
      let I = w < e.length ? e[w] : void 0;
      if (I?.type === "assistant") {
        if (I.message.id === E) {
          S = w, b = w + 1;
          continue;
        }
        if (I.resumedFromIncompleteThinking === true) {
          S = w, E = I.message.id, b = w + 1;
          continue;
        }
        break;
      }
      let v = w;
      while (v < e.length && (e[v].type !== "assistant" || Y_(e[v]))) v++;
      let h = v < e.length ? e[v] : void 0;
      if (h?.type === "assistant" && h.message.id === E) {
        S = v, b = v + 1;
        continue;
      }
      break;
    }
    n.push({ fromIdx: i, toIdx: S }), r = b > r ? b : r + 1;
  }
  return n;
}
var qze = "effort_medium_nudge", N1t = "auto_default_nudge", A8n = "ultraplan_choice", $1t = "cost_threshold", qQ = "autocompact_offer", _fn = "auto_mode_server_fallback", F1t = "resume_return", qde = "enum_prompt", YQ = "cold_resume_quota", OHe = "newer_model_offer", C8n = "fullscreen_upsell";
var HFo = null, U1t = null;
function Sye(e) {
  return e?.kind === "self_hosted_pool";
}
function z1(e) {
  return e.kind === "self_hosted_pool" ? e.pool_id : e.environment_id;
}
function bre(e) {
  return e !== void 0 && e.startsWith("ccpool_");
}
var st = ["anthropic_cloud", "bridge", "snap", "ccs"];
function SBr(e) {
  let n = (s) => s !== void 0 && s !== null && s !== "";
  if (n(e.self_hosted_runner_pool_id)) return "pool";
  let r = e.environment_kind;
  if (!n(r) || st.includes(r)) return null;
  return r === "byoc" ? "byoc" : "unlisted_kind";
}
function M8n(e) {
  return SBr(e) !== null;
}
function kZe(e, n) {
  return e.find(n);
}
var it = ["policySettings", "flagSettings", "userSettings"];
function cAe() {
  let e, n = Ro();
  for (let r = n.length - 1; r >= 0; r--) {
    let s = n[r], i = pe(s)?.remote?.defaultEnvironmentId;
    if (i === void 0) continue;
    if (bre(i) && !it.includes(s)) {
      e ??= { id: i, source: s };
      continue;
    }
    return { id: i, source: s, ignoredUntrustedPool: e?.id === i ? void 0 : e };
  }
  return { id: void 0, source: void 0, ignoredUntrustedPool: e };
}
function Sfn(e) {
  return e.startsWith("ccpool_") ? { self_hosted_runner_pool_id: e } : { environment_id: e };
}
var at = p(() => u({ environments: T($u((e) => typeof e === "object" && e !== null && !Array.isArray(e))), has_more: M().optional().catch(void 0), last_id: o().nullable().optional().catch(void 0) })), dt = 100, te = 10;
function ct(e) {
  if (typeof e === "string" && e.trim().length === 0) return new R("The cloud environments service returned an empty response (HTTP 200 with no body). This is usually temporary — try again in a moment.", "fetchEnvironments: HTTP 200 with an empty body");
  if (typeof e === "string") return new R("The cloud environments service returned a response in an unexpected format (HTTP 200 with a non-JSON body). This is usually temporary — try again in a moment.", "fetchEnvironments: HTTP 200 with a non-JSON body");
  return new R("The cloud environments service returned a response in an unexpected format (HTTP 200 without a usable environments list). This is usually temporary — try again in a moment.", "fetchEnvironments: HTTP 200 JSON body without a valid environments array");
}
async function hU(e, n, r) {
  return fo("teleport_environments_list", async () => {
    if (Ae() !== "firstParty") throw Error("Remote environments are only available on the first-party Anthropic API provider.");
    let i = a_(), y = e ?? await P9(i);
    if (!y) throw new R(V_e(), "cloud sessions need a sign-in");
    let S = await Doe(i);
    if (!S) throw Error("Unable to get organization UUID");
    let E = `${rn().BASE_API_URL}/v1/environment_providers`;
    try {
      let b = [], w;
      for (let v = 0; v < te; v++) {
        let h = await p4r(() => Ht.get(E, { headers: { ...oC(q_e(i) ?? y), "x-organization-uuid": S }, params: { limit: dt, ...w !== void 0 && { after_id: w } }, timeout: 15e3 }), { credentials: r });
        if (h.status !== 200) throw Error(`Failed to fetch environments: HTTP ${h.status}`);
        let x = at().safeParse(h.data);
        if (!x.success) throw ct(h.data);
        b.push(...x.data.environments);
        let A = x.data.last_id;
        if (x.data.has_more !== true || x.data.environments.length === 0 || typeof A !== "string") break;
        if (v === te - 1) t(`fetchEnvironments: stopped after ${te} pages (${b.length} environments) although the server reports more; the rest are not listed`, { level: "warn" });
        w = A;
      }
      let I = b.length > 0;
      if (ue().hasRemoteEnvironment !== I) await Re((v) => v.hasRemoteEnvironment === I ? v : { ...v, hasRemoteEnvironment: I }, n);
      return b;
    } catch (b) {
      let w = N(b);
      if (Pp(b)) t(`fetchEnvironments failed: ${w.message}`, { level: "error" });
      else l(w);
      throw w;
    }
  }, ut);
}
function ut(e) {
  return e instanceof R ? "malformed_response" : "error";
}
async function TZe(e = "Default", n, r) {
  return fo("teleport_default_environment_create", async () => {
    if (Ae() !== "firstParty") throw Error("Remote environments are only available on the first-party Anthropic API provider.");
    let s = a_(), i = r ?? await P9(s);
    if (!i) throw Error("No access token available");
    let y = await Doe(s);
    if (!y) throw Error("Unable to get organization UUID");
    let S = `${rn().BASE_API_URL}/v1/environment_providers/cloud/create`;
    return (await Ht.post(S, { name: e, kind: "anthropic_cloud", description: "Default - trusted network access", config: { environment_type: "anthropic", cwd: "/home/user", init_script: null, environment: {}, languages: [{ name: "python", version: "3.11" }, { name: "node", version: "20" }], network_config: { allowed_hosts: [], allow_default_hosts: true } } }, { headers: { ...oC(i), "anthropic-beta": "ccr-byoc-2025-07-29", "x-organization-uuid": y }, timeout: 15e3, signal: n })).data;
  });
}
async function D8n(e, n) {
  if (Ae() !== "firstParty") return [];
  let r = a_(), s = e ?? await P9(r);
  if (!s) return [];
  let i = await Doe(r);
  if (!i) return [];
  let y = `${rn().BASE_API_URL}/v1/code/runners/self-hosted/pools`;
  try {
    let S = await p4r(() => Ht.get(y, { headers: { ...oC(q_e(r) ?? s), "anthropic-beta": "ccr-byoc-2025-07-29", "x-organization-uuid": i }, timeout: 15e3 }), { credentials: n });
    if (S.status !== 200) return t(`fetchSelfHostedPools: ${S.status} ${S.statusText}`, { level: "error" }), f("teleport_self_hosted_pool_list", "non_200"), [];
    return fo("teleport_self_hosted_pool_list", async () => (S.data.pools ?? []).map((E) => ({ kind: "self_hosted_pool", pool_id: E.pool_id, name: E.name, created_at: E.created_at, alive_runner_count: E.alive_runner_count ?? 0 })));
  } catch (S) {
    let E = N(S);
    if (Pp(S)) t(`fetchSelfHostedPools failed: ${E.message}`, { level: "error" }), f("teleport_self_hosted_pool_list", "api_error");
    else l(E), f("teleport_self_hosted_pool_list", "unexpected");
    return [];
  }
}
var lt = { refusal_fallback_prompt: "choose: retry on fallback model or edit prompt", auto_mode_server_fallback: "acknowledge the classifier billing notice (Enter continues in auto mode)", auto_mode_outside_reads: "choose: keep allowing reads outside the working directories, or block them" };
function R8n(e, n) {
  return e === qde && typeof n.source === "string" ? n.source : void 0;
}
var K_t = "dialog:mcp_elicitation";
function x8n(e, n, r, s) {
  return { tool_name: `dialog:${e}`, display_tool_name: "Claude needs your input", action_description: lt[e] ?? (e === qde && typeof n.title === "string" ? n.title : `Respond to the ${e} dialog to continue`), raw_command: void 0, tool_use_id: s ?? "", request_id: r, input: { dialog_kind: e, payload: n } };
}
import { randomUUID as ft } from "crypto";
function T8n(e, n, r, s) {
  if (Fy(n, "sessionId"), !s) return { url: `${e}/v1/sessions/${n}/events`, body: { events: r } };
  let i = Yl(n);
  return { url: `${e}/v1/code/sessions/${encodeURIComponent(i)}/events`, body: { events: r.map((y) => ({ payload: typeof y.uuid === "string" && y.uuid ? y : { ...y, uuid: ft() } })) } };
}
import { randomUUID as pt } from "crypto";
var nYs = "tengu_woven_harbor", P8n = "tengu_drifting_twilight", NFo = true, rYs = "tengu_buzzing_river";
var ve = 16;
function bBr(e, { ultraplan: n, isFromSettings: r = false } = {}) {
  return { type: "event", data: { type: "control_request", request_id: `set-mode-${pt()}`, request: { subtype: "set_permission_mode", mode: e, ultraplan: n, ...r && { from_settings: true } } } };
}
function $Fo(e) {
  return { envVars: Object.keys(e.environmentVariables ?? {}).length > 0, events: e.events.filter((n) => !Pe(n)).map(mt) };
}
var V = "<redacted>";
function ne(e) {
  if (!mn(e)) return;
  let { seed_bundle_file_id: n, environment_variables: r } = e;
  if (n === void 0 && r === void 0) return;
  return { ...e, ...n !== void 0 && { seed_bundle_file_id: V }, ...r !== void 0 && { environment_variables: mn(r) ? Object.fromEntries(Object.keys(r).map((s) => [s, V])) : V } };
}
function oYs(e) {
  let n = e.bind_attestation, r = ne(e), s = ne(e.session_context), i = ne(e.config);
  if (!r && !s && !i && n === void 0) return e;
  return { ...r ?? e, ...s && { session_context: s }, ...i && { config: i }, ...n !== void 0 && { bind_attestation: mn(n) ? { ...n, signature: V } : V } };
}
var gt = /* @__PURE__ */ new Set(["set_permission_mode", "set_mcp_permission_mode_override", "set_max_thinking_tokens", "mcp_toggle"]);
function xe(e) {
  let n = e.data.request;
  return e.data.type === "control_request" && typeof n?.subtype === "string" ? n.subtype : void 0;
}
function Pe(e) {
  if (e.data.type === "user") return true;
  let n = xe(e);
  return n !== void 0 && gt.has(n);
}
function mt(e) {
  return xe(e) ?? String(e.data.type);
}
function I8n(e) {
  let n = e.deviceBinding, r = n ? e.events.filter((y) => Pe(y) && !(e.deferFirstPrompt && y.data.type === "user")) : e.events;
  if (n && r.length > ve) throw new R(`session create allows at most ${ve} initial events, got ${r.length}`, "session create: too many initial events");
  let s = n ? {} : e.environmentVariables ?? {}, i = L([...e.disallowedTools ?? [], ...n ? nai : []]);
  return { ...e.title && { title: e.title }, ...e.worker, ...FFo(e.persistentVolume), events: r.map((y) => ({ payload: y.data })), ...e.tags && { tags: e.tags }, ...!n && e.sessionGroupingId && { session_grouping_id: e.sessionGroupingId }, ...!n && e.agentId && { agent_id: e.agentId }, ...Object.keys(s).length > 0 && { environment_variables: s }, ...n && { target_device_id: n.deviceUUID, bind_attestation: { kid: n.kid, signature: n.signature }, bind_attestation_issued_at: n.issuedAt, ...e.requestElevatedTier && { security_tier: "elevated" }, ...e.repositoriesTrusted && { repositories_trusted: true } }, config: { sources: e.sources.map(_t), outcomes: e.outcomes, ...e.model && { model: e.model }, ...e.cwd && { cwd: e.cwd }, ...e.effortLevel && { effort_level: e.effortLevel }, ...e.seedBundleFileId && { seed_bundle_file_id: e.seedBundleFileId }, ...e.reuseOutcomeBranches && { reuse_outcome_branches: true }, ...e.appendSystemPrompt && { append_system_prompt: e.appendSystemPrompt }, ...e.customSystemPrompt && { custom_system_prompt: e.customSystemPrompt }, ...e.appendSubagentSystemPrompt && { append_subagent_system_prompt: e.appendSubagentSystemPrompt }, ...e.fallbackModel && { fallback_model: e.fallbackModel }, ...e.maxTurns !== void 0 && { max_turns: e.maxTurns }, ...e.maxBudgetUsd !== void 0 && e.maxBudgetUsd > 0 && { max_budget_usd: e.maxBudgetUsd }, ...e.allowedTools && e.allowedTools.length > 0 && { allowed_tools: e.allowedTools }, ...e.outputSchema && { output_schema: e.outputSchema }, ...!n && e.correlationId && { correlation_id: e.correlationId }, ...i.length > 0 && { disallowed_tools: i }, ...e.builtinTools && e.builtinTools.length > 0 && { builtin_tools: [...e.builtinTools] } } };
}
function FFo(e) {
  return;
}
function O8n(e, n) {
  let r = e === "v1alpha2" ? n?.session : n;
  if (typeof r?.id !== "string" || r.id === "") return Cp("no_session_id");
  if (!Tkn(r.id)) return Cp("unusable_session_id");
  return jy({ ...r, title: typeof r.title === "string" ? Vi(r.title) : null });
}
function UFo(e, n) {
  return e.title || Vi(n);
}
function _t(e) {
  let { allow_unrestricted_git_push: n, ...r } = e;
  return r;
}
function BFo(e, n) {
  if (e === 401) return `${n || "Claude login not accepted"} · Run /login, then try again`;
  return;
}
function jFo(e, n) {
  if (n?.type === "not_found_error" && n.resource_type === "session_grouping") return `Project not found: ${e}. Check the id — a Project you don't have access to looks the same as one that doesn't exist.`;
  switch (n?.reason) {
    case "public_grouping_hosted_only":
      return `${e} is a public Project, and public Projects run on Anthropic-hosted infrastructure only. Drop --environment (and any self-hosted target), or use a private Project.`;
    case "feature_disabled":
      return "Projects are not available for your organization.";
    default:
      return;
  }
}
var LFo = "PostCompact [", EZe = "This session is being continued from a previous conversation that ran out of context. The summary below covers the earlier portion of the conversation.";
function Oe(e) {
  return e.startsWith(`<${Xl}>`) && e.includes(LFo);
}
function bfn(e) {
  if (typeof e === "string") return Oe(e);
  if (!Array.isArray(e) || e.length !== 1) return false;
  let n = e[0];
  return uAe(n) && Oe(n.text);
}
var w8n = "auto-mode-classifier-error.txt", v8n = "auto-mode-dump.", E8n = "auto-mode-env-edit-", k8n = "auto-mode-builtins-", J4s = "auto-mode-classifier-dump", Q4s = "auto-mode-classifier-system";
function Z4s(e) {
  if (typeof e !== "object" || e === null || !("type" in e)) return false;
  return e.type === "auto-mode-classifier-dump" || e.type === "auto-mode-classifier-system";
}
function sYs(e) {
  if (e.branchDropped && e.warnMessage) {
    if (a("tengu_bridge_outcome_branch_dropped", { reason: c(e.branchDropped) }), t(e.warnMessage, { level: "warn" }), e.branchDropped === "no_evidence") console.warn(e.warnMessage);
  }
  if (e.revisionGuessUsed) a("tengu_bridge_revision_guess_used", {});
}
var ke = { no_session_id: { debug: "No session ID in response", code: "bridge_session_create_bad_response" }, unusable_session_id: { debug: "Unusable session ID in response", code: "bridge_session_create_unusable_id" } };
async function WFo({ environmentId: e, title: n, gitRepoUrl: r, branch: s, defaultBranch: i, signal: y, baseUrl: S, getAccessToken: E, credentials: b, permissionMode: w, tags: I }) {
  let { getClaudeAIOAuthTokens: v, getClaudeAIOAuthTokensAsync: h } = await import("../auth/acquire-o-auth-refresh-lock.js"), { loginToHandOn: x } = await import("../auth/ask-launcher-host-login-identity-again.js"), { getOrganizationUUID: A } = await import("../auth/build-auth-url.js"), { getOauthConfig: P } = await import("../auth/all-o-auth-scopes.js"), { sessionsApiWire: F } = await import("./archive-remote-session.d709.js"), { getMainLoopModel: W } = await import("../context/ant-grants1-m-context.js"), { getOriginalCwd: De } = await import("../mcp/acquire-mcp-clients-accessor.js"), { default: Ne } = await import("../shared/is-axios-error.js"), { isCcrV2BridgeCreateEnabled: Me } = await import("./apply-remote-control-to-app-state.js"), q = Me() ? "v1alpha2" : "v1", k = { create_endpoint: c(q) }, { isFirstPartyProvider: Le } = await import("../ide/allowed-provider-label.js");
  if (!Le()) return t("[bridge] Session create skipped on non-firstParty provider"), G("bridge_session_create_3p_provider", k);
  let re = E?.() ?? (z() && b !== void 0 ? x(await h(b))?.accessToken : x(v())?.accessToken);
  if (!re) return t("[bridge] No access token for session creation"), G("bridge_session_create_no_token", k);
  let se = await A();
  if (!se) return t("[bridge] No org UUID for session creation"), G("bridge_session_create_no_org", k);
  let { sources: ie, outcomes: ae, report: Fe } = await Jzo(r, s, i), de = Sfn(e), ce = W(), le = De(), fe = w ? [bBr(w)] : [], je = q === "v1alpha2" ? I8n({ title: n, worker: de, events: fe, sources: ie, outcomes: ae, model: ce, cwd: le, reuseOutcomeBranches: true, tags: I?.length ? I : void 0 }) : { ...n !== void 0 && { title: n }, events: fe, session_context: { sources: ie, outcomes: ae, model: ce, cwd: le, reuse_outcome_branches: true }, ...de, source: "remote-control", ...I?.length && { tags: I } }, ge = F(q, S ?? P().BASE_API_URL, re), Be = { ...ge.headers, "x-organization-uuid": se }, j;
  try {
    j = await Ne.post(ge.url, je, { headers: Be, signal: y, validateStatus: (C) => C < 500 });
  } catch (C) {
    return t(`[bridge] Session creation request failed: ${d(C)}`), G("bridge_session_create_request_failed", k);
  }
  if (!(j.status === 200 || j.status === 201)) {
    let C = QP(j.data);
    return t(`[bridge] Session creation failed with status ${j.status}${C ? `: ${C}` : ""}`), G("bridge_session_create_http_error", k);
  }
  let K = O8n(q, j.data);
  if (!K.ok) return t(`[bridge] ${ke[K.error].debug}`), G(ke[K.error].code, k);
  return sYs(Fe), g("bridge_session_create", k), pf(K.value.id);
}
async function V_t(e, n) {
  return (await q_t(e, n)).session;
}
async function q_t(e, n) {
  let { getClaudeAIOAuthTokens: r, getClaudeAIOAuthTokensAsync: s } = await import("../auth/acquire-o-auth-refresh-lock.js"), { loginToHandOn: i } = await import("../auth/ask-launcher-host-login-identity-again.js"), { getOauthConfig: y } = await import("../auth/all-o-auth-scopes.js"), { getCodeSession: S } = await import("./archive-code-session.js"), { isCcrV2SessionCrudEnabled: E } = await import("./apply-remote-control-to-app-state.js"), { isFirstPartyProvider: b } = await import("../ide/allowed-provider-label.js");
  if (!b()) return m("bridge_session_get", "bridge_session_get_3p_provider"), { session: null, notFound: false };
  let w = n?.getAccessToken?.() ?? (z() && n?.credentials !== void 0 ? i(await s(n.credentials))?.accessToken : i(r())?.accessToken);
  if (!w) return t("[bridge] No access token for session fetch"), m("bridge_session_get", "bridge_session_get_no_token"), { session: null, notFound: false };
  let I = n?.useV2 ?? E(), v;
  if (!I) {
    let { getOrganizationUUID: x } = await import("../auth/build-auth-url.js");
    if (v = await x() ?? void 0, !v) return t("[bridge] No org UUID for session fetch"), m("bridge_session_get", "bridge_session_get_no_org"), { session: null, notFound: false };
  }
  let h = await S(n?.baseUrl ?? y().BASE_API_URL, w, e, 1e4, { useV2: I, orgUUID: v });
  if (typeof h !== "object") return m("bridge_session_get", h === "invalid" ? "bridge_session_get_invalid_id" : typeof h === "number" ? "bridge_session_get_http_error" : "bridge_session_get_request_failed"), { session: null, notFound: h === 404 };
  return g("bridge_session_get"), { session: { environment_id: h.environment_id, title: h.title, status: h.status, created_at: h.created_at, updated_at: h.updated_at, connection_status: "connection_status" in h && typeof h.connection_status === "string" ? h.connection_status : void 0, tags: h.tags }, notFound: false };
}
async function oe(e, n, r, s) {
  let { getClaudeAIOAuthTokens: i, getClaudeAIOAuthTokensAsync: y } = await import("../auth/acquire-o-auth-refresh-lock.js"), { loginToHandOn: S } = await import("../auth/ask-launcher-host-login-identity-again.js"), { getOauthConfig: E } = await import("../auth/all-o-auth-scopes.js"), { updateCodeSession: b } = await import("./archive-code-session.js"), { isCcrV2SessionCrudEnabled: w } = await import("./apply-remote-control-to-app-state.js"), I = s?.getAccessToken?.() ?? (z() && s?.credentials !== void 0 ? S(await y(s.credentials))?.accessToken : S(i())?.accessToken);
  if (!I) return t(`[bridge] No access token for session ${r} update`), "failed";
  let v = "client_metadata" in n || w(), h;
  if (!v) {
    let { getOrganizationUUID: A } = await import("../auth/build-auth-url.js");
    if (h = await A() ?? void 0, !h) return t(`[bridge] No org UUID for session ${r} update`), "failed";
  }
  t(`[bridge] Updating session ${r}: ${e}`);
  let x = await b(s?.baseUrl ?? E().BASE_API_URL, I, e, n, 1e4, { useV2: v, orgUUID: h });
  if (x === "invalid") return m("bridge_session_patch", "bridge_session_patch_invalid_id"), "rejected";
  else if (typeof x !== "number") return m("bridge_session_patch", "bridge_session_patch_request_failed"), "failed";
  else if (x === 200) return t(`[bridge] Session ${r} updated successfully`), g("bridge_session_patch"), "landed";
  else return f("bridge_session_patch", "bridge_session_patch_http_error"), "failed";
}
async function GFo(e, n, r) {
  return oe(e, { title: n }, "title", r);
}
async function hRi(e, n, r) {
  return hbi(e, { title: `Couldn't start — too many sessions are running · ${n}`, reason: "capacity" }, r);
}
async function hbi(e, n, r) {
  return oe(e, { title: n.title, client_metadata: { desktop_rc_refusal: { title: n.title, reason: n.reason } } }, "refusal", r);
}
var iYs = "color:";
async function zFo(e, n, r, s) {
  let i = n === "default", y = r.filter((E) => i || E !== n).map((E) => iYs + E), S = i ? void 0 : [iYs + n];
  await oe(e, { add_tags: S, remove_tags: y }, "color tag", s);
}
async function yRi(e, n, r) {
  return false;
}
function G(e, n) {
  return m("bridge_session_create", e, n), null;
}
function H8n(e) {
  let n = mo().teleportedSessionIds;
  if (n.add(rr(e)), n.size > 64) {
    let r = n.values().next().value;
    if (r !== void 0) n.delete(r);
  }
}
function XC(e) {
  return mo().teleportedSessionIds.has(rr(e));
}
function wBr(e) {
  mo().teleportedSessionIds.delete(rr(e));
}
class Ce {
  listener = void 0;
}
var Ue = new nt(() => new Ce());
function eYs(e, n) {
  try {
    return Ue.peek(e)?.listener?.(n)?.catch(l);
  } catch (r) {
    l(r);
    return;
  }
}
function tYs(e) {
  let n = Ue.of(U());
  return n.listener = e, () => {
    if (n.listener === e) n.listener = void 0;
  };
}
export {
  $1t,
  $4s,
  $Fo,
  A8n,
  B4s,
  BFo,
  C8n,
  D8n,
  DFo,
  E8n,
  EZe,
  F1t,
  F4s,
  FFo,
  G4s,
  GFo,
  H1t,
  H8n,
  HFo,
  I8n,
  IFo,
  J4s,
  K4s,
  K_t,
  L1t,
  LFo,
  M8n,
  MFo,
  N1t,
  NFo,
  O8n,
  OFo,
  OHe,
  P8n,
  PFo,
  Q4s,
  R8n,
  S8n,
  SBr,
  SZe,
  Sfn,
  Sye,
  T8n,
  TZe,
  U1t,
  U4s,
  UFo,
  V4s,
  V_t,
  W4s,
  WFo,
  X4s,
  XC,
  Y4s,
  YQ,
  Z4s,
  _8n,
  _Br,
  _fn,
  b8n,
  bBr,
  bZe,
  bfn,
  bre,
  cAe,
  eYs,
  gfn,
  hRi,
  hU,
  hbi,
  hfn,
  iYs,
  j4s,
  jFo,
  k8n,
  kZe,
  nYs,
  oYs,
  q4s,
  qQ,
  q_t,
  qde,
  qze,
  rYs,
  sYs,
  tYs,
  v8n,
  vZe,
  w8n,
  wBr,
  wZe,
  x8n,
  y8n,
  yRi,
  yfn,
  z1,
  z4s,
  zFo
};
