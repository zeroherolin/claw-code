// telemetry/chunk-zbtej1v8.js — Claude Code 2.1.310 模块 chunk-zbtej1v8.js
var r = ["ELOOP", "ENXIO", "EISDIR"], vFo = new Set(r);
function YB(e) {
  return e !== void 0 && vFo.has(e);
}
function jun(e) {
  return e.code === "Failed" && YB(e.telemetryCode);
}
export {
  YB,
  jun,
  vFo
};
