// darwin/shared/record-staged-output-as-read.js — Claude Code 2.1.310（darwin）模块 chunk-xjjbapcs.js
import "../agents/third-party.js";
import { v } from "../telemetry/anthropic-workspace-id.js";
import "../fs/async-hooks.93b1.js";
import "./chunk-3b9c376b.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "./chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "./chunk-37dd5dd4.js";
import { gee } from "../fs/gitlab-runner-authentication-token.js";
import "./chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "./chunk-d2c47492.js";
import "./chunk-0870a9b4.js";
import "./environment.js";
import "../auth/oauth-2025-04-20.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "./async-hooks.5238.js";
import "./chunk-59ffb646.js";
import "../shell/chunk-fea9c492.js";
import { ut, lP } from "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import { SHe } from "../shell/chunk-88b36f19.js";
import { Ra } from "./chunk-34a7f8ba.js";
import { eR, CU, uE } from "../context/org-memory-writes-setting-changed.js";
import { Yse, k1, Rxe } from "../fs/not-utf8.js";
import "../context/tool-result.js";
import "./chunk-8bf008d9.js";
import { Ee } from "./chunk-fee3c428.js";
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
