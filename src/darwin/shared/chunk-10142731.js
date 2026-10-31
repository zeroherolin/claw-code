// darwin/shared/chunk-10142731.js — Claude Code 2.1.310（darwin）模块 chunk-5wbz5tdm.js
import { rl } from "./chunk-d4196a83.js";
var Jy = { CURSOR_VISIBLE: 25, ALT_SCREEN: 47, ALT_SCREEN_CLEAR: 1049, MOUSE_NORMAL: 1e3, MOUSE_BUTTON: 1002, MOUSE_ANY: 1003, MOUSE_SGR: 1006, MOUSE_SGR_PIXELS: 1016, FOCUS_EVENTS: 1004, BRACKETED_PASTE: 2004, THEME_NOTIFY: 2031, SYNCHRONIZED_UPDATE: 2026, WIN32_INPUT_MODE: 9001 };
function zW(E) {
  return rl(`?${E}h`);
}
function t9(E) {
  return rl(`?${E}l`);
}
var pYt = zW(Jy.SYNCHRONIZED_UPDATE), tdt = t9(Jy.SYNCHRONIZED_UPDATE), Gps = zW(Jy.BRACKETED_PASTE), QIn = t9(Jy.BRACKETED_PASTE), ZIn = zW(Jy.FOCUS_EVENTS), EPt = t9(Jy.FOCUS_EVENTS), zps = zW(Jy.THEME_NOTIFY), eOn = t9(Jy.THEME_NOTIFY), gN = zW(Jy.CURSOR_VISIBLE), hN = t9(Jy.CURSOR_VISIBLE), vPt = zW(Jy.ALT_SCREEN_CLEAR), kPt = t9(Jy.ALT_SCREEN_CLEAR), tOn = t9(Jy.WIN32_INPUT_MODE), S = zW(Jy.MOUSE_NORMAL) + zW(Jy.MOUSE_BUTTON) + zW(Jy.MOUSE_ANY) + zW(Jy.MOUSE_SGR), _ = zW(Jy.MOUSE_NORMAL) + zW(Jy.MOUSE_SGR), Wwe = t9(Jy.MOUSE_SGR) + t9(Jy.MOUSE_ANY) + t9(Jy.MOUSE_BUTTON) + t9(Jy.MOUSE_NORMAL), Vps = zW(Jy.MOUSE_SGR_PIXELS), Kps = t9(Jy.MOUSE_SGR_PIXELS) + zW(Jy.MOUSE_SGR);
function nOn(E) {
  switch (E) {
    case "full":
      return S;
    case "scroll":
      return _;
    case "off":
      return "";
  }
}
export {
  EPt,
  Gps,
  Jy,
  Kps,
  QIn,
  Vps,
  Wwe,
  ZIn,
  eOn,
  gN,
  hN,
  kPt,
  nOn,
  pYt,
  t9,
  tOn,
  tdt,
  vPt,
  zW,
  zps
};
