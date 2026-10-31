// linux/models/bridge-flag-settings.js — Claude Code 2.1.310（linux）模块 chunk-astq50qw.js
import { m } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { mo } from "../artifacts/chunk-a6c9d164.js";
import { fGr, tH, Bm, QQn, ZQn, Aw, w7, r_e, sKe, twt, az, QA, Xre, rwt, t7n, Rce, ed, Cw, Egn, dGt } from "./ccr-unsupported-default-mode-ignored.js";
import { CBr } from "../telemetry/bridge-resume-respects-local-owner.js";
function zme(e, r) {
  let o = Cw(e, r);
  return typeof o === "string" ? o : null;
}
function ljn(e, { model: r, getAppState: o, setAppState: s }) {
  if (!CBr()) return m("bridge_flag_settings", "disabled"), { ok: false, error: "apply_flag_settings: effort changes over Remote Control are turned off" };
  let f, n, d = false;
  if ("effortLevel" in e && !ZQn(r, e.effortLevel, o())) {
    if (d = true, e.effortLevel != null) {
      let u = az(e.effortLevel) ?? sKe(e.effortLevel);
      if (typeof u !== "string" || !Aw(u)) return m("bridge_flag_settings", "invalid_effort_level"), { ok: false, error: "apply_flag_settings: unrecognized effortLevel" };
      f = u, n = w7(u, r);
    }
    let p = QA();
    if (p !== void 0 && n !== p) return m("bridge_flag_settings", "env_override"), { ok: false, error: "apply_flag_settings: CLAUDE_CODE_EFFORT_LEVEL overrides effort for this session" };
  }
  let c = r_e(e.effortLevel) === "ultracode", a = "ultracode" in e ? e.ultracode === true : void 0;
  if ((a === true || a === void 0 && c) && !tH(r)) return m("bridge_flag_settings", "ultracode_unavailable"), { ok: false, error: `apply_flag_settings: ultracode is not available for this session (${tH() ? `${r} does not support it` : "dynamic workflows are off"})` };
  s((p) => {
    let u = d && !c && QQn(r, p, f), i = p;
    if (d) {
      let g = rwt(n);
      if (!Rce(i.sessionEffort, g)) i = { ...i, sessionEffort: g };
    }
    if (a === void 0) {
      if (c) {
        if (!i.ultracode) i = { ...i, ultracode: true };
      } else if (u && i.ultracode) i = { ...i, ultracode: false };
    } else if ((i.ultracode ?? false) !== a) i = { ...i, ultracode: a };
    return i;
  });
  let l = o();
  return t(`[bridge] apply_flag_settings applied effort=${ed(l) ?? "auto"} ultracode=${l.ultracode === true}`), { ok: true };
}
function ePs(e, { getAppState: r, setAppState: o, latch: s }) {
  let f = twt(e.trim()).level, n = f === void 0 ? void 0 : fGr(f);
  if (n === void 0) return { ok: false, error: "unrecognized effort" };
  let d = r_e(f) === "ultracode", c = !d && s.seedSetUltracode;
  return s.seedSetUltracode = d, o((a) => {
    let l = a;
    if (!Rce(a.sessionEffort, Xre(n))) l = { ...l, sessionEffort: Xre(n) };
    if (d && !l.ultracode) l = { ...l, ultracode: true };
    else if (c && l.ultracode) l = { ...l, ultracode: false };
    return l;
  }), t(`[bridge] effort seeded effort=${ed(r()) ?? "auto"} ultracode=${r().ultracode === true}`), { ok: true };
}
function Zft({ level: e, ultracodeActive: r, requestId: o }) {
  let s = E();
  if (!s || !CBr()) return;
  let f = mo(), n = {};
  if (e !== void 0) {
    if (f.lastKnownEffort = e, f.lastReportedEffort !== e) f.lastReportedEffort = e, n.effort_level = e;
  }
  if (r !== void 0) {
    if (f.lastKnownUltracodeActive = r, f.lastReportedUltracodeActive !== r) f.lastReportedUltracodeActive = r, n.is_ultracode_active = r || null;
  }
  if (o !== void 0) f.lastKnownEffortRequestId = o, n.effort_request_id = o;
  if (Object.keys(n).length > 0) s.reportMetadata(n);
}
function Zae(e, r) {
  if (!E()) return;
  let o = Egn(e, ed(r, e) ?? dGt(e));
  Zft({ level: o === void 0 ? null : zme(e, o), ultracodeActive: Bm(r.ultracode, e) });
}
function djn(e) {
  Zft({ requestId: t7n(e) });
}
function E() {
  let e = mo(), r = e.replHandle ?? e.sdkHostedHandle;
  return r && !r.outboundOnly ? r : null;
}
function tPs() {
  let e = mo();
  e.lastReportedEffort = void 0, e.lastReportedUltracodeActive = void 0, Zft({ level: e.lastKnownEffort, ultracodeActive: e.lastKnownUltracodeActive, requestId: e.lastKnownEffortRequestId });
}
export {
  Zae,
  Zft,
  djn,
  ePs,
  ljn,
  tPs,
  zme
};
