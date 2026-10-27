// context/ccr-recap-generate.bwce.js — Claude Code 2.1.310 模块 chunk-bwcezzhb.js
import { Ne, as } from "../fs/async-hooks.9s1z.js";
import { ye } from "./not-admin-owned.ersa.js";
import { i } from "../shared/environment.9a41.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { zH } from "../shared/chunk-j79dwkaq.js";
import { mt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { g, m, p } from "../telemetry/chunk-wn8xtaqg.js";
import { Ut, k } from "../settings/global-config-and-gates.27xj.js";
import { xbr } from "./classifier-disabled-surfaces.x4d0.js";
import { F_ } from "./org-memory-writes-setting-changed.w8x9.js";
import { P0, nx, Oe } from "../core/conversation-engine.31gx.js";
function Act() {
  let e = process.env.CLAUDE_CODE_ENABLE_AWAY_SUMMARY;
  if (as(e)) return false;
  if (Ne(e)) return true;
  if (ye()) return false;
  if (mt()?.awaySummaryEnabled === false) return false;
  return true;
}
function y() {
  let e = i.CLAUDE_CODE_ENABLE_REMOTE_RECAP;
  if (e !== void 0) return e;
  return k("tengu_harbor_moth", false);
}
function J7t(e, a) {
  if (!a.onMetadataChanged) return;
  if (Ut() || !xbr() || !y()) return;
  if (e.startedForTurnEnd) return;
  e.startedForTurnEnd = true, S(e, a);
}
function ouo(e) {
  e.reset();
}
async function S(e, a) {
  e.inFlight?.abort();
  let r = new AbortController();
  e.inFlight = r;
  let n = await Q7t(r.signal);
  if (r.signal.aborted) return;
  if (n.kind !== "ok") {
    if (n.kind !== "no-turn") m("ccr_recap_generate", n.kind);
    return;
  }
  if (a.getState() === "running") {
    t("[awaySummary] ccr recap dropped: new turn already running");
    return;
  }
  if (a.notifyMetadataChanged({ recap: n.text }), n.capped) p("ccr_recap_generate", "capped");
  else g("ccr_recap_generate");
}
var h = "The user stepped away and is coming back. Recap in under 40 words, 1-2 plain sentences, no markdown. Lead with the overall goal and current task, then the one next action. Skip root-cause narrative, fix internals, secondary to-dos, and em-dash tangents.", f = 400;
async function Q7t(e, a) {
  let r = P0();
  if (!r && a) {
    if (e.aborted) return { kind: "aborted" };
    try {
      r = await a();
    } catch (o) {
      return t(`[awaySummary] fallback params rebuild failed: ${o}`), { kind: "failed" };
    }
    if (e.aborted) return { kind: "aborted" };
  }
  if (!r) return t("[awaySummary] no CacheSafeParams saved, skipping"), { kind: "no-turn" };
  let n = new AbortController();
  e.addEventListener("abort", () => n.abort(), { once: true });
  try {
    let { messages: o } = await nx({ promptMessages: [Oe({ content: h })], cacheSafeParams: r, overrides: { abortController: n }, canUseTool: async () => ({ behavior: "deny", message: "Away summary cannot use tools", decisionReason: { type: "other", reason: "away_summary" } }), querySource: "away_summary", forkLabel: "away_summary", maxTurns: 1, skipCacheWrite: true, skipTranscript: true });
    if (e.aborted) return { kind: "aborted" };
    let u = o.find((c) => c.type === "assistant" && c.isApiErrorMessage);
    if (u) return { kind: "api-error", text: l([u], true) };
    let s = l(o, false), d = s.length > f;
    if (d) {
      let c = zH(s, f);
      t(`[awaySummary] recap capped from ${s.length} to ${c.length} chars`), s = c;
    }
    return s ? { kind: "ok", text: s, capped: d } : { kind: "failed" };
  } catch (o) {
    if (e.aborted) return { kind: "aborted" };
    return t(`[awaySummary] generation failed: ${o}`), { kind: "failed" };
  }
}
function l(e, a) {
  return F_(e.flatMap((r) => r.type === "assistant" && (a || !r.isApiErrorMessage) ? r.message.content : []).filter((r) => r.type === "text").map((r) => "text" in r ? r.text : "").join("")).trim();
}
export {
  Act,
  J7t,
  Q7t,
  ouo
};
