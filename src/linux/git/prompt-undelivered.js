// linux/git/prompt-undelivered.js — Claude Code 2.1.310（linux）模块 chunk-tk49qngc.js
import { d, Vt } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { zr, $M } from "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { gt } from "../fs/async-hooks.7959.js";
import { NP } from "../telemetry/bg-roster-parse-failed.js";
function Tcs(e, n, o) {
  return e !== void 0 && e.prompt !== null && o.stdin && o.stdout && (n.outputFormat === void 0 || n.outputFormat === "text") && n.sdkUrl === void 0 && n.jsonSchema === void 0 && !n.includePartialMessages && !n.replayUserMessages && n.maxTurns === void 0 && n.maxBudgetUsd === void 0 && n.resumeSessionAt === void 0 && n.resumeDropsTurn === void 0 && n.rewindFiles === void 0 ? { open: e.open, prompt: e.prompt } : void 0;
}
var C3t = "Can't open — this session is running in another terminal", c = 60, p = /["\u02BA\u02EE\u05F4\u201C-\u201F\u2033\u2036\u301D-\u301F\uFF02]/g;
function dxt(e) {
  let n = $M(zr(e)).replace(p, "'");
  return `"${gt(n, c)}"`;
}
function hwe({ title: e, holder: n, canFork: o, handoff: s }) {
  let { jobId: i } = n, r = e ? dxt(e) : "That session", a = i ? `Run \`claude attach ${i}\` to open it, or \`claude stop ${i}\` first to resume it here.` : "Run `claude agents` to find it and open it, or stop it there first to resume it here.", u = o ? " Add --fork-session to branch off a copy instead." : "";
  return `${r} is running in the background${i ? ` (${i})` : ""}.${Ipr(s)} ${a}${u}`;
}
async function Nee(e, n) {
  let o = (await B5e(e)).find((i) => i.kind !== "interactive");
  if (!o) return null;
  let s = o.jobId !== void 0 && NP.test(o.jobId) && await m(o.jobId, e, n) ? o.jobId : void 0;
  return { kind: o.kind, jobId: s };
}
async function m(e, n, o) {
  try {
    let { getJobDir: s, readJobState: i } = await import("../shell/adopt-roster-orphans.js"), r = await i(s(e), o), a = n.toLowerCase();
    return r !== null && (r.sessionId.toLowerCase() === a || r.resumeSessionId?.toLowerCase() === a);
  } catch (s) {
    if (Vt(s)) t(`[resume] job state unreadable: ${d(s)}`, { level: "warn" });
    else l(s);
    return false;
  }
}
async function B5e(e, n) {
  let o = n?.rejectUnreadable ? await (await import("../shared/admit-dropped-ids-by-destination.js")).listAllLiveSessions(void 0, { rejectUnreadable: true }) : await import("../shared/admit-dropped-ids-by-destination.js").then((r) => r.listAllLiveSessions()).catch(() => []), s = e.toLowerCase(), i = [];
  for (let r of o) {
    if (r.sessionId?.toLowerCase() !== s || r.pid === process.pid || !r.kind) continue;
    if (r.kind === "interactive" && r.parkedJobId !== void 0) continue;
    i.push({ kind: r.kind, jobId: r.jobId, pid: r.pid });
  }
  return i;
}
function Ipr(e) {
  switch (e?.reason) {
    case void 0:
    case "not_openable":
      return "";
    case "prompt_undelivered":
      return { queued: " Your prompt was saved and will be sent to it when you next restart it.", unconfirmed: ` Your prompt may not have reached it: ${e.detail}.`, failed: ` Your prompt was not sent to it: ${e.detail}.` }[e.delivery];
    case "open_failed":
      return e.promptSent ? ` Your prompt was sent to it, but it could not be opened here: ${e.detail}.` : ` It could not be opened here: ${e.detail}.`;
  }
}
export {
  B5e,
  C3t,
  Ipr,
  Nee,
  Tcs,
  dxt,
  hwe
};
