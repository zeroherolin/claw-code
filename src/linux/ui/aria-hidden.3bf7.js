// linux/ui/aria-hidden.3bf7.js — Claude Code 2.1.310（linux）模块 chunk-bbcypp50.js
import { Hxe } from "../context/not-admin-owned.js";
import { Pr, TIn } from "../shared/chunk-be0ce119.js";
import { w } from "./chunk-0ed4c357.js";
import { he } from "../terminal/xterm-ghostty.js";
import { le } from "../shared/chunk-4563156b.js";
import { Hfe } from "../fs/async-hooks.7959.js";
import { _i, rt, z2, s, n, yf, gUe } from "../telemetry/render-glyph-cardinality.js";
import { Of } from "../terminal/ink-renderer.js";
import { PVo } from "../shared/chunk-e1c578e0.js";
import { wlt, s6e, Nus } from "../shell/built-in.js";
import { Wd } from "../shared/chunk-d08b9350.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { th, ee, j } from "../vendor/react/chunk-9a0b1ced.js";
import { yvt } from "../shared/chunk-c6632670.js";
j();
j();
function ge(m, x) {
  return e(s, { children: m }, x);
}
var ie = 0.4;
function _(d) {
  let c = w(10), { patch: i, dim: t, width: o } = d, [a] = Pr(), l;
  if (c[0] !== t || c[1] !== i.lines || c[2] !== i.oldStart || c[3] !== a || c[4] !== o) l = U(i.lines, i.oldStart, o, t, a), c[0] = t, c[1] = i.lines, c[2] = i.oldStart, c[3] = a, c[4] = o, c[5] = l;
  else l = c[5];
  let f = l, u;
  if (c[6] !== f) u = f.map(ge), c[6] = f, c[7] = u;
  else u = c[7];
  let R;
  if (c[8] !== u) R = e(s, { flexDirection: "column", flexGrow: 1, children: u }), c[8] = u, c[9] = R;
  else R = c[9];
  return R;
}
function ae(d) {
  return d.map((i) => {
    let t = i.startsWith("+") ? "add" : i.startsWith("-") ? "remove" : "nochange", { code: o, truncatedChars: a } = wlt(i, 1);
    return { code: o, i: 0, type: t, originalCode: o, truncatedChars: a };
  });
}
function fe(d) {
  let i = [], t = 0;
  while (t < d.length) {
    let o = d[t];
    if (!o) {
      t++;
      continue;
    }
    if (o.type === "remove") {
      let a = [o], c = t + 1;
      while (c < d.length && d[c]?.type === "remove") {
        let f = d[c];
        if (f) a.push(f);
        c++;
      }
      let l = [];
      while (c < d.length && d[c]?.type === "add") {
        let f = d[c];
        if (f) l.push(f);
        c++;
      }
      if (a.length > 0 && l.length > 0) {
        let f = Math.min(a.length, l.length);
        for (let u = 0; u < f; u++) {
          let R = a[u], m = l[u];
          if (R && m) R.wordDiff = true, m.wordDiff = true, R.matchedLine = m, m.matchedLine = R;
        }
        i.push(...a.filter(Boolean)), i.push(...l.filter(Boolean)), t = c;
      } else i.push(o), t++;
    } else i.push(o), t++;
  }
  return i;
}
function ue(d, i) {
  return PVo(d, i, { ignoreCase: false });
}
function me(d, i, t, o, a) {
  let { type: c, i: l, wordDiff: f, matchedLine: u, originalCode: R } = d;
  if (!f || !u) return null;
  let m = c === "remove" ? R : u.originalCode, x = c === "remove" ? u.originalCode : R, b = ue(m, x), H = m.length + x.length;
  if (b.filter((h) => h.added || h.removed).reduce((h, T) => h + T.value.length, 0) / H > ie || o) return null;
  let N = c === "add" ? "+" : "-", v = N.length, g = Math.max(1, i - t - 1 - v), C = [], L = [], D = 0;
  if (b.forEach((h, T) => {
    let S = false, P;
    if (c === "add") {
      if (h.added) S = true, P = "diffAddedWord";
      else if (!h.removed) S = true;
    } else if (c === "remove") {
      if (h.removed) S = true, P = "diffRemovedWord";
      else if (!h.added) S = true;
    }
    if (!S) return;
    Of(h.value, g, "wrap").split(`
`).forEach((M, O) => {
      if (!M) return;
      if (O > 0 || D + le(M) > g) {
        if (L.length > 0) C.push({ content: [...L], contentWidth: D }), L = [], D = 0;
      }
      L.push(e(n, { backgroundColor: P, children: M }, `part-${T}-${O}`)), D += le(M);
    });
  }), L.length > 0) C.push({ content: L, contentWidth: D });
  let k = d.truncatedChars > 0 ? s6e(d.truncatedChars) : "", y = -1;
  if (k && C.length > 0) {
    if (C.at(-1).contentWidth + le(k) > g) C.push({ content: [], contentWidth: 0 });
    y = C.length - 1;
  }
  return C.map(({ content: h, contentWidth: T }, S) => {
    let P = `${c}-${l}-${S}`, E = c === "add" ? o ? "diffAddedDimmed" : "diffAdded" : o ? "diffRemovedDimmed" : "diffRemoved", B = S === 0 ? l : void 0, M = (B !== void 0 ? B.toString().padStart(t) : " ".repeat(t)) + " ", O = S === y ? k : "", A = M.length + v + T + le(O), re = Math.max(0, i - A);
    return r(s, { flexDirection: "row", children: [e(yf, { fromLeftEdge: true, children: r(n, { color: a ? "text" : void 0, backgroundColor: E, dimColor: o, children: [M, N] }) }), e(n, { color: a ? "text" : void 0, backgroundColor: E, dimColor: o, children: h }), O ? e(n, { dimColor: true, children: O }) : null, e(n, { "aria-hidden": true, color: a ? "text" : void 0, backgroundColor: E, dimColor: o, children: " ".repeat(re) })] }, P);
  });
}
function U(d, i, t, o, a) {
  let c = Math.max(1, Math.floor(t)), l = ae(d), f = fe(l), u = pe(f, i), R = Math.max(...u.map(({ i: x }) => x), 0), m = Math.max(R.toString().length + 1, 0);
  return u.flatMap((x) => {
    let { type: b, code: H, i: W, wordDiff: p, matchedLine: N } = x;
    if (p && N) {
      let y = me(x, c, m, o, a);
      if (y !== null) return y;
    }
    let v = 2, g = Math.max(1, c - m - 1 - v), L = Of(H, g, "wrap").split(`
`), D = x.truncatedChars > 0 ? s6e(x.truncatedChars) : "", k = -1;
    if (D && L.length > 0) {
      let y = L.at(-1);
      if (le(y) + le(D) > g) L.push("");
      k = L.length - 1;
    }
    return L.map((y, h) => {
      let T = `${b}-${W}-${h}`, S = h === 0 ? W : void 0, P = (S !== void 0 ? S.toString().padStart(m) : " ".repeat(m)) + " ", E = b === "add" ? "+" : b === "remove" ? "-" : " ", B = h === k ? D : "", M = P.length + 1 + le(y) + le(B), O = Math.max(0, c - M), A = b === "add" ? o ? "diffAddedDimmed" : "diffAdded" : b === "remove" ? o ? "diffRemovedDimmed" : "diffRemoved" : void 0;
      return r(s, { flexDirection: "row", children: [e(yf, { fromLeftEdge: true, children: r(n, { color: a ? "text" : void 0, backgroundColor: A, dimColor: o || b === "nochange", children: [P, E] }) }), e(n, { color: a ? "text" : void 0, backgroundColor: A, dimColor: o, children: y }), B ? e(n, { dimColor: true, children: B }) : null, e(n, { "aria-hidden": true, color: a ? "text" : void 0, backgroundColor: A, dimColor: o, children: " ".repeat(O) })] }, T);
    });
  });
}
function pe(d, i) {
  let t = i, o = [], a = [...d];
  while (a.length > 0) {
    let c = a.shift(), { code: l, type: f, originalCode: u, truncatedChars: R, wordDiff: m, matchedLine: x } = c, b = { code: l, type: f, i: t, originalCode: u, truncatedChars: R, wordDiff: m, matchedLine: x };
    switch (f) {
      case "nochange":
        t++, o.push(b);
        break;
      case "add":
        t++, o.push(b);
        break;
      case "remove": {
        o.push(b);
        let H = 0;
        while (a[0]?.type === "remove") {
          t++;
          let W = a.shift(), { code: p, type: N, originalCode: v, truncatedChars: g, wordDiff: C, matchedLine: L } = W, D = { code: p, type: N, i: t, originalCode: v, truncatedChars: g, wordDiff: C, matchedLine: L };
          o.push(D), H++;
        }
        t -= H;
        break;
      }
    }
  }
  return o;
}
var oe = ["diffAdded", "diffRemoved", "diffAddedDimmed", "diffRemovedDimmed", "diffAddedWord", "diffRemovedWord"];
function X(d) {
  if (!d) return;
  let i;
  for (let t of oe) {
    let o = d[t];
    if (o !== void 0) i ??= {}, i[t] = o;
  }
  return i;
}
function Z(d, i, t, o, a, c, l, f, u, R) {
  let m = Nus();
  if (!m) return null;
  let x = R ? yvt(i) : 0, b = x > 0 && x < f ? x : 0, H = l ? oe.map((C) => l[C] ?? "").join(",") : "", W = `${c}|${H}|${f}|${u ? 1 : 0}|${b}|${he.level}|${t ?? ""}|${o}`, p = d.get(i), N = p?.get(W);
  if (N) return N;
  let v = new m(i, t, o, a), g;
  if (b > 0) {
    let { gutters: C, contents: L } = v.renderSplit(c, f, u, l);
    g = { split: true, gutterWidth: b, gutters: C, contents: L };
  } else {
    let C = v.render(c, f, u, l);
    if (C === null) return null;
    g = { split: false, lines: C };
  }
  if (!p) p = /* @__PURE__ */ new Map(), d.set(i, p);
  if (p.size >= 4) p.clear();
  return p.set(W, g), g;
}
function I(d) {
  if (!d.lines.some((t) => t.includes("	"))) return d;
  let i = d.lines.map((t) => t.slice(0, 1) + Hfe(t.slice(1)));
  return { ...d, lines: i };
}
var $X = th(function(i) {
  let p = w(19), { patch: t, dim: o, filePath: a, firstLine: c, fileContent: l, width: f, skipHighlighting: u } = i, R = u === void 0 ? false : u, [m] = Pr(), x = X(TIn()), H = Wd().syntaxHighlightingDisabled ?? false, W = rt(), N;
  if (p[0] !== W || p[1] !== t) N = W ? I(t) : t, p[0] = W, p[1] = t, p[2] = N;
  else N = p[2];
  let v = N, g = Math.max(1, Math.floor(f)), C = _i(), { structuredDiff: L } = z2(), D = R || H || W ? null : Z(L, t, c, a, l ?? null, m, x, g, o, C);
  if (!D) {
    const k2 = W ? f - 1 : f;
    let y;
    if (p[3] !== o || p[4] !== v || p[5] !== k2) y = e(s, { children: e(_, { patch: v, dim: o, width: k2 }) }), p[3] = o, p[4] = v, p[5] = k2, p[6] = y;
    else y = p[6];
    return y;
  }
  if (D.split) {
    let { gutterWidth: h, gutters: T, contents: S } = D;
    let k2;
    if (p[7] !== h || p[8] !== T) k2 = e(yf, { fromLeftEdge: true, flexShrink: 0, children: e(gUe, { lines: T, width: h }) }), p[7] = h, p[8] = T, p[9] = k2;
    else k2 = p[9];
    const y = g - h;
    let P;
    if (p[10] !== S || p[11] !== y) P = e(gUe, { lines: S, width: y }), p[10] = S, p[11] = y, p[12] = P;
    else P = p[12];
    let E;
    if (p[13] !== k2 || p[14] !== P) E = r(s, { flexDirection: "row", children: [k2, P] }), p[13] = k2, p[14] = P, p[15] = E;
    else E = p[15];
    return E;
  }
  let k;
  if (p[16] !== D.lines || p[17] !== g) k = e(s, { children: e(gUe, { lines: D.lines, width: g }) }), p[16] = D.lines, p[17] = g, p[18] = k;
  else k = p[18];
  return k;
});
function H6({ hunks: d, dim: i, width: t, filePath: o, firstLine: a, fileContent: c }) {
  return Hxe(d.map((l, f) => e(s, { flexDirection: "column", children: e($X, { patch: l, dim: i, width: t, filePath: o, firstLine: a, fileContent: c }) }, `hunk-${f}`)), (l) => e(yf, { fromLeftEdge: true, children: e(n, { dimColor: true, children: "..." }) }, `ellipsis-${l}`));
}
export {
  $X,
  H6
};
