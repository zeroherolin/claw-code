// linux/shared/chunk-59e12108.js — Claude Code 2.1.310（linux）模块 chunk-zga5371a.js
class BBe {
  #e = /* @__PURE__ */ new Map();
  remember(i) {
    for (let e of i) this.#e.delete(e.id), this.#e.set(e.id, e);
    for (let e of this.#e.keys()) {
      if (this.#e.size <= 512) break;
      this.#e.delete(e);
    }
  }
  get(i) {
    return this.#e.get(i);
  }
  clear() {
    this.#e.clear();
  }
}
export {
  BBe
};
