// permissions/auto-mode.bc6g.js — Claude Code 2.1.310 模块 chunk-bc6g4zr9.js
import { GK } from "../context/not-admin-owned.ersa.js";
import { k } from "../settings/global-config-and-gates.27xj.js";
import { nN } from "../remote/local-agent.we9a.js";
import { wp } from "../shell/async-hooks.4y48.js";
import { Nde, nye, vVs } from "../shared/chunk-rgx6q5w4.js";
function lan() {
  return nN() && !wp().backgroundDeadlineDisabled;
}
function PIo() {
  return lan() && k("tengu_cosmic_shore", true);
}
var o = 6e5;
function dan() {
  return GK() ? Math.max(o, Nde()) : vVs();
}
function QHr(e) {
  return PIo() ? can(e) : void 0;
}
function can(e) {
  return Math.min(e ?? dan(), nye());
}
function tKn() {
  return lan() ? `Set to true to run this command in the background. With it, \`timeout\` limits how long the command may run in the background before it is stopped (default ${dan()} ms, max ${nye()} ms).` : "Set to true to run this command in the background.";
}
function nKn() {
  return lan() ? ` With \`run_in_background\` the timeout is instead how long the command may run in the background (default ${dan()}ms / ${Math.round(dan() / 6e4)} minutes, max ${nye()}ms / ${Math.round(nye() / 36e5)} hours); at that limit it is stopped${wp().backgroundShellsKeptElsewhere ? "" : " and you are notified"}.` : "";
}
var oUs = ["user", "classifier", "auto_mode", "hook"];
function IIo(e) {
  let n = e.behavior === "allow" ? e.decisionReason : void 0;
  switch (n?.type) {
    case "permissionPromptTool":
      return "user";
    case "classifier":
      return n.classifier === "auto-mode" && n.classifierAllowed === true ? "classifier" : void 0;
    case "mode":
      return n.mode === "auto" && n.denialLimitRun !== true && n.scriptCheckDeferred !== true ? "auto_mode" : void 0;
    case "hook":
      return "hook";
    default:
      return;
  }
}
export {
  IIo,
  PIo,
  QHr,
  can,
  dan,
  lan,
  nKn,
  oUs,
  tKn
};
