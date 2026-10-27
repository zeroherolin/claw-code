// git/registration-drops-line.2rd7.js — Claude Code 2.1.310 模块 chunk-2rd7p3x6.js
import "../fs/chunk-kqpf5fh3.js";
import "../agents/third-party.ydpb.js";
import "../telemetry/anthropic-workspace-id.36ys.js";
import "../shared/chunk-3kevgx4j.js";
import { cl } from "../fs/node-modules.gp4v.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import "../shared/chunk-9sbknd2z.js";
import "../fs/async-hooks.9s1z.js";
import "../context/not-admin-owned.ersa.js";
import "../shared/chunk-3y73jbfr.js";
import { _ } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import "../shared/chunk-x6r6k81p.js";
import "../models/claude-3-5-sonnet.21mz.js";
import "../fs/backed-up.p1qn.js";
import "../shared/chunk-j79dwkaq.js";
import "../artifacts/cowritten-artifact-html.thm2.js";
import "../fs/chunk-dz0rx1wn.js";
import "./utf-8.vh7e.js";
import "../shared/chunk-daaayw23.js";
import "../shared/async-hooks.m2fg.js";
import "../shared/chunk-nrx8c90j.js";
import "../shared/environment.9a41.js";
import "../auth/oauth-2025-04-20.ke15.js";
import "../shared/chunk-4kxy1036.js";
import "../shell/chunk-gx93fya1.js";
import "../shell/chunk-tjkwy3jp.js";
import "../context/utf-8.yzy3.js";
import "../fs/utf-8.7pve.js";
import "../fs/tempdir-owner-mismatch.5xe1.js";
import "../telemetry/chunk-wq923bwc.js";
import "../telemetry/chunk-wn8xtaqg.js";
import "../fs/utf-8.fmbx.js";
import "../context/tool-cgroup-exclude-classes.t1za.js";
import "../shared/chunk-z6efcye4.js";
import "./utf8-keep-bom.c49x.js";
import "../fs/async-hooks.2k4e.js";
import "../shared/async-hooks.923e.js";
import "../shared/chunk-abagh0tt.js";
import "../plugins/chunk-x0a7sawk.js";
import "../artifacts/chunk-m8t7qekn.js";
import "./chunk-q8vnfcnf.js";
import { $an, jne } from "./no-descriptor-listing.0j88.js";
import "./not-link.8b09.js";
import { o, C, Ue } from "../vendor/zod/string-format.k395.js";
import "../shared/chunk-81mpzfkq.js";
import "../fs/not-utf8.sqq6.js";
import "../context/tool-result.evq2.js";
import "../shared/chunk-bhdett2m.js";
import "../shared/chunk-n07cvysj.js";
import { isAbsolute as m, normalize as p } from "path";
var c = () => o().min(1).max(4096).refine((t) => !t.includes("\0") && m(t) && !cl(t), "must be an absolute local path, not a network or automount path (such as \\\\server\\share, //server/share or /net/host), with no NUL character"), k = f(() => Ue({ repoRoot: c(), worktreePaths: C(c()).min(1).max(4) }));
async function D(t) {
  let e = k().safeParse(t);
  if (!e.success) {
    let r = e.error.issues[0];
    return { ok: false, error: r ? `Not a worktree registration request (${r.path.map(String).join(".") || "request"}: ${r.message}).` : "Not a worktree registration request." };
  }
  let { worktreePaths: n } = e.data, s = p(e.data.repoRoot), a = await $an(s);
  if (a === null) {
    let r = `the repository at ${s} could not be vetted`;
    return { ok: true, outcomes: n.map(() => ({ outcome: "kept", reason: r })) };
  }
  let u = [];
  for (let r of n) {
    let i = await jne(a, { worktreePath: r, repoSpelled: s }, { locked: "keep" });
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
