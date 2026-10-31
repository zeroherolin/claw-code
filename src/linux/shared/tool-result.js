// linux/shared/tool-result.js — Claude Code 2.1.310（linux）模块 chunk-3f95p5rw.js
import { re, zr, $M } from "./chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { QFr, WD } from "../permissions/subagent-output-flagged.js";
import { qa } from "../tools/structured-output-tool.js";
var yLn = 5, YSs = "Structured output was retracted by a model fallback and no retry produced a valid result", d = 600;
function XSs(t, r, e) {
  if (r > 0) return `Failed to provide surviving structured output after ${t} attempts (${r} retracted by a model fallback)`;
  let n = `Failed to provide valid structured output after ${t} attempts`;
  return e === void 0 ? n : `${n} — last StructuredOutput error: ${e}`;
}
function euo(t) {
  let r = typeof t === "string" ? t : Array.isArray(t) ? t.flatMap((i) => i.type === "text" ? [i.text] : []).join(`
`) : void 0;
  if (r === void 0) return;
  let n = r.replace(/^<tool_use_error>/, "").replace(/<\/tool_use_error>$/, "").replace(QFr, `
`).split(`
`).map($M).join(`
`), o = WD(n, { prependMarker: false }).sanitized, u = zr(o);
  if (u.length === 0) return;
  let s = u.length > d ? re(u, d) + "…" : u;
  return WD(s, { prependMarker: false }).sanitized;
}
function JSs(t, r) {
  try {
    let e = r === void 0 ? 0 : t.lastIndexOf(r) + 1;
    return a(e === 0 ? t : t.slice(e));
  } catch (e) {
    l(e);
    return;
  }
}
function a(t) {
  let r = /* @__PURE__ */ new Set();
  for (let e of t) {
    if (e?.type !== "assistant") continue;
    let n = e.message.content;
    if (!Array.isArray(n)) continue;
    for (let o of n) if (o.type === "tool_use" && o.name === qa) r.add(o.id);
  }
  if (r.size === 0) return;
  for (let e = t.length - 1; e >= 0; e--) {
    let n = t[e];
    if (n?.type !== "user") continue;
    let o = n.message.content;
    if (!Array.isArray(o)) continue;
    for (let u = o.length - 1; u >= 0; u--) {
      let s = o[u];
      if (s?.type === "tool_result" && s.is_error === true && r.has(s.tool_use_id)) return euo(s.content);
    }
  }
  return;
}
export {
  JSs,
  XSs,
  YSs,
  euo,
  yLn
};
