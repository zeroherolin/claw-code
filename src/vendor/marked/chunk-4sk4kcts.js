// vendor/marked/chunk-4sk4kcts.js — Claude Code 2.1.310 模块 chunk-4sk4kcts.js
import { c } from "../../agents/third-party.ydpb.js";
import { INe } from "../../mcp/claude-browser.hdf6.js";
import { xt } from "../../mcp/toolbox-mcp-server-id.fewh.js";
import { Yi } from "../../shared/chunk-e76vd23z.js";
var i = 5e3;
function USo(e, o, t, a) {
  let s = { sentAhead: false, flagSource: o, negotiationDenylisted: t, listed: a, listChangedBeforeHandler: false, handlerRegistered: false };
  return xt().toolsListAhead.set(e, s), s;
}
function bRs(e, o, t) {
  e.page = o, e.pageSentAtMs = t;
}
function wRs(e) {
  if (e.page !== void 0) e.expiry = setTimeout(n, i, e), e.expiry.unref?.();
}
function BSo(e) {
  n(e);
}
function ERs(e) {
  let o = xt().toolsListAhead.get(e);
  if (o?.page === void 0 || o.pageSentAtMs === void 0) return;
  let t = { page: o.page, sentAtMs: o.pageSentAtMs };
  return n(o), t;
}
function vRs(e, o) {
  try {
    let t = xt().toolsListAhead.get(e);
    if (t !== void 0 && t.firstPageMark === void 0) t.firstPageMark = INe(o) ?? "unmarked";
  } catch {
  }
}
function kRs(e, o) {
  let t = xt().toolsListAhead.get(e);
  if (t !== void 0) t.earlyAnswer = o;
}
function jSo(e) {
  let o = xt().toolsListAhead.get(e);
  if (o === void 0) return;
  if (n(o), o.sentAhead && !o.handlerRegistered) o.listChangedBeforeHandler = true;
}
function CRs(e) {
  let o = xt().toolsListAhead.get(e);
  if (o === void 0) return false;
  o.handlerRegistered = true;
  let t = o.listChangedBeforeHandler;
  return o.listChangedBeforeHandler = false, t;
}
function j0t(e) {
  if (e === void 0) return {};
  return { toolsListAhead: e.sentAhead, toolsListAheadListed: e.listed, ...e.flagSource !== void 0 && { toolsListAheadFlagSource: c(e.flagSource) }, ...e.earlyAnswer !== void 0 && { toolsListAheadEarlyAnswer: c(e.earlyAnswer) }, ...e.firstPageMark !== void 0 && { toolsListFirstPageMark: c(e.firstPageMark) } };
}
function TRs(e) {
  let o = xt().toolsListAhead.get(Yi(e.client));
  return o === void 0 ? {} : { ...j0t(o), negotiationDenylisted: o.negotiationDenylisted };
}
function n(e) {
  clearTimeout(e.expiry), e.page = void 0, e.pageSentAtMs = void 0, e.expiry = void 0;
}
export {
  BSo,
  CRs,
  ERs,
  TRs,
  USo,
  bRs,
  j0t,
  jSo,
  kRs,
  vRs,
  wRs
};
