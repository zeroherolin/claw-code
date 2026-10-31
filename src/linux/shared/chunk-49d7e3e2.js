// linux/shared/chunk-49d7e3e2.js — Claude Code 2.1.310（linux）模块 chunk-j9zrt0sr.js
import { U } from "../context/not-admin-owned.js";
import { W } from "./chunk-37dd5dd4.js";
class n {
  endpoint = void 0;
  set(e) {
    this.endpoint = e;
  }
}
var t = new W(() => new n());
function d() {
  return t.of(U().host);
}
function T9n(e) {
  d().set(e);
}
function M5s() {
  return d().endpoint;
}
export {
  M5s,
  T9n
};
