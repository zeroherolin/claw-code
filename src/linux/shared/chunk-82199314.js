// linux/shared/chunk-82199314.js — Claude Code 2.1.310（linux）模块 chunk-11m6014q.js
import { Fa, MR, Gu, QH } from "../fs/node-modules.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { i } from "./environment.js";
import { delimiter as a, isAbsolute as u, resolve as s } from "path";
var Pbr = "CLAUDE_CODE_PLUGIN_DIRS", Ido = "Unset CLAUDE_CODE_PLUGIN_DIRS (in the environment, or in the settings `env` block that sets it) to run without those folders.";
function Ibr() {
  let n = (i.CLAUDE_CODE_PLUGIN_DIRS ?? "").split(a).map((e) => Gu(e.trim())).filter((e) => e !== ""), r = n.filter((e) => !l(e));
  if (r.length > 0) t(`${Pbr}: skipped ${r.join(", ")}: a plugin folder here is an absolute local path or starts with ~`, { level: "warn" });
  return n.filter(l).map((e) => s(e));
}
function Odo() {
  let n = Ibr();
  if (i.CLAUDE_CODE_PLUGIN_DIRS !== void 0) i.set("CLAUDE_CODE_PLUGIN_DIRS", n.join(a));
  return n;
}
function YB(...n) {
  let r = /* @__PURE__ */ new Map();
  for (let e of n.flat()) {
    let o = s(e);
    if (!r.has(o)) r.set(o, e);
  }
  return [...r.values()];
}
function ive(n, r) {
  let e = new Set(r.map((o) => s(o)));
  return n.filter((o) => !e.has(s(o)));
}
function l(n) {
  return u(n) && !QH(n) && !Fa(n) && !MR(n);
}
export {
  Ibr,
  Ido,
  Odo,
  Pbr,
  YB,
  ive
};
