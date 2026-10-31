// darwin/git/bridge-worktree-state.js — Claude Code 2.1.310（darwin）模块 chunk-f3brnwd5.js
import { d, G } from "../telemetry/anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { _n, Y_ } from "../shared/chunk-8eee6836.js";
import { ct } from "./utf8-keep-bom.js";
import { zf, IS, It, aX } from "./utf-8.js";
import { cd, QB, $Ze, uSt } from "./config-unreadable.js";
import { rQ } from "../ide/gitdir-outside-modules.js";
import { lstat as f, open as E } from "fs/promises";
import { join as l, resolve as y } from "path";
var zPs = 1e4, v = 500;
async function BAr(e, r = zPs) {
  let s = new AbortController();
  try {
    return await Promise.race([e, X(r, s.signal).then(() => {
      throw Error("worktree probe timed out");
    })]);
  } finally {
    s.abort();
  }
}
async function HEo(e, r, s = zPs) {
  let i = IS(e);
  if (!i) return null;
  try {
    let n = await BAr(k(i, r, Date.now() + s), s);
    if (n.submodules_unverified) p("bridge_worktree_state", "submodules_unverifiable");
    else g("bridge_worktree_state");
    return n;
  } catch (n) {
    return m("bridge_worktree_state", "collect_failed"), t(`[bridge:worktree] collectWorktreeState failed: ${d(n)}`), null;
  }
}
async function k(e, r, s) {
  let i = await aX(e);
  if (!i) zf().gitDirByCwd.delete(y(e)), i = await aX(e);
  if (!i) throw Error("getGitDir returned null — cannot verify worktree state");
  let [n, o, a, b, h, w] = await Promise.all([O(e), S(e, r), D(e, s), x(e, i), _(l(e, ".gitmodules")), R(e)]);
  return { branch: r, head_sha: n, unpushed_count: o.count, is_dirty: a.dirty, upstream_exists: o.upstreamExists, mid_operation: b, has_submodules: h, submodules_unverified: a.submodulesUnverified, has_lfs: w, reported_at: (/* @__PURE__ */ new Date()).toISOString() };
}
var T = 4194304;
function u(e, r, { userLocale: s } = {}) {
  return ct(It(), [..._n, ...r], { cwd: e, env: cd(e, void 0, { userLocale: s }), preserveOutputOnError: false, maxBuffer: T, timeout: 1e4 });
}
async function O(e) {
  let { code: r, stdout: s } = await u(e, ["rev-parse", "HEAD"]);
  return r === 0 ? s.trim() : null;
}
async function S(e, r) {
  if (!r) return { count: null, upstreamExists: false };
  let s = `refs/remotes/origin/${r}`, i = await u(e, ["rev-parse", "--verify", "--quiet", `${s}^{commit}`]);
  if (i.code !== 0 || !i.stdout.trim()) return { count: null, upstreamExists: false };
  let { code: n, stdout: o } = await u(e, ["rev-list", "--count", `${s}..HEAD`]);
  if (n !== 0) return { count: null, upstreamExists: false };
  let a = parseInt(o.trim(), 10);
  return { count: Number.isFinite(a) ? a : null, upstreamExists: true };
}
async function D(e, r) {
  let s = await QB(e);
  if (!s.ok) throw Error("repository config could not be vetted");
  let { code: i, stdout: n } = await u(e, [...s.args, "--no-optional-locks", "status", "--porcelain", "-unormal", Y_], { userLocale: true });
  if (i !== 0) throw Error("git status failed");
  if (n.trim().length > 0) return { dirty: true, submodulesUnverified: false };
  let o = await rQ(e, { deadlineMs: Math.max(0, r - Date.now() - v) });
  if (o.kind === "verified") return { dirty: o.withTrackedChanges.length + o.withUntrackedFiles.length > 0, submodulesUnverified: false };
  switch (o.reason) {
    case "unreadable":
      throw Error("submodule state unreadable — cannot verify worktree is clean");
    case "nested_submodules":
    case "too_many":
    case "nested_repository":
    case "unconfigured_gitlink":
    case "gitdir_outside_modules":
    case "timeout":
      return t(`[bridge:worktree] submodules could not be inspected (${o.reason}); reporting is_dirty=true, submodules_unverified=true`, { level: "warn" }), { dirty: true, submodulesUnverified: true };
  }
}
async function _(e) {
  try {
    let r = await f(e);
    return r.isFile() || r.isDirectory();
  } catch (r) {
    if (G(r)) return false;
    throw r;
  }
}
var c = [["rebase-merge", "rebase"], ["rebase-apply", "rebase"], ["MERGE_HEAD", "merge"], ["CHERRY_PICK_HEAD", "cherry-pick"], ["REVERT_HEAD", "revert"], ["BISECT_LOG", "bisect"], ["sequencer", "cherry-pick"]];
async function x(e, r) {
  let i = (await Promise.all(c.map(([o]) => _(l(r, o))))).indexOf(true);
  if (i !== -1) return c[i][1];
  let n = await uSt(r, $Ze, async (o) => (await u(e, o)).exitCode);
  if (n === null) throw Error("git could not say whether a cherry-pick or revert is in progress");
  return n.has("CHERRY_PICK_HEAD") ? "cherry-pick" : n.has("REVERT_HEAD") ? "revert" : null;
}
async function R(e) {
  let r = l(e, ".gitattributes");
  try {
    if (!(await f(r)).isFile()) return false;
  } catch (i) {
    if (G(i)) return false;
    throw i;
  }
  let s;
  try {
    s = await E(r, "r");
    let { buffer: i, bytesRead: n } = await s.read(Buffer.alloc(65536), 0, 65536, 0);
    return i.toString("utf8", 0, n).includes("filter=lfs");
  } catch (i) {
    if (G(i)) return false;
    throw i;
  } finally {
    await s?.close();
  }
}
export {
  BAr,
  HEo,
  zPs
};
