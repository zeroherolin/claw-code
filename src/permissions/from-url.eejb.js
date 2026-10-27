// permissions/from-url.eejb.js — Claude Code 2.1.310 模块 chunk-eejbswej.js
import { AM, dn } from "../mcp/chunk-ykcv164t.js";
import { Lt, vm, Su, vH, Ybn, Xbn, Jt, a1, kH, xn, swn, DKe, kZ } from "../artifacts/cobalt-plinth-lovage.hxm5.js";
import { Ts } from "../settings/global-config-and-gates.27xj.js";
import { uT } from "../settings/workflow-launch-exec.t4r2.js";
import { ym } from "../artifacts/artifact-share-status.jp2v.js";
import { sh, ae } from "./max-thinking-tokens.hx3h.js";
import { Xze, oo, qa, _f, JC } from "./bot-protected-tengu-atomic-magpie.zc9j.js";
import { NQn, tv, p_e } from "../settings/gable-onyx-sluice.5y5b.js";
import { A9, Jpt } from "../shared/read-file.mt63.js";
import { lpn } from "../shared/chunk-3s4ztter.js";
import { qn, qJn } from "../web/allow-web-fetch.pt5y.js";
var _ = /^([A-Za-z][A-Za-z0-9+.-]*):\/\/([^/?#]*)(.*)$/;
function P(n) {
  let e = n.match(_);
  if (!e) return n;
  let t = e[1].toLowerCase();
  if (t === "http") t = "https";
  let o = e[2].toLowerCase().replace(/:(?:443|80)$/, "").replace(/\.(?=$|:\d+$)/, "");
  return `${t}://${o}${e[3] ?? ""}`;
}
function M0t(n, e, t, o = "url") {
  if (n.size === 0) return null;
  let r = DKe(e), l = /* @__PURE__ */ new Set([...swn(e), r, `${r}/`]);
  if (typeof t === "string") l.add(a1(t).trim());
  for (let [u, a] of n) {
    let i = u.indexOf(":");
    if (i <= 0) continue;
    let s = u.slice(0, i).trim(), c = u.slice(i + 1).trim();
    if (s !== o || c === "") continue;
    let f = kH(c.replace(/\*$/, ""));
    if (f?.slug === e.slug && f.env === e.env) return a;
    let p = /* @__PURE__ */ new Set([c, P(c)]);
    for (let A of p) for (let y of l) if (AM(A, y)) return a;
  }
  return null;
}
function E(n) {
  let e = Jt(n), t = kH(n);
  return [...e !== null ? [e] : [], ...t !== null && (e === null || e.slug !== t.slug || e.env !== t.env) ? [t] : []];
}
function T(n, e) {
  if (n.size === 0 || typeof e !== "object" || e === null) return null;
  let { url: t, type_url: o, from_url: r, files: l } = e, u = typeof l === "object" && l !== null && !Array.isArray(l) ? Object.values(l).map((i) => typeof i === "object" && i !== null ? i.artifact : void 0) : [], a = [[t, ["url"]], [o, ["url", "type_url"]], [r, ["url", "from_url"]], ...u.map((i) => [i, ["url", "from_url"]])];
  for (let [i, s] of a) {
    if (typeof i !== "string") continue;
    for (let c of E(i)) for (let f of s) {
      let p = M0t(n, c, i, f);
      if (p !== null) return p;
    }
  }
  return null;
}
var H0t = { comments: vm, data: Su, check: vH };
function hOe(n, e) {
  let t = e?.action, o = typeof t === "string" && Object.hasOwn(A9, t) ? A9[t] : void 0;
  return o === void 0 ? void 0 : { tool: { name: H0t[o], ruleContentField: n.ruleContentField }, input: Jpt(o, e) };
}
function apt(n, e, t, o) {
  let r = hOe(e, t);
  if (r === void 0) return null;
  return (o === "deny" ? oo(n, r.tool) : qa(n, r.tool)) ?? _f(n, r.tool, r.input, o);
}
function D$(n, e, t) {
  let o = hOe({ name: Lt }, e)?.tool.name;
  for (let r of [Lt, ...o ? [o] : []]) {
    let l = T(JC(n, r, t), e);
    if (l !== null) return l;
  }
  return null;
}
function Ren(n, e, t, o) {
  let r = hOe(e, t);
  return _f(n, e, t, o) ?? (r === void 0 ? null : _f(n, r.tool, r.input, o));
}
var w = { name: qn, mcpInfo: void 0, ruleContentField: qJn }, d = { name: Lt, mcpInfo: void 0, ruleContentField: Ybn };
function m(n, e, t, o) {
  let r = e ?? Xbn;
  return { webFetch: { url: n, prompt: r, offset: void 0 }, artifact: { action: "read", url: n, prompt: r, ...t !== void 0 && { page: t }, ...o !== void 0 && { version: o } } };
}
var LCr = /* @__PURE__ */ new Set(["read", "read_db", "comments", "list_files", "read_file", "list_assets", "read_asset", "get_endpoints", "call_endpoint", "run_script"]);
function Y8e(n, e, t, o, r) {
  let l = r === void 0 ? null : _f(n, w, m(t, r.prompt).webFetch, o);
  if (l !== null) return l;
  let u = JC(n, qn, o);
  if (u.size === 0) return null;
  let a = /* @__PURE__ */ new Set([new URL(xn(e)).hostname, new URL(DKe(e)).hostname]);
  if (typeof t === "string") try {
    a.add(new URL(t).hostname);
  } catch {
  }
  for (let i of a) {
    let s = lpn(u, `domain:${i}`);
    if (s !== void 0) return s;
  }
  return null;
}
function rS(n, e, t, o, r = {}) {
  let l = hOe({ name: Lt }, { action: r.action })?.tool.name, u = Y8e(n, e, t, o, r.read);
  if (u !== null) return u;
  for (let a of [Lt, ...l ? [l] : []]) {
    let i = JC(n, a, o), s = M0t(i, e, t) ?? (r.copySource === true ? M0t(i, e, t, "from_url") : null);
    if (s !== null) return s;
  }
  return null;
}
function g(n) {
  if (!Xze.some((t) => (n.alwaysDenyRules[t]?.length ?? 0) > 0)) return n;
  let e = { ...n.alwaysDenyRules };
  for (let t of Xze) delete e[t];
  return { ...n, alwaysDenyRules: e };
}
function R(n, e, t, o) {
  let { action: r, ...l } = t;
  return (r === void 0 ? null : _f(g(n), e, { action: r }, o)) ?? _f(n, e, l, o);
}
function L_o(n, e, t, o, r = {}) {
  let l = g(n);
  return (o === "deny" ? oo(l, d) : qa(l, d)) ?? R(n, d, m(t, r.prompt, r.page, r.version).artifact, o) ?? M0t(JC(n, Lt, o), e, t);
}
function xC(n, e, t, o, r) {
  let l = { ...r.fields, ...r.read !== void 0 ? m(t, r.read.prompt, r.read.page, r.read.version).artifact : { ...typeof r.action === "string" && { action: r.action }, url: xn(e) } }, u = hOe(d, l), a = g(n), i = (s) => o === "deny" ? oo(a, s) : r.wholeToolAskAnswered === true && s.name === Lt ? null : qa(a, s);
  return i(d) ?? R(n, d, l, o) ?? (u === void 0 ? null : i(u.tool) ?? R(n, u.tool, u.input, o)) ?? rS(n, e, t, o, r);
}
function dve(n) {
  return `the ${kZ(dn(n.ruleValue))} deny rule from ${uT(n.source)}`;
}
var lpt = 'some tag-like sequences or line-opening turn markers in the copy below carry an inserted "\\"';
function CUn(n, e, t, o = {}) {
  let r = ae(n), l = { action: "read", read: o };
  return k(n, e) && !(ym(e.slug) && !Ts(n.agentContext)) && xC(r, e, t, "deny", l) === null && xC(r, e, t, "ask", l) === null;
}
function k(n, e) {
  let { mode: t, modeBeforeRewrite: o } = ae(n);
  return t !== "plan" && (t !== "auto" && o !== "auto" || tv(e) || p_e(e.slug));
}
function N_o(n, e, t, o = {}) {
  return ae(n).mode !== "dontAsk" && !sh(n) && CUn(n, e, t, o);
}
function D0t(n, e, t, o = {}) {
  return NQn(n.artifactRegistries, e.slug) && CUn(n, e, t, o);
}
export {
  CUn,
  D$,
  D0t,
  H0t,
  LCr,
  L_o,
  M0t,
  N_o,
  Ren,
  Y8e,
  apt,
  dve,
  hOe,
  lpt,
  rS,
  xC
};
