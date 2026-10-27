// settings/chunk-pqsa0898.js — Claude Code 2.1.310 模块 chunk-pqsa0898.js
import { Qt } from "./workflow-launch-exec.t4r2.js";
import { fe } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { Kv, vhn, y4 } from "./non-string-value.58dq.js";
function i() {
  return c(y4(vhn(), "globalConfig"), Qt("userSettings") ? y4(fe("userSettings")?.env, "userSettings") : {}, y4(fe("flagSettings")?.env, "flagSettings"), y4(fe("policySettings")?.env, "policySettings"));
}
function lQ() {
  return g(Kv(), i());
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
  lQ
};
