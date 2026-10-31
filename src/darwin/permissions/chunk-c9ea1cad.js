// darwin/permissions/chunk-c9ea1cad.js — Claude Code 2.1.310（darwin）模块 chunk-y3hq6skv.js
import { Ye } from "../telemetry/anthropic-workspace-id.js";
import { si } from "../shared/chunk-57ff8cc1.js";
import { i } from "../shared/environment.js";
import { Z } from "../artifacts/same-account.js";
import { wGo, att, E6e } from "../settings/gable-onyx-sluice.js";
import { At, mAe, dGr, lY, D2t, KQn, aH } from "../artifacts/artifact-share-status.js";
import { Wpt } from "../artifacts/template-instance.js";
var h = 1e3;
async function Zp(e, r, t, n) {
  if (!!r.toolUseId && mAe(At(e.slug), r.toolUseId)) return;
  let { signal: o } = r.abortController;
  if (o.aborted) throw new Ye("artifact permission check aborted");
  let l = E6e(), f = n?.readBack !== true, w = f && (!l || wGo(e)), b = l ? att(e, o) : void 0;
  if (w && k(e.slug) !== void 0) {
    if (await b, o.aborted) throw new Ye("artifact permission check aborted");
    if (S(e.slug, r.toolUseId)) return;
  }
  let d = n?.readBack === true ? `${e.slug}?readback` : e.slug, c = C(d), a = c ?? g(d, e, r, n), [s] = await Promise.all([c !== void 0 ? P(c, o) : a.read, b]);
  if (s === void 0) {
    if (o.aborted) throw new Ye("artifact permission check aborted");
    let u = C(d);
    if (u !== void 0 && u !== c) a = u, s = await P(u, o);
  }
  if (s === void 0) {
    if (f && S(e.slug, r.toolUseId)) return;
    a = g(d, e, r, n), s = await a.read;
  }
  D2t(e.slug, s, { consumedByCheck: true, toolUseId: r.toolUseId, issuedAt: a.issuedAt, probeId: a.id, debugLabel: t });
}
async function GLn(e, r, t) {
  let n = Date.now(), o = await Wpt(e, r.abortController.signal, r.credentials);
  D2t(e.slug, o, { consumedByCheck: false, toolUseId: r.toolUseId, issuedAt: n, debugLabel: t });
}
function A(e) {
  let r = Date.now(), t = Math.min(i.CLAUDE_CODE_ARTIFACT_SHARE_PROBE_REUSE_MS ?? h, h);
  return r >= e && r - e < t && !aH(e);
}
function k(e) {
  let r = At(e);
  return r?.lastProbeAt !== void 0 && r.lastProbeIssuedAt !== void 0 && A(r.lastProbeIssuedAt) ? r : void 0;
}
function m(e, r) {
  let { checkProbesInFlight: t } = Z().shareStatus;
  if (t.get(e) === r) t.delete(e);
}
function g(e, r, t, n) {
  let o = { id: Symbol("share probe"), issuedAt: Date.now(), read: Wpt(r, t.abortController.signal, t.credentials, n) };
  return o.read.then(() => m(e, o), () => m(e, o)), Z().shareStatus.checkProbesInFlight.set(e, o), o;
}
function S(e, r) {
  let t = k(e);
  if (t === void 0) return false;
  if (r !== void 0) lY(e, { ...t, ...dGr(t, r, true) });
  return KQn(t, false, true), true;
}
function C(e) {
  let r = Z().shareStatus.checkProbesInFlight.get(e);
  return r !== void 0 && A(r.issuedAt) ? r : void 0;
}
async function P(e, r) {
  try {
    return await si(e.read, r, () => new Ye("artifact permission check aborted"));
  } catch (t) {
    if (r.aborted) throw t;
    return;
  }
}
export {
  GLn,
  Zp
};
