// linux/ide/bad-reported.js — Claude Code 2.1.310（linux）模块 chunk-afgt35yk.js
import { ke, wX } from "../context/not-admin-owned.js";
import { R, J_, tg } from "../telemetry/anthropic-workspace-id.js";
import { BCt } from "../fs/node-modules.js";
import { xxe } from "../fs/gitlab-runner-authentication-token.js";
import { ut } from "../shell/chunk-8eebd6c6.js";
import { Zt } from "../plugins/skills-dir.js";
import { Iu } from "../context/org-memory-writes-setting-changed.js";
import { ZN, MD } from "../context/team-memory-sync.js";
import { realpath as l, stat as p } from "fs/promises";
import { isAbsolute as u } from "path";
var EQr = { is_cwd: "sad", already_registered: "sad", outside_scope: "bad_reported", not_directory: "bad", too_many: "bad", expansion_failed: "bad", resolve_failed: "bad", stat_failed: "bad", screened_nt_namespace: "bad_reported", screened_untrusted_unc: "bad_reported", screened_untrusted_automount: "bad_reported", screened_suspicious_windows_spelling: "bad_reported", screened_unvettable_chain: "bad_reported", screened_link_text_climbs: "bad_reported" };
function c(e) {
  return `screened_${e}`;
}
function _(e) {
  return Object.hasOwn(EQr, e);
}
function Qit(e) {
  try {
    return e instanceof R && e.telemetryMessage.startsWith("register_repo_root:") && e.errorClass !== void 0 && _(e.errorClass) ? e.errorClass : void 0;
  } catch {
    return;
  }
}
function x5t(e, o, i, a) {
  let t = { caseFold: false, skipPrivateAlias: true, uncShapeParity: true }, r = u(o) && Iu(e, o, t);
  if (r && Iu(o, e, t)) return { allowed: false, code: "is_cwd", reason: "is the session's working directory, which is already registered; pass the cloned repo's own directory instead" };
  if (a.includes(e)) return { allowed: false, code: "already_registered", reason: "is already a registered working directory" };
  let s = i.some((n) => e !== n && Iu(e, n, t));
  if (!r && !s) return { allowed: false, code: "outside_scope", reason: "is not a subdirectory of the session's working directory or of a launch-time --add-dir root" };
  return { allowed: true };
}
async function g(e) {
  return Promise.all([...e.values()].map(async (o) => {
    if (await xxe(o.path, wX())) return { source: o.source, resolved: o.path };
    let i = await l(o.path).catch(() => o.path);
    return { source: o.source, resolved: BCt(o.path, i, wX()) ? o.path : i };
  }));
}
async function f(e) {
  return (await p(e)).isDirectory() ? { allowed: true } : { allowed: false, code: "not_directory", reason: "is not a directory" };
}
var h = { nt_namespace: "register_repo_root: NT-namespace path rejected before filesystem access", untrusted_unc: "register_repo_root: UNC path rejected before filesystem access", untrusted_automount: "register_repo_root: automount path rejected before filesystem access", suspicious_windows_spelling: "register_repo_root: suspicious Windows path spelling rejected", unvettable_chain: "register_repo_root: unvettable path ancestry rejected before filesystem access", link_text_climbs: 'register_repo_root: path through a symlink whose target has ".." past its leading "../" segments rejected' };
async function kQr(e, o, i) {
  let a, t;
  try {
    a = ut(e, i);
  } catch {
    throw new R("register_repo_root: target path could not be resolved", "register_repo_root: path expansion failed", "expansion_failed");
  }
  let r = ZN(e, a, o().trustedNetworkDirectories, { allowLinkTextClimbs: true });
  if (!r.ok) throw new R("register_repo_root: target is a network path, an obfuscated spelling, or a path whose directories and symbolic links could not all be examined, which cannot be registered", h[r.reason], c(r.reason));
  try {
    t = await l(a);
  } catch (d) {
    throw new R("register_repo_root: target path could not be resolved", "register_repo_root: path resolution failed", tg(d) || J_(d) ? "resolve_failed" : void 0);
  }
  let s = MD(t, o().trustedNetworkDirectories);
  if (s !== void 0) throw new R("register_repo_root: target is a network path, an obfuscated spelling, or a path whose directories and symbolic links could not all be examined, which cannot be registered", "register_repo_root: resolved path rejected by the spelling screen", c(s));
  let n;
  try {
    n = await f(t);
  } catch (d) {
    throw new R("register_repo_root: target path could not be resolved", "register_repo_root: target stat failed", tg(d) || J_(d) ? "stat_failed" : void 0);
  }
  if (!n.allowed) throw new R(`register_repo_root: ${Zt(e)} ${n.reason}`, "register_repo_root: target is not a directory", n.code);
  return t;
}
async function aCn(e, o, i) {
  let a = await kQr(e, o, i), t = await g(o().additionalWorkingDirectories), r = x5t(a, ke(), t.filter((s) => s.source === "cliArg").map((s) => s.resolved), t.map((s) => s.resolved));
  if (!r.allowed) throw new R(`register_repo_root: ${Zt(e)} ${r.reason}`, "register_repo_root: directory is outside the allowed registration scope", r.code);
  return a;
}
export {
  EQr,
  Qit,
  aCn,
  kQr,
  x5t
};
