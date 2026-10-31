// darwin/shared/chunk-cd359435.js — Claude Code 2.1.310（darwin）模块 chunk-9dwrkvnz.js
var l = [];
class xae {
  #n = () => l;
  #l = () => true;
  #t = () => false;
  #e = l;
  #s = () => false;
  #o;
  #i = /* @__PURE__ */ new WeakMap();
  provide(o, t = () => true, e = () => false) {
    this.#n = o, this.#l = t, this.#t = e, this.#o = void 0;
  }
  presentUntilAnnounced(o, t) {
    this.#e = o, this.#s = t, this.#o = void 0;
  }
  presentable() {
    return this.#l();
  }
  tools() {
    let o = this.#n();
    if (this.#e.some(({ machine: e }) => this.#t(e))) {
      let e = this.#e.filter(({ machine: n }) => !this.#t(n));
      this.#e = e.length > 0 ? e : l;
    }
    let t = this.#s() ? this.#e : l;
    if (this.#o === void 0 || this.#o.source !== o || this.#o.pending !== t) {
      let e = [...o, ...t.filter(({ tool: n, machine: s }) => !o.some((i) => i.machine === s && i.tool.name === n.name))];
      for (let { tool: n, machine: s } of e) this.#i.set(n, s);
      this.#o = { source: o, pending: t, tools: e.map(({ tool: n }) => n) };
    }
    return this.#o.tools;
  }
  machineFor(o) {
    return this.tools(), this.#i.get(o);
  }
}
function HIe(o) {
  return o.toolState?.get(xae).tools() ?? a;
}
var a = [];
export {
  HIe,
  xae
};
