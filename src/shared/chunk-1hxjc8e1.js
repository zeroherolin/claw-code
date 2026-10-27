// shared/chunk-1hxjc8e1.js — Claude Code 2.1.310 模块 chunk-1hxjc8e1.js
import { Sis } from "../fs/chunk-kqpf5fh3.js";
import { hl, Vs } from "../fs/node-modules.gp4v.js";
import { v0, rMe, Zft, f2, Xq, hO } from "../core/conversation-engine.31gx.js";
import { oi } from "../git/utf-8.vh7e.js";
var MIe = (() => {
  try {
    return Sis(process.cwd());
  } catch {
    return process.cwd();
  }
})();
function xwr(r, e) {
  let n = v0(r), t = v0(e);
  if (f2(n) || f2(t)) return true;
  if (n.skipped !== t.skipped) return true;
  return rMe(n, t);
}
function j9e(r, e) {
  if (Vs(r) || hl(r)) return [];
  let n = oi(r), t = n !== null && n !== void 0 ? [n] : (() => {
    let o = hO(r);
    return o.length > 0 ? o : [r];
  })();
  return e === void 0 ? t : t.filter((o) => Xq(o, e) !== "same");
}
function Vct(r, e) {
  if (Vs(r) || hl(r)) return [];
  let n = oi(r), t = n !== null && n !== void 0 ? [n] : hO(r);
  return e === void 0 ? t : t.filter((s) => Xq(s, e) !== "same");
}
function h1e(r, e, n) {
  if (e.length === 0) return false;
  if (!e.every((s) => {
    let o = Xq(r, s);
    if (o === "indeterminate") return false;
    if (o === "same") return true;
    return !xwr(s, r);
  })) return false;
  if (n?.requireCovered === true) {
    let s = v0(r);
    if (f2(s)) return false;
    let o = (a) => a.some((u) => {
      let i = v0(u);
      if (f2(i)) return false;
      return Zft(s, i);
    });
    return o(n.coveredWitnesses ?? e) || o(n.extraCoveredRoots ?? []);
  }
  return true;
}
export {
  MIe,
  Vct,
  h1e,
  j9e,
  xwr
};
