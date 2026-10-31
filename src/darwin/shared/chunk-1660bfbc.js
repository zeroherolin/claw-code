// darwin/shared/chunk-1660bfbc.js — Claude Code 2.1.310（darwin）模块 chunk-swqe0mg6.js
var wZt = "you are not signed in, or this machine is not authorized to write to the session", BTs = "without your deny and ask rules";
function jTs({ completion: n, status: a, description: s = u, afterFirstReply: m = r }) {
  let t;
  n.then((e) => {
    t = { outcome: e, atMs: Date.now() };
  });
  let i = m, o, l = new Promise((e) => {
    o = e;
  });
  return { completion: n, status: a, description: s, outcome: () => t?.outcome, settledAtMs: () => t?.atMs, async afterFirstReply(e) {
    let d = i;
    if (i = null, d === null) return r();
    try {
      return await d(e, o);
    } finally {
      o(void 0);
    }
  }, readBack: l };
}
function r() {
  return Promise.resolve("skipped");
}
function u() {
  return null;
}
export {
  BTs,
  jTs,
  wZt
};
