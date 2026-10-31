// linux/shared/chunk-f51cb704.js — Claude Code 2.1.310（linux）模块 chunk-nbb21mfv.js
import { Soe } from "./chunk-67236fa7.js";
import { nt } from "../context/not-admin-owned.js";
var r = Soe("computerUseMcpState", void 0);
class fdt {
  #e;
  constructor(e) {
    this.#e = e;
  }
  static over(e) {
    return new fdt(r(e.getState, e.setState));
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
var xPt = new nt(() => new t());
function sms(e) {
  return xPt.of(e).owner;
}
export {
  fdt,
  sms,
  xPt
};
