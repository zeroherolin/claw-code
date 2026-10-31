// linux/shell/chunk-e2cdfabc.js — Claude Code 2.1.310（linux）模块 chunk-w6j1j35n.js
import { ra, uo, Ar } from "../settings/global-config-and-gates.js";
import { at, qt, Be, At } from "../mcp/allowed-warning.js";
import { Ug } from "../computer-use/chunk-217335d0.js";
import { d2r, vf, Y7s } from "./async-hooks.js";
import { GCr, zte, SD, wD, IGn, xge, yMr, _Mr } from "../core/conversation-engine.js";
import { ht } from "../agents/chunk-5531d42a.js";
import { tWo, Zu, Ll, Rt, kw, JD } from "../context/tool-result-clearing-after-idle-server-report.js";
import { Lr } from "../tools/device-session-limit.js";
import { U3s } from "../tools/structured-output-tool.js";
import { e$ } from "../context/team-memory-sync.js";
import { rae } from "../context/chunk-eed947c0.js";
import { TF } from "../tools/worktree-entered-existing.js";
import { qe } from "../shared/allow-large.js";
var Tie = () => rae({ promptSuggestionEnabled: false });
var c = /* @__PURE__ */ new Set([Be, qe, at, qt, Ar, uo, ra, At]), TFe = /* @__PURE__ */ new Set([Ug]), AFe = GCr;
function Kit(e) {
  return `[serve-mode] Stripped client-supplied privilege field(s): ${e.join(", ")}`;
}
function E(e, i) {
  if (e.properties === void 0 || i.length === 0) return e;
  let s = { ...e.properties };
  for (let n of i) delete s[n];
  let t = Array.isArray(e.required) ? e.required.filter((n) => !i.includes(n)) : e.required;
  return { ...e, properties: s, required: t };
}
function JYe(e, { skipSearchToolRestore: i = false } = {}) {
  let s = TF(Ll(), { skipReplFilter: true, skipSimpleModeFilter: e }).filter((o) => !JD(o));
  if (!e) return s;
  let t = s.filter((o) => c.has(o.name));
  if (i) return t;
  let n = zte(), p = [SD, wD].filter((o) => n.has(o.name) && c.has(o.name) && !t.includes(o) && o.isEnabled());
  return [...t, ...p];
}
async function qis(e, i = {}, s) {
  let t = e === "http", n = Ll(), p = JYe(t, i), o = i.agentDefinitions ?? { activeAgents: [], allAgents: [] }, d = t ? [] : await xge(IGn(o.activeAgents, []), o.allowedAgentTypes, n), T = d.length > 0 ? `Available agent types:
${d.map((r) => yMr(r, false)).join(`
`)}` : "", m = () => Promise.all(p.map(async (r) => {
    let f = e$(r.inputSchema), { remoteExecution: _, outputSchemaAcrossProcesses: S, ...u } = r, l = await r.prompt({ getToolPermissionContext: async () => n, tools: p, agents: o.activeAgents, ...s !== void 0 && { model: s.model, leanPrompt: s.leanPrompt, bashFirstTrimmed: false } });
    return { ...u, description: Rt(r, Zu) ? U3s(l) : Rt(r, ht) ? l.replace(l.includes(_Mr) ? _Mr : tWo, () => T) : l, inputSchema: E(f, [...t ? AFe : [], ...kw(r).supported ? [Lr] : []]), outputSchema: void 0 };
  }));
  if (!t) return m();
  let a = vf();
  if (a.backgroundTasksDisabled && a.unsandboxedCommandsDisabled && !a.backgroundShellsKeptElsewhere) return m();
  for (let r of p) r.inputSchema;
  return Y7s(yQr(), m);
}
function yQr(e = new d2r()) {
  return e.disableBackgroundTasks(), e.disableUnsandboxedCommands(), e;
}
export {
  AFe,
  JYe,
  Kit,
  TFe,
  Tie,
  qis,
  yQr
};
