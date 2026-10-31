// linux/shared/chunk-eb2f9f43.js — Claude Code 2.1.310（linux）模块 chunk-nf60705s.js
import { PB, kYe } from "../context/not-admin-owned.js";
import { bO } from "../telemetry/bg-roster-parse-failed.js";
import { Co, U$, ar, gZ, xn } from "../artifacts/cobalt-plinth-lovage.js";
function Qws(a) {
  let e = a.trim(), r = Co(), t = U$(e);
  if (t !== null) return { slug: t, url: xn({ slug: t, env: r }) };
  let n = e.toLowerCase();
  if (ar.test(n)) return { slug: n, url: xn({ slug: n, env: r }) };
  let o = gZ(e);
  if (o === null) return { error: "Error: --watch-artifact expects an artifact id or a claude.ai artifact URL" };
  if (o.env !== r) return { error: `Error: --watch-artifact got a ${o.env} artifact URL, but this session is signed in to ${r}` };
  return { slug: o.slug, url: xn(o) };
}
var s = null;
function Zws(a) {
  s = a;
}
function evs() {
  let a = s;
  return s = null, a;
}
function tvs() {
  return s;
}
function kQt(a) {
  let e = [];
  for (let r = 0; r < a.length; r++) {
    let t = a[r];
    if (t === "--watch-artifact" || t === "--watch-artifact-no-autoreact") {
      r++;
      continue;
    }
    if (t.startsWith("--watch-artifact=") || t.startsWith("--watch-artifact-no-autoreact=")) continue;
    e.push(t);
  }
  return e;
}
function iwr(a, e) {
  a = a.toLowerCase();
  let r = ["--watch-artifact", "--watch-artifact-no-autoreact"], t = PB(), n = [], o = false;
  for (let i = 0; i < t.length; i++) {
    let c = t[i];
    if (r.some((u) => c === u && t[i + 1]?.toLowerCase() === a || c.toLowerCase() === `${u}=${a}`)) {
      if (c.indexOf("=") === -1) i++;
      o = true;
      continue;
    }
    n.push(c);
  }
  if (o) kYe(n), bO("--watch-artifact", ["--watch-artifact-no-autoreact"], null, void 0, e);
}
function nvs(a) {
  let e = PB(), r;
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n === "--watch-artifact" && e[t + 1] !== void 0) r = e[t + 1].toLowerCase();
    else if (n.startsWith("--watch-artifact=")) r = n.slice(17).toLowerCase();
  }
  if (r === void 0) return false;
  return kYe([...kQt(PB()), "--watch-artifact-no-autoreact", r]), bO("--watch-artifact-no-autoreact", ["--watch-artifact"], r, void 0, a), true;
}
export {
  Qws,
  Zws,
  evs,
  iwr,
  kQt,
  nvs,
  tvs
};
