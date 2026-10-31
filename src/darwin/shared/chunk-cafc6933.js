// darwin/shared/chunk-cafc6933.js — Claude Code 2.1.310（darwin）模块 chunk-6z6rxtmf.js
import { pNt, Jmt, Qmt, fNt } from "../core/conversation-engine.js";
function h(e, o) {
  let p = Qmt(e), s = Math.min(p.length, pNt());
  return 2 + fNt(e, o).length + 2 + s + 1;
}
function Pxt(e, o, p) {
  let s = /* @__PURE__ */ new Map();
  for (let n of e) {
    if (n.type !== "prompt" || n.disableModelInvocation) continue;
    let t = n.pluginInfo?.pluginManifest.name;
    if (!t) continue;
    let a = h(n, e), r = s.get(t) ?? [];
    r.push({ name: n.name, chars: a, approxTokens: Math.round(a / o) }), s.set(t, r);
  }
  let m = [...s.entries()].map(([n, t]) => {
    t.sort((r, u) => u.chars - r.chars);
    let a = t.reduce((r, u) => r + u.chars, 0);
    return { pluginName: n, skillCount: t.length, chars: a, approxTokens: Math.round(a / o), skills: t };
  }).sort((n, t) => t.chars - n.chars), c = m.reduce((n, t) => n + t.chars, 0), i = Jmt(p, o), l = c > i, g = l ? i : c;
  return { byPlugin: m, totalChars: g, totalTokens: Math.round(g / o), overBudget: l, budgetTokens: Math.round(i / o) };
}
export {
  Pxt
};
