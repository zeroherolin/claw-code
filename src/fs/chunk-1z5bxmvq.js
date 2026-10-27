// fs/chunk-1z5bxmvq.js — Claude Code 2.1.310 模块 chunk-1z5bxmvq.js
import { es } from "../context/not-admin-owned.ersa.js";
import { d, v, tg } from "../telemetry/anthropic-workspace-id.36ys.js";
import { In } from "./node-modules.gp4v.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { pe } from "../shared/async-hooks.m2fg.js";
import { t } from "./gitlab-runner-authentication-token.d7b0.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { Kqe, IS } from "../git/utf-8.vh7e.js";
import { ru } from "./utf-8.fmbx.js";
import { nr, XZ, ETt, Bvn, Pqt, Tui } from "../remote/moved-directory.z3m0.js";
import { m4s } from "../git/config-unreadable.hb66.js";
import { HKn, vDr, Man, eJe, v$t, Dan } from "../git/bridge-child-tool-diff.m7a8.js";
import { ze } from "../shell/sandbox.aet2.js";
import { lstat as h, opendir as S, realpath as D } from "fs/promises";
import { join as f, sep as k } from "path";
async function C8t() {
  let e = N() ? null : await Dan();
  if (e !== null) return { root: e, nested: false, followsShell: false };
  let r = await F();
  return r === null ? null : { ...r, nested: true };
}
var P = new W(() => /* @__PURE__ */ new Set());
function N() {
  if (Tui()) return true;
  if (!XZ()) return false;
  let e = es(P), r = eJe();
  if (!e.has(r) && !v$t()) e.add(r);
  return e.has(r);
}
var E = 256;
async function F() {
  try {
    if (!(nr() || XZ()) || ze.isSandboxingEnabled()) return null;
    let e = eJe(), r = nr() ? null : ru(await D(e));
    if (r !== null && ![ETt(), Bvn(ETt())].some((i) => In(r) === ru(i))) return t("workspace diff: the process has left the directory in which it was started, so no nested repository is looked for", { level: "warn" }), null;
    if (IS(e) !== null) return null;
    let n = pe(), o = await O(r, e);
    if (o.size > 1) {
      let i = vDr(n), s = i === void 0 ? void 0 : o.get(i), R = s !== void 0 && await m(s) === "directory" ? await g(s, r) : null;
      return R === null ? null : { root: R, followsShell: true };
    }
    let [a] = o.values();
    if (a !== void 0) {
      let i = await m(a);
      if (i === "directory") {
        let s = await g(a, r);
        return s === null ? null : { root: s, followsShell: false };
      }
      if (i === "other") return null;
    }
    let u = [], c = 0;
    for await (let i of await S(e)) {
      if (++c > E) return null;
      if (!i.isDirectory() || i.name.startsWith(".")) continue;
      let s = f(e, i.name);
      if (await m(s) !== "absent") u.push(s);
    }
    let p = ru(n), w = u.find((i) => {
      let s = ru(i);
      return p === s || p.startsWith(s + k);
    }) ?? (u.length === 1 ? u[0] : void 0), y = w === void 0 ? null : await g(w, r);
    return y === null ? null : { root: y, followsShell: u.length > 1 };
  } catch (e) {
    if (tg(e)) t(`workspace diff: nested repository scan failed: ${d(e)}`, { level: "warn" });
    else l(e);
    return null;
  }
}
async function O(e, r) {
  let n = HKn();
  if (e === null) return n;
  let o = /* @__PURE__ */ new Map();
  for (let [a, u] of n) {
    let c = await C(u, r);
    if (c !== null && b(c, e)) o.set(a, c);
  }
  if (o.size < n.size) t(`workspace diff: ignored ${n.size - o.size} declared checkout(s) that do not resolve or lie outside the launch directory`, { level: "warn" });
  return o;
}
function b(e, r) {
  let n = ru(e);
  return n === r || n.startsWith(r + k);
}
async function C(e, r) {
  if (!Pqt(e, r) || Kqe(e, r)) return null;
  try {
    return await D(e);
  } catch {
    return null;
  }
}
async function m(e) {
  try {
    return (await h(f(e, ".git"))).isDirectory() ? "directory" : "other";
  } catch (r) {
    let n = v(r);
    if (n === "ENOENT" || n === "ENOTDIR") return "absent";
    throw r;
  }
}
async function H(e) {
  try {
    let [r, n, o] = await Promise.all([h(f(e, "HEAD")), h(f(e, "objects")), h(f(e, "refs"))]);
    return r.isFile() && n.isDirectory() && o.isDirectory();
  } catch {
    return false;
  }
}
async function g(e, r) {
  let n = Man(e);
  if (n === null) return null;
  if (r !== null) {
    if (m4s(n.gitDir) !== false) return null;
    if (!await H(n.gitDir)) return null;
  }
  let o = r === null ? await Dan(void 0, e) : n.workTree;
  if (o === null || r === null) return o;
  let a = await C(o, Bvn(ETt()));
  return a !== null && b(a, r) ? a : null;
}
export {
  C8t
};
