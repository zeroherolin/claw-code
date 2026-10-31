// linux/remote/local-agent.js — Claude Code 2.1.310（linux）模块 chunk-4nzy53ma.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { U, ye, E_, Il, zSe } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { res, i } from "../shared/environment.js";
import { Llr } from "./remote-cowork-trigger.js";
var G$e = "CLAUDE_CODE_HOST_SKILL_CATALOG";
var a9r = { cli: true, mcp: true, "sdk-cli": true, "sdk-ts": true, "sdk-py": true, bench: true, "claude-vscode": true, "claude-code-github-action": true, "local-agent": true, local_agent: true, "claude-desktop": true, remote: true, remote_baku: true, remote_cowork: true, remote_trigger: true, remote_cowork_trigger: true, remote_desktop: true, remote_mobile: true, remote_projects: true, claude_in_slack: true, "claude-in-slack": true, "claude-in-teams": true, "claude-desktop-3p": true, "claude-security": true, "ssh-remote": true, "claude-coworker": true, "claude-coworker-terminal": true }, Clr = /* @__PURE__ */ new Set(["remote", "remote_baku", "remote_cowork", "remote_trigger", "remote_cowork_trigger", "remote_desktop", "remote_mobile", "remote_projects", "claude_in_slack", "claude-in-slack", "claude-in-teams"]), Efi = ["remote", "remote_desktop", "remote_mobile"];
function kfi(e) {
  return /^(?!sdk)[a-z][a-z0-9_-]{0,31}$/.test(e);
}
function Tfi() {
  let e = i.CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID;
  return e ? { accountUuid: e, organizationUuid: i.CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID || void 0 } : void 0;
}
var KZo = new Set(Object.keys(a9r));
function _(e) {
  return KZo.has(e);
}
function Uu() {
  return Dkn(i.CLAUDE_CODE_ENTRYPOINT);
}
function Dkn(e) {
  return e && _(e) ? e : void 0;
}
function Afi() {
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
function Rlr() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return e === "claude-desktop" || e === "local-agent" ? i.CLAUDE_CODE_DESKTOP_APP_VERSION : void 0;
}
var S = /* @__PURE__ */ new Set(["claude-desktop-3p", "local-agent"]);
function nYe() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && S.has(e);
}
function Hkn(e) {
  return r.has(e === "local_agent" ? "local-agent" : e);
}
function Cfi(e) {
  return e !== void 0 && (r.has(e) || e === "claude-vscode" || e.startsWith("sdk-"));
}
var X4t = /* @__PURE__ */ new Set(["claude-desktop", "claude-desktop-3p"]);
function Axe() {
  let e = iy();
  return e !== void 0 && X4t.has(e) && !n().childSession;
}
function dW() {
  return Axe() && !MM();
}
function Rfi() {
  return false;
}
function l9r() {
  let e = iy();
  return e !== void 0 && r.has(e);
}
function lX() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return e === "remote_trigger" || e === "remote_cowork_trigger";
}
function OM() {
  {
    let e = i.CLAUDE_CODE_ENTRYPOINT;
    return i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && i.CLAUDE_CODE_USE_GATEWAY && (e !== void 0 && X4t.has(e) || c());
  }
  return false;
}
function d9r() {
  return OM() && c();
}
function c() {
  return i.CLAUDE_CODE_HOST_GATEWAY_LINEAGE && !!i.CLAUDE_CODE_HOST_CREDS_FILE;
}
var xlr = "claude-desktop-3p";
function Uy() {
  return i.CLAUDE_CODE_ENTRYPOINT === "remote_cowork";
}
function cW() {
  return Il() && zSe() === "remote_cowork";
}
var s = new Set(Llr);
function Z$() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && s.has(e);
}
function dX() {
  let e = iy();
  return e !== void 0 && s.has(e);
}
function cX() {
  let e = Il() ? zSe() : void 0;
  return e !== void 0 && s.has(e);
}
function Rv() {
  return dX() || cX();
}
function Plr() {
  return VZo() || cX();
}
function __() {
  return i.CLAUDE_CODE_SESSION_ORIGIN === "claude_ai_chat";
}
function b_() {
  return __() && Rv();
}
function Ilr() {
  return __() && (cX() || J4t());
}
function Eq() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && E.has(e);
}
var E = /* @__PURE__ */ new Set(["claude_in_slack", "claude-in-slack"]);
function xfi() {
  let e = iy();
  return e !== void 0 && E.has(e);
}
function Kst() {
  return i.CLAUDE_CODE_ENTRYPOINT === "claude-in-teams";
}
function Olr() {
  return Eq() || Kst();
}
function qfe() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && Clr.has(e);
}
function SSe() {
  return c9r(i.CLAUDE_CODE_ENTRYPOINT);
}
function c9r(e) {
  return e?.startsWith("remote") === true;
}
var C = /* @__PURE__ */ new Set(["remote", "remote_desktop", "remote_mobile", "remote_projects", "remote_trigger"]);
function Pfi() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return Boolean(i.CLAUDE_CODE_REMOTE) && e !== void 0 && C.has(e);
}
var f = /* @__PURE__ */ new Set(["claude_in_slack", "claude-in-slack", "claude-in-teams", "remote_trigger", "remote_cowork_trigger", "remote_cowork", "remote_baku"]);
function Mlr() {
  if (Ne(i.CLAUDE_CODE_HIDE_SETTINGS_HINT)) return false;
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return e === void 0 || !f.has(e);
}
function g2() {
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
function iy() {
  return n().entrypoint;
}
var p = /* @__PURE__ */ new Set(["claude-vscode", "claude-desktop", "claude-desktop-3p", "local-agent", "local_agent", "remote", "remote_desktop", "remote_mobile", "remote_projects", "remote_cowork", "ssh-remote", "claude-in-slack", "claude_in_slack", "claude-in-teams", "claude-coworker", "claude-coworker-terminal"]), Ifi = new Set([...p].filter(c9r));
function eF() {
  let e = i.CLAUDE_CODE_SESSION_KIND;
  if (e === "bg" || e === "daemon" || e === "daemon-worker" || E_() !== void 0) return false;
  let t = n();
  if (t.interactive) return true;
  return !t.childSession && t.entrypoint !== void 0 && p.has(t.entrypoint);
}
function Ofi() {
  return n().spawnedByAttendedSession === true;
}
function tF() {
  return n().childSession;
}
function mf() {
  return l9r() && !n().childSession;
}
function VZo() {
  let e = n();
  return Lkn() || e.entrypoint !== void 0 && s.has(e.entrypoint) && !e.childSession;
}
function J4t() {
  let e = n();
  return dX() && e.hasRemoteSessionOrContainerId && !e.childSession && i.CLAUDE_CODE_ENVIRONMENT_KIND === void 0;
}
function Lkn() {
  let e = n();
  return (e.entrypoint === "local-agent" || e.entrypoint === "local_agent") && !e.childSession;
}
var D = /* @__PURE__ */ new Set(["remote", "remote_projects", "remote_desktop", "remote_mobile", "ssh-remote"]);
function Mfi() {
  let e = n();
  return e.entrypoint !== void 0 && D.has(e.entrypoint) && !e.childSession && !e.claudecode;
}
function qZo() {
  let e = n();
  return e.remoteRelayMark !== false || e.entrypoint === "ssh-remote" || i.CLAUDE_CODE_ENTRYPOINT === "ssh-remote" || res();
}
function Dfi() {
  let { entrypoint: e, interactive: t } = n();
  return e !== void 0 && !t && (Clr.has(e) || e.startsWith("remote"));
}
function Dlr() {
  return Qm() || dW();
}
function Qm() {
  let e = n();
  return e.entrypoint === "claude-vscode" && !e.childSession && !e.claudecode;
}
function Q0(e = ye()) {
  let t = mf() && !n().claudecode;
  return e && !t && !Qm();
}
function MM() {
  return n().claudecode;
}
function YZo() {
  return n().coworkFrameArtifacts;
}
function Yfe() {
  return n().hostScheduledRun;
}
function Hfi() {
  return n().desktopSkillSwitches;
}
function Lfi() {
  return n().desktopConnectorNames;
}
function Nfi() {
  return n().hostUnattendedGrant;
}
function XZo() {
  return n().chromeTabGroupKey;
}
function Nkn() {
  return n().hostSkillCatalog;
}
function JZo() {
  return n().desktopSkillsPluginDir;
}
function $fi(e) {
  T(e);
  let t = n();
  t.setInteractive(!e), t.setSpawnedByAttendedSession(i.CLAUDE_CODE_SESSION_ATTENDED), t.setEntrypoint(i.CLAUDE_CODE_ENTRYPOINT), t.setRemoteRelayMark(res()), t.setChildSession(Boolean(i.CLAUDE_CODE_CHILD_SESSION)), t.setHasRemoteSessionOrContainerId(Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID || i.CLAUDE_CODE_CONTAINER_ID)), t.setClaudecode(Boolean(i.CLAUDECODE)), t.setCoworkFrameArtifacts(i.CLAUDE_CODE_COWORK_FRAME_ARTIFACTS), t.setHostScheduledRun(i.CLAUDE_CODE_HOST_SCHEDULED_RUN), t.setDesktopSkillSwitches(i.CLAUDE_CODE_DESKTOP_SKILL_SWITCHES), t.setHostUnattendedGrant(i.CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED), i.unset("CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED"), t.setChromeTabGroupKey(i.CLAUDE_CODE_REMOTE_SESSION_ID ? i.CLAUDE_CHROME_TAB_GROUP_KEY : void 0);
  let o = J4t() && Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID);
  if (t.setHostSkillCatalog(o ? i.CLAUDE_CODE_HOST_SKILL_CATALOG : void 0), i.unset("CLAUDE_CHROME_TAB_GROUP_KEY"), o) i.unset(G$e);
  let a = mf();
  if (t.setDesktopSkillsPluginDir(a ? i.CLAUDE_CODE_DESKTOP_SKILLS_PLUGIN_DIR : void 0), a) i.unset("CLAUDE_CODE_DESKTOP_SKILLS_PLUGIN_DIR");
  let d = l9r();
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
function QZo(e) {
  let t = e.indexOf("--");
  return t === -1 ? e : e.slice(0, t);
}
function Hlr(e) {
  let t = QZo(e);
  if (t.includes("-r") || t.includes("--resume") || t.includes("--from-pr") || t.some((o) => o.startsWith("--resume=") || o.startsWith("--from-pr="))) return "resume";
  if (t.includes("-c") || t.includes("--continue")) return "continue";
  return "fresh";
}
export {
  $fi,
  Afi,
  Axe,
  Cfi,
  Clr,
  Dfi,
  Dkn,
  Dlr,
  Efi,
  Eq,
  G$e,
  Hfi,
  Hkn,
  Hlr,
  Ifi,
  Ilr,
  J4t,
  JZo,
  KZo,
  Kst,
  Lfi,
  Lkn,
  MM,
  Mfi,
  Mlr,
  Nc,
  Nfi,
  Nkn,
  OM,
  Ofi,
  Olr,
  Pfi,
  Plr,
  Q0,
  QZo,
  Qm,
  Rfi,
  Rlr,
  Rv,
  SSe,
  Tfi,
  Uu,
  Uy,
  VZo,
  X4t,
  XZo,
  YZo,
  Yfe,
  Z$,
  __,
  a9r,
  b_,
  c9r,
  cW,
  cX,
  d9r,
  dW,
  dX,
  eF,
  g2,
  iy,
  kfi,
  l9r,
  lX,
  mf,
  nYe,
  qZo,
  qfe,
  tF,
  xfi,
  xlr
};
