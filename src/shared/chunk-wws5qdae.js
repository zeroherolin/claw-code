// shared/chunk-wws5qdae.js — Claude Code 2.1.310 模块 chunk-wws5qdae.js
import { Aoe } from "./chunk-bkvejkkf.js";
import { nt } from "../context/not-admin-owned.ersa.js";
var r = Aoe("computerUseMcpState", void 0);
class npt {
  #e;
  constructor(e) {
    this.#e = e;
  }
  static over(e) {
    return new npt(r(e.getState, e.setState));
  }
  get() {
    return this.#e.get();
  }
  update(e) {
    this.#e.set(e);
  }
}
class t {
  owner = void 0;
  acquire(e) {
    if (this.owner) return () => {
    };
    return this.owner = e, () => {
      if (this.owner === e) this.owner = void 0;
    };
  }
}
var T0t = new nt(() => new t());
function fen(e) {
  return T0t.of(e).owner;
}
export {
  T0t,
  fen,
  npt
};
