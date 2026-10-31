// darwin/shared/chunk-9e685b7f.js — Claude Code 2.1.310（darwin）模块 chunk-fdmmynxd.js
import { BW } from "./chunk-6dcf946b.js";
import { Se, A, kt, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
var Kgr = () => a, a = () => {
}, c = () => {
  return;
};
function xe(t, i) {
  let n = Se(BW), r = A(null);
  if (r.current === null) r.current = { select: i, last: null, source: null, get: c, notifier: n, subscribe: Kgr };
  let e = r.current;
  if (e.select = i, e.source !== t || e.notifier !== n) e.notifier = n, e.subscribe = t ? n?.paced(t.subscribe) ?? t.subscribe : Kgr;
  if (e.source !== t) e.source = t, e.last = null, e.get = t ? () => {
    let s = t.getSnapshot(), o = e.select;
    if (!o) return s;
    let u = e.last;
    if (u !== null && u.snapshot === s && u.select === o) return u.selected;
    let l = o(s);
    return e.last = { snapshot: s, select: o, selected: l }, l;
  } : c;
  return kt(e.subscribe, e.get, e.get);
}
export {
  Kgr,
  xe
};
