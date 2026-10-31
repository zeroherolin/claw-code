// linux/telemetry/below-floor.js — Claude Code 2.1.310（linux）模块 chunk-pw1f3tmw.js
import { d } from "./anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { k } from "../settings/global-config-and-gates.js";
import { wCe, Kwt } from "../remote/bridge-message-received.js";
import { SCe } from "../remote/sessions-elevated-auth-disable-proactive-enrollment.js";
import { jDo, Ei, sdn } from "../context/team-memory-sync.js";
function loo() {
  if (!jDo()) return "off";
  try {
    return k("tengu_vast_tulip", false) === true ? "enforce" : "observe";
  } catch {
    return t("tool host attestation: reading tengu_vast_tulip threw; observing", { level: "warn" }), "observe";
  }
}
function s(e) {
  let o = SCe(), { status: r, meetsLevel: n, configException: i } = Kwt(e, o, { isCloudWorker: false });
  return { status: r, verdict: !o.enforce ? "not_policed" : n ? "pass" : i ? "config_exception" : "below_floor" };
}
function Lpe(e) {
  let o = loo();
  return o === "off" ? void 0 : { mode: o, ...s(wCe(e)) };
}
function Kwe(e) {
  return e?.mode === "enforce" && e.verdict === "below_floor";
}
function vOn() {
  let e = Lpe("UNSPECIFIED");
  return { attestation: e, heldBack: Kwe(e) };
}
function oms(e) {
  try {
    e?.(sdn, Ei["repository_trust.served_calls.unattested"]);
  } catch (o) {
    t(`[remote-tools] the notice sink threw on ${sdn}: ${d(o)}`, { level: "error" });
  }
}
export {
  Kwe,
  Lpe,
  loo,
  oms,
  vOn
};
