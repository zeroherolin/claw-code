// shared/chunk-281y2ht7.js — Claude Code 2.1.310 模块 chunk-281y2ht7.js
import { R9e } from "./chunk-gvhdvyy0.js";
class VYt extends R9e {
  constructor(t, e) {
    super(t, e);
    let o = this._ondata;
    this._ondata = (r) => o(typeof r === "string" ? Buffer.from(r, "utf8") : r);
  }
}
export {
  VYt
};
