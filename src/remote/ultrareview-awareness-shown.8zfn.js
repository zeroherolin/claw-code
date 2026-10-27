// remote/ultrareview-awareness-shown.8zfn.js — Claude Code 2.1.310 模块 chunk-8zfnq53t.js
import { Wt, k, Re, ue } from "../settings/global-config-and-gates.27xj.js";
import { U } from "../context/not-admin-owned.ersa.js";
import { c } from "../agents/third-party.ydpb.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { i } from "../shared/environment.9a41.js";
import { ee, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { g, p } from "../telemetry/chunk-wn8xtaqg.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { on } from "../auth/env-quad.nmae.js";
import { dut, _te, e2 } from "../permissions/workflow-size-prompting-ambient.c6s8.js";
import { oF } from "../context/team-memory-sync.0s3j.js";
import { c4 } from "../git/artifact-capabilities.87hz.js";
import { Sn, zo, Ct } from "../vendor/zod/invalid-return-type.ezsz.js";
var s = f(() => Ct({ reviews_used: Sn(), reviews_limit: Sn(), reviews_remaining: Sn(), is_overage: zo() }));
async function _(e) {
  let r = i.CLAUDE_CODE_ULTRAREVIEW_QUOTA_FIXTURE;
  if (r) try {
    let n = s().safeParse(ee(r));
    return n.success ? n.data : null;
  } catch (n) {
    return t(`fetchUltrareviewQuota fixture parse failed: ${n}`), null;
  }
  try {
    let n = await Wt.get("/v1/ultrareview/quota", { auth: "teleport-org", timeout: 3e3, credentials: e });
    if (!n.ok) return p("api_ultrareview_quota", "request_failed"), null;
    let o = s().safeParse(n.data);
    if (!o.success) return t(`fetchUltrareviewQuota schema mismatch: ${o.error.message}`), p("api_ultrareview_quota", "schema_mismatch"), null;
    return g("api_ultrareview_quota"), o.data;
  } catch (n) {
    return t(`fetchUltrareviewQuota failed: ${n}`), p("api_ultrareview_quota", "request_failed"), null;
  }
}
class l {
  quota = void 0;
  fetch = void 0;
}
var h = new W(() => new l());
function m() {
  return h.of(U().host);
}
async function vmo(e) {
  let r = m();
  r.fetch ??= _(e), r.quota = await r.fetch;
}
function yNn(e) {
  let r = m();
  if (r.quota === void 0) return vmo(e), null;
  return r.quota;
}
var S = "tengu_ultrareview_awareness";
function R() {
  return k(S, null) ?? {};
}
function FEr(e) {
  if (!oF()) return false;
  if (!on("allow_remote_sessions")) return false;
  return R()[e] === true;
}
function kmo() {
  return ue().hasRunUltrareview === true;
}
function Aks(e) {
  Re((r) => r.hasRunUltrareview ? r : { ...r, hasRunUltrareview: true }, e);
}
function C(e) {
  a("tengu_ultrareview_awareness_shown", { surface: c(e) });
}
function Cmo(e) {
  return `${e} free ${e === 1 ? "review" : "reviews"} left`;
}
function Rks(e) {
  if (e !== "ultrareview" && e !== c4) return "";
  if (!FEr("slash_menu")) return "";
  let r = yNn();
  if (r === null || r.reviews_remaining <= 0) return "";
  let n = r.reviews_remaining;
  return e === "ultrareview" ? `${n} free left · ` : `${n} free /ultrareview · `;
}
var A = "ultrareview-prose-pointer", E = "ultrareview-post-commit", b = 5;
function d(e, r, n, o, w) {
  if (!FEr(e)) return null;
  if (kmo()) return null;
  if (_te(r) >= b) return null;
  if (e2(r) === 0) return null;
  dut(r, o), C(e);
  let u = yNn(w), v = u !== null && u.reviews_remaining > 0 ? ` — ${Cmo(u.reviews_remaining)}` : "";
  return n(v);
}
function xks(e, r) {
  return d("prose_pointer", A, (n) => `Tip: For a deeper cloud-based review, try /ultrareview next time${n}.`, e, r);
}
function Pks(e) {
  return d("post_commit", E, (r) => `Tip: Run /ultrareview before you push to catch bugs with a cloud-based multi-agent review${r}.`, e, void 0);
}
export {
  Aks,
  Cmo,
  FEr,
  Pks,
  Rks,
  kmo,
  vmo,
  xks,
  yNn
};
