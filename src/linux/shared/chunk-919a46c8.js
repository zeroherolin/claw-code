// linux/shared/chunk-919a46c8.js — Claude Code 2.1.310（linux）模块 chunk-y93r9xd4.js
import { Ngr } from "./chunk-4ef913a6.js";
import { b } from "../agents/third-party.js";
import { De } from "../fs/async-hooks.93b1.js";
import { P, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
var n = [];
class i {
  #n = De();
  #o = { entries: n, loading: false };
  #t = false;
  #i = 0;
  #e = 0;
  getSnapshot = () => this.#o;
  subscribe = (e) => this.#n.subscribe(e);
  #r(e) {
    let t = this.#o, r = { ...t, ...e };
    if (r.entries === t.entries && r.loading === t.loading) return;
    this.#o = r, this.#n.emit();
  }
  get pending() {
    return this.#e !== 0;
  }
  clear() {
    this.#t = false, this.#r({ entries: n });
  }
  beginLoad() {
    if (this.#e = ++this.#i, !this.#t) this.#r({ loading: true });
    return this.#e;
  }
  endLoad(e) {
    if (e !== this.#e) return;
    this.#e = 0, this.#r({ loading: false });
  }
  setEntries(e) {
    this.#t = true, this.#r({ entries: e.length === 0 ? n : e });
  }
  get known() {
    return this.#t;
  }
}
function Tat() {
  return { roster: null, selection: null, view: null, attach: null, editor: null, deleteConfirm: null, earlier: new i(), agentLastUsedMigrationDone: false, scope: null, resultSeen: { entryChannel: b("unknown"), openFinished: null, emitted: /* @__PURE__ */ new Set() }, fleetNudgeStore: null, killRing: Ngr() };
}
function BZr({ selection: e, view: t, attach: r, editor: o, deleteConfirm: l }, { clock: s, groupsEnabled: a }) {
  P(() => {
    let d = e.attachView({ clock: s, onError: o.setError }), p = t.attachView({ groupsEnabled: a }), c = r.attachView(), h = o.attachView(), S = l.attachView();
    return () => {
      S(), h(), c(), p(), d();
    };
  }, [e, t, r, o, l, s]);
}
export {
  BZr,
  Tat
};
