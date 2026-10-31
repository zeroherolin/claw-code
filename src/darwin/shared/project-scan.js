// darwin/shared/project-scan.js — Claude Code 2.1.310（darwin）模块 chunk-wq9f6pb7.js
import { S, c } from "../agents/third-party.js";
import { Qe, N } from "../telemetry/anthropic-workspace-id.js";
import { W } from "./chunk-37dd5dd4.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Vi } from "../settings/global-config-and-gates.js";
import { xFn } from "../vendor/google-auth/xcode-project.js";
var n = [{ kind: "ios_app", found: (t) => t.has_ios_app_project }, { kind: "android_app", found: (t) => t.has_android_app_project }];
class i {
  #t = 0;
  #o = 0;
  #e = /* @__PURE__ */ new Map();
  get started() {
    return this.#t > 0;
  }
  start() {
    this.#t++, this.#r(false);
  }
  conversationReset() {
    if (this.started) this.#t++, this.#r(false);
  }
  directoryChanged() {
    if (!this.started) {
      this.start();
      return;
    }
    this.#r(false);
  }
  turnStarting() {
    let t = this.#t;
    if (!this.started || this.#o === t) return;
    if (this.#o = t, n.some(({ kind: e }) => this.#e.get(e) !== t)) this.#r(true);
  }
  #r(t) {
    let e = this.#t;
    xFn({ fresh: t }).then((r) => {
      if (e !== this.#t || r === null) return;
      if (r.has_ios_app_project === null && this.#e.get("ios_app") !== e) p("dev_intent_detect", "project_unreadable", { kind: S("ios_app"), trigger: S("project_scan") });
      for (let { kind: o, found: s } of n) if (s(r) === true && this.#e.get(o) !== e) this.#e.set(o, e), this.#n(o);
    });
  }
  #n(t) {
    try {
      Vi({ type: "system", subtype: "dev_intent", kind: t, trigger: "project_scan" }), g("dev_intent_detect", { kind: c(t), trigger: S("project_scan") });
    } catch (e) {
      l(Qe(N(e), "project dev intent send failed")), m("dev_intent_detect", "project_send_threw", { kind: c(t), trigger: S("project_scan") });
    }
  }
}
var Cut = new W(() => new i());
export {
  Cut
};
