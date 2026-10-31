// linux/ui/chunk-eb304a9e.js — Claude Code 2.1.310（linux）模块 chunk-frpnm0sn.js
import { w } from "./chunk-0ed4c357.js";
import { yn, t } from "../fs/gitlab-runner-authentication-token.js";
import { Ft } from "../shared/chunk-d2c47492.js";
import { Pr } from "../shared/chunk-be0ce119.js";
import { he, iNe } from "../terminal/xterm-ghostty.js";
import { wxe } from "../fs/utf-8.aa9a.js";
import { _i, z2, s, n, ts, yf, Ys } from "../telemetry/render-glyph-cardinality.js";
import { sDe } from "../vendor/highlight/plugin-hljs-languages.js";
import { PW } from "../vendor/highlight/meta-keyword.js";
import { jPn, wlt, s6e, eno } from "../shell/built-in.js";
import { Wd } from "../shared/chunk-d08b9350.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { th, P, ee, C, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { edr } from "../shared/pasted-content.js";
import { S, vn } from "../vendor/react/chunk-0b0bf45d.js";
j();
j();
import { extname as pt } from "path";
var Xt = 500;
function Slt(l, a, i, u) {
  let d = `${u}\0${sDe.pluginGrammarGeneration}\0${iNe()}`, o = edr(d, i), m = l.get(o);
  if (m !== void 0) {
    if (l.delete(o), m.code === i && m.variant === d) return l.set(o, m), m.highlighted;
  }
  let c = a.highlight(i, { language: u });
  if (l.size >= Xt) {
    let g = l.keys().next().value;
    if (g !== void 0) l.delete(g);
  }
  return l.set(o, { variant: d, code: i, highlighted: c }), c;
}
function X(l) {
  let a = /* @__PURE__ */ new Map();
  if (l.length <= jPn) return { text: l, markers: a };
  return { text: l.split(`
`).map((d, o) => {
    let { code: m, truncatedChars: c } = wlt(d);
    if (c > 0) return a.set(o, s6e(c)), m;
    return d;
  }).join(`
`), markers: a };
}
function H(l, a) {
  if (a.size === 0) return l;
  return l.split(`
`).map((i, u) => {
    let d = a.get(u);
    return d ? i + he.dim(d) : i;
  }).join(`
`);
}
function B(l) {
  let c = w(16), { code: a, filePath: i, dim: u, skipColoring: d } = l, o = u === void 0 ? false : u, m = d === void 0 ? false : d, g, h;
  if (c[0] !== a || c[1] !== o || c[2] !== m) {
    h = vn;
    ce: {
      g = wxe(a);
      if (m) {
        let { text: k, markers: A } = X(g);
        const x2 = e(ts, { children: H(k, A) });
        let W2;
        if (c[5] !== o || c[6] !== x2) W2 = e(n, { dimColor: o, children: x2 }), c[5] = o, c[6] = x2, c[7] = W2;
        else W2 = c[7];
        h = W2;
        break ce;
      }
    }
    c[0] = a, c[1] = o, c[2] = m, c[3] = g, c[4] = h;
  } else g = c[3], h = c[4];
  if (h !== vn) return h;
  let x;
  if (c[8] !== i) x = pt(i).slice(1), c[8] = i, c[9] = x;
  else x = c[9];
  let p = x, W;
  if (c[10] !== g || c[11] !== p) W = e(rt, { codeWithSpaces: g, language: p }), c[10] = g, c[11] = p, c[12] = W;
  else W = c[12];
  let At;
  if (c[13] !== o || c[14] !== W) At = e(n, { dimColor: o, children: W }), c[13] = o, c[14] = W, c[15] = At;
  else At = c[15];
  return At;
}
function rt(l) {
  let u = w(7), { codeWithSpaces: a, language: i } = l, d;
  if (u[0] === S) d = PW(), u[0] = d;
  else d = u[0];
  let o = d, { highlightedCode: m } = z2(), c = sDe.pluginGrammarGeneration, g;
  if (u[1] !== a || u[2] !== m || u[3] !== i) {
    ce: {
      let { text: h, markers: k } = X(a);
      let A = "markdown";
      if (i) {
        if (o.supportsLanguage(i)) A = i;
        else t(`Language not supported while highlighting code, falling back to markdown: ${i}`);
      }
      ;
      try {
        g = H(Slt(m, o, h, A), k);
      } catch (x2) {
        let W = x2;
        if (W instanceof Error && W.message.includes("Unknown language")) {
          g = (t(`Language not supported while highlighting code, falling back to markdown: ${W}`), H(Slt(m, o, h, "markdown"), k));
          break ce;
        }
        g = H(h, k);
      }
    }
    u[1] = a, u[2] = m, u[3] = i, u[4] = g;
  } else g = u[4];
  let p = g, x;
  if (u[5] !== p) x = e(ts, { children: p }), u[5] = p, u[6] = x;
  else x = u[6];
  return x;
}
function me(ke, xe) {
  return e(n, { children: e(ts, { children: ke }) }, xe);
}
var Ct = 80, Hv = th(function(a) {
  let N = w(40), { code: i, filePath: u, width: d, dim: o, startLine: m, lineNumbers: c } = a, g = o === void 0 ? false : o, h = m === void 0 ? 1 : m, k = c === void 0 ? true : c, A = C(null), [x, W] = y(Ct), ce = d || x, [p] = Pr(), _ = Wd().syntaxHighlightingDisabled ?? false, z;
  if (N[0] !== i || N[1] !== u || N[2] !== _) {
    Ye: {
      if (_) {
        z = null;
        break Ye;
      }
      let _t = eno();
      if (!_t) {
        z = null;
        break Ye;
      }
      z = new _t(wxe(i), u);
    }
    N[0] = i, N[1] = u, N[2] = _, N[3] = z;
  } else z = N[3];
  let F = z, $t, vt;
  if (N[4] !== d) $t = () => {
    if (!d && A.current) {
      let { width: It } = Ys(A.current);
      if (It > 0) W(It - 2);
    }
  }, vt = [d], N[4] = d, N[5] = $t, N[6] = vt;
  else $t = N[5], vt = N[6];
  P($t, vt);
  let Tt;
  if (N[7] !== i) Tt = K(i), N[7] = i, N[8] = Tt;
  else Tt = N[8];
  let fe = String(Tt).length + 2, gt;
  Ze: {
    if (!k || h === 1) {
      gt = null;
      break Ze;
    }
    let zt = K(i);
    let Q = String(h + zt - 1).length;
    const M2 = Math.max(0, Q - String(zt).length);
    let f2;
    if (N[9] !== Q || N[10] !== M2) f2 = { digits: Q, extraCols: M2 }, N[9] = Q, N[10] = M2, N[11] = f2;
    else f2 = N[11];
    gt = f2;
  }
  let ut = gt, pe = _i() || h !== 1, M;
  ei: {
    if (F === null) {
      M = null;
      break ei;
    }
    let v = ce - (ut?.extraCols ?? 0) + (k ? 0 : fe);
    if (k && !pe) {
      let f3;
      if (N[12] !== F || N[13] !== v || N[14] !== g || N[15] !== p) f3 = F.render(p, v, g) ?? [], N[12] = F, N[13] = v, N[14] = g, N[15] = p, N[16] = f3;
      else f3 = N[16];
      let G3;
      if (N[17] !== f3) G3 = { split: false, lines: f3 }, N[17] = f3, N[18] = G3;
      else G3 = N[18];
      M = G3;
      break ei;
    }
    let f2;
    if (N[19] !== F || N[20] !== v || N[21] !== g || N[22] !== p) f2 = F.renderSplit(p, v, g), N[19] = F, N[20] = v, N[21] = g, N[22] = p, N[23] = f2;
    else f2 = N[23];
    let { gutters: mt, contents: ht } = f2;
    let G2;
    if (N[24] !== ht || N[25] !== mt) G2 = { split: true, gutters: mt, contents: ht }, N[24] = ht, N[25] = mt, N[26] = G2;
    else G2 = N[26];
    M = G2;
  }
  let b = M, f;
  ii: {
    if (ut === null || b === null || !b.split) {
      f = null;
      break ii;
    }
    let { digits: V } = ut;
    let G2;
    if (N[27] !== V || N[28] !== b.gutters || N[29] !== h) {
      let ct = h;
      G2 = b.gutters.map((be) => {
        if (yn(be).trim() === "") {
          return " ".repeat(V + 2);
        }
        let ye = ct;
        return ct = ct + 1, ` ${String(ye).padStart(V)} `;
      });
      N[27] = V, N[28] = b.gutters, N[29] = h, N[30] = G2;
    } else G2 = N[30];
    f = G2;
  }
  let ft = f, G;
  if (N[31] !== i || N[32] !== g || N[33] !== ft || N[34] !== u || N[35] !== k || N[36] !== b || N[37] !== h || N[38] !== _) G = e(s, { ref: A, children: b ? e(s, { flexDirection: "column", children: b.split ? b.contents.map((Ot, Y) => !k ? e(n, { children: e(ts, { children: Ot }) }, Y) : e(dt, { gutter: b.gutters[Y], content: Ot, displayGutter: ft?.[Y] }, Y)) : b.lines.map(me) }) : r(s, { flexDirection: "column", children: [k && h !== 1 && r(n, { dimColor: true, children: ["… from line ", h] }), e(B, { code: i, filePath: u, dim: g, skipColoring: _ })] }) }), N[31] = i, N[32] = g, N[33] = ft, N[34] = u, N[35] = k, N[36] = b, N[37] = h, N[38] = _, N[39] = G;
  else G = N[39];
  return G;
});
function K(l) {
  let a = Ft(l, `
`) + 1;
  return l.endsWith(`
`) ? a - 1 : a;
}
function dt(l) {
  let d = w(8), { gutter: a, content: i, displayGutter: u } = l, o;
  if (d[0] !== u || d[1] !== a) o = e(yf, { fromLeftEdge: true, children: u === void 0 ? e(n, { children: e(ts, { children: a }) }) : e(n, { dimColor: true, children: u }) }), d[0] = u, d[1] = a, d[2] = o;
  else o = d[2];
  let m;
  if (d[3] !== i) m = e(n, { children: e(ts, { children: i }) }), d[3] = i, d[4] = m;
  else m = d[4];
  let c;
  if (d[5] !== o || d[6] !== m) c = r(s, { flexDirection: "row", children: [o, m] }), d[5] = o, d[6] = m, d[7] = c;
  else c = d[7];
  return c;
}
export {
  Hv,
  Slt
};
