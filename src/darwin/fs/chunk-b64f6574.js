// darwin/fs/chunk-b64f6574.js — Claude Code 2.1.310（darwin）模块 chunk-rb032ed2.js
import { Vt } from "../shared/chunk-3b9c376b.js";
import { V } from "../context/not-admin-owned.js";
import { v, Kt } from "../telemetry/anthropic-workspace-id.js";
import { ie } from "./gitlab-runner-authentication-token.js";
import { HM } from "./utf-8.8f8e.js";
import { jd } from "./tempdir-owner-mismatch.js";
import { uv } from "../git/utf-8.js";
import { lstat as u, readdir as w, rmdir as g, unlink as y } from "fs/promises";
import { dirname as h, join as l } from "path";
var Lho = "images", Nho = /^(\d+)\.[a-z]+$/;
async function FTs(a, p) {
  let e = { removed: 0, errors: 0 }, r = ie(), n, i;
  try {
    n = await r.realpath(p ?? jd()), i = await r.readdir(n);
  } catch {
    return e;
  }
  let o = V();
  for (let t of i) {
    if (!t.isDirectory()) continue;
    let s = l(n, t.name), c;
    try {
      c = await r.readdir(s);
    } catch {
      continue;
    }
    for (let m of c) {
      if (!m.isDirectory() || m.name === o || Vt(m.name) === null) continue;
      let d = l(s, m.name, Lho);
      try {
        let f = await r.lstat(d);
        if (!f.isDirectory() || f.mtime >= a) continue;
        if (await I(d, a)) e.removed++;
      } catch (f) {
        if (!Kt(f)) e.errors++;
      }
    }
  }
  return e;
}
async function I(a, p) {
  let e = await uv(a, [a], { leaf: "replace" });
  try {
    await e.recheckBeforeWrite();
    let r = await u(e.ioPath);
    if (!r.isDirectory() || r.mtime >= p) return false;
    let n = l(a, "any"), i = await uv(n, [n], { leaf: "replace" });
    try {
      let o = h(i.ioPath);
      await i.recheckBeforeWrite();
      for (let t of await w(o)) {
        let s = t.lastIndexOf(".tmp."), c = s === -1 ? t : t.slice(0, s);
        if (!Nho.test(c) || s !== -1 && !HM(t, c)) continue;
        await i.recheckBeforeWrite(), await y(l(o, t)).catch(() => {
        });
      }
    } finally {
      await i.close();
    }
    await e.recheckBeforeWrite();
    try {
      await g(e.ioPath);
    } catch (o) {
      let t = v(o);
      if (t === "ENOTEMPTY" || t === "EEXIST") return false;
      throw o;
    }
    return true;
  } finally {
    await e.close();
  }
}
export {
  FTs,
  Lho,
  Nho
};
