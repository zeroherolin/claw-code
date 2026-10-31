// linux/settings/fast-mode-toggled.js — Claude Code 2.1.310（linux）模块 chunk-wcf33wwb.js
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { Rp, ye, xp, TC } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { he } from "../terminal/xterm-ghostty.js";
import { gse } from "../shell/invalid-type.js";
import { snt, vz, IV, D_e, Dh, OV, qvt, Xvt, S0e, st, jS, Xe, $t } from "./global-config-and-gates.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { tr, ll } from "../shared/async-hooks.5238.js";
import { er } from "./workflow-launch-exec.js";
import { Un } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { aT } from "../remote/moved-directory.js";
import { js } from "./chunk-9121eb73.js";
import { Gi } from "../context/org-memory-writes-setting-changed.js";
import { Mon, UJ, rv, AS, sb, J0t, Q0t } from "../core/conversation-engine.js";
import { DL } from "../git/bridge-child-tool-diff.js";
import { DBe } from "../context/chunk-d3a03b3c.js";
import { t$n } from "../shared/chunk-5cc0d77a.js";
import { u8e } from "../shared/chunk-c76f3544.js";
import { Qn } from "../vendor/chalk/chunk-24ee1a9d.js";
import { xA, af, YW } from "./model-switch.js";
function Lve(o = true, e = false) {
  if (!o) return gse;
  let n = u8e(js("theme", "dark").value);
  if (e) return he.dim(Qn("promptBorder", n)(gse));
  return Qn("fastMode", n)(gse);
}
var fgo = 8e3, MBe = "Fast mode unchanged (cancelled)";
function Nve(o) {
  if (Dh(Mon({ ...o, toolPermissionContext: { mode: "default" } }))) return;
  let e = D_e();
  return $t(e) === $t(jS()) ? null : e;
}
async function MEr(o, e, n) {
  let f = Nve(e());
  if (f === void 0 || ll() || !UJ(o)) return { vetted: B7t, messages: [] };
  let i = await xA(o, e, f, "command", { signal: n });
  if (i.decision === "proceed") return { vetted: { target: f }, messages: i.messages };
  return { refusal: YW(f, i.decision === "ask" ? `${i.reason ?? "confirmation required"} (use /model to switch, then /fast)` : i.reason, i.messages) };
}
var B7t = { unvetted: true };
function RMt(o, e) {
  let n = e ? "enabled" : "disabled";
  switch (o.kind) {
    case "timeout":
      return `No response from the workspace — fast mode may still have been ${n} there`;
    case "stale":
      return `Fast mode was not ${n}: the model changed while PreModelSwitch hooks ran; try again`;
    case "refused":
      return `Fast mode was not ${n} on the workspace: ${o.reason}`;
  }
}
function j7t(o, e, n, f = true, i, s = B7t) {
  if (OV(), e) qvt();
  let k = () => {
    if (f && !ye()) return;
    TC({ ...xp() ?? {}, fastMode: e });
  }, M = () => {
    if (DBe({ fastMode: e }, n), e) {
      let r = false, m = null;
      if (n((u) => {
        let l = Nve(u);
        if (l === void 0) return u;
        if (!("unvetted" in s) && s.target !== l) return u;
        return rv(o, u, l, "command"), r = true, m = l, { ...u, mainLoopModel: l, mainLoopModelForSession: null };
      }), r && snt()) Rp(m);
    }
    if (!f) if (!aT() && snt()) Gi.notifyChange("flagSettings");
    else er();
  };
  if (ll()) {
    k();
    let r = tr()?.sendControlRequest({ subtype: "apply_flag_settings", settings: { fastMode: e ? true : null, ...e && { model: D_e() } } });
    if (!r) return M(), Promise.resolve(void 0);
    return r.then(() => {
      M();
      return;
    }, (m) => (t(`fast mode: workspace did not accept apply_flag_settings: ${d(m)}`, { level: "error" }), m instanceof DL ? { kind: "timeout" } : { kind: "refused", reason: af(d(m)) }));
  }
  if (e && !("unvetted" in s)) {
    let r = false;
    if (n((m) => {
      let u = Nve(m);
      return r = u !== void 0 && u !== s.target, m;
    }), r) return Promise.resolve({ kind: "stale" });
  }
  if (k(), t$n(e, i), f) Un("userSettings", { fastMode: e ? true : void 0 }, void 0, i);
  return M(), Promise.resolve(void 0);
}
async function W7t(o, e, n, f, i, s = true, k, M, r, m, u) {
  let l = () => AS(o, async () => {
    if (M) await Pe(M(), fgo);
    if (r?.aborted) return { kind: "refused", refusal: MBe };
    let F = vz(void 0, { sessionOptIn: !s && !aT() && snt(), sessionOnly: !s || ye() });
    if (F && e) return { kind: "refused", refusal: `Fast mode unavailable: ${F}` };
    let w = B7t, h = [];
    if (e) {
      let S = await MEr(o, n, r);
      if (r?.aborted) return { kind: "refused", refusal: MBe };
      if (S.refusal !== void 0) return { kind: "refused", refusal: S.refusal };
      w = S.vetted, h = S.messages;
    }
    let P = e && Nve(n()) !== void 0;
    return m?.(), { kind: "applied", remote: await j7t(o, e, f, s, k, w), willPromote: P, hookMessages: h };
  }), p = {}, y = s && u !== void 0 && !ll() ? await u(e, async () => {
    if (p.outcome = await l(), p.outcome.kind === "refused") return p.outcome.refusal;
    return p.outcome.remote === void 0 ? void 0 : RMt(p.outcome.remote, e);
  }) : void 0, g = p.outcome ?? (y === void 0 ? await l() : void 0);
  if (g === void 0) return r?.aborted ? MBe : y ?? "Fast mode was not changed";
  if (g.kind === "refused") return g.refusal;
  if (g.remote !== void 0) return RMt(g.remote, e);
  if (a("tengu_fast_mode_toggled", { enabled: e, source: c(i), remote: ll() }), e) {
    let F = Lve(true), w = g.willPromote ? `${Q0t}${sb(IV())}` : "", h = st(), P = Xe(Dh(h) ? h : $t(D_e())), _ = S0e(Xvt(P)), S = s ? "" : " (this session only)", O = g.hookMessages.length > 0 ? `
${g.hookMessages.map(af).join(`
`)}` : "";
    return `${F} ${J0t}${w} · ${_}${S}${O}`;
  } else return `Fast mode OFF${s ? "" : " (this session only)"}`;
}
export {
  B7t,
  Lve,
  MBe,
  MEr,
  Nve,
  RMt,
  W7t,
  fgo,
  j7t
};
