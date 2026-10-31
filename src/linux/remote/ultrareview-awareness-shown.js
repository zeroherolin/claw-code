// linux/remote/ultrareview-awareness-shown.js — Claude Code 2.1.310（linux）模块 chunk-g289c0fr.js
import { jt, k, Re, ue } from "../settings/global-config-and-gates.js";
import { U } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { i } from "../shared/environment.js";
import { te, t } from "../fs/gitlab-runner-authentication-token.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, f } from "../telemetry/chunk-9d6962d2.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { on } from "../auth/env-quad.js";
import { iut, ute, zW } from "../permissions/workflow-size-prompting-ambient.js";
import { t$ } from "../context/team-memory-sync.js";
import { ZY } from "../git/artifact-capabilities.js";
import { bn, Go, Tt } from "../vendor/zod/invalid-return-type.js";
var s = p(() => Tt({ reviews_used: bn(), reviews_limit: bn(), reviews_remaining: bn(), is_overage: Go() }));
async function _(e) {
  let r = i.CLAUDE_CODE_ULTRAREVIEW_QUOTA_FIXTURE;
  if (r) try {
    let n = s().safeParse(te(r));
    return n.success ? n.data : null;
  } catch (n) {
    return t(`fetchUltrareviewQuota fixture parse failed: ${n}`), null;
  }
  try {
    let n = await jt.get("/v1/ultrareview/quota", { auth: "teleport-org", timeout: 3e3, credentials: e });
    if (!n.ok) return f("api_ultrareview_quota", "request_failed"), null;
    let o = s().safeParse(n.data);
    if (!o.success) return t(`fetchUltrareviewQuota schema mismatch: ${o.error.message}`), f("api_ultrareview_quota", "schema_mismatch"), null;
    return g("api_ultrareview_quota"), o.data;
  } catch (n) {
    return t(`fetchUltrareviewQuota failed: ${n}`), f("api_ultrareview_quota", "request_failed"), null;
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
async function Qpo(e) {
  let r = m();
  r.fetch ??= _(e), r.quota = await r.fetch;
}
function rNn(e) {
  let r = m();
  if (r.quota === void 0) return Qpo(e), null;
  return r.quota;
}
var S = "tengu_ultrareview_awareness";
function R() {
  return k(S, null) ?? {};
}
function vvr(e) {
  if (!t$()) return false;
  if (!on("allow_remote_sessions")) return false;
  return R()[e] === true;
}
function Zpo() {
  return ue().hasRunUltrareview === true;
}
function YEs(e) {
  Re((r) => r.hasRunUltrareview ? r : { ...r, hasRunUltrareview: true }, e);
}
function C(e) {
  a("tengu_ultrareview_awareness_shown", { surface: c(e) });
}
function emo(e) {
  return `${e} free ${e === 1 ? "review" : "reviews"} left`;
}
function XEs(e) {
  if (e !== "ultrareview" && e !== ZY) return "";
  if (!vvr("slash_menu")) return "";
  let r = rNn();
  if (r === null || r.reviews_remaining <= 0) return "";
  let n = r.reviews_remaining;
  return e === "ultrareview" ? `${n} free left · ` : `${n} free /ultrareview · `;
}
var A = "ultrareview-prose-pointer", E = "ultrareview-post-commit", b = 5;
function d(e, r, n, o, w) {
  if (!vvr(e)) return null;
  if (Zpo()) return null;
  if (ute(r) >= b) return null;
  if (zW(r) === 0) return null;
  iut(r, o), C(e);
  let u = rNn(w), v = u !== null && u.reviews_remaining > 0 ? ` — ${emo(u.reviews_remaining)}` : "";
  return n(v);
}
function JEs(e, r) {
  return d("prose_pointer", A, (n) => `Tip: For a deeper cloud-based review, try /ultrareview next time${n}.`, e, r);
}
function QEs(e) {
  return d("post_commit", E, (r) => `Tip: Run /ultrareview before you push to catch bugs with a cloud-based multi-agent review${r}.`, e, void 0);
}
export {
  JEs,
  QEs,
  Qpo,
  XEs,
  YEs,
  Zpo,
  emo,
  rNn,
  vvr
};
