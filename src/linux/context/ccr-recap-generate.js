// linux/context/ccr-recap-generate.js — Claude Code 2.1.310（linux）模块 chunk-whnycq3s.js
import { Ne, is } from "../fs/async-hooks.93b1.js";
import { ye } from "./not-admin-owned.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { jH } from "../shared/chunk-d2c47492.js";
import { pt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { Ut, k } from "../settings/global-config-and-gates.js";
import { mSr } from "./classifier-disabled-surfaces.js";
import { N_ } from "./org-memory-writes-setting-changed.js";
import { AD, ZR, Oe } from "../core/conversation-engine.js";
function kct() {
  let e = process.env.CLAUDE_CODE_ENABLE_AWAY_SUMMARY;
  if (is(e)) return false;
  if (Ne(e)) return true;
  if (ye()) return false;
  if (pt()?.awaySummaryEnabled === false) return false;
  return true;
}
function y() {
  let e = i.CLAUDE_CODE_ENABLE_REMOTE_RECAP;
  if (e !== void 0) return e;
  return k("tengu_harbor_moth", false);
}
function BJt(e, a) {
  if (!a.onMetadataChanged) return;
  if (Ut() || !mSr() || !y()) return;
  if (e.startedForTurnEnd) return;
  e.startedForTurnEnd = true, S(e, a);
}
function Dco(e) {
  e.reset();
}
async function S(e, a) {
  e.inFlight?.abort();
  let r = new AbortController();
  e.inFlight = r;
  let n = await jJt(r.signal);
  if (r.signal.aborted) return;
  if (n.kind !== "ok") {
    if (n.kind !== "no-turn") m("ccr_recap_generate", n.kind);
    return;
  }
  if (a.getState() === "running") {
    t("[awaySummary] ccr recap dropped: new turn already running");
    return;
  }
  if (a.notifyMetadataChanged({ recap: n.text }), n.capped) f("ccr_recap_generate", "capped");
  else g("ccr_recap_generate");
}
var h = "The user stepped away and is coming back. Recap in under 40 words, 1-2 plain sentences, no markdown. Lead with the overall goal and current task, then the one next action. Skip root-cause narrative, fix internals, secondary to-dos, and em-dash tangents.", p = 400;
async function jJt(e, a) {
  let r = AD();
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
    let { messages: o } = await ZR({ promptMessages: [Oe({ content: h })], cacheSafeParams: r, overrides: { abortController: n }, canUseTool: async () => ({ behavior: "deny", message: "Away summary cannot use tools", decisionReason: { type: "other", reason: "away_summary" } }), querySource: "away_summary", forkLabel: "away_summary", maxTurns: 1, skipCacheWrite: true, skipTranscript: true });
    if (e.aborted) return { kind: "aborted" };
    let u = o.find((c) => c.type === "assistant" && c.isApiErrorMessage);
    if (u) return { kind: "api-error", text: l([u], true) };
    let s = l(o, false), d = s.length > p;
    if (d) {
      let c = jH(s, p);
      t(`[awaySummary] recap capped from ${s.length} to ${c.length} chars`), s = c;
    }
    return s ? { kind: "ok", text: s, capped: d } : { kind: "failed" };
  } catch (o) {
    if (e.aborted) return { kind: "aborted" };
    return t(`[awaySummary] generation failed: ${o}`), { kind: "failed" };
  }
}
function l(e, a) {
  return N_(e.flatMap((r) => r.type === "assistant" && (a || !r.isApiErrorMessage) ? r.message.content : []).filter((r) => r.type === "text").map((r) => "text" in r ? r.text : "").join("")).trim();
}
export {
  BJt,
  Dco,
  jJt,
  kct
};
