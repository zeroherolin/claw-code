// linux/git/git-repository.js — Claude Code 2.1.310（linux）模块 chunk-psmd5kba.js
import { vr } from "./chunk-c16cb6b4.js";
async function uzr(s) {
  let { isNestedGitLabProject: e, parseGitRemote: t, parseGitHubRepository: u } = await import("./clear-repository-caches.js"), r = t(s);
  if (r) return e(r) ? null : r;
  let i = u(s);
  if (i) {
    let [o, n] = i.split("/");
    if (o && n) return { host: vr, owner: o, name: n };
  }
  return null;
}
async function Jzo(s, e, t) {
  let u = { revisionGuessUsed: false };
  if (!s) return { sources: [], outcomes: [], report: u };
  let { getDefaultBranch: r } = await import("./clear-is-git-memo.js");
  if (e === "HEAD") e = "";
  let i = false, o = e || t || void 0;
  if (!o) o = await r() || void 0, i = o !== void 0;
  let n = e && t && e !== t ? [e] : [], c, a;
  if (e && n.length === 0) c = t ? "is_default" : "no_evidence", a = t ? `[bridge] requested branch '${e}' is the default branch — omitted from outcomes.branches (the runner stays on the clone)` : `[bridge] no session-anchored default-branch evidence — omitting requested branch '${e}' from outcomes.branches; the remote session will work on a generated branch instead. Run 'git remote set-head origin -a' in the repo (or supply defaultBranch via the SDK) to restore branch continuity.`;
  let g = { branchDropped: c, revisionGuessUsed: i, warnMessage: a }, l = (y, d, m) => ({ report: g, sources: [{ type: "git_repository", url: `https://${y}/${d}/${m}`, revision: o }], outcomes: [{ type: "git_repository", git_info: { type: "github", repo: `${d}/${m}`, branches: n } }] }), p = await uzr(s);
  if (p) return l(p.host, p.owner, p.name);
  return { sources: [], outcomes: [], report: u };
}
export {
  Jzo,
  uzr
};
