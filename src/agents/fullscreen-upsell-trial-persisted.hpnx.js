// agents/fullscreen-upsell-trial-persisted.hpnx.js — Claude Code 2.1.310 模块 chunk-hpnxhag9.js
import { xX, HCn } from "../context/not-admin-owned.ersa.js";
import { c } from "./third-party.ydpb.js";
import { Qe, d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { Yn, A_, gl, bg } from "../fs/node-modules.gp4v.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { g, p } from "../telemetry/chunk-wn8xtaqg.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { Hxe, DS, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { jG, k, Re, ue } from "../settings/global-config-and-gates.27xj.js";
import { hz, aX } from "../git/utf-8.vh7e.js";
import { Ri, h_ } from "../fs/async-hooks.2k4e.js";
import { mt, wa } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { he } from "../terminal/xterm-ghostty.qrwz.js";
import { yM } from "./in-process-teammate.5te1.js";
import { lqn, F$t, $$t, Zl } from "../telemetry/focus-events.e5dw.js";
import { wGe, Hb } from "./swarm-team-file-update.vdzy.js";
import { Rv } from "../telemetry/fleet-past-sessions.vsk9.js";
import { iu } from "../shared/chunk-wsyj9hj6.js";
import { xr } from "../shared/chunk-p82eferg.js";
import { SEe, gq } from "../shell/prompt-input-exit.dr3v.js";
import { P, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
function Axn() {
  let e = xr(), n = iu();
  P(() => {
    return;
  }, [e, n]);
}
var ncs = { CLAUDE_CODE_TUI_TRIAL: "fullscreen" };
function v(e, n) {
  Re((r) => (r.fullscreenUpsellSeenCount ?? 0) >= e ? r : { ...r, fullscreenUpsellSeenCount: e }, n);
}
function Qpr(e) {
  v($$t, e);
}
function geo(e) {
  let n = lqn();
  if (n.upsellImpression !== void 0) return n.upsellImpression;
  let r = Math.min((ue().fullscreenUpsellSeenCount ?? 0) + 1, $$t);
  return n.upsellImpression = r, v(r, e), r;
}
async function rcs(e) {
  let n = lqn();
  if (n.persisted || F$t() !== "fullscreen") return false;
  if (mt().tui !== void 0) return t("fullscreen trial: settings.tui was set explicitly during the trial — not persisting"), false;
  if (!Zl()) return t("fullscreen trial: renderer is not fullscreen this session (auto-off) — not persisting"), false;
  let r = false, { error: o } = await wa("userSettings", (i) => (r = i?.tui !== void 0, r ? null : { tui: "fullscreen" }), void 0, e);
  if (o) return l(o), p("tui_fullscreen_upsell_trial", "settings_write_failed"), false;
  if (r) return t("fullscreen trial: settings.tui was set explicitly during the trial (seen inside the queued write) — not persisting"), false;
  return Qpr(e), n.persisted = true, g("tui_fullscreen_upsell_trial"), a("tengu_fullscreen_upsell_trial_persisted", { session_age_ms: Math.round(process.uptime() * 1e3) }), t("fullscreen trial: healthy — persisted settings.tui=fullscreen"), true;
}
async function ocs(e) {
  let n = yM();
  if (!n?.teamName || !n?.agentName) {
    t("[Reconnection] computeInitialTeamContext: No teammate context set (not a teammate)");
    return;
  }
  let { teamName: r, agentId: o, agentName: i } = n, u = await Hb(r, e);
  if (!u) {
    l(Qe(Error(`[computeInitialTeamContext] Could not read team file for ${r}`), "[computeInitialTeamContext] Could not read team file"));
    return;
  }
  let s = wGe(r), m = !o;
  return t(`[Reconnection] Computed initial team context for ${m ? "leader" : `teammate ${i}`} in team ${r}`), { teamName: r, teamFilePath: s, leadAgentId: u.leadAgentId, selfAgentId: o, selfAgentName: i, isLeader: m, teammates: {} };
}
async function scs(e, n, r, o) {
  let i = await Hb(n, o);
  if (!i) {
    t(`[initializeTeammateContextFromSession] Could not read team file for ${n} (agent: ${r}) — team may have been disbanded`, { level: "error" });
    return;
  }
  let u = i.members.find((b) => b.name === r);
  if (!u) t(`[Reconnection] Member ${r} not found in team ${n} - may have been removed`);
  let s = u?.agentId, m = wGe(n);
  e((b) => ({ ...b, teamContext: { teamName: n, teamFilePath: m, leadAgentId: i.leadAgentId, selfAgentId: s, selfAgentName: r, isLeader: false, teammates: {} } })), t(`[Reconnection] Initialized agent context from session for ${r} in team ${n}`);
}
import { stat as w } from "fs/promises";
import { homedir as E } from "os";
import { join as y, sep as F } from "path";
var I = 6048e5, yeo = 1e3;
function ics(e) {
  let n = [`This session was opened by an external deep link in ${R(e.cwd)}`];
  if (e.repo) {
    let r = e.lastFetch ? h_(e.lastFetch) : "never", o = !e.lastFetch || Date.now() - e.lastFetch.getTime() > I;
    n.push(`Resolved ${e.repo} from local clones · last fetched ${r}${o ? " — CLAUDE.md may be stale" : ""}`);
  }
  if (e.prefillLength) n.push(e.prefillLength > yeo ? `The prompt below (${Ri(e.prefillLength)} chars) was supplied by the link — scroll to review the entire prompt before pressing Enter.` : "The prompt below was supplied by the link — review carefully before pressing Enter.");
  return n.join(`
`);
}
async function acs(e) {
  let n = await aX(e);
  if (!n) return;
  let r = await hz(n), [o, i] = await Promise.all([A(y(n, "FETCH_HEAD")), r ? A(y(r, "FETCH_HEAD")) : Promise.resolve(void 0)]);
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
function Y5t(e, { replacesProcess: n }) {
  return jG() === void 0 && Rv() && !(n && HCn()) && k("tengu_resume_open_live_bg", true) ? e.jobId : void 0;
}
async function Zpr(e) {
  let n = await L(e);
  return p("resume_live_background_open", n.reason, { entrypoint: c(e.entrypoint) }), n;
}
async function L({ holder: e, entrypoint: n, prompt: r, storageV5: o }) {
  if (!process.stdin.isTTY || !process.stdout.isTTY) return { reason: "not_openable" };
  let i = Y5t(e, { replacesProcess: true });
  if (i === void 0) return { reason: "not_openable" };
  try {
    await SEe();
  } catch (s) {
    return { reason: "open_failed", detail: d(s), promptSent: false };
  }
  let u = typeof r === "string" && r.trim() !== "";
  if (u) {
    let s = r.trimStart();
    if (s.startsWith("!") || s.startsWith("/")) return { reason: "prompt_undelivered", detail: `a prompt starting with ${s.startsWith("!") ? "!" : "/"} would run as a command there`, delivery: "failed" };
    let [{ replyToJob: m }, { getJobDir: b, readJobState: h }] = await Promise.all([import("../git/apply-reply-patch.dbqa.js"), import("../shell/adopt-roster-orphans.d8df.js")]);
    if ((await h(b(i), o))?.block !== void 0) return { reason: "prompt_undelivered", detail: "it is waiting on your answer to a question", delivery: "failed" };
    process.stdout.write(he.dim(`Sending your prompt to the background session (${i})…
`));
    let f = await m(i, r, void 0, void 0, void 0, o, { nextTurn: true });
    if (f) {
      let S = f.code === "ENOCONN" || f.code === "ETIMEOUT";
      return { reason: "prompt_undelivered", detail: S ? "its supervisor did not answer" : f.code === "ENOJOB" ? "it is no longer running" : f.err, delivery: f.queued === true ? "queued" : S ? "unconfirmed" : "failed" };
    }
  }
  try {
    return await heo(i, n, o, { promptSent: u });
  } catch (s) {
    return { reason: "open_failed", detail: d(s), promptSent: u };
  }
}
async function heo(e, n, r, { promptSent: o = false } = {}) {
  return g("resume_live_background_open", { entrypoint: c(n), prompt_sent: o }), gq({ args: ["attach", e], preSpawn: () => process.stdout.write(he.dim(o ? `Sent your prompt to the background session (${e}); opening it…
` : `Opening the background session (${e})…
`)) }, r);
}
import { isAbsolute as D, resolve as B, win32 as _ } from "path";
async function Rxn(e, n, r = DS) {
  if (!(D(e) || _.isAbsolute(e)) || Yn(e) || A_(e) || A_(_.normalize(e)) || bg(e) || bg(B(e)) || gl(e)) return t(`[${n}] session reported a network-path cwd — not adopting`, { level: "warn" }), false;
  if (await Hxe(e, xX(), r)) return t(`[${n}] session-reported cwd's local ancestry could not be verified as network-free — not adopting`, { level: "warn" }), false;
  return true;
}
export {
  Axn,
  Qpr,
  Rxn,
  Y5t,
  Zpr,
  acs,
  geo,
  heo,
  ics,
  ncs,
  ocs,
  rcs,
  scs,
  yeo
};
