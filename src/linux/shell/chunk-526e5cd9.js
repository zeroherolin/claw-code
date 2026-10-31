// linux/shell/chunk-526e5cd9.js — Claude Code 2.1.310（linux）模块 chunk-g2rqnn1x.js
function rIe(t, r) {
  switch (r) {
    case "bash":
      return `!${t}`;
    default:
      return t;
  }
}
function vS(t) {
  if (t.startsWith("!")) return "bash";
  return "prompt";
}
function oD(t) {
  if (vS(t) === "prompt") return t;
  return t.slice(1);
}
function gIt(t) {
  return t === "!";
}
function zhs({ nextValue: t, value: r, cursorOffset: n, mode: o }) {
  let e = vS(t);
  if (n !== 0 || e === "prompt" || e === o) return false;
  return t.length === r.length + 1 || r.length === 0;
}
export {
  gIt,
  oD,
  rIe,
  vS,
  zhs
};
