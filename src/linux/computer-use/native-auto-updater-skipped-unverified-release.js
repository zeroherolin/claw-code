// linux/computer-use/native-auto-updater-skipped-unverified-release.js — Claude Code 2.1.310（linux）模块 chunk-gxc8pd9p.js
import { __asset_src } from "../../runtime/assets.js";
import { Ne } from "../fs/async-hooks.93b1.js";
import { b, c } from "../agents/third-party.js";
import { E, Er } from "../telemetry/anthropic-workspace-id.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { bX } from "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { i } from "../shared/environment.js";
import { w } from "../ui/chunk-0ed4c357.js";
import { Md } from "../shared/chunk-d52cd1ac.js";
import { an } from "../shared/chunk-76877d92.js";
import { Gie } from "../ui/clawd-background.js";
import { gy } from "../terminal/chunk-2969c20f.js";
import { F_, yv, pa, k, ue, ebe } from "../settings/global-config-and-gates.js";
import { e8, tGe, lhe, vqn, Eqn } from "../terminal/wl-copy.js";
import { Me, Zw } from "../shared/chunk-be0ce119.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { oy } from "../mcp/allowed-warning.js";
import { ko, Q9o } from "../shell/invalid-type.js";
import { le } from "../shared/chunk-4563156b.js";
import { fe } from "../shared/async-hooks.5238.js";
import { ct } from "../git/utf8-keep-bom.js";
import { vu } from "../fs/async-hooks.7959.js";
import { pt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { qi } from "../shared/async-hooks.b037.js";
import { js } from "../settings/chunk-9121eb73.js";
import { $K } from "../vendor/mcp-sdk/chunk-384e0b2c.js";
import { SCo, TNt, T0s } from "../core/conversation-engine.js";
import { Blt, AIn, y6e } from "../shared/chunk-4ef913a6.js";
import { fn, rt, s, n, SIn, wk, Jie, ja, Wee, Ta, Kr } from "../telemetry/render-glyph-cardinality.js";
import { VI, kF } from "../terminal/ink-renderer.js";
import { FQ } from "../fs/chunk-dacd9872.js";
import { Cpe, Gno, xi, oPt } from "../terminal/left-arrow-blocked.js";
import { Te } from "../shared/chunk-bdaaea45.js";
import { xe } from "../shared/chunk-9e685b7f.js";
import { jno } from "../shared/vim-insert-remap.js";
import { odn, yNr, _Nr } from "../context/team-memory-sync.js";
import { K, Gn } from "../shared/chunk-e4a3aa33.js";
import { To } from "../shared/chunk-4837e50a.js";
import { qX } from "../shared/chunk-cc13967f.js";
import { Es, $R } from "../shared/chunk-258385dc.js";
import { G2 } from "../shared/above-prompt-select.js";
import { Kh, hIn, fUe } from "./chunk-c206db8f.js";
import { G$r, VC, X5n, U1, ZGe } from "../telemetry/keybinding-customization-release.js";
import { UR, x_, Yg } from "../shared/xterm-ghostty.js";
import { QG } from "../context/tool-result-clearing-after-idle-server-report.js";
import { zd } from "../remote/chunk-8734517b.js";
import { spt, F1e, pnn, yvo, apt, kjn, U1e, K9e, bPs, V9e, lpt, PCr, mnn, q9e, dpt } from "../fs/auto-updater-windows-npm-in-wsl.js";
import { G9e, rpt, N1e, mvo, $1e } from "../fs/npm-global.js";
import { vL, uvo, unn, fnn, W9e, YHt } from "../telemetry/version-lock-acquired.js";
import { mt } from "../ui/aria-label.132c.js";
import { Mv } from "../shared/chunk-1d395236.js";
import { Wd } from "../shared/chunk-d08b9350.js";
import { lw } from "../shared/chunk-15efe309.js";
import { j6 } from "../shared/chunk-b103ac7f.js";
import { Vh } from "../telemetry/chunk-56c542d7.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { de, P, Bo, Xt, ee, C, y, kt, j } from "../vendor/react/chunk-9a0b1ced.js";
import { o, v, u, A } from "../vendor/zod/string-format.js";
import { VZ, bui } from "../shared/chunk-5acf247e.js";
import { Ce, S, vn } from "../vendor/react/chunk-0b0bf45d.js";
function O6t(d) {
  if (d.wheelUp || d.wheelDown || d.escape) return false;
  if (d.pageUp || d.pageDown) return false;
  if ((d.home || d.end) && d.ctrl) return false;
  if ((d.leftArrow || d.rightArrow || d.upArrow || d.downArrow || d.home || d.end) && (d.shift || d.meta || d.super)) return false;
  return true;
}
function mo(d) {
  if (d.name === "escape" || d.name === "pageup" || d.name === "pagedown") return false;
  if ((d.name === "home" || d.name === "end") && d.ctrl) return false;
  if ((d.name === "left" || d.name === "right" || d.name === "up" || d.name === "down" || d.name === "home" || d.name === "end") && (d.shift || d.meta || d.superKey)) return false;
  return true;
}
function wds(d, h, R) {
  return (x) => {
    if (!d.hasSelection()) return;
    if (x.key === "c" && !x.meta && (x.ctrl || x.superKey)) {
      if (h.peek() !== null) d.clearSelection();
      else {
        let T = d.copySelection();
        if (T) R?.(T);
      }
      if (x.ctrl && !x.shift) Gie();
      x.consume();
      return;
    }
    if (mo(x)) d.clearSelection();
  };
}
function g5e(d, h = true) {
  an({ "selection:clear": () => {
    if (!d.hasSelection()) return false;
    d.clearSelection(), Gie();
  } }, { context: "Scroll", isActive: h });
}
j();
function cxn(d) {
  let h = lhe(), R = VZ(d), x = R === 1 ? "char" : "chars", T, M;
  switch (h) {
    case "native":
      T = `copied ${R} ${x} to clipboard`, M = `copied ${R} ${x}`;
      break;
    case "tmux-buffer":
      T = `copied ${R} ${x} to tmux buffer · paste with prefix + ]`, M = "copied · paste with prefix + ]";
      break;
    case "osc52":
      if (e8()) {
        T = `couldn't copy ${R} ${x} · select with ${tGe()} held, then use your terminal's Copy`;
        break;
      }
      T = `sent ${R} ${x} via OSC 52 · if paste fails, hold ${tGe()} while selecting for native copy`, M = `sent ${R} ${x} via OSC 52`;
      break;
  }
  let O = Eqn(d);
  if (O) T = `⚠ ${O} · ${T}`;
  return { key: "selection-copied", kind: "feedback", text: T, color: lw() ? O ? "warning" : void 0 : "suggestion", priority: "immediate", timeoutMs: O ? 6e3 : h === "native" ? 2e3 : 4e3, ...O || M === void 0 ? {} : { row1Hint: M } };
}
function h5e(d, h, R) {
  let x = C(false), T = C(null), [M] = y(() => ({ peek: () => T.current, invalidate: () => {
    T.current = null;
  } })), O = Bo((I) => R?.(I));
  return P(() => {
    if (!h) return;
    return vqn(), d.subscribe(() => {
      let V = d.getState(), Y = d.hasSelection();
      if (V?.isDragging) {
        x.current = false, T.current = null;
        return;
      }
      if (!Y) {
        x.current = false, T.current = null;
        return;
      }
      if (x.current) {
        T.current = null;
        return;
      }
      if (!(ue().copyOnSelect ?? true)) return;
      let F = d.copySelectionNoClear();
      if (!F || !F.trim()) {
        x.current = true;
        return;
      }
      x.current = true, T.current = F, g("clipboard_write"), O(F);
    });
  }, [h, d]), M;
}
function y5e(d) {
  let h = Zw();
  P(() => {
    d.setSelectionBgColor(h.selectionBg);
  }, [d, h.selectionBg]);
}
j();
import go from "path";
var ho = "at_mentioned", vo = p(() => u({ method: A(ho), params: u({ filePath: o(), lineStart: v().optional(), lineEnd: v().optional() }) }));
function M6t(d, h) {
  let R = ee(() => QG(d), [d]), x = C(void 0);
  P(() => {
    if (x.current = R, !R) return;
    $K(R, vo(), (T) => {
      if (x.current !== R) return;
      try {
        let M = T.params, O = M.lineStart !== void 0 ? M.lineStart + 1 : void 0, I = M.lineEnd !== void 0 ? M.lineEnd + 1 : void 0;
        h({ filePath: M.filePath, lineStart: O, lineEnd: I }), g("ide_at_mention");
      } catch (M) {
        l(M), m("ide_at_mention", "ide_at_mention_failed");
      }
    });
  }, [R, h]);
}
function D6t(d, h) {
  let R = go.relative(fe(), d.filePath), x;
  if (d.lineStart && d.lineEnd) x = d.lineStart === d.lineEnd ? `@${R}#L${d.lineStart} ` : `@${R}#L${d.lineStart}-${d.lineEnd} `;
  else x = `@${R} `;
  if (h !== void 0 && !/\s/.test(h)) x = ` ${x}`;
  return x;
}
j();
function PX() {
  return js("editorMode", "normal").value === "vim";
}
function NZr() {
  if (Cpe()) return "shift + ⏎ for newline";
  return Gno() ? "\\⏎ for newline" : "backslash (\\) + return (⏎) for newline";
}
var bo = /* @__PURE__ */ new Set(["escape", "return", "enter", "tab", "backspace", "delete", "up", "down", "left", "right", "pageup", "pagedown", "home", "end", "insert", "clear", "center", "undefined", "mouse", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12"]);
function $Zr(d, h) {
  if (h.ctrl || h.meta) return false;
  if (bo.has(d)) return false;
  return d.length > 0 && !/^\s/.test(d);
}
function FZr(d) {
  return d.length > 0 && ".,?!:;)]".includes(d.charAt(0));
}
function So(d) {
  if (d.ctrl && (d.key === "k" || d.key === "u" || d.key === "w")) return true;
  if ((d.meta || d.ctrl) && d.key === "backspace") return true;
  if (d.meta && !d.ctrl && d.key.toLowerCase() === "d") return true;
  return false;
}
function yo(d) {
  return (d.ctrl || d.meta) && d.key === "y";
}
var wo = /* @__PURE__ */ new Set(["pageup", "pagedown", "insert", "wheelup", "wheeldown", "mouse", "clear", "enter", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12"]);
function Q_({ isActive: d, onExit: h, onCancel: R, onExitUp: x, onExitDown: T, columns: M, passthroughCtrlKeys: O = [], initialQuery: I = "", buffer: V, backspaceExitsOnEmpty: Y = true, multiline: N = false, onSpaceOnEmpty: F, onTabOnEmpty: pe, honorEditorMode: oe = false }) {
  let ne = y6e(), { columns: G } = Te(), ye = M ?? G, [Ae, D] = y(I), [J, be] = y(I.length), Se = xe(V, (_) => _.query), te = xe(V, (_) => _.cursorOffset), se = Se ?? Ae, Z = te ?? J, H = C(Ae), re = C(J), L = ee(() => V ? { get current() {
    return V.getSnapshot().query;
  }, set current(_) {
    V.setQueryAndCursor(_, V.getSnapshot().cursorOffset);
  } } : H, [V]), z = ee(() => V ? { get current() {
    return V.getSnapshot().cursorOffset;
  }, set current(_) {
    V.setQueryAndCursor(V.getSnapshot().query, _);
  } } : re, [V]), q = de((_) => {
    if (V) {
      V.setQueryAndCursor(_, V.getSnapshot().cursorOffset);
      return;
    }
    H.current = _, D(_);
  }, [V]), B = de((_) => {
    if (V) {
      V.setQueryAndCursor(V.getSnapshot().query, _);
      return;
    }
    re.current = _, be(_);
  }, [V]), we = de((_) => {
    q(_), B(_.length);
  }, [q, B]), ie = de((_) => {
    if (!d || !N || _.name !== "return") return false;
    let me = z.current;
    return me > 0 && L.current[me - 1] === "\\" || _.shift || _.meta;
  }, [d, N]), ae = (_) => {
    if (!d) return;
    let me = L.current, _e = z.current, X = xi.fromText(me, ye, _e);
    if (!So(_) && !yo(_)) ne.dispatch({ type: "interrupt" });
    if (_.ctrl && O.includes(_.key.toLowerCase())) return;
    if (_.name === "return") {
      if (_.preventDefault(), ie(_)) {
        if (me[_e - 1] === "\\") {
          q(me.slice(0, _e - 1) + `
` + me.slice(_e));
          return;
        }
        q(me.slice(0, _e) + `
` + me.slice(_e)), B(_e + 1);
        return;
      }
      h();
      return;
    }
    if (N && (_.name === "enter" || _.ctrl && !_.shift && !_.meta && _.name === "j")) {
      _.preventDefault();
      let U = X.insert(`
`);
      q(U.text), B(U.offset);
      return;
    }
    if (_.name === "down") {
      if (_.preventDefault(), N) {
        let U = X.down();
        if (!U.equals(X)) {
          B(U.offset);
          return;
        }
      }
      if (T) T();
      else if (!N) h();
      return;
    }
    if (_.name === "up") {
      if (_.preventDefault(), N) {
        let U = X.up();
        if (!U.equals(X)) {
          B(U.offset);
          return;
        }
      }
      if (x) x();
      return;
    }
    if (_.name === "escape") {
      if (_.preventDefault(), R) R();
      else if (me.length > 0) q(""), B(0);
      else h();
      return;
    }
    if (_.name === "backspace") {
      if (_.preventDefault(), _.meta || _.ctrl) {
        let { cursor: Ee, killed: Ue } = X.backwardKillWord();
        ne.dispatch({ type: "kill", text: Ue, direction: "prepend" }), q(Ee.text), B(Ee.offset);
        return;
      }
      if (me.length === 0) {
        if (Y) (R ?? h)();
        return;
      }
      let U = X.backspace();
      q(U.text), B(U.offset);
      return;
    }
    if (_.name === "delete") {
      _.preventDefault();
      let U = X.del();
      q(U.text), B(U.offset);
      return;
    }
    if (_.name === "left" && (_.ctrl || _.meta || _.fn)) {
      _.preventDefault(), B(X.backwardWord().offset);
      return;
    }
    if (_.name === "right" && (_.ctrl || _.meta || _.fn)) {
      _.preventDefault(), B(X.forwardWord().offset);
      return;
    }
    if (_.name === "left") {
      _.preventDefault();
      let U = X.left();
      B(U.offset);
      return;
    }
    if (_.name === "right") {
      _.preventDefault();
      let U = X.right();
      B(U.offset);
      return;
    }
    if (_.name === "home") {
      _.preventDefault(), B(X.startOfLine().offset);
      return;
    }
    if (_.name === "end") {
      _.preventDefault(), B(X.endOfLine().offset);
      return;
    }
    if (_.ctrl) {
      switch (_.preventDefault(), _.key.toLowerCase()) {
        case "a":
          B(X.startOfLogicalLine().offset);
          return;
        case "e":
          B(X.endOfLogicalLine().offset);
          return;
        case "b":
          B(X.left().offset);
          return;
        case "f":
          B(X.right().offset);
          return;
        case "d": {
          if (me.length === 0) {
            (R ?? h)();
            return;
          }
          let U = X.del();
          q(U.text), B(U.offset);
          return;
        }
        case "h": {
          if (me.length === 0) {
            if (Y) (R ?? h)();
            return;
          }
          let U = X.backspace();
          q(U.text), B(U.offset);
          return;
        }
        case "k": {
          let { cursor: U, killed: Ee } = X.deleteToLineEnd();
          ne.dispatch({ type: "kill", text: Ee, direction: "append" }), q(U.text), B(U.offset);
          return;
        }
        case "u": {
          let { cursor: U, killed: Ee } = X.deleteToLineStart();
          ne.dispatch({ type: "kill", text: Ee, direction: "prepend" }), q(U.text), B(U.offset);
          return;
        }
        case "w": {
          let { cursor: U, killed: Ee } = X.deleteWORDBefore();
          ne.dispatch({ type: "kill", text: Ee, direction: "prepend" }), q(U.text), B(U.offset);
          return;
        }
        case "y": {
          let U = Blt(ne.state);
          if (U.length > 0) {
            let Ee = X.offset, Ue = X.insert(U);
            ne.dispatch({ type: "yank", start: Ee, length: U.length }), q(Ue.text), B(Ue.offset);
          }
          return;
        }
        case "g":
        case "c":
          if (R) {
            R();
            return;
          }
      }
      return;
    }
    if (_.meta) {
      switch (_.preventDefault(), _.key.toLowerCase()) {
        case "b":
          B(X.backwardWord().offset);
          return;
        case "f":
          B(X.forwardWord().offset);
          return;
        case "d": {
          let { cursor: U, killed: Ee } = X.killWord();
          ne.dispatch({ type: "kill", text: Ee, direction: "append" }), q(U.text), B(U.offset);
          return;
        }
        case "y": {
          let U = AIn(ne.state);
          if (U) {
            let { text: Ee, start: Ue, length: qe } = U;
            ne.dispatch({ type: "yankPop" });
            let lt = me.slice(0, Ue), Fe = me.slice(Ue + qe), Xe = lt + Ee + Fe, Ve = Ue + Ee.length;
            ne.dispatch({ type: "updateYankLength", length: Ee.length }), q(Xe), B(Ve);
          }
          return;
        }
      }
      return;
    }
    if (_.name === "tab") {
      if (_.preventDefault(), pe && me === "") pe();
      return;
    }
    if (F && _.key === " " && me === "") {
      _.preventDefault(), F();
      return;
    }
    if (_.key.length >= 1 && !wo.has(_.name)) {
      _.preventDefault();
      let U = X.insert(_.key);
      q(U.text), B(U.offset);
    }
  }, Re = oe && PX(), ce = jno({ value: se, onChange: q, columns: ye, onHistoryUp: x, onHistoryDown: T, isActive: Re && d }), ke = { handleKeyDown: ae, offset: Z, setOffset: B };
  return { query: se, queryRef: L, setQuery: we, cursorOffset: Z, cursorOffsetRef: z, willInsertNewline: ie, setCursorOffset: B, handleKeyDown: (_) => {
    if (!Re) {
      ae(_);
      return;
    }
    if (!d) return;
    if (_.name === "escape" && ce.mode === "NORMAL") {
      ce.handleKeyDown(_, ke), ae(_);
      return;
    }
    ce.handleKeyDown(_, ke);
  }, handlePaste: (_) => {
    if (!d || _.text.length === 0) return;
    _.preventDefault(), ce.cancelPendingRemap();
    let me = N ? _.text.replace(/\r\n|\r/g, `
`) : _.text.split(/\r\n|\r|\n/, 2)[0] ?? "";
    if (me.length === 0) return;
    let X = xi.fromText(L.current, ye, z.current).insert(me);
    q(X.text), B(X.offset);
  }, vimMode: Re ? ce.mode : void 0, enterInsertMode: () => {
    if (Re) ce.setMode("INSERT", ke);
  } };
}
j();
function _5e() {
  let d = $R();
  return xe(d && qX.of(d), (h) => h.loginCompleted) ?? 0;
}
function tL() {
  let d = K((x) => odn(x.settings)), h = _5e(), R = ee(() => d && yNr(), [h, d]);
  return P(() => {
    if (!qi().claim("voice_init_gate")) return;
    a("tengu_voice_init_gate", { user_intent_store: d, user_intent_disk: odn(pt()), has_voice_auth: yNr(), voice_mode_allowed: _Nr(), auth_version: h });
  }, []), R && _Nr();
}
j();
function $o(rs) {
  return rs.voiceState;
}
function Fo(ns) {
  return ns.settings.voice?.mode ?? "hold";
}
function Ho(Gr) {
  if (!Gr.voiceWarmingUp) {
    return Gr;
  }
  return { ...Gr, voiceWarmingUp: false };
}
function Wo(qr) {
  if (!qr.awaitingVoiceSubmitDoubleTap) {
    return qr;
  }
  return { ...qr, awaitingVoiceSubmitDoubleTap: false };
}
function jo(Xr) {
  if (!Xr.voiceWarmingUp) {
    return Xr;
  }
  return { ...Xr, voiceWarmingUp: false };
}
function zo(Jr) {
  if (!Jr.awaitingVoiceSubmitDoubleTap) {
    return Jr;
  }
  return { ...Jr, awaitingVoiceSubmitDoubleTap: false };
}
function Qo(Zr) {
  if (!Zr.awaitingVoiceSubmitDoubleTap) {
    return Zr;
  }
  return { ...Zr, awaitingVoiceSubmitDoubleTap: false };
}
function Yo(en) {
  if (!en.voiceWarmingUp) {
    return en;
  }
  return { ...en, voiceWarmingUp: false };
}
function Go(tn) {
  if (tn.voiceWarmingUp) {
    return tn;
  }
  return { ...tn, voiceWarmingUp: true };
}
var Sn = import.meta.require("./use-voice.js"), ht = 120, rn = 2e3, nn = 5, Wt = 2, on = 300;
function sn(d, h) {
  if ((d.key === "return" ? "enter" : d.key.toLowerCase()) !== h.key) return false;
  if (d.ctrl !== h.ctrl) return false;
  if (d.shift !== h.shift) return false;
  if (d.meta !== (h.alt || h.meta)) return false;
  if (d.superKey !== h.super) return false;
  return true;
}
function cn(d) {
  return VC.changed.subscribe(d);
}
function un() {
  return X5n(VC);
}
function Eat({ composer: d, isActive: h = true }) {
  let { addNotification: R } = To(), x = hIn(), T = fUe(), M = C(null), O = C(""), I = C(null), V = de((D, { char: J = " ", anchor: be = false, floor: Se = 0 } = {}) => {
    let { value: te, cursorOffset: se } = d, Z = te.slice(0, se), H = te.slice(se), re = J === " " ? bX(Z) : Z, L = 0;
    while (L < re.length && re[re.length - 1 - L] === J) L++;
    let z = Math.max(0, Math.min(L - Se, D)), q = L - z, B = Z.slice(0, Z.length - z), we = "";
    if (be) {
      if (M.current = B, O.current = H, H.length > 0 && !/^\s/.test(H)) we = " ";
    }
    let ie = B + we + H;
    if (be) I.current = ie;
    if (ie === te && z === 0) return q;
    return d.setValueWithCursor(ie, B.length), q;
  }, [d]), Y = de(() => {
    let D = M.current;
    if (D === null) return;
    let J = O.current;
    if (M.current = null, O.current = "", d.value !== I.current) return;
    d.setValueWithCursor(D + J, D.length);
  }, [d]), N = tL(), F = K((D) => D.settings.voice?.autoSubmit === true), pe = K((D) => D.settings.voice?.mode ?? "hold"), oe = Kh((D) => D.voiceState), ne = Kh((D) => D.voiceInterimTranscript);
  P(() => {
    if (h && T().voiceState === "recording" && M.current === null) {
      let { value: D, cursorOffset: J } = d;
      M.current = D.slice(0, J), O.current = D.slice(J), I.current = D;
    }
    if (oe === "idle") M.current = null, O.current = "", I.current = null;
  }, [oe, T, d, h]), P(() => {
    if (M.current === null) return;
    let D = M.current, J = O.current;
    if (d.value !== I.current) return;
    let be = D.length > 0 && !/\s$/.test(D) && ne.length > 0, Se = J.length > 0 && !/^\s/.test(J), te = be ? " " : "", se = Se ? " " : "", Z = D + te + ne + se + J, H = D.length + te.length + ne.length;
    d.setValueWithCursor(Z, H), I.current = Z;
  }, [ne, d]);
  let G = de((D) => {
    let J = M.current;
    if (J === null) {
      m("voice_transcript_insert", "no_anchor");
      return;
    }
    let be = O.current;
    if (d.value !== I.current) {
      f("voice_transcript_insert", "input_diverged");
      return;
    }
    let Se = J.length > 0 && !/\s$/.test(J) && D.length > 0, te = be.length > 0 && !/^\s/.test(be) && D.length > 0, se = Se ? " " : "", Z = te ? " " : "", H = J + se + D + Z + be, re = J.length + se.length + D.length;
    d.setValueWithCursor(H, re), I.current = H, g("voice_transcript_insert"), M.current = J + se + D;
    let L = pe === "tap" || F, z = d.submit !== void 0 && L && bui(D) >= 3 && d.submit(H, true);
    x((q) => {
      let B = d.submit !== void 0 && pe !== "tap" && !z;
      if (q.awaitingVoiceSubmitDoubleTap === B) return q;
      return { ...q, awaitingVoiceSubmitDoubleTap: B };
    });
  }, [d, x, F, pe]), ye = Sn.useVoice({ onTranscript: G, onError: (D) => {
    R({ key: "voice-error", kind: "warning", text: D, color: "error", priority: "immediate", timeoutMs: 1e4 });
  }, enabled: N, focusMode: false, mode: pe }), Ae = ee(() => {
    if (M.current === null) return null;
    if (ne.length === 0) return null;
    let D = M.current, J = D.length > 0 && !/\s$/.test(D) && ne.length > 0, be = D.length + (J ? 1 : 0), Se = be + ne.length;
    return { start: be, end: Se };
  }, [ne]);
  return Xt(() => {
    d.setInterimRange?.(Ae);
  }, [d, Ae]), { stripTrailing: V, resetAnchor: Y, handleKeyEvent: ye.handleKeyEvent, cancelRecording: ye.cancelRecording, interimRange: Ae };
}
function b5e(d) {
  let te = w(32), { voiceHandleKeyEvent: h, voiceCancelRecording: R, stripTrailing: x, resetAnchor: T, isActive: M, composerTakesTypedKeys: O, composer: I } = d, V = O === void 0 ? true : O, Y = fUe(), N = hIn(), F = Md(), pe = G2(), oe = tL(), ne = Kh($o), G = K(Fo), ye = fn(), Ae = kt(cn, un), D = F ? F.bindings : Ae, J;
  be: {
    if (!oe) {
      J = null;
      break be;
    }
    let Se = null;
    if (te[0] !== D) {
      for (const se of D) {
        if (se.context !== "Chat") {
          continue;
        }
        if (se.chord.length !== 1) {
          continue;
        }
        let Z = se.chord[0];
        if (!Z) {
          continue;
        }
        if (se.action === "voice:pushToTalk") Se = Z;
        else if (Se !== null && ZGe(Z, Se)) Se = null;
      }
      te[0] = D, te[1] = Se;
    } else Se = te[1];
    J = Se;
  }
  let H = J, re;
  if (te[2] !== H) re = H ? G$r(H, U1()) : null, te[2] = H, te[3] = re;
  else re = te[3];
  let L = re, z = H !== null && H.key.length === 1 && !H.ctrl && !H.alt && !H.shift && !H.meta && !H.super ? H.key : null, q = C(0), B = C(0), we = C(0), ie = C(false), ae = C(null), Re = C(0), ce = C(null), ke, Pe;
  if (te[4] !== N || te[5] !== ne) ke = () => {
    if (ne !== "recording") ie.current = false, we.current = 0, N(Ho);
    else {
      if (Re.current = 0, ce.current) ce.current(), ce.current = null;
      N(Wo);
    }
  }, Pe = [ne, N], te[4] = N, te[5] = ne, te[6] = ke, te[7] = Pe;
  else ke = te[6], Pe = te[7];
  P(ke, Pe);
  let Ye, _;
  if (te[8] === S) Ye = () => () => {
    if (ce.current) ce.current(), ce.current = null;
  }, _ = [], te[8] = Ye, te[9] = _;
  else Ye = te[8], _ = te[9];
  P(Ye, _);
  let me;
  if (te[10] !== N) me = function _e2() {
    if (q.current === 0) {
      return;
    }
    if (ae.current) ae.current(), ae.current = null;
    q.current = 0, B.current = 0, N(jo);
  }, te[10] = N, te[11] = me;
  else me = te[11];
  let _e = me, X;
  if (te[12] !== z || te[13] !== ye || te[14] !== I || te[15] !== V || te[16] !== Y || te[17] !== M || te[18] !== pe || te[19] !== T || te[20] !== _e || te[21] !== N || te[22] !== x || te[23] !== R || te[24] !== oe || te[25] !== h || te[26] !== H || te[27] !== G) X = (U) => {
    if (!oe) {
      return;
    }
    if (!M || pe) {
      return;
    }
    if ((U.key === "escape" || U.key === "c" && U.ctrl && !U.shift && !U.meta) && Y().voiceState !== "idle") {
      U.stopImmediatePropagation(), R(), T();
      return;
    }
    if (z !== null && !V) {
      return;
    }
    if (G !== "tap" && I.submit !== void 0 && Y().awaitingVoiceSubmitDoubleTap) {
      let Ee = I.submit;
      let Ue = () => {
        if (Re.current = 0, ce.current) ce.current(), ce.current = null;
      };
      let qe = () => {
        Ue(), N(zo);
      };
      let lt = z !== null && !U.ctrl && !U.meta && !U.shift && (z === " " ? bX(U.key) : U.key)[0] === z;
      let Fe = I.cursorOffset === I.value.length;
      if (!lt || !Fe) qe();
      else if (ce.current !== null) qe();
      else if (Y().voiceState === "idle") {
        let Xe = Date.now();
        let Ve = Re.current;
        if (Ve !== 0 && Xe - Ve <= on) {
          U.stopImmediatePropagation(), Re.current = 0, ce.current = ye.setTimeout(() => {
            ce.current = null;
            let De = Y();
            if (De.voiceState !== "idle" || !De.awaitingVoiceSubmitDoubleTap) {
              return;
            }
            let Oe = I.value;
            let He = Oe.endsWith(z) || z === " " && Oe.endsWith("　") ? Oe.slice(0, -1) : Oe;
            if (!Ee(He, true)) {
              return;
            }
            N(Qo);
          }, ht);
          return;
        }
        if (Ve !== 0) qe();
        else Re.current = Xe;
      }
    }
    if (H === null) {
      return;
    }
    let Ie;
    if (z !== null) {
      let et = z === " " ? bX(U.key) : U.key;
      Ie = !U.ctrl && !U.meta && !U.shift && et[0] === z && (et.length === 1 || et === z.repeat(et.length)) ? et.length : null;
    } else Ie = sn(U, H) ? 1 : null;
    if (Ie === null) {
      _e();
      return;
    }
    if (G === "tap") {
      let xt = Y().voiceState;
      if (xt === "processing") {
        if (z === null) U.stopImmediatePropagation();
        return;
      }
      let gt = xt === "idle";
      if (gt && I.value.length > 0) {
        return;
      }
      U.stopImmediatePropagation();
      let Qr = q.current === 0;
      if (q.current = q.current + Ie, ae.current) ae.current();
      if (ae.current = ye.setTimeout(() => {
        ae.current = null, _e();
      }, ht), !Qr) {
        if (z !== null) x(Ie, { char: z, floor: 0 });
        return;
      }
      if (gt) {
        if (z !== null) x(Ie, { char: z, anchor: true });
        else x(0, { anchor: true });
      } else if (z !== null) x(Ie, { char: z, floor: 0 });
      if (h(), gt && Y().voiceState === "idle") T();
      return;
    }
    let Et = Y().voiceState;
    if (ie.current && Et !== "idle") {
      if (U.stopImmediatePropagation(), z !== null) x(Ie, { char: z, floor: we.current });
      h();
      return;
    }
    if (Et === "recording") {
      if (z === null) U.stopImmediatePropagation();
      return;
    }
    if (Et === "processing" && z === null) {
      U.stopImmediatePropagation();
      return;
    }
    let cr = q.current;
    if (q.current = q.current + Ie, z === null || Et === "idle" && q.current >= nn) {
      if (U.stopImmediatePropagation(), ae.current) ae.current(), ae.current = null;
      if (q.current = 0, ie.current = true, N(Yo), z !== null) we.current = x(B.current + Ie, { char: z, anchor: true }), B.current = 0, h();
      else x(0, { anchor: true }), h(rn);
      if (Y().voiceState === "idle") ie.current = false, T();
      return;
    }
    if (cr >= Wt) U.stopImmediatePropagation(), x(Ie, { char: z, floor: B.current });
    else B.current = B.current + Ie;
    if (Et === "idle" && q.current >= Wt) N(Go);
    if (ae.current) ae.current();
    ae.current = ye.setTimeout(() => {
      ae.current = null, _e();
    }, ht);
  }, te[12] = z, te[13] = ye, te[14] = I, te[15] = V, te[16] = Y, te[17] = M, te[18] = pe, te[19] = T, te[20] = _e, te[21] = N, te[22] = x, te[23] = R, te[24] = oe, te[25] = h, te[26] = H, te[27] = G, te[28] = X;
  else X = te[28];
  let Yr = X, po;
  if (te[29] !== Yr || te[30] !== L) po = { handleKeyDown: Yr, voiceKeyDisplay: L }, te[29] = Yr, te[30] = L, te[31] = po;
  else po = te[31];
  return po;
}
function ii(M) {
  return M.settings.voice?.mode ?? "hold";
}
var yn = { r: 153, g: 153, b: 153 }, wn = { r: 185, g: 185, b: 185 }, Cn = 2;
function NFe(d) {
  let x = w(3), { voiceState: h } = d, R = K(ii);
  switch (h) {
    case "recording": {
      if (R === "tap") {
        let T2;
        if (x[0] === S) T2 = r(n, { children: [r(n, { color: "error", children: [ko, " REC"] }), e(n, { dimColor: true, children: " · tap to send" })] }), x[0] = T2;
        else T2 = x[0];
        return T2;
      }
      let T;
      if (x[1] === S) T = e(n, { dimColor: true, children: "listening…" }), x[1] = T;
      else T = x[1];
      return T;
    }
    case "processing": {
      let T;
      if (x[2] === S) T = e(xr, {}), x[2] = T;
      else T = x[2];
      return T;
    }
    case "idle": {
      return null;
    }
  }
}
function H6t() {
  let h = w(2), [, d] = oPt(), R;
  if (h[0] !== d) R = d ? e(n, { color: d.hex, children: d.char }) : null, h[0] = d, h[1] = R;
  else R = h[1];
  return R;
}
function $Fe() {
  let d = w(1), h;
  if (d[0] === S) h = e(n, { dimColor: true, children: "keep holding…" }), d[0] = h;
  else h = d[0];
  return h;
}
function xr() {
  let T = w(8), d = Wd(), h = Vh(d.prefersReducedMotion), [R, x] = ja(h ? null : 50);
  if (h) {
    let M2;
    if (T[0] === S) M2 = e(n, { color: "warning", children: "Voice: processing…" }), T[0] = M2;
    else M2 = T[0];
    return M2;
  }
  let O = x / 1e3, I = (Math.sin(O * Math.PI * 2 / Cn) + 1) / 2, M;
  if (T[1] !== I) {
    let V = gy() ? UR(I) : I;
    M = Yg(x_(yn, wn, V));
    T[1] = I, T[2] = M;
  } else M = T[2];
  let Y = M, N;
  if (T[3] !== Y) N = e(n, { color: Y, children: "Voice: processing…" }), T[3] = Y, T[4] = N;
  else N = T[4];
  let F;
  if (T[5] !== R || T[6] !== N) F = e(s, { ref: R, children: N }), T[5] = R, T[6] = N, T[7] = F;
  else F = T[7];
  return F;
}
j();
j();
import { basename as wt, dirname as tr } from "path";
j();
var bt = Ce(oy(), 1);
function _n(d) {
  return `${bt.major(d, { loose: true })}.${bt.minor(d, { loose: true })}.${bt.patch(d, { loose: true })}`;
}
function It(d, h = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION) {
  return ee(() => {
    if (!d) return null;
    let R = _n(d);
    return R === _n(h) ? null : R;
  }, [d, h]);
}
var On = 2;
function Vr({ isUpdating: d, onChangeIsUpdating: h, showSuccessMessage: R, verbose: x, withSeparator: T }) {
  let { storageV5: M } = Me(), O = K((te) => te.autoUpdaterResult), I = Gn(), [V, Y] = y({}), [N, F] = y(false), pe = It(O?.version);
  P(() => {
    F1e().then(F);
  }, []);
  let oe = C(d), ne = C(O?.status), G = C(O?.consecutiveExeLockFailures ?? 0);
  P(() => {
    oe.current = d, ne.current = O?.status, G.current = O?.consecutiveExeLockFailures ?? 0;
  });
  let ye = de(async () => {
    if (oe.current) return;
    if (ne.current === "no_permissions") {
      t("AutoUpdater: Skipping update check (no_permissions persists this session)");
      return;
    }
    if (G.current >= On) {
      t("AutoUpdater: Skipping update check (claude.exe locked by another process; damped for this session)");
      return;
    }
    if (ebe()) return;
    if (apt()) return;
    let te = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, se = j6(), Z = await lpt(se), { maxVersion: H, forceDowngradeEnabled: re } = await U1e(), L = null, z = false;
    if (re && H) {
      if (z = K9e(te, H, "auto_updater"), z) L = H;
    }
    if (!L && Z) {
      if (H && F_(Z, H)) if (t(`AutoUpdater: maxVersion ${H} is set, capping update from ${Z} to ${H}`), F_(H, te)) L = H;
      else t(`AutoUpdater: current version ${te} is already at or above maxVersion ${H}, skipping update`);
      else if (F_(Z, te)) L = Z;
    }
    if (Y({ global: te, latest: L ?? Z }), !L || V9e(L)) return;
    if (z) a("tengu_auto_updater_forced_downgrade", { from_version: pa(te), to_version: pa(L) });
    let q = Date.now();
    h(true);
    let B = ue();
    if (B.installMethod !== "native" && !Ne(process.env.DISABLE_INSTALLATION_CHECKS)) await YHt();
    let we = await $1e();
    if (t(`AutoUpdater: Detected installation type: ${we}`), we === "development") {
      t("AutoUpdater: Cannot auto-update development build"), h(false);
      return;
    }
    let ie, ae, Re;
    if (we === "npm-local") t("AutoUpdater: Using local update method"), ae = "local", ie = await spt(se, L, M);
    else if (we === "npm-global") t("AutoUpdater: Using global update method"), ae = "global", Re = await dpt(L, M), ie = Re.status;
    else if (we === "native") {
      t("AutoUpdater: Unexpected native installation in non-native updater"), h(false);
      return;
    } else {
      t("AutoUpdater: Unknown installation type, falling back to config");
      let ke = B.installMethod === "local";
      if (ae = ke ? "local" : "global", ke) ie = await spt(se, L, M);
      else Re = await dpt(L, M), ie = Re.status;
    }
    h(false);
    let ce = Re?.failureHint;
    if (ie !== "in_progress") G9e({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), path: ae === "local" ? "npm-local" : "npm-global", outcome: ie === "success" ? "success" : "failed", status: ie, version_from: te, version_to: L, error_code: ie === "install_failed" && q9e() ? "update_apply_restore_failed" : pnn(ce) }, M);
    if (ie === "success") {
      let ke = Re?.probeDurationMs ?? 0;
      a("tengu_auto_updater_success", { fromVersion: pa(te), toVersion: pa(L), durationMs: Date.now() - q - ke, probeDurationMs: ke, wasMigrated: ae === "local", installationType: c(we) });
    } else if (ie !== "in_progress") {
      let ke = ie;
      a("tengu_auto_updater_fail", { fromVersion: pa(te), attemptedVersion: pa(L), status: c(ke), durationMs: Date.now() - q, wasMigrated: ae === "local", installationType: c(we) });
    }
    I((ke) => {
      let Pe = ke.autoUpdaterResult, Ye = Pe?.consecutiveExeLockFailures ?? 0, _ = ie === "in_progress" ? Ye : ce === "windows_running_exe_lock" ? Ye + 1 : 0;
      if (Pe?.version === L && Pe?.status === ie && Pe?.failureHint === ce && (Pe?.consecutiveExeLockFailures ?? 0) === _) return ke;
      return { ...ke, autoUpdaterResult: { version: L, status: ie, failureHint: ce, consecutiveExeLockFailures: _ } };
    });
  }, [I, M]), Ae = Bo((te) => {
    h(false), l(te);
  });
  if (P(() => {
    ye().catch(Ae);
  }, [ye]), Ta(() => void ye().catch(Ae), 18e5), !O?.version && (!V.global || !V.latest)) return null;
  if (!O?.version && !d) return null;
  let D = O?.status === "install_failed" ? q9e() : null, J = null;
  switch (O?.failureHint) {
    case "windows_running_exe_lock":
      J = "claude.exe in use (close other Claude Code sessions, including VS Code)";
      break;
    case "native_binary_missing":
      J = "native binary for this platform was not downloaded (will retry)";
      break;
    case void 0:
      break;
  }
  if (!(x || d || O?.status === "success" && R && !!pe || O?.status === "no_permissions" || O?.status === "install_failed")) return null;
  return r(s, { flexDirection: "row", gap: 1, children: [T === void 0 ? null : e(n, { dimColor: true, children: T ? " ·" : "" }), x && r(n, { dimColor: true, wrap: "truncate", children: ["globalVersion: ", V.global, " · latestVersion:", " ", V.latest] }), d ? e(Q, { children: e(s, { children: e(n, { color: "text", dimColor: true, wrap: "truncate", children: "Auto-updating…" }) }) }) : O?.status === "success" && R && pe && r(n, { color: "success", wrap: "truncate", children: [e(mt, { status: "success", withSpace: true }), "Update installed · Restart to apply"] }), O?.status === "no_permissions" && r(n, { color: "error", wrap: "truncate", children: [e(mt, { status: "error", withSpace: true }), "Auto-update failed: no write permission to npm prefix · Run", " ", e(n, { bold: true, children: "claude doctor" })] }), O?.status === "install_failed" && (D ? D.preservedPath ? r(s, { flexDirection: "column", children: [r(n, { color: "error", wrap: "truncate", children: [e(mt, { status: "error", withSpace: true }), "Update failed and ", wt(D.originalPath), " could not be restored — it was preserved at:"] }), tr(D.preservedPath) === tr(D.originalPath) ? r(n, { color: "error", wrap: "truncate", children: [D.preservedPath, " · rename it back to", " ", wt(D.originalPath), " or run", " ", r(n, { bold: true, children: ["npm i -g ", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.PACKAGE_URL] })] }) : r(n, { color: "error", wrap: "truncate", children: [D.preservedPath, " · reinstall with", " ", r(n, { bold: true, children: ["npm i -g ", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.PACKAGE_URL] })] })] }) : r(n, { color: "error", wrap: "truncate", children: [e(mt, { status: "error", withSpace: true }), "Update failed and ", wt(D.originalPath), " could not be restored (no preserved copy found) · reinstall with", " ", r(n, { bold: true, children: ["npm i -g ", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.PACKAGE_URL] })] }) : J ? r(n, { color: "error", wrap: "truncate", children: [e(mt, { status: "error", withSpace: true }), "Auto-update failed: ", J, " · Run", " ", e(n, { bold: true, children: "claude doctor" })] }) : r(n, { color: "error", wrap: "truncate", children: [e(mt, { status: "error", withSpace: true }), "Auto-update failed · Try ", e(n, { bold: true, children: "claude doctor" }), " or", " ", e(n, { bold: true, children: N ? `cd ~/.claude/local && npm update ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.PACKAGE_URL}` : `npm i -g ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.PACKAGE_URL}` })] }))] });
}
j();
function ki(d) {
  let h = uvo(d);
  if (h instanceof vL) return "signature_verification";
  if (h instanceof fnn) return "checksum_mismatch";
  let R = h instanceof Error ? h.message : String(h), x = E(h);
  if (h instanceof unn || x === "ETIMEDOUT" || x === "ECONNABORTED" || R.includes("Download timed out") || R.includes("timeout")) return "timeout";
  if (R.includes("Checksum mismatch")) return "checksum_mismatch";
  if (R.includes("ENOENT") || R.includes("not found")) return "not_found";
  if (R.includes("EACCES") || R.includes("permission")) return "permission_denied";
  if (R.includes("ENOSPC")) return "disk_full";
  if (R.includes("npm")) return "npm_error";
  if (R.includes("network") || R.includes("ECONNREFUSED") || R.includes("ENOTFOUND")) return "network_error";
  let T = R.toLowerCase();
  if (R.includes("ENOEXEC") || T.includes("exec format error") || T.includes("bad cpu type") || T.includes("cannot execute binary") || T.includes("code signature") || T.includes("gatekeeper") || T.includes("killed: 9")) return "exec_format";
  if (T.includes("virus") || T.includes("quarantine") || T.includes("defender") || T.includes("operation did not complete successfully because the file contains")) return "av_quarantine";
  if (R.includes("EXDEV") || R.includes("EEXIST") || R.includes("EBUSY") || T.includes("rename") || T.includes("move failed") || T.includes("cross-device")) return "swap_failure";
  return "unknown";
}
function _i(d) {
  if (d.wasUpdated) return "tengu_native_auto_updater_success";
  if (d.skippedUnverifiedRelease) return "tengu_native_auto_updater_skipped_unverified_release";
  return "tengu_native_auto_updater_up_to_date";
}
function Ei() {
  return FQ() && !zd()?.bridgeSessionId && "version" in TNt() && T0s();
}
function Ti() {
  let d = k("tengu_fancy_wand_copy", {}).offer;
  return typeof d === "string" && d !== "" ? d : "/restart to apply";
}
function In() {
  return Ei() ? Ti() : "Restart to update";
}
function Pn() {
  return Mv(In);
}
function Nr({ isUpdating: d, onChangeIsUpdating: h, showSuccessMessage: R, verbose: x, withSeparator: T, atPrompt: M }) {
  let { storageV5: O } = Me(), I = K((te) => te.autoUpdaterResult), V = Gn(), [Y, N] = y({ current: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION }), [F, pe] = y(null), oe = It(I?.version), ne = j6();
  async function G() {
    if (d) return;
    if (I?.status === "success") return;
    if (ebe()) return;
    let te = await kjn();
    if (te && F_({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, te)) {
      let Z = await bPs();
      pe(Z ?? "affects your version");
    }
    if (apt()) return;
    h(true);
    let se = Date.now();
    a("tengu_native_auto_updater_start", {});
    try {
      let Z = await W9e(ne, false, O), H = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, re = Date.now() - se;
      if (Z.lockFailed) {
        a("tengu_native_auto_updater_lock_contention", { latency_ms: re });
        return;
      }
      if (N({ current: H, latest: Z.latestVersion }), a(_i(Z), { latency_ms: re }), Z.wasUpdated) SCo(), G9e({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), path: "native", outcome: "success", status: "success", version_from: H, version_to: Z.latestVersion ?? null, error_code: null }, O), V((L) => {
        let z = L.autoUpdaterResult;
        if (z?.version === Z.latestVersion && z?.status === "success") return L;
        return { ...L, autoUpdaterResult: { version: Z.latestVersion, status: "success" } };
      });
    } catch (Z) {
      let H = Date.now() - se, re = Z instanceof Error ? Z.message : String(Z);
      t(`Native auto-updater failed: ${re}`, { level: "error" }), G9e({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), path: "native", outcome: "failed", status: "install_failed", version_from: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, version_to: null, error_code: null }, O);
      let L = ki(Z), z = Er(Z) ?? b("none");
      a("tengu_native_auto_updater_fail", { latency_ms: H, error_code: z, error_timeout: L === "timeout", error_checksum: L === "checksum_mismatch", error_signature: L === "signature_verification", error_not_found: L === "not_found", error_permission: L === "permission_denied", error_disk_full: L === "disk_full", error_npm: L === "npm_error", error_network: L === "network_error", error_swap_failure: L === "swap_failure", error_exec_format: L === "exec_format", error_av_quarantine: L === "av_quarantine" }), V((q) => {
        let B = q.autoUpdaterResult;
        if (B?.version === null && B?.status === "install_failed") return q;
        return { ...q, autoUpdaterResult: { version: null, status: "install_failed" } };
      });
    } finally {
      h(false);
    }
  }
  let ye = Bo(G);
  P(() => {
    ye();
  }, [ne]), Ta(() => void G(), 18e5);
  let Ae = !!I?.status, D = !!Y.current && !!Y.latest;
  if (!((!!F || Ae || d && D) && (x || d || I?.status === "success" && R && !!oe || I?.status === "install_failed" || false))) return null;
  return r(s, { flexDirection: "row", gap: 1, children: [T === void 0 ? null : e(n, { dimColor: true, children: T ? " ·" : "" }), x && r(n, { dimColor: true, wrap: "truncate", children: ["current: ", Y.current, " · ", ne, ": ", Y.latest] }), d ? e(s, { children: e(n, { dimColor: true, wrap: "truncate", children: "Checking for updates" }) }) : I?.status === "success" && R && oe && r(n, { color: "success", wrap: "truncate", children: [e(mt, { status: "success", withSpace: true }), "Update installed ·", " ", M ? e(Pn, {}) : "Restart to update"] }), I?.status === "install_failed" && r(n, { color: "error", wrap: "truncate", children: [e(mt, { status: "error", withSpace: true }), "Auto-update failed · Run ", e(n, { bold: true, children: "claude doctor" })] }), F && false] });
}
j();
import { homedir as Nn } from "os";
import { join as Mi } from "path";
class Vn {
  packageManagerUpdateLastFailedAt = 0;
  packageManagerLatestVersion = null;
  fastIconHintShown = false;
  memorySelectorLastPath = void 0;
  recordPackageManagerUpdateFailure(d) {
    this.packageManagerUpdateLastFailedAt = d;
  }
  recordPackageManagerLatestVersion(d) {
    this.packageManagerLatestVersion = d;
  }
  markFastIconHintShown() {
    this.fastIconHintShown = true;
  }
  rememberMemorySelectorPath(d) {
    this.memorySelectorLastPath = d;
  }
}
var vat = new W(() => new Vn());
function Fi(Et) {
  return Et.autoUpdaterResult;
}
function Hi(cr) {
  return cr.autoUpdaterResult?.status === "install_failed" ? { ...cr, autoUpdaterResult: null } : cr;
}
function Dn(d, h) {
  switch (d) {
    case "homebrew":
      return ["brew", "upgrade", "--cask", h ?? "claude-code"];
    case "winget": {
      let R = process.env.LOCALAPPDATA;
      return [R ? Mi(R, "Microsoft", "WindowsApps", "winget.exe") : "winget", "upgrade", "--id", "Anthropic.ClaudeCode", "--exact", "--silent", "--disable-interactivity"];
    }
    default:
      return null;
  }
}
function Kn(d, h) {
  switch (d) {
    case "homebrew":
      return `brew upgrade ${h ?? "claude-code"}`;
    case "winget":
      return "winget upgrade Anthropic.ClaudeCode";
    case "mise":
      return "mise upgrade claude";
    case "apk":
      return "apk upgrade claude-code";
    default:
      return "your package manager update command";
  }
}
var rr = 18e5;
function or(d) {
  let G = w(54), { isUpdating: h, onChangeIsUpdating: R, showSuccessMessage: x, verbose: T, withSeparator: M } = d, O = K(Fi), I = Gn(), V = vat.of(Es()), [Y, N] = y(V.packageManagerLatestVersion), [F, pe] = y("unknown"), [oe, ne] = y(null), ye;
  if (G[0] !== h) ye = () => h, G[0] = h, G[1] = ye;
  else ye = G[1];
  let Ae = Bo(ye), D, J;
  if (G[2] === S) D = () => {
    N1e().then((be) => {
      if (pe(be), be === "homebrew") ne(rpt());
    });
  }, J = [], G[2] = D, G[3] = J;
  else D = G[2], J = G[3];
  P(D, J);
  let Se;
  if (G[4] !== O?.status || G[5] !== h || G[6] !== R || G[7] !== Ae || G[8] !== I || G[9] !== V) Se = async () => {
    if (h) {
      return;
    }
    if (O?.status === "success") {
      return;
    }
    if (ebe()) {
      return;
    }
    if (apt()) {
      return;
    }
    if (O?.status === "install_failed") {
      if (Date.now() - V.packageManagerUpdateLastFailedAt < rr) {
        return;
      }
      I(Hi);
    }
    let [te, se] = await Promise.all([j6(), N1e()]);
    let Z = te;
    let H = null;
    if (se === "homebrew") H = rpt(), Z = H === "claude-code@latest" ? "latest" : "stable";
    let re = se === "homebrew" ? await mnn(H ?? "claude-code", Z) : await PCr(Z);
    let L = await kjn();
    let z = false;
    if (L && re && F_(re, L)) {
      if (t(`PackageManagerAutoUpdater: maxVersion ${L} is set, capping update from ${re} to ${L}`), yv({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, L)) {
        t(`PackageManagerAutoUpdater: current version ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION} is already at or above maxVersion ${L}, skipping update`), V.recordPackageManagerLatestVersion(null), N(null);
        return;
      }
      re = L, z = true;
    }
    let q = re && !yv({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, re) && !V9e(re);
    let B = q ? re : null;
    if (V.recordPackageManagerLatestVersion(B), N(B), !q) {
      return;
    }
    t(`PackageManagerAutoUpdater: Update available ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION} -> ${re}`);
    let we = Ne(process.env.CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE);
    let ie = Dn(se, H);
    if (!we || !ie || z) {
      return;
    }
    if (Ae()) {
      return;
    }
    R(true);
    let ae = Date.now();
    let Re = { pm_homebrew: se === "homebrew", pm_winget: se === "winget" };
    a("tengu_pkg_manager_auto_updater_start", Re);
    let [ce, ...ke] = ie;
    let Pe = await ct(ce, ke, { cwd: Nn(), timeout: 3e5, env: se === "homebrew" ? { ...process.env, HOMEBREW_NO_AUTO_UPDATE: "" } : void 0 });
    let Ye = Date.now() - ae;
    if (R(false), Pe.code === 0) a("tengu_pkg_manager_auto_updater_success", { ...Re, latency_ms: Ye }), I((_) => {
      let me = _.autoUpdaterResult;
      if (me?.version === re && me?.status === "success") {
        return _;
      }
      return { ..._, autoUpdaterResult: { version: re, status: "success" } };
    });
    else t(`PackageManagerAutoUpdater: ${ce} exited ${Pe.code}: ${Pe.stderr || Pe.error || Pe.stdout}`), a("tengu_pkg_manager_auto_updater_fail", { ...Re, latency_ms: Ye, exit_code: Pe.code }), V.recordPackageManagerUpdateFailure(Date.now()), I((_e) => {
      if (_e.autoUpdaterResult?.status === "install_failed") {
        return _e;
      }
      return { ..._e, autoUpdaterResult: { version: re, status: "install_failed" } };
    });
  }, G[4] = O?.status, G[5] = h, G[6] = R, G[7] = Ae, G[8] = I, G[9] = V, G[10] = Se;
  else Se = G[10];
  let X = Bo(Se), U;
  if (G[11] !== R) U = (Ee) => {
    R(false), l(Ee);
  }, G[11] = R, G[12] = U;
  else U = G[12];
  let Ue = Bo(U), qe;
  if (G[13] !== X || G[14] !== Ue) qe = () => {
    X().catch(Ue);
  }, G[13] = X, G[14] = Ue, G[15] = qe;
  else qe = G[15];
  let lt;
  if (G[16] === S) lt = [], G[16] = lt;
  else lt = G[16];
  P(qe, lt);
  let Fe;
  if (G[17] !== X || G[18] !== Ue) Fe = () => void X().catch(Ue), G[17] = X, G[18] = Ue, G[19] = Fe;
  else Fe = G[19];
  Ta(Fe, rr);
  let Xe;
  if (G[20] !== M) Xe = M === void 0 ? null : e(n, { dimColor: true, children: M ? " ·" : "" }), G[20] = M, G[21] = Xe;
  else Xe = G[21];
  let Ve = Xe;
  if (O?.status === "success") {
    if (!x) {
      return null;
    }
    let De2;
    if (G[22] !== O || G[23] !== T) De2 = T && r(n, { dimColor: true, wrap: "truncate", children: ["current: ", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, " · latest:", " ", O.version] }), G[22] = O, G[23] = T, G[24] = De2;
    else De2 = G[24];
    const Oe2 = F !== "unknown" && ` via ${F}`;
    let He2;
    if (G[25] !== Oe2) He2 = r(n, { color: "success", wrap: "truncate", children: ["✓ Update installed", Oe2, " · Restart to apply"] }), G[25] = Oe2, G[26] = He2;
    else He2 = G[26];
    let Ie2;
    if (G[27] !== Ve || G[28] !== De2 || G[29] !== He2) Ie2 = r(s, { flexDirection: "row", gap: 1, children: [Ve, De2, He2] }), G[27] = Ve, G[28] = De2, G[29] = He2, G[30] = Ie2;
    else Ie2 = G[30];
    return Ie2;
  }
  if (h) {
    const De2 = F === "unknown" ? "Updating…" : `Updating via ${F}…`;
    let Oe2;
    if (G[31] !== De2) Oe2 = e(n, { dimColor: true, wrap: "truncate", children: De2 }), G[31] = De2, G[32] = Oe2;
    else Oe2 = G[32];
    let He2;
    if (G[33] !== Ve || G[34] !== Oe2) He2 = r(s, { flexDirection: "row", gap: 1, children: [Ve, Oe2] }), G[33] = Ve, G[34] = Oe2, G[35] = He2;
    else He2 = G[35];
    return He2;
  }
  let et = O?.status === "install_failed";
  if (!Y && !et || F === "unknown") {
    return null;
  }
  let De;
  if (G[36] !== T) De = T && r(n, { dimColor: true, wrap: "truncate", children: ["currentVersion: ", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION] }), G[36] = T, G[37] = De;
  else De = G[37];
  let Oe;
  if (G[38] !== oe || G[39] !== F) Oe = Kn(F, oe), G[38] = oe, G[39] = F, G[40] = Oe;
  else Oe = G[40];
  let He;
  if (G[41] !== Oe) He = e(n, { bold: true, children: Oe }), G[41] = Oe, G[42] = He;
  else He = G[42];
  let Ie;
  if (G[43] !== et) Ie = et && e(n, { dimColor: true, children: " (auto-update failed)" }), G[43] = et, G[44] = Ie;
  else Ie = G[44];
  let xt;
  if (G[45] !== He || G[46] !== Ie) xt = r(n, { color: "warning", wrap: "truncate", children: ["Update available! Run:", " ", He, Ie] }), G[45] = He, G[46] = Ie, G[47] = xt;
  else xt = G[47];
  let gt;
  if (G[48] !== De || G[49] !== xt) gt = r(s, { flexDirection: "column", alignItems: "flex-end", children: [De, xt] }), G[48] = De, G[49] = xt, G[50] = gt;
  else gt = G[50];
  let Qr;
  if (G[51] !== Ve || G[52] !== gt) Qr = r(s, { flexDirection: "row", gap: 1, alignItems: "flex-end", children: [Ve, gt] }), G[51] = Ve, G[52] = gt, G[53] = Qr;
  else Qr = G[53];
  return Qr;
}
function kat(d) {
  let F = w(18), { isUpdating: h, onChangeIsUpdating: R, showSuccessMessage: x, verbose: T, withSeparator: M, atPrompt: O } = d, [I, V] = y(null), [Y, N] = y(null), pe;
  if (F[0] === S) pe = async function ye2() {
    let oe = !mvo();
    let ne = Date.now();
    let G = await $1e();
    g("update_detection", { duration_ms: Date.now() - ne, first_in_process: oe, installation_type: c(G) }), t(`AutoUpdaterWrapper: Installation type: ${G}`), V(G === "native"), N(G === "package-manager");
  }, F[0] = pe;
  else pe = F[0];
  let ye = pe, [Ae] = y(yvo), D;
  if (F[1] === S) D = () => void ye(), F[1] = D;
  else D = F[1];
  if (Kr(D, Ae), I === null || Y === null) {
    return null;
  }
  if (Y) {
    let J2;
    if (F[2] !== h || F[3] !== R || F[4] !== x || F[5] !== T || F[6] !== M) J2 = e(or, { verbose: T, isUpdating: h, onChangeIsUpdating: R, showSuccessMessage: x, withSeparator: M }), F[2] = h, F[3] = R, F[4] = x, F[5] = T, F[6] = M, F[7] = J2;
    else J2 = F[7];
    return J2;
  }
  let J;
  if (F[8] !== h || F[9] !== R || F[10] !== x || F[11] !== T || F[12] !== M) J = { verbose: T, isUpdating: h, onChangeIsUpdating: R, showSuccessMessage: x, withSeparator: M }, F[8] = h, F[9] = R, F[10] = x, F[11] = T, F[12] = M, F[13] = J;
  else J = F[13];
  let be = J, Se;
  if (F[14] !== O || F[15] !== be || F[16] !== I) Se = I ? e(Nr, { ...be, atPrompt: O }) : e(Vr, { ...be }), F[14] = O, F[15] = be, F[16] = I, F[17] = Se;
  else Se = F[17];
  return Se;
}
function FRt() {
  return !Mv(lw);
}
j();
function dxn(d, h) {
  let R = Math.max(1, Math.floor(h) || 1), x = h > 0 ? vu(d, R, { hard: true, trim: false }) : d, T = [], M = 0, O = -1, I = x.split(`
`);
  for (let V = 0; V < I.length; V++) {
    let Y = I[V] ?? "";
    if (Y.length === 0) {
      if (O = d.indexOf(`
`, O + 1), O !== -1) {
        let oe = O;
        T.push(ar({ text: Y, startOffset: oe, isPrecededByNewline: sr(d, oe, V === 0), endsWithNewline: true }));
      } else {
        let oe = d.length;
        T.push(ar({ text: Y, startOffset: oe, isPrecededByNewline: sr(d, oe, V === 0), endsWithNewline: false }));
      }
      continue;
    }
    let N = d.indexOf(Y, M);
    if (N === -1) {
      let oe = M;
      T.push(ar({ text: Y, startOffset: oe, isPrecededByNewline: sr(d, oe, V === 0), endsWithNewline: false })), M = oe + Y.length;
      continue;
    }
    M = N + Y.length;
    let F = N + Y.length, pe = F < d.length && d[F] === `
`;
    if (pe) O = F;
    T.push(ar({ text: Y, startOffset: N, isPrecededByNewline: sr(d, N, V === 0), endsWithNewline: pe }));
  }
  return Object.freeze({ text: d, columns: R, lines: Object.freeze(T) });
}
function Ji(d, h) {
  let R = fo(h, 0, Math.max(0, d.lines.length - 1));
  return d.lines[R] ?? { text: "", startOffset: 0, isPrecededByNewline: true, endsWithNewline: false };
}
function uo(d, h) {
  if (d.lines.length === 0) return { line: 0, column: 0 };
  let R = fo(h, 0, d.text.length);
  for (let M = 0; M < d.lines.length; M++) {
    let O = d.lines[M], I = d.lines[M + 1];
    if (R >= O.startOffset && (!I || R < I.startOffset)) {
      let V = R - O.startOffset, Y;
      if (O.isPrecededByNewline) Y = co(O.text, V);
      else {
        let N = O.text.length - O.text.trimStart().length;
        if (V < N) Y = 0;
        else Y = co(O.text.slice(N), V - N);
      }
      return { line: M, column: Y };
    }
  }
  let x = d.lines.length - 1, T = d.lines[x];
  return { line: x, column: le(T.text) };
}
function lo(d, h, R) {
  if (d.lines.length === 0) return 0;
  let x = Ji(d, h);
  if (x.text.length === 0 && x.endsWithNewline) return x.startOffset;
  let T = x.isPrecededByNewline ? 0 : x.text.length - x.text.trimStart().length, M = Zi(x.text.slice(T), Math.max(0, R)) + T;
  return x.startOffset + M;
}
function co(d, h) {
  if (h <= 0) return 0;
  if (h >= d.length) return le(d);
  return le(d.slice(0, h));
}
function Zi(d, h) {
  if (h <= 0 || d.length === 0) return 0;
  let R = 0, x = 0;
  for (let T of d) {
    let M = le(T);
    if (R + M > h) break;
    R += M, x += T.length;
  }
  return x;
}
function sr(d, h, R) {
  if (R) return true;
  return h > 0 && d[h - 1] === `
`;
}
function ar(d) {
  return Object.freeze(d);
}
function fo(d, h, R) {
  return d < h ? h : d > R ? R : d;
}
function rw({ query: d, placeholder: h, isFocused: R, onKeyDown: x, onPaste: T, ref: M, autoFocus: O, isTerminalFocused: I, prefix: V = Q9o, width: Y, cursorOffset: N, borderless: F = false, isSearchLineUnpadded: pe = false, highlights: oe = [], dimRange: ne, cursorChar: G, prefixDim: ye = false, prefixColor: Ae, onCursorOffsetChange: D, onFocus: J, wrapColumns: be }) {
  let Se = N ?? d.length, te = x !== void 0, se = C(null), Z = (Fe) => {
    se.current = Fe, SIn(M, Fe);
  }, H = Wee(se), re = R ?? (te && H), L = rt(), z = !F && !L, q = false, B = z && false, we = z && !B, ie = h ?? "Search…", ae = L && V === Q9o ? d ? "Search:" : null : V, Re = we ? 2 : 0, ce = B && !pe ? 1 : 0, ke = we ? 1 : ce, Pe = ae === null ? d : `${ae} ${d}`, Ye = ae === null ? 0 : ae.length + 1, _ = ee(() => dxn(Pe, be ?? 0), [Pe, be]), me = ee(kF, []), _e = i.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT && i.CLAUDE_CODE_SESSION_KIND !== "bg", X = uo(_, Ye + Se), U = G === void 0 && !_e, Ee = wk({ line: ke + X.line, column: Re + X.column, active: re && !te, visible: U }), Ue = I && !(me && !_e && G === void 0), qe = D || J || te ? (Fe) => {
    if (!re && Fe.isWindowActivation) {
      Fe.dropAsStray();
      return;
    }
    let Xe = se.current;
    if (Xe && !J) VI(Xe).focus(Xe);
    if (!re) {
      J?.();
      return;
    }
    if (!d || !D) return;
    let Ve = Fe.localRow - ke;
    if (Ve < 0) return;
    let De = Math.max(0, Fe.localCol - Re), Oe = lo(_, Ve, De);
    D(Math.max(0, Math.min(d.length, Oe - Ye)));
  } : void 0, lt = r(n, { dimColor: !re, children: [ae !== null ? r(Q, { children: [e(n, { dimColor: ye, color: Ae ?? (B && re ? "permission" : void 0), children: ae }), " "] }) : null, re ? d ? ts(d, oe, ne, Ue ? Se : -1, G) : Ue ? r(Q, { children: [G ?? e(n, { inverse: true, children: ie.charAt(0) }), e(n, { dimColor: true, children: G ? ie : ie.slice(1) })] }) : e(n, { dimColor: true, children: ie }) : d ? e(n, { children: d }) : e(n, { children: ie })] });
  if (te) return e(s, { flexShrink: 0, borderStyle: we ? "round" : void 0, borderColor: re ? "suggestion" : void 0, borderDimColor: !re, paddingX: we ? 1 : 0, paddingY: ce, width: Y, onClick: qe, children: e(Jie, { ref: Z, autoFocus: O, onKeyDown: x, onPaste: T, caret: re ? { line: X.line, column: X.column, visible: U } : void 0, flexGrow: 1, children: lt }) });
  return e(s, { ref: Ee, flexShrink: 0, borderStyle: we ? "round" : void 0, borderColor: re ? "suggestion" : void 0, borderDimColor: !re, paddingX: we ? 1 : 0, paddingY: ce, width: Y, onClick: qe, children: lt });
}
function ts(d, h, R, x, T) {
  let M = (N) => h.some(([F, pe]) => N >= F && N < pe), O = (N) => !!R && N >= R[0] && N < R[1], I = /* @__PURE__ */ new Set([0, d.length]);
  for (let [N, F] of h) I.add(N), I.add(F);
  if (R) I.add(R[0]), I.add(R[1]);
  if (x >= 0) I.add(x), I.add(x + 1);
  let V = [...I].sort((N, F) => N - F), Y = [];
  for (let N = 0; N < V.length - 1; N++) {
    let F = V[N], pe = V[N + 1], oe = F < d.length ? d.slice(F, pe) : " ";
    if (!oe) continue;
    let ne = F === x, G = ne && oe === `
`;
    Y.push(ne && T ? r(n, { children: [T, G ? `
` : null] }, F) : e(n, { color: M(F) ? "suggestion" : void 0, dimColor: O(F), inverse: ne, children: G ? ` 
` : oe }, F));
  }
  return Y;
}
function UZr({ presentation: d, rows: h, embedded: R }) {
  return false;
}
export {
  $Fe,
  $Zr,
  D6t,
  Eat,
  FRt,
  FZr,
  H6t,
  M6t,
  NFe,
  NZr,
  O6t,
  PX,
  Q_,
  UZr,
  _5e,
  b5e,
  cxn,
  dxn,
  g5e,
  h5e,
  kat,
  rw,
  tL,
  vat,
  wds,
  y5e
};
