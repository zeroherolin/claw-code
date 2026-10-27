// shared/chunk-z339v9v2.js — Claude Code 2.1.310 模块 chunk-z339v9v2.js
import { U } from "../context/not-admin-owned.ersa.js";
import { W } from "./chunk-3y73jbfr.js";
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
function YYn(e) {
  d().set(e);
}
function P5s() {
  return d().endpoint;
}
export {
  P5s,
  YYn
};
