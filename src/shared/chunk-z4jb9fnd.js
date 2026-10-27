// shared/chunk-z4jb9fnd.js — Claude Code 2.1.310 模块 chunk-z4jb9fnd.js
import { __asset_src } from "../runtime/assets.js";
import { V } from "../context/not-admin-owned.ersa.js";
import { i } from "./environment.9a41.js";
import { _ } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Nc } from "../remote/local-agent.we9a.js";
import { ofn } from "../remote/chunk-c1rfegja.js";
import { pW } from "./chunk-81mpzfkq.js";
function c(e, t) {
  var n, o = -1, p = e.length;
  while (++o < p) {
    var r = t(e[o]);
    if (r !== void 0) n = n === void 0 ? r : n + r;
  }
  return n;
}
var s = c;
function u(e, t) {
  return e && e.length ? s(e, pW(t, 2)) : 0;
}
var NHe = u;
var QD = 20971520, f = "application/vnd.ant.frame-refusal+json";
function Xc() {
  return { Accept: `application/json, ${f}`, "X-Frame-CP": "go", "X-Frame-Surface": "code", "X-Frame-Platform": Nc() ? "desktop" : "cli", "X-Frame-Client-Version": { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION, "X-Frame-Session-Id": D$o() ?? V() };
}
var E = /^(?:session_|cse_)[A-Za-z0-9_-]{1,184}$/;
function D$o() {
  let e = i.CLAUDE_CODE_REMOTE_SESSION_ID ?? ofn();
  return e && E.test(e) ? e : void 0;
}
var m = /^req_[A-Za-z0-9_-]{4,128}$/;
function cTe(e) {
  return e !== void 0 && m.test(e) ? { request_id: e } : {};
}
var W_t = "create_confirmed=1", x8n = "anthropic/frameCreateConfirmed", Sye = /unknown field|not a recognized|not allowlisted/i;
function hF(e) {
  if (typeof e === "string") return e;
  if (e && typeof e === "object") {
    if ("error" in e && typeof e.error === "string") {
      let t = "reason" in e && typeof e.reason === "string" ? ` [${e.reason}]` : "";
      return e.error + t;
    }
    return _(e) ?? "";
  }
  return "";
}
function G_t(e, t) {
  return e.includes(`'${t}'`) || new RegExp(`"${t}"(?!\\??:)`).test(e);
}
function P8n(e, t) {
  let n = hF(e);
  return Sye.test(n) && G_t(n, t);
}
var $3 = /^[A-Za-z0-9_-]{1,64}$/;
export {
  $3,
  D$o,
  G_t,
  NHe,
  P8n,
  QD,
  Sye,
  W_t,
  Xc,
  cTe,
  hF,
  x8n
};
