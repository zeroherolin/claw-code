// linux/settings/served-unattended-consent.js — Claude Code 2.1.310（linux）模块 chunk-rbxjs1s5.js
import { b, c } from "../agents/third-party.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { xBe, iJ, u4, cEr, uEr } from "../shell/gave-up.js";
var CBe = { accepted: "Allowed", declined: "Not allowed", unset: "Not asked yet" }, t = "Turned off by your organization's settings (remoteTools.allowUnattendedServing)", o = "Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) — remove it there to re-enable";
function R7t() {
  return cEr() === "user" ? o : t;
}
function DNn(e) {
  return iJ() !== "unset" || uEr() || e;
}
function HNn() {
  return iJ() === "accepted" || uEr();
}
async function LNn(e) {
  if (e === "accepted" && u4()) return "forbidden";
  let n = e === "accepted" ? "accepted" : iJ() === "accepted" ? "revoked" : "declined";
  if (!await xBe(e)) return "not_saved";
  return a("tengu_served_unattended_consent", { action: c(n), surface: b("cli") }), "saved";
}
export {
  CBe,
  DNn,
  HNn,
  LNn,
  R7t
};
