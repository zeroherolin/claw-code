// darwin/context/tool-result.js — Claude Code 2.1.310（darwin）模块 chunk-evq23kfq.js
import { re } from "../shared/chunk-d2c47492.js";
import { rie } from "../shared/pasted-content.js";
var ges = /^(?:\s*<[a-z][\w-]*[\s>]|\[Request interrupted by user[^\]]*\])/, a = /<command-name>(.*?)<\/command-name>/;
function Kst(e, i) {
  if (e.type !== "user") return;
  if (e.isMeta === true || e.isCompactSummary === true) return;
  let s = e.message;
  if (!s) return;
  let r = s.content, o = [];
  if (typeof r === "string") o.push(r);
  else if (Array.isArray(r)) for (let t of r) {
    if (!t || typeof t !== "object") continue;
    if (t.type === "tool_result") return;
    if (t.type === "text" && typeof t.text === "string") o.push(t.text);
  }
  for (let t of o) {
    let n = rie(t).replaceAll(`
`, " ").trim();
    if (!n) continue;
    let c = a.exec(n);
    if (c) {
      if (!i.commandFallback) i.commandFallback = c[1];
      continue;
    }
    let u = /<bash-input>([\s\S]*?)<\/bash-input>/.exec(n);
    if (u) return `! ${u[1].trim()}`;
    if (ges.test(n)) continue;
    if (n.length > 200) n = re(n, 200).trim() + "…";
    return n;
  }
  return;
}
export {
  Kst,
  ges
};
