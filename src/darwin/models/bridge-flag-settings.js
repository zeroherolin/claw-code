// darwin/models/bridge-flag-settings.js — Claude Code 2.1.310（darwin）模块 chunk-2g0ph20f.js
import { m } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { mo } from "../artifacts/chunk-a6c9d164.js";
import { M2r, sH, Bm, hQn, yQn, Aw, xQ, d_e, g6e, lwt, hG, tA, noe, cwt, SQn, Dce, ed, Rw, Fgn, w2t } from "./ccr-unsupported-default-mode-ignored.js";
import { z1r } from "../telemetry/bridge-resume-respects-local-owner.js";
function Xme(e, r) {
  let o = Rw(e, r);
  return typeof o === "string" ? o : null;
}
function kjn(e, { model: r, getAppState: o, setAppState: s }) {
  if (!z1r()) return m("bridge_flag_settings", "disabled"), { ok: false, error: "apply_flag_settings: effort changes over Remote Control are turned off" };
  let f, n, d = false;
  if ("effortLevel" in e && !yQn(r, e.effortLevel, o())) {
    if (d = true, e.effortLevel != null) {
      let u = hG(e.effortLevel) ?? g6e(e.effortLevel);
      if (typeof u !== "string" || !Aw(u)) return m("bridge_flag_settings", "invalid_effort_level"), { ok: false, error: "apply_flag_settings: unrecognized effortLevel" };
      f = u, n = xQ(u, r);
    }
    let p = tA();
    if (p !== void 0 && n !== p) return m("bridge_flag_settings", "env_override"), { ok: false, error: "apply_flag_settings: CLAUDE_CODE_EFFORT_LEVEL overrides effort for this session" };
  }
  let c = d_e(e.effortLevel) === "ultracode", a = "ultracode" in e ? e.ultracode === true : void 0;
  if ((a === true || a === void 0 && c) && !sH(r)) return m("bridge_flag_settings", "ultracode_unavailable"), { ok: false, error: `apply_flag_settings: ultracode is not available for this session (${sH() ? `${r} does not support it` : "dynamic workflows are off"})` };
  s((p) => {
    let u = d && !c && hQn(r, p, f), i = p;
    if (d) {
      let g = cwt(n);
      if (!Dce(i.sessionEffort, g)) i = { ...i, sessionEffort: g };
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
function NPs(e, { getAppState: r, setAppState: o, latch: s }) {
  let f = lwt(e.trim()).level, n = f === void 0 ? void 0 : M2r(f);
  if (n === void 0) return { ok: false, error: "unrecognized effort" };
  let d = d_e(f) === "ultracode", c = !d && s.seedSetUltracode;
  return s.seedSetUltracode = d, o((a) => {
    let l = a;
    if (!Dce(a.sessionEffort, noe(n))) l = { ...l, sessionEffort: noe(n) };
    if (d && !l.ultracode) l = { ...l, ultracode: true };
    else if (c && l.ultracode) l = { ...l, ultracode: false };
    return l;
  }), t(`[bridge] effort seeded effort=${ed(r()) ?? "auto"} ultracode=${r().ultracode === true}`), { ok: true };
}
function sft({ level: e, ultracodeActive: r, requestId: o }) {
  let s = E();
  if (!s || !z1r()) return;
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
function ale(e, r) {
  if (!E()) return;
  let o = Fgn(e, ed(r, e) ?? w2t(e));
  sft({ level: o === void 0 ? null : Xme(e, o), ultracodeActive: Bm(r.ultracode, e) });
}
function Cjn(e) {
  sft({ requestId: SQn(e) });
}
function E() {
  let e = mo(), r = e.replHandle ?? e.sdkHostedHandle;
  return r && !r.outboundOnly ? r : null;
}
function FPs() {
  let e = mo();
  e.lastReportedEffort = void 0, e.lastReportedUltracodeActive = void 0, sft({ level: e.lastKnownEffort, ultracodeActive: e.lastKnownUltracodeActive, requestId: e.lastKnownEffortRequestId });
}
export {
  Cjn,
  FPs,
  NPs,
  Xme,
  ale,
  kjn,
  sft
};
