// linux/git/chunk-b8d876fd.js — Claude Code 2.1.310（linux）模块 chunk-g9p3r0nw.js
function Vgs(t) {
  return /\bgit\b(?:\s+(?:-C\s+\S+|-c\s+\S+=\S+|--\S+))*\s+commit(?:\s|$)/.test(t);
}
function qgs(t, n, s) {
  if (s !== void 0) return s === 0;
  let e = [/\[\w+[^\]]*\]\s+/, /create mode/, /\d+ files? changed/, /\d+ insertions?/, /\d+ deletions?/], i = t + n;
  return e.some((o) => o.test(i));
}
export {
  Vgs,
  qgs
};
