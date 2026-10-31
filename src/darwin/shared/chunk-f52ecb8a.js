// darwin/shared/chunk-f52ecb8a.js — Claude Code 2.1.310（darwin）模块 chunk-z2znfmtr.js
class i0t extends Error {
  label;
  timeoutMs;
  constructor(e, r) {
    super(`${e} timed out after ${r}ms`);
    this.label = e;
    this.timeoutMs = r;
    this.name = "BoundedTimeoutError";
  }
}
async function Tl(e, r, n) {
  let t, o = new Promise((c, i) => {
    t = setTimeout((s, u, m) => s(new i0t(u, m)), Math.min(r, 2147483647), i, n, r);
  });
  try {
    return await Promise.race([e, o]);
  } finally {
    if (t) clearTimeout(t);
    e.catch(() => {
    });
  }
}
var LZt = 5e3;
function Zy(e, r) {
  return Tl(e, LZt, `[runner:stuck] fs op '${r}' (check TMPDIR mount health)`);
}
export {
  LZt,
  Tl,
  Zy,
  i0t
};
