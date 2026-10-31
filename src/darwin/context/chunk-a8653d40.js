// darwin/context/chunk-a8653d40.js — Claude Code 2.1.310（darwin）模块 chunk-vhc5wsq3.js
import { ju, oN, LK, i$, n$e, ew, Wy } from "../artifacts/cowritten-artifact-html.js";
var c_t = "next";
function WJ(e, s, r) {
  let n = false, i;
  return s.update(e, (t) => {
    if (i = t, t.notified) return t;
    if (n = true, r?.skipStampIfRunning && t.status === "running") return t;
    return { ...t, notified: true };
  }), { claimed: n, task: i };
}
var yun = new RegExp(`^<${ju}>\\n<${oN}>([^<]+)</${oN}>` + [LK, i$, n$e].map((e) => `(?:\\n<${e}>[^<]*</${e}>)?`).join("") + `\\n<${ew}>`);
function Hi({ taskId: e, toolUseId: s, taskType: r, outputFile: n, status: i, summary: t, body: u, trailing: p }) {
  let d = [[oN, e], [LK, s], [i$, r], [n$e, n], [ew, i], [Wy, t]], o = `<${ju}>`;
  for (let [a, T] of d) if (T) o += `
<${a}>${T}</${a}>`;
  return `${o}${u ?? ""}
</${ju}>${p ?? ""}`;
}
export {
  Hi,
  WJ,
  c_t,
  yun
};
