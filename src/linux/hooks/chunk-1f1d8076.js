// linux/hooks/chunk-1f1d8076.js — Claude Code 2.1.310（linux）模块 chunk-9s6nq5y2.js
import { gc, Cse } from "../mcp/chunk-0e2a1db6.js";
import { at, qt } from "../mcp/allowed-warning.js";
import { Lt, _u } from "../artifacts/cobalt-plinth-lovage.js";
import { ae } from "../permissions/max-thinking-tokens.js";
import { Lde, Y6n, j1, a_t } from "../shared/too-long.js";
import { HE } from "../shared/chunk-cbf69fda.js";
import { Ni } from "../shared/chunk-669ef766.js";
import { IG } from "../plugins/chunk-53f86049.js";
import { DS } from "../shared/chunk-cc3dea5c.js";
var a = [Lt, _u].flatMap((o) => [o, ...Cse(o)]);
function c(o, t) {
  let r = [...Object.entries(o.options.toolAliases ?? {}), ...Object.entries(ae(o).toolAliases ?? {})], e = r.flatMap(([n, i]) => [...t.includes(i) ? [n] : [], ...t.includes(n) ? [i] : []]), s = r.flatMap(([n, i]) => e.includes(i) ? [n] : []);
  return [...t, ...e, ...s];
}
function u(o) {
  return o.hooks.some((t) => !a_t({ hook: t }));
}
function f(o, t, r = true) {
  if (!o || o === "*") return true;
  if (/^[a-zA-Z0-9_|, -]+$/.test(o)) return o.split(/[|,]/).map((e) => e.trim()).some((e) => t.includes(e) || t.includes(gc(e)));
  try {
    let e = Y6n(o);
    return t.some((s) => e.test(s));
  } catch (e) {
    return r || e instanceof Lde;
  }
}
function l(o, t, r = () => false) {
  let e = HE("tool.call").filter((n) => !r(n)), s = HE("tool.check");
  return Ni("classic.PreToolUse", void 0, HE("classic.PreToolUse")) || o.some((n) => Ni("tool.call", { tool: n }, e) || Ni("tool.check", t ? { tool: n } : j1({ name: n }), s));
}
function myo(o, t) {
  try {
    let r = t.flatMap((s) => [s, ...Cse(s)]), e = c(o, r);
    return l(e, e.length > r.length, DS);
  } catch {
    return true;
  }
}
function gyo(o, t) {
  try {
    let r = t === void 0 ? a : [...a, t, ...Cse(t)], e = c(o, r);
    if (l(e, e.length > r.length)) return true;
    if (o.sessionHooksRegistry.has(o.agentId ?? o.session.id, "PreToolUse")) return true;
    return IG("PreToolUse").some((s) => f(s.matcher, e) && u(s));
  } catch {
    return true;
  }
}
var d = [at, qt].flatMap((o) => [o, ...Cse(o)]);
function hyo() {
  return l(d, false, DS) || IG("PreToolUse").some((o) => f(o.matcher, d, false) && u(o));
}
export {
  gyo,
  hyo,
  myo
};
