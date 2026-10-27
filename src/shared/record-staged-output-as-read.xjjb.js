// shared/record-staged-output-as-read.xjjb.js — Claude Code 2.1.310 模块 chunk-xjjbapcs.js
import "../agents/third-party.ydpb.js";
import { v } from "../telemetry/anthropic-workspace-id.36ys.js";
import "../fs/async-hooks.9s1z.js";
import "./chunk-9sbknd2z.js";
import "../context/not-admin-owned.ersa.js";
import "../fs/chunk-kqpf5fh3.js";
import "./chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import "./chunk-3y73jbfr.js";
import { gee } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import "./chunk-x6r6k81p.js";
import "../models/claude-3-5-sonnet.21mz.js";
import "../fs/backed-up.p1qn.js";
import "./chunk-j79dwkaq.js";
import "./chunk-nrx8c90j.js";
import "./environment.9a41.js";
import "../auth/oauth-2025-04-20.ke15.js";
import "../artifacts/cowritten-artifact-html.thm2.js";
import "../fs/chunk-dz0rx1wn.js";
import "./async-hooks.m2fg.js";
import "./chunk-4kxy1036.js";
import "../shell/chunk-gx93fya1.js";
import { ut, lP } from "../shell/chunk-tjkwy3jp.js";
import "../context/utf-8.yzy3.js";
import { SHe } from "../shell/chunk-0nqmwqfj.js";
import { Ra } from "./chunk-r0nkfxqh.js";
import { eR, CU, uE } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { Yse, k1, Rxe } from "../fs/not-utf8.sqq6.js";
import "../context/tool-result.evq2.js";
import "./chunk-bhdett2m.js";
import { Ee } from "./chunk-f9xfyhm1.js";
import { open as s } from "fs/promises";
var m = 10485760, u = 4;
async function O(r, o) {
  try {
    let t = ut(o);
    if (SHe(t) || lP(t)) return "not_recordable";
    return await f.readAndRecord(r, t);
  } catch (t) {
    let n = v(t);
    return n === "ENOENT" || n === "EISDIR" || Yse(t) || k1(t) ? "not_recordable" : "read_failed";
  }
}
function c() {
  return Ra(u, p);
}
var f = Ee({ readAndRecord: c() }, (r) => {
  r.readAndRecord = c();
});
async function p(r, o) {
  await using t = await s(o, gee());
  let n = Math.floor((await t.stat()).mtimeMs), e = r.get(o);
  if (e !== void 0 && !(e.contentFromTranscript && e.limit === void 0 && eR(e) && e.timestamp < n)) return "kept_existing";
  let i = await Rxe(t, o, m);
  if (i.content.slice(0, 4096).includes("\0")) return "not_recordable";
  let a = uE(i.content);
  if (e !== void 0 && !CU(e, a.trim())) return "kept_existing";
  let d = r.get(o);
  if (d !== void 0 && d !== e) return "kept_existing";
  return r.set(o, { content: a, timestamp: n, offset: void 0, limit: void 0, contentNotInModelContext: true }), "recorded";
}
export {
  O as recordStagedOutputAsRead
};
