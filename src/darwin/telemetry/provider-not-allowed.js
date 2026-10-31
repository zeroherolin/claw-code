// darwin/telemetry/provider-not-allowed.js — Claude Code 2.1.310（darwin）模块 chunk-sten5bec.js
import { V, OAt, D3e, ye, Wr } from "../context/not-admin-owned.js";
import { X, Pe } from "../shared/chunk-57ff8cc1.js";
import { i } from "../shared/environment.js";
import { _t, qo, t } from "../fs/gitlab-runner-authentication-token.js";
import { $f, fn, X2t, hj } from "../shared/cli-error.js";
import { Zb, yb } from "../cli/chunk-af2447be.js";
import { x_e, NGt, DV, Gtt } from "../cli/stream-json.js";
import { yW, nfe } from "../remote/local-agent.js";
import { VVe, As } from "../settings/global-config-and-gates.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { jXe, Ld } from "../core/conversation-engine.js";
import { lAe } from "../context/account-memory-text-not-identified.js";
import { doe } from "../settings/non-string-value.js";
import { Mhn } from "../auth/policy-limits-principal-changed.js";
import { R_r, AIt, wao } from "../permissions/sdk-launch-initialize.js";
import { wXt, EXt, v0n } from "./agent-proxy-init.js";
import { dH } from "../api/control-response.js";
import { o, M, oe, yt, T } from "../vendor/zod/string-format.js";
import { randomUUID as c } from "crypto";
var g = 1e3, S = f(() => yt({ type: T("user"), initiator: o().optional(), origin: oe().optional(), isSynthetic: M().optional(), is_meta: M().optional(), seeded_summon: M().optional(), shouldQuery: M().optional() }));
function y(e) {
  try {
    let r = S().safeParse(qo(e));
    return r.success && jXe(r.data.initiator) === void 0 && !VVe(r.data.origin, r.data.isSynthetic) && !r.data.is_meta && !r.data.seeded_summon && r.data.shouldQuery !== false;
  } catch {
    return false;
  }
}
async function w(e, r) {
  let a = (async () => {
    let s = "";
    for (; ; ) {
      let { done: d, value: l } = await e.next();
      if (d) return false;
      if (s += l, !l.includes(`
`)) continue;
      let n = s.split(`
`);
      if (s = n.pop() ?? "", n.some(y)) return true;
    }
  })().catch(() => false);
  return await Pe(a, r) ?? false;
}
async function m(e, r = g) {
  if (Wr()?.hostVerdict === void 0 || !yW() || x_e() || nfe() || Zb("--input-format") !== "stream-json" || yb("--no-session-persistence") || i.CLAUDE_BRIDGE_REATTACH_SESSION !== void 0 || !await w(R_r() ?? AIt(), r)) return false;
  let a = NGt(V()), s = `Claude Code didn't start. ${e.replace(/\s+/g, " ").replace(/(?:[a-z][a-z\d+.-]*:\/\/|www\.|[\w.+-]+@)[^\s<`]*[^\s<`.,;:)]|[\\`*_[\]<]/gi, (n) => n.length > 1 ? `\`${n}\`` : n === "<" ? "&lt;" : `\\${n}`)}`, { errors: d, ...l } = dH(a, []);
  return Gtt([{ type: "assistant", message: Ld({ content: s }).message, parent_tool_use_id: null, session_id: a, uuid: c() }, { ...l, subtype: "success", is_error: false, result: s, terminal_reason: "turn_setup_failed" }]);
}
var u = 2e3;
async function BUe(e) {
  try {
    if (wao(e), EXt() || v0n()) await p();
  } catch {
    t("[3P telemetry] managed-settings refusal send failed", { level: "error" });
  }
}
async function cIe(e) {
  if (e.policyUnreadable) await BUe("policy_invalid");
  else if (e.reason === "provider_not_allowed") await BUe("provider_not_allowed");
}
function TIt(e) {
  if (wao(e), D3e() === null && (EXt() || v0n())) _t(p);
}
async function p() {
  try {
    if (D3e() === null) {
      if (!As() && !ye()) return;
      doe(), await Promise.race([wXt(), X(u)]);
    }
    let e = OAt();
    if (e) await Promise.race([lAe.settledWithin(u / 2).then(() => e.forceFlush()), X(u)]);
  } catch {
    t("[3P telemetry] managed-settings refusal export failed", { level: "error" });
  }
}
async function _ao({ message: e, reason: r, errorType: a, print: s, beforeExit: d }) {
  if (s === void 0) $f(e);
  else await s(e);
  if (a !== void 0) await BUe(a);
  let l = await m(e);
  return await DV({ sessionId: V(), message: e, reason: r }), await d?.(), await Mhn(), await hj(), l ? X2t(0) : fn(void 0, s === void 0 ? "cli_error" : "exit_with_message");
}
export {
  BUe,
  TIt,
  _ao,
  cIe
};
