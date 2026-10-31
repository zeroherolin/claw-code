// linux/agents/in-process.ccfa.js — Claude Code 2.1.310（linux）模块 chunk-r9tbg51t.js
import { U } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { js } from "../settings/chunk-9121eb73.js";
var $7n = "in-process";
class _Qs {
  captured = null;
  cliOverride = null;
  setCliOverride(e) {
    this.cliOverride = e;
  }
  capture(e) {
    this.captured = e;
  }
  replaceWith(e) {
    this.captured = e, this.cliOverride = null;
  }
}
var wbi = new W(() => new _Qs());
function o() {
  return wbi.of(U().host);
}
function PRi(e) {
  o().setCliOverride(e);
}
function Rzo() {
  return o().cliOverride;
}
function xzo(e) {
  o().replaceWith(e), t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`);
}
function Pzo() {
  return o().captured !== null;
}
function ezr() {
  let e = o();
  if (e.cliOverride) e.capture(e.cliOverride), t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);
  else e.capture(js("teammateMode", $7n).value), t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`);
}
function DGt() {
  let e = o();
  if (e.captured === null) l(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")), ezr();
  return e.captured ?? $7n;
}
export {
  $7n,
  DGt,
  PRi,
  Pzo,
  Rzo,
  _Qs,
  ezr,
  wbi,
  xzo
};
