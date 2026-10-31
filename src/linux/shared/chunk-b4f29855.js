// linux/shared/chunk-b4f29855.js — Claude Code 2.1.310（linux）模块 chunk-0yxktkgq.js
var d = /^\d{4}-\d{2}-\d{2}[Tt ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:[zZ]|[+-]\d{2}:?\d{2})$/;
function Vme(t) {
  return d.test(t) ? Date.parse(t) : Number.NaN;
}
export {
  Vme
};
