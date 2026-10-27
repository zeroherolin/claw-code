// auth/claude-desktop-3p.8h4z.js — Claude Code 2.1.310 模块 chunk-8h4z2017.js
import { __asset_src } from "../runtime/assets.js";
import { as } from "../fs/async-hooks.9s1z.js";
import { Wr, UI, scr, Pee } from "../context/not-admin-owned.ersa.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { i } from "../shared/environment.9a41.js";
import { fk } from "./oauth-2025-04-20.ke15.js";
import { Cti, Dtr, Aj, m_n, lT } from "../settings/global-config-and-gates.27xj.js";
import { dfi, Jkn, DYr } from "../remote/local-agent.we9a.js";
import { Te, Ai, op, oot } from "../models/total-tokens-reminder.psq3.js";
import { _or } from "../shared/async-hooks.t1gs.js";
function v(e) {
  return UI(e) || m_n(e?.jwt ?? i.ANTHROPIC_AUTH_TOKEN) || Cti();
}
var H = ["harness", "user", "project", "local", "flag", "managed", "admin_default"], E6o = /^claude_proj_(?:staging_|local_)?01[1-9A-HJ-NP-Za-km-z]{22}$/;
function fZs(e) {
  return e.isSubscriber && m();
}
function v6o(e, r, a, c, u, _, E) {
  let n = Te();
  if (!(E?.ignoreEnvOptOut === true && y()) && R()) return "";
  let S = `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION}.${e}`, N = Pee() ?? process.env.CLAUDE_CODE_ENTRYPOINT ?? "unknown", b = n === "firstParty" && Ai() || n === "vertex" ? " cch=00000;" : "", T = _or(), C = T ? ` cc_workload=${T};` : "", h = lT(r) && !r.isMainSession ? " cc_is_subagent=true;" : "", I = a !== void 0 && /^req_[A-Za-z0-9_-]{1,36}$/.test(a) && n === "firstParty" && Ai() ? ` cc_prev_req=${a};` : "", U = c !== void 0 && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(c) && n === "firstParty" && Ai() ? ` cc_prompt_id=${c};` : "", D = typeof u === "string" && /^[a-z][a-z_]{0,31}$/.test(u) && n === "firstParty" && Ai() ? ` cc_turn_origin=${u};` : "", l = _?.promptIndex, f = _?.turnIndex, w = g(l, 0) && g(f, 1) && n === "firstParty" && Ai() ? ` cc_prompt_index=${l}; cc_turn_index=${f};` : "", s = n === "gateway" ? Wr() : null, A = (n === "gateway" || oot() !== void 0) && v(s), p = s?.url ?? i.ANTHROPIC_BASE_URL, x = p !== void 0 && (!URL.canParse(p) || Dtr(Aj(new URL(p)))) || s?.hostVerdict !== void 0 && "vouched" in s.hostVerdict, k = (n === "gateway" || A) && !x ? ` cc_gateway=${A ? "1" : "env"};` : "", o = E?.attributionProject, j = o !== void 0 && E6o.test(o.taggedId) && L.has(o.source) && m() ? ` cc_project=${o.taggedId}; cc_project_src=${o.source};` : "", O = `x-anthropic-billing-header: cc_version=${S}; cc_entrypoint=${N};${b}${C}${h}${I}${U}${D}${w}${k}${j}`;
  return t(`attribution header ${O}`), O;
}
var d = "local_projects";
function HZn() {
  if (Pee() !== void 0) return false;
  return scr(d), true;
}
function mZs() {
  if (Pee() === d) scr(void 0);
}
var P = "claude-desktop-3p";
function gZs() {
  let e = i.CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS;
  if (i.unset("CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS"), e === void 0) return;
  let r = Pee();
  if (r !== void 0) {
    t(`CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS ignored: requests already go out under the name "${r}"`);
    return;
  }
  if (i.CLAUDE_CODE_ENTRYPOINT !== P) {
    t(`CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS ignored: it is read only when CLAUDE_CODE_ENTRYPOINT is ${P}, not "${i.CLAUDE_CODE_ENTRYPOINT ?? ""}"`);
    return;
  }
  if (!dfi(e)) {
    t(`CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS ignored: "${e}" must be 1 to 32 characters of a-z, 0-9, _ and -, start with a letter and not start with sdk`);
    return;
  }
  if (Jkn(e) !== void 0 || DYr(e) || e === d) {
    t(`CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS ignored: "${e}" is reserved (an entrypoint name, a name beginning with remote, or local_projects)`);
    return;
  }
  scr(e);
}
function Ltt(e) {
  return e.anthropicAuthEnabled && Boolean(e.oauthScopes?.includes(fk));
}
function hZs(e) {
  if (e.isSubscriber) return { apiKey: null, authToken: e.oauthAccessToken ?? null };
  return { apiKey: e.apiKey, authToken: null };
}
function g(e, r) {
  return typeof e === "number" && Number.isInteger(e) && e >= r && e <= 1e7;
}
function y() {
  return Te() === "firstParty" && op() && !i.ANTHROPIC_UNIX_SOCKET;
}
function m() {
  return y() && !i.CLAUDE_CODE_REMOTE && !R();
}
function R() {
  return as(process.env.CLAUDE_CODE_ATTRIBUTION_HEADER);
}
var L = new Set(H);
export {
  E6o,
  HZn,
  Ltt,
  fZs,
  gZs,
  hZs,
  mZs,
  v6o
};
