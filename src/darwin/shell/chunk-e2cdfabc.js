// darwin/shell/chunk-e2cdfabc.js — Claude Code 2.1.310（darwin）模块 chunk-p3njabx4.js
import { ra, uo, Tr } from "../settings/global-config-and-gates.js";
import { at, qt, Be, Tt } from "../mcp/allowed-warning.js";
import { Ug } from "../computer-use/chunk-217335d0.js";
import { Pzr, wp, HZs } from "./async-hooks.js";
import { cRr, ene, k0, C0, Q2n, Hge, NMr, FMr } from "../core/conversation-engine.js";
import { ht } from "../agents/chunk-5531d42a.js";
import { PWo, Zu, Ll, Rt, Cw, tH } from "../context/tool-result-clearing-after-idle-server-report.js";
import { Lr } from "../tools/device-session-limit.js";
import { k8s } from "../web/chunk-16fa3a7e.js";
import { rF } from "../context/team-memory-sync.js";
import { uae } from "../context/chunk-eed947c0.js";
import { x$ } from "../tools/worktree-entered-existing.js";
import { qe } from "../shared/allow-large.js";
var Mie = () => uae({ promptSuggestionEnabled: false });
var c = /* @__PURE__ */ new Set([Be, qe, at, qt, Tr, uo, ra, Tt]), M$e = /* @__PURE__ */ new Set([Ug]), H$e = cRr;
function Xit(e) {
  return `[serve-mode] Stripped client-supplied privilege field(s): ${e.join(", ")}`;
}
function E(e, i) {
  if (e.properties === void 0 || i.length === 0) return e;
  let s = { ...e.properties };
  for (let n of i) delete s[n];
  let t = Array.isArray(e.required) ? e.required.filter((n) => !i.includes(n)) : e.required;
  return { ...e, properties: s, required: t };
}
function o4e(e, { skipSearchToolRestore: i = false } = {}) {
  let s = x$(Ll(), { skipReplFilter: true, skipSimpleModeFilter: e }).filter((o) => !tH(o));
  if (!e) return s;
  let t = s.filter((o) => c.has(o.name));
  if (i) return t;
  let n = ene(), p = [k0, C0].filter((o) => n.has(o.name) && c.has(o.name) && !t.includes(o) && o.isEnabled());
  return [...t, ...p];
}
async function fas(e, i = {}, s) {
  let t = e === "http", n = Ll(), p = o4e(t, i), o = i.agentDefinitions ?? { activeAgents: [], allAgents: [] }, d = t ? [] : await Hge(Q2n(o.activeAgents, []), o.allowedAgentTypes, n), T = d.length > 0 ? `Available agent types:
${d.map((r) => NMr(r, false)).join(`
`)}` : "", m = () => Promise.all(p.map(async (r) => {
    let f = rF(r.inputSchema), { remoteExecution: _, outputSchemaAcrossProcesses: S, ...u } = r, l = await r.prompt({ getToolPermissionContext: async () => n, tools: p, agents: o.activeAgents, ...s !== void 0 && { model: s.model, leanPrompt: s.leanPrompt, bashFirstTrimmed: false } });
    return { ...u, description: Rt(r, Zu) ? k8s(l) : Rt(r, ht) ? l.replace(l.includes(FMr) ? FMr : PWo, () => T) : l, inputSchema: E(f, [...t ? H$e : [], ...Cw(r).supported ? [Lr] : []]), outputSchema: void 0 };
  }));
  if (!t) return m();
  let a = wp();
  if (a.backgroundTasksDisabled && a.unsandboxedCommandsDisabled && !a.backgroundShellsKeptElsewhere) return m();
  for (let r of p) r.inputSchema;
  return HZs(wJr(), m);
}
function wJr(e = new Pzr()) {
  return e.disableBackgroundTasks(), e.disableUnsandboxedCommands(), e;
}
export {
  H$e,
  M$e,
  Mie,
  Xit,
  fas,
  o4e,
  wJr
};
