// shared/chunk-c4mpp69n.js — Claude Code 2.1.310 模块 chunk-c4mpp69n.js
var S0n = 50;
function b0n(o) {
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
  S0n,
  b0n
};
