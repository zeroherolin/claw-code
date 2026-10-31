// settings/fast-mode-toggled.3t1s.js — Claude Code 2.1.310 模块 chunk-3t1se16v.js
import { Pe } from "../shared/chunk-3kevgx4j.js";
import { Rf, ye, xf, RA } from "../context/not-admin-owned.ersa.js";
import { c } from "../agents/third-party.ydpb.js";
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { he } from "../terminal/xterm-ghostty.qrwz.js";
import { Ese } from "../shell/invalid-type.qnva.js";
import { pnt, IG, jV, B_e, Hh, WV, tvt, rvt, TLe, it, Wb, Xe, Ft } from "./global-config-and-gates.27xj.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { tr, dl } from "../shared/async-hooks.m2fg.js";
import { er } from "./workflow-launch-exec.t4r2.js";
import { Un } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { cC } from "../remote/moved-directory.z3m0.js";
import { js } from "./chunk-rq620hy6.js";
import { Gi } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { qon, q7, oE, Ab, iS, dNt, cNt } from "../core/conversation-engine.31gx.js";
import { ND } from "../git/bridge-child-tool-diff.m7a8.js";
import { W1e } from "../context/chunk-4v1ssp9c.js";
import { mFn } from "../shared/chunk-sjqrd429.js";
import { _8e } from "../shared/chunk-tnnwxyz2.js";
import { Qn } from "../vendor/chalk/chunk-06zv4nk8.js";
import { OT, ip, o2 } from "./model-switch.2ch7.js";
function BEe(o = true, e = false) {
  if (!o) return Ese;
  let n = _8e(js("theme", "dark").value);
  if (e) return he.dim(Qn("promptBorder", n)(Ese));
  return Qn("fastMode", n)(Ese);
}
var Lgo = 8e3, j1e = "Fast mode unchanged (cancelled)";
function jEe(o) {
  if (Hh(qon({ ...o, toolPermissionContext: { mode: "default" } }))) return;
  let e = B_e();
  return Ft(e) === Ft(Wb()) ? null : e;
}
async function qvr(o, e, n) {
  let f = jEe(e());
  if (f === void 0 || dl() || !q7(o)) return { vetted: JQt, messages: [] };
  let i = await OT(o, e, f, "command", { signal: n });
  if (i.decision === "proceed") return { vetted: { target: f }, messages: i.messages };
  return { refusal: o2(f, i.decision === "ask" ? `${i.reason ?? "confirmation required"} (use /model to switch, then /fast)` : i.reason, i.messages) };
}
var JQt = { unvetted: true };
function DMt(o, e) {
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
function QQt(o, e, n, f = true, i, s = JQt) {
  if (WV(), e) tvt();
  let k = () => {
    if (f && !ye()) return;
    RA({ ...xf() ?? {}, fastMode: e });
  }, M = () => {
    if (W1e({ fastMode: e }, n), e) {
      let r = false, m = null;
      if (n((u) => {
        let l = jEe(u);
        if (l === void 0) return u;
        if (!("unvetted" in s) && s.target !== l) return u;
        return oE(o, u, l, "command"), r = true, m = l, { ...u, mainLoopModel: l, mainLoopModelForSession: null };
      }), r && pnt()) Rf(m);
    }
    if (!f) if (!cC() && pnt()) Gi.notifyChange("flagSettings");
    else er();
  };
  if (dl()) {
    k();
    let r = tr()?.sendControlRequest({ subtype: "apply_flag_settings", settings: { fastMode: e ? true : null, ...e && { model: B_e() } } });
    if (!r) return M(), Promise.resolve(void 0);
    return r.then(() => {
      M();
      return;
    }, (m) => (t(`fast mode: workspace did not accept apply_flag_settings: ${d(m)}`, { level: "error" }), m instanceof ND ? { kind: "timeout" } : { kind: "refused", reason: ip(d(m)) }));
  }
  if (e && !("unvetted" in s)) {
    let r = false;
    if (n((m) => {
      let u = jEe(m);
      return r = u !== void 0 && u !== s.target, m;
    }), r) return Promise.resolve({ kind: "stale" });
  }
  if (k(), mFn(e, i), f) Un("userSettings", { fastMode: e ? true : void 0 }, void 0, i);
  return M(), Promise.resolve(void 0);
}
async function ZQt(o, e, n, f, i, s = true, k, M, r, m, u) {
  let l = () => Ab(o, async () => {
    if (M) await Pe(M(), Lgo);
    if (r?.aborted) return { kind: "refused", refusal: j1e };
    let F = IG(void 0, { sessionOptIn: !s && !cC() && pnt(), sessionOnly: !s || ye() });
    if (F && e) return { kind: "refused", refusal: `Fast mode unavailable: ${F}` };
    let w = JQt, h = [];
    if (e) {
      let S = await qvr(o, n, r);
      if (r?.aborted) return { kind: "refused", refusal: j1e };
      if (S.refusal !== void 0) return { kind: "refused", refusal: S.refusal };
      w = S.vetted, h = S.messages;
    }
    let P = e && jEe(n()) !== void 0;
    return m?.(), { kind: "applied", remote: await QQt(o, e, f, s, k, w), willPromote: P, hookMessages: h };
  }), p = {}, y = s && u !== void 0 && !dl() ? await u(e, async () => {
    if (p.outcome = await l(), p.outcome.kind === "refused") return p.outcome.refusal;
    return p.outcome.remote === void 0 ? void 0 : DMt(p.outcome.remote, e);
  }) : void 0, g = p.outcome ?? (y === void 0 ? await l() : void 0);
  if (g === void 0) return r?.aborted ? j1e : y ?? "Fast mode was not changed";
  if (g.kind === "refused") return g.refusal;
  if (g.remote !== void 0) return DMt(g.remote, e);
  if (a("tengu_fast_mode_toggled", { enabled: e, source: c(i), remote: dl() }), e) {
    let F = BEe(true), w = g.willPromote ? `${cNt}${iS(jV())}` : "", h = it(), P = Xe(Hh(h) ? h : Ft(B_e())), _ = TLe(rvt(P)), S = s ? "" : " (this session only)", O = g.hookMessages.length > 0 ? `
${g.hookMessages.map(ip).join(`
`)}` : "";
    return `${F} ${dNt}${w} · ${_}${S}${O}`;
  } else return `Fast mode OFF${s ? "" : " (this session only)"}`;
}
export {
  BEe,
  DMt,
  JQt,
  Lgo,
  QQt,
  ZQt,
  j1e,
  jEe,
  qvr
};
