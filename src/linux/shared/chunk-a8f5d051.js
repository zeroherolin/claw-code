// linux/shared/chunk-a8f5d051.js — Claude Code 2.1.310（linux）模块 chunk-0a5g8f4s.js
var o = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", colon: ":", semi: ";", sol: "/", Tab: "	", NewLine: `
` };
function s(n) {
  return n.replace(/&(?:#[xX]([0-9a-fA-F]+);?|#(\d+);?|([a-zA-Z][a-zA-Z0-9]*);)/g, (r, t, e, i) => {
    if (t !== void 0) return String.fromCodePoint(parseInt(t, 16));
    if (e !== void 0) return String.fromCodePoint(parseInt(e, 10));
    return i in o ? o[i] : r;
  });
}
function Yft(n) {
  let r;
  try {
    r = s(n);
  } catch {
    return false;
  }
  if (/&(?:#|[a-zA-Z][a-zA-Z0-9]*;)/.test(r)) return false;
  let t;
  try {
    t = new URL(r, "https://artifact.invalid/");
  } catch {
    return false;
  }
  return t.protocol === "https:" || t.protocol === "http:" || t.protocol === "mailto:";
}
export {
  Yft
};
