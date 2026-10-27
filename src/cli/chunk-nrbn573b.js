// cli/chunk-nrbn573b.js — Claude Code 2.1.310 模块 chunk-nrbn573b.js
import { U, kee, Yp } from "../context/not-admin-owned.ersa.js";
import { X } from "../shared/chunk-3kevgx4j.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { yb } from "./chunk-33ax6j5s.js";
import { cX } from "../shared/chunk-380qngfk.js";
var a = 1500;
class u {
  buffer = "";
  seeded = "";
  capturing = false;
  readableHandler = null;
  hasField = false;
  fieldKeyAt = 0;
  fieldClosedAt = null;
}
var f = new W(() => new u());
function r() {
  return f.of(U().host);
}
function cxi() {
  let e = r();
  if (!process.stdin.isTTY || e.capturing || yb("-p") || yb("--print")) return;
  e.capturing = true, e.buffer = "", e.seeded = "", e.hasField = false, e.fieldKeyAt = 0;
  try {
    process.stdin.setEncoding("utf8"), process.stdin.setRawMode(true), process.stdin.ref(), e.readableHandler = () => {
      let t = process.stdin.read();
      while (t !== null) {
        if (typeof t === "string") d(t);
        t = process.stdin.read();
      }
    }, process.stdin.on("readable", e.readableHandler);
  } catch {
    e.capturing = false;
  }
}
function d(e) {
  let t = r(), n = 0;
  while (n < e.length) {
    let s = e[n], o = s.charCodeAt(0);
    if (o === 3) {
      pL(), process.exit(130);
      return;
    }
    if (o === 4) {
      pL();
      return;
    }
    if (o === 127 || o === 8) {
      if (t.buffer.length > 0) {
        let i = cX(t.buffer);
        t.buffer = t.buffer.slice(0, -(i.length || 1));
      }
      n++;
      continue;
    }
    if (o === 27) {
      n++;
      let i = n < e.length ? e.charCodeAt(n) : -1;
      if (i === 91) {
        n++;
        while (n < e.length && e.charCodeAt(n) < 64) n++;
        if (n < e.length) n++;
      } else if (i === 93 || i === 80 || i === 88 || i === 94 || i === 95) {
        n++;
        while (n < e.length) {
          let l = e.charCodeAt(n);
          if (l === 7) {
            n++;
            break;
          }
          if (l === 27 && n + 1 < e.length && e.charCodeAt(n + 1) === 92) {
            n += 2;
            break;
          }
          n++;
        }
      } else if (i === 79) n += 2;
      else if (i !== -1 && i !== 27) n++;
      continue;
    }
    if (o < 32 && o !== 9 && o !== 10 && o !== 13) {
      n++;
      continue;
    }
    if (o === 13) {
      t.buffer += `
`, n++;
      continue;
    }
    t.buffer += s, n++;
  }
}
function pL() {
  let e = r();
  if (!e.capturing) return;
  if (e.capturing = false, e.readableHandler) process.stdin.removeListener("readable", e.readableHandler), e.readableHandler = null;
}
function E2t() {
  pL();
  let e = r(), t = e.buffer.trim();
  if (e.buffer = "", e.seeded = "", e.hasField) e.fieldClosedAt = Date.now();
  return e.hasField = false, e.fieldKeyAt = 0, t;
}
function Wgn() {
  return r().buffer.trim().length > 0;
}
function Ggn(e) {
  let t = r();
  t.buffer = e, t.seeded = e;
}
function rtt() {
  let { buffer: e, seeded: t } = r();
  return e !== t;
}
function j2r() {
  pL();
  let e = r();
  if (!e.hasField && rtt()) zgn();
  return e.hasField = true, e.buffer;
}
function W2r(e) {
  r().buffer = e, zgn();
}
function zgn() {
  r().fieldKeyAt = Date.now();
}
function Vgn() {
  let e = r();
  if (!e.hasField || !rtt()) return "";
  let t = e.buffer.trim();
  return e.buffer = "", e.seeded = "", t;
}
function S6e() {
  return r().hasField;
}
function ott() {
  let { hasField: e, fieldClosedAt: t } = r();
  return e || t !== null;
}
function lGo() {
  let { fieldClosedAt: e } = r();
  return e === null ? 1 / 0 : Date.now() - e;
}
function G2r() {
  let e = Date.now() - r().fieldKeyAt;
  return e < 0 ? 0 : Math.max(0, a - e);
}
async function dGo(e) {
  for (; ; ) {
    let t = G2r();
    if (t === 0 || e.aborted) return;
    await X(t, e);
  }
}
async function cGo() {
  for (; ; ) {
    kee();
    let e = Date.now() - Yp();
    if (e >= a) return;
    if (e < 0) {
      await X(a);
      return;
    }
    await X(a - e);
  }
}
export {
  E2t,
  G2r,
  Ggn,
  S6e,
  Vgn,
  W2r,
  Wgn,
  cGo,
  cxi,
  dGo,
  j2r,
  lGo,
  ott,
  pL,
  rtt,
  zgn
};
