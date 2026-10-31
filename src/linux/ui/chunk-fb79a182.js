// linux/ui/chunk-fb79a182.js — Claude Code 2.1.310（linux）模块 chunk-4e64fv1b.js
import { Cn } from "../fs/gitlab-runner-authentication-token.js";
import { Zx } from "../plugins/skills-dir.js";
import { ud } from "../settings/built-in.js";
import { TP, KLt, dle, TDr, fm, by } from "../core/conversation-engine.js";
import { w } from "./chunk-0ed4c357.js";
import { s, n, Yt } from "../telemetry/render-glyph-cardinality.js";
import { mt } from "./aria-label.132c.js";
import { hf } from "./aria-hidden.1665.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { ee, j } from "../vendor/react/chunk-9a0b1ced.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
j();
function b(l) {
  let a = w(10), { title: o, status: c, detail: t } = l, p;
  if (a[0] !== o) p = e(n, { bold: true, children: o }), a[0] = o, a[1] = p;
  else p = a[1];
  let i;
  if (a[2] !== c) i = e(mt, { status: c }), a[2] = c, a[3] = i;
  else i = a[3];
  let m;
  if (a[4] !== t) m = t ? r(n, { dimColor: true, children: [" · ", t] }) : null, a[4] = t, a[5] = m;
  else m = a[5];
  let g;
  if (a[6] !== p || a[7] !== i || a[8] !== m) g = r(n, { children: [p, " ", i, m] }), a[6] = p, a[7] = i, a[8] = m, a[9] = g;
  else g = a[9];
  return g;
}
function yr(br) {
  return br.file;
}
function Rr(f) {
  return !Zx(f.scope);
}
function Wr(y) {
  return { scope: y.scope, servers: y.config.servers, displayServers: fm(y.scope, { expandVars: false }).servers };
}
function xr(V) {
  return dle(V) === "approved";
}
function $r(o) {
  let { config: T } = o;
  return P(T.errors, "fatal").length > 0;
}
function kr(o) {
  let { config: L } = o;
  return P(L.errors, "warning").length > 0;
}
function Tr(o) {
  let { scope: A, config: R } = o;
  return e(Q, { scope: A, parsingErrors: P(R.errors, "fatal"), warnings: P(R.errors, "warning") }, A);
}
function Ar(D, U) {
  return r(hf.Group, { children: [e(hf.Node, { color: "warning", children: Cn(D.message) }), D.suggestion && e(hf.Node, { dimColor: true, children: Cn(D.suggestion) })] }, `conflict-${U}`);
}
function Q(l) {
  let i = w(56), { scope: o, parsingErrors: c, warnings: t } = l, a = c.length > 0, p = t.length > 0;
  if (!a && !p) {
    return null;
  }
  let m, g, d, f, y, V, T, L, A, R;
  if (i[0] !== a || i[1] !== p || i[2] !== c || i[3] !== o || i[4] !== t) {
    let D = TP(o);
    let U = new Set([...c, ...t].map(yr).filter(Boolean));
    f = U.size === 1 ? [...U][0] : D;
    d = s;
    L = "column";
    A = 1;
    let h2;
    if (i[15] !== a || i[16] !== p) h2 = (a || p) && r(n, { color: a ? "error" : "warning", children: ["[", a ? "Failed to parse" : "Contains warnings", "]", " "] }), i[15] = a, i[16] = p, i[17] = h2;
    else h2 = i[17];
    let v2;
    if (i[18] !== o) v2 = KLt(o), i[18] = o, i[19] = v2;
    else v2 = i[19];
    let N2;
    if (i[20] !== v2) N2 = e(n, { children: v2 }), i[20] = v2, i[21] = N2;
    else N2 = i[21];
    if (i[22] !== h2 || i[23] !== N2) R = r(s, { children: [h2, N2] }), i[22] = h2, i[23] = N2, i[24] = R;
    else R = i[24];
    g = s;
    if (i[25] === S) T = e(n, { dimColor: true, children: "Location: " }), i[25] = T;
    else T = i[25];
    m = n;
    y = true;
    V = Cn(f);
    i[0] = a, i[1] = p, i[2] = c, i[3] = o, i[4] = t, i[5] = m, i[6] = g, i[7] = d, i[8] = f, i[9] = y, i[10] = V, i[11] = T, i[12] = L, i[13] = A, i[14] = R;
  } else m = i[5], g = i[6], d = i[7], f = i[8], y = i[9], V = i[10], T = i[11], L = i[12], A = i[13], R = i[14];
  let h;
  if (i[26] !== m || i[27] !== y || i[28] !== V) h = e(m, { dimColor: y, children: V }), i[26] = m, i[27] = y, i[28] = V, i[29] = h;
  else h = i[29];
  let v;
  if (i[30] !== g || i[31] !== T || i[32] !== h) v = r(g, { children: [T, h] }), i[30] = g, i[31] = T, i[32] = h, i[33] = v;
  else v = i[33];
  let N;
  if (i[34] !== f || i[35] !== c || i[36] !== o) {
    let W2;
    if (i[38] !== f || i[39] !== o) W2 = (E, Vr) => {
      let tr = E.mcpErrorMetadata?.serverName;
      let ar = E.file !== f ? E.file : void 0;
      return r(hf.Group, { children: [e(hf.Node, { children: r(n, { children: [e(n, { color: "error", children: "[Error]" }), r(n, { dimColor: true, children: [" ", ar && `(${Cn(ar)}) `, tr && `[${Cn(tr)}] `, E.path && E.path !== "" ? `${Cn(E.path)}: ` : "", Cn(E.message)] })] }) }), o === "enterprise" && E.suggestion && e(hf.Node, { dimColor: true, children: Cn(E.suggestion) })] }, `error-${Vr}`);
    }, i[38] = f, i[39] = o, i[40] = W2;
    else W2 = i[40];
    N = c.map(W2);
    i[34] = f, i[35] = c, i[36] = o, i[37] = N;
  } else N = i[37];
  let W;
  if (i[41] !== f || i[42] !== t) {
    let x2;
    if (i[44] !== f) x2 = (k, Lr) => {
      let cr = k.mcpErrorMetadata?.serverName;
      let pr = k.file !== f ? k.file : void 0;
      return e(hf.Node, { children: r(n, { children: [e(n, { color: "warning", children: "[Warning]" }), r(n, { dimColor: true, children: [" ", pr && `(${Cn(pr)}) `, cr && `[${Cn(cr)}] `, k.path && k.path !== "" ? `${Cn(k.path)}: ` : "", Cn(k.message)] })] }) }, `warning-${Lr}`);
    }, i[44] = f, i[45] = x2;
    else x2 = i[45];
    W = t.map(x2);
    i[41] = f, i[42] = t, i[43] = W;
  } else W = i[43];
  let x;
  if (i[46] !== W || i[47] !== N) x = e(s, { marginLeft: 1, children: r(hf, { variant: "tree", children: [N, W] }) }), i[46] = W, i[47] = N, i[48] = x;
  else x = i[48];
  let gr;
  if (i[49] !== d || i[50] !== x || i[51] !== L || i[52] !== A || i[53] !== R || i[54] !== v) gr = r(d, { flexDirection: L, marginTop: A, children: [R, v, x] }), i[49] = d, i[50] = x, i[51] = L, i[52] = A, i[53] = R, i[54] = v, i[55] = gr;
  else gr = i[55];
  return gr;
}
function jRt() {
  let l = w(3), o;
  if (l[0] === S) {
    let c = [{ scope: "user", config: fm("user") }, { scope: "project", config: fm("project") }, { scope: "local", config: fm("local") }, { scope: "managed", config: fm("managed") }, { scope: "enterprise", config: fm("enterprise") }];
    let t = TDr(c.filter(Rr).map(Wr));
    o = { scopes: sr(c, { enterpriseActive: by(), mcpLocked: ud("mcp"), isProjectServerApproved: xr }), conflicts: t };
    l[0] = o;
  } else o = l[0];
  let { scopes: a, conflicts: p } = o, i = a.some($r), m = p.length > 0 || a.some(kr);
  if (!i && !m) {
    return null;
  }
  let g;
  if (l[1] === S) g = e(b, { title: "MCP config diagnostics", status: i ? "error" : "warning" }), l[1] = g;
  else g = l[1];
  let d;
  if (l[2] === S) d = r(s, { flexDirection: "column", marginTop: 1, marginBottom: 1, children: [g, e(s, { marginTop: 1, children: r(n, { dimColor: true, children: ["For help configuring MCP servers, see:", " ", e(Yt, { url: "https://code.claude.com/docs/en/mcp", children: "https://code.claude.com/docs/en/mcp" })] }) }), a.map(Tr), p.length > 0 && r(s, { flexDirection: "column", marginTop: 1, children: [e(n, { color: "warning", children: "[Conflicting scopes]" }), e(hf, { variant: "tree", children: p.map(Ar) })] })] }), l[2] = d;
  else d = l[2];
  return d;
}
function P(l, o) {
  return l.filter((c) => c.mcpErrorMetadata?.severity === o);
}
function sr(l, o) {
  let c = (t, a) => {
    if (!(a in t.config.servers)) return false;
    if (t.scope === "project") return o.isProjectServerApproved(a);
    return true;
  };
  return l.map((t, a) => {
    let p = !Zx(t.scope) && (o.enterpriseActive || o.mcpLocked), i = l.slice(a + 1), m = (g) => i.some((d) => c(d, g));
    return { ...t, config: { ...t.config, errors: t.config.errors.filter((g) => {
      if (g.mcpErrorMetadata?.severity !== "warning") return true;
      if (p) return false;
      let d = g.mcpErrorMetadata.serverName;
      return !d || !m(d);
    }) } };
  });
}
export {
  jRt
};
