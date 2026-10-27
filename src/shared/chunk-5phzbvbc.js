// shared/chunk-5phzbvbc.js — Claude Code 2.1.310 模块 chunk-5phzbvbc.js
var d = /^\d{4}-\d{2}-\d{2}[Tt ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:[zZ]|[+-]\d{2}:?\d{2})$/;
function Qme(t) {
  return d.test(t) ? Date.parse(t) : Number.NaN;
}
export {
  Qme
};
