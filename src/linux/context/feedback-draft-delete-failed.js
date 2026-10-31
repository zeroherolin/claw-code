// linux/context/feedback-draft-delete-failed.js — Claude Code 2.1.310（linux）模块 chunk-53svjtvq.js
import { q } from "./not-admin-owned.js";
import { b, c, ce } from "../agents/third-party.js";
import { Wy, ma, Vo, PR, t } from "../fs/gitlab-runner-authentication-token.js";
import { I } from "../shared/chunk-d2c47492.js";
import { i } from "../shared/environment.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { Ooe } from "../settings/global-config-and-gates.js";
import { kre } from "../api/anthropic-client.js";
import { sle, mpt, q1e, UC } from "../core/conversation-engine.js";
import { Zxe, p6t, m6t, ERt, kRt, ePe, jur, tPe, Gur, g6t } from "./trailing-api-error-notice-skipped.js";
import { yyr, _yr, L9t, byr, tIe, Syr, wyr, vdt, wgs, vgs, Egs, vyr, jpe, Aso, Eyr, fMn, rIt, pMn } from "../tools/worktree-entered-existing.js";
import { HX, Twe } from "./api-request-blob.js";
import { _e } from "../shared/chunk-86ecf3aa.js";
var J = 65536;
function K(e) {
  return Buffer.byteLength(ma(ma(e)).slice(1, -1));
}
function x(e) {
  let r = ma(e).slice(1, -1);
  return Buffer.byteLength(ma(r).slice(1, -1));
}
function O(e) {
  let r = jur(e);
  if (r <= ePe) return { payload: e, trim: null };
  using T = Wy`fitFeedbackPayloadToBudget(${r})`;
  let u = r - (ePe - J), s = e.transcript.map((_) => K(_) + 1), k = s.reduce((_, y) => _ + y, 0), M = e.rawTranscriptJsonl === void 0 ? 0 : x(e.rawTranscriptJsonl), D = u <= k ? k - u : Math.max(0, k - Math.max(0, u - M)), { start: w, keptBytes: h, oversized: f } = Gur(s, D), l = e.transcript.slice(w), R = f.size === 0 ? l : l.filter((_, y) => !f.has(w + y)), v = u - (k - h), d = e.rawTranscriptJsonl, S = d === void 0 ? "absent" : "untouched";
  if (v > 0 && d !== void 0) {
    let _ = M - v;
    if (_ <= 0) d = void 0, S = "omitted";
    else {
      let y = d.split(`
`), C = y.map((j) => x(j + `
`)), { start: o, oversized: B } = Gur(C, _), L = y.slice(o), E = (B.size === 0 ? L : L.filter((j, H) => !B.has(o + H))).join(`
`);
      if (E === "") d = void 0, S = "omitted";
      else d = E, S = "reduced";
    }
  }
  let n = { keptMessageCount: R.length, totalMessageCount: e.transcript.length, oversizedMessageCount: f.size, rawTail: S, rawTailKeptBytes: d === void 0 ? 0 : Buffer.byteLength(d) }, F = W(n);
  if (F === null) return { payload: e, trim: null };
  let { rawTranscriptJsonl: P, ...z } = e, A = { ...z, message_count: R.length, description: `${e.description}
${F}`, transcript: R, ...d !== void 0 && { rawTranscriptJsonl: d } }, p = jur(A);
  if (p > ePe) t(`fitFeedbackPayloadToBudget: still ${p} bytes after trim (budget ${ePe})`, { level: "error" });
  return { payload: A, trim: n };
}
function W(e) {
  let r = [];
  if (e.keptMessageCount < e.totalMessageCount) r.push(`kept ${e.keptMessageCount} of ${e.totalMessageCount} transcript messages (newest kept first)`);
  if (e.rawTail === "reduced") r.push(`kept ${Math.max(1, Math.round(e.rawTailKeptBytes / 1024))} KiB of the raw session log (newest kept first)`);
  else if (e.rawTail === "omitted") r.push("omitted the raw session log");
  if (r.length === 0) return null;
  return `transcript_truncated: ${r.join("; ")} (trimmed client-side to fit the upload size limit)`;
}
function V(e, r = "panel") {
  let T = vdt(e.request_ids), u = wyr(e.area), s = wgs(e.failure_mode), k = vgs(e.task_category), M = vyr(e.effort), D = Egs(e.thinking_type), w = jpe(e.thinking_budget), h = jpe(e.message_count), f = jpe(e.assistant_turn_count), l = jpe(e.subagent_count);
  return [`[${e.type}] ${L9t(e.title)}`, "", byr(e.details), "", "---", r === "card_send_as_is" ? "Drafted by Claude via the SendFeedback tool; approved by the user from the above-prompt card without full review." : "Drafted by Claude via the SendFeedback tool; reviewed and approved by the user before sending.", `trigger: ${e.trigger}`, ...u !== void 0 ? [`area: ${u}`] : [], ...s !== void 0 ? [`failure_mode: ${s}`] : [], ...k !== void 0 ? [`task_category: ${k}`] : [], `draft_id: ${e.draft_id}`, `drafted_at: ${e.created_at}`, `source_session_id: ${e.source_session_id}`, `model: ${Syr(e.model)}`, `cli_version: ${tIe(e.cli_version, yyr)}`, `os: ${tIe(e.os, _yr)}`, ...M !== void 0 ? [`effort: ${M}`] : [], ...D !== void 0 ? [`thinking: ${D}${w !== void 0 ? ` (budget ${w})` : ""}`] : [], ...f !== void 0 ? [`turns: ${f} assistant${h !== void 0 ? ` / ${h} messages` : ""}${l !== void 0 && l > 0 ? `, ${l} ${I(l, "subagent")}` : ""}`] : [], ...T.length > 0 ? [`request_ids: ${T.join(", ")}`] : []].join(`
`);
}
function Y(e) {
  let r = [];
  using T = Wy`parseDraftTranscriptMessages(${e.length})`;
  for (let u of e.split(`
`)) {
    if (!u) continue;
    let s;
    try {
      s = Vo(u);
    } catch {
      continue;
    }
    if (typeof s !== "object" || s === null) continue;
    if (s.type !== "user" && s.type !== "assistant") continue;
    if (typeof s.uuid !== "string" || typeof s.timestamp !== "string" || s.isSidechain === true || !s.message) continue;
    r.push(s.type === "user" ? { type: "user", uuid: s.uuid, timestamp: s.timestamp, message: s.message, ...s.isMeta === true && { isMeta: true }, ...s.toolUseResult !== void 0 && { toolUseResult: s.toolUseResult }, ...s.isCompactSummary === true && { isCompactSummary: true }, ...s.repeatsCompactSummary === true && { repeatsCompactSummary: true } } : { type: "assistant", uuid: s.uuid, timestamp: s.timestamp, message: s.message, requestId: s.requestId });
  }
  return r;
}
var N = "Feedback payload too large. Try again without the transcript, or shorten the details.";
async function hlt({ draft: e, includeTranscript: r, currentSessionMessages: T, surface: u = "cli", via: s = "panel", signal: k, storageV5: M, credentials: D, host: w }) {
  let h = e.source_session_id === q(), f = [], l;
  if (r && e.transcript_ref) {
    let p = await Aso(e);
    if (h) {
      if (f = UC(HX(T, { host: w })), p !== null) try {
        let { content: _, bytesRead: y, bytesTotal: C } = await PR(p, kRt), o = _;
        if (y < C) o = o.slice(o.indexOf(`
`) + 1);
        if (sle(o)) t("rawTranscriptJsonl withheld from feedback draft submit: contains_3p_transcript_markers");
        else l = Twe(q1e(o), { host: w }).jsonl;
      } catch {
      }
    } else if (p !== null) try {
      let { content: _, bytesRead: y, bytesTotal: C } = await PR(p, kRt), o = _;
      if (y < C) o = o.slice(o.indexOf(`
`) + 1);
      if (!Eyr(o, e)) t("draft transcript withheld from feedback submit: identity_not_corroborated");
      else {
        let B = Y(o);
        if (mpt(B)) t("draft transcript withheld from feedback submit: contains_3p_transcript_markers");
        else f = HX(B, { host: void 0 });
        if (sle(o)) t("rawTranscriptJsonl withheld from feedback draft submit: contains_3p_transcript_markers");
        else l = Twe(q1e(o), { host: void 0 }).jsonl;
      }
    } catch {
    }
  }
  let R = vdt(e.request_ids).at(-1) ?? null, v = { latestAssistantMessageId: R, latestAssistantAPIMessageId: null, lastInterruptedAssistantAPIMessageId: null, message_count: f.length, datetime: (/* @__PURE__ */ new Date()).toISOString(), description: V(e, s), surface: u, platform: i.platform, gitRepo: false, commitSha: null, version: e.cli_version, transcript: f, ...l && { rawTranscriptJsonl: l } }, { payload: d, trim: S } = O(v), n = await g6t(d, k, void 0, D);
  if (n.success) {
    try {
      await fMn(e.draft_id, M);
    } catch (p) {
      t(`feedbackDrafts: post-submit draft delete failed: ${p instanceof Error ? p.name : "unknown"}`, { level: "error" }), a("tengu_feedback_draft_delete_failed", { phase: b("post_submit") });
    }
    if (h) pMn();
    if (s !== "card_send_as_is") rIt(e.draft_id);
    return a("tengu_feedback_draft_submitted", { type: c(e.type), trigger: c(e.trigger), failure_mode: ce(e.failure_mode), task_category: ce(e.task_category), transcript_included: d.transcript.length > 0 || d.rawTranscriptJsonl ? b("true") : b("false"), transcript_trimmed: S !== null ? b("true") : b("false"), transcript_requested: r ? b("true") : b("false"), transcript_available: e.transcriptAvailable ? b("true") : b("false"), from_this_session: h ? b("true") : b("false"), feedback_id: _e(n.feedbackId), last_request_id: _e(R) }), g("feedback_draft_submit"), { success: true, feedbackId: n.feedbackId };
  }
  m("feedback_draft_submit", n.failureReason ?? "network_error", { from_this_session: h ? b("true") : b("false") });
  let F = p6t(n);
  if (F !== void 0) return { success: false, error: F, orgRefusalReason: Zxe(n) };
  if (n.failureReason === "auth_error") return { success: false, error: !Ooe().error && tPe() || "Couldn't send feedback: not signed in. Run /login, then retry." };
  if (n.payloadTooLarge) return { success: false, error: N, payloadTooLarge: true };
  if (n.failureReason === "policy_blocked") return { success: false, error: kre() ?? "Feedback is disabled by your organization's policy." };
  let P = m6t(n);
  if (P !== void 0) return { success: false, error: `${P} The draft is still queued.` };
  let z = ERt(n) ?? (n.failureReason === "timeout" ? " (request timed out)" : " (couldn't reach the service)"), A = n.refusal?.kind === "other" ? "" : " Try again later.";
  return { success: false, error: `Couldn't send feedback${z}. The draft is still queued.${A}` };
}
async function Z3t(e, r, T) {
  let u = await fMn(e.draft_id, T);
  if (rIt(e.draft_id), !u) return;
  if (e.source_session_id === q()) pMn();
  a("tengu_feedback_draft_discarded", { type: c(e.type), trigger: c(e.trigger), discarded_via: c(r) });
}
export {
  Z3t,
  hlt
};
