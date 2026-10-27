// shared/chunk-0eb5g9z4.js — Claude Code 2.1.310 模块 chunk-0eb5g9z4.js
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { si } from "./chunk-3kevgx4j.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { cze } from "../remote/bridge-project-files-write.wp8g.js";
import { pa } from "../settings/global-config-and-gates.27xj.js";
import { St } from "../artifacts/cowritten-artifact-html.thm2.js";
import { $n } from "../models/total-tokens-reminder.psq3.js";
import { $yt } from "../commands/command-web-setup.d6eb.js";
import { I2e } from "../context/team-memory-sync.0s3j.js";
function Emo(e) {
  return `To fix: ${e.webSetupHint ? `${e.webSetupHint}, or connect` : "connect"} an account at ${$yt()} — ${e.rerun} (allow a minute after connecting).`;
}
function mNn(e) {
  return `${e.subject} with the GitHub account connected to your Claude account, and none is connected (or the connection expired). ${Emo(e)}`;
}
function gNn(e) {
  let r = e.apostrophe ?? "'", o = `install the app at ${cze}`, n = e.webSetupHint, i = n && e.leadWithWebSetup ? `${n}, or ${o}` : `${o}${n ? `, or ${n}` : ""}`;
  return `Your connected GitHub account can${r}t see ${e.owner}/${e.name} — usually the Claude GitHub app isn${r}t installed on ${e.owner} or wasn${r}t granted this repo (web-connected accounts need it for private repos), or a different GitHub account is connected. To fix: ${i} — ${e.rerun}.`;
}
var b = 5e3, l = 2147483647;
async function hNn(e, r, o = b) {
  let n = { verdict: "inconclusive", httpStatus: null };
  if (St() || !$n()) return n;
  let i = Number.isSafeInteger(o) && o > 0 ? Math.min(o, l) : 0;
  if (i === 0) return n;
  let c = AbortSignal.timeout(i), a = (async () => {
    if (await pa(), c.aborted) return n;
    let { linkedAccountAccess: s, httpStatus: p } = await I2e(e, r, c, { resyncUndetermined: false });
    return { verdict: s, httpStatus: p };
  })(), u = await si(a, c, () => Error("budget expired")).catch((s) => (t(`linked GitHub account access probe gave up, treating as inconclusive: ${d(s)}`), n));
  return t(`linked GitHub account access to ${e}/${r}: ${u.verdict} (HTTP ${u.httpStatus ?? "none"})`), u;
}
export {
  Emo,
  gNn,
  hNn,
  mNn
};
