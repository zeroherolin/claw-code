// darwin/plugins/claude-code.js — Claude Code 2.1.310（darwin）模块 chunk-0matqqzb.js
import { r5 } from "../shared/chunk-dda594a8.js";
import { HJo, D9r, L9r, DJo } from "./skills-dir.js";
var t = { marks: ["claude", "anthropic", "anthropics"], builtinLead: "cc-plugin", products: ["claude-code", "claude-mods"] }, d = [...t.marks, t.builtinLead], c = [...t.marks, ...t.products], E = (e) => new Set(e.map((s) => L9r(s).join(""))), l = E(d), p = E(c), _ = Math.max(...[...l, ...p].map((e) => e.length)), R = (e) => new Intl.ListFormat("en", { type: "disjunction" }).format(e.map((s) => `"${s}"`)), g = R(d.map((e) => `${e}-`)), m = `A third party's plugin name cannot start with ${g}, be ${R(c)}, or put "official" beside "claude" or "anthropic".`, a = "Name it for what it does.", _Ss = "If this is one of Anthropic's own plugins, validate the marketplace that lists it.";
function y9e(e) {
  let s = D9r.test(e), n = (s ? r5(e) : e).toLowerCase(), r = s ? `"${e}" (read as "${n}")` : `"${e}"`, i = L9r(n);
  if ([...DJo(n, _)].some(({ joined: o, isWhole: u }) => (u ? p : l).has(o)) || HJo.test(n) || HJo.test(i.join(""))) return { severity: "error", message: `Plugin name ${r} is reserved: it passes as one of Anthropic's own. ${m} ` + a };
  return t.marks.some((o) => i.includes(o)) ? { severity: "warning", message: `Plugin name ${r} reads as one of Anthropic's own. ` + a } : void 0;
}
export {
  _Ss,
  y9e
};
