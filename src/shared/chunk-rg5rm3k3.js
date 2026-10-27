// shared/chunk-rg5rm3k3.js — Claude Code 2.1.310 模块 chunk-rg5rm3k3.js
import { Ua, LR, Gu, tD } from "../fs/node-modules.gp4v.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { i } from "./environment.9a41.js";
import { delimiter as a, isAbsolute as u, resolve as s } from "path";
var ZSr = "CLAUDE_CODE_PLUGIN_DIRS", dco = "Unset CLAUDE_CODE_PLUGIN_DIRS (in the environment, or in the settings `env` block that sets it) to run without those folders.";
function ebr() {
  let n = (i.CLAUDE_CODE_PLUGIN_DIRS ?? "").split(a).map((e) => Gu(e.trim())).filter((e) => e !== ""), r = n.filter((e) => !l(e));
  if (r.length > 0) t(`${ZSr}: skipped ${r.join(", ")}: a plugin folder here is an absolute local path or starts with ~`, { level: "warn" });
  return n.filter(l).map((e) => s(e));
}
function cco() {
  let n = ebr();
  if (i.CLAUDE_CODE_PLUGIN_DIRS !== void 0) i.set("CLAUDE_CODE_PLUGIN_DIRS", n.join(a));
  return n;
}
function eB(...n) {
  let r = /* @__PURE__ */ new Map();
  for (let e of n.flat()) {
    let o = s(e);
    if (!r.has(o)) r.set(o, e);
  }
  return [...r.values()];
}
function fEe(n, r) {
  let e = new Set(r.map((o) => s(o)));
  return n.filter((o) => !e.has(s(o)));
}
function l(n) {
  return u(n) && !tD(n) && !Ua(n) && !LR(n);
}
export {
  ZSr,
  cco,
  dco,
  eB,
  ebr,
  fEe
};
