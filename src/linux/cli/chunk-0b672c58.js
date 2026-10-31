// linux/cli/chunk-0b672c58.js — Claude Code 2.1.310（linux）模块 chunk-t6wy6xxv.js
import { U, hee, Jf } from "../context/not-admin-owned.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { bS } from "./chunk-af2447be.js";
import { nX } from "../shared/chunk-5acf247e.js";
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
function ARi() {
  let e = r();
  if (!process.stdin.isTTY || e.capturing || bS("-p") || bS("--print")) return;
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
      d0(), process.exit(130);
      return;
    }
    if (o === 4) {
      d0();
      return;
    }
    if (o === 127 || o === 8) {
      if (t.buffer.length > 0) {
        let i = nX(t.buffer);
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
function d0() {
  let e = r();
  if (!e.capturing) return;
  if (e.capturing = false, e.readableHandler) process.stdin.removeListener("readable", e.readableHandler), e.readableHandler = null;
}
function cGt() {
  d0();
  let e = r(), t = e.buffer.trim();
  if (e.buffer = "", e.seeded = "", e.hasField) e.fieldClosedAt = Date.now();
  return e.hasField = false, e.fieldKeyAt = 0, t;
}
function Cgn() {
  return r().buffer.trim().length > 0;
}
function Rgn(e) {
  let t = r();
  t.buffer = e, t.seeded = e;
}
function Xet() {
  let { buffer: e, seeded: t } = r();
  return e !== t;
}
function wGr() {
  d0();
  let e = r();
  if (!e.hasField && Xet()) xgn();
  return e.hasField = true, e.buffer;
}
function vGr(e) {
  r().buffer = e, xgn();
}
function xgn() {
  r().fieldKeyAt = Date.now();
}
function Pgn() {
  let e = r();
  if (!e.hasField || !Xet()) return "";
  let t = e.buffer.trim();
  return e.buffer = "", e.seeded = "", t;
}
function dKe() {
  return r().hasField;
}
function Jet() {
  let { hasField: e, fieldClosedAt: t } = r();
  return e || t !== null;
}
function MGo() {
  let { fieldClosedAt: e } = r();
  return e === null ? 1 / 0 : Date.now() - e;
}
function EGr() {
  let e = Date.now() - r().fieldKeyAt;
  return e < 0 ? 0 : Math.max(0, a - e);
}
async function DGo(e) {
  for (; ; ) {
    let t = EGr();
    if (t === 0 || e.aborted) return;
    await X(t, e);
  }
}
async function HGo() {
  for (; ; ) {
    hee();
    let e = Date.now() - Jf();
    if (e >= a) return;
    if (e < 0) {
      await X(a);
      return;
    }
    await X(a - e);
  }
}
export {
  ARi,
  Cgn,
  DGo,
  EGr,
  HGo,
  Jet,
  MGo,
  Pgn,
  Rgn,
  Xet,
  cGt,
  d0,
  dKe,
  vGr,
  wGr,
  xgn
};
