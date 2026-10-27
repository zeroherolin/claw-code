// hooks/path-rule.52rs.js — Claude Code 2.1.310 模块 chunk-52rswk9e.js
import { Ze } from "../shared/chunk-j79dwkaq.js";
import { r4 } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { Pd, yu, Bv } from "../permissions/bot-protected-tengu-atomic-magpie.zc9j.js";
import { xk, Ble, l3 } from "../core/conversation-engine.31gx.js";
import { WD } from "../settings/chunk-wt44aey8.js";
import { Lv } from "../shared/chunk-emh9bc9e.js";
import { Ni } from "../shared/chunk-gqevy7zx.js";
function i(t) {
  return [t.toolAliases, t.permissions().toolAliases];
}
function rSr(t) {
  let o = i(t).flatMap((s) => Object.entries(s ?? {})), e = o.flatMap(([s, n]) => [...n === r4 ? [s] : [], ...s === r4 ? [n] : []]);
  return [r4, ...e, ...o.flatMap(([s, n]) => e.includes(n) ? [s] : [])];
}
function r(t) {
  let o = t.permissions(), e = rSr(t);
  return [...Pd(o), ...yu(o)].some((s) => Ze(s.ruleValue.ruleContent ?? "", ":").trim() === "path" && e.some((n) => Bv(o, { name: n }, s)));
}
function X0n(t, o) {
  if (rSr(o).some((e) => Ni("tool.call", { tool: e }) || Ni("tool.check", { tool: e }, Lv("tool.check"))) || WD("PostToolBatch") || l3("PostToolBatch", o.sessionHooksRegistry, xk(o, "PostToolBatch", o.session.id)) || ["PreToolUse", "PostToolUse"].some((e) => i(o).some((s) => Ble({ hookEvent: e, toolName: r4, toolInput: t, tools: o.tools, toolAliases: s, sessionHooks: o.sessionHooksRegistry, sessionId: xk(o, e, o.session.id) })))) return "hook";
  return r(o) ? "path_rule" : void 0;
}
export {
  X0n,
  rSr
};
