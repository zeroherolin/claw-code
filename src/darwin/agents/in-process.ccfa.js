// darwin/agents/in-process.ccfa.js — Claude Code 2.1.310（darwin）模块 chunk-65nf7zpp.js
import { U } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { js } from "../settings/chunk-9121eb73.js";
var nZn = "in-process";
class nQs {
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
var obi = new W(() => new nQs());
function o() {
  return obi.of(U().host);
}
function mxi(e) {
  o().setCliOverride(e);
}
function rzo() {
  return o().cliOverride;
}
function ozo(e) {
  o().replaceWith(e), t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`);
}
function szo() {
  return o().captured !== null;
}
function wGr() {
  let e = o();
  if (e.cliOverride) e.capture(e.cliOverride), t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);
  else e.capture(js("teammateMode", nZn).value), t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`);
}
function V2t() {
  let e = o();
  if (e.captured === null) l(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")), wGr();
  return e.captured ?? nZn;
}
export {
  V2t,
  mxi,
  nQs,
  nZn,
  obi,
  ozo,
  rzo,
  szo,
  wGr
};
