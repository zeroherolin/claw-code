// darwin/shared/chunk-bdfeb227.js — Claude Code 2.1.310（darwin）模块 chunk-b4jb4pbg.js
import { U } from "../context/not-admin-owned.js";
import { X } from "./chunk-57ff8cc1.js";
import { W } from "./chunk-37dd5dd4.js";
import { nSe } from "../settings/global-config-and-gates.js";
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
function iao(e) {
  let t = a();
  if (e === 0) {
    t.reset();
    return;
  }
  if (t.detachedSinceLastAttach || t.stampMs === 0) t.stampMs = e;
  t.detachedSinceLastAttach = false;
}
function yXt() {
  a().detachedSinceLastAttach = true;
}
function aao() {
  return a().detachedSinceLastAttach;
}
function o9e() {
  return a().stampMs;
}
function _Xt(e) {
  return false;
}
async function h0n() {
  for (; ; ) {
    let e = Date.now();
    if (!_Xt(e)) return;
    let { detachedSinceLastAttach: t, stampMs: o } = a(), c = t || o === 0 ? 500 : o + 500 - e;
    await X(Math.max(25, c) + 25);
  }
}
export {
  _Xt,
  aao,
  h0n,
  iao,
  o9e,
  yXt
};
