// linux/shared/chunk-0d726e57.js — Claude Code 2.1.310（linux）模块 chunk-s1m39qcs.js
import { q } from "../context/not-admin-owned.js";
import { XZo } from "../remote/local-agent.js";
import { Nfe } from "./async-hooks.9e79.js";
var t = /^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function t_o() {
  let e = XZo();
  if (!e) return "unset";
  if (!t.test(e)) return "malformed";
  return Nfe() ? "ignored" : "used";
}
function o() {
  return t_o() === "used" ? XZo() : void 0;
}
function n_o() {
  let e = o();
  return e === void 0 ? { key: q(), fromHost: false } : { key: e, fromHost: true };
}
function aen() {
  return n_o().key;
}
export {
  aen,
  n_o,
  t_o
};
