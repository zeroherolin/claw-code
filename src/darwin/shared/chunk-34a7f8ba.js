// darwin/shared/chunk-34a7f8ba.js — Claude Code 2.1.310（darwin）模块 chunk-r0nkfxqh.js
function Ra(t, i) {
  let e = 0, r = [];
  function s() {
    if (e < t) return e++, Promise.resolve();
    return new Promise((n) => r.push(n));
  }
  function o() {
    let n = r.shift();
    if (n) n();
    else e--;
  }
  return async (...n) => {
    await s();
    try {
      return await i(...n);
    } finally {
      o();
    }
  };
}
function k4s(t, i, e) {
  let r = Ra(t, e);
  return async (s) => r(s, await i(s));
}
function wYn(t) {
  let i = Ra(t, (e) => new Promise((r) => e(r)));
  return { acquire: () => new Promise((e) => void i(e)) };
}
export {
  Ra,
  k4s,
  wYn
};
