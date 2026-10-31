// ui/chunk-ntt0xt6a.js — Claude Code 2.1.310 模块 chunk-ntt0xt6a.js
import { w } from "./chunk-zqxc4qtb.js";
import { yn, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { $t } from "../shared/chunk-j79dwkaq.js";
import { Pr } from "../shared/chunk-y6x1q9pp.js";
import { he, pNe } from "../terminal/xterm-ghostty.qrwz.js";
import { Cxe } from "../fs/utf-8.fmbx.js";
import { _i, e6, s, n, ts, hp, Ys } from "../telemetry/render-glyph-cardinality.7car.js";
import { u0e } from "../vendor/highlight/plugin-hljs-languages.5eqx.js";
import { $W } from "../vendor/highlight/meta-keyword.jk0t.js";
import { hIn, Mlt, _5e, nro } from "../shell/built-in.qsb4.js";
import { Wd } from "../shared/chunk-vx3s7x6j.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
import { th, P, te, A, y, j } from "../vendor/react/chunk-s8vmszp2.js";
import { hdr } from "../shared/pasted-content.99va.js";
import { b, En } from "../vendor/react/chunk-meds60nn.js";
j();
j();
import { extname as pt } from "path";
var Xt = 500;
function Olt(l, a, i, u) {
  let d = `${u}\0${u0e.pluginGrammarGeneration}\0${pNe()}`, o = hdr(d, i), m = l.get(o);
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
  if (l.length <= hIn) return { text: l, markers: a };
  return { text: l.split(`
`).map((d, o) => {
    let { code: m, truncatedChars: c } = Mlt(d);
    if (c > 0) return a.set(o, _5e(c)), m;
    return d;
  }).join(`
`), markers: a };
}
function S(l, a) {
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
    h = En;
    ce: {
      g = Cxe(a);
      if (m) {
        let { text: x, markers: F } = X(g);
        const C2 = e(ts, { children: S(x, F) });
        let W2;
        if (c[5] !== o || c[6] !== C2) W2 = e(n, { dimColor: o, children: C2 }), c[5] = o, c[6] = C2, c[7] = W2;
        else W2 = c[7];
        h = W2;
        break ce;
      }
    }
    c[0] = a, c[1] = o, c[2] = m, c[3] = g, c[4] = h;
  } else g = c[3], h = c[4];
  if (h !== En) return h;
  let C;
  if (c[8] !== i) C = pt(i).slice(1), c[8] = i, c[9] = C;
  else C = c[9];
  let p = C, W;
  if (c[10] !== g || c[11] !== p) W = e(rt, { codeWithSpaces: g, language: p }), c[10] = g, c[11] = p, c[12] = W;
  else W = c[12];
  let Ft;
  if (c[13] !== o || c[14] !== W) Ft = e(n, { dimColor: o, children: W }), c[13] = o, c[14] = W, c[15] = Ft;
  else Ft = c[15];
  return Ft;
}
function rt(l) {
  let u = w(7), { codeWithSpaces: a, language: i } = l, d;
  if (u[0] === b) d = $W(), u[0] = d;
  else d = u[0];
  let o = d, { highlightedCode: m } = e6(), c = u0e.pluginGrammarGeneration, g;
  if (u[1] !== a || u[2] !== m || u[3] !== i) {
    ce: {
      let { text: h, markers: x } = X(a);
      let F = "markdown";
      if (i) {
        if (o.supportsLanguage(i)) F = i;
        else t(`Language not supported while highlighting code, falling back to markdown: ${i}`);
      }
      ;
      try {
        g = S(Olt(m, o, h, F), x);
      } catch (C2) {
        let W = C2;
        if (W instanceof Error && W.message.includes("Unknown language")) {
          g = (t(`Language not supported while highlighting code, falling back to markdown: ${W}`), S(Olt(m, o, h, "markdown"), x));
          break ce;
        }
        g = S(h, x);
      }
    }
    u[1] = a, u[2] = m, u[3] = i, u[4] = g;
  } else g = u[4];
  let p = g, C;
  if (u[5] !== p) C = e(ts, { children: p }), u[5] = p, u[6] = C;
  else C = u[6];
  return C;
}
function me(ke, xe) {
  return e(n, { children: e(ts, { children: ke }) }, xe);
}
var Ct = 80, LE = th(function(a) {
  let N = w(40), { code: i, filePath: u, width: d, dim: o, startLine: m, lineNumbers: c } = a, g = o === void 0 ? false : o, h = m === void 0 ? 1 : m, x = c === void 0 ? true : c, F = A(null), [C, W] = y(Ct), ce = d || C, [p] = Pr(), _ = Wd().syntaxHighlightingDisabled ?? false, z;
  if (N[0] !== i || N[1] !== u || N[2] !== _) {
    Ye: {
      if (_) {
        z = null;
        break Ye;
      }
      let At = nro();
      if (!At) {
        z = null;
        break Ye;
      }
      z = new At(Cxe(i), u);
    }
    N[0] = i, N[1] = u, N[2] = _, N[3] = z;
  } else z = N[3];
  let D = z, _t, vt;
  if (N[4] !== d) _t = () => {
    if (!d && F.current) {
      let { width: It } = Ys(F.current);
      if (It > 0) W(It - 2);
    }
  }, vt = [d], N[4] = d, N[5] = _t, N[6] = vt;
  else _t = N[5], vt = N[6];
  P(_t, vt);
  let Tt;
  if (N[7] !== i) Tt = K(i), N[7] = i, N[8] = Tt;
  else Tt = N[8];
  let fe = String(Tt).length + 2, gt;
  Ze: {
    if (!x || h === 1) {
      gt = null;
      break Ze;
    }
    let zt = K(i);
    let Q = String(h + zt - 1).length;
    const E2 = Math.max(0, Q - String(zt).length);
    let f2;
    if (N[9] !== Q || N[10] !== E2) f2 = { digits: Q, extraCols: E2 }, N[9] = Q, N[10] = E2, N[11] = f2;
    else f2 = N[11];
    gt = f2;
  }
  let ut = gt, pe = _i() || h !== 1, E;
  ei: {
    if (D === null) {
      E = null;
      break ei;
    }
    let v = ce - (ut?.extraCols ?? 0) + (x ? 0 : fe);
    if (x && !pe) {
      let f3;
      if (N[12] !== D || N[13] !== v || N[14] !== g || N[15] !== p) f3 = D.render(p, v, g) ?? [], N[12] = D, N[13] = v, N[14] = g, N[15] = p, N[16] = f3;
      else f3 = N[16];
      let G3;
      if (N[17] !== f3) G3 = { split: false, lines: f3 }, N[17] = f3, N[18] = G3;
      else G3 = N[18];
      E = G3;
      break ei;
    }
    let f2;
    if (N[19] !== D || N[20] !== v || N[21] !== g || N[22] !== p) f2 = D.renderSplit(p, v, g), N[19] = D, N[20] = v, N[21] = g, N[22] = p, N[23] = f2;
    else f2 = N[23];
    let { gutters: mt, contents: ht } = f2;
    let G2;
    if (N[24] !== ht || N[25] !== mt) G2 = { split: true, gutters: mt, contents: ht }, N[24] = ht, N[25] = mt, N[26] = G2;
    else G2 = N[26];
    E = G2;
  }
  let k = E, f;
  ii: {
    if (ut === null || k === null || !k.split) {
      f = null;
      break ii;
    }
    let { digits: V } = ut;
    let G2;
    if (N[27] !== V || N[28] !== k.gutters || N[29] !== h) {
      let ct = h;
      G2 = k.gutters.map((be) => {
        if (yn(be).trim() === "") {
          return " ".repeat(V + 2);
        }
        let ye = ct;
        return ct = ct + 1, ` ${String(ye).padStart(V)} `;
      });
      N[27] = V, N[28] = k.gutters, N[29] = h, N[30] = G2;
    } else G2 = N[30];
    f = G2;
  }
  let ft = f, G;
  if (N[31] !== i || N[32] !== g || N[33] !== ft || N[34] !== u || N[35] !== x || N[36] !== k || N[37] !== h || N[38] !== _) G = e(s, { ref: F, children: k ? e(s, { flexDirection: "column", children: k.split ? k.contents.map((Ot, Y) => !x ? e(n, { children: e(ts, { children: Ot }) }, Y) : e(dt, { gutter: k.gutters[Y], content: Ot, displayGutter: ft?.[Y] }, Y)) : k.lines.map(me) }) : r(s, { flexDirection: "column", children: [x && h !== 1 && r(n, { dimColor: true, children: ["… from line ", h] }), e(B, { code: i, filePath: u, dim: g, skipColoring: _ })] }) }), N[31] = i, N[32] = g, N[33] = ft, N[34] = u, N[35] = x, N[36] = k, N[37] = h, N[38] = _, N[39] = G;
  else G = N[39];
  return G;
});
function K(l) {
  let a = $t(l, `
`) + 1;
  return l.endsWith(`
`) ? a - 1 : a;
}
function dt(l) {
  let d = w(8), { gutter: a, content: i, displayGutter: u } = l, o;
  if (d[0] !== u || d[1] !== a) o = e(hp, { fromLeftEdge: true, children: u === void 0 ? e(n, { children: e(ts, { children: a }) }) : e(n, { dimColor: true, children: u }) }), d[0] = u, d[1] = a, d[2] = o;
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
  LE,
  Olt
};
