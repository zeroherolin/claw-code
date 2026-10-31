// darwin/telemetry/oauth-refresh-token-cleared-on-disk.js — Claude Code 2.1.310（darwin）模块 chunk-3mw762q8.js
import { c } from "../agents/third-party.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { F3o, Fnt, j6t, Qqr, WG, W6t, hR, kn, k } from "../settings/global-config-and-gates.js";
import { f3t, Hes } from "./chunk-9097a12b.js";
import { eGt } from "./remote-tool-restart-adoption-unroutable.js";
import { rcn } from "../shared/chunk-ceeef64e.js";
var h = "tengu_log_datadog_events", d = "tengu_quizzical_giraffe", p = /* @__PURE__ */ new Set(["tengu_started", "tengu_oauth_success", "tengu_oauth_token_refresh_lock_acquiring", "tengu_oauth_token_refresh_starting", "tengu_oauth_token_refresh_success", "tengu_oauth_token_refresh_failure", "tengu_oauth_token_refresh_race_recovered", "tengu_oauth_refresh_token_cleared_on_disk", "tengu_api_error", "tengu_feature_bad", "tengu_feature_sad"]);
function m() {
  if (j6t("datadog")) return false;
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
  return e || WG();
}
function E(e, n) {
}
function f(e, n, o, a) {
  let r = a();
  if (!_(r)) return;
  let s = g(e, rcn(n)), i = o !== null ? { ...s, sample_rate: o } : s;
  if (r) eGt(e, f3t(i));
  W6t(e, i), E(e, i);
}
var l = false;
function v(e, n, o) {
  if (l) {
    t(`logEvent reentered while collecting metadata — dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`, { level: "error" });
    return;
  }
  l = true;
  try {
    let a = Qqr(e);
    if (a === 0) return;
    if (F3o()) {
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
    Fnt().then(r, r);
  } finally {
    l = false;
  }
}
async function y(e, n, o) {
  let a = Qqr(e);
  if (a === 0) return;
  if (!F3o()) await Fnt();
  let r = o();
  if (!_(r)) return;
  let s = g(e, rcn(n)), i = a !== null ? { ...s, sample_rate: a } : s, u = [];
  if (r) u.push(eGt(e, f3t(i)));
  u.push(hR(e, i)), E(e, i), await Promise.all(u);
}
function mq() {
  Hes(S(m));
}
function S(e) {
  return { logEvent: (n, o) => v(n, o, e), logEventAsync: (n, o) => y(n, o, e) };
}
export {
  mq
};
