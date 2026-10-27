// context/account-memory-text-not-identified.y6np.js — Claude Code 2.1.310 模块 chunk-y6npzva0.js
import { __asset_src } from "../runtime/assets.js";
import { Ne } from "../fs/async-hooks.9s1z.js";
import { L, Mmi, U, V, D3e, _rs, ye, Wr, UI, J, g$ } from "./not-admin-owned.ersa.js";
import { d, vr, GI, ui } from "../telemetry/anthropic-workspace-id.36ys.js";
import { Pe } from "../shared/chunk-3kevgx4j.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { Atr, JU, Bc, gn, sT, Hoi, aT, Up, bSn, EH } from "../settings/global-config-and-gates.27xj.js";
import { fl, Km } from "../mcp/allowed-warning.j2d4.js";
import { _, ee, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Qr } from "../models/claude-3-5-sonnet.21mz.js";
import { di } from "../shared/chunk-j79dwkaq.js";
import { i } from "../shared/environment.9a41.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { Uu } from "../remote/local-agent.we9a.js";
import { Ko } from "../shared/chunk-z6efcye4.js";
import { Rar } from "../mcp/always-allow.9m89.js";
import { Pt } from "../shared/async-hooks.m2fg.js";
import { B8r, ZZ } from "../git/utf-8.vh7e.js";
import { jt } from "../shared/chunk-nfgwaxf2.js";
import { stt, itt } from "../vendor/opentelemetry/chunk-6rkmrewr.js";
import { HQn, OQ } from "./other-server.kvdt.js";
import { ge, dr, Ct } from "../vendor/zod/invalid-return-type.ezsz.js";
import { od } from "../shared/sk-ant-sid.0hme.js";
import { IFe, xui, IM } from "../shared/chunk-s06z5etx.js";
import { Ae } from "../vendor/react/chunk-meds60nn.js";
var C = Ae(fl(), 1), Re = Ae(Km(), 1);
var we = f(() => Ct({ sub: ge().optional().catch(void 0), email: ge().optional().catch(void 0), groups: dr(ge()).optional().catch(void 0) }).passthrough());
function G(e) {
  let n = e.indexOf("."), o = e.indexOf(".", n + 1);
  if (n < 0 || o < 0) return null;
  try {
    let r = we().safeParse(ee(Buffer.from(e.slice(n + 1, o), "base64url").toString("utf8")));
    return r.success ? r.data : null;
  } catch {
    return null;
  }
}
function IQn(e) {
  return UI(e) ? G(e.jwt)?.sub || void 0 : void 0;
}
var D = Object.freeze({}), Ie = new W(() => ({ jwt: void 0, attrs: D }));
function z2r() {
  let e = Wr(), n = UI(e) ? e.jwt : void 0, o = Ie.of(U().host);
  if (n === o.jwt) return o.attrs;
  if (o.jwt = n, !n) return o.attrs = D;
  let r = G(n);
  if (!r) return o.attrs = D;
  let s = { "identity.source": "gateway-oidc" };
  if (r.sub) s["user.id"] = r.sub;
  if (r.email) s["user.email"] = r.email;
  if (r.groups && r.groups.length > 0) s["user.groups"] = r.groups.join(",");
  return o.attrs = Object.freeze(s);
}
var be = { OTEL_METRICS_INCLUDE_SESSION_ID: true, OTEL_METRICS_INCLUDE_VERSION: false, OTEL_METRICS_INCLUDE_ACCOUNT_UUID: true, OTEL_METRICS_INCLUDE_ENTRYPOINT: false, OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES: true, OTEL_METRICS_INCLUDE_REPOSITORY: false }, I = "vcs.repository.url.full", k = "vcs.repository.name", N = "vcs.owner.name", P = "vcs.provider.name", Me = "vcs.ref.head.revision", Oe = "vcs.ref.head.name", ve = "vcs.ref.head.type", De = [I, N, k, P], ke = "gitea.com", Le = /^ssh:\/\/[^/?#]*:7999(?=[/?#]|$)/i;
function R(e) {
  let n = be[e], o = process.env[e];
  if (o === void 0) return n;
  return Ne(o);
}
function Y(e) {
  for (let n = 0; n < e.length; n++) {
    let o = e.charCodeAt(n);
    if (o < 33 || o === 44 || o === 59 || o === 92 || o > 126) return false;
  }
  return true;
}
var X = 255, q = Qr((e) => {
  if (!e) return {};
  let n = {};
  try {
    for (let o of e.split(",")) {
      let [r, s, ...c] = o.split("=");
      if (r === void 0 || s === void 0 || c.length > 0) continue;
      let u = r.trim(), p = s.trim().split(/^"|"$/).join("");
      if (u.length === 0 || u.length > X || !Y(u)) throw Error("invalid resource attribute key");
      if (p.length > X || !Y(p)) throw Error("invalid resource attribute value");
      n[u] = decodeURIComponent(p);
    }
  } catch {
    return {};
  }
  return n;
});
function k2t() {
  let e = EH(), n = V(), o = z2r(), r = Object.keys(o).length > 0, s = {}, c = q(i.OTEL_RESOURCE_ATTRIBUTES);
  if (R("OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES")) for (let [a, y] of Object.entries(c)) {
    if (r && (a.startsWith("user.") || a.startsWith("identity."))) continue;
    s[a] = y;
  }
  if (s["user.id"] = e, R("OTEL_METRICS_INCLUDE_SESSION_ID")) {
    if (s["session.id"] = n, i.CLAUDE_CODE_REMOTE_SESSION_ID) s["ccr.session.id"] = i.CLAUDE_CODE_REMOTE_SESSION_ID;
  }
  if (R("OTEL_METRICS_INCLUDE_VERSION")) s["app.version"] = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION;
  if (R("OTEL_METRICS_INCLUDE_ENTRYPOINT")) {
    let a = Uu();
    if (a) s["app.entrypoint"] = a;
  }
  if (R("OTEL_METRICS_INCLUDE_REPOSITORY")) {
    let a = c[I] === void 0 ? Q().attributes : void 0;
    for (let y of De) {
      let m = c[y] ?? a?.[y];
      if (m) s[y] = m;
    }
  }
  let u = sT() ?? gn() ?? Fe();
  if (u) {
    let a = u.organizationUuid, y = !J() ? u.emailAddress : stt() ? i.CLAUDE_CODE_USER_EMAIL : void 0, m = u.accountUuid;
    if (a) s["organization.id"] = a;
    if (y) s["user.email"] = y;
    if (m && R("OTEL_METRICS_INCLUDE_ACCOUNT_UUID")) {
      s["user.account_uuid"] = m;
      let E = i.CLAUDE_CODE_ACCOUNT_TAGGED_ID || Rar("user", m);
      if (E) s["user.account_id"] = E;
    }
  }
  Object.assign(s, o);
  let p = J() ? Hoi : aT.terminal;
  if (p) s["terminal.type"] = p;
  return s;
}
var Ue = new W(() => ({ settled: void 0, attributes: void 0 }));
function Q() {
  let e = Ue.of(U().host);
  if (e.settled === void 0 && !Pt()) e.settled = B8r().then((n) => {
    e.attributes = n ? Be(n) : void 0;
  }).catch(l);
  return e;
}
function Be(e) {
  let n = e.search(/[?#]/);
  if (n >= 0 && e.includes("@", n)) return;
  let o = ZZ((n >= 0 ? e.slice(0, n) : e).replace(/\/+$/, ""));
  if (!o) return;
  let [r = "", ...s] = o.split("/"), c = IFe(r), u = s.filter((w) => w.length > 0), p = u.at(-1);
  if (!c || !p || c.includes("@") || c.includes(":") && !/^\[[0-9a-f:.]+\]$/i.test(c) || u.some((w) => w.includes("@"))) return;
  let a = IM(c), y = a === "other" ? c : xui[a], m = a !== "other" ? a : y === ke ? "gitea" : void 0, E = u.length - 3, g = m === void 0 && E >= 0 && u[E] === "scm", T = g ? [...u.slice(0, E), ...u.slice(E + 1)] : u, h = T.slice(0, -1), x = h.at(-1);
  if (m === void 0 && x !== void 0 && (g || Le.test(e.trim()))) {
    let w = [...h.slice(0, -1), "projects", x, "repos", p];
    return { [I]: `https://${y}/${w.join("/")}`, [N]: x, [k]: p, [P]: "bitbucket" };
  }
  return { [I]: `https://${y}/${T.join("/")}`, ...h.length > 0 && { [N]: h.join("/") }, [k]: p, ...m !== void 0 && { [P]: m } };
}
function cJs({ commitId: e, branch: n }) {
  return { [Me]: e, ...n !== void 0 && { [Oe]: n, [ve]: "branch" } };
}
async function uJs() {
  if (R("OTEL_METRICS_INCLUDE_REPOSITORY") && q(i.OTEL_RESOURCE_ATTRIBUTES)[I] === void 0) await Q().settled;
}
var je = new W(() => ({ token: void 0, identity: null }));
function Fe() {
  if (!i.CLAUDE_CODE_REMOTE_SESSION_ID) return null;
  let e = od();
  if (!e) return null;
  let n = je.of(U().host);
  if (e === n.token) return n.identity;
  n.token = e;
  let o = JU(e.replace(/^sk-ant-[a-z0-9]+-/, ""));
  if (typeof o !== "object" || o === null) return n.identity = null;
  let r = o, s = (u) => typeof u === "string" && u.length > 0 ? u : void 0, c = r.act ?? {};
  return n.identity = { organizationUuid: s(r.organization_uuid), accountUuid: s(r.account_uuid), emailAddress: s(r.account_email) ?? s(c.email) };
}
var He = /^a(?:[\w-]{1,63}-)?([0-9a-f]{16})$/, B = String.raw`[0-9a-f]{4}`, Ke = String.raw`[0-9a-f]{8}-${B}-${B}-${B}-[0-9a-f]{12}`, ze = new RegExp(String.raw`^(?:hook-agent-)?${Ke}$`);
function j(e) {
  let n = He.exec(e), o = ze.test(e) ? e : void 0;
  return n ? `a${n[1]}` : o;
}
function Xgn(e) {
  return itt() ? j(e) : e;
}
function Z(e) {
  if (!e || Up(e)) return {};
  let n = j(e.agentId), o = j(e.parentAgentId ?? "");
  return { ...n !== void 0 && { agent_id: n }, ...o !== void 0 && { parent_agent_id: o } };
}
var A = Ae(fl(), 1);
var te = (e) => ["string", "number", "boolean"].includes(typeof e) || Array.isArray(e) && e.every((n) => typeof n === "string");
function ne({ event: e, attributes: n, loggedAt: o, eventContext: r }) {
  let s = A.trace.getSpanContext(r ?? A.context.active()), c = s !== void 0 && A.isSpanContextValid(s);
  return { to: "collector", event: e, attributes: Ko(n, te), loggedAt: o.toISOString(), ...c && { span: { traceId: s.traceId, spanId: s.spanId, traceFlags: s.traceFlags } } };
}
function oe(e, { entry: n, signal: o, hookOrigin: r }) {
  let s = () => t(`[3P telemetry] Event record dropped (${n.event}): still on the collector road when a flush stopped waiting`), c = (u) => t(`[3P telemetry] Event record lost (${n.event}): its raise failed: ${d(u)}`, { level: "warn" });
  return o.aborted ? s() : e.send(n, o, r).then(() => {
    return;
  }, (u) => o.aborted ? s() : c(u));
}
function re() {
  let e = Bc(), n = Promise.withResolvers(), o = null, r = new AbortController(), s = 0;
  async function c() {
    while (o !== null) await o;
  }
  function u() {
    if (o === null) return;
    t("[3P telemetry] A flush stopped waiting for the collector road; records still on it are dropped"), r.abort(), r = new AbortController(), o = null;
  }
  return { setRoad: (p) => {
    if (e.set(p), p === null) n = Promise.withResolvers();
    else s = 0, n.resolve(p);
  }, getRoad: e.get, route: (p, a) => {
    let y = e.get() === null;
    if (y && s >= Mmi) return t("[3P telemetry] Event record dropped: no road installed and too many already waiting for one", { level: "warn" }), Promise.resolve();
    s += y ? 1 : 0;
    let m = { entry: p(), signal: r.signal, hookOrigin: a }, E = (o ?? Promise.resolve()).then(() => e.get() ?? n.promise).then((g) => oe(g, m)).catch((g) => t(`[3P telemetry] Event record dropped: ${d(g)}`, { level: "warn" }));
    return o = E, E.then(() => {
      if (o === E) o = null;
    }), E;
  }, settled: c, settledWithin: (p) => Pe(c(), p).then(u) };
}
var lAe = re();
import { createHash as Ge } from "crypto";
var $e = 8388608, F = 24;
class ie {
  shown = /* @__PURE__ */ new Set();
  toolTexts = /* @__PURE__ */ new Set();
  shownChars = 0;
  toolTextChars = 0;
  dropped = false;
  genuine = false;
  version = 0;
}
var S = new W(() => new ie());
function pJs(e) {
  let n = S.of(e);
  n.dropped = true, n.version++;
}
function fJs(e) {
  S.of(e).genuine = true;
}
function V2r(e, n) {
  let o = S.of(e);
  if (n.trim() === "" || !ce(o.shown, n)) return;
  o.shownChars = se(o, o.shown, o.shownChars + n.length), o.version++;
}
function K2r(e, n) {
  let o = S.of(e);
  if (n.trim() === "" || !ce(o.toolTexts, n)) return;
  o.toolTextChars = se(o, o.toolTexts, o.toolTextChars + n.length), o.version++;
}
function mJs(e) {
  if (e === void 0) return true;
  let n = S.of(e);
  return n.shown.size > 0 || n.toolTexts.size > 0 || n.genuine || n.dropped;
}
function q2r(e) {
  return S.of(e);
}
function se(e, n, o) {
  let r = o;
  while (r > $e && n.size > 0) {
    let s = n.values().next().value;
    n.delete(s), r -= s.length, e.dropped = true;
  }
  return r;
}
function ce(e, n) {
  let o = e.delete(n);
  return e.add(n), !o;
}
var ue = Object.freeze({ blocks: Object.freeze([]), lines: Object.freeze([]), unsearchable: false, toolNames: /* @__PURE__ */ new Set() }), O = "[account memory text not recorded]";
function sY(e) {
  return `<${e.length} chars; not recorded>`;
}
function gwt(e) {
  return `<not recorded: ${e}>`;
}
function Ve(e) {
  return e === "extract_memories" || e === "local_memory_import" || e === "auto_dream";
}
function C2t(e, n, o) {
  if (Ve(n)) return { withheld: "memory_operation" };
  try {
    let r = e();
    if (r.unsearchable) return { withheld: "account_memory_text_not_identified" };
    return { value: o(r) };
  } catch {
    return { withheld: "account_memory_redaction_failed" };
  }
}
function u_e(e, n, o) {
  let r = e === void 0 ? { withheld: "account_memory_text_not_identified" } : C2t(e, n, (s) => T2t(o, s));
  return "withheld" in r ? gwt(r.withheld) : r.value;
}
var We = /^(?:[-*+>]|\d+[.)]|#{1,6})\s+/;
function pGo({ rendered: e, verbatim: n, toolNames: o = ue.toolNames, unsearchable: r = false }) {
  let s = (g) => g.trim() !== "", c = L(e.map((g) => g.trim()).filter(s)), u = L(n.map((g) => g.trim()).filter(s));
  if (c.length === 0 && u.length === 0 && o.size === 0 && !r) return ue;
  let p = (g, T) => T.length - g.length, a = (g) => (_(g) ?? `"${g}"`).slice(1, -1), y = (g) => L(g.flatMap((T) => {
    let h = jt(T);
    return [T, h, a(T), a(h), jt(a(T)), jt(h), a(a(T))];
  })).sort(p), m = y([...c, ...u.filter((g) => g.length >= F)]), E = y([...c, ...u].flatMap((g) => g.split(`
`)).flatMap((g) => {
    let T = g.trim(), h = T.replace(We, "");
    return [T, h].filter((x) => x.length >= F);
  }));
  return { blocks: m, lines: E, unsearchable: r, toolNames: o };
}
function PDe(e) {
  let n = q2r(e), o = de.get(e);
  if (o !== void 0 && o.version === n.version) return o.keys;
  let r = pGo({ rendered: [], verbatim: [...n.shown, ...n.toolTexts], unsearchable: n.dropped });
  return de.set(e, { version: n.version, keys: r }), r;
}
var de = /* @__PURE__ */ new WeakMap();
function T2t(e, n) {
  if (n.blocks.length === 0 && n.lines.length === 0) return e;
  let { blocks: o, lines: r } = Je(n);
  return fe(fe(e, o), r);
}
var Ye = 131072, Xe = 8, b = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new WeakMap();
function Je(e) {
  let n = le.get(e);
  if (n !== void 0) return n;
  let o = Ge("sha256").update(_([e.blocks, e.lines])).digest("hex"), r = b.get(o);
  if (r === void 0) {
    if (r = { blocks: ae(e.blocks), lines: ae(e.lines) }, b.size >= Xe) b.delete(b.keys().next().value);
    b.set(o, r);
  }
  return le.set(e, r), r;
}
function ae(e) {
  let n = e.filter((c) => c !== "" && !O.includes(c)).toSorted((c, u) => u.length - c.length).map(di), o = [], r = [], s = 0;
  for (let c of n) {
    if (r.length > 0 && s + c.length > Ye) o.push(new RegExp(r.join("|"), "g")), r = [], s = 0;
    r.push(c), s += c.length + 1;
  }
  if (r.length > 0) o.push(new RegExp(r.join("|"), "g"));
  return o;
}
function fe(e, n) {
  let o = e;
  for (let r of n) o = o.replace(r, O);
  if (o === e) return e;
  for (let r = 0; n.some((s) => o.search(s) !== -1); r++) {
    if (r >= 16) throw Error("account-memory text still matched a search key after 16 replacement rounds");
    for (let s of n) o = o.replace(s, O);
  }
  return o;
}
function v(e) {
  return e;
}
function OQn(e, n, o = e) {
  let r = /* @__PURE__ */ new Set();
  for (let s of o) {
    if (s.role !== "assistant" || typeof s.content === "string") continue;
    for (let c of s.content) {
      let u = v(c).id;
      if (_e(c, n) && typeof u === "string") r.add(u);
    }
  }
  return e.map((s) => {
    let c = H(s.content, n, r);
    return c === s.content ? s : { ...s, content: c };
  });
}
function gJs(e, n) {
  return me(e, n, /* @__PURE__ */ new Set());
}
function hJs(e, n) {
  return H(e, n, /* @__PURE__ */ new Set());
}
function H(e, n, o) {
  if (typeof e === "string") return T2t(e, n);
  let r = me(e, n, o);
  return r.every((s, c) => s === e[c]) ? e : r;
}
function me(e, n, o) {
  return e.map((r) => {
    let { text: s, thinking: c, input: u, tool_use_id: p, content: a } = v(r);
    if (r.type === "text" && typeof s === "string" || r.type === "thinking" && typeof c === "string") {
      let m = M(r, n, 0);
      return m === r ? r : m;
    }
    if (r.type === "tool_use" || r.type === "server_tool_use") {
      if (_e(r, n)) return { ...r, input: { not_recorded: sY(pe(u)) } };
      let m = M(u, n, 0);
      return m === u ? r : { ...r, input: m };
    }
    if (r.type === "tool_result" && a !== void 0 && a !== null) {
      if (typeof p === "string" && o.has(p)) return { ...r, content: sY(typeof a === "string" ? a : pe(a)) };
      if (typeof a === "string" || Array.isArray(a)) {
        let m = H(a, n, o);
        return m === a ? r : { ...r, content: m };
      }
    }
    if (qe.has(r.type) || Qe(r)) return r;
    let y = M(r, n, 0);
    return y === r ? r : y;
  });
}
var qe = /* @__PURE__ */ new Set(["image", "redacted_thinking", "container_upload"]);
function Qe(e) {
  let { source: n } = v(e);
  return e.type === "document" && typeof n === "object" && n !== null && n.type === "base64";
}
function _e(e, n) {
  let { name: o } = v(e);
  return (e.type === "tool_use" || e.type === "server_tool_use") && typeof o === "string" && OQ(o, HQn(n.toolNames), "history");
}
var Ze = 6;
function M(e, n, o) {
  if (typeof e === "string") return T2t(e, n);
  if (typeof e !== "object" || e === null) return e;
  if (o >= Ze) return O;
  if (Array.isArray(e)) {
    let c = e.map((u) => M(u, n, o + 1));
    return c.every((u, p) => u === e[p]) ? e : c;
  }
  let r = false, s = Object.entries(e).map(([c, u]) => {
    let p = T2t(c, n), a = M(u, n, o + 1);
    return r ||= a !== u || p !== c, [p, a];
  });
  return r ? Object.fromEntries(s) : e;
}
function pe(e) {
  try {
    return _(e) ?? "";
  } catch {
    return "";
  }
}
var K = Ae(fl(), 1);
import { AsyncLocalStorage as et } from "async_hooks";
class Ee {
  als = new et();
  active() {
    return this.als.getStore() ?? K.ROOT_CONTEXT;
  }
  with(e, n, o, ...r) {
    let s = o == null ? n : n.bind(o);
    return this.als.run(e, s, ...r);
  }
  enterWith(e) {
    this.als.enterWith(e);
  }
  bind(e, n) {
    if (typeof n === "function") {
      let o = (...r) => this.with(e, () => n(...r));
      return Object.defineProperty(o, "length", { configurable: true, enumerable: false, writable: false, value: n.length }), o;
    }
    return n;
  }
  enable() {
    return this;
  }
  disable() {
    return this.als.disable(), this;
  }
}
var dAe = new Ee();
class Te {
  current = void 0;
}
var he = new W(() => new Te());
function fGo(e) {
  he.of(U().host).current = e;
}
function mGo() {
  return he.of(U().host).current;
}
function Y2r() {
  let e = dAe.active();
  if (e !== K.ROOT_CONTEXT) return e;
  return mGo() ?? e;
}
class Se {
  nextSequence = 0;
  warnedNoEventLogger = false;
}
var Ce = new W(() => new Se());
function xe() {
  return i.OTEL_LOG_USER_PROMPTS;
}
function tt(e) {
  return xe() ? e : "<REDACTED>";
}
function yJs(e) {
  if (e === void 0) return { prompt: "<REDACTED>", prompt_text: "<REDACTED>" };
  let n = xe() ? u_e(() => PDe(U().host), void 0, e) : tt(e);
  return { prompt: n, prompt_text: n };
}
function _Js() {
  return i.OTEL_LOG_ASSISTANT_RESPONSES ?? i.OTEL_LOG_USER_PROMPTS;
}
var nt = new Re.W3CTraceContextPropagator();
function ot() {
  let e = Y2r(), n = C.trace.getSpanContext(e);
  if (n && C.isSpanContextValid(n)) return e;
  if (ye() && i.TRACEPARENT) return nt.extract(e, { traceparent: i.TRACEPARENT, tracestate: i.TRACESTATE }, C.defaultTextMapGetter);
  return;
}
async function bi(e, n = {}, o, r) {
  let s = Ce.of(U().host), c = { ...k2t(), "event.name": e, "event.timestamp": (/* @__PURE__ */ new Date()).toISOString(), "event.sequence": s.nextSequence++ }, u = g$();
  if (u) c["prompt.id"] = u;
  let p = i.CLAUDE_CODE_WORKSPACE_HOST_PATHS;
  if (p) c["workspace.host_paths"] = p.split("|");
  Object.assign(c, bSn(o));
  for (let [m, E] of Object.entries(J() ? Atr(n) : n)) {
    let g = m === "error" && J() && !/^[a-z0-9_]+$/.test(String(E));
    if (E !== void 0 && !g) c[m] = E;
  }
  try {
    Object.assign(c, Z(o));
  } catch (m) {
    t(`[3P telemetry] Agent ids not stamped: ${String(m)}`, { level: "warn" });
  }
  let a = /* @__PURE__ */ new Date(), y = ot();
  await lAe.route(() => ne({ event: e, attributes: c, loggedAt: a, eventContext: y }), r);
}
function SJs(e, n, o, r) {
  return { timestamp: o, observedTimestamp: o, body: `claude_code.${e}`, attributes: n, ...r && { context: r } };
}
function bJs(e, n) {
  let o = D3e();
  if (o) {
    o.emit(e);
    return;
  }
  let r = Ce.of(U().host);
  if (!_rs(e) && !r.warnedNoEventLogger) r.warnedNoEventLogger = true, t(`[3P telemetry] Event dropped (no event logger initialized): ${n}`, { level: Ne(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) ? "warn" : "debug" });
}
function Lce(e, n) {
  if (e.from === e.to) return;
  bi("permission_mode_changed", { from_mode: e.from, to_mode: e.to, ...e.trigger && { trigger: e.trigger } }, n);
}
function b6e(e, n) {
  bi("compaction", { trigger: e.trigger, success: String(e.success), duration_ms: String(Math.round(e.durationMs)), ...e.preTokens !== void 0 && { pre_tokens: String(e.preTokens) }, ...e.postTokens !== void 0 && { post_tokens: String(e.postTokens) }, ...e.error && { error: e.error }, ...e.precomputeReuse && { precompute_reuse: e.precomputeReuse } }, n);
}
function gGo(e) {
  bi("retention_sweep", { result: e.result, period_days: String(e.periodDays), used_default: String(e.usedDefault), ...e.skipReason && { skip_reason: e.skipReason }, ...e.transcriptsDeleted !== void 0 && { transcripts_deleted: String(e.transcriptsDeleted) }, ...e.transcriptsExemptedDesktop !== void 0 && { transcripts_exempted_desktop: String(e.transcriptsExemptedDesktop) }, ...e.sessionFilesDeleted !== void 0 && { session_files_deleted: String(e.sessionFilesDeleted) }, ...e.artifactsDeleted !== void 0 && { artifacts_deleted: String(e.artifactsDeleted) }, ...e.filesRetainedFresh !== void 0 && { files_retained_fresh: String(e.filesRetainedFresh) }, ...e.filesPastCutoff !== void 0 && { files_past_cutoff: String(e.filesPastCutoff) }, ...e.errorCount !== void 0 && { error_count: String(e.errorCount) }, ...e.historyEntriesPruned !== void 0 && { history_entries_pruned: String(e.historyEntriesPruned) } });
}
var z = false;
function wJs(e) {
  if (z) return;
  z = true;
  try {
    let n = e.name !== "Error" ? e.name : e.constructor?.name || "Error";
    bi("internal_error", { error_name: GI(n) ?? "Error", error_code: vr(e) });
  } finally {
    z = false;
  }
}
function ooe(e) {
  bi("at_mention", { mention_type: e.mentionType, success: String(e.success) });
}
function Nce(e) {
  let n = e.error !== void 0 ? ui(e.error) : null;
  bi("auth", { action: e.action, success: String(e.success), auth_method: e.authMethod, ...n && { error_category: n.kind, ...n.status !== void 0 && { status_code: String(n.status) } } });
}
export {
  C2t,
  IQn,
  K2r,
  Lce,
  Nce,
  OQn,
  PDe,
  SJs,
  T2t,
  V2r,
  Xgn,
  Y2r,
  _Js,
  b6e,
  bJs,
  bi,
  cJs,
  dAe,
  fGo,
  fJs,
  gGo,
  gJs,
  gwt,
  hJs,
  k2t,
  lAe,
  mGo,
  mJs,
  ooe,
  pGo,
  pJs,
  q2r,
  sY,
  uJs,
  u_e,
  wJs,
  yJs,
  z2r
};
