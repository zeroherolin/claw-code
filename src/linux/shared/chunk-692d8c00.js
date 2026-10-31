// linux/shared/chunk-692d8c00.js — Claude Code 2.1.310（linux）模块 chunk-h2g7n7ge.js
import { MJt } from "./chunk-80960efe.js";
class q9t extends MJt {
  constructor(t, e) {
    super(t, e);
    let o = this._ondata;
    this._ondata = (r) => o(typeof r === "string" ? Buffer.from(r, "utf8") : r);
  }
}
export {
  q9t
};
