// linux/ui/in-progress.js — Claude Code 2.1.310（linux）模块 chunk-q4twv14b.js
import { F } from "../context/not-admin-owned.js";
import { w } from "./chunk-0ed4c357.js";
import { K } from "../shared/chunk-e4a3aa33.js";
import { le } from "../shared/chunk-4563156b.js";
import { gt } from "../fs/async-hooks.7959.js";
import { IO } from "../context/envelope-pinned-id.js";
import { Tpe } from "../fs/chunk-d22723dd.js";
import { Te } from "../shared/chunk-bdaaea45.js";
import { fn, s, n } from "../telemetry/render-glyph-cardinality.js";
import { WL } from "../shared/general-purpose.js";
import { _s } from "../telemetry/chunk-cb9c99f9.js";
import { Nzn } from "../core/conversation-engine.js";
import { Yu } from "../git/bridge-child-tool-diff.js";
import { ne } from "../workflows/workflow-size-guideline-change.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { P, C, y, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function Se(A) {
  return A.expandedView;
}
function Be(T, H) {
  return parseInt(T, 10) - parseInt(H, 10);
}
function Ie(ee) {
  return `#${ee}`;
}
function xmr(i) {
  let x = w(2), { hidden: c } = i, f = K(Se) === "tasks", d = Tpe();
  if (c || !f || !d || d.length === 0) {
    return null;
  }
  let z;
  if (x[0] !== d) z = e(s, { width: "100%", flexDirection: "column", children: e(Pmr, { tasks: d, isStandalone: true }) }), x[0] = d, x[1] = z;
  else z = x[1];
  return z;
}
var te = 3e4;
function W(i, c) {
  let f = parseInt(i.id, 10), d = parseInt(c.id, 10);
  if (!isNaN(f) && !isNaN(d)) return f - d;
  return i.id.localeCompare(c.id);
}
function Pmr({ tasks: i, isStandalone: c = false }) {
  let f = K((t) => t.teamContext), d = K((t) => t.tasks), [x, z] = y(0), { rows: A, columns: N } = Te(), S = fn(), b = C(null);
  b.current ??= new Map(i.filter((t) => t.status === "completed").map((t) => [t.id, null]));
  let a = b.current, B = A <= 10 ? 0 : Math.min(5, Math.max(3, A - 14)), R = new Set(i.filter((t) => t.status === "completed").map((t) => t.id)), E = Date.now();
  for (let t of R) if (!a.has(t)) a.set(t, E);
  for (let t of a.keys()) if (!R.has(t)) a.delete(t);
  if (P(() => {
    let t = Date.now(), o = 1 / 0;
    for (let l of a.values()) {
      if (l === null) continue;
      let m = l + te;
      if (m > t && m < o) o = m;
    }
    if (o === 1 / 0) return;
    return S.setTimeout(() => z((l) => l + 1), o - t);
  }, [i, S, a, x]), !IO()) return null;
  if (i.length === 0) return null;
  let _ = {};
  if (_s() && f?.teammates) {
    for (let t of Object.values(f.teammates)) if (t.color) {
      let o = WL[t.color];
      if (o) _[t.name] = o;
    }
  }
  let g = {}, O = /* @__PURE__ */ new Set();
  if (_s()) {
    for (let t of Object.values(d)) if (Yu(t) && t.status === "running") {
      O.add(t.identity.agentName), O.add(t.identity.agentId);
      let o = t.progress?.recentActivities, l = (o && Nzn(o)) ?? t.progress?.lastActivity?.activityDescription;
      if (l) g[t.identity.agentName] = l, g[t.identity.agentId] = l;
    }
  }
  let G = F(i, (t) => t.status === "completed"), D = F(i, (t) => t.status === "pending"), q = i.length - G - D, I = new Set(i.filter((t) => t.status !== "completed").map((t) => t.id)), V = i.length > B, M, h;
  if (V) {
    let t = [], o = [];
    for (let u of i.filter((T) => T.status === "completed")) {
      let T = a.get(u.id);
      if (typeof T === "number" && E - T < te) t.push(u);
      else o.push(u);
    }
    t.sort(W), o.sort(W);
    let l = i.filter((u) => u.status === "in_progress").sort(W), m = i.filter((u) => u.status === "pending").sort((u, T) => {
      let H = u.blockedBy.some((U) => I.has(U)), ee = T.blockedBy.some((U) => I.has(U));
      if (H !== ee) return H ? 1 : -1;
      return W(u, T);
    }), p = [...t, ...l, ...m, ...o];
    M = p.slice(0, B), h = p.slice(B);
  } else M = [...i].sort(W), h = [];
  let v = "";
  if (h.length > 0) {
    let t = [], o = F(h, (p) => p.status === "pending"), l = F(h, (p) => p.status === "in_progress"), m = F(h, (p) => p.status === "completed");
    if (l > 0) t.push(`${l} in progress`);
    if (o > 0) t.push(`${o} pending`);
    if (m > 0) t.push(`${m} completed`);
    v = ` … +${t.join(", ")}`;
  }
  let L = r(Q, { children: [M.map((t) => e(de, { task: t, ownerColor: t.owner ? _[t.owner] : void 0, openBlockers: t.blockedBy.filter((o) => I.has(o)), activity: t.owner ? g[t.owner] : void 0, ownerActive: t.owner ? O.has(t.owner) : false, columns: N }, t.id)), B > 0 && v && e(n, { dimColor: true, children: v })] });
  if (c) return r(s, { flexDirection: "column", marginTop: 1, marginLeft: 2, children: [e(s, { children: r(n, { dimColor: true, children: [e(n, { bold: true, children: i.length }), " tasks (", e(n, { bold: true, children: G }), " done, ", q > 0 && r(Q, { children: [e(n, { bold: true, children: q }), " in progress, "] }), e(n, { bold: true, children: D }), " open)"] }) }), L] });
  return e(s, { flexDirection: "column", children: L });
}
function Imr(i) {
  switch (i) {
    case "completed":
      return { icon: ne.tick, color: "success" };
    case "in_progress":
      return { icon: ne.squareSmallFilled, color: "claude" };
    case "pending":
      return { icon: ne.squareSmall, color: void 0 };
  }
}
function de(i) {
  let a = w(37), { task: c, ownerColor: f, openBlockers: d, activity: x, ownerActive: z, columns: A } = i, N = c.status === "completed", S = c.status === "in_progress", b = d.length > 0, B;
  if (a[0] !== c.status) B = Imr(c.status), a[0] = c.status, a[1] = B;
  else B = a[1];
  let { icon: R, color: E } = B, _ = S && !b && x, g = A >= 60 && c.owner && z, O;
  if (a[2] !== g || a[3] !== c.owner) O = g ? le(` (@${c.owner})`) : 0, a[2] = g, a[3] = c.owner, a[4] = O;
  else O = a[4];
  let G = O, D = Math.max(15, A - 15 - G), q;
  if (a[5] !== D || a[6] !== c.subject) q = gt(c.subject, D), a[5] = D, a[6] = c.subject, a[7] = q;
  else q = a[7];
  let I = q, V = Math.max(15, A - 15), M;
  if (a[8] !== x || a[9] !== V) M = x ? gt(x, V) : void 0, a[8] = x, a[9] = V, a[10] = M;
  else M = a[10];
  let h = M, v;
  if (a[11] !== E || a[12] !== R) v = r(n, { color: E, children: [R, " "] }), a[11] = E, a[12] = R, a[13] = v;
  else v = a[13];
  const L = N || b;
  let t;
  if (a[14] !== I || a[15] !== N || a[16] !== S || a[17] !== L) t = e(n, { bold: S, strikethrough: N, dimColor: L, children: I }), a[14] = I, a[15] = N, a[16] = S, a[17] = L, a[18] = t;
  else t = a[18];
  let o;
  if (a[19] !== f || a[20] !== g || a[21] !== c.owner) o = g && r(n, { dimColor: true, children: [" (", f ? r(n, { color: f, children: ["@", c.owner] }) : `@${c.owner}`, ")"] }), a[19] = f, a[20] = g, a[21] = c.owner, a[22] = o;
  else o = a[22];
  let l;
  if (a[23] !== b || a[24] !== d) l = b && r(n, { dimColor: true, children: [" ", ne.pointerSmall, " blocked by", " ", [...d].sort(Be).map(Ie).join(", ")] }), a[23] = b, a[24] = d, a[25] = l;
  else l = a[25];
  let m;
  if (a[26] !== v || a[27] !== t || a[28] !== o || a[29] !== l) m = r(s, { children: [v, t, o, l] }), a[26] = v, a[27] = t, a[28] = o, a[29] = l, a[30] = m;
  else m = a[30];
  let p;
  if (a[31] !== h || a[32] !== _) p = _ && h && e(s, { children: r(n, { dimColor: true, children: ["  ", h, ne.ellipsis] }) }), a[31] = h, a[32] = _, a[33] = p;
  else p = a[33];
  let u;
  if (a[34] !== m || a[35] !== p) u = r(s, { flexDirection: "column", children: [m, p] }), a[34] = m, a[35] = p, a[36] = u;
  else u = a[36];
  return u;
}
export {
  Imr,
  Pmr,
  xmr
};
