// terminal/chunk-vtw8nj6v.js — Claude Code 2.1.310 模块 chunk-vtw8nj6v.js
import { He } from "../fs/async-hooks.9s1z.js";
import { U, Tu } from "../context/not-admin-owned.ersa.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { i } from "../shared/environment.9a41.js";
import { N1s } from "./wl-copy.gdbt.js";
class s {
  reading;
  settled = He();
  constructor(e) {
    this.reading = e === void 0 ? { state: "unasked" } : { state: "settled", value: e.value, source: e.source };
  }
  get() {
    return this.reading;
  }
  now() {
    return this.reading.state === "settled" && this.reading.value;
  }
  begin() {
    if (this.reading.state !== "unasked") return false;
    return this.reading = { state: "asking" }, true;
  }
  unask() {
    if (this.reading.state === "asking") this.reading = { state: "unasked" };
  }
  answer(e) {
    if (this.reading.state === "settled") return false;
    this.reading = { state: "settled", ...e };
    try {
      this.settled.emit(e.value);
    } finally {
      this.settled.clear();
    }
    return true;
  }
  onSettle(e) {
    if (this.reading.state === "settled") return e(this.reading.value), () => {
    };
    return this.settled.subscribe(e);
  }
}
var l = { extendedKeys: false, synchronizedOutput: false, kittyKeyboard: true, kittyGraphics: false, itermImages: false, mousePixels: false, programStatus: false }, GSr = Object.keys(l);
class o {
  readings = /* @__PURE__ */ new Map();
  answeredYes = /* @__PURE__ */ new Set();
  listeners = /* @__PURE__ */ new Map();
  constructor(e) {
    for (let t of GSr) {
      let n = e[t];
      this.readings.set(t, "settled" in n ? { state: "settled", value: n.settled, source: n.source } : { state: "pending", likely: n.likely, source: n.source });
    }
  }
  get(e) {
    return this.readings.get(e);
  }
  now(e) {
    let t = this.get(e);
    return t.state === "settled" ? t.value : l[e];
  }
  confirmed(e) {
    return this.answeredYes.has(e);
  }
  pending() {
    return GSr.filter((e) => this.get(e).state === "pending");
  }
  answer(e, t, n) {
    let a = this.get(e);
    if (a.state === "settled") {
      if (t && a.value) this.answeredYes.add(e);
      return false;
    }
    if (t) this.answeredYes.add(e);
    return this.settle(e, t, n), true;
  }
  deadline() {
    for (let e of this.pending()) {
      let t = this.get(e);
      this.settle(e, t.likely, `${t.source}, no answer`);
    }
  }
  onSettle(e, t) {
    let n = this.get(e);
    if (n.state === "settled") return t(n.value), () => {
    };
    let a = this.listeners.get(e) ?? /* @__PURE__ */ new Set();
    return this.listeners.set(e, a), a.add(t), () => {
      a.delete(t);
    };
  }
  settle(e, t, n) {
    this.readings.set(e, { state: "settled", value: t, source: n });
    let a = this.listeners.get(e);
    this.listeners.delete(e);
    for (let r of a ?? []) r(t);
  }
}
class d {
  xtversionName = void 0;
  #e = void 0;
  get capabilities() {
    return this.#e ??= new o(N1s());
  }
  #t = void 0;
  get imageFiles() {
    return this.#t ??= new s(i.CLAUDE_CODE_FORCE_TERMINAL_IMAGES ? { value: true, source: "env: CLAUDE_CODE_FORCE_TERMINAL_IMAGES" } : i.TMUX ? { value: false, source: "env: inside tmux, where the terminal cannot be asked whether it reads files" } : void 0);
  }
  tmuxPane = void 0;
  isTmuxPaneAsked = false;
  tmuxPaneAnsweredAt = void 0;
  resetCapabilities() {
    this.#e = void 0, this.#t = void 0, this.tmuxPane = void 0, this.isTmuxPaneAsked = false, this.tmuxPaneAnsweredAt = void 0;
  }
  osc11Responsive = void 0;
  cellPixels = void 0;
  probeEventLogged = false;
  nativeCursorEnabled = void 0;
}
var u = new W(() => new d());
function wv() {
  return u.of(U().host);
}
function TC() {
  return wv().capabilities;
}
function mbs() {
  return TC().now("kittyGraphics");
}
function Qdo() {
  let e = TC();
  return e.now("kittyGraphics") ? "kitty" : e.now("itermImages") ? "iterm" : void 0;
}
function gbs(e) {
  let t = TC(), n = () => e(Qdo()), a = [t.onSettle("kittyGraphics", n), t.onSettle("itermImages", n)];
  return () => a.forEach((r) => r());
}
function T7t() {
  return wv().imageFiles;
}
function hbs(e) {
  wv().xtversionName = e;
}
function A7t() {
  return wv().xtversionName;
}
function yy() {
  if (Tu()?.isVscodeTerm) return true;
  if (i.TERM_PROGRAM === "vscode") return true;
  return wv().xtversionName?.startsWith("xterm.js") ?? false;
}
function ybs() {
  let e = wv().xtversionName?.toLowerCase();
  return e !== void 0 && (e.startsWith("iterm2") || e.startsWith("tmux "));
}
function _bs() {
  return wv().xtversionName?.toLowerCase().startsWith("ghostty") ?? false;
}
export {
  A7t,
  GSr,
  Qdo,
  T7t,
  TC,
  _bs,
  gbs,
  hbs,
  mbs,
  wv,
  ybs,
  yy
};
