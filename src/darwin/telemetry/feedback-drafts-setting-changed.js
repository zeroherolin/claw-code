// darwin/telemetry/feedback-drafts-setting-changed.js — Claude Code 2.1.310（darwin）模块 chunk-34t3vyxc.js
import { c } from "../agents/third-party.js";
import { i } from "../shared/environment.js";
import { tfe, kz } from "../remote/local-agent.js";
import { Te } from "../models/total-tokens-reminder.js";
import { a } from "./chunk-9097a12b.js";
import { Un, EM } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { k } from "../settings/global-config-and-gates.js";
import { Hre } from "../api/anthropic-client.js";
import { z } from "../shared/chunk-be29de51.js";
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
