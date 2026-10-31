// darwin/telemetry/below-floor.js — Claude Code 2.1.310（darwin）模块 chunk-em2xex9b.js
import { d } from "./anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { k } from "../settings/global-config-and-gates.js";
import { AAe, Zwt } from "../remote/bridge-message-received.js";
import { TAe } from "../remote/sessions-elevated-auth-disable-proactive-enrollment.js";
import { W0o, vi, tdn } from "../context/team-memory-sync.js";
function woo() {
  if (!W0o()) return "off";
  try {
    return k("tengu_vast_tulip", false) === true ? "enforce" : "observe";
  } catch {
    return t("tool host attestation: reading tengu_vast_tulip threw; observing", { level: "warn" }), "observe";
  }
}
function s(e) {
  let o = TAe(), { status: r, meetsLevel: n, configException: i } = Zwt(e, o, { isCloudWorker: false });
  return { status: r, verdict: !o.enforce ? "not_policed" : n ? "pass" : i ? "config_exception" : "below_floor" };
}
function Wfe(e) {
  let o = woo();
  return o === "off" ? void 0 : { mode: o, ...s(AAe(e)) };
}
function Ywe(e) {
  return e?.mode === "enforce" && e.verdict === "below_floor";
}
function POn() {
  let e = Wfe("UNSPECIFIED");
  return { attestation: e, heldBack: Ywe(e) };
}
function Ems(e) {
  try {
    e?.(tdn, vi["repository_trust.served_calls.unattested"]);
  } catch (o) {
    t(`[remote-tools] the notice sink threw on ${tdn}: ${d(o)}`, { level: "error" });
  }
}
export {
  Ems,
  POn,
  Wfe,
  Ywe,
  woo
};
