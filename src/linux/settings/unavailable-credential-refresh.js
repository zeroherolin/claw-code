// linux/settings/unavailable-credential-refresh.js — Claude Code 2.1.310（linux）模块 chunk-xe791z5g.js
import { ye } from "../context/not-admin-owned.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { pe } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { go } from "../mcp/init-function-end.js";
import { Hc } from "./global-config-and-gates.js";
import { Qoo, Fpe, ogs, x9t, sgs, eso, tso, VPt, igs, ryr, nso, rso, P9t, oyr, oso } from "../auth/org-config-gate.js";
async function p(e, t) {
  let { exitRefusingManagedConfig: r } = await import("./attachable-file-at.js");
  return r({ message: e.message ?? "Claude Code couldn't load your organization's settings, which it requires before a session can start.", reason: ogs(e.decision), print: t, beforeExit: igs });
}
function d(e, t) {
  return { surface: e ? "startup" : "noninteractive", authRecoveryCommand: false, ...t.fetchFlag !== void 0 && { fetchFlag: t.fetchFlag }, ...t.isFlagFetchHeld !== void 0 && { isFlagFetchHeld: t.isFlagFetchHeld }, ...t.isFlagCacheEmpty !== void 0 && { isFlagCacheEmpty: t.isFlagCacheEmpty } };
}
async function Xoo(e = {}) {
  let t = e.interactive ?? !ye(), r = d(t, e), a = e.peek ?? x9t, n = a(r);
  if (go("org_config_gate_phase_one"), n.decision.verdict !== "refused") return;
  if (n.flagSource === "disk" || n.flagSource === "fallback") {
    let i = e.isFlagFetchHeld ?? P9t;
    if (i()) return;
    if (nso(n.flagSource, i, e.isFlagCacheEmpty)) {
      if (await oyr(n.flag.budgetMs, e.fetchFlag), n = a(r), n.decision.verdict !== "refused") return;
    }
  }
  return await VPt(n, n.outcomes), l(n, r, t, e);
}
async function VOn(e = {}) {
  let t = e.interactive ?? !ye(), r = d(t, e), a = await (e.evaluate ?? sgs)(r);
  if (go("org_config_gate_phase_two"), !Fpe(a.decision)) return;
  return l(a, r, t, e);
}
async function Joo(e, t = {}) {
  let r = d(false, t), { armed: a } = await C(r, t);
  if (go("org_config_gate_headless"), !a) return;
  let n = t.readPolicySlot ?? (() => pe("policySettings")), i = n(), o = await e();
  if (!o.valid) return o;
  return await VOn({ ...t, interactive: false }), (t.settingsInHand ?? (() => Qoo().reason === "ok"))() && n() === i ? o : void 0;
}
async function wki(e = {}) {
  let t = d(true, e), r = await C(t, e);
  if (go("org_config_gate_launch_lane"), !r.armed) return;
  if (!Fpe(r.decision)) {
    VPt(r, r.outcomes);
    return;
  }
  if (!(e.attended ?? !Hc()) || e.showBlockedScreen === void 0) return await (e.retryFetches ?? ryr)(), VOn({ ...e, interactive: true });
  return await VPt(r, r.outcomes), l(r, t, true, { ...e, retryFirst: true });
}
async function C(e, t) {
  let r = t.peek ?? x9t, a = r(e);
  if (rso(a, t.isFlagFetchHeld, t.isFlagCacheEmpty)) await oso(t.fetchFlag), a = r(e);
  return eso(a, () => r(e), t.primeSettingsCacheAge);
}
async function l(e, t, r, a) {
  let n = a.exit ?? ((c) => p(c, a.printMessage)), i = a.reportFinal ?? VPt;
  if (!r || !(a.attended ?? !Hc())) {
    let c = e;
    if (!r) {
      let f = await h(e, t, a);
      if (f !== void 0) {
        if (!Fpe(f.decision)) {
          await i(f, void 0, { outcome: "passed", recoveredAfterMs: f.decision.blockedMs });
          return;
        }
        c = f;
      }
    }
    return await i(c, void 0, { outcome: "exit" }), n(c);
  }
  let o = await a.showBlockedScreen?.();
  if (o === void 0) return await i(e, void 0, { outcome: "exit" }), n(e);
  let g = a.now ?? (() => performance.now()), u = g() - e.decision.blockedMs, s = e, O = 0, m = await o(e, async () => (await (a.retryFetches ?? ryr)(), O += 1, s = (a.reevaluate ?? tso)(t, Math.max(0, Math.round(g() - u)), O), s), { retryNow: a.retryFirst === true });
  if (m === "passed") {
    await i(s, void 0, { outcome: "passed", recoveredAfterMs: Math.max(0, Math.round(g() - u)) });
    return;
  }
  return await i(s, void 0, { outcome: m }), n(s);
}
async function h(e, t, r) {
  let { decision: a, flag: n } = e;
  if (a.verdict !== "blocked" || a.reason !== "unavailable_credential_refresh") return;
  let i = n.budgetMs - a.blockedMs;
  if (i <= 0) return;
  let o = r.now ?? (() => performance.now()), g = o();
  await Pe((r.retryFetches ?? ryr)().catch(() => {
  }), i);
  let u = Math.max(0, Math.round(o() - g));
  return (r.reevaluate ?? tso)(t, a.blockedMs + u, 1);
}
export {
  Joo,
  VOn,
  Xoo,
  wki
};
