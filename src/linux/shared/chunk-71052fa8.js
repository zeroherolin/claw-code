// linux/shared/chunk-71052fa8.js — Claude Code 2.1.310（linux）模块 chunk-nc9krs44.js
class qIe {
  #t = /* @__PURE__ */ new Map();
  #e = /* @__PURE__ */ new Map();
  #s = false;
  told(t, s, e) {
    if (t.noteModelToldAway(e), t.awayEpisode(e) === void 0) return;
    this.#n(t);
    let i = s ?? "", n = this.#e.get(i);
    if (n !== void 0) {
      n.add(e);
      return;
    }
    let d = [...this.#e.keys()].find((o) => o !== "");
    if (this.#e.size >= 64 && d !== void 0) this.#e.delete(d);
    this.#e.set(i, /* @__PURE__ */ new Set([e]));
  }
  takeReturn(t, s, e) {
    let i = s ?? "", n = this.#e.get(i);
    if (n?.has(e) !== true || t.awayEpisode(e) !== void 0) return;
    let d = t.takeBackNote(e);
    if (d?.toldModel === true) {
      let r = this.#t.keys().next().value;
      if (!this.#t.has(e) && this.#t.size >= 256 && r !== void 0) this.#t.delete(r);
      this.#t.set(e, d);
    }
    let o = this.#t.get(e);
    if (o === void 0) return;
    return this.#i(i, n, e), o.sinceHeardMs;
  }
  clear() {
    this.#t.clear(), this.#e.clear();
  }
  #i(t, s, e) {
    if (s.delete(e), s.size === 0) this.#e.delete(t);
  }
  #n(t) {
    if (this.#s) return;
    this.#s = true, t.onAwayEpisodeDropped((s) => {
      this.#t.delete(s);
      for (let [e, i] of [...this.#e]) this.#i(e, i, s);
    });
  }
}
export {
  qIe
};
