// linux/shared/chunk-3a99f127.js — Claude Code 2.1.310（linux）模块 chunk-awy6yynp.js
class e {
  wait = null;
}
var t = new e();
function vsi(i) {
  let r = t.wait;
  return t.wait = i, r;
}
async function tor() {
  try {
    await t.wait?.();
  } catch {
  }
}
export {
  tor,
  vsi
};
