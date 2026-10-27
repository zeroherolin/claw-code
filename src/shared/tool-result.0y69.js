// shared/tool-result.0y69.js — Claude Code 2.1.310 模块 chunk-0y69t9mj.js
import { re, zr, WM } from "./chunk-j79dwkaq.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { SUr, K0 } from "../permissions/subagent-output-flagged.c14m.js";
import { Ya } from "../tools/structured-output-tool.j28z.js";
var PDn = 5, kws = "Structured output was retracted by a model fallback and no retry produced a valid result", d = 600;
function Cws(t, r, e) {
  if (r > 0) return `Failed to provide surviving structured output after ${t} attempts (${r} retracted by a model fallback)`;
  let n = `Failed to provide valid structured output after ${t} attempts`;
  return e === void 0 ? n : `${n} — last StructuredOutput error: ${e}`;
}
function kuo(t) {
  let r = typeof t === "string" ? t : Array.isArray(t) ? t.flatMap((i) => i.type === "text" ? [i.text] : []).join(`
`) : void 0;
  if (r === void 0) return;
  let n = r.replace(/^<tool_use_error>/, "").replace(/<\/tool_use_error>$/, "").replace(SUr, `
`).split(`
`).map(WM).join(`
`), o = K0(n, { prependMarker: false }).sanitized, u = zr(o);
  if (u.length === 0) return;
  let s = u.length > d ? re(u, d) + "…" : u;
  return K0(s, { prependMarker: false }).sanitized;
}
function Tws(t, r) {
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
    for (let o of n) if (o.type === "tool_use" && o.name === Ya) r.add(o.id);
  }
  if (r.size === 0) return;
  for (let e = t.length - 1; e >= 0; e--) {
    let n = t[e];
    if (n?.type !== "user") continue;
    let o = n.message.content;
    if (!Array.isArray(o)) continue;
    for (let u = o.length - 1; u >= 0; u--) {
      let s = o[u];
      if (s?.type === "tool_result" && s.is_error === true && r.has(s.tool_use_id)) return kuo(s.content);
    }
  }
  return;
}
export {
  Cws,
  PDn,
  Tws,
  kuo,
  kws
};
