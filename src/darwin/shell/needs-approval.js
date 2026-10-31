// darwin/shell/needs-approval.js — Claude Code 2.1.310（darwin）模块 chunk-vkf16h21.js
import { Bn, dn } from "../mcp/chunk-0e2a1db6.js";
import { xo, nFe } from "./invalid-type.js";
import { k } from "../settings/global-config-and-gates.js";
import { dCt, Xm, CI } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { ze } from "./sandbox.js";
import { tWt, J2 } from "../context/org-memory-writes-setting-changed.js";
import { nj } from "../permissions/frontmatter-grant-withheld.js";
import { Qu, eH, SJn, Mc, NWo, Cw } from "../context/tool-result-clearing-after-idle-server-report.js";
import { Lr, vDe } from "../tools/device-session-limit.js";
import { v3, Qne } from "../context/team-memory-sync.js";
import { XOe } from "../core/conversation-engine.js";
import { _On, vOn } from "../permissions/served-settings-edit-refused.js";
import { qwe } from "../shared/chunk-ab2b59d4.js";
import { Jd } from "../shared/outcome-of.js";
import { BJ } from "../permissions/swarm-sandbox-permission-request.js";
function m() {
  try {
    return k("tengu_violin_table", false) === true;
  } catch {
    return false;
  }
}
function kfs(e) {
  return e.outcome === "needs_approval" ? e.suggestions ?? [] : [];
}
function loo(e, n) {
  let [t, ...r] = e;
  if (t === void 0 || r.length > 0 || !qwe(n)) return;
  let { toolName: i, ruleContent: a } = Bn(t);
  return i === n && a !== void 0 && dn({ toolName: n, ruleContent: a }) === t && nFe(a).type !== "exact" ? { toolName: n, ruleContent: a } : void 0;
}
function bhr() {
  if (!m()) return false;
  try {
    return Xm().errors.length === 0 && !ze.isSandboxEnabledInSettings() && !ze.isSandboxingEnabled();
  } catch {
    return false;
  }
}
function p(e, n) {
  let t = loo(n.offered, n.toolName);
  return bhr() && t !== void 0 && e.toolName === t.toolName && e.ruleContent === t.ruleContent;
}
function Cfs(e) {
  return e.offeredStandingUpdates.length > 0 && bhr() ? [...e.sessionPermissionUpdates, ...e.offeredStandingUpdates] : e.sessionPermissionUpdates;
}
var y = 5e4, h = SJn, R = 4, E = 45e3, g = { sandbox: "tool_default", background: "forbidden", pinCwd: true, scrubCredentialEnv: true, maxTimeoutMs: E, get additionalDenyRead() {
  return XOe();
}, get additionalDenyWrite() {
  return XOe();
} }, A = "Approvals are asked in this session. This machine's rules and hooks still apply. Commands run as they would locally in that folder (sandboxed when its settings sandbox them), foreground only, from the project directory, without credential variables, up to 45 s each.", wYt = /* @__PURE__ */ new Set(["dangerouslyDisableSandbox", ...[]]);
function Tfs(e = {}) {
  return { name: "interim_floor", kind: "personal_machine", requireEnvelope: true, admission: "device_binding", stance: { mode: "session", honorLocalRules: true, onAsk: "session", askOnDestructive: e.askOnDestructive ?? false, unattended: "own_record" }, limits: { max_call_ms: y, max_command_ms: g.maxTimeoutMs, max_request_bytes: h, max_in_flight: R }, serves: (t) => Qne.has(t.name) && Cw(t).supported, constraints: (t, r) => {
    let i = Cw(t);
    return _On(g, i.supported ? i.tighten : void 0);
  }, refusedInputFields: (t) => {
    let r = Cw(t);
    return (r.supported ? r.refusedInputFields ?? [] : []).filter((a) => !wYt.has(a));
  }, notes: () => A };
}
var udt = 8, Afs = 18e5, whr = 3e5, _ = 256, v = 16, hOn = 512;
function Rfs(e, n, t) {
  return n === e.toolName && BJ(n, xo(t, [Lr, vDe])) === BJ(n, e.evaluatedInput);
}
function xfs(e) {
  return { behavior: "deny", message: e !== void 0 && e.trim() !== "" ? Mc(e) : "The person declined this call in the session — it did not run.", decisionReason: { type: "other", reason: vOn }, decideLocation: "ask-path" };
}
async function Pfs(e, n, t, r) {
  if (n === void 0 || n.length === 0 || !nj()) return;
  let i = tWt(n.flatMap((o) => {
    let s = v3().safeParse(o), [l, ...S] = s.success && s.data.type === "addRules" && s.data.behavior === "allow" ? s.data.rules : [];
    return l !== void 0 && S.length === 0 && (l.ruleContent?.length ?? 0) <= hOn && p(l, r) ? [{ type: "addRules", behavior: "allow", destination: "session", rules: [l] }] : [];
  }));
  if (i.length > 0) e.offeredStandingUpdates = [...e.offeredStandingUpdates, ...i].slice(-_), Jd(t.callId, "offered standing rule held", { rules: i.length });
  let a = n.flatMap((o) => {
    let s = v3().safeParse(o);
    return s.success && s.data.type === "addRules" && s.data.behavior === "allow" && s.data.rules.length > 0 && s.data.rules.length <= v && s.data.rules.every((l) => l.toolName.length <= hOn && (l.ruleContent?.length ?? 0) <= hOn && O(l, r)) ? [s.data] : [];
  }), d = tWt(a.map((o) => o.destination === "session" || o.destination === "localSettings" ? o : { ...o, destination: "session" })), c = d.filter((o) => o.destination === "session"), u = d.filter((o) => o.destination === "localSettings");
  if (d.length > 0 && a.some((o) => o.destination !== "session" && o.destination !== "localSettings")) t.destinationDowngraded = true;
  let f = dCt() ? u.map((o) => ({ ...o, destination: "session" })) : [];
  if (c.length + f.length > 0) e.sessionPermissionUpdates = [...e.sessionPermissionUpdates, ...c, ...f].slice(-_);
  if (u.length > 0) await J2(u);
  if (d.length > 0) Jd(t.callId, "standing approval kept", { session_rules: c.length, local_settings_rules: u.length, downgraded: t.destinationDowngraded });
}
function O(e, n) {
  let t = n.input.command;
  return e.toolName === n.toolName && typeof t === "string" && e.ruleContent !== void 0 && e.ruleContent === t.trim() && !e.ruleContent.includes("*");
}
function C(e) {
  if (e === "none") return;
  let n = T(CI()), t = NWo(e === "full" ? n : { soft_deny: n?.soft_deny, hard_deny: n?.hard_deny });
  return t === void 0 ? void 0 : { auto_mode: t };
}
function T(e) {
  return e;
}
function Ifs(e) {
  let n = Mc(e.ask.message);
  return { envelope: { v: Qu, outcome: "needs_approval", ...e.facts.envelope && { call_id: e.facts.envelope.call_id }, target: e.target, ask_id: e.askId, tool: e.toolName, input: e.ask.input, message: n, ...e.ask.decisionReason !== void 0 && { decision_reason: e.ask.decisionReason }, ...e.ask.suggestions.length > 0 && { suggestions: [...e.ask.suggestions] }, classifier_eligible: e.ask.classifierEligible, prior_answer_ok: e.ask.priorAnswerOk, ...e.notes.length > 0 && { notes: [...e.notes] }, ...e.ask.classifierEligible && C(e.hostRules), elicitation: { mode: "form", message: n, requestedSchema: { type: "object", properties: { decision: { type: "string", enum: ["allow", "deny"], description: `Whether ${e.toolName} may run this call on ${e.target.name}` }, feedback: { type: "string", description: "Optional words for Claude with the decision" } }, required: ["decision"] }, _meta: { [eH]: { ask_id: e.askId, ...e.facts.envelope && { call_id: e.facts.envelope.call_id }, input_fingerprint: e.inputFingerprint, classifier_eligible: e.ask.classifierEligible, prior_answer_ok: e.ask.priorAnswerOk } } } }, content: [{ type: "text", text: `${e.toolName} on ${e.target.name} needs approval in this session before it runs: ${n}` }] };
}
function Ofs(e, n, t) {
  return { envelope: { v: Qu, outcome: "acknowledged", ...n.envelope && { call_id: n.envelope.call_id }, target: e, ask_id: t }, content: [{ type: "text", text: `The refusal was recorded on ${e.name} — nothing ran.` }] };
}
function jfe() {
  try {
    return k("tengu_violin_fhole", false) === true;
  } catch {
    return false;
  }
}
export {
  Afs,
  Cfs,
  Ifs,
  Ofs,
  Pfs,
  Rfs,
  Tfs,
  bhr,
  hOn,
  jfe,
  kfs,
  loo,
  udt,
  wYt,
  whr,
  xfs
};
