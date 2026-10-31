// linux/shared/chunk-7894c314.js — Claude Code 2.1.310（linux）模块 chunk-dp02rht1.js
import { g6 } from "../artifacts/cowritten-artifact-html.js";
import { mor } from "../fs/reply-across-default-dirs.js";
import { nkt, yYr } from "../agents/session-stable-address.js";
import { W_e } from "../settings/global-config-and-gates.js";
var d = new RegExp(`^<${g6}[ \\t>]`), S = `</${g6}>`, C = ["", `
`], I = /\sfrom-plugin\s*(?:=\s*(?:"[^"<>]*"|'[^'<>]*'|[^\s>]*))?/gi, A = /from-plugin/i;
function cJ(e, n) {
  if (typeof e === "string") return h(e, n === W_e);
  if (!Array.isArray(e)) return e;
  let t = e;
  for (let o of C) {
    let s = [], c = [], r = "";
    t.forEach((i, u) => {
      if (i.type === "text") {
        if (c.length > 0) r += o;
        s.push(r.length), c.push(u), r += i.text;
      }
    });
    let l = yYr(r);
    if (l.length === 0) continue;
    let g = t.slice(), a = 0;
    c.forEach((i, u) => {
      let f = g[i], P = s[u], _ = s[u + 1] ?? 1 / 0;
      if (f.type !== "text") return;
      let p = [], E = 0;
      for (; a < l.length && l[a] < _; a++) {
        let m = l[a] - P;
        p.push(f.text.slice(E, m), "<\\"), E = m + 1;
      }
      if (p.length > 0) p.push(f.text.slice(E)), g[i] = { ...f, text: p.join("") };
    }), t = g;
  }
  return t;
}
function wCs(e) {
  return h(e, true);
}
function h(e, n) {
  let t = e.trimEnd(), o = t.length - S.length, s = mor.test(e);
  if (!(o > 0 && t.endsWith(S) && (s || n && d.test(e)))) return nkt(e);
  let r = B(e.slice(1, o));
  return A.test(O(r)) ? nkt(e) : `<${nkt(r)}${e.slice(o)}`;
}
function B(e) {
  let n = O(e);
  return n.replace(I, "") + e.slice(n.length);
}
function O(e) {
  let n = e.indexOf(">");
  return n < 0 ? e : e.slice(0, n);
}
export {
  cJ,
  wCs
};
