// linux/models/model-capability-off-from-client-data.js — Claude Code 2.1.310（linux）模块 chunk-cn4azb2f.js
import { Ne, is } from "../fs/async-hooks.93b1.js";
import { U, q } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { OCe, hqo, lti, wt, st, bVe, b_n, F_e, Xe, ug, k, Wn, nd, Pbn } from "../settings/global-config-and-gates.js";
import { Qr } from "./claude-3-5-sonnet.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Plr } from "../remote/local-agent.js";
import { mS, U9o, bu } from "./total-tokens-reminder.js";
import { Lo } from "../agents/chunk-44729602.js";
import { ELe } from "./fable-5-1-prompt-bundle.js";
import { Ot, nk, $n, Tc, H0 } from "./claude-mythos-preview.js";
import { o, T } from "../vendor/zod/string-format.js";
var B = "tengu_fennel_godwit";
function KQn(e) {
  if (e === void 0) return false;
  if (mS(Xe(e), "opus_5_prompt_bundle", e) !== true) return false;
  return !k(B, false);
}
function m(e) {
  return !Plr() && mS(e, "opus_5_5_prompt_bundle") === true;
}
var I = /* @__PURE__ */ new Set(["turn_updates", "bash_output_audience_note", "silent_turn_reminder", "thinking_display_updates"]), v = /* @__PURE__ */ new Set(["bison_cairn", "larch_cistern"]), G = /* @__PURE__ */ new Set(["silent_turn_reminder", "quizzical_shore"]), z = 64, H = "tengu_model_capability_from_client_data", S = "tengu_model_capability_off_from_client_data";
function S$(e, n, r, l) {
  if (l !== void 0) return l;
  let s = mS(n, e, r);
  if (s !== void 0) return s;
  let d = I.has(e) && ELe(n) || v.has(e) && KQn(r) || G.has(e) && m(n), u = Pbn(r);
  if (d) {
    if (u?.data?.[e] !== false) return true;
    return b(S, e, u), false;
  }
  if (u?.data?.[e] !== true) return false;
  return b(H, e, u), true;
}
function BXs(e, n, r) {
  let l = U9o(n);
  return [...hqo(r, n) ?? [], ...l.keys()].findLast((s) => s.startsWith(e) && l.get(s) !== false)?.slice(e.length);
}
function b(e, n, r) {
  let l = r.model ?? $n(st()), s = Lo().clientDataCapabilityLogged ??= /* @__PURE__ */ new Map(), d = q(), u = s.get(d);
  if (u === void 0) {
    if (u = /* @__PURE__ */ new Set(), s.set(d, u), s.size > z) {
      let C = s.keys().next().value;
      if (C !== void 0) s.delete(C);
    }
  }
  let _ = `${e === S ? "-" : ""}${n}:${l}`;
  if (!u.has(_)) u.add(_), a(e, { capability: c(n), model: wt(l) });
}
function V(e, n) {
  if (Y() !== e) return false;
  return S$("per_turn_effort", e, n);
}
function Y() {
  try {
    return Xe(st());
  } catch {
    return null;
  }
}
lti(V);
function jXs(e) {
  return false;
}
function hgn(e) {
  return Ot(e) === "claude-opus-4-8";
}
function WXs(e) {
  return false;
}
var j = /* @__PURE__ */ new Set(["claude-opus-4-6", "claude-haiku-4-5", "claude-opus-4-5", "claude-opus-4-1", "claude-opus-4-0", "claude-sonnet-4-5", "claude-sonnet-4-0", "claude-3-7-sonnet", "claude-3-5-sonnet", "claude-3-5-haiku"]);
function y(e) {
  return j.has(Ot(e));
}
function ygn(e, n) {
  if (n === void 0) return y(e);
  return n.model !== void 0 && y(n.model);
}
function SLe(e) {
  return /-eap($|\[)/i.test(e);
}
var F = "tengu_loggia_roster", M = [], K = p(() => T(o().trim())), h;
function Z() {
  let e = k(F, M), n = h;
  if (n !== void 0 && n.raw === e) return n.ids;
  let r = K().safeParse(e);
  if (!r.success) t(`GrowthBook: ${F} is not a JSON array of model ids; treating it as empty`, { level: "warn" });
  let l = r.success ? r.data : M;
  return h = { raw: e, ids: l }, l;
}
function cGr(e) {
  return Z().some((n) => nk(e, n));
}
function Ace(e) {
  let n = f();
  return OCe() ? n.leanRewriteCompiledOnly(e) : n.leanRewrite(e);
}
function sz(e) {
  return e.leanRewrite ?? Ace(e.model);
}
function O(e) {
  if (e === void 0) return false;
  let n = Xe(e), r = mS(n, "temporal_hare", e);
  if (r === false) return false;
  if (OCe()) return r === true && iz(e);
  if (!(r === true || Pbn(e)?.data?.temporal_hare === true)) return b_n(e) && iz(e) && Wn("tengu_temporal_hare", false) === true;
  if (!iz(e)) return false;
  return S$("temporal_hare", n, e);
}
function N(e, n) {
  let r = nd()?.[e];
  return typeof r === "object" && r !== null && Object.entries(r).some(([l, s]) => s === true && n.includes(l));
}
function GXs(e) {
  return i.CLAUDE_CODE_BASALT_COVE || N("basalt_cove", e);
}
var x = "tengu_thrifty_sonic";
function J() {
  let e = f();
  return OCe() ? e.bashFirstSessionAssignmentCompiledOnly() : e.bashFirstSessionAssignment();
}
function A() {
  let e = Yre(st()), n = Xe(e), r = mS(n, "thrifty_sonic", e);
  if (r === false) return "none";
  if (ELe(n) || m(n) || nd()?.[x] === true || r) return "forced";
  return bVe(e) ? "cohort" : "none";
}
function _gn() {
  if (i.CLAUDE_CODE_THRIFTY_SONIC !== void 0) return i.CLAUDE_CODE_THRIFTY_SONIC;
  switch (J()) {
    case "forced":
      return true;
    case "none":
      return false;
    case "cohort":
      return k(x, false);
  }
}
var L = "tengu_cozy_teapot";
function P(e) {
  return e === "strict" || e === "relaxed" ? e : void 0;
}
function zXs() {
  return i.CLAUDE_CODE_COZY_TEAPOT ?? f().bashFirstSteerVariant();
}
function Q() {
  return P(nd()?.[L]) ?? (m(Xe(Yre(st()))) ? "relaxed" : void 0) ?? P(Wn(L, null)) ?? "strict";
}
var X = "tengu_gorse_plover", E = "tengu_willow_tern";
function ee(e, n) {
  return e || nd()?.[n] === true || k(n, false);
}
function KXs() {
  let e = Lo();
  return e.bashActFirstEnabled ??= ee(i.CLAUDE_CODE_GORSE_PLOVER, X), e.bashActFirstEnabled;
}
function VXs(e) {
  return S$("amber_astrolabe", Xe(e), e, i.CLAUDE_CODE_AMBER_ASTROLABE || void 0);
}
function qXs(e) {
  return S$("bison_cairn", Xe(e), e, i.CLAUDE_CODE_BISON_CAIRN);
}
function YXs(e) {
  return S$("larch_cistern", Xe(e), e, i.CLAUDE_CODE_LARCH_CISTERN || void 0);
}
function pGo() {
  let e = nd()?.[E];
  if (typeof e === "boolean") return e;
  if (e !== void 0) {
    let n = f();
    if (!n.unusableWritingOverrideTold) n.unusableWritingOverrideTold = true, t(`willow_tern: ignoring non-boolean clientData ${E} value of type ${typeof e}`);
  }
  return;
}
function XXs(e) {
  if (i.CLAUDE_CODE_WILLOW_TERN) return true;
  let n = pGo();
  if (n !== void 0) return n;
  if (e === void 0) return false;
  let r = Xe(e);
  if (ELe(r)) return true;
  if (mS(r, "opus_5_prompt_bundle", e) !== true) return false;
  return k(E, false);
}
function wLe() {
  return i.CLAUDE_CODE_SIMPLE;
}
function ne(e) {
  let n = Xe(e), r = mS(n, "lean_prompt", e);
  if (r !== void 0) return !r;
  if (SLe(e) || n === "claude-mythos-5") return false;
  if (n.includes("claude-3-") || n.includes("haiku") || n.includes("sonnet") || n === "claude-opus-4-0" || n === "claude-opus-4-1" || n === "claude-opus-4-5" || n === "claude-opus-4-6" || n === "claude-opus-4-7") return true;
  return !bu();
}
function iz(e) {
  let n = f();
  return OCe() ? n.leanPromptCompiledOnly(e) : n.leanPrompt(e);
}
function zO(e) {
  return e.leanPrompt ?? iz(e.model);
}
function R(e) {
  if (!e) return false;
  if (Ne(i.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return true;
  if (is(i.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return false;
  if (!ne(e)) return true;
  if (k("tengu_velvet_tide", false)) return true;
  return N("simple_system_prompt", Xe(e));
}
var te = "breezy_horizon";
function Yre(e) {
  if (e === void 0) return;
  let n = f();
  return OCe() ? n.modelForPromptCompiledOnly(e) : n.modelForPrompt(e);
}
function JXs(e) {
  let n = f().modelForPrompt;
  return n.cache.has(e) ? n(e) : void 0;
}
function D(e) {
  let n = i.CLAUDE_CODE_BREEZY_HORIZON;
  if (is(n)) return e;
  let r = ug(e), l = nd()?.[te], s = n ?? (typeof l === "object" && l !== null ? Object.entries(l).find(([_]) => _ === r)?.[1] : void 0);
  if (s === void 0) return e;
  let d = n !== void 0 ? "env" : "client_data";
  if (typeof s !== "string" || !oe(s)) return t(`[breezy_horizon] ${d}: ignoring ${String(s)} for ${r}: not a model id`, { level: "warn" }), e;
  let u = ug(s);
  if (u === r) {
    if (!H0(Tc(s))) t(`[breezy_horizon] ${d}: ${s} names ${r} itself, so it maps nothing`, { level: "warn" });
    return e;
  }
  let g = f().promptModelSwapsLogged;
  if (!g.has(e)) g.add(e), a("tengu_breezy_horizon", { from_model: wt(r), to_model: wt(u), source: c(d) });
  return s;
}
function oe(e) {
  return F_e(e) || !/\s/.test(e) && SLe(e) || H0(Tc(e));
}
class w {
  bashFirstSessionAssignment = Qr(A);
  bashFirstSessionAssignmentCompiledOnly = Qr(A);
  bashFirstSteerVariant = Qr(Q);
  leanPrompt = Qr(R);
  leanPromptCompiledOnly = Qr(R);
  modelForPrompt = Qr(D);
  modelForPromptCompiledOnly = Qr(D);
  leanRewrite = Qr(O);
  leanRewriteCompiledOnly = Qr(O);
  promptModelSwapsLogged = /* @__PURE__ */ new Set();
  unusableWritingOverrideTold = false;
}
var re = new W(() => new w());
function f() {
  return re.of(U().host);
}
export {
  Ace,
  BXs,
  GXs,
  JXs,
  KQn,
  KXs,
  S$,
  SLe,
  VXs,
  WXs,
  XXs,
  YXs,
  Yre,
  _gn,
  cGr,
  hgn,
  iz,
  jXs,
  pGo,
  qXs,
  sz,
  wLe,
  ygn,
  zO,
  zXs
};
