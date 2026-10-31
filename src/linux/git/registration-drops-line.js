// linux/git/registration-drops-line.js — Claude Code 2.1.310（linux）模块 chunk-perrq2m3.js
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import { dl } from "../fs/node-modules.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../shared/chunk-37dd5dd4.js";
import { _ } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "./utf-8.js";
import "../shared/chunk-d4196a83.js";
import "../shared/async-hooks.5238.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../shared/chunk-de56f88d.js";
import "../shell/chunk-fea9c492.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.8f8e.js";
import "../fs/tempdir-owner-mismatch.js";
import "../telemetry/chunk-9097a12b.js";
import "../telemetry/chunk-9d6962d2.js";
import "../fs/utf-8.aa9a.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../shared/chunk-8eee6836.js";
import "./utf8-keep-bom.js";
import "../fs/async-hooks.7959.js";
import "../shared/async-hooks.9e79.js";
import "../shared/chunk-4563156b.js";
import "../plugins/chunk-0a4c51cf.js";
import "../artifacts/chunk-a6c9d164.js";
import "./chunk-c16cb6b4.js";
import { Aan, Mne } from "./no-descriptor-listing.js";
import "./not-link.js";
import { o, T, Ue } from "../vendor/zod/string-format.js";
import "../shared/chunk-1f805b50.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "../shared/chunk-8bf008d9.js";
import "../shared/chunk-6da6c5a3.js";
import { isAbsolute as m, normalize as k } from "path";
var c = () => o().min(1).max(4096).refine((t) => !t.includes("\0") && m(t) && !dl(t), "must be an absolute local path, not a network or automount path (such as \\\\server\\share, //server/share or /net/host), with no NUL character"), g = p(() => Ue({ repoRoot: c(), worktreePaths: T(c()).min(1).max(4) }));
async function D(t) {
  let e = g().safeParse(t);
  if (!e.success) {
    let r = e.error.issues[0];
    return { ok: false, error: r ? `Not a worktree registration request (${r.path.map(String).join(".") || "request"}: ${r.message}).` : "Not a worktree registration request." };
  }
  let { worktreePaths: n } = e.data, s = k(e.data.repoRoot), a = await Aan(s);
  if (a === null) {
    let r = `the repository at ${s} could not be vetted`;
    return { ok: true, outcomes: n.map(() => ({ outcome: "kept", reason: r })) };
  }
  let u = [];
  for (let r of n) {
    let i = await Mne(a, { worktreePath: r, repoSpelled: s }, { locked: "keep" });
    u.push(i.outcome === "kept" ? { outcome: "kept", reason: i.reason } : { outcome: i.outcome });
  }
  return { ok: true, outcomes: u };
}
function y(t) {
  return _({ ok: true, outcomes: t });
}
export {
  y as registrationDropsLine,
  D as runWorktreeRegistrationDrops
};
