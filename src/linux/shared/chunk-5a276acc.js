// linux/shared/chunk-5a276acc.js — Claude Code 2.1.310（linux）模块 chunk-ze467yxg.js
import { De } from "../fs/async-hooks.93b1.js";
import { nt } from "../context/not-admin-owned.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
function u() {
  let r = De(), e = /* @__PURE__ */ new Map(), o = 0;
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
var Mur = new nt(u);
function FCn(r) {
  return (e, o) => {
    t(`[remote-tools] ${e}: ${o}`), Mur.of(r).emit(e, o);
  };
}
export {
  FCn,
  Mur
};
