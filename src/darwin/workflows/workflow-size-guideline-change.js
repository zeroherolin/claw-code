// darwin/workflows/workflow-size-guideline-change.js — Claude Code 2.1.310（darwin）模块 chunk-1rc0qsvd.js
import { Lo } from "../agents/chunk-44729602.js";
import { Nv } from "../shared/chunk-810598ee.js";
import { Ugn, rJs } from "./managed-settings.js";
import { VF } from "../settings/workflow-launch-exec.js";
var Ean = "usage limit", _Kn = ` (after ${Ean})`;
function van(e, i = false) {
  let l = Nv(e, i);
  if (l === void 0) return;
  return /^\d/.test(l) ? `resets at ${l}` : `resets ${l}`;
}
function d(e) {
  let i = van(e);
  return i === void 0 ? Ean : `${Ean} ${i}`;
}
function e1s(e) {
  return `Paused · ${d(e)}`;
}
function QIo(e) {
  return [["paused", d(e)], ["paused", Ean], ["paused"]];
}
import a from "process";
function r() {
  let { env: e } = a, { TERM: i, TERM_PROGRAM: l } = e;
  if (a.platform !== "win32") return i !== "linux";
  return Boolean(e.WT_SESSION) || Boolean(e.TERMINUS_SUBLIME) || e.ConEmuTask === "{cmd::Cmder}" || l === "Terminus-Sublime" || l === "vscode" || i === "xterm-256color" || i === "alacritty" || i === "rxvt-unicode" || i === "rxvt-unicode-256color" || e.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
var u = { circleQuestionMark: "(?)", questionMarkPrefix: "(?)", square: "█", squareDarkShade: "▓", squareMediumShade: "▒", squareLightShade: "░", squareTop: "▀", squareBottom: "▄", squareLeft: "▌", squareRight: "▐", squareCenter: "■", bullet: "●", dot: "․", ellipsis: "…", pointerSmall: "›", triangleUp: "▲", triangleUpSmall: "▴", triangleDown: "▼", triangleDownSmall: "▾", triangleLeftSmall: "◂", triangleRightSmall: "▸", home: "⌂", heart: "♥", musicNote: "♪", musicNoteBeamed: "♫", arrowUp: "↑", arrowDown: "↓", arrowLeft: "←", arrowRight: "→", arrowLeftRight: "↔", arrowUpDown: "↕", almostEqual: "≈", notEqual: "≠", lessOrEqual: "≤", greaterOrEqual: "≥", identical: "≡", infinity: "∞", subscriptZero: "₀", subscriptOne: "₁", subscriptTwo: "₂", subscriptThree: "₃", subscriptFour: "₄", subscriptFive: "₅", subscriptSix: "₆", subscriptSeven: "₇", subscriptEight: "₈", subscriptNine: "₉", oneHalf: "½", oneThird: "⅓", oneQuarter: "¼", oneFifth: "⅕", oneSixth: "⅙", oneEighth: "⅛", twoThirds: "⅔", twoFifths: "⅖", threeQuarters: "¾", threeFifths: "⅗", threeEighths: "⅜", fourFifths: "⅘", fiveSixths: "⅚", fiveEighths: "⅝", sevenEighths: "⅞", line: "─", lineBold: "━", lineDouble: "═", lineDashed0: "┄", lineDashed1: "┅", lineDashed2: "┈", lineDashed3: "┉", lineDashed4: "╌", lineDashed5: "╍", lineDashed6: "╴", lineDashed7: "╶", lineDashed8: "╸", lineDashed9: "╺", lineDashed10: "╼", lineDashed11: "╾", lineDashed12: "−", lineDashed13: "–", lineDashed14: "‐", lineDashed15: "⁃", lineVertical: "│", lineVerticalBold: "┃", lineVerticalDouble: "║", lineVerticalDashed0: "┆", lineVerticalDashed1: "┇", lineVerticalDashed2: "┊", lineVerticalDashed3: "┋", lineVerticalDashed4: "╎", lineVerticalDashed5: "╏", lineVerticalDashed6: "╵", lineVerticalDashed7: "╷", lineVerticalDashed8: "╹", lineVerticalDashed9: "╻", lineVerticalDashed10: "╽", lineVerticalDashed11: "╿", lineDownLeft: "┐", lineDownLeftArc: "╮", lineDownBoldLeftBold: "┓", lineDownBoldLeft: "┒", lineDownLeftBold: "┑", lineDownDoubleLeftDouble: "╗", lineDownDoubleLeft: "╖", lineDownLeftDouble: "╕", lineDownRight: "┌", lineDownRightArc: "╭", lineDownBoldRightBold: "┏", lineDownBoldRight: "┎", lineDownRightBold: "┍", lineDownDoubleRightDouble: "╔", lineDownDoubleRight: "╓", lineDownRightDouble: "╒", lineUpLeft: "┘", lineUpLeftArc: "╯", lineUpBoldLeftBold: "┛", lineUpBoldLeft: "┚", lineUpLeftBold: "┙", lineUpDoubleLeftDouble: "╝", lineUpDoubleLeft: "╜", lineUpLeftDouble: "╛", lineUpRight: "└", lineUpRightArc: "╰", lineUpBoldRightBold: "┗", lineUpBoldRight: "┖", lineUpRightBold: "┕", lineUpDoubleRightDouble: "╚", lineUpDoubleRight: "╙", lineUpRightDouble: "╘", lineUpDownLeft: "┤", lineUpBoldDownBoldLeftBold: "┫", lineUpBoldDownBoldLeft: "┨", lineUpDownLeftBold: "┥", lineUpBoldDownLeftBold: "┩", lineUpDownBoldLeftBold: "┪", lineUpDownBoldLeft: "┧", lineUpBoldDownLeft: "┦", lineUpDoubleDownDoubleLeftDouble: "╣", lineUpDoubleDownDoubleLeft: "╢", lineUpDownLeftDouble: "╡", lineUpDownRight: "├", lineUpBoldDownBoldRightBold: "┣", lineUpBoldDownBoldRight: "┠", lineUpDownRightBold: "┝", lineUpBoldDownRightBold: "┡", lineUpDownBoldRightBold: "┢", lineUpDownBoldRight: "┟", lineUpBoldDownRight: "┞", lineUpDoubleDownDoubleRightDouble: "╠", lineUpDoubleDownDoubleRight: "╟", lineUpDownRightDouble: "╞", lineDownLeftRight: "┬", lineDownBoldLeftBoldRightBold: "┳", lineDownLeftBoldRightBold: "┯", lineDownBoldLeftRight: "┰", lineDownBoldLeftBoldRight: "┱", lineDownBoldLeftRightBold: "┲", lineDownLeftRightBold: "┮", lineDownLeftBoldRight: "┭", lineDownDoubleLeftDoubleRightDouble: "╦", lineDownDoubleLeftRight: "╥", lineDownLeftDoubleRightDouble: "╤", lineUpLeftRight: "┴", lineUpBoldLeftBoldRightBold: "┻", lineUpLeftBoldRightBold: "┷", lineUpBoldLeftRight: "┸", lineUpBoldLeftBoldRight: "┹", lineUpBoldLeftRightBold: "┺", lineUpLeftRightBold: "┶", lineUpLeftBoldRight: "┵", lineUpDoubleLeftDoubleRightDouble: "╩", lineUpDoubleLeftRight: "╨", lineUpLeftDoubleRightDouble: "╧", lineUpDownLeftRight: "┼", lineUpBoldDownBoldLeftBoldRightBold: "╋", lineUpDownBoldLeftBoldRightBold: "╈", lineUpBoldDownLeftBoldRightBold: "╇", lineUpBoldDownBoldLeftRightBold: "╊", lineUpBoldDownBoldLeftBoldRight: "╉", lineUpBoldDownLeftRight: "╀", lineUpDownBoldLeftRight: "╁", lineUpDownLeftBoldRight: "┽", lineUpDownLeftRightBold: "┾", lineUpBoldDownBoldLeftRight: "╂", lineUpDownLeftBoldRightBold: "┿", lineUpBoldDownLeftBoldRight: "╃", lineUpBoldDownLeftRightBold: "╄", lineUpDownBoldLeftBoldRight: "╅", lineUpDownBoldLeftRightBold: "╆", lineUpDoubleDownDoubleLeftDoubleRightDouble: "╬", lineUpDoubleDownDoubleLeftRight: "╫", lineUpDownLeftDoubleRightDouble: "╪", lineCross: "╳", lineBackslash: "╲", lineSlash: "╱" }, f = { tick: "✔", info: "ℹ", warning: "⚠", cross: "✘", squareSmall: "◻", squareSmallFilled: "◼", circle: "◯", circleFilled: "◉", circleDotted: "◌", circleDouble: "◎", circleCircle: "ⓞ", circleCross: "ⓧ", circlePipe: "Ⓘ", radioOn: "◉", radioOff: "◯", checkboxOn: "☒", checkboxOff: "☐", checkboxCircleOn: "ⓧ", checkboxCircleOff: "Ⓘ", pointer: "❯", triangleUpOutline: "△", triangleLeft: "◀", triangleRight: "▶", lozenge: "◆", lozengeOutline: "◇", hamburger: "☰", smiley: "㋡", mustache: "෴", star: "★", play: "▶", nodejs: "⬢", oneSeventh: "⅐", oneNinth: "⅑", oneTenth: "⅒" }, h = { tick: "√", info: "i", warning: "‼", cross: "×", squareSmall: "□", squareSmallFilled: "■", circle: "( )", circleFilled: "(*)", circleDotted: "( )", circleDouble: "( )", circleCircle: "(○)", circleCross: "(×)", circlePipe: "(│)", radioOn: "(*)", radioOff: "( )", checkboxOn: "[×]", checkboxOff: "[ ]", checkboxCircleOn: "(×)", checkboxCircleOff: "( )", pointer: ">", triangleUpOutline: "∆", triangleLeft: "◄", triangleRight: "►", lozenge: "♦", lozengeOutline: "◊", hamburger: "≡", smiley: "☺", mustache: "┌─┐", star: "✶", play: "►", nodejs: "♦", oneSeventh: "1/7", oneNinth: "1/9", oneTenth: "1/10" }, D = { ...u, ...f }, p = { ...u, ...h }, g = r(), w = g ? D : p, ne = w, m = Object.entries(f);
function oht() {
  return VF()?.settings.workflowSizeGuideline !== void 0;
}
function kan(e) {
  return Ugn(VF()?.settings.workflowSizeGuideline) ?? Ugn(e);
}
function dDr(e, i) {
  let l = kan(e);
  return l === void 0 ? { size: i, isDefault: true } : { size: l, isDefault: false };
}
function SKn(e, i) {
  let l = Lo();
  return l.sessionStartWorkflowSizeGuideline ??= dDr(e, i), l.sessionStartWorkflowSizeGuideline;
}
function ZIo(e, i) {
  let { size: l, isDefault: o } = SKn(e, i);
  if (l === "unrestricted") return "";
  return `

${rJs(l, o)}`;
}
function t1s(e, i, l) {
  let o = dDr(i, l).size, s;
  for (let n = e.length - 1; n >= 0; n--) {
    let t = e[n];
    if (t?.type === "attachment" && t.attachment.type === "workflow_size_guideline_change") {
      s = t.attachment.size;
      break;
    }
  }
  let c = s ?? SKn(i, l).size;
  if (o !== c) return [{ type: "workflow_size_guideline_change", size: o }];
  return [];
}
export {
  Ean,
  QIo,
  SKn,
  ZIo,
  _Kn,
  dDr,
  e1s,
  kan,
  ne,
  oht,
  t1s,
  van
};
