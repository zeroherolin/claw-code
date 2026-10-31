// darwin/vendor/anthropic-sdk/anthropic-client-platform.js — Claude Code 2.1.310（darwin）模块 chunk-qdd98epm.js
import { Dt } from "../../fs/content-encoding.js";
import { Sie } from "../../shared/chunk-3b9c376b.js";
import { P5, w$e, Pns } from "../../context/not-admin-owned.js";
import { G } from "../../telemetry/anthropic-workspace-id.js";
import { Yn, $l } from "../../fs/node-modules.js";
import { t } from "../../fs/gitlab-runner-authentication-token.js";
import { i } from "../../shared/environment.js";
import { St } from "../../artifacts/cowritten-artifact-html.js";
import { $n } from "../../models/total-tokens-reminder.js";
import { gy } from "../../remote/claude-code-remote.js";
import { stat as I } from "fs/promises";
var p = 5e3, _ = Sie(), y = { teardown: () => {
}, pulseIfClientPresent: () => {
} };
async function A() {
  let o = i.CLAUDE_CLIENT_PRESENCE_FILE;
  if (!o) return false;
  if (Yn(o) && !$l(o)) return false;
  try {
    return await I(o), true;
  } catch (l) {
    if (!G(l)) t(`[presence] client-presence-marker stat failed: ${l}`);
    return false;
  }
}
function axn(o, l, H, b = () => Promise.resolve(false)) {
  if (St()) return y;
  let u = { sessionId: o, baseUrl: l, getAuthHeaders: H, onUnauthorized: b }, r = `[presence session=${o}]`, c = null, d = 0, m = Promise.resolve(), g = async (e, n) => {
    let s = await u.getAuthHeaders();
    if (s === null) return t(`${r} ${e} skipped (no credential to send under)`), null;
    if (!$n()) return t(`${r} ${e} skipped (non-first-party provider)`), null;
    let E = `${u.baseUrl}/v1/code/sessions/${u.sessionId}/client/presence`;
    return t(`${r} ${e} → ${E}`), Dt.post(E, { client_id: _, ...n }, { headers: { ...s, "anthropic-version": "2023-06-01", "anthropic-client-platform": gy() }, timeout: p, validateStatus: () => true }).then((a) => {
      if (a.status >= 400) t(`${r} ${e} got ${a.status}`);
      return { status: a.status, sentHeaders: s };
    }, (a) => (t(`${r} ${e} failed: ${Dt.isAxiosError(a) ? a.code ?? "request_error" : "error"}`), null));
  }, P = async (e) => {
    let n = e.clear === true ? "clear" : "pulse";
    if (!$n()) {
      t(`${r} ${n} skipped (non-first-party provider)`);
      return;
    }
    try {
      let s = await g(n, e);
      if (s?.status === 401 && await u.onUnauthorized(s.sentHeaders)) t(`${r} ${n} retrying after credential refresh`), await g(n, e);
    } catch (s) {
      t(`${r} ${n} skipped (credential unavailable: ${s instanceof Error ? s.name : "error"})`);
    }
  }, v = () => {
    let e = Date.now();
    d = e, c ??= new Date(e).toISOString();
    let n = P({ connected_at: c });
    return m = m.then(() => n), n;
  }, h = () => {
    if (w$e() === false) {
      t(`${r} pulse skipped (terminal blurred)`);
      return;
    }
    if (Date.now() - d < p) return;
    v();
  }, w = P5(h), C = Pns(() => {
    let e = w$e();
    if (t(`${r} terminal focus → ${e === void 0 ? "unknown" : e ? "focused" : "blurred"}`), e === true) h();
  });
  t(`${r} wired`);
  let f = false;
  return { teardown() {
    if (f) return;
    if (f = true, w?.(), w = null, C?.(), C = null, c !== null) m.then(() => P({ clear: true }));
    c = null;
  }, pulseIfClientPresent() {
    if (f || Date.now() - d < p) return;
    A().then((e) => {
      if (e && !f && Date.now() - d >= p) t(`${r} client-presence-marker active → pulse`), v();
    });
  } };
}
export {
  axn
};
