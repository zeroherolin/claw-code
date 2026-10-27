// shared/deep-link.aet8.js — Claude Code 2.1.310 模块 chunk-aet897re.js
import { Ps } from "./chunk-bkvejkkf.js";
import { nt } from "../context/not-admin-owned.ersa.js";
function p() {
  return Ps({ value: "", active: false, launchWarning: null, linkSuppliedTexts: /* @__PURE__ */ new Set(), submittedLinkPrefill: null, vimMode: "INSERT", stash: null, cameBack: false });
}
var a = new nt(() => p());
function m0(n) {
  return a.of(n);
}
function fut(n) {
  return m0(n).getState().value;
}
function A1e(n, e) {
  n.setState((t) => {
    if (t.value === e) return t;
    if (t.value !== "" && e === "") {
      let o = t.value.trim(), r = t.launchWarning?.type === "deep-link" && t.launchWarning.text === void 0 ? new Set(t.linkSuppliedTexts).add(o) : t.linkSuppliedTexts;
      return { ...t, value: e, launchWarning: null, linkSuppliedTexts: r, submittedLinkPrefill: r.has(o) ? t.value : null, cameBack: false };
    }
    return { ...t, value: e };
  });
}
function jmo(n) {
  return m0(n).getState().submittedLinkPrefill;
}
function Wmo(n, e, t) {
  m0(n).setState((o) => {
    let r = t.trim();
    if (r === "" || o.linkSuppliedTexts.has(r) || !o.linkSuppliedTexts.has(e.trim())) return o;
    return { ...o, linkSuppliedTexts: new Set(o.linkSuppliedTexts).add(r) };
  });
}
function Xks(n, e) {
  A1e(m0(n), e);
}
function Gmo(n, e) {
  n.setState((t) => t.stash === e ? t : { ...t, stash: e });
}
function xNn(n, e) {
  n.setState((t) => t.active === e ? t : { ...t, active: e });
}
function tvr(n, e) {
  xNn(m0(n), e);
}
function Jks(n, e) {
  n.setState((t) => {
    let o = e && t.value !== "";
    return t.cameBack === o ? t : { ...t, cameBack: o };
  });
}
function wQt(n, e) {
  m0(n).setState((t) => t.vimMode === e ? t : { ...t, vimMode: e });
}
function nvr(n, e) {
  n.setState((t) => {
    let o = e.type === "deep-link" ? e.text?.trim() : void 0, r = o === void 0 || t.linkSuppliedTexts.has(o) ? t.linkSuppliedTexts : new Set(t.linkSuppliedTexts).add(o), i = t.launchWarning?.type === e.type && t.launchWarning.prefillLength === e.prefillLength ? t.launchWarning : e;
    return i === t.launchWarning && r === t.linkSuppliedTexts ? t : { ...t, launchWarning: i, linkSuppliedTexts: r };
  });
}
function zmo(n, e) {
  nvr(m0(n), e);
}
export {
  A1e,
  Gmo,
  Jks,
  Wmo,
  Xks,
  fut,
  jmo,
  m0,
  nvr,
  tvr,
  wQt,
  xNn,
  zmo
};
