// linux/fs/cowork-plugins.js — Claude Code 2.1.310（linux）模块 chunk-bqffg6mb.js
import { OR, L, ke, yS, hT, J } from "../context/not-admin-owned.js";
import { dcr, uy, JYt, Fl, fcr, pcr, mcr, gcr, pE, Kxe, qSe, ew, xf, GM } from "./node-modules.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { jo } from "./gitlab-runner-authentication-token.js";
import { pl } from "../shell/invalid-type.js";
import { jE } from "../shell/chunk-fc32a44c.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Fd, e0, ajo } from "../plugins/entry-refused.js";
import { Ie } from "../plugins/chunk-c198f87f.js";
import { i7 } from "../shared/dev-mods.js";
import { o, oe, T, u } from "../vendor/zod/string-format.js";
import { join as O, resolve as f, sep as _ } from "path";
function N8(e, r, n = Date.now()) {
  return Number.isFinite(e) && Math.abs(n - e) < r;
}
import { normalize as v, sep as b } from "path";
var x = 1024;
function vw(e) {
  let r = jE().foldedSegmentsBySpelling, n = r.get(e);
  if (n === void 0) {
    if (n = v(e).split(b).map(pl).join(b), r.size >= x) r.clear();
    r.set(e, n);
  }
  return n;
}
var Npn = "cache";
function eR() {
  return f(ke(), Fd());
}
function Hre() {
  return O(eR(), Npn);
}
function _Xn() {
  return L([f(Le(), "plugins"), f(Le(), "cowork_plugins"), eR(), ...e0().map((e) => f(ke(), e))]);
}
function C1o() {
  return L([...yS(), ...hT()].map((e) => f(ke(), e)));
}
function D6s(e) {
  let r = C1o();
  if (r.length === 0) return false;
  if (Kxe(e, h)) return true;
  let n = r.join("\0"), i = Ie(), t = i.inlinePluginRootsComparableMemo;
  if (t?.roots !== n || !N8(t.at, N)) t = { roots: n, comparable: r.map((s) => ew(s, { foldCase: true, knownNotSuspect: !Kxe(s, h) })), at: Date.now() }, i.inlinePluginRootsComparableMemo = t;
  let g = ew(e, { foldCase: true, knownNotSuspect: true });
  return t.comparable.some((s) => xf(s, g, { alreadyComparable: true }));
}
var N = 3e4, h = { allowLocalWsl: true, eisdirIsFolder: true };
function H6s(e) {
  if (J()) return true;
  let r = jo(f(i7())), n = vw(f(e));
  if (r.map(vw).some((s) => n === s || n.startsWith(s + _))) return true;
  let i = GM(e) || pE(e), t = !uy(e) && (!i || Fl(e));
  if (t && Kxe(e, h)) return true;
  let g = ew(e, { foldCase: true, knownNotSuspect: t });
  return r.some((s) => xf(ew(s, { foldCase: true }), g, { alreadyComparable: true }));
}
import { readFileSync as W, statSync as I } from "fs";
import { isAbsolute as w, join as M, resolve as S } from "path";
var k = 4194304, E = p(() => u({ sourceCommand: o().optional().catch(void 0), sourceProducerPath: o().optional().catch(void 0), previousProducerPaths: T(oe()).transform((e) => e.filter((r) => typeof r === "string")).optional().catch(void 0) }).passthrough());
function R1o(e) {
  let r = Ie(), n = r.commandProducerDirsDenied, i = R();
  r.commandProducerDirsWslProviderUndeterminable = i === "undeterminable";
  let t = i === "undeterminable" ? void 0 : i;
  r.commandProducerDirsScannedAt = Date.now(), r.commandProducerDirsComparable = null;
  for (let g of new Set(e)) {
    let s;
    try {
      let m = M(g, "installed_plugins.json"), P = I(m);
      if (!P.isFile() || P.size > k) continue;
      let c = W(m, "utf8");
      s = JSON.parse(c);
    } catch {
      continue;
    }
    let a = typeof s === "object" && s !== null && "plugins" in s ? s.plugins : void 0;
    if (typeof a !== "object" || a === null) continue;
    for (let m of Object.values(a)) {
      if (!Array.isArray(m)) continue;
      for (let P of m) {
        let c = E().safeParse(P);
        if (!c.success) continue;
        for (let C of [c.data.sourceProducerPath, ...c.data.previousProducerPaths ?? []]) {
          let d = C === void 0 ? void 0 : qSe(C), D = d === void 0 ? void 0 : y(d, t);
          if (D !== void 0) n.add(D);
        }
      }
    }
  }
  return [...n];
}
function pet(e, { emit: r = true } = {}) {
  let n = R(), i = y(qSe(e), n === "undeterminable" ? void 0 : n);
  if (i === void 0) return;
  let t = Ie().commandProducerDirsDenied;
  if (t.has(i)) return;
  if (t.add(i), Ie().commandProducerDirsComparable = null, r) E2e();
}
function E2e() {
  try {
    Ie().commandProducerDirsChanged.emit();
  } catch (e) {
    l(e);
  }
}
var x1o = OR(() => Ie().commandProducerDirsChanged);
function L6s(e, r, n, { maxAgeMs: i = 0 } = {}) {
  let t = Ie();
  if (!(i > 0 && Date.now() - t.commandProducerDirsScannedAt < i) || t.commandProducerDirsComparable === null) {
    let a = { foldCase: true }, m = ew(ke(), a), P = ew(n, a), c = r.map((d) => ew(d, a)).filter((d) => !xf(d, m, { alreadyComparable: true })), C = R1o(r).map((d) => ew(d, a));
    t.commandProducerDirsComparable = [...c, ...C], t.commandProducerDirsNeedCanonicalCandidate = C.length > 0 || c.some((d) => !xf(P, d, { alreadyComparable: true }));
  }
  if (t.commandProducerDirsWslProviderUndeterminable && (JYt(qSe(e)) !== void 0 || JYt(ew(e, { foldCase: true })) !== void 0)) return true;
  if (t.commandProducerDirsComparable.length === 0) return false;
  if (t.commandProducerDirsNeedCanonicalCandidate && Kxe(w(e) ? e : S(e), { allowLocalWsl: true })) return true;
  let s = t.commandProducerDirsNeedCanonicalCandidate ? ew(e, { foldCase: true, knownNotSuspect: true }) : S(e).normalize("NFC").toLowerCase();
  return t.commandProducerDirsComparable.some((a) => xf(a, s, { alreadyComparable: true }));
}
function R() {
  let e = Ie(), r = eR(), n = e.wslProviderOfPluginsRootMemo;
  if (n?.root === r && N8(n.at, A)) return n.value;
  let i = ajo(r);
  if (i === "undeterminable") return "undeterminable";
  let t = i === void 0 ? void 0 : { prefix: i.prefix };
  return e.wslProviderOfPluginsRootMemo = { root: r, value: t, at: Date.now() }, t;
}
var A = 3e4;
function y(e, r) {
  let n = mcr(e, { exactDots: true }) ?? (r === void 0 ? void 0 : pcr(e, r.prefix));
  if (n !== void 0) return n;
  if (w(e)) return !dcr(e) && (!pE(e) || fcr(e)) ? e : void 0;
  return gcr(e, { exactDots: true });
}
export {
  C1o,
  D6s,
  E2e,
  H6s,
  Hre,
  L6s,
  N8,
  Npn,
  R1o,
  _Xn,
  eR,
  pet,
  vw,
  x1o
};
