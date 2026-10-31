// darwin/telemetry/prompt-suggestion-init.js — Claude Code 2.1.310（darwin）模块 chunk-apvafbnj.js
import { Fko, _0s, Y9, nx, Ey, Oe } from "../core/conversation-engine.js";
import { Up, Ut, k } from "../settings/global-config-and-gates.js";
import { F, ye } from "../context/not-admin-owned.js";
import { S, c } from "../agents/third-party.js";
import { N } from "./anthropic-workspace-id.js";
import { i } from "../shared/environment.js";
import { Ms } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { a } from "./chunk-9097a12b.js";
import { g, m } from "./chunk-9d6962d2.js";
import { mt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { kYn } from "../api/anthropic-client.js";
import { pc } from "../agents/in-process-teammate.32be.js";
import { li } from "../core/system-prompt-blocks.js";
import { Ss } from "./chunk-cb9c99f9.js";
import { _o, Pg, ad, Rl, Hf, lo } from "./bg-roster-parse-failed.js";
import { kMt, RCs, Evr } from "../shared/prompt-suggestion-back-off-end.js";
import { tte } from "../shared/chunk-d55dd270.js";
import { _e } from "../shared/chunk-86ecf3aa.js";
var T = /\p{Script=Han}/u, A = /[\p{Script=Hiragana}\p{Script=Katakana}\u30fc\uff70\p{Script=Thai}\p{Script=Lao}\p{Script=Khmer}\p{Script=Myanmar}]/u, R = /\p{Script=Hangul}/u, x = /[\p{L}\p{N}]/u;
function y(e) {
  let { han: n, phonetic: t, hangul: o } = w(e);
  return n + t + o;
}
function E(e) {
  let n = e.trim();
  if (n === "") return 0;
  let t = 0;
  for (let o of n.split(/\s+/)) {
    let { han: s, phonetic: r, hangul: u, other: d } = w(o);
    t += s === 0 && r === 0 ? 1 : (d + u > 0 ? 1 : 0) + s / 2 + r / 4;
  }
  return Math.ceil(t);
}
function w(e) {
  let n = 0, t = 0, o = 0, s = 0;
  for (let r of e) if (T.test(r)) n++;
  else if (A.test(r)) t++;
  else if (R.test(r)) o++;
  else if (x.test(r)) s++;
  return { han: n, phonetic: t, hangul: o, other: s };
}
function OUe(e) {
  return e.status === "shown" || e.status === "accepted";
}
function IOn(e) {
  return e.status === "empty" ? null : e.text;
}
function OOn() {
  let e = i.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION;
  if (e === false) return a("tengu_prompt_suggestion_init", { enabled: false, source: S("env") }), false;
  if (e === true) return a("tengu_prompt_suggestion_init", { enabled: true, source: S("env") }), true;
  if (!k("tengu_chomp_inflection", false)) return a("tengu_prompt_suggestion_init", { enabled: false, source: S("growthbook") }), false;
  if (ye()) return a("tengu_prompt_suggestion_init", { enabled: false, source: S("non_interactive") }), false;
  if (Ss() && pc()) return a("tengu_prompt_suggestion_init", { enabled: false, source: S("swarm_teammate") }), false;
  let n = mt()?.promptSuggestionEnabled !== false;
  return a("tengu_prompt_suggestion_init", { enabled: n, source: S("setting") }), n;
}
function MOn() {
  let e = i.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION;
  if (e !== void 0) return e;
  return mt()?.promptSuggestionEnabled !== false;
}
function L(e, n) {
  if (!e.promptSuggestionEnabled) return "disabled";
  if (e.pendingWorkerRequest || e.pendingSandboxRequest) return "pending_permission";
  if (e.mcp.clients.some((t) => t.type === "connected" && (t.transportErrorState?.pendingElicitations ?? 0) > 0)) return "elicitation_active";
  if (e.toolPermissionContext.mode === "plan") return "plan_mode";
  {
    let { status: t, overageInUse: o } = li(), s = t === "allowed_warning" && i.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === true;
    if (t !== "allowed" && !s) return "rate_limit";
    if ((n ?? o === true) && kYn()) return "usage_credits";
  }
  return null;
}
async function Eoo(e, n, t, o, s, r) {
  if (e.signal.aborted) return fD("aborted", s), null;
  if (F(n, (b) => b.type === "assistant") < 2) return fD("early_conversation", s), null;
  let d = Ey(n);
  if (d?.isApiErrorMessage) return fD("last_response_error", s), null;
  let p = t(), f = L(p, o.toolUseContext.queryTracking?.billedToUsageCredits);
  if (f) return fD(f, s), null;
  let _ = O(d);
  if (_) return fD("cache_cold", s, { cacheColdBy: _ }), null;
  if (r && Evr()) {
    let b = r.eligibleTurns % RCs === 0;
    if (r.eligibleTurns++, !b) return fD("unused_streak", s), null;
  }
  let { suggestion: h, generationRequestId: P } = await q(e, o);
  if (e.signal.aborted) return fD("aborted", s), null;
  if (!h) return fD("empty", s), null;
  if (U(h, s)) return null;
  return { suggestion: h, generationRequestId: P };
}
async function vms(e, n) {
  if (!e.querySource?.startsWith("repl_main_thread")) return;
  let t = tte(), o = Ut(), s = o && n?.tempo === "blocked" && !n.block;
  if (o ? t !== "focused" && !s : t === "blurred") {
    fD(o ? "bg_unattached" : "unfocused", "cli");
    return;
  }
  let r = e.toolUseContext.session.promptSuggestion, u = new AbortController();
  r.abortController = u;
  let d = Y9(e);
  try {
    let p = await Eoo(u, e.messages, e.toolUseContext.getAppState, d, "cli", s ? void 0 : r);
    if (!p) return;
    if (kMt() && Up(e.toolUseContext.agentContext)) {
      fD("plugin_owns", "cli");
      return;
    }
    let f = false, { isShown: _ } = await _0s({ text: p.suggestion, origin: { kind: "suggestion" }, signal: u.signal, place: (h) => {
      if (u.signal.aborted) return { isShown: false };
      if (f = true, s) v(h, n?.needs, e.toolUseContext.storageV5).catch(Rl);
      return Fko(h, p.generationRequestId);
    } });
    if (u.signal.aborted) {
      fD("aborted", "cli");
      return;
    }
    if (!_ && f) fD("timing", "cli");
  } catch (p) {
    if (p instanceof Error && (p.name === "AbortError" || p.name === "APIUserAbortError")) {
      fD("aborted", "cli");
      return;
    }
    m("prompt_suggestion_generate", "api_error"), l(N(p));
  } finally {
    if (r.abortController === u) r.abortController = null;
  }
}
async function v(e, n, t) {
  if (Ms(e) !== e) return;
  let o = _o(Pg());
  Hf(o);
  let s = await lo(o, t);
  if (s?.tempo !== "blocked" || s.needs !== n || s.suggestedReply === e) return;
  await ad(o, { ...s, suggestedReply: e }, t);
}
var C = 1e4;
function O(e) {
  if (!e) return null;
  let n = e.message.usage, t = (n.input_tokens ?? 0) + (n.output_tokens ?? 0);
  if (t > C) return "uncached";
  let o = n.cache_creation_input_tokens ?? 0;
  if (t + o <= C) return null;
  return k("tengu_chomp_thaw", false) ? null : "cache_write";
}
var I = `[SUGGESTION MODE: Suggest what the user might naturally type next into Claude Code.]

FIRST: Look at the user's recent messages and original request.

Your job is to predict what THEY would type - not what you think they should do.

THE TEST: Would they think "I was just about to type that"?

EXAMPLES:
User asked "fix the bug and run tests", bug is fixed → "run the tests"
After code written → "try it out"
Claude offers options → suggest the one the user would likely pick, based on conversation
Claude asks to continue → "yes" or "go ahead"
Task complete, obvious follow-up → "commit this" or "push it"
After error or misunderstanding → silence (let them assess/correct)

Be specific: "run the tests" beats "continue".

NEVER SUGGEST:
- Evaluative ("looks good", "thanks")
- Questions ("what about...?")
- Claude-voice ("Let me...", "I'll...", "Here's...")
- New ideas they didn't ask about
- Multiple sentences

Stay silent if the next step isn't obvious from what the user said.

Stay silent if a suggestion could be unsafe or inappropriate — including any sensitive topic (security incidents, credentials, harm, private data). Even when the user is doing legitimate security or cybersecurity work, do not predict potentially unsafe actions.

Format: 2-12 words, match the user's style. Or nothing.

Reply with ONLY the suggestion, no quotes or explanation.`;
async function M(e, n, t) {
  let o = async () => ({ behavior: "deny", message: "No tools needed for suggestion", decisionReason: { type: "other", reason: "suggestion only" } }), s = await nx({ promptMessages: [Oe({ content: e })], cacheSafeParams: t, canUseTool: o, querySource: "prompt_suggestion", forkLabel: "prompt_suggestion", overrides: { abortController: n }, skipTranscript: true, skipCacheWrite: true }), r = s.messages.find((p) => p.type === "assistant"), u = r?.type === "assistant" ? r.requestId ?? null : null, d = [];
  for (let p of s.messages) {
    if (p.type !== "assistant" || p.isApiErrorMessage) continue;
    let f = p.message.content.find((_) => _.type === "text");
    if (f?.type === "text") d.push(f.text);
  }
  return { candidates: d, generationRequestId: u };
}
function W(e) {
  return e.trim().replace(/^<(suggestion|response|output|answer|result)>([\s\S]*)<\/\1>$/i, (n, t, o) => o.includes(`</${t.toLowerCase()}>`) || o.includes(`</${t.toUpperCase()}>`) ? n : o).replace(/^\s*(suggested\s+(response|reply|input|prompt)|suggestion|response|reply|answer|output|result|\u63D0\u6848|\u56DE\u7B54|\u8FD4\u4FE1|\u5FDC\u7B54|\u51FA\u529B|\u7D50\u679C|\u5EFA\u8BAE|\u56DE\u590D|\u7B54\u6848|\u8F93\u51FA|\u7ED3\u679C|\uC81C\uC548|\uB2F5\uBCC0|\uC751\uB2F5|\uCD9C\uB825|\uACB0\uACFC)\s*[:\uFF1A]\s*/i, "").trim();
}
async function q(e, n) {
  let { candidates: t, generationRequestId: o } = await M(I, e, n);
  for (let s of t) {
    let r = W(s);
    if (r) return g("prompt_suggestion_generate"), { suggestion: r, generationRequestId: o };
  }
  return g("prompt_suggestion_generate"), { suggestion: null, generationRequestId: o };
}
function U(e, n) {
  if (!e) return fD("empty", n), true;
  let t = e.toLowerCase(), o = E(e), s = [["done", () => t === "done" || /^\P{L}*(\u5B8C\u4E86(\u3057\u307E\u3057\u305F)?|\u5B8C\u6210\u4E86?|\uC644\uB8CC\uB428?)\P{L}*$/u.test(e)], ["meta_text", () => t === "nothing found" || t === "nothing found." || t.startsWith("nothing to suggest") || t.startsWith("no suggestion") || /\bsilence is\b|\bstay(s|ing)? silent\b/.test(t) || /^\W*silence\W*$/.test(t) || /^\P{L}*(\u6C88\u9ED9|\u6C89\u9ED8|\u9759\u9ED8|\uCE68\uBB35|\u63D0\u6848(\u306A\u3057|\u306F\u3042\u308A\u307E\u305B\u3093)|\u7279\u306B(\u306A\u3057|\u3042\u308A\u307E\u305B\u3093)|[\u65E0\u6CA1\u6C92]\u6709?\u5EFA[\u8BAE\u8B70]|(\uC81C\uC548|\uD574\uB2F9)\s*\uC5C6\uC74C)\P{L}*$/u.test(e)], ["meta_wrapped", () => /^(\(.*\)|\[.*\]|\uFF08.*\uFF09|\uFF3B.*\uFF3D|\u3010.*\u3011|\u3014.*\u3015)$/.test(e)], ["error_message", () => t.startsWith("api error:") || t.startsWith("prompt is too long") || t.startsWith("request timed out") || t.startsWith("invalid api key") || t.startsWith("image was too large")], ["prefixed_label", () => /^\w+:\s/.test(e)], ["too_few_words", () => {
    if (o >= 2) return false;
    if (e.startsWith("/")) return false;
    let r = y(e);
    if (r > 0) return r < 2;
    return !(/* @__PURE__ */ new Set(["yes", "yeah", "yep", "yea", "yup", "sure", "ok", "okay", "push", "commit", "deploy", "stop", "continue", "check", "exit", "quit", "no"])).has(t);
  }], ["too_many_words", () => o > 12], ["too_long", () => e.length >= 100], ["multiple_sentences", () => /[.!?]\s+[A-Z]|[\u3002\uFF01\uFF1F]\s*[\p{L}\p{N}]/u.test(e)], ["has_formatting", () => /[\n*]|\*\*/.test(e)], ["evaluative", () => /thanks|thank you|looks good|sounds good|that works|that worked|that's all|nice|great|perfect|makes sense|awesome|excellent/.test(t) || /^\P{L}*(\u3042\u308A\u304C\u3068\u3046(\u3054\u3056\u3044\u307E\u3059|\u3054\u3056\u3044\u307E\u3057\u305F)?|\u52A9\u304B\u308A\u307E\u3057\u305F|[\u8C22\u8B1D][\u8C22\u8B1D][\u4F60\u60A8]?|\u611F\u8C22[\u4F60\u60A8]?|\u611F\u8B1D\u3057\u307E\u3059|\uAC10\uC0AC\uD569\uB2C8\uB2E4|\uACE0\uB9C8\uC6CC\uC694?)(\P{L}|\u7684|$)/u.test(e) || /(\u826F\u3055\u305D\u3046|\u3088\u3055\u305D\u3046|\u3044\u3044\u3067\u3059\u306D|\u770B\u8D77\u6765\u4E0D\u9519|\u592A\u597D\u4E86|\u5B8C\u74A7|\u5B8C\u7F8E|\uC88B\uB124\uC694)(\u3067\u3059|\u3067\u3059\u306D|\u3060\u306D)?\P{L}*$/u.test(e)], ["claude_voice", () => /^(let me|i'll|i've|i'm|i can|i would|i think|i notice|here's|here is|here are|that's|this is|this will|you can|you should|you could|sure,|of course|certainly|\u8BA9\u6211(?!\u4EEC)|\u6211\u6765|\u6211\u4F1A|\u6211\u5C06)/i.test(e)]];
  for (let [r, u] of s) if (u()) return fD(r, n), true;
  return false;
}
function kms(e, n, t, o) {
  let s = Math.round(n.length / (e.length || 1) * 100) / 100, r = n.toLowerCase() === e.toLowerCase(), u = Math.max(0, Date.now() - t);
  a("tengu_prompt_suggestion", { source: S("sdk"), outcome: S(r ? "accepted" : "ignored"), prompt_id: S("user_intent"), ...o && { generationRequestId: _e(o) }, ...r && { timeToAcceptMs: u }, ...!r && { timeToIgnoreMs: u }, similarity: s });
}
function fD(e, n, t) {
  a("tengu_prompt_suggestion", { ...n && { source: c(n) }, outcome: S("suppressed"), reason: c(e), ...t?.cacheColdBy && { cacheColdBy: c(t.cacheColdBy) }, prompt_id: S("user_intent") });
}
export {
  Eoo,
  IOn,
  MOn,
  OOn,
  OUe,
  fD,
  kms,
  vms
};
