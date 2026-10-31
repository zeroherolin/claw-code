// darwin/shared/chunk-0988af03.js — Claude Code 2.1.310（darwin）模块 chunk-ed5agf3q.js
var AEe = 10, REe = 2e3;
function xEe(m, n, t = Date.now) {
  let e = m, o = t();
  function r() {
    let k = t(), u = Math.floor((k - o) / n);
    if (u > 0) e = Math.min(m, e + u), o += u * n;
  }
  return { tryConsume() {
    if (r(), e > 0) return e--, true;
    return false;
  }, tokens() {
    return r(), e;
  }, msUntilToken() {
    if (r(), e > 0) return 0;
    return Math.max(0, o + n - t());
  } };
}
export {
  AEe,
  REe,
  xEe
};
