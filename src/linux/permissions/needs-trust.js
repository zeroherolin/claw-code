// linux/permissions/needs-trust.js — Claude Code 2.1.310（linux）模块 chunk-mnwtt54e.js
import { L, ke, kC, MI, Lxe, FTn, UM, OYe } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { E, Vt } from "../telemetry/anthropic-workspace-id.js";
import { In } from "../fs/node-modules.js";
import { i } from "../shared/environment.js";
import { jo, hh, gf, t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { tT, pe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { GEn, c6, R4t } from "../git/utf-8.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { fe } from "../shared/async-hooks.5238.js";
import { ut } from "../shell/chunk-8eebd6c6.js";
import { nu } from "../fs/utf-8.aa9a.js";
import { dn } from "../mcp/chunk-0e2a1db6.js";
import { hH, Fg, sM, u5o, eqe } from "../settings/global-config-and-gates.js";
import { AEn } from "../git/get-url.js";
import { zd } from "../remote/chunk-8734517b.js";
import { zan } from "../telemetry/bg-roster-parse-failed.js";
import { C4n, ZN, MD } from "../context/team-memory-sync.js";
import { Gi, y2e, qHe, cet } from "../context/org-memory-writes-setting-changed.js";
import { ez } from "../settings/built-in.js";
import { rmn } from "./frontmatter-grant-withheld.js";
import { Gte, EJ, Dje, mp, kNs, YNt, XNt, yw, Tsn, ANs, PNs, OMr, pWe, tx, mKn, HNs, Pgt, Bl, HJe } from "../core/conversation-engine.js";
import { mv, Ec } from "../artifacts/utf-8.js";
import { Mmn } from "../shared/chunk-22f77b65.js";
import { YD, Pd } from "./bot-protected-tengu-atomic-magpie.js";
import { ze } from "../shell/sandbox.js";
import { han } from "../git/bridge-child-tool-diff.js";
import { Oae } from "../settings/skill-file-changed.js";
import { homedir as B } from "os";
import { realpath as D, stat as N } from "fs/promises";
import { dirname as x, parse as O } from "path";
var R = "Cd";
function b(e, r) {
  let s = L([...jo(e.requestedPath), e.canonicalPath]), n = L([e.canonicalPath, cet(e.canonicalPath)]), d = (o, m, f) => f.some((g) => M(o, m, g));
  for (let o of Pd(r)) {
    if (o.ruleValue.toolName !== R) continue;
    let m = o.ruleValue.ruleContent;
    if (m === void 0 || d(m, o.source, s)) return { result: "blockedByRule", rule: o };
  }
  let u = YD(r).filter((o) => o.ruleValue.toolName === R);
  if (u.length === 0) return { result: "allowed" };
  for (let o of u) {
    let m = o.ruleValue.ruleContent;
    if (m === void 0 || d(m, o.source, n)) return { result: "allowed" };
  }
  return { result: "outsideAllowedPatterns", allowedPatterns: u.map((o) => o.ruleValue.ruleContent).filter((o) => o !== void 0) };
}
function M(e, r, s) {
  let { relativePattern: n, root: d } = qHe(e, r), u = y2e(d ?? fe(), s);
  if (u === ".." || u.startsWith("../")) return false;
  let o = n.replace(/\/{2,}/g, "/").replace(/^\//, "").replace(/\/$/, "");
  return F(o).test(u);
}
function F(e) {
  let r = "^";
  for (let s = 0; s < e.length; s++) {
    let n = e[s];
    if (s === 0 && n === "*" && e[1] === "*" && e[2] === "/") r += "(?:.*/)?", s += 2;
    else if (n === "/" && e[s + 1] === "*" && e[s + 2] === "*") r += "(/.*)?", s += 2;
    else if (n === "*") if (e[s + 1] === "*") r += ".*", s++;
    else r += "[^/]+";
    else if ("\\^$.|?+()[]{}".includes(n)) r += `\\${n}`;
    else r += n;
  }
  return new RegExp(`${r}$`, "i");
}
async function qwe(e, r) {
  if (await G(e)) return UM(true), OYe(true), false;
  return u5o(e, r);
}
async function G(e) {
  let r = async (s) => {
    let n = s;
    try {
      n = await D(s);
    } catch {
    }
    return nu(In(n));
  };
  return await r(e) === await r(B());
}
async function Hhr(e, r) {
  let s = ut(e);
  try {
    if (!(await N(s)).isDirectory()) return { result: "not_a_directory", path: s, parent: x(s) };
  } catch (o) {
    if (!Vt(o)) l(Object.assign(Error("cd: unexpected stat errno"), { code: E(o) }));
    return { result: "not_found", path: s };
  }
  let n = s;
  try {
    n = await D(s);
  } catch {
    n = s;
  }
  let d = In(n);
  if (d === fe() && d === ke()) return { result: "same", directory: n };
  let u = b({ requestedPath: s, canonicalPath: n }, r);
  if (u.result !== "allowed") return { result: "blocked_by_rule", directory: n, check: u };
  return { result: "ok", directory: n };
}
function Lhr(e, r, s = (d) => d, n) {
  let d = n?.terminalAffordances !== false, u = n?.display ?? ((o) => o);
  if (e = u(e), r.result === "blockedByRule") {
    let o = u(dn(r.rule.ruleValue)), m = Dje(r.rule.source);
    if (r.rule.ruleValue.ruleContent === void 0) return d ? `Can't move to ${s(e)} — /cd is turned off by the ${s(o)} rule in ${m}. Update the rule in /permissions to move between directories again.` : `Can't move to ${s(e)} — directory changes are turned off by the ${s(o)} permission rule in ${m}.`;
    return d ? `Can't move to ${s(e)} — it's excluded by the ${s(o)} rule in ${m}. Pick a directory outside that rule, or update it in /permissions.` : `Can't move to ${s(e)} — it's excluded by the ${s(o)} permission rule in ${m}. Pick a directory outside that rule.`;
  }
  return d ? `Can't move to ${s(e)} — /cd is limited to directories matching ${r.allowedPatterns.map((o) => s(u(o))).join(", ")}. Pick a matching directory, or add a Cd rule in /permissions.` : `Can't move to ${s(e)} — directory changes are limited to ${r.allowedPatterns.map((o) => s(u(o))).join(", ")}. Pick a matching directory.`;
}
async function H(e, r, s) {
  if (i.CLAUDE_CODE_DISABLE_CLAUDE_MDS) return "";
  let n = /* @__PURE__ */ new Set();
  for (let y of await yw(e, false, s)) n.add(nu(y.path));
  let d = [], u = r;
  while (u !== O(u).root) d.push(u), u = x(u);
  let o = YNt(r), { held: m, keep: f } = kNs(e), g = [];
  for (let y of d.reverse()) g.push(...await OMr(y, r, n, { skipProject: XNt(y, o), held: y === r ? m?.within : m?.above(y) }));
  return f(), PNs(g);
}
async function UPt(e, r, s, { storageV5: n, credentials: d, freshSession: u = false, confirmFresh: o, requestBuilt: m } = {}) {
  let f = fe(), g = ke(), y = L([g, f]), k = L([...pe("projectSettings")?.permissions?.additionalDirectories ?? [], ...pe("localSettings")?.permissions?.additionalDirectories ?? []].flatMap((p) => {
    try {
      return y.map((S) => ut(p, S));
    } catch {
      return [];
    }
  }));
  hh(r), mp(r), MI(fe());
  let w = true;
  try {
    await Pgt(n);
  } catch (p) {
    w = false;
    let S = false;
    try {
      hh(f), S = true;
    } catch {
      t(`directory move: transcript move failed and rollback chdir failed; completing the move with the transcript left in its previous home: ${p}`, { level: "error" });
    }
    if (S) throw mp(f), MI(g), p;
  }
  if (w) try {
    await zan(fe(), n);
  } catch (p) {
    t(`directory move: bg session state rehome failed (continuing): ${p}`, { level: "error" });
  }
  eqe();
  try {
    await Gi.rehome();
  } catch (p) {
    t(`directory move: re-targeting the settings watcher failed (continuing with the previous watch): ${p}`, { level: "error" });
  }
  try {
    ez(), Gi.notifyChange("projectSettings", { prevCwd: g });
  } catch (p) {
    t(`directory move: re-resolving settings and hooks for the new directory failed (continuing): ${p}`, { level: "error" });
  }
  try {
    await Oae.rehome();
  } catch (p) {
    t(`directory move: re-targeting the skill watcher failed (continuing with the previous watch): ${p}`, { level: "error" });
  }
  let h = u && (o === void 0 || o());
  if (h) Lxe(fe());
  else try {
    await HJe(await Gte("skills", fe()));
  } catch (p) {
    t(`directory move: registering the new directory's skills failed (continuing without them): ${p}`, { level: "error" });
  }
  if (c6(), R4t(e), zd()?.refreshGitBranch?.(), ze.refreshConfig(), C4n(), a("tengu_cd_command", { source: c(s), fresh_session: h }), h) {
    try {
      EJ(), Tsn(e, "session_start"), ANs(e), HNs(e), Mmn.of(e).clear(), mKn(e), FTn(null), AEn(), GEn(), Ec.cache.clear?.(), mv(n), hH().reset(), pWe(e), tx(e, n, d);
    } catch (p) {
      t(`directory move: re-deriving start-of-session state for the new directory failed (continuing): ${p}`, { level: "error" });
    }
    return { modelMessage: "", transcriptRelocated: w, projectGrantsGated: false, gatedNotice: "", departedAdditionalDirectories: k, freshSession: true };
  }
  let C = "";
  try {
    C = await H(e, r, n);
  } catch (p) {
    t(`directory move: loading the new directory's memory context failed (continuing without it): ${p}`, { level: "error" });
  }
  let v = gf(r), T = s === "cd_command" ? "via /cd" : "by the user", j = m === void 0 || m() ? "The environment block at the start of this conversation still names the previous directory — that information is stale. " : "", A = Bl(`The session's working directory has changed to ${v} (${T}). ` + j + `All tool calls and relative paths now resolve from ${v}. Project settings (permission rules, hooks), project MCP servers, and project skills now come from ${v}; its CLAUDE.md, if any, follows below. Environment variables set by the previous directory's settings stay in effect for this process — they cannot be unset — and the new directory's settings env is applied on top of them.`), P = false;
  try {
    P = !i.CLAUDE_CODE_SANDBOXED && !kC() && !Fg() && rmn();
  } catch (p) {
    t(`directory move: probing the gated project grants failed (continuing): ${p}`, { level: "error" });
  }
  let _ = P ? Bl(`Note: ${v} declares project permission rules and/or additional directories in its settings, but they are NOT applied — the workspace is trusted only through a parent directory's grant, and project-scoped grants require trusting this directory explicitly. Tool calls those rules would have pre-approved will ask for permission.`) : "";
  return { modelMessage: [A, _, C].filter(Boolean).join(`

`), transcriptRelocated: w, projectGrantsGated: P, gatedNotice: _, departedAdditionalDirectories: k, freshSession: false };
}
function Nhr() {
  eqe(), ez(), Gi.notifyChange("projectSettings", { trustFlip: true });
}
function $hr(e) {
  if (e.gatedNotice === "") return e.modelMessage;
  return e.modelMessage.replace(e.gatedNotice, Bl("The user trusted this directory explicitly: its project permission rules and additional directories are now applied."));
}
function hgi(e, r) {
  return han.test(e) ? r : e;
}
async function Ski(e, r) {
  if (r.isBusy()) return { kind: "response", response: { status: "rejected", reason: "busy", message: "A turn is in progress — the working directory can only change while the session is idle. Wait for the turn to finish (or interrupt it), then retry." } };
  if (typeof e.path !== "string" || e.path.trim() === "") return { kind: "invalid", message: "set_cwd: invalid request — path must be a non-empty string" };
  let s = e.trust_accepted === true;
  if (s && typeof e.trusted_directory !== "string") return { kind: "invalid", message: "set_cwd: invalid request — trust_accepted requires trusted_directory (echo the directory from the needs_trust response)" };
  let n = false;
  try {
    n = ZN(e.path, ut(e.path), r.toolPermissionContext.trustedNetworkDirectories, { allowLinkTextClimbs: true }).ok;
  } catch {
    n = false;
  }
  if (!n) return { kind: "response", response: { status: "rejected", reason: "unsafe_path", message: "The target is a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back." } };
  let d = await Hhr(e.path.trim(), r.toolPermissionContext), u = "directory" in d ? d.directory : d.path;
  if (han.test(u)) return { kind: "response", response: { status: "rejected", reason: "unsafe_path", message: "The target path contains invisible or non-printing characters (control, formatting, zero-width, or non-standard space characters such as the narrow no-break space macOS puts in screenshot folder names), so it cannot safely cross the trust boundary. The path is deliberately not echoed back." } };
  if ("directory" in d && MD(d.directory, r.toolPermissionContext.trustedNetworkDirectories) !== void 0) return { kind: "response", response: { status: "rejected", reason: "unsafe_path", message: "The target resolved to a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back." } };
  if (d.result === "not_found") return { kind: "response", response: { status: "rejected", reason: "not_found", message: `Couldn't find a directory at ${d.path}.` } };
  if (d.result === "not_a_directory") return { kind: "response", response: { status: "rejected", reason: "not_a_directory", message: `${d.path} is not a directory.` } };
  if (d.result === "blocked_by_rule") return { kind: "response", response: { status: "rejected", reason: "blocked_by_rule", message: hgi(Lhr(d.directory, d.check, void 0, { terminalAffordances: false }), "A Cd permission rule blocks this directory. The rule text contains control or invisible characters, so it is not echoed here — check the Cd(...) entries in your settings.") } };
  if (d.result === "same") return { kind: "response", response: { status: "ok", cwd: d.directory, changed: false, transcript_relocated: true } };
  let o = d.directory;
  if (!sM(o)) {
    let h = tT(o), C = h != null && h !== o && !han.test(h) ? h : void 0;
    if (!s) return { kind: "response", response: C != null ? { status: "needs_trust", directory: o, trust_root: C } : { status: "needs_trust", directory: o } };
    if (e.trusted_directory !== o) return { kind: "response", response: C != null ? { status: "needs_trust", directory: o, trust_root: C } : { status: "needs_trust", directory: o } };
    await qwe(o, r.storageV5);
  }
  if (r.isBusy()) return { kind: "response", response: { status: "rejected", reason: "busy", message: "A turn started while the request was being validated. Retry when the session is idle." } };
  let m = r.isFreshSession(), { modelMessage: f, transcriptRelocated: g, departedAdditionalDirectories: y, freshSession: k } = await UPt(r.session, o, "set_cwd", { storageV5: r.storageV5, credentials: r.credentials, freshSession: m, confirmFresh: () => !r.isBusy() && r.isFreshSession(), requestBuilt: r.requestBuilt });
  try {
    if (k) r.settlePlanAutoMode();
  } catch (h) {
    t(`set_cwd: settling the plan setting for the new directory failed (continuing): ${h}`, { level: "error" });
  }
  try {
    r.retireDepartedAdditionalDirectories?.(y);
  } catch (h) {
    t(`set_cwd: retiring the previous project's additional directories failed (continuing): ${h}`, { level: "error" });
  }
  try {
    if (f) r.enqueueMoveNotice(f);
  } catch (h) {
    t(`set_cwd: enqueueing the move notice failed (continuing): ${h}`, { level: "error" });
  }
  let w = fe();
  return { kind: "response", response: { status: "ok", cwd: han.test(w) ? o : w, changed: true, transcript_relocated: g }, freshSession: k };
}
export {
  $hr,
  Hhr,
  Lhr,
  Nhr,
  Ski,
  UPt,
  hgi,
  qwe
};
