// remote/local-agent.we9a.js — Claude Code 2.1.310 模块 chunk-we9anmwe.js
import { Ne } from "../fs/async-hooks.9s1z.js";
import { U, ye, k_, Il, Qbe } from "../context/not-admin-owned.ersa.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { Fes, i } from "../shared/environment.9a41.js";
import { Qlr } from "./remote-cowork-trigger.ydtw.js";
var ZFe = "CLAUDE_CODE_HOST_SKILL_CATALOG";
var OYr = { cli: true, mcp: true, "sdk-cli": true, "sdk-ts": true, "sdk-py": true, bench: true, "claude-vscode": true, "claude-code-github-action": true, "local-agent": true, local_agent: true, "claude-desktop": true, remote: true, remote_baku: true, remote_cowork: true, remote_trigger: true, remote_cowork_trigger: true, remote_desktop: true, remote_mobile: true, remote_projects: true, claude_in_slack: true, "claude-in-slack": true, "claude-in-teams": true, "claude-desktop-3p": true, "claude-security": true, "ssh-remote": true, "claude-coworker": true, "claude-coworker-terminal": true }, Wlr = /* @__PURE__ */ new Set(["remote", "remote_baku", "remote_cowork", "remote_trigger", "remote_cowork_trigger", "remote_desktop", "remote_mobile", "remote_projects", "claude_in_slack", "claude-in-slack", "claude-in-teams"]), lfi = ["remote", "remote_desktop", "remote_mobile"];
function dfi(e) {
  return /^(?!sdk)[a-z][a-z0-9_-]{0,31}$/.test(e);
}
function cfi() {
  let e = i.CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID;
  return e ? { accountUuid: e, organizationUuid: i.CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID || void 0 } : void 0;
}
var Aes = new Set(Object.keys(OYr));
function _(e) {
  return Aes.has(e);
}
function Uu() {
  return Jkn(i.CLAUDE_CODE_ENTRYPOINT);
}
function Jkn(e) {
  return e && _(e) ? e : void 0;
}
function ufi() {
  switch (Uu()) {
    case "claude-desktop":
    case "claude-desktop-3p":
    case "remote_desktop":
      return "Claude Desktop";
    case "remote_mobile":
      return "Mobile";
    case "local-agent":
    case "remote_cowork":
      return "Cowork";
    case "claude_in_slack":
    case "claude-in-slack":
      return "Claude Tag in Slack";
    case "claude-in-teams":
      return "Claude Tag in Teams";
    case "claude-code-github-action":
      return "GitHub Actions";
    default:
      return;
  }
}
var r = /* @__PURE__ */ new Set(["claude-desktop", "claude-desktop-3p", "local-agent"]);
function Nc() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && r.has(e);
}
function Glr() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return e === "claude-desktop" || e === "local-agent" ? i.CLAUDE_CODE_DESKTOP_APP_VERSION : void 0;
}
var S = /* @__PURE__ */ new Set(["claude-desktop-3p", "local-agent"]);
function c3e() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && S.has(e);
}
function Qkn(e) {
  return r.has(e === "local_agent" ? "local-agent" : e);
}
function pfi(e) {
  return e !== void 0 && (r.has(e) || e === "claude-vscode" || e.startsWith("sdk-"));
}
var c3t = /* @__PURE__ */ new Set(["claude-desktop", "claude-desktop-3p"]);
function Ixe() {
  let e = ay();
  return e !== void 0 && c3t.has(e) && !n().childSession;
}
function yW() {
  return Ixe() && !FM();
}
function ffi() {
  return false;
}
function MYr() {
  let e = ay();
  return e !== void 0 && r.has(e);
}
function hX() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return e === "remote_trigger" || e === "remote_cowork_trigger";
}
function NM() {
  {
    let e = i.CLAUDE_CODE_ENTRYPOINT;
    return i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && i.CLAUDE_CODE_USE_GATEWAY && (e !== void 0 && c3t.has(e) || c());
  }
  return false;
}
function HYr() {
  return NM() && c();
}
function c() {
  return i.CLAUDE_CODE_HOST_GATEWAY_LINEAGE && !!i.CLAUDE_CODE_HOST_CREDS_FILE;
}
var zlr = "claude-desktop-3p";
function jy() {
  return i.CLAUDE_CODE_ENTRYPOINT === "remote_cowork";
}
function _W() {
  return Il() && Qbe() === "remote_cowork";
}
var s = new Set(Qlr);
function r$() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && s.has(e);
}
function yX() {
  let e = ay();
  return e !== void 0 && s.has(e);
}
function _X() {
  let e = Il() ? Qbe() : void 0;
  return e !== void 0 && s.has(e);
}
function xE() {
  return yX() || _X();
}
function Vlr() {
  return Res() || _X();
}
function S_() {
  return i.CLAUDE_CODE_SESSION_ORIGIN === "claude_ai_chat";
}
function b_() {
  return S_() && xE();
}
function Klr() {
  return S_() && (_X() || u3t());
}
function MK() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && E.has(e);
}
var E = /* @__PURE__ */ new Set(["claude_in_slack", "claude-in-slack"]);
function mfi() {
  let e = ay();
  return e !== void 0 && E.has(e);
}
function eit() {
  return i.CLAUDE_CODE_ENTRYPOINT === "claude-in-teams";
}
function qlr() {
  return MK() || eit();
}
function tfe() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && Wlr.has(e);
}
function Abe() {
  return DYr(i.CLAUDE_CODE_ENTRYPOINT);
}
function DYr(e) {
  return e?.startsWith("remote") === true;
}
var C = /* @__PURE__ */ new Set(["remote", "remote_desktop", "remote_mobile", "remote_projects", "remote_trigger"]);
function gfi() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return Boolean(i.CLAUDE_CODE_REMOTE) && e !== void 0 && C.has(e);
}
var f = /* @__PURE__ */ new Set(["claude_in_slack", "claude-in-slack", "claude-in-teams", "remote_trigger", "remote_cowork_trigger", "remote_cowork", "remote_baku"]);
function Ylr() {
  if (Ne(i.CLAUDE_CODE_HIDE_SETTINGS_HINT)) return false;
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return e === void 0 || !f.has(e);
}
function kz() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return e === "sdk-ts" || e === "sdk-py" || e === "sdk-cli";
}
class l {
  entrypoint = void 0;
  interactive = false;
  spawnedByAttendedSession = void 0;
  childSession = false;
  hasRemoteSessionOrContainerId = false;
  claudecode = false;
  coworkFrameArtifacts = false;
  hostScheduledRun = false;
  desktopSkillSwitches = false;
  desktopConnectorNames = false;
  hostUnattendedGrant = void 0;
  chromeTabGroupKey = void 0;
  hostAssignedGroup = void 0;
  hostTestVm = void 0;
  hostSkillCatalog = void 0;
  desktopSkillsPluginDir = void 0;
  remoteControlOwnerDeclared = false;
  remoteRelayMark = void 0;
  setEntrypoint(e) {
    this.entrypoint = e;
  }
  setInteractive(e) {
    this.interactive = e;
  }
  setSpawnedByAttendedSession(e) {
    this.spawnedByAttendedSession = e;
  }
  setChildSession(e) {
    this.childSession = e;
  }
  setHasRemoteSessionOrContainerId(e) {
    this.hasRemoteSessionOrContainerId = e;
  }
  setClaudecode(e) {
    this.claudecode = e;
  }
  setCoworkFrameArtifacts(e) {
    this.coworkFrameArtifacts = e;
  }
  setHostScheduledRun(e) {
    this.hostScheduledRun = e;
  }
  setDesktopSkillSwitches(e) {
    this.desktopSkillSwitches = e;
  }
  setDesktopConnectorNames(e) {
    this.desktopConnectorNames = e;
  }
  setHostUnattendedGrant(e) {
    this.hostUnattendedGrant = e;
  }
  setChromeTabGroupKey(e) {
    this.chromeTabGroupKey = e;
  }
  setHostSkillCatalog(e) {
    this.hostSkillCatalog = e;
  }
  setDesktopSkillsPluginDir(e) {
    this.desktopSkillsPluginDir = e;
  }
  setRemoteControlOwnerDeclared(e) {
    this.remoteControlOwnerDeclared = e;
  }
  setRemoteRelayMark(e) {
    this.remoteRelayMark = this.remoteRelayMark === true || e;
  }
  setHostTestVm(e) {
    this.hostTestVm = e;
  }
  setHostAssignedGroup(e) {
    this.hostAssignedGroup = e;
  }
}
var O = new W(() => new l());
function n() {
  return O.of(U().host);
}
function ay() {
  return n().entrypoint;
}
var p = /* @__PURE__ */ new Set(["claude-vscode", "claude-desktop", "claude-desktop-3p", "local-agent", "local_agent", "remote", "remote_desktop", "remote_mobile", "remote_projects", "remote_cowork", "ssh-remote", "claude-in-slack", "claude_in_slack", "claude-in-teams", "claude-coworker", "claude-coworker-terminal"]), hfi = new Set([...p].filter(DYr));
function o$() {
  let e = i.CLAUDE_CODE_SESSION_KIND;
  if (e === "bg" || e === "daemon" || e === "daemon-worker" || k_() !== void 0) return false;
  let t = n();
  if (t.interactive) return true;
  return !t.childSession && t.entrypoint !== void 0 && p.has(t.entrypoint);
}
function yfi() {
  return n().spawnedByAttendedSession === true;
}
function s$() {
  return n().childSession;
}
function fp() {
  return MYr() && !n().childSession;
}
function Res() {
  let e = n();
  return Zkn() || e.entrypoint !== void 0 && s.has(e.entrypoint) && !e.childSession;
}
function u3t() {
  let e = n();
  return yX() && e.hasRemoteSessionOrContainerId && !e.childSession && i.CLAUDE_CODE_ENVIRONMENT_KIND === void 0;
}
function Zkn() {
  let e = n();
  return (e.entrypoint === "local-agent" || e.entrypoint === "local_agent") && !e.childSession;
}
var D = /* @__PURE__ */ new Set(["remote", "remote_projects", "remote_desktop", "remote_mobile", "ssh-remote"]);
function _fi() {
  let e = n();
  return e.entrypoint !== void 0 && D.has(e.entrypoint) && !e.childSession && !e.claudecode;
}
function xes() {
  let e = n();
  return e.remoteRelayMark !== false || e.entrypoint === "ssh-remote" || i.CLAUDE_CODE_ENTRYPOINT === "ssh-remote" || Fes();
}
function Sfi() {
  let { entrypoint: e, interactive: t } = n();
  return e !== void 0 && !t && (Wlr.has(e) || e.startsWith("remote"));
}
function Xlr() {
  return Qm() || yW();
}
function Qm() {
  let e = n();
  return e.entrypoint === "claude-vscode" && !e.childSession && !e.claudecode;
}
function nN(e = ye()) {
  let t = fp() && !n().claudecode;
  return e && !t && !Qm();
}
function FM() {
  return n().claudecode;
}
function Pes() {
  return n().coworkFrameArtifacts;
}
function nfe() {
  return n().hostScheduledRun;
}
function bfi() {
  return n().desktopSkillSwitches;
}
function wfi() {
  return n().desktopConnectorNames;
}
function Efi() {
  return n().hostUnattendedGrant;
}
function Ies() {
  return n().chromeTabGroupKey;
}
function eCn() {
  return n().hostSkillCatalog;
}
function Oes() {
  return n().desktopSkillsPluginDir;
}
function vfi(e) {
  T(e);
  let t = n();
  t.setInteractive(!e), t.setSpawnedByAttendedSession(i.CLAUDE_CODE_SESSION_ATTENDED), t.setEntrypoint(i.CLAUDE_CODE_ENTRYPOINT), t.setRemoteRelayMark(Fes()), t.setChildSession(Boolean(i.CLAUDE_CODE_CHILD_SESSION)), t.setHasRemoteSessionOrContainerId(Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID || i.CLAUDE_CODE_CONTAINER_ID)), t.setClaudecode(Boolean(i.CLAUDECODE)), t.setCoworkFrameArtifacts(i.CLAUDE_CODE_COWORK_FRAME_ARTIFACTS), t.setHostScheduledRun(i.CLAUDE_CODE_HOST_SCHEDULED_RUN), t.setDesktopSkillSwitches(i.CLAUDE_CODE_DESKTOP_SKILL_SWITCHES), t.setHostUnattendedGrant(i.CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED), i.unset("CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED"), t.setChromeTabGroupKey(i.CLAUDE_CODE_REMOTE_SESSION_ID ? i.CLAUDE_CHROME_TAB_GROUP_KEY : void 0);
  let o = u3t() && Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID);
  if (t.setHostSkillCatalog(o ? i.CLAUDE_CODE_HOST_SKILL_CATALOG : void 0), i.unset("CLAUDE_CHROME_TAB_GROUP_KEY"), o) i.unset(ZFe);
  let a = fp();
  if (t.setDesktopSkillsPluginDir(a ? i.CLAUDE_CODE_DESKTOP_SKILLS_PLUGIN_DIR : void 0), a) i.unset("CLAUDE_CODE_DESKTOP_SKILLS_PLUGIN_DIR");
  let d = MYr();
  if (t.setDesktopConnectorNames(d && i.CLAUDE_CODE_DESKTOP_CONNECTOR_NAMES), d) i.unset("CLAUDE_CODE_DESKTOP_CONNECTOR_NAMES");
}
function T(e) {
  if (i.CLAUDE_CODE_ENTRYPOINT) {
    if (i.CLAUDE_CODE_ENTRYPOINT === "local_agent") i.set("CLAUDE_CODE_ENTRYPOINT", "local-agent");
    if (i.CLAUDE_CODE_ENTRYPOINT === "cli" && e) i.set("CLAUDE_CODE_ENTRYPOINT", "sdk-cli");
    return;
  }
  let t = process.argv.slice(2), o = t.indexOf("mcp");
  if (o !== -1 && t[o + 1] === "serve") {
    i.set("CLAUDE_CODE_ENTRYPOINT", "mcp");
    return;
  }
  if (Ne(i.CLAUDE_CODE_ACTION)) {
    i.set("CLAUDE_CODE_ENTRYPOINT", "claude-code-github-action");
    return;
  }
  i.set("CLAUDE_CODE_ENTRYPOINT", e ? "sdk-cli" : "cli");
}
function Mes(e) {
  let t = e.indexOf("--");
  return t === -1 ? e : e.slice(0, t);
}
function Jlr(e) {
  let t = Mes(e);
  if (t.includes("-r") || t.includes("--resume") || t.includes("--from-pr") || t.some((o) => o.startsWith("--resume=") || o.startsWith("--from-pr="))) return "resume";
  if (t.includes("-c") || t.includes("--continue")) return "continue";
  return "fresh";
}
export {
  Abe,
  Aes,
  DYr,
  Efi,
  FM,
  Glr,
  HYr,
  Ies,
  Ixe,
  Jkn,
  Jlr,
  Klr,
  MK,
  MYr,
  Mes,
  NM,
  Nc,
  OYr,
  Oes,
  Pes,
  Qkn,
  Qm,
  Res,
  S_,
  Sfi,
  Uu,
  Vlr,
  Wlr,
  Xlr,
  Ylr,
  ZFe,
  Zkn,
  _W,
  _X,
  _fi,
  ay,
  b_,
  bfi,
  c3e,
  c3t,
  cfi,
  dfi,
  eCn,
  eit,
  ffi,
  fp,
  gfi,
  hX,
  hfi,
  jy,
  kz,
  lfi,
  mfi,
  nN,
  nfe,
  o$,
  pfi,
  qlr,
  r$,
  s$,
  tfe,
  u3t,
  ufi,
  vfi,
  wfi,
  xE,
  xes,
  yW,
  yX,
  yfi,
  zlr
};
