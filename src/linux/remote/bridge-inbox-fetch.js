// linux/remote/bridge-inbox-fetch.js — Claude Code 2.1.310（linux）模块 chunk-ff2bdkce.js
import { Ht } from "../fs/content-encoding.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { Kt } from "../shared/chunk-3b9c376b.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { Yf, t } from "../fs/gitlab-runner-authentication-token.js";
import { re } from "../shared/chunk-d2c47492.js";
import { sB } from "../shared/chunk-dda594a8.js";
import { QP, NU } from "../telemetry/service-error-detail-not-plain.js";
import { Fy, Yl } from "../artifacts/chunk-a6c9d164.js";
import { Lce } from "./untrusted-device.js";
import { vbt, _1r } from "./bridge-project-files-write.js";
import { _x } from "../shared/file-attachments.js";
var Jft = /^file_[A-Za-z0-9_]{8,80}$/, I = 8e3, S = 16e3, y = 64, A = 512, E = 40, D = /^https:\/\/([a-z0-9-]+\.)*slack\.com\/archives\/[\x21-\x7e]+$/;
function h(e, r) {
  let n = Yf(e);
  return r ? n.replace(/(?![\n\t])[\p{Cc}\p{Zl}\p{Zp}]/gu, " ") : n.replace(/[\p{Cc}\p{Zl}\p{Zp}]/gu, " ").trim();
}
function OOe(e) {
  return e.replace(/(?!\()\p{Ps}|</gu, "(").replace(/(?!\))\p{Pe}|>/gu, ")").replace(/[\p{Pi}\p{Pf}]/gu, "'").replace(/(?![\p{Sc}\p{Extended_Pictographic}\p{ASCII}])\p{S}/gu, "");
}
function I1e(e) {
  return e === "rc_owner" ? "your user · Remote Control" : "third-party";
}
async function Xwo(e) {
  let { sessionId: r, fileId: n, baseUrl: p, getAccessToken: c, getTrustedDeviceToken: s } = e;
  if (!Jft.test(n)) return m("bridge_inbox_fetch", "malformed_id"), { ok: false, reason: "malformed", detail: "file_id must be a Files API id (file_…)" };
  try {
    Fy(r, "session id");
  } catch {
    return m("bridge_inbox_fetch", "malformed_session_id"), { ok: false, reason: "malformed", detail: "session id contains unsafe characters" };
  }
  let i = c();
  if (!i) return t("[bridge] No access token for inbox fetch"), m("bridge_inbox_fetch", "no_token"), { ok: false, reason: "no_token" };
  let l = `${p}/v1/code/sessions/${Yl(r)}/inbox/${n}`, o;
  try {
    o = await Ht.get(l, { headers: _1r(i, { trustedDeviceToken: await s?.() }), timeout: 1e4, maxContentLength: 262144, validateStatus: (a) => a < 500 });
  } catch (a) {
    return t(`[bridge] inbox fetch request failed: ${d(a)}`), m("bridge_inbox_fetch", "request_failed"), { ok: false, reason: "request_failed" };
  }
  if (o.status !== 200) {
    let a = vbt(o.data), f = QP(o.data);
    t(`[bridge] inbox fetch failed ${o.status}${a ? ` [${a}]` : ""}${f ? `: ${f}` : ""}`);
    let _ = o.status === 403 ? Lce(o.data) : void 0, b = o.status === 404 ? "not_found" : _ === "untrusted_device" ? "untrusted_device" : _ === "session_stale_relogin" ? "relogin" : a === "feature_disabled" ? "feature_disabled" : o.status === 403 ? "forbidden" : "http_error";
    return m("bridge_inbox_fetch", b), { ok: false, reason: b, detail: NU(o.data) };
  }
  let u = N(o.data, r, n);
  if (u === "wrong_session") return t("[bridge] inbox fetch: the message names another session — refusing to relay it"), m("bridge_inbox_fetch", "wrong_session"), { ok: false, reason: "wrong_session", detail: "that inbox message is not addressed to this session" };
  if (!u) return t("[bridge] inbox fetch: 200 with an unusable body (missing message/body, a non-UUID message_id, or a file_id other than the one requested)"), m("bridge_inbox_fetch", "malformed_response"), { ok: false, reason: "malformed", detail: "unexpected response shape" };
  return g("bridge_inbox_fetch"), { ok: true, message: u.message, envelopedText: rjn(u.message), download: { baseUrl: p, accessToken: i } };
}
function rjn(e, r) {
  let n = { message_id: e.messageId, source: e.source, sender_kind: e.senderKind, body: e.body };
  if (e.senderDisplay) n.sender_display = e.senderDisplay;
  if (e.slackPermalink) n.slack_permalink = e.slackPermalink;
  if (e.createdAt) n.received_at = e.createdAt;
  if (r) n.attachments = r;
  let p = S, c = `<event source="session-inbox" kind="message.content" from="${e.senderKind}" trust="relay" untrusted-keys="body,sender_display,slack_permalink,attachments">
`, s = `
</event>`, i = sB("event", JSON.stringify(n));
  if (c.length + i.length + s.length > p) {
    let l = I;
    do
      l = Math.floor(l / 2), n.body = w(e.bodyHead, l, e.bodyDroppedAtIngest), i = sB("event", JSON.stringify(n));
    while (l > 64 && c.length + i.length + s.length > p);
  }
  return `${c}${i}${s}`;
}
function w(e, r, n = 0) {
  return e.length > r ? `${re(e, r)} […truncated ${e.length - r + n} chars]` : n > 0 ? `${e} […truncated ${n} chars]` : e;
}
function N(e, r, n) {
  if (!e || typeof e !== "object") return null;
  let c = e.message;
  if (!c || typeof c !== "object") return null;
  let s = c;
  if (s.file_id !== n || typeof s.message_id !== "string" || Kt(s.message_id) === null || typeof s.body !== "string") return null;
  if (typeof s.session_id !== "string" || s.session_id === "") return null;
  let i;
  try {
    Fy(s.session_id, "session id"), i = Yl(s.session_id);
  } catch {
    return null;
  }
  if (i !== Yl(r)) return "wrong_session";
  let l = s.message_id.toLowerCase(), o = C(s.sender_kind), u = o === "rc_owner" ? _x({ file_attachments: s.attachments }) : [], a = s.slack && typeof s.slack === "object" ? s.slack : void 0, f = a && typeof a.permalink === "string" ? h(a.permalink, false) : void 0, _ = typeof s.created_at === "string" ? s.created_at : void 0, b = typeof s.sender_display === "string" ? OOe(h(s.sender_display, false)) : "", x = b.length > y ? `${re(b, y)}…` : b;
  return { message: { messageId: l, senderKind: o, senderDisplay: x || void 0, ...u.length > 0 && { attachments: u }, source: k(s.source, "SESSION_INBOX_SOURCE_"), ...P(h(s.body, true)), slackPermalink: f && f.length <= A && D.test(f) ? f : void 0, createdAt: _ && _.length <= E && /^\d{4}-\d{2}-\d{2}T[0-9:.]+(Z|[+-]\d{2}:\d{2})$/.test(_) ? _ : void 0 } };
}
var R = ["slack_user", "account", "rc_owner"];
function C(e) {
  let r = k(e, "SESSION_INBOX_SENDER_KIND_");
  return R.find((n) => n === r) ?? "unknown";
}
function k(e, r) {
  if (typeof e !== "string") return "";
  let n = e.startsWith(r) ? e.slice(r.length) : e;
  return /^[A-Za-z_]{1,32}$/.test(n) && !n.endsWith("UNSPECIFIED") ? n.toLowerCase() : "";
}
function P(e) {
  if (e.length <= I) return { body: e, bodyHead: e, bodyDroppedAtIngest: 0 };
  let r = re(e, I), n = e.length - r.length;
  return { body: `${r} […truncated ${n} chars]`, bodyHead: r, bodyDroppedAtIngest: n };
}
export {
  I1e,
  Jft,
  OOe,
  Xwo,
  rjn
};
