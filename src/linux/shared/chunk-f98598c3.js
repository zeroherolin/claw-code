// linux/shared/chunk-f98598c3.js — Claude Code 2.1.310（linux）模块 chunk-znkwh1rm.js
import { De } from "../fs/async-hooks.93b1.js";
import { L, U } from "../context/not-admin-owned.js";
import { W } from "./chunk-37dd5dd4.js";
var n = /* @__PURE__ */ new Set(["hipaa"]);
class o {
  latched = /* @__PURE__ */ new Set();
  latchedTaints = [];
  taints = [];
  current = [];
  changed = De();
  verdict = void 0;
  replaceTaints(e) {
    this.current = L(e).sort();
    for (let r of e) if (n.has(r)) this.latched.add(r);
    if (this.latched.size !== this.latchedTaints.length) this.latchedTaints = Array.from(this.latched).sort();
    return this.refreshEffectiveTaints();
  }
  latchTaints(e) {
    let r = false;
    for (let i of e) if (n.has(i) && !this.latched.has(i)) this.latched.add(i), r = true;
    if (!r) return false;
    return this.latchedTaints = Array.from(this.latched).sort(), this.refreshEffectiveTaints();
  }
  refreshEffectiveTaints() {
    let e = L([...this.latchedTaints, ...this.current]).sort();
    if (e.length === this.taints.length && e.every((r, i) => r === this.taints[i])) return false;
    return this.taints = e, this.changed.emit(this.taints), true;
  }
  registerVerdict(e) {
    this.verdict = e;
  }
  resetForTesting() {
    this.latched.clear(), this.latchedTaints = [], this.taints = [], this.current = [];
  }
}
var a = new W(() => new o());
function t() {
  return a.of(U().host);
}
function p5r(e) {
  return t().replaceTaints(e);
}
function iai(e) {
  return t().latchTaints(e);
}
function aai(e) {
  return n.has(e);
}
function Ks(e) {
  return t().taints.includes(e);
}
function I0() {
  return t().taints;
}
function yZ() {
  return t().current;
}
function m5r() {
  return t().latchedTaints;
}
function V5(e) {
  return t().changed.subscribe(e);
}
function lai() {
  t().resetForTesting();
}
function dai(e) {
  t().registerVerdict(e);
}
function pS(e) {
  return t().verdict?.isPolicyAllowed(e) ?? false;
}
function cai() {
  let e = t().verdict;
  return e ? e.rememberedCoreSkills() : [];
}
function nsr(e) {
  try {
    return t().verdict?.commandPolicyGateAllows(e) ?? false;
  } catch {
    return false;
  }
}
function bR(e) {
  let r = t().verdict;
  if (!r) return "unregistered";
  return r.policyDenyKind(e);
}
function q5(e, r, i) {
  return t().verdict?.policyDeniedReason(e, r, i) ?? null;
}
function Gkt() {
  return t().verdict?.complianceTaintsSettled() ?? false;
}
function iB() {
  let e = t().verdict;
  if (e === void 0) return false;
  try {
    return !e.policyLimitsCacheLoaded();
  } catch {
    return true;
  }
}
function uai() {
  let e = t().verdict;
  if (e === void 0) return "loaded";
  try {
    return e.autoDefaultVerdictState();
  } catch {
    return "pending";
  }
}
function zz() {
  let e = t().verdict;
  if (e === void 0) return false;
  try {
    return e.policyVerdictAbsent();
  } catch {
    return true;
  }
}
function fai() {
  let e = t().verdict;
  if (e === void 0) return false;
  try {
    return e.principalSeenUnderHipaa();
  } catch {
    return true;
  }
}
export {
  Gkt,
  I0,
  Ks,
  V5,
  aai,
  bR,
  cai,
  dai,
  fai,
  iB,
  iai,
  lai,
  m5r,
  nsr,
  p5r,
  pS,
  q5,
  uai,
  yZ,
  zz
};
