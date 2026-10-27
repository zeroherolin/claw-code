// shared/chunk-y2jr3qbr.js — Claude Code 2.1.310 模块 chunk-y2jr3qbr.js
import { He } from "../fs/async-hooks.9s1z.js";
import { nt } from "../context/not-admin-owned.ersa.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
function u() {
  let r = He(), e = /* @__PURE__ */ new Map(), o = 0;
  return { emit(i, s) {
    if (o === 0) {
      e.set(i, s);
      return;
    }
    r.emit(i, s);
  }, subscribe(i) {
    o++;
    let s = [...e];
    e.clear();
    for (let [g, l] of s) i(g, l);
    let c = r.subscribe(i), n = true;
    return () => {
      if (n) n = false, o--, c();
    };
  } };
}
var $ur = new nt(u);
function jAn(r) {
  return (e, o) => {
    t(`[remote-tools] ${e}: ${o}`), $ur.of(r).emit(e, o);
  };
}
export {
  $ur,
  jAn
};
