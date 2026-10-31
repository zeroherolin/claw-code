// linux/artifacts/team-artifact-tip-shown.js — Claude Code 2.1.310（linux）模块 chunk-xacyfhjq.js
import { nt, ke } from "../context/not-admin-owned.js";
import { F0e, Dz, k, Cs, La, ch } from "../settings/global-config-and-gates.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g } from "../telemetry/chunk-9d6962d2.js";
import { Txe, yg, fe } from "../shared/async-hooks.5238.js";
import { hr, It } from "../git/utf-8.js";
import { ct } from "../git/utf8-keep-bom.js";
var L = [".claude/skills", ".claude/commands"], _ = 3, y = 100;
function v(n) {
  let e = n.split("/");
  if (e[0] !== ".claude" || e.length < 3) return null;
  switch (e[1]) {
    case "skills":
      if (e.length === 4 && e[3] === "SKILL.md") return { kind: "skill", name: e[2] };
      return null;
    case "commands": {
      let i = e.at(-1);
      if (!i.endsWith(".md")) return null;
      if (/^skill\.md$/i.test(i)) return e.length < 4 ? null : { kind: "command", name: e.slice(2, -1).join(":") };
      return { kind: "command", name: e.slice(2).join(":").slice(0, -3) };
    }
    default:
      return null;
  }
}
class x {
  inFlight = void 0;
  resolved = void 0;
  get(n) {
    return this.inFlight ??= this.scan(n), this.inFlight;
  }
  teammateAuthorOf(n) {
    return this.resolved?.find((e) => !e.byCurrentUser && e.name === n)?.author || null;
  }
  async scan(n) {
    if (!Cs()) return [];
    let e = Txe(fe(), ke()), i = hr(e);
    if (!i) return [];
    let [{ stdout: o, code: m }, s] = await Promise.all([ct(It(), ["-c", "core.quotePath=false", "-c", "core.fsmonitor=", "-c", "core.hooksPath=/dev/null", "-c", "core.pager=", "-c", "log.showSignature=false", "log", "--since=7.days", "--diff-filter=A", "--name-only", "--format=COMMIT%x00%an%x00%ae", "--", ...L], { cwd: i, timeout: 5e3 }), yg(e, F0e)]);
    if (m !== 0) return [];
    let c = s?.toLowerCase(), l = [], A = /* @__PURE__ */ new Set(), u = "", h = "";
    for (let r of o.split(`
`)) {
      if (r.startsWith("COMMIT\0")) {
        let f = r.split("\0");
        u = f[1] ?? "", h = (f[2] ?? "").toLowerCase();
        continue;
      }
      if (!r || A.has(r)) continue;
      A.add(r);
      let d = v(r);
      if (d) {
        let f = Boolean(c && h === c);
        l.push({ path: r, author: u, byCurrentUser: f, ...d });
      }
    }
    this.resolved = l;
    let w = La(), E = new Set(w.seenTeamArtifactPaths ?? []), P = l.some((r) => !r.byCurrentUser && !E.has(r.path)), U = new Set(w.loggedAuthoredArtifactPaths ?? []), p = l.filter((r) => r.byCurrentUser && !U.has(r.path));
    for (let r of p) a("tengu_skill_authored", { is_skill: r.kind === "skill" });
    try {
      await ch((r) => {
        let d = r.hasUnseenTeamArtifacts === P;
        if (p.length === 0 && d) return r;
        let f = d ? r : { ...r, hasUnseenTeamArtifacts: P };
        if (p.length === 0) return f;
        let j = f.loggedAuthoredArtifactPaths ?? [], C = p.map((T) => T.path), B = new Set(C), F = [...j.filter((T) => !B.has(T)), ...C].slice(-y);
        return { ...f, loggedAuthoredArtifactPaths: F };
      }, n);
    } catch (r) {
      t(`team-artifact eligibility persist failed: ${r}`);
    }
    return l;
  }
}
var b = new nt(() => new x());
function S(n, e) {
  return b.of(n).get(e);
}
function bOt(n, e, i) {
  if (e !== "projectSettings" || !k("tengu_tussock_oriole", false)) return null;
  return b.of(n).teammateAuthorOf(i);
}
function uws(n, e) {
  if (Dz()) S(n, e).catch(() => {
  });
  if (!k("tengu_tussock_oriole", false)) return false;
  return La().hasUnseenTeamArtifacts === true;
}
async function fws(n, e) {
  let i = await S(n, e);
  if (i.length === 0) return [];
  let o = new Set(La().seenTeamArtifactPaths ?? []);
  return i.filter((m) => !m.byCurrentUser && !o.has(m.path));
}
async function pws(n, e) {
  let o = (await S(n, e)).filter((s) => !s.byCurrentUser).map((s) => s.path), m = new Set(o);
  await ch((s) => {
    let c = s.seenTeamArtifactPaths ?? [], l = [...c.filter((u) => !m.has(u)), ...o].slice(-y);
    if (l.length === c.length && l.every((u, h) => u === c[h]) && s.hasUnseenTeamArtifacts === false) return s;
    return { ...s, seenTeamArtifactPaths: l, hasUnseenTeamArtifacts: false };
  }, e);
}
function mws(n) {
  let e = { skill: 0, command: 0 };
  for (let i of n) e[i.kind]++;
  g("tips_team_artifact_show"), a("tengu_team_artifact_tip_shown", { skill_count: e.skill, command_count: e.command, overflow_count: Math.max(0, n.length - _) });
}
function SOt(n, e) {
  if (n !== "projectSettings") return {};
  return { via_team_tip: (La().seenTeamArtifactPaths ?? []).some((o) => v(o)?.name === e) };
}
function gws(n) {
  let e = n.filter((c) => !c.byCurrentUser);
  if (e.length === 0) return "";
  let i = e.slice(0, _), o = i.map((c) => `/${c.name} (${c.author || "a teammate"})`), m = o.length === 1 ? o[0] : `${o.slice(0, -1).join(", ")} and ${o.at(-1)}`, s = e.length - i.length;
  return `New from your team: ${m}${s > 0 ? `, plus ${s} more` : ""}`;
}
export {
  SOt,
  bOt,
  fws,
  gws,
  mws,
  pws,
  uws
};
