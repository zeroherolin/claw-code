// telemetry/feedback-drafts-setting-changed.34t3.js — Claude Code 2.1.310 模块 chunk-34t3vyxc.js
import { c } from "../agents/third-party.ydpb.js";
import { i } from "../shared/environment.9a41.js";
import { tfe, kz } from "../remote/local-agent.we9a.js";
import { Te } from "../models/total-tokens-reminder.psq3.js";
import { a } from "./chunk-wq923bwc.js";
import { Un, EM } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { k } from "../settings/global-config-and-gates.27xj.js";
import { Hre } from "../api/anthropic-client.7pf8.js";
import { z } from "../shared/chunk-mxa4mwnj.js";
function WQt() {
  return EM("feedbackDrafts")[0] ?? "notify";
}
function ygo() {
  if (Hre() !== null) return false;
  if (tfe()) return false;
  if (kz()) return false;
  if (Te() !== "firstParty") return false;
  let e = i.CLAUDE_CODE_SEND_FEEDBACK;
  if (e === false) return false;
  if (e === true) return k("tengu_juniper_relay", false);
  return k("tengu_juniper_relay", false);
}
function bq() {
  return WQt() !== "off" && ygo();
}
function XNn(e, { storageV5: t, via: r }) {
  let n = z() && t !== void 0 ? Un("userSettings", { feedbackDrafts: e }, void 0, t) : Un("userSettings", { feedbackDrafts: e });
  return a("tengu_feedback_drafts_setting_changed", { value: c(e), via: c(r) }), n;
}
export {
  WQt,
  XNn,
  bq,
  ygo
};
