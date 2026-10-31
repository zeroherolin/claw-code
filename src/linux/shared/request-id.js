// linux/shared/request-id.js — Claude Code 2.1.310（linux）模块 chunk-wdgmsxyg.js
function ULe(n) {
  if (n === null || typeof n !== "object") return n;
  let e = n;
  if (t(e), "response" in e && e.response !== null && typeof e.response === "object") t(e.response);
  return n;
}
function t(n) {
  if ("requestId" in n && !("request_id" in n)) {
    let e = dKo(n);
    if (delete n.requestId, e !== void 0) n.request_id = e;
  }
}
function dKo(n) {
  if ("request_id" in n) return n.request_id;
  let e = "requestId" in n ? n.requestId : void 0;
  return typeof e === "string" && e.toLowerCase().startsWith("late-bind-") ? void 0 : e;
}
var X7s = 128;
export {
  ULe,
  X7s,
  dKo
};
