// darwin/agents/in-process-teammate.32be.js — Claude Code 2.1.310（darwin）模块 chunk-5te1p2af.js
import { U, zc } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { i } from "../shared/environment.js";
import { yfi } from "../remote/local-agent.js";
import { t$ } from "../shell/chunk-fea9c492.js";
import { Mo } from "../git/ssh-placeholder.js";
import { AsyncLocalStorage as p } from "async_hooks";
var u = new p();
function Wx() {
  return u.getStore();
}
function Dii(e, t) {
  return u.run(e, t);
}
function WY() {
  return u.getStore() !== void 0;
}
function Lii(e) {
  return { ...e, isInProcess: true };
}
import { spawnSync as x } from "child_process";
function Gx() {
  let e = Wx();
  if (e) return e.parentSessionId;
  let t = n();
  return t.dynamicTeamContext?.parentSessionId ?? t.cliParentSessionId;
}
class g {
  cliParentSessionId = void 0;
  dynamicTeamContext = null;
  ambientMarkerProbe = f(C);
  isChildSessionMarkerAmbientInTmux = () => this.ambientMarkerProbe() === "ambient";
  setCliParentSessionId(e) {
    this.cliParentSessionId = e;
  }
  setDynamicTeamContext(e) {
    this.dynamicTeamContext = e;
  }
  setAmbientMarkerProbe(e) {
    this.ambientMarkerProbe = f(e);
  }
}
var Qwi = new W(() => new g());
function n() {
  return Qwi.of(U().host);
}
function mIi(e) {
  n().setCliParentSessionId(e);
}
function gIi(e) {
  n().setDynamicTeamContext(e);
}
function hIi() {
  n().setDynamicTeamContext(null);
}
function yM() {
  return n().dynamicTeamContext;
}
function _I() {
  let e = Wx();
  if (e) return e.agentId;
  return n().dynamicTeamContext?.agentId;
}
function ov() {
  let e = Wx();
  if (e) return e.agentName;
  return n().dynamicTeamContext?.agentName;
}
function oc(e) {
  let t = Wx();
  if (t) return t.teamName;
  let { dynamicTeamContext: r } = n();
  if (r?.teamName) return r.teamName;
  return e?.teamName;
}
function pc() {
  if (Wx()) return true;
  let { dynamicTeamContext: t } = n();
  return !!(t?.agentId && t?.teamName);
}
function WF(e) {
  return e !== void 0 || pc() || i.CLAUDE_CODE_CHILD_SESSION;
}
function Ert() {
  if (i.CLAUDE_CODE_FORCE_SESSION_PERSISTENCE) return false;
  if (!(i.CLAUDE_CODE_CHILD_SESSION && zc() && !pc())) return false;
  return !n().isChildSessionMarkerAmbientInTmux();
}
function l9o() {
  if (!i.CLAUDE_CODE_CHILD_SESSION) return false;
  if (process.stdin.isTTY || process.stdout.isTTY) return false;
  if (!yfi()) return false;
  return n().ambientMarkerProbe() === "absent";
}
function _Ne() {
  if (i.CLAUDE_CODE_CHILD_SESSION) return true;
  if (!i.CLAUDECODE) return false;
  return i.CLAUDE_CODE_SKIP_PROMPT_HISTORY || !process.stdin.isTTY && !process.stdout.isTTY;
}
function yIi(e) {
  n().setAmbientMarkerProbe(e === null ? C : () => {
    let t = e();
    return t === true ? "ambient" : t === false ? "absent" : t;
  });
}
function f(e) {
  let t = null;
  return () => {
    if (t === null) try {
      t = e();
    } catch {
      t = "unknown";
    }
    return t;
  };
}
function C() {
  if (!i.TMUX) return "absent";
  let e = t$("tmux");
  if (e === null) return "unknown";
  let t;
  try {
    t = x(e, ["show-environment", "-g"], { encoding: "utf8", timeout: 250, stdio: ["ignore", "pipe", "ignore"], cwd: void 0, env: Mo(), windowsHide: true });
  } catch {
    return "unknown";
  }
  if (t.status !== 0) return "unknown";
  return Zwi(t.stdout) ? "ambient" : "absent";
}
function Zwi(e) {
  return e.split(`
`).some((t) => t.startsWith("CLAUDE_CODE_CHILD_SESSION="));
}
function zx() {
  let e = Wx();
  if (e) return e.color;
  return n().dynamicTeamContext?.color;
}
function d9o() {
  let e = Wx();
  if (e) return e.planModeRequired;
  let { dynamicTeamContext: t } = n();
  if (t !== null) return t.planModeRequired;
  return i.CLAUDE_CODE_PLAN_MODE_REQUIRED;
}
function wKe(e) {
  if (!e) return false;
  let { leadAgentId: t, teammates: r } = e;
  return Object.keys(r).some((s) => s !== t);
}
function s1(e) {
  if (!e?.leadAgentId) return false;
  let t = _I(), r = e.leadAgentId;
  if (t === r) return true;
  if (!t) return true;
  return false;
}
function Skt(e) {
  for (let t of Object.values(e.tasks)) if (t.type === "in_process_teammate" && t.status === "running") return true;
  return false;
}
function Obn(e) {
  for (let t of Object.values(e.tasks)) if (t.type === "in_process_teammate" && t.status === "running" && !t.isIdle) return true;
  return false;
}
function c9o(e, t) {
  let r = [];
  for (let [s, o] of Object.entries(t.tasks)) if (o.type === "in_process_teammate" && o.status === "running" && !o.isIdle) r.push(s);
  if (r.length === 0) return Promise.resolve();
  return new Promise((s) => {
    let o = r.length, d = () => {
      if (o--, o === 0) s();
    };
    e((l) => {
      let m = { ...l.tasks };
      for (let c of r) {
        let a = m[c];
        if (a && a.type === "in_process_teammate") if (a.isIdle) d();
        else m[c] = { ...a, onIdleCallbacks: [...a.onIdleCallbacks ?? [], d] };
      }
      return { ...l, tasks: m };
    });
  });
}
export {
  Dii,
  Ert,
  Gx,
  Lii,
  Obn,
  Qwi,
  Skt,
  WF,
  WY,
  Wx,
  Zwi,
  _I,
  _Ne,
  c9o,
  d9o,
  gIi,
  hIi,
  l9o,
  mIi,
  oc,
  ov,
  pc,
  s1,
  wKe,
  yIi,
  yM,
  zx
};
