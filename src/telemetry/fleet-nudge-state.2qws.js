// telemetry/fleet-nudge-state.2qws.js — Claude Code 2.1.310 模块 chunk-2qwstr92.js
import { He } from "../fs/async-hooks.9s1z.js";
import { a } from "./chunk-wq923bwc.js";
import { g, p } from "./chunk-wn8xtaqg.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Pg, px, Ib, dS, Ga, h8 } from "./bg-roster-parse-failed.yhsj.js";
import { Gt, Se, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
async function Zmr(e) {
  let s = false, i = await px(void 0, e, () => {
    s = true;
  });
  return s ? null : i;
}
var h = 12e4, f = 18e5, c = 1e4, m = 3;
function S(e) {
  return !tIn(e) && e.tempo === "blocked" && e.needs !== Ib;
}
function tIn(e) {
  return Ga(e) && !(dS(e.state) === "success" && h8(e));
}
class u5e {
  #p;
  #g;
  #s = void 0;
  #m = He();
  #h = 0;
  #n = false;
  #u = true;
  #o = null;
  #e = null;
  #d = false;
  #t = 0;
  #i = null;
  #l = 0;
  #S;
  constructor(e) {
    this.#p = e?.sweepMs ?? c, this.#g = e?.ignoredAfterMs ?? f;
    let s = e?.storageV5;
    this.#S = () => Zmr(s);
  }
  getSnapshot = () => this.#s;
  subscribe = (e) => {
    let s = this.#m.subscribe(e);
    if (this.#h++, !this.#n) if (this.#n = true, this.#s === void 0) this.#r();
    else this.#f();
    let i = false;
    return () => {
      if (i) return;
      if (i = true, s(), this.#h--, this.#h === 0) this.#N();
    };
  };
  refetch = () => this.#r();
  async quiesce() {
    while (this.#e) await this.#e;
  }
  setFocused(e) {
    if (e === this.#u) return;
    if (this.#u = e, !this.#n) return;
    if (e) this.#l = 0, this.#r();
    else this.#a();
  }
  recordOpenViaLeft() {
    if (this.#c(), this.#t > 0 && Date.now() - this.#t <= h) g("fleet_needs_input_nudge"), this.#t = 0;
    return this.#s;
  }
  #r() {
    if (this.#a(), this.#e) return this.#d = true, this.#e;
    return this.#e = this.#b().finally(() => {
      if (this.#e = null, this.#d) this.#d = false, this.#r();
    }), this.#e;
  }
  async #b() {
    let e;
    try {
      e = await this.#S();
    } catch {
      e = [];
    }
    if (!this.#n) return;
    if (e !== null) this.#l = 0;
    else if (++this.#l <= m) {
      if (this.#l === 1) t("[fleet nudge] listing sessions failed for a reason that may pass; keeping the counts", { level: "warn" });
      if (this.#u) this.#f();
      return;
    }
    let s = e ?? [], i = 0, r = 0, u = 0, d = 0, l = Pg();
    for (let n of s) {
      if (n.id === l) continue;
      if (tIn(n.state)) {
        if (r++, dS(n.state.state) === "success") u++;
        continue;
      }
      if (d++, S(n.state)) i++;
    }
    if (i === 0) this.#c(), this.#t = 0;
    let o = this.#s;
    if (o?.needsInput !== i || o?.done !== r || o?.succeeded !== u) {
      let n = o !== void 0 && i > o.needsInput;
      if (this.#s = { needsInput: i, done: r, succeeded: u }, a("tengu_fleet_nudge_state", { needs_input_count: i, done_count: r, succeeded_count: u, increased: n }), n) this.#t = Date.now(), this.#_();
      this.#m.emit();
    }
    if (d > 0 && this.#u) this.#f();
  }
  #f() {
    this.#a(), this.#o = setTimeout(() => void this.#r(), this.#p), this.#o.unref();
  }
  #_() {
    this.#c(), this.#i = setTimeout(() => {
      this.#i = null, p("fleet_needs_input_nudge", "ignored"), this.#t = 0;
    }, this.#g), this.#i.unref();
  }
  #a() {
    if (this.#o) clearTimeout(this.#o), this.#o = null;
  }
  #c() {
    if (this.#i) clearTimeout(this.#i), this.#i = null;
  }
  #N() {
    this.#a(), this.#d = false, this.#n = false;
  }
}
function Pki(e, s) {
  return e.fleetNudgeStore ??= new u5e({ storageV5: s }), e.fleetNudgeStore;
}
var nIn = Gt(null);
function zxt() {
  let e = Se(nIn);
  if (!e) throw ReferenceError("useFleetNudgeStore cannot be called outside of a FleetNudgeStoreContext provider (mounted by <AppStateProvider />)");
  return e;
}
export {
  Pki,
  Zmr,
  nIn,
  tIn,
  u5e,
  zxt
};
