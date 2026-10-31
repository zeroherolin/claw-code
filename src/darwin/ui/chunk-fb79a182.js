// darwin/ui/chunk-fb79a182.js — Claude Code 2.1.310（darwin）模块 chunk-at3n4yx3.js
import { An } from "../fs/gitlab-runner-authentication-token.js";
import { tP } from "../plugins/skills-dir.js";
import { ud } from "../settings/built-in.js";
import { RP, oLt, _le, z0r, pm, wy } from "../core/conversation-engine.js";
import { w } from "./chunk-0ed4c357.js";
import { s, n, Yt } from "../telemetry/render-glyph-cardinality.js";
import { gt } from "./aria-label.132c.js";
import { gp } from "./aria-hidden.1665.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { te, j } from "../vendor/react/chunk-9a0b1ced.js";
import { b } from "../vendor/react/chunk-0b0bf45d.js";
j();
function L(l) {
  let a = w(10), { title: o, status: c, detail: t } = l, p;
  if (a[0] !== o) p = e(n, { bold: true, children: o }), a[0] = o, a[1] = p;
  else p = a[1];
  let i;
  if (a[2] !== c) i = e(gt, { status: c }), a[2] = c, a[3] = i;
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
  return !tP(f.scope);
}
function Wr(F) {
  return { scope: F.scope, servers: F.config.servers, displayServers: pm(F.scope, { expandVars: false }).servers };
}
function xr(A) {
  return _le(A) === "approved";
}
function $r(o) {
  let { config: k } = o;
  return P(k.errors, "fatal").length > 0;
}
function kr(o) {
  let { config: V } = o;
  return P(V.errors, "warning").length > 0;
}
function Tr(o) {
  let { scope: T, config: y } = o;
  return e(Q, { scope: T, parsingErrors: P(y.errors, "fatal"), warnings: P(y.errors, "warning") }, T);
}
function Ar(D, U) {
  return r(gp.Group, { children: [e(gp.Node, { color: "warning", children: An(D.message) }), D.suggestion && e(gp.Node, { dimColor: true, children: An(D.suggestion) })] }, `conflict-${U}`);
}
function Q(l) {
  let i = w(56), { scope: o, parsingErrors: c, warnings: t } = l, a = c.length > 0, p = t.length > 0;
  if (!a && !p) {
    return null;
  }
  let m, g, d, f, F, A, k, V, T, y;
  if (i[0] !== a || i[1] !== p || i[2] !== c || i[3] !== o || i[4] !== t) {
    let D = RP(o);
    let U = new Set([...c, ...t].map(yr).filter(Boolean));
    f = U.size === 1 ? [...U][0] : D;
    d = s;
    V = "column";
    T = 1;
    let h2;
    if (i[15] !== a || i[16] !== p) h2 = (a || p) && r(n, { color: a ? "error" : "warning", children: ["[", a ? "Failed to parse" : "Contains warnings", "]", " "] }), i[15] = a, i[16] = p, i[17] = h2;
    else h2 = i[17];
    let v2;
    if (i[18] !== o) v2 = oLt(o), i[18] = o, i[19] = v2;
    else v2 = i[19];
    let N2;
    if (i[20] !== v2) N2 = e(n, { children: v2 }), i[20] = v2, i[21] = N2;
    else N2 = i[21];
    if (i[22] !== h2 || i[23] !== N2) y = r(s, { children: [h2, N2] }), i[22] = h2, i[23] = N2, i[24] = y;
    else y = i[24];
    g = s;
    if (i[25] === b) k = e(n, { dimColor: true, children: "Location: " }), i[25] = k;
    else k = i[25];
    m = n;
    F = true;
    A = An(f);
    i[0] = a, i[1] = p, i[2] = c, i[3] = o, i[4] = t, i[5] = m, i[6] = g, i[7] = d, i[8] = f, i[9] = F, i[10] = A, i[11] = k, i[12] = V, i[13] = T, i[14] = y;
  } else m = i[5], g = i[6], d = i[7], f = i[8], F = i[9], A = i[10], k = i[11], V = i[12], T = i[13], y = i[14];
  let h;
  if (i[26] !== m || i[27] !== F || i[28] !== A) h = e(m, { dimColor: F, children: A }), i[26] = m, i[27] = F, i[28] = A, i[29] = h;
  else h = i[29];
  let v;
  if (i[30] !== g || i[31] !== k || i[32] !== h) v = r(g, { children: [k, h] }), i[30] = g, i[31] = k, i[32] = h, i[33] = v;
  else v = i[33];
  let N;
  if (i[34] !== f || i[35] !== c || i[36] !== o) {
    let R2;
    if (i[38] !== f || i[39] !== o) R2 = (E, Vr) => {
      let tr = E.mcpErrorMetadata?.serverName;
      let ar = E.file !== f ? E.file : void 0;
      return r(gp.Group, { children: [e(gp.Node, { children: r(n, { children: [e(n, { color: "error", children: "[Error]" }), r(n, { dimColor: true, children: [" ", ar && `(${An(ar)}) `, tr && `[${An(tr)}] `, E.path && E.path !== "" ? `${An(E.path)}: ` : "", An(E.message)] })] }) }), o === "enterprise" && E.suggestion && e(gp.Node, { dimColor: true, children: An(E.suggestion) })] }, `error-${Vr}`);
    }, i[38] = f, i[39] = o, i[40] = R2;
    else R2 = i[40];
    N = c.map(R2);
    i[34] = f, i[35] = c, i[36] = o, i[37] = N;
  } else N = i[37];
  let R;
  if (i[41] !== f || i[42] !== t) {
    let W2;
    if (i[44] !== f) W2 = (x, Lr) => {
      let cr = x.mcpErrorMetadata?.serverName;
      let pr = x.file !== f ? x.file : void 0;
      return e(gp.Node, { children: r(n, { children: [e(n, { color: "warning", children: "[Warning]" }), r(n, { dimColor: true, children: [" ", pr && `(${An(pr)}) `, cr && `[${An(cr)}] `, x.path && x.path !== "" ? `${An(x.path)}: ` : "", An(x.message)] })] }) }, `warning-${Lr}`);
    }, i[44] = f, i[45] = W2;
    else W2 = i[45];
    R = t.map(W2);
    i[41] = f, i[42] = t, i[43] = R;
  } else R = i[43];
  let W;
  if (i[46] !== R || i[47] !== N) W = e(s, { marginLeft: 1, children: r(gp, { variant: "tree", children: [N, R] }) }), i[46] = R, i[47] = N, i[48] = W;
  else W = i[48];
  let gr;
  if (i[49] !== d || i[50] !== W || i[51] !== V || i[52] !== T || i[53] !== y || i[54] !== v) gr = r(d, { flexDirection: V, marginTop: T, children: [y, v, W] }), i[49] = d, i[50] = W, i[51] = V, i[52] = T, i[53] = y, i[54] = v, i[55] = gr;
  else gr = i[55];
  return gr;
}
function JRt() {
  let l = w(3), o;
  if (l[0] === b) {
    let c = [{ scope: "user", config: pm("user") }, { scope: "project", config: pm("project") }, { scope: "local", config: pm("local") }, { scope: "managed", config: pm("managed") }, { scope: "enterprise", config: pm("enterprise") }];
    let t = z0r(c.filter(Rr).map(Wr));
    o = { scopes: sr(c, { enterpriseActive: wy(), mcpLocked: ud("mcp"), isProjectServerApproved: xr }), conflicts: t };
    l[0] = o;
  } else o = l[0];
  let { scopes: a, conflicts: p } = o, i = a.some($r), m = p.length > 0 || a.some(kr);
  if (!i && !m) {
    return null;
  }
  let g;
  if (l[1] === b) g = e(L, { title: "MCP config diagnostics", status: i ? "error" : "warning" }), l[1] = g;
  else g = l[1];
  let d;
  if (l[2] === b) d = r(s, { flexDirection: "column", marginTop: 1, marginBottom: 1, children: [g, e(s, { marginTop: 1, children: r(n, { dimColor: true, children: ["For help configuring MCP servers, see:", " ", e(Yt, { url: "https://code.claude.com/docs/en/mcp", children: "https://code.claude.com/docs/en/mcp" })] }) }), a.map(Tr), p.length > 0 && r(s, { flexDirection: "column", marginTop: 1, children: [e(n, { color: "warning", children: "[Conflicting scopes]" }), e(gp, { variant: "tree", children: p.map(Ar) })] })] }), l[2] = d;
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
    let p = !tP(t.scope) && (o.enterpriseActive || o.mcpLocked), i = l.slice(a + 1), m = (g) => i.some((d) => c(d, g));
    return { ...t, config: { ...t.config, errors: t.config.errors.filter((g) => {
      if (g.mcpErrorMetadata?.severity !== "warning") return true;
      if (p) return false;
      let d = g.mcpErrorMetadata.serverName;
      return !d || !m(d);
    }) } };
  });
}
export {
  JRt
};
