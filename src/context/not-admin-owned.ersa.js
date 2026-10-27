// context/not-admin-owned.ersa.js — Claude Code 2.1.310 模块 chunk-ersar6wn.js
import { He } from "../fs/async-hooks.9s1z.js";
import { Br, Sie, dN, Vt } from "../shared/chunk-9sbknd2z.js";
import { $7r, bis, VTn, tRt } from "../fs/chunk-kqpf5fh3.js";
import { F7r } from "../shared/chunk-3kevgx4j.js";
import { Jxe, KAt, R7r, IW, Fz, vie, c4t, Uit, kie, qAt, YAt, In } from "../fs/node-modules.gp4v.js";
import { W, Kmi, Ymi } from "../shared/chunk-3y73jbfr.js";
import { z } from "../shared/chunk-mxa4mwnj.js";
import { Fr } from "../vendor/react/chunk-meds60nn.js";
var j = {};
Fr(j, { default: () => Dbe });
var q = {};
Fr(q, { default: () => T3e });
function DR(e) {
  return { subscribe(t) {
    return e().subscribe(t);
  }, emit(...t) {
    e().emit(...t);
  }, clear() {
    e().clear();
  } };
}
var pn = Object.prototype;
function gn(e) {
  var t = e && e.constructor, o = typeof t == "function" && t.prototype || pn;
  return e === o;
}
var A3e = gn;
function fn(e, t) {
  return function(o) {
    return e(t(o));
  };
}
var aXr = fn;
var hn = aXr(Object.keys, Object), $e = hn;
var mn = Object.prototype, Sn = mn.hasOwnProperty;
function yn(e) {
  if (!A3e(e)) return $e(e);
  var t = [];
  for (var o in Object(e)) if (Sn.call(e, o) && o != "constructor") t.push(o);
  return t;
}
var lXr = yn;
var vn = kie(IW, "DataView"), E = vn;
var bn = kie(IW, "Promise"), D = bn;
var kn = kie(IW, "Set"), bAt = kn;
var Cn = kie(IW, "WeakMap"), H = Cn;
var Xe = "[object Map]", xn = "[object Object]", Ze = "[object Promise]", et = "[object Set]", ot = "[object WeakMap]", rt = "[object DataView]", Rn = Uit(E), Tn = Uit(qAt), Mn = Uit(D), An = Uit(bAt), Ln = Uit(H), T = vie;
if (E && T(new E(new ArrayBuffer(1))) != rt || qAt && T(new qAt()) != Xe || D && T(D.resolve()) != Ze || bAt && T(new bAt()) != et || H && T(new H()) != ot) T = function(e) {
  var t = vie(e), o = t == xn ? e.constructor : void 0, r = o ? Uit(o) : "";
  if (r) switch (r) {
    case Rn:
      return rt;
    case Tn:
      return Xe;
    case Mn:
      return Ze;
    case An:
      return et;
    case Ln:
      return ot;
  }
  return t;
};
var $xe = T;
function On(e) {
  return e != null && typeof e == "object";
}
var Mz = On;
var Fn = "[object Arguments]";
function En(e) {
  return Mz(e) && vie(e) == Fn;
}
var Y = En;
var it = Object.prototype, { hasOwnProperty: Dn, propertyIsEnumerable: Hn } = it, Bn = Y(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Y : function(e) {
  return Mz(e) && Dn.call(e, "callee") && !Hn.call(e, "callee");
}, Hbe = Bn;
var Un = Array.isArray, tw = Un;
var jn = 9007199254740991;
function _n(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= jn;
}
var CCn = _n;
function qn(e) {
  return e != null && CCn(e.length) && !c4t(e);
}
var dfe = qn;
function Nn() {
  return false;
}
var st = Nn;
var dt = typeof j == "object" && j && !j.nodeType && j, at = dt && typeof B == "object" && B && !B.nodeType && B, Wn = at && at.exports === dt, lt = Wn ? IW.Buffer : void 0, Gn = lt ? lt.isBuffer : void 0, Kn = Gn || st, Dbe = Kn;
var Vn = "[object Arguments]", Jn = "[object Array]", zn = "[object Boolean]", Qn = "[object Date]", Yn = "[object Error]", $n = "[object Function]", Xn = "[object Map]", Zn = "[object Number]", eo = "[object Object]", to = "[object RegExp]", oo = "[object Set]", ro = "[object String]", io = "[object WeakMap]", so = "[object ArrayBuffer]", lo = "[object DataView]", uo = "[object Float32Array]", co = "[object Float64Array]", po = "[object Int8Array]", go = "[object Int16Array]", fo = "[object Int32Array]", ho = "[object Uint8Array]", mo = "[object Uint8ClampedArray]", So = "[object Uint16Array]", yo = "[object Uint32Array]", S = {};
S[uo] = S[co] = S[po] = S[go] = S[fo] = S[ho] = S[mo] = S[So] = S[yo] = true;
S[Vn] = S[Jn] = S[so] = S[zn] = S[lo] = S[Qn] = S[Yn] = S[$n] = S[Xn] = S[Zn] = S[eo] = S[to] = S[oo] = S[ro] = S[io] = false;
function vo(e) {
  return Mz(e) && CCn(e.length) && !!S[vie(e)];
}
var ut = vo;
function ko(e) {
  return function(t) {
    return e(t);
  };
}
var TCn = ko;
var ct = typeof q == "object" && q && !q.nodeType && q, w = ct && typeof _ == "object" && _ && !_.nodeType && _, Co = w && w.exports === ct, X = Co && R7r.process, xo = (function() {
  try {
    var e = w && w.require && w.require("util").types;
    if (e) return e;
    return X && X.binding && X.binding("util");
  } catch (t) {
  }
})(), T3e = xo;
var pt = T3e && T3e.isTypedArray, Ro = pt ? TCn(pt) : ut, bit = Ro;
function To() {
  this.__data__ = new KAt(), this.size = 0;
}
var gt = To;
function Po(e) {
  var t = this.__data__, o = t.delete(e);
  return this.size = t.size, o;
}
var ft = Po;
function Mo(e) {
  return this.__data__.get(e);
}
var ht = Mo;
function wo(e) {
  return this.__data__.has(e);
}
var mt = wo;
var Ao = 200;
function Lo(e, t) {
  var o = this.__data__;
  if (o instanceof KAt) {
    var r = o.__data__;
    if (!qAt || r.length < Ao - 1) return r.push([e, t]), this.size = ++o.size, this;
    o = this.__data__ = new YAt(r);
  }
  return o.set(e, t), this.size = o.size, this;
}
var St = Lo;
function P(e) {
  var t = this.__data__ = new KAt(e);
  this.size = t.size;
}
P.prototype.clear = gt;
P.prototype.delete = ft;
P.prototype.get = ht;
P.prototype.has = mt;
P.prototype.set = St;
var p$e = P;
var Oo = "__lodash_hash_undefined__";
function Io(e) {
  return this.__data__.set(e, Oo), this;
}
var yt = Io;
function Fo(e) {
  return this.__data__.has(e);
}
var vt = Fo;
function N(e) {
  var t = -1, o = e == null ? 0 : e.length;
  this.__data__ = new YAt();
  while (++t < o) this.add(e[t]);
}
N.prototype.add = N.prototype.push = yt;
N.prototype.has = vt;
var tXr = N;
function Eo(e, t) {
  var o = -1, r = e == null ? 0 : e.length;
  while (++o < r) if (t(e[o], o, e)) return true;
  return false;
}
var bt = Eo;
function Do(e, t) {
  return e.has(t);
}
var nXr = Do;
var Ho = 1, Bo = 2;
function Uo(e, t, o, r, i, s) {
  var a = o & Ho, l = e.length, d = t.length;
  if (l != d && !(a && d > l)) return false;
  var p = s.get(e), y = s.get(t);
  if (p && y) return p == t && y == e;
  var u = -1, f = true, h = o & Bo ? new tXr() : void 0;
  s.set(e, t), s.set(t, e);
  while (++u < l) {
    var g = e[u], v = t[u];
    if (r) var b = a ? r(v, g, u, t, e, s) : r(g, v, u, e, t, s);
    if (b !== void 0) {
      if (b) continue;
      f = false;
      break;
    }
    if (h) {
      if (!bt(t, function(c, C) {
        if (!nXr(h, C) && (g === c || i(g, c, o, r, s))) return h.push(C);
      })) {
        f = false;
        break;
      }
    } else if (!(g === v || i(g, v, o, r, s))) {
      f = false;
      break;
    }
  }
  return s.delete(e), s.delete(t), f;
}
var G = Uo;
var jo = IW.Uint8Array, vCn = jo;
function _o(e) {
  var t = -1, o = Array(e.size);
  return e.forEach(function(r, i) {
    o[++t] = [i, r];
  }), o;
}
var kt = _o;
function qo(e) {
  var t = -1, o = Array(e.size);
  return e.forEach(function(r) {
    o[++t] = r;
  }), o;
}
var kCn = qo;
var No = 1, Wo = 2, Go = "[object Boolean]", Ko = "[object Date]", Vo = "[object Error]", Jo = "[object Map]", zo = "[object Number]", Qo = "[object RegExp]", Yo = "[object Set]", $o = "[object String]", Xo = "[object Symbol]", Zo = "[object ArrayBuffer]", er = "[object DataView]", Ct = Fz ? Fz.prototype : void 0, Z = Ct ? Ct.valueOf : void 0;
function tr(e, t, o, r, i, s, a) {
  switch (o) {
    case er:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return false;
      e = e.buffer, t = t.buffer;
    case Zo:
      if (e.byteLength != t.byteLength || !s(new vCn(e), new vCn(t))) return false;
      return true;
    case Go:
    case Ko:
    case zo:
      return Jxe(+e, +t);
    case Vo:
      return e.name == t.name && e.message == t.message;
    case Qo:
    case $o:
      return e == t + "";
    case Jo:
      var l = kt;
    case Yo:
      var d = r & No;
      if (l || (l = kCn), e.size != t.size && !d) return false;
      var p = a.get(e);
      if (p) return p == t;
      r |= Wo, a.set(e, t);
      var y = G(l(e), l(t), r, i, s, a);
      return a.delete(e), y;
    case Xo:
      if (Z) return Z.call(e) == Z.call(t);
  }
  return false;
}
var xt = tr;
function nr(e, t) {
  var o = -1, r = t.length, i = e.length;
  while (++o < r) e[i + o] = t[o];
  return e;
}
var M3t = nr;
function or(e, t, o) {
  var r = t(e);
  return tw(e) ? r : M3t(r, o(e));
}
var rXr = or;
function rr(e, t) {
  var o = -1, r = e == null ? 0 : e.length, i = 0, s = [];
  while (++o < r) {
    var a = e[o];
    if (t(a, o, e)) s[i++] = a;
  }
  return s;
}
var oXr = rr;
function ir() {
  return [];
}
var sXr = ir;
var sr = Object.prototype, ar = sr.propertyIsEnumerable, Rt = Object.getOwnPropertySymbols, lr = !Rt ? sXr : function(e) {
  if (e == null) return [];
  return e = Object(e), oXr(Rt(e), function(t) {
    return ar.call(e, t);
  });
}, H3t = lr;
function dr(e, t) {
  var o = -1, r = Array(e);
  while (++o < e) r[o] = t(o);
  return r;
}
var Tt = dr;
var ur = 9007199254740991, cr = /^(?:0|[1-9]\d*)$/;
function pr(e, t) {
  var o = typeof e;
  return t = t == null ? ur : t, !!t && (o == "number" || o != "symbol" && cr.test(e)) && (e > -1 && e % 1 == 0 && e < t);
}
var C3e = pr;
var gr = Object.prototype, fr = gr.hasOwnProperty;
function hr(e, t) {
  var o = tw(e), r = !o && Hbe(e), i = !o && !r && Dbe(e), s = !o && !r && !i && bit(e), a = o || r || i || s, l = a ? Tt(e.length, String) : [], d = l.length;
  for (var p in e) if ((t || fr.call(e, p)) && !(a && (p == "length" || i && (p == "offset" || p == "parent") || s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || C3e(p, d)))) l.push(p);
  return l;
}
var iXr = hr;
function mr(e) {
  return dfe(e) ? iXr(e) : lXr(e);
}
var cfe = mr;
function Sr(e) {
  return rXr(e, cfe, H3t);
}
var Hdr = Sr;
var yr = 1, vr = Object.prototype, br = vr.hasOwnProperty;
function kr(e, t, o, r, i, s) {
  var a = o & yr, l = Hdr(e), d = l.length, p = Hdr(t), y = p.length;
  if (d != y && !a) return false;
  var u = d;
  while (u--) {
    var f = l[u];
    if (!(a ? f in t : br.call(t, f))) return false;
  }
  var h = s.get(e), g = s.get(t);
  if (h && g) return h == t && g == e;
  var v = true;
  s.set(e, t), s.set(t, e);
  var b = a;
  while (++u < d) {
    f = l[u];
    var c = e[f], C = t[f];
    if (r) var Ye = a ? r(C, c, f, t, e, s) : r(c, C, f, e, t, s);
    if (!(Ye === void 0 ? c === C || i(c, C, o, r, s) : Ye)) {
      v = false;
      break;
    }
    b || (b = f == "constructor");
  }
  if (v && !b) {
    var O = e.constructor, I = t.constructor;
    if (O != I && ("constructor" in e && "constructor" in t) && !(typeof O == "function" && O instanceof O && typeof I == "function" && I instanceof I)) v = false;
  }
  return s.delete(e), s.delete(t), v;
}
var Pt = kr;
var Cr = 1, Mt = "[object Arguments]", wt = "[object Array]", K = "[object Object]", xr = Object.prototype, At = xr.hasOwnProperty;
function Rr(e, t, o, r, i, s) {
  var a = tw(e), l = tw(t), d = a ? wt : $xe(e), p = l ? wt : $xe(t);
  d = d == Mt ? K : d, p = p == Mt ? K : p;
  var y = d == K, u = p == K, f = d == p;
  if (f && Dbe(e)) {
    if (!Dbe(t)) return false;
    a = true, y = false;
  }
  if (f && !y) return s || (s = new p$e()), a || bit(e) ? G(e, t, o, r, i, s) : xt(e, t, d, o, r, i, s);
  if (!(o & Cr)) {
    var h = y && At.call(e, "__wrapped__"), g = u && At.call(t, "__wrapped__");
    if (h || g) {
      var v = h ? e.value() : e, b = g ? t.value() : t;
      return s || (s = new p$e()), i(v, b, o, r, s);
    }
  }
  if (!f) return false;
  return s || (s = new p$e()), Pt(e, t, o, r, i, s);
}
var Lt = Rr;
function Ot(e, t, o, r, i) {
  if (e === t) return true;
  if (e == null || t == null || !Mz(e) && !Mz(t)) return e !== e && t !== t;
  return Lt(e, t, o, r, Ot, i);
}
var ACn = Ot;
function Tr(e, t) {
  return ACn(e, t);
}
var wn = Tr;
function Bxe(e, t) {
  return e.flatMap((o, r) => r ? [t(r), o] : [o]);
}
function F(e, t) {
  let o = 0;
  for (let r of e) o += +!!t(r);
  return o;
}
function wit(e, t) {
  if (e === t) return true;
  if (e === void 0 || t === void 0 || e.size !== t.size) return false;
  for (let o of e) if (!t.has(o)) return false;
  return true;
}
function TA(e, t) {
  if (e === t) return true;
  if (e === void 0 || t === void 0 || e.length !== t.length) return false;
  for (let o = 0; o < e.length; o++) if (e[o] !== t[o]) return false;
  return true;
}
function L(e) {
  return [...new Set(e)];
}
function Bi(e) {
  if (!Array.isArray(e)) return [];
  return e.every((t) => typeof t === "string") ? e : e.filter((t) => typeof t === "string");
}
function Vts(e, t) {
  let o = Math.min(e.length, t.length), r = 0;
  while (r < o && e[r] === t[r]) r++;
  return r;
}
import { homedir as Ir } from "os";
import { resolve as en, sep as Zt } from "path";
var ee = "3ab19d7e-9f35-45c2-926e-75e271cc60b3";
function SAt(e) {
  return dN(e.trim(), ee);
}
function O3t() {
  let e = process.env.CLAUDE_CODE_REMOTE_SESSION_ID?.trim();
  return e ? dN(e, ee) : null;
}
function Bts(e) {
  if (e.toLowerCase().endsWith(".jsonl")) return { sessionId: Sie(), ingressUrl: null, isUrl: false, jsonlFile: e, isJsonlFile: true };
  if (Vt(e)) return { sessionId: e, ingressUrl: null, isUrl: false, jsonlFile: null, isJsonlFile: false };
  try {
    let t = new URL(e);
    return { sessionId: O3t() ?? dN(t.href, ee), ingressUrl: t.href, isUrl: true, jsonlFile: null, isJsonlFile: false };
  } catch {
  }
  return null;
}
import { basename as Mr, dirname as Et } from "path";
class te {
  walked = /* @__PURE__ */ new Map();
  folderIsLink = /* @__PURE__ */ new Map();
  managedMcp = null;
  clearWalk() {
    this.walked.clear(), this.folderIsLink.clear();
  }
  noteWalked(e, t) {
    if (!this.walked.has(e)) this.walked.set(e, t());
  }
  linkOf(e) {
    return this.walked.get(e) ?? null;
  }
  isLinked(e) {
    return this.linkOf(e) !== null;
  }
  all() {
    return [...this.walked.values(), this.managedMcp].filter((e) => e !== null);
  }
}
var Cmi = ["not_admin_owned", "other_writable", "group_writable", "symlinked", "unknown", "not_evaluated", "protected"];
function Tmi({ file: e, folder: t, linked: o, posix: r }) {
  if (!r) return "not_evaluated";
  if (e === void 0 || t === void 0) return o ? "symlinked" : "unknown";
  if (e.uid !== 0 || t.uid !== 0) return "not_admin_owned";
  let i = e.mode | t.mode;
  if ((i & 2) !== 0) return "other_writable";
  if ((i & 16) !== 0) return "group_writable";
  return o ? "symlinked" : "protected";
}
function Ami({ file: e, folder: t, euid: o, groups: r, posix: i }) {
  if (!i || o === void 0) return;
  if (o === 0) return true;
  let s = [e, t].filter((l) => l !== void 0), a = s.map((l) => {
    if (l.uid === o || (l.mode & 2) !== 0) return true;
    if ((l.mode & 16) === 0) return false;
    return l.gid === void 0 ? void 0 : r().includes(l.gid);
  });
  if (a.includes(true)) return true;
  return s.length < 2 || a.includes(void 0) ? void 0 : false;
}
class ne {
  documents = /* @__PURE__ */ new Map();
  folderOwners = /* @__PURE__ */ new Map();
  siblingRecords = /* @__PURE__ */ new Map();
  setsOrgPin = false;
  clear() {
    this.documents.clear(), this.folderOwners.clear(), this.siblingRecords.clear(), this.setsOrgPin = false;
  }
  note(e, t) {
    this.documents.set(e, t);
  }
  all() {
    return [...this.documents];
  }
}
function It() {
  return { answers: null, computed: null, pass: Promise.resolve(), queuedFor: void 0, isAnnouncing: false, askedOf: "", askedAbout: null, visited: [], unsettled: /* @__PURE__ */ new Set() };
}
class oe {
  holders = 0;
  tiers;
  baseline;
  lingering;
  tier(e) {
    if (this.holders === 0 && this.lingering !== void 0) {
      let t = this.lingering();
      if (t === void 0) this.lingering = void 0;
      this.tiers = t;
    }
    return this.tiers?.get(e);
  }
  engage(e, t) {
    let o;
    if (this.holders === 0) {
      let i = e(), s = t?.() ?? i;
      if (this.lingering !== void 0) o = { tiers: this.tiers, lingering: this.lingering }, this.lingering = void 0;
      this.tiers = i, this.baseline = s;
    }
    this.holders++;
    let r = false;
    return { release: () => {
      if (r) return { last: false };
      if (r = true, this.holders--, this.holders > 0) return { last: false };
      return this.tiers = void 0, this.lingering = void 0, this.baseline = void 0, { last: true };
    }, abandon: () => {
      if (r) return;
      if (r = true, this.holders--, this.holders === 0) this.tiers = o?.tiers, this.lingering = o?.lingering, this.baseline = void 0;
    } };
  }
  whileLive(e) {
    let t = this.tiers, o = this.lingering;
    this.tiers = void 0, this.lingering = void 0;
    try {
      return e();
    } finally {
      this.tiers = t, this.lingering = o;
    }
  }
  baselineTier(e) {
    return this.baseline?.get(e);
  }
  differingTiers(e) {
    return this.baseline === void 0 ? [] : Pr(this.baseline, e);
  }
  rebaseline(e, t) {
    if (this.baseline === void 0) return;
    let o = new Map(this.baseline);
    for (let r of t) {
      let i = e.get(r);
      if (i === void 0) o.delete(r);
      else o.set(r, i);
    }
    this.baseline = o;
  }
  linger(e, t) {
    if (this.holders === 0) this.tiers = e, this.lingering = t, this.baseline = void 0;
  }
  isHeld() {
    return this.holders > 0;
  }
}
function D3t(e) {
  return e !== null && Object.keys(e).length === 0 ? null : e;
}
function Ft(e) {
  return { ...e, settings: D3t(e.settings), unfiltered: D3t(e.unfiltered), ...e.legacy !== void 0 && { legacy: D3t(e.legacy) } };
}
function Pr(e, t) {
  return [...e.keys(), ...[...t.keys()].filter((o) => !e.has(o))].filter((o) => {
    let r = e.get(o), i = t.get(o);
    return !wn(r && Ft(r), i && Ft(i));
  });
}
var jts = ["forceLoginOrgUUID", "forceLoginMethod", "forceLoginGatewayUrl"];
class Uxe {
  mergedSettings = null;
  perSource = /* @__PURE__ */ new Map();
  parsedFiles = /* @__PURE__ */ new Map();
  managedDocumentLinks = new te();
  managedFileProtections = new ne();
  folderListings = /* @__PURE__ */ new Map();
  managedFileReads = /* @__PURE__ */ new Map();
  primedFiles = /* @__PURE__ */ new Set();
  policyWalks = 0;
  walkedFolders = /* @__PURE__ */ new Map();
  policy = {};
  lastPolicyEnvComposition = null;
  isLoadingFromDisk = false;
  autoModeUntrustedSourceWarned = false;
  changed = He();
  internalWrites = /* @__PURE__ */ new Map();
  enabledSources;
  inlineFlagParse;
  repoTierFreeze = new oe();
  hookedMerge = It();
  pluginBase;
  epoch = 0;
  systemSpaceServingLogged = false;
  systemAttestationContradicted = false;
  backendReadResetTail = Promise.resolve();
  backgroundWorkTail = Promise.resolve();
  invalidated = He();
  pluginBaseLoaded = false;
  primer;
  lastSeededUserLayer;
  localStoreProbes = new Dt();
  retained = /* @__PURE__ */ new Map();
  retainedListings = /* @__PURE__ */ new Map();
  setPluginBase(e) {
    this.pluginBase = e, this.pluginBaseLoaded = true;
  }
  clearPluginBase() {
    this.pluginBase = void 0;
  }
  invalidateAll(e) {
    if (this.epoch++, this.mergedSettings = null, this.perSource.clear(), this.parsedFiles.clear(), this.managedDocumentLinks.clearWalk(), this.managedFileProtections.clear(), this.primedFiles.clear(), this.policyWalks = 0, this.walkedFolders.clear(), this.folderListings.clear(), this.policy = {}, e?.userLayer === "retain" && z() && this.primer !== void 0) {
      for (let [t, o] of this.retained) this.parsedFiles.set(t, o.parsed), this.primedFiles.add(t);
      for (let [t, o] of this.retainedListings) this.folderListings.set(t, o.names);
    } else this.retained.clear(), this.retainedListings.clear();
    this.invalidated.emit();
  }
  invalidatePolicyLayer() {
    this.mergedSettings = null, this.perSource.delete("policySettings"), this.policy = {};
  }
  onInvalidate(e) {
    return this.invalidated.subscribe(e);
  }
  seedParsedFile(e, t, o, r) {
    if (r !== this.epoch) return false;
    let i = this.parsedFiles.get(e), s = i !== void 0 && re(i, o), a = !s, l = s ? i : o;
    if (this.parsedFiles.set(e, l), t === "userSettings") this.lastSeededUserLayer = { path: e, parsed: l };
    if (a || this.primedFiles.has(e)) this.primedFiles.add(e);
    let d = this.retained.get(e);
    if (d !== void 0) d.parsed = l;
    if (a) this.dropDerivedCaches(t);
    return true;
  }
  walkReadDiffers(e, t) {
    let o = this.parsedFiles.get(e);
    return o !== void 0 && !this.primedFiles.has(e) && !wn(o, t);
  }
  unseedParsedFile(e, t, o) {
    if (o !== this.epoch) return;
    if (this.retained.delete(e), !this.primedFiles.has(e) || t === "policySettings" && this.policyWalks > 0) return;
    this.primedFiles.delete(e), this.parsedFiles.delete(e), this.dropDerivedCaches(t);
  }
  dropDerivedCaches(e) {
    if (this.perSource.delete(e), this.mergedSettings = null, e === "policySettings") this.policy = {};
  }
  primedFolderListing(e) {
    return z() ? this.folderListings.get(e) : void 0;
  }
  folderListingForPolicyWalk(e) {
    if (!z()) return;
    this.policyWalks++;
    let t = this.folderListings.get(e);
    if (!this.walkedFolders.has(e) || t !== void 0) this.walkedFolders.set(e, t ?? null);
    return t;
  }
  noteWalkListing(e, t) {
    if (!z()) return;
    this.walkedFolders.set(e, t);
  }
  get policyWalkCount() {
    return this.policyWalks;
  }
  policyInstallVerdict(e, t, o) {
    let r = this.parsedFiles.get(e);
    if (r === void 0 || re(r, t)) return "install";
    if (!this.primedFiles.has(e)) return "raced";
    if (this.policyWalks === 0) return "install";
    return this.policyWalks > o ? "raced" : "deferred";
  }
  folderInstallVerdict(e, t, o) {
    if (!this.walkedFolders.has(e)) return this.hasParsedDropInOutside(e, t) ? "raced" : "install";
    let r = this.walkedFolders.get(e);
    if (r !== null && r !== void 0 && wn(r, t)) return "install";
    return this.policyWalks > o ? "raced" : "deferred";
  }
  seedFolderListing(e, t, o) {
    if (o !== this.epoch) return false;
    let r = this.folderListings.get(e);
    this.folderListings.set(e, t);
    let i = this.retainedListings.get(e);
    if (i !== void 0) i.names = t;
    if (r !== void 0 && !wn(r, t)) this.dropDerivedCaches("policySettings");
    return true;
  }
  walkReadManagedFileIn(e, t) {
    for (let [o, r] of this.parsedFiles) if (!o.includes("\0") && !this.primedFiles.has(o) && (r.settings !== null || r.errors.length > 0) && (o === e || Et(o) === t)) return true;
    return false;
  }
  walkRead(e) {
    return this.parsedFiles.has(e) && !this.primedFiles.has(e);
  }
  hasParsedDropInOutside(e, t) {
    for (let o of this.parsedFiles.keys()) if (!o.includes("\0") && !this.primedFiles.has(o) && Et(o) === e && !t.includes(Mr(o))) return true;
    return false;
  }
  clearFolderListing(e, t) {
    if (t !== this.epoch) return;
    if (this.retainedListings.delete(e), !this.folderListings.has(e) || this.walkedFolders.has(e)) return;
    this.folderListings.delete(e), this.dropDerivedCaches("policySettings");
  }
  retainLayer(e, t) {
    let o = this.parsedFiles.get(e), r = { parsed: o !== void 0 && re(o, t) ? o : t };
    return this.retained.set(e, r), () => {
      if (this.retained.get(e) === r) this.retained.delete(e);
    };
  }
  dropRetainedLayer(e) {
    this.retained.delete(e);
  }
  retainFolderListing(e, t) {
    let o = { names: t };
    return this.retainedListings.set(e, o), () => {
      if (this.retainedListings.get(e) === o) this.retainedListings.delete(e);
    };
  }
}
class Dt {
  ownerUidsByRoot = /* @__PURE__ */ new Map();
  realHomeDir = void 0;
  canonicalRootOwnerUids(e, t) {
    let o = this.ownerUidsByRoot.get(e);
    if (o !== void 0) return o;
    let r = t(e);
    return this.ownerUidsByRoot.set(e, r), r;
  }
  hasCanonicalRootOwnerUids(e) {
    return this.ownerUidsByRoot.has(e);
  }
  primeCanonicalRootOwnerUids(e, t) {
    if (this.ownerUidsByRoot.has(e)) return false;
    return this.ownerUidsByRoot.set(e, t), true;
  }
  clearCanonicalRootOwnerUids() {
    this.ownerUidsByRoot.clear();
  }
  normalizedRealHomeDir(e) {
    return this.realHomeDir ??= e(), this.realHomeDir;
  }
  clearNormalizedRealHomeDir() {
    this.realHomeDir = void 0;
  }
}
var dXr = new W(() => new Uxe());
function re(e, t) {
  return wn({ ...e, fileOwner: void 0 }, { ...t, fileOwner: void 0 });
}
function uie() {
  return { sent: /* @__PURE__ */ new Set(), rejected: /* @__PURE__ */ new Set(), declaredTools: void 0, noChannelTools: void 0, turnDeniedTools: void 0, declaredToolsDecided: false, nameOnlyAnnouncements: /* @__PURE__ */ new Set(), surfacedOnWire: /* @__PURE__ */ new Set(), definedByValue: /* @__PURE__ */ new Set(), inlineToolsRefusal: { rejectedHeader: void 0, announcementsByName: /* @__PURE__ */ new Set() }, advisorHeld: void 0, wireShapeSeed: void 0, webSearchHistoryRejected: false, mediaItemCap: void 0, refusedToolSchemas: /* @__PURE__ */ new Map(), systemMessagesAcceptedBy: /* @__PURE__ */ new Set(), nameOnlyEntries: { held: /* @__PURE__ */ new Set(), refused: false, reported: void 0 } };
}
function gC(e) {
  return { sent: new Set(e.sent), rejected: new Set(e.rejected), declaredTools: void 0, noChannelTools: void 0, turnDeniedTools: void 0, declaredToolsDecided: false, nameOnlyAnnouncements: new Set(e.nameOnlyAnnouncements), surfacedOnWire: new Set(e.surfacedOnWire), definedByValue: new Set(e.definedByValue), inlineToolsRefusal: { rejectedHeader: e.inlineToolsRefusal.rejectedHeader, announcementsByName: new Set(e.inlineToolsRefusal.announcementsByName) }, advisorHeld: e.advisorHeld, wireShapeSeed: e.wireShapeSeed, webSearchHistoryRejected: e.webSearchHistoryRejected, mediaItemCap: e.mediaItemCap, refusedToolSchemas: new Map(e.refusedToolSchemas), systemMessagesAcceptedBy: new Set(e.systemMessagesAcceptedBy), nameOnlyEntries: { ...e.nameOnlyEntries, held: new Set(e.nameOnlyEntries.held) } };
}
function wAt(e) {
  return { sent: new Set(e.sent), rejected: new Set(e.rejected), declaredTools: e.declaredTools, noChannelTools: e.noChannelTools, turnDeniedTools: e.turnDeniedTools, declaredToolsDecided: e.declaredToolsDecided, nameOnlyAnnouncements: new Set(e.nameOnlyAnnouncements), surfacedOnWire: new Set(e.surfacedOnWire), definedByValue: new Set(e.definedByValue), inlineToolsRefusal: { rejectedHeader: e.inlineToolsRefusal.rejectedHeader, announcementsByName: new Set(e.inlineToolsRefusal.announcementsByName) }, advisorHeld: e.advisorHeld, wireShapeSeed: e.wireShapeSeed, webSearchHistoryRejected: e.webSearchHistoryRejected, mediaItemCap: e.mediaItemCap, refusedToolSchemas: new Map(e.refusedToolSchemas), systemMessagesAcceptedBy: new Set(e.systemMessagesAcceptedBy), nameOnlyEntries: { ...e.nameOnlyEntries, held: new Set(e.nameOnlyEntries.held) } };
}
function Ddr(e) {
  cXr(e), e.nameOnlyEntries.held.clear(), e.nameOnlyEntries.refused = false, e.nameOnlyEntries.reported = void 0;
}
function cXr(e) {
  e.declaredTools = void 0, e.noChannelTools = void 0, e.declaredToolsDecided = false;
}
function EAt(e) {
  e.systemMessagesAcceptedBy.clear();
  let t = e.wireShapeSeed;
  if (t === void 0) return;
  for (let o of t.sent) e.sent.delete(o);
  for (let o of t.rejected) e.rejected.delete(o);
  e.wireShapeSeed = void 0;
}
function Wts(e, t) {
  for (let o of t.sent) c$(e, o);
  for (let o of t.rejected) _g(e, o);
  e.wireShapeSeed = t;
}
function vAt(e) {
  e.advisorHeld = void 0;
}
function Ldr(e) {
  let { rejectedHeader: t, announcementsByName: o } = e.inlineToolsRefusal;
  if (t !== void 0) e.rejected.delete(t), e.inlineToolsRefusal.rejectedHeader = void 0;
  for (let r of o) e.nameOnlyAnnouncements.delete(r);
  o.clear();
}
function Rmi(e) {
  return e.advisorHeld = void 0, e;
}
function kAt(e) {
  e.declaredToolsDecided = true;
}
function Q(e) {
  let t = uie();
  if (t.declaredTools = e.declaredTools, t.noChannelTools = e.noChannelTools, t.turnDeniedTools = e.turnDeniedTools, t.declaredToolsDecided = e.declaredToolsDecided, t.advisorHeld = e.advisorHeld, e.wireShapeSeed !== void 0) Wts(t, e.wireShapeSeed);
  let { rejectedHeader: o, announcementsByName: r } = e.inlineToolsRefusal;
  if (o !== void 0) Gts(t, o);
  zts(t, r), t.webSearchHistoryRejected = e.webSearchHistoryRejected, t.mediaItemCap = e.mediaItemCap;
  for (let [i, s] of e.refusedToolSchemas) t.refusedToolSchemas.set(i, s);
  return t.nameOnlyEntries.refused = e.nameOnlyEntries.refused, t.nameOnlyEntries.reported = e.nameOnlyEntries.reported, t;
}
function Gts(e, t) {
  _g(e, t), e.inlineToolsRefusal.rejectedHeader = t;
}
function zts(e, t) {
  for (let o of t) e.inlineToolsRefusal.announcementsByName.add(o), e.nameOnlyAnnouncements.add(o);
}
function RCn(e, t) {
  if (e.declaredTools === void 0) e.declaredTools = t;
  kAt(e);
}
function Ndr(e) {
  return e.definedByValue.size === 0 ? e.surfacedOnWire : /* @__PURE__ */ new Set([...e.surfacedOnWire, ...e.definedByValue]);
}
function c$(e, t) {
  if (!e.rejected.has(t)) e.sent.add(t);
}
function mk(e, t) {
  return e.sent.has(t) && !e.rejected.has(t);
}
function _g(e, t) {
  e.sent.delete(t), e.rejected.add(t);
}
function Vf(e, t) {
  return e.rejected.has(t);
}
function CAt(e, t) {
  e.sent.delete(t), e.rejected.delete(t);
}
function xmi(e) {
  e.webSearchHistoryRejected = true;
}
function Fdr(e) {
  e.webSearchHistoryRejected = false;
}
function uXr(e, t) {
  return e.mediaItemCap?.model === t ? e.mediaItemCap : void 0;
}
function pXr(e, t) {
  e.mediaItemCap = t;
}
function TAt(e) {
  e.mediaItemCap = void 0;
}
function $dr(e) {
  e.refusedToolSchemas.clear();
}
class ie {
  spawner = void 0;
  pairings = /* @__PURE__ */ new Map();
  mainEnsureInFlight = false;
  mainSlotBlocked = false;
}
class se {
  #e = uie();
  #t = void 0;
  #n;
  stickyBetas() {
    return this.#e;
  }
  unlatchStickyBetas() {
    this.#e = Q(this.#e);
  }
  atisLatch() {
    return this.#t;
  }
  replaceAtisLatch(e) {
    this.#t = e, this.#n?.(e);
  }
  watchAtisLatch(e) {
    this.#n = e;
  }
  reset() {
    this.#e = uie(), this.#t = void 0;
  }
}
var AAt = { inputTokens: 0, outputTokens: 0, cacheReadInputTokens: 0, cacheCreationInputTokens: 0 };
function M(e) {
  let t = /* @__PURE__ */ Object.create(null);
  return Object.assign(t, e);
}
function Ht(e) {
  let t = M();
  for (let [o, r] of Object.entries(e)) t[o] = { ...r };
  return t;
}
class ae {
  #e = 0;
  #t = 0;
  #n = 0;
  #o = 0;
  #r = Date.now();
  #s = void 0;
  #i = 0;
  #d = 0;
  #u = 0;
  #l = AAt;
  #c = 0;
  #p = AAt;
  #a = false;
  #g = 0;
  #f = M();
  #m = void 0;
  #y = null;
  #S = null;
  #h = null;
  totalCostUSD() {
    return this.#e;
  }
  restoredCostUSD() {
    return this.#u;
  }
  restoredTokens() {
    return this.#l;
  }
  sideQueryCostUSD() {
    return this.#c;
  }
  totalAPIDuration() {
    return this.#t;
  }
  totalAPIDurationWithoutRetries() {
    return this.#n;
  }
  totalToolDuration() {
    return this.#o;
  }
  totalDuration() {
    return Math.max(0, Date.now() - this.#r);
  }
  sessionStartTime() {
    return this.#s ?? this.#r;
  }
  totalLinesAdded() {
    return this.#i;
  }
  totalLinesRemoved() {
    return this.#d;
  }
  hasUnknownModelCost() {
    return this.#a;
  }
  safetyStops() {
    return this.#g;
  }
  modelUsage() {
    return this.#f;
  }
  usageForModel(e) {
    return this.#f[e];
  }
  trackUsageSinceLastResult() {
    this.#m ??= M();
  }
  usageSinceLastResult() {
    return this.#m;
  }
  takeUsageSinceLastResult() {
    let e = this.#m;
    if (e !== void 0) this.#m = M();
    return e;
  }
  totalInputTokens() {
    return this.#v("inputTokens");
  }
  totalOutputTokens() {
    return this.#v("outputTokens");
  }
  totalCacheReadInputTokens() {
    return this.#v("cacheReadInputTokens");
  }
  totalCacheCreationInputTokens() {
    return this.#v("cacheCreationInputTokens");
  }
  totalWebSearchRequests() {
    return this.#v("webSearchRequests");
  }
  #v(e) {
    let t = 0;
    for (let o of Object.values(this.#f)) t += o[e];
    return t;
  }
  recordApiDuration(e, t) {
    this.#t += e, this.#n += t;
  }
  spentTokens() {
    return this.#p;
  }
  recordSpentTokens(e) {
    let t = this.#p;
    this.#p = { inputTokens: t.inputTokens + e.inputTokens, outputTokens: t.outputTokens + e.outputTokens, cacheReadInputTokens: t.cacheReadInputTokens + e.cacheReadInputTokens, cacheCreationInputTokens: t.cacheCreationInputTokens + e.cacheCreationInputTokens };
  }
  recordCost(e, t, o) {
    this.#f[o] = t, this.#e += e;
  }
  recordSideQueryCost(e) {
    if (Number.isFinite(e) && e >= 0) this.#c += e;
  }
  recordToolDuration(e) {
    this.#o += e;
  }
  recordLinesChanged(e, t) {
    this.#i += e, this.#d += t;
  }
  markUnknownModelCost() {
    this.#a = true;
  }
  recordSafetyStop() {
    this.#g += 1;
  }
  zeroDurationsAndCostForTests() {
    this.#t = 0, this.#n = 0, this.#e = 0, this.#u = 0;
  }
  restartClock() {
    this.#r = Date.now(), this.anchorLogicalStart(void 0);
  }
  anchorLogicalStart(e) {
    this.#s = e === void 0 ? void 0 : Math.min(e, this.#r);
  }
  restore({ totalCostUSD: e, totalAPIDuration: t, totalAPIDurationWithoutRetries: o, totalToolDuration: r, totalLinesAdded: i, totalLinesRemoved: s, lastDuration: a, startTime: l, modelUsage: d, hasUnknownModelCost: p }, y) {
    if (this.#h = y, this.#e = e, this.#u = e, this.#t = t, this.#n = o, this.#o = r, this.#i = i, this.#d = s, this.#a = p ?? false, d) this.#f = M(d);
    if (this.#l = { inputTokens: this.totalInputTokens(), outputTokens: this.totalOutputTokens(), cacheReadInputTokens: this.totalCacheReadInputTokens(), cacheCreationInputTokens: this.totalCacheCreationInputTokens() }, a !== void 0) this.#r = Date.now() - a;
    this.anchorLogicalStart(l);
  }
  registerSaver(e) {
    this.#y = e;
  }
  runSaver(e, t) {
    (this.#y ?? (t ? t.#y : null))?.(e);
  }
  registerTranscriptRecorder(e) {
    this.#S = e;
  }
  runTranscriptRecorder(e, t, o) {
    (this.#S ?? (o ? o.#S : null))?.(e, t);
  }
  snapshot() {
    return { ownerSessionId: this.#h, totalCostUSD: this.#e, totalAPIDuration: this.#t, totalAPIDurationWithoutRetries: this.#n, totalToolDuration: this.#o, startTime: this.#r, sessionLogicalStartTime: this.#s, totalLinesAdded: this.#i, totalLinesRemoved: this.#d, restoredCostUSD: this.#u, restoredTokens: this.#l, hasUnknownModelCost: this.#a, safetyStops: this.#g, modelUsage: Ht(this.#f) };
  }
  restoreSnapshot(e) {
    this.#h = e.ownerSessionId, this.#e = e.totalCostUSD, this.#t = e.totalAPIDuration, this.#n = e.totalAPIDurationWithoutRetries, this.#o = e.totalToolDuration, this.#r = e.startTime, this.#s = e.sessionLogicalStartTime, this.#i = e.totalLinesAdded, this.#d = e.totalLinesRemoved, this.#u = e.restoredCostUSD, this.#l = e.restoredTokens, this.#a = e.hasUnknownModelCost, this.#g = e.safetyStops, this.#f = Ht(e.modelUsage);
  }
  claim(e) {
    this.#h ??= e;
  }
  scopeTo(e) {
    this.#h = e;
  }
  ownerSessionId() {
    return this.#h;
  }
  belongsTo(e) {
    return this.#h === e;
  }
  reset(e) {
    this.#h = e, this.#e = 0, this.#u = 0, this.#l = AAt, this.#t = 0, this.#n = 0, this.#o = 0, this.#r = Date.now(), this.anchorLogicalStart(void 0), this.#i = 0, this.#d = 0, this.#a = false, this.#g = 0, this.#f = M();
  }
}
class le {
  #e = /* @__PURE__ */ new Set();
  #t = /* @__PURE__ */ new Map();
  consentSessionFallback(e) {
    return this.#e.has(e);
  }
  replaceConsentSessionFallback(e, t) {
    if (t) this.#e.add(e);
    else this.#e.delete(e);
  }
  sessionConsentKey(e) {
    return this.#t.get(e) ?? null;
  }
  replaceSessionConsentKey(e, t) {
    if (t === null) this.#t.delete(e);
    else this.#t.set(e, t);
  }
  reset() {
    this.#e.clear(), this.#t.clear();
  }
}
class de {
  #e = { registeredHooks: null };
  #t = void 0;
  #n = void 0;
  holder() {
    return this.#e;
  }
  mainThreadAgentType() {
    return this.#t;
  }
  replaceMainThreadAgentType(e) {
    this.#t = e;
  }
  mainThreadAgentHooks() {
    return this.#n;
  }
  replaceMainThreadAgentHooks(e) {
    this.#n = e;
  }
  reset() {
    this.#e = { registeredHooks: null }, this.#t = void 0, this.#n = void 0;
  }
}
class ue {
  #e = /* @__PURE__ */ new Map();
  skills() {
    return this.#e;
  }
  lookup(e) {
    return this.#e.get(e);
  }
  record(e, t) {
    this.#e.set(e, t);
  }
  forget(e) {
    this.#e.delete(e);
  }
  forgetAll() {
    this.#e.clear();
  }
  reset() {
    this.#e = /* @__PURE__ */ new Map();
  }
}
class ce {
  #e = [];
  #t;
  #n;
  #o;
  #r;
  approvedServers() {
    return this.#e;
  }
  approveServers(e, t) {
    for (let o of t) if (!this.#e.some((r) => r.name === o && r.workspaceKey === e)) this.#e.push({ name: o, workspaceKey: e });
  }
  registerClientsAccessor(e) {
    this.#t = e;
  }
  acquireClientsAccessor(e) {
    if (this.#t) return () => {
    };
    return this.#t = e, () => {
      if (this.#t === e) this.#t = void 0;
    };
  }
  clientsFromAccessor() {
    return this.#t?.();
  }
  registerConnectedClientWiring(e) {
    this.#n = e;
  }
  connectedClientWiring() {
    return this.#n;
  }
  registerToolsSwapper(e) {
    this.#o = e;
  }
  acquireToolsSwapper(e) {
    if (this.#o) return () => {
    };
    return this.#o = e, () => {
      if (this.#o === e) this.#o = void 0;
    };
  }
  swapServerTools(e, t, o) {
    if (!this.#o) return false;
    return this.#o(e, t, o);
  }
  registerConnections(e) {
    this.#r = e;
  }
  acquireConnections(e) {
    if (this.#r) return () => {
    };
    return this.#r = e, () => {
      if (this.#r === e) this.#r = void 0;
    };
  }
  connections() {
    return this.#r;
  }
  reset() {
    this.#e = [], this.#t = void 0;
  }
}
class pe {
  #e = void 0;
  #t = void 0;
  #n = void 0;
  #o = void 0;
  #r = void 0;
  #s = void 0;
  #i = false;
  #d = false;
  #u = void 0;
  #l = false;
  #c = void 0;
  #p = void 0;
  #a = void 0;
  mainLoopModelOverride() {
    return this.#e;
  }
  overrideMainLoopModel(e) {
    this.#e = e;
  }
  mainLoopEffortState() {
    return this.#t;
  }
  replaceMainLoopEffortState(e) {
    this.#t = e;
  }
  initialMainLoopModel() {
    return this.#n;
  }
  replaceInitialMainLoopModel(e) {
    this.#n = e;
  }
  initialModelSettingLayer() {
    return this.#o;
  }
  replaceInitialModelSettingLayer(e) {
    this.#o = e;
  }
  resolvedOrgDefault() {
    return this.#r;
  }
  replaceResolvedOrgDefault(e) {
    this.#r = e;
  }
  initialEnvDefaultModel() {
    return this.#s;
  }
  replaceInitialEnvDefaultModel(e) {
    this.#s = e;
  }
  refusalFallbackOccurred() {
    return this.#i;
  }
  markRefusalFallbackOccurred(e) {
    this.#i = true, this.#u ??= e;
  }
  refusalFallbackHeaderArmed() {
    return this.#d;
  }
  armRefusalFallbackHeader(e) {
    this.#d = true, this.#u ??= e;
  }
  refusalFallbackLatchOriginRequestId() {
    return this.#u;
  }
  silentLaneServerArmed() {
    return this.#l;
  }
  armSilentLaneFromServer() {
    this.#l = true;
  }
  forgetRefusalFallbackOccurred() {
    this.#i = false, this.#d = false, this.#l = false, this.#u = void 0;
  }
  refusalFallbackModelLatch() {
    return this.#c;
  }
  replaceRefusalFallbackModelLatch(e, t = "superseded") {
    if (this.#c?.carriedEffort !== void 0 && e?.carriedEffort === void 0) this.#p = t;
    this.#c = e;
  }
  unlatchRefusalFallbackModel(e) {
    this.replaceRefusalFallbackModelLatch(void 0, e);
  }
  takeCarriedEffortEnd() {
    let e = this.#p;
    return this.#p = void 0, e;
  }
  availabilityFallbackChain() {
    return this.#a;
  }
  replaceAvailabilityFallbackChain(e) {
    this.#a = e;
  }
  reset() {
    this.#e = void 0, this.#t = void 0, this.#n = void 0, this.#o = void 0, this.#r = void 0, this.#s = void 0, this.#i = false, this.#d = false, this.#l = false, this.#u = void 0, this.#c = void 0, this.#p = void 0, this.#a = void 0;
  }
}
class ge {
  #e = /* @__PURE__ */ new Map();
  #t = 0;
  #n = void 0;
  sections() {
    return this.#e;
  }
  recordSection(e, t) {
    this.#e.set(e, t);
  }
  forgetAllSections() {
    this.#e.clear();
  }
  noteInvalidation(e = "other") {
    this.#t += 1, this.#n = e;
  }
  epoch() {
    return this.#t;
  }
  lastInvalidationReason() {
    return this.#n;
  }
  reset() {
    this.#e = /* @__PURE__ */ new Map();
  }
}
class fe {
  #e = null;
  #t = null;
  #n = null;
  #o = null;
  #r = null;
  #s = 0;
  #i = null;
  #d = void 0;
  #u = 0;
  #l = null;
  #c = null;
  #p = null;
  #a = null;
  #g = null;
  #f = false;
  #m = null;
  #y = null;
  #S = false;
  lastAPIRequest() {
    return this.#e;
  }
  replaceLastAPIRequest(e) {
    this.#e = e;
  }
  lastCancelledAPIMessageId() {
    return this.#t;
  }
  replaceLastCancelledAPIMessageId(e) {
    this.#t = e;
  }
  lastAPIRequestMessages() {
    return this.#n;
  }
  replaceLastAPIRequestMessages(e) {
    this.#n = e;
  }
  lastClassifierRequests() {
    return this.#o;
  }
  replaceLastClassifierRequests(e) {
    this.#o = e;
  }
  promptId() {
    return this.#r;
  }
  replacePromptId(e) {
    this.#r = e;
  }
  promptIndex() {
    return this.#s;
  }
  replacePromptIndex(e) {
    this.#s = e;
  }
  incrementPromptIndex() {
    return this.#s++, this.#s;
  }
  lastPersonPrompt() {
    return this.#i;
  }
  replaceLastPersonPrompt(e) {
    this.#i = e;
  }
  lastMainRequestId() {
    return this.#d;
  }
  replaceLastMainRequestId(e) {
    if (this.#d = e, e === void 0) this.#u += 1;
  }
  mainChainReleaseCount() {
    return this.#u;
  }
  lastMainThreadCacheTtlMs() {
    return this.#l;
  }
  replaceLastMainThreadCacheTtlMs(e, t, o = false) {
    this.#l = e, this.#a = Date.now(), this.#p = { ttlMs: e, model: t, requestAt: this.#a, askedAt: o ? this.#p?.askedAt ?? this.#a : this.#a }, this.#g = this.#a, this.#f = true;
  }
  isLastMainThreadAskLive(e, t) {
    let o = this.#p;
    return o !== null && o.requestAt === this.#a && o.ttlMs === e && o.model === t && Date.now() - o.askedAt < e;
  }
  adjustLastMainThreadCacheTtlMs(e) {
    this.#l = e;
  }
  recordLastMainThreadCacheRenewal(e) {
    if (this.#a !== null) this.#c = { requestAt: this.#a, at: Math.max(e, this.lastMainThreadCacheRenewedAt() ?? -1 / 0) };
  }
  lastMainThreadCacheRenewedAt() {
    let e = this.#c;
    return e !== null && e.requestAt === this.#a ? e.at : null;
  }
  lastLiveMainThreadRequestAt() {
    return this.#g;
  }
  lastMainThreadRequestAt() {
    return this.#a;
  }
  mainThreadRequestedInProcess() {
    return this.#f;
  }
  recordMainThreadTurnStart() {
    this.#f = true;
  }
  replaceLastMainThreadRequest(e, t) {
    this.#a = e, this.#l = t;
  }
  lastMainThreadContextTokens() {
    return this.#m;
  }
  replaceLastMainThreadContextTokens(e) {
    this.#m = e;
  }
  stageResumeSeed(e) {
    this.#h = e;
  }
  applyResumeSeed(e) {
    this.#h = null, this.#l = e.ttlMs, this.#a = e.requestAt, this.#m = e.contextTokens;
  }
  #h = null;
  clearLastMainThreadRequest(e) {
    let t = e !== void 0 && this.#h?.sessionId === e ? this.#h : null;
    this.#h = null, this.#l = t?.ttlMs ?? null, this.#a = t?.requestAt ?? null, this.#m = t?.contextTokens ?? null, this.#g = null, this.#f = false;
  }
  lastApiCompletionTimestamp() {
    return this.#y;
  }
  replaceLastApiCompletionTimestamp(e) {
    this.#y = e;
  }
  pendingPostCompaction() {
    return this.#S;
  }
  replacePendingPostCompaction(e) {
    this.#S = e;
  }
  reset() {
    this.#e = null, this.#t = null, this.#n = null, this.#o = null, this.#r = null, this.#s = 0, this.#i = null, this.#d = void 0, this.#u += 1, this.#l = null, this.#a = null, this.#g = null, this.#f = false, this.#m = null, this.#h = null, this.#y = null, this.#S = false;
  }
}
class he {
  #e = [];
  #t = /* @__PURE__ */ Object.create(null);
  #n = null;
  #o = void 0;
  #r = 0;
  #s = false;
  #i = 0;
  changed = He();
  pendingLoopWakeup = He();
  tasks() {
    return this.#e;
  }
  schedule(e) {
    this.#e.push(e);
  }
  replaceTasks(e) {
    this.#e = e;
  }
  chainStartedAt(e) {
    return this.#t[e];
  }
  recordChainStart(e, t) {
    this.#t[e] = t;
  }
  forgetChainStart(e) {
    delete this.#t[e];
  }
  tickInFlightPrompt() {
    return this.#n;
  }
  tickInFlightPlugin() {
    return this.#o;
  }
  replaceTickInFlightPrompt(e, t) {
    this.#n = e, this.#o = e === null ? void 0 : t;
  }
  consecutiveKeepalives() {
    return this.#r;
  }
  replaceConsecutiveKeepalives(e) {
    this.#r = e;
  }
  ended() {
    return this.#s;
  }
  replaceEnded(e) {
    this.#s = e;
  }
  wakeFires() {
    return this.#i;
  }
  recordWakeFire() {
    this.#i++;
  }
  resetWakeFires() {
    this.#i = 0;
  }
  reset() {
    this.#e = [], this.#t = /* @__PURE__ */ Object.create(null), this.#n = null, this.#o = void 0, this.#r = 0, this.#s = false, this.#i = 0;
  }
}
class me {
  #e = false;
  #t = false;
  #n = false;
  #o = false;
  #r = false;
  #s = false;
  #i = false;
  #d = false;
  #u = false;
  #l = false;
  #c = false;
  #p = void 0;
  #a = false;
  #g = void 0;
  #f = false;
  #m = false;
  #y = null;
  #S = null;
  #h = null;
  #v = false;
  #b = null;
  #k = false;
  #x = false;
  #C = false;
  #T = false;
  #R = false;
  #P = void 0;
  #A = void 0;
  #w = void 0;
  #M = null;
  #L = null;
  onboardingShownThisSession() {
    return this.#e;
  }
  replaceOnboardingShownThisSession(e) {
    this.#e = e;
  }
  lspRecommendationShownThisSession() {
    return this.#t;
  }
  replaceLspRecommendationShownThisSession(e) {
    this.#t = e;
  }
  sessionTrustAccepted() {
    return this.#n;
  }
  replaceSessionTrustAccepted(e) {
    this.#n = e;
  }
  homeTrustDialogAccepted() {
    return this.#o;
  }
  replaceHomeTrustDialogAccepted(e) {
    this.#o = e;
  }
  hasExitedPlanMode() {
    return this.#r;
  }
  replaceHasExitedPlanMode(e) {
    this.#r = e;
  }
  needsPlanModeExitAttachment() {
    return this.#s;
  }
  replaceNeedsPlanModeExitAttachment(e) {
    this.#s = e;
  }
  needsAutoModeExitAttachment() {
    return this.#i;
  }
  replaceNeedsAutoModeExitAttachment(e) {
    this.#i = e;
  }
  memoryToggledOff() {
    return this.#d;
  }
  replaceMemoryToggledOff(e) {
    this.#d = e;
  }
  autoMemoryOffThisSession() {
    return this.#u;
  }
  replaceAutoMemoryOffThisSession(e) {
    this.#u = e;
  }
  memoryPausedByCommand() {
    return this.#c;
  }
  replaceMemoryPausedByCommand(e) {
    this.#c = e;
  }
  accountMemorySessionMode() {
    return this.#p;
  }
  replaceAccountMemorySessionMode(e, t = false) {
    this.#p = e, this.#a = t && e !== void 0;
  }
  accountMemorySessionModeRestored() {
    return this.#a;
  }
  accountMemoryLaunchMode() {
    return this.#g;
  }
  replaceAccountMemoryLaunchMode(e) {
    this.#g = e;
  }
  restoredMemoryPause() {
    return this.#f;
  }
  replaceRestoredMemoryPause(e) {
    this.#f = e;
  }
  restoredAutoMemoryOff() {
    return this.#l;
  }
  replaceRestoredAutoMemoryOff(e) {
    this.#l = e;
  }
  teardownUnwindRequested() {
    return this.#v;
  }
  replaceTeardownUnwindRequested(e) {
    this.#v = e;
  }
  backgroundAutoModeSetupInFlight() {
    return this.#m;
  }
  replaceBackgroundAutoModeSetupInFlight(e) {
    this.#m = e;
  }
  deferredToolStubGateLatch() {
    return this.#y;
  }
  replaceDeferredToolStubGateLatch(e) {
    this.#y = e;
  }
  verifySkillRolloutGateLatch() {
    return this.#S;
  }
  replaceVerifySkillRolloutGateLatch(e) {
    this.#S = e;
  }
  commitSkillRolloutGateLatch() {
    return this.#h;
  }
  replaceCommitSkillRolloutGateLatch(e) {
    this.#h = e;
  }
  memoryToolsShapeLatch() {
    return this.#b;
  }
  replaceMemoryToolsShapeLatch(e) {
    this.#b = e;
  }
  proposeGoalAvailabilityLogged() {
    return this.#k;
  }
  markProposeGoalAvailabilityLogged() {
    this.#k = true;
  }
  activeRoutine() {
    return this.#A;
  }
  replaceActiveRoutine(e) {
    this.#A = e;
  }
  inheritedTeamName() {
    return this.#w;
  }
  replaceInheritedTeamName(e) {
    this.#w = e;
  }
  teleportedSessionInfo() {
    return this.#M;
  }
  replaceTeleportedSessionInfo(e) {
    this.#M = e;
  }
  markFirstTeleportMessageLogged() {
    if (this.#M) this.#M.hasLoggedFirstMessage = true;
  }
  cachedClaudeMdContent() {
    return this.#L;
  }
  replaceCachedClaudeMdContent(e) {
    this.#L = e;
  }
  accountSkillsSyncEnabled() {
    return this.#x;
  }
  replaceAccountSkillsSyncEnabled(e) {
    this.#x = e;
  }
  skillsSyncVetoed() {
    return this.#C;
  }
  replaceSkillsSyncVetoed(e) {
    this.#C = e;
  }
  accountPluginsSyncEnabled() {
    return this.#T;
  }
  replaceAccountPluginsSyncEnabled(e) {
    this.#T = e;
  }
  pluginsSyncVetoed() {
    return this.#R;
  }
  replacePluginsSyncVetoed(e) {
    this.#R = e;
  }
  armPendingContextCompacted(e) {
    this.#P = e;
  }
  consumePendingContextCompacted() {
    let e = this.#P;
    return this.#P = void 0, e;
  }
  forgetPendingContextCompacted() {
    this.#P = void 0;
  }
  reset() {
    this.#x = false, this.#C = false, this.#T = false, this.#R = false, this.#e = false, this.#t = false, this.#n = false, this.#o = false, this.#r = false, this.#s = false, this.#i = false, this.#d = false, this.#u = false, this.#c = false, this.#p = void 0, this.#a = false, this.#g = void 0, this.#f = false, this.#l = false, this.#v = false, this.#m = false, this.#y = null, this.#S = null, this.#h = null, this.#b = null, this.#k = false, this.#A = void 0, this.#w = void 0, this.#M = null, this.#L = null, this.#P = void 0;
  }
}
function Bt() {
  return { messagesArriving: 0, lastInLine: Promise.resolve(), gaveUpOn: void 0, besideLine: 0, lastBesideLine: Promise.resolve(), gaveUpOnBeside: void 0, pathsArrivingBeside: /* @__PURE__ */ new Map(), toolCallsWaiting: 0, pathsArriving: /* @__PURE__ */ new Map() };
}
class Se {
  #e = /* @__PURE__ */ new Map();
  #t = /* @__PURE__ */ new Map();
  #n = null;
  #o = /* @__PURE__ */ new Map();
  #r = /* @__PURE__ */ new Set();
  #s = /* @__PURE__ */ new Set();
  #i = /* @__PURE__ */ new Set();
  #d = /* @__PURE__ */ new Set();
  #u = /* @__PURE__ */ new Set();
  #l = /* @__PURE__ */ new Set();
  #c = /* @__PURE__ */ new Set();
  #p = /* @__PURE__ */ new Set();
  #a = /* @__PURE__ */ new Set();
  #g = /* @__PURE__ */ new Set();
  #f = /* @__PURE__ */ new Map();
  #m = /* @__PURE__ */ new Map();
  #y = /* @__PURE__ */ new Map();
  #S;
  #h = { byFileUuid: /* @__PURE__ */ new Map(), recentPrefetchStarts: [] };
  #v = Bt();
  #b = /* @__PURE__ */ new Set();
  #k = void 0;
  #x = void 0;
  #C = void 0;
  #T = void 0;
  #R = void 0;
  planSlugCache() {
    return this.#e;
  }
  forgetPlanSlug(e) {
    this.#e.delete(e);
  }
  pendingBranchLinks() {
    return this.#t;
  }
  replacePendingBranchLinks() {
    this.#t = /* @__PURE__ */ new Map();
  }
  vimSharedState() {
    return this.#n;
  }
  replaceVimSharedState(e) {
    this.#n = e;
  }
  agentColorMap() {
    return this.#o;
  }
  sessionCreatedTeams() {
    return this.#r;
  }
  sessionSpawnedTeammatePanes() {
    return this.#s;
  }
  surfacedHookSpawnFailures() {
    return this.#i;
  }
  bareMcpServerMatchersWarned() {
    return this.#d;
  }
  pendingConversationEditKinds() {
    return this.#u;
  }
  clientTruncatedAssistantIds() {
    return this.#l;
  }
  heldStatelessReplyIds() {
    return this.#c;
  }
  unsupportedThreadKeys() {
    return this.#p;
  }
  pendingPrLinks() {
    return this.#a;
  }
  policyPredicateTelemetryEmitted() {
    return this.#g;
  }
  humanAttachmentDigests() {
    return this.#f;
  }
  inboundAttachmentFiles() {
    return this.#m;
  }
  filesPlacedByName() {
    return this.#y;
  }
  filesPlacedByNameRead() {
    return this.#S;
  }
  setFilesPlacedByNameRead(e) {
    this.#S = e;
  }
  inboundAttachmentDownloads() {
    return this.#h;
  }
  arrivingInboundFiles() {
    return this.#v;
  }
  chromeAvailabilityStagesLogged() {
    return this.#b;
  }
  replaceChromeAvailabilityStagesLogged(e) {
    if (this.#b = /* @__PURE__ */ new Set(), e) this.#k = Date.now();
  }
  chromeAvailabilityAnchorMs() {
    return this.#k;
  }
  pendingGoalIdleCheckin() {
    return this.#x;
  }
  replacePendingGoalIdleCheckin(e) {
    this.#x = e;
  }
  pendingGoalReprompt() {
    return this.#C;
  }
  replacePendingGoalReprompt(e) {
    this.#C = e;
  }
  goalInterruptionStreak() {
    return this.#T;
  }
  replaceGoalInterruptionStreak(e) {
    this.#T = e;
  }
  workerCheckin() {
    return this.#R;
  }
  replaceWorkerCheckin(e) {
    this.#R = e;
  }
  reset() {
    this.#e = /* @__PURE__ */ new Map(), this.#t = /* @__PURE__ */ new Map(), this.#n = null, this.#o = /* @__PURE__ */ new Map(), this.#r = /* @__PURE__ */ new Set(), this.#s = /* @__PURE__ */ new Set(), this.#i = /* @__PURE__ */ new Set(), this.#d = /* @__PURE__ */ new Set(), this.#u = /* @__PURE__ */ new Set(), this.#l = /* @__PURE__ */ new Set(), this.#c = /* @__PURE__ */ new Set(), this.#p = /* @__PURE__ */ new Set(), this.#a = /* @__PURE__ */ new Set(), this.#g = /* @__PURE__ */ new Set(), this.#f = /* @__PURE__ */ new Map(), this.#m = /* @__PURE__ */ new Map(), this.#y = /* @__PURE__ */ new Map(), this.#S = void 0;
    for (let e of this.#h.byFileUuid.values()) clearTimeout(e.expiry), e.abort.abort();
    this.#h = { byFileUuid: /* @__PURE__ */ new Map(), recentPrefetchStarts: [] }, this.#v = Bt(), this.#b = /* @__PURE__ */ new Set(), this.#k = void 0, clearTimeout(this.#x), this.#x = void 0, clearTimeout(this.#C), this.#C = void 0, this.#T = void 0, clearInterval(this.#R?.timer), this.#R = void 0;
  }
}
var Ut = { renderTarget: "ink", workspace: "local", canDrive: true, transcriptSource: "local-jsonl", remote: null };
class ve {
  #e = false;
  #t = void 0;
  #n = void 0;
  #o = void 0;
  #r = void 0;
  #s = void 0;
  #i = void 0;
  #d = null;
  #u = false;
  #l = void 0;
  #c = Ut;
  #p = false;
  #a = "idle";
  #g = null;
  attacherCapsChanged = He();
  rvSupervisorLinkChanged = He();
  cloudCwdChanged = He();
  sdkDialogHostActive() {
    return this.#e;
  }
  markSdkDialogHostActive(e) {
    this.#e = e;
  }
  sdkSupportedDialogKinds() {
    return this.#t;
  }
  sdkSupportedDialogKindsSource() {
    return this.#n;
  }
  declareDialogKinds(e, t) {
    this.#t = e, this.#n = e === void 0 ? void 0 : t;
  }
  sdkPerTaskStopAffordance() {
    return this.#o;
  }
  declarePerTaskStopAffordance(e) {
    this.#o = e;
  }
  sdkRapidFollowupPreempt() {
    return this.#r;
  }
  declareRapidFollowupPreempt(e) {
    this.#r = e;
  }
  sdkForwardNestedSubagentToolCalls() {
    return this.#s;
  }
  declareForwardNestedSubagentToolCalls(e) {
    this.#s = e;
  }
  hostRendersChromeSetupOffer() {
    return this.#i;
  }
  declareHostRendersChromeSetupOffer(e) {
    this.#i = e;
  }
  attacherCaps() {
    return this.#d;
  }
  replaceAttacherCaps(e) {
    this.#d = e, this.attacherCapsChanged.emit();
  }
  rvSupervisorLinkLive() {
    return this.#u;
  }
  replaceRvSupervisorLinkLive(e) {
    if (this.#u === e) return;
    this.#u = e, this.rvSupervisorLinkChanged.emit();
  }
  sdkBetas() {
    return this.#l;
  }
  replaceSdkBetas(e) {
    this.#l = e;
  }
  caps() {
    return this.#c;
  }
  replaceCaps(e) {
    this.#c = e;
  }
  markRemote(e) {
    this.#c = { ...this.#c, workspace: e ? "remote" : "local" };
  }
  cloudCwdOfSession(e) {
    return this.#c.workspace === "remote" && this.#g?.sessionId === e ? this.#g.cwd : null;
  }
  replaceCloudCwd(e) {
    this.#g = e, this.cloudCwdChanged.emit();
  }
  replBridgeActive() {
    return this.#p;
  }
  replaceReplBridgeActive(e) {
    if (this.#p === e) return;
    this.#p = e;
  }
  mainLoopBusy() {
    return this.#a !== "idle";
  }
  mainQueryRunning() {
    return this.#a === "running";
  }
  replaceMainLoopStatus(e) {
    this.#a = e;
  }
  reset() {
    this.#e = false, this.#t = void 0, this.#n = void 0, this.#o = void 0, this.#r = void 0, this.#s = void 0, this.#i = void 0, this.#d = null, this.#l = void 0, this.#c = Ut, this.#p = false, this.#a = "idle", this.#u = false, this.#g = null, this.attacherCapsChanged.clear(), this.rvSupervisorLinkChanged.clear(), this.cloudCwdChanged.clear();
  }
}
var jt = 150;
class be {
  #e = Date.now();
  #t = false;
  #n = 0;
  #o = -1 / 0;
  interactionFired = He();
  #r = void 0;
  terminalFocusFired = He();
  #s = false;
  #i;
  lastInteractionTime() {
    return this.#e;
  }
  lastSubmitTime() {
    return this.#n;
  }
  recordSubmit() {
    this.#n = Date.now();
  }
  personWroteAt() {
    return this.#o;
  }
  notePersonWrote() {
    this.#o = performance.now();
  }
  recordInteraction(e) {
    if (e) this.#d();
    else this.#t = true;
  }
  flushIfDirty() {
    if (this.#t) this.#d();
  }
  #d() {
    this.#e = Date.now(), this.#t = false, this.interactionFired.emit();
  }
  resetBaseline() {
    this.#e = Date.now(), this.#t = false;
  }
  terminalFocus() {
    return this.#r;
  }
  updateTerminalFocus(e) {
    this.#r = e, this.terminalFocusFired.emit();
  }
  scrollDraining() {
    return this.#s;
  }
  markScrollActivity() {
    if (this.#s = true, this.#i) clearTimeout(this.#i);
    this.#i = setTimeout(() => {
      this.#s = false, this.#i = void 0;
    }, jt), this.#i.unref?.();
  }
  async waitForScrollIdle() {
    while (this.#s) await new Promise((e) => setTimeout(e, jt));
  }
  reset() {
    this.#e = Date.now(), this.#n = 0, this.#o = -1 / 0, this.#r = void 0, this.interactionFired.clear(), this.terminalFocusFired.clear();
  }
}
var sp = "(no content)", TW = "No response requested.", Ei = "<synthetic>", Pmi = "Auto Mode Active", Udr = "the tracked path is (or became) a link or other non-regular file, its directory changed since the checkpoint, or its backup could not be safely read", xCn = "Claude can't use thinking from another organization", Imi = "resume signed in to that organization to use it again";
function qw(e) {
  return (e.type === "user" || e.type === "assistant") && e.isVirtual === true;
}
function Eee(e) {
  return e.type === "assistant" && e.isApiErrorMessage === true && e.message?.model === Ei;
}
function M1(e) {
  return e.type === "system" && e.subtype === "local_command";
}
function X_(e) {
  if (e.type === "api_system") return false;
  return e.type === "progress" || e.type === "system" && !M1(e) || qw(e) || Eee(e) || e.type === "attachment" && (e.attachment?.type === "thinking_drop" || e.attachment?.type === "credential_org" || e.attachment?.type === "prompt_snapshot" || e.attachment?.type === "prompt_render_point" || e.attachment?.type === "deferred_tools_record");
}
var wr = ["sdk_single_prompt_gate", "subagent_estimate", "subagent_final_turn", "rows_unreadable"], Ar = 8;
class Ce {
  byAgent = /* @__PURE__ */ new Map();
  attemptsByAgent = /* @__PURE__ */ new Map();
  cappedFailuresByAgent = /* @__PURE__ */ new Map();
  armGateEventEmitted = /* @__PURE__ */ new Set();
  vetoedUnderPrompt = /* @__PURE__ */ new Map();
  sidecarIo = Promise.resolve();
  rehydrateAttemptedSessions = /* @__PURE__ */ new Set();
  sidecarReadsAhead = /* @__PURE__ */ new Map();
  get(e) {
    return this.byAgent.get(e);
  }
  has(e) {
    return this.byAgent.has(e);
  }
  put(e, t) {
    this.byAgent.set(e, t);
  }
  remove(e) {
    this.byAgent.delete(e);
  }
  nextAttemptNumber(e) {
    let t = (this.attemptsByAgent.get(e) ?? 0) + 1;
    return this.attemptsByAgent.set(e, t), t;
  }
  consecutiveCountedFailures(e) {
    return this.cappedFailuresByAgent.get(e) ?? 0;
  }
  recordCountedFailure(e) {
    let t = (this.cappedFailuresByAgent.get(e) ?? 0) + 1;
    return this.cappedFailuresByAgent.set(e, t), t;
  }
  clearCountedFailures(e) {
    this.cappedFailuresByAgent.delete(e);
  }
  recordVeto(e, t) {
    this.vetoedUnderPrompt.set(e, t);
  }
  isVetoedUnder(e, t) {
    return this.vetoedUnderPrompt.get(e) === t;
  }
  latchArmGateEvent(e) {
    if (this.armGateEventEmitted.has(e)) return false;
    return this.armGateEventEmitted.add(e), true;
  }
  enqueueSidecarIo(e, t) {
    return this.sidecarIo = this.sidecarIo.then(e, e).catch(t), this.sidecarIo;
  }
  sidecarIoSettled() {
    return this.sidecarIo;
  }
  hasAttemptedRehydrate(e) {
    return this.rehydrateAttemptedSessions.has(e);
  }
  markRehydrateAttempted(e) {
    this.rehydrateAttemptedSessions.add(e);
  }
  keepSidecarReadAhead(e, t) {
    this.sidecarReadsAhead.delete(e);
    while (this.sidecarReadsAhead.size >= Ar) {
      let o = this.sidecarReadsAhead.keys().next().value;
      if (o === void 0) break;
      this.sidecarReadsAhead.delete(o);
    }
    this.sidecarReadsAhead.set(e, t);
  }
  takeSidecarReadAhead(e) {
    let t = this.sidecarReadsAhead.get(e);
    return this.sidecarReadsAhead.delete(e), t;
  }
  dropSidecarReadAhead(e) {
    this.sidecarReadsAhead.delete(e);
  }
  forgetSubagentTelemetry(e) {
    this.attemptsByAgent.delete(e), this.cappedFailuresByAgent.delete(e), this.vetoedUnderPrompt.delete(e);
    for (let t of wr) this.armGateEventEmitted.delete(`${e}:${t}`);
  }
}
function f$e(e) {
  return e ?? "main";
}
function Kts({ messages: e, rowUuids: t }, o) {
  return { lastUuid: o, seenUuids: new Set(e.map((r) => r.uuid)), rowUuids: t };
}
function fXr({ coverage: e, kept: t, sent: o, received: r, instructions: i, fit: s }) {
  let a = ({ uuid: c }) => e.seenUuids.has(c), l = new Set(o.messages.map((c) => c.uuid));
  if (!l.has(e.lastUuid)) return { kind: "refuse", reason: "boundary_uuid_missing" };
  if (!e.rowUuids.every((c) => l.has(c))) return { kind: "refuse", reason: "covered_messages_changed" };
  if (t.some((c) => a(c) && !l.has(c.uuid))) return { kind: "refuse", reason: "kept_message_missing" };
  if (o.messages.slice(0, o.messages.findLastIndex(a)).some((c) => c.type === "assistant" && !qw(c) && !a(c))) return { kind: "refuse", reason: "unseen_reply" };
  let p = o.rowUuids.slice(0, o.rowUuids.findLastIndex((c) => e.seenUuids.has(c)) + 1);
  if (i || !r.messages.some(({ uuid: c }) => c === e.lastUuid) || !_t(r.rowUuids, p)) return { kind: "refuse", reason: "hook_rewrite" };
  let y = r.messages.findLastIndex(a), u = r.messages.flatMap((c, C) => c.type === "progress" || a(c) ? [] : [{ message: c, isEarly: C < y }]), f = ({ message: c, isEarly: C }) => C && qw(c), h = new Set(u.filter(f).map(({ message: c }) => c)), g = u.filter((c) => !f(c)), v = g.map(({ message: c }) => c), b = s && Lr(s, r.messages.filter((c) => !h.has(c)), [...t, ...v]);
  if (b?.givesWay) return { kind: "refuse", reason: "would_not_fit", sizes: b.sizes };
  return { kind: "reuse", tail: v, earlyTailCount: F(g, ({ isEarly: c }) => c), displayOnlyLeftOutCount: h.size, headReordered: !_t(r.rowUuids, e.rowUuids), sizes: b?.sizes };
}
function Lr({ thresholdTokens: e, windowTokens: t, liveTokens: o, madeFromTokens: r, summary: i, sizeOf: s }, a, l) {
  let d = new Set(l.map((g) => g.uuid)), p = new Set(a.map((g) => g.uuid)), y = a.filter((g) => !d.has(g.uuid)), u = a.filter((g) => d.has(g.uuid)), f = l.filter((g) => !p.has(g.uuid)), h = Math.max(o - s(y), s(u)) + s([...i, ...f]);
  return { sizes: { postSwapTokens: h, thresholdTokens: e, windowTokens: t }, givesWay: h >= e && r < t };
}
function _t(e, t) {
  return t.every((o, r) => e[r] === o);
}
function qts(e) {
  return e.findLast((o) => o.type === "user" && !o.isMeta && o.toolUseResult === void 0 && (typeof o.message.content === "string" || !o.message.content.some((r) => r.type === "tool_result")))?.uuid ?? "";
}
function Omi(e, t, o) {
  e.recordVeto(f$e(t), qts(o));
}
class xe {
  #e = void 0;
  get current() {
    return this.#e;
  }
  adopt(e) {
    this.#e = e;
  }
}
class Re {
  #e = null;
  #t = null;
  mainAgentId(e) {
    return this.#e ??= Br(e), this.#e;
  }
  projectDir() {
    return this.#t;
  }
  replaceProjectDir(e) {
    this.#t = e;
  }
}
class Te {
  openToolUseId;
  answeredThisSession = false;
  get answered() {
    return this.answeredThisSession;
  }
  markAnswered() {
    this.answeredThisSession = true;
  }
  isOpenElsewhere(e) {
    return this.openToolUseId !== void 0 && this.openToolUseId !== e;
  }
  open(e) {
    this.openToolUseId = e;
  }
  closeFor(e) {
    if (e !== void 0 && this.openToolUseId === e) this.openToolUseId = void 0;
  }
}
class Pe {
  granted = false;
  isGranted() {
    return this.granted;
  }
  grant() {
    this.granted = true;
  }
}
class Me {
  inFlight = null;
  startedForTurnEnd = false;
  reset() {
    this.inFlight?.abort(), this.inFlight = null, this.startedForTurnEnd = false;
  }
}
class we {
  firstSyncPromise = null;
  accountListing = "pending";
  syncErrors = [];
  lastRoundListed = false;
  listedStamp = null;
  changesLanded = 0;
  changesReloaded = 0;
  reloadsCompleted = 0;
  holdsSet = 0;
  reloadHeld = false;
  lastCompleteList = null;
  lastSyncedLaneLoad = null;
  syncedLaneOpened = false;
  syncedDirsLoadedHere = /* @__PURE__ */ new Set();
  removalsDeferredHere = /* @__PURE__ */ new Set();
  pendingTrashRemovals = [];
  ensureBucketRoot = null;
  deferredRelist = null;
  missingEntry = { resync: null, resyncAt: -1 / 0, swept: false };
  settingsInstall = { current: null, next: null, loaded: null };
  holdReload() {
    this.reloadHeld = true, this.holdsSet++;
  }
  endHoldSetBefore(e) {
    this.reloadHeld &&= this.holdsSet !== e;
  }
  reloaded(e) {
    this.changesReloaded = Math.max(this.changesReloaded, e), this.reloadsCompleted++;
  }
}
class Ae {
  abortController = null;
  eligibleTurns = 0;
  unusedInARow = 0;
  askOnNextTurn() {
    this.eligibleTurns = 0;
  }
  reset() {
    this.abortController?.abort(), this.abortController = null;
  }
  arm() {
    let e = new AbortController();
    return this.abortController = e, e;
  }
}
class Le {
  #e = void 0;
  #t = void 0;
  ccrSessionID() {
    return this.#e;
  }
  latchCcrSessionID(e) {
    this.#e = e;
  }
  syncEnabled() {
    return this.#t;
  }
  latchSyncEnabled(e) {
    return this.#t = e, e;
  }
}
class Oe {
  autonomousPreambleDelivered = false;
  lastLoopFileDelivered = null;
  reset() {
    this.autonomousPreambleDelivered = false, this.lastLoopFileDelivered = null;
  }
}
class Ie {
  exchanges = [];
  replace(e) {
    this.exchanges = e;
  }
  append(e, t, o) {
    this.exchanges = [...this.exchanges, { question: e, response: t, ...o && { fallbackNotice: o } }].slice(-20);
  }
  pendingReopen = null;
  reopenAway = false;
  get reopenPending() {
    return this.pendingReopen !== null;
  }
  armReopen(e, t) {
    if (this.pendingReopen) {
      this.pendingReopen.owners.add(e);
      return;
    }
    this.pendingReopen = { owners: /* @__PURE__ */ new Set([e]), cancel: t() };
  }
  clearPendingReopen(e) {
    let t = this.pendingReopen;
    if (!t) {
      this.reopenAway = false;
      return;
    }
    if (e !== void 0) {
      if (t.owners.delete(e), t.owners.size > 0) return;
    }
    t.cancel(), this.pendingReopen = null, this.reopenAway = false;
  }
  reopener = null;
  setReopener(e) {
    this.reopener = e;
  }
  get hasReopener() {
    return this.reopener !== null;
  }
  reopenNow() {
    return this.reopener?.() ?? false;
  }
  inFlightQuestions = [];
  get inFlight() {
    return this.inFlightQuestions.at(-1) ?? null;
  }
  pendingBesidesTop() {
    return this.inFlightQuestions.slice(0, -1);
  }
  setInFlight(e) {
    if (!this.inFlightQuestions.includes(e)) this.inFlightQuestions = [...this.inFlightQuestions, e];
  }
  clearInFlight(e) {
    if (this.inFlightQuestions.includes(e)) this.inFlightQuestions = this.inFlightQuestions.filter((t) => t !== e);
  }
}
var Or = 16;
class Fe {
  pending = null;
  shownThisSession = false;
  changed = He();
  submitted = [];
  submittedChanged = He();
  subscribe = this.changed.subscribe;
  getSnapshot = () => this.pending;
  subscribeSubmitted = this.submittedChanged.subscribe;
  submit(e) {
    if (this.shownThisSession) return;
    if (this.submitted.length >= Or) this.submitted.shift();
    this.submitted.push(e), this.submittedChanged.emit();
  }
  takeSubmitted() {
    let e = this.submitted;
    return this.submitted = [], e;
  }
  offer(e) {
    if (this.shownThisSession) return;
    this.pending = e, this.changed.emit();
  }
  dismiss() {
    if (this.pending !== null) this.pending = null, this.changed.emit();
  }
  markShown() {
    this.shownThisSession = true;
  }
}
var Eit = Symbol("permission-stash-evicted");
class De {
  entriesCap;
  evictedKeysCap;
  lanes = { write: /* @__PURE__ */ new Map(), read: /* @__PURE__ */ new Map() };
  evicted = { write: /* @__PURE__ */ new Set(), read: /* @__PURE__ */ new Set() };
  poisoned = { write: false, read: false };
  identities = /* @__PURE__ */ new Map();
  identitiesEvicted = /* @__PURE__ */ new Set();
  identitiesPoisoned = false;
  constructor(e = 256, t = 1048576) {
    this.entriesCap = e;
    this.evictedKeysCap = t;
  }
  stash(e, t, o, r = "write") {
    if (e === void 0) return;
    let i = this.lanes[r], s = this.evicted[r], a = Ee(e, t);
    if (s.has(a)) return;
    let l = i.get(a);
    if (l !== void 0) {
      let d = new Set(o);
      i.set(a, l.filter((p) => d.has(p)));
      return;
    }
    if (i.size >= this.entriesCap) {
      let d = i.keys().next().value;
      if (d !== void 0) {
        if (i.delete(d), s.add(d), s.size > this.evictedKeysCap) {
          this.poisoned[r] = true;
          let p = s.values().next().value;
          if (p !== void 0) s.delete(p);
        }
      }
    }
    i.set(a, o);
  }
  holds(e, t, o = "write") {
    return e !== void 0 && this.lanes[o].has(Ee(e, t));
  }
  stashIdentity(e, t, o) {
    if (e === void 0) return;
    let r = this.identities.get(e), i = r?.get(t);
    if (r !== void 0 && i !== void 0) {
      if (i === null || o === null || i.dev !== o.dev || i.ino !== o.ino) r.set(t, null);
      return;
    }
    let s = this.identitiesEvicted.has(e) || this.identitiesPoisoned;
    if (r === void 0) {
      if (!s && this.identities.size >= this.entriesCap) {
        let a = this.identities.keys().next().value;
        if (a !== void 0) {
          if (this.identities.delete(a), this.identitiesEvicted.add(a), this.identitiesEvicted.size > this.evictedKeysCap) {
            this.identitiesPoisoned = true;
            let l = this.identitiesEvicted.values().next().value;
            if (l !== void 0) this.identitiesEvicted.delete(l);
          }
        }
      }
      r = /* @__PURE__ */ new Map(), this.identities.set(e, r);
    }
    r.set(t, s ? null : o);
  }
  takeIdentity(e, t) {
    if (e === void 0) return;
    let o = this.identities.get(e), r = o?.get(t);
    if (o?.delete(t) && o.size === 0) this.identities.delete(e);
    return r;
  }
  consume(e, t, o = "write") {
    if (e === void 0) return;
    let r = this.lanes[o], i = Ee(e, t), s = r.get(i), a = s === void 0 && (this.evicted[o].delete(i) || this.poisoned[o]), l = `${e}\0`;
    for (let d of r.keys()) if (d.startsWith(l)) r.delete(d);
    if (o === "read") this.identities.delete(e), this.identitiesEvicted.delete(e);
    if (a) return Eit;
    return s;
  }
}
function Ee(e, t) {
  return `${e}\0${t}`;
}
var qt = "NoProjectDirectoryError", Nt = new W(() => ({}));
var Wt = () => {
};
function Gt(e) {
  Wt = e;
}
class KH extends Error {
  name = qt;
  constructor() {
    super("This session has no working directory.");
    try {
      Wt(this);
    } catch {
    }
  }
}
function m$e(e) {
  try {
    return e instanceof Error && e.name === qt;
  } catch {
    return false;
  }
}
function bo(e) {
  let { project: t } = e;
  if (t === null) throw new KH();
  return t;
}
function mXr(e) {
  return Kt({ kind: "root", host: e.host, id: e.id, parentId: e.parentId }, e.project, e.project?.isolationRoot);
}
function A(e, t) {
  let o = t.originalCwd ?? e?.originalCwd, r = t.projectRoot ?? e?.projectRoot, i = t.cwd ?? e?.cwd;
  if (o === void 0 && r === void 0 && i === void 0) return null;
  if (o === void 0 || r === void 0 || i === void 0) throw new KH();
  return { originalCwd: In(o), projectRoot: In(r), cwd: In(i) };
}
function Kt(e, t, o) {
  let r = { project: t === null ? null : A(null, t) }, i = o, s = He(), a = e.kind === "fork" ? e.root.observers : new ie(), l = e.kind === "fork" ? e.root.autonomousLoopPreamble : new Oe(), d = e.kind === "fork" ? e.root.precompute : new Ce(), p = { get originalCwd() {
    return bo(r).originalCwd;
  }, get projectRoot() {
    return bo(r).projectRoot;
  }, get cwd() {
    return bo(r).cwd;
  }, get isolationRoot() {
    return i;
  } }, y = { host: e.kind === "fork" ? e.root.host : e.host, get id() {
    return e.kind === "fork" ? e.root.id : e.id;
  }, get parentId() {
    return e.kind === "fork" ? e.root.parentId : e.parentId;
  }, get root() {
    return e.kind === "fork" ? e.root : y;
  }, get project() {
    return r.project === null ? null : p;
  }, observers: a, autonomousLoopPreamble: l, btwHistory: e.kind === "fork" ? e.root.btwHistory : new Ie(), ccrRecap: e.kind === "fork" ? e.root.ccrRecap : new Me(), conversationLatches: e.kind === "fork" ? e.root.conversationLatches : new se(), costLedger: e.kind === "fork" ? e.root.costLedger : new ae(), engineStore: e.kind === "fork" ? e.root.engineStore : new xe(), usageCreditsOnlyModelConsentSlots: e.kind === "fork" ? e.root.usageCreditsOnlyModelConsentSlots : new le(), hookRegistry: e.kind === "fork" ? e.root.hookRegistry : new de(), identity: e.kind === "fork" ? e.root.identity : new Re(), invokedSkills: e.kind === "fork" ? e.root.invokedSkills : new ue(), mcpSessionWiring: e.kind === "fork" ? e.root.mcpSessionWiring : new ce(), modelSelection: e.kind === "fork" ? e.root.modelSelection : new pe(), promptAssembly: e.kind === "fork" ? e.root.promptAssembly : new ge(), promptSuggestion: e.kind === "fork" ? e.root.promptSuggestion : new Ae(), pendingHint: e.kind === "fork" ? e.root.pendingHint : new Fe(), pluginsSync: e.kind === "fork" ? e.root.pluginsSync : new we(), precompute: d, requestJournal: e.kind === "fork" ? e.root.requestJournal : new fe(), sessionCron: e.kind === "fork" ? e.root.sessionCron : new he(), sessionFlags: e.kind === "fork" ? e.root.sessionFlags : new me(), sessionRefsGate: e.kind === "fork" ? e.root.sessionRefsGate : new Le(), sessionScratch: e.kind === "fork" ? e.root.sessionScratch : new Se(), surfaceCapabilities: e.kind === "fork" ? e.root.surfaceCapabilities : new ve(), userPresence: e.kind === "fork" ? e.root.userPresence : new be(), workflowUsageConsent: e.kind === "fork" ? e.root.workflowUsageConsent : new Pe(), outsideReadPrompt: e.kind === "fork" ? e.root.outsideReadPrompt : new Te(), writePermissionStash: e.kind === "fork" ? e.root.writePermissionStash : new De(), subscribe(u) {
    let f = s.subscribe(u);
    if (e.kind !== "fork") return f;
    let h = e.root, { id: g, parentId: v } = h, b = h.subscribe(() => {
      if (h.id === g && h.parentId === v) return;
      g = h.id, v = h.parentId, u();
    });
    return () => {
      f(), b();
    };
  }, setCwd(u) {
    y.update({ project: { cwd: u } });
  }, setIsolationRoot(u) {
    if (u !== i) i = u, s.emit();
  }, withProject(u) {
    return Kt({ kind: "fork", root: y.root }, A(r.project, u), u.isolationRoot ?? i);
  }, update(u) {
    let f = u.project === void 0 ? r.project : u.project === null ? null : A(r.project, u.project), h = false;
    if (u.id !== void 0 || "parentId" in u) {
      if (e.kind === "fork") throw Error("A withProject fork cannot re-identify the session — update the root session instead");
      if (u.id !== void 0 && u.id !== e.id) e.id = u.id, h = true;
      if ("parentId" in u && u.parentId !== e.parentId) e.parentId = u.parentId, h = true;
    }
    if (f?.originalCwd !== r.project?.originalCwd || f?.projectRoot !== r.project?.projectRoot || f?.cwd !== r.project?.cwd) r.project = f, h = true;
    let g = u.project?.isolationRoot;
    if (g !== void 0 && g !== i) i = g, h = true;
    if (h) s.emit();
  } };
  return y;
}
class nt {
  #e;
  #t = /* @__PURE__ */ new WeakMap();
  constructor(e) {
    this.#e = e;
  }
  peek(e) {
    return this.#t.get(e.root);
  }
  of(e) {
    let t = e.root, o = this.#t.get(t);
    if (o !== void 0) return o;
    let r = this.#e();
    return this.#t.set(t, r), r;
  }
  drop(e) {
    this.#t.delete(e.root);
  }
}
class Be {
  #e = false;
  #t = null;
  #n = false;
  #o = void 0;
  #r = false;
  #s = false;
  #i = false;
  #d = false;
  #u = void 0;
  #l = false;
  #c = false;
  #p = null;
  #a = null;
  #g = /* @__PURE__ */ new Map();
  #f = "cli";
  #m = "fresh";
  #y = void 0;
  #S = false;
  #h = false;
  #v = [];
  #b = false;
  #k = false;
  #x = false;
  #C = /* @__PURE__ */ new Set();
  #T = false;
  #R = false;
  #P = false;
  #A = "none";
  #w = false;
  #M = false;
  #L = false;
  #I = false;
  #F = false;
  #E = void 0;
  #D = void 0;
  #H = void 0;
  #B = void 0;
  #U = false;
  #j = false;
  #_ = false;
  #q = null;
  #N = null;
  #W = true;
  #G = null;
  #O = false;
  #X = He();
  #K = null;
  #V = false;
  #J = false;
  #z = {};
  #Q = null;
  #Y = "none";
  #$ = void 0;
  isInteractive() {
    return this.#e;
  }
  replaceIsInteractive(e) {
    this.#e = e;
  }
  printOutputFormat() {
    return this.#t;
  }
  replacePrintOutputFormat(e) {
    this.#t = e;
  }
  thinkingDisplayExplicit() {
    return this.#n;
  }
  replaceThinkingDisplayExplicit(e) {
    this.#n = e;
  }
  permissionPromptToolName() {
    return this.#o;
  }
  replacePermissionPromptToolName(e) {
    this.#o = e;
  }
  hasStreamingInput() {
    return this.#r;
  }
  replaceHasStreamingInput(e) {
    this.#r = e;
  }
  singleShotPrintSession() {
    return this.#s;
  }
  replaceSingleShotPrintSession(e) {
    this.#s = e;
  }
  printInputClosed() {
    return this.#i;
  }
  markPrintInputClosed() {
    this.#i = true;
  }
  modelOverrideOptOutForSession() {
    return this.#d;
  }
  replaceModelOverrideOptOutForSession(e) {
    this.#d = e;
  }
  rendererMode() {
    return this.#u;
  }
  replaceRendererMode(e) {
    this.#u = e;
  }
  strictToolResultPairing() {
    return this.#l;
  }
  replaceStrictToolResultPairing(e) {
    this.#l = e;
  }
  restrictedSession() {
    return this.#c;
  }
  replaceRestrictedSession(e) {
    this.#c = e;
  }
  workspaceRestrictionState() {
    return this.#p;
  }
  replaceWorkspaceRestrictionState(e) {
    this.#p = e;
  }
  replaceWorkspaceRestrictionUnsubscribe(e) {
    this.#a?.(), this.#a = e;
  }
  restrictedWorkspaceRoots() {
    return this.#g;
  }
  addRestrictedWorkspaceRoot(e, t) {
    this.#g.set(e, t);
  }
  clearRestrictedWorkspaceRoots() {
    this.#g = /* @__PURE__ */ new Map();
  }
  clientType() {
    return this.#f;
  }
  replaceClientType(e) {
    this.#f = e;
  }
  sessionStartType() {
    return this.#m;
  }
  replaceSessionStartType(e) {
    this.#m = e;
  }
  questionPreviewFormat() {
    return this.#y;
  }
  replaceQuestionPreviewFormat(e) {
    this.#y = e;
  }
  extendedQuestionsEnabled() {
    return this.#S;
  }
  replaceExtendedQuestionsEnabled(e) {
    this.#S = e;
  }
  questionOptionDescriptionsOptional() {
    return this.#h;
  }
  replaceQuestionOptionDescriptionsOptional(e) {
    this.#h = e;
  }
  replConfigArgv() {
    return this.#v;
  }
  replaceReplConfigArgv(e) {
    this.#v = e;
  }
  userMsgOptIn() {
    return this.#b;
  }
  replaceUserMsgOptIn(e) {
    this.#b = e;
  }
  searchToolsOptIn() {
    return this.#k;
  }
  replaceSearchToolsOptIn(e) {
    this.#k = e;
  }
  todoToolsOptIn() {
    return this.#x;
  }
  replaceTodoToolsOptIn(e) {
    this.#x = e;
  }
  toolsOmittedByLaunchList() {
    return this.#C;
  }
  replaceToolsOmittedByLaunchList(e) {
    this.#C = e;
  }
  wizardOperatorToolsEnabled() {
    return this.#T;
  }
  replaceWizardOperatorToolsEnabled(e) {
    this.#T = e;
  }
  runnerDeclaredNestedRepositoryDiff() {
    return this.#R;
  }
  replaceRunnerDeclaredNestedRepositoryDiff(e) {
    this.#R = e;
  }
  runnerDeclaredNoRepositoryCheckedOut() {
    return this.#P;
  }
  replaceRunnerDeclaredNoRepositoryCheckedOut(e) {
    this.#P = e;
  }
  pollEventIngress() {
    return this.#A;
  }
  markPollEventIngress(e) {
    this.#A = e;
  }
  ownEventDeliveryRequested() {
    return this.#w && !this.#M;
  }
  replaceOwnEventDeliveryHeld(e) {
    this.#M = e;
  }
  markOwnEventDeliveryRequested() {
    this.#w = true;
  }
  sdkAgentProgressSummariesEnabled() {
    return this.#L;
  }
  replaceSdkAgentProgressSummariesEnabled(e) {
    this.#L = e;
  }
  sessionPersistenceDisabled() {
    return this.#I;
  }
  replaceSessionPersistenceDisabled(e) {
    this.#I = e;
  }
  diskless() {
    return this.#F;
  }
  replaceDiskless(e) {
    this.#F = e;
  }
  ccrSessionUrl() {
    return this.#E;
  }
  replaceCcrSessionUrl(e) {
    this.#E = e;
  }
  ccrDerivedSurface() {
    return this.#D;
  }
  replaceCcrDerivedSurface(e) {
    this.#D = e;
  }
  entrypointOnRequests() {
    return this.#H;
  }
  replaceEntrypointOnRequests(e) {
    this.#H = e;
  }
  toolsMachine() {
    return this.#B;
  }
  replaceToolsMachine(e) {
    this.#B = e;
  }
  sessionBypassPermissionsMode() {
    return this.#U;
  }
  replaceSessionBypassPermissionsMode(e) {
    this.#U = e;
  }
  disableSlashCommands() {
    return this.#j;
  }
  replaceDisableSlashCommands(e) {
    this.#j = e;
  }
  disableFileMentions() {
    return this.#_;
  }
  replaceDisableFileMentions(e) {
    this.#_ = e;
  }
  sessionUploadsDir() {
    return this.#q;
  }
  replaceSessionUploadsDir(e) {
    this.#q = e;
  }
  localUploadsRoot() {
    return this.#N;
  }
  replaceLocalUploadsRoot(e) {
    this.#N = e;
  }
  mayForwardHomeSettings() {
    return this.#W;
  }
  replaceMayForwardHomeSettings(e) {
    this.#W = e;
  }
  homeSettingsHostConsent() {
    return this.#G;
  }
  replaceHomeSettingsHostConsent(e) {
    this.#G = e;
  }
  scheduledTasksEnabled() {
    return this.#O;
  }
  replaceScheduledTasksEnabled(e) {
    let t = e && !this.#O;
    if (this.#O = e, t) this.#X.emit();
  }
  onScheduledTasksEnabled(e) {
    return this.#X.subscribe(e);
  }
  initJsonSchema() {
    return this.#K;
  }
  replaceInitJsonSchema(e) {
    this.#K = e;
  }
  cliSessionConfigCarried() {
    return this.#V;
  }
  replaceCliSessionConfigCarried(e) {
    this.#V = e;
  }
  forkRestrictedLaunchConfig() {
    return this.#J;
  }
  replaceForkRestrictedLaunchConfig(e) {
    this.#J = e;
  }
  forkReplayLaunchConfig() {
    return this.#z;
  }
  spareClaimState() {
    return this.#Y;
  }
  replaceSpareClaimState(e) {
    this.#Y = e;
  }
  spareParkedAtMs() {
    return this.#$;
  }
  replaceSpareParkedAtMs(e) {
    this.#$ = e;
  }
  replaceForkReplayLaunchConfig(e) {
    this.#z = e;
  }
  projectConfigRoot() {
    return this.#Q;
  }
  replaceProjectConfigRoot(e) {
    this.#Q = e;
  }
  reset() {
    this.#e = false, this.#t = null, this.#Y = "none", this.#$ = void 0, this.#n = false, this.#o = void 0, this.#r = false, this.#s = false, this.#i = false, this.#d = false, this.#u = void 0, this.#l = false, this.#c = false, this.#p = null, this.replaceWorkspaceRestrictionUnsubscribe(null), this.#g = /* @__PURE__ */ new Map(), this.#f = "cli", this.#m = "fresh", this.#y = void 0, this.#S = false, this.#h = false, this.#v = [], this.#b = false, this.#k = false, this.#x = false, this.#C = /* @__PURE__ */ new Set(), this.#T = false, this.#R = false, this.#P = false, this.#A = "none", this.#w = false, this.#M = false, this.#L = false, this.#I = false, this.#F = false, this.#E = void 0, this.#D = void 0, this.#H = void 0, this.#B = void 0, this.#U = false, this.#j = false, this.#_ = false, this.#q = null, this.#N = null, this.#W = true, this.#G = null, this.#O = false, this.#K = null, this.#V = false, this.#J = false, this.#z = {}, this.#Q = null;
  }
}
class Ue {
  #e = void 0;
  #t = [];
  #n = [];
  #o = void 0;
  #r = void 0;
  #s = null;
  #i = null;
  #d = false;
  #u = null;
  #l = Jt();
  #c = null;
  #p = false;
  flagSettingsPath() {
    return this.#e;
  }
  replaceFlagSettingsPath(e) {
    this.#e = e;
  }
  flagAgentsFilePaths() {
    return this.#t;
  }
  replaceFlagAgentsFilePaths(e) {
    this.#t = e;
  }
  flagMcpConfigFilePaths() {
    return this.#n;
  }
  replaceFlagMcpConfigFilePaths(e) {
    this.#n = e;
  }
  flagSettingsExpectedContent() {
    return this.#o;
  }
  replaceFlagSettingsExpectedContent(e) {
    this.#o = e;
  }
  flagSettingsFilePinnedContent() {
    return this.#r;
  }
  replaceFlagSettingsFilePinnedContent(e) {
    this.#r = e;
  }
  flagSettingsInline() {
    return this.#s;
  }
  replaceFlagSettingsInline(e) {
    this.#s = e;
  }
  parentManagedSettings() {
    return this.#i;
  }
  replaceParentManagedSettings(e, t = null) {
    this.#i = e, this.#u = t;
  }
  parentManagedSettingsInvalid() {
    return this.#d;
  }
  replaceParentManagedSettingsInvalid(e) {
    this.#d = e;
  }
  parentOrganizationSettings() {
    return this.#u;
  }
  allowedSettingSources() {
    return this.#l;
  }
  replaceAllowedSettingSources(e) {
    this.#l = e;
  }
  allowedSettingSourcesWithoutRepoDirSources() {
    let e = this.#l;
    if (this.#c?.of !== e) this.#c = { of: e, result: e.filter((t) => t !== "projectSettings" && t !== "localSettings") };
    return this.#c.result;
  }
  useCoworkPlugins() {
    return this.#p;
  }
  replaceUseCoworkPlugins(e) {
    this.#p = e;
  }
  reset() {
    this.#e = void 0, this.#t = [], this.#n = [], this.#o = void 0, this.#r = void 0, this.#s = null, this.#i = null, this.#d = false, this.#u = null, this.#l = Jt(), this.#c = null, this.#p = false;
  }
}
function Jt() {
  return ["userSettings", "projectSettings", "localSettings", "flagSettings", "policySettings"];
}
class je {
  #e = [];
  #t = [];
  #n = [];
  #o = void 0;
  #r = /* @__PURE__ */ new Map();
  #s = /* @__PURE__ */ new Map();
  #i = /* @__PURE__ */ new Map();
  #d = [];
  #u = void 0;
  #l = [];
  #c = false;
  #p = void 0;
  #a = void 0;
  #g = void 0;
  inlinePlugins() {
    return this.#e;
  }
  replaceInlinePlugins(e) {
    this.#e = e;
  }
  inlinePluginsNoMcp() {
    return this.#t;
  }
  replaceInlinePluginsNoMcp(e) {
    this.#t = e;
  }
  inlinePluginUrls() {
    return this.#n;
  }
  replaceInlinePluginUrls(e) {
    this.#n = e;
  }
  syncedPluginDirs() {
    return this.#o ?? [];
  }
  syncedPluginDirsRegistered() {
    return this.#o !== void 0;
  }
  syncedPluginAttestation(e) {
    return this.#r.get(e);
  }
  syncedPluginRowId(e) {
    return this.#s.get(e);
  }
  replaceSyncedPluginDirs(e, t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map()) {
    this.#o = e, this.#r = t, this.#s = o, this.#i = this.#f(this.#i);
  }
  clearSyncedPluginDirs() {
    this.#o = void 0, this.#r = /* @__PURE__ */ new Map(), this.#s = /* @__PURE__ */ new Map(), this.#i = /* @__PURE__ */ new Map();
  }
  attestedOfficialPluginMarketplace(e) {
    return this.#i.get(e);
  }
  replaceAttestedOfficialPluginIds(e) {
    this.#i = this.#f(e);
  }
  #f(e) {
    let t = new Set([...this.#r.values()].map((o) => `${o.pluginName}@${o.marketplace}`));
    return new Map([...e].filter(([o, r]) => t.has(`${o.slice(0, o.lastIndexOf("@"))}@${r}`)));
  }
  additionalDirectoriesForClaudeMd() {
    return this.#d;
  }
  replaceAdditionalDirectoriesForClaudeMd(e) {
    this.#d = e;
  }
  claudeMdAdditionalDirectoriesAsked() {
    return this.#u;
  }
  askClaudeMdAdditionalDirectories(e) {
    this.#u = e;
  }
  allowedChannels() {
    return this.#l;
  }
  replaceAllowedChannels(e) {
    this.#l = e;
  }
  hasDevChannels() {
    return this.#c;
  }
  replaceHasDevChannels(e) {
    this.#c = e;
  }
  sessionSkillAllowlist() {
    return this.#p;
  }
  replaceSessionSkillAllowlist(e) {
    this.#p = e;
  }
  chromeFlagOverride() {
    return this.#a;
  }
  replaceChromeFlagOverride(e) {
    this.#a = e;
  }
  teammateAgentId() {
    return this.#g;
  }
  replaceTeammateAgentId(e) {
    this.#g = e;
  }
  reset() {
    this.#e = [], this.#t = [], this.#n = [], this.clearSyncedPluginDirs(), this.#d = [], this.#u = void 0, this.#l = [], this.#c = false, this.#p = void 0, this.#a = void 0, this.#g = void 0;
  }
}
class _e {
  #e = null;
  #t = null;
  #n = /* @__PURE__ */ new Set();
  modelStrings() {
    return this.#e;
  }
  replaceModelStrings(e) {
    this.#e = e;
  }
  invalidate() {
    this.#e = null, this.#n = /* @__PURE__ */ new Set();
  }
  admin3PSteeringSnapshot() {
    return this.#t;
  }
  recordAdmin3PSteeringSnapshot(e) {
    this.#t = e;
  }
  probeRefutedDocumentDefaults() {
    return this.#n;
  }
  recordProbeRefutedDocumentDefault(e) {
    this.#n.add(e);
  }
  reset() {
    this.#e = null, this.#t = null, this.#n = /* @__PURE__ */ new Set();
  }
}
var zt = [];
class qe {
  #e = [];
  #t = [];
  #n = void 0;
  errorLog() {
    return this.#e;
  }
  recordError(e) {
    if (this.#e.length >= 100) this.#e.shift();
    this.#e.push(e);
  }
  recordSlowOperation(e, t) {
    return;
  }
  slowOperations() {
    if (this.#t.length === 0) return zt;
    let e = Date.now();
    if (this.#t.some((t) => e - t.timestamp >= 1e4)) {
      if (this.#t = this.#t.filter((t) => e - t.timestamp < 1e4), this.#t.length === 0) return zt;
    }
    return this.#t;
  }
  recordDevBarAlert(e) {
    return;
  }
  devBarAlert() {
    let e = this.#n;
    if (e && Date.now() - e.timestamp >= 6e4) {
      this.#n = void 0;
      return;
    }
    return e;
  }
  reset() {
    this.#e = [], this.#t = [], this.#n = void 0;
  }
}
var Mmi = 100;
function Qt() {
  return { direct: { strict: null, customer: null }, proxied: { strict: null, customer: null } };
}
function Yt() {
  return { rateTokens: null, rateLastRefillMs: null, featureOkLogged: false, reportedDropReasons: /* @__PURE__ */ new Set() };
}
class Ne {
  #e = null;
  #t = null;
  #n = null;
  #o = null;
  #r = null;
  #s = null;
  #i = null;
  #d = null;
  #u = null;
  #l = null;
  #c = null;
  #p = null;
  #a = null;
  #g = [];
  #f = null;
  #m = Yt();
  #y = null;
  #S = null;
  #h = null;
  #v = Qt();
  #b = null;
  #k = null;
  installMeter(e, t, { omitUnits: o = false } = {}) {
    this.#e = e;
    let r = (i) => o ? void 0 : i;
    this.#t = t("claude_code.session.count", { description: "Count of CLI sessions started" }), this.#n = t("claude_code.lines_of_code.count", { description: "Count of lines of code modified, with the 'type' attribute indicating whether lines were added or removed and the 'model' attribute indicating which model made the change" }), this.#o = t("claude_code.pull_request.count", { description: "Number of pull requests created" }), this.#r = t("claude_code.commit.count", { description: "Number of git commits created" }), this.#s = t("claude_code.cost.usage", { description: "Cost of the Claude Code session", unit: r("USD") }), this.#i = t("claude_code.token.usage", { description: "Number of tokens used", unit: r("tokens") }), this.#d = t("claude_code.code_edit_tool.decision", { description: "Count of code editing tool permission decisions (accept/reject) for Edit, Write, and NotebookEdit tools" }), this.#u = t("claude_code.active_time.total", { description: "Total active time in seconds", unit: r("s") });
  }
  meter() {
    return this.#e;
  }
  sessionCounter() {
    return this.#t;
  }
  locCounter() {
    return this.#n;
  }
  prCounter() {
    return this.#o;
  }
  commitCounter() {
    return this.#r;
  }
  costCounter() {
    return this.#s;
  }
  tokenCounter() {
    return this.#i;
  }
  codeEditToolDecisionCounter() {
    return this.#d;
  }
  activeTimeCounter() {
    return this.#u;
  }
  statsStore() {
    return this.#l;
  }
  replaceStatsStore(e) {
    this.#l = e;
  }
  loggerProvider() {
    return this.#c;
  }
  replaceLoggerProvider(e) {
    this.#c = e;
  }
  eventLogger() {
    return this.#p;
  }
  eventLoggerOwner() {
    return this.#a;
  }
  attachEventLogger(e, t) {
    if (this.#p = e, this.#a = e ? t : null, !e) return;
    let o = this.#g;
    if (this.#g = null, o) for (let r of o) e.emit(r);
  }
  bufferPendingEvent(e) {
    if (this.#g === null || this.#g.length >= 100) return false;
    return this.#g.push(e), true;
  }
  closeWindow(e) {
    this.#g = null, this.#f = e;
  }
  windowCloseCause() {
    return this.#f;
  }
  isWindowOpen() {
    return this.#g !== null;
  }
  hostOtel() {
    return this.#m;
  }
  meterProvider() {
    return this.#y;
  }
  replaceMeterProvider(e) {
    this.#y = e;
  }
  tracerProvider() {
    return this.#S;
  }
  replaceTracerProvider(e) {
    this.#S = e;
  }
  cachedTelemetryResource() {
    return this.#h;
  }
  replaceCachedTelemetryResource(e) {
    this.#h = e;
  }
  cachedOtlpHttpAgentFactory(e, t) {
    return this.#v[e ? "proxied" : "direct"][t];
  }
  replaceCachedOtlpHttpAgentFactory(e, t, o) {
    this.#v[e ? "proxied" : "direct"][t] = o;
  }
  inClusterOtlpTrustRoots() {
    return this.#b;
  }
  replaceInClusterOtlpTrustRoots(e) {
    this.#b = e;
  }
  inClusterOtlpAgentFactory() {
    return this.#k;
  }
  replaceInClusterOtlpAgentFactory(e) {
    this.#k = e;
  }
  reset() {
    this.#e = null, this.#t = null, this.#n = null, this.#o = null, this.#r = null, this.#s = null, this.#i = null, this.#d = null, this.#u = null, this.#l = null, this.#c = null, this.#p = null, this.#a = null, this.#g = [], this.#f = null, this.#m = Yt(), this.#y = null, this.#S = null, this.#h = null, this.#v = Qt(), this.#b = null, this.#k = null;
  }
}
class We {
  #e = void 0;
  #t = null;
  #n = void 0;
  #o = false;
  #r = null;
  #s = void 0;
  #i = void 0;
  #d = /* @__PURE__ */ new Set();
  #u = /* @__PURE__ */ new Map();
  #l = void 0;
  #c = null;
  #p = /* @__PURE__ */ new Set();
  #a = null;
  #g = 0;
  #f = null;
  #m = false;
  #y = () => false;
  #S = null;
  #h = void 0;
  #v = null;
  #b = null;
  sessionIngressToken() {
    return this.#e;
  }
  replaceSessionIngressToken(e) {
    this.#e = e;
  }
  inferenceRequestToken() {
    return this.#t;
  }
  replaceInferenceRequestToken(e) {
    this.#t = e;
  }
  oauthTokenFromFd() {
    return this.#n;
  }
  replaceOauthTokenFromFd(e) {
    this.#n = e;
  }
  oauthTokenFromBgSnapshot() {
    return this.#o;
  }
  replaceOauthTokenFromBgSnapshot(e) {
    this.#o = e;
  }
  oauthOrgFromBgSnapshot() {
    return this.#r;
  }
  replaceOauthOrgFromBgSnapshot(e) {
    this.#r = e;
  }
  oauthScopesFromFd() {
    return this.#s;
  }
  replaceOauthScopesFromFd(e) {
    this.#s = e;
  }
  apiKeyFromFd() {
    return this.#i;
  }
  replaceApiKeyFromFd(e) {
    this.#i = e;
  }
  descriptorAnnouncementConsumed(e) {
    return this.#d.has(e);
  }
  markDescriptorAnnouncementConsumed(e) {
    this.#d.add(e);
  }
  credentialRoad(e) {
    return this.#u.get(e);
  }
  noteCredentialRoad(e, t, o) {
    if (o !== null && !this.#u.has(e)) this.#u.set(e, t);
  }
  gatewayTokenFromDescriptor() {
    return this.#l;
  }
  replaceGatewayTokenFromDescriptor(e) {
    this.#l = e;
  }
  resetFdCredentialState() {
    this.#e = void 0, this.#n = void 0, this.#o = false, this.#r = null, this.#s = void 0, this.#i = void 0;
  }
  gatewayAuth() {
    return this.#c;
  }
  replaceGatewayAuth(e) {
    this.#c = e;
  }
  isGatewayHostHeldStrict(e) {
    return this.#p.has(e);
  }
  holdGatewayHostStrict(e) {
    this.#p.add(e);
  }
  releaseGatewayHost(e) {
    this.#p.delete(e);
  }
  gatewayServerProcess() {
    return this.#m;
  }
  replaceGatewayServerProcess(e) {
    this.#m = e;
  }
  gatewayRequiredByHostPolicy() {
    return this.#y();
  }
  replaceGatewayRequiredByHostPolicyReader(e) {
    this.#y = e;
  }
  authenticatedAccount() {
    return this.#a;
  }
  authenticatedAccountEpoch() {
    return this.#g;
  }
  stampAuthenticatedAccount(e) {
    let t = this.#a;
    if (e !== null && t !== null && e.accountUuid === t.accountUuid && e.emailAddress === t.emailAddress && e.organizationUuid === t.organizationUuid) return;
    this.#g += 1, this.#a = e, this.#f = null;
  }
  bearerPlan() {
    return this.#f;
  }
  replaceBearerPlan(e) {
    this.#f = e;
  }
  startupPolicySnapshot() {
    return this.#h;
  }
  replaceStartupPolicySnapshot(e) {
    this.#h = e;
  }
  gatewayRefreshInFlight() {
    return this.#S;
  }
  replaceGatewayRefreshInFlight(e) {
    this.#S = e;
  }
  sdkOAuthTokenRefreshCallback() {
    return this.#v;
  }
  replaceSdkOAuthTokenRefreshCallback(e) {
    this.#v = e;
  }
  hostAuthTokenRefreshCallback() {
    return this.#b;
  }
  replaceHostAuthTokenRefreshCallback(e) {
    this.#b = e;
  }
  resetForTests() {
    this.#e = null, this.#t = null, this.#n = null, this.#o = false, this.#s = void 0, this.#i = null, this.#d.clear(), this.#u.clear(), this.#l = void 0, this.#c = null, this.#p.clear(), this.#a = null, this.#g = 0, this.#f = null, this.#m = false, this.#y = () => false, this.#S = null, this.#h = void 0, this.#v = null, this.#b = null;
  }
}
class Ge {
  #e = void 0;
  #t = false;
  #n = false;
  #o;
  directConnectServerUrl() {
    return this.#e;
  }
  replaceDirectConnectServerUrl(e) {
    this.#e = e;
  }
  connectNonBlocking() {
    return this.#t;
  }
  replaceConnectNonBlocking(e) {
    this.#t = e;
  }
  strictConfig() {
    return this.#n;
  }
  replaceStrictConfig(e) {
    this.#n = e;
  }
  registerEnsureConnectedClient(e) {
    this.#o = e;
  }
  ensureConnectedClient() {
    return this.#o;
  }
  reset() {
    this.#e = void 0, this.#t = false, this.#n = false;
  }
}
class Ke {
  #e = null;
  #t = /* @__PURE__ */ new Map();
  #n = /* @__PURE__ */ new Map();
  #o = /* @__PURE__ */ new Set();
  #r = /* @__PURE__ */ new Set();
  #s = /* @__PURE__ */ new Set();
  #i = /* @__PURE__ */ new Map();
  #d = false;
  #u = false;
  #l = false;
  #c = false;
  #p = false;
  #a = false;
  #g = false;
  #f = false;
  #m = false;
  #y = /* @__PURE__ */ new Set();
  #S = false;
  #h = /* @__PURE__ */ new Set();
  #v = false;
  #b = false;
  #k = false;
  #x = false;
  #C = /* @__PURE__ */ new Map();
  #T = void 0;
  #R = void 0;
  #P = false;
  #A = void 0;
  #w = void 0;
  #M = /* @__PURE__ */ new Map();
  #L = /* @__PURE__ */ new Map();
  promptCache1hAllowlist() {
    return this.#e;
  }
  replacePromptCache1hAllowlist(e) {
    this.#e = e;
  }
  thinkingTypeOverrides() {
    return this.#t;
  }
  recordThinkingTypeOverride(e, t) {
    this.#t.set(e, t);
  }
  servedModelsByRequestedModel() {
    return this.#n;
  }
  recordServedModels(e, t) {
    this.#n.set(e, t);
  }
  effortUnsupportedModels() {
    return this.#o;
  }
  markEffortUnsupported(e) {
    this.#o.add(e);
  }
  structuredOutputsUnsupportedModels() {
    return this.#r;
  }
  markStructuredOutputsUnsupported(e) {
    this.#r.add(e);
  }
  clearStructuredOutputsUnsupported() {
    this.#r = /* @__PURE__ */ new Set();
  }
  context1mRefusedModels() {
    return this.#s;
  }
  markContext1mRefused(e) {
    this.#s.add(e);
  }
  clearContext1mRefused() {
    this.#s = /* @__PURE__ */ new Set();
  }
  refusedBetas(e) {
    return this.#i.get(e) ?? [];
  }
  markBetaRefused(e, t) {
    let o = this.#i.get(e);
    if (o) o.add(t);
    else this.#i.set(e, /* @__PURE__ */ new Set([t]));
  }
  midConvCachePromotionRejected() {
    return this.#d;
  }
  markMidConvCachePromotionRejected() {
    this.#d = true;
  }
  perTurnEffortOkEmitted() {
    return this.#u;
  }
  markPerTurnEffortOkEmitted() {
    this.#u = true;
  }
  lateToolAdditionsOkEmitted() {
    return this.#l;
  }
  markLateToolAdditionsOkEmitted() {
    this.#l = true;
  }
  toolResultScreeningOkEmitted() {
    return this.#c;
  }
  markToolResultScreeningOkEmitted() {
    this.#c = true;
  }
  toolChangeHeaderRefused() {
    return this.#p;
  }
  markToolChangeHeaderRefused() {
    this.#p = true;
  }
  promptEndMarkRefused() {
    return this.#a;
  }
  markPromptEndMarkRefused() {
    this.#a = true;
  }
  inlineToolsRefused() {
    return this.#g;
  }
  markInlineToolsRefused() {
    this.#g = true;
  }
  inlineToolsOkEmitted() {
    return this.#f;
  }
  markInlineToolsOkEmitted() {
    this.#f = true;
  }
  thinkingResumptionRefused() {
    return this.#m;
  }
  markThinkingResumptionRefused() {
    this.#m = true;
  }
  refusedBetaHeaders() {
    return this.#y;
  }
  markBetaHeaderRefused(e) {
    this.#y.add(e);
  }
  thinkingHighlightsRefused() {
    return this.#S;
  }
  markThinkingHighlightsRefused() {
    this.#S = true;
  }
  toolChangeUnsupportedModels() {
    return this.#h;
  }
  markToolChangeUnsupportedModel(e) {
    this.#h.add(e);
  }
  internalModelFieldsRefused() {
    return this.#v;
  }
  markInternalModelFieldsRefused() {
    this.#v = true;
  }
  internalModelFieldsRefusalAnnounced() {
    return this.#b;
  }
  markInternalModelFieldsRefusalAnnounced() {
    this.#b = true;
  }
  thirdPartyServerClassifierRefused() {
    return this.#k;
  }
  markThirdPartyServerClassifierRefused() {
    this.#k = true;
  }
  releaseThirdPartyServerClassifierRefusal() {
    this.#k = false;
  }
  threadsHeldForServerClassifier() {
    return this.#x;
  }
  markThreadsHeldForServerClassifier() {
    this.#x = true;
  }
  autoModeUnavailableResponse(e) {
    return this.#C.get(e);
  }
  autoModeUnavailableResponsesInARow(e) {
    let t = 0;
    for (let o of this.#C.values()) if (o.runKey === e) t++;
    return t;
  }
  noteAutoModeUnavailableResponse(e, t) {
    this.#C.set(e, t);
  }
  clearAutoModeUnavailableResponses(e) {
    for (let [t, o] of this.#C) if (o.runKey === e) this.#C.delete(t);
  }
  setAutoModeUnavailableStopNotice(e) {
    this.#T = e;
  }
  autoModeUnavailableStopNotice() {
    return this.#T;
  }
  setLocalCommandExitCode(e) {
    this.#R = e;
  }
  localCommandExitCode() {
    return this.#R;
  }
  observedGateway() {
    return this.#A;
  }
  serverClassifierFallbackChoice() {
    return this.#w;
  }
  setServerClassifierFallbackChoice(e) {
    this.#w = e;
  }
  clearServerClassifierFallbackChoice() {
    this.#w = void 0;
  }
  noteObservedGateway(e) {
    this.#A ??= e;
  }
  takeServerClassifierFallbackAnnouncement() {
    if (!this.#k || this.#P) return false;
    return this.#P = true, true;
  }
  inferenceProfileBackingModels() {
    return this.#M;
  }
  recordInferenceProfileBackingModel(e, t) {
    this.#M.set(e, t);
  }
  foundryDeploymentCapabilities() {
    return this.#L;
  }
  reset() {
    this.#e = null, this.#t = /* @__PURE__ */ new Map(), this.#n = /* @__PURE__ */ new Map(), this.#o = /* @__PURE__ */ new Set(), this.#r = /* @__PURE__ */ new Set(), this.#s = /* @__PURE__ */ new Set(), this.#i = /* @__PURE__ */ new Map(), this.#d = false, this.#u = false, this.#l = false, this.#c = false, this.#p = false, this.#a = false, this.#g = false, this.#f = false, this.#m = false, this.#y = /* @__PURE__ */ new Set(), this.#S = false, this.#h = /* @__PURE__ */ new Set(), this.#v = false, this.#b = false, this.#k = false, this.#x = false, this.#C.clear(), this.#T = void 0, this.#R = void 0, this.#P = false, this.#A = void 0, this.#w = void 0, this.#M = /* @__PURE__ */ new Map(), this.#L = /* @__PURE__ */ new Map();
  }
}
class Ve {
  #e = false;
  #t = false;
  longContext1mCreditsBlocked() {
    return this.#e;
  }
  replaceLongContext1mCreditsBlocked(e) {
    this.#e = e;
  }
  usageCreditsRequired() {
    return this.#t;
  }
  replaceUsageCreditsRequired(e) {
    this.#t = e;
  }
  reset() {
    this.#e = false, this.#t = false;
  }
}
class Je {
  #e = false;
  #t = false;
  #n = $t;
  #o = He();
  selectorGate() {
    return this.#e;
  }
  selectorGateEverOn() {
    return this.#t;
  }
  replaceSelectorGate(e) {
    this.#e = e, this.#t ||= e;
  }
  inheritSelectorGateEverOn() {
    this.#t = true;
  }
  resampleSelectorGate(e) {
    let t = this.#e;
    if (this.#e = e, this.#t ||= e, t !== e) this.#o.emit(e);
  }
  subscribeSelectorGateChanged(e) {
    return this.#o.subscribe(e);
  }
  replaceHostGateSubscription(e) {
    let t = this.#n;
    this.#n = e, t();
  }
  dropHostGateSubscription() {
    this.replaceHostGateSubscription($t);
  }
}
function $t() {
}
class ze {
  started = false;
  stagingReaped = false;
  claim() {
    if (this.started) return false;
    return this.started = true, true;
  }
  claimStagingReap() {
    if (this.stagingReaped) return false;
    return this.stagingReaped = true, true;
  }
}
class Qe {
  clock;
  backgroundHousekeeping;
  launchOptions;
  settingsSource;
  extensionsConfig;
  modelStringsCache;
  diagnostics;
  telemetryHandles;
  credentialSlots;
  mcpProcessWiring;
  requestLatches;
  accountCreditLatches;
  proactivity;
  constructor(e) {
    this.clock = e.clock, this.backgroundHousekeeping = e.backgroundHousekeeping, this.launchOptions = e.launchOptions, this.settingsSource = e.settingsSource, this.extensionsConfig = e.extensionsConfig, this.modelStringsCache = e.modelStringsCache, this.diagnostics = e.diagnostics, this.telemetryHandles = e.telemetryHandles, this.credentialSlots = e.credentialSlots, this.mcpProcessWiring = e.mcpProcessWiring, this.requestLatches = e.requestLatches, this.accountCreditLatches = e.accountCreditLatches, this.proactivity = e.proactivity;
  }
}
function Xt() {
  return new Qe({ clock: new F7r(), backgroundHousekeeping: new ze(), launchOptions: new Be(), settingsSource: new Ue(), extensionsConfig: new je(), modelStringsCache: new _e(), diagnostics: new qe(), telemetryHandles: new Ne(), credentialSlots: new We(), mcpProcessWiring: new Ge(), requestLatches: new Ke(), accountCreditLatches: new Ve(), proactivity: new Je() });
}
function Er(e = bis()) {
  return mXr({ host: Xt(), id: O3t() ?? Sie(), project: { originalCwd: e, projectRoot: e, cwd: e } });
}
var k = Er(VTn);
function U() {
  return n();
}
function n() {
  return x()?.session ?? k;
}
function es(e) {
  return e.of(k.host);
}
function m() {
  let e = x();
  return e?.session ? void 0 : e;
}
var x = () => {
  return;
};
function qIi(e) {
  x = e;
}
Gt((e) => Nt.of(n().host).reporter?.(e));
Kmi({ isDiskless: () => J(), isDisklessProcess: () => cm(), reportBuilt: (e) => Ymi.of(n().host).reporter?.(e) });
function V() {
  return m()?.sessionId ?? n().id;
}
function tt() {
  let e = m()?.sessionId;
  if (e) return Br(e);
  let t = n();
  return t.identity.mainAgentId(t.id);
}
function tn() {
  let e = n();
  return e.requestJournal.promptIndex() > 0 || e.sessionScratch.chromeAvailabilityStagesLogged().size > 0;
}
function Yts(e = {}) {
  let t = n(), o = t.id;
  t.sessionScratch.forgetPlanSlug(o), t.identity.replaceProjectDir(null);
  let r = tn();
  t.requestJournal.replacePromptIndex(0), t.requestJournal.replaceLastPersonPrompt(null), t.requestJournal.replaceLastCancelledAPIMessageId(null), t.requestJournal.clearLastMainThreadRequest(), t.requestJournal.replaceLastMainRequestId(void 0), t.modelSelection.forgetRefusalFallbackOccurred(), t.sessionFlags.forgetPendingContextCompacted(), t.sessionScratch.replacePendingBranchLinks(), t.sessionScratch.replaceChromeAvailabilityStagesLogged(r);
  let i = rn(), s = Sie();
  return t.costLedger.scopeTo(s), t.update({ id: s, ...e.setCurrentAsParent && { parentId: o } }), nn(t, "clear", i), t.id;
}
function nn(e, t, o) {
  let r = sn.of(e);
  if (o) r.emit(e.id, t, o);
  else r.emit(e.id, t);
}
function on(e) {
  ln.of(e).emit(bo(e).originalCwd);
}
function g$e() {
  let e = m();
  return e ? e.parentSessionId : n().parentId;
}
function _b(e, t, o = null, r) {
  let i = n(), s = r ? A(i.project, an(r)) : r, a, l = i.parentId;
  if (i.id !== e) {
    if (i.sessionScratch.forgetPlanSlug(i.id), i.requestJournal.replaceLastCancelledAPIMessageId(null), i.requestJournal.replaceLastPersonPrompt(null), i.requestJournal.clearLastMainThreadRequest(e), t !== "fork") i.requestJournal.replaceLastMainRequestId(void 0);
    i.modelSelection.forgetRefusalFallbackOccurred(), i.sessionFlags.forgetPendingContextCompacted(), i.sessionScratch.replacePendingBranchLinks(), i.sessionScratch.replaceChromeAvailabilityStagesLogged(tn()), a = rn(), l = void 0;
  }
  if (i.identity.replaceProjectDir(o), i.update({ id: e, parentId: l, ...s !== void 0 && { project: s } }), nn(i, t, a), r?.originalCwd !== void 0) on(i);
}
function rn() {
  let e = n(), t = e.modelSelection.refusalFallbackModelLatch();
  if (e.modelSelection.unlatchRefusalFallbackModel("session_transition"), !t || e.modelSelection.mainLoopModelOverride() !== t.fallbackModel) return;
  return e.modelSelection.overrideMainLoopModel(t.previousOverride), { appStateModel: t.previousAppStateModel, forSessionValue: t.previousModelForSession, overrideValue: t.previousOverride, restoredToExplicitOverride: t.previousOverride !== void 0, fallbackModel: t.fallbackModel };
}
var sn = new nt(() => He());
function Cu(e) {
  return sn.of(n()).subscribe(e);
}
function gXr() {
  return n().sessionScratch.humanAttachmentDigests();
}
function Xts() {
  return n().sessionScratch.inboundAttachmentFiles();
}
function h$e() {
  return n().sessionScratch.filesPlacedByName();
}
function Bdr() {
  return n().sessionScratch.filesPlacedByNameRead();
}
function hXr(e) {
  n().sessionScratch.setFilesPlacedByNameRead(e);
}
function L3t() {
  return n().sessionScratch.inboundAttachmentDownloads();
}
function vit() {
  return n().sessionScratch.arrivingInboundFiles();
}
function Lbe() {
  let e = m();
  return e ? e.sessionProjectDir : n().identity.projectDir();
}
function ke() {
  return m()?.originalCwd ?? bo(n()).originalCwd;
}
function ci() {
  if (m()?.originalCwd === void 0 && n().project === null) return null;
  return ke();
}
function xX() {
  return tRt();
}
function AA() {
  return ke() === Ir();
}
function ao() {
  return m()?.projectRoot ?? bo(n()).projectRoot;
}
function ou() {
  if (m()?.projectRoot === void 0 && n().project === null) return null;
  return ao();
}
function an(e) {
  return { ...e, originalCwd: e.originalCwd?.normalize("NFC"), projectRoot: e.projectRoot?.normalize("NFC"), cwd: e.cwd?.normalize("NFC") };
}
function PCn(e) {
  let t = n();
  if (t.update({ project: an(e) }), e.originalCwd !== void 0) on(t);
}
function NI(e) {
  PCn({ originalCwd: e });
}
var ln = new nt(() => He());
function Jts(e) {
  return ln.of(n()).subscribe(e);
}
function jxe(e) {
  PCn({ projectRoot: e });
}
function gk() {
  return bo(n()).cwd;
}
function kit(e) {
  PCn({ cwd: e });
}
function ICn() {
  n().costLedger.restartClock();
}
function R3e() {
  return n().costLedger.sessionStartTime();
}
function Qts() {
  return n().host.mcpProcessWiring.directConnectServerUrl();
}
function ufe() {
  return n().host.mcpProcessWiring.connectNonBlocking();
}
function Zts(e) {
  n().host.mcpProcessWiring.replaceConnectNonBlocking(e);
}
function ens() {
  return n().sessionFlags.teardownUnwindRequested();
}
function yXr(e) {
  n().sessionFlags.replaceTeardownUnwindRequested(e);
}
function tns() {
  return n().sessionFlags.backgroundAutoModeSetupInFlight();
}
function _Xr(e) {
  n().sessionFlags.replaceBackgroundAutoModeSetupInFlight(e);
}
function nns() {
  return n().sessionFlags.deferredToolStubGateLatch();
}
function rns(e) {
  n().sessionFlags.replaceDeferredToolStubGateLatch(e);
}
function ons() {
  return n().sessionFlags.verifySkillRolloutGateLatch();
}
function sns(e) {
  n().sessionFlags.replaceVerifySkillRolloutGateLatch(e);
}
function ins() {
  return n().sessionFlags.commitSkillRolloutGateLatch();
}
function ans(e) {
  n().sessionFlags.replaceCommitSkillRolloutGateLatch(e);
}
function lns() {
  return n().sessionFlags.memoryToolsShapeLatch();
}
function jdr(e) {
  n().sessionFlags.replaceMemoryToolsShapeLatch(e);
}
function OCn(e) {
  n().sessionFlags.armPendingContextCompacted(e);
}
function dns() {
  return n().sessionFlags.consumePendingContextCompacted();
}
function cns() {
  n().sessionFlags.forgetPendingContextCompacted();
}
function PE() {
  return n().host.mcpProcessWiring.strictConfig();
}
function MCn(e) {
  n().host.mcpProcessWiring.replaceStrictConfig(e);
}
function HCn() {
  return n().host.launchOptions.cliSessionConfigCarried();
}
function DCn(e) {
  n().host.launchOptions.replaceCliSessionConfigCarried(e);
}
function u$() {
  return n().host.launchOptions.forkRestrictedLaunchConfig();
}
function uns(e) {
  n().host.launchOptions.replaceForkRestrictedLaunchConfig(e);
}
function vee() {
  return n().host.launchOptions.forkReplayLaunchConfig();
}
function pns(e) {
  n().host.launchOptions.replaceForkReplayLaunchConfig(e);
}
function LCn() {
  return n().mcpSessionWiring.approvedServers();
}
function Wdr(e, t) {
  n().mcpSessionWiring.approveServers(e, t);
}
function fns(e, t) {
  n().costLedger.recordApiDuration(e, t);
}
function mns(e, t, o) {
  n().costLedger.recordCost(e, t, o);
}
function gns(e) {
  n().costLedger.recordSpentTokens(e);
}
function Gh() {
  return n().costLedger.totalCostUSD();
}
function hns(e) {
  n().costLedger.recordSideQueryCost(e);
}
function yns() {
  return n().costLedger.sideQueryCostUSD();
}
function p$() {
  return n().costLedger.totalAPIDuration();
}
function Nbe() {
  return n().costLedger.totalDuration();
}
function SXr() {
  return n().costLedger.totalAPIDurationWithoutRetries();
}
function bXr() {
  return n().costLedger.totalToolDuration();
}
function wXr(e) {
  n().costLedger.recordToolDuration(e);
}
function RAt() {
  return n().host.telemetryHandles.statsStore();
}
function _ns(e) {
  n().host.telemetryHandles.replaceStatsStore(e);
}
function BK(e) {
  n().userPresence.recordInteraction(e);
}
function kee() {
  n().userPresence.flushIfDirty();
}
function P5(e) {
  return n().userPresence.interactionFired.subscribe(e);
}
function Sns() {
  n().userPresence.resetBaseline();
}
function bns(e, t) {
  n().costLedger.recordLinesChanged(e, t);
}
function y$e() {
  return n().costLedger.totalLinesAdded();
}
function _$e() {
  return n().costLedger.totalLinesRemoved();
}
function N3t() {
  return n().costLedger.totalInputTokens();
}
function cy() {
  return n().costLedger.totalOutputTokens();
}
function F3t() {
  return n().costLedger.totalCacheReadInputTokens();
}
function $3t() {
  return n().costLedger.totalCacheCreationInputTokens();
}
function wns() {
  return n().costLedger.totalWebSearchRequests();
}
function Ens() {
  n().costLedger.markUnknownModelCost();
}
function EXr() {
  return n().costLedger.hasUnknownModelCost();
}
function vXr() {
  n().costLedger.recordSafetyStop();
}
function Cee() {
  return n().costLedger.safetyStops();
}
function jK() {
  return n().requestJournal.lastMainRequestId();
}
function vns(e) {
  n().requestJournal.replaceLastMainRequestId(e);
}
function Wxe() {
  n().requestJournal.replaceLastMainRequestId(void 0);
}
function x3e() {
  return n().requestJournal.mainChainReleaseCount();
}
function PX() {
  return n().requestJournal.lastMainThreadCacheTtlMs();
}
function kns(e, t) {
  return n().requestJournal.isLastMainThreadAskLive(e, t);
}
function H1() {
  return n().requestJournal.lastMainThreadRequestAt();
}
function NCn() {
  return n().requestJournal.lastLiveMainThreadRequestAt();
}
function Cns(e, t, o) {
  n().requestJournal.replaceLastMainThreadCacheTtlMs(e, t, o);
}
function Gdr(e) {
  n().requestJournal.adjustLastMainThreadCacheTtlMs(e);
}
function Tns(e) {
  n().requestJournal.recordLastMainThreadCacheRenewal(e);
}
function xAt() {
  return n().requestJournal.lastMainThreadCacheRenewedAt();
}
function S$e() {
  return n().requestJournal.lastMainThreadContextTokens();
}
function b$e(e) {
  n().requestJournal.replaceLastMainThreadContextTokens(e);
}
function Ans(e) {
  let t = n();
  if (e.sessionId !== void 0 && e.sessionId === t.id) t.requestJournal.applyResumeSeed(e);
  else t.requestJournal.stageResumeSeed(e);
}
function IX() {
  return n().requestJournal.lastApiCompletionTimestamp();
}
function zdr(e) {
  n().requestJournal.replaceLastApiCompletionTimestamp(e);
}
function U3t(e, { keepsCachedPrefix: t = false } = {}) {
  let o = n().requestJournal;
  if (o.replacePendingPostCompaction(true), o.replaceLastMainThreadContextTokens(e), !t) o.replaceLastMainThreadRequest(null, null);
}
function Rns() {
  let e = n(), t = e.requestJournal.pendingPostCompaction();
  return e.requestJournal.replacePendingPostCompaction(false), t;
}
function Yp() {
  return n().userPresence.lastInteractionTime();
}
function kXr() {
  return n().userPresence.lastSubmitTime();
}
function Cit() {
  n().userPresence.recordSubmit();
}
var P3e = 6e4;
function xns(e) {
  n().userPresence.updateTerminalFocus(e);
}
function w$e() {
  return n().userPresence.terminalFocus();
}
function Pns(e) {
  return n().userPresence.terminalFocusFired.subscribe(e);
}
function Ins() {
  let e = w$e();
  if (e !== void 0) return e;
  return Date.now() - Yp() < P3e;
}
function CXr() {
  n().userPresence.markScrollActivity();
}
function PAt() {
  return n().userPresence.scrollDraining();
}
async function FCn() {
  return n().userPresence.waitForScrollIdle();
}
function qH() {
  return n().costLedger.modelUsage();
}
function Ons(e) {
  return n().costLedger.usageForModel(e);
}
function Mns() {
  n().costLedger.trackUsageSinceLastResult();
}
function Hns() {
  return n().costLedger.usageSinceLastResult();
}
function Dns() {
  return n().costLedger.takeUsageSinceLastResult();
}
function Fc() {
  return n().modelSelection.mainLoopModelOverride();
}
function aN() {
  return n().modelSelection.initialMainLoopModel();
}
function Rf(e) {
  n().modelSelection.overrideMainLoopModel(e);
}
function Tit() {
  return n().modelSelection.mainLoopEffortState();
}
function $Cn(e) {
  n().modelSelection.replaceMainLoopEffortState(e);
}
function Lns(e) {
  n().modelSelection.markRefusalFallbackOccurred(e);
}
function WK() {
  return n().modelSelection.refusalFallbackOccurred();
}
function B3t(e) {
  n().modelSelection.armRefusalFallbackHeader(e);
}
function I3e() {
  return n().modelSelection.refusalFallbackHeaderArmed();
}
function Nns() {
  n().modelSelection.armSilentLaneFromServer();
}
function TXr() {
  return n().modelSelection.silentLaneServerArmed();
}
function Fns() {
  return n().modelSelection.refusalFallbackLatchOriginRequestId();
}
function j3t(e) {
  let t = n(), o = t.modelSelection.refusalFallbackModelLatch();
  if (o && t.modelSelection.mainLoopModelOverride() === o.fallbackModel) {
    t.modelSelection.replaceRefusalFallbackModelLatch({ ...o, fallbackModel: e.fallbackModel, carriedEffort: e.carriedEffort ?? o.carriedEffort });
    return;
  }
  t.modelSelection.replaceRefusalFallbackModelLatch(e);
}
function Fbe() {
  n().modelSelection.unlatchRefusalFallbackModel("model_pick");
}
function Hz() {
  return n().modelSelection.refusalFallbackModelLatch();
}
function UCn(e) {
  let { modelSelection: t } = n(), o = t.refusalFallbackModelLatch();
  if (o !== void 0) t.replaceRefusalFallbackModelLatch({ ...o, carriedEffort: void 0 }, e);
}
function $ns() {
  return n().modelSelection.takeCarriedEffortEnd();
}
function Uns(e) {
  let t = n(), o = t.modelSelection.refusalFallbackModelLatch();
  if (o) t.modelSelection.replaceRefusalFallbackModelLatch({ ...o, previousOverride: e });
}
function Bns() {
  n().modelSelection.forgetRefusalFallbackOccurred();
}
function jns(e) {
  n().surfaceCapabilities.markSdkDialogHostActive(e);
}
function Dz() {
  return n().surfaceCapabilities.sdkDialogHostActive();
}
function AXr(e, t) {
  n().surfaceCapabilities.declareDialogKinds(e, t);
}
function pfe() {
  return n().surfaceCapabilities.sdkSupportedDialogKinds();
}
function Wns() {
  let e = n();
  if (e.surfaceCapabilities.sdkSupportedDialogKinds() === void 0) return "none";
  return e.surfaceCapabilities.sdkSupportedDialogKindsSource() ?? "none";
}
function Gns(e) {
  n().surfaceCapabilities.declarePerTaskStopAffordance(e);
}
function BCn() {
  return n().surfaceCapabilities.sdkPerTaskStopAffordance() === true;
}
function zns(e) {
  n().surfaceCapabilities.declareRapidFollowupPreempt(e);
}
function Vns() {
  return n().surfaceCapabilities.sdkRapidFollowupPreempt() === true;
}
function Kns(e) {
  n().surfaceCapabilities.declareForwardNestedSubagentToolCalls(e);
}
function Vdr(e) {
  n().surfaceCapabilities.declareHostRendersChromeSetupOffer(e);
}
function IAt() {
  return n().surfaceCapabilities.hostRendersChromeSetupOffer() === true;
}
function D1() {
  return n().host.launchOptions.replConfigArgv();
}
function O3e(e) {
  n().host.launchOptions.replaceReplConfigArgv(e);
}
function qns(e) {
  n().modelSelection.replaceInitialMainLoopModel(e);
}
function Yns() {
  return n().modelSelection.availabilityFallbackChain();
}
function Xns(e) {
  n().modelSelection.replaceAvailabilityFallbackChain(e);
}
function jCn() {
  return n().modelSelection.initialModelSettingLayer();
}
function Jns(e) {
  n().modelSelection.replaceInitialModelSettingLayer(e);
}
function Qns() {
  return n().modelSelection.resolvedOrgDefault();
}
function M3e(e) {
  n().modelSelection.replaceResolvedOrgDefault(e);
}
function Zns() {
  return n().modelSelection.initialEnvDefaultModel();
}
function ers(e) {
  n().modelSelection.replaceInitialEnvDefaultModel(e);
}
function dm() {
  return m()?.sdkBetas ?? n().surfaceCapabilities.sdkBetas();
}
function trs(e) {
  n().surfaceCapabilities.replaceSdkBetas(e);
}
function Ait() {
  return n().host.accountCreditLatches.longContext1mCreditsBlocked();
}
function nrs(e) {
  n().host.accountCreditLatches.replaceLongContext1mCreditsBlocked(e);
}
function rrs() {
  return n().host.accountCreditLatches.usageCreditsRequired();
}
function WCn(e) {
  n().host.accountCreditLatches.replaceUsageCreditsRequired(e);
}
function RXr(e) {
  return n().usageCreditsOnlyModelConsentSlots.consentSessionFallback(e);
}
function xXr(e, t) {
  n().usageCreditsOnlyModelConsentSlots.replaceConsentSessionFallback(e, t);
}
function ors(e) {
  return n().usageCreditsOnlyModelConsentSlots.sessionConsentKey(e);
}
function PXr(e, t) {
  n().usageCreditsOnlyModelConsentSlots.replaceSessionConsentKey(e, t);
}
function pie() {
  return n().host.credentialSlots.sdkOAuthTokenRefreshCallback();
}
function W3t(e) {
  n().host.credentialSlots.replaceSdkOAuthTokenRefreshCallback(e);
}
function H3e() {
  return n().host.credentialSlots.hostAuthTokenRefreshCallback();
}
function GCn(e) {
  n().host.credentialSlots.replaceHostAuthTokenRefreshCallback(e);
}
function srs(e) {
  k.costLedger.registerSaver(e);
}
function irs(e) {
  n().costLedger.runSaver(e, k.costLedger);
}
function ars(e) {
  k.costLedger.registerTranscriptRecorder(e);
}
function lrs(e, t) {
  n().costLedger.runTranscriptRecorder(e, t, k.costLedger);
}
function drs() {
  let e = n();
  return e.costLedger.belongsTo(e.id);
}
function G3t() {
  let e = n();
  e.costLedger.claim(e.id);
}
function crs() {
  let e = n();
  e.costLedger.scopeTo(e.id);
}
function Rit() {
  let e = n();
  e.costLedger.reset(e.id), e.requestJournal.replacePromptId(null);
}
function urs(e) {
  let t = n();
  t.costLedger.restore(e, t.id);
}
function no() {
  return n().host.launchOptions.projectConfigRoot();
}
function prs(e) {
  n().host.launchOptions.replaceProjectConfigRoot(e);
}
function z3t() {
  return n().host.modelStringsCache.modelStrings();
}
function Kdr(e) {
  n().host.modelStringsCache.replaceModelStrings(e);
}
function frs() {
  n().host.modelStringsCache.invalidate();
}
function mrs(e) {
  n().host.modelStringsCache.recordAdmin3PSteeringSnapshot(e);
}
function grs() {
  return n().host.modelStringsCache.admin3PSteeringSnapshot();
}
function hrs(e) {
  n().host.modelStringsCache.recordProbeRefutedDocumentDefault(e);
}
function yrs() {
  return n().host.modelStringsCache.probeRefutedDocumentDefaults();
}
function OAt() {
  return n().host.telemetryHandles.loggerProvider();
}
function IXr(e) {
  n().host.telemetryHandles.replaceLoggerProvider(e);
}
function D3e() {
  return n().host.telemetryHandles.eventLogger();
}
function OXr() {
  return n().host.telemetryHandles.eventLoggerOwner();
}
function MXr(e, t = "org") {
  n().host.telemetryHandles.attachEventLogger(e, t);
}
function _rs(e) {
  return n().host.telemetryHandles.bufferPendingEvent(e);
}
function HXr(e) {
  n().host.telemetryHandles.closeWindow(e);
}
function Srs() {
  return n().host.telemetryHandles.windowCloseCause();
}
function xit() {
  return n().host.telemetryHandles.isWindowOpen();
}
function V3t() {
  return n().host.telemetryHandles.hostOtel();
}
function Pit() {
  return n().host.telemetryHandles.tracerProvider();
}
function DXr(e) {
  n().host.telemetryHandles.replaceTracerProvider(e);
}
function qdr() {
  return n().host.requestLatches.foundryDeploymentCapabilities();
}
function brs() {
  return n().host.telemetryHandles.cachedTelemetryResource();
}
function wrs(e) {
  n().host.telemetryHandles.replaceCachedTelemetryResource(e);
}
function Ydr(e, t) {
  return n().host.telemetryHandles.cachedOtlpHttpAgentFactory(e, t);
}
function Ers(e, t, o) {
  n().host.telemetryHandles.replaceCachedOtlpHttpAgentFactory(e, t, o);
}
function ye() {
  return !n().host.launchOptions.isInteractive();
}
function K3t() {
  return n().host.launchOptions.spareClaimState();
}
function FI() {
  return n().host.launchOptions.spareClaimState() === "parked";
}
function vrs() {
  let e = n().host.launchOptions;
  e.replaceSpareClaimState("parked"), e.replaceSpareParkedAtMs(Date.now());
}
function krs() {
  let e = n().host.launchOptions, t = e.spareParkedAtMs();
  return e.replaceSpareClaimState("claiming"), t === void 0 ? void 0 : Date.now() - t;
}
function Crs() {
  n().host.launchOptions.replaceSpareClaimState("claimed");
}
function Trs() {
  n().host.launchOptions.replaceSpareClaimState("failed");
}
function q3t() {
  let e = n().host.launchOptions.spareClaimState();
  return e === "parked" || e === "claiming" || e === "failed";
}
function zc() {
  return n().host.launchOptions.isInteractive();
}
function L3e(e) {
  n().host.launchOptions.replaceIsInteractive(e);
}
function Tee() {
  return n().host.launchOptions.printOutputFormat();
}
function Ars(e) {
  n().host.launchOptions.replacePrintOutputFormat(e);
}
function Iit() {
  return n().host.launchOptions.thinkingDisplayExplicit();
}
function Oit(e) {
  n().host.launchOptions.replaceThinkingDisplayExplicit(e);
}
function hC() {
  return n().host.launchOptions.permissionPromptToolName();
}
function Rrs(e) {
  n().host.launchOptions.replacePermissionPromptToolName(e);
}
function Tu() {
  return n().surfaceCapabilities.attacherCaps();
}
function xrs(e) {
  n().surfaceCapabilities.replaceAttacherCaps(e);
}
function YH(e) {
  return n().surfaceCapabilities.attacherCapsChanged.subscribe(e);
}
function Prs() {
  return n().surfaceCapabilities.rvSupervisorLinkLive();
}
function zCn(e) {
  n().surfaceCapabilities.replaceRvSupervisorLinkLive(e);
}
function Irs(e) {
  return n().surfaceCapabilities.rvSupervisorLinkChanged.subscribe(e);
}
function MAt() {
  return n().host.launchOptions.hasStreamingInput();
}
function Ors(e) {
  n().host.launchOptions.replaceHasStreamingInput(e);
}
function Mrs({ hasStreamingInput: e, sdkUrl: t }) {
  return !e && !t;
}
function Dr(e) {
  if (e.entrypoint === "terminal") return e.ownEventsRequested ? "terminal" : "none";
  if (e.ownEventsOnly) return "evals";
  if (e.hasStreamingInput || e.sdkUrl) return "host";
  if (e.ownEventsRequested) return "evals";
  return "none";
}
function Hrs(e) {
  n().host.launchOptions.replaceSingleShotPrintSession(e);
}
function GK() {
  return n().host.launchOptions.singleShotPrintSession();
}
function Drs() {
  n().host.launchOptions.markPrintInputClosed();
}
function E$e() {
  return n().host.launchOptions.printInputClosed();
}
function VCn() {
  return n().host.launchOptions.clientType();
}
function Lrs(e) {
  n().host.launchOptions.replaceClientType(e);
}
function $be() {
  return n().host.launchOptions.sdkAgentProgressSummariesEnabled();
}
function KCn(e) {
  n().host.launchOptions.replaceSdkAgentProgressSummariesEnabled(e);
}
function qCn() {
  return n().host.launchOptions.rendererMode();
}
function Nrs(e) {
  n().host.launchOptions.replaceRendererMode(e);
}
function Xdr() {
  return n().host.launchOptions.strictToolResultPairing();
}
function fv() {
  return n().host.launchOptions.restrictedSession();
}
function YCn(e) {
  n().host.launchOptions.replaceRestrictedSession(e);
}
function XCn() {
  return n().host.launchOptions.workspaceRestrictionState()?.restriction ?? null;
}
function pP() {
  return XCn() !== null;
}
function Hr(e) {
  for (let [t, o] of n().host.launchOptions.restrictedWorkspaceRoots()) if (e === t || e.startsWith(t.endsWith(Zt) ? t : t + Zt)) return o;
  return null;
}
function Frs(e) {
  return Hr(e) !== null;
}
function $rs(e) {
  if (XCn()?.gateKeys.includes(e)) return true;
  for (let t of n().host.launchOptions.restrictedWorkspaceRoots().values()) if (t.gateKeys.includes(e)) return true;
  return false;
}
function Urs() {
  return n().sessionFlags.accountMemoryLaunchMode();
}
function $I() {
  return n().sessionFlags.memoryToggledOff();
}
function fie(e) {
  let t = n();
  if (t.sessionFlags.memoryToggledOff() === e) return;
  t.sessionFlags.replaceMemoryToggledOff(e), dn.of(t).emit(e);
}
var dn = new nt(() => He());
function JCn(e, t = n()) {
  return dn.of(t).subscribe(e);
}
function Ube() {
  return n().sessionFlags.autoMemoryOffThisSession();
}
function Mit(e) {
  let t = n();
  if (t.sessionFlags.autoMemoryOffThisSession() === e) return;
  if (t.sessionFlags.replaceAutoMemoryOffThisSession(e), t.sessionFlags.accountMemorySessionMode() !== "off") t.sessionFlags.replaceMemoryPausedByCommand(false);
  un.of(t).emit(e);
}
var un = new nt(() => He());
function QCn(e, t = n()) {
  return un.of(t).subscribe(e);
}
function LXr() {
  return n().sessionFlags.restoredMemoryPause();
}
function Y3t(e) {
  n().sessionFlags.replaceRestoredMemoryPause(e);
}
function Brs() {
  return n().sessionFlags.restoredAutoMemoryOff();
}
function Hit(e) {
  n().sessionFlags.replaceRestoredAutoMemoryOff(e);
}
function jrs(e) {
  if (e === false) throw Error("setWizardOperatorToolsEnabled(false) is test-only: the wizard latch is one-way in production");
  n().host.launchOptions.replaceWizardOperatorToolsEnabled(e);
}
function Wrs() {
  return n().host.launchOptions.wizardOperatorToolsEnabled();
}
function YIi(e) {
  if (e === false) throw Error("setRunnerDeclaredNestedRepositoryDiff(false) is test-only: the runner's declaration is one-way in production");
  n().host.launchOptions.replaceRunnerDeclaredNestedRepositoryDiff(e);
}
function Grs() {
  return n().host.launchOptions.runnerDeclaredNestedRepositoryDiff();
}
function XIi(e) {
  if (e === false) throw Error("setRunnerDeclaredNoRepositoryCheckedOut(false) is test-only: the runner's declaration is one-way in production");
  n().host.launchOptions.replaceRunnerDeclaredNoRepositoryCheckedOut(e);
}
function zrs() {
  return n().host.launchOptions.runnerDeclaredNoRepositoryCheckedOut();
}
function HAt() {
  return n().host.launchOptions.pollEventIngress();
}
function Vrs() {
  return HAt() !== "none";
}
function Ur(e) {
  n().host.launchOptions.markPollEventIngress(e);
}
function jr() {
  n().host.launchOptions.markOwnEventDeliveryRequested();
}
function Krs(e) {
  let t = Dr(e);
  if (t !== "none" && !(t === "host" && HAt() === "evals")) Ur(t);
  if (e.ownEventsRequested) jr();
}
function Lz() {
  return n().host.launchOptions.userMsgOptIn();
}
function v$e(e) {
  n().host.launchOptions.replaceUserMsgOptIn(e);
}
function qrs() {
  return n().host.launchOptions.searchToolsOptIn();
}
function Yrs(e) {
  n().host.launchOptions.replaceSearchToolsOptIn(e);
}
function Xrs() {
  return n().host.launchOptions.todoToolsOptIn();
}
function Jrs(e) {
  n().host.launchOptions.replaceTodoToolsOptIn(e);
}
function Qrs() {
  return n().host.launchOptions.toolsOmittedByLaunchList();
}
function Zrs(e) {
  n().host.launchOptions.replaceToolsOmittedByLaunchList(new Set(e));
}
function eos() {
  return n().host.launchOptions.sessionStartType();
}
function ZCn(e) {
  n().host.launchOptions.replaceSessionStartType(e);
}
function NXr() {
  return n().host.launchOptions.questionPreviewFormat();
}
function FXr(e) {
  n().host.launchOptions.replaceQuestionPreviewFormat(e);
}
function Gxe() {
  return n().host.launchOptions.extendedQuestionsEnabled();
}
function tos(e) {
  n().host.launchOptions.replaceExtendedQuestionsEnabled(e);
}
function nos() {
  return n().host.launchOptions.questionOptionDescriptionsOptional();
}
function ros(e) {
  n().host.launchOptions.replaceQuestionOptionDescriptionsOptional(e);
}
function $Xr() {
  return n().sessionScratch.agentColorMap();
}
function XH() {
  return n().host.settingsSource.flagSettingsPath();
}
function oos(e) {
  n().host.settingsSource.replaceFlagSettingsPath(e);
}
function Bbe() {
  return n().host.settingsSource.flagAgentsFilePaths();
}
function sos(e) {
  n().host.settingsSource.replaceFlagAgentsFilePaths(e);
}
function jbe() {
  return n().host.settingsSource.flagMcpConfigFilePaths();
}
function ios(e) {
  n().host.settingsSource.replaceFlagMcpConfigFilePaths(e);
}
function yC() {
  return n().host.settingsSource.flagSettingsExpectedContent();
}
function aos(e) {
  n().host.settingsSource.replaceFlagSettingsExpectedContent(e);
}
function mie() {
  return n().host.settingsSource.flagSettingsFilePinnedContent();
}
function los(e) {
  n().host.settingsSource.replaceFlagSettingsFilePinnedContent(e);
}
function xf() {
  return n().host.settingsSource.flagSettingsInline();
}
function RA(e) {
  n().host.settingsSource.replaceFlagSettingsInline(e);
}
function DAt() {
  return n().host.settingsSource.parentManagedSettings();
}
function dos(e, t = null) {
  n().host.settingsSource.replaceParentManagedSettings(e, t);
}
function gie() {
  return n().host.settingsSource.parentManagedSettingsInvalid();
}
function UXr(e) {
  n().host.settingsSource.replaceParentManagedSettingsInvalid(e);
}
function cos() {
  return n().host.settingsSource.parentOrganizationSettings();
}
function N3e() {
  let e = x();
  return e ? e.secrets.sessionIngressToken : n().host.credentialSlots.sessionIngressToken();
}
function Wbe(e) {
  let t = x();
  if (t) t.secrets.sessionIngressToken = e;
  else n().host.credentialSlots.replaceSessionIngressToken(e);
}
function I5() {
  return n().host.credentialSlots.oauthTokenFromFd();
}
function GM(e) {
  n().host.credentialSlots.replaceOauthTokenFromFd(e);
}
function AW() {
  return n().host.credentialSlots.oauthTokenFromBgSnapshot();
}
function X3t(e) {
  n().host.credentialSlots.replaceOauthTokenFromBgSnapshot(e);
}
function uos() {
  return n().host.credentialSlots.oauthOrgFromBgSnapshot();
}
function BXr(e) {
  n().host.credentialSlots.replaceOauthOrgFromBgSnapshot(e);
}
function pos() {
  return n().host.credentialSlots.oauthScopesFromFd();
}
function J3t(e) {
  n().host.credentialSlots.replaceOauthScopesFromFd(e);
}
function jXr() {
  return n().host.credentialSlots.apiKeyFromFd();
}
function WXr(e) {
  n().host.credentialSlots.replaceApiKeyFromFd(e);
}
function eTn(e) {
  return n().host.credentialSlots.descriptorAnnouncementConsumed(e);
}
function Gbe(e) {
  n().host.credentialSlots.markDescriptorAnnouncementConsumed(e);
}
function Q3t(e) {
  return n().host.credentialSlots.credentialRoad(e);
}
function zbe(e, t, o) {
  n().host.credentialSlots.noteCredentialRoad(e, t, o);
}
function GXr() {
  return n().host.credentialSlots.gatewayTokenFromDescriptor();
}
function Jdr(e) {
  n().host.credentialSlots.replaceGatewayTokenFromDescriptor(e);
}
function fos() {
  n().host.credentialSlots.resetFdCredentialState();
}
function Wr() {
  return n().host.credentialSlots.gatewayAuth();
}
function mos() {
  let e = n().host.credentialSlots.gatewayAuth();
  return !!e && e.expiresAt <= Date.now();
}
function UI(e) {
  return !!e && !e.unpinned;
}
function Qdr(e) {
  let t = e?.hostVerdict;
  return t !== void 0 && "verified" in t && t.verified;
}
function Zdr(e) {
  return UI(e) || Qdr(e);
}
function gos(e) {
  n().host.credentialSlots.replaceGatewayServerProcess(e);
}
function Dit() {
  return n().host.credentialSlots.gatewayServerProcess();
}
function Lit(e) {
  n().host.credentialSlots.replaceGatewayRequiredByHostPolicyReader(e);
}
function Nit() {
  return n().host.credentialSlots.gatewayRequiredByHostPolicy();
}
function hie(e) {
  n().host.credentialSlots.replaceGatewayAuth(e);
}
function hos(e) {
  return n().host.credentialSlots.isGatewayHostHeldStrict(e);
}
function Z3t(e) {
  n().host.credentialSlots.holdGatewayHostStrict(e.replace(/\.$/, ""));
}
function yos(e) {
  n().host.credentialSlots.releaseGatewayHost(e.replace(/\.$/, ""));
}
function _os() {
  return n().host.credentialSlots.authenticatedAccount();
}
function Aee(e) {
  n().host.credentialSlots.stampAuthenticatedAccount(e);
}
function Vbe() {
  return n().host.credentialSlots.authenticatedAccountEpoch();
}
function zXr() {
  return n().host.credentialSlots.bearerPlan();
}
function Sos(e) {
  n().host.credentialSlots.replaceBearerPlan(e);
}
function bos() {
  return n().host.credentialSlots.startupPolicySnapshot();
}
function wos(e) {
  n().host.credentialSlots.replaceStartupPolicySnapshot(e);
}
function k$e() {
  return n().host.credentialSlots.gatewayRefreshInFlight();
}
function VXr(e) {
  n().host.credentialSlots.replaceGatewayRefreshInFlight(e);
}
function Eos(e) {
  n().requestJournal.replaceLastAPIRequest(e);
}
function tTn() {
  return n().requestJournal.lastAPIRequest();
}
function ecr(e) {
  n().requestJournal.replaceLastCancelledAPIMessageId(e);
}
function C$e() {
  return n().requestJournal.lastCancelledAPIMessageId();
}
function vos(e) {
  n().requestJournal.replaceLastAPIRequestMessages(e);
}
function tcr(e) {
  n().requestJournal.replaceLastClassifierRequests(e);
}
function KXr() {
  return n().requestJournal.lastClassifierRequests();
}
function nTn(e) {
  let t = m();
  if (t) t.cachedClaudeMdContent = e;
  else n().sessionFlags.replaceCachedClaudeMdContent(e);
}
function kos() {
  let e = m();
  return e ? e.cachedClaudeMdContent : n().sessionFlags.cachedClaudeMdContent();
}
function F3e() {
  let { settingsSource: e, launchOptions: t } = n().host;
  return t.workspaceRestrictionState()?.restriction ? e.allowedSettingSourcesWithoutRepoDirSources() : e.allowedSettingSources();
}
function Kbe() {
  return n().host.settingsSource.allowedSettingSources();
}
function qXr(e) {
  n().host.settingsSource.replaceAllowedSettingSources(e);
}
function rTn() {
  return ye() && n().host.launchOptions.clientType() !== "claude-vscode";
}
function L1(e) {
  n().host.extensionsConfig.replaceInlinePlugins(e);
}
function Sb() {
  return n().host.extensionsConfig.inlinePlugins();
}
function qbe(e) {
  n().host.extensionsConfig.replaceInlinePluginsNoMcp(e);
}
function _C() {
  return n().host.extensionsConfig.inlinePluginsNoMcp();
}
function Cos(e) {
  n().host.extensionsConfig.replaceInlinePluginUrls(e);
}
function Ybe() {
  return n().host.extensionsConfig.inlinePluginUrls();
}
function LAt(e, t, o) {
  n().host.extensionsConfig.replaceSyncedPluginDirs(e, t, o);
}
function Tos(e) {
  return n().host.extensionsConfig.syncedPluginRowId(e);
}
function oTn(e) {
  return n().host.extensionsConfig.syncedPluginAttestation(e);
}
function Aos(e) {
  n().host.extensionsConfig.replaceAttestedOfficialPluginIds(e);
}
function Ros(e) {
  return n().host.extensionsConfig.attestedOfficialPluginMarketplace(e);
}
function ncr() {
  return n().host.extensionsConfig.syncedPluginDirsRegistered();
}
function $3e() {
  return n().pluginsSync.syncedLaneOpened;
}
function xos() {
  n().pluginsSync.syncedLaneOpened = true;
}
function YXr(e) {
  for (let t of e) n().pluginsSync.syncedDirsLoadedHere.add(en(t));
}
function Pos(e) {
  return n().pluginsSync.syncedDirsLoadedHere.has(en(e));
}
function lN() {
  return n().pluginsSync;
}
function sTn() {
  return n().pluginsSync.lastCompleteList;
}
function iTn() {
  return n().pluginsSync.lastSyncedLaneLoad;
}
function Ios(e) {
  n().pluginsSync.lastSyncedLaneLoad = e;
}
function Oos() {
  n().host.extensionsConfig.clearSyncedPluginDirs(), n().pluginsSync.syncedLaneOpened = false, n().pluginsSync.syncedDirsLoadedHere.clear(), n().pluginsSync.removalsDeferredHere.clear(), n().pluginsSync.lastSyncedLaneLoad = null;
}
function Ree() {
  return n().host.extensionsConfig.syncedPluginDirs();
}
function aTn(e) {
  n().sessionFlags.replaceAccountSkillsSyncEnabled(e);
}
function lTn() {
  return n().sessionFlags.accountSkillsSyncEnabled();
}
function dTn(e) {
  n().sessionFlags.replaceSkillsSyncVetoed(e);
}
function xA() {
  return n().sessionFlags.skillsSyncVetoed();
}
function Mos(e) {
  n().sessionFlags.replaceAccountPluginsSyncEnabled(e);
}
function T$e() {
  return n().sessionFlags.accountPluginsSyncEnabled();
}
function Hos(e) {
  n().sessionFlags.replacePluginsSyncVetoed(e);
}
function RW() {
  return n().sessionFlags.pluginsSyncVetoed();
}
function Dos(e) {
  n().host.extensionsConfig.replaceChromeFlagOverride(e);
}
function ffe() {
  return n().host.extensionsConfig.chromeFlagOverride();
}
function Los(e) {
  n().host.extensionsConfig.replaceTeammateAgentId(e);
}
function k_() {
  return n().host.extensionsConfig.teammateAgentId();
}
function Nos(e) {
  n().sessionFlags.replaceOnboardingShownThisSession(e);
}
function Fos() {
  return n().sessionFlags.onboardingShownThisSession();
}
function zK(e) {
  let t = n();
  t.host.settingsSource.replaceUseCoworkPlugins(e), dXr.of(t.host).invalidateAll();
}
function cTn() {
  return n().host.settingsSource.useCoworkPlugins();
}
function $os(e) {
  n().host.launchOptions.replaceDisableSlashCommands(e);
}
function C_() {
  return n().host.launchOptions.disableSlashCommands();
}
function uTn() {
  return n().host.launchOptions.disableFileMentions();
}
function OX() {
  return n().host.launchOptions.sessionUploadsDir();
}
function Uos(e) {
  n().host.launchOptions.replaceLocalUploadsRoot(e);
}
function Xbe() {
  return n().host.launchOptions.localUploadsRoot();
}
function pTn(e) {
  n().host.launchOptions.replaceSessionBypassPermissionsMode(e);
}
function xee() {
  return n().host.launchOptions.sessionBypassPermissionsMode();
}
function xW(e) {
  n().host.launchOptions.replaceScheduledTasksEnabled(e);
}
function rcr() {
  return n().host.launchOptions.scheduledTasksEnabled();
}
function Bos(e) {
  return n().host.launchOptions.onScheduledTasksEnabled(e);
}
function Om() {
  return m()?.sessionCronTasks ?? n().sessionCron.tasks();
}
function zxe(e) {
  let t = m();
  if (t) t.sessionCronTasks.push(e);
  else n().sessionCron.schedule(e);
  n().sessionCron.changed.emit();
}
function jos(e) {
  return n().sessionCron.chainStartedAt(e);
}
function XXr(e, t) {
  n().sessionCron.recordChainStart(e, t);
}
function fTn(e) {
  n().sessionCron.forgetChainStart(e);
}
function Jbe() {
  return n().sessionCron.tickInFlightPrompt();
}
function Wos() {
  return n().sessionCron.tickInFlightPlugin();
}
function NAt(e, t) {
  n().sessionCron.replaceTickInFlightPrompt(e, t);
}
function JXr() {
  return n().sessionCron.consecutiveKeepalives();
}
function mTn(e) {
  n().sessionCron.replaceConsecutiveKeepalives(e);
}
function gTn() {
  return n().sessionCron.ended();
}
function e4t() {
  return n().sessionCron.wakeFires();
}
function hTn() {
  n().sessionCron.recordWakeFire();
}
function t4t() {
  n().sessionCron.resetWakeFires();
}
function ocr(e) {
  if (n().sessionCron.replaceEnded(e), e) n().sessionCron.changed.emit();
}
function MX(e, { handOff: t = false } = {}) {
  if (e.length === 0) return 0;
  let o = new Set(e), r = m(), i = r ? r.sessionCronTasks : n().sessionCron.tasks(), s = i.filter((d) => !o.has(d.id)), a = i.length - s.length;
  if (a === 0) return 0;
  let l = !t && i.some((d) => d.kind === "loop" && o.has(d.id));
  if (r) r.sessionCronTasks.length = 0, r.sessionCronTasks.push(...s);
  else n().sessionCron.replaceTasks(s);
  if (l) n().sessionCron.pendingLoopWakeup.emit(void 0);
  return n().sessionCron.changed.emit(), a;
}
function yTn(e) {
  return n().sessionCron.changed.subscribe(e);
}
function Gos(e) {
  return n().sessionCron.pendingLoopWakeup.subscribe(e);
}
function n4t(e) {
  n().sessionCron.pendingLoopWakeup.emit(e);
}
function zM(e) {
  n().sessionFlags.replaceSessionTrustAccepted(e);
}
function Vxe() {
  return n().sessionFlags.sessionTrustAccepted();
}
function U3e(e) {
  n().sessionFlags.replaceHomeTrustDialogAccepted(e);
}
function Kxe() {
  return n().sessionFlags.homeTrustDialogAccepted();
}
function _Tn(e) {
  n().host.launchOptions.replaceSessionPersistenceDisabled(e);
}
function JH() {
  return n().host.launchOptions.sessionPersistenceDisabled();
}
function J() {
  return Il();
}
function Il() {
  return n().host.launchOptions.diskless();
}
function cm() {
  return k.host.launchOptions.diskless();
}
function STn() {
  return n().host.launchOptions.ccrSessionUrl();
}
function Qbe() {
  return n().host.launchOptions.ccrDerivedSurface();
}
function scr(e) {
  n().host.launchOptions.replaceEntrypointOnRequests(e);
}
function Pee() {
  return n().host.launchOptions.entrypointOnRequests();
}
function bTn() {
  return n().host.launchOptions.toolsMachine();
}
function wTn() {
  return n().sessionFlags.hasExitedPlanMode();
}
function N1(e) {
  n().sessionFlags.replaceHasExitedPlanMode(e);
}
function QXr() {
  return n().host.proactivity.selectorGate();
}
function zos() {
  return n().host.proactivity.selectorGateEverOn();
}
function Vos() {
  n().host.proactivity.inheritSelectorGateEverOn();
}
function ZXr(e) {
  n().host.proactivity.replaceSelectorGate(e);
}
function Kos(e) {
  n().host.proactivity.resampleSelectorGate(e);
}
function r4t(e) {
  return n().host.proactivity.subscribeSelectorGateChanged(e);
}
function qos(e) {
  n().host.proactivity.replaceHostGateSubscription(e);
}
function Yos() {
  return n().sessionFlags.needsPlanModeExitAttachment();
}
function O5(e) {
  n().sessionFlags.replaceNeedsPlanModeExitAttachment(e);
}
function Zbe(e, t) {
  if (t === "plan" && e !== "plan") n().sessionFlags.replaceNeedsPlanModeExitAttachment(false);
  if (e === "plan" && t !== "plan") n().sessionFlags.replaceNeedsPlanModeExitAttachment(true);
}
function Xos() {
  return n().sessionFlags.needsAutoModeExitAttachment();
}
function f$(e) {
  n().sessionFlags.replaceNeedsAutoModeExitAttachment(e);
}
function Jos(e, t) {
  if (e === "auto" && t === "plan" || e === "plan" && t === "auto") return;
  let o = e === "auto", r = t === "auto";
  if (r && !o) n().sessionFlags.replaceNeedsAutoModeExitAttachment(false);
  if (o && !r) n().sessionFlags.replaceNeedsAutoModeExitAttachment(true);
}
function e7r() {
  return n().sessionFlags.lspRecommendationShownThisSession();
}
function t7r(e) {
  n().sessionFlags.replaceLspRecommendationShownThisSession(e);
}
function Qos(e) {
  n().host.launchOptions.replaceInitJsonSchema(e);
}
function n7r() {
  return n().host.launchOptions.initJsonSchema();
}
function Zos(e) {
  n().mcpSessionWiring.registerClientsAccessor(e);
}
function r7r(e) {
  return n().mcpSessionWiring.acquireClientsAccessor(e);
}
function eg() {
  return n().mcpSessionWiring.clientsFromAccessor();
}
function ETn(e) {
  n().host.mcpProcessWiring.registerEnsureConnectedClient(e);
}
function HX() {
  return n().host.mcpProcessWiring.ensureConnectedClient();
}
function FAt(e) {
  n().mcpSessionWiring.registerConnectedClientWiring(e);
}
function vTn() {
  return n().mcpSessionWiring.connectedClientWiring();
}
function ess(e) {
  n().mcpSessionWiring.registerToolsSwapper(e);
}
function o7r(e) {
  return n().mcpSessionWiring.acquireToolsSwapper(e);
}
function kTn(e, t, o) {
  return n().mcpSessionWiring.swapServerTools(e, t, o);
}
function R() {
  return m() ?? n().hookRegistry.holder();
}
function m$(e) {
  let t = R();
  if (!t.registeredHooks) t.registeredHooks = {};
  for (let [o, r] of Object.entries(e)) {
    let i = o;
    if (!t.registeredHooks[i]) t.registeredHooks[i] = [];
    t.registeredHooks[i].push(...r);
  }
  Iee();
}
function PA() {
  return R().registeredHooks;
}
function tss() {
  return k.hookRegistry.holder().registeredHooks;
}
function CTn() {
  let e = R();
  e.registeredHooks = null, e.sdkHostOutOfReachNoted = void 0, Iee();
}
function nss() {
  let e = R();
  if (e.sdkHostOutOfReachNoted) return false;
  return e.sdkHostOutOfReachNoted = true, true;
}
function s7r() {
  R().sdkHostOutOfReachNoted = void 0;
}
function fP() {
  return R().pluginHookRunner;
}
function o4t() {
  return R().replyGatePolicy;
}
function icr(e) {
  let t = fP();
  _r();
  let o = {};
  for (let [r, i] of Object.entries(e)) o[r] = i.filter((s) => !("pluginRoot" in s) || t?.holds(s.pluginId) !== true);
  m$(o);
}
function _r() {
  let e = R();
  if (!e.registeredHooks) return;
  let t = e.pluginHookRunner, o = {};
  for (let [r, i] of Object.entries(e.registeredHooks)) {
    let s = i.filter((a) => !("pluginRoot" in a) || t?.holds(a.pluginId) === true);
    if (s.length > 0) o[r] = s;
  }
  e.registeredHooks = Object.keys(o).length > 0 ? o : null, Iee();
}
var cn = new W(() => He());
function Iee() {
  es(cn).emit();
}
function rss(e) {
  return es(cn).subscribe(e);
}
function qxe() {
  return n().sessionScratch.planSlugCache();
}
function i7r() {
  return m()?.sessionCreatedTeams ?? n().sessionScratch.sessionCreatedTeams();
}
function a7r() {
  return m()?.sessionSpawnedTeammatePanes ?? n().sessionScratch.sessionSpawnedTeammatePanes();
}
function acr() {
  return m()?.surfacedHookSpawnFailures ?? n().sessionScratch.surfacedHookSpawnFailures();
}
function l7r() {
  return x()?.pendingConversationEditKinds ?? k.sessionScratch.pendingConversationEditKinds();
}
function d7r() {
  return x()?.clientTruncatedAssistantIds ?? k.sessionScratch.clientTruncatedAssistantIds();
}
function c7r() {
  return x()?.heldStatelessReplyIds ?? k.sessionScratch.heldStatelessReplyIds();
}
function u7r() {
  return x()?.unsupportedThreadKeys ?? k.sessionScratch.unsupportedThreadKeys();
}
function oss() {
  return m()?.bareMcpServerMatchersWarned ?? n().sessionScratch.bareMcpServerMatchersWarned();
}
function lcr() {
  return m()?.pendingBranchLinks ?? n().sessionScratch.pendingBranchLinks();
}
function p7r() {
  return n().sessionScratch.pendingPrLinks();
}
function sss() {
  return n().sessionScratch.policyPredicateTelemetryEmitted();
}
function $At() {
  return m()?.chromeAvailabilityStagesLogged ?? n().sessionScratch.chromeAvailabilityStagesLogged();
}
function iss() {
  return n().sessionScratch.chromeAvailabilityAnchorMs();
}
function ass() {
  return n().sessionFlags.proposeGoalAvailabilityLogged();
}
function lss() {
  n().sessionFlags.markProposeGoalAvailabilityLogged();
}
function f7r() {
  return n().sessionFlags.inheritedTeamName();
}
function dss(e) {
  n().sessionFlags.replaceInheritedTeamName(e);
}
function s4t(e) {
  n().sessionFlags.replaceTeleportedSessionInfo({ isTeleported: true, hasLoggedFirstMessage: false, sessionId: e.sessionId });
}
function i4t() {
  return n().sessionFlags.teleportedSessionInfo();
}
function m7r() {
  n().sessionFlags.markFirstTeleportMessageLogged();
}
function yie(e, t, o, r = null, i = false) {
  let s = `${r ?? ""}:${e}`;
  n().invokedSkills.record(s, { skillName: e, skillPath: t, content: o, invokedAt: Date.now(), agentId: r, ...i && { servedByMcp: i } });
}
function Oee() {
  return n().invokedSkills.skills();
}
function g7r(e, t) {
  let o = n(), r = o.invokedSkills.lookup(e);
  if (r) o.invokedSkills.record(e, { ...r, content: t });
}
function TTn(e) {
  let t = e ?? null, o = /* @__PURE__ */ new Map();
  for (let [r, i] of n().invokedSkills.skills()) if (i.agentId === t) o.set(r, i);
  return o;
}
function css(e) {
  let t = n();
  if (!e || e.size === 0) {
    t.invokedSkills.forgetAll();
    return;
  }
  for (let [o, r] of t.invokedSkills.skills()) if (r.agentId === null || !e.has(r.agentId)) t.invokedSkills.forget(o);
}
function Fit(e) {
  let t = n();
  for (let [o, r] of t.invokedSkills.skills()) if (r.agentId === e) t.invokedSkills.forget(o);
}
function JIi(e, t) {
  n().host.diagnostics.recordSlowOperation(e, t);
}
function QIi() {
  return n().host.diagnostics.slowOperations();
}
function ZIi() {
  return n().host.diagnostics.devBarAlert();
}
function SC() {
  let e = m();
  return e ? e.mainThreadAgentType : n().hookRegistry.mainThreadAgentType();
}
function mfe(e) {
  let t = m();
  if (t) t.mainThreadAgentType = e;
  else n().hookRegistry.replaceMainThreadAgentType(e);
}
function Mee() {
  let e = m();
  return e ? e.mainThreadAgentHooks : n().hookRegistry.mainThreadAgentHooks();
}
function uss() {
  return k.hookRegistry.mainThreadAgentHooks();
}
function dcr(e) {
  let t = m();
  if (t) t.mainThreadAgentHooks = e;
  else n().hookRegistry.replaceMainThreadAgentHooks(e);
  Iee();
}
function VK() {
  return n().host.extensionsConfig.sessionSkillAllowlist();
}
function pss(e) {
  n().host.extensionsConfig.replaceSessionSkillAllowlist(e);
}
function VM() {
  return n().surfaceCapabilities.caps();
}
function ATn(e) {
  n().surfaceCapabilities.replaceCaps(e);
}
function Pn() {
  return n().surfaceCapabilities.caps().workspace === "remote";
}
function Hee(e) {
  n().surfaceCapabilities.markRemote(e);
}
function RTn() {
  let e = n();
  return e.surfaceCapabilities.cloudCwdOfSession(e.id);
}
function fss(e) {
  n().surfaceCapabilities.replaceCloudCwd({ sessionId: e.sessionId, cwd: $7r(e.cwd) });
}
function mss(e) {
  return n().surfaceCapabilities.cloudCwdChanged.subscribe(e);
}
function UAt() {
  return n().promptAssembly.sections();
}
function gss(e, t) {
  n().promptAssembly.recordSection(e, t);
}
function xTn(e) {
  n().promptAssembly.forgetAllSections(), KM(e);
}
function KM(e) {
  n().promptAssembly.noteInvalidation(e);
}
function Dee() {
  return n().promptAssembly.epoch();
}
function eOi() {
  return n().promptAssembly.lastInvalidationReason();
}
function hss() {
  return n().sessionScratch.vimSharedState();
}
function yss(e) {
  n().sessionScratch.replaceVimSharedState(e);
}
function Ol() {
  return J() ? [] : n().host.extensionsConfig.additionalDirectoriesForClaudeMd();
}
function PW(e) {
  n().host.extensionsConfig.replaceAdditionalDirectoriesForClaudeMd(e);
}
function _ss() {
  return n().host.extensionsConfig.claudeMdAdditionalDirectoriesAsked();
}
function h7r(e) {
  n().host.extensionsConfig.askClaudeMdAdditionalDirectories(e);
}
function J_() {
  return n().host.extensionsConfig.allowedChannels();
}
function B3e(e) {
  n().host.extensionsConfig.replaceAllowedChannels(e);
}
function PTn() {
  return n().host.extensionsConfig.hasDevChannels();
}
function Sss(e) {
  n().host.extensionsConfig.replaceHasDevChannels(e);
}
function bss() {
  return n().host.requestLatches.promptCache1hAllowlist();
}
function wss(e) {
  n().host.requestLatches.replacePromptCache1hAllowlist(e);
}
function j3e(e) {
  return n().host.requestLatches.thinkingTypeOverrides().get(e);
}
function Ess(e, t) {
  n().host.requestLatches.recordThinkingTypeOverride(e, t);
}
function ITn(e) {
  return n().host.requestLatches.servedModelsByRequestedModel().get(e);
}
function y7r(e, t) {
  if (e === t) return;
  let o = n().host.requestLatches, r = o.servedModelsByRequestedModel().get(e);
  if (r) r.add(t);
  else o.recordServedModels(e, /* @__PURE__ */ new Set([t]));
}
function ccr(e) {
  return n().host.requestLatches.effortUnsupportedModels().has(e);
}
function OTn(e) {
  n().host.requestLatches.markEffortUnsupported(e);
}
function vss(e) {
  return n().host.requestLatches.structuredOutputsUnsupportedModels().has(e);
}
function kss(e) {
  n().host.requestLatches.markStructuredOutputsUnsupported(e);
}
function Css() {
  n().host.requestLatches.clearStructuredOutputsUnsupported();
}
function Tss(e) {
  return n().host.requestLatches.context1mRefusedModels().has(e);
}
function Ass(e) {
  n().host.requestLatches.markContext1mRefused(e);
}
function _7r() {
  n().host.requestLatches.clearContext1mRefused();
}
function BAt(e) {
  return n().host.requestLatches.refusedBetas(e);
}
function Rss(e, t) {
  n().host.requestLatches.markBetaRefused(e, t);
}
function xss() {
  return n().host.requestLatches.midConvCachePromotionRejected();
}
function Pss() {
  n().host.requestLatches.markMidConvCachePromotionRejected();
}
function _ie() {
  return n().host.requestLatches.thirdPartyServerClassifierRefused();
}
function MTn() {
  n().host.requestLatches.markThirdPartyServerClassifierRefused();
}
function Iss() {
  n().host.requestLatches.releaseThirdPartyServerClassifierRefusal();
}
function ucr() {
  return n().host.requestLatches.threadsHeldForServerClassifier();
}
function Oss() {
  n().host.requestLatches.markThreadsHeldForServerClassifier();
}
function Mss(e) {
  return n().host.requestLatches.autoModeUnavailableResponse(e);
}
function S7r(e) {
  return n().host.requestLatches.autoModeUnavailableResponsesInARow(e);
}
function b7r(e, t) {
  n().host.requestLatches.noteAutoModeUnavailableResponse(e, t);
}
function w7r(e) {
  n().host.requestLatches.clearAutoModeUnavailableResponses(e);
}
function E7r(e) {
  n().host.requestLatches.setAutoModeUnavailableStopNotice(e);
}
function pcr() {
  return n().host.requestLatches.autoModeUnavailableStopNotice();
}
function Hss(e) {
  n().host.requestLatches.setLocalCommandExitCode(e);
}
function Dss() {
  return n().host.requestLatches.localCommandExitCode();
}
function Lss() {
  return n().host.requestLatches.observedGateway();
}
function Nss(e) {
  n().host.requestLatches.noteObservedGateway(e);
}
function fcr() {
  return n().host.requestLatches.serverClassifierFallbackChoice();
}
function Fss(e) {
  n().host.requestLatches.setServerClassifierFallbackChoice(e);
}
function v7r() {
  n().host.requestLatches.clearServerClassifierFallbackChoice();
}
function $ss() {
  return n().host.requestLatches.takeServerClassifierFallbackAnnouncement();
}
function Uss() {
  return n().host.requestLatches.perTurnEffortOkEmitted();
}
function Bss() {
  n().host.requestLatches.markPerTurnEffortOkEmitted();
}
function jss() {
  return n().host.requestLatches.lateToolAdditionsOkEmitted();
}
function Wss() {
  n().host.requestLatches.markLateToolAdditionsOkEmitted();
}
function Gss() {
  return n().host.requestLatches.toolChangeHeaderRefused();
}
function zss() {
  n().host.requestLatches.markToolChangeHeaderRefused();
}
function Vss() {
  return n().host.requestLatches.promptEndMarkRefused();
}
function Kss() {
  n().host.requestLatches.markPromptEndMarkRefused();
}
function mcr() {
  return n().host.requestLatches.inlineToolsRefused();
}
function k7r() {
  n().host.requestLatches.markInlineToolsRefused();
}
function qss() {
  return n().host.requestLatches.inlineToolsOkEmitted();
}
function Yss() {
  n().host.requestLatches.markInlineToolsOkEmitted();
}
function C7r() {
  return n().host.requestLatches.thinkingResumptionRefused();
}
function Xss() {
  n().host.requestLatches.markThinkingResumptionRefused();
}
function Jss() {
  return n().host.requestLatches.refusedBetaHeaders();
}
function jAt(e) {
  n().host.requestLatches.markBetaHeaderRefused(e);
}
function HTn() {
  return n().host.requestLatches.thinkingHighlightsRefused();
}
function Qss() {
  n().host.requestLatches.markThinkingHighlightsRefused();
}
function Zss(e) {
  return n().host.requestLatches.toolChangeUnsupportedModels().has(e);
}
function eis(e) {
  n().host.requestLatches.markToolChangeUnsupportedModel(e);
}
function Yxe(e) {
  return n().host.requestLatches.inferenceProfileBackingModels().get(e);
}
function tis(e, t) {
  n().host.requestLatches.recordInferenceProfileBackingModel(e, t);
}
function ps() {
  return m()?.stickyBetas ?? n().conversationLatches.stickyBetas();
}
function Lee() {
  let e = m();
  return e ? e.conversationAtisLatch : n().conversationLatches.atisLatch();
}
function W3e(e) {
  let t = m();
  if (t) t.conversationAtisLatch = e;
  else n().conversationLatches.replaceAtisLatch(e);
}
function gcr() {
  let e = m();
  if (e) e.stickyBetas = Q(e.stickyBetas);
  else n().conversationLatches.unlatchStickyBetas();
  _7r();
}
function g$() {
  return n().requestJournal.promptId();
}
function a4t(e) {
  n().requestJournal.replacePromptId(e);
}
function nis() {
  return n().requestJournal.incrementPromptIndex();
}
function KK() {
  return n().requestJournal.promptIndex();
}
function DTn(e, t) {
  let o = n().requestJournal, r = o.lastPersonPrompt(), i = Date.parse(t);
  if (r === null || !Number.isNaN(i) && !(i < Date.parse(r.timestamp))) o.replaceLastPersonPrompt({ uuid: e, timestamp: t });
}
function WAt() {
  return n().requestJournal.lastPersonPrompt();
}
function Vc() {
  return n().surfaceCapabilities.replBridgeActive();
}
function G3e(e) {
  n().surfaceCapabilities.replaceReplBridgeActive(e);
}
function Xxe() {
  return n().surfaceCapabilities.mainLoopBusy();
}
function LTn() {
  return n().surfaceCapabilities.mainQueryRunning();
}
function ris(e) {
  n().surfaceCapabilities.replaceMainLoopStatus(e);
}
export {
  $3e,
  $3t,
  $At,
  $Cn,
  $I,
  $Xr,
  $be,
  $dr,
  $ns,
  $os,
  $rs,
  $ss,
  $xe,
  A3e,
  AA,
  AAt,
  ACn,
  ATn,
  AW,
  AXr,
  Aee,
  Ait,
  Ami,
  Ans,
  Aos,
  Ars,
  Ass,
  B3e,
  B3t,
  BAt,
  BCn,
  BK,
  BXr,
  Bbe,
  Bdr,
  Bi,
  Bns,
  Bos,
  Brs,
  Bss,
  Bts,
  Bxe,
  C$e,
  C3e,
  C7r,
  CAt,
  CCn,
  CTn,
  CXr,
  C_,
  Cee,
  Cit,
  Cmi,
  Cns,
  Cos,
  Crs,
  Css,
  Cu,
  D1,
  D3e,
  D3t,
  DAt,
  DCn,
  DR,
  DTn,
  DXr,
  Dbe,
  Ddr,
  Dee,
  Dit,
  Dns,
  Dos,
  Drs,
  Dss,
  Dz,
  E$e,
  E7r,
  EAt,
  ETn,
  EXr,
  Eee,
  Ei,
  Eit,
  Ens,
  Eos,
  Ers,
  Ess,
  F,
  F3e,
  F3t,
  FAt,
  FCn,
  FI,
  FXr,
  Fbe,
  Fc,
  Fdr,
  Fit,
  Fns,
  Fos,
  Frs,
  Fss,
  G3e,
  G3t,
  GCn,
  GK,
  GM,
  GXr,
  Gbe,
  Gdr,
  Gh,
  Gns,
  Gos,
  Grs,
  Gss,
  Gts,
  Gxe,
  H1,
  H3e,
  H3t,
  HAt,
  HCn,
  HTn,
  HX,
  HXr,
  Hbe,
  Hdr,
  Hee,
  Hit,
  Hns,
  Hos,
  Hrs,
  Hss,
  Hz,
  I3e,
  I5,
  IAt,
  ICn,
  ITn,
  IX,
  IXr,
  Iee,
  Iit,
  Il,
  Imi,
  Ins,
  Ios,
  Irs,
  Iss,
  J,
  J3t,
  JCn,
  JH,
  JIi,
  JXr,
  J_,
  Jbe,
  Jdr,
  Jns,
  Jos,
  Jrs,
  Jss,
  Jts,
  K3t,
  KCn,
  KH,
  KK,
  KM,
  KXr,
  Kbe,
  Kdr,
  Kns,
  Kos,
  Krs,
  Kss,
  Kts,
  Kxe,
  L,
  L1,
  L3e,
  L3t,
  LAt,
  LCn,
  LTn,
  LXr,
  Lbe,
  Ldr,
  Lee,
  Lit,
  Lns,
  Los,
  Lrs,
  Lss,
  Lz,
  M1,
  M3e,
  M3t,
  MAt,
  MCn,
  MTn,
  MX,
  MXr,
  Mee,
  Mit,
  Mmi,
  Mns,
  Mos,
  Mrs,
  Mss,
  Mz,
  N1,
  N3e,
  N3t,
  NAt,
  NCn,
  NI,
  NXr,
  Nbe,
  Ndr,
  Nit,
  Nns,
  Nos,
  Nrs,
  Nss,
  O3e,
  O3t,
  O5,
  OAt,
  OCn,
  OTn,
  OX,
  OXr,
  Oee,
  Oit,
  Ol,
  Om,
  Omi,
  Ons,
  Oos,
  Ors,
  Oss,
  P3e,
  P5,
  PA,
  PAt,
  PCn,
  PE,
  PTn,
  PW,
  PX,
  PXr,
  Pee,
  Pit,
  Pmi,
  Pn,
  Pns,
  Pos,
  Prs,
  Pss,
  Q3t,
  QCn,
  QIi,
  QXr,
  Qbe,
  Qdr,
  Qns,
  Qos,
  Qrs,
  Qss,
  Qts,
  R3e,
  RA,
  RAt,
  RCn,
  RTn,
  RW,
  RXr,
  Ree,
  Rf,
  Rit,
  Rmi,
  Rns,
  Ros,
  Rrs,
  Rss,
  S$e,
  S7r,
  SAt,
  SC,
  STn,
  SXr,
  Sb,
  Sns,
  Sos,
  Srs,
  Sss,
  T$e,
  T3e,
  TA,
  TAt,
  TCn,
  TTn,
  TW,
  TXr,
  Tee,
  Tit,
  Tmi,
  Tns,
  Tos,
  Trs,
  Tss,
  Tu,
  U,
  U3e,
  U3t,
  UAt,
  UCn,
  UI,
  UXr,
  Ube,
  Udr,
  Uns,
  Uos,
  Urs,
  Uss,
  Uxe,
  V,
  V3t,
  VCn,
  VK,
  VM,
  VXr,
  Vbe,
  Vc,
  Vdr,
  Vf,
  Vns,
  Vos,
  Vrs,
  Vss,
  Vts,
  Vxe,
  W3e,
  W3t,
  WAt,
  WCn,
  WK,
  WXr,
  Wbe,
  Wdr,
  Wns,
  Wos,
  Wr,
  Wrs,
  Wss,
  Wts,
  Wxe,
  X3t,
  XCn,
  XH,
  XIi,
  XXr,
  X_,
  Xbe,
  Xdr,
  Xns,
  Xos,
  Xrs,
  Xss,
  Xts,
  Xxe,
  Y3t,
  YCn,
  YH,
  YIi,
  YXr,
  Ybe,
  Ydr,
  Yns,
  Yos,
  Yp,
  Yrs,
  Yss,
  Yts,
  Yxe,
  Z3t,
  ZCn,
  ZIi,
  ZXr,
  Zbe,
  Zdr,
  Zns,
  Zos,
  Zrs,
  Zss,
  Zts,
  _$e,
  _7r,
  _C,
  _Tn,
  _Xr,
  _b,
  _g,
  _ie,
  _ns,
  _os,
  _rs,
  _ss,
  a4t,
  a7r,
  aN,
  aTn,
  aXr,
  acr,
  ans,
  ao,
  aos,
  ars,
  ass,
  b$e,
  b7r,
  bAt,
  bTn,
  bXr,
  bit,
  bns,
  bo,
  bos,
  brs,
  bss,
  c$,
  c7r,
  cTn,
  cXr,
  ccr,
  cfe,
  ci,
  cm,
  cns,
  cos,
  crs,
  css,
  cy,
  d7r,
  dTn,
  dXr,
  dcr,
  dfe,
  dm,
  dns,
  dos,
  drs,
  dss,
  e4t,
  e7r,
  eOi,
  eTn,
  ecr,
  eg,
  eis,
  ens,
  eos,
  ers,
  es,
  ess,
  f$,
  f$e,
  f7r,
  fP,
  fTn,
  fXr,
  fcr,
  ffe,
  fie,
  fns,
  fos,
  frs,
  fss,
  fv,
  g$,
  g$e,
  g7r,
  gC,
  gTn,
  gXr,
  gcr,
  gie,
  gk,
  gns,
  gos,
  grs,
  gss,
  h$e,
  h7r,
  hC,
  hTn,
  hXr,
  hie,
  hns,
  hos,
  hrs,
  hss,
  i4t,
  i7r,
  iTn,
  iXr,
  icr,
  ins,
  ios,
  irs,
  iss,
  j3e,
  j3t,
  jAt,
  jCn,
  jK,
  jXr,
  jbe,
  jdr,
  jns,
  jos,
  jrs,
  jss,
  jts,
  jxe,
  k$e,
  k7r,
  kAt,
  kCn,
  kTn,
  kXr,
  k_,
  ke,
  kee,
  kit,
  kns,
  kos,
  krs,
  kss,
  l7r,
  lN,
  lTn,
  lXr,
  lcr,
  lns,
  los,
  lrs,
  lss,
  m$,
  m$e,
  m7r,
  mTn,
  mXr,
  mcr,
  mfe,
  mie,
  mk,
  mns,
  mos,
  mrs,
  mss,
  n4t,
  n7r,
  nTn,
  nXr,
  ncr,
  nis,
  nns,
  no,
  nos,
  nrs,
  nss,
  nt,
  o4t,
  o7r,
  oTn,
  oXr,
  ocr,
  ons,
  oos,
  ors,
  oss,
  ou,
  p$,
  p$e,
  p7r,
  pP,
  pTn,
  pXr,
  pcr,
  pfe,
  pie,
  pns,
  pos,
  prs,
  ps,
  pss,
  q3t,
  qCn,
  qH,
  qIi,
  qXr,
  qbe,
  qdr,
  qns,
  qos,
  qrs,
  qss,
  qts,
  qw,
  qxe,
  r4t,
  r7r,
  rTn,
  rXr,
  rcr,
  ris,
  rns,
  ros,
  rrs,
  rss,
  s4t,
  s7r,
  sTn,
  sXr,
  scr,
  sns,
  sos,
  sp,
  srs,
  sss,
  t4t,
  t7r,
  tTn,
  tXr,
  tcr,
  tis,
  tns,
  tos,
  trs,
  tss,
  tt,
  tw,
  u$,
  u7r,
  uTn,
  uXr,
  ucr,
  ufe,
  uie,
  uns,
  uos,
  urs,
  uss,
  v$e,
  v7r,
  vAt,
  vCn,
  vTn,
  vXr,
  vee,
  vit,
  vns,
  vos,
  vrs,
  vss,
  w$e,
  w7r,
  wAt,
  wTn,
  wXr,
  wit,
  wn,
  wns,
  wos,
  wrs,
  wss,
  x3e,
  xA,
  xAt,
  xCn,
  xTn,
  xW,
  xX,
  xXr,
  xee,
  xf,
  xit,
  xmi,
  xns,
  xos,
  xrs,
  xss,
  y$e,
  y7r,
  yC,
  yTn,
  yXr,
  ye,
  yie,
  yns,
  yos,
  yrs,
  yss,
  z3t,
  zCn,
  zK,
  zM,
  zXr,
  zbe,
  zc,
  zdr,
  zns,
  zos,
  zrs,
  zss,
  zts,
  zxe
};
