// linux/telemetry/feedback-drafts-setting-changed.js — Claude Code 2.1.310（linux）模块 chunk-wjr82d4q.js
import { c } from "../agents/third-party.js";
import { i } from "../shared/environment.js";
import { qfe, g2 } from "../remote/local-agent.js";
import { Ae } from "../models/total-tokens-reminder.js";
import { a } from "./chunk-9097a12b.js";
import { Un, hM } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { k } from "../settings/global-config-and-gates.js";
import { kre } from "../api/anthropic-client.js";
import { z } from "../shared/chunk-be29de51.js";
function M7t() {
  return hM("feedbackDrafts")[0] ?? "notify";
}
function Vmo() {
  if (kre() !== null) return false;
  if (qfe()) return false;
  if (g2()) return false;
  if (Ae() !== "firstParty") return false;
  let e = i.CLAUDE_CODE_SEND_FEEDBACK;
  if (e === false) return false;
  if (e === true) return k("tengu_juniper_relay", false);
  return k("tengu_juniper_relay", false);
}
function c4() {
  return M7t() !== "off" && Vmo();
}
function NNn(e, { storageV5: t, via: r }) {
  let n = z() && t !== void 0 ? Un("userSettings", { feedbackDrafts: e }, void 0, t) : Un("userSettings", { feedbackDrafts: e });
  return a("tengu_feedback_drafts_setting_changed", { value: c(e), via: c(r) }), n;
}
export {
  M7t,
  NNn,
  Vmo,
  c4
};
