// linux/telemetry/provider-not-allowed.js — Claude Code 2.1.310（linux）模块 chunk-5rbbn9bc.js
import { q, vCt, CYe, ye, Wr } from "../context/not-admin-owned.js";
import { X, Pe } from "../shared/chunk-57ff8cc1.js";
import { i } from "../shared/environment.js";
import { bt, Vo, t } from "../fs/gitlab-runner-authentication-token.js";
import { Fp, pn, $Gt, dj } from "../shared/cli-error.js";
import { nw, bS } from "../cli/chunk-af2447be.js";
import { v_e, Tzt, kV, Ntt } from "../cli/stream-json.js";
import { dW, Yfe } from "../remote/local-agent.js";
import { NVe, Cs } from "../settings/global-config-and-gates.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { DXe, Ld } from "../core/conversation-engine.js";
import { nCe } from "../context/account-memory-text-not-identified.js";
import { noe } from "../settings/non-string-value.js";
import { hhn } from "../auth/policy-limits-principal-changed.js";
import { u_r, bIt, Zio } from "../permissions/sdk-launch-initialize.js";
import { lXt, dXt, aDn } from "./agent-proxy-init.js";
import { sH } from "../api/control-response.js";
import { o, M, oe, yt, A } from "../vendor/zod/string-format.js";
import { randomUUID as c } from "crypto";
var g = 1e3, S = p(() => yt({ type: A("user"), initiator: o().optional(), origin: oe().optional(), isSynthetic: M().optional(), is_meta: M().optional(), seeded_summon: M().optional(), shouldQuery: M().optional() }));
function y(e) {
  try {
    let r = S().safeParse(Vo(e));
    return r.success && DXe(r.data.initiator) === void 0 && !NVe(r.data.origin, r.data.isSynthetic) && !r.data.is_meta && !r.data.seeded_summon && r.data.shouldQuery !== false;
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
async function f(e, r = g) {
  if (Wr()?.hostVerdict === void 0 || !dW() || v_e() || Yfe() || nw("--input-format") !== "stream-json" || bS("--no-session-persistence") || i.CLAUDE_BRIDGE_REATTACH_SESSION !== void 0 || !await w(u_r() ?? bIt(), r)) return false;
  let a = Tzt(q()), s = `Claude Code didn't start. ${e.replace(/\s+/g, " ").replace(/(?:[a-z][a-z\d+.-]*:\/\/|www\.|[\w.+-]+@)[^\s<`]*[^\s<`.,;:)]|[\\`*_[\]<]/gi, (n) => n.length > 1 ? `\`${n}\`` : n === "<" ? "&lt;" : `\\${n}`)}`, { errors: d, ...l } = sH(a, []);
  return Ntt([{ type: "assistant", message: Ld({ content: s }).message, parent_tool_use_id: null, session_id: a, uuid: c() }, { ...l, subtype: "success", is_error: false, result: s, terminal_reason: "turn_setup_failed" }]);
}
var u = 2e3;
async function MUe(e) {
  try {
    if (Zio(e), dXt() || aDn()) await m();
  } catch {
    t("[3P telemetry] managed-settings refusal send failed", { level: "error" });
  }
}
async function oIe(e) {
  if (e.policyUnreadable) await MUe("policy_invalid");
  else if (e.reason === "provider_not_allowed") await MUe("provider_not_allowed");
}
function _It(e) {
  if (Zio(e), CYe() === null && (dXt() || aDn())) bt(m);
}
async function m() {
  try {
    if (CYe() === null) {
      if (!Cs() && !ye()) return;
      noe(), await Promise.race([lXt(), X(u)]);
    }
    let e = vCt();
    if (e) await Promise.race([nCe.settledWithin(u / 2).then(() => e.forceFlush()), X(u)]);
  } catch {
    t("[3P telemetry] managed-settings refusal export failed", { level: "error" });
  }
}
async function Xio({ message: e, reason: r, errorType: a, print: s, beforeExit: d }) {
  if (s === void 0) Fp(e);
  else await s(e);
  if (a !== void 0) await MUe(a);
  let l = await f(e);
  return await kV({ sessionId: q(), message: e, reason: r }), await d?.(), await hhn(), await dj(), l ? $Gt(0) : pn(void 0, s === void 0 ? "cli_error" : "exit_with_message");
}
export {
  MUe,
  Xio,
  _It,
  oIe
};
