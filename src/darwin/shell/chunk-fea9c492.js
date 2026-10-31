// darwin/shell/chunk-fea9c492.js — Claude Code 2.1.310（darwin）模块 chunk-gx93fya1.js
import { U } from "../context/not-admin-owned.js";
import { QAt } from "../fs/node-modules.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { hcr } from "../models/claude-3-5-sonnet.js";
import { execFileSync as p } from "child_process";
import { lstatSync as g } from "fs";
import { join as m } from "path";
function E() {
  return false;
}
class f {
  resolved = /* @__PURE__ */ new Map();
  lookup(e) {
    return this.resolved.get(e);
  }
  remember(e, t) {
    this.resolved.set(e, t);
  }
  forget(e) {
    this.resolved.delete(e);
  }
}
var w = new W(() => new f()), h = 5e3;
function u(e) {
  try {
    return g(e, { throwIfNoEntry: false }) === void 0;
  } catch {
    return false;
  }
}
var S = /* @__PURE__ */ new Set([".com", ".exe", ".bat", ".cmd"]);
function b(e) {
  let t = e.toLowerCase().replace(/.*[\\/]/, "").replace(/[. ]+$/, ""), n = t.lastIndexOf(".");
  return n > 0 && S.has(t.slice(n));
}
function vYr(e, t = false) {
  let n = w.of(U().host), o = n.lookup(e);
  if (o !== void 0) if (o !== null) {
    if (!u(o)) return o;
    n.forget(e);
  } else {
    if (!t) return o;
    n.forget(e);
  }
  let c = hcr("SYSTEMROOT") || "C:\\Windows", d = m(c, "System32", "where.exe");
  try {
    let i = p(d, [e], { stdio: "pipe", encoding: "utf8", timeout: h, windowsHide: true, env: process.env }).trim().split(/\r?\n/).filter(Boolean), a = process.cwd(), l = false;
    for (let r of i) {
      if (u(r)) continue;
      if (QAt(r, a)) {
        l = true;
        continue;
      }
      if (!b(r)) continue;
      return n.remember(e, r), r;
    }
    if (i.length > 0 && !l) n.remember(e, null);
    return null;
  } catch (s) {
    if (v(s)) n.remember(e, null);
    return null;
  }
}
function v(e) {
  if (e === null || typeof e !== "object") return false;
  let t = "status" in e ? e.status : void 0, n = "signal" in e ? e.signal : void 0, o = "code" in e ? e.code : void 0;
  return t === 1 && !n && !o;
}
function t$(e, t = false) {
  if (!E()) return e;
  if (e.includes("/") || e.includes("\\")) return e;
  return vYr(e, t);
}
export {
  t$,
  vYr
};
