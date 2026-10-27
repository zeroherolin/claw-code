// fs/bridge-attachment-user-data-root.49f2.js — Claude Code 2.1.310 模块 chunk-49f2gbya.js
import { Xbe } from "../context/not-admin-owned.ersa.js";
import { R, v, vr } from "../telemetry/anthropic-workspace-id.36ys.js";
import { m } from "../telemetry/chunk-wn8xtaqg.js";
import { Y } from "../shared/async-hooks.923e.js";
import { hs, dX } from "./tempdir-owner-mismatch.5xe1.js";
import { randomUUID as g } from "crypto";
import { constants as h } from "fs";
import { lstat as D, mkdir as _, open as c, readlink as F, realpath as I, rename as L, rmdir as p, stat as b } from "fs/promises";
import { basename as f, dirname as y, join as E } from "path";
var u = dX | h.O_DIRECTORY | h.O_NOFOLLOW | hs;
function d(n) {
  return `/proc/self/fd/${n.fd}`;
}
async function O(n) {
  return (await n.stat()).uid === process.getuid?.();
}
async function $8e(n, o) {
  return "not_linux";
}
async function R$n(n) {
  let o = E(n.at, `.probe-${g()}`), r = `${o}-moved`, t;
  try {
    await _(o, { mode: 448 }), t = await c(o, u), await L(o, r);
    let e = await F(d(t)).catch(() => ""), a = await b(d(t)).catch(() => {
      return;
    });
    return f(e) === f(r) && a?.ino === (await t.stat()).ino || "holds_do_not_follow";
  } catch (e) {
    return vr(e) ?? "unknown";
  } finally {
    await t?.close(), await Promise.allSettled([p(o), p(r)]);
  }
}
async function zut(n) {
  let o = Xbe();
  if (o === null || y(n) !== o) return await _(n, { recursive: true, mode: 448 }), { at: n, release: async () => {
  } };
  let r = await $8e(n, 2);
  if (typeof r === "string") throw Y("warn", "attachments_in_user_data", { state: "write_refused", reason: r }), m("bridge_attachment_user_data_root", r), new R(`nothing was saved: the attachments folder cannot be used (${r})`, "nothing was saved: the attachments folder cannot be used");
  return r;
}
export {
  $8e,
  R$n,
  zut
};
