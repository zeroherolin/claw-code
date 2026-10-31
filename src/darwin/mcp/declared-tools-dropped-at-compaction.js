// darwin/mcp/declared-tools-dropped-at-compaction.js — Claude Code 2.1.310（darwin）模块 chunk-brrncc7t.js
import { ce } from "../agents/third-party.js";
import { N } from "../telemetry/anthropic-workspace-id.js";
import { _, wW, t } from "../fs/gitlab-runner-authentication-token.js";
import { di, re } from "../shared/chunk-d2c47492.js";
import { gc, Tqe, Har } from "./chunk-0e2a1db6.js";
import { kAt, Gts, RCn, c$, mk, _g, Vf, F, L, Bi, nt, U, Qrs, J, Gss, zss, mcr, k7r, jAt, eis, ps } from "../context/not-admin-owned.js";
import { zs } from "../shared/chunk-f98598c3.js";
import { i } from "../shared/environment.js";
import { rn } from "../auth/oauth-2025-04-20.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Qs } from "../models/total-tokens-reminder.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { Ici, Oci, Mci, Ppe, Hci, Dci, iTt, Lci, pqt, Nr, io, jo } from "./always-allow.js";
import { Ep, Ozt, Ktr, Jo, Xe, nRe, Lue, Nn, k, mI, ue } from "../settings/global-config-and-gates.js";
import { hI, zb, pb, jj, Be, Tt } from "./allowed-warning.js";
import { vM, SEn, Tir, _pe, bEn } from "../shell/invalid-type.js";
import { ri } from "../permissions/classifier-transcript-too-long.js";
import { pvn, yFe } from "../shared/chunk-1b1c4439.js";
import { IJo } from "../plugins/skills-dir.js";
import { qi } from "../shared/async-hooks.b037.js";
import { Kd, Wp } from "./toolbox-mcp-server-id.js";
import { Vo, Id, Wrt, $ai } from "./claude-browser.js";
import { Lo } from "../agents/chunk-44729602.js";
import { yU } from "./claudeai-mcp-eligibility.js";
import { v7s } from "../agents/chunk-5531d42a.js";
import { Rt, n_e, cj, Rn } from "../context/tool-result-clearing-after-idle-server-report.js";
import { Yet, lG } from "../context/tool-use-id.js";
import { R2o } from "../artifacts/read-shared-artifact.js";
import { Ig, BCe, Ide } from "../vendor/zod/tool-use.js";
import { oG, Pd, yu, oo, Xjo, Fmn, Jye, YTe } from "../permissions/bot-protected-tengu-atomic-magpie.js";
import { Ya } from "../tools/structured-output-tool.js";
import { Zh, GD } from "./chunk-a5cd39f7.js";
import { HGe } from "../telemetry/chunk-cbe4ae1f.js";
import { Q8n, J_t, MZe, kye } from "../shared/deferred-tools-delta.js";
import { cL } from "../shared/chunk-9f5e078b.js";
import { qn } from "../web/allow-web-fetch.js";
import { Gs } from "../shared/chunk-22d55e0c.js";
import { ki } from "../shared/chunk-5eb2276b.js";
import { Qor } from "../chrome/browser-batch.js";
import { vn } from "../shared/chunk-3c6e6b31.js";
import { et } from "../shared/chunk-061dbb8e.js";
import { isDeepStrictEqual as Z } from "util";
var Le = ["betas", "tool_choice", "thinking", "context_management", "output_config", "speed", "temperature", "max_tokens"];
function Ozs(e) {
  return { model: e.model, tools: e.tools.map((n, o) => ({ key: Ie(n, o), deferred: ccn(n), bound: ccn(n), cacheControl: void 0, body: n })), system: e.system.map((n) => ({ preamble: false, cacheControl: void 0, body: n })), messages: [], envelope: {}, seeded: true };
}
function QDo(e, n = {}) {
  let o = n.boundDeferredToolNames ?? (n.bindReferencedDeferredTools === true ? gn(e.messages) : void 0), r = typeof e.system === "string" ? [{ type: "text", text: e.system }] : e.system ?? [], d = {};
  for (let s of Le) {
    let c = s === "betas" ? mn(e.betas) : e[s];
    if (c !== void 0) d[s] = c;
  }
  return { model: e.model, envelope: d, tools: (e.tools ?? []).map((s, c) => ({ key: Ie(s, c), deferred: s.defer_loading === true, bound: s.defer_loading === true && typeof s.name === "string" && o?.has(s.name) === true, cacheControl: Re(s), body: Se(s) })), system: r.map((s) => ({ preamble: lG(s), cacheControl: Re(s), body: Se(s) })), messages: e.messages.map((s, c, f) => ({ role: s.role, turnScopedSystem: s.role === "system" && c === f.length - 1, blocks: typeof s.content === "string" ? [{ thinking: false, cacheControl: void 0, body: { type: "text", text: s.content } }] : s.content.map((R) => ({ thinking: R.type === "thinking" || R.type === "redacted_thinking", cacheControl: Re(R), body: hn(Se(R)) })) })) };
}
function dcn(e) {
  return { model: e.model, tools: e.tools.filter(yn).map((n) => n.body), system: e.system.filter((n) => !n.preamble).map((n) => n.body), messages: e.messages.filter((n) => !n.turnScopedSystem).map((n) => ({ role: n.role, content: n.blocks.filter((o) => !o.thinking).map((o) => o.body) })) };
}
function Mzs(e) {
  return e.part === "tool" || e.part === "system" || e.part === "message";
}
var de = 16;
function ZDo(e, n) {
  return e.seeded ? Ae(e, n) : [...Ae(e, n), ...fn(e, n), ...un(e, n), ...pn(e, n)];
}
function Ae(e, n) {
  let o = dcn(e), r = dcn(n), d = [], s = (T) => (d.push(T), d.length < de), c = (T) => new Map([...T.filter((b) => !b.deferred), ...T.filter((b) => b.bound)].map((b) => [b.key, b])), f = c(e.tools), R = c(n.tools), y = [], u = false;
  for (let [T, b] of f) {
    let x = b.body, M = R.get(T);
    if (M === void 0) {
      if (b.deferred) {
        if (!e.seeded) y.push({ part: "tool", id: T, kind: "removed", prev: x });
        continue;
      }
      if (u = true, !s({ part: "tool", id: T, kind: "removed", prev: x })) return d;
    } else if (b.deferred !== M.deferred) {
      u = true;
      let O = b.deferred ? { part: "tool", id: T, kind: "added", next: M.body } : { part: "tool", id: T, kind: "removed", prev: x };
      if (!s(O)) return d;
    } else if (!Z(x, M.body)) {
      u ||= !b.deferred;
      let O = M.body, A = [...Object.keys(x), ...Object.keys(O)].find((B) => !Z(jP(x, B), jP(O, B))) ?? "?";
      if (!s({ part: "tool", id: T, kind: "changed", field: A, prev: x, next: O })) return d;
    }
  }
  for (let [T, b] of R) if (!f.has(T) && !b.deferred) {
    if (u = true, !s({ part: "tool", id: T, kind: "added", next: b.body })) return d;
  }
  if (!u) {
    let T = (O) => [...O.values()].flatMap((A) => A.deferred ? [] : [A.key]), b = T(f), M = T(R).filter((O) => f.has(O)).find((O, A) => b[A] !== O);
    if (M !== void 0) s({ part: "tool", id: M, kind: "reordered" });
  }
  let E = Math.max(o.system.length, r.system.length);
  for (let T = 0; T < E; T++) {
    let b = o.system[T], x = r.system[T], M = b === void 0 ? "added" : x === void 0 ? "removed" : "changed";
    if (M !== "changed" || !Z(b, x)) {
      if (!s({ part: "system", index: T, kind: M, prev: b, next: x })) return d;
    }
  }
  for (let T = 0; T < o.messages.length; T++) {
    let b = o.messages[T], x = r.messages[T];
    if (x !== void 0 && Z(b, x)) continue;
    let M = { part: "message", index: T, role: b.role, kind: x === void 0 ? "removed" : "changed", prev: b, next: x };
    if (!s(M)) return d;
  }
  for (let T of y) if (!s(T)) break;
  return d;
}
function fn(e, n) {
  let o = [], r = Math.min(e.messages.length, n.messages.length);
  for (let d = 0; d < r && o.length < de; d++) {
    let s = De(e.messages[d]), c = De(n.messages[d]);
    if (s.length === 0 && c.length === 0) continue;
    if (s.length === c.length && s.every((R, y) => R === c[y])) continue;
    let f = s.slice(0, c.length).every((R, y) => R === c[y]) || c.slice(0, s.length).every((R, y) => R === s[y]);
    o.push({ part: "thinking", index: d, kind: !f ? "changed" : c.length < s.length ? "dropped" : "added", prevCount: s.length, nextCount: c.length });
  }
  return o;
}
function De(e) {
  return e.blocks.flatMap((n) => {
    if (!n.thinking) return [];
    let o = jP(n.body, "signature"), r = jP(n.body, "data");
    return [typeof o === "string" ? o : typeof r === "string" ? r : "?"];
  });
}
function un(e, n) {
  let o = Pe(e, e.messages.length), r = Pe(n, e.messages.length), d = [];
  for (let [s, { at: c, marker: f }] of o) {
    if (d.length >= de) return d;
    let R = r.get(s);
    if (R === void 0) d.push({ part: "cache", at: c, kind: "dropped", prev: f, next: void 0 });
    else if (!Z(f, R.marker)) d.push({ part: "cache", at: c, kind: "changed", prev: f, next: R.marker });
  }
  for (let [s, { at: c, marker: f }] of r) {
    if (d.length >= de) return d;
    if (!o.has(s)) d.push({ part: "cache", at: c, kind: "added", prev: void 0, next: f });
  }
  return d;
}
function Pe(e, n) {
  let o = /* @__PURE__ */ new Map();
  for (let r of e.tools) if (r.cacheControl !== void 0) o.set(`tools:${r.key}`, { at: { segment: "tools", key: r.key }, marker: r.cacheControl });
  return e.system.forEach((r, d) => {
    if (r.cacheControl !== void 0) o.set(`system:${d}`, { at: { segment: "system", index: d }, marker: r.cacheControl });
  }), e.messages.slice(0, n).forEach((r, d) => {
    r.blocks.forEach((s, c) => {
      if (s.cacheControl !== void 0) o.set(`messages:${d}.${c}`, { at: { segment: "messages", index: d, block: c }, marker: s.cacheControl });
    });
  }), o;
}
function pn(e, n) {
  return [["model", e.model, n.model], ["attribution_header", ve(e), ve(n)], ["deferred_tools", Ne(e), Ne(n)], ...Le.map((r) => [r, e.envelope[r], n.envelope[r]])].filter(([, r, d]) => !Z(r, d)).map(([r, d, s]) => ({ part: "envelope", id: r, kind: "changed", prev: d, next: s }));
}
function mn(e) {
  return e && [...e].sort();
}
function ve(e) {
  for (let n of e.system) {
    let o = jP(n.body, "text");
    if (typeof o === "string" && o.startsWith(Yet)) return o;
  }
  return "";
}
function Ne(e) {
  return e.tools.filter((n) => n.deferred).map((n) => n.key).sort().join(",");
}
function yn(e) {
  return !e.deferred || e.bound;
}
function ccn(e) {
  return jP(e, "defer_loading") === true;
}
function gn(e) {
  let n = /* @__PURE__ */ new Set();
  for (let o of e) {
    if (typeof o.content === "string") continue;
    if (o.role === "system") {
      for (let d of o.content) {
        let s = jP(d, "tool"), c = jP(d, "type") === "tool_addition" && typeof s === "object" && s !== null ? jP(s, "name") : void 0;
        if (typeof c === "string") n.add(gc(c));
      }
      continue;
    }
    if (o.role !== "user") continue;
    for (let d of o.content) {
      if (!MZe(d)) continue;
      for (let s of d.content) if (J_t(s)) n.add(gc(s.tool_name));
    }
  }
  return n;
}
function Re(e) {
  return "cache_control" in e ? e.cache_control : void 0;
}
function Se(e) {
  if (!("cache_control" in e)) return e;
  let { cache_control: n, ...o } = e;
  return o;
}
function hn(e) {
  if (!("safeguards" in e)) return e;
  let { safeguards: n, ...o } = e;
  return o;
}
function jP(e, n) {
  if (e === void 0) return;
  return Object.entries(e).find(([o]) => o === n)?.[1];
}
function Ie(e, n) {
  let o = jP(e, "name");
  if (typeof o === "string") return o;
  let r = jP(e, "type");
  return typeof r === "string" ? r : `tools[${n}]`;
}
function DFr() {
  return i.CLAUDE_CODE_WEBSEARCH_CITATIONS && Qs() && !jj();
}
function ucn(e) {
  let n = jP(e, "type");
  return typeof jP(e, "name") === "string" && jP(e, "defer_loading") === true && (n === void 0 || n === "custom") && Fe(jP(e, "input_schema")) && !("cache_control" in e);
}
function Hzs(e) {
  let n = jP(e, "type"), o = jP(e, "description");
  return typeof jP(e, "name") === "string" && (o === void 0 || typeof o === "string") && jP(e, "defer_loading") !== true && (n === void 0 || n === "custom") && Fe(jP(e, "input_schema")) && !("cache_control" in e);
}
var le = ["strict", "eager_input_streaming", "citations"];
function fe(e) {
  return e.some((n) => jP(n, "eager_input_streaming") === true);
}
function ne(e, { strict: n, eager: o }) {
  let r = { ...e };
  if (!n && "strict" in r) {
    let { strict: d, ...s } = r;
    r = s;
  }
  if (!o && "eager_input_streaming" in r) {
    let { eager_input_streaming: d, ...s } = r;
    r = s;
  }
  if (!DFr() && "citations" in r) {
    let { citations: d, ...s } = r;
    r = s;
  }
  return r;
}
function Fe(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) && jP(e, "type") === "object";
}
function Dzs(e) {
  return et(_(vM(e))).slice(0, 16);
}
function Tn(e) {
  if (!Array.isArray(e)) return [];
  return e.filter((n) => typeof n === "object" && n !== null && typeof n.name === "string" && typeof n.listing === "string" && (typeof n.definition === "object" && n.definition !== null || typeof n.sameAs === "string"));
}
function Uyt(e, n = /* @__PURE__ */ new Set()) {
  let o = /* @__PURE__ */ new Map();
  for (let r of e) {
    if (r.type !== "attachment" || r.attachment?.type !== "deferred_tools_delta" || typeof r.uuid !== "string" || n.has(r.uuid)) continue;
    let d = /* @__PURE__ */ new Map();
    for (let s of Tn(r.attachment.surfacedDefinitions)) {
      if ("definition" in s) {
        d.set(s.name, { definition: s.definition, listing: s.listing, definedIn: r.uuid });
        continue;
      }
      let c = o.get(s.sameAs)?.get(s.name);
      if (c !== void 0) d.set(s.name, c);
    }
    if (d.size > 0) o.set(r.uuid, d);
  }
  return o;
}
function Lzs(e, n = /* @__PURE__ */ new Set()) {
  let o = /* @__PURE__ */ new Set();
  for (let r of Uyt(e, n).values()) for (let d of r.keys()) o.add(d);
  return o;
}
function LFr(e, n) {
  let o = Uyt(e, n), r = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Set();
  for (let s of e) {
    if (s.type !== "attachment" || s.attachment?.type !== "deferred_tools_delta" || typeof s.uuid === "string" && n.has(s.uuid)) continue;
    for (let c of Bi(s.attachment.removedByBlock)) if (r.has(c)) d.add(c);
    if (typeof s.uuid !== "string") continue;
    for (let [c, f] of o.get(s.uuid) ?? []) r.set(c, f), d.delete(c);
  }
  return { definedByValue: r, withdrawn: d };
}
function E1t(e, n) {
  return e !== void 0 && Object.hasOwn(e, n) ? e[n] : void 0;
}
function Nzs(e, n = /* @__PURE__ */ new Set()) {
  return new Set(Uyt(e, n).keys());
}
var _n = "tengu_marlin_thicket", Sn = "ide", bn = new nt(() => ({ read: false }));
function Ue(e, n) {
  return e && Object.hasOwn(e, n) ? e[n] : void 0;
}
async function kn(e, n) {
  let o;
  if (!await mI((d) => (o = Ue(d.mcpLegacyKeyOwners, e) ?? n, { ...d, mcpLegacyKeyOwners: { ...d.mcpLegacyKeyOwners, [e]: o } }))) {
    p("mcp_standard_key", "owner_not_saved");
    return;
  }
  return o;
}
function Yhe() {
  let e = bn.of(U());
  if (!e.read) {
    if (e.read = true, k(_n, false)) Mci({ read: (n) => J() ? void 0 : Ue(ue().mcpLegacyKeyOwners, n), claim: J() ? async (n, o) => o : kn });
  }
  return Ppe();
}
function En(e) {
  try {
    return Wp(e) || new URL(e).host === new URL(rn().MCP_PROXY_URL).host;
  } catch {
    return true;
  }
}
function je(e) {
  let n = En(e) ? void 0 : Ici(e);
  return n === void 0 ? void 0 : { key: n, pinned: false };
}
function K4n(e, n, o) {
  if (o || Lue(e)) return { key: vn(e), pinned: true };
  switch (n.type) {
    case "sse-ide":
    case "ws-ide":
      return { key: Sn, pinned: true };
    case "http":
    case "sse":
      return je(n.url);
    case "claudeai-proxy":
      return yU(n) === void 0 ? void 0 : je(n.url);
    case "stdio":
    case void 0: {
      let { command: r, args: d } = n.configuredCommand ?? n, s = Oci(r, d ?? []);
      return s === void 0 ? void 0 : { key: s, pinned: false };
    }
    default:
      return;
  }
}
var We = new nt(() => ({ ok: false, kept: false, failed: false }));
function Cn(e) {
  return ri(e, "name").flatMap((n) => n.mcpInfo !== void 0 && n.name === jo(n.mcpInfo.serverName, n.mcpInfo.toolName) ? [{ name: n.name, server: n.mcpInfo, standardKey: n.mcpInfo.standardKey }] : []);
}
function On(e) {
  return "name" in e && typeof e.name === "string" ? { ...e, name: iTt(e.name) } : e;
}
function Ve(e) {
  return typeof e === "object" && e !== null;
}
function pe(e) {
  return typeof e === "string" ? iTt(e) : e;
}
function me(e) {
  if (Array.isArray(e)) return e.map(me);
  if (!Ve(e)) return e;
  let n = {};
  for (let o of Object.keys(e)) {
    let r = e[o];
    n[o] = o === "input" ? r : o === "exclude_tools" && Array.isArray(r) ? r.map(pe) : me(r);
  }
  switch (n.type) {
    case "tool_use":
      return { ...n, name: typeof n.name === "string" ? Lci(n.name) : n.name };
    case "tool_reference":
      return { ...n, ..."name" in n && { name: pe(n.name) }, ..."tool_name" in n && { tool_name: pe(n.tool_name) } };
    case "tool_definition":
      return Ve(n.definition) ? { ...n, definition: { ...n.definition, name: pe(n.definition.name) } } : n;
    default:
      return n;
  }
}
function xn(e) {
  return Array.isArray(e.content) ? { ...e, content: me(e.content) } : e;
}
function Mn() {
  let e = We.of(U());
  if (Hci() > 0 && !e.kept) e.kept = true, p("mcp_standard_key", "kept_legacy_names");
  else if (!e.ok && !e.kept) e.ok = true, g("mcp_standard_key");
}
function Ke(e) {
  l(e);
  let n = We.of(U());
  if (!n.failed) n.failed = true, m("mcp_standard_key", "translate_failed");
}
function NFr(e) {
  try {
    if (e.some((n) => n.mcpInfo !== void 0) && Yhe()) Dci(Cn(e)), Mn();
    return true;
  } catch (n) {
    return Ke(n), false;
  }
}
function pcn(e) {
  try {
    if (!Yhe()) return e;
    let n = e.tool_choice;
    return { ...e, messages: e.messages.map(xn), ...e.context_management != null && { context_management: me(e.context_management) }, ...e.tools !== void 0 && { tools: e.tools.map(On) }, ...n !== void 0 && "name" in n && typeof n.name === "string" && { tool_choice: { ...n, name: iTt(n.name) } } };
  } catch (n) {
    return Ke(n), e;
  }
}
function Fzs(e) {
  for (let n of e.content) if (n.type === "tool_use" && n.name !== void 0) n.name = pqt(n.name);
}
var He = Symbol.for("claude-code.hostOnlyNativeTool");
function jzs(e) {
  return Object.defineProperty(e, He, { value: true, enumerable: true }), e;
}
function M2(e) {
  return He in e;
}
import { isDeepStrictEqual as $e } from "util";
function ee(e, n) {
  return cL(e) && n(e) ? e : gc(e);
}
function ze() {
  if (!Ep()) return false;
  return !(i.CLAUDE_CODE_SIMPLE || i.CLAUDE_CODE_DISABLE_ATTACHMENTS);
}
function eHe() {
  let e = Lo();
  return e.keptDeferredToolsEnabled ??= ze(), e.keptDeferredToolsEnabled;
}
function _cn() {
  return Lo().keptDeferredToolsEnabled ?? ze();
}
var wn = 5e3;
function q(e) {
  return Q8n(e.toolUseId, e.toolName);
}
class Ye {
  #e = /* @__PURE__ */ new Map();
  #n = /* @__PURE__ */ new Set();
  #o = /* @__PURE__ */ new Map();
  #t = false;
  #r = 0;
  get(e) {
    return this.#e.get(q(e));
  }
  set(e, n) {
    let o = q(e);
    if (!this.#e.delete(o) && this.#e.size >= wn) {
      let r = this.#e.keys().next().value;
      if (r !== void 0) this.#e.delete(r);
    }
    this.#e.set(o, n), this.#n.add(e.toolName);
  }
  hasTool(e) {
    return this.#n.has(e);
  }
  get size() {
    return this.#e.size;
  }
  telemetrySignatureChanged(e, n) {
    if (n === this.#o.get(e)) return false;
    return this.#o.set(e, n), true;
  }
  get generation() {
    return this.#r;
  }
  noteRetractionFailure() {
    let e = !this.#t;
    return this.#t = true, e;
  }
  clear() {
    this.#e.clear(), this.#n.clear(), this.#o.clear(), this.#r++;
  }
}
var Scn = new nt(() => new Ye());
function oV() {
  return Scn.of(U());
}
function Ge(e, n, o, r = true, d) {
  let s = new Set(o.map((u) => u.name)), c = /* @__PURE__ */ new Map();
  for (let u of n) {
    let E = e.get(u), T = E?.kind === "sent" && "name" in E.entry.schema ? E.entry.schema.name : void 0, b = ee(u.toolName, (x) => s.has(x) || x === T);
    if (c.has(b)) continue;
    if (E?.kind === "sent" && (r || !E.entry.isMcp)) c.set(b, E.entry);
  }
  let f = /* @__PURE__ */ new Set(), R = [], y = [];
  for (let u of n) {
    let E = e.get(u);
    if (E?.kind === "stripped") {
      f.add(q(u));
      continue;
    }
    if (E?.kind === "sent") continue;
    let T = ee(u.toolName, (x) => s.has(x) || c.has(x)), b = c.get(T);
    if (b) R.push({ reference: u, entry: b });
    else if (!s.has(T) && !d?.keeps(T)) y.push(u);
  }
  return { kept: c, strippedReferenceKeys: f, resolvedAgainstKept: R, unrecordedDepartures: y };
}
function tLo(e, n, o, { keepMcp: r = true, surfacedOnWire: d, declaredInline: s } = {}) {
  try {
    if (!eHe()) return;
    let c = kye(e, { surfacedOnWire: d });
    if (c.length === 0) return;
    let f = oV(), R = f.generation, y = Jo(o), u = be(y, o), { kept: E, strippedReferenceKeys: T, resolvedAgainstKept: b, unrecordedDepartures: x } = Ge(f, c, n, r, s);
    if (u) {
      for (let { reference: M, entry: O } of b) f.set(M, { kind: "sent", entry: O });
      for (let M of x) f.set(M, { kind: "stripped" });
    }
    return { references: c, kept: E, strippedReferenceKeys: T, writes: u, category: y, querySource: o, generation: R };
  } catch (c) {
    l(c), m("mcp_kept_deferred_tools", "plan_failed");
    return;
  }
}
function Wzs(e, n, { keepMcp: o = true, surfacedOnWire: r } = {}) {
  try {
    let d = oV();
    if (!eHe()) return;
    let { kept: s } = Ge(d, kye(e, { surfacedOnWire: r }), n, o), c = new Set(n.map((f) => f.name));
    return [...s.keys()].filter((f) => !c.has(f));
  } catch (d) {
    bcn(d);
    return;
  }
}
function BFr(e) {
  let n = oV(), o = e.findLastIndex((r) => r.type === "system" && r.subtype === "compact_boundary");
  return new Set(kye(e.slice(o + 1)).filter((r) => n.get(r)?.kind !== "stripped").map((r) => r.toolName));
}
function Gzs(e) {
  let n = oV(), o = /* @__PURE__ */ new Set();
  for (let r of e?.references ?? []) if (n.get(r)?.kind === "stripped") o.add(q(r));
  return o;
}
function bcn(e) {
  if (l(e), oV().noteRetractionFailure()) m("mcp_kept_deferred_tools", "retraction_failed");
}
function zzs(e, n, o, { requestCarriesStructuredOutputs: r }) {
  try {
    let d = Math.max(n.length - 1, 0), s = oV(), c = s.generation !== e.generation, f = { strict: r, eager: fe(n) }, R = [], y = [];
    for (let [T, b] of e.kept) {
      let x = n.findIndex((O) => "name" in O && Rt(O, T)), M = n[x];
      if (M !== void 0) {
        if ("defer_loading" in M && M.defer_loading && !c) n[x] = ne(b.schema, f);
        continue;
      }
      y.push([T, b]), R.push(ne(b.schema, f));
    }
    if (n.splice(d, 0, ...R), !e.writes || c) return;
    let u = e.querySource ?? "";
    if (y.length === 0 && e.strippedReferenceKeys.size === 0) s.telemetrySignatureChanged(u, "");
    else {
      t(`Dynamic tool loading: keeping ${y.length} departed deferred tool(s) declared; ${e.strippedReferenceKeys.size} reference(s) held stripped`);
      let T = `${y.map(([b]) => b).sort().join(",")}|${e.strippedReferenceKeys.size}`;
      if (s.telemetrySignatureChanged(u, T)) {
        let b = ce(e.category);
        g("mcp_kept_deferred_tools", { kept_count: y.length, kept_mcp_count: F(y, ([, x]) => x.isMcp), stripped_reference_count: e.strippedReferenceKeys.size, ...b !== void 0 && { query_source_category: b } });
      }
    }
    let E = /* @__PURE__ */ new Map();
    for (let T of e.references) {
      if (e.strippedReferenceKeys.has(q(T))) continue;
      let b = ee(T.toolName, (O) => o.has(O) || e.kept.has(O)), x = o.get(b);
      if (e.kept.has(b) || !x || !("defer_loading" in x.schema) || x.schema.defer_loading !== true) continue;
      let M = E.get(b);
      if (M === void 0) M = { schema: x.schema, isMcp: x.isMcp }, E.set(b, M);
      s.set(T, { kind: "sent", entry: M });
    }
  } catch (d) {
    l(d), m("mcp_kept_deferred_tools", "record_failed");
  }
}
function Y4n(e, n, o) {
  try {
    let r = o?.strippedReferences ?? /* @__PURE__ */ new Set();
    if (n.length === 0 && r.size === 0 || !_cn()) return 0;
    let d = oV(), s = /* @__PURE__ */ new Map();
    for (let y of n) if (ucn(y) && !s.has(y.name)) s.set(y.name, { schema: y, isMcp: y.name.startsWith("mcp__") });
    let c;
    if (o?.surfacedCarrier !== void 0) {
      c = /* @__PURE__ */ new Set();
      for (let y of e) {
        if (y.type !== "attachment" || y.attachment.type !== "deferred_tools_delta" || o.surfacedCarrier.nameOnlyAnnouncements.has(y.uuid)) continue;
        let u = y.attachment.surfacedNames;
        for (let E of Array.isArray(u) ? u : []) if (typeof E === "string" && s.has(E)) c.add(E);
      }
      for (let y of c) o.surfacedCarrier.surfacedOnWire.add(y);
    }
    let f = 0, R = /* @__PURE__ */ new Set();
    for (let y of kye(e, { surfacedOnWire: c })) {
      let u = d.get(y);
      if (r.has(q(y))) {
        if (u?.kind !== "stripped") d.set(y, { kind: "stripped" }), f++;
        continue;
      }
      if (u !== void 0) continue;
      let E = ee(y.toolName, (b) => s.has(b)), T = s.get(E);
      if (T === void 0) continue;
      d.set(y, { kind: "sent", entry: T }), R.add(E), f++;
    }
    if (f > 0) t(`Dynamic tool loading: seeded ${f} tool reference(s) to ${R.size} deferred tool(s) the previous process sent`);
    return f;
  } catch (r) {
    return l(r), m("mcp_kept_deferred_tools", "seed_failed"), 0;
  }
}
function An(e, n) {
  if ($e(e, n)) return true;
  let o = { ...e };
  for (let r of le) if (!(r in n)) delete o[r];
  return $e(o, n);
}
function Vzs(e, n, o, r, d, s) {
  try {
    if (n.size === 0 || !eHe()) return;
    let c = oV();
    if (c.generation !== s) return;
    if (!be(Jo(d), d)) return;
    let f = /* @__PURE__ */ new Map();
    for (let R of kye(e, { surfacedOnWire: n })) {
      if (c.get(R) !== void 0) continue;
      let y = ee(R.toolName, (T) => r?.kept.has(T) === true || o.has(T)), u = r?.kept.get(y) ?? o.get(y);
      if (!u || !("defer_loading" in u.schema) || u.schema.defer_loading !== true) continue;
      let E = f.get(y);
      if (E === void 0) E = { schema: u.schema, isMcp: u.isMcp }, f.set(y, E);
      c.set(R, { kind: "sent", entry: E });
    }
  } catch (c) {
    l(c), m("mcp_kept_deferred_tools", "record_failed");
  }
}
function Kzs(e, n) {
  try {
    let o = qe(n);
    for (let r = 0; r < e.length; r++) {
      let d = o.get(e[r].name);
      if (d !== void 0 && ucn(d)) e[r] = d;
    }
  } catch (o) {
    l(o);
  }
}
function qzs(e, n) {
  try {
    let o = oV();
    if (!e.writes || o.generation !== e.generation) return;
    let r = qe(n), d = /* @__PURE__ */ new Map();
    for (let s of e.references) {
      if (e.strippedReferenceKeys.has(q(s))) continue;
      let c = ee(s.toolName, (u) => r.has(u)), f = r.get(c), R = o.get(s);
      if (f === void 0 || R?.kind !== "sent" || An(R.entry.schema, f)) continue;
      let y = d.get(c);
      if (y === void 0) y = { schema: f, isMcp: R.entry.isMcp }, d.set(c, y);
      o.set(s, { kind: "sent", entry: y });
    }
  } catch (o) {
    l(o), m("mcp_kept_deferred_tools", "record_failed");
  }
}
function be(e, n) {
  return e === "main" || e === "subagent" && n !== v7s;
}
function nLo(e) {
  return be(Jo(e), e);
}
function qe(e) {
  let n = /* @__PURE__ */ new Map();
  for (let o of e) if ("defer_loading" in o && o.defer_loading === true && "name" in o && typeof o.name === "string") if ("cache_control" in o) {
    let { cache_control: r, ...d } = o;
    n.set(o.name, d);
  } else n.set(o.name, o);
  return n;
}
function Mb(e, n, o) {
  return Rn(e, n, o);
}
var TQe = "authenticate", fcn = "complete_authentication";
function FFr(e) {
  if (typeof e !== "object" || e === null) return false;
  let n = e;
  return typeof n.name === "string" && (n.errorCode === void 0 || typeof n.errorCode === "string") && (n.error === void 0 || typeof n.error === "string");
}
var Dn = 200;
function co(e, n = 64) {
  if (typeof e !== "string") return "";
  return jl(wW(e).replace(/['`]/g, " "), n, "none");
}
function $zs(e, n = 1024) {
  return jl(e, n);
}
function jl(e, n = Dn, o = "all") {
  if (typeof e !== "string") return "";
  let r = IJo(wW(e)).replaceAll(/[<>";\u2018\u2019\u201A\u201C\u201D\u201E\u00AB\u00BB\u2039\u203A\u2329\u232A\u27E8\u27E9\u27EA\u27EB\u3008\u3009\u300A\u300B]/g, " ").replaceAll(/\s+/g, " ").trim(), d = Math.max(ye, n + nn), s = r.length > d, c = mcn(s ? re(r, d) : r, o);
  return s || c.length > n ? `${re(c, n)}…` : c;
}
var Qe = 500;
function bw(e) {
  let n = IJo(e).replaceAll(/\s+/g, " ").trim(), o = mcn(n.length > ye ? re(n, ye) : n);
  return o.length > Qe ? `${re(o, Qe)}…` : o;
}
var oe = String.raw`(?:access[-_ ]?|refresh[-_ ]?|id[-_ ]?|client[-_ ]?|api[-_ ]?|x[-_]api[-_ ]?|session[-_ ]?|auth[-_ ]?)?(?:token|key|secret|password|authorization|credential)s?`, Pn = String.raw`\b${oe}(?:\\*["']|\\+)?\s*[:=\uFF1A\uFF1D]\s*(?:\\*["']|\\+)?\s*(?!=*${oe}=*(?![A-Za-z0-9._~+/=%-]))(?=[A-Za-z0-9._~+/=%-]{8})[A-Za-z]*[0-9._~+/=%-]`, en = String.raw`(?:[A-Za-z0-9._~+/=%-]+?(?=${Pn})|[A-Za-z0-9._~+/=%-]{8,})`, Bn = new RegExp(String.raw`(?:\b|(?<=\\[A-Za-z"']))(bearer|basic)(?![\s:=\uFF1A\uFF1D]+(?:(?:\\*["']|\\+)\s*)?${oe}=*(?![A-Za-z0-9._~+/=%-]))[\s:=\uFF1A\uFF1D]+(?:(?:\\*["']|\\+)\s*)?(${en})`, "gi"), Ln = new RegExp(String.raw`(?:\b|(?<=\\[A-Za-z"']))(${oe})(?:\\*["']|\\+)?\s*[:=\uFF1A\uFF1D]\s*(?:\\*["']|\\+)?\s*(?!=*${oe}=*(?![A-Za-z0-9._~+/=%-]))(${en})`, "gi");
function Ze(e, n, o, r, d) {
  if (!/[0-9._~+/=%-]/.test(o)) return e;
  return /\w/.test(d[r + e.length] ?? "") ? `${n} [redacted] ` : `${n} [redacted]`;
}
function mcn(e, n = "all") {
  if (n === "none") return e;
  return e.replace(Bn, Ze).replace(Ln, Ze);
}
var In = /^(?:bearer|basic|(?:access|refresh|id|client|api|x[-_]api|session|auth)?[-_ ]?(?:token|key|secret|password|authorization|credential)s?)$/i, Fn = /(?:^|[^A-Za-z0-9_\s])(?:bearer|basic|token|key|secret|password|authorization|credential)s?$/i;
function jn(e) {
  let n = e.split(/[:=\uFF1A\uFF1D]+/).map((r) => r.trim()), o = 0;
  for (let [r, d] of n.entries()) {
    if (d === "") continue;
    let s = r < n.length - 1 || d.startsWith("-");
    if (!In.test(d) && !(s && Fn.test(d))) return false;
    o++;
  }
  return o > 0;
}
var ye = 2e3, nn = 512, Je = ye + nn, Un = 32, Vn = 262144, Wn = 131072, Kn = 8192, Hn = 65536, $n = /^(?:[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs})$/u;
function $Fr(e) {
  let n = e.errorCode ? ` (${e.errorCode})` : "", o = e.error ? `: "${e.error}"` : "";
  return `${e.name}${n}${o}`;
}
var mre = "Blocked by enterprise managed policy", eLo = "Disabled by disableClaudeAiConnectors setting", Uzs = "Not approved for this project - approve it via /mcp first", gcn = "Refused - Claude Code reserves this address for its own use", q4n = "Account changed while connecting - reconnect to use it", Byt = "Disabled in /mcp", zn = /* @__PURE__ */ new Set([mre, eLo]);
function hcn(e) {
  return e !== void 0 && zn.has(e);
}
function ycn(e) {
  return e === gcn;
}
function MO(e) {
  return e.type === "failed" && e.errorCode === "UNCONFIGURED";
}
function uU(e) {
  return e.type === "failed" && e.errorCode === "404" && e.name === Id && Kd(e.config);
}
function UFr(e, n = () => false) {
  return e.filter((o) => o.type === "failed").filter((o) => !MO(o)).filter((o) => !uU(o)).filter((o) => true).map((o) => ({ name: jl(o.name), ...o.errorCode !== void 0 && { errorCode: jl(o.errorCode) }, ...(o.error !== void 0 || o.displayDetail !== void 0) && { error: [o.error, o.displayDetail].filter((r) => Boolean(r)).map((r) => jl(r)).join(" ") }, ...n(o) && { willRetry: true } }));
}
function Yn(e, n) {
  if (!e || !n || !e.includes("${")) return [];
  let o = pvn(e);
  if (o.length < 2) return [];
  if (n.length > 2e3 || o.length > 9) return [];
  let r = o.map(di), d = [];
  if (o.length === 2) {
    let [s = "", c = ""] = o;
    if (n.length >= s.length + c.length && n.startsWith(s) && n.endsWith(c)) d.push(n.slice(s.length, n.length - c.length));
  } else if (o.length === 3) {
    let [s = "", c = "", f = ""] = o;
    if (n.startsWith(s) && n.endsWith(f)) {
      let R = n.slice(s.length, n.length - f.length);
      if (c === "") d.push(R);
      else {
        let y = [];
        for (let E = R.indexOf(c); E !== -1 && y.length <= 64; E = R.indexOf(c, E + 1)) y.push(E);
        let u = y.length > 64 ? [y[0] ?? 0, R.lastIndexOf(c)] : y;
        for (let E of u) d.push(R.slice(0, E), R.slice(E + c.length));
      }
    }
  } else {
    for (let f = 1; f < o.length - 1; f++) if (o[f] === "") return [];
    let s = "^";
    for (let f = 0; f < r.length; f++) if (s += r[f], f < r.length - 1) {
      let R = o[f + 1] ?? "";
      if (R === "") s += "([\\s\\S]*)";
      else {
        let y = R.charAt(0).replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");
        s += `([^${y}]*)`;
      }
    }
    let c = n.match(new RegExp(s + "$"));
    if (c) d.push(...c.slice(1).filter((f) => f !== ""));
  }
  return L(d);
}
function Gn(e, n) {
  if (!e) return [];
  let o = [], r = (d, s) => {
    if (typeof d === "string" && typeof s === "string") o.push(...Yn(d, s));
  };
  if ("url" in e && "url" in n) r(e.url, n.url);
  if ("command" in e && "command" in n) {
    r(e.command, n.command);
    let d = Array.isArray(e.args) ? e.args : [], s = Array.isArray(n.args) ? n.args : [];
    for (let c = 0; c < Math.min(d.length, s.length); c++) r(d[c], s[c]);
  }
  for (let d of ["headers", "env"]) {
    let s = d in e ? e[d] : void 0, c = d in n ? n[d] : void 0;
    if (s && c && typeof s === "object" && typeof c === "object") for (let [f, R] of Object.entries(s)) r(R, c[f]);
  }
  return o;
}
function Qn(e, n) {
  for (let o of n) {
    if (o.length <= e.length) return false;
    if (o.startsWith(e)) return true;
  }
  return false;
}
function Bzs(e, n, o, r) {
  let d = o ?? "[mcp-endpoint]", s = new TextDecoder("utf-8", { fatal: false }), c = (h) => h.replace(/(?:%[0-9A-Fa-f]{2})+/g, (S) => s.decode(Uint8Array.from(S.match(/[0-9A-Fa-f]{2}/g) ?? [], (C) => parseInt(C, 16)))), f = /* @__PURE__ */ new Map(), R = (h) => {
    if (h === `
` || h === "	") return false;
    if (h.length === 1) {
      let C = h.charCodeAt(0);
      if (C >= 55296 && C <= 57343) return true;
    }
    let S = f.get(h);
    if (S === void 0) S = $n.test(h), f.set(h, S);
    return S;
  }, y = (h) => {
    let S = "", C = 0;
    while (C < h.length) {
      if (h[C] !== "%") {
        S += h[C], C++;
        continue;
      }
      let w = [], D = C + 1, V = false;
      while (D < h.length && w.length < 2) {
        let j = String.fromCodePoint(h.codePointAt(D) ?? 0);
        if (/^[0-9A-Fa-f]$/.test(j)) w.push(j), D += j.length;
        else if (R(j) && !/[\n\t]/.test(j) || /^\p{M}$/u.test(j)) V = true, D += j.length;
        else break;
      }
      if (w.length === 2 && V) S += "%" + w.join(""), C = D;
      else S += "%", C++;
    }
    return S;
  }, u = 0, E = (h) => {
    let S = h, C = 0;
    for (let w = 0; w <= Un; w++) {
      if (C += S.length, u += w === 0 ? 0 : S.length, C > Vn || u > Wn) break;
      let D = wW(c(y(S)));
      if (D === S) return S;
      S = D;
    }
    throw Error("MCP error text or config too long or too deeply encoded");
  }, T = /* @__PURE__ */ new Map(), b = (h) => {
    let S = T.get(h);
    if (S === void 0) S = /\p{M}/u.test(h.normalize("NFD")) ? [...h.normalize("NFD")].filter((C) => !/\p{M}/u.test(C)).join("") : h, T.set(h, S);
    return S;
  }, x = /* @__PURE__ */ new Map(), M = (h) => {
    let S = x.get(h);
    if (S === void 0) S = [...E(h)].filter((C) => !R(C)).map(b).join(""), x.set(h, S);
    return S;
  }, O = e.length > Je, A = /%[%0-9A-Fa-f]{0,11}$/, B = O ? E(re(e, Je).replace(A, "")).replace(A, "").replace(/\uFFFD+$/, "") : E(e);
  if (B.length > Kn) throw Error("MCP error text too long once decoded");
  let P = "", W = "", z = [];
  for (let h of B) {
    if (R(h)) {
      W += " ";
      continue;
    }
    let S = b(h);
    for (let C = 0; C < S.length; C++) z.push(W.length + Math.min(C, h.length - 1));
    P += S, W += h;
  }
  z.push(W.length);
  let Q = [], Y = (h, S, C) => {
    let w = h === void 0 ? void 0 : M(h);
    if (!w || w.length < 4) return;
    if (S !== "[redacted]" && S.includes(w)) return;
    Q.push([w, S, C?.wordBoundary === true]);
  }, X = (h, S = d) => {
    let C = h === void 0 ? void 0 : M(h);
    if (C && (S.includes(C) || jn(C.trim()))) return;
    Y(C, "[redacted]");
  }, K = (h, S = d) => {
    if (!h) return;
    if (X(h, S), h.includes("+")) X(h.replaceAll("+", " "), S);
    if (h.includes(" ")) X(h.replaceAll(" ", "+"), S);
    for (let C of [h, h.replaceAll("+", " ")]) {
      let w = C.split(/\s+/);
      if (w.length > 1) for (let D of w) X(D, S);
    }
  }, Ce = (h, S) => {
    Y(h, S);
    let C = URL.parse(h);
    if (C === null) return;
    if (Y(C.href, S), C.origin !== "null") Y(C.origin, S);
    Y(C.host, S), Y(C.hostname, S);
    let w = C.hostname.replace(/^\[|\]$/g, "");
    if (w !== C.hostname) Y(w, S);
    K(C.username, S), K(C.password, S), X(C.pathname !== "/" ? C.pathname : void 0, S);
    for (let D of C.pathname.split("/")) K(D, S);
    X(C.search, S);
    for (let [D, V] of C.searchParams.entries()) K(D, S), K(V, S);
    for (let D of C.search.replace(/^\?/, "").split("&")) {
      let V = D.indexOf("=");
      if (V === -1) K(D, S);
      else K(D.slice(0, V), S), K(D.slice(V + 1), S);
    }
  };
  for (let h of Gn(r, n)) K(h);
  if ("url" in n && typeof n.url === "string") Ce(n.url, d);
  if ("oauth" in n && typeof n.oauth?.authServerMetadataUrl === "string") {
    let h = n.oauth.authServerMetadataUrl, S = "[redacted]";
    try {
      let C = new URL(h).origin;
      if (C !== "null") S = C;
    } catch {
    }
    Ce(h, S);
  }
  if ("command" in n && typeof n.command === "string") {
    let h = r && "command" in r && typeof r.command === "string" ? yFe(r.command) : void 0;
    if (Y(n.command, h ?? d, { wordBoundary: true }), Array.isArray(n.args)) for (let S of n.args) K(S);
  }
  if ("headers" in n && n.headers) for (let h of Object.values(n.headers)) K(h);
  if ("env" in n && n.env) for (let h of Object.values(n.env)) K(h);
  if ("authToken" in n && typeof n.authToken === "string") K(n.authToken);
  if (Q.length === 0) return O ? `${W}…` : e;
  Q.sort((h, S) => S[0].length - h[0].length);
  let ie = /* @__PURE__ */ new Map();
  for (let [h, S, C] of Q) {
    let w = ie.get(h);
    if (!w) ie.set(h, { replacement: S, wordBoundary: C });
    else if (w.replacement === "[redacted]" && S !== "[redacted]") ie.set(h, { replacement: S, wordBoundary: w.wordBoundary && C });
  }
  let Te = new Int32Array(P.length), Oe = [], xe = /* @__PURE__ */ new Set(), dn = 0, ln = P.toUpperCase();
  for (let [h, S] of ie) {
    if (!ln.includes(h.toUpperCase())) continue;
    let C = S.wordBoundary && /^[\w-]+$/.test(h), w = `${C}:${h.replace(/[a-z]+/g, (I) => I.toUpperCase())}`;
    if (xe.has(w)) continue;
    xe.add(w);
    let D = di(h), V = C ? `(?<![\\w:.-])${D}(?![\\w:.-])` : D, j = new RegExp(V, "gi");
    for (let I = j.exec(P); I !== null; I = j.exec(P)) {
      if (++dn > Hn) throw Error("MCP error text repeats too much of the config");
      let v = I.index + I[0].length;
      if (v > (Te[I.index] ?? 0)) Te[I.index] = v, Oe[I.index] = S.replacement;
      j.lastIndex = I.index + 1;
    }
  }
  let _e = [];
  for (let [h, S] of Te.entries()) {
    if (S === 0) continue;
    let C = _e.at(-1);
    if (C && h < C.end) C.end = Math.max(C.end, S);
    else _e.push({ start: h, end: S, replacement: Oe[h] ?? "" });
  }
  let H = P.length;
  if (O) {
    let h = H, S = 12;
    while (h > 0 && H - h < S && /[%0-9A-Fa-f\uFFFD]/.test(P[h - 1] ?? "")) h--;
    if (h < H && /[%\uFFFD]/.test(P.slice(h, H))) {
      let v = P.slice(h, H).search(/[%\uFFFD]/);
      H = h + v;
    }
    let C = Q[0]?.[0].length ?? 0, w = Math.max(0, H - (C - 1)), D = L(Q.map(([v]) => v.toUpperCase())).sort((v, ae) => ae.length - v.length), V = P.slice(w, H), j = [], I = "";
    for (let v of V) j.push(I.length, ...v.length === 2 ? [-1] : []), I += v.toUpperCase();
    for (let v = 0; v < V.length; v++) {
      let ae = j[v] ?? 0, cn = ae === -1 ? V.charAt(v) + I.slice(j[v + 1] ?? I.length) : I.slice(ae);
      if (Qn(cn, D)) {
        H = w + v;
        break;
      }
    }
  }
  let Me = (h) => h === 0 ? 0 : (z[h - 1] ?? 0) + 1, G = "", se = 0;
  for (let h of _e) {
    if (h.start >= H) break;
    G += W.slice(Me(se), z[h.start]) + h.replacement, se = h.end;
  }
  if (se < H) G += W.slice(Me(se), z[H]);
  let we = G.charCodeAt(G.length - 1);
  if (we >= 55296 && we <= 56319) G = G.slice(0, -1);
  return O ? `${G}…` : G;
}
var rLo = "bypassPermissions not supported in restricted mode";
function Yzs(e) {
  return e.restricted && (e.permissionMode === "bypassPermissions" || e.allowDangerouslySkipPermissions) ? rLo : void 0;
}
function Xzs(e) {
  return e.some((n) => n.startsWith("preset:")) ? /* @__PURE__ */ new Set() : new Set(e);
}
function wcn(e, n) {
  let o = [...e, qn].filter((s) => !n.has(s)), r = [...n.has(Be) ? [] : [Tqe], ...n.has(qn) ? [] : [Har]], d = [...[...SEn].map((s) => jo(s, Qor)), ...Tir.map((s) => jo(Vo, `${s}${Qor}`)), jo(_pe, `${bEn}${Qor}`)];
  return [...o, ...r, Wrt, $ai, ...d];
}
var Xn = ["default"];
function jFr(e) {
  let n = e.toLowerCase();
  if (!Xn.includes(n)) return null;
  return n;
}
function X4n(e) {
  return /* @__PURE__ */ new Set([...e.filter((n) => n.enablesCodeExecution).map((n) => n.name), Tt]);
}
function WFr(e) {
  return e.filter((n) => n.isEnabled()).map((n) => n.name);
}
function MJ(e, n) {
  let o = NFr(e), r = [...Pd(n), ...eo(e, n)], d = Fmn(n, r);
  return e.filter((s) => {
    if (on(n, s, r, d) || s.mcpInfo?.effectiveMaxPermission === "blocked" || !o && s.mcpInfo?.standardKey !== void 0) return false;
    if (!v1t(n, s)) return true;
    if (qi().claim(`tool_outside_launch_list:${s.name}`)) t(`${Ig(s)} is not on this session's --tools list and no deny rule names it; withheld. Name it in --tools to offer it`, { level: "warn" }), a("tengu_tool_withheld_outside_launch_list", { toolName: Nn(Ig(s)) });
    return false;
  });
}
function v1t({ toolsKeptByLaunchList: e }, n) {
  return !(e === void 0 || Zh(n) || n.mcpInfo !== void 0 || M2(n) || oG(n) || e.includes(n.name) || n.familyParentToolName !== void 0 && e.includes(n.familyParentToolName));
}
function AQe(e, n, o = Pd(e), r) {
  return on(e, n, o, r);
}
function on(e, n, o, r) {
  let d = (s) => r !== void 0 ? YTe(e, r, s) : oo(e, s, o) !== null;
  if (d(n)) return true;
  if (n.underlyingV1ToolName && d({ name: n.underlyingV1ToolName })) return true;
  if (n.mcpInfo === void 0) {
    let s = BCe(n.name);
    if (s !== void 0 && d(s) && s.isEnabled()) return true;
  }
  if (M2(n) && Zn(e, o)) return true;
  if (n.mcpInfo === void 0 && C1t().includes(n.name) && ke(e, o) !== null) return true;
  return false;
}
function k1t(e, n) {
  if (!Qrs().has(n.name)) return false;
  if (zs("hipaa")) return false;
  let o = Pd(e).filter((r) => r.source !== "toolsNarrowing");
  return !AQe(e, n, o);
}
function Zn(e, n) {
  return n.some((o) => o.ruleValue.toolName === Be);
}
function C1t() {
  return [Gs, import.meta.require("../shared/appifact-repl-tool-name.js").APPIFACT_REPL_TOOL_NAME];
}
function ke(e, n) {
  return Jn(e, n.filter((o) => o.source !== "toolsNarrowing"));
}
function Ecn(e, n) {
  let o = ke(e, Pd(e));
  if (o !== null) return { rule: o, verdict: { behavior: "deny", message: `Permission to use ${n} has been denied: it runs code as ${Be} does, and a rule denies ${Be}.`, decisionReason: { type: "rule", rule: o } } };
  let r = ke(e, yu(e));
  return r === null ? null : { rule: r, verdict: { behavior: "ask", message: `${n} runs code as ${Be} does, and a rule asks before ${Be} runs.`, decisionReason: { type: "rule", rule: r } } };
}
function Jn(e, n) {
  let o = e.toolAliases?.[Be], r = [Be, ...o !== void 0 ? [o] : []];
  for (let d of r) {
    let s = oo(e, { name: d }, n);
    if (s !== null) return s;
  }
  return n.find((d) => r.includes(d.ruleValue.toolName) && d.ruleValue.ruleContent !== void 0 && Xjo(d.ruleValue.ruleContent)) ?? null;
}
function eo(e, { restricted: n, toolsKeptByLaunchList: o }) {
  if (!(n === true && o === void 0)) return [];
  let r = /* @__PURE__ */ new Set([...e.filter((d) => d.enablesCodeExecution).map((d) => d.name), Tt]);
  return wcn(r, /* @__PURE__ */ new Set()).map((d) => ({ source: "toolsNarrowing", ruleBehavior: "deny", ruleValue: { toolName: d } }));
}
function GFr(e) {
  switch (e.kind) {
    case "policy_blocked":
    case "reserved_address":
    case "org_blocked":
    case "denied":
    case "disabled":
    case "switched_off":
    case "not_configured":
    case "replaced":
      return true;
    case "reconnecting":
    case "needs_auth":
    case "disconnected":
    case "auth_completed":
    case "not_offered":
    case "withdrawn":
      return false;
  }
}
function zFr(e) {
  return GFr(e) && e.kind !== "replaced";
}
function UCe(e, n, o, r, d = Jye(o)) {
  let s = r?.mcpInfo;
  if (s === void 0 && Nr(e) === null) {
    let u = { ...r, name: e, underlyingV1ToolName: Ide(e), familyParentToolName: r?.familyParentToolName };
    if (AQe(o, u, d.rules, d.index) && !k1t(o, u)) return { kind: "denied", serverName: void 0 };
    return R2o(u) ? { kind: "replaced" } : { kind: "withdrawn" };
  }
  let c = s === void 0 ? YTe(o, d.index, { name: e }) : AQe(o, { name: e, mcpInfo: s }, d.rules, d.index), R = tn(e, n, s).map(({ row: u, upstream: E }) => no(u, E, c)), y = R.find(GFr) ?? R.find((u) => u.kind === "not_offered" || u.kind === "auth_completed") ?? R[0];
  if (y) return y;
  return c ? { kind: "denied", serverName: void 0 } : { kind: "not_configured" };
}
function Jzs(e, n) {
  return tn(e, n, void 0).filter(({ row: o }) => o.type === "pending").map(({ row: o }) => o.name);
}
function tn(e, n, o) {
  if (o !== void 0) {
    let s = vn(o.toolName);
    return n.filter((c) => c.name === o.serverName).map((c) => ({ row: c, upstream: s }));
  }
  let r = n.map((s) => ({ row: s, prefix: io(s.name) })).filter(({ prefix: s }) => e.startsWith(s)), d = Math.max(0, ...r.map(({ prefix: s }) => s.length));
  return r.filter(({ prefix: s }) => s.length === d).map(({ row: s, prefix: c }) => ({ row: s, upstream: e.slice(c.length) }));
}
function no(e, n, o) {
  let r = jl(e.name);
  if (o) return { kind: "denied", serverName: r };
  if (to(e, n)) return { kind: "org_blocked", serverName: r };
  switch (e.type) {
    case "pending":
      return { kind: "reconnecting", serverName: r };
    case "needs-auth":
      return { kind: "needs_auth", serverName: r };
    case "failed":
      if (hcn(e.error)) return { kind: "policy_blocked", serverName: r };
      if (ycn(e.error)) return { kind: "reserved_address", serverName: r };
      return MO(e) ? { kind: "not_configured" } : { kind: "disconnected", serverName: r };
    case "disabled":
      return { kind: e.config.type === "sdk" ? "switched_off" : "disabled", serverName: r };
    case "connected":
    case "cached":
      if (HGe(e)) return { kind: "switched_off", serverName: r };
      return n === TQe || n === fcn ? { kind: "auth_completed", serverName: r } : { kind: "not_offered", serverName: r };
  }
}
function to(e, n) {
  if (!("toolPermissions" in e.config)) return false;
  let o = e.config.toolPermissions;
  if (!o) return false;
  return Object.entries(o).some(([r, d]) => d === "blocked" && vn(r) === n);
}
function Xhe() {
  return Ep();
}
class HJ {
  names;
  recordedOnly;
  recordOrder;
  #e;
  constructor(e, n = { only: /* @__PURE__ */ new Map(), order: [] }) {
    this.names = n.names ?? [...e.map((o) => o.name), ...n.only.keys()], this.recordedOnly = n.only, this.recordOrder = n.order, this.#e = new Map(e.map((o) => [o.name, o]));
  }
  has(e) {
    return this.#e.has(e) || this.recordedOnly.has(e);
  }
  keeps(e) {
    return this.has(e) && e !== Ya;
  }
  toolFor(e) {
    return this.#e.get(e);
  }
  without(e) {
    return new HJ([...this.#e.values()].filter((n) => !e.has(n.name)), { only: new Map([...this.recordedOnly].filter(([n]) => !e.has(n))), order: this.recordOrder.filter((n) => !e.has(n)), names: this.names.filter((n) => !e.has(n)) });
  }
  sourceFor(e) {
    let n = this.#e.get(e), o = this.recordedOnly.get(e)?.server;
    if (n !== void 0 || o === void 0) return n;
    return sn(e, o);
  }
}
function oLo(e) {
  return e ?? ps();
}
function Jhe(e) {
  let n = e.declaredTools;
  return n instanceof HJ ? n : void 0;
}
function vcn(e) {
  let n = e.noChannelTools;
  return n instanceof HJ ? n : void 0;
}
function sLo(e, n, o) {
  if (n) {
    e.noChannelTools = void 0;
    return;
  }
  if (e.noChannelTools === void 0 && !Xhe()) return;
  let r = o();
  return e.noChannelTools = r, r;
}
function iLo(e, n, o) {
  let r = new Set([...n, ...e].map((u) => u.name)), d = new Map([...o ?? []].filter(([u]) => !r.has(u)));
  if (d.size === 0) return new HJ(e);
  let s = (u) => u.isMcp === true || Nr(u.name) !== null, c = e.findIndex(s), f = (u, E) => !s(u) && (u.name === Ya && E === e.length - 1 || c !== -1 && E > c), R = [...e.filter(s).map((u) => u.name), ...d.keys()].sort((u, E) => n_e({ name: u }, { name: E })), y = [...e.filter((u, E) => !s(u) && !f(u, E)).map((u) => u.name), ...R, ...e.filter(f).map((u) => u.name)];
  return new HJ(e, { only: d, order: y, names: y });
}
var ro = /* @__PURE__ */ new Set(["name", "description", "input_schema", "type", ...le]);
async function Qzs({ recordedToolDescriptions: e, recordedToolServers: n, recordedToolEntries: o, mcpClients: r = [], getToolPermissionContext: d }, s, c) {
  if (e === void 0 || e.has(ki) || !Xhe()) return;
  let f = new Set(s.map((T) => T.name)), R = [];
  for (let T of e.keys()) {
    let b = o?.get(T), x = n?.get(T);
    if (!f.has(T) && c?.has(T) !== true && b !== void 0 && x !== void 0 && T.startsWith(io(x)) && b.name === T && /^[a-zA-Z0-9_-]+$/.test(T) && Object.keys(b).every((M) => ro.has(M))) R.push({ name: T, entry: b, server: x });
  }
  if (R.length === 0) return;
  let y = await d(), u = /* @__PURE__ */ new Map(), E;
  for (let { name: T, entry: b, server: x } of R) try {
    if (E ??= Jye(y), UCe(T, r, y, sn(T, x), E).kind === "reconnecting") u.set(T, { entry: b, server: x });
  } catch (M) {
    l(N(M));
  }
  return u.size === 0 ? void 0 : u;
}
async function Zzs(e, n, { mcpClients: o, getPermissionContext: r, byValue: d }) {
  let s = J4n(e, n, true);
  if (s.length === 0) return { kept: e, unread: 0 };
  let c = zs("hipaa"), f = (b) => c && !he(b, e.sourceFor(b)?.mcpInfo?.serverName), R = (b) => d?.has(b) === true || f(b), y;
  try {
    y = await r();
  } catch (b) {
    l(N(b));
    let x = new Set(s.filter(R));
    return { kept: x.size === 0 ? e : e.without(x), unread: 0 };
  }
  let u = 0, E, T = new Set(s.filter((b) => {
    if (R(b)) return true;
    try {
      return E ??= Jye(y), zFr(UCe(b, o, y, e.sourceFor(b), E));
    } catch (x) {
      return l(N(x)), u++, true;
    }
  }));
  return { kept: T.size === 0 ? e : e.without(T), unread: u };
}
function rGe(e) {
  if (e.agentId && !e.stickyBetas) return;
  return oLo(e.stickyBetas);
}
function RQe(e) {
  let n = rGe(e);
  return n === void 0 ? void 0 : Jhe(n);
}
function kcn(e) {
  let n = rGe(e);
  return n === void 0 ? void 0 : vcn(n);
}
function e6s(e, n) {
  if (kAt(e), e.declaredTools !== void 0 || !Xhe()) return false;
  return RCn(e, new HJ(n)), true;
}
function so(e, n, { servers: o, entries: r } = ao, d) {
  let s = new Map(n.map((O) => [O.name, O])), c, f = () => (c ??= cj() ?? null, c ?? void 0), R = (O) => {
    let A = f()?.find((B) => Rt(B, O))?.underlyingV1ToolName;
    return A === void 0 ? void 0 : s.get(A);
  }, y = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), E = 0, T = 0, b = 0, x = (O) => {
    return;
  }, M = [...e];
  for (let O of M) {
    let A = s.get(O) ?? x(O) ?? R(O);
    if (A === void 0) {
      let P = r?.get(O), W = o?.get(O);
      if (P === void 0 || go(O, W, f())) continue;
      if (lo(O, W, f(), n)) u.set(O, { entry: P, server: W });
      else {
        let z = fo(O, f(), d);
        if (z === "launch_omitted") u.set(O, { entry: P, server: W }), b++;
        else if (z === "gate_off") {
          if (u.set(O, { entry: P, server: W }), E++, uo(O, f())) T++;
        }
      }
      continue;
    }
    y.set(A.name, A);
    let B = A.underlyingV1ToolName === void 0 ? void 0 : s.get(A.underlyingV1ToolName);
    if (B !== void 0) y.set(B.name, B);
  }
  for (let O of n) if (O.underlyingV1ToolName !== void 0 && y.has(O.underlyingV1ToolName)) y.set(O.name, O);
  for (let O of y.keys()) u.delete(O);
  return y.size === 0 && u.size === 0 ? void 0 : { held: new HJ(n.filter((O) => y.has(O.name)), { only: u, order: M }), recorded: M.length, gateOff: E, needsUser: T, launchOmitted: b };
}
function T1t(e, n, o, { latch: r, permissionContext: d }) {
  let s = Jhe(e);
  if (s !== void 0 || e.declaredToolsDecided) return s;
  if (r) kAt(e);
  if (e.declaredTools !== void 0 || !Xhe()) return;
  let c = n(), f = c === void 0 ? void 0 : so(c.names, o, c, d);
  if (f === void 0 || !r) return f?.held;
  return RCn(e, f.held), a("tengu_declared_tool_set_from_record", { recorded: f.recorded, held: f.held.names.length - f.held.recordedOnly.size, heldByName: f.held.recordedOnly.size, heldGateOff: f.gateOff, heldNeedsUser: f.needsUser, heldLaunchOmitted: f.launchOmitted }), f.held;
}
function VFr(e, n) {
  if (n === void 0) return { tools: e, redeclared: [] };
  let o = new Set(e.map((c) => c.name)), r = (c) => o.has(c) || !n.keeps(c) ? void 0 : n.toolFor(c);
  if (n.names.every((c) => r(c) === void 0)) return { tools: e, redeclared: [] };
  let d = [...e], s = [];
  return n.names.forEach((c, f) => {
    let R = r(c);
    if (!R) return;
    let y = -1;
    for (let u = f - 1; u >= 0 && y === -1; u--) {
      let E = n.names[u];
      y = d.findIndex((T) => T.name === E);
    }
    if (y !== -1) d.splice(y + 1, 0, R);
    else {
      let u = d.findIndex((E) => n.has(E.name));
      d.splice(u === -1 ? 0 : u, 0, R);
    }
    o.add(c), s.push(c);
  }), s.length === 0 ? { tools: e, redeclared: s } : { tools: d, redeclared: s };
}
function KFr(e, n) {
  let o = n.turnDeniedTools;
  return VFr(e, o instanceof HJ ? o : void 0).tools;
}
function t6s(e, n) {
  let o = Jhe(e);
  if (o === void 0 || n.length === 0) return;
  e.declaredTools = o.without(new Set(n)), a("tengu_declared_tools_dropped_at_compaction", { dropped: n.length, noDeferredChannel: false });
}
function n6s(e, n) {
  let o = e === void 0 ? void 0 : vcn(e);
  return J4n(o, n, true);
}
function r6s(e, n) {
  let o = vcn(e);
  if (o === void 0 || n.length === 0) return;
  e.noChannelTools = o.without(new Set(n)), a("tengu_declared_tools_dropped_at_compaction", { dropped: n.length, noDeferredChannel: true });
}
function J4n(e, n, o) {
  if (e === void 0) return [];
  let r = new Set(n.map((d) => d.name));
  return e.names.filter((d) => {
    if (r.has(d) || !e.keeps(d)) return false;
    let s = e.sourceFor(d)?.mcpInfo;
    return o || !he(d, s?.serverName);
  });
}
var ao = { servers: void 0, entries: void 0 };
function lo(e, n, o, r) {
  if (e === Ya) return false;
  if (n !== void 0) return true;
  if (Nr(e) !== null) return false;
  if (e === GD && !r.some((d) => Rt(d, ki))) return true;
  return o !== void 0 && Mb(o, e) === void 0;
}
function fo(e, n, o) {
  if (o === void 0 || n === void 0) return;
  if (e === Ya || e === GD || Nr(e) !== null) return;
  let r = n.find((d) => d.name === e);
  if (r === void 0 || r.isMcp === true) return;
  if (!mo() || zs("hipaa")) return;
  if (AQe(o, r)) return k1t(o, r) ? "launch_omitted" : void 0;
  if (v1t(o, r)) return o.builtInToolsDisabled === true || o.restricted === true && wcn(X4n([r]), /* @__PURE__ */ new Set()).includes(r.name) ? void 0 : "launch_omitted";
  if (r.isEnabled()) return;
  return "gate_off";
}
function uo(e, n) {
  return n?.find((o) => o.name === e)?.requiresUserInteraction?.() === true;
}
var po = "tengu_gleaming_cupcake";
function mo() {
  return k(po, true);
}
var yo = "tengu_joyful_anchor";
function go(e, n, o) {
  if (he(e, n)) return false;
  let r = k(yo, null);
  if (!Array.isArray(r) || r.length === 0) return false;
  let d = o?.find((s) => Rt(s, e));
  return r.some((s) => typeof s === "string" && (s === e || d !== void 0 && Rt(d, s)));
}
function sn(e, n) {
  let o = io(n);
  return { mcpInfo: { serverName: n, toolName: e.startsWith(o) ? e.slice(o.length) : e } };
}
function he(e, n) {
  return n !== void 0 || Nr(e) !== null;
}
function o6s(e, n, { pool: o, keptDeferred: r, keepMcp: d, requestCarriesStructuredOutputs: s, recordedEntries: c }) {
  let f = new Set(aLo(n, { pool: o, keptDeferred: r, keepMcp: d }));
  if (f.size === 0) return [];
  let R = new Set(e.map(ge)), y = n.recordOrder, u = { strict: s, eager: fe(e) }, E = [];
  return y.forEach((T, b) => {
    let x = n.recordedOnly.get(T);
    if (x === void 0 || R.has(T) || !f.has(T)) return;
    let M = c?.get(T) ?? x.entry, O = -1;
    for (let A = b - 1; A >= 0 && O === -1; A--) {
      let B = y[A];
      if (R.has(B)) O = e.findIndex((P) => ge(P) === B) + 1;
    }
    if (O === -1) {
      let A = new Set(y), B = e.findIndex((P) => A.has(ge(P) ?? ""));
      O = B === -1 ? 0 : B;
    }
    e.splice(O, 0, ne(M, u)), R.add(T), E.push(T);
  }), E;
}
function aLo(e, { pool: n, keptDeferred: o, keepMcp: r }) {
  let d = /* @__PURE__ */ new Set([...n.map((s) => s.name), ...o]);
  return e.recordOrder.filter((s) => {
    let c = e.recordedOnly.get(s);
    return c !== void 0 && !d.has(s) && (r || !he(s, c.server));
  });
}
function ge(e) {
  return "name" in e && typeof e.name === "string" ? e.name : void 0;
}
function s6s() {
  return eHe();
}
function i6s(e) {
  let n = /* @__PURE__ */ new Set();
  for (let o of e) {
    let r = ge(o);
    if (r !== void 0) n.add(r);
  }
  return n;
}
function a6s(e) {
  if (e.deferredLate === 0 && e.redeclared === 0 && e.fromRecord === 0 && e.unclassifiedDepartures === 0) return;
  a("tengu_declared_tool_set_held", { deferredLate: e.deferredLate, redeclared: e.redeclared, fromRecord: e.fromRecord, ...e.queryDepth !== void 0 && { queryDepth: e.queryDepth }, toolSearchAbsent: e.toolSearchAbsent, noDeferredChannel: e.noDeferredChannel, unclassifiedDepartures: e.unclassifiedDepartures });
}
function te(e, n) {
  return xQe(e) && nRe(n);
}
function xQe(e) {
  return mk(e, zb) && !Ee(e);
}
function Ee(e) {
  return Vf(e, hI) || Gss() || !eHe();
}
function tHe(e, n) {
  return (mk(e, zb) || Ktr() && !Vf(e, zb)) && !Ee(e) && nRe(n);
}
function l6s(e, n) {
  return Q4n(e) && te(e, n);
}
function Q4n(e) {
  return mk(e, pb) && !mcr() && xQe(e);
}
function qFr(e, n) {
  if (mcr() || Vf(e, pb)) return false;
  if (mk(e, pb)) return tHe(e, n);
  return !mk(e, zb) && Ozt() && tHe(e, n);
}
function YFr(e, n, { toolSearchToolFilteredOut: o, toolPoolRefreshes: r, aheadOfRequest: d }) {
  return o && (d ? tHe(e, n) : te(e, n)) && (Jhe(e) !== void 0 || r && Xhe());
}
function d6s(e, n, o) {
  let r = !mk(e, zb);
  if (n.includes(zb) && !Ee(e)) {
    if (c$(e, zb), r && n.includes(pb) && !mcr() && !Vf(e, pb)) c$(e, pb);
  }
  let d = te(e, o), s = d && Q4n(e), c = n;
  if (d && !c.includes(zb)) c = [...c, zb];
  if (!d && c.includes(zb)) c = c.filter((f) => f !== zb);
  if (s && !c.includes(pb)) c = [...c, pb];
  if (!s && c.includes(pb)) c = c.filter((f) => f !== pb);
  return c;
}
function c6s(e, n, o, r) {
  if (te(e, o) && nRe(r)) {
    let d = n.includes(zb) ? n : [...n, zb], s = Q4n(e);
    if (s && !d.includes(pb)) return [...d, pb];
    return s ? d : d.filter((c) => c !== pb);
  }
  return n.filter((d) => d !== zb && d !== pb);
}
function u6s(e, n, { mintModel: o, retryModel: r, advisorEntryMoved: d, deferredEntriesMoved: s, hasDeferredChannel: c }) {
  try {
    if (!te(e, o) || nRe(r)) return;
    let f = { advisor_entry: d, deferred_entries: s, announcement_blocks: c && n.some((R) => ho(e, R)) };
    return Object.values(f).some(Boolean) ? f : void 0;
  } catch (f) {
    l(N(f));
    return;
  }
}
function ho(e, n) {
  if (n.type !== "attachment" || n.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(n.uuid)) return false;
  let o = n.attachment.surfacedNames;
  return Array.isArray(o) && o.some((r) => typeof r === "string" && (e.surfacedOnWire.has(r) || e.definedByValue.has(r)));
}
function p6s(e, n, o, r, d = /* @__PURE__ */ new Set()) {
  if (!r) return;
  let s = !xQe(e);
  for (let c of n) {
    if (c.type !== "attachment" || c.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(c.uuid)) continue;
    let f = c.attachment.surfacedNames;
    if (Array.isArray(f) && f.length > 0 && (s || f.some((R) => typeof R !== "string" || !o.has(R) && !d.has(R)))) e.nameOnlyAnnouncements.add(c.uuid);
  }
}
function lLo(e, n, o, { useToolSearch: r, toolSearchAbsent: d, blocksEligible: s, byValueNames: c = /* @__PURE__ */ new Set(), byValueStaysOut: f }) {
  if (!r && !d) return;
  if (!s) {
    if (!xQe(e)) e.surfacedOnWire.clear(), e.definedByValue.clear();
    else if (f) e.definedByValue.clear();
    return;
  }
  e.surfacedOnWire.clear(), e.definedByValue.clear();
  let R = /* @__PURE__ */ new Set();
  for (let y of o) if (y.type === "api_system") {
    for (let u of y.toolRemovals ?? []) e.definedByValue.delete(u);
    for (let u of y.toolAdditions ?? []) if (E1t(y.toolDefinitions, u) !== void 0) R.add(u), e.definedByValue.add(u);
    else e.surfacedOnWire.add(u);
  }
  if (d) return;
  for (let y of n) {
    if (y.type !== "attachment" || y.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(y.uuid)) continue;
    let u = y.attachment.surfacedNames;
    if (Array.isArray(u) && u.some((E) => typeof E === "string" && !e.surfacedOnWire.has(E) && !R.has(E) && !c.has(E))) e.nameOnlyAnnouncements.add(y.uuid);
  }
}
function f6s(e, n, o, r) {
  if (dLo(e), n === "header_rejected" || n === "block_type_unknown") {
    if (zss(), n === "header_rejected") {
      if (jAt(zb), r) k7r(), jAt(pb);
    }
  } else if (n === "model_unsupported") eis(Xe(o));
  t(`[late-tool-additions] tool_addition rejected (${n}) — falling back to the ToolSearch announcement (or to inline tools where there is no ToolSearch), sticky-rejecting the beta until /clear or /compact`, { level: "warn" }), p("mcp_late_tool_additions", `rejected_${n}`);
}
function dLo(e) {
  if (mk(e, zb)) _g(e, zb);
  an(e), e.surfacedOnWire.clear();
}
function an(e) {
  if (mk(e, pb)) Gts(e, pb);
  e.definedByValue.clear();
}
function m6s(e, n) {
  if (an(e), n === "header_rejected" || n === "unsupported_on_platform") {
    if (k7r(), n === "header_rejected") jAt(pb);
  }
  t(`[inline-tools] tool_definition rejected (${n}) — falling back to declaring late tools in tools[] and showing them by reference, off for the rest of this conversation (carried through a compaction; /clear starts afresh)`, { level: "warn" }), p("mcp_inline_tools", `rejected_${n}`);
}
function g6s(e, n, o, r = [], d = {}) {
  let s = [...e ? [{ type: "text", text: e }] : [], ...r.map((c) => ({ type: "tool_removal", tool: { type: "tool_reference", name: c } })), ...n.map((c) => {
    let f = E1t(d, c);
    return f === void 0 ? { type: "tool_addition", tool: { type: "tool_reference", name: c } } : { type: "tool_addition", tool: { type: "tool_definition", definition: f } };
  })];
  if (o !== void 0 && s.length > 0) s.push({ ...s.pop(), cache_control: o });
  return s;
}
export {
  $Fr,
  $zs,
  AQe,
  BFr,
  Byt,
  Bzs,
  C1t,
  DFr,
  Dzs,
  E1t,
  Ecn,
  FFr,
  Fzs,
  GFr,
  Gzs,
  HJ,
  Hzs,
  J4n,
  Jhe,
  Jzs,
  K4n,
  KFr,
  Kzs,
  LFr,
  Lzs,
  M2,
  MJ,
  MO,
  Mb,
  Mzs,
  NFr,
  Nzs,
  Ozs,
  Q4n,
  QDo,
  Qzs,
  RQe,
  Scn,
  T1t,
  TQe,
  UCe,
  UFr,
  Uyt,
  Uzs,
  VFr,
  Vzs,
  WFr,
  Wzs,
  X4n,
  Xhe,
  Xzs,
  Y4n,
  YFr,
  Yhe,
  Yzs,
  ZDo,
  Zzs,
  _cn,
  a6s,
  aLo,
  bcn,
  bw,
  c6s,
  ccn,
  co,
  d6s,
  dLo,
  dcn,
  e6s,
  eHe,
  eLo,
  f6s,
  fcn,
  g6s,
  gcn,
  hcn,
  i6s,
  iLo,
  jFr,
  jP,
  jl,
  jzs,
  k1t,
  kcn,
  l6s,
  lLo,
  m6s,
  mcn,
  mre,
  n6s,
  nLo,
  o6s,
  oLo,
  oV,
  p6s,
  pcn,
  q4n,
  qFr,
  qzs,
  r6s,
  rGe,
  rLo,
  s6s,
  sLo,
  t6s,
  tHe,
  tLo,
  u6s,
  uU,
  ucn,
  v1t,
  vcn,
  wcn,
  xQe,
  ycn,
  zFr,
  zzs
};
