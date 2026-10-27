// permissions/unexpected-error.z4an.js — Claude Code 2.1.310 模块 chunk-z4anf2bh.js
import { F } from "../context/not-admin-owned.ersa.js";
import { v, yh } from "../telemetry/anthropic-workspace-id.36ys.js";
import { yg } from "../shared/async-hooks.m2fg.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Td } from "../shared/chunk-j79dwkaq.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { QL } from "../shell/chunk-tjkwy3jp.js";
import { hs, dX } from "../fs/tempdir-owner-mismatch.5xe1.js";
import { Pa, QSt, xze } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { h$, oat } from "./chunk-7e2vm8nv.js";
import { MT } from "../fs/chunk-d6m069gd.js";
import { N0 } from "../context/team-memory-sync.0s3j.js";
import { Uf } from "../shared/chunk-td15acp7.js";
import { constants as _ } from "fs";
import { lstat as w, open as R, opendir as L, readlink as C } from "fs/promises";
import { isAbsolute as b, join as x, resolve as T, sep as p, win32 as P } from "path";
var kAn = 5e3, h = 10 * kAn, S = 1024;
async function YJr(n, e, r, s) {
  try {
    if (typeof n !== "string" || n.length > S || n.includes("\0") || n.includes("\\") || !Td(n) || P.parse(n).root !== "" || QL(n)) throw h$("invalid_path");
    if (!b(e) || O() !== "linux") throw h$("unexpected_error");
    let o = T(e, n);
    if (!Uf(e, o, true)) throw h$("invalid_path");
    let a = r();
    if (N0(o, a.trustedNetworkDirectories) !== void 0) throw h$("unsupported_name");
    if (g(e, o, a)) throw h$("read_rule");
    await using m = await A(e, o);
    if (!(await C(`/proc/self/fd/${m.fd}`, { encoding: "buffer" }).catch((i) => {
      throw v(i) === "ENOENT" ? h$("unexpected_error") : i;
    })).equals(Buffer.from(o))) throw h$("path_not_canonical");
    let l = await I(m);
    if (s()) throw h$("workspace_moved");
    let c = r();
    if (c !== a && g(e, o, c)) throw h$("read_rule");
    let d = l.length > h;
    l.length = Math.min(l.length, h), l.sort((i, f) => i.name < f.name ? -1 : i.name > f.name ? 1 : 0);
    let u = [], k = yg(e, () => {
      for (let i of l) {
        let f = x(o, i.name);
        if (E(f, c, !i.isFile())) continue;
        if (i.name.trimEnd() !== i.name && E(`${f}${p}`, c, !i.isFile())) continue;
        if (u.length === kAn) return true;
        u.push(i);
      }
      return false;
    }), N = await Promise.all(u.map((i) => W(m, i)));
    return { absPath: o, entries: N.filter((i) => i !== null), truncated: k || d && u.length > 0 };
  } catch (o) {
    throw oat(o) !== void 0 ? o : H(o);
  }
}
var D = dX | _.O_DIRECTORY | _.O_NOFOLLOW | hs;
async function A(n, e) {
  let r = e.split(p).filter((a) => a !== ""), s = F(T(n).split(p), (a) => a !== "") - 1, o = await R(p, D);
  for (let [a, m] of r.entries()) {
    await using y = o;
    let l = `/proc/self/fd/${y.fd}/${m}`;
    o = await R(l, D).catch(async (c) => {
      let d = v(c);
      if (d === "ENOENT") await w(`/proc/self/fd/${y.fd}`).catch(() => {
        throw h$("unexpected_error");
      });
      if (d === "ENOTDIR" && (await w(l)).isSymbolicLink()) throw h$(a < s ? "path_not_canonical" : "symlink_in_path");
      throw c;
    });
  }
  return o;
}
async function I(n) {
  let e = await L(`/proc/self/fd/${n.fd}`).catch((s) => {
    throw v(s) === "ENOENT" ? h$("unexpected_error") : s;
  }), r = [];
  for await (let s of e) if (r.push(s), r.length > h) break;
  return r;
}
async function W(n, e) {
  let r = await MT(e, `/proc/self/fd/${n.fd}/${e.name}`, "unknown");
  if (r === "unknown") return null;
  if (r === "symlink") return { name: e.name, isDirectory: false, isSymlink: true };
  if (r === "other") return { name: e.name, isDirectory: false, isSpecial: true };
  return { name: e.name, isDirectory: r === "dir" };
}
function g(n, e, r) {
  return xze([], r).layer !== "allow" || yg(n, () => E(e, r, true) || ["deny", "ask"].some((s) => QSt(e, r, "read", s) !== null));
}
function E(n, e, r) {
  return (r ? [{}, { isDirectory: true }] : [{}]).some((o) => ["deny", "ask"].some((a) => Pa(n, e, "read", a, o) !== null));
}
function H(n) {
  switch (v(n)) {
    case "ENOENT":
      return h$("not_found");
    case "ENOTDIR":
      return h$("not_a_directory");
    case "ELOOP":
      return h$("symlink_in_path");
    case "ENAMETOOLONG":
      return h$("invalid_path");
    case "EACCES":
    case "EPERM":
      return h$("os_permission_denied");
    default:
      let e = `list_directory failed: ${yh(n) ?? "not a filesystem error"}`;
      return t(e, { level: "error" }), h$("unexpected_error", e);
  }
}
export {
  YJr,
  kAn
};
