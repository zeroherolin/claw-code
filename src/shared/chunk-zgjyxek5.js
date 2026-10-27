// shared/chunk-zgjyxek5.js — Claude Code 2.1.310 模块 chunk-zgjyxek5.js
var r = null;
function ZAs(e) {
  r = e;
}
async function eRs() {
  if (r === null) return;
  let e = await r();
  return Array.isArray(e) ? e.filter((n) => typeof n?.tabId === "number" && typeof n?.url === "string") : void 0;
}
export {
  ZAs,
  eRs
};
