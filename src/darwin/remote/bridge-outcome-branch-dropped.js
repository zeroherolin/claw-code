// darwin/remote/bridge-outcome-branch-dropped.js — Claude Code 2.1.310（darwin）模块 chunk-9kmspyfv.js
import { L, X_, nt, U, es } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { R, N, d, Pf } from "../telemetry/anthropic-workspace-id.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { dy, Af, _, t } from "../fs/gitlab-runner-authentication-token.js";
import { of, Pw } from "../shared/chunk-0542336f.js";
import { Uai } from "../mcp/claude-browser.js";
import { Xl, l } from "../artifacts/cowritten-artifact-html.js";
import { tp } from "../shared/chunk-b5845da6.js";
import { g, m, p, po } from "../telemetry/chunk-9d6962d2.js";
import { Ki } from "../mcp/allowed-warning.js";
import { yes, mo, By, Bkn, pp, Yl, rr } from "../artifacts/chunk-a6c9d164.js";
import { Dt } from "../fs/content-encoding.js";
import { rn } from "../auth/oauth-2025-04-20.js";
import { aA, d_, eSe, tSe, FY, Boe, Hqr, Re, ue } from "../settings/global-config-and-gates.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { Te } from "../models/total-tokens-reminder.js";
import { Ii } from "../shell/invalid-type.js";
import { Ro } from "../settings/workflow-launch-exec.js";
import { fe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { tI } from "../telemetry/service-error-detail-not-plain.js";
import { Czo } from "../git/git-repository.js";
import { fTe } from "../shared/chunk-b6642a2b.js";
import { MZe } from "../shared/deferred-tools-delta.js";
import { gTe } from "../tasks/bridge-ingress-demoted.js";
import { OQ } from "../context/other-server.js";
import { mn } from "../shared/chunk-62f8d501.js";
import { D } from "../shared/chunk-7027e6d5.js";
import { o, M, C, u, Eu } from "../vendor/zod/string-format.js";
import { en } from "../shared/chunk-4ac8e96b.js";
import { z } from "../shared/chunk-be29de51.js";
class AZe extends Error {
  constructor(e, n) {
    let r, s = e[0];
    if (e.length === 1 && s) r = `Image base64 size (${en(s.size)}) exceeds API limit (${en(n)}). Please resize the image before sending.`;
    else r = `${e.length} images exceed the API limit (${en(n)}): ` + e.map((i) => `Image ${i.index}: ${en(i.size)}`).join(", ") + ". Please resize these images before sending.";
    super(r);
    this.name = "ImageSizeError";
  }
}
function RZe(e) {
  if (!D(e) || !("source" in e)) return false;
  let n = e.source;
  if (!D(n)) return false;
  if (!("type" in n) || n.type !== "base64") return false;
  return "data" in n && typeof n.data === "string";
}
function zBt(e) {
  if (typeof e !== "object" || e === null) return false;
  if (!("type" in e) || e.type !== "image") return false;
  return RZe(e);
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
function O8n(e, n) {
  let r = [], s = 0;
  for (let i of e) {
    if (typeof i !== "object" || i === null) continue;
    if (!("type" in i) || i.type !== "user") continue;
    if (!("message" in i) || typeof i.message !== "object" || i.message === null) continue;
    let y = i.message;
    if (!("content" in y) || !Array.isArray(y.content)) continue;
    for (let S of y.content) {
      if (zBt(S)) {
        me(S, ++s, n, r);
        continue;
      }
      if (Ge(S)) {
        for (let E of S.content) if (zBt(E)) me(E, ++s, n, r);
      }
    }
  }
  if (r.length > 0) throw new AZe(r, n);
}
import { types as He } from "util";
var _e = () => false;
function v3s(e) {
  _e = e;
}
function M8n() {
  try {
    return _e();
  } catch (e) {
    return l(e), false;
  }
}
var Y = "[account memory text removed from this conversation]", he = { top: { plain: /* @__PURE__ */ new Set(["path", "path_prefix", "cursor", "include_preview", "if_version", "source_item", "name"]), text: /* @__PURE__ */ new Set(["old_str", "new_str", "content", "instruction", "query"]) }, op: { plain: /* @__PURE__ */ new Set(["op", "path", "if_version"]), text: /* @__PURE__ */ new Set(["old_str", "new_str", "content"]) } }, $e = /* @__PURE__ */ new Set(["path", "path_prefix", "cursor", "source_item", "name"]);
function X(e, n) {
  return OQ(e, n, "history");
}
var ye = /* @__PURE__ */ new WeakMap();
function Se(e) {
  return e.type === "attachment" && e.attachment.type === "cowork_memory_context" && e.attachment.content === null && e.attachment.anchor !== true;
}
function j$o(e, n = M8n(), r) {
  let s = e.findLastIndex(Se), i = n ? e.length : s;
  if (i < 0) return { messages: e, epoch: void 0 };
  let y = Ee(e), S = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set(), T = [], w = 0, b, I = (h) => {
    w++, b = h.uuid;
  };
  return e.forEach((h, A) => {
    if (A >= i || A === s) {
      T.push(h);
      return;
    }
    if (h.type === "attachment" && (h.attachment.type === "cowork_memory_context" && h.attachment.anchor !== true || h.attachment.type === "account_memory_recall")) {
      I(h);
      return;
    }
    if (h.type === "assistant" && Array.isArray(h.message.content)) {
      let v = /* @__PURE__ */ new Map();
      for (let x of h.message.content) {
        if (x.type !== "tool_use" || !X(x.name, r)) continue;
        let j = wpn(x.input), W = y.has(x.id);
        if (W && j === x.input) continue;
        v.set(x.id, { input: j, blankResult: !W });
      }
      if (v.size === 0) {
        T.push(h);
        return;
      }
      for (let [x, { blankResult: j }] of v) if (E.add(x), j) S.add(x);
      I(h), T.push({ ...h, ...mn(h.wireToolInputs) && { wireToolInputs: Ye(h.wireToolInputs, E) }, message: { ...h.message, content: h.message.content.map((x) => x.type === "tool_use" && v.has(x.id) ? { ...x, input: v.get(x.id).input } : x) } });
      return;
    }
    if (h.type === "user" && S.size > 0 && Array.isArray(h.message.content) && h.message.content.some((v) => v.type === "tool_result" && S.has(v.tool_use_id))) {
      I(h), T.push({ ...h, message: { ...h.message, content: h.message.content.map((v) => v.type === "tool_result" && S.has(v.tool_use_id) ? { ...v, content: Y } : v) } });
      return;
    }
    T.push(h);
  }), w === 0 ? { messages: e, epoch: void 0 } : { messages: T, epoch: `${w}:${b}` };
}
function k3s(e, n) {
  let r = Ee(e);
  for (let s = e.length - 1; s >= 0; s--) {
    let i = e[s];
    if (Se(i)) return false;
    if (i.type === "assistant" && Array.isArray(i.message.content) && i.message.content.some((y) => y.type === "tool_use" && X(y.name, n) && (!r.has(y.id) || wpn(y.input) !== y.input))) return true;
  }
  return false;
}
function W$o(e) {
  let n = [], r = (s, i) => {
    if (typeof s !== "object" || s === null || tp(s)) return;
    for (let [y, S] of Object.entries(s)) if (he[i].text.has(y) && typeof S === "string") n.push(S);
    else if (i === "top" && y === "ops" && Array.isArray(S)) for (let E of S) r(E, "op");
  };
  return r(e, "top"), n;
}
function C3s(e, n) {
  let r = [], s = /* @__PURE__ */ new Set();
  for (let i of e) if (i.type === "assistant" && Array.isArray(i.message.content)) {
    for (let y of i.message.content) if (y.type === "tool_use" && X(y.name, n)) s.add(y.id), r.push(...W$o(y.input));
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
function VBt(e, n, r) {
  return j$o(e, n, r).messages;
}
var Ve = 32, We = Object.freeze({ content: Y });
function G(e) {
  return e === Y ? We : Object.freeze({ content: e });
}
function wpn(e, n = 0, r = Y, s = false) {
  if (typeof e === "function") return G(r);
  if (typeof e === "string" || He.isStringObject(e)) return n === 0 ? G(r) : r;
  if (typeof e !== "object" || e === null) return e;
  if (tp(e) || n > 2) return G(r);
  let i = Pw(e);
  if (i === of) return G(r);
  if (i !== void 0) return i.map((h) => wpn(h, n + 1, r, s));
  let y;
  try {
    y = Object.keys(e);
  } catch {
    return G(r);
  }
  if (y.length > Ve) return G(r);
  let S = Object.getOwnPropertyNames(e).length !== y.length || Object.getOwnPropertySymbols(e).length > 0, E = n === 0 ? "top" : "op", T = [], w = false;
  for (let h of y) {
    let A = Object.getOwnPropertyDescriptor(e, h);
    if (A === void 0 || !("value" in A) || typeof A.value === "function") {
      w = true;
      continue;
    }
    let v = qe(E, h, A.value, n, r, s);
    if (v === we) {
      w = true;
      continue;
    }
    if (v instanceof Q) {
      w ||= !v.pristine, T.push([h, v.strings]);
      continue;
    }
    w ||= v !== A.value, T.push([h, v]);
  }
  let b = Object.getPrototypeOf(e);
  if (n === 0 && !w && !S && (b === Object.prototype || b === null) && Object.getOwnPropertyNames(e).length === y.length && Object.getOwnPropertySymbols(e).length === 0) return e;
  let I = {};
  for (let [h, A] of T) Object.defineProperty(I, h, { value: A, enumerable: true, writable: true, configurable: true });
  return I;
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
  if (e === "top" && n === "ops") return !tp(r) && Array.isArray(r) ? wpn(r, s + 1, i, y) : i;
  return we;
}
function Ke(e, n, r) {
  if (tp(e)) return n;
  let s = Object.getOwnPropertyNames(e), i = Object.getPrototypeOf(e) === Array.prototype && Object.getOwnPropertySymbols(e).length === 0 && Array.isArray(e) && s.length === e.length + 1 && s.every((E) => {
    if (E === "length") return true;
    let T = Object.getOwnPropertyDescriptor(e, E);
    return /^(?:0|[1-9]\d*)$/u.test(E) && Number(E) < e.length && T !== void 0 && "value" in T;
  }), y = Pw(e);
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
function g3s(e) {
  let n = P();
  if (n.sessionId !== void 0 && n.sessionId !== e.sessionId) n.held.clear(), n.settled.length = 0;
  n.sessionId = e.sessionId, n.reporter = e;
}
function U$o(e) {
  let n = P();
  if (n.reporter?.owner === e) n.reporter = void 0;
}
function h3s(e, n) {
  let r = e.toLowerCase(), { held: s, settled: i } = P();
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
function y3s(e) {
  let n = P().held.get(e.toLowerCase());
  if (n === void 0) return false;
  return n.withheld = true, true;
}
function Xe(e) {
  return P().held.has(e.toLowerCase());
}
function Qe(e) {
  return P().settled.includes(e.toLowerCase());
}
function Ze(e) {
  return e.payload.type === "user" && typeof e.processing_at === "string";
}
function _3s(e) {
  let n = false;
  if (Xe(e.event_id)) n = "redelivered_in_flight";
  else if (Qe(e.event_id)) n = "redelivered_settled";
  else if (Ze(e)) n = "redelivered_after_start";
  if (n !== false) p("bridge_read_receipt", n);
  return n;
}
function B$o(e) {
  F("queued_note_threw", () => {
    let n = e === void 0 ? void 0 : P().held.get(e.toLowerCase());
    if (n !== void 0) n.phase = "queued";
  });
}
function Z(e) {
  F("settle_threw", () => {
    let n = e.toLowerCase(), r = P().held.get(n);
    if (r?.phase === "claimed") ee(n, r);
  });
}
function be(e) {
  F("settle_threw", () => {
    let n = e.toLowerCase(), r = P().held.get(n);
    if (r !== void 0 && r.phase !== "read") ee(n, r);
  });
}
function S3s(e) {
  for (let { uuid: n } of e) if (n !== void 0) be(n);
}
function TZe(e) {
  F("read_note_threw", () => {
    let { held: n } = P();
    if (n.size === 0) return;
    for (let { uuid: r } of e) {
      let s = r?.toLowerCase(), i = s === void 0 ? void 0 : n.get(s);
      if (s === void 0 || i === void 0 || i.phase === "read") continue;
      if (i.phase = "read", i.withheld) J(s, "processing"), g("bridge_read_receipt");
    }
  });
}
function b3s() {
  F("settle_threw", () => {
    for (let [e, n] of P().held) if (n.phase === "read") ee(e, n);
  });
}
function w3s() {
  F("resend_threw", () => {
    let { held: e, settled: n } = P();
    for (let [r, s] of e) if (s.phase === "read" && s.withheld) J(r, "processing");
    for (let r of n) J(r, "processed");
  });
}
function E3s(e) {
  gTe(e, (n, r) => {
    if (r === "cancelled" || r === "refused") be(n);
  });
}
function P() {
  return es(yes).inboundReadReceipts;
}
function ee(e, n) {
  let { held: r, settled: s } = P();
  if (r.delete(e), !n.withheld) return;
  if (s.push(e), s.length > Je) s.shift();
  J(e, "processed");
}
function J(e, n) {
  F("report_threw", () => {
    P().reporter?.report(e, n);
  });
}
function F(e, n) {
  try {
    n();
  } catch (r) {
    m("bridge_read_receipt", e), l(r);
  }
}
class xZe {
  #e;
  constructor(e) {
    this.#e = e;
  }
  static of(e) {
    return new xZe(JSON.stringify(e));
  }
  toJSON() {
    return JSON.parse(this.#e);
  }
}
var et = /* @__PURE__ */ new Set(["content", "_meta", "structuredContent", "structuredContentOmitted", "resourceLinks"]);
function G$o(e, n) {
  if (n.media !== true) return e;
  if (e instanceof xZe) {
    let s = e.toJSON(), i = G$o(s, n);
    return i === s ? e : xZe.of(i);
  }
  if (!D(e)) return e;
  let r = e.file;
  if (D(r) && (e.type === "image" || e.type === "pdf") && typeof r.base64 === "string" && r.base64 !== "") return { ...e, file: { ...r, base64: "" } };
  return e;
}
function T3s(e, n, r) {
  if (r.mcp_images !== true) return e;
  let s = (S) => Ie(S, n, (E, T) => E === T ? "" : E);
  if (!(e instanceof xZe)) return s(e);
  let i = e.toJSON(), y = s(i);
  return y === i ? e : xZe.of(y);
}
function Epn(e, n) {
  return Ie(e, n, (r, s) => r === "" ? s : r);
}
function vpn(e) {
  if (!D(e) || e.type !== "user") return e;
  let n = Epn(e.toolUseResult, e.message);
  return n === e.toolUseResult ? e : { ...e, toolUseResult: n };
}
function Ie(e, n, r) {
  let s = D(e) && Object.keys(e).every((b) => et.has(b)), i = s ? e.content : e, y = D(n) ? n.content : void 0;
  if (!Array.isArray(i) || !Array.isArray(y)) return e;
  let [S, ...E] = y.filter((b) => D(b) && b.type === "tool_result");
  if (E.length > 0 || !MZe(S) || S.content.length !== i.length) return e;
  let T = false, w = i.map((b, I) => {
    let h = S.content[I];
    if (!zBt(b) || !zBt(h)) return b;
    let A = r(b.source.data, h.source.data);
    if (A === b.source.data) return b;
    return T = true, { ...b, source: { ...b.source, data: A } };
  });
  if (!T) return e;
  return s ? { ...e, content: w } : w;
}
var tt = /* @__PURE__ */ new Set(["user", "assistant", "attachment", "system"]);
function P1r(e) {
  return D(e) && typeof e.type === "string" && tt.has(e.type);
}
var ve = ["cwd", "gitBranch", "version", "userType", "entrypoint", "promptId"], ot = [...ve, "requestId"];
function rt(e) {
  let n = e.message;
  return e.type === "assistant" && D(n) && typeof n.id === "string" && n.id.length > 0;
}
function A3s(e) {
  if (!P1r(e)) return e;
  let n = rt(e) ? ot : ve, r;
  for (let s of n) if (s in e) r ??= { ...e }, delete r[s];
  return r ?? e;
}
function H8n(e, n) {
  if (!P1r(e)) return e;
  let r;
  for (let [s, i] of Object.entries(n)) if (i !== void 0 && e[s] === void 0) r ??= { ...e }, r[s] = i;
  return r ?? e;
}
function D8n(e) {
  let n = [], r = 0;
  while (r < e.length) {
    let s = e[r];
    if (s.type !== "assistant" || s.resumedFromIncompleteThinking !== true) {
      r++;
      continue;
    }
    let i = r, y = r - 1;
    for (; ; ) {
      while (y >= 0 && X_(e[y])) y--;
      let w = y >= 0 ? e[y] : void 0;
      if (w?.type !== "assistant") break;
      let b = w.message.id, I = y;
      while (y >= 0) {
        let A = e[y];
        if (A.type === "assistant") if (A.message.id === b) I = y, y--;
        else break;
        else if (X_(A)) y--;
        else {
          let v = y;
          while (v >= 0 && (e[v].type !== "assistant" || X_(e[v]))) v--;
          let x = v >= 0 ? e[v] : void 0;
          if (x?.type === "assistant" && x.message.id === b) I = v, y = v - 1;
          else break;
        }
      }
      i = I;
      let h = e[I];
      if (h.type !== "assistant" || h.resumedFromIncompleteThinking !== true) break;
    }
    let S = r, E = s.message.id, T = r + 1;
    for (; ; ) {
      let w = T;
      while (w < e.length && X_(e[w])) w++;
      let b = w < e.length ? e[w] : void 0;
      if (b?.type === "assistant") {
        if (b.message.id === E) {
          S = w, T = w + 1;
          continue;
        }
        if (b.resumedFromIncompleteThinking === true) {
          S = w, E = b.message.id, T = w + 1;
          continue;
        }
        break;
      }
      let I = w;
      while (I < e.length && (e[I].type !== "assistant" || X_(e[I]))) I++;
      let h = I < e.length ? e[I] : void 0;
      if (h?.type === "assistant" && h.message.id === E) {
        S = I, T = I + 1;
        continue;
      }
      break;
    }
    n.push({ fromIdx: i, toIdx: S }), r = T > r ? T : r + 1;
  }
  return n;
}
var rze = "effort_medium_nudge", KBt = "auto_default_nudge", B8n = "ultraplan_choice", qBt = "cost_threshold", QJ = "autocompact_offer", kpn = "auto_mode_server_fallback", YBt = "resume_return", ece = "enum_prompt", ZJ = "cold_resume_quota", FHe = "newer_model_offer", j8n = "fullscreen_upsell";
var z$o = null, XBt = null;
function vye(e) {
  return e?.kind === "self_hosted_pool";
}
function JB(e) {
  return e.kind === "self_hosted_pool" ? e.pool_id : e.environment_id;
}
function Are(e) {
  return e !== void 0 && e.startsWith("ccpool_");
}
var st = ["anthropic_cloud", "bridge", "snap", "ccs"];
function O1r(e) {
  let n = (s) => s !== void 0 && s !== null && s !== "";
  if (n(e.self_hosted_runner_pool_id)) return "pool";
  let r = e.environment_kind;
  if (!n(r) || st.includes(r)) return null;
  return r === "byoc" ? "byoc" : "unlisted_kind";
}
function q8n(e) {
  return O1r(e) !== null;
}
function IZe(e, n) {
  return e.find(n);
}
var it = ["policySettings", "flagSettings", "userSettings"];
function pTe() {
  let e, n = Ro();
  for (let r = n.length - 1; r >= 0; r--) {
    let s = n[r], i = fe(s)?.remote?.defaultEnvironmentId;
    if (i === void 0) continue;
    if (Are(i) && !it.includes(s)) {
      e ??= { id: i, source: s };
      continue;
    }
    return { id: i, source: s, ignoredUntrustedPool: e?.id === i ? void 0 : e };
  }
  return { id: void 0, source: void 0, ignoredUntrustedPool: e };
}
function Tpn(e) {
  return e.startsWith("ccpool_") ? { self_hosted_runner_pool_id: e } : { environment_id: e };
}
var at = f(() => u({ environments: C(Eu((e) => typeof e === "object" && e !== null && !Array.isArray(e))), has_more: M().optional().catch(void 0), last_id: o().nullable().optional().catch(void 0) })), dt = 100, te = 10;
function ct(e) {
  if (typeof e === "string" && e.trim().length === 0) return new R("The cloud environments service returned an empty response (HTTP 200 with no body). This is usually temporary — try again in a moment.", "fetchEnvironments: HTTP 200 with an empty body");
  if (typeof e === "string") return new R("The cloud environments service returned a response in an unexpected format (HTTP 200 with a non-JSON body). This is usually temporary — try again in a moment.", "fetchEnvironments: HTTP 200 with a non-JSON body");
  return new R("The cloud environments service returned a response in an unexpected format (HTTP 200 without a usable environments list). This is usually temporary — try again in a moment.", "fetchEnvironments: HTTP 200 JSON body without a valid environments array");
}
async function SU(e, n, r) {
  return po("teleport_environments_list", async () => {
    if (Te() !== "firstParty") throw Error("Remote environments are only available on the first-party Anthropic API provider.");
    let i = d_(), y = e ?? await FY(i);
    if (!y) throw new R(eSe(), "cloud sessions need a sign-in");
    let S = await Boe(i);
    if (!S) throw Error("Unable to get organization UUID");
    let E = `${rn().BASE_API_URL}/v1/environment_providers`;
    try {
      let T = [], w;
      for (let I = 0; I < te; I++) {
        let h = await Hqr(() => Dt.get(E, { headers: { ...aA(tSe(i) ?? y), "x-organization-uuid": S }, params: { limit: dt, ...w !== void 0 && { after_id: w } }, timeout: 15e3 }), { credentials: r });
        if (h.status !== 200) throw Error(`Failed to fetch environments: HTTP ${h.status}`);
        let A = at().safeParse(h.data);
        if (!A.success) throw ct(h.data);
        T.push(...A.data.environments);
        let v = A.data.last_id;
        if (A.data.has_more !== true || A.data.environments.length === 0 || typeof v !== "string") break;
        if (I === te - 1) t(`fetchEnvironments: stopped after ${te} pages (${T.length} environments) although the server reports more; the rest are not listed`, { level: "warn" });
        w = v;
      }
      let b = T.length > 0;
      if (ue().hasRemoteEnvironment !== b) await Re((I) => I.hasRemoteEnvironment === b ? I : { ...I, hasRemoteEnvironment: b }, n);
      return T;
    } catch (T) {
      let w = N(T);
      if (Pf(T)) t(`fetchEnvironments failed: ${w.message}`, { level: "error" });
      else l(w);
      throw w;
    }
  }, ut);
}
function ut(e) {
  return e instanceof R ? "malformed_response" : "error";
}
async function OZe(e = "Default", n, r) {
  return po("teleport_default_environment_create", async () => {
    if (Te() !== "firstParty") throw Error("Remote environments are only available on the first-party Anthropic API provider.");
    let s = d_(), i = r ?? await FY(s);
    if (!i) throw Error("No access token available");
    let y = await Boe(s);
    if (!y) throw Error("Unable to get organization UUID");
    let S = `${rn().BASE_API_URL}/v1/environment_providers/cloud/create`;
    return (await Dt.post(S, { name: e, kind: "anthropic_cloud", description: "Default - trusted network access", config: { environment_type: "anthropic", cwd: "/home/user", init_script: null, environment: {}, languages: [{ name: "python", version: "3.11" }, { name: "node", version: "20" }], network_config: { allowed_hosts: [], allow_default_hosts: true } } }, { headers: { ...aA(i), "anthropic-beta": "ccr-byoc-2025-07-29", "x-organization-uuid": y }, timeout: 15e3, signal: n })).data;
  });
}
async function Y8n(e, n) {
  if (Te() !== "firstParty") return [];
  let r = d_(), s = e ?? await FY(r);
  if (!s) return [];
  let i = await Boe(r);
  if (!i) return [];
  let y = `${rn().BASE_API_URL}/v1/code/runners/self-hosted/pools`;
  try {
    let S = await Hqr(() => Dt.get(y, { headers: { ...aA(tSe(r) ?? s), "anthropic-beta": "ccr-byoc-2025-07-29", "x-organization-uuid": i }, timeout: 15e3 }), { credentials: n });
    if (S.status !== 200) return t(`fetchSelfHostedPools: ${S.status} ${S.statusText}`, { level: "error" }), p("teleport_self_hosted_pool_list", "non_200"), [];
    return po("teleport_self_hosted_pool_list", async () => (S.data.pools ?? []).map((E) => ({ kind: "self_hosted_pool", pool_id: E.pool_id, name: E.name, created_at: E.created_at, alive_runner_count: E.alive_runner_count ?? 0 })));
  } catch (S) {
    let E = N(S);
    if (Pf(S)) t(`fetchSelfHostedPools failed: ${E.message}`, { level: "error" }), p("teleport_self_hosted_pool_list", "api_error");
    else l(E), p("teleport_self_hosted_pool_list", "unexpected");
    return [];
  }
}
var lt = { refusal_fallback_prompt: "choose: retry on fallback model or edit prompt", auto_mode_server_fallback: "acknowledge the classifier billing notice (Enter continues in auto mode)", auto_mode_outside_reads: "choose: keep allowing reads outside the working directories, or block them" };
function W8n(e, n) {
  return e === ece && typeof n.source === "string" ? n.source : void 0;
}
var K_t = "dialog:mcp_elicitation";
function G8n(e, n, r, s) {
  return { tool_name: `dialog:${e}`, display_tool_name: "Claude needs your input", action_description: lt[e] ?? (e === ece && typeof n.title === "string" ? n.title : `Respond to the ${e} dialog to continue`), raw_command: void 0, tool_use_id: s ?? "", request_id: r, input: { dialog_kind: e, payload: n } };
}
import { randomUUID as ft } from "crypto";
function U8n(e, n, r, s) {
  if (By(n, "sessionId"), !s) return { url: `${e}/v1/sessions/${n}/events`, body: { events: r } };
  let i = Yl(n);
  return { url: `${e}/v1/code/sessions/${encodeURIComponent(i)}/events`, body: { events: r.map((y) => ({ payload: typeof y.uuid === "string" && y.uuid ? y : { ...y, uuid: ft() } })) } };
}
import { randomUUID as pt } from "crypto";
var M3s = "tengu_woven_harbor", z8n = "tengu_drifting_twilight", K$o = true, H3s = "tengu_buzzing_river";
var Ae = 16;
function I1r(e, { ultraplan: n, isFromSettings: r = false } = {}) {
  return { type: "event", data: { type: "control_request", request_id: `set-mode-${pt()}`, request: { subtype: "set_permission_mode", mode: e, ultraplan: n, ...r && { from_settings: true } } } };
}
function q$o(e) {
  return { envVars: Object.keys(e.environmentVariables ?? {}).length > 0, events: e.events.filter((n) => !Pe(n)).map(mt) };
}
var V = "<redacted>";
function ne(e) {
  if (!mn(e)) return;
  let { seed_bundle_file_id: n, environment_variables: r } = e;
  if (n === void 0 && r === void 0) return;
  return { ...e, ...n !== void 0 && { seed_bundle_file_id: V }, ...r !== void 0 && { environment_variables: mn(r) ? Object.fromEntries(Object.keys(r).map((s) => [s, V])) : V } };
}
function D3s(e) {
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
function V8n(e) {
  let n = e.deviceBinding, r = n ? e.events.filter((y) => Pe(y) && !(e.deferFirstPrompt && y.data.type === "user")) : e.events;
  if (n && r.length > Ae) throw new R(`session create allows at most ${Ae} initial events, got ${r.length}`, "session create: too many initial events");
  let s = n ? {} : e.environmentVariables ?? {}, i = L([...e.disallowedTools ?? [], ...n ? Uai : []]);
  return { ...e.title && { title: e.title }, ...e.worker, ...Y$o(e.persistentVolume), events: r.map((y) => ({ payload: y.data })), ...e.tags && { tags: e.tags }, ...!n && e.sessionGroupingId && { session_grouping_id: e.sessionGroupingId }, ...!n && e.agentId && { agent_id: e.agentId }, ...Object.keys(s).length > 0 && { environment_variables: s }, ...n && { target_device_id: n.deviceUUID, bind_attestation: { kid: n.kid, signature: n.signature }, bind_attestation_issued_at: n.issuedAt, ...e.requestElevatedTier && { security_tier: "elevated" }, ...e.repositoriesTrusted && { repositories_trusted: true } }, config: { sources: e.sources.map(_t), outcomes: e.outcomes, ...e.model && { model: e.model }, ...e.cwd && { cwd: e.cwd }, ...e.effortLevel && { effort_level: e.effortLevel }, ...e.seedBundleFileId && { seed_bundle_file_id: e.seedBundleFileId }, ...e.reuseOutcomeBranches && { reuse_outcome_branches: true }, ...e.appendSystemPrompt && { append_system_prompt: e.appendSystemPrompt }, ...e.customSystemPrompt && { custom_system_prompt: e.customSystemPrompt }, ...e.appendSubagentSystemPrompt && { append_subagent_system_prompt: e.appendSubagentSystemPrompt }, ...e.fallbackModel && { fallback_model: e.fallbackModel }, ...e.maxTurns !== void 0 && { max_turns: e.maxTurns }, ...e.maxBudgetUsd !== void 0 && e.maxBudgetUsd > 0 && { max_budget_usd: e.maxBudgetUsd }, ...e.allowedTools && e.allowedTools.length > 0 && { allowed_tools: e.allowedTools }, ...e.outputSchema && { output_schema: e.outputSchema }, ...!n && e.correlationId && { correlation_id: e.correlationId }, ...i.length > 0 && { disallowed_tools: i }, ...e.builtinTools && e.builtinTools.length > 0 && { builtin_tools: [...e.builtinTools] } } };
}
function Y$o(e) {
  return;
}
function K8n(e, n) {
  let r = e === "v1alpha2" ? n?.session : n;
  if (typeof r?.id !== "string" || r.id === "") return Af("no_session_id");
  if (!Bkn(r.id)) return Af("unusable_session_id");
  return dy({ ...r, title: typeof r.title === "string" ? Ki(r.title) : null });
}
function X$o(e, n) {
  return e.title || Ki(n);
}
function _t(e) {
  let { allow_unrestricted_git_push: n, ...r } = e;
  return r;
}
function J$o(e, n) {
  if (e === 401) return `${n || "Claude login not accepted"} · Run /login, then try again`;
  return;
}
function Q$o(e, n) {
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
var V$o = "PostCompact [", PZe = "This session is being continued from a previous conversation that ran out of context. The summary below covers the earlier portion of the conversation.";
function Oe(e) {
  return e.startsWith(`<${Xl}>`) && e.includes(V$o);
}
function Cpn(e) {
  if (typeof e === "string") return Oe(e);
  if (!Array.isArray(e) || e.length !== 1) return false;
  let n = e[0];
  return fTe(n) && Oe(n.text);
}
var L8n = "auto-mode-classifier-error.txt", N8n = "auto-mode-dump.", F8n = "auto-mode-env-edit-", $8n = "auto-mode-builtins-", R3s = "auto-mode-classifier-dump", x3s = "auto-mode-classifier-system";
function P3s(e) {
  if (typeof e !== "object" || e === null || !("type" in e)) return false;
  return e.type === "auto-mode-classifier-dump" || e.type === "auto-mode-classifier-system";
}
function L3s(e) {
  if (e.branchDropped && e.warnMessage) {
    if (a("tengu_bridge_outcome_branch_dropped", { reason: c(e.branchDropped) }), t(e.warnMessage, { level: "warn" }), e.branchDropped === "no_evidence") console.warn(e.warnMessage);
  }
  if (e.revisionGuessUsed) a("tengu_bridge_revision_guess_used", {});
}
var ke = { no_session_id: { debug: "No session ID in response", code: "bridge_session_create_bad_response" }, unusable_session_id: { debug: "Unusable session ID in response", code: "bridge_session_create_unusable_id" } };
async function Z$o({ environmentId: e, title: n, gitRepoUrl: r, branch: s, defaultBranch: i, signal: y, baseUrl: S, getAccessToken: E, credentials: T, permissionMode: w, tags: b }) {
  let { getClaudeAIOAuthTokens: I, getClaudeAIOAuthTokensAsync: h } = await import("../auth/acquire-o-auth-refresh-lock.js"), { loginToHandOn: A } = await import("../auth/ask-launcher-host-login-identity-again.js"), { getOrganizationUUID: v } = await import("../auth/build-auth-url.js"), { getOauthConfig: x } = await import("../auth/all-o-auth-scopes.js"), { sessionsApiWire: j } = await import("./archive-remote-session.d709.js"), { getMainLoopModel: W } = await import("../context/ant-grants1-m-context.js"), { getOriginalCwd: De } = await import("../mcp/acquire-mcp-clients-accessor.js"), { default: Ne } = await import("../shared/is-axios-error.js"), { isCcrV2BridgeCreateEnabled: Me } = await import("./apply-remote-control-to-app-state.js"), q = Me() ? "v1alpha2" : "v1", O = { create_endpoint: c(q) }, { isFirstPartyProvider: Le } = await import("../ide/allowed-provider-label.js");
  if (!Le()) return t("[bridge] Session create skipped on non-firstParty provider"), H("bridge_session_create_3p_provider", O);
  let re = E?.() ?? (z() && T !== void 0 ? A(await h(T))?.accessToken : A(I())?.accessToken);
  if (!re) return t("[bridge] No access token for session creation"), H("bridge_session_create_no_token", O);
  let se = await v();
  if (!se) return t("[bridge] No org UUID for session creation"), H("bridge_session_create_no_org", O);
  let { sources: ie, outcomes: ae, report: Fe } = await Czo(r, s, i), de = Tpn(e), ce = W(), le = De(), pe = w ? [I1r(w)] : [], je = q === "v1alpha2" ? V8n({ title: n, worker: de, events: pe, sources: ie, outcomes: ae, model: ce, cwd: le, reuseOutcomeBranches: true, tags: b?.length ? b : void 0 }) : { ...n !== void 0 && { title: n }, events: pe, session_context: { sources: ie, outcomes: ae, model: ce, cwd: le, reuse_outcome_branches: true }, ...de, source: "remote-control", ...b?.length && { tags: b } }, ge = j(q, S ?? x().BASE_API_URL, re), Be = { ...ge.headers, "x-organization-uuid": se }, B;
  try {
    B = await Ne.post(ge.url, je, { headers: Be, signal: y, validateStatus: (k) => k < 500 });
  } catch (k) {
    return t(`[bridge] Session creation request failed: ${d(k)}`), H("bridge_session_create_request_failed", O);
  }
  if (!(B.status === 200 || B.status === 201)) {
    let k = tI(B.data);
    return t(`[bridge] Session creation failed with status ${B.status}${k ? `: ${k}` : ""}`), H("bridge_session_create_http_error", O);
  }
  let K = K8n(q, B.data);
  if (!K.ok) return t(`[bridge] ${ke[K.error].debug}`), H(ke[K.error].code, O);
  return L3s(Fe), g("bridge_session_create", O), pp(K.value.id);
}
async function q_t(e, n) {
  return (await Y_t(e, n)).session;
}
async function Y_t(e, n) {
  let { getClaudeAIOAuthTokens: r, getClaudeAIOAuthTokensAsync: s } = await import("../auth/acquire-o-auth-refresh-lock.js"), { loginToHandOn: i } = await import("../auth/ask-launcher-host-login-identity-again.js"), { getOauthConfig: y } = await import("../auth/all-o-auth-scopes.js"), { getCodeSession: S } = await import("./archive-code-session.js"), { isCcrV2SessionCrudEnabled: E } = await import("./apply-remote-control-to-app-state.js"), { isFirstPartyProvider: T } = await import("../ide/allowed-provider-label.js");
  if (!T()) return m("bridge_session_get", "bridge_session_get_3p_provider"), { session: null, notFound: false };
  let w = n?.getAccessToken?.() ?? (z() && n?.credentials !== void 0 ? i(await s(n.credentials))?.accessToken : i(r())?.accessToken);
  if (!w) return t("[bridge] No access token for session fetch"), m("bridge_session_get", "bridge_session_get_no_token"), { session: null, notFound: false };
  let b = n?.useV2 ?? E(), I;
  if (!b) {
    let { getOrganizationUUID: A } = await import("../auth/build-auth-url.js");
    if (I = await A() ?? void 0, !I) return t("[bridge] No org UUID for session fetch"), m("bridge_session_get", "bridge_session_get_no_org"), { session: null, notFound: false };
  }
  let h = await S(n?.baseUrl ?? y().BASE_API_URL, w, e, 1e4, { useV2: b, orgUUID: I });
  if (typeof h !== "object") return m("bridge_session_get", h === "invalid" ? "bridge_session_get_invalid_id" : typeof h === "number" ? "bridge_session_get_http_error" : "bridge_session_get_request_failed"), { session: null, notFound: h === 404 };
  return g("bridge_session_get"), { session: { environment_id: h.environment_id, title: h.title, status: h.status, created_at: h.created_at, updated_at: h.updated_at, connection_status: "connection_status" in h && typeof h.connection_status === "string" ? h.connection_status : void 0, tags: h.tags }, notFound: false };
}
async function oe(e, n, r, s) {
  let { getClaudeAIOAuthTokens: i, getClaudeAIOAuthTokensAsync: y } = await import("../auth/acquire-o-auth-refresh-lock.js"), { loginToHandOn: S } = await import("../auth/ask-launcher-host-login-identity-again.js"), { getOauthConfig: E } = await import("../auth/all-o-auth-scopes.js"), { updateCodeSession: T } = await import("./archive-code-session.js"), { isCcrV2SessionCrudEnabled: w } = await import("./apply-remote-control-to-app-state.js"), b = s?.getAccessToken?.() ?? (z() && s?.credentials !== void 0 ? S(await y(s.credentials))?.accessToken : S(i())?.accessToken);
  if (!b) return t(`[bridge] No access token for session ${r} update`), "failed";
  let I = "client_metadata" in n || w(), h;
  if (!I) {
    let { getOrganizationUUID: v } = await import("../auth/build-auth-url.js");
    if (h = await v() ?? void 0, !h) return t(`[bridge] No org UUID for session ${r} update`), "failed";
  }
  t(`[bridge] Updating session ${r}: ${e}`);
  let A = await T(s?.baseUrl ?? E().BASE_API_URL, b, e, n, 1e4, { useV2: I, orgUUID: h });
  if (A === "invalid") return m("bridge_session_patch", "bridge_session_patch_invalid_id"), "rejected";
  else if (typeof A !== "number") return m("bridge_session_patch", "bridge_session_patch_request_failed"), "failed";
  else if (A === 200) return t(`[bridge] Session ${r} updated successfully`), g("bridge_session_patch"), "landed";
  else return p("bridge_session_patch", "bridge_session_patch_http_error"), "failed";
}
async function eUo(e, n, r) {
  return oe(e, { title: n }, "title", r);
}
async function JRi(e, n, r) {
  return ZSi(e, { title: `Couldn't start — too many sessions are running · ${n}`, reason: "capacity" }, r);
}
async function ZSi(e, n, r) {
  return oe(e, { title: n.title, client_metadata: { desktop_rc_refusal: { title: n.title, reason: n.reason } } }, "refusal", r);
}
var N3s = "color:";
async function tUo(e, n, r, s) {
  let i = n === "default", y = r.filter((E) => i || E !== n).map((E) => N3s + E), S = i ? void 0 : [N3s + n];
  await oe(e, { add_tags: S, remove_tags: y }, "color tag", s);
}
async function QRi(e, n, r) {
  return false;
}
function H(e, n) {
  return m("bridge_session_create", e, n), null;
}
function X8n(e) {
  let n = mo().teleportedSessionIds;
  if (n.add(rr(e)), n.size > 64) {
    let r = n.values().next().value;
    if (r !== void 0) n.delete(r);
  }
}
function ZA(e) {
  return mo().teleportedSessionIds.has(rr(e));
}
function M1r(e) {
  mo().teleportedSessionIds.delete(rr(e));
}
class Ce {
  listener = void 0;
}
var Ue = new nt(() => new Ce());
function I3s(e, n) {
  try {
    return Ue.peek(e)?.listener?.(n)?.catch(l);
  } catch (r) {
    l(r);
    return;
  }
}
function O3s(e) {
  let n = Ue.of(U());
  return n.listener = e, () => {
    if (n.listener === e) n.listener = void 0;
  };
}
export {
  $8n,
  A3s,
  AZe,
  Are,
  B$o,
  B8n,
  C3s,
  Cpn,
  D3s,
  D8n,
  E3s,
  Epn,
  F8n,
  FHe,
  G$o,
  G8n,
  H3s,
  H8n,
  I1r,
  I3s,
  IZe,
  J$o,
  JB,
  JRi,
  K$o,
  K8n,
  KBt,
  K_t,
  L3s,
  L8n,
  M1r,
  M3s,
  M8n,
  N3s,
  N8n,
  O1r,
  O3s,
  O8n,
  OZe,
  P1r,
  P3s,
  PZe,
  Q$o,
  QJ,
  QRi,
  R3s,
  RZe,
  S3s,
  SU,
  T3s,
  TZe,
  Tpn,
  U$o,
  U8n,
  V$o,
  V8n,
  VBt,
  W$o,
  W8n,
  X$o,
  X8n,
  XBt,
  Y$o,
  Y8n,
  YBt,
  Y_t,
  Z$o,
  ZA,
  ZJ,
  ZSi,
  _3s,
  b3s,
  eUo,
  ece,
  g3s,
  h3s,
  j$o,
  j8n,
  k3s,
  kpn,
  pTe,
  q$o,
  q8n,
  qBt,
  q_t,
  rze,
  tUo,
  v3s,
  vpn,
  vye,
  w3s,
  wpn,
  x3s,
  xZe,
  y3s,
  z$o,
  z8n,
  zBt
};
