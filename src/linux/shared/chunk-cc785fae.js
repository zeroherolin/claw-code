// linux/shared/chunk-cc785fae.js — Claude Code 2.1.310（linux）模块 chunk-qh4bhk2n.js
import { W } from "./chunk-37dd5dd4.js";
class o {
  restored = false;
  markRestored() {
    this.restored = true;
  }
}
var r = new W(() => new o());
function ydt(t) {
  r.of(t).markRestored();
}
function qB(t) {
  return r.of(t).restored;
}
export {
  qB,
  ydt
};
