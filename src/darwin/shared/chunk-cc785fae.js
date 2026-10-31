// darwin/shared/chunk-cc785fae.js — Claude Code 2.1.310（darwin）模块 chunk-eaaaqh8e.js
import { W } from "./chunk-37dd5dd4.js";
class o {
  restored = false;
  markRestored() {
    this.restored = true;
  }
}
var r = new W(() => new o());
function Edt(t) {
  r.of(t).markRestored();
}
function Z1(t) {
  return r.of(t).restored;
}
export {
  Edt,
  Z1
};
