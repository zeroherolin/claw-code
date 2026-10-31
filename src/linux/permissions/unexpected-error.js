// linux/permissions/unexpected-error.js — Claude Code 2.1.310（linux）模块 chunk-m1t68px6.js
import { F } from "../context/not-admin-owned.js";
import { E, yh } from "../telemetry/anthropic-workspace-id.js";
import { yg } from "../shared/async-hooks.5238.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Ad } from "../shared/chunk-d2c47492.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { q0 } from "../shell/chunk-8eebd6c6.js";
import { ws, tX } from "../fs/tempdir-owner-mismatch.js";
import { xa, zbt, b2e } from "../context/org-memory-writes-setting-changed.js";
import { fF, Zit } from "./chunk-74b337a1.js";
import { PA } from "../fs/chunk-50d26643.js";
import { MD } from "../context/team-memory-sync.js";
import { Up } from "../shared/chunk-5584a49f.js";
import { constants as w } from "fs";
import { lstat as R, open as D, opendir as C, readlink as b } from "fs/promises";
import { isAbsolute as x, join as v, resolve as k, sep as p, win32 as P } from "path";
var lCn = 5e3, h = 10 * lCn, S = 1024;
async function AQr(n, e, r, s) {
  try {
    if (typeof n !== "string" || n.length > S || n.includes("\0") || n.includes("\\") || !Ad(n) || P.parse(n).root !== "" || q0(n)) throw fF("invalid_path");
    if (!x(e) || O() !== "linux") throw fF("unexpected_error");
    let o = k(e, n);
    if (!Up(e, o, true)) throw fF("invalid_path");
    let a = r();
    if (MD(o, a.trustedNetworkDirectories) !== void 0) throw fF("unsupported_name");
    if (T(e, o, a)) throw fF("read_rule");
    await using m = await A(e, o);
    if (!(await b(`/proc/self/fd/${m.fd}`, { encoding: "buffer" }).catch((i) => {
      throw E(i) === "ENOENT" ? fF("unexpected_error") : i;
    })).equals(Buffer.from(o))) throw fF("path_not_canonical");
    let l = await I(m);
    if (s()) throw fF("workspace_moved");
    let c = r();
    if (c !== a && T(e, o, c)) throw fF("read_rule");
    let d = l.length > h;
    l.length = Math.min(l.length, h), l.sort((i, f) => i.name < f.name ? -1 : i.name > f.name ? 1 : 0);
    let u = [], N = yg(e, () => {
      for (let i of l) {
        let f = v(o, i.name);
        if (_(f, c, !i.isFile())) continue;
        if (i.name.trimEnd() !== i.name && _(`${f}${p}`, c, !i.isFile())) continue;
        if (u.length === lCn) return true;
        u.push(i);
      }
      return false;
    }), L = await Promise.all(u.map((i) => W(m, i)));
    return { absPath: o, entries: L.filter((i) => i !== null), truncated: N || d && u.length > 0 };
  } catch (o) {
    throw Zit(o) !== void 0 ? o : H(o);
  }
}
var g = tX | w.O_DIRECTORY | w.O_NOFOLLOW | ws;
async function A(n, e) {
  let r = e.split(p).filter((a) => a !== ""), s = F(k(n).split(p), (a) => a !== "") - 1, o = await D(p, g);
  for (let [a, m] of r.entries()) {
    await using y = o;
    let l = `/proc/self/fd/${y.fd}/${m}`;
    o = await D(l, g).catch(async (c) => {
      let d = E(c);
      if (d === "ENOENT") await R(`/proc/self/fd/${y.fd}`).catch(() => {
        throw fF("unexpected_error");
      });
      if (d === "ENOTDIR" && (await R(l)).isSymbolicLink()) throw fF(a < s ? "path_not_canonical" : "symlink_in_path");
      throw c;
    });
  }
  return o;
}
async function I(n) {
  let e = await C(`/proc/self/fd/${n.fd}`).catch((s) => {
    throw E(s) === "ENOENT" ? fF("unexpected_error") : s;
  }), r = [];
  for await (let s of e) if (r.push(s), r.length > h) break;
  return r;
}
async function W(n, e) {
  let r = await PA(e, `/proc/self/fd/${n.fd}/${e.name}`, "unknown");
  if (r === "unknown") return null;
  if (r === "symlink") return { name: e.name, isDirectory: false, isSymlink: true };
  if (r === "other") return { name: e.name, isDirectory: false, isSpecial: true };
  return { name: e.name, isDirectory: r === "dir" };
}
function T(n, e, r) {
  return b2e([], r).layer !== "allow" || yg(n, () => _(e, r, true) || ["deny", "ask"].some((s) => zbt(e, r, "read", s) !== null));
}
function _(n, e, r) {
  return (r ? [{}, { isDirectory: true }] : [{}]).some((o) => ["deny", "ask"].some((a) => xa(n, e, "read", a, o) !== null));
}
function H(n) {
  switch (E(n)) {
    case "ENOENT":
      return fF("not_found");
    case "ENOTDIR":
      return fF("not_a_directory");
    case "ELOOP":
      return fF("symlink_in_path");
    case "ENAMETOOLONG":
      return fF("invalid_path");
    case "EACCES":
    case "EPERM":
      return fF("os_permission_denied");
    default:
      let e = `list_directory failed: ${yh(n) ?? "not a filesystem error"}`;
      return t(e, { level: "error" }), fF("unexpected_error", e);
  }
}
export {
  AQr,
  lCn
};
