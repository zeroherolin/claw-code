// linux/permissions/auto-mode.js — Claude Code 2.1.310（linux）模块 chunk-9e3vh36m.js
import { Dq } from "../context/not-admin-owned.js";
import { k } from "../settings/global-config-and-gates.js";
import { Q0 } from "../remote/local-agent.js";
import { vf } from "../shell/async-hooks.js";
import { Rde, Jhe, $Ks } from "../shared/chunk-767f1b52.js";
function Vin() {
  return Q0() && !vf().backgroundDeadlineDisabled;
}
function tIo() {
  return Vin() && k("tengu_cosmic_shore", true);
}
var o = 6e5;
function qin() {
  return Dq() ? Math.max(o, Rde()) : $Ks();
}
function OHr(e) {
  return tIo() ? Yin(e) : void 0;
}
function Yin(e) {
  return Math.min(e ?? qin(), Jhe());
}
function DVn() {
  return Vin() ? `Set to true to run this command in the background. With it, \`timeout\` limits how long the command may run in the background before it is stopped (default ${qin()} ms, max ${Jhe()} ms).` : "Set to true to run this command in the background.";
}
function HVn() {
  return Vin() ? ` With \`run_in_background\` the timeout is instead how long the command may run in the background (default ${qin()}ms / ${Math.round(qin() / 6e4)} minutes, max ${Jhe()}ms / ${Math.round(Jhe() / 36e5)} hours); at that limit it is stopped${vf().backgroundShellsKeptElsewhere ? "" : " and you are notified"}.` : "";
}
var bFs = ["user", "classifier", "auto_mode", "hook"];
function nIo(e) {
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
  DVn,
  HVn,
  OHr,
  Vin,
  Yin,
  bFs,
  nIo,
  qin,
  tIo
};
