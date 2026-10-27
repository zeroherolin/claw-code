// shared/chunk-cg45s1mf.js — Claude Code 2.1.310 模块 chunk-cg45s1mf.js
import { He } from "../fs/async-hooks.9s1z.js";
import { L, U } from "../context/not-admin-owned.ersa.js";
import { W } from "./chunk-3y73jbfr.js";
var n = /* @__PURE__ */ new Set(["hipaa"]);
class o {
  latched = /* @__PURE__ */ new Set();
  latchedTaints = [];
  taints = [];
  current = [];
  changed = He();
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
function D4r(e) {
  return t().replaceTaints(e);
}
function Gai(e) {
  return t().latchTaints(e);
}
function zai(e) {
  return n.has(e);
}
function zs(e) {
  return t().taints.includes(e);
}
function HL() {
  return t().taints;
}
function CZ() {
  return t().current;
}
function L4r() {
  return t().latchedTaints;
}
function o5(e) {
  return t().changed.subscribe(e);
}
function Vai() {
  t().resetForTesting();
}
function Kai(e) {
  t().registerVerdict(e);
}
function mb(e) {
  return t().verdict?.isPolicyAllowed(e) ?? false;
}
function qai() {
  let e = t().verdict;
  return e ? e.rememberedCoreSkills() : [];
}
function bsr(e) {
  try {
    return t().verdict?.commandPolicyGateAllows(e) ?? false;
  } catch {
    return false;
  }
}
function ER(e) {
  let r = t().verdict;
  if (!r) return "unregistered";
  return r.policyDenyKind(e);
}
function s5(e, r, i) {
  return t().verdict?.policyDeniedReason(e, r, i) ?? null;
}
function Qkt() {
  return t().verdict?.complianceTaintsSettled() ?? false;
}
function u1() {
  let e = t().verdict;
  if (e === void 0) return false;
  try {
    return !e.policyLimitsCacheLoaded();
  } catch {
    return true;
  }
}
function Yai() {
  let e = t().verdict;
  if (e === void 0) return "loaded";
  try {
    return e.autoDefaultVerdictState();
  } catch {
    return "pending";
  }
}
function ez() {
  let e = t().verdict;
  if (e === void 0) return false;
  try {
    return e.policyVerdictAbsent();
  } catch {
    return true;
  }
}
function Xai() {
  let e = t().verdict;
  if (e === void 0) return false;
  try {
    return e.principalSeenUnderHipaa();
  } catch {
    return true;
  }
}
export {
  CZ,
  D4r,
  ER,
  Gai,
  HL,
  Kai,
  L4r,
  Qkt,
  Vai,
  Xai,
  Yai,
  bsr,
  ez,
  mb,
  o5,
  qai,
  s5,
  u1,
  zai,
  zs
};
