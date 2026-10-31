// darwin/agents/lantern-wick-release-by-model.js — Claude Code 2.1.310（darwin）模块 chunk-gf0p527r.js
import { V, ye } from "../context/not-admin-owned.js";
import { g } from "../telemetry/chunk-9d6962d2.js";
import { Xe, k } from "../settings/global-config-and-gates.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { EUs, vUs, kUs, CUs, WIo, TUs, lKn, AUs, RUs, xUs, VIo, UUs, BUs, KIo, s2e, jUs } from "../core/system-prompt-blocks.js";
import { PHr, Oe, Bt } from "../core/conversation-engine.js";
var C = "tengu_lantern_wick_release", x = "tengu_lantern_wick_braid", I = "tengu_lantern_wick_braid_text", w = "tengu_lantern_wick_braid_release", y = "tengu_lantern_wick_text_by_model", L = "tengu_lantern_wick_release_by_model";
function P(t, n, e) {
  return nho(t, e) ?? k(n, "");
}
function nho(t, n) {
  let e = k(t, {});
  if (typeof e !== "object" || e === null) return;
  let u = e;
  return [n, Xe(n), "default"].map((a) => u[a]).find((a) => typeof a === "string");
}
function S(t) {
  let n = typeof t === "string" ? t.trim() : "";
  return n ? `[${n}]` : "";
}
function _(t) {
  for (let n = t.length - 1; n >= 0; n--) {
    let e = t[n];
    if (e?.type === "user" && e.usageLimitNote !== void 0) return e.usageLimitNote;
  }
  return;
}
function* sTs(t, { resumeActive: n, isMainLoop: e, querySource: u, depth: a, model: N, toolUseContext: p, now: c, uuid: m }) {
  let { agentContext: f } = p, W = !e && u.startsWith("agent:") && f.agentType !== "teammate" && !(f.agentType === "subagent" && f.workflowRunId);
  if (n || !(e || W)) return t;
  let o = [];
  try {
    let s = e && a === 0 && PHr(t), d = s && KIo();
    if (e && a === 0 && !d) VIo();
    let R = false, E = false;
    if (e && (a > 0 || d)) {
      if (E = UUs(), d && !E) {
        let r = _(t);
        if (r !== "wrap_up" && r !== "near_limit") VIo();
      }
    }
    if (e ? E : KIo() && k(x, false) === true && _(t) !== "wrap_up") {
      let r = (e ? null : WIo(k(I, ""))) ?? WIo(P(y, CUs, N)), i = r !== null ? "custom" : kUs(k(vUs, "off"));
      if (i !== "off") {
        if (o.push(Oe({ content: r ?? (i === "next-steps" ? TUs : EUs), isMeta: true, turnCompanion: true, usageLimitNote: "wrap_up", now: c, uuidFn: m })), g(e ? "usage_limit_grace_wrapup" : "usage_limit_grace_wrapup_subagent", { next_steps: i === "next-steps", custom: i === "custom" }), R = true, e) BUs();
      }
    }
    let G = !e || s ? s2e() : null, T = G !== null && G.extraUsageStatus === void 0, U;
    if (e) {
      let r = a === 0 ? _(t) : void 0;
      U = !T && (r === "wrap_up" || r === "near_limit");
    } else U = !T && _(t) === "wrap_up" && k(x, false) === true;
    if (U) {
      let r = (e ? "" : S(k(w, ""))) || S(P(L, C, N));
      if (r) o.push(Oe({ content: r, isMeta: true, turnCompanion: true, usageLimitNote: "release", now: c, uuidFn: m })), g(e ? "usage_limit_grace_release" : "usage_limit_grace_release_subagent");
    }
    if (e && a > 0 && jUs() && k(lKn, false)) {
      if (o.push(Bt(RUs, xUs)), !R) o.push(Oe({ content: AUs, isMeta: true, turnCompanion: true, usageLimitNote: "near_limit", now: c, uuidFn: m }));
      if (g("usage_limit_near_wrapup"), !ye()) import("../git/perform-rate-limit-checkpoint.js").then(({ performRateLimitCheckpoint: r }) => r({ todos: p.getAppState().todos[p.agentId ?? V()] ?? [], trigger: "near_limit" })).catch(() => {
      });
    }
  } catch (s) {
    l(s);
  }
  let A = [];
  for (let s of o) if (yield s, s.type === "user") A.push(s);
  return A.length === 0 ? t : [...t, ...A];
}
export {
  nho,
  sTs
};
