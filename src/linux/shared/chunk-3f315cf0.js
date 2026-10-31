// linux/shared/chunk-3f315cf0.js — Claude Code 2.1.310（linux）模块 chunk-x42ktvz2.js
var rDn = 50;
function oDn(o) {
  let r = performance.now() + o, e = 0, n = setInterval(() => {
    let t = performance.now();
    e = Math.max(e, t - r), r = t + o;
  }, o);
  return n.unref(), { takeMaxMs() {
    let t = e;
    return e = 0, t;
  }, stop() {
    return clearInterval(n), Math.max(e, performance.now() - r);
  } };
}
export {
  oDn,
  rDn
};
