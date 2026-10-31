// darwin/tasks/bridge-ingress-demoted.js — Claude Code 2.1.310（darwin）模块 chunk-dnppz9dn.js
import { c } from "../agents/third-party.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, p } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { MK, eit } from "../remote/local-agent.js";
import { fSt } from "../shared/chunk-4f9a38d5.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { hkt, Oor, bKe } from "../fs/reply-across-default-dirs.js";
import { wx } from "../shared/file-attachments.js";
import { eor } from "../mcp/allowed-warning.js";
import { X_e, WLe, GVe, v3o, k3o, err, Mnt } from "../settings/global-config-and-gates.js";
import { o, C, u, Fe, T } from "../vendor/zod/string-format.js";
var G = f(() => C(Fe([o(), C(Fe([u({ type: T("text"), text: o() }), u({ type: o() })]))]))), A = 1e3;
function L1r(e) {
  if (e == null) return { texts: [] };
  if (Array.isArray(e)) {
    let s = e.length;
    for (let d = 0; d < e.length && s <= A; d++) {
      let l = e[d];
      if (Array.isArray(l)) s += l.length;
    }
    if (s > A) return { texts: [], problem: "too_many_items" };
  }
  let n = G().safeParse(e);
  if (!n.success) return { texts: [], problem: "malformed" };
  let r = false, i = n.data.map((s) => {
    if (typeof s === "string") return s;
    let d = [];
    for (let l of s) if (l.type === "text" && "text" in l && typeof l.text === "string") d.push(l.text);
    else r = true;
    return d.join(`
`);
  }).filter((s) => s.trim() !== "");
  return r ? { texts: i, problem: "non_text_ignored" } : { texts: i };
}
var F = 100;
function X3s(e) {
  if (e == null) return { texts: [] };
  if (!Array.isArray(e)) return { texts: [], problem: "malformed_inline_pastes" };
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    if (typeof i !== "string") return { texts: [], problem: "malformed_inline_pastes" };
    if (i.trim() === "") continue;
    if (n.length === F) return { texts: n, problem: "inline_pastes_cut" };
    n.push(i);
  }
  return { texts: n };
}
var P = /* @__PURE__ */ new Set(["ios", "android", "web_claude_ai", "desktop_app"]);
function R(e) {
  return P.has(e) || false;
}
function hTe(e) {
  return e !== void 0 && P.has(e);
}
function oYn(e) {
  return e === "claude_code_cli" || e === "claude_code_vscode";
}
function aUo(e, n) {
  if (n) return;
  return oYn(e) ? { kind: "human" } : void 0;
}
var L = /* @__PURE__ */ new Set(["scheduled_trigger", "force_run_trigger", "github_webhook_trigger", "fire_routine", "pr_steward"]), j = /* @__PURE__ */ new Set(["trigger_fire"]);
function lUo(e) {
  return e !== void 0 && j.has(e);
}
var Z_t = "session_inbox", b = /* @__PURE__ */ new Set(["github_webhook", "pr_steward", "signal_subscription"]);
function J3s(e) {
  return e !== void 0 && (b.has(e) || e === Z_t);
}
var H = "projects-relay";
function dUo({ relayMessageIds: e, isSynthetic: n }) {
  return e !== void 0 || n !== true;
}
var K = "triggerFireReason";
function Q3s(e, n) {
  if (e?.kind !== "task-notification" || e.subkind !== "scheduled-trigger") return e;
  let r = Rpn(n);
  return r === void 0 ? e : { ...e, fireReason: r };
}
function I(e) {
  if (lUo(e)) return { kind: "task-notification", subkind: "scheduled-trigger" };
  if (e === Z_t) return { kind: "task-notification", subkind: "session-inbox" };
  return { kind: "task-notification" };
}
var W = /* @__PURE__ */ new Set(["scheduled_trigger", "force_run_trigger", "fire_routine"]);
function Rpn(e) {
  return k(e, K);
}
function xpn(e, n, r, i) {
  if (e === "now") return e;
  let s = r !== void 0 && V.has(r) && (r !== "trigger_fire" || i !== void 0);
  return n && W.has(n) || s ? "later" : e;
}
var B = /* @__PURE__ */ new Set(["claude-in-slack", "claude_in_slack"]), M = /* @__PURE__ */ new Set([WLe]), w = "claude-in-teams", N1r = "email_human", z = "email_turn_text", Y = ["sender_only", "sender_reply"];
function Ppn(e) {
  if (e.inbound_origin !== N1r) return;
  let n = k(e, z);
  return Y.find((r) => r === n);
}
function sYn(e) {
  return e === Mnt;
}
function Ipn(e) {
  return e === Mnt || e === GVe;
}
function Q(e) {
  if (e === Mnt || e === GVe) return true;
  return e !== void 0 && e.startsWith("hearth");
}
var V = /* @__PURE__ */ new Set(["trigger_fire", "plugin_fire"]), X = "receiver_grouping_id";
function cUo(e) {
  return k(e, X);
}
function k(e, n) {
  let r = e[n];
  return typeof r === "string" ? r : void 0;
}
var q = "activity_observation";
function uUo(e) {
  return k(e, q);
}
function D() {
  return MK();
}
function J() {
  return eit();
}
function Z(e, n) {
  return e !== void 0 && B.has(e) && n === v3o && D();
}
function ee(e, n) {
  return e === w && n === k3o && J();
}
function Cye(e, n) {
  return Z(e, n) || ee(e, n);
}
function E(e, n) {
  return n === void 0 && e !== void 0 && R(e) || Cye(e, n);
}
function iYn(e, n, r) {
  return e ? e.kind === "human" : E(n, r);
}
function Z3s(e, n, r, i) {
  if (e) return e.kind === "human";
  if (!n) return true;
  return E(r, i) || aUo(r, i) !== void 0;
}
function ZBt(e, n, r = false) {
  let i;
  try {
    i = LZe(e);
  } catch {
    return false;
  }
  if (!i || ejt(i.content)) return false;
  let { clientPlatform: s, inboundOrigin: d } = i;
  if (d !== void 0) return n === "bridge" ? Cye(s, d) : eSt(d, r);
  return E(s, void 0) || n === "remote-worker" && oYn(s);
}
function eSt(e, n = false, r = false) {
  return e === v3o || e === k3o || e === err || n && e === Mnt || r && e === N1r;
}
function aYn({ isRelayHuman: e, isSynthetic: n, ccrTurnId: r, isProjectsUser: i = false, emailSenderTurn: s }) {
  if (!e) return {};
  return { ...!n && { verifiedSlackHumanTurn: true }, ...!n && i && { projectsUserTurn: true }, ...!n && s !== void 0 && { emailSenderTurn: s }, ...r !== void 0 && { ccrTurnId: r } };
}
function Opn(e, n, r, i, s, d, l) {
  let m = ejt(e);
  if (m) return { kind: "peer", from: m, inbound_origin: r, ...l !== void 0 && { plugin: l }, ...bKe(e) };
  if (r === Z_t) return I(r);
  if (r && b.has(r)) return I(r);
  let _ = Q(r);
  if (!_ && r === void 0 && n && R(n)) return { kind: "human" };
  if (!_ && Cye(n, r)) return { kind: "human" };
  if (!_ && n && L.has(n)) return I(r);
  if (r === X_e && i) return { kind: "task-notification", subkind: "peer-send-message" };
  t(`[bridge] demoting unwrapped inbound message to peer origin: client_platform=${n || "(absent)"}`, { level: "warn" });
  let y = !n ? "absent" : n.startsWith("claude_code") ? "claude_code" : B.has(n) ? r === WLe && D() ? "slack_bot_observation" : "slack_relay" : n === w ? "teams_relay" : "other";
  return a("tengu_bridge_ingress_demoted", { platform_class: c(y) }), { kind: "peer", from: "unknown", inbound_origin: r, ...bKe(e), ...d !== void 0 && r !== void 0 && M.has(r) && { activityObservation: d } };
}
function HZe(e, n, r) {
  if (e && e.kind !== "peer" && e.kind !== "slack-ping") return e;
  if (n && L.has(n)) return I(r);
  if (n && R(n)) return { kind: "human" };
  return;
}
function pUo(e, n, r, i, s, d = false, l = false, m, _ = false) {
  let y = ejt(e);
  if (y) return { kind: "peer", from: y, inbound_origin: r, ...bKe(e), ...m !== void 0 && { plugin: m } };
  if (r && !M.has(r)) {
    if (r === Mnt) if (d) g("bridge_projects_human_origin");
    else p("bridge_projects_human_origin", "disabled_by_flag");
    if (eSt(r, d, _)) return { kind: "human" };
    if (r === GVe && l) return { kind: "task-notification", subkind: H };
    if (r === X_e && i) return { kind: "task-notification", subkind: "peer-send-message" };
    return I(r);
  }
  if (oYn(n)) return { kind: "human" };
  if (n?.startsWith("claude_code")) return;
  return Opn(e, n, r, i, void 0, s, m);
}
function DZe(e) {
  return e.verifiedSlackHumanTurn === true && e.priority !== "now";
}
function e4s(e, n) {
  if (e === "now") return e;
  return n ? "later" : e;
}
function yTe(e) {
  let i = e.trimStart(), s = false;
  while (i.startsWith("<system-reminder>")) {
    let l = i.indexOf("</system-reminder>");
    if (l < 0) break;
    i = i.slice(l + 18).trimStart(), s = true;
  }
  let d = (s ? i : e).trimEnd();
  while (d.endsWith("</system-reminder>")) {
    let l = d.lastIndexOf(`
`);
    if (!(l < 0 ? d : d.slice(l + 1)).startsWith("<system-reminder>")) break;
    d = (l < 0 ? "" : d.slice(0, l)).trimEnd(), s = true;
  }
  if (!s) return e;
  return d === "" ? e : d;
}
function fUo(e) {
  let n;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    if (i.type !== "text") continue;
    let s = yTe(i.text);
    if (s === i.text) continue;
    n ??= [...e], n[r] = { ...i, text: s };
  }
  return n ?? e;
}
function LZe(e) {
  if (e.type !== "user") return;
  let n = "pasted_content" in e ? e.pasted_content : void 0, r = "inline_pastes" in e ? e.inline_pastes : void 0, i = wx(e).length > 0 || L1r(n).texts.length > 0, s = e.message?.content;
  if (!s && !i) return;
  if (Array.isArray(s) && s.length === 0 && !i) return;
  let d = "uuid" in e && typeof e.uuid === "string" ? e.uuid : void 0, l = k(e, "client_platform"), m = k(e, "inbound_origin"), _ = "wake_envelope" in e ? e.wake_envelope : void 0, y = cUo(e), x = uUo(e), U = hkt("from_plugin" in e ? e.from_plugin : void 0), v, S = Array.isArray(s) ? mUo(fUo(ne(s))) : yTe(s ?? "");
  if (Array.isArray(S) && S.length === 0 && !i) return;
  return { content: S, uuid: d, clientPlatform: l, inboundOrigin: m, wakeEnvelope: _, receiverGroupingId: y, slackOrigin: v, activityObservation: x, pastedContent: n, inlinePastes: r, fromPlugin: U };
}
function ejt(e) {
  if (typeof e !== "string") return;
  return e.match(Oor)?.[1];
}
function _Te(e) {
  if (typeof e === "string") return ejt(e) !== void 0;
  if (!Array.isArray(e)) return false;
  return e.some((n) => typeof n === "object" && n !== null && "type" in n && n.type === "text" && "text" in n && typeof n.text === "string" && ejt(n.text) !== void 0);
}
function mUo(e) {
  if (!e.some(N)) return e;
  return e.filter((n) => !N(n));
}
function N(e) {
  if (e.type !== "text") return false;
  return typeof e.text !== "string" || e.text.trim() === "";
}
function ne(e) {
  if (!e.some(O)) return e;
  return e.map((n) => {
    if (!O(n)) return n;
    let r = n.source, i = typeof r.mediaType === "string" && r.mediaType ? r.mediaType : fSt(n.source.data);
    return { ...n, source: { type: "base64", media_type: i, data: n.source.data } };
  });
}
function O(e) {
  if (e.type !== "image" || e.source?.type !== "base64") return false;
  return !e.source.media_type;
}
function gTe(e, n) {
  let r = e.onCommandLifecycle;
  e.onCommandLifecycle = (...i) => {
    r?.(...i), n(...i);
  };
}
function rYn(e, n) {
  return n || eor(e) ? "cancelled" : "completed";
}
export {
  Cye,
  DZe,
  HZe,
  Ipn,
  J3s,
  L1r,
  LZe,
  N1r,
  Opn,
  Ppn,
  Q3s,
  Rpn,
  X3s,
  Z3s,
  ZBt,
  Z_t,
  _Te,
  aUo,
  aYn,
  cUo,
  dUo,
  e4s,
  eSt,
  ejt,
  fUo,
  gTe,
  hTe,
  iYn,
  lUo,
  mUo,
  oYn,
  pUo,
  rYn,
  sYn,
  uUo,
  xpn,
  yTe
};
