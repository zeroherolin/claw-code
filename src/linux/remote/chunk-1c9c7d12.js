// linux/remote/chunk-1c9c7d12.js — Claude Code 2.1.310（linux）模块 chunk-1m4j106d.js
import { rr } from "../artifacts/chunk-a6c9d164.js";
import { sy, bo, F5, lSn, A6o } from "../agents/session-stable-address.js";
import { u_, kRe, Kue } from "../fs/reply-across-default-dirs.js";
import { tZ } from "../settings/global-config-and-gates.js";
import { sbt } from "./chunk-8734517b.js";
import { yAe } from "../shared/chunk-53dd95bc.js";
var zHn = "target is this session itself — there is no one else to send to", u = `address the main conversation as "${sy}"`;
function nOt(e) {
  let { ownMessagingSocket: s } = import.meta.require("../shared/admit-dropped-ids-by-destination.js"), n = s();
  return n !== void 0 && kRe(e, n);
}
function qUe(e) {
  let { ownMessagingSocket: s } = import.meta.require("../shared/admit-dropped-ids-by-destination.js"), n = s();
  return n !== void 0 && Kue(e, n);
}
function d(e) {
  let { ownMessagingSocket: s } = import.meta.require("../shared/admit-dropped-ids-by-destination.js"), n = s(), t = F5(e);
  return n !== void 0 && t !== null && A6o(t.ref, n);
}
function NJt(e, s) {
  return d(e) && !nOt(s);
}
function $Jt(e) {
  return `'${e}' is the name-and-ref token this session advertises for ITSELF, yet a different session record on this machine claims it — not sent. A record impersonating this session is suspicious: ask the user. (If you meant yourself, there is no one to send to.)`;
}
function SSs(e) {
  return `Not sent — '${e}' is this session's own name and ref, but another session record on this machine claims it.`;
}
function v3e(e) {
  return `'${e}' is this session's own address — a message or file sent there would only come back to this conversation; there is no one else at that address to send to.`;
}
function gae(e) {
  let s = rr(e);
  return [sbt()?.bridgeSessionId, yAe()].some((n) => typeof n === "string" && rr(n) === s);
}
function lD(e) {
  return e.teammateContext !== void 0 || e.agentContext !== void 0 && tZ(e.agentContext);
}
function _ct(e) {
  return `Not sent — '${e}' is this session's own name.`;
}
function rOt(e, s, n = u) {
  let { getRegisteredSessionName: t } = import.meta.require("../artifacts/adopt-supplied-session-title.js"), o = lSn(t()?.name), i = o === null ? "this session" : `this session ("${o}")`;
  return s ? `
('${e}' also addresses ${i} — this process's main session; to reach the main conversation from inside it, ${n}.)` : `
('${e}' also addresses ${i} itself — if you meant yourself, there is no one to send to.)`;
}
function oOt(e) {
  return !e.cloudUnavailable && !e.bridgeUnavailable && !e.localUnavailable && !e.searchTruncated && !e.pinnedIdentityClaimedLocally;
}
function sOt(e) {
  let { getRegisteredSessionName: s, getHeldSessionNames: n } = import.meta.require("../artifacts/adopt-supplied-session-title.js"), { ownMessagingSocket: t } = import.meta.require("../shared/admit-dropped-ids-by-destination.js"), o = s(), i = t();
  if (o === void 0 || i === void 0 || u_(e).scheme !== "other") return "no";
  let r = F5(e);
  if (r !== null) {
    let a = bo(r.name);
    if (!A6o(r.ref, i)) return "no";
    if (a !== bo(o.name)) {
      let c = n().get(a);
      if (c === void 0) return "no";
      return c === "derived" ? "categorical" : "note";
    }
  } else if (bo(e) !== bo(o.name)) return "no";
  let { getSessionNamingState: l } = import.meta.require("../cli/claim-session-name-at-startup.js");
  return o.source === "derived" || (o.source === "user" || o.source === "collision") && l().userTypedName === o.name ? "categorical" : "note";
}
function ete(e, s, n = u) {
  let { getRegisteredSessionName: t } = import.meta.require("../artifacts/adopt-supplied-session-title.js"), o = lSn(t()?.name);
  if (s) {
    let i = o !== null ? ` ("${o}" is the name OTHER sessions use for it)` : "";
    return `'${e}' is this process's own main session${i} — from inside it, ${n} instead.`;
  }
  return o !== null ? `'${e}' is this session itself — "${o}" is the name other sessions use to message YOU; there is no one else by that name to send to.` : `'${e}' is this session itself — there is no one else at that address to send to.`;
}
export {
  $Jt,
  NJt,
  SSs,
  _ct,
  ete,
  gae,
  lD,
  nOt,
  oOt,
  qUe,
  rOt,
  sOt,
  v3e,
  zHn
};
