// linux/context/chunk-a8653d40.js — Claude Code 2.1.310（linux）模块 chunk-01qhvw6m.js
import { ju, eN, Aq, nF, V$e, QS, By } from "../artifacts/cowritten-artifact-html.js";
var l_t = "next";
function NQ(e, s, r) {
  let n = false, i;
  return s.update(e, (t) => {
    if (i = t, t.notified) return t;
    if (n = true, r?.skipStampIfRunning && t.status === "running") return t;
    return { ...t, notified: true };
  }), { claimed: n, task: i };
}
var fun = new RegExp(`^<${ju}>\\n<${eN}>([^<]+)</${eN}>` + [Aq, nF, V$e].map((e) => `(?:\\n<${e}>[^<]*</${e}>)?`).join("") + `\\n<${QS}>`);
function Di({ taskId: e, toolUseId: s, taskType: r, outputFile: n, status: i, summary: t, body: u, trailing: p }) {
  let d = [[eN, e], [Aq, s], [nF, r], [V$e, n], [QS, i], [By, t]], o = `<${ju}>`;
  for (let [a, T] of d) if (T) o += `
<${a}>${T}</${a}>`;
  return `${o}${u ?? ""}
</${ju}>${p ?? ""}`;
}
export {
  Di,
  NQ,
  fun,
  l_t
};
