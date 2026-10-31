// darwin/ui/chunk-4e0282c8.js — Claude Code 2.1.310（darwin）模块 chunk-pa7t20es.js
import { Ip } from "../terminal/ink-renderer.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { Zr } from "../shared/chunk-f81ec543.js";
import { gv } from "../shared/chunk-0d99bfe1.js";
import { I, $t } from "../shared/chunk-d2c47492.js";
import { F } from "../context/not-admin-owned.js";
import { w } from "./chunk-0ed4c357.js";
import { iW, Ase, i7o, a7o, l7o, d7o } from "../shell/invalid-type.js";
import { lt } from "../shared/chunk-76877d92.js";
import { ve } from "./chunk-067d565d.js";
import { Ma, tS, xc, Go } from "./aria-hidden.aa9d.js";
import { Ce } from "../shared/chunk-bdaaea45.js";
import { q } from "../context/chunk-e2302e3b.js";
import { cr } from "./chunk-783db08b.js";
import { ja } from "./truncate-start.js";
import { FR } from "./chunk-7b6068da.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { P, te, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { b } from "../vendor/react/chunk-0b0bf45d.js";
j();
function ft(Tt) {
  return Tt + 1;
}
function yt(At, Mt) {
  return r(s, { paddingLeft: 2, flexDirection: "row", children: [e(n, { dimColor: true, children: "· " }), e(n, { children: At })] }, Mt);
}
function wt(Dt, Ot) {
  return r(s, { paddingLeft: 2, flexDirection: "row", children: [e(n, { dimColor: true, children: "· " }), e(n, { children: Dt })] }, `tail-${Ot}`);
}
var z = 20, On = 40, _n = 14, jn = 4, zn = 6;
function Q(t, a) {
  let c = Math.max(1, a - zn);
  return $t(Ip(t, c, "wrap"), `
`) + 1;
}
function rn(t, a, c) {
  let l = _n + c.reduce((u, h) => u + Q(h, a), 0);
  return Math.min(On, t - l);
}
function U(t, a, c, l, u, h) {
  let m = c ? `(at most ${z} are listed)` : "(list trimmed to fit the screen)", i = (l > 0 ? `, ${l} executing ${I(l, "a command", "commands")}` : "") + (u > 0 ? `, ${u} ${I(u, "sandbox setting")}` : "") + (h > 0 ? `, ${h} ${I(h, "isolation setting")}` : "");
  return a ? `⋯ and ${t} more not shown ${m}${i} — choose No unless you expected every one of these settings` : `${t} ${I(t, "setting")} not shown ${m}${i} — choose No unless you expected every one of these settings`;
}
function an(t, a, c) {
  if (t.length === 0) return { head: [], tail: [], elided: 0 };
  let l = t.map((o) => Q(o, a)), u = l.reduce((o, x) => o + x, 0), h = Math.max(Q(U(t.length, true, false, t.length, t.length, t.length), a), Q(U(t.length, true, true, t.length, t.length, t.length), a));
  if (t.length <= z && u <= Math.max(c, h)) return { head: t, tail: [], elided: 0 };
  let m = h, i = 0, d = t.length, p = (o) => m + l[o] <= c;
  if (p(0)) m += l[0], i = 1;
  while (d - 1 >= Math.max(i, t.length - jn) && d - 1 > 0 && p(d - 1)) d--, m += l[d];
  while (i < d && i + (t.length - d) < z && p(i)) m += l[i], i++;
  return { head: t.slice(0, i), tail: t.slice(d), elided: d - i };
}
function dn(t, { commandRows: a, sandboxRows: c, isolationRows: l, envRows: u, categoryRows: h }) {
  let m = F(Object.values(t.payloadSlots), (p) => p?.shellSettings.hooks !== void 0), i = a.length - m, d = [];
  if (i > 0) d.push(`${I(i, "command setting")} ×${i}`);
  if (c.length > 0) d.push(`${I(c.length, "sandbox setting")} ×${c.length}`);
  if (l.length > 0) d.push(`${I(l.length, "isolation setting")} ×${l.length}`);
  if (u.length > 0) d.push(`${I(u.length, "env var")} ×${u.length}`);
  if (h.length > 0 || m > 0) d.push("hooks");
  return d.join(", ");
}
var Z = { intro: "Your organization has configured managed settings that could allow execution of arbitrary code or interception of your prompts and responses.", listLabel: "Settings requiring approval:", advice: "Only accept if you trust your organization's IT administration and expect these settings to be configured.", risk: "these can run code or redirect traffic on this machine." }, cn = { intro: "Your organization has configured Claude Code to send telemetry to the destination below. Depending on your organization's settings, this can include the content of your prompts and responses.", listLabel: "Telemetry destination:", advice: "Only accept if you recognize this as your organization's telemetry collector.", risk: "this redirects where telemetry from this machine is sent." }, ln = { intro: "Your organization has configured virtual machine (VM) isolation settings for Claude Code on this machine.", listLabel: Z.listLabel, advice: Z.advice, risk: "these can change where Claude Code runs or what it can connect to." }, f = Zr;
function Y$e(t) {
  let a = w(2), c;
  if (a[0] !== t) c = e(je, { ...t }, t.reveal), a[0] = t, a[1] = c;
  else c = a[1];
  return c;
}
function je(t) {
  let o = w(98), { settings: a, baseline: c, reveal: l, onAccept: u, onReject: h, wouldTakeAnswer: m } = t, i = l !== "default", { columns: d, rows: p } = Ce(), x, L, S, ze, T, N, Ne, Pe, Rn;
  if (o[0] !== c || o[1] !== d || o[2] !== a || o[3] !== p) {
    let $n = iW(a);
    let W = i7o(c, $n);
    let Y = Ase(W.changed) ? W.changed : $n;
    L = a7o(Y, a) ? cn : l7o(Y, a) ? ln : Z;
    let We = Y === W.changed ? W.unchangedCount : 0;
    let A = W.removedCount;
    S = We > 0 ? `＋ ${We} other active ${I(We, "setting")} unchanged since your last approval` : null;
    let G2;
    if (o[13] !== A) G2 = A > 0 ? `− ${A} previously approved ${I(A, "setting")} no longer ${A === 1 ? "requires" : "require"} approval` : null, o[13] = A, o[14] = G2;
    else G2 = o[14];
    T = G2;
    let kn = d7o(Y);
    N = `Approving applies: ${dn(Y, kn)} — ${L.risk}`;
    let bt = rn(p, d, [L.intro, L.advice, N, ...S ? [S] : [], ...T ? [T] : []]);
    let { commandRows: H2, sandboxRows: ee2, isolationRows: ne2, envRows: vt, categoryRows: Ct } = kn;
    x = H2;
    Pe = ee2;
    ze = ne2;
    Ne = [...x, ...Pe, ...ze, ...vt, ...Ct];
    Rn = an(Ne, d, bt);
    o[0] = c, o[1] = d, o[2] = a, o[3] = p, o[4] = x, o[5] = L, o[6] = S, o[7] = ze, o[8] = T, o[9] = N, o[10] = Ne, o[11] = Pe, o[12] = Rn;
  } else x = o[4], L = o[5], S = o[6], ze = o[7], T = o[8], N = o[9], Ne = o[10], Pe = o[11], Rn = o[12];
  let J = Rn, qe = J.head.length, Fe = Ne.length - J.tail.length, Ye = Math.max(0, Math.min(x.length, Fe) - qe), Ge = x.length + Pe.length, Je = Math.max(0, Math.min(Ge, Fe) - Math.max(x.length, qe)), xt = Ge + ze.length, Xe = Math.max(0, Math.min(xt, Fe) - Math.max(Ge, qe)), G;
  if (o[15] !== L || o[16] !== Ye || o[17] !== Xe || o[18] !== Je || o[19] !== S || o[20] !== T || o[21] !== N || o[22] !== J) G = { ...J, elidedCommandCount: Ye, elidedSandboxCount: Je, elidedIsolationCount: Xe, copy: L, riskLine: N, hiddenLine: S, removedLine: T }, o[15] = L, o[16] = Ye, o[17] = Xe, o[18] = Je, o[19] = S, o[20] = T, o[21] = N, o[22] = J, o[23] = G;
  else G = o[23];
  let { head: R, tail: k, elided: oe, elidedCommandCount: Be, elidedSandboxCount: Ke, elidedIsolationCount: Ve, copy: g, riskLine: Qe, hiddenLine: ie, removedLine: se } = G, H;
  if (o[24] !== u || o[25] !== h) H = (Lt) => Lt === "confirm" ? u() : h(), o[24] = u, o[25] = h, o[26] = H;
  else H = o[26];
  let M = gv(H), Ue = Ma(f), { refusedWithin: Ze, noteRefused: He, epoch: Rt } = Go(), en = tS(), [kt, Et] = y(0), ee;
  if (o[27] === b) ee = () => {
    Et(ft);
  }, o[27] = ee;
  else ee = o[27];
  let ne;
  if (o[28] !== a) ne = [a], o[28] = a, o[29] = ne;
  else ne = o[29];
  P(ee, ne);
  let St = xc(`${Rt}:${kt}`, f), En;
  if (o[30] !== i || o[31] !== Ue || o[32] !== He || o[33] !== Ze) En = function E2() {
    if (!i) {
      return false;
    }
    if (Ue() || Ze(f)) {
      return He(), true;
    }
    return false;
  }, o[30] = i, o[31] = Ue, o[32] = He, o[33] = Ze, o[34] = En;
  else En = o[34];
  let E = En, Sn;
  if (o[35] !== E || o[36] !== m) Sn = function re2() {
    if (E()) {
      return true;
    }
    return m?.() === false;
  }, o[35] = E, o[36] = m, o[37] = Sn;
  else Sn = o[37];
  let re = Sn, In;
  if (o[38] !== M || o[39] !== E) In = function C2(It) {
    if (E()) {
      return;
    }
    M.answer(It);
  }, o[38] = M, o[39] = E, o[40] = In;
  else In = o[40];
  let C = In, Tn;
  if (o[41] !== C) Tn = () => C("cancel"), o[41] = C, o[42] = Tn;
  else Tn = o[42];
  let An;
  if (o[43] === b) An = { context: "Confirmation" }, o[43] = An;
  else An = o[43];
  lt("confirm:no", Tn, An);
  let ae;
  if (o[44] !== g.intro) ae = e(n, { children: g.intro }), o[44] = g.intro, o[45] = ae;
  else ae = o[45];
  let de;
  if (o[46] !== g.listLabel) de = e(n, { dimColor: true, children: g.listLabel }), o[46] = g.listLabel, o[47] = de;
  else de = o[47];
  let ce;
  if (o[48] !== R) ce = R.map(yt), o[48] = R, o[49] = ce;
  else ce = o[49];
  let le;
  if (o[50] !== oe || o[51] !== Be || o[52] !== Ve || o[53] !== Ke || o[54] !== R.length || o[55] !== k.length) le = oe > 0 && e(s, { paddingLeft: 2, children: e(n, { color: "warning", children: U(oe, R.length + k.length > 0, R.length + k.length === z, Be, Ke, Ve) }) }), o[50] = oe, o[51] = Be, o[52] = Ve, o[53] = Ke, o[54] = R.length, o[55] = k.length, o[56] = le;
  else le = o[56];
  let ue;
  if (o[57] !== k) ue = k.map(wt), o[57] = k, o[58] = ue;
  else ue = o[58];
  let he;
  if (o[59] !== ie) he = ie && e(s, { paddingLeft: 2, children: e(n, { dimColor: true, children: ie }) }), o[59] = ie, o[60] = he;
  else he = o[60];
  let me;
  if (o[61] !== se) me = se && e(s, { paddingLeft: 2, children: e(n, { dimColor: true, children: se }) }), o[61] = se, o[62] = me;
  else me = o[62];
  let pe;
  if (o[63] !== de || o[64] !== ce || o[65] !== le || o[66] !== ue || o[67] !== he || o[68] !== me) pe = r(s, { flexDirection: "column", children: [de, ce, le, ue, he, me] }), o[63] = de, o[64] = ce, o[65] = le, o[66] = ue, o[67] = he, o[68] = me, o[69] = pe;
  else pe = o[69];
  let ge;
  if (o[70] !== g.advice) ge = e(n, { children: g.advice }), o[70] = g.advice, o[71] = ge;
  else ge = o[71];
  let fe;
  if (o[72] !== Qe) fe = e(n, { color: "warning", children: Qe }), o[72] = Qe, o[73] = fe;
  else fe = o[73];
  const nn = i ? `${M.attempts}:${St.remountKey}` : `${M.attempts}`, tn = i ? f : void 0, on = i ? "cancel" : M.refused ?? "confirm";
  let ye, we;
  if (o[74] !== C) ye = () => C("confirm"), we = () => C("cancel"), o[74] = C, o[75] = ye, o[76] = we;
  else ye = o[75], we = o[76];
  let be;
  if (o[77] !== i || o[78] !== re || o[79] !== en || o[80] !== nn || o[81] !== tn || o[82] !== on || o[83] !== ye || o[84] !== we) be = e(cr, { openedAt: en, windowMs: tn, refuseInput: re, confirmLabel: "Yes, I trust these settings", cancelLabel: "No, exit Claude Code", cancelFirst: i, focus: on, hideIndexes: i, disablePrintableKeybindings: i, onConfirm: ye, onCancel: we }, nn), o[77] = i, o[78] = re, o[79] = en, o[80] = nn, o[81] = tn, o[82] = on, o[83] = ye, o[84] = we, o[85] = be;
  else be = o[85];
  const sn = i ? "select" : "confirm";
  let xe;
  if (o[86] !== sn) xe = e(q, { chord: "enter", action: sn }), o[86] = sn, o[87] = xe;
  else xe = o[87];
  let Mn;
  if (o[88] === b) Mn = e(q, { chord: "escape", action: "exit" }), o[88] = Mn;
  else Mn = o[88];
  let Le;
  if (o[89] !== xe) Le = e(FR, { children: r(ve, { children: [xe, Mn] }) }), o[89] = xe, o[90] = Le;
  else Le = o[90];
  let Dn;
  if (o[91] !== ae || o[92] !== pe || o[93] !== ge || o[94] !== fe || o[95] !== be || o[96] !== Le) Dn = e(ja, { color: "warning", titleColor: "warning", title: "Managed settings require approval", children: r(s, { flexDirection: "column", gap: 1, paddingTop: 1, children: [ae, pe, ge, fe, be, Le] }) }), o[91] = ae, o[92] = pe, o[93] = ge, o[94] = fe, o[95] = be, o[96] = Le, o[97] = Dn;
  else Dn = o[97];
  return Dn;
}
export {
  Y$e
};
