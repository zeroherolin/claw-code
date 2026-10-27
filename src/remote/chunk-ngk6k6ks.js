// remote/chunk-ngk6k6ks.js — Claude Code 2.1.310 模块 chunk-ngk6k6ks.js
import { rr } from "../artifacts/chunk-m8t7qekn.js";
import { sy, So, X4, Cbn, t9o } from "../agents/session-stable-address.6kf8.js";
import { f_, PRe, Zue } from "../fs/reply-across-default-dirs.esvz.js";
import { dZ } from "../settings/global-config-and-gates.27xj.js";
import { gSt } from "./chunk-c1rfegja.js";
import { wTe } from "../shared/chunk-yage854k.js";
var iDn = "target is this session itself — there is no one else to send to", u = `address the main conversation as "${sy}"`;
function dOt(e) {
  let { ownMessagingSocket: s } = import.meta.require("../shared/admit-dropped-ids-by-destination.xxa3.js"), n = s();
  return n !== void 0 && PRe(e, n);
}
function r1e(e) {
  let { ownMessagingSocket: s } = import.meta.require("../shared/admit-dropped-ids-by-destination.xxa3.js"), n = s();
  return n !== void 0 && Zue(e, n);
}
function d(e) {
  let { ownMessagingSocket: s } = import.meta.require("../shared/admit-dropped-ids-by-destination.xxa3.js"), n = s(), t = X4(e);
  return n !== void 0 && t !== null && t9o(t.ref, n);
}
function K7t(e, s) {
  return d(e) && !dOt(s);
}
function q7t(e) {
  return `'${e}' is the name-and-ref token this session advertises for ITSELF, yet a different session record on this machine claims it — not sent. A record impersonating this session is suspicious: ask the user. (If you meant yourself, there is no one to send to.)`;
}
function Ybs(e) {
  return `Not sent — '${e}' is this session's own name and ref, but another session record on this machine claims it.`;
}
function x9e(e) {
  return `'${e}' is this session's own address — a message or file sent there would only come back to this conversation; there is no one else at that address to send to.`;
}
function vae(e) {
  let s = rr(e);
  return [gSt()?.bridgeSessionId, wTe()].some((n) => typeof n === "string" && rr(n) === s);
}
function p0(e) {
  return e.teammateContext !== void 0 || e.agentContext !== void 0 && dZ(e.agentContext);
}
function wct(e) {
  return `Not sent — '${e}' is this session's own name.`;
}
function cOt(e, s, n = u) {
  let { getRegisteredSessionName: t } = import.meta.require("../artifacts/adopt-supplied-session-title.tc7p.js"), o = Cbn(t()?.name), i = o === null ? "this session" : `this session ("${o}")`;
  return s ? `
('${e}' also addresses ${i} — this process's main session; to reach the main conversation from inside it, ${n}.)` : `
('${e}' also addresses ${i} itself — if you meant yourself, there is no one to send to.)`;
}
function uOt(e) {
  return !e.cloudUnavailable && !e.bridgeUnavailable && !e.localUnavailable && !e.searchTruncated && !e.pinnedIdentityClaimedLocally;
}
function pOt(e) {
  let { getRegisteredSessionName: s, getHeldSessionNames: n } = import.meta.require("../artifacts/adopt-supplied-session-title.tc7p.js"), { ownMessagingSocket: t } = import.meta.require("../shared/admit-dropped-ids-by-destination.xxa3.js"), o = s(), i = t();
  if (o === void 0 || i === void 0 || f_(e).scheme !== "other") return "no";
  let r = X4(e);
  if (r !== null) {
    let a = So(r.name);
    if (!t9o(r.ref, i)) return "no";
    if (a !== So(o.name)) {
      let c = n().get(a);
      if (c === void 0) return "no";
      return c === "derived" ? "categorical" : "note";
    }
  } else if (So(e) !== So(o.name)) return "no";
  let { getSessionNamingState: l } = import.meta.require("../cli/claim-session-name-at-startup.sms5.js");
  return o.source === "derived" || (o.source === "user" || o.source === "collision") && l().userTypedName === o.name ? "categorical" : "note";
}
function ate(e, s, n = u) {
  let { getRegisteredSessionName: t } = import.meta.require("../artifacts/adopt-supplied-session-title.tc7p.js"), o = Cbn(t()?.name);
  if (s) {
    let i = o !== null ? ` ("${o}" is the name OTHER sessions use for it)` : "";
    return `'${e}' is this process's own main session${i} — from inside it, ${n} instead.`;
  }
  return o !== null ? `'${e}' is this session itself — "${o}" is the name other sessions use to message YOU; there is no one else by that name to send to.` : `'${e}' is this session itself — there is no one else at that address to send to.`;
}
export {
  K7t,
  Ybs,
  ate,
  cOt,
  dOt,
  iDn,
  p0,
  pOt,
  q7t,
  r1e,
  uOt,
  vae,
  wct,
  x9e
};
