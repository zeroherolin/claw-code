// linux/shared/chunk-d55dd270.js — Claude Code 2.1.310（linux）模块 chunk-cbf3f420.js
import { qts } from "../context/not-admin-owned.js";
import { Da } from "../context/chunk-5971c749.js";
function coo(e) {
  if (e) Da.terminalFocusGainedAt = Date.now();
  if (!e && Da.terminalFocus === "blurred") return;
  Da.terminalFocus = e ? "focused" : "blurred", qts(e), Da.terminalFocusChanged.emit();
}
function TUe() {
  return Da.terminalFocus !== "blurred";
}
function Vee() {
  return Da.terminalFocus;
}
function lms() {
  return Da.terminalFocusGainedAt;
}
function zPe(e) {
  return Da.terminalFocusChanged.subscribe(e);
}
export {
  TUe,
  Vee,
  coo,
  lms,
  zPe
};
