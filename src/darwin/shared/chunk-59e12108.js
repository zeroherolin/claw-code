// darwin/shared/chunk-59e12108.js — Claude Code 2.1.310（darwin）模块 chunk-87qas7pc.js
class Q1e {
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
  Q1e
};
