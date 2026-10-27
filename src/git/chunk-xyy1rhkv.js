// git/chunk-xyy1rhkv.js — Claude Code 2.1.310 模块 chunk-xyy1rhkv.js
function hys(t) {
  return /\bgit\b(?:\s+(?:-C\s+\S+|-c\s+\S+=\S+|--\S+))*\s+commit(?:\s|$)/.test(t);
}
function yys(t, n, s) {
  if (s !== void 0) return s === 0;
  let e = [/\[\w+[^\]]*\]\s+/, /create mode/, /\d+ files? changed/, /\d+ insertions?/, /\d+ deletions?/], i = t + n;
  return e.some((o) => o.test(i));
}
export {
  hys,
  yys
};
