// linux/terminal/chunk-2969c20f.js — Claude Code 2.1.310（linux）模块 chunk-hk6ate67.js
import { De } from "../fs/async-hooks.93b1.js";
import { U, ku } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { i } from "../shared/environment.js";
import { JUs } from "./wl-copy.js";
class s {
  reading;
  settled = De();
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
var l = { extendedKeys: false, synchronizedOutput: false, kittyKeyboard: true, kittyGraphics: false, itermImages: false, mousePixels: false, programStatus: false }, Ubr = Object.keys(l);
class o {
  readings = /* @__PURE__ */ new Map();
  answeredYes = /* @__PURE__ */ new Set();
  listeners = /* @__PURE__ */ new Map();
  constructor(e) {
    for (let t of Ubr) {
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
    return Ubr.filter((e) => this.get(e).state === "pending");
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
    return this.#e ??= new o(JUs());
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
function SE() {
  return u.of(U().host);
}
function kT() {
  return SE().capabilities;
}
function Bbs() {
  return kT().now("kittyGraphics");
}
function Bdo() {
  let e = kT();
  return e.now("kittyGraphics") ? "kitty" : e.now("itermImages") ? "iterm" : void 0;
}
function jbs(e) {
  let t = kT(), n = () => e(Bdo()), a = [t.onSettle("kittyGraphics", n), t.onSettle("itermImages", n)];
  return () => a.forEach((r) => r());
}
function gJt() {
  return SE().imageFiles;
}
function Wbs(e) {
  SE().xtversionName = e;
}
function hJt() {
  return SE().xtversionName;
}
function gy() {
  if (ku()?.isVscodeTerm) return true;
  if (i.TERM_PROGRAM === "vscode") return true;
  return SE().xtversionName?.startsWith("xterm.js") ?? false;
}
function Gbs() {
  let e = SE().xtversionName?.toLowerCase();
  return e !== void 0 && (e.startsWith("iterm2") || e.startsWith("tmux "));
}
function zbs() {
  return SE().xtversionName?.toLowerCase().startsWith("ghostty") ?? false;
}
export {
  Bbs,
  Bdo,
  Gbs,
  SE,
  Ubr,
  Wbs,
  gJt,
  gy,
  hJt,
  jbs,
  kT,
  zbs
};
