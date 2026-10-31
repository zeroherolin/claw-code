// agents/skill-scoped-variant-note.arqv.js — Claude Code 2.1.310 模块 chunk-arqvtqrw.js
import { Br } from "../shared/chunk-9sbknd2z.js";
import { tt, no, ye, J, Ol } from "../context/not-admin-owned.ersa.js";
import { Ye, $s } from "../telemetry/anthropic-workspace-id.36ys.js";
import { Rp } from "../fs/node-modules.gp4v.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { g, p } from "../telemetry/chunk-wn8xtaqg.js";
import { FK, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { re } from "../shared/chunk-j79dwkaq.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { La, cI, af, Wnt, Hj } from "../settings/global-config-and-gates.27xj.js";
import { bCe } from "../context/team-memory-sync.0s3j.js";
import { Gx } from "./in-process-teammate.5te1.js";
import { hr } from "../git/utf-8.vh7e.js";
import { Y_ } from "../shared/chunk-z6efcye4.js";
import { Qt } from "../settings/workflow-launch-exec.t4r2.js";
import { iWn, LDt, FN, mge, m2, Al, FXe, qje, j9, zmt, Dle, jTo, x0, mf, Oe, Bl, AIo, W7e, G7e } from "../core/conversation-engine.31gx.js";
import { mr } from "../workflows/chunk-0c6r1zf7.js";
import { ud } from "../settings/built-in.5fzv.js";
import { ur, fNe, $i } from "../permissions/turn-abort.yvwf.js";
import { Rt } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { To, ae, Hc } from "../permissions/max-thinking-tokens.hx3h.js";
import { hf } from "../fs/unadoptable-session-id.vxq1.js";
import { pht, FD } from "../git/bridge-child-tool-diff.m7a8.js";
import { QB } from "../git/config-unreadable.hb66.js";
import { Fk } from "../telemetry/chunk-g4p4nksy.js";
import { w_t } from "../permissions/subagent-output-flagged.c14m.js";
import { qR, pte } from "./agent-summary-skipped.fggh.js";
import { QEs } from "../vendor/marked/absent-but-marked.58ak.js";
import { DIe } from "../shared/chunk-55zn3q0t.js";
import { us } from "./in-process-teammate.e4p6.js";
import { hoe } from "../shared/chunk-tndwavj2.js";
import { dirname as V, resolve as W } from "path";
var H = 100;
async function O(o) {
  if (mr("skills") || !Qt("projectSettings") || ud("skills") || no() !== null || J()) return [];
  let r = hr(o);
  if (r === null) return [];
  let n = await QB(r);
  if (!n.ok) return [];
  let i = await FXe(r, [...n.args, "status", "--porcelain", "-z", Y_, "--untracked-files=normal"]);
  if (!i.ok) return [];
  let m = i.stdout.split("\0"), s = /* @__PURE__ */ new Map();
  for (let e = 0; e < m.length; e++) {
    let d = m[e] ?? "";
    if (d.length < 4) continue;
    let c = [d.slice(3)];
    if (/[RC]/.test(d.slice(0, 2))) e++, c.push(m[e] ?? "");
    for (let u of c) {
      let f = W(r, u);
      if (u !== "" && f !== r && s.size < H && Rp(r, f, { alreadyComparable: true })) s.set(V(f), f);
    }
  }
  return [...s.values()];
}
function Npo(o, r, n) {
  return o.filter((i) => i.type === "prompt" && LDt(i, r) && mge(i) && FK(i.name) && !(i.context === "fork" && n !== void 0 && FN(i) === n));
}
async function HJt(o, r, n) {
  if (o.type !== "prompt" || o.unqualifiedName != null) return null;
  if (r !== null && n.session !== void 0 && bCe(o.name) !== null) try {
    let s = await O(r);
    if (s.length > 0) await W7e(await AIo(n.session.host, s, r, n.storageV5));
  } catch (s) {
    if ($s(s)) t(`[skills] Changed files not searched for nested skills: ${s}`);
    else l(s);
  }
  if (G7e().length === 0 && Ol().length === 0) return null;
  if (!n.options.tools.some((s) => Rt(s, To))) return null;
  let i = Npo(await mf(r, n.storageV5), o.name, n.options.spawnedBySkill);
  if (i.length === 0) return null;
  let m = i.map((s) => {
    let e = s.name.slice(0, s.name.length - o.name.length - 1);
    return `- \`${s.name}\` — for files under ${e}/`;
  });
  return a("tengu_skill_scoped_variant_note", { variant_count: i.length }), Oe({ content: Bl([`Directory-scoped variants of the "${o.name}" skill exist in this repo:`, ...m, `The bare name always resolves to this unscoped skill; the variants are reachable only by their exact qualified names. If the files you are working on are under a variant's directory, invoke that variant now with the ${To} tool and follow it instead — it carries that subtree's own instructions. If your changes span more than one variant's directory, run each matching variant.`].join(`
`)), isMeta: true });
}
function lLn(o, r, n) {
  if (n || r.spawnedByWorkflowRunId !== void 0 || hoe() || ye()) return false;
  return o.background ?? true;
}
async function dLn({ agentId: o, agentDefinition: r, command: n, description: i, prompt: m, promptMessages: s, context: e, canUseTool: d, getAppState: c, permissionLayers: u, readFileState: f, availableTools: A, webFetchReadmissionAllowed: S, spawnedBySkill: y, recordInvocationOnSuccess: T, frozenCommandDenies: v }) {
  let { taskRegistry: h } = e, E = Date.now(), w = i.length > 50 ? re(i, 49) + "…" : i, C = af(e.agentContext) + 1, _ = m2(r.model, Hc(e), n.model, ae(e).mode), M = () => {
    if (e.abortController.signal.aborted) {
      if ($i(e.abortController.signal.reason) !== "interrupt") throw new Ye();
    }
    for (let k of Object.values(h.all())) if (k.type === "local_agent" && !us(k.status) && k.forkedSkillName === n.name) return p("subagent_launch", "forked_skill_live_duplicate"), true;
    return false;
  };
  if (M()) return null;
  let L = Fk();
  if (C > L) return p("subagent_launch", "forked_skill_depth_cap"), null;
  let D = { skillName: n.name, attributionName: y, ...r.effort !== void 0 && { effort: r.effort }, ...v !== void 0 && v.length > 0 && { frozenCommandDenies: [...v] } };
  if (!iWn().safeParse(D).success) return p("subagent_launch", "forked_skill_scoping_unpersistable"), null;
  try {
    await QEs(Br(o), D, e.storageV5);
  } catch (k) {
    return G(k), p("subagent_launch", "forked_skill_scoping_write_failed"), null;
  }
  if (M()) return null;
  let I = j9(e.agentId, h) ?? tt(), R = zmt(e, I), N = Dle({ outputFileReadable: x0(e.options.tools), ownerCanContinueAgents: R, agentId: o, ownerAgentId: I, parentAgentId: e.agentId, spawnDepth: C, description: w, prompt: m, model: _, selectedAgent: r, taskRegistry: h, toolUseId: e.toolUseId, forkedSkillName: n.name, sessionScratch: e.session.sessionScratch }), B = N.abortController, b = e.agentLifecycle.allocateName(n.name);
  e.agentLifecycle.registerName(b, Br(o)), FD(j9(e.agentId, h), `agent:${o}`, h);
  let F = { agentId: o, parentAgentId: e.agentId, depth: C, ...Wnt(e) && { spawnedByMainThread: true }, parentSessionId: Gx(), agentType: "subagent", subagentName: r.agentType, isBuiltIn: Al(r), displayName: b, isAsync: true, isBackgroundAgent: true, invocationKind: "spawn", invocationEmitted: false, ...Hj(e.agentContext) }, P = { prompt: m, resolvedAgentModel: _, isBuiltInAgent: Al(r), startTime: E, agentType: r.agentType, isAsync: true, agentDepth: C, callerCanContinueAgents: R, source: r.source };
  return cI(F, () => pte({ taskId: N.agentId, abortController: B, makeStream: (k, U, j) => qR({ agentDefinition: r, promptMessages: s, turnPrompt: m, toolUseContext: { ...e, getAppState: c, permissionLayers: u }, canUseTool: d, isAsync: true, querySource: "agent:custom", spawnedBySkill: y, spawnedByForkedSkill: true, model: n.model, onModelRestricted: DIe(y, e.appendSystemMessage), availableTools: A, webFetchReadmissionAllowed: S, override: { agentId: Br(o), agentContext: F, abortController: B, readFileState: f }, onCacheSafeParams: k, onQueryProgress: U, onStreamTokenEstimate: j, description: w, name: b }), metadata: { ...P, agentContext: F }, description: w, toolUseContext: e, taskRegistry: h, agentIdForCleanup: o, enableSummarization: true, getWorktreeResult: async () => ({}), onTerminalSuccess: T })), g("subagent_launch"), { agentId: o, name: b };
}
function G(o) {
  t(`Failed to write forked-skill scoping sidecar: ${o}`);
}
function cLn({ agentId: o, parentAgentId: r, spawnDepth: n, skillName: i, prompt: m, selectedAgent: s, taskRegistry: e, toolUseId: d, callerAbortController: c }) {
  if (!w_t()) return { abortController: c, remove() {
  } };
  let u = ur(), f = fNe(c, u), A = pht(o, u);
  qje(o);
  let S = `/${i}`, y = jTo({ agentId: o, ownerAgentId: j9(r, e) ?? tt(), parentAgentId: r, spawnDepth: n, description: S, prompt: m, selectedAgent: s, toolUseId: d, abortController: u, forkWorker: true });
  return e.register(y), { abortController: u, remove(T) {
    f(), A(), e.remove(o), hf(o), La(o, u.signal.aborted ? "stopped" : T, { toolUseId: d, summary: S, outputFile: y.outputFile, skipTranscript: true, ambient: true });
  } };
}
export {
  HJt,
  Npo,
  cLn,
  dLn,
  lLn
};
