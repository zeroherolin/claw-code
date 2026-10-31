// linux/settings/shell-allow-rules-at-init.js — Claude Code 2.1.310（linux）模块 chunk-mt5f8q2b.js
import { c } from "../agents/third-party.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { Bn } from "../mcp/chunk-0e2a1db6.js";
import { eWr, tWr } from "../permissions/bot-protected-tengu-atomic-magpie.js";
import { Be, At } from "../mcp/allowed-warning.js";
var p = ["userSettings", "projectSettings", "localSettings", "flagSettings", "cliArg", "session"];
function s(l) {
  if (l === Be) return Be;
  if (l === At) return At;
  return null;
}
function m(l, e) {
  let o = s(l);
  if (o === null) return null;
  if (e === void 0 || e === "" || /^[\s*]+$/.test(e)) return "bare";
  return (o === Be ? eWr(o, e) : tWr(o, e)) ? "dangerous_prefix" : "scoped";
}
function y(l) {
  let e = {}, o = 0;
  for (let r of p) for (let t of l[r] ?? []) {
    let { toolName: f, ruleContent: S } = Bn(t), n = s(f);
    if (n === null) continue;
    let i = m(n, S);
    if (i === null) continue;
    let u = `${r}_${n}_${i}`;
    e[u] = (e[u] ?? 0) + 1, o++;
  }
  return e.total_shell_allow_rules = o, e;
}
function I_s(l) {
  a("tengu_shell_allow_rules_at_init", y(l));
}
function lbr(l) {
  for (let e of l) {
    if (e.type !== "addRules" || e.behavior !== "allow") continue;
    for (let o of e.rules) {
      let r = s(o.toolName);
      if (r === null) continue;
      let t = m(o.toolName, o.ruleContent);
      if (t === null) continue;
      a("tengu_shell_allow_rule_added", { toolName: c(r), category: c(t), destination: c(e.destination) });
    }
  }
}
export {
  I_s,
  lbr
};
