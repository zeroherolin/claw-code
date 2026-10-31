// linux/shared/chunk-a7d1f55a.js — Claude Code 2.1.310（linux）模块 chunk-zhn9b04s.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { si } from "./chunk-57ff8cc1.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l2e } from "../remote/bridge-project-files-write.js";
import { fa } from "../settings/global-config-and-gates.js";
import { _t } from "../artifacts/cowritten-artifact-html.js";
import { Fn } from "../models/total-tokens-reminder.js";
import { Oyt } from "../commands/command-web-setup.js";
import { kGe } from "../context/team-memory-sync.js";
function Jpo(e) {
  return `To fix: ${e.webSetupHint ? `${e.webSetupHint}, or connect` : "connect"} an account at ${Oyt()} — ${e.rerun} (allow a minute after connecting).`;
}
function eNn(e) {
  return `${e.subject} with the GitHub account connected to your Claude account, and none is connected (or the connection expired). ${Jpo(e)}`;
}
function tNn(e) {
  let r = e.apostrophe ?? "'", o = `install the app at ${l2e}`, n = e.webSetupHint, i = n && e.leadWithWebSetup ? `${n}, or ${o}` : `${o}${n ? `, or ${n}` : ""}`;
  return `Your connected GitHub account can${r}t see ${e.owner}/${e.name} — usually the Claude GitHub app isn${r}t installed on ${e.owner} or wasn${r}t granted this repo (web-connected accounts need it for private repos), or a different GitHub account is connected. To fix: ${i} — ${e.rerun}.`;
}
var b = 5e3, l = 2147483647;
async function nNn(e, r, o = b) {
  let n = { verdict: "inconclusive", httpStatus: null };
  if (_t() || !Fn()) return n;
  let i = Number.isSafeInteger(o) && o > 0 ? Math.min(o, l) : 0;
  if (i === 0) return n;
  let c = AbortSignal.timeout(i), a = (async () => {
    if (await fa(), c.aborted) return n;
    let { linkedAccountAccess: s, httpStatus: p } = await kGe(e, r, c, { resyncUndetermined: false });
    return { verdict: s, httpStatus: p };
  })(), u = await si(a, c, () => Error("budget expired")).catch((s) => (t(`linked GitHub account access probe gave up, treating as inconclusive: ${d(s)}`), n));
  return t(`linked GitHub account access to ${e}/${r}: ${u.verdict} (HTTP ${u.httpStatus ?? "none"})`), u;
}
export {
  Jpo,
  eNn,
  nNn,
  tNn
};
