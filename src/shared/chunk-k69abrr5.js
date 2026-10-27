// shared/chunk-k69abrr5.js — Claude Code 2.1.310 模块 chunk-k69abrr5.js
var bnn = 3e3;
function d(t) {
  t.cancel().catch(() => {
  });
}
async function T6(t, { maxBytes: o = 65536, timeoutMs: i } = {}) {
  let e;
  try {
    let n = t.body?.getReader();
    if (!n) return;
    if (i !== void 0) e = setTimeout(d, i, n), e.unref?.();
    let r = o;
    for (; ; ) {
      let { done: a, value: c } = await n.read();
      if (a) return;
      if (r -= c.byteLength, r < 0) {
        await n.cancel();
        return;
      }
    }
  } catch {
  } finally {
    if (e !== void 0) clearTimeout(e);
  }
}
export {
  T6,
  bnn
};
