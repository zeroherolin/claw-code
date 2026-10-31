// darwin/settings/served-unattended-consent.js — Claude Code 2.1.310（darwin）模块 chunk-0qpxz5y6.js
import { S, c } from "../agents/third-party.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { F1e, f7, wq, Cvr, Tvr } from "../shell/gave-up.js";
var L1e = { accepted: "Allowed", declined: "Not allowed", unset: "Not asked yet" }, t = "Turned off by your organization's settings (remoteTools.allowUnattendedServing)", o = "Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) — remove it there to re-enable";
function FQt() {
  return Cvr() === "user" ? o : t;
}
function KNn(e) {
  return f7() !== "unset" || Tvr() || e;
}
function qNn() {
  return f7() === "accepted" || Tvr();
}
async function YNn(e) {
  if (e === "accepted" && wq()) return "forbidden";
  let n = e === "accepted" ? "accepted" : f7() === "accepted" ? "revoked" : "declined";
  if (!await F1e(e)) return "not_saved";
  return a("tengu_served_unattended_consent", { action: c(n), surface: S("cli") }), "saved";
}
export {
  FQt,
  KNn,
  L1e,
  YNn,
  qNn
};
