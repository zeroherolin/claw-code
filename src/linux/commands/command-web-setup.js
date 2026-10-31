// linux/commands/command-web-setup.js — Claude Code 2.1.310（linux）模块 chunk-7f6g2yy3.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { rn } from "../auth/oauth-2025-04-20.js";
import { j_e, kc, ua, Hw, Ep, tRe, nRe, Et, Poe } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { _t } from "../artifacts/cowritten-artifact-html.js";
import { Nc } from "../remote/local-agent.js";
import { tk, Ae } from "../models/total-tokens-reminder.js";
import { I0 } from "../shared/chunk-f98598c3.js";
import { R4e } from "../auth/profile-explicit.js";
import { BYr, For } from "../artifacts/cobalt-plinth-lovage.js";
import { VGt, Fce, C7, on, d9, Sp, Xc, TKe } from "../auth/env-quad.js";
import { q1t } from "../telemetry/bridge-resume-respects-local-owner.js";
import { p2o } from "../auth/policy-limits-principal-changed.js";
var kQ = { policy: "allow_remote_sessions" }, d = "Cloud sessions use your claude.ai login.", m = { ANTHROPIC_API_KEY: { noun: "key", fetchedTheLoadedAnswer: () => p2o() }, ANTHROPIC_AUTH_TOKEN: { noun: "token", fetchedTheLoadedAnswer: () => VGt() === "same" } };
function rre() {
  let o = Ae();
  if (o !== "firstParty") return `Cloud sessions aren't available with ${tk[o]}. They run on Anthropic's infrastructure and require an Anthropic account.`;
  let { policy: e } = kQ, { featureLabel: r, verb: c } = C7(e), u = Sp(e, r, c);
  if (u === null) return null;
  let l = Xc(e);
  if (l === "org_denied") {
    let n = d9() && I0().length === 0 ? p() : null;
    if (n === null) return u;
    let a = `${r} ${c} ${For([])}.`;
    if (n === "apiKeyHelper") return a;
    let { noun: f, fetchedTheLoadedAnswer: h } = m[n];
    if (!h()) return u;
    return `${a} This session is using ${n}, so Claude Code checked the policy for the organization that ${f} belongs to. ${d}`;
  }
  let t = Fce();
  if (l !== "cache_miss" || t === null || t.success || t.retrying || t.httpStatus === 404) return u;
  let s = BYr(r, c, t);
  if (t.errorCode !== "auth_failed" || t.httpStatus === 403 || TKe(e)) return s;
  if (p() !== null) {
    let n = q1t({ prefix: d, suffix: "to use cloud sessions." });
    return `${s} ${n}`;
  }
  if (t.httpStatus === 401 && !j_e() && Et() && ua().source === "claude.ai" && tRe() === null) return `${s} Run \`claude auth login\` (or /login in a local session), then try again.`;
  if (!Hw() && kc() && t.httpStatus === null && R4e() && nRe() && !Ne(false)) return `${s} Cloud sessions need a claude.ai sign-in. Run \`claude auth login\` (or /login in a local session), then try again.`;
  return s;
}
function A5n() {
  return Xc(kQ.policy) === "org_denied";
}
function p() {
  if (i.ANTHROPIC_UNIX_SOCKET || Ne(false) || !Poe() || Et()) return null;
  let { key: o, source: e } = Ep();
  if (e === "ANTHROPIC_API_KEY") return o === i.ANTHROPIC_API_KEY ? e : null;
  if (e === "apiKeyHelper") return e;
  return ua().source === "ANTHROPIC_AUTH_TOKEN" ? "ANTHROPIC_AUTH_TOKEN" : null;
}
function KDe() {
  return !_t() && on("allow_remote_sessions") && on("allow_quick_web_setup");
}
function Whe() {
  return !Nc() && KDe();
}
function Oyt() {
  return `${rn().CLAUDE_AI_ORIGIN}/connect-github`;
}
function y7e(o = "this repository") {
  let e = Oyt(), r = Whe() ? `Run /web-setup to connect with your GitHub CLI login, or connect on the web at ${e}` : `Connect it on the web at ${e}`;
  return `GitHub isn't connected to your Claude account, so ${o} can't be cloned in the cloud. ${r}`;
}
var y = { type: "local-jsx", name: "web-setup", description: "Set up cloud sessions with your GitHub account", availability: ["claude-ai"], isEnabled: KDe, policyGate: kQ, get isHidden() {
  return !on("allow_remote_sessions") || !on("allow_quick_web_setup");
} }, rRi = y;
export {
  A5n,
  KDe,
  Oyt,
  Whe,
  kQ,
  rRi,
  rre,
  y7e
};
