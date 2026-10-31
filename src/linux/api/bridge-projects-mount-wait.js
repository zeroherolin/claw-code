// linux/api/bridge-projects-mount-wait.js — Claude Code 2.1.310（linux）模块 chunk-xn0xgn6s.js
import { uR, k } from "../settings/global-config-and-gates.js";
import { vi } from "../context/not-admin-owned.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Vd } from "../mcp/toolbox-mcp-server-id.js";
import { Qc, wqe } from "../context/fetch-project-timeline.js";
import { Xo } from "../mcp/always-allow.js";
import { Akt, VV } from "../artifacts/cobalt-plinth-lovage.js";
import { YBe, mDt } from "../remote/ccr-external-event-record.ded3.js";
import { Sy } from "../core/conversation-engine.js";
import { o, Bd, oe, T, u } from "../vendor/zod/string-format.js";
var w = "tengu_rc_thread_reply_gate";
function Ohr() {
  return k(w, true);
}
var fki = 5e3, pki = 1e3, E = wqe(["reply", "no_reply_needed", "post_message", "react", "update_message", "update_status"]).map((e) => Xo(Qc, e)), x = Xo(Qc, "no_reply_needed"), P = "__no_reply_needed", N = "rc_owner", h = 4, q = p(() => u({ terminal_tools: T(o().min(1).max(256)).min(1).max(64), ask_text: o().trim().min(1).max(4096), max_asks_after_person: Bd().min(0).max(h), max_asks_after_server_event: Bd().min(0).max(h), status_nudge: oe().optional(), prompt_reminder: oe().optional() }));
var Z = p(() => u({ seconds: Bd().min(1).max(86400), visible_tools: T(o().min(1).max(128)).min(1).max(32), text: o().trim().min(1).max(2048) })), Q = p(() => o().trim().min(1).max(2048));
var v = /* @__PURE__ */ new Set(["max_tokens", "model_context_window_exceeded", "pause_turn", "refusal"]);
function Mhr(e) {
  let t = e.mcp.clients.find((n) => n.name === Qc);
  return t !== void 0 && t.type === "connected" && Vd(t.config);
}
async function mki(e, t, n) {
  if (!Ohr()) return;
  let s = performance.now(), d = await Pe(e.then(() => true), n);
  a("tengu_bridge_projects_mount_wait", { waited_ms: Math.round(performance.now() - s), settled: d === true, connected: Mhr(t()) });
}
function Roo(e) {
  let t = uR(e).decider, n = t === null ? void 0 : e[t.index];
  if (t === null || n === void 0) return false;
  return (A(n)?.startsWith(Akt) === true || S(n)) && !_(e.slice(t.index + 1), E).answered;
}
function gki(e, t, n) {
  let s = uR(e).decider, d = 0, r = s;
  while (r !== null) {
    let m = e[r.index];
    if (A(m)?.startsWith(Akt) === true) d++;
    else if (n.kind !== "policy" || m === void 0 || !VV(m)) break;
    r = uR(e.slice(0, r.index)).decider;
  }
  let i = r === null ? void 0 : e[r.index], l = i !== void 0 && (r?.userDriven === true || M(i)), f = j(n, i, l);
  if (d === 0 && f === 0) return { kind: "skip" };
  let c = [...e.slice(s === null ? 0 : s.index + 1), ...t];
  if (!c.some(R)) return { kind: "skip" };
  let { answered: b, noReplyOnly: O, erroredTerminalTool: y } = n.kind === "policy" ? _([...e.slice(r === null ? 0 : r.index + 1), ...t], n.policy.terminalTools) : _(c, E);
  if (b) return { kind: "answered", noReplyOnly: O, personOpened: l };
  if (n.kind === "policy" && (Sy(t)?.isApiErrorMessage === true || v.has(c.findLast(R)?.message.stop_reason ?? null))) return { kind: "skip" };
  let g = y !== void 0 ? "reply_errored" : "silent_turn";
  if (d >= f) return { kind: "still_silent", reason: g, personOpened: l };
  return { kind: "bounce", reason: g, text: `${Akt} ${C(n, y)}`, personOpened: l };
}
function j(e, t, n) {
  switch (e.kind) {
    case "remote_control":
      return t !== void 0 && S(t) ? 1 : 0;
    case "policy":
      return n ? e.policy.maxAsksAfterPerson : e.policy.maxAsksAfterServerEvent;
  }
}
function C(e, t) {
  switch (e.kind) {
    case "remote_control":
      return t !== void 0 ? `Your \`${t}\` call this turn returned an error, so nothing reached the project thread. Call \`${e.toolNames.reply}\` again with what the thread should see, or \`${x}\` if no reply is warranted.` : `Your last turn ended without a terminal \`mcp__${Qc}__*\` tool call, so nothing reached the project thread: plain text is not delivered there. Call \`${e.toolNames.reply}\` now with what the thread should see, \`${e.toolNames.status}\` if you dispatched work that reports back later, or \`${x}\` if no reply is warranted.`;
    case "policy":
      return e.policy.askText;
  }
}
function R(e) {
  return e.type === "assistant" && e.message.model !== vi;
}
function A(e) {
  return e?.type === "user" && e.isMeta === true && typeof e.message.content === "string" ? e.message.content : void 0;
}
function S(e) {
  if (M(e)) return true;
  if (e.type !== "user") return false;
  let t = e.message.content, n = typeof t === "string" ? t : t[0]?.type === "text" ? t[0].text : void 0;
  if (n === void 0) return false;
  let s = YBe(n);
  return s !== null && mDt(s) && s.data.sender_kind === N;
}
function M(e) {
  return e.type === "attachment" ? e.attachment.type === "queued_command" && e.attachment.projectsUserTurn === true : e.type === "user" && e.projectsUserTurn === true;
}
function _(e, t) {
  let n = /* @__PURE__ */ new Set();
  for (let r of e) {
    if (r.type !== "user" || !Array.isArray(r.message.content)) continue;
    for (let i of r.message.content) if (i.type === "tool_result" && i.is_error === true) n.add(i.tool_use_id);
  }
  let s = false, d;
  for (let r of e) {
    if (r.type !== "assistant") continue;
    for (let i of r.message.content) {
      if (i.type !== "tool_use" || !t.includes(i.name)) continue;
      if (n.has(i.id)) {
        d = i.name;
        continue;
      }
      if (!i.name.endsWith(P)) return { answered: true, noReplyOnly: false, erroredTerminalTool: void 0 };
      s = true;
    }
  }
  return { answered: s, noReplyOnly: s, erroredTerminalTool: s ? void 0 : d };
}
export {
  Mhr,
  Ohr,
  Roo,
  fki,
  gki,
  mki,
  pki
};
