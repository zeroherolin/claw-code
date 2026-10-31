// darwin/tools/agent-tool.js — Claude Code 2.1.310（darwin）模块 chunk-vxxp3ek4.js
import { wt, zn, La, ZU, yS, bE, Ft, Lh, foi, moi, Nw, cI, Ts, af, Wnt, Mj, Hj, Hrr, k, Wn } from "../settings/global-config-and-gates.js";
import { Br, T_ } from "../shared/chunk-3b9c376b.js";
import { L, tt, Tit, ye, $be, J } from "../context/not-admin-owned.js";
import { S, c, ce, hfe, yfe } from "../agents/third-party.js";
import { Ye, N, d } from "../telemetry/anthropic-workspace-id.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { I } from "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { Gkn, A1, pe } from "../shared/async-hooks.5238.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { aa, Hdi, y1, qdi, mc } from "../shell/invalid-type.js";
import { Ls } from "../mcp/allowed-warning.js";
import { gqt, Nse } from "../auth/profile-explicit.js";
import { $i } from "../permissions/turn-abort.js";
import { xii } from "../fs/reply-across-default-dirs.js";
import { Lo } from "../agents/chunk-44729602.js";
import { Bbn, PL } from "../artifacts/cobalt-plinth-lovage.js";
import { sy, gM } from "../agents/session-stable-address.js";
import { Gx, yM } from "../agents/in-process-teammate.32be.js";
import { Yde, NGe, RHe, lZe, H9n } from "../permissions/subagent-output-flagged.js";
import { ht, b7s, w7s, E7s, oH, dp, nwt, y2t, aQn } from "../agents/chunk-5531d42a.js";
import { tn } from "../context/tool-result-clearing-after-idle-server-report.js";
import { Bm, K7s, tA } from "../models/ccr-unsupported-default-mode-ignored.js";
import { ae, Hc } from "../permissions/max-thinking-tokens.js";
import { Gve, zve, EB, AP, NN, Gxr, m2, m0s, PXe, w2n, Jq, Kxr, tPr, aMe, D2n, z2n, Tle, cmt, O6, gCo, hCo, yCo, M6, Ale, Al, yke, IPr, uMe, uHs, mMe, bke, $je, wke, BLt, W7, T0, Imt, VXe, KXe, Hge, BT, jN, R0, kIr, Umt, VGn, j9, zmt, NTo, Ake, jT, SO, Dle, UDs, QXe, BDs, jDs, Don, qmt, Yje, Lon, tOr, Non, t7e, tWe, Nle, Fle, Won, PP, Xon, s3, EAo, xOr, Rb, V9, x0, gWe, LMr, yWe, YNs, XNs, JNs, QNs, ZNs, eFs, nn, s0r, JN, she, I0, Oe, fm, $o } from "../core/conversation-engine.js";
import { GSt } from "../context/org-memory-writes-setting-changed.js";
import { H9s } from "../permissions/frontmatter-grant-withheld.js";
import { Tce } from "../permissions/bot-protected-tengu-atomic-magpie.js";
import { YA, R3 } from "../plugins/plugin-enabled-for-session.js";
import { tF } from "../context/team-memory-sync.js";
import { Li } from "../core/system-prompt-blocks.js";
import { Ss } from "../telemetry/chunk-cb9c99f9.js";
import { R1r, x1r, Zde, CZe } from "../shared/chunk-7a8599f4.js";
import { Ou } from "../fs/unadoptable-session-id.js";
import { MCe, Iv, lE } from "../agents/web-fetch.js";
import { Cn, FD } from "../git/bridge-child-tool-diff.js";
import { Qhe } from "../telemetry/binary-content-persisted.js";
import { GQs } from "../shared/session-activity-parked-exceeds-refcount.js";
import { kGe, l_t } from "../shared/general-purpose.js";
import { Fk } from "../telemetry/chunk-04e1acdf.js";
import { ute, TLn, y1e, qR, Vwr, wfo, bP, _vs, ILn, qwr, $Ot, bvs, pte } from "../agents/agent-summary-skipped.js";
import { hLn, KEs, Iwr, Owr, yLn } from "./subagent-handback-tool.js";
import { C8e } from "../agents/chunk-7e8c5e89.js";
import { xdt } from "../telemetry/chunk-e97d3e34.js";
import { uSr } from "../agents/built-in.357a.js";
import { MDn } from "../permissions/chunk-c11c0346.js";
import { HIe } from "../shared/chunk-cd359435.js";
import { Pae } from "../shared/repl-main-thread.js";
import { MFn, hTs, g7, Rut, DFn } from "../agents/observer-subagent-fanout.js";
import { O8e } from "../shared/chunk-e15722dd.js";
import { Pv } from "../shared/chunk-2c491c49.js";
import { Zh, BQe } from "../mcp/chunk-a5cd39f7.js";
import { Q_t } from "../workflows/workflow-remote-agent.js";
import { qn, YJn } from "../web/allow-web-fetch.js";
import { Ia } from "../agents/chunk-f334f2d3.js";
import { Dy } from "../shared/chunk-b09058c6.js";
import { eEt, hoe, tEt, ryn } from "../shared/chunk-e9fc3352.js";
import { qe } from "../shared/allow-large.js";
import { Mn } from "../shared/ccd-session-mgmt.js";
import { D } from "../shared/chunk-7027e6d5.js";
import { o, M, C, u, Fe, B, T } from "../vendor/zod/string-format.js";
import { realpath as No } from "fs/promises";
function An(n, e, p) {
  if (e === void 0) return;
  let h = n?.message?.content;
  if (!Array.isArray(h)) return;
  return h.some((w) => D(w) && w.type === "tool_use" && w.id === e && D(w.input) && (w.input.run_in_background === true || p && w.input.run_in_background !== false)) ? e : void 0;
}
function Sn(n) {
  let e = Boolean(i.CLAUDE_CODE_REMOTE), p = J(), h = !e && yWe(), _ = n ? "(--restricted)" : "(no claude.ai login or feature gate off)", w = e ? "(already inside a CCR session); running as a local agent" : p ? "(the session has no disk); running as a local agent" : h ? `${_}; falling back to isolation:'worktree'` : `${_} and no git root; running as a local agent`;
  return t(`[remote agent] isolation:'remote' is unavailable ${w}`), h ? "worktree" : void 0;
}
var xt = (n, e) => ({ ...n, prompt: e.prompt, description: e.description, subagent_type: e.subagentType, model: e.model, run_in_background: e.background, cwd: e.cwd });
function vn(n) {
  let { agent: e, isolation: p, restricted: h } = n, _ = p ?? e.isolation;
  if (_ !== void 0 && lE(e)) {
    t(`[web-fetch agent] isolation:'${_}' ignored; the built-in web-fetch agent always runs as a local agent`);
    return;
  }
  return _ === "remote" && (!LMr() || h) ? Sn(h) : _;
}
function In(n, e) {
  let p = n?.decisionReason, h = e.decisionReason;
  if (p?.type !== "rule" || h?.type !== "rule") return false;
  let [_, w] = [p.rule, h.rule];
  return _.source === w.source && _.ruleBehavior === w.ruleBehavior && _.ruleValue.toolName === w.ruleValue.toolName && _.ruleValue.ruleContent === w.ruleValue.ruleContent;
}
var fo = true;
var yo = false;
function bo(n) {
  let { agent: e, wantsBackground: p, callerIsInProcessTeammate: h } = n, _ = h || n.callerIsHeadlessSubagent, w = n.isCoordinator && !h || n.forceAsync || !_ && p !== false, j = vn(n), v = p === true || e.background === true || !lE(e) && w, fe = j === "remote";
  return { effectiveIsolation: j, isRemoteLaunch: fe, shouldRunAsync: fe || v && !n.backgroundTasksDisabled };
}
var Rn = (n) => L(n.flatMap((e) => BQe(e) ?? []));
function En(n, e) {
  let p = Rn(e).map((h) => h.toLowerCase());
  return (n.requiredMcpServers ?? []).filter((h) => !p.some((_) => _.includes(h.toLowerCase())));
}
var Dn = (n, e) => `Agent '${n}', named by a plugin's agent.spawn hook, requires MCP servers matching: ${e.join(", ")}; none has tools yet. Use /mcp to configure and authenticate them.`;
import { isDeepStrictEqual as So } from "util";
async function On(n) {
  let { tool: e, raised: p, rewritten: h, context: _ } = n;
  if (So(p, h)) return null;
  let w = await BT(e, h, _);
  if (w === null || w.behavior === "deny") return w;
  return In(await BT(e, p, _), w) ? null : w;
}
var Pn = { deny: "denies", ask: "asks about" };
class Me {
  #e = /* @__PURE__ */ new Map();
  #t;
  #n;
  constructor(n = 2048, e = 6e5) {
    this.#t = n, this.#n = e;
  }
  static key(n, e) {
    return JSON.stringify([n, ...e]);
  }
  static #o(n) {
    return `${JSON.stringify([n]).slice(0, -1)},`;
  }
  get size() {
    return this.#e.size;
  }
  set(n, e, p) {
    if (this.dropToolUse(n), this.#e.size >= this.#t) {
      let h = Date.now();
      for (let [_, w] of this.#e) if (h - w.at > this.#n) this.#e.delete(_);
      if (this.#e.size >= this.#t) {
        let _ = this.#e.keys().next().value;
        if (_ !== void 0) this.#e.delete(_);
      }
    }
    this.#e.set(Me.key(n, e), { value: p, at: Date.now() });
  }
  take(n, e) {
    let p = Me.key(n, e), h = this.#e.get(p);
    return this.#e.delete(p), h?.value;
  }
  has(n, e) {
    return this.#e.has(Me.key(n, e));
  }
  dropToolUse(n) {
    let e = Me.#o(n);
    for (let p of this.#e.keys()) if (p.startsWith(e)) this.#e.delete(p);
  }
}
var gt = "dontAsk", Eo = 8, Mo = new RegExp(gqt.source, "gi");
class Gt extends Me {
}
async function Do({ prompt: n, subagent_type: e }, p) {
  let h = ae(p), _ = h.mode;
  if (!Ls(_) || y1(gt, _) !== gt || !V9(e, p.options.agentDefinitions.activeAgents) || typeof n !== "string" || Imt() || Jq() || BLt(qn, _, h)) return false;
  let w = new Set([...n.matchAll(Mo)].map((j) => Nse(j[0])));
  if (w.size === 0 || w.size > Eo) return false;
  for (let j of w) {
    let v = Rb.inputSchema.safeParse({ url: j, prompt: "" });
    if (!v.success || await BT(Rb, v.data, p) !== null || (await Rb.checkPermissions(v.data, p)).behavior !== "allow") return false;
  }
  return true;
}
async function Fn({ input: n, toolUseContext: e }) {
  if (!await Do(n, e)) return false;
  return Oo(e), true;
}
function Oo({ toolUseId: n, toolState: e }) {
  if (n === void 0) return;
  e.get(Gt).set(n, [], true);
}
function Ht({ toolUseId: n, toolState: e }) {
  return n !== void 0 && e.get(Gt).take(n, []) === true;
}
function Bn(n, e) {
  if (n === null || typeof n !== "object" || e === null || typeof e !== "object" || e.status === "remote_launched") return e;
  let p = false;
  switch (n.status) {
    case "completed":
    case "async_launched":
      p = n.canContinueAgent;
      break;
    case "remote_launched":
      break;
  }
  return { ...e, canContinueAgent: p === false || e.canContinueAgent === false ? false : p };
}
var Po = { none: "Each fresh agent you launch has a budget of {N} tokens, counting the context it starts with.", forks: "Each agent you launch has a budget of {N} tokens. For a fork, the budget does not count the context it starts with.", all: "Each agent you launch has a budget of {N} tokens. The budget does not count the context the agent starts with: its system prompt, its tools, and your prompt to it." };
function Ln(n) {
  if (Ia() || ZU(n)) return;
  let e = Lo();
  if (e.subagentBudgetNote === void 0) e.subagentBudgetNote = Co();
  return e.subagentBudgetNote ?? void 0;
}
function Co() {
  if (Don("tengu_streamed_bumblebee", i.CLAUDE_CODE_STREAMED_BUMBLEBEE) !== true) return null;
  let n = qmt(Owr(Tit()), void 0);
  if (n === void 0) return null;
  let e = Don("tengu_streamed_bumblebee_text", i.CLAUDE_CODE_STREAMED_BUMBLEBEE_TEXT), p = typeof e === "string" && e.trim() !== "", h = p ? e.trim() : Po[Yje()];
  return a("tengu_streamed_bumblebee_applied", { budget: n, isConfiguredWording: p }), h.replaceAll("{N}", n.toLocaleString("en-US"));
}
function Sio(n, e) {
  if (!n || n === M6.agentType) return;
  if (n !== O8e) return n;
  let p = e?.find((h) => h.agentType === O8e);
  return p !== void 0 && p.source !== "built-in" ? n : void 0;
}
function Gyr(n, { activeAgents: e, webFetchByAgentType: p = false } = {}) {
  if (!p && V9(n?.subagent_type, e)) return YJn;
  return Sio(n?.subagent_type, e) ?? "Agent";
}
function zyr(n, { activeAgents: e } = {}) {
  if (!n?.subagent_type || V9(n.subagent_type, e)) return;
  return kGe(n.subagent_type);
}
class oe extends Error {
  constructor(n) {
    super(n);
    this.name = "AgentTypeError";
  }
}
class mt extends Error {
  constructor(n) {
    super(n);
    this.name = "RemoteAgentPreconditionError";
  }
}
var Fo = 'Cannot launch cloud agent: this session limits what your own Claude Code files can do (CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG), and a cloud session would not apply those limits. Set isolation to "worktree" instead.';
class W extends Error {
  constructor(n) {
    super(n);
    this.name = "AgentPreconditionError";
  }
}
async function jn(n, e) {
  let p = await KEs(n);
  if (p !== void 0) throw m("subagent_launch", "subagent_cwd_refused"), new W(e === "the call" ? `Cannot run the agent in another directory: ${p}. Start it without cwd.` : `A plugin's agent.spawn hook set cwd on this spawn: ${p}.`);
}
var Bo = 2e3;
function zo() {
  if (i.CLAUDE_AUTO_BACKGROUND_TASKS) return 12e4;
  return 0;
}
var Wo = f(() => u({ description: o().describe(w7s), prompt: o().describe(b7s), subagent_type: o().optional().describe("The type of specialized agent to use for this task"), model: B(["sonnet", "opus", "haiku", "fable"]).optional().describe(`Optional model override for this agent. Takes precedence over the agent definition's model frontmatter and the configured default subagent model. If omitted, uses the agent definition's model, else the default (inherits from the parent unless a default subagent model is configured). Ignored for subagent_type: "fork" — forks always inherit the parent model.` + (Ia() ? i.CLAUDE_CODE_COORDINATOR_FORCE_WORKER_INHERIT_MODEL ? " Unavailable on this session: this parameter is ignored — do not set it." : " Set this only when EXPLICITLY asked by the user for a specific model, never because the task seems small, simple, or cheap; otherwise omit it so the worker uses the default (the session model, unless a default subagent model is configured)." : "")), effort: B(aa).optional().describe("Reasoning effort for this agent. Set this ONLY when the user, or instructions such as CLAUDE.md or a skill, explicitly ask that this agent or delegated work run at a specific effort level, never on your own judgment; otherwise omit it and the agent runs at its usual effort." + (Tle() ? ' Ignored for subagent_type: "fork": a fork runs at your own effort.' : "")), run_in_background: M().optional().describe("Agents run in the background by default; you will be notified when one completes. Set to false only when your very next action depends on this agent's result and nothing else could usefully happen while it runs — otherwise leave it in the background so the user can hand you other work.") })), jo = f(() => {
  let n = u({ name: o().regex(xii, { message: "name must start with a letter or digit and contain only letters, digits, underscores, or hyphens (max 64 chars)" }).refine((e) => e !== sy, { message: `"${sy}" is reserved — SendMessage routes it to the main conversation` }).refine((e) => !gM(e), { message: 'name must not be a reserved name ("main", "team-lead", "user" or "system", in any spelling) or have the shape of an agent id — those already address an agent directly' }).optional().describe(E7s), team_name: o().optional().describe("Deprecated; ignored. The session has a single implicit team."), mode: Hdi().optional().describe("Deprecated; ignored. Subagents inherit the parent session's permission mode; agent-definition frontmatter may override it.") });
  return Wo().merge(n).extend({ isolation: B(["worktree", "remote"]).optional().describe('Isolation mode. "worktree" creates a temporary git worktree so the agent works on an isolated copy of the repo. "remote" launches the agent in a remote cloud environment (always runs in background; availability is gated).'), cwd: o().optional().describe('Absolute path to run the agent in. Overrides the working directory for all filesystem and shell operations within this agent. Mutually exclusive with isolation: "worktree".') });
}), Vn = f(() => {
  let n = jo().omit({ cwd: true }), e = eEt() || cmt(), p = e || ryn() ? void 0 : Umt()?.parameterDescription, h = e ? n.omit({ run_in_background: true }) : p === void 0 ? n : n.extend({ run_in_background: M().optional().describe(p) }), _ = i.CLAUDE_CODE_SUBAGENT_MODEL_FORCE ? h.omit({ model: true }) : h;
  return tA() !== void 0 ? _.omit({ effort: true }) : _;
}), xo = f(() => Vn().extend({ effort: B([...m0s, ...aa]).optional().describe('Reasoning effort for this agent. "lower" or "higher" is one step from the effort the agent would otherwise run at (normally yours), on whatever model it would otherwise use. Pass "lower" when the brief is mechanical and checkable against itself — bounded search, grep-and-report, a pattern you spelled out. Pass "higher" when one well-specified piece needs more reasoning than the work around it. Omit when neither clearly applies. Name a level (' + aa.join(", ") + ') ONLY when the user, or instructions such as CLAUDE.md or a skill, explicitly ask for that level. "lower" and "higher" are ignored for subagent_type: "fork", isolation: "remote", and teammates.') }));
function bio() {
  return PXe() ? xo() : Vn();
}
var Go = f(() => _vs().extend({ status: T("completed"), prompt: o(), worktreePath: o().optional(), worktreeBranch: o().optional(), canContinueAgent: Xn() })), Ho = f(() => {
  let n = Go(), e = u({ status: T("async_launched"), isAsync: T(true).optional(), agentId: o().describe("The ID of the async agent"), description: o().describe("The description of the task"), resolvedModel: o().optional().describe("Model in use at the backgrounding transition (a pre-background swap is reflected here)"), modelsUsed: C(o()).optional().describe("Ordered distinct models used before backgrounding (length > 1 means a mid-run swap)"), prompt: o().describe("The prompt for the agent"), outputFile: o().describe("Path to the output file for checking agent progress"), canReadOutputFile: M().optional().describe("Whether the calling agent has Read/Bash tools to check progress"), canContinueAgent: Xn(), sharesCwd: M().optional().describe("@internal True when this unisolated write-capable agent was launched into a working directory where another one is already running and a worktree could have been made here (drives a model-facing note; not a stable consumer field)") }), p = u({ status: T("remote_launched"), taskId: o().describe("The ID of the remote agent task"), sessionUrl: o().describe("The URL of the cloud session"), description: o().describe("The description of the task"), prompt: o().describe("The prompt for the agent"), outputFile: o().describe("Path to the output file for checking agent progress") });
  return Fe([n, e, p]);
});
async function qo({ agentInput: n, toolUseContext: e, canUseTool: p, assistantMessage: h, onProgress: _, timing: w, enclosingToolUseId: j }) {
  let { subagent_type: v, run_in_background: fe, name: F, isolation: De } = n, { prompt: ft, description: Jn, cwd: yt, effort: Pe } = n, Xe = n.model, _t = PXe() && (Pe === "lower" || Pe === "higher") ? Pe : void 0, Je = Pe === "lower" || Pe === "higher" ? void 0 : Pe, Qn = Date.now();
  if (Ia() && i.CLAUDE_CODE_COORDINATOR_FORCE_WORKER_INHERIT_MODEL) Xe = void 0;
  let Qe = Xe, q = ft, x = Jn, re = yt;
  await jn(re, "the call");
  let qt = af(e.agentContext), Vt = Fk();
  if (qt >= Vt) throw m("subagent_launch", "subagent_depth_cap"), C8e.of(e.session).recordRefused("depth_limit"), new W(`Subagent nesting limit reached (depth ${qt} of ${Vt}). Complete this task directly using your tools instead of spawning another agent. If the user explicitly requested deeper nesting, ask them to raise CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH.`);
  if (e.agentId !== void 0 && EB(e.agentId)) throw m("subagent_launch", "subagent_spawner_stop_pending"), new W("This agent has been stopped and its stop is still completing; it cannot launch new agents.");
  x = x.replace(/\s+/g, " ").trim();
  let Ce = e.getAppState(), ie = ae(e), Ne = ie.mode, { taskRegistry: K } = e, Zn = Ss() ? Ce.teamContext : void 0, Se = !!e.teammateContext;
  if ((Se || !!yM()) && F && !R0()) throw m("subagent_launch", "subagent_nested_teammate"), new W("Teammates cannot spawn other teammates — the team roster is flat. To spawn a subagent instead, omit the `name` parameter.");
  if (Se && fe === true) throw m("subagent_launch", "subagent_teammate_background_denied"), new W("In-process teammates cannot spawn background agents. Use run_in_background=false for synchronous subagents.");
  let { activeAgents: ge, allowedAgentTypes: ve } = e.options.agentDefinitions, bt = v !== void 0 && MCe(v) === oH, { available: Yt, denyRule: Kt } = Yn(ge, ve, ie);
  if (bt && Kt) throw m("subagent_launch", "subagent_type_denied"), new oe(`Agent type '${oH}' has been denied by permission rule '${ht}(${oH})' from ${Kt.source}.`);
  let V = bt && Yt;
  if (v !== void 0 && !bt) {
    let r = Tce(ie, ht, v);
    if (r) throw m("subagent_launch", "subagent_type_denied"), new oe(`Agent type '${v}' has been denied by permission rule '${ht}(${v})' from ${r.source}.`);
    if (ve && !ve.includes(v)) {
      m("subagent_launch", "subagent_type_not_found");
      let y = (await Hge(ge, ve, ie, e)).map((A) => A.agentType);
      throw new oe(`Agent type '${v}' not found. Available agents: ${pt(y)}`);
    }
  }
  let kt = (r = false) => {
    if (e.abortController.signal.aborted) {
      let A = $i(e.abortController.signal.reason);
      if (!(r && A === "interrupt")) throw new Ye();
    }
    let { maxBudgetUsd: y } = e.options;
    if (JN(y)) throw m("subagent_launch", "subagent_budget_exhausted"), C8e.of(e.session).recordRefused("budget"), new W(`Budget limit reached ($${zve().toFixed(2)} spent of the $${y} maximum). New agents cannot be started. Complete the remaining work directly with your tools, or wrap up with the results you already have.`);
  }, Un = async () => {
    let r = xn(e);
    if (r) throw await ze(), r;
    return e.taskRegistry.takeConcurrencySlot();
  };
  if (Zn && F && !V && !V9(v, ge) && !De && !re && !R0()) {
    let r = await Hge(ge, ve, ie, e), y = v ? Hn(ge, r, v) : void 0;
    if (y && y.agentType !== v) {
      let de = Tce(ie, ht, y.agentType);
      if (de) throw m("subagent_launch", "subagent_type_denied"), new oe(`Agent type '${y.agentType}' has been denied by permission rule '${ht}(${y.agentType})' from ${de.source}.`);
    }
    let A = y ?? (v ? Hn(ge, ge, v) : void 0);
    if (!(A === void 0 || (await Kxr([A], e)).length === 1)) throw m("subagent_launch", "subagent_teammate_not_offered"), new oe(`Agent type '${v}' is not offered in this session.`);
    let E = y ? await Ale(y) : void 0;
    if (y && !E) throw m("subagent_launch", "subagent_plugin_load_failed"), new oe(`Agent type '${y.agentType}' could not be loaded from its plugin.`);
    kt(yo);
    let O = Hc(e), P = E ?? uSr(v), R = await Iwr({ tool_use_id: e.toolUseId ?? "", prompt: q, description: x, agent: P, agents: r, model: Xe, parentModel: O, parentAgentId: e.agentId, permissionMode: Ne, background: true, fork: false, isTeammate: true, name: F, cwd: void 0, signal: e.abortController.signal, origin: e.hookOrigin });
    using z = R.starting;
    if (R.deny !== void 0) throw m("subagent_launch", "subagent_spawn_denied_by_hook"), new W(`Subagent spawn denied by a plugin: ${R.deny}`);
    xOr({ toolUseContext: e }, R.isRewritten);
    let Q = R.spawn, Z = await On({ tool: dXt, raised: xt(n, { prompt: q, description: x, subagentType: P.agentType, model: Xe, background: true, cwd: void 0 }), rewritten: xt(n, Q), context: e });
    if (Z) throw m("subagent_launch", "subagent_spawn_hook_rewrite_ruled"), new W(`A plugin's agent.spawn hook rewrote this spawn into one a permission rule ${Pn[Z.behavior]}: ${Z.message} Dispatch it directly.`);
    let H = r.find((de) => de === R.agent && de !== P);
    if (V9(H?.agentType, ge)) throw m("subagent_launch", "subagent_spawn_hook_teammate_rewrite"), new W(`A plugin's agent.spawn hook retyped a teammate into '${H?.agentType}', which does not run as a teammate.`);
    if (H) {
      if (E = await Ale(H), !E) throw m("subagent_launch", "subagent_plugin_load_failed"), new oe(`Agent type '${H.agentType}' could not be loaded from its plugin.`);
      let de = En(E, [...e.getAppState().mcp.tools, ...e.options.tools.filter(Zh)]);
      if (de.length > 0) throw m("subagent_launch", "subagent_mcp_required_missing"), PL(new W(Dn(E.agentType, de)), { kind: "mcp_required_missing", servers: de });
    }
    q = Q.prompt, x = Q.description.replace(/\s+/g, " ").trim();
    let _e = Q.model, Ee = E?.agentType ?? v;
    if (kt(fo), E?.color) l_t(H ? E.agentType : v ?? E.agentType, E.color);
    let { spawnTeammate: zt } = import.meta.require("../agents/spawn-teammate.js"), ue = await zt({ name: F, prompt: q, description: x, use_splitpane: true, plan_mode_required: Ne === "plan", model: _e ?? Vo(E, Hc(e)), modelSource: _e ? "tool" : "frontmatter", agent_type: Ee, agentDefinition: E, invokingRequestId: h?.requestId }, e, _), dt = { status: "teammate_spawned", prompt: q, agentId: ue.data.agent_id, resolvedModel: Ft(ue.data.model ?? O), ...ue.data }, lt = ue.loopAgentId ?? ue.data.teammate_id;
    return EAo(lt, e), z?.started({ agentId: lt, model: Ft(ue.data.model ?? O), teammateId: ue.data.teammate_id }), g("subagent_launch"), { data: dt };
  }
  let Xt = { isolation: De, querySource: e.options.querySource, messages: e.messages }, s, Jt = [];
  if (V) {
    let r = Gn(Xt);
    if (r) throw m("subagent_launch", r.code), new W(r.message);
    s = O6;
  } else {
    let r = await Hge(ge, ve, ie, e);
    Jt = r;
    let y = r.map((O) => O.agentType);
    if (v === void 0 && !Kn(ge, ve)) {
      a("tengu_subagent_type_miss", { requestedNormalized: S("OMITTED"), availableCount: r.length }), m("subagent_launch", "subagent_type_missing");
      let O = Yt && Gn(Xt) === null ? [oH, ...y] : y;
      throw new oe(`${aQn}. Available agents: ${pt(O)}`);
    }
    let A = v ?? M6.agentType, G = r.find((O) => O.agentType === A);
    if (!G) {
      let O = MCe(A), P = new Set(y), R = O ? ge.filter((Z) => MCe(Z.agentType) === O) : [], z = hfe(O, R.length > 0 && R.every(Al)), Q = O.length;
      if (R.length > 1) {
        a("tengu_subagent_type_miss", { requestedNormalized: z, requestedLength: Q, availableCount: r.length, ambiguousCount: R.length }), m("subagent_launch", "subagent_type_ambiguous");
        let Z = R.map((H) => H.agentType).filter((H) => P.has(H));
        throw new oe(`Agent type '${A}' is ambiguous — matches ${R.map((H) => P.has(H.agentType) ? H.agentType : `${H.agentType} (unavailable)`).join(", ")}. ${Z.length > 0 ? `Use the exact name: ${Z.join(" or ")}` : `None of these are available. Available agents: ${pt(y)}`}`);
      }
      if (R.length === 1) {
        let Z = R[0];
        if (P.has(Z.agentType)) {
          if (G = Z, G.color) l_t(A, G.color);
          a("tengu_subagent_type_normalized", { requestedNormalized: z, matched: yfe(G) });
        } else {
          let H = Z.agentType, _e = Tce(ie, ht, H);
          if (_e) throw m("subagent_launch", "subagent_type_denied"), new oe(`Agent type '${H}' has been denied by permission rule '${ht}(${H})' from ${_e.source}.`);
          if (VXe(Z, ie)) throw m("subagent_launch", "subagent_type_tools_denied"), new oe(KXe(H));
        }
      }
      if (!G) throw a("tengu_subagent_type_miss", { requestedNormalized: z, requestedLength: Q, availableCount: r.length }), m("subagent_launch", "subagent_type_not_found"), new oe(`Agent type '${A}' not found. Available agents: ${pt(y)}`);
    }
    let E = await Ale(G);
    if (E === void 0) throw m("subagent_launch", "subagent_plugin_load_failed"), new oe(`Agent type '${A}' could not be loaded from its plugin.`);
    s = E;
  }
  if (Se && s.background === true) throw m("subagent_launch", "subagent_teammate_background_denied"), new W(`In-process teammates cannot spawn background agents. Agent '${s.agentType}' has background: true in its definition.`);
  if ((De ?? s.isolation) === "worktree" && !lE(s)) {
    if (Non("agent worktree"), !yWe()) tOr();
  }
  let Qt = Ia(), Zt = Tle(), Ut = Zt && e.agentId !== void 0 && !e.innerCall && !Se && ye(), en = Zt && cmt() && !Se && !Ut, Tt = hoe(), Ie = Umt(), Ze = ryn(), on = Ie !== void 0 && (fe === true || Ze && fe !== false) && !eEt() ? An(h, e.toolUseId, Ze) : void 0, Be = Ie !== void 0 && on !== void 0 ? VGn(Ie, { toolUseId: on, callerAgentId: e.agentId, signal: e.abortController.signal }) : void 0, eo = Ie === void 0 ? Tt : Be === void 0, At = Ie === void 0 ? Tt : tEt(), rn = (r, y) => bo({ agent: r, wantsBackground: y, isolation: De, restricted: ie.restricted, isCoordinator: Qt, forceAsync: en, callerIsInProcessTeammate: Se, callerIsHeadlessSubagent: Ut, backgroundTasksDisabled: eo }), { effectiveIsolation: Ue, isRemoteLaunch: be, shouldRunAsync: U } = rn(s, fe);
  if (!be) {
    if (e.abortController.signal.aborted) {
      let y = $i(e.abortController.signal.reason);
      if (!(U && y === "interrupt")) throw new Ye();
    }
    let r = xn(e);
    if (r) throw r;
  }
  kt(U && !be);
  let et = s.requiredMcpServers, St = e.options.tools.filter(Zh), sn = () => e.getAppState().mcp, to = w?.mark("external");
  if (et?.length) {
    let r = (y) => et.some((A) => y.name.toLowerCase().includes(A.toLowerCase()));
    await x1r(sn, (y, A) => r(y) && R1r(y, A.tools), { maxWaitMs: 3e4, until: (y) => y.clients.some((A) => A.type === "failed" && r(A)) });
  }
  if (!be) await CZe(sn);
  to?.();
  let no = e.getAppState();
  if (et?.length) {
    let r = [];
    for (let y of no.mcp.tools.concat(St)) {
      let A = BQe(y);
      if (A && !r.includes(A)) r.push(A);
    }
    if (!IPr(s, r)) {
      let y = et.filter((A) => !r.some((G) => G.toLowerCase().includes(A.toLowerCase())));
      throw m("subagent_launch", "subagent_mcp_required_missing"), PL(new W(`Agent '${s.agentType}' requires MCP servers matching: ${y.join(", ")}. MCP servers with tools: ${r.length > 0 ? r.join(", ") : "none"}. Use /mcp to configure and authenticate the required MCP servers.`), { kind: "mcp_required_missing", servers: y });
    }
  }
  if (s.color) l_t(s.agentType, s.color);
  let vt = Hc(e), Re = await Iwr({ tool_use_id: e.toolUseId ?? "", prompt: q, description: x, agent: s, agents: Jt, model: V ? void 0 : Qe, parentModel: vt, parentAgentId: e.agentId, permissionMode: Ne, background: U, fork: V, name: F, cwd: re, signal: e.abortController.signal, origin: e.hookOrigin });
  using It = Re.starting;
  if (tPr(e.abortController.signal, U && !be)) throw new Ye();
  if (Re.deny !== void 0) throw m("subagent_launch", "subagent_spawn_denied_by_hook"), new W(`Subagent spawn denied by a plugin: ${Re.deny}`);
  xOr({ toolUseContext: e }, Re.isRewritten);
  let an = () => xt(n, { prompt: q, description: x, subagentType: s.agentType, model: V ? void 0 : Qe, background: U, cwd: re }), oo = an(), { spawn: ke } = Re, nt = Re.agent !== s, Rt = nt || ke.background !== U;
  if (s = Re.agent, q = ke.prompt, x = ke.description.replace(/\s+/g, " ").trim(), re = ke.cwd, re !== yt) await jn(re, "a hook");
  if (Qe = ke.model, Rt) ({ effectiveIsolation: Ue, isRemoteLaunch: be, shouldRunAsync: U } = rn(s, ke.background));
  if (nt && Ht(e)) throw m("subagent_launch", "subagent_spawn_hook_retype_unreviewed"), new W("A plugin's agent.spawn hook named another agent for a web-fetch dispatch admitted without classifier review; it cannot run unconfined. Dispatch that agent directly.");
  let Et = await On({ tool: dXt, raised: oo, rewritten: an(), context: e });
  if (Et) throw m("subagent_launch", "subagent_spawn_hook_rewrite_ruled"), new W(`A plugin's agent.spawn hook rewrote this spawn into one a permission rule ${Pn[Et.behavior]}: ${Et.message} Dispatch it directly.`);
  if (ke.cwd !== void 0 && ke.cwd !== yt && Ue === "worktree") throw m("subagent_launch", "subagent_spawn_hook_cwd_worktree"), new W(`A plugin's agent.spawn hook set cwd on a spawn isolated in a worktree; cwd and isolation: "worktree" are mutually exclusive.`);
  if (Rt && tPr(e.abortController.signal, U && !be)) throw new Ye();
  if (Rt && Se && U && !be) throw m("subagent_launch", "subagent_teammate_background_denied"), new W("In-process teammates cannot spawn background agents; a plugin's agent.spawn hook backgrounded this one.");
  let Mt = nt ? En(s, [...e.getAppState().mcp.tools, ...St]) : [];
  if (Mt.length > 0) throw m("subagent_launch", "subagent_mcp_required_missing"), PL(new W(Dn(s.agentType, Mt)), { kind: "mcp_required_missing", servers: Mt });
  let un = nt ? s.color : void 0;
  if (un) l_t(s.agentType, un);
  let xe = V ? "inherit" : Qe, ne = m2(Gve(s, vt), vt, xe, Ne);
  if (!V && Je !== void 0) s = { ...s, effort: Je };
  let Le = be ? void 0 : yLn({ agentDefinition: s, isFork: V, model: ne, effortState: e.getAppState(), inheritedLayers: e.permissionLayers, recordedBudgetText: void 0 }), ot = _t !== void 0 && !V && Le?.subagentEffort !== void 0 ? K7s(ne, Le.subagentEffort, _t === "higher" ? 1 : -1) : void 0, me = Le !== void 0 && ot !== void 0 ? { ...Le, agentDefinition: { ...Le.agentDefinition, effort: ot }, subagentEffort: ot } : Le, Dt = V ? void 0 : ot ?? Je;
  s = me?.agentDefinition ?? s;
  let Ge = yfe(s);
  e.agentLifecycle.markTypeInvoked(s.agentType);
  let ro = await GSt(s, e.storageV5), Ot = s.getSystemPrompt({ toolUseContext: e, primedAgentMemory: ro }), rt = yke(s) ? mc(s.plugin) : void 0;
  if (yke(s)) YA(s.plugin);
  let Te = af(e.agentContext) + 1;
  if (yke(s)) NN(s.plugin, "subagent", { kind: "agent", name: s.filename });
  let dn = () => (a("tengu_agent_tool_selected", { agent_type: Ge, model: wt(ne), source: c(s.source), color: ce(s.color), is_built_in_agent: Al(s), is_resume: false, is_async: U, is_fork: V, effort_param: ce(_t ?? Je), session_effort: ce(me?.sessionEffort), subagent_effort: ce(me?.subagentEffort), subagent_total_tokens_budget: me?.totalTokensBudget, subagent_budget_on_top_of_start: me?.totalTokensBudget === void 0 ? void 0 : me.isBudgetOnTopOfStart, agent_depth: Te, agent_system_prompt_chars: Ot.length, ...rt && R3(rt.name, rt.marketplace) }), C8e.of(e.session).recordSpawn({ agentType: s.agentType, runInBackground: fe, runsInBackground: U, depth: Te }));
  if (be) {
    if (Dy()) throw m("subagent_launch", "subagent_remote_personal_config"), new mt(Fo);
    let r = await mMe({ storageV5: e.storageV5, credentials: e.credentials });
    if (!r.eligible) {
      let R = r.errors.map(bke).join(`
`);
      m("subagent_launch", "subagent_remote_ineligible");
      let z = new mt(`Cannot launch cloud agent:
${R}`);
      throw r.errors.some((Q) => Q.type === "not_logged_in" && Q.message === void 0) ? PL(z, Bbn(await Lh(e.credentials))) : z;
    }
    let y, A = false, G = await jN({ initialMessage: q, source: "remote_agent", tags: [Q_t], description: x, model: ne, ...MDn(XNs({ declaredMode: s.permissionMode, narrowOnly: H9s(s), parentMode: Ne, parentModeToHand: W7(Ne, Ce.proactivityLevel, T0(ie)), model: ne }), Ce.proactivityLevel), branchName: await YNs(), signal: e.abortController.signal, onBundleFail: (R) => {
      y = R;
    }, onCreateFail: (R, z, Q) => {
      y = R, A = z === "no_access_token" || Q?.status === 401;
    }, storageV5: e.storageV5, credentials: e.credentials });
    if (!G) {
      m("subagent_launch", "subagent_remote_session_failed");
      let R = new mt(y ?? "Failed to create cloud session");
      throw A ? PL(R, Bbn(await Lh(e.credentials))) : R;
    }
    let { taskId: E, sessionId: O } = $je({ remoteTaskType: "remote-agent", session: { id: G.id, title: G.title || x }, command: q, context: e, toolUseId: e.toolUseId, permissionRelay: { canUseTool: p, toolUseContext: e, allowedToolNames: new Set(bP(s, e.options.tools, false, false, false, 0, tF(e).mode).resolvedTools.map((R) => R.name)) } });
    dn(), a("tengu_agent_tool_remote_launched", { agent_type: Ge }), g("subagent_launch");
    let P = { status: "remote_launched", taskId: E, sessionUrl: wke(O), description: x, prompt: q, outputFile: Ou(E) };
    return It?.started({ agentId: E, model: ne }), { data: P };
  }
  let Pt, Ct, Ae, st;
  if (V) {
    if (e.renderedSystemPrompt) Ct = e.renderedSystemPrompt;
    else {
      let r = Ce.agent ? Ce.agentDefinitions.activeAgents.find((A) => A.agentType === Ce.agent) : void 0, y = await PP(e.options.tools, e.options.mainLoopModel);
      Ct = s3({ mainThreadAgentDefinition: r, toolUseContext: e, customSystemPrompt: e.options.customSystemPrompt, defaultSystemPrompt: y, appendSystemPrompt: e.options.appendSystemPrompt });
    }
    Ae = hCo(q, h, j ?? e.toolUseId);
  } else {
    try {
      if (s.memory) a("tengu_agent_memory_loaded", { ...false, scope: c(s.memory), source: S("subagent") });
      Pt = await Xon([Al(s) ? aMe(Ot) : Ot], ne, me?.totalTokensBudget);
    } catch (r) {
      t(`Failed to get system prompt for agent ${s.agentType}: ${d(r)}`);
    }
    st = foi(e.messages, uHs(e)), Ae = [...st.copies, Oe({ content: q })];
  }
  let He = j9(e.agentId, K) ?? tt(), X = { prompt: q, resolvedAgentModel: ne, isBuiltInAgent: Al(s), startTime: Qn, agentType: s.agentType, isAsync: U, agentDepth: Te, source: s.source, pluginId: rt, callerCanContinueAgents: zmt(e, He), persistedToolResultFiles: lE(s) ? Qhe() : void 0 }, so = e.getAppState(), ao = e.options.toolCatalog.assembleToolPool(ie, Zde(so.mcp.tools.concat(St)), { skipReplFilter: true, machineMcpTools: HIe(e) }), ln = e.agentId ?? g7, we = s.observer ? MFn({ observedDefinition: s, activeAgents: e.options.agentDefinitions.activeAgents, observedIsObserver: false }) : hTs({ parentPairing: Rut(e.session, ln), spawnedDefinition: s, spawnedIsObserver: false }), cn = we?.inheritedArming ? { toolUseContext: we.inheritedArming.toolUseContext, canUseTool: we.inheritedArming.canUseTool, persistedArmingMode: we.inheritedArming.permissionMode, inheritedFromKey: ln, inheritedFromPairing: we.inheritedArming.parentPairing } : { toolUseContext: e, canUseTool: p }, he = T_(), $e = e.agentId, io = e.agentContext !== void 0 && e.agentContext.agentType !== "main" && (e.agentContext.isBackgroundAgent ?? false), gn = Ts(e.agentContext), pn = gWe(e.messages, e.agentContext), se = null;
  if (Ue === "worktree") {
    let r = w?.mark("external");
    if (se = await t7e(qdi(he), { storageV5: e.storageV5, credentials: e.credentials }), r?.(), se.hookBased) {
      let y = se.worktreePath;
      se.vettedRealPath = await No(y).catch((A) => {
        t(`Agent worktree ${y} could not be resolved after creation (${d(A)}); it will be kept at cleanup`, { level: "warn" });
        return;
      });
    }
    Hrr(he);
  }
  if (V && se) Ae.push(Oe({ content: yCo(pe(), se.worktreePath) }));
  let mn = ZNs({ taskRegistry: K, selectedAgent: s, effectiveIsolation: Ue, cwd: re, parentCwd: e.session.project === null ? null : pe(), parentAgentId: $e });
  if (mn) Ae.push(Oe({ content: QNs }));
  if (V && me?.totalTokensBudget !== void 0) Ae.push(nn({ type: "total_tokens_reminder", text: Lon("padded-countdown", me.totalTokensBudget) }));
  let fn = mn && yWe(), at = { agentDefinition: s, promptMessages: Ae, turnPrompt: q, toolUseContext: e, canUseTool: p, name: F, isAsync: U, handbackOptIn: !V, handbackTool: hLn, persistedToolResultFiles: X.persistedToolResultFiles, querySource: e.options.querySource ?? Pae(s.agentType, Al(s)), spawnedBySkill: e.options.spawnedBySkill ?? e.options.activeSkill, spawnedByForkedSkill: e.options.spawnedByForkedSkill, model: xe, effort: Dt, ...Ht(e) && { spawnMode: gt }, override: V ? { systemPrompt: Ct, parentSystemPrompt: true } : Pt && !se && !re ? { systemPrompt: Li(Pt) } : void 0, availableTools: V ? e.options.tools : ao, forkContextMessages: V ? e.messages : void 0, ...V && { useExactTools: true }, totalTokensReminderBudget: me?.totalTokensBudget, isTotalTokensReminderBudgetOnTopOfStart: me?.isBudgetOnTopOfStart, worktreePath: se?.worktreePath, worktreeBranch: se?.worktreeBranch, cwd: re, description: x, preserveToolUseResults: !ye(), toolUseId: e.toolUseId, ...false, onMcpServersBlocked: (r, y) => _?.({ type: "notification", notification: { key: `agent-mcp-blocked-${he}`, text: `${s.agentType} agent MCP ${I(r.length, "server")} blocked by ${y}: ${r.join(", ")}`, priority: "medium", color: "warning", timeoutMs: 1e4 } }), onModelRestricted: (r, y) => _?.({ type: "notification", notification: { key: `agent-model-restricted-${s.agentType}-${yS(r)}`, text: `${s.agentType} agent: ${bE(r, y)}`, priority: "medium", color: "warning", timeoutMs: 1e4 } }) }, Nt = re ?? se?.worktreePath, Bt = e.session.withProject({ cwd: Nt }), Lt = Bt.project, ze = async () => {
    if (!se) return {};
    let { worktreePath: r, worktreeBranch: y, headCommit: A, baseChangeset: G, sessionDir: E, gitRoot: O, hookBased: P, vettedRealPath: R } = se;
    if (se = null, P && (G === void 0 || R === void 0)) return t(`Hook-based agent worktree kept at: ${r}`), { worktreePath: r };
    if (NTo(K.get(he))) return t(`Agent worktree kept at ${r}: backgrounded owner awaits keepalive, resume pending`), { worktreePath: r, worktreeBranch: y };
    if (A || G !== void 0) {
      if (!(A ? await Won(r, A) : await tWe(r, void 0, { hookBased: true, baseChangeset: G, sessionDir: E, vettedRealPath: R }).then((Q) => Q.dirty || Q.checkoutMoved === true)) && (await Fle(r, y, O, P ?? false, "agent_tool")).outcome === "removed") return wfo({ agentId: Br(he), removedWorktreePath: r, spawnMetadata: { agentType: s.agentType, ...s.agentType === oH && { isFork: Al(s) }, ...s.agentType === Iv && { isBuiltIn: Al(s) }, ...re && { cwd: re }, description: x, ...F && { name: F }, ...e.toolUseId && { toolUseId: e.toolUseId }, spawnDepth: Te, ...Vwr(U, e.options.isNonInteractiveSession), ...xe && { model: xe }, ...Dt && { effort: Dt } }, storageV5: e.storageV5 }).catch((Q) => t(`Failed to clear worktree metadata: ${AP(Q)}`)), {};
    }
    if (O) await Nle(r, O);
    return t(`Agent worktree kept at: ${r}`), { worktreePath: r, worktreeBranch: y };
  };
  if (e.abortController.signal.aborted) {
    let r = $i(e.abortController.signal.reason);
    if (!(U && r === "interrupt")) throw await ze(), new Ye();
  }
  if (Lt === null && A1()) throw m("subagent_launch", "subagent_no_directory_in_cwd_scope"), new W("A subagent cannot be started from here in this session. Do the task without a subagent.");
  let Ve = await Un();
  if (Ie !== void 0 && U) {
    let r = Be === void 0 ? { kind: "closed", message: kIr(Ze) } : Be.confirm(e.abortController.signal);
    if (r !== void 0) {
      if (Ve(), await ze(), r.kind === "aborted") throw new Ye();
      throw m("subagent_launch", "subagent_background_launch_closed"), new W(r.message);
    }
  }
  let We = dn();
  X.spawnedSubagent = We;
  let hn = () => {
    if (st !== void 0) moi({ agentId: he, deliveringLoop: e.agentId }, st);
  }, $t = async (r) => {
    try {
      return await r;
    } catch (y) {
      throw Ve(), y;
    }
  }, yn = Be !== void 0 && F && F !== sy ? e.getAppState().agentNameRegistry.get(F) : void 0;
  if (F && F !== sy) e.agentLifecycle.registerName(F, Br(he));
  let it = F && F !== sy ? F : void 0;
  zn().agentSpawned.emit({ agentId: he, agentType: s.agentType, parentAgentId: $e, taskRegistry: K });
  let ut = xe === void 0 && !Nw(e);
  if (U) {
    let r = he, y = Dle({ outputFileReadable: x0(e.options.tools), ownerCanContinueAgents: X.callerCanContinueAgents, agentId: r, ownerAgentId: He, parentAgentId: $e, spawnDepth: Te, launchedWithDefaults: ut, description: x, prompt: q, model: ne, selectedAgent: s, taskRegistry: K, toolUseId: e.toolUseId, cwd: Nt, spawnedSubagent: We, sessionScratch: e.session.sessionScratch });
    if (Be !== void 0 && !Be.handOver({ agentId: y.agentId, abortController: y.abortController })) {
      if (jT(y.agentId, K, "system", void 0, { lifecycleNotStarted: true }), Ve(), SO(y.agentId, K), F && yn !== void 0) e.agentLifecycle.registerName(F, yn);
      throw await ze(), m("subagent_launch", "subagent_background_launch_not_taken"), new W(kIr(Ze));
    }
    if (!ye()) FD(He, `agent:${r}`, K);
    if (R0() && !ye() && (!F || F === sy) && !y2t.has(s.agentType)) {
      let E = e.agentLifecycle.allocateName(s.agentType);
      e.agentLifecycle.registerName(E, Br(r)), it = E;
    }
    if (we) await $t(DFn({ observedKey: r, observedTaskId: r, observedName: it ?? F ?? s.agentType, observedAgentType: s.agentType, config: we, ...cn }));
    let A = { agentId: r, parentAgentId: $e, depth: Te, ...Wnt(e) && { spawnedByMainThread: true }, parentSessionId: Gx(), agentType: "subagent", subagentName: s.agentType, displayName: it, isAsync: true, isBackgroundAgent: true, ...gn && { delegatedObservation: true }, isBuiltIn: Al(s), ...V && Mj(e.agentContext) && { forkOfMainConversation: true }, invokingRequestId: h?.requestId, invocationKind: "spawn", invocationEmitted: false, parentPromptId: pn, ...Hj(e.agentContext) };
    X.agentContext = A, cI(A, () => Gkn(Lt, () => pte({ taskId: y.agentId, abortController: y.abortController, makeStream: (E, O, P) => qR({ ...at, launchedWithDefaults: ut, session: Bt, override: { ...at.override, agentId: Br(y.agentId), agentContext: A, abortController: y.abortController }, onCacheSafeParams: E, onQueryProgress: O, onStreamTokenEstimate: P }), metadata: X, description: x, toolUseContext: e, taskRegistry: K, agentIdForCleanup: r, enableSummarization: $be() || (Qt || en) && !ye(), getWorktreeResult: ze, onRunSettled: Ve }))), hn(), It?.started({ agentId: y.agentId, model: ne });
    let G = !lE(s) && x0(e.options.tools);
    return g("subagent_launch"), { data: { isAsync: true, status: "async_launched", agentId: y.agentId, description: x, resolvedModel: ne, prompt: q, outputFile: y.outputFile ?? "", canReadOutputFile: G, canContinueAgent: Pv(e.options.tools), ...fn && { sharesCwd: true } } };
  } else {
    let r = Br(he), y = xdt() || Umt() !== void 0, A = { agentId: r, parentAgentId: $e, depth: Te, ...Wnt(e) && { spawnedByMainThread: true }, parentSessionId: Gx(), agentType: "subagent", subagentName: s.agentType, displayName: it, isAsync: false, isBackgroundAgent: io, ...gn && { delegatedObservation: true }, isBuiltIn: Al(s), ...V && Mj(e.agentContext) && { forkOfMainConversation: true }, invokingRequestId: h?.requestId, invocationKind: "spawn", invocationEmitted: false, parentPromptId: pn, ...Hj(e.agentContext) };
    X.agentContext = A;
    let G = cI(A, () => Gkn(Lt, async () => {
      let E = Date.now(), O = ne, P = ILn([], ne);
      if (Ae.length > 0) {
        let Y = fm(Ae).find((le) => le.type === "user");
        if (Y && Y.type === "user" && _) _({ type: "progress", toolUseID: `agent_${h.message.id}`, data: { message: Y, type: "agent_progress", prompt: q, agentId: r, agentType: s.agentType, isBuiltIn: Al(s), description: x, resolvedModel: O, modelsUsed: P } });
      }
      let R = UDs({ outputFileReadable: x0(e.options.tools), ownerCanContinueAgents: X.callerCanContinueAgents, agentId: r, ownerAgentId: He, parentAgentId: $e, spawnDepth: Te, description: x, prompt: q, model: ne, selectedAgent: s, taskRegistry: K, parentAbortController: e.abortController, toolUseId: e.toolUseId, autoBackgroundMs: At ? void 0 : zo() || void 0, waitsOnRuleMove: Ie !== void 0 && !At, isDirectCall: !e.innerCall && e.hookCaller === void 0, cwd: Nt, spawnedSubagent: We, ...y && { launchedWithDefaults: ut } }), { taskId: z, cancelAutoBackground: Q, abortController: Z, detachParentAbortRelay: H } = R;
      if (we) await $t(DFn({ observedKey: r, observedTaskId: r, observedName: F ?? s.agentType, observedAgentType: s.agentType, config: we, ...cn }));
      let _e = false;
      g("subagent_launch");
      let Ee = [], zt = e.options.forwardSubagentText, ue, dt = false, lt = (b) => {
        if (_e) return;
        if (b.type === "query_model_change") {
          O = b.toModel, P = ILn(P, b.toModel);
          return;
        }
        if (b.type === "spinner_mode") return;
        if (b.type !== "api_metrics" && b.type !== "set_in_progress_tool_use_ids") Ee.push(b);
        if (!_) return;
        if (ue !== void 0 && !(b.type === "system" && b.subtype === "api_error")) ue = void 0, _({ type: "progress", toolUseID: `agent_${h.message.id}`, data: { type: "agent_api_retry", resolved: true, agentId: r, agentType: s.agentType } });
        if (b.type === "api_metrics") {
          _(b);
          return;
        }
        if (b.type === "set_in_progress_tool_use_ids") return;
        if (b.type === "progress" && (b.data.type === "bash_progress" || b.data.type === "powershell_progress")) _({ type: "progress", toolUseID: b.toolUseID, data: b.data });
        if (b.type === "system" && b.subtype === "api_error") {
          let Y = z2n(b.error), le = `${b.source ?? "request_retry"}:${b.retryAttempt}:${b.maxRetries}:${Y}`;
          if (le !== ue) ue = le, _({ type: "progress", toolUseID: `agent_${h.message.id}`, data: { type: "agent_api_retry", agentId: r, agentType: s.agentType, attempt: b.retryAttempt, maxRetries: b.maxRetries, retryDelayMs: b.retryInMs, errorStatus: b.error.status, errorCategory: Y } });
          return;
        }
        if (ute(b)) {
          if (y1e(e, b)) _(TLn(b));
          return;
        }
        if (b.type !== "assistant" && b.type !== "user") return;
        if (b.type === "user" && b.isMeta && !dt) return;
        if (b.type === "assistant") dt = true;
        if (b.type === "assistant") {
          let Y = D2n(b);
          if (Y > 0) _({ type: "response_length", op: "add", delta: Y });
        }
        for (let Y of fm([b])) {
          let le = Y.message.content[0];
          if (!zt && le.type !== "tool_use" && le.type !== "tool_result") continue;
          _({ type: "progress", toolUseID: `agent_${h.message.id}`, data: { message: Y, type: "agent_progress", prompt: "", agentId: r, agentType: s.agentType, isBuiltIn: Al(s), description: x, resolvedModel: O, modelsUsed: P } });
        }
      }, de = Tt ? void 0 : setTimeout((b) => {
        if (b.toolUseId) b.emitToolProgress?.({ kind: "background_hint", toolUseId: b.toolUseId });
      }, Bo, e), ct = {}, uo = async () => (ct = await ze(), ct);
      It?.started({ agentId: r, model: ne }), w?.mark("model");
      let _n = pte({ taskId: z, abortController: Z, makeStream: (b, Y, le) => qR({ ...at, ...y && { launchedWithDefaults: ut }, session: Bt, override: { ...at.override, agentId: r, agentContext: A, abortController: Z }, onCacheSafeParams: b, onQueryProgress: Y, onStreamTokenEstimate: le }), metadata: X, description: x, toolUseContext: e, taskRegistry: K, agentIdForCleanup: r, enableSummarization: $be(), getWorktreeResult: uo, onMessage: lt, shouldNotifyOwner: () => _e, onRunSettled: Ve });
      hn();
      let je, bn;
      try {
        let b;
        try {
          b = At ? await _n.then(() => "done") : await Promise.race([_n.then(() => "done"), R.backgroundSignal.then(() => "backgrounded")]);
        } catch (ee) {
          if (b = "done", ee instanceof Ye) {
            let Ke = $i(Z.signal.reason) === "permission-stop";
            if (Ke) bn = d(ee);
            if (a("tengu_agent_tool_terminated", { agent_type: Ge, model: wt(X.resolvedAgentModel), final_model: wt(P.at(-1) ?? X.resolvedAgentModel), model_swapped: P.length > 1, duration_ms: Date.now() - X.startTime, is_async: false, is_built_in_agent: X.isBuiltInAgent, agent_depth: X.agentDepth, reason: Ke ? S("permission_stop_sync") : S("user_cancel_sync") }), !Ke) We.killed("user");
            if (!(Z.signal.aborted && !e.abortController.signal.aborted)) throw ee;
            je = N(ee);
          } else t(`Sync agent error: ${d(ee)}`, { level: "error" }), je = N(ee);
        }
        let Y = b === "done" && !je && Ake(z, K);
        if (Y) QXe(z, K);
        let le = K.get(z)?.status, wn = b === "backgrounded" && !Y && le !== void 0 && le !== "running" && !Ake(z, K);
        if (b === "backgrounded" && !wn || Y) {
          if (_e = true, b === "backgrounded" && !wn) BDs(z, K, e.session.sessionScratch);
          if (H(), GQs(r), !ye()) FD(He, `agent:${z}`, K);
          let ee = !lE(s) && x0(e.options.tools);
          return { data: { isAsync: true, status: "async_launched", agentId: z, description: x, resolvedModel: O, ...P.length > 1 && { modelsUsed: [...P] }, prompt: q, outputFile: R.outputFile ?? "", canReadOutputFile: ee, canContinueAgent: Pv(e.options.tools), ...fn && { sharesCwd: true } } };
        }
        let kn = Ee.findLast((ee) => ee.type !== "system" && ee.type !== "progress");
        if (kn && I0(kn)) throw a("tengu_agent_tool_terminated", { agent_type: Ge, model: wt(X.resolvedAgentModel), final_model: wt(P.at(-1) ?? X.resolvedAgentModel), model_swapped: P.length > 1, duration_ms: Date.now() - X.startTime, is_async: false, is_built_in_agent: X.isBuiltInAgent, agent_depth: X.agentDepth, reason: S("user_cancel_sync") }), We.cancelledAfterCompletion(), new Ye();
        let Wt, jt = Ee;
        if (je) {
          let ee;
          try {
            ee = bvs(je, Ee);
          } catch (Ke) {
            throw We.failed(), Ke;
          }
          Wt = ee.cutoffNote ?? bn, jt = ee.history, t(`Sync agent recovering from error with ${jt.length} messages`);
        }
        let te = qwr(jt, r, { ...X, modelsUsed: P }, { suppressTelemetry: !je, handback: NGe(K.get(r), r) }), lo = ae(e), Tn = await $Ot({ handback: te.handback, agentMessages: Ee, inheritedVerifiedHumanTurns: uMe(e), tools: e.options.tools, rootToolSurface: e.rootToolSurface, toolPermissionContext: lo, abortSignal: e.abortController.signal, agentType: Ge, totalToolUseCount: te.totalToolUseCount, finalResultText: $o(te.content, `
`), agentId: e.agentId, storageV5: e.storageV5, credentials: e.credentials }).catch((ee) => {
          if (e.abortController.signal.aborted) return null;
          return l(ee), { warning: she(""), kind: "unavailable" };
        });
        if (Tn) te.content = [{ type: "text", text: Tn.warning }, ...te.content], te.harnessNoteCount = (te.harnessNoteCount ?? 0) + 1, te.harnessSectionHash = lZe(te.content);
        if (Wt) te.content = [{ type: "text", text: Wt }, ...te.content], te.harnessNoteCount = (te.harnessNoteCount ?? 0) + 1, te.harnessSectionHash = lZe(te.content);
        return { data: { status: "completed", prompt: q, ...te, ...ct, canContinueAgent: Pv(e.options.tools) } };
      } finally {
        if (de) clearTimeout(de);
        if (e.toolUseId) e.emitToolProgress?.({ kind: "clear", toolUseId: e.toolUseId });
        if (Q?.(), H(), !_e) {
          Yde(z);
          let b = K.get(z), Y = Cn(b) ? b.progress : void 0;
          jDs(z, K), La(z, b?.status === "failed" ? "failed" : b?.status === "killed" ? "stopped" : "completed", { toolUseId: e.toolUseId, summary: x, usage: { total_tokens: Y?.tokenCount ?? 0, tool_uses: Y?.toolUseCount ?? 0, duration_ms: Date.now() - E } });
        }
      }
    }));
    return $t(G);
  }
}
var dXt = tn({ async prompt({ agents: n, tools: e, getToolPermissionContext: p, allowedAgentTypes: h, model: _, leanPrompt: w, leanRewrite: j, querySource: v }) {
  let fe = await p(), F = Ia(), { available: De } = Yn(n, h, fe), ft = Kn(n, h);
  return await eFs({ model: _, isCoordinator: F, forkAvailable: De, generalPurposeAvailable: ft, continueAvailable: Pv(e), leanPrompt: w, leanRewrite: j, subagentBudgetNote: Ln(v), modelMix: Gxr(v) });
}, name: ht, searchHint: "delegate work to a subagent", aliases: [dp], backgrounding: "self", maxResultSizeChars: nwt, get preserveToolUseResultInSubagents() {
  return Wn("tengu_velvety_sprout", false) === true;
}, async description() {
  return "Launch a new agent";
}, get inputSchema() {
  return bio();
}, coerceInput: w2n, get outputSchema() {
  return Ho();
}, create(n) {
  return { call(e, p) {
    if (!p.runEngine) return Promise.reject(Error("Agent: launching needs the executor (call.runEngine)"));
    return p.runEngine(qo, { agentInput: e, assistantMessage: p.parentMessage, onProgress: p.onProgress, timing: p.timing, ...false });
  }, async checkPermissions(e, p) {
    if (!Ls(n.permissions().mode)) return { behavior: "allow", updatedInput: e };
    if (await p.runEngine(Fn, { input: e })) return { behavior: "allow", updatedInput: e };
    return { behavior: "passthrough", message: "Agent tool requires permission to spawn subagents." };
  } };
}, isReadOnly() {
  return true;
}, toAutoClassifierInput(n) {
  let e = n, p = [e.subagent_type].filter((_) => _ !== void 0);
  return `${p.length > 0 ? `(${p.join(", ")}): ` : ": "}${e.prompt}`;
}, isConcurrencySafe() {
  return true;
}, userFacingName: Gyr, getActivityDescription(n) {
  return n?.description?.replace(/\s+/g, " ").trim() || "Running task";
}, restoreTransientForRemap: Bn, mapToolResultToToolResultBlockParam(n, e) {
  let p = n;
  if (typeof p === "object" && p !== null && "status" in p && p.status === "teammate_spawned") {
    let h = p;
    return { tool_use_id: e, type: "tool_result", content: [{ type: "text", text: `Spawned successfully. (This tool result is internal metadata — never quote or paste any part of it, including the ID below, into a user-facing reply.)
agent_id: ${h.agent_id}
name: ${h.name}
The agent is now running and will receive instructions via mailbox.` }] };
  }
  if (n.status === "remote_launched") {
    let h = n;
    return { tool_use_id: e, type: "tool_result", content: [{ type: "text", text: `Cloud agent launched. (This tool result is internal metadata — never quote or paste any part of it, including the ID below, into a user-facing reply.)
taskId: ${h.taskId}
session_url: ${h.sessionUrl}
output_file: ${h.outputFile} (final results land here only after the completion notification; until then it holds a partial, still-growing event log)
The agent is running in the cloud. You will be notified automatically when it completes. Do not report or predict its results before that notification arrives.
In your own words, briefly tell the user what you launched — do not echo this tool result — and end your response.` }] };
  }
  if (n.status === "async_launched") {
    let h = `Async agent launched successfully. (This tool result is internal metadata — never quote or paste any part of it, including the agentId below, into a user-facing reply.)
agentId: ${n.agentId} (internal ID - do not mention to user.${n.canContinueAgent === false ? "" : ` Use ${Mn} with to: '${n.agentId}', summary: '<5-10 word recap>' to continue this agent.`})
The agent is working in the background. You will be notified automatically when it completes. You know nothing about its results until that notification arrives — do not report, assume, or predict them; continue other work or respond to the user in the meantime.`, _ = n.canReadOutputFile && n.outputFile ? `Do not duplicate this agent's work — avoid working with the same files or topics it is using.
output_file: ${n.outputFile}
Do NOT ${qe} or tail this file via the shell tool — it is the full subagent JSONL transcript and reading it will overflow your context. If the user asks for progress, say the agent is still running; you'll get a completion notification.` : "In your own words, briefly tell the user what you launched — do not echo this tool result. Agent results will arrive in a subsequent message. If the user asks for progress, say the agent is still running.", w = `${h}
${_}${n.sharesCwd ? `
${JNs}` : ""}`;
    return { tool_use_id: e, type: "tool_result", content: [{ type: "text", text: w }] };
  }
  if (n.status === "completed") {
    let h = n.worktreePath ? `
worktreePath: ${n.worktreePath}${n.worktreeBranch ? `
worktreeBranch: ${n.worktreeBranch}` : ""}` : "", _ = n.content.length > 0 ? n.content : [{ type: "text", text: "(Subagent completed but returned no output.)" }], w = RHe() ? H9n(_, n.content.length > 0 ? n.harnessNoteCount : 0, n.content.length > 0 ? n.harnessTailCount : 0, n.harnessSectionHash) : _;
    if (n.agentType && y2t.has(n.agentType) && !h) return { tool_use_id: e, type: "tool_result", content: w };
    let j = n.canContinueAgent === false ? "" : ` (use ${Mn} with to: '${n.agentId}', summary: '<5-10 word recap>' to continue this agent)`, v = `agentId: ${n.agentId}${j}${h}
<usage>subagent_tokens: ${n.totalTokens}
tool_uses: ${n.totalToolUseCount}
duration_ms: ${n.totalDurationMs}</usage>`;
    if (w !== _ && w.length === 1) return { tool_use_id: e, type: "tool_result", content: [{ type: "text", text: w[0].text + `
` + v }] };
    return { tool_use_id: e, type: "tool_result", content: [...w, { type: "text", text: v }] };
  }
  throw m("subagent_launch", "subagent_unexpected_result_status"), Error(`Unexpected agent tool result status: ${n.status}`);
} });
function Yn(n, e, p) {
  if (!Tle() || n.some((_) => MCe(_.agentType) === oH) || !(e?.includes(oH) ?? true)) return { available: false, denyRule: null };
  let h = Tce(p, ht, oH);
  return { available: h === null, denyRule: h };
}
function xn(n) {
  let e = s0r();
  if (n.taskRegistry.getConcurrentSubagents() < e) return;
  if (k("tengu_amber_kestrel", false)) return;
  let h = n.getAppState();
  if (Bm(h.ultracode, n.rootToolSurface.mainLoopModel)) return;
  return m("subagent_launch", "subagent_concurrency_cap"), C8e.of(n.session).recordRefused("concurrency_limit"), new W(`Concurrent subagent limit reached. You can run ${e} subagents at once. Do not retry. If the user wants more concurrent subagents, ask them to increase CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS.`);
}
function Kn(n, e) {
  let p = MCe(M6.agentType), h = n.filter((j) => MCe(j.agentType) === p), _ = (j) => e?.includes(j.agentType) ?? true, w = h.find((j) => j.agentType === M6.agentType);
  if (w) return _(w);
  return h.length === 1 && _(h[0]);
}
function Gn({ isolation: n, querySource: e, messages: p }) {
  if (n === "remote") return { code: "subagent_fork_remote_isolation", message: 'Fork cannot use isolation: "remote" — a remote session cannot inherit the conversation context. Omit isolation (or use "worktree"), or spawn a named agent type for remote work.' };
  if (e === `agent:builtin:${O6.agentType}` || gCo(p)) return { code: "subagent_recursive_fork", message: "Fork is not available inside a forked worker. Complete your task directly using your tools." };
  return null;
}
function pt(n) {
  return n.join(", ") || "none";
}
function Vo(n, e) {
  if (!n) return;
  let p = Gve(n, e);
  return typeof p === "object" ? p.inheritCap : p;
}
function Hn(n, e, p) {
  let h = e.find((v) => v.agentType === p);
  if (h) return h;
  let _ = MCe(p);
  if (!_) return;
  let w = n.filter((v) => MCe(v.agentType) === _);
  if (w.length !== 1) return;
  let j = w[0];
  return e.some((v) => v.agentType === j.agentType) ? j : void 0;
}
function Xn() {
  return M().optional().describe("@internal False when the calling agent cannot continue this agent with a follow-up message (it holds no messaging tool); absent means it can.");
}
export {
  Gyr,
  Sio,
  bio,
  dXt,
  zyr
};
