// linux/agents/fullscreen-upsell-trial-persisted.js — Claude Code 2.1.310（linux）模块 chunk-z2rjm3ha.js
import { wX, yTn } from "../context/not-admin-owned.js";
import { c } from "./third-party.js";
import { Qe, d } from "../telemetry/anthropic-workspace-id.js";
import { Yn, A_, ml, Sg } from "../fs/node-modules.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, f } from "../telemetry/chunk-9d6962d2.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { xxe, Db, t } from "../fs/gitlab-runner-authentication-token.js";
import { Mz, k, Re, ue } from "../settings/global-config-and-gates.js";
import { a2, Z9 } from "../git/utf-8.js";
import { Ri, m_ } from "../fs/async-hooks.7959.js";
import { pt, Sa } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { he } from "../terminal/xterm-ghostty.js";
import { uM } from "./in-process-teammate.32be.js";
import { Bqn, AFt, CFt, Zl } from "../telemetry/focus-events.js";
import { uze, MS } from "./swarm-team-file-update.js";
import { CE } from "../telemetry/fleet-past-sessions.js";
import { iu } from "../shared/chunk-bbf114e1.js";
import { xr } from "../shared/chunk-e4a3aa33.js";
import { mve, s4 } from "../shell/prompt-input-exit.js";
import { P, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function pxn() {
  let e = xr(), n = iu();
  P(() => {
    return;
  }, [e, n]);
}
var Tds = { CLAUDE_CODE_TUI_TRIAL: "fullscreen" };
function v(e, n) {
  Re((r) => (r.fullscreenUpsellSeenCount ?? 0) >= e ? r : { ...r, fullscreenUpsellSeenCount: e }, n);
}
function Nfr(e) {
  v(CFt, e);
}
function GZr(e) {
  let n = Bqn();
  if (n.upsellImpression !== void 0) return n.upsellImpression;
  let r = Math.min((ue().fullscreenUpsellSeenCount ?? 0) + 1, CFt);
  return n.upsellImpression = r, v(r, e), r;
}
async function Ads(e) {
  let n = Bqn();
  if (n.persisted || AFt() !== "fullscreen") return false;
  if (pt().tui !== void 0) return t("fullscreen trial: settings.tui was set explicitly during the trial — not persisting"), false;
  if (!Zl()) return t("fullscreen trial: renderer is not fullscreen this session (auto-off) — not persisting"), false;
  let r = false, { error: o } = await Sa("userSettings", (i) => (r = i?.tui !== void 0, r ? null : { tui: "fullscreen" }), void 0, e);
  if (o) return l(o), f("tui_fullscreen_upsell_trial", "settings_write_failed"), false;
  if (r) return t("fullscreen trial: settings.tui was set explicitly during the trial (seen inside the queued write) — not persisting"), false;
  return Nfr(e), n.persisted = true, g("tui_fullscreen_upsell_trial"), a("tengu_fullscreen_upsell_trial_persisted", { session_age_ms: Math.round(process.uptime() * 1e3) }), t("fullscreen trial: healthy — persisted settings.tui=fullscreen"), true;
}
async function Cds(e) {
  let n = uM();
  if (!n?.teamName || !n?.agentName) {
    t("[Reconnection] computeInitialTeamContext: No teammate context set (not a teammate)");
    return;
  }
  let { teamName: r, agentId: o, agentName: i } = n, u = await MS(r, e);
  if (!u) {
    l(Qe(Error(`[computeInitialTeamContext] Could not read team file for ${r}`), "[computeInitialTeamContext] Could not read team file"));
    return;
  }
  let s = uze(r), m = !o;
  return t(`[Reconnection] Computed initial team context for ${m ? "leader" : `teammate ${i}`} in team ${r}`), { teamName: r, teamFilePath: s, leadAgentId: u.leadAgentId, selfAgentId: o, selfAgentName: i, isLeader: m, teammates: {} };
}
async function Rds(e, n, r, o) {
  let i = await MS(n, o);
  if (!i) {
    t(`[initializeTeammateContextFromSession] Could not read team file for ${n} (agent: ${r}) — team may have been disbanded`, { level: "error" });
    return;
  }
  let u = i.members.find((b) => b.name === r);
  if (!u) t(`[Reconnection] Member ${r} not found in team ${n} - may have been removed`);
  let s = u?.agentId, m = uze(n);
  e((b) => ({ ...b, teamContext: { teamName: n, teamFilePath: m, leadAgentId: i.leadAgentId, selfAgentId: s, selfAgentName: r, isLeader: false, teammates: {} } })), t(`[Reconnection] Initialized agent context from session for ${r} in team ${n}`);
}
import { stat as w } from "fs/promises";
import { homedir as E } from "os";
import { join as y, sep as F } from "path";
var I = 6048e5, KZr = 1e3;
function xds(e) {
  let n = [`This session was opened by an external deep link in ${R(e.cwd)}`];
  if (e.repo) {
    let r = e.lastFetch ? m_(e.lastFetch) : "never", o = !e.lastFetch || Date.now() - e.lastFetch.getTime() > I;
    n.push(`Resolved ${e.repo} from local clones · last fetched ${r}${o ? " — CLAUDE.md may be stale" : ""}`);
  }
  if (e.prefillLength) n.push(e.prefillLength > KZr ? `The prompt below (${Ri(e.prefillLength)} chars) was supplied by the link — scroll to review the entire prompt before pressing Enter.` : "The prompt below was supplied by the link — review carefully before pressing Enter.");
  return n.join(`
`);
}
async function Pds(e) {
  let n = await Z9(e);
  if (!n) return;
  let r = await a2(n), [o, i] = await Promise.all([A(y(n, "FETCH_HEAD")), r ? A(y(r, "FETCH_HEAD")) : Promise.resolve(void 0)]);
  if (o && i) return o > i ? o : i;
  return o ?? i;
}
async function A(e) {
  try {
    let { mtime: n } = await w(e);
    return n;
  } catch {
    return;
  }
}
function R(e) {
  let n = E();
  if (e === n) return "~";
  if (e.startsWith(n + F)) return "~" + e.slice(n.length);
  return e;
}
function N6t(e, { replacesProcess: n }) {
  return Mz() === void 0 && CE() && !(n && yTn()) && k("tengu_resume_open_live_bg", true) ? e.jobId : void 0;
}
async function $fr(e) {
  let n = await L(e);
  return f("resume_live_background_open", n.reason, { entrypoint: c(e.entrypoint) }), n;
}
async function L({ holder: e, entrypoint: n, prompt: r, storageV5: o }) {
  if (!process.stdin.isTTY || !process.stdout.isTTY) return { reason: "not_openable" };
  let i = N6t(e, { replacesProcess: true });
  if (i === void 0) return { reason: "not_openable" };
  try {
    await mve();
  } catch (s) {
    return { reason: "open_failed", detail: d(s), promptSent: false };
  }
  let u = typeof r === "string" && r.trim() !== "";
  if (u) {
    let s = r.trimStart();
    if (s.startsWith("!") || s.startsWith("/")) return { reason: "prompt_undelivered", detail: `a prompt starting with ${s.startsWith("!") ? "!" : "/"} would run as a command there`, delivery: "failed" };
    let [{ replyToJob: m }, { getJobDir: b, readJobState: h }] = await Promise.all([import("../git/apply-reply-patch.js"), import("../shell/adopt-roster-orphans.js")]);
    if ((await h(b(i), o))?.block !== void 0) return { reason: "prompt_undelivered", detail: "it is waiting on your answer to a question", delivery: "failed" };
    process.stdout.write(he.dim(`Sending your prompt to the background session (${i})…
`));
    let p = await m(i, r, void 0, void 0, void 0, o, { nextTurn: true });
    if (p) {
      let S = p.code === "ENOCONN" || p.code === "ETIMEOUT";
      return { reason: "prompt_undelivered", detail: S ? "its supervisor did not answer" : p.code === "ENOJOB" ? "it is no longer running" : p.err, delivery: p.queued === true ? "queued" : S ? "unconfirmed" : "failed" };
    }
  }
  try {
    return await zZr(i, n, o, { promptSent: u });
  } catch (s) {
    return { reason: "open_failed", detail: d(s), promptSent: u };
  }
}
async function zZr(e, n, r, { promptSent: o = false } = {}) {
  return g("resume_live_background_open", { entrypoint: c(n), prompt_sent: o }), s4({ args: ["attach", e], preSpawn: () => process.stdout.write(he.dim(o ? `Sent your prompt to the background session (${e}); opening it…
` : `Opening the background session (${e})…
`)) }, r);
}
import { isAbsolute as D, resolve as B, win32 as _ } from "path";
async function mxn(e, n, r = Db) {
  if (!(D(e) || _.isAbsolute(e)) || Yn(e) || A_(e) || A_(_.normalize(e)) || Sg(e) || Sg(B(e)) || ml(e)) return t(`[${n}] session reported a network-path cwd — not adopting`, { level: "warn" }), false;
  if (await xxe(e, wX(), r)) return t(`[${n}] session-reported cwd's local ancestry could not be verified as network-free — not adopting`, { level: "warn" }), false;
  return true;
}
export {
  $fr,
  Ads,
  Cds,
  GZr,
  KZr,
  N6t,
  Nfr,
  Pds,
  Rds,
  Tds,
  mxn,
  pxn,
  xds,
  zZr
};
