// linux/shared/chunk-34a7f8ba.js — Claude Code 2.1.310（linux）模块 chunk-87f056s4.js
function Ca(t, i) {
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
function j5s(t, i, e) {
  let r = Ca(t, e);
  return async (s) => r(s, await i(s));
}
function O9n(t) {
  let i = Ca(t, (e) => new Promise((r) => e(r)));
  return { acquire: () => new Promise((e) => void i(e)) };
}
export {
  Ca,
  O9n,
  j5s
};
