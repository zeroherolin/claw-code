// linux/shared/chunk-bdfeb227.js — Claude Code 2.1.310（linux）模块 chunk-t1rf1n9m.js
import { U } from "../context/not-admin-owned.js";
import { X } from "./chunk-57ff8cc1.js";
import { W } from "./chunk-37dd5dd4.js";
import { X_e } from "../settings/global-config-and-gates.js";
class r {
  stampMs = 0;
  detachedSinceLastAttach = false;
  reset() {
    this.stampMs = 0, this.detachedSinceLastAttach = false;
  }
}
var s = new W(() => new r());
function a() {
  return s.of(U().host);
}
function Wio(e) {
  let t = a();
  if (e === 0) {
    t.reset();
    return;
  }
  if (t.detachedSinceLastAttach || t.stampMs === 0) t.stampMs = e;
  t.detachedSinceLastAttach = false;
}
function sXt() {
  a().detachedSinceLastAttach = true;
}
function Gio() {
  return a().detachedSinceLastAttach;
}
function J6e() {
  return a().stampMs;
}
function iXt(e) {
  return false;
}
async function tDn() {
  for (; ; ) {
    let e = Date.now();
    if (!iXt(e)) return;
    let { detachedSinceLastAttach: t, stampMs: o } = a(), c = t || o === 0 ? 500 : o + 500 - e;
    await X(Math.max(25, c) + 25);
  }
}
export {
  Gio,
  J6e,
  Wio,
  iXt,
  sXt,
  tDn
};
