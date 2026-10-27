// shared/chunk-y6x1q9pp.js — Claude Code 2.1.310 模块 chunk-y6x1q9pp.js
import { I2, Udn } from "../permissions/light-daltonized.tkrm.js";
import { jwe } from "../terminal/aria-preserve-whitespace.s6ps.js";
import { w } from "../ui/chunk-zqxc4qtb.js";
import { r2, Yvr, g0, NMt, Jvr } from "../fs/chunk-7pm5bpdr.js";
import { js, m4 } from "../settings/chunk-rq620hy6.js";
import { e } from "../vendor/react/chunk-f790ajz4.js";
import { WEe, LMt } from "./chunk-tnnwxyz2.js";
import { Gt, de, Se, P, te, y, kt, j } from "../vendor/react/chunk-s8vmszp2.js";
import { b } from "../vendor/react/chunk-meds60nn.js";
j();
j();
var Ue = () => Se(jwe), uD = Ue;
j();
var M = Object.freeze({}), R = Gt(M);
function hPt(o) {
  let a = w(6), { storageV5: r, credentials: s, children: n } = o, t;
  if (a[0] !== s || a[1] !== r) t = r === void 0 && s === void 0 ? M : { storageV5: r, credentials: s }, a[0] = s, a[1] = r, a[2] = t;
  else t = a[2];
  let f = t, q;
  if (a[3] !== n || a[4] !== f) q = e(R.Provider, { value: f, children: n }), a[3] = n, a[4] = f, a[5] = q;
  else q = a[5];
  return q;
}
function Me() {
  return Se(R);
}
var z = "dark", i = Gt({ themeSetting: z, setThemeSetting: () => {
}, setPreviewTheme: () => {
}, cancelPreview: () => {
}, currentTheme: z, resolvedTheme: I2(z), activeThemeOverrides: void 0, customThemes: [], activeCustomTheme: void 0, reloadCustomThemes: () => Promise.resolve(), setPreviewOverrides: () => {
} });
function FIn() {
  return js("theme", "dark").value;
}
function $In(o) {
  let t = w(46), { children: r, initialState: s, onThemeSave: n } = o, { storageV5: a } = Me(), f;
  if (t[0] !== n || t[1] !== a) f = (q) => n ? n(q) : m4("theme", q, a), t[0] = n, t[1] = a, t[2] = f;
  else f = t[2];
  let I = f, [T, rt] = y(s ?? FIn), [it, J] = y(null), [nt, st] = y(null), [K, mt] = y(Yvr), ue;
  if (t[3] === b) ue = r2(), t[3] = ue;
  else ue = t[3];
  let ve = ue.pluginThemes, Q = kt(ve.subscribe, ve.getState), le;
  if (t[4] !== Q || t[5] !== K) le = [...K, ...Q], t[4] = Q, t[5] = K, t[6] = le;
  else le = t[6];
  let u = le, ge;
  if (t[7] !== s || t[8] !== T) ge = () => (s ?? T) === "auto" ? WEe() : "dark", t[7] = s, t[8] = T, t[9] = ge;
  else ge = t[9];
  let [ot, C] = y(ge), m = it ?? T, pe;
  if (t[10] !== a) pe = () => NMt(a).then(mt), t[10] = a, t[11] = pe;
  else pe = t[11];
  let h = pe, fe, Pe;
  if (t[12] !== h) fe = () => (h(), Jvr(() => void h())), Pe = [h], t[12] = h, t[13] = fe, t[14] = Pe;
  else fe = t[13], Pe = t[14];
  P(fe, Pe);
  let { internal_querier: O } = uD(), we, Ce;
  if (t[15] !== m) we = () => {
    if (m !== "auto") {
      return;
    }
    return C(WEe()), LMt(() => C(WEe()));
  }, Ce = [m], t[15] = m, t[16] = we, t[17] = Ce;
  else we = t[16], Ce = t[17];
  P(we, Ce);
  let ye, Oe;
  if (t[18] !== m || t[19] !== O) ye = () => {
    if (m !== "auto" || !O) {
      return;
    }
    let Ve;
    let Re = false;
    return import("../ui/watch-system-theme.cpwf.js").then((H2) => {
      let { watchSystemTheme: at } = H2;
      if (Re) {
        return;
      }
      Ve = at(O, C);
    }), () => {
      Re = true, Ve?.();
    };
  }, Oe = [m, O], t[18] = m, t[19] = O, t[20] = ye, t[21] = Oe;
  else ye = t[20], Oe = t[21];
  P(ye, Oe);
  let H;
  if (t[22] !== m) H = g0(m), t[22] = m, t[23] = H;
  else H = t[23];
  let V = H, ke;
  if (t[24] !== V || t[25] !== u) ke = V ? u.find((ht) => ht.slug === V) : void 0, t[24] = V, t[25] = u, t[26] = ke;
  else ke = t[26];
  let v = ke, l = v ? v.base : m === "auto" ? ot : V ? "dark" : m, d = nt ?? v?.overrides, xe;
  if (t[27] !== d || t[28] !== l) xe = Udn(I2(l), d), t[27] = d, t[28] = l, t[29] = xe;
  else xe = t[29];
  let W = xe, _e;
  if (t[30] === b) _e = () => J(null), t[30] = _e;
  else _e = t[30];
  let ct = _e, U;
  if (t[31] !== I) U = (X) => {
    if (rt(X), J(null), X === "auto") C(WEe());
    I(X);
  }, t[31] = I, t[32] = U;
  else U = t[32];
  let Ne;
  if (t[33] === b) Ne = (be) => {
    if (J(be), be === "auto") C(WEe());
  }, t[33] = Ne;
  else Ne = t[33];
  let qe;
  if (t[34] !== v || t[35] !== d || t[36] !== l || t[37] !== u || t[38] !== h || t[39] !== W || t[40] !== U || t[41] !== T) qe = { themeSetting: T, setThemeSetting: U, setPreviewTheme: Ne, cancelPreview: ct, currentTheme: l, resolvedTheme: W, activeThemeOverrides: d, customThemes: u, activeCustomTheme: v, reloadCustomThemes: h, setPreviewOverrides: st }, t[34] = v, t[35] = d, t[36] = l, t[37] = u, t[38] = h, t[39] = W, t[40] = U, t[41] = T, t[42] = qe;
  else qe = t[42];
  let Z = qe, He;
  if (t[43] !== r || t[44] !== Z) He = e(i.Provider, { value: Z, children: r }), t[43] = r, t[44] = Z, t[45] = He;
  else He = t[45];
  return He;
}
function Pr() {
  let s = w(3), { currentTheme: o, setThemeSetting: r } = Se(i), n;
  if (s[0] !== o || s[1] !== r) n = [o, r], s[0] = o, s[1] = r, s[2] = n;
  else n = s[2];
  return n;
}
function Qee() {
  return Se(i).themeSetting;
}
function UIn() {
  let s = w(3), { setPreviewTheme: o, cancelPreview: r } = Se(i), n;
  if (s[0] !== r || s[1] !== o) n = { setPreviewTheme: o, cancelPreview: r }, s[0] = r, s[1] = o, s[2] = n;
  else n = s[2];
  return n;
}
function eE() {
  return Se(i).resolvedTheme;
}
function BIn() {
  return Se(i).activeThemeOverrides;
}
function Uwe() {
  let a = w(5), { customThemes: o, activeCustomTheme: r, reloadCustomThemes: s, setPreviewOverrides: n } = Se(i), t;
  if (a[0] !== r || a[1] !== o || a[2] !== s || a[3] !== n) t = { customThemes: o, activeCustomTheme: r, reloadCustomThemes: s, setPreviewOverrides: n }, a[0] = r, a[1] = o, a[2] = s, a[3] = n, a[4] = t;
  else t = a[4];
  return t;
}
export {
  $In,
  BIn,
  FIn,
  Me,
  Pr,
  Qee,
  UIn,
  Uwe,
  eE,
  hPt,
  uD
};
