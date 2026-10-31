// linux/api/api-retry.js — Claude Code 2.1.310（linux）模块 chunk-640ga08t.js
import { ur } from "../permissions/turn-abort.js";
import { AD } from "../core/conversation-engine.js";
import { ks } from "../context/projects-thread-reply-lead-killswitch.js";
import { Cxt } from "../ide/side-question.js";
function Lto(s, o = true) {
  let r = s.at(-1), a = o && r?.type === "assistant" && r.message.stop_reason === null;
  return ks(a ? s.slice(0, -1) : [...s]);
}
async function EPn({ question: s, history: o, parentController: r, onProgress: a, getLiveMessages: l, isTurnInProgress: p, buildFallbackParams: i }) {
  let u = p?.() ?? true, n = AD(), c = n ? { ...n, toolUseContext: { ...n.toolUseContext, abortController: ur() }, ...l && { forkContextMessages: Lto(l(), u), advisorModel: n.toolUseContext.getAdvisorSetting() } } : i ? await i() : null;
  if (c === null) return { cancelled: false, response: { response: null, synthetic: false } };
  a({ status: "started" });
  let t = await Cxt({ question: s, cacheSafeParams: c, parentController: r, onRetry: (e) => a({ status: "api_retry", attempt: e.retryAttempt, max_retries: e.maxRetries, retry_delay_ms: e.retryInMs, error_status: e.status ?? null }), threadHistory: false, turnInProgress: u, ...o?.length && { history: o.map((e) => ({ question: e.question, response: e.response, ...e.fallback_notice && { fallbackNotice: e.fallback_notice } })) } });
  if (t.aborted || r.signal.aborted) return { cancelled: true };
  return { cancelled: false, response: { response: t.response, synthetic: t.synthetic, ...t.refusalFallback && { refusal_fallback: { original_model: t.refusalFallback.originalModel, fallback_model: t.refusalFallback.fallbackModel, content: t.refusalFallback.content } } } };
}
export {
  EPn,
  Lto
};
