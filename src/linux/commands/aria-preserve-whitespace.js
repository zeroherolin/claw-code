// linux/commands/aria-preserve-whitespace.js — Claude Code 2.1.310（linux）模块 chunk-nh2498vy.js
import { w } from "../ui/chunk-0ed4c357.js";
import { Kh } from "../computer-use/chunk-c206db8f.js";
import { Pc } from "../shared/chunk-db96ab2d.js";
import { Goe, he } from "../terminal/xterm-ghostty.js";
import { fn, rt, s, n, ts, Jie, ja } from "../telemetry/render-glyph-cardinality.js";
import { kF } from "../terminal/ink-renderer.js";
import { To } from "../shared/chunk-4837e50a.js";
import { Pr } from "../shared/chunk-be0ce119.js";
import { R_, M8t, oPt, Llt } from "../terminal/left-arrow-blocked.js";
import { rko, oko, iko, ako } from "../core/conversation-engine.js";
import { DPe, If } from "../telemetry/chunk-56c542d7.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { Qn } from "../vendor/chalk/chunk-24ee1a9d.js";
import { yCs } from "../shell/clipboard-read.js";
import { zb } from "../shared/action-not-found.4cf4.js";
import { P, ee, C, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { KZ } from "../shared/chunk-5acf247e.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
j();
var st = "clipboard-image-hint", nt = 1e3, lt = 3e4, Ee = { id: "clipboard-image-hint", deps: (t) => [t.isTerminalFocused, t.canPasteImages, t.addNotification, t.clock], setup() {
  let t = null, h = 0, i = null;
  return ({ isTerminalFocused: p, canPasteImages: d, addNotification: m, clock: c }) => {
    let o = t ?? p;
    if (t = p, !d || !p || o) return;
    return i?.(), i = c.setTimeout(async () => {
      i = null;
      let g = Date.now();
      if (g - h < lt) return;
      if (await yCs()) h = g, m({ key: st, kind: "contextual", text: `Image in clipboard · ${zb("chat:imagePaste", "Chat", "ctrl+v")} to paste`, priority: "immediate", timeoutMs: 8e3 });
    }, nt), () => {
      i?.(), i = null;
    };
  };
} };
j();
function cIn(t, h) {
  let [i] = y(() => t.map((d) => {
    let m = d.setup();
    return { effect: typeof m === "function" ? m : m.effect, dispose: typeof m === "function" ? void 0 : m.dispose, deps: null, cleanup: void 0 };
  })), p = C(h);
  P(() => {
    p.current = h;
    let d = () => p.current, m = [];
    t.forEach((c, o) => {
      let g = i[o];
      if (!g) return;
      let u = c.deps ? c.deps(h) : [];
      if (g.deps !== null && at(g.deps, u)) return;
      m.push({ slot: g, deps: u });
    });
    for (let { slot: c } of m) c.cleanup?.(), c.cleanup = void 0;
    for (let { slot: c, deps: o } of m) c.deps = o, c.cleanup = c.effect(h, d);
  }), P(() => () => {
    for (let d of i) d.cleanup?.(), d.cleanup = void 0, d.deps = null, d.dispose?.();
  }, [i]);
}
function at(t, h) {
  if (t.length !== h.length) return false;
  for (let i = 0; i < t.length; i++) if (!Object.is(t[i], h[i])) return false;
  return true;
}
var pt = [Ee];
function uIn({ isTerminalFocused: t, canPasteImages: h }) {
  let { addNotification: i } = To(), p = fn();
  cIn(pt, { isTerminalFocused: t, canPasteImages: h, addNotification: i, clock: p });
}
j();
j();
function rPt(t) {
  let v = w(3), { char: h, index: i, glimmerIndex: p, messageColor: d, shimmerColor: m } = t, c = i === p, o = Math.abs(i - p) === 1;
  const u = c || o ? m : d;
  let R;
  if (v[0] !== h || v[1] !== u) R = e(n, { color: u, children: h }), v[0] = h, v[1] = u, v[2] = R;
  else R = v[2];
  return R;
}
function Nt(H) {
  return H.shimmerColor;
}
function te(t) {
  let p = w(21), { text: h, highlights: i } = t, d;
  if (p[0] !== i || p[1] !== h) {
    let m = oko(h, i);
    d = [[]];
    let c = 0;
    for (const o of m) {
      let g = o.text.split(`
`);
      for (let u = 0; u < g.length; u++) {
        if (u > 0) d.push([]), c = c + 1;
        let v = g[u];
        if (v.length > 0) d.at(-1).push({ text: v, highlight: o.highlight, start: c });
        c = c + v.length;
      }
    }
    p[0] = i, p[1] = h, p[2] = d;
  } else d = p[2];
  let R;
  if (p[3] !== i) R = i.some(Nt), p[3] = i, p[4] = R;
  else R = p[4];
  let E = R, N = 0, T = 1;
  if (E) {
    let M = Infinity;
    let D = -Infinity;
    if (p[5] !== i) {
      for (const F of i) {
        if (F.shimmerColor) M = Math.min(M, F.start), D = Math.max(D, F.end);
      }
      p[5] = i, p[6] = M, p[7] = D;
    } else M = p[6], D = p[7];
    N = M - 10, T = D - M + 20;
  }
  let q;
  if (p[8] !== T || p[9] !== E || p[10] !== d || p[11] !== N) q = { lines: d, hasShimmer: E, sweepStart: N, cycleLength: T }, p[8] = T, p[9] = E, p[10] = d, p[11] = N, p[12] = q;
  else q = p[12];
  let { lines: V, hasShimmer: He, sweepStart: se, cycleLength: Ne } = q, Re = If(), W = He && !Re, [B, ne] = ja(W ? 50 : null), k = W ? se + Math.floor(ne / 50) % Ne : DPe, U;
  if (p[13] !== k || p[14] !== V) {
    let O2;
    if (p[16] !== k) O2 = (I, ke) => e(s, { children: I.length === 0 ? e(n, { children: " " }) : I.map((f, le) => {
      if (f.highlight?.shimmerColor && f.highlight.color) {
        return e(n, { children: f.text.split("").map((A, X) => e(rPt, { char: A, index: f.start + X, glimmerIndex: k, messageColor: f.highlight.color, shimmerColor: f.highlight.shimmerColor }, X)) }, le);
      }
      return e(n, { color: f.highlight?.color, backgroundColor: f.highlight?.backgroundColor, dimColor: f.highlight?.dimColor, bold: f.highlight?.bold, italic: f.highlight?.italic, underline: f.highlight?.underline, strikethrough: f.highlight?.strikethrough, children: e(ts, { children: f.text }) }, le);
    }) }, ke), p[16] = k, p[17] = O2;
    else O2 = p[17];
    U = V.map(O2);
    p[13] = k, p[14] = V, p[15] = U;
  } else U = p[15];
  let O;
  if (p[18] !== B || p[19] !== U) O = e(s, { ref: B, flexDirection: "column", children: U }), p[18] = B, p[19] = U, p[20] = O;
  else O = p[20];
  return O;
}
function I8t(t) {
  let q = w(7), { inputState: h, children: i, terminalFocus: p, invert: d, hidePlaceholderText: m, cursorCellPainted: c, ...o } = t, { handleKeyDown: g, renderedValue: u, cursorLine: v, cursorColumn: R } = h, E = o.focus && o.showCursor && o.parkCursor !== false ? { line: v, column: R, visible: !c } : void 0, { handleKeyDown: T, handlePaste: M, isPasting: D } = Llt({ onPaste: o.onPaste, handleKeyDown: (N) => {
    if (o.onKeyDownBefore?.(N), N.defaultPrevented || N.didStopImmediatePropagation()) {
      return;
    }
    g(N);
  }, onImagePaste: o.onImagePaste }), { onIsPastingChange: F } = o;
  P(() => {
    if (F) F(D);
  }, [D, F]);
  let V;
  if (q[0] === S) V = kF(), q[0] = V;
  else V = q[0];
  let He = V, se = rt(), { showPlaceholder: Ne, renderedPlaceholder: Re } = Ze({ placeholder: o.placeholder, value: o.value, showCursor: o.showCursor && !He, focus: o.focus, terminalFocus: p, invert: d, hidePlaceholderText: m || se }), W = Ne ? Re : void 0, B = o.focus !== false, ne = C(null);
  R_(ne, B);
  let k = { ref: ne, autoFocus: B, disabled: !B, caret: E, onKeyDown: T, onPaste: M, allowPrintableKeybindings: o.allowPrintableKeybindings }, U = o.value && o.value.trim().indexOf(" ") === -1 || o.value && o.value.endsWith(" "), O = Boolean(o.argumentHint && o.value && U && o.value.startsWith("/")), I = h.shown, ke = I && o.showCursor ? { start: I.cursorOffset, end: I.cursorOffset + KZ(I.text.text.slice(I.cursorOffset)).length } : void 0, le = I !== void 0 && I.text.spans.some((f) => f.start === I.cursorOffset), X = o.showCursor && o.highlights && !le ? o.highlights.filter((A) => A.dimColor || o.cursorOffset < A.start || o.cursorOffset >= A.end) : o.highlights, H = o.leadingPill?.text ?? "", ae = H ? [{ start: 0, end: H.length - 1, color: "ide", priority: 30 }, ...(X ?? []).map((_) => ({ ..._, start: _.start + H.length, end: _.end + H.length }))] : X, K = I ? [...iko(ae ?? [], I.text), ...ako(I.text, ke)] : ae, G = K && K.length > 0 ? rko(K, u, h.renderedRowStartOffsets) : K;
  if (G && G.length > 0 && !W && !se) {
    return r(Jie, { ...k, children: [e(s, { flexShrink: 0, "aria-preserve-whitespace": true, children: e(te, { text: u, highlights: G }) }), O && r(n, { dimColor: true, wrap: "truncate-end", children: [o.value?.endsWith(" ") ? "" : " ", o.argumentHint] }), i] });
  }
  const Y = n, tt = "truncate-end", ot = o.dimColor, ce = W ? r(Q, { children: [H ? e(n, { color: "ide", children: H }) : null, e(ts, { children: W })] }) : e(n, { "aria-preserve-whitespace": true, children: e(ts, { children: u }) }), Oe = O && r(n, { dimColor: true, children: [o.value?.endsWith(" ") ? "" : " ", o.argumentHint] });
  let it;
  if (q[1] !== Y || q[2] !== i || q[3] !== o || q[4] !== ce || q[5] !== Oe) it = r(Y, { wrap: tt, dimColor: ot, children: [ce, Oe, i] }), q[1] = Y, q[2] = i, q[3] = o, q[4] = ce, q[5] = Oe, q[6] = it;
  else it = q[6];
  return e(Jie, { ...k, children: it });
}
function Ze({ placeholder: t, value: h, showCursor: i, focus: p, terminalFocus: d = true, invert: m = Goe, hidePlaceholderText: c = false }) {
  let o = void 0;
  if (t) {
    if (c) o = i && p && d ? m(" ") : "";
    else if (o = he.dim(t), i && p && d) o = t.length > 0 ? m(t[0]) + he.dim(t.slice(1)) : m(" ");
  }
  let g = h.length === 0 && Boolean(t);
  return { renderedPlaceholder: o, showPlaceholder: g };
}
function oo(tt) {
  return tt.voiceState;
}
function ro(ot) {
  return ot;
}
function io(ce) {
  return ce;
}
function Tr(t) {
  let p = w(59), [h] = Pr(), i = Pc(), d;
  if (p[0] === S) d = kF(), p[0] = d;
  else d = p[0];
  let m = d, c = rt(), g = Kh(oo) === "recording", [u, v] = oPt();
  const R = !!t.onImagePaste;
  let E;
  if (p[1] !== i || p[2] !== R) E = { isTerminalFocused: i, canPasteImages: R }, p[1] = i, p[2] = R, p[3] = E;
  else E = p[3];
  uIn(E);
  let N;
  if (p[4] !== v || p[5] !== i) N = !i ? ro : v ? () => he.hex(v.hex)(v.char) : m ? io : Goe, p[4] = v, p[5] = i, p[6] = N;
  else N = p[6];
  let T = N;
  const { value: M, onChange: D, onSubmit: F, onExit: q, onExitMessage: V, onEscapeMessage: He, historyOnClear: se, onLeftArrowOnEmpty: Ne, leftArrowConfirmHint: Re, onHistoryReset: W, onHistoryUp: B, onHistoryDown: ne, focus: k, mask: U, maskWhole: O, multiline: I, disableBackslashReturn: ke, clearOnSubmit: f, disableCtrlCClear: le } = t, A = t.showCursor && !c ? " " : "", X = t.highlightPastedText;
  let H;
  if (p[7] !== h) H = Qn("text", h), p[7] = h, p[8] = H;
  else H = p[8];
  const _ = c ? void 0 : t.virtualTexts;
  let ae;
  if (p[9] !== T || p[10] !== c || p[11] !== t.clearOnSubmit || p[12] !== t.columns || p[13] !== t.commitEdit || p[14] !== t.cursorOffset || p[15] !== t.disableBackslashReturn || p[16] !== t.disableCtrlCClear || p[17] !== t.disableCursorMovementForUpDownKeys || p[18] !== t.disableEscapeDoublePress || p[19] !== t.editRelay || p[20] !== t.focus || p[21] !== t.getInputMode || p[22] !== t.getPastedContents || p[23] !== t.highlightPastedText || p[24] !== t.historyOnClear || p[25] !== t.inlineGhostText || p[26] !== t.inputFilter || p[27] !== t.leadingPill || p[28] !== t.leftArrowConfirmHint || p[29] !== t.mask || p[30] !== t.maskWhole || p[31] !== t.maxVisibleLines || p[32] !== t.multiline || p[33] !== t.onChange || p[34] !== t.onChangeCursorOffset || p[35] !== t.onEscapeMessage || p[36] !== t.onExit || p[37] !== t.onExitMessage || p[38] !== t.onHistoryDown || p[39] !== t.onHistoryReset || p[40] !== t.onHistoryUp || p[41] !== t.onImagePaste || p[42] !== t.onLeftArrowOnEmpty || p[43] !== t.onSubmit || p[44] !== t.value || p[45] !== A || p[46] !== H || p[47] !== _) ae = { value: M, onChange: D, onSubmit: F, onExit: q, onExitMessage: V, onEscapeMessage: He, historyOnClear: se, onLeftArrowOnEmpty: Ne, leftArrowConfirmHint: Re, onHistoryReset: W, onHistoryUp: B, onHistoryDown: ne, focus: k, mask: U, maskWhole: O, multiline: I, disableBackslashReturn: ke, clearOnSubmit: f, disableCtrlCClear: le, cursorChar: A, preserveTrailingWhitespace: c, highlightPastedText: X, invert: T, themeText: H, columns: t.columns, leadingPill: t.leadingPill, maxVisibleLines: t.maxVisibleLines, onImagePaste: t.onImagePaste, disableCursorMovementForUpDownKeys: t.disableCursorMovementForUpDownKeys, disableEscapeDoublePress: t.disableEscapeDoublePress, externalOffset: t.cursorOffset, onOffsetChange: t.onChangeCursorOffset, inputFilter: t.inputFilter, editRelay: t.editRelay, commitEdit: t.commitEdit, getPastedContents: t.getPastedContents, getInputMode: t.getInputMode, inlineGhostText: t.inlineGhostText, dim: he.dim, virtualTexts: _ }, p[9] = T, p[10] = c, p[11] = t.clearOnSubmit, p[12] = t.columns, p[13] = t.commitEdit, p[14] = t.cursorOffset, p[15] = t.disableBackslashReturn, p[16] = t.disableCtrlCClear, p[17] = t.disableCursorMovementForUpDownKeys, p[18] = t.disableEscapeDoublePress, p[19] = t.editRelay, p[20] = t.focus, p[21] = t.getInputMode, p[22] = t.getPastedContents, p[23] = t.highlightPastedText, p[24] = t.historyOnClear, p[25] = t.inlineGhostText, p[26] = t.inputFilter, p[27] = t.leadingPill, p[28] = t.leftArrowConfirmHint, p[29] = t.mask, p[30] = t.maskWhole, p[31] = t.maxVisibleLines, p[32] = t.multiline, p[33] = t.onChange, p[34] = t.onChangeCursorOffset, p[35] = t.onEscapeMessage, p[36] = t.onExit, p[37] = t.onExitMessage, p[38] = t.onHistoryDown, p[39] = t.onHistoryReset, p[40] = t.onHistoryUp, p[41] = t.onImagePaste, p[42] = t.onLeftArrowOnEmpty, p[43] = t.onSubmit, p[44] = t.value, p[45] = A, p[46] = H, p[47] = _, p[48] = ae;
  else ae = p[48];
  let K = M8t(ae);
  const G = v != null;
  let pe;
  if (p[49] !== T || p[50] !== i || p[51] !== g || p[52] !== t || p[53] !== G || p[54] !== K) pe = e(I8t, { inputState: K, terminalFocus: i, highlights: t.highlights, invert: T, hidePlaceholderText: g, cursorCellPainted: G, ...t }), p[49] = T, p[50] = i, p[51] = g, p[52] = t, p[53] = G, p[54] = K, p[55] = pe;
  else pe = p[55];
  let Y;
  if (p[56] !== u || p[57] !== pe) Y = e(s, { ref: u, children: pe }), p[56] = u, p[57] = pe, p[58] = Y;
  else Y = p[58];
  return Y;
}
export {
  I8t,
  Tr,
  cIn,
  rPt,
  uIn
};
