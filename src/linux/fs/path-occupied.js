// linux/fs/path-occupied.js — Claude Code 2.1.310（linux）模块 chunk-ke82rffr.js
import { $s } from "../shared/chunk-4563156b.js";
import { E } from "../telemetry/anthropic-workspace-id.js";
import { ncr, rcr } from "./node-modules.js";
import { Ze } from "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { O } from "./chunk-ce5d00cd.js";
import { bSe } from "./utf-8.8f8e.js";
import { n1s } from "../context/team-memory-sync.js";
import { pl } from "../shell/invalid-type.js";
import { aV } from "../mcp/chunk-4d80773e.js";
import { ws } from "./tempdir-owner-mismatch.js";
import { iV } from "../context/org-memory-writes-setting-changed.js";
import { rgn } from "../shared/project-docs.js";
import { ENn } from "../agents/chunk-2f4a6105.js";
import { constants as f } from "fs";
import { link as P, lstat as d, mkdir as C, open as g, readlink as x, realpath as h, stat as D, unlink as I } from "fs/promises";
import { posix as M } from "path";
import { pipeline as k } from "stream/promises";
var { basename: y, dirname: u, join: m, relative: b, sep: U } = M, G = /* @__PURE__ */ new Set(["claude.md", "claude.local.md", "agent.md"]), X = /* @__PURE__ */ new Set(["head", "commondir", "node_modules", "site-packages", "dist-packages", "__pycache__"]), W = /* @__PURE__ */ new Set(["config", "config.worktree"]), Y = /* @__PURE__ */ new Set(["sitecustomize", "usercustomize"]), fco = /[^\P{ASCII}\w .()+,=@#%[\]-]/u, v = new RegExp(`^-|\\s-\\S|${fco.source}`, "u"), pco = /[\p{Cc}\p{Zl}\p{Zp}]|(?![\u200c\u200d])\p{Cf}|(?:^|\p{ASCII})[\u200c\u200d]/u, HHn = 255;
function mco(e, t) {
  let r = pl(e);
  if (r.startsWith(".")) return "dot_name";
  if (G.has(r) || ENn.has(r)) return "instruction_file";
  if (X.has(r) || Y.has(Ze(r, ".")) || t && (aV.has(r) || W.has(r))) return "unsafe_name";
  if (rcr(e) || ncr.test(e) || v.test(e) || pco.test(e)) return "odd_spelling";
  return;
}
function yIe(e) {
  let t = e.split(U);
  for (let [r, n] of t.entries()) {
    let o = mco(n, r === t.length - 1);
    if (o !== void 0) return o;
  }
  return;
}
async function N(e) {
  try {
    return await h(e);
  } catch (t) {
    if (E(t) !== "ENOENT" || u(e) === e) throw t;
    return m(await N(u(e)), y(e));
  }
}
function _(e, t, r) {
  if (!rgn(e, t)) return "outside_home";
  let n = m(t, y(r));
  return yIe(b(e, n)) ?? (iV(r, [r, n]).safe ? void 0 : "write_would_ask");
}
var B = /* @__PURE__ */ new Set(["EEXIST", "ENOTDIR", "ENOENT"]);
async function L(e) {
  try {
    return { outcome: (await d(e)).isFile() ? "already_present" : "path_occupied" };
  } catch (t) {
    if (E(t) === "ENOENT") return;
    throw t;
  }
}
async function _Ie(e, t) {
  let r = m(e, t), n = await h(e);
  try {
    let o = yIe(t) ?? _(n, await N(u(r)), r);
    return o === void 0 ? await L(r) : { outcome: "refused_name", refusal: o };
  } catch (o) {
    if (E(o) === "ENOTDIR") return { outcome: "path_occupied" };
    throw o;
  }
}
async function gco(e, t, r, n) {
  try {
    await P(e, r);
  } catch (s) {
    if (E(s) === "EEXIST") return;
    if (!n1s(s) && E(s) !== "EXDEV") throw s;
    return await z(t, r, n);
  }
  let [o, i] = await Promise.all([t.stat(), d(r)]);
  if (w(i, o)) return o;
  let a = await R(d(e));
  if (w(a, o)) return;
  for (let s of [a, await R(D(e))]) if (s !== void 0 && await gct(r, s)) break;
  let c = Error("the source of a home file was exchanged while it was published");
  throw c.code = "HOME_SOURCE_EXCHANGED", c;
}
function w(e, t) {
  return e?.ino === t.ino && e.dev === t.dev;
}
async function R(e) {
  try {
    return await e;
  } catch (t) {
    if (E(t) === "ENOENT") return;
    throw t;
  }
}
async function gct(e, t) {
  try {
    if (!w(await R(d(e)), t)) return false;
    return await I(e), true;
  } catch (r) {
    if (E(r) !== "ENOENT") l(r);
    return false;
  }
}
async function z(e, t, r) {
  let n;
  try {
    n = await g(t, f.O_WRONLY | f.O_CREAT | f.O_EXCL | ws, r);
  } catch (i) {
    if (E(i) === "EEXIST") return;
    throw i;
  }
  let o;
  try {
    o = await n.stat();
    try {
      await n.chmod(r);
    } catch (i) {
      if (!bSe(i)) throw i;
    }
    return await k(e.createReadStream({ start: 0, autoClose: false }), n.createWriteStream()), w(await d(t), o) ? o : void 0;
  } catch (i) {
    throw await n.close().catch(() => {
    }), await (o === void 0 ? I(t).catch(() => {
    }) : gct(t, o)), i;
  }
}
async function J(e, t) {
  if (O() !== "linux") return t(e, () => h(e));
  let r = await g(e, f.O_RDONLY | f.O_DIRECTORY | ws);
  try {
    let n = `/proc/self/fd/${r.fd}`;
    return await t(n, () => x(n));
  } finally {
    await r.close();
  }
}
var A = 420;
async function hct(e, t, r) {
  let n = m(t, r), o = await h(t), i;
  try {
    let a = yIe(r) ?? _(o, await N(u(n)), n);
    if (a !== void 0) return { outcome: "refused_name", refusal: a };
    i = await C(u(n), { recursive: true });
  } catch (a) {
    if (B.has(E(a))) return { outcome: "path_occupied" };
    throw a;
  }
  return await J(u(n), async (a, c) => {
    let s = _(o, await c(), n);
    if (s !== void 0) return { outcome: "refused_name", refusal: s };
    let p = await g(e, $s | ws);
    try {
      if (!(await p.stat()).isFile()) {
        let H = Error("the source of a home file is not a regular file");
        throw H.code = "HOME_SOURCE_NOT_REGULAR", H;
      }
      await p.chmod(A);
      let S = m(a, y(n)), T = await gco(e, p, S, A);
      if (T === void 0) return await L(S) ?? { outcome: "path_occupied" };
      let F = _(o, await c(), n);
      if (F !== void 0) return await gct(S, T), { outcome: "refused_name", refusal: F };
      return { outcome: "placed", ...i !== void 0 && { madeDirectory: i } };
    } finally {
      await p.close();
    }
  });
}
export {
  HHn,
  _Ie,
  fco,
  gco,
  gct,
  hct,
  mco,
  pco,
  yIe
};
