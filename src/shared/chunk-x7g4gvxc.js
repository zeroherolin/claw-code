// shared/chunk-x7g4gvxc.js — Claude Code 2.1.310 模块 chunk-x7g4gvxc.js
import { xns } from "../context/not-admin-owned.ersa.js";
import { Da } from "../context/chunk-ce3zw0qt.js";
function voo(e) {
  if (e) Da.terminalFocusGainedAt = Date.now();
  if (!e && Da.terminalFocus === "blurred") return;
  Da.terminalFocus = e ? "focused" : "blurred", xns(e), Da.terminalFocusChanged.emit();
}
function MUe() {
  return Da.terminalFocus !== "blurred";
}
function tte() {
  return Da.terminalFocus;
}
function Cms() {
  return Da.terminalFocusGainedAt;
}
function JPe(e) {
  return Da.terminalFocusChanged.subscribe(e);
}
export {
  Cms,
  JPe,
  MUe,
  tte,
  voo
};
