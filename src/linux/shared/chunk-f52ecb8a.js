// linux/shared/chunk-f52ecb8a.js — Claude Code 2.1.310（linux）模块 chunk-a3zzd6aj.js
class ZMt extends Error {
  label;
  timeoutMs;
  constructor(e, r) {
    super(`${e} timed out after ${r}ms`);
    this.label = e;
    this.timeoutMs = r;
    this.name = "BoundedTimeoutError";
  }
}
async function Al(e, r, n) {
  let t, o = new Promise((c, i) => {
    t = setTimeout((s, u, m) => s(new ZMt(u, m)), Math.min(r, 2147483647), i, n, r);
  });
  try {
    return await Promise.race([e, o]);
  } finally {
    if (t) clearTimeout(t);
    e.catch(() => {
    });
  }
}
var RZt = 5e3;
function Qy(e, r) {
  return Al(e, RZt, `[runner:stuck] fs op '${r}' (check TMPDIR mount health)`);
}
export {
  Al,
  Qy,
  RZt,
  ZMt
};
