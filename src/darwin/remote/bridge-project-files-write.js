// darwin/remote/bridge-project-files-write.js — Claude Code 2.1.310（darwin）模块 chunk-wp8gqnzc.js
import { Dt } from "../fs/content-encoding.js";
import { d, ui } from "../telemetry/anthropic-workspace-id.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { tI, jU } from "../telemetry/service-error-detail-not-plain.js";
import { pp } from "../artifacts/chunk-a6c9d164.js";
import { o, C, u } from "../vendor/zod/string-format.js";
import { Hs, gy } from "./claude-code-remote.js";
var R = "2023-06-01", cze = "https://github.com/apps/claude/installations/new";
function mSt(e) {
  if (!e || typeof e !== "object") return;
  let r = "error" in e ? e.error : e;
  if (r && typeof r === "object" && "reason" in r && typeof r.reason === "string") return r.reason;
  return;
}
var P = "ccr-byoc-2025-07-29";
async function BZe(e, r) {
  let { sessionId: i, repo: n, prNumber: p, baseUrl: b, getAccessToken: k, getTrustedDeviceToken: c } = r, _ = l1o(e), s = k();
  if (!s) return t(`[bridge] No access token for ${e}-pr`), m(_, "no_token"), { ok: false, reason: "no_token" };
  let y = `${b}/v1/code/github/${e}-pull-request`, w = { session_id: pp(i), repo: n, pr_number: p }, l;
  try {
    l = await Dt.post(y, w, { headers: dBr(s, { trustedDeviceToken: await c?.() }), timeout: 1e4, validateStatus: (a) => a < 500 });
  } catch (a) {
    return t(`[bridge] ${e}-pr request failed: ${d(a)}`), m(_, "request_failed"), { ok: false, reason: "request_failed" };
  }
  if (!(l.status >= 200 && l.status < 300 || l.status === 409)) {
    let a = mSt(l.data), h = tI(l.data);
    return t(`[bridge] ${e}-pr failed ${l.status}${a ? ` [${a}]` : ""}${h ? `: ${h}` : ""}`), m(_, a === "github_app_not_installed" ? a : "http_error"), { ok: false, reason: a, detail: jU(l.data) };
  }
  return t(`[bridge] ${e}-pr ${n}#${p} ok`), g(_), { ok: true };
}
function l1o(e) {
  return e === "subscribe" ? "bridge_pr_subscribe" : "bridge_pr_unsubscribe";
}
function dBr(e, { orgUUID: r, trustedDeviceToken: i } = {}) {
  let n = { Authorization: `Bearer ${e}`, "Content-Type": "application/json", "anthropic-version": R, "anthropic-beta": P, "anthropic-client-platform": gy(), "User-Agent": Hs() };
  if (r !== void 0) n["x-organization-uuid"] = r;
  if (i !== void 0) n["X-Trusted-Device-Token"] = i;
  return n;
}
var d1o = "/worker/record-created-pr";
async function C4s(e) {
  let r = `${e.sessionUrl.replace(/\/+$/, "")}${d1o}`;
  try {
    return { ok: true, status: (await Dt.post(r, { owner: e.owner, repo: e.repo, pr_number: e.prNumber, head_ref: e.headRef }, { headers: { Authorization: `Bearer ${e.workerToken}`, "Content-Type": "application/json", "anthropic-version": R, "anthropic-client-platform": gy(), "User-Agent": Hs() }, timeout: e.timeoutMs })).status };
  } catch (i) {
    let { kind: n, status: p } = ui(i);
    return { ok: false, kind: n, status: p };
  }
}
var T = f(() => u({ results: C(u({ path: o(), error_reason: o().optional() })) })), j = /^chan_[A-Za-z0-9_-]{1,120}$/;
async function T4s(e) {
  let { door: r, items: i, signal: n } = e;
  if (!j.test(r.channelId)) return m("bridge_project_files_write", "invalid_channel"), { ok: false, reason: "invalid_channel" };
  let p = r.getBearerToken();
  if (!p) return m("bridge_project_files_write", "no_token"), { ok: false, reason: "no_token" };
  let b = `${r.apiBaseUrl}/v1/code/sessions/${encodeURIComponent(r.sessionId)}/worker/channels/${encodeURIComponent(r.channelId)}/files:write`, k = { session_id: r.sessionId, channel_id: r.channelId, worker_epoch: r.getWorkerEpoch(), files: i.map((s) => ({ path: s.path, content: s.content.toString("base64") })) }, c;
  try {
    c = await Dt.post(b, k, { headers: dBr(p), timeout: 9e4, maxBodyLength: 1 / 0, signal: n, validateStatus: (s) => s < 500 });
  } catch (s) {
    if (Dt.isCancel(s)) return m("bridge_project_files_write", "aborted"), { ok: false, reason: "aborted" };
    return t(`[bridge] project files write request failed: ${d(s)}`), m("bridge_project_files_write", "request_failed"), { ok: false, reason: "request_failed" };
  }
  if (c.status !== 200) {
    let s = mSt(c.data);
    return t(`[bridge] project files write refused: status=${c.status}${s ? ` [${s}]` : ""}`), m("bridge_project_files_write", "http_error"), { ok: false, reason: "http_error", status: c.status, code: s };
  }
  let _ = T().safeParse(c.data);
  if (!_.success) return m("bridge_project_files_write", "bad_response"), { ok: false, reason: "bad_response" };
  return g("bridge_project_files_write"), { ok: true, results: _.data.results };
}
export {
  BZe,
  C4s,
  T4s,
  cze,
  d1o,
  dBr,
  l1o,
  mSt
};
