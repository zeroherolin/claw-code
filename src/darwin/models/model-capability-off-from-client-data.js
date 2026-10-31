// darwin/models/model-capability-off-from-client-data.js — Claude Code 2.1.310（darwin）模块 chunk-g3tc81n6.js
import { Ne, as } from "../fs/async-hooks.93b1.js";
import { U, V } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { FAe, zKo, Vti, wt, it, RVe, L_n, V_e, Xe, ug, k, Wn, nd, KSn } from "../settings/global-config-and-gates.js";
import { Qr } from "./claude-3-5-sonnet.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { Vlr } from "../remote/local-agent.js";
import { gb, yXo, bu } from "./total-tokens-reminder.js";
import { Lo } from "../agents/chunk-44729602.js";
import { xDe } from "./fable-5-1-prompt-bundle.js";
import { Ot, rk, Fn, Cc, $L } from "./claude-mythos-preview.js";
import { o, C } from "../vendor/zod/string-format.js";
var B = "tengu_fennel_godwit";
function cQn(e) {
  if (e === void 0) return false;
  if (gb(Xe(e), "opus_5_prompt_bundle", e) !== true) return false;
  return !k(B, false);
}
function m(e) {
  return !Vlr() && gb(e, "opus_5_5_prompt_bundle") === true;
}
var I = /* @__PURE__ */ new Set(["turn_updates", "bash_output_audience_note", "silent_turn_reminder", "thinking_display_updates"]), v = /* @__PURE__ */ new Set(["bison_cairn", "larch_cistern"]), G = /* @__PURE__ */ new Set(["silent_turn_reminder", "quizzical_shore"]), z = 64, H = "tengu_model_capability_from_client_data", y = "tengu_model_capability_off_from_client_data";
function kF(e, n, r, l) {
  if (l !== void 0) return l;
  let s = gb(n, e, r);
  if (s !== void 0) return s;
  let d = I.has(e) && xDe(n) || v.has(e) && cQn(r) || G.has(e) && m(n), u = KSn(r);
  if (d) {
    if (u?.data?.[e] !== false) return true;
    return S(y, e, u), false;
  }
  if (u?.data?.[e] !== true) return false;
  return S(H, e, u), true;
}
function C7s(e, n, r) {
  let l = yXo(n);
  return [...zKo(r, n) ?? [], ...l.keys()].findLast((s) => s.startsWith(e) && l.get(s) !== false)?.slice(e.length);
}
function S(e, n, r) {
  let l = r.model ?? Fn(it()), s = Lo().clientDataCapabilityLogged ??= /* @__PURE__ */ new Map(), d = V(), u = s.get(d);
  if (u === void 0) {
    if (u = /* @__PURE__ */ new Set(), s.set(d, u), s.size > z) {
      let b = s.keys().next().value;
      if (b !== void 0) s.delete(b);
    }
  }
  let _ = `${e === y ? "-" : ""}${n}:${l}`;
  if (!u.has(_)) u.add(_), a(e, { capability: c(n), model: wt(l) });
}
function Y(e, n) {
  if (j() !== e) return false;
  return kF("per_turn_effort", e, n);
}
function j() {
  try {
    return Xe(it());
  } catch {
    return null;
  }
}
Vti(Y);
function T7s(e) {
  return false;
}
function Ign(e) {
  return Ot(e) === "claude-opus-4-8";
}
function A7s(e) {
  return false;
}
var K = /* @__PURE__ */ new Set(["claude-opus-4-6", "claude-haiku-4-5", "claude-opus-4-5", "claude-opus-4-1", "claude-opus-4-0", "claude-sonnet-4-5", "claude-sonnet-4-0", "claude-3-7-sonnet", "claude-3-5-sonnet", "claude-3-5-haiku"]);
function F(e) {
  return K.has(Ot(e));
}
function Ogn(e, n) {
  if (n === void 0) return F(e);
  return n.model !== void 0 && F(n.model);
}
function TDe(e) {
  return /-eap($|\[)/i.test(e);
}
var M = "tengu_loggia_roster", h = [], Z = f(() => C(o().trim())), O;
function q() {
  let e = k(M, h), n = O;
  if (n !== void 0 && n.raw === e) return n.ids;
  let r = Z().safeParse(e);
  if (!r.success) t(`GrowthBook: ${M} is not a JSON array of model ids; treating it as empty`, { level: "warn" });
  let l = r.success ? r.data : h;
  return O = { raw: e, ids: l }, l;
}
function I2r(e) {
  return q().some((n) => rk(e, n));
}
function Mce(e) {
  let n = p();
  return FAe() ? n.leanRewriteCompiledOnly(e) : n.leanRewrite(e);
}
function mG(e) {
  return e.leanRewrite ?? Mce(e.model);
}
function A(e) {
  if (e === void 0) return false;
  let n = Xe(e), r = gb(n, "temporal_hare", e);
  if (r === false) return false;
  if (FAe()) return r === true && gG(e);
  if (!(r === true || KSn(e)?.data?.temporal_hare === true)) return L_n(e) && gG(e) && Wn("tengu_temporal_hare", false) === true;
  if (!gG(e)) return false;
  return kF("temporal_hare", n, e);
}
function x(e, n) {
  let r = nd()?.[e];
  return typeof r === "object" && r !== null && Object.entries(r).some(([l, s]) => s === true && n.includes(l));
}
function R7s(e) {
  return i.CLAUDE_CODE_BASALT_COVE || x("basalt_cove", e);
}
var T = "tengu_thrifty_sonic";
function J() {
  let e = p();
  return FAe() ? e.bashFirstSessionAssignmentCompiledOnly() : e.bashFirstSessionAssignment();
}
function L() {
  let e = toe(it()), n = Xe(e), r = gb(n, "thrifty_sonic", e);
  if (r === false) return "none";
  if (xDe(n) || m(n) || nd()?.[T] === true || r) return "forced";
  return RVe(e) ? "cohort" : "none";
}
function Mgn() {
  if (i.CLAUDE_CODE_THRIFTY_SONIC !== void 0) return i.CLAUDE_CODE_THRIFTY_SONIC;
  switch (J()) {
    case "forced":
      return true;
    case "none":
      return false;
    case "cohort":
      return k(T, false);
  }
}
var P = "tengu_cozy_teapot";
function R(e) {
  return e === "strict" || e === "relaxed" ? e : void 0;
}
function x7s() {
  return i.CLAUDE_CODE_COZY_TEAPOT ?? p().bashFirstSteerVariant();
}
function Q() {
  return R(nd()?.[P]) ?? (m(Xe(toe(it()))) ? "relaxed" : void 0) ?? R(Wn(P, null)) ?? "strict";
}
var X = "tengu_gorse_plover", E = "tengu_willow_tern";
function ee(e, n) {
  return e || nd()?.[n] === true || k(n, false);
}
function P7s() {
  let e = Lo();
  return e.bashActFirstEnabled ??= ee(i.CLAUDE_CODE_GORSE_PLOVER, X), e.bashActFirstEnabled;
}
function I7s(e) {
  return kF("amber_astrolabe", Xe(e), e, i.CLAUDE_CODE_AMBER_ASTROLABE || void 0);
}
function O7s(e) {
  return kF("bison_cairn", Xe(e), e, i.CLAUDE_CODE_BISON_CAIRN);
}
function M7s(e) {
  return kF("larch_cistern", Xe(e), e, i.CLAUDE_CODE_LARCH_CISTERN || void 0);
}
function j2o() {
  let e = nd()?.[E];
  if (typeof e === "boolean") return e;
  if (e !== void 0) {
    let n = p();
    if (!n.unusableWritingOverrideTold) n.unusableWritingOverrideTold = true, t(`willow_tern: ignoring non-boolean clientData ${E} value of type ${typeof e}`);
  }
  return;
}
function H7s(e) {
  if (i.CLAUDE_CODE_WILLOW_TERN) return true;
  let n = j2o();
  if (n !== void 0) return n;
  if (e === void 0) return false;
  let r = Xe(e);
  if (xDe(r)) return true;
  if (gb(r, "opus_5_prompt_bundle", e) !== true) return false;
  return k(E, false);
}
function ADe() {
  return i.CLAUDE_CODE_SIMPLE;
}
function ne(e) {
  let n = Xe(e), r = gb(n, "lean_prompt", e);
  if (r !== void 0) return !r;
  if (TDe(e) || n === "claude-mythos-5") return false;
  if (n.includes("claude-3-") || n.includes("haiku") || n.includes("sonnet") || n === "claude-opus-4-0" || n === "claude-opus-4-1" || n === "claude-opus-4-5" || n === "claude-opus-4-6" || n === "claude-opus-4-7") return true;
  return !bu();
}
function gG(e) {
  let n = p();
  return FAe() ? n.leanPromptCompiledOnly(e) : n.leanPrompt(e);
}
function JO(e) {
  return e.leanPrompt ?? gG(e.model);
}
function D(e) {
  if (!e) return false;
  if (Ne(i.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return true;
  if (as(i.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return false;
  if (!ne(e)) return true;
  if (k("tengu_velvet_tide", false)) return true;
  return x("simple_system_prompt", Xe(e));
}
var te = "breezy_horizon";
function toe(e) {
  if (e === void 0) return;
  let n = p();
  return FAe() ? n.modelForPromptCompiledOnly(e) : n.modelForPrompt(e);
}
function D7s(e) {
  let n = p().modelForPrompt;
  return n.cache.has(e) ? n(e) : void 0;
}
function N(e) {
  let n = i.CLAUDE_CODE_BREEZY_HORIZON;
  if (as(n)) return e;
  let r = ug(e), l = nd()?.[te], s = n ?? (typeof l === "object" && l !== null ? Object.entries(l).find(([_]) => _ === r)?.[1] : void 0);
  if (s === void 0) return e;
  let d = n !== void 0 ? "env" : "client_data";
  if (typeof s !== "string" || !oe(s)) return t(`[breezy_horizon] ${d}: ignoring ${String(s)} for ${r}: not a model id`, { level: "warn" }), e;
  let u = ug(s);
  if (u === r) {
    if (!$L(Cc(s))) t(`[breezy_horizon] ${d}: ${s} names ${r} itself, so it maps nothing`, { level: "warn" });
    return e;
  }
  let g = p().promptModelSwapsLogged;
  if (!g.has(e)) g.add(e), a("tengu_breezy_horizon", { from_model: wt(r), to_model: wt(u), source: c(d) });
  return s;
}
function oe(e) {
  return V_e(e) || !/\s/.test(e) && TDe(e) || $L(Cc(e));
}
class w {
  bashFirstSessionAssignment = Qr(L);
  bashFirstSessionAssignmentCompiledOnly = Qr(L);
  bashFirstSteerVariant = Qr(Q);
  leanPrompt = Qr(D);
  leanPromptCompiledOnly = Qr(D);
  modelForPrompt = Qr(N);
  modelForPromptCompiledOnly = Qr(N);
  leanRewrite = Qr(A);
  leanRewriteCompiledOnly = Qr(A);
  promptModelSwapsLogged = /* @__PURE__ */ new Set();
  unusableWritingOverrideTold = false;
}
var re = new W(() => new w());
function p() {
  return re.of(U().host);
}
export {
  A7s,
  ADe,
  C7s,
  D7s,
  H7s,
  I2r,
  I7s,
  Ign,
  JO,
  M7s,
  Mce,
  Mgn,
  O7s,
  Ogn,
  P7s,
  R7s,
  T7s,
  TDe,
  cQn,
  gG,
  j2o,
  kF,
  mG,
  toe,
  x7s
};
