// hooks/chunk-ec3nds68.js — Claude Code 2.1.310 模块 chunk-ec3nds68.js
import { gc, Dse } from "../mcp/chunk-ykcv164t.js";
import { at, qt } from "../mcp/allowed-warning.j2d4.js";
import { Lt, Su } from "../artifacts/cobalt-plinth-lovage.hxm5.js";
import { ae } from "../permissions/max-thinking-tokens.hx3h.js";
import { Kde, k9n, qB, S_t } from "../shared/too-long.hrff.js";
import { Lv } from "../shared/chunk-emh9bc9e.js";
import { Ni } from "../shared/chunk-gqevy7zx.js";
import { B2 } from "../plugins/chunk-tcdz2w3z.js";
import { Db } from "../shared/chunk-b6n7b0tm.js";
var a = [Lt, Su].flatMap((o) => [o, ...Dse(o)]);
function c(o, t) {
  let r = [...Object.entries(o.options.toolAliases ?? {}), ...Object.entries(ae(o).toolAliases ?? {})], e = r.flatMap(([n, i]) => [...t.includes(i) ? [n] : [], ...t.includes(n) ? [i] : []]), s = r.flatMap(([n, i]) => e.includes(i) ? [n] : []);
  return [...t, ...e, ...s];
}
function u(o) {
  return o.hooks.some((t) => !S_t({ hook: t }));
}
function f(o, t, r = true) {
  if (!o || o === "*") return true;
  if (/^[a-zA-Z0-9_|, -]+$/.test(o)) return o.split(/[|,]/).map((e) => e.trim()).some((e) => t.includes(e) || t.includes(gc(e)));
  try {
    let e = k9n(o);
    return t.some((s) => e.test(s));
  } catch (e) {
    return r || e instanceof Kde;
  }
}
function l(o, t, r = () => false) {
  let e = Lv("tool.call").filter((n) => !r(n)), s = Lv("tool.check");
  return Ni("classic.PreToolUse", void 0, Lv("classic.PreToolUse")) || o.some((n) => Ni("tool.call", { tool: n }, e) || Ni("tool.check", t ? { tool: n } : qB({ name: n }), s));
}
function Qyo(o, t) {
  try {
    let r = t.flatMap((s) => [s, ...Dse(s)]), e = c(o, r);
    return l(e, e.length > r.length, Db);
  } catch {
    return true;
  }
}
function Zyo(o, t) {
  try {
    let r = t === void 0 ? a : [...a, t, ...Dse(t)], e = c(o, r);
    if (l(e, e.length > r.length)) return true;
    if (o.sessionHooksRegistry.has(o.agentId ?? o.session.id, "PreToolUse")) return true;
    return B2("PreToolUse").some((s) => f(s.matcher, e) && u(s));
  } catch {
    return true;
  }
}
var d = [at, qt].flatMap((o) => [o, ...Dse(o)]);
function e_o() {
  return l(d, false, Db) || B2("PreToolUse").some((o) => f(o.matcher, d, false) && u(o));
}
export {
  Qyo,
  Zyo,
  e_o
};
