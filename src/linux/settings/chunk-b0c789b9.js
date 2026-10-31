// linux/settings/chunk-b0c789b9.js — Claude Code 2.1.310（linux）模块 chunk-6pv3pyvv.js
import { Qt } from "./workflow-launch-exec.js";
import { pe } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { KE, ihn, s5 } from "./non-string-value.js";
function i() {
  return c(s5(ihn(), "globalConfig"), Qt("userSettings") ? s5(pe("userSettings")?.env, "userSettings") : {}, s5(pe("flagSettings")?.env, "flagSettings"), s5(pe("policySettings")?.env, "policySettings"));
}
function e7() {
  return g(KE(), i());
}
function g(s, n) {
  let r = new Set(Object.keys(n).map((e) => e.toUpperCase())), t = { ...s };
  for (let e of Object.keys(t)) if (!(e in n) && r.has(e.toUpperCase())) delete t[e];
  return Object.assign(t, n);
}
function c(...s) {
  let n = /* @__PURE__ */ new Map();
  for (let t of s) for (let [e, o] of Object.entries(t)) n.set(e.toUpperCase(), { key: e, value: o });
  let r = {};
  for (let { key: t, value: e } of n.values()) r[t] = e;
  return r;
}
export {
  e7
};
