// darwin/agents/append-subagent-system-prompt-file.js — Claude Code 2.1.310（darwin）模块 chunk-p8g7nrdd.js
import { as } from "../fs/async-hooks.93b1.js";
var g = /^[A-Za-z0-9][A-Za-z0-9-]*$/, a = /* @__PURE__ */ new Set(["restricted"]), Xms = ["system-prompt-file", "append-system-prompt-file", "append-subagent-system-prompt-file"];
function xT(t, e) {
  return `${t}=${e}`;
}
function Whr(t, e) {
  let n = String(e);
  if (n.length > 1 && n.startsWith("-")) return [xT(t, n)];
  return [t, n];
}
function DYt(t, e, n) {
  t.push(...Whr(`--${e}`, n));
}
function XOn(t, e, n, o) {
  let i = 0;
  for (let [r, s] of Object.entries(e)) {
    if (!g.test(r)) {
      o("malformed", JSON.stringify(r));
      continue;
    }
    if (n.has(r)) {
      o("blocked", r);
      continue;
    }
    if (a.has(r)) {
      if (!as(String(s))) t.push(`--${r}`), i++;
      continue;
    }
    if (s !== "") DYt(t, r, s), i++;
  }
  return i;
}
export {
  DYt,
  Whr,
  XOn,
  Xms,
  xT
};
