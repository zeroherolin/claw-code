// darwin/shared/chunk-f0d2d1c6.js — Claude Code 2.1.310（darwin）模块 chunk-mpf2d8g1.js
import { qo } from "../fs/gitlab-runner-authentication-token.js";
var C = /^[\t\n\r ]*[[{]/;
function Tye(e, i, n = i) {
  if (!C.test(e)) return { members: 0, outsideStringsOnly: true };
  let r = 0, t = e.indexOf(":");
  while (t !== -1 && r <= n) r++, t = e.indexOf(":", t + 1);
  if (r <= n) return { members: r, outsideStringsOnly: false };
  let o = 0;
  for (let s = 0; s < e.length; s++) {
    let u = e.charCodeAt(s);
    if (u === 58) {
      if (++o > i) return;
    } else if (u === 34) for (s++; s < e.length; s++) {
      let f = e.charCodeAt(s);
      if (f === 34) break;
      if (f === 92) s++;
    }
  }
  return { members: o, outsideStringsOnly: true };
}
function Mpn(e, i) {
  if (!C.test(e)) return true;
  let n = 0;
  for (let t of ["[", "{"]) {
    let o = e.indexOf(t);
    while (o !== -1 && n <= i) n++, o = e.indexOf(t, o + 1);
  }
  if (n <= i) return true;
  let r = 0;
  for (let t = 0; t < e.length; t++) {
    let o = e.charCodeAt(t);
    if (o === 91 || o === 123) {
      if (++r > i) return false;
    } else if (o === 93 || o === 125) r--;
    else if (o === 34) for (t++; t < e.length; t++) {
      let s = e.charCodeAt(t);
      if (s === 34) break;
      if (s === 92) t++;
    }
  }
  return true;
}
function t4s(e, i, n) {
  let r = e.length, t = 0;
  for (let o = 0; o < e.length && r <= n; o++) {
    let s = e.charCodeAt(o);
    if (s === 34) o = R(e, o);
    else if (s === 91 || s === 123) {
      let u = e.charCodeAt(o + 1);
      if (u === 93 || u === 125) o++;
      else r += 1 + i * ++t;
    } else if (s === 93 || s === 125) r += 1 + i * --t;
    else if (s === 44) r += 1 + i * t;
    else if (s === 58) r++;
  }
  return r <= n;
}
var n4s = 64;
function R(e, i) {
  for (let n = e.indexOf('"', i + 1); n !== -1; n = e.indexOf('"', n + 1)) {
    let r = 0;
    while (e.charCodeAt(n - 1 - r) === 92) r++;
    if (r % 2 === 0) return n;
  }
  return e.length - 1;
}
function d(e) {
  return e === 32 || e === 9 || e === 10 || e === 13;
}
var p = 16, L = 6 * p;
function tce(e, i) {
  let n = /* @__PURE__ */ new Map();
  return E(e, (r, t, o) => {
    if (i.has(r)) n.set(r, e.slice(t, o));
  }) ? n : void 0;
}
function r4s(e, i) {
  let n = [], r = 0;
  return E(e, (t, o, s) => {
    let u = e.slice(o, s), f = i(t, u);
    if (f !== u) n.push(e.slice(r, o), f), r = s;
  }) ? n.join("") + e.slice(r) : void 0;
}
function E(e, i) {
  let n = c(e, 0);
  if (e.charCodeAt(n) !== h) return false;
  if (n = c(e, n + 1), e.charCodeAt(n) === l) return g(e, n + 1);
  for (; ; ) {
    if (e.charCodeAt(n) !== a) return false;
    let r = A(e, n);
    if (r === -1) return false;
    let t = e.slice(n + 1, r - 1);
    if (t.includes("\\")) try {
      let u = qo(e.slice(n, r));
      if (typeof u !== "string") return false;
      t = u;
    } catch {
      return false;
    }
    if (n = c(e, r), e.charCodeAt(n) !== _) return false;
    n = c(e, n + 1);
    let o = B(e, n);
    if (o === -1) return false;
    i(t, n, o), n = c(e, o);
    let s = e.charCodeAt(n);
    if (s === b) {
      n = c(e, n + 1);
      continue;
    }
    if (s === l) return g(e, n + 1);
    return false;
  }
}
var a = 34, O = 92, b = 44, _ = 58, h = 123, l = 125, T = 91, m = 93;
function c(e, i) {
  while (d(e.charCodeAt(i))) i++;
  return i;
}
function g(e, i) {
  return c(e, i) === e.length;
}
function A(e, i) {
  let n = i;
  for (; ; ) {
    if (n = e.indexOf('"', n + 1), n === -1) return -1;
    let r = 0;
    while (e.charCodeAt(n - 1 - r) === O) r++;
    if ((r & 1) === 0) return n + 1;
  }
}
function B(e, i) {
  let n = e.charCodeAt(i);
  if (n === a) return A(e, i);
  if (n === h || n === T) return S(e, i);
  let r = i;
  while (r < e.length) {
    let t = e.charCodeAt(r);
    if (t === b || t === l || t === m || d(t)) break;
    r++;
  }
  return r === i ? -1 : r;
}
function S(e, i) {
  let n = 0, r = i;
  while (r < e.length) {
    let t = e.charCodeAt(r);
    if (t === a) {
      if (r = A(e, r), r === -1) return -1;
      continue;
    }
    if (t === h || t === T) n++;
    else if (t === l || t === m) {
      if (n--, n === 0) return r + 1;
    }
    r++;
  }
  return -1;
}
export {
  Mpn,
  Tye,
  n4s,
  r4s,
  t4s,
  tce
};
