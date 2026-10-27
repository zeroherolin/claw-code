// skills/cli-skill-doctor.hpgy.js — Claude Code 2.1.310 模块 chunk-hpgy40v6.js
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { L } from "../context/not-admin-owned.ersa.js";
import { I } from "../shared/chunk-j79dwkaq.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { he } from "../vendor/chalk/xterm-ghostty.qrwz.js";
import { g, m, p } from "../telemetry/chunk-wn8xtaqg.js";
import { eo } from "../remote/chunk-7nwr416d.js";
import { Bh } from "../shell/invalid-type.qnva.js";
import { Ste, lB, mQt, C1e, cut, wNn } from "../permissions/skill-set-failed.zbge.js";
function f(r) {
  if (r.length === 0) return he.dim("  (no skills loaded)");
  let { cells: t, widths: e } = mQt(r), o = he.dim(`  ${Ste("skill", e.name)}  ${Ste("source", e.source)}  ${lB("context", e.context)}  ${lB("7d tokens", e.week)}  ${lB("uses", e.uses + 1)}  last used`), a = r.map((i, k) => {
    let u = t[k], c = `  ${Ste(i.name, e.name)}  ${he.dim(Ste(i.source, e.source))}  ${lB(u.context, e.context)}  ${lB(u.week, e.week)}  ${lB(String(i.usageCount), e.uses)}×  ${u.lastUsed}`;
    return i.usageCount === 0 ? he.yellow(c) : c;
  }).join(`
`);
  return `${o}
${a}`;
}
async function y(r) {
  let { rows: t, unusedOwned: e, unusedSynced: o, unusedFromPlugins: a, unusedFromMcp: i, unusedMcpServers: k, disusedPlugins: u, weekTokensNote: c } = await wNn(cut(r)), s = [];
  if (s.push(he.bold("Skills loaded this session")), s.push(""), s.push(f(t)), t.length > 0) s.push(""), s.push(he.dim("  context = this skill's one-line listing in the system prompt, included every turn")), s.push(he.dim("  (dash = not in the current listing, costs nothing; full SKILL.md loads only when it runs)")), s.push(he.dim(c === null ? "  7d tokens = tokens attributed to the skill over the last 7 days of sessions on this machine" : `  7d tokens: ${c}`));
  if (s.push(""), e.length > 0) s.push(he.yellow(`${e.length} ${I(e.length, "skill")} loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or remove from .claude/skills.`));
  if (o.length > 0) s.push(he.yellow(`${o.length} ${I(o.length, "skill")} synced from claude.ai loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or turn ${o.length === 1 ? "it" : "them"} off on claude.ai — a deleted synced copy is re-downloaded on the next sync.`));
  if (a.length > 0) {
    let n = L(a.map((h) => h.pluginKey === void 0 ? h.source : Bh(h.pluginKey)));
    s.push(he.yellow(`${a.length} plugin ${I(a.length, "skill")} loaded but never invoked, from ${n.join(", ")}. Each one adds to the system prompt every turn. Plugin skills can't be turned off individually — disable ${n.length === 1 ? "the plugin" : "those plugins"} in /plugin.`));
  }
  if (i.length > 0) {
    let n = k.length > 0 ? `, from ${k.join(", ")}` : "", h = k.length <= 1;
    s.push(he.yellow(`${i.length} MCP ${I(i.length, "skill")} loaded but never invoked${n}. Each one adds to the system prompt every turn. MCP skills live on the server, not on disk — turning ${h ? "that server" : "those servers"} off in /mcp also removes ${h ? "its" : "their"} tools.`));
  }
  if (t.length > 0 && t.every((n) => n.usageCount > 0)) s.push(he.green("All loaded skills have been used at least once."));
  if (u.length > 0) {
    s.push(""), s.push(he.bold("Plugins not used recently")), s.push("");
    for (let n of u) s.push(`  ${he.yellow(Bh(n.name))}  ${he.dim(`last used ${n.daysSinceLastUse} days ago`)}`);
    s.push(""), s.push(he.dim("  Manage these in /plugin"));
  }
  if (t.length === 0) p("cli_skill_doctor", "no_user_skills");
  else if (c !== null) p("cli_skill_doctor", "scan_policy_denied");
  else g("cli_skill_doctor");
  return s.join(`
`);
}
var Amo = async (r, t) => {
  if (eo(t.session)) return { type: "text", value: "Skill usage reports are not available on this connection." };
  try {
    let e = await y(t);
    if (eo(t.session)) return { type: "text", value: "Skill usage reports are not available on this connection." };
    return { type: "text", value: e };
  } catch (e) {
    let o = e instanceof C1e ? e.cause : e;
    if (l(o), m("cli_skill_doctor", e instanceof C1e ? e.featureErrorCode : "render_failed"), eo(t.session)) return { type: "text", value: "Couldn't compute skill usage.", outcome: { kind: "failed" } };
    return { type: "text", value: `Couldn't compute skill usage. Run with --debug for details. (${d(o)})`, outcome: { kind: "failed" } };
  }
};
export {
  Amo
};
