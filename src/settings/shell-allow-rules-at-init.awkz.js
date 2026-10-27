// settings/shell-allow-rules-at-init.awkz.js — Claude Code 2.1.310 模块 chunk-awkzp9t0.js
import { c } from "../agents/third-party.ydpb.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { Bn } from "../mcp/chunk-ykcv164t.js";
import { wWr, EWr } from "../permissions/bot-protected-tengu-atomic-magpie.zc9j.js";
import { Be, Tt } from "../mcp/allowed-warning.j2d4.js";
var p = ["userSettings", "projectSettings", "localSettings", "flagSettings", "cliArg", "session"];
function s(l) {
  if (l === Be) return Be;
  if (l === Tt) return Tt;
  return null;
}
function m(l, e) {
  let o = s(l);
  if (o === null) return null;
  if (e === void 0 || e === "" || /^[\s*]+$/.test(e)) return "bare";
  return (o === Be ? wWr(o, e) : EWr(o, e)) ? "dangerous_prefix" : "scoped";
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
function iSs(l) {
  a("tengu_shell_allow_rules_at_init", y(l));
}
function ESr(l) {
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
  ESr,
  iSs
};
