// shared/chunk-b7mecgs4.js — Claude Code 2.1.310 模块 chunk-b7mecgs4.js
import { Zgr } from "./chunk-ea8pzfxk.js";
import { S } from "../agents/third-party.ydpb.js";
import { He } from "../fs/async-hooks.9s1z.js";
import { P, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
var n = [];
class i {
  #n = He();
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
function Aat() {
  return { roster: null, selection: null, view: null, attach: null, editor: null, deleteConfirm: null, earlier: new i(), agentLastUsedMigrationDone: false, scope: null, resultSeen: { entryChannel: S("unknown"), openFinished: null, emitted: /* @__PURE__ */ new Set() }, fleetNudgeStore: null, killRing: Zgr() };
}
function zZr({ selection: e, view: t, attach: r, editor: o, deleteConfirm: l }, { clock: s, groupsEnabled: a }) {
  P(() => {
    let d = e.attachView({ clock: s, onError: o.setError }), p = t.attachView({ groupsEnabled: a }), c = r.attachView(), h = o.attachView(), u = l.attachView();
    return () => {
      u(), h(), c(), p(), d();
    };
  }, [e, t, r, o, l, s]);
}
export {
  Aat,
  zZr
};
