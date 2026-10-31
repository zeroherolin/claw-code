// darwin/api/bridge-projects-mount-wait.js — Claude Code 2.1.310（darwin）模块 chunk-tqzavay5.js
import { mR, k } from "../settings/global-config-and-gates.js";
import { Ei } from "../context/not-admin-owned.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { Kd } from "../mcp/toolbox-mcp-server-id.js";
import { Zc, xKe } from "../context/fetch-project-timeline.js";
import { jo } from "../mcp/always-allow.js";
import { Hkt, oK } from "../artifacts/cobalt-plinth-lovage.js";
import { nBe, u0t } from "../remote/ccr-external-event-record.ded3.js";
import { Ey } from "../core/conversation-engine.js";
import { o, Bd, oe, C, u } from "../vendor/zod/string-format.js";
var O = "tengu_rc_thread_reply_gate";
function qhr() {
  return k(O, true);
}
var Yki = 5e3, Xki = 1e3, R = xKe(["reply", "no_reply_needed", "post_message", "react", "update_message", "update_status"]).map((e) => jo(Zc, e)), x = jo(Zc, "no_reply_needed"), w = "__no_reply_needed", P = "rc_owner", T = 4, q = f(() => u({ terminal_tools: C(o().min(1).max(256)).min(1).max(64), ask_text: o().trim().min(1).max(4096), max_asks_after_person: Bd().min(0).max(T), max_asks_after_server_event: Bd().min(0).max(T), status_nudge: oe().optional(), prompt_reminder: oe().optional() }));
var Z = f(() => u({ seconds: Bd().min(1).max(86400), visible_tools: C(o().min(1).max(128)).min(1).max(32), text: o().trim().min(1).max(2048) })), Q = f(() => o().trim().min(1).max(2048));
var N = /* @__PURE__ */ new Set(["max_tokens", "model_context_window_exceeded", "pause_turn", "refusal"]);
function Yhr(e) {
  let t = e.mcp.clients.find((n) => n.name === Zc);
  return t !== void 0 && t.type === "connected" && Kd(t.config);
}
async function Jki(e, t, n) {
  if (!qhr()) return;
  let s = performance.now(), d = await Pe(e.then(() => true), n);
  a("tengu_bridge_projects_mount_wait", { waited_ms: Math.round(performance.now() - s), settled: d === true, connected: Yhr(t()) });
}
function Qoo(e) {
  let t = mR(e).decider, n = t === null ? void 0 : e[t.index];
  if (t === null || n === void 0) return false;
  return (E(n)?.startsWith(Hkt) === true || A(n)) && !m(e.slice(t.index + 1), R).answered;
}
function Qki(e, t, n) {
  let s = mR(e).decider, d = 0, r = s;
  while (r !== null) {
    let p = e[r.index];
    if (E(p)?.startsWith(Hkt) === true) d++;
    else if (n.kind !== "policy" || p === void 0 || !oK(p)) break;
    r = mR(e.slice(0, r.index)).decider;
  }
  let i = r === null ? void 0 : e[r.index], l = i !== void 0 && (r?.userDriven === true || S(i)), _ = v(n, i, l);
  if (d === 0 && _ === 0) return { kind: "skip" };
  let c = [...e.slice(s === null ? 0 : s.index + 1), ...t];
  if (!c.some(h)) return { kind: "skip" };
  let { answered: M, noReplyOnly: b, erroredTerminalTool: y } = n.kind === "policy" ? m([...e.slice(r === null ? 0 : r.index + 1), ...t], n.policy.terminalTools) : m(c, R);
  if (M) return { kind: "answered", noReplyOnly: b, personOpened: l };
  if (n.kind === "policy" && (Ey(t)?.isApiErrorMessage === true || N.has(c.findLast(h)?.message.stop_reason ?? null))) return { kind: "skip" };
  let g = y !== void 0 ? "reply_errored" : "silent_turn";
  if (d >= _) return { kind: "still_silent", reason: g, personOpened: l };
  return { kind: "bounce", reason: g, text: `${Hkt} ${j(n, y)}`, personOpened: l };
}
function v(e, t, n) {
  switch (e.kind) {
    case "remote_control":
      return t !== void 0 && A(t) ? 1 : 0;
    case "policy":
      return n ? e.policy.maxAsksAfterPerson : e.policy.maxAsksAfterServerEvent;
  }
}
function j(e, t) {
  switch (e.kind) {
    case "remote_control":
      return t !== void 0 ? `Your \`${t}\` call this turn returned an error, so nothing reached the project thread. Call \`${e.toolNames.reply}\` again with what the thread should see, or \`${x}\` if no reply is warranted.` : `Your last turn ended without a terminal \`mcp__${Zc}__*\` tool call, so nothing reached the project thread: plain text is not delivered there. Call \`${e.toolNames.reply}\` now with what the thread should see, \`${e.toolNames.status}\` if you dispatched work that reports back later, or \`${x}\` if no reply is warranted.`;
    case "policy":
      return e.policy.askText;
  }
}
function h(e) {
  return e.type === "assistant" && e.message.model !== Ei;
}
function E(e) {
  return e?.type === "user" && e.isMeta === true && typeof e.message.content === "string" ? e.message.content : void 0;
}
function A(e) {
  if (S(e)) return true;
  if (e.type !== "user") return false;
  let t = e.message.content, n = typeof t === "string" ? t : t[0]?.type === "text" ? t[0].text : void 0;
  if (n === void 0) return false;
  let s = nBe(n);
  return s !== null && u0t(s) && s.data.sender_kind === P;
}
function S(e) {
  return e.type === "attachment" ? e.attachment.type === "queued_command" && e.attachment.projectsUserTurn === true : e.type === "user" && e.projectsUserTurn === true;
}
function m(e, t) {
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
      if (!i.name.endsWith(w)) return { answered: true, noReplyOnly: false, erroredTerminalTool: void 0 };
      s = true;
    }
  }
  return { answered: s, noReplyOnly: s, erroredTerminalTool: s ? void 0 : d };
}
export {
  Jki,
  Qki,
  Qoo,
  Xki,
  Yhr,
  Yki,
  qhr
};
