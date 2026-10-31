// linux/shared/dev-intent-detect.js — Claude Code 2.1.310（linux）模块 chunk-7ynx1m85.js
import { c } from "../agents/third-party.js";
import { Qe, N } from "../telemetry/anthropic-workspace-id.js";
import { W } from "./chunk-37dd5dd4.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { Ki } from "../settings/global-config-and-gates.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { at, qt, dYr } from "../mcp/allowed-warning.js";
import { OTs, Ggo, MTs } from "../vendor/google-auth/xcode-project.js";
import { Lg } from "../context/tool-result-clearing-after-idle-server-report.js";
var I = /AndroidManifest\.xml|<manifest xmlns:android=/, v = /com\.android\.(application|library|tools\.build)/, y = /\bimport android\./, E = new RegExp(String.raw`(?:^|[;&|(]\s*)(?:(?:\w+=\S*|sudo|time|env)\s+)*(?:\S*[\\/])?(?:` + [String.raw`adb(?:\.exe)?\s`, String.raw`emulator(?:\.exe)?\s+(?:-|@)`, String.raw`(?:sdkmanager|avdmanager)\b`, String.raw`gradlew?(?:\.bat)?\s(?:\\\n|[^\n&|;])*\b(?:assemble|install|bundle)\w*(?:Debug|Release)\b`, String.raw`(?:npx\s+)?react-native\s+run-android\b`].join("|") + ")", "m"), b = [".kt", ".kts", ".java"], D = /* @__PURE__ */ new Set([at, qt]);
function u() {
  return { kotlinOrJavaFileEdited: false, evidence: null };
}
function d(e) {
  return e.kotlinOrJavaFileEdited && e.evidence !== null;
}
function f(e, r) {
  for (let t of r) {
    if (d(e)) return;
    let i = t.type === "progress" && (t.data.type === "agent_progress" || t.data.type === "skill_progress") ? t.data.message : t;
    if (i.type === "assistant") {
      if (!Array.isArray(i.message.content)) continue;
      for (let o of i.message.content) {
        if (o.type !== "tool_use") continue;
        let n = o.input;
        if (typeof n !== "object" || n === null) continue;
        if (D.has(o.name)) {
          if ("file_path" in n && typeof n.file_path === "string" && S(n.file_path)) e.kotlinOrJavaFileEdited = true;
          if (e.evidence === null) e.evidence = "content" in n && p(n.content) || "new_string" in n && p(n.new_string) || null;
        } else if (e.evidence === null && Lg.includes(o.name) && "command" in n && typeof n.command === "string" && E.test(n.command)) e.evidence = "android_command";
      }
    } else if (i.type === "user" && e.evidence === null) {
      if (!Array.isArray(i.message.content)) continue;
      for (let o of i.message.content) {
        if (o.type !== "tool_result") continue;
        let n = T(o.content);
        if (n !== null) {
          e.evidence = n;
          break;
        }
      }
    }
  }
}
function S(e) {
  let r = e.toLowerCase();
  return b.some((t) => r.endsWith(t));
}
function p(e) {
  if (typeof e !== "string") return null;
  if (y.test(e)) return "android_import";
  return a(e);
}
function a(e) {
  if (I.test(e)) return "android_manifest";
  return v.test(e) ? "gradle_plugin" : null;
}
function T(e) {
  if (typeof e === "string") return a(e);
  if (!Array.isArray(e)) return null;
  for (let r of e) {
    let t = r.type === "text" ? a(r.text) : null;
    if (t !== null) return t;
  }
  return null;
}
var R = { ios_app: () => {
  let e = OTs();
  return { absorb: (r) => MTs(e, r), trigger: () => Ggo(e) };
}, android_app: () => {
  let e = u();
  return { absorb: (r) => f(e, r), trigger: () => d(e) ? e.evidence : null };
} };
function A() {
  return new Map(dYr.map((e) => [e, R[e]()]));
}
class _ {
  #n = A();
  #e = /* @__PURE__ */ new Set();
  #t = /* @__PURE__ */ new Set();
  get intents() {
    return this.#e;
  }
  absorb(e) {
    let r = [];
    for (let [t, i] of this.#n) {
      if (this.#e.has(t)) continue;
      let o = null;
      try {
        i.absorb(e);
        let s = i.trigger();
        if (s !== null) Ki({ type: "system", subtype: "dev_intent", kind: t, trigger: s }), this.#e.add(t), o = s;
      } catch (s) {
        if (l(Qe(N(s), "dev intent fold")), !this.#t.has(t)) this.#t.add(t), m("dev_intent_detect", "fold_threw");
      }
      let n = o;
      if (n !== null) r.push(t), g("dev_intent_detect", { kind: c(t), trigger: c(n) });
    }
    return r;
  }
  reset() {
    this.#n = A(), this.#e.clear(), this.#t.clear();
  }
}
var jve = new W(() => new _());
export {
  jve
};
