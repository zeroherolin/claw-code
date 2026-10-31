// linux/shared/deep-link.js — Claude Code 2.1.310（linux）模块 chunk-jnpc8m74.js
import { Ps } from "./chunk-67236fa7.js";
import { nt } from "../context/not-admin-owned.js";
function p() {
  return Ps({ value: "", active: false, launchWarning: null, linkSuppliedTexts: /* @__PURE__ */ new Set(), submittedLinkPrefill: null, vimMode: "INSERT", stash: null, cameBack: false });
}
var a = new nt(() => p());
function cD(n) {
  return a.of(n);
}
function cut(n) {
  return cD(n).getState().value;
}
function _Be(n, e) {
  n.setState((t) => {
    if (t.value === e) return t;
    if (t.value !== "" && e === "") {
      let o = t.value.trim(), r = t.launchWarning?.type === "deep-link" && t.launchWarning.text === void 0 ? new Set(t.linkSuppliedTexts).add(o) : t.linkSuppliedTexts;
      return { ...t, value: e, launchWarning: null, linkSuppliedTexts: r, submittedLinkPrefill: r.has(o) ? t.value : null, cameBack: false };
    }
    return { ...t, value: e };
  });
}
function hmo(n) {
  return cD(n).getState().submittedLinkPrefill;
}
function ymo(n, e, t) {
  cD(n).setState((o) => {
    let r = t.trim();
    if (r === "" || o.linkSuppliedTexts.has(r) || !o.linkSuppliedTexts.has(e.trim())) return o;
    return { ...o, linkSuppliedTexts: new Set(o.linkSuppliedTexts).add(r) };
  });
}
function _ks(n, e) {
  _Be(cD(n), e);
}
function _mo(n, e) {
  n.setState((t) => t.stash === e ? t : { ...t, stash: e });
}
function gNn(n, e) {
  n.setState((t) => t.active === e ? t : { ...t, active: e });
}
function $vr(n, e) {
  gNn(cD(n), e);
}
function bks(n, e) {
  n.setState((t) => {
    let o = e && t.value !== "";
    return t.cameBack === o ? t : { ...t, cameBack: o };
  });
}
function c7t(n, e) {
  cD(n).setState((t) => t.vimMode === e ? t : { ...t, vimMode: e });
}
function Fvr(n, e) {
  n.setState((t) => {
    let o = e.type === "deep-link" ? e.text?.trim() : void 0, r = o === void 0 || t.linkSuppliedTexts.has(o) ? t.linkSuppliedTexts : new Set(t.linkSuppliedTexts).add(o), i = t.launchWarning?.type === e.type && t.launchWarning.prefillLength === e.prefillLength ? t.launchWarning : e;
    return i === t.launchWarning && r === t.linkSuppliedTexts ? t : { ...t, launchWarning: i, linkSuppliedTexts: r };
  });
}
function bmo(n, e) {
  Fvr(cD(n), e);
}
export {
  $vr,
  Fvr,
  _Be,
  _ks,
  _mo,
  bks,
  bmo,
  c7t,
  cD,
  cut,
  gNn,
  hmo,
  ymo
};
