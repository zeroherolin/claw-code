// darwin/shared/non-https.js — Claude Code 2.1.310（darwin）模块 chunk-hstxqaxs.js
import { i } from "./environment.js";
import { $n } from "../models/total-tokens-reminder.js";
function Z_r(s) {
  if (!s.startsWith("https://")) return { ok: false, cause: "non_https" };
  let e;
  try {
    e = new URL(s);
  } catch {
    return { ok: false, cause: "unparseable" };
  }
  if (e.protocol !== "https:") return { ok: false, cause: "non_https" };
  if (e.username !== "" || e.password !== "" || e.search !== "" || e.hash !== "" || e.pathname !== "" && e.pathname !== "/") return { ok: false, cause: "origin_extras" };
  return { ok: true, origin: e.origin };
}
var t = /^cse_[A-Za-z0-9_]+$/;
function r() {
  if (!i.CCR_SESSION_PROFILE) return { ok: false, cause: null };
  let s = i.SESSION_INGRESS_URL;
  if (!s) return { ok: false, cause: "missing_ingress_url" };
  let e = Z_r(s);
  if (!e.ok) return { ok: false, cause: `invalid_ingress_origin:${e.cause}` };
  let n = i.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (!n) return { ok: false, cause: "missing_session_id" };
  if (!n.startsWith("cse_")) return { ok: false, cause: "non_cse_session_id" };
  if (!t.test(n)) return { ok: false, cause: "malformed_session_id" };
  if (!$n()) return { ok: false, cause: "non_first_party" };
  return { ok: true, config: { ingressOrigin: e.origin, remoteSessionId: n } };
}
function Sae() {
  let s = r();
  return s.ok ? s.config : null;
}
function Hlo() {
  let s = r();
  return s.ok ? null : s.cause;
}
function Dlo() {
  return i.CCR_SESSION_PROFILE;
}
export {
  Dlo,
  Hlo,
  Sae,
  Z_r
};
