// darwin/ui/aria-label.89b9.js — Claude Code 2.1.310（darwin）模块 chunk-76hbywcz.js
import { re, Qa, $t } from "../shared/chunk-d2c47492.js";
import { q_e, xnr, i6t, $G } from "../settings/global-config-and-gates.js";
import { nbe } from "../mcp/always-allow.js";
import { Xqe } from "../fs/async-hooks.7959.js";
import { ti } from "../agents/tool-use-id.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { w } from "./chunk-0ed4c357.js";
import { sl, FW, pN } from "./truncate-end.b3f5.js";
import { Qxr } from "../core/conversation-engine.js";
import { ne } from "../workflows/workflow-size-guideline-change.js";
import { Ilt } from "../shared/chunk-d20db2fd.js";
import { Ql } from "./chunk-1ff74795.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { AC } from "../shared/chunk-f04da5a0.js";
import { g8e, wvr, vMt, ACs } from "../shared/chunk-c984f251.js";
import { UFe, Sz } from "../shared/chunk-5acf247e.js";
import { Fr, En } from "../vendor/react/chunk-0b0bf45d.js";
var W5 = {};
Fr(W5, { default: () => W5, deliveredBy: () => Y, useUserMessageSite: () => n5e });
function aUe(i, t = /* @__PURE__ */ new Date()) {
  let o = new Date(i);
  if (Number.isNaN(o.getTime())) return "";
  let a = g8e(), d = vMt(), { timeZone: m } = d, f = V(t, m) - V(o, m), c = Math.round(f / 864e5), u = "older";
  if (c === 0) u = "today";
  else if (c > 0 && c < 7) u = "week";
  if (d.kind === "preset") return wvr(d, se[u], a, o);
  let l = ACs(d.pattern, m, o);
  if (u === "today") return l;
  let g = Sz(a, UFe(de[u], m)).format(o);
  return u === "week" ? `${g} ${l}` : `${g}, ${l}`;
}
var se = { today: { hour: "numeric", minute: "2-digit" }, week: { weekday: "long", hour: "numeric", minute: "2-digit" }, older: { weekday: "long", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" } }, de = { week: { weekday: "long" }, older: { weekday: "long", month: "short", day: "numeric" } };
function V(i, t) {
  if (!t) return new Date(i.getFullYear(), i.getMonth(), i.getDate()).getTime();
  let o = Sz("en-US", UFe(ae, t)).formatToParts(i), a = {};
  for (let d of o) a[d.type] = d.value;
  return Date.UTC(Number(a.year), Number(a.month) - 1, Number(a.day));
}
var ae = { year: "numeric", month: "2-digit", day: "2-digit" };
function Y(i) {
  switch (i.kind) {
    case "plugin":
      return i.name;
    case "channel":
      return nbe(i.server)?.pluginName;
    default:
      return;
  }
}
function n5e({ messageId: i, stored: t, text: o, isExpanded: a, task: d, sender: m, draw: f }) {
  let c = ti(d), u = ti(m), l = pN("UserMessage", () => ({ requestId: i, props: { text: o, origin: Qxr(t), isExpanded: a, ...d !== void 0 && { task: d }, ...m !== void 0 && { from: m } } }), [i, o, t, a, c, u]);
  return FW(l, (g) => f(g.props.text), Y(l.props.origin));
}
var me = 1e4, ue = 2500, pe = 2500;
function J9t(i) {
  if (i.length <= me) return i;
  let t = re(i, ue), o = Qa(i, pe), a = $t(i, `
`, t.length) - $t(o, `
`), d = i.length - t.length - o.length;
  return { head: t, hiddenLines: a, hiddenChars: d, tail: o };
}
var fe = 4e3;
function fmr(i) {
  return i.length <= fe && !(q_e() && xnr(i));
}
function Q9t(i) {
  let b = w(34), { text: t, useBriefLayout: o, timestamp: a, bodyOnly: d, awaitingModel: m, markLinks: f } = i, c = d === void 0 ? false : d, u = m === void 0 ? false : m, l = Ilt(), g = l?.isQueued ?? false, p = typeof t === "object", M;
  if (b[0] !== t || b[1] !== p) M = !p && fmr(t), b[0] = t, b[1] = p, b[2] = M;
  else M = b[2];
  let C = M, x = l?.selectionHighlight === "on", y = g || u;
  if (o || c) {
    let P2;
    if (b[3] !== a) P2 = a ? aUe(a) : "", b[3] = a, b[4] = P2;
    else P2 = b[4];
    let K = P2;
    let S = x ? "suggestion" : y ? c ? "inactive" : "subtle" : "text";
    const k2 = c ? 0 : 2;
    let D2;
    if (b[5] !== c || b[6] !== x || b[7] !== K || b[8] !== y) D2 = c ? null : r(s, { flexDirection: "row", children: [x ? r(n, { "aria-label": "selected:", color: "suggestion", children: [ne.pointer, " "] }) : null, e(n, { color: x ? "suggestion" : y ? "subtle" : "briefLabelYou", children: "You" }), K ? r(n, { dimColor: true, children: [" ", K] }) : null] }), b[5] = c, b[6] = x, b[7] = K, b[8] = y, b[9] = D2;
    else D2 = b[9];
    let q;
    if (b[10] !== c || b[11] !== f || b[12] !== C || b[13] !== t || b[14] !== S || b[15] !== p || b[16] !== y) q = p ? r(Q, { children: [e(n, { color: S, children: t.head }), e(R, { hiddenLines: t.hiddenLines, indent: c ? 0 : 2 }), e(n, { color: S, children: t.tail })] }) : C ? e(sl, { promptMode: true, color: S, monochrome: y, markLinks: f, children: t }) : e(n, { color: S, children: t }), b[10] = c, b[11] = f, b[12] = C, b[13] = t, b[14] = S, b[15] = p, b[16] = y, b[17] = q;
    else q = b[17];
    let ie;
    if (b[18] !== k2 || b[19] !== D2 || b[20] !== q) ie = r(s, { flexDirection: "column", paddingLeft: k2, children: [D2, q] }), b[18] = k2, b[19] = D2, b[20] = q, b[21] = ie;
    else ie = b[21];
    return ie;
  }
  let v = x ? "suggestion" : y ? "inactive" : "text", P;
  if (b[22] !== l?.selectionHighlight || b[23] !== x) P = e(s, { flexShrink: 0, children: l?.selectionHighlight === "off" ? e(n, { children: "  " }) : r(n, { "aria-label": x ? "selected:" : "you:", color: x ? "suggestion" : "inactive", children: [ne.pointer, " "] }) }), b[22] = l?.selectionHighlight, b[23] = x, b[24] = P;
  else P = b[24];
  let k;
  if (b[25] !== C || b[26] !== t || b[27] !== v || b[28] !== p || b[29] !== y) k = p ? r(s, { flexDirection: "column", children: [e(L, { text: t.head, color: v }), e(R, { hiddenLines: t.hiddenLines, indent: 3 }), e(L, { text: t.tail, color: v })] }) : C ? e(sl, { promptMode: true, color: v, monochrome: y, children: t }) : e(L, { text: t, color: v }), b[25] = C, b[26] = t, b[27] = v, b[28] = p, b[29] = y, b[30] = k;
  else k = b[30];
  let D;
  if (b[31] !== P || b[32] !== k) D = r(s, { flexDirection: "row", children: [P, k] }), b[31] = P, b[32] = k, b[33] = D;
  else D = b[33];
  return D;
}
function R(i) {
  let m = w(7), { hiddenLines: t, hiddenChars: o, indent: a } = i, d = `${t} ${t === 1 ? "line" : "lines"}`, f;
  if (m[0] !== o || m[1] !== t || m[2] !== d) f = o === void 0 ? `(${d} hidden)` : t === 0 ? `(~${Xqe(o)} KB hidden)` : `(${d}, ~${Xqe(o)} KB hidden)`, m[0] = o, m[1] = t, m[2] = d, m[3] = f;
  else f = m[3];
  let c = f, u;
  if (m[4] !== a || m[5] !== c) u = e(Ql, { title: c, titleAlign: "start", color: "subtle", padding: a }), m[4] = a, m[5] = c, m[6] = u;
  else u = m[6];
  return u;
}
function L(i) {
  let a = w(4), { text: t, color: o } = i, d, m;
  if (a[0] !== o || a[1] !== t) {
    m = En;
    c: {
      let f = q_e() ? i6t(t) : [];
      if (f.length === 0) {
        m = e(n, { color: o, children: t });
        break c;
      }
      let u = [];
      let l = 0;
      for (const g of f) {
        if (g.start > l) u.push(e(n, { color: o, children: t.slice(l, g.start) }, `plain-${l}`));
        for (let p = g.start; p < g.end; p++) u.push(e(n, { color: $G(p - g.start), children: t[p] }, `rb-${p}`));
        l = g.end;
      }
      if (l < t.length) u.push(e(n, { color: o, children: t.slice(l) }, `plain-${l}`));
      d = e(n, { children: u });
    }
    a[0] = o, a[1] = t, a[2] = d, a[3] = m;
  } else d = a[2], m = a[3];
  if (m !== En) return m;
  return d;
}
function VI(i) {
  let o = w(19), { text: t } = i, a, d, m, f, c, u, l, g;
  if (o[0] !== t) {
    g = En;
    b: {
      let p = J9t(t);
      if (typeof p === "string") {
        g = e(n, { wrap: "wrap", children: AC(p) });
        break b;
      }
      d = s;
      c = "column";
      u = e(n, { wrap: "wrap", children: AC(p.head) });
      l = e(R, { hiddenLines: p.hiddenLines, hiddenChars: p.hiddenChars, indent: 0 });
      a = n;
      m = "wrap";
      f = AC(p.tail);
    }
    o[0] = t, o[1] = a, o[2] = d, o[3] = m, o[4] = f, o[5] = c, o[6] = u, o[7] = l, o[8] = g;
  } else a = o[1], d = o[2], m = o[3], f = o[4], c = o[5], u = o[6], l = o[7], g = o[8];
  if (g !== En) return g;
  let M;
  if (o[9] !== a || o[10] !== m || o[11] !== f) M = e(a, { wrap: m, children: f }), o[9] = a, o[10] = m, o[11] = f, o[12] = M;
  else M = o[12];
  let C;
  if (o[13] !== d || o[14] !== c || o[15] !== u || o[16] !== l || o[17] !== M) C = r(d, { flexDirection: c, children: [u, l, M] }), o[13] = d, o[14] = c, o[15] = u, o[16] = l, o[17] = M, o[18] = C;
  else C = o[18];
  return C;
}
export {
  J9t,
  Q9t,
  VI,
  W5,
  aUe,
  fmr,
  n5e
};
