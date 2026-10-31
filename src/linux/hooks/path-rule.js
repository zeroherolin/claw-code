// linux/hooks/path-rule.js — Claude Code 2.1.310（linux）模块 chunk-snzjmejf.js
import { Ze } from "../shared/chunk-d2c47492.js";
import { KY } from "../context/tool-result-clearing-after-idle-server-report.js";
import { Pd, hu, UE } from "../permissions/bot-protected-tengu-atomic-magpie.js";
import { Rk, Ole, Q4 } from "../core/conversation-engine.js";
import { UL } from "../settings/chunk-ea11cbf9.js";
import { HE } from "../shared/chunk-cbf69fda.js";
import { Ni } from "../shared/chunk-669ef766.js";
function i(t) {
  return [t.toolAliases, t.permissions().toolAliases];
}
function rbr(t) {
  let o = i(t).flatMap((s) => Object.entries(s ?? {})), e = o.flatMap(([s, n]) => [...n === KY ? [s] : [], ...s === KY ? [n] : []]);
  return [KY, ...e, ...o.flatMap(([s, n]) => e.includes(n) ? [s] : [])];
}
function r(t) {
  let o = t.permissions(), e = rbr(t);
  return [...Pd(o), ...hu(o)].some((s) => Ze(s.ruleValue.ruleContent ?? "", ":").trim() === "path" && e.some((n) => UE(o, { name: n }, s)));
}
function jDn(t, o) {
  if (rbr(o).some((e) => Ni("tool.call", { tool: e }) || Ni("tool.check", { tool: e }, HE("tool.check"))) || UL("PostToolBatch") || Q4("PostToolBatch", o.sessionHooksRegistry, Rk(o, "PostToolBatch", o.session.id)) || ["PreToolUse", "PostToolUse"].some((e) => i(o).some((s) => Ole({ hookEvent: e, toolName: KY, toolInput: t, tools: o.tools, toolAliases: s, sessionHooks: o.sessionHooksRegistry, sessionId: Rk(o, e, o.session.id) })))) return "hook";
  return r(o) ? "path_rule" : void 0;
}
export {
  jDn,
  rbr
};
