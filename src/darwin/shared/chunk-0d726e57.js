// darwin/shared/chunk-0d726e57.js — Claude Code 2.1.310（darwin）模块 chunk-j11rxgtp.js
import { V } from "../context/not-admin-owned.js";
import { Ies } from "../remote/local-agent.js";
import { Gpe } from "./async-hooks.9e79.js";
var t = /^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function w_o() {
  let e = Ies();
  if (!e) return "unset";
  if (!t.test(e)) return "malformed";
  return Gpe() ? "ignored" : "used";
}
function o() {
  return w_o() === "used" ? Ies() : void 0;
}
function E_o() {
  let e = o();
  return e === void 0 ? { key: V(), fromHost: false } : { key: e, fromHost: true };
}
function den() {
  return E_o().key;
}
export {
  E_o,
  den,
  w_o
};
