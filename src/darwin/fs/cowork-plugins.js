// darwin/fs/cowork-plugins.js — Claude Code 2.1.310（darwin）模块 chunk-r4h3fskj.js
import { DR, L, ke, Sb, _C, J } from "../context/not-admin-owned.js";
import { Ccr, fy, u4t, $l, Rcr, xcr, Pcr, Icr, mv, Qxe, twe, nw, Rp, qM } from "./node-modules.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { Wo } from "./gitlab-runner-authentication-token.js";
import { ml } from "../shell/invalid-type.js";
import { Wv } from "../shell/chunk-fc32a44c.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { $d, rL, Ljo } from "../plugins/entry-refused.js";
import { Ie } from "../plugins/chunk-c198f87f.js";
import { mQ } from "../shared/dev-mods.js";
import { o, oe, C, u } from "../vendor/zod/string-format.js";
import { join as _, resolve as p, sep as N } from "path";
function z8(e, r, n = Date.now()) {
  return Number.isFinite(e) && Math.abs(n - e) < r;
}
import { normalize as x, sep as S } from "path";
var O = 1024;
function vw(e) {
  let r = Wv().foldedSegmentsBySpelling, n = r.get(e);
  if (n === void 0) {
    if (n = x(e).split(S).map(ml).join(S), r.size >= O) r.clear();
    r.set(e, n);
  }
  return n;
}
var Qfn = "cache";
function rR() {
  return p(ke(), $d());
}
function Bre() {
  return _(rR(), Qfn);
}
function LXn() {
  return L([p(Le(), "plugins"), p(Le(), "cowork_plugins"), rR(), ...rL().map((e) => p(ke(), e))]);
}
function njo() {
  return L([...Sb(), ..._C()].map((e) => p(ke(), e)));
}
function _9s(e) {
  let r = njo();
  if (r.length === 0) return false;
  if (Qxe(e, D)) return true;
  let n = r.join("\0"), i = Ie(), t = i.inlinePluginRootsComparableMemo;
  if (t?.roots !== n || !z8(t.at, W)) t = { roots: n, comparable: r.map((s) => nw(s, { foldCase: true, knownNotSuspect: !Qxe(s, D) })), at: Date.now() }, i.inlinePluginRootsComparableMemo = t;
  let g = nw(e, { foldCase: true, knownNotSuspect: true });
  return t.comparable.some((s) => Rp(s, g, { alreadyComparable: true }));
}
var W = 3e4, D = { allowLocalWsl: true, eisdirIsFolder: true };
function S9s(e) {
  if (J()) return true;
  let r = Wo(p(mQ())), n = vw(p(e));
  if (r.map(vw).some((s) => n === s || n.startsWith(s + N))) return true;
  let i = qM(e) || mv(e), t = !fy(e) && (!i || $l(e));
  if (t && Qxe(e, D)) return true;
  let g = nw(e, { foldCase: true, knownNotSuspect: t });
  return r.some((s) => Rp(nw(s, { foldCase: true }), g, { alreadyComparable: true }));
}
import { readFileSync as I, statSync as M } from "fs";
import { isAbsolute as R, join as k, resolve as w } from "path";
var E = 4194304, A = f(() => u({ sourceCommand: o().optional().catch(void 0), sourceProducerPath: o().optional().catch(void 0), previousProducerPaths: C(oe()).transform((e) => e.filter((r) => typeof r === "string")).optional().catch(void 0) }).passthrough());
function rjo(e) {
  let r = Ie(), n = r.commandProducerDirsDenied, i = y();
  r.commandProducerDirsWslProviderUndeterminable = i === "undeterminable";
  let t = i === "undeterminable" ? void 0 : i;
  r.commandProducerDirsScannedAt = Date.now(), r.commandProducerDirsComparable = null;
  for (let g of new Set(e)) {
    let s;
    try {
      let m = k(g, "installed_plugins.json"), P = M(m);
      if (!P.isFile() || P.size > E) continue;
      let c = I(m, "utf8");
      s = JSON.parse(c);
    } catch {
      continue;
    }
    let a = typeof s === "object" && s !== null && "plugins" in s ? s.plugins : void 0;
    if (typeof a !== "object" || a === null) continue;
    for (let m of Object.values(a)) {
      if (!Array.isArray(m)) continue;
      for (let P of m) {
        let c = A().safeParse(P);
        if (!c.success) continue;
        for (let h of [c.data.sourceProducerPath, ...c.data.previousProducerPaths ?? []]) {
          let d = h === void 0 ? void 0 : twe(h), b = d === void 0 ? void 0 : v(d, t);
          if (b !== void 0) n.add(b);
        }
      }
    }
  }
  return [...n];
}
function wet(e, { emit: r = true } = {}) {
  let n = y(), i = v(twe(e), n === "undeterminable" ? void 0 : n);
  if (i === void 0) return;
  let t = Ie().commandProducerDirsDenied;
  if (t.has(i)) return;
  if (t.add(i), Ie().commandProducerDirsComparable = null, r) Mze();
}
function Mze() {
  try {
    Ie().commandProducerDirsChanged.emit();
  } catch (e) {
    l(e);
  }
}
var ojo = DR(() => Ie().commandProducerDirsChanged);
function b9s(e, r, n, { maxAgeMs: i = 0 } = {}) {
  let t = Ie();
  if (!(i > 0 && Date.now() - t.commandProducerDirsScannedAt < i) || t.commandProducerDirsComparable === null) {
    let a = { foldCase: true }, m = nw(ke(), a), P = nw(n, a), c = r.map((d) => nw(d, a)).filter((d) => !Rp(d, m, { alreadyComparable: true })), h = rjo(r).map((d) => nw(d, a));
    t.commandProducerDirsComparable = [...c, ...h], t.commandProducerDirsNeedCanonicalCandidate = h.length > 0 || c.some((d) => !Rp(P, d, { alreadyComparable: true }));
  }
  if (t.commandProducerDirsWslProviderUndeterminable && (u4t(twe(e)) !== void 0 || u4t(nw(e, { foldCase: true })) !== void 0)) return true;
  if (t.commandProducerDirsComparable.length === 0) return false;
  if (t.commandProducerDirsNeedCanonicalCandidate && Qxe(R(e) ? e : w(e), { allowLocalWsl: true })) return true;
  let s = t.commandProducerDirsNeedCanonicalCandidate ? nw(e, { foldCase: true, knownNotSuspect: true }) : w(e).normalize("NFC").toLowerCase();
  return t.commandProducerDirsComparable.some((a) => Rp(a, s, { alreadyComparable: true }));
}
function y() {
  let e = Ie(), r = rR(), n = e.wslProviderOfPluginsRootMemo;
  if (n?.root === r && z8(n.at, T)) return n.value;
  let i = Ljo(r);
  if (i === "undeterminable") return "undeterminable";
  let t = i === void 0 ? void 0 : { prefix: i.prefix };
  return e.wslProviderOfPluginsRootMemo = { root: r, value: t, at: Date.now() }, t;
}
var T = 3e4;
function v(e, r) {
  let n = Pcr(e, { exactDots: true }) ?? (r === void 0 ? void 0 : xcr(e, r.prefix));
  if (n !== void 0) return n;
  if (R(e)) return !Ccr(e) && (!mv(e) || Rcr(e)) ? e : void 0;
  return Icr(e, { exactDots: true });
}
export {
  Bre,
  LXn,
  Mze,
  Qfn,
  S9s,
  _9s,
  b9s,
  njo,
  ojo,
  rR,
  rjo,
  vw,
  wet,
  z8
};
