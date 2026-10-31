// linux/shared/project-scan.js — Claude Code 2.1.310（linux）模块 chunk-saycjcc7.js
import { b, c } from "../agents/third-party.js";
import { Qe, N } from "../telemetry/anthropic-workspace-id.js";
import { W } from "./chunk-37dd5dd4.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Ki } from "../settings/global-config-and-gates.js";
import { h$n } from "../vendor/google-auth/xcode-project.js";
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
    h$n({ fresh: t }).then((r) => {
      if (e !== this.#t || r === null) return;
      if (r.has_ios_app_project === null && this.#e.get("ios_app") !== e) f("dev_intent_detect", "project_unreadable", { kind: b("ios_app"), trigger: b("project_scan") });
      for (let { kind: o, found: s } of n) if (s(r) === true && this.#e.get(o) !== e) this.#e.set(o, e), this.#n(o);
    });
  }
  #n(t) {
    try {
      Ki({ type: "system", subtype: "dev_intent", kind: t, trigger: "project_scan" }), g("dev_intent_detect", { kind: c(t), trigger: b("project_scan") });
    } catch (e) {
      l(Qe(N(e), "project dev intent send failed")), m("dev_intent_detect", "project_send_threw", { kind: c(t), trigger: b("project_scan") });
    }
  }
}
var vut = new W(() => new i());
export {
  vut
};
