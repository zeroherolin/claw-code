// ui/chunk-2fzp6mzy.js — Claude Code 2.1.310 模块 chunk-2fzp6mzy.js
import { Ws } from "../terminal/wl-copy.gdbt.js";
import { Yc, Mm, uYt, GW } from "../terminal/aria-preserve-whitespace.s6ps.js";
import { F8t } from "../shared/chunk-yk72vged.js";
import { w } from "./chunk-zqxc4qtb.js";
import { e } from "../vendor/react/chunk-f790ajz4.js";
import { Se, tye, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
function hwe(u) {
  let f = w(16), { children: m, mouseTracking: p, surface: c } = u, i = p === void 0 ? "full" : p, k = Se(Mm), r = Se(GW), t = Se(uYt), M, F;
  if (f[0] !== t || f[1] !== c || f[2] !== r) M = () => {
    if (!r || !c) {
      return;
    }
    let A = Ws().get(process.stdout);
    let N = t.set("surface", c);
    if (!A?.keepForNextFrame(N)) r(N);
    return () => {
      let P = t.reset("surface");
      if (!A?.keepForNextFrame(P)) r(P);
    };
  }, F = [r, t, c], f[0] = t, f[1] = c, f[2] = r, f[3] = M, f[4] = F;
  else M = f[3], F = f[4];
  tye(M, F);
  let C, L;
  if (f[5] !== t || f[6] !== i || f[7] !== r) C = () => {
    let a = Ws().get(process.stdout);
    if (!r) {
      return;
    }
    let b = (a?.claimHeldAltScreen() ? t.reset("mouse") : "") + t.set("altScreen") + t.set("mouse", i) + (a?.nativeCursorSeq ?? "");
    if (!a?.keepForNextFrame(b)) r(b);
    return a?.setAltScreenActive(true, i), () => {
      if (!a?.holdAltScreenLeave(() => d(a, t, r))) d(a, t, r);
    };
  }, L = [r, t, i], f[5] = t, f[6] = i, f[7] = r, f[8] = C, f[9] = L;
  else C = f[8], L = f[9];
  tye(C, L);
  const T = k?.rows ?? 24, g = i === "full";
  let y;
  if (f[10] !== m || f[11] !== g) y = e(F8t, { value: g, children: m }), f[10] = m, f[11] = g, f[12] = y;
  else y = f[12];
  let q;
  if (f[13] !== T || f[14] !== y) q = e(Yc, { flexDirection: "column", height: T, width: "100%", flexShrink: 0, children: y }), f[13] = T, f[14] = y, f[15] = q;
  else q = f[15];
  return q;
}
function d(u, m, p) {
  let c = u?.setAltScreenActive(false) ?? "";
  u?.clearTextSelection();
  let i = m.reset("mouse"), k = m.reset("altScreen"), r = k !== "" && !u?.hasUnmounted, t = r ? m.reassert("extendedKeys") : "", f = r ? u?.nativeCursorSeq ?? "" : "";
  p(c + i + k + t + f);
}
export {
  hwe
};
