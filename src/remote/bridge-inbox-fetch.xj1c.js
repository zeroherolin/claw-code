// remote/bridge-inbox-fetch.xj1c.js — Claude Code 2.1.310 模块 chunk-xj1csf5c.js
import { Dt } from "../fs/content-encoding.v6wj.js";
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { Vt } from "../shared/chunk-9sbknd2z.js";
import { g, m } from "../telemetry/chunk-wn8xtaqg.js";
import { Kp, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { re } from "../shared/chunk-j79dwkaq.js";
import { c1 } from "../shared/chunk-nfgwaxf2.js";
import { tI, jU } from "../telemetry/service-error-detail-not-plain.9kgx.js";
import { By, Yl } from "../artifacts/chunk-m8t7qekn.js";
import { Wce } from "./untrusted-device.5vc7.js";
import { mSt, dBr } from "./bridge-project-files-write.wp8g.js";
import { wx } from "../shared/file-attachments.4ctq.js";
var dft = /^file_[A-Za-z0-9_]{8,80}$/, I = 8e3, S = 16e3, y = 64, A = 512, E = 40, D = /^https:\/\/([a-z0-9-]+\.)*slack\.com\/archives\/[\x21-\x7e]+$/;
function h(e, r) {
  let n = Kp(e);
  return r ? n.replace(/(?![\n\t])[\p{Cc}\p{Zl}\p{Zp}]/gu, " ") : n.replace(/[\p{Cc}\p{Zl}\p{Zp}]/gu, " ").trim();
}
function $Oe(e) {
  return e.replace(/(?!\()\p{Ps}|</gu, "(").replace(/(?!\))\p{Pe}|>/gu, ")").replace(/[\p{Pi}\p{Pf}]/gu, "'").replace(/(?![\p{Sc}\p{Extended_Pictographic}\p{ASCII}])\p{S}/gu, "");
}
function zBe(e) {
  return e === "rc_owner" ? "your user · Remote Control" : "third-party";
}
async function DEo(e) {
  let { sessionId: r, fileId: n, baseUrl: p, getAccessToken: c, getTrustedDeviceToken: s } = e;
  if (!dft.test(n)) return m("bridge_inbox_fetch", "malformed_id"), { ok: false, reason: "malformed", detail: "file_id must be a Files API id (file_…)" };
  try {
    By(r, "session id");
  } catch {
    return m("bridge_inbox_fetch", "malformed_session_id"), { ok: false, reason: "malformed", detail: "session id contains unsafe characters" };
  }
  let i = c();
  if (!i) return t("[bridge] No access token for inbox fetch"), m("bridge_inbox_fetch", "no_token"), { ok: false, reason: "no_token" };
  let l = `${p}/v1/code/sessions/${Yl(r)}/inbox/${n}`, o;
  try {
    o = await Dt.get(l, { headers: dBr(i, { trustedDeviceToken: await s?.() }), timeout: 1e4, maxContentLength: 262144, validateStatus: (a) => a < 500 });
  } catch (a) {
    return t(`[bridge] inbox fetch request failed: ${d(a)}`), m("bridge_inbox_fetch", "request_failed"), { ok: false, reason: "request_failed" };
  }
  if (o.status !== 200) {
    let a = mSt(o.data), f = tI(o.data);
    t(`[bridge] inbox fetch failed ${o.status}${a ? ` [${a}]` : ""}${f ? `: ${f}` : ""}`);
    let _ = o.status === 403 ? Wce(o.data) : void 0, b = o.status === 404 ? "not_found" : _ === "untrusted_device" ? "untrusted_device" : _ === "session_stale_relogin" ? "relogin" : a === "feature_disabled" ? "feature_disabled" : o.status === 403 ? "forbidden" : "http_error";
    return m("bridge_inbox_fetch", b), { ok: false, reason: b, detail: jU(o.data) };
  }
  let u = N(o.data, r, n);
  if (u === "wrong_session") return t("[bridge] inbox fetch: the message names another session — refusing to relay it"), m("bridge_inbox_fetch", "wrong_session"), { ok: false, reason: "wrong_session", detail: "that inbox message is not addressed to this session" };
  if (!u) return t("[bridge] inbox fetch: 200 with an unusable body (missing message/body, a non-UUID message_id, or a file_id other than the one requested)"), m("bridge_inbox_fetch", "malformed_response"), { ok: false, reason: "malformed", detail: "unexpected response shape" };
  return g("bridge_inbox_fetch"), { ok: true, message: u.message, envelopedText: Ojn(u.message), download: { baseUrl: p, accessToken: i } };
}
function Ojn(e, r) {
  let n = { message_id: e.messageId, source: e.source, sender_kind: e.senderKind, body: e.body };
  if (e.senderDisplay) n.sender_display = e.senderDisplay;
  if (e.slackPermalink) n.slack_permalink = e.slackPermalink;
  if (e.createdAt) n.received_at = e.createdAt;
  if (r) n.attachments = r;
  let p = S, c = `<event source="session-inbox" kind="message.content" from="${e.senderKind}" trust="relay" untrusted-keys="body,sender_display,slack_permalink,attachments">
`, s = `
</event>`, i = c1("event", JSON.stringify(n));
  if (c.length + i.length + s.length > p) {
    let l = I;
    do
      l = Math.floor(l / 2), n.body = w(e.bodyHead, l, e.bodyDroppedAtIngest), i = c1("event", JSON.stringify(n));
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
  if (s.file_id !== n || typeof s.message_id !== "string" || Vt(s.message_id) === null || typeof s.body !== "string") return null;
  if (typeof s.session_id !== "string" || s.session_id === "") return null;
  let i;
  try {
    By(s.session_id, "session id"), i = Yl(s.session_id);
  } catch {
    return null;
  }
  if (i !== Yl(r)) return "wrong_session";
  let l = s.message_id.toLowerCase(), o = C(s.sender_kind), u = o === "rc_owner" ? wx({ file_attachments: s.attachments }) : [], a = s.slack && typeof s.slack === "object" ? s.slack : void 0, f = a && typeof a.permalink === "string" ? h(a.permalink, false) : void 0, _ = typeof s.created_at === "string" ? s.created_at : void 0, b = typeof s.sender_display === "string" ? $Oe(h(s.sender_display, false)) : "", x = b.length > y ? `${re(b, y)}…` : b;
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
  $Oe,
  DEo,
  Ojn,
  dft,
  zBe
};
