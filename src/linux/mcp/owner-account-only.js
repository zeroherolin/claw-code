// linux/mcp/owner-account-only.js — Claude Code 2.1.310（linux）模块 chunk-mam24wdr.js
import { Iq } from "../context/not-admin-owned.js";
import { NVe } from "../settings/global-config-and-gates.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { v, Ue, B } from "../vendor/zod/string-format.js";
var u = /* @__PURE__ */ new Set(["interrupt", "stop_task", "send_task_message", "set_permission_mode", "set_model", "set_max_thinking_tokens", "set_color", "mcp_toggle", "message_rated", "side_question", "ui_press", "ui_input", "ui_select", "ui_client_press", "ui_pane_show", "ui_close", "ui_scroll", "ui_prompt_edit"]), _ = /* @__PURE__ */ new Set(["can_use_tool", "request_user_dialog", "elicitation"]), a = /* @__PURE__ */ new Set(["set_model", "set_permission_mode", "set_max_thinking_tokens"]);
function pjn(e) {
  return i(e.request) && !a.has(e.request.subtype);
}
function oPs() {
  Iq(true);
}
function ivo(e, n) {
  switch (e.type) {
    case "user":
      return !(n?.hostOwnsOrigin === true && NVe(e.origin, e.isSynthetic));
    case "bash_command":
      return true;
    case "control_request":
      return i(e.request);
    default:
      return false;
  }
}
function i(e) {
  let n = e?.subtype;
  return typeof n === "string" && u.has(n) && e?.by !== "app";
}
function $9e(e) {
  return _.has(e.request.subtype);
}
var ann = "x-ccr-session-writers", sPs = p(() => Ue({ writers: B(["owner_account_only", "not_owner_only"]), statedAtMs: v() }));
function iPs(e) {
  if (e === null || e.includes(",")) return;
  let n = /* @__PURE__ */ new Map();
  for (let o of e.split(";")) {
    let t = o.trim(), s = t.indexOf("="), r = s === -1 ? "" : t.slice(0, s);
    if (r === "") continue;
    if (n.has(r)) return;
    n.set(r, t.slice(s + 1));
  }
  if (n.get("v") !== "1") return;
  switch (n.get("owner_account_only")) {
    case "true":
      return "owner_account_only";
    case "false":
      return "not_owner_only";
    default:
      return;
  }
}
function F9e(e) {
  return e === "owner_account_only";
}
function wCr({ frameCreatedAt: e, sessionWriters: n, maxFrameAgeMs: o, maxStatementAgeMs: t, now: s }) {
  if (e === void 0) return "no_frame_stamp";
  if (s - e > o) return "stale_frame";
  if (n === void 0) return "session_writers_unknown";
  if (!F9e(n.writers)) return "session_not_owner_only";
  if (t === void 0) return;
  let r = s - n.statedAtMs;
  return r >= 0 && r <= t ? void 0 : "session_writers_stale";
}
export {
  $9e,
  F9e,
  ann,
  iPs,
  ivo,
  oPs,
  pjn,
  sPs,
  wCr
};
