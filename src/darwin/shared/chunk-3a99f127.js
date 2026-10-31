// darwin/shared/chunk-3a99f127.js — Claude Code 2.1.310（darwin）模块 chunk-w13tcac4.js
class e {
  wait = null;
}
var t = new e();
function iii(i) {
  let r = t.wait;
  return t.wait = i, r;
}
async function bor() {
  try {
    await t.wait?.();
  } catch {
  }
}
export {
  bor,
  iii
};
