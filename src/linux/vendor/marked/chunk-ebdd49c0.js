// linux/vendor/marked/chunk-ebdd49c0.js — Claude Code 2.1.310（linux）模块 chunk-h023rkdg.js
import { c } from "../../agents/third-party.js";
import { TNe } from "../../mcp/claude-browser.js";
import { xt } from "../../mcp/toolbox-mcp-server-id.js";
import { Yi } from "../../shared/chunk-62a451b1.js";
var i = 5e3;
function cbo(e, o, t, a) {
  let s = { sentAhead: false, flagSource: o, negotiationDenylisted: t, listed: a, listChangedBeforeHandler: false, handlerRegistered: false };
  return xt().toolsListAhead.set(e, s), s;
}
function LCs(e, o, t) {
  e.page = o, e.pageSentAtMs = t;
}
function NCs(e) {
  if (e.page !== void 0) e.expiry = setTimeout(n, i, e), e.expiry.unref?.();
}
function ubo(e) {
  n(e);
}
function $Cs(e) {
  let o = xt().toolsListAhead.get(e);
  if (o?.page === void 0 || o.pageSentAtMs === void 0) return;
  let t = { page: o.page, sentAtMs: o.pageSentAtMs };
  return n(o), t;
}
function FCs(e, o) {
  try {
    let t = xt().toolsListAhead.get(e);
    if (t !== void 0 && t.firstPageMark === void 0) t.firstPageMark = TNe(o) ?? "unmarked";
  } catch {
  }
}
function UCs(e, o) {
  let t = xt().toolsListAhead.get(e);
  if (t !== void 0) t.earlyAnswer = o;
}
function fbo(e) {
  let o = xt().toolsListAhead.get(e);
  if (o === void 0) return;
  if (n(o), o.sentAhead && !o.handlerRegistered) o.listChangedBeforeHandler = true;
}
function BCs(e) {
  let o = xt().toolsListAhead.get(e);
  if (o === void 0) return false;
  o.handlerRegistered = true;
  let t = o.listChangedBeforeHandler;
  return o.listChangedBeforeHandler = false, t;
}
function PDt(e) {
  if (e === void 0) return {};
  return { toolsListAhead: e.sentAhead, toolsListAheadListed: e.listed, ...e.flagSource !== void 0 && { toolsListAheadFlagSource: c(e.flagSource) }, ...e.earlyAnswer !== void 0 && { toolsListAheadEarlyAnswer: c(e.earlyAnswer) }, ...e.firstPageMark !== void 0 && { toolsListFirstPageMark: c(e.firstPageMark) } };
}
function jCs(e) {
  let o = xt().toolsListAhead.get(Yi(e.client));
  return o === void 0 ? {} : { ...PDt(o), negotiationDenylisted: o.negotiationDenylisted };
}
function n(e) {
  clearTimeout(e.expiry), e.page = void 0, e.pageSentAtMs = void 0, e.expiry = void 0;
}
export {
  $Cs,
  BCs,
  FCs,
  LCs,
  NCs,
  PDt,
  UCs,
  cbo,
  fbo,
  jCs,
  ubo
};
