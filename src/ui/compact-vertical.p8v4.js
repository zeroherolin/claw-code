// ui/compact-vertical.p8v4.js — Claude Code 2.1.310 模块 chunk-p8v4cbh3.js
import { x_ } from "../terminal/left-arrow-blocked.q730.js";
import { wee, AX } from "../shared/chunk-j79dwkaq.js";
import { w } from "./chunk-zqxc4qtb.js";
import { rt, s, n } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { vC, LPe, NPe, Cgr, rae, FPe, lu, Agr, j8t, _Ue } from "./aria-hidden.r9bm.js";
import { ka } from "../shared/above-prompt-select.rh5v.js";
import { ne } from "../workflows/workflow-size-guideline-change.1rc0.js";
import { lw, uPt } from "../telemetry/select-stray-click-dropped.n2v5.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
import { de, A, y, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
j();
import { isDeepStrictEqual as ze } from "util";
function ue({ isDisabled: o = false, visibleOptionCount: G = 5, options: u, defaultValue: d = [], onChange: E, onCancel: M, onFocus: K, submitButtonText: T, onSubmit: p, onDownFromLastItem: h, hideIndexes: B = false, refuseSubmitFocus: W }) {
  let [X, R, k] = lu(d), [L, V, N] = lu(false), [i, be] = y(u);
  if (u !== i && !ze(u, i)) R(d), be(u);
  let [I, J] = y(() => {
    let t = /* @__PURE__ */ new Map();
    return u.forEach((l) => {
      if (l.type === "input" && l.initialValue) t.set(l.value, l.initialValue);
    }), t;
  }), P = de((t) => {
    let l = typeof t === "function" ? t(k()) : t;
    if (E?.(l) === false) return;
    R(l);
  }, [k, R, E]), C = de((t) => {
    if (u.find((l) => l.value === t)?.disabled === true) return;
    P((l) => l.includes(t) ? l.filter((c) => c !== t) : [...l, t]);
  }, [u, P]), f = Agr({ visibleOptionCount: G, options: u, onFocus: K });
  ka("multi-select");
  let z = de((t, l) => {
    let c = u.find((g) => g.value === t);
    if (c?.type === "input" && c.onChange(l) === false) return;
    J((g) => {
      let D = new Map(g);
      return D.set(t, l), D;
    }), P((g) => {
      if (l) {
        if (!g.includes(t)) return [...g, t];
        return g;
      } else return g.filter((D) => D !== t);
    });
  }, [u, P]);
  return { ...f, focusOption: (t) => {
    V(false), f.focusOption(t);
  }, scrollViewport: (t) => {
    let l = f.getFocusedValue(), c = f.scrollViewport(t);
    if (f.getFocusedValue() !== l) V(false);
    return c;
  }, selectedValues: X, getSelectedValues: k, inputValues: I, isSubmitFocused: L, updateInputValue: z, toggleValue: C, onCancel: M, handleKeyDown: (t) => {
    if (o) return;
    let l = wee(t.key), c = f.getFocusedValue(), D = u.find((F) => F.value === c)?.type === "input", v = N();
    if (D) {
      if (!(t.key === "up" || t.key === "down" || t.key === "escape" || t.key === "tab" || t.key === "return" || t.ctrl && (t.key === "n" || t.key === "p" || t.key === "return"))) return;
    }
    let x = u.at(-1)?.value;
    if (t.key === "tab" && !t.shift) {
      if (t.preventDefault(), T && p && c === x && !v) {
        if (W?.()) return;
        V(true);
      } else if (!v) f.focusNextOption();
      return;
    }
    if (t.key === "tab" && t.shift) {
      if (t.preventDefault(), T && p && v) V(false), f.focusOption(x);
      else f.focusPreviousOption();
      return;
    }
    if (t.key === "down" || t.ctrl && t.key === "n" || !t.ctrl && !t.shift && t.key === "j") {
      if (t.preventDefault(), v && h) h();
      else if (T && p && c === x && !v) {
        if (W?.()) return;
        V(true);
      } else if (!T && h && c === x) h();
      else if (!v) f.focusNextOption();
      return;
    }
    if (t.key === "up" || t.ctrl && t.key === "p" || !t.ctrl && !t.shift && t.key === "k") {
      if (t.preventDefault(), T && p && v) V(false), f.focusOption(x);
      else f.focusPreviousOption();
      return;
    }
    if (t.key === "pagedown") {
      t.preventDefault(), f.focusNextPage();
      return;
    }
    if (t.key === "pageup") {
      t.preventDefault(), f.focusPreviousPage();
      return;
    }
    if (t.key === "return" || AX(t.key) === " ") {
      if (t.preventDefault(), t.ctrl && t.key === "return" && D && p) {
        p(k());
        return;
      }
      if (t.key === "return" && v && p) {
        p(k());
        return;
      }
      if (t.key === "return" && !T && p) {
        p(k());
        return;
      }
      if (!v && c !== void 0) C(c);
      return;
    }
    if (!B && /^[0-9]$/.test(l)) {
      t.preventDefault();
      let F = parseInt(l) - 1;
      if (F >= 0 && F < u.length) C(u[F].value);
      return;
    }
    if (t.key === "escape") M(), t.stopImmediatePropagation();
  } };
}
function ct(yt) {
  return yt.description;
}
function ft() {
}
function k$(o) {
  let u = w(12);
  if (rt()) {
    let d2;
    if (u[0] !== o.defaultValue || u[1] !== o.isDisabled || u[2] !== o.onCancel || u[3] !== o.onChange || u[4] !== o.onFocus || u[5] !== o.onSubmit || u[6] !== o.options || u[7] !== o.refuseInput || u[8] !== o.submitButtonText) d2 = e(Cgr, { options: o.options, defaultValue: o.defaultValue, onChange: o.onChange, onSubmit: o.onSubmit, onFocus: o.onFocus, onCancel: o.onCancel, isDisabled: o.isDisabled, submitButtonText: o.submitButtonText, refuseInput: o.refuseInput }), u[0] = o.defaultValue, u[1] = o.isDisabled, u[2] = o.onCancel, u[3] = o.onChange, u[4] = o.onFocus, u[5] = o.onSubmit, u[6] = o.options, u[7] = o.refuseInput, u[8] = o.submitButtonText, u[9] = d2;
    else d2 = u[9];
    return d2;
  }
  let d;
  if (u[10] !== o) d = e(me, { ...o }), u[10] = o, u[11] = d;
  else d = u[11];
  return d;
}
function me(o) {
  let I = w(68), { isDisabled: G, visibleOptionCount: u, options: d, defaultValue: E, onCancel: M, onChange: K, onFocus: T, submitButtonText: p, onSubmit: h, onDownFromLastItem: B, onOpenEditor: W, hideIndexes: X, canPasteImage: R, onImagePaste: k, pastedContents: L, onRemoveImage: V, refuseSubmitFocus: N } = o, i = G === void 0 ? false : G, be = u === void 0 ? 5 : u, J;
  if (I[0] !== E) J = E === void 0 ? [] : E, I[0] = E, I[1] = J;
  else J = I[1];
  let P = J, C = X === void 0 ? false : X, f = d.some(ct);
  const z = _Ue(be, f ? "compact-vertical" : "compact");
  let ve;
  if (I[2] !== P || I[3] !== C || I[4] !== i || I[5] !== M || I[6] !== K || I[7] !== B || I[8] !== T || I[9] !== h || I[10] !== d || I[11] !== N || I[12] !== p || I[13] !== z) ve = { isDisabled: i, visibleOptionCount: z, options: d, defaultValue: P, onChange: K, onCancel: M, onFocus: T, submitButtonText: p, onSubmit: h, onDownFromLastItem: B, hideIndexes: C, refuseSubmitFocus: N }, I[2] = P, I[3] = C, I[4] = i, I[5] = M, I[6] = K, I[7] = B, I[8] = T, I[9] = h, I[10] = d, I[11] = N, I[12] = p, I[13] = z, I[14] = ve;
  else ve = I[14];
  let t = ue(ve), l = A(null);
  x_(l, !i);
  let [c, g] = y(false), D = LPe(), v = !i && c && D === "inverse", x = lw(), F = uPt(), Re;
  if (I[15] !== i || I[16] !== d.length || I[17] !== F || I[18] !== t.scrollViewport || I[19] !== t.visibleFromIndex || I[20] !== t.visibleToIndex) Re = { isDisabled: i, visibleFromIndex: t.visibleFromIndex, visibleToIndex: t.visibleToIndex, optionCount: d.length, scrollViewport: t.scrollViewport, shouldDropWheel: F }, I[15] = i, I[16] = d.length, I[17] = F, I[18] = t.scrollViewport, I[19] = t.visibleFromIndex, I[20] = t.visibleToIndex, I[21] = Re;
  else Re = I[21];
  let he = j8t(Re), We;
  if (I[22] !== i || I[23] !== x || I[24] !== t) We = (Q) => i || Q.disabled === true ? void 0 : (mt) => {
    if (x(mt)) {
      return;
    }
    if (Q.type === "input") t.focusOption(Q.value);
    else t.toggleValue(Q.value);
  }, I[22] = i, I[23] = x, I[24] = t, I[25] = We;
  else We = I[25];
  let Y = We, Z, ee, te, oe, ie, se, U;
  if (I[26] !== R || I[27] !== Y || I[28] !== C || I[29] !== i || I[30] !== M || I[31] !== k || I[32] !== W || I[33] !== V || I[34] !== d.length || I[35] !== L || I[36] !== he || I[37] !== t) {
    let He = d.length.toString().length;
    ee = s;
    ie = "column";
    se = l;
    if (I[45] !== i || I[46] !== t.handleKeyDown) U = i ? {} : { tabIndex: 0, onKeyDown: t.handleKeyDown }, I[45] = i, I[46] = t.handleKeyDown, I[47] = U;
    else U = I[47];
    Z = NPe;
    te = he;
    oe = t.visibleOptions.map((b, bt) => {
      let ge = !i && t.focusedValue === b.value && !t.isSubmitFocused;
      let re = t.selectedValues.includes(b.value);
      let Ae = b.index === t.visibleFromIndex;
      let Ke = b.index === t.visibleToIndex - 1;
      let Be = t.visibleToIndex < d.length;
      let Le = t.visibleFromIndex > 0;
      let Ne = t.visibleFromIndex + bt + 1;
      if (b.type === "input") {
        let vt = t.inputValues.get(b.value) || "";
        return e(s, { flexDirection: "column", children: e(FPe, { option: b, onClick: Y(b), isFocused: ge, isSelected: false, shouldShowDownArrow: Be && Ke, shouldShowUpArrow: Le && Ae, maxIndexWidth: He, index: Ne, inputValue: vt, onInputChange: (ht) => {
          t.updateInputValue(b.value, ht);
        }, onSubmit: ft, onExit: () => {
          M();
        }, layout: "compact", onOpenEditor: W, canPasteImage: R, onImagePaste: k, pastedContents: L, onRemoveImage: V, extraChromeWidth: 4, children: r(n, { color: re ? "success" : void 0, children: ["[", re ? ne.tick : " ", "]", " "] }) }) }, String(b.value));
      }
      return e(s, { flexDirection: "column", children: r(rae, { isFocused: ge, isSelected: false, shouldShowDownArrow: Be && Ke, shouldShowUpArrow: Le && Ae, onClick: Y(b), children: [!C && e(s, { flexShrink: 0, children: e(n, { dimColor: true, children: `${Ne}.`.padEnd(He) }) }), e(s, { flexShrink: 0, children: r(n, { color: re ? "success" : void 0, children: ["[", re ? ne.tick : " ", "]"] }) }), r(s, { flexDirection: "column", children: [e(n, { color: ge ? "suggestion" : void 0, children: b.label }), b.description && e(n, { color: "inactive", children: b.description })] })] }) }, String(b.value));
    });
    I[26] = R, I[27] = Y, I[28] = C, I[29] = i, I[30] = M, I[31] = k, I[32] = W, I[33] = V, I[34] = d.length, I[35] = L, I[36] = he, I[37] = t, I[38] = Z, I[39] = ee, I[40] = te, I[41] = oe, I[42] = ie, I[43] = se, I[44] = U;
  } else Z = I[38], ee = I[39], te = I[40], oe = I[41], ie = I[42], se = I[43], U = I[44];
  let le;
  if (I[48] !== Z || I[49] !== te || I[50] !== oe) le = e(Z, { ...te, children: oe }), I[48] = Z, I[49] = te, I[50] = oe, I[51] = le;
  else le = I[51];
  let ae;
  if (I[52] !== i || I[53] !== h || I[54] !== x || I[55] !== t || I[56] !== p || I[57] !== D || I[58] !== c || I[59] !== v) ae = p && h && r(s, { marginTop: 0, gap: 1, onClick: i ? void 0 : (gt) => {
    if (x(gt)) {
      return;
    }
    h(t.getSelectedValues());
  }, backgroundColor: !i && c && D === "tint" ? vC : void 0, onMouseEnter: () => g(true), onMouseLeave: () => g(false), children: [!i && t.isSubmitFocused ? e(n, { color: "suggestion", inverse: v, children: ne.pointer }) : e(n, { inverse: v, children: " " }), e(s, { marginLeft: 3, children: e(n, { color: !i && t.isSubmitFocused ? "suggestion" : void 0, bold: true, children: p }) })] }), I[52] = i, I[53] = h, I[54] = x, I[55] = t, I[56] = p, I[57] = D, I[58] = c, I[59] = v, I[60] = ae;
  else ae = I[60];
  let je;
  if (I[61] !== ee || I[62] !== ie || I[63] !== se || I[64] !== U || I[65] !== le || I[66] !== ae) je = r(ee, { flexDirection: ie, ref: se, ...U, children: [le, ae] }), I[61] = ee, I[62] = ie, I[63] = se, I[64] = U, I[65] = le, I[66] = ae, I[67] = je;
  else je = I[67];
  return je;
}
export {
  k$
};
