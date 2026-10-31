// linux/shared/chunk-d20db2fd.js — Claude Code 2.1.310（linux）模块 chunk-9m3pz4v7.js
import { w } from "../ui/chunk-0ed4c357.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { Gt, be, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
j();
var t = Gt(void 0);
function blt() {
  return be(t);
}
function Omr(p) {
  let l = w(7), { isFirst: o, selectionHighlight: i, noticeSystemLines: n, children: s } = p, a;
  if (l[0] !== o || l[1] !== n || l[2] !== i) a = { isQueued: true, isFirst: o, selectionHighlight: i, noticeSystemLines: n }, l[0] = o, l[1] = n, l[2] = i, l[3] = a;
  else a = l[3];
  let u = a, r;
  if (l[4] !== s || l[5] !== u) r = e(t.Provider, { value: u, children: s }), l[4] = s, l[5] = u, l[6] = r;
  else r = l[6];
  return r;
}
export {
  Omr,
  blt
};
