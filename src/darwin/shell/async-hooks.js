// darwin/shell/async-hooks.js — Claude Code 2.1.310（darwin）模块 chunk-4y48t4gh.js
import { U } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { AsyncLocalStorage as s } from "async_hooks";
class Pzr {
  #e = false;
  #s = false;
  #r = false;
  #a = false;
  #i = false;
  #d = false;
  #u = false;
  #l = false;
  #n;
  #g = false;
  #c = false;
  #b = false;
  #o;
  #t;
  get backgroundTasksDisabled() {
    return this.#e;
  }
  get backgroundAgentLaunchDisabled() {
    return this.#s;
  }
  get remoteAgentIsolationDisabled() {
    return this.#r;
  }
  get unsandboxedCommandsDisabled() {
    return this.#a;
  }
  get backgroundDeadlineDisabled() {
    return this.#i;
  }
  get backgroundCompletionNoticeDisabled() {
    return this.#d;
  }
  get messagingBeyondOwnAgentsDisabled() {
    return this.#u;
  }
  get forkSubagentDisabled() {
    return this.#l;
  }
  get backgroundLaunchRule() {
    return this.#n;
  }
  get backgroundLaunchByDefault() {
    return this.#g;
  }
  get foregroundAgentMovesAdmitted() {
    return this.#b;
  }
  get subagentSends() {
    return this.#t;
  }
  get stoppedByPerson() {
    return this.#o;
  }
  get backgroundShellsKeptElsewhere() {
    return this.#c;
  }
  disableBackgroundTasks() {
    this.#e = true;
  }
  setBackgroundShellsKeptElsewhere(e) {
    this.#c = e;
  }
  disableBackgroundAgentLaunch() {
    this.#s = true;
  }
  disableRemoteAgentIsolation() {
    this.#r = true;
  }
  installBackgroundLaunchRule(e) {
    if (!this.#e) throw Error("A background launch rule needs background tasks disabled first");
    if (typeof e.parameterDescription !== "string") throw Error("A background launch rule needs parameterDescription to be a string");
    if (this.#n !== void 0) throw Error("A background launch rule is already installed");
    let n = e.admitsMoves === true;
    if (n && typeof e.admitMove !== "function") throw Error("A background launch rule that admits moves needs admitMove to be a function");
    let t = e.launchesByDefault === true;
    this.#n = e, this.#g = t, this.#b = n;
  }
  disableBackgroundDeadline() {
    this.#i = true;
  }
  disableBackgroundCompletionNotice() {
    this.#d = true;
  }
  disableUnsandboxedCommands() {
    this.#a = true;
  }
  disableMessagingBeyondOwnAgents() {
    this.#u = true;
  }
  disableForkSubagent() {
    this.#l = true;
  }
  installStoppedByPerson(e) {
    if (this.#o !== void 0) throw Error("A stoppedByPerson question is already installed");
    this.#o = e;
  }
  installSubagentSends(e) {
    if (this.#t !== void 0) throw Error("SubagentSends is already installed");
    this.#t = e;
  }
}
var r = new W(() => new Pzr());
function wp() {
  return o.getStore() ?? r.of(U().host);
}
var o = new s();
function HZs(e, n) {
  return o.run(e, n);
}
export {
  HZs,
  Pzr,
  wp
};
