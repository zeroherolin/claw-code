// shared/pasted-content.99va.js — Claude Code 2.1.310 模块 chunk-99vamy45.js
var E3t = "pasted_content", aCn = 4, omi = '<pasted_content id="', ots = `">
`, smi = '</pasted_content id="';
function ydr(t) {
  return `<pasted_content id="${t}">
`;
}
function lCn(t) {
  return `</pasted_content id="${t}">
`;
}
function sts(t) {
  if (t.length !== 4) return false;
  for (let e = 0; e < t.length; e++) {
    let n = t.charCodeAt(e);
    if (!(n >= 48 && n <= 57 || n >= 97 && n <= 102)) return false;
  }
  return true;
}
var its = /[([{"'`]/, ats = /[)\]}"'`.,;:!?]/;
function lts(t, e = 0, n = t.length) {
  let s = e;
  while (s < n && ats.test(t[s])) s++;
  return s >= n || /\s/.test(t[s]);
}
function v3t(t) {
  let e = [], n = 0, s = 0;
  for (; ; ) {
    let c = t.indexOf('<pasted_content id="', s);
    if (c === -1) break;
    let r = c + 20, o = t.slice(r, r + 4);
    if (!sts(o) || !t.startsWith(`">
`, r + 4)) {
      s = r;
      continue;
    }
    let i = r + 4 + 3, f = lCn(o).slice(0, -1), l = t.indexOf(`
${f}`, i - 1) + 1;
    if (l === 0) break;
    let E = c;
    for (let d = 0; d < 2 && E > n && t[E - 1] === `
`; d++) E--;
    if (E > n) e.push({ kind: "text", text: t.slice(n, E) });
    n = l + f.length;
    for (let d = 0; d < 2 && t[n] === `
`; d++) n++;
    e.push({ kind: "block", id: o, body: t.slice(i, l - 1), raw: t.slice(E, n) }), s = n;
  }
  if (n < t.length) e.push({ kind: "text", text: t.slice(n) });
  return e;
}
function rie(t) {
  let e = v3t(t);
  if (e.length === 1 && e[0].kind === "text") return t;
  return e.map((n) => n.kind === "text" ? n.text : n.body).join("");
}
function dts(t, e) {
  let n = v3t(t);
  if (!n.some((r) => r.kind === "block" && r.id === e)) return t;
  let s = "", c = false;
  for (let [r, o] of n.entries()) {
    let i = n[r + 1], T = i?.kind === "block" && i.id === e;
    if (o.kind === "text" || o.id !== e) {
      let a = o.kind === "text" ? o.text : o.raw;
      if (c) a = a.replace(/^\s+/, "");
      if (T && i.body.includes(`
`)) a = a.replace(/\s+$/, "");
      if (a === "") continue;
      if (c && s !== "") s += `
`;
      s += a, c = false;
      continue;
    }
    let f = o.body.includes(`
`), l = s.length;
    while (l > 0 && its.test(s[l - 1])) l--;
    let E = l === 0 || /\s/.test(s[l - 1]);
    if ((f || c || !E) && s !== "") s += `
`;
    s += o.body;
    let d = i === void 0 ? "" : i.kind === "text" ? i.text : i.raw;
    c = f || T || /^\s\s/.test(d) || !lts(d);
  }
  return s;
}
function sfe(t) {
  let e = 0;
  for (let n = 0; n < t.length; n++) e = (e << 5) - e + t.charCodeAt(n) | 0;
  return e;
}
function WH(t) {
  return Bun.hash(t).toString();
}
function hdr(t, e) {
  return Bun.hash(e, Bun.hash(t)).toString();
}
export {
  E3t,
  WH,
  aCn,
  ats,
  dts,
  hdr,
  its,
  lCn,
  lts,
  omi,
  ots,
  rie,
  sfe,
  smi,
  sts,
  v3t,
  ydr
};
