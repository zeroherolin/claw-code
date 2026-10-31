// darwin/commands/command-web-setup.js — Claude Code 2.1.310（darwin）模块 chunk-d6ebmwf5.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { rn } from "../auth/oauth-2025-04-20.js";
import { Y_e, kc, ua, Lw, Ef, aRe, lRe, vt, Noe } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { St } from "../artifacts/cowritten-artifact-html.js";
import { Nc } from "../remote/local-agent.js";
import { nk, Te } from "../models/total-tokens-reminder.js";
import { HL } from "../shared/chunk-f98598c3.js";
import { Pqe } from "../auth/profile-explicit.js";
import { d4r, rsr } from "../artifacts/cobalt-plinth-lovage.js";
import { sGt, Vce, DQ, on, yY, Sf, Jc, H6e } from "../auth/env-quad.js";
import { ijt } from "../telemetry/bridge-resume-respects-local-owner.js";
import { Bzo } from "../auth/policy-limits-principal-changed.js";
var OJ = { policy: "allow_remote_sessions" }, d = "Cloud sessions use your claude.ai login.", m = { ANTHROPIC_API_KEY: { noun: "key", fetchedTheLoadedAnswer: () => Bzo() }, ANTHROPIC_AUTH_TOKEN: { noun: "token", fetchedTheLoadedAnswer: () => sGt() === "same" } };
function pre() {
  let o = Te();
  if (o !== "firstParty") return `Cloud sessions aren't available with ${nk[o]}. They run on Anthropic's infrastructure and require an Anthropic account.`;
  let { policy: e } = OJ, { featureLabel: r, verb: c } = DQ(e), u = Sf(e, r, c);
  if (u === null) return null;
  let l = Jc(e);
  if (l === "org_denied") {
    let n = yY() && HL().length === 0 ? p() : null;
    if (n === null) return u;
    let a = `${r} ${c} ${rsr([])}.`;
    if (n === "apiKeyHelper") return a;
    let { noun: f, fetchedTheLoadedAnswer: h } = m[n];
    if (!h()) return u;
    return `${a} This session is using ${n}, so Claude Code checked the policy for the organization that ${f} belongs to. ${d}`;
  }
  let t = Vce();
  if (l !== "cache_miss" || t === null || t.success || t.retrying || t.httpStatus === 404) return u;
  let s = d4r(r, c, t);
  if (t.errorCode !== "auth_failed" || t.httpStatus === 403 || H6e(e)) return s;
  if (p() !== null) {
    let n = ijt({ prefix: d, suffix: "to use cloud sessions." });
    return `${s} ${n}`;
  }
  if (t.httpStatus === 401 && !Y_e() && vt() && ua().source === "claude.ai" && aRe() === null) return `${s} Run \`claude auth login\` (or /login in a local session), then try again.`;
  if (!Lw() && kc() && t.httpStatus === null && Pqe() && lRe() && !Ne(false)) return `${s} Cloud sessions need a claude.ai sign-in. Run \`claude auth login\` (or /login in a local session), then try again.`;
  return s;
}
function V4n() {
  return Jc(OJ.policy) === "org_denied";
}
function p() {
  if (i.ANTHROPIC_UNIX_SOCKET || Ne(false) || !Noe() || vt()) return null;
  let { key: o, source: e } = Ef();
  if (e === "ANTHROPIC_API_KEY") return o === i.ANTHROPIC_API_KEY ? e : null;
  if (e === "apiKeyHelper") return e;
  return ua().source === "ANTHROPIC_AUTH_TOKEN" ? "ANTHROPIC_AUTH_TOKEN" : null;
}
function Q0e() {
  return !St() && on("allow_remote_sessions") && on("allow_quick_web_setup");
}
function qhe() {
  return !Nc() && Q0e();
}
function $yt() {
  return `${rn().CLAUDE_AI_ORIGIN}/connect-github`;
}
function CQe(o = "this repository") {
  let e = $yt(), r = qhe() ? `Run /web-setup to connect with your GitHub CLI login, or connect on the web at ${e}` : `Connect it on the web at ${e}`;
  return `GitHub isn't connected to your Claude account, so ${o} can't be cloned in the cloud. ${r}`;
}
var y = { type: "local-jsx", name: "web-setup", description: "Set up cloud sessions with your GitHub account", availability: ["claude-ai"], isEnabled: Q0e, policyGate: OJ, get isHidden() {
  return !on("allow_remote_sessions") || !on("allow_quick_web_setup");
} }, BRi = y;
export {
  $yt,
  BRi,
  CQe,
  OJ,
  Q0e,
  V4n,
  pre,
  qhe
};
