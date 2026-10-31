// linux/shared/chunk-244836c1.js — Claude Code 2.1.310（linux）模块 chunk-xhm2xm8d.js
var r = null;
function kCs(e) {
  r = e;
}
async function TCs() {
  if (r === null) return;
  let e = await r();
  return Array.isArray(e) ? e.filter((n) => typeof n?.tabId === "number" && typeof n?.url === "string") : void 0;
}
export {
  TCs,
  kCs
};
