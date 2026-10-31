// linux/shared/chunk-fb108757.js — Claude Code 2.1.310（linux）模块 chunk-gdqrmwqs.js
import { $ss } from "../fs/chunk-86a4e44e.js";
import { gl, zs } from "../fs/node-modules.js";
import { bD, JOe, Kpt, rG, U4, uO } from "../core/conversation-engine.js";
import { oi } from "../git/utf-8.js";
var CIe = (() => {
  try {
    return $ss(process.cwd());
  } catch {
    return process.cwd();
  }
})();
function pwr(r, e) {
  let n = bD(r), t = bD(e);
  if (rG(n) || rG(t)) return true;
  if (n.skipped !== t.skipped) return true;
  return JOe(n, t);
}
function D3e(r, e) {
  if (zs(r) || gl(r)) return [];
  let n = oi(r), t = n !== null && n !== void 0 ? [n] : (() => {
    let o = uO(r);
    return o.length > 0 ? o : [r];
  })();
  return e === void 0 ? t : t.filter((o) => U4(o, e) !== "same");
}
function Wct(r, e) {
  if (zs(r) || gl(r)) return [];
  let n = oi(r), t = n !== null && n !== void 0 ? [n] : uO(r);
  return e === void 0 ? t : t.filter((s) => U4(s, e) !== "same");
}
function iBe(r, e, n) {
  if (e.length === 0) return false;
  if (!e.every((s) => {
    let o = U4(r, s);
    if (o === "indeterminate") return false;
    if (o === "same") return true;
    return !pwr(s, r);
  })) return false;
  if (n?.requireCovered === true) {
    let s = bD(r);
    if (rG(s)) return false;
    let o = (a) => a.some((u) => {
      let i = bD(u);
      if (rG(i)) return false;
      return Kpt(s, i);
    });
    return o(n.coveredWitnesses ?? e) || o(n.extraCoveredRoots ?? []);
  }
  return true;
}
export {
  CIe,
  D3e,
  Wct,
  iBe,
  pwr
};
