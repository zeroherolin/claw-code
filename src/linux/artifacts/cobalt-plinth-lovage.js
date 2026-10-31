// linux/artifacts/cobalt-plinth-lovage.js — Claude Code 2.1.310（linux）模块 chunk-r1dvrqha.js
import { F, L, U } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { zAt, zfi, aYe, Rxe, lYe, eYt, rF, pX } from "./cowritten-artifact-html.js";
import { rn } from "../auth/oauth-2025-04-20.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { di, yi, re, Xf } from "../shared/chunk-d2c47492.js";
import { i, Zn } from "../shared/environment.js";
import { yZ } from "../shared/chunk-f98598c3.js";
import { dX } from "../remote/local-agent.js";
import { own } from "../shared/chunk-46ffe22f.js";
import { UVt, BVt, Wz, EH, Zor, esr, Wkt, f5r, ybe, awn, sai } from "../shared/chunk-dda594a8.js";
import { ose } from "../shared/chunk-d1292a44.js";
import { iT } from "../shared/chunk-49b6cfae.js";
var R0 = 5e4, jYr = 1e4, Uor = 4e3, Trt = 128e3, fbe = 5e5;
var Eqe = 4, jii = 4e5, Bor = 2e5, yR = 50, Wii = 1073741824, Gii = 1e4, ASn = 1e4, RVt = 1e5;
var S = null;
function Iii(e) {
  let n = S;
  return S = e, n;
}
function $or() {
  return S?.("tengu_cobalt_plinth_lovage", false) === true;
}
var Oii = ["mcp_needs_auth", "mcp_disabled", "mcp_required_missing", "auth_expired", "auth_overridden", "auth_missing_scope", "design_needs_authorization", "sandbox_violation", "outside_reads_blocked", "memory_paused", "feature_disabled", "policy_denied", "spawn_arg_limit", "staged_for_review"], Mii = ["claude_ai", "claude_design"], Dii = ["workflows", "artifacts"], Hii = ["managed_settings", "org_policy", "unavailable", "user_setting", "unsupported_runtime"], Lii = ["org_denied", "latched"];
function MRe() {
  return { kind: "auth_expired", provider: "claude_ai" };
}
function krt(e) {
  return { kind: "auth_overridden", provider: "claude_ai", managed: e };
}
function TSn(e) {
  switch (e) {
    case "env":
      return krt(false);
    case "fd":
      return krt(true);
    case "store":
    case "none":
      return MRe();
  }
}
var D = /* @__PURE__ */ new WeakMap();
function C0(e, n) {
  return D.set(e, n), e;
}
function Nii(e) {
  if (e === null || typeof e !== "object") return;
  return D.get(e);
}
function Co() {
  return rn().CLAUDE_AI_ORIGIN.includes("staging") ? "staging" : "prod";
}
function zii() {
  return se() ?? rn().CLAUDE_AI_ORIGIN;
}
function se() {
  return;
}
function k(e) {
  let n;
  try {
    n = new URL(e);
  } catch {
    return;
  }
  let o = iT(n.hostname), r;
  switch (n.protocol) {
    case "https:":
    case "wss:":
      r = "https:";
      break;
    case "http:":
    case "ws:":
      if (!o) return;
      r = "http:";
      break;
    default:
      return;
  }
  if (n.username !== "" || n.password !== "" || n.pathname !== "/" || n.search !== "" || n.hash !== "") return;
  return `${r}//${n.host}`;
}
function Kii() {
  return false;
}
function Vii() {
  return ae() ?? rn().BASE_API_URL;
}
function ae() {
  return;
}
function qii() {
  return false;
}
function _Ne() {
  return;
}
var DRe = "/api/claude_code/policy_limits", p = "disabled by your organization's policy", v = "disabled for the rest of this session because an organization with a restricted policy was signed in earlier";
function CVt(e, n, o, r) {
  if (ose(o).length > 0) return `${e} ${n} ${p}.`;
  if (r !== void 0) return r;
  return `${e} ${n} ${p}. Contact your organization admin to enable ${n === "are" ? "them" : "it"}.`;
}
function yNe(e, n) {
  return `${e} ${n} ${v}. Restart Claude Code to re-evaluate.`;
}
function ube(e) {
  return `Couldn't verify your organization's policy for ${e.toLowerCase()}. Check your network connection and try again.`;
}
function Ekt(e) {
  return `Couldn't load your organization's policy, which governs ${e.toLowerCase()}. The request for ${DRe} got a 404, which usually means a proxy or gateway between you and the API isn't forwarding that path. Ask your network admin to allow it; \`claude doctor\` (or /status in a session) shows which host was asked.`;
}
function BYr(e, n, o) {
  let r = `${e} ${n === "are" ? "aren't" : "isn't"} available`, { host: s, httpStatus: a } = o;
  switch (o.errorCode) {
    case "parse_failed":
      return `${r}: Claude Code couldn't read the reply when it asked ${s} for your organization's policy, which usually means a network proxy or web filter answered instead.`;
    case "network_error":
    case "timeout":
      return `${r}: couldn't reach ${s} to load your organization's policy. Check your network or proxy.`;
    case "auth_failed":
      if (a === 403) return `${r}: ${s}, or a proxy in front of it, refused the request for your organization's policy (HTTP 403).`;
      return a === 401 ? `${r}: ${s} didn't accept this session's credentials when Claude Code asked for your organization's policy.` : `${r}: no credentials could be attached to the request for your organization's policy.`;
    case "spurious_304":
      return `${r}: the saved copy of your organization's policy belongs to a previous sign-in, and a fresh one hasn't loaded yet.`;
    case "stale_tunnel_credential":
      return `${r}: the machine running claude ssh changed credentials while your organization's policy was loading, and a fresh copy hasn't loaded yet.`;
    case "request_failed":
      if (a === 404) return `${r}: the request for your organization's policy got a 404 from ${s}, which usually means a proxy or gateway isn't forwarding ${DRe}.`;
      if (a === 304) return `${r}: a caching proxy answered in place of ${s} when Claude Code asked for your organization's policy.`;
      if (a === 407) return `${r}: your proxy asked for authentication before it would forward the request for your organization's policy to ${s}.`;
      if (a !== null && (a >= 500 || a === 429)) return `${r}: your organization's policy couldn't be loaded from ${s} (HTTP ${a}). Try again later.`;
      return a !== null ? `${r}: your organization's policy couldn't be loaded from ${s} (HTTP ${a}). Check your proxy settings.` : `${r}: the request to ${s} for your organization's policy didn't complete. If you use a proxy, check that it lets ${s} through.`;
  }
}
function $ii(e) {
  return `Couldn't verify your organization's policy for ${e.toLowerCase()}. Check your network connection, then restart Claude Code and try again.`;
}
function Fii(e) {
  return `/${e} is available for your organization but wasn't when this session started. Restart Claude Code to use it.`;
}
function For(e, n) {
  if (ose(e).length > 0) return p;
  return n ?? p;
}
function Uii() {
  return `${v} — restart Claude Code to re-evaluate`;
}
function Bii() {
  return "couldn't verify your organization's policy — check your network connection and try again";
}
function i3o() {
  return `your organization's policy couldn't be loaded: the request for ${DRe} got a 404, which usually means a proxy or gateway isn't forwarding that path. Ask your network admin to allow it`;
}
var pbe = "˹-˼⌌-⌏⌜-⌟⎛-⏌⏜-⏡⸀-⸍⸜⸝─-╿";
var QE = "[Request interrupted by user]", zf = "[Request interrupted by user for tool use]", hI = "[Tool call did not complete: the turn was ended to deliver the message that follows. Nothing refused it; re-run it if still needed.]", a3o = "[Request interrupted: the session ended before this agent finished. Nobody asked it to stop.]", Gx = "[Tool call interrupted: the session ended before this call's result was recorded, so its outcome is unknown. Check whether it took effect before relying on it or running it again.]", x0 = "[Tool call result not in this copy: this session was copied from another session before that session recorded this call's result. The call may have finished there, may still be running there, or may never have run. Check whether it took effect before relying on it or running it again.]", aA = "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed.", bNe = "[Tool call skipped: the turn ended to deliver the message that follows before this call ran. Nothing refused it; re-run it if still needed.]", SNe = "[Tool call skipped: the turn was stopped before this call ran, by the check whose denial is on another call in this batch. Nothing refused this call and it had no effects; re-run it if still needed.]", wNe = "[Tool call not completed: an approval request expired with no answer, so the action awaiting approval did not run. Nobody refused it, so this is not the user's decision; ask again if it is still needed.]", vNe = "[Tool call not completed: an approval request was still unanswered when the message that follows arrived and was closed, so the action awaiting approval did not run. Nobody refused it, so this is not the user's decision; ask again if it is still needed.]", HRe = ["[Request interrupted by user]", "[Request interrupted: the session ended before this agent finished. Nobody asked it to stop.]", "[Request interrupted by user for tool use]", "[Tool call did not complete: the turn was ended to deliver the message that follows. Nothing refused it; re-run it if still needed.]", "[Tool call interrupted: the session ended before this call's result was recorded, so its outcome is unknown. Check whether it took effect before relying on it or running it again.]", "[Tool call result not in this copy: this session was copied from another session before that session recorded this call's result. The call may have finished there, may still be running there, or may never have run. Check whether it took effect before relying on it or running it again.]", "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed.", "[Tool call skipped: the turn was stopped before this call ran, by the check whose denial is on another call in this batch. Nothing refused this call and it had no effects; re-run it if still needed.]", "[Tool call skipped: the turn ended to deliver the message that follows before this call ran. Nothing refused it; re-run it if still needed.]"];
function vm(e) {
  if (e.type !== "user") return false;
  let n = e.message?.content;
  if (typeof n === "string") return HRe.some((o) => n.startsWith(o));
  if (!Array.isArray(n)) return false;
  return n.length > 0 && n.every((o) => {
    let r = o?.type === "text" ? o.text : o?.type === "tool_result" && o.is_error === true ? o.content : void 0;
    return typeof r === "string" && HRe.some((s) => r.startsWith(s));
  });
}
var KS = "The user doesn't want to proceed with this tool use. The tool use was rejected (eg. if it was a file edit, the new_string was NOT written to the file). STOP what you are doing and wait for the user to tell you how to proceed.", kkt = "User rejected tool use", fM = "API Error: Request was aborted.", Art = `The user sent a new message while you were working:
`, ENe = "Operation stopped by hook";
function CSn(e) {
  return e.startsWith(aA) || e.startsWith(bNe) || e.startsWith(SNe);
}
var Tkt = `

Note: The user's next message may contain a correction or preference. Pay close attention — if they explain what went wrong or how they'd prefer you to work, consider saving that to memory for future sessions.`;
function Xue(e) {
  if (e.type !== "user" || e.interruptedByShutdown !== true) return false;
  let n = e.message?.content;
  return Array.isArray(n) && n.some((o) => o.type === "tool_result");
}
var WYr = ` hook feedback:
`, l3o = ["Stop", "TeammateIdle", "TaskCreated", "TaskCompleted"];
function jor(e, n) {
  return `${e}${WYr}${n}`;
}
var xVt = "[structured-output-enforce]", d3o = "", Akt = "[projects-reply-gate]", RSn = "The previous response failed to produce a valid tool call. Please retry the tool call now.", c3o = "Your tool call was malformed and could not be parsed. Please retry.", xSn = "[Your previous response had no visible output. Please continue and produce a user-visible response.]", PSn = "The PermissionDenied hook indicated you may retry this tool call.", PVt = "The turn did not end: a tool call in your last message asked to end it, but another call in that message failed. Deal with the failure, then finish the turn. The calls that succeeded took effect, so do not repeat them.", GYr = "Your response above was stopped by a safety classifier — this is not a tool or API error. The rest of it was withheld, and tool calls in it that had not finished did not run. Do not produce that content again, even reworded.", u3o = GYr + ' Exception: a tool call whose result reads "Interrupted" was already running when the response was stopped; it may have partially or fully completed.', Ckt = "Output token limit hit. Resume directly — no apology, no recap of what you were doing. Pick up mid-thought if that is where the cut happened. Break remaining work into smaller pieces.", Rkt = "Output token limit hit while you were still reasoning, before this response produced any text or tool call. That reasoning was not kept and is not part of this conversation, so there is nothing to resume. Continue from the conversation above: reason much more briefly and produce your answer or next tool call well within the output limit.", f3o = "Your response was cut off because it exceeded the output token limit. Continue from where you left off. What you write next is shown as a separate block below the text so far, so begin at the start of the line, table row, list item or sentence that was cut, writing it again in full, and if you were inside a code block or a table, open it again first (the same code fence and language, the table's header row). Repeat nothing before that point and do not comment on the interruption. Keep going until the response is complete.", ISn = "[Your previous response reached the output limit with no visible output. Please continue and produce a brief user-visible response or tool call right away.]", IVt = "Your response above was cut off mid-stream. Resume directly from where it stops — no apology, no recap. If none of it survived, answer the request from the start.", OVt = "Your response above was cut off mid-stream and only your next message is delivered. Write the complete response again from the start — no apology, no mention of the cut-off.", OSn = "Goal check-in: «", ce = [xVt, d3o, Akt, own, OSn].filter((e) => e.length > 0), M = [Ckt, Rkt, ISn, f3o, IVt, OVt], le = [RSn, c3o, xSn, PSn, PVt, GYr, u3o, ...M];
function VV(e) {
  if (e.type !== "user" || e.isMeta !== true) return false;
  let n = E(e.message?.content);
  if (n === void 0) return false;
  if (ce.some((o) => n.startsWith(o))) return true;
  if (le.includes(n)) return true;
  return l3o.some((o) => n.startsWith(`${o}${WYr}`));
}
function Yii(e) {
  if (!VV(e)) return false;
  let n = E(e.message?.content);
  return n === IVt || n === OVt;
}
function Xii(e) {
  return VV(e) && M.includes(E(e.message?.content) ?? "");
}
function Jii(e) {
  return VV(e) && E(e.message?.content) === PVt;
}
function E(e) {
  if (typeof e === "string") return e;
  let n = Array.isArray(e) ? e[0] : void 0;
  if (typeof n === "object" && n !== null && "type" in n && n.type === "text" && "text" in n && typeof n.text === "string") return n.text;
  return;
}
var I = 58n, de = (1n << 128n) - 1n, Wor = 22, zYr = "[1-9A-HJ-NP-Za-km-z]{22}", _e = new RegExp("^[1-9A-HJ-NP-Za-km-z]{22}$"), fe = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function g(e) {
  if (!fe.test(e)) return null;
  let n = BigInt(`0x${e.replaceAll("-", "")}`), o = "";
  for (let r = 0; r < 22; r++) o = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[Number(n % I)] + o, n /= I;
  return o;
}
function U$(e) {
  if (!_e.test(e)) return null;
  let n = 0n;
  for (let r of e) n = n * I + BigInt("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".indexOf(r));
  if (n > de) return null;
  let o = n.toString(16).padStart(32, "0");
  return `${o.slice(0, 8)}-${o.slice(8, 12)}-${o.slice(12, 16)}-${o.slice(16, 20)}-${o.slice(20)}`;
}
var Lt = "Artifact", xkt = ["document", "slides", "design", "other"], Em = "ArtifactComments", _u = "ArtifactData", bH = "ArtifactCheck", qV = [Lt, Em, _u, bH], Bg = /^[0-9a-f]{32}$/, MSn = "file_path", p3o = ["action", "url", "prompt"], m3o = ["page", "version"], DSn = "Describe what this page contains and reproduce its substantive text content, structure, and any data it presents.", g3o = " — live version; raw HTML follows]", HSn = "You hadn't viewed the live version of this artifact, so the publish was refused.", h3o = "This session hadn't viewed the live version of this artifact, so the publish was refused.", y3o = (e) => `[Artifact ${e}${g3o}`, _3o = " — live version; a line diff against the content you sent follows]", b3o = (e) => `[Artifact ${e}${_3o}`, S3o = new RegExp(`\\n\\[Artifact [\\w-]{1,64}(?:${di(g3o)}|${di(_3o)})\\n`), KYr = "Its full source (", VYr = "Merge your edits onto it", w3o = new RegExp(`\\n(?=\\[Artifact [\\w-]{1,64}(?:${di(g3o)}|${di(_3o)})\\n|${di(KYr)}|${di(VYr)})`), Jue = "Publish refused — nothing was merged or published:", q = "file_path required to publish. Write the page to an .html file, then call again with its path as `file_path`", qYr = `${q}, or pass \`type_url\` to start a new Artifact from a type. There is no inline content parameter.`, YYr = `${q}. There is no inline content parameter, and creating an Artifact from a type is not available in this session, so build the page yourself.`, v3o = [qYr, YYr];
function kNe() {
  return $or() ? "…/artifact/<id>" : "…/code/artifact/<uuid>";
}
var Pkt = "Artifacts need a claude.ai login", LSn = 13, NSn = "not_logged_in", XYr = 15, $Sn = 22, LPi = ["policy_blocked", "policy_fetch_failed", "policy_route_missing"], FSn = { rate_limited: "publish_rate_limited", contract_rollout: "publish_contract_rollout" }, E3o = `${Pkt}. Run /login and select "Claude account with subscription", then retry — the "Anthropic Console account" option does not provide claude.ai credentials.`, MVt = "Every Artifact call is refused like this until a claude.ai login is available, so do not retry; tell the user what is needed.", USn = "Changing the input will not help: every Artifact call is refused like this until a claude.ai login is available, so do not retry; tell the user what is needed. The input was also invalid, but the schema error below matters only once that login is available.", k3o = `${Pkt}, and this remote session authenticates through the machine that launched it, which is not signed in to claude.ai. Sign in to claude.ai on that machine (/login, "Claude account with subscription"), then reconnect this session.`, T3o = `${Pkt}, but this session authenticates with a credential injected by its host environment, which takes precedence and cannot be changed here. Start a session that is signed in to claude.ai to publish or read artifacts.`;
function A3o(e) {
  return `${Pkt}. This session's API access is set up by ${e ? "your organization's managed settings" : "the ANTHROPIC_FEDERATION_RULE_ID / ANTHROPIC_ORGANIZATION_ID environment variables"}, which stays active for everything else — artifacts also use a claude.ai account. Run /login and select "Claude account with subscription", then retry.`;
}
function JYr(e) {
  switch (e) {
    case "org_policy_unverifiable":
      return "Artifacts can't check the signed-in Claude account's organization settings from this session: the account belongs to a Claude organization (Team or Enterprise), and this session's API access uses a different credential that can't read those settings. Run /login with a personal Claude account (Pro or Max), then retry.";
    case "plan_unreadable":
      return "The signed-in Claude account's plan couldn't be read from this session. Run /login again to refresh the signed-in account, then retry.";
    case "org_denied":
      return CVt("Artifacts", "are", yZ(), "Artifacts are disabled by your organization's policy. Contact your organization admin to enable them, then retry.");
    case "latched":
      return yNe("Artifacts", "are");
    case "cache_miss":
      return ube("Artifacts");
    case "policy_route_missing":
      return Ekt("Artifacts");
    case "policy_unavailable":
      return "Artifacts can't check the organization settings that apply to this session: the session's configuration (such as a custom ANTHROPIC_BASE_URL) prevents the policy lookup. Remove that configuration, then retry.";
  }
}
function QYr(e) {
  switch (e) {
    case "plan_unreadable":
      return MRe();
    case "org_denied":
    case "latched":
      return { kind: "policy_denied", feature: "artifacts", policy_kind: e };
    case "org_policy_unverifiable":
    case "cache_miss":
    case "policy_route_missing":
    case "policy_unavailable":
      return;
  }
}
function ZYr(e) {
  if (j(e)) return "Artifacts aren't available: Anthropic couldn't confirm your organization's settings for this cloud session (HTTP 403). This isn't a problem with your network.";
  return BYr("Artifacts", "are", e.outcome);
}
function j({ cause: e, outcome: n }) {
  return e === "policy_fetch_failed" && dX() && n.httpStatus === 403 && n.serverErrorCode === "oauth_not_allowed_for_organization";
}
var pe = "Claude Code reads that policy from ", Ee = /^[A-Za-z0-9.-]+(:[0-9]+)?$/;
function ge(e) {
  return Ee.test(e) ? `${e}${DRe}` : `the API's ${DRe} route`;
}
var Ae = " and keeps retrying it in the background; whether artifacts are allowed is decided once it loads. Do not retry this call now. Tell the user why artifacts are unavailable and, if a proxy, VPN or web filter is involved, that their IT admin needs to let that address through.", he = ", and a proxy or gateway that does not forward that path will keep answering 404, so nothing in this session can load it. Do not retry this call. Tell the user that their IT admin needs to let that address through to the API.";
function ywi(e) {
  let n = ge(e.outcome.host);
  if (j(e)) return `Claude Code reads the organization's policy from ${n}. In this cloud session, Anthropic's API refused the request for the user's organization (HTTP 403). Do not retry this call now. Tell the user that artifacts are unavailable because Anthropic couldn't confirm their organization's settings for this cloud session, and that it isn't a problem with their network.`;
  let o = e.cause === "policy_route_missing" ? he : Ae;
  return `${pe}${n}${o}`;
}
function BSn(e) {
  return `${ZYr(e)}

${ywi(e)}`;
}
function jSn(e, n) {
  return `${Pkt}, and this session is authenticating with ${e}, which takes precedence over a claude.ai account. ${n} Then run /login and select "Claude account with subscription".`;
}
class je extends Error {
  reasonCode;
  maxErrorChars;
  constructor(e, n, o) {
    super(e);
    this.name = "ArtifactInputError", this.reasonCode = n, this.maxErrorChars = o?.maxErrorChars;
  }
}
var R = "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}", O = "https://(?:[a-z0-9-]+\\.)?claude\\.ai", Crt = "/(?:artifact|code/(?:artifact|frame))/", x = `${R}|${zYr}`, y = `${Crt}(?:([A-Za-z0-9_-]*)-)?(${x})(?:[/?#]|$)`, C = `${Crt}(?:[A-Za-z0-9_-]*-)?(?:${x})/([^?#]+)`;
function T(e, n = false) {
  if (e === void 0) return null;
  if (e.length !== Wor) return e;
  return n ? null : U$(e);
}
function m(e) {
  return e?.length === Wor ? { shortId: true } : {};
}
var ar = new RegExp(`^${R}$`), Uj = /^[\w-]{1,64}$/, DVt = 1024, Bj = 16e3, C3o = R0, HVt = 2e4, G5 = 3e5, kqe = "eval-stub://artifact/";
function Zc() {
  let e = Zn.CLAUDE_CODE_EVAL_ARTIFACT_STUB_DIR;
  return typeof e === "string" && e.length > 0 ? e : null;
}
function N() {
  return null;
}
function R3o(e) {
  if (new RegExp(`^${O}(?:[/?#]|$)`).test(e)) return "prod";
  let n = N();
  if (n !== null && new RegExp(`^${n}(?:[/?#]|$)`).test(e)) return "staging";
  return null;
}
function Jt(e) {
  return J(e, false);
}
function J(e, n) {
  let o = e.match(new RegExp(`^${O}${y}`)), r = T(o?.[2], n);
  if (r !== null) return A(e, { slug: r, env: "prod", ...m(o?.[2]) }, o?.[1]);
  let s = N();
  if (s !== null) {
    let c = e.match(new RegExp(`^${s}${y}`)), l = T(c?.[2], n);
    if (l !== null) return A(e, { slug: l, env: "staging", ...m(c?.[2]) }, c?.[1]);
  }
  let a = e.match(new RegExp(`^https://(${R})\\.frame\\.(staging\\.)?claudeusercontent\\.com(?:[/?#]|$)`));
  if (a?.[1]) return A(e, { slug: a[1], env: a[2] ? "staging" : "prod" });
  let u = _Ne();
  if (u) {
    let c = e.match(new RegExp(`^https?://([^/?#]+)${y}`)), l = T(c?.[3], n);
    if (c !== null && l !== null && c[1] === new URL(u).host) return A(e, { slug: l, env: Co(), ...m(c[3]) }, c[2]);
  }
  return null;
}
var Te = /^[A-Za-z0-9_-]{1,64}$/, Re = /^[a-z0-9][a-z0-9-]{0,59}$/;
function A(e, n, o) {
  let r = o !== void 0 && Re.test(o) ? { ...n, vanity: o } : n, s = e.indexOf("#"), a = s === -1 ? e : e.slice(0, s), u = a.indexOf("?");
  if (u === -1) return r;
  let l = a.slice(u + 1).split("&").find((d) => d.startsWith("sk="))?.slice(3);
  return l !== void 0 && Te.test(l) ? { ...r, sk: l } : r;
}
function LRe(e) {
  let n = _Ne(), o = N(), r = e.match(new RegExp(`^${O}${C}`))?.[1] ?? (o !== null ? e.match(new RegExp(`^${o}${C}`))?.[1] : void 0) ?? (n ? e.match(new RegExp(`^https?://${di(new URL(n).host)}${C}`))?.[1] : void 0);
  return r === void 0 || r === "" ? void 0 : r;
}
function nB(e) {
  try {
    let n = new URL(e);
    if (n.protocol === "http:") n.protocol = "https:";
    if (n.hostname.endsWith(".")) n.hostname = n.hostname.slice(0, -1);
    return n.href;
  } catch {
    return e;
  }
}
function SH(e) {
  return typeof e === "string" ? Jt(nB(e)) : null;
}
function gZ(e) {
  let n = nB(e);
  return Jt(n) ?? J(n.toLowerCase(), true);
}
var Se = new RegExp(`^${di(kqe)}(${R})(?:[/?#]|$)`);
function Rrt(e) {
  let n = e.match(Se);
  return n?.[1] ? { slug: n[1] } : null;
}
var Tqe = "artifact-deleted", x3o = new RegExp(`^<${Tqe} url="([^"]+)"/>`), e5r = "artifact-attached", P3o = new RegExp(`^<${e5r} url="([^"]+)"(?: title="([^"]*)")?( own)?/>`);
function al(e) {
  let n = Jt(e)?.slug;
  if (n !== void 0) return n;
  return Zc() !== null ? Rrt(e)?.slug ?? null : null;
}
function t5r(e) {
  if ($or()) {
    let n = g(e);
    if (n !== null) return `/artifact/${n}`;
  }
  return `/code/artifact/${e}`;
}
function b(e) {
  let n = _Ne();
  if (n && e === Co()) return n;
  return "https://claude.ai";
}
function xn(e) {
  return `${b(e.env)}${t5r(e.slug)}`;
}
function Que(e) {
  return e === void 0 ? {} : { owned: e };
}
function Aqe(e, n) {
  return { written: { url: xn(e) }, ...Que(n) };
}
function WSn(e) {
  let n = b(e.env), o = g(e.slug);
  return [`${n}/code/artifact/${e.slug}`, ...o !== null ? [`${n}/artifact/${o}`] : []];
}
function fS(e, n) {
  let { target: o, other: r } = n5r(e, n);
  return r === void 0 ? o : `${o} [same artifact: ${r}]`;
}
function n5r(e, n) {
  let o = typeof e === "string" ? Jt(e) : null;
  if (o === null) return { target: n };
  let r = b(o.env), s = g(o.slug), a = `${r}/code/artifact/${o.slug}`;
  if (s === null) return { target: a };
  let u = `${r}/artifact/${s}`;
  return o.shortId ? { target: u, other: a } : { target: a, other: u };
}
function I3o(e) {
  return e.other === void 0 ? "" : ` [same artifact: ${e.target} is ${e.other}]`;
}
function Cqe(e) {
  return `https://${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`;
}
function Xi(e, n) {
  let o = typeof e === "string" ? Jt(e) : null;
  return o ? xn(o) : n;
}
function r5r(e) {
  let o = e.match(new RegExp(`^https://claude\\.ai${Crt}(${x})/?$`));
  return T(o?.[1]) !== null;
}
var xrt = 8192, O3o = xrt * 4, Gor = 280, YV = 60, Ie = /&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, h = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", ndash: "–", mdash: "—", minus: "−", hellip: "…", lsquo: "‘", rsquo: "’", sbquo: "‚", ldquo: "“", rdquo: "”", bdquo: "„", lsaquo: "‹", rsaquo: "›", laquo: "«", raquo: "»", middot: "·", bull: "•", dagger: "†", Dagger: "‡", prime: "′", Prime: "″", trade: "™", copy: "©", reg: "®", deg: "°", times: "×" };
function Z(e) {
  return e.replace(/<!--[\s\S]*?(?:-->|$)/g, "");
}
function w(e) {
  let n = Z(e.slice(0, xrt)), o = n.search(/<svg/i);
  return o === -1 ? n : n.slice(0, o);
}
function Ikt(e) {
  return e.replace(Ie, (n, o) => {
    if (o.startsWith("#")) {
      let s = o[1] === "x" || o[1] === "X" ? parseInt(o.slice(2), 16) : parseInt(o.slice(1), 10);
      return s <= 1114111 && (s < 55296 || s > 57343) ? String.fromCodePoint(s) : n;
    }
    if (Object.hasOwn(h, o)) return h[o] ?? n;
    let r = o.toLowerCase();
    if (Object.hasOwn(h, r)) return h[r] ?? n;
    return n;
  });
}
var ye = /<link\b[^>]*>/gi, Ce = 2048, Q = /<link\b[^>]{0,2048}\bartifact-thumbnail\b/gi, me = new RegExp(Q.source, "i"), Oe = /([^\s"'<>\/=]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g, ee = "artifact-thumbnail", xe = /^\(\s*prefers-color-scheme\s*:\s*dark\s*\)$/i, Ne = /^(?:all|\(\s*prefers-color-scheme\s*:\s*light\s*\))$/i, G = /<(script|style)\b[^>]{0,2048}>[\s\S]*?(?:<\/\1\s*>|$)/gi;
function be(e) {
  let n = [];
  for (let o of e.match(ye) ?? []) {
    if (o.length > Ce) {
      if (me.test(o)) n.push({ dark: false, oversize: true });
      continue;
    }
    let r, s, a;
    for (let d of o.matchAll(Oe)) {
      let _ = d[1].toLowerCase(), f = d[2] ?? d[3] ?? d[4] ?? "";
      if (_ === "rel") r ??= f;
      else if (_ === "href") s ??= f;
      else if (_ === "media") a ??= f;
    }
    if (!(r ?? "").toLowerCase().split(/\s+/).includes(ee)) continue;
    let u = Ikt(a ?? "").trim(), c = xe.test(u), l = u === "" || Ne.test(u);
    n.push({ ...s !== void 0 && { href: Ikt(s).trim() }, dark: c, ...!c && !l && { badMedia: u } });
  }
  return n;
}
function GSn(e) {
  let n = { pastWindow: false }, o = w(e).replace(G, "");
  for (let { href: s, dark: a, badMedia: u, oversize: c } of be(o)) if (c) n.oversizeTag = true;
  else if (s === void 0) n.missingHref = true;
  else if (u !== void 0) n.badMedia ??= u;
  else if (a) n.dark ??= s;
  else n.light ??= s;
  let r = (s) => s.match(Q)?.length ?? 0;
  return n.pastWindow = e.includes(ee) && r(Z(e).replace(G, "")) > r(o), n;
}
var M3o = /[<>&"']/, Le = [["'", "'"], ['"', '"'], ["‘", "’"], ["“", "”"], ["`", "`"]];
function zor(e) {
  let n = e;
  for (let o = 0; o < 4; o++) {
    let r = n.trim();
    for (let [s, a] of Le) if (r.length > s.length + a.length - 1 && r.startsWith(s) && r.endsWith(a)) {
      r = r.slice(s.length, r.length - a.length);
      break;
    }
    if (r = Ikt(r), r === n) break;
    n = r;
  }
  return n;
}
var B = String.raw`\p{Extended_Pictographic}[\ufe0e\ufe0f]?\p{Emoji_Modifier}?`, we = String.raw`\u{1f3f4}\u{e0067}\u{e0062}(?:\u{e0065}\u{e006e}\u{e0067}|\u{e0073}\u{e0063}\u{e0074}|\u{e0077}\u{e006c}\u{e0073})\u{e007f}`, Fe = String.raw`(?:[#*0-9]\ufe0f?\u20e3|\p{Regional_Indicator}{2}|${we}|${B}(?:\u200d${B}){0,3})`, Pe = new RegExp(`^${Fe}{1,4}$`, "u"), Ue = /\p{Regional_Indicator}{2}.*\p{Regional_Indicator}/u;
function Okt(e) {
  if (typeof e !== "string" || e.length > 32) return;
  let n = zor(e);
  return Pe.test(n) && !Ue.test(n) ? n : void 0;
}
function zSn(e) {
  let o = w(e).match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  if (o === void 0) return null;
  return Zk(Ikt(o));
}
function Zk(e) {
  let o = Array.from(e, (s) => {
    let a = s.codePointAt(0) ?? 0;
    return a <= 31 || a >= 127 && a <= 159 ? " " : s;
  }).join("").replace(/\s+/g, " ").trim();
  if (o === "") return null;
  let r = Array.from(o);
  return r.length > Gor ? r.slice(0, Gor).join("") : o;
}
var wH = /[\u201C\u201D\u201E\u201F\u2E42\uFF02\u02F5\u02F6\u2033\u2034\u2036\u2037\u02BA\u02DD\u02EE\u05F4\u3003\u301D-\u301F\u275D\u275E\u2760\u{1F676}-\u{1F678}]/gu, rB = /['\u0060\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02BF\u02C8\u02CA\u02CB\u0374\u0384\u055A\u05F3\u07F4\u07F5\u1FBD\u1FBF\u1FEF\u1FFD\u1FFE\u2018\u2019\u201A\u201B\u2032\u2035\u275B\u275C\u275F\uA78B\uA78C\uFF07\uFF40]{2,}/g, Bz = /[\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u{13441}\u{13442}\uFFFC]/gu;
function zx(e) {
  return e <= 31 || e >= 127 && e <= 159 || e === 173 || e === 1564 || e >= 8203 && e <= 8207 || e === 8232 || e === 8233 || e >= 8234 && e <= 8238 || e >= 8288 && e <= 8297 || e >= 65024 && e <= 65039 || e === 65279 || e >= 65529 && e <= 65531 || e === 94180 || e >= 917504 && e <= 917999;
}
var Rqe = /^[\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u{13441}\u{13442}\uFFFC]$/u;
function De(e) {
  return e === 8204 || e === 8205;
}
function te(e) {
  return e >= 65024 && e <= 65039 || e >= 917760 && e <= 917999;
}
function Prt(e) {
  return De(e) || te(e);
}
function Qii(e) {
  return !Prt(e) && (zx(e) || e > 127 && Rqe.test(String.fromCodePoint(e)));
}
var ke = /^[\p{Extended_Pictographic}\p{Emoji_Modifier}]$/u, ve = 8, H = /^[#*0-9]$/, $e = /^\p{Script=Han}$/u, Me = /^[\p{Script=Arabic}\p{Script=Syriac}\p{Script=Mongolian}\p{Script=Devanagari}\p{Script=Bengali}\p{Script=Gurmukhi}\p{Script=Gujarati}\p{Script=Oriya}\p{Script=Tamil}\p{Script=Telugu}\p{Script=Kannada}\p{Script=Malayalam}\p{Script=Sinhala}\p{Script=Myanmar}\p{Script=Tibetan}\p{Script=Khmer}]$/u, Ge = /^[\n\r\t\v\f\u0085\u2028\u2029]$/;
function Kor(e) {
  if ((e.codePointAt(0) ?? 0) < 128) return H.test(e) ? "keycap" : "plain";
  return ke.test(e) ? "pictograph" : H.test(e) ? "keycap" : $e.test(e) ? "han" : Me.test(e) ? "joining" : "plain";
}
function Vor(e, n) {
  if (te(e)) {
    let r = e <= 65039 ? n === "pictograph" || n === "han" || n === "keycap" && e === 65039 : n === "han";
    return { rides: r, after: r && n === "pictograph" ? "selector" : "none" };
  }
  return { rides: e === 8205 ? n === "pictograph" || n === "selector" || n === "joining" : n === "joining", after: "none" };
}
function Mkt(e, n, { joiners: o } = { joiners: true }) {
  let r = Xf(e), s = [], a = 0, u = false, c = 0, l = "none";
  for (let d of r) {
    if (++a > 16 * n || s.length >= n + 1) {
      u = true;
      break;
    }
    let _ = d.codePointAt(0) ?? 0;
    if (!o && Prt(_)) l = "none";
    else if (Prt(_)) {
      let f = Vor(_, l);
      if (f.rides && c < ve) s.push(d), c++, l = f.after;
      else l = "none";
    } else if (Ge.test(d)) {
      if (s.length > 0 && s.at(-1) !== " ") s.push(" ");
      l = "none";
    } else if (!Qii(_)) s.push(d), l = Kor(d);
    else l = "none";
  }
  if (s.length > n) u = true;
  return { kept: Kl(s.slice(0, u ? n - 1 : n).join("")), cut: u };
}
function o5r(e) {
  let n = "", o = "none";
  for (let r of Xf(e)) {
    let s = Be(r, o);
    n += s.shown, o = s.after;
  }
  return n;
}
function Be(e, n) {
  let o = e.codePointAt(0) ?? 0;
  if (Prt(o)) {
    let r = Vor(o, n);
    return { shown: r.rides ? e : "�", after: r.after };
  }
  if (o === 10 || o === 13 || o === 9) return { shown: e, after: "none" };
  if (Qii(o)) return { shown: "�", after: "none" };
  return { shown: e, after: Kor(e) };
}
function aC(e, n) {
  let { kept: o, cut: r } = Mkt(e, n);
  return r ? `${o}…` : o;
}
var He = 1024, Ye = 2048;
function L9(e) {
  return typeof e === "string" ? aC(e, He) : "(unknown)";
}
function rse(e) {
  return typeof e === "string" ? aC(e, Ye) : "(unknown)";
}
var Ke = 512;
function s5r(e) {
  return e.replace(Ve, (n) => `${n}\\`);
}
function hZ(e) {
  return s5r(aC(e, Ke));
}
function lC(e, n) {
  let { kept: o, cut: r } = Mkt(e, n, { joiners: false });
  return r ? `${o}…` : o;
}
var NPi = 500, D3o = 600;
function H3o(e) {
  let n = e?.action;
  return n === void 0 || n === "publish" || n === "live-edit" || n === "sync" || n === "version";
}
var mbe = 25, NRe = 200, Irt = 50;
function $Re(e) {
  let n = e.scope;
  return n === "shared" || n === "all" ? n : "mine";
}
var i5r = [zAt, aYe, zfi, lYe, eYt, Rxe], Y = i5r, Xe = ["tool_use_error", "sandbox_violations"], K = ["result", "name", "output", "error", "system"];
function ze() {
  let { open: e, close: n, slash: o } = Wz, r = `[${e}][^${UVt}${e}${n}]*[${o}]`, s = `(?<=[${UVt}$])[${e}][A-Za-z]`, a = EH(K), u = EH(K, ({ close: c }) => `[\\r\\n${Wkt}]*[${c}]`);
  return [new RegExp(`(?=${r})${a.source}`, a.flags), new RegExp(`(?!${s})${u.source}`, u.flags)];
}
function a5r() {
  return [["artifact", f5r], ["artifact", ybe, "owned", "by", "you"], ["artifact", ybe, "raw", "html", "follows"], ["artifact", ybe, "summary", "below"], ["artifact", ybe, "shared", "with", "you"], ["artifact", ybe, "published", "from", "your"], ["artifact", ybe, "live", "version"], ["artifact", ybe, "published", "by", "a", "writer"], ["this", "version", "has", ybe, "published", "files"], ["stored", "for", "the", "live", "version"], ["origin", "of", "this", "version"], ["created", "from", "the", "artifact", "type"], ["end", "of", "live", "content", awn], ["end", "of", "live", "changes", awn], ["an", "unchanged", "line", awn], ["this", "artifact", ybe, "ships", "an", "instructions", "file"], ["could", "not", "check", "whether", "this", "artifact"], ["design", "system", "not", "attached"], ["design", "systems", "not", "listed"], ["design", "systems", "left", "out"], ["published", "types", "titled"], ["artifact", "types", "not", "listed"], ["type", "reference", "pages", "not", "attached"], ["a", "quickstart", "in", "this", "conversation"], ["the", "design", "guidance", "that", "came", "with"], ["how", "to", "build", "and", "iterate", "on"]];
}
class ne {
  #e;
  #t;
  #n;
  get lead() {
    return this.#e ??= sai(a5r()), this.#e;
  }
  get page() {
    return this.#t ??= [EH(Y), this.lead], this.#t;
  }
  get envelopes() {
    return this.#n ??= [EH(L([...Y, "transcript", ...pX.filter((e) => e !== rF), ...Xe])), ...ze(), Zor(), esr(), this.lead], this.#n;
  }
}
var _wi = new W(() => new ne());
function oe() {
  return _wi.of(U().host);
}
function L3o() {
  return oe().lead;
}
var P = [zf, hI, Gx, x0];
function KSn(e) {
  return P.some((n) => e.includes(n));
}
var We = new RegExp(P.map((e) => `${di(e.slice(0, 1))}(?=${di(e.slice(1))})`).join("|"), "g"), Ve = new RegExp(["<(?=\\/?(?:tool_use_error|sandbox_violations|error)\\b)", "InputValidationError(?!\\\\)", ...P.map((e) => `${di(e.slice(0, 1))}(?=${di(e.slice(1, -1))})`)].join("|"), "gi");
function bwi(e) {
  return e.replace(We, (n) => `${n}\\`);
}
function Kl(e, n = "all") {
  let o = oe(), r = e;
  for (let s of n === "page" ? o.page : o.envelopes) r = r.replace(s, (a) => `${a}\\`);
  return n === "page" ? r : bwi(r);
}
function N3o(e, n, o = "all") {
  let r = Kl(re(e, n), o);
  return r.length > n ? Kl(re(e, n - 1), o) : r;
}
function jj(e, n) {
  return Kl(yi(Array.from(re(e, n * 4), (o) => zx(o.codePointAt(0) ?? 0) ? " " : o).join("").replace(Bz, " ").replace(/\s+/g, " ").trim(), n));
}
var Swi = 80;
function Ort(e) {
  return eT((Kf(Zk(e ?? "") ?? "") ?? "").replace(f_, " ").replace(/:\u2215\u2215/g, "://")).replace(Zue, " ").replace(Dkt, Hkt).replace(/\s+/g, " ").trim();
}
function jz(e) {
  let n = Ort(e), o = re(n, Swi);
  if (o === n) return n;
  return `${o.endsWith(":∕") ? o.slice(0, -1) : o}…`;
}
function Kf(e) {
  return Array.from(e, (n) => zx(n.codePointAt(0) ?? 0) ? " " : n).join("").replace(Bz, " ").replace(/"/g, "'").replace(wH, "'").replace(rB, "'").replace(/\s+/g, " ").trim() || null;
}
var wwi = String.raw`\u002b\u003d\u005e\u007c\u007e\u00a2-\u00a5\u00a8\u00ac\u00af\u00b1\u00b4\u00b8\u00d7\u00f7\u02c2-\u02c5\u02d2-\u02df\u02e5-\u02eb\u02ed\u02ef-\u02ff\u0375\u0384\u0385\u03f6\u058f\u0606-\u0608\u060b\u07fe\u07ff\u0888\u09f2\u09f3\u09fb\u0af1\u0bf9\u0e3f\u17db\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd\u1ffe\u2044\u2052\u207a-\u207c\u208a-\u208c\u20a0-\u20c1\u2118\u2140-\u2144\u214b\u2190-\u2194\u219a\u219b\u21a0\u21a3\u21a6\u21ae\u21ce\u21cf\u21d2\u21d4\u21f4-\u22ff\u2320\u2321\u237c\u239b-\u23b3\u23dc-\u23e1\u25b7\u25c1\u25f8-\u25ff\u266f\u27c0-\u27c4\u27c7-\u27e5\u27f0-\u27ff\u2900-\u2982\u2999-\u29d7\u29dc-\u29fb\u29fe-\u2aff\u2b30-\u2b44\u2b47-\u2b4c\u309b\u309c\ua700-\ua716\ua720\ua721\ua789\ua78a\ua838\uab5b\uab6a\uab6b\ufb29\ufbb2-\ufbc2\ufdfc\ufe62\ufe64-\ufe66\ufe69\uff04\uff0b\uff1c-\uff1e\uff3e\uff40\uff5c\uff5e\uffe0-\uffe3\uffe5\uffe6\uffe9-\uffec\u{10d8e}\u{10d8f}\u{11fdd}-\u{11fe0}\u{1cef0}\u{1d6c1}\u{1d6db}\u{1d6fb}\u{1d715}\u{1d735}\u{1d74f}\u{1d76f}\u{1d789}\u{1d7a9}\u{1d7c3}\u{1e2ff}\u{1ecb0}\u{1eef0}\u{1eef1}\u{1f3fb}-\u{1f3ff}\u{1f8d0}-\u{1f8d8}`, X = `[\\p{So}${wwi}\\p{Pd}\\p{Pc}\\p{Mn}\\p{Me}${BVt}\\u02c9\\u02cd\\u2017\\u2053\\u203e\\ufe49-\\ufe4c\\u0640\\u07fa\\u1173\\u1428\\u180a\\u2e0f\\u2f00\\u3127\\u3161\\u3192\\u31d0\\u4e00\\ua4ff\\ua7f7\\ua8fb\\uffda]`, qe = new RegExp(`(?<!${X})${X}+>`, "gu");
function eT(e) {
  return e.replace(/[\u00bb\u02c2-\u02c5\u02ef-\u02ff\u1405\u1406\u1409\u1433\u1434\u1450\u1451\u15d2\u2023\u203a\u204d\u20d0-\u20ef\u2044\u2190-\u21ff\u2215\u226b\u227b\u227d\u227f\u2283\u22b1\u22b3\u22d7\u22d9\u2571\u2572\u2303-\u2304\u232a\u2344\u2348\u23e9-\u23ef\u23f5\u25b6-\u25bb\u261b\u261e\u276d\u276f\u2771\u2794-\u27bf\u27e9\u27eb\u27f0-\u27ff\u2900-\u297f\u29a8-\u29af\u2992\u2994\u29c1\u29d0\u29f5\u29f8\u29fd\u2a20\u2a7a\u2aa2\u2aa7\u2aa9\u2aab\u2aad\u2ab0\u2ab2\u2ab4\u2ab6\u2ab8\u2aba\u2abc\u2af8\u2b00-\u2bff\u3009\u300b\ue000-\uf8ff\ufe65\ufe68\uff0f\uff1e\uff3c\uffe9-\uffec\u{1f449}\u{1f599}\u{1f59b}\u{1f59d}\u{1f782}\u{1f800}-\u{1f8ff}\u{1faf1}\u{1fbc1}-\u{1fbc3}\u{1fbb0}-\u{1fbb8}\u{f0000}-\u{ffffd}\u{100000}-\u{10fffd}]/gu, "?").replace(qe, "?");
}
var Dkt = /[:\uFE13\uFE55\uFF1A][/\uFF0F][/\uFF0F]/gu, Hkt = ":∕∕", Zue = /[<>\uFE64\uFE65\uFF1C\uFF1E]+/gu, z = `(?![(){}])[\\p{Ps}\\p{Pe}${pbe}]`, f_ = new RegExp(`(?<!\\s)\\s*${z}(?:\\s|${z})*`, "gu"), ie = /[:\u02D0\u02D1\u05C3\u2D42\u2D53\u2D57\uA4FD\uA789\u{10781}\u{10782}]|(?![\p{L}\p{N}\p{Zs}])[^\x00-\x7F]/gu, $3o = new RegExp(`^(?:${ie.source})$`, "u");
function Lkt(e) {
  return Wj(e.replace(f_, " ").replace(ie, " ").replace(/ {2,}/g, " "));
}
var vwi = [["sources", "under"], ["stored", "connector", "grant"], ["published", "by", "this", "session"], ["created", "by", "this", "session"]], Je = vwi.map((e) => [new RegExp(e.join("[^\\p{L}\\p{N}]+"), "giu"), e.join("-")]);
function Wj(e) {
  return Je.reduce((n, [o, r]) => n.replace(o, r), e);
}
var qor = " [artifact published by this session]", VSn = " [artifact created by this session]", qSn = " [ownership: yours, made from an Artifact type — the files the type put in it were written by the type's publisher]", F3o = " [capabilities: declared by the Anthropic-published type this Artifact was made from; this publish cannot change them]", U3o = " [destination is a file name Claude Code screens: git, hook, tool and agent settings]", B3o = "Automatic edit of an Artifact this session watches, requested by a writer's comment on it; the server re-checks the writer, the thread's edit grant, single-file, size and rate limits";
function _R(e) {
  return eT(Kf(e) ?? "").replace(f_, " ").replace(Zue, " ").replace(/ {2,}/g, " ").trim();
}
var Ze = /<meta[^>]+name=["']description["'][^>]+content=(["'])((?:(?!\1).)*)\1/is, Qe = /<title[^>]*>([\s\S]*?)<\/title>/i, et = /<h1[^>]*>([\s\S]*?)<\/h1>/i, V = /* @__PURE__ */ new Set(["", "index", "untitled", "document"]);
function j3o(e, n) {
  let o = w(e), r = (_) => Zk(Ikt(_ ?? "")) ?? "", s = r(o.match(Ze)?.[2]);
  if (s.length >= 10) return s;
  let a = (_) => r(o.match(_)?.[1]?.replace(/<[^>]+>/g, "")), u = a(Qe), c = a(et), l = u.toLowerCase();
  if (V.has(l) || l === n) u = "";
  let d = c.toLowerCase();
  if (d === u.toLowerCase() || V.has(d) || d === n) return u;
  return c;
}
function YSn(e) {
  let n = F(e, (o) => "rail" in o && o.rail === "live_stopped");
  return { watching: e.length - n, stopped: n };
}
export {
  $3o,
  $Re,
  $Sn,
  $ii,
  $or,
  A3o,
  ASn,
  Akt,
  Aqe,
  Art,
  B3o,
  BSn,
  BYr,
  Bg,
  Bii,
  Bj,
  Bor,
  Bz,
  C0,
  C3o,
  CSn,
  CVt,
  Ckt,
  Co,
  Cqe,
  Crt,
  D3o,
  DRe,
  DSn,
  DVt,
  Dii,
  Dkt,
  E3o,
  ENe,
  Ekt,
  Em,
  Eqe,
  F3o,
  FSn,
  Fii,
  For,
  G5,
  GSn,
  GYr,
  Gii,
  Gor,
  Gx,
  H3o,
  HRe,
  HSn,
  HVt,
  Hii,
  Hkt,
  I3o,
  ISn,
  IVt,
  Iii,
  Ikt,
  Irt,
  JYr,
  Jii,
  Jt,
  Jue,
  KS,
  KSn,
  KYr,
  Kf,
  Kii,
  Kl,
  Kor,
  L3o,
  L9,
  LPi,
  LRe,
  LSn,
  Lii,
  Lkt,
  Lt,
  M3o,
  MRe,
  MSn,
  MVt,
  Mii,
  Mkt,
  N3o,
  NPi,
  NRe,
  NSn,
  Nii,
  O3o,
  OSn,
  OVt,
  Oii,
  Okt,
  Ort,
  P3o,
  PSn,
  PVt,
  Pkt,
  Prt,
  QE,
  QYr,
  Qii,
  Que,
  R0,
  R3o,
  RSn,
  RVt,
  Rkt,
  Rqe,
  Rrt,
  S3o,
  SH,
  SNe,
  Swi,
  T3o,
  TSn,
  Tkt,
  Tqe,
  Trt,
  U$,
  U3o,
  USn,
  Uii,
  Uj,
  Uor,
  VSn,
  VV,
  VYr,
  Vii,
  Vor,
  WSn,
  WYr,
  Wii,
  Wj,
  Wor,
  XYr,
  Xi,
  Xii,
  Xue,
  YSn,
  YV,
  YYr,
  Yii,
  ZYr,
  Zc,
  Zk,
  Zue,
  _3o,
  _Ne,
  _R,
  _u,
  _wi,
  a3o,
  a5r,
  aA,
  aC,
  al,
  ar,
  b3o,
  bH,
  bNe,
  bwi,
  c3o,
  d3o,
  e5r,
  eT,
  f3o,
  fM,
  fS,
  f_,
  fbe,
  g3o,
  gZ,
  h3o,
  hI,
  hZ,
  i3o,
  i5r,
  j3o,
  jSn,
  jYr,
  je,
  jii,
  jj,
  jor,
  jz,
  k3o,
  kNe,
  kkt,
  kqe,
  krt,
  l3o,
  lC,
  m3o,
  mbe,
  n5r,
  nB,
  o5r,
  p3o,
  pbe,
  qSn,
  qV,
  qYr,
  qii,
  qor,
  r5r,
  rB,
  rse,
  s5r,
  t5r,
  u3o,
  ube,
  v3o,
  vNe,
  vm,
  vwi,
  w3o,
  wH,
  wNe,
  wwi,
  x0,
  x3o,
  xSn,
  xVt,
  xkt,
  xn,
  xrt,
  y3o,
  yNe,
  yR,
  ywi,
  zSn,
  zYr,
  zf,
  zii,
  zor,
  zx
};
