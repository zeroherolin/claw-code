// darwin/telemetry/chunk-9d6962d2.js — Claude Code 2.1.310（darwin）模块 chunk-wn8xtaqg.js
import { c } from "../agents/third-party.js";
import { L5 } from "./anthropic-workspace-id.js";
import { a, Zs } from "./chunk-9097a12b.js";
import { Zse } from "../shared/chunk-6da6c5a3.js";
function Z(e, r, u, o) {
  var n = -1, f = e == null ? 0 : e.length;
  if (o && f) u = e[++n];
  while (++n < f) u = r(u, e[n], n, e);
  return u;
}
var d = Z;
function I(e) {
  return function(r) {
    return e == null ? void 0 : e[r];
  };
}
var i = I;
var D = { "À": "A", "Á": "A", "Â": "A", "Ã": "A", "Ä": "A", "Å": "A", "à": "a", "á": "a", "â": "a", "ã": "a", "ä": "a", "å": "a", "Ç": "C", "ç": "c", "Ð": "D", "ð": "d", "È": "E", "É": "E", "Ê": "E", "Ë": "E", "è": "e", "é": "e", "ê": "e", "ë": "e", "Ì": "I", "Í": "I", "Î": "I", "Ï": "I", "ì": "i", "í": "i", "î": "i", "ï": "i", "Ñ": "N", "ñ": "n", "Ò": "O", "Ó": "O", "Ô": "O", "Õ": "O", "Ö": "O", "Ø": "O", "ò": "o", "ó": "o", "ô": "o", "õ": "o", "ö": "o", "ø": "o", "Ù": "U", "Ú": "U", "Û": "U", "Ü": "U", "ù": "u", "ú": "u", "û": "u", "ü": "u", "Ý": "Y", "ý": "y", "ÿ": "y", "Æ": "Ae", "æ": "ae", "Þ": "Th", "þ": "th", "ß": "ss", "Ā": "A", "Ă": "A", "Ą": "A", "ā": "a", "ă": "a", "ą": "a", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "Ď": "D", "Đ": "D", "ď": "d", "đ": "d", "Ē": "E", "Ĕ": "E", "Ė": "E", "Ę": "E", "Ě": "E", "ē": "e", "ĕ": "e", "ė": "e", "ę": "e", "ě": "e", "Ĝ": "G", "Ğ": "G", "Ġ": "G", "Ģ": "G", "ĝ": "g", "ğ": "g", "ġ": "g", "ģ": "g", "Ĥ": "H", "Ħ": "H", "ĥ": "h", "ħ": "h", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "Į": "I", "İ": "I", "ĩ": "i", "ī": "i", "ĭ": "i", "į": "i", "ı": "i", "Ĵ": "J", "ĵ": "j", "Ķ": "K", "ķ": "k", "ĸ": "k", "Ĺ": "L", "Ļ": "L", "Ľ": "L", "Ŀ": "L", "Ł": "L", "ĺ": "l", "ļ": "l", "ľ": "l", "ŀ": "l", "ł": "l", "Ń": "N", "Ņ": "N", "Ň": "N", "Ŋ": "N", "ń": "n", "ņ": "n", "ň": "n", "ŋ": "n", "Ō": "O", "Ŏ": "O", "Ő": "O", "ō": "o", "ŏ": "o", "ő": "o", "Ŕ": "R", "Ŗ": "R", "Ř": "R", "ŕ": "r", "ŗ": "r", "ř": "r", "Ś": "S", "Ŝ": "S", "Ş": "S", "Š": "S", "ś": "s", "ŝ": "s", "ş": "s", "š": "s", "Ţ": "T", "Ť": "T", "Ŧ": "T", "ţ": "t", "ť": "t", "ŧ": "t", "Ũ": "U", "Ū": "U", "Ŭ": "U", "Ů": "U", "Ű": "U", "Ų": "U", "ũ": "u", "ū": "u", "ŭ": "u", "ů": "u", "ű": "u", "ų": "u", "Ŵ": "W", "ŵ": "w", "Ŷ": "Y", "ŷ": "y", "Ÿ": "Y", "Ź": "Z", "Ż": "Z", "Ž": "Z", "ź": "z", "ż": "z", "ž": "z", "Ĳ": "IJ", "ĳ": "ij", "Œ": "Oe", "œ": "oe", "ŉ": "'n", "ſ": "s" }, P = i(D), x = P;
var j = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, H = "\\u0300-\\u036f", B = "\\ufe20-\\ufe2f", G = "\\u20d0-\\u20ff", J = H + B + G, V = "[" + J + "]", Y = RegExp(V, "g");
function q(e) {
  return e = Zse(e), e && e.replace(j, x).replace(Y, "");
}
var s = q;
var K = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Q(e) {
  return e.match(K) || [];
}
var b = Q;
var X = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function ee(e) {
  return X.test(e);
}
var l = ee;
var v = "\\ud800-\\udfff", re = "\\u0300-\\u036f", ue = "\\ufe20-\\ufe2f", oe = "\\u20d0-\\u20ff", te = re + ue + oe, C = "\\u2700-\\u27bf", h = "a-z\\xdf-\\xf6\\xf8-\\xff", ae = "\\xac\\xb1\\xd7\\xf7", ne = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", fe = "\\u2000-\\u206f", de = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", O = "A-Z\\xc0-\\xd6\\xd8-\\xde", ie = "\\ufe0e\\ufe0f", y = ae + ne + fe + de, F = "['’]", R = "[" + y + "]", xe = "[" + te + "]", k = "\\d+", se = "[" + C + "]", E = "[" + h + "]", U = "[^" + v + y + k + C + h + O + "]", ce = "\\ud83c[\\udffb-\\udfff]", me = "(?:" + xe + "|" + ce + ")", ge = "[^" + v + "]", w = "(?:\\ud83c[\\udde6-\\uddff]){2}", L = "[\\ud800-\\udbff][\\udc00-\\udfff]", t = "[" + O + "]", pe = "\\u200d", _ = "(?:" + E + "|" + U + ")", be = "(?:" + t + "|" + U + ")", S = "(?:" + F + "(?:d|ll|m|re|s|t|ve))?", A = "(?:" + F + "(?:D|LL|M|RE|S|T|VE))?", N = me + "?", T = "[" + ie + "]?", le = "(?:" + pe + "(?:" + [ge, w, L].join("|") + ")" + T + N + ")*", Re = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", _e = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Se = T + N + le, Ae = "(?:" + [se, w, L].join("|") + ")" + Se, ve = RegExp([t + "?" + E + "+" + S + "(?=" + [R, t, "$"].join("|") + ")", be + "+" + A + "(?=" + [R, t + _, "$"].join("|") + ")", t + "?" + _ + "+" + S, t + "+" + A, _e, Re, k, Ae].join("|"), "g");
function Ce(e) {
  return e.match(ve) || [];
}
var z = Ce;
function he(e, r, u) {
  if (e = Zse(e), r = u ? void 0 : r, r === void 0) return l(e) ? z(e) : b(e);
  return e.match(r) || [];
}
var M = he;
var Oe = "['’]", ye = RegExp(Oe, "g");
function Fe(e) {
  return function(r) {
    return d(M(s(r).replace(ye, "")), e, "");
  };
}
var W = Fe;
var ke = W(function(e, r, u) {
  return e + (u ? "_" : "") + r.toLowerCase();
}), Kkn = ke;
function qkn(e) {
  return `tool_${Kkn(e)}`;
}
function pee(e) {
  return `cmd_${Kkn(e)}`;
}
function gX(e) {
  return `hook_${Kkn(e)}`;
}
function g(e, r) {
  a("tengu_feature_ok", { ...r, feature_name: c(e) });
}
function m(e, r, u) {
  a("tengu_feature_bad", { ...u, feature_name: c(e), error_code: L5(r) });
}
function p(e, r, u) {
  a("tengu_feature_sad", { ...u, feature_name: c(e), error_code: L5(r) });
}
async function jr(e, r) {
  try {
    await Zs("tengu_feature_ok", { ...r, feature_name: c(e) });
  } catch {
  }
}
async function zt(e, r, u) {
  try {
    await Zs("tengu_feature_bad", { ...u, feature_name: c(e), error_code: L5(r) });
  } catch {
  }
}
async function da(e, r, u) {
  try {
    await Zs("tengu_feature_sad", { ...u, feature_name: c(e), error_code: L5(r) });
  } catch {
  }
}
async function po(e, r, u) {
  try {
    let o = await r();
    return g(e), o;
  } catch (o) {
    throw m(e, u?.(o) ?? "error"), o;
  }
}
export {
  Kkn,
  da,
  g,
  gX,
  jr,
  m,
  p,
  pee,
  po,
  qkn,
  zt
};
