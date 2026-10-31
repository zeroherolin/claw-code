// linux/agents/append-subagent-system-prompt-file.js — Claude Code 2.1.310（linux）模块 chunk-dt93rvn7.js
import { is } from "../fs/async-hooks.93b1.js";
var g = /^[A-Za-z0-9][A-Za-z0-9-]*$/, a = /* @__PURE__ */ new Set(["restricted"]), Kfs = ["system-prompt-file", "append-system-prompt-file", "append-subagent-system-prompt-file"];
function AA(t, e) {
  return `${t}=${e}`;
}
function thr(t, e) {
  let n = String(e);
  if (n.length > 1 && n.startsWith("-")) return [AA(t, n)];
  return [t, n];
}
function i9t(t, e, n) {
  t.push(...thr(`--${e}`, n));
}
function QIn(t, e, n, o) {
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
      if (!is(String(s))) t.push(`--${r}`), i++;
      continue;
    }
    if (s !== "") i9t(t, r, s), i++;
  }
  return i;
}
export {
  AA,
  Kfs,
  QIn,
  i9t,
  thr
};
