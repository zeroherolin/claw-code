// linux/shared/chunk-a5f59e6a.js — Claude Code 2.1.310（linux）模块 chunk-9v1g0mex.js
import { __asset_src } from "../../runtime/assets.js";
import { q } from "../context/not-admin-owned.js";
import { i } from "./environment.js";
import { _ } from "../fs/gitlab-runner-authentication-token.js";
import { Nc } from "../remote/local-agent.js";
import { Ufn } from "../remote/chunk-8734517b.js";
import { rW } from "./chunk-1f805b50.js";
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
  return e && e.length ? s(e, rW(t, 2)) : 0;
}
var IHe = u;
var YL = 20971520, f = "application/vnd.ant.frame-refusal+json";
function Yc() {
  return { Accept: `application/json, ${f}`, "X-Frame-CP": "go", "X-Frame-Surface": "code", "X-Frame-Platform": Nc() ? "desktop" : "cli", "X-Frame-Client-Version": { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, "X-Frame-Session-Id": iFo() ?? q() };
}
var E = /^(?:session_|cse_)[A-Za-z0-9_-]{1,184}$/;
function iFo() {
  let e = i.CLAUDE_CODE_REMOTE_SESSION_ID ?? Ufn();
  return e && E.test(e) ? e : void 0;
}
var m = /^req_[A-Za-z0-9_-]{4,128}$/;
function oAe(e) {
  return e !== void 0 && m.test(e) ? { request_id: e } : {};
}
var L_t = "create_confirmed=1", d8n = "anthropic/frameCreateConfirmed", pye = /unknown field|not a recognized|not allowlisted/i;
function f$(e) {
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
function N_t(e, t) {
  return e.includes(`'${t}'`) || new RegExp(`"${t}"(?!\\??:)`).test(e);
}
function c8n(e, t) {
  let n = f$(e);
  return pye.test(n) && N_t(n, t);
}
var xY = /^[A-Za-z0-9_-]{1,64}$/;
export {
  IHe,
  L_t,
  N_t,
  YL,
  Yc,
  c8n,
  d8n,
  f$,
  iFo,
  oAe,
  pye,
  xY
};
