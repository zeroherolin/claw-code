// darwin/shared/request-id.js — Claude Code 2.1.310（darwin）模块 chunk-qrf8nwwk.js
function VDe(n) {
  if (n === null || typeof n !== "object") return n;
  let e = n;
  if (t(e), "response" in e && e.response !== null && typeof e.response === "object") t(e.response);
  return n;
}
function t(n) {
  if ("requestId" in n && !("request_id" in n)) {
    let e = N6o(n);
    if (delete n.requestId, e !== void 0) n.request_id = e;
  }
}
function N6o(n) {
  if ("request_id" in n) return n.request_id;
  let e = "requestId" in n ? n.requestId : void 0;
  return typeof e === "string" && e.toLowerCase().startsWith("late-bind-") ? void 0 : e;
}
var MZs = 128;
export {
  MZs,
  N6o,
  VDe
};
