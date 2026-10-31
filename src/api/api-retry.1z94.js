// api/api-retry.1z94.js — Claude Code 2.1.310 模块 chunk-1z94kwdm.js
import { ur } from "../permissions/turn-abort.yvwf.js";
import { P0 } from "../core/conversation-engine.31gx.js";
import { ks } from "../context/projects-thread-reply-lead-killswitch.c5ve.js";
import { Kxt } from "../ide/side-question.89cg.js";
function lno(s, o = true) {
  let r = s.at(-1), a = o && r?.type === "assistant" && r.message.stop_reason === null;
  return ks(a ? s.slice(0, -1) : [...s]);
}
async function $Pn({ question: s, history: o, parentController: r, onProgress: a, getLiveMessages: l, isTurnInProgress: p, buildFallbackParams: i }) {
  let u = p?.() ?? true, n = P0(), c = n ? { ...n, toolUseContext: { ...n.toolUseContext, abortController: ur() }, ...l && { forkContextMessages: lno(l(), u), advisorModel: n.toolUseContext.getAdvisorSetting() } } : i ? await i() : null;
  if (c === null) return { cancelled: false, response: { response: null, synthetic: false } };
  a({ status: "started" });
  let t = await Kxt({ question: s, cacheSafeParams: c, parentController: r, onRetry: (e) => a({ status: "api_retry", attempt: e.retryAttempt, max_retries: e.maxRetries, retry_delay_ms: e.retryInMs, error_status: e.status ?? null }), threadHistory: false, turnInProgress: u, ...o?.length && { history: o.map((e) => ({ question: e.question, response: e.response, ...e.fallback_notice && { fallbackNotice: e.fallback_notice } })) } });
  if (t.aborted || r.signal.aborted) return { cancelled: true };
  return { cancelled: false, response: { response: t.response, synthetic: t.synthetic, ...t.refusalFallback && { refusal_fallback: { original_model: t.refusalFallback.originalModel, fallback_model: t.refusalFallback.fallbackModel, content: t.refusalFallback.content } } } };
}
export {
  $Pn,
  lno
};
