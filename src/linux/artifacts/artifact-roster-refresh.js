// linux/artifacts/artifact-roster-refresh.js — Claude Code 2.1.310（linux）模块 chunk-7dave9w0.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { X, Nt } from "../shared/chunk-57ff8cc1.js";
import { g, f } from "../telemetry/chunk-9d6962d2.js";
import { rC, sRe } from "../settings/global-config-and-gates.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Z } from "./same-account.js";
import { Mtn, OSo, _xs, DAr, CEe, MSo, qae } from "./cobalt-plinth-samphire.js";
var Rhi = 1500, xhi = 864e5, Phi = 144e5;
function HAi() {
  return Mtn() !== void 0;
}
function iUn() {
  let r = DAr();
  if (r !== void 0) return { capabilities: r.roster.capabilities, source: r.source };
  return { capabilities: void 0, source: Mtn() === void 0 ? "cold_no_identity" : "cold" };
}
function a_o() {
  return iUn().capabilities === void 0;
}
function LAi(r = Rhi) {
  let e = Z();
  if (e.frozenAssets !== void 0 || e.rosterHeard === void 0 || e.rosterWaitOver || !a_o()) return;
  if (e.rosterWait !== void 0) return e.rosterWait;
  let o = Date.now(), n = e.accountEpoch;
  return e.rosterWait = Nt(e.rosterHeard, r, "artifact-roster").then((a) => {
    g("artifact_roster_wait", { wait_ms: Date.now() - o, heard: a, cold: a_o() });
  }, () => {
    f("artifact_roster_wait", "timeout", { wait_ms: Date.now() - o, cold: a_o() });
  }).catch((a) => {
    t(`Artifact roster wait: recording its outcome failed: ${d(a)}`);
  }).finally(() => {
    if (e.accountEpoch === n) e.rosterWaitOver = true;
  }), e.rosterWait;
}
async function NAi(r) {
  let e = Date.now() + r;
  for (; ; ) {
    let o = Z(), n = o.rosterHeard;
    if (o.frozenAssets !== void 0 || n === void 0 || o.rosterWaitOver) return true;
    let a = new AbortController(), i = await Promise.race([n.then(() => true, () => true), X(Math.max(0, e - Date.now()), a.signal, { unref: true }).then(() => false)]);
    if (a.abort(), !i) return false;
    if (Z().rosterHeard === n) return true;
  }
}
function $Ai(r = Date.now()) {
  let e = OSo();
  if (e === void 0) return false;
  let o = r - e.fetchedAt;
  return o >= 0 && o < xhi;
}
function FAi(r = Date.now()) {
  let e = _xs();
  if (e === void 0) return false;
  let o = r - e.deniedAt;
  return o >= 0 && o < Phi && sRe() === e.tokenExpiresAt && !rC(e.tokenExpiresAt, r);
}
function l_o(r) {
  let e = Z(), o;
  return e.rosterHeard = new Promise((n) => {
    o = n;
  }), R(e, r, o);
}
async function R(r, e, o) {
  try {
    let n = r.accountEpoch, a = sRe(), i = Date.now(), s = await qae({ ...e, recoverOAuth401: true }), l = Date.now() - i;
    if ("err" in s) {
      f("artifact_roster_refresh", s.cause, { duration_ms: l, ...s.status !== void 0 && { status: s.status } }), t(`Artifact roster refresh failed (${s.cause}): ${s.err}`);
      let c = sRe(), { cause: A, status: u } = s;
      if (o(false), A === "http_4xx" && (u === 403 || u === 401 && c !== a) && c !== null && Z() === r) await MSo(r, n, e.storageV5, (h) => ({ artifactRosterDenied: { ...h, status: u, deniedAt: Date.now(), tokenExpiresAt: c } }));
      return false;
    }
    g("artifact_roster_refresh", { duration_ms: l, schema_frozen: r.frozenAssets !== void 0 });
    let { adopted: p, persisted: m } = CEe({ session: r, epoch: n, roster: s, storageV5: e.storageV5 });
    if (p) o(true), await m;
    return true;
  } catch (n) {
    return t(`Artifact roster refresh: ${d(n)}`), false;
  } finally {
    o(false);
  }
}
export {
  $Ai,
  FAi,
  HAi,
  LAi,
  NAi,
  Phi,
  Rhi,
  a_o,
  iUn,
  l_o,
  xhi
};
