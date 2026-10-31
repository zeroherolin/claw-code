// linux/telemetry/oauth-refresh-token-cleared-on-disk.js — Claude Code 2.1.310（linux）模块 chunk-9szrjwf3.js
import { c } from "../agents/third-party.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { dYo, Int, PKt, I4r, Dz, IKt, pR, kn, k } from "../settings/global-config-and-gates.js";
import { Z4t, ZZo } from "./chunk-9097a12b.js";
import { jGt } from "./remote-tool-restart-adoption-unroutable.js";
import { Han } from "../shared/chunk-ceeef64e.js";
var h = "tengu_log_datadog_events", d = "tengu_quizzical_giraffe", p = /* @__PURE__ */ new Set(["tengu_started", "tengu_oauth_success", "tengu_oauth_token_refresh_lock_acquiring", "tengu_oauth_token_refresh_starting", "tengu_oauth_token_refresh_success", "tengu_oauth_token_refresh_failure", "tengu_oauth_token_refresh_race_recovered", "tengu_oauth_refresh_token_cleared_on_disk", "tengu_api_error", "tengu_feature_bad", "tengu_feature_sad"]);
function m() {
  if (PKt("datadog")) return false;
  try {
    return k(h, false);
  } catch {
    return false;
  }
}
function g(e, n) {
  if (!p.has(e)) return n;
  try {
    let { value: o, source: a } = kn(d, false), r = a === "fallback" || a === "disabled";
    return { ...n, [d]: c(r ? "unset" : o === true ? "on" : "off") };
  } catch {
    return n;
  }
}
function _(e) {
  return e || Dz();
}
function E(e, n) {
}
function f(e, n, o, a) {
  let r = a();
  if (!_(r)) return;
  let s = g(e, Han(n)), i = o !== null ? { ...s, sample_rate: o } : s;
  if (r) jGt(e, Z4t(i));
  IKt(e, i), E(e, i);
}
var l = false;
function v(e, n, o) {
  if (l) {
    t(`logEvent reentered while collecting metadata — dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`, { level: "error" });
    return;
  }
  l = true;
  try {
    let a = I4r(e);
    if (a === 0) return;
    if (dYo()) {
      f(e, n, a, o);
      return;
    }
    let r = () => {
      l = true;
      try {
        f(e, n, a, o);
      } finally {
        l = false;
      }
    };
    Int().then(r, r);
  } finally {
    l = false;
  }
}
async function y(e, n, o) {
  let a = I4r(e);
  if (a === 0) return;
  if (!dYo()) await Int();
  let r = o();
  if (!_(r)) return;
  let s = g(e, Han(n)), i = a !== null ? { ...s, sample_rate: a } : s, u = [];
  if (r) u.push(jGt(e, Z4t(i)));
  u.push(pR(e, i)), E(e, i), await Promise.all(u);
}
function Zee() {
  ZZo(S(m));
}
function S(e) {
  return { logEvent: (n, o) => v(n, o, e), logEventAsync: (n, o) => y(n, o, e) };
}
export {
  Zee
};
