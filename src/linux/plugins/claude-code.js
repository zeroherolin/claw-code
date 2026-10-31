// linux/plugins/claude-code.js — Claude Code 2.1.310（linux）模块 chunk-fydq2gm2.js
import { K5 } from "../shared/chunk-dda594a8.js";
import { rQo, u3r, f3r, oQo } from "./skills-dir.js";
var t = { marks: ["claude", "anthropic", "anthropics"], builtinLead: "cc-plugin", products: ["claude-code", "claude-mods"] }, d = [...t.marks, t.builtinLead], c = [...t.marks, ...t.products], E = (e) => new Set(e.map((s) => f3r(s).join(""))), l = E(d), p = E(c), _ = Math.max(...[...l, ...p].map((e) => e.length)), R = (e) => new Intl.ListFormat("en", { type: "disjunction" }).format(e.map((s) => `"${s}"`)), g = R(d.map((e) => `${e}-`)), m = `A third party's plugin name cannot start with ${g}, be ${R(c)}, or put "official" beside "claude" or "anthropic".`, a = "Name it for what it does.", W_s = "If this is one of Anthropic's own plugins, validate the marketplace that lists it.";
function c3e(e) {
  let s = u3r.test(e), n = (s ? K5(e) : e).toLowerCase(), r = s ? `"${e}" (read as "${n}")` : `"${e}"`, i = f3r(n);
  if ([...oQo(n, _)].some(({ joined: o, isWhole: u }) => (u ? p : l).has(o)) || rQo.test(n) || rQo.test(i.join(""))) return { severity: "error", message: `Plugin name ${r} is reserved: it passes as one of Anthropic's own. ${m} ` + a };
  return t.marks.some((o) => i.includes(o)) ? { severity: "warning", message: `Plugin name ${r} reads as one of Anthropic's own. ` + a } : void 0;
}
export {
  W_s,
  c3e
};
