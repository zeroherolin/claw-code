// linux/shared/record-staged-output-as-read.js — Claude Code 2.1.310（linux）模块 chunk-bwgr7msk.js
import "../agents/third-party.js";
import { E } from "../telemetry/anthropic-workspace-id.js";
import "../fs/async-hooks.93b1.js";
import "./chunk-3b9c376b.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "./chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "./chunk-37dd5dd4.js";
import { aee } from "../fs/gitlab-runner-authentication-token.js";
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
import "./chunk-de56f88d.js";
import "../shell/chunk-fea9c492.js";
import { ut, sP } from "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import { hHe } from "../shell/chunk-88b36f19.js";
import { Ca } from "./chunk-34a7f8ba.js";
import { JC, wU, cv } from "../context/org-memory-writes-setting-changed.js";
import { Bse, bB, kxe } from "../fs/not-utf8.js";
import "../context/tool-result.js";
import "./chunk-8bf008d9.js";
import { ve } from "./chunk-fee3c428.js";
import { open as s } from "fs/promises";
var m = 10485760, u = 4;
async function F(r, o) {
  try {
    let t = ut(o);
    if (hHe(t) || sP(t)) return "not_recordable";
    return await f.readAndRecord(r, t);
  } catch (t) {
    let n = E(t);
    return n === "ENOENT" || n === "EISDIR" || Bse(t) || bB(t) ? "not_recordable" : "read_failed";
  }
}
function c() {
  return Ca(u, p);
}
var f = ve({ readAndRecord: c() }, (r) => {
  r.readAndRecord = c();
});
async function p(r, o) {
  await using t = await s(o, aee());
  let n = Math.floor((await t.stat()).mtimeMs), e = r.get(o);
  if (e !== void 0 && !(e.contentFromTranscript && e.limit === void 0 && JC(e) && e.timestamp < n)) return "kept_existing";
  let i = await kxe(t, o, m);
  if (i.content.slice(0, 4096).includes("\0")) return "not_recordable";
  let a = cv(i.content);
  if (e !== void 0 && !wU(e, a.trim())) return "kept_existing";
  let d = r.get(o);
  if (d !== void 0 && d !== e) return "kept_existing";
  return r.set(o, { content: a, timestamp: n, offset: void 0, limit: void 0, contentNotInModelContext: true }), "recorded";
}
export {
  F as recordStagedOutputAsRead
};
