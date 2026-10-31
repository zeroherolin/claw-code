// linux/shared/chunk-514dc54c.js — Claude Code 2.1.310（linux）模块 chunk-9kh63k93.js
var lnn = 3e3;
function d(t) {
  t.cancel().catch(() => {
  });
}
async function gK(t, { maxBytes: o = 65536, timeoutMs: i } = {}) {
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
  gK,
  lnn
};
