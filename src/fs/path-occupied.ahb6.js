// fs/path-occupied.ahb6.js — Claude Code 2.1.310 模块 chunk-ahb66ssn.js
import { Fs } from "../shared/chunk-abagh0tt.js";
import { v } from "../telemetry/anthropic-workspace-id.36ys.js";
import { _cr, Scr } from "./node-modules.gp4v.js";
import { Ze } from "../shared/chunk-j79dwkaq.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { O } from "./chunk-dz0rx1wn.js";
import { Cbe } from "./utf-8.7pve.js";
import { ABs } from "../context/team-memory-sync.0s3j.js";
import { ml } from "../shell/invalid-type.qnva.js";
import { _V } from "../mcp/chunk-4tvrz0gc.js";
import { hs } from "./tempdir-owner-mismatch.5xe1.js";
import { yV } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { _gn } from "../shared/project-docs.pfj1.js";
import { LNn } from "../agents/chunk-6f80tp51.js";
import { constants as f } from "fs";
import { link as L, lstat as d, mkdir as P, open as R, readlink as C, realpath as w, stat as x, unlink as A } from "fs/promises";
import { posix as D } from "path";
import { pipeline as M } from "stream/promises";
var { basename: g, dirname: u, join: m, relative: k, sep: b } = D, U = /* @__PURE__ */ new Set(["claude.md", "claude.local.md", "agent.md"]), G = /* @__PURE__ */ new Set(["head", "commondir", "node_modules", "site-packages", "dist-packages", "__pycache__"]), X = /* @__PURE__ */ new Set(["config", "config.worktree"]), W = /* @__PURE__ */ new Set(["sitecustomize", "usercustomize"]), Nco = /[^\P{ASCII}\w .()+,=@#%[\]-]/u, Y = new RegExp(`^-|\\s-\\S|${Nco.source}`, "u"), Fco = /[\p{Cc}\p{Zl}\p{Zp}]|(?![\u200c\u200d])\p{Cf}|(?:^|\p{ASCII})[\u200c\u200d]/u, nDn = 255;
function $co(e, t) {
  let r = ml(e);
  if (r.startsWith(".")) return "dot_name";
  if (U.has(r) || LNn.has(r)) return "instruction_file";
  if (G.has(r) || W.has(Ze(r, ".")) || t && (_V.has(r) || X.has(r))) return "unsafe_name";
  if (Scr(e) || _cr.test(e) || Y.test(e) || Fco.test(e)) return "odd_spelling";
  return;
}
function vIe(e) {
  let t = e.split(b);
  for (let [r, n] of t.entries()) {
    let o = $co(n, r === t.length - 1);
    if (o !== void 0) return o;
  }
  return;
}
async function y(e) {
  try {
    return await w(e);
  } catch (t) {
    if (v(t) !== "ENOENT" || u(e) === e) throw t;
    return m(await y(u(e)), g(e));
  }
}
function _(e, t, r) {
  if (!_gn(e, t)) return "outside_home";
  let n = m(t, g(r));
  return vIe(k(e, n)) ?? (yV(r, [r, n]).safe ? void 0 : "write_would_ask");
}
var B = /* @__PURE__ */ new Set(["EEXIST", "ENOTDIR", "ENOENT"]);
async function I(e) {
  try {
    return { outcome: (await d(e)).isFile() ? "already_present" : "path_occupied" };
  } catch (t) {
    if (v(t) === "ENOENT") return;
    throw t;
  }
}
async function kIe(e, t) {
  let r = m(e, t), n = await w(e);
  try {
    let o = vIe(t) ?? _(n, await y(u(r)), r);
    return o === void 0 ? await I(r) : { outcome: "refused_name", refusal: o };
  } catch (o) {
    if (v(o) === "ENOTDIR") return { outcome: "path_occupied" };
    throw o;
  }
}
async function Uco(e, t, r, n) {
  try {
    await L(e, r);
  } catch (s) {
    if (v(s) === "EEXIST") return;
    if (!ABs(s) && v(s) !== "EXDEV") throw s;
    return await z(t, r, n);
  }
  let [o, i] = await Promise.all([t.stat(), d(r)]);
  if (E(i, o)) return o;
  let a = await S(d(e));
  if (E(a, o)) return;
  for (let s of [a, await S(x(e))]) if (s !== void 0 && await _ct(r, s)) break;
  let c = Error("the source of a home file was exchanged while it was published");
  throw c.code = "HOME_SOURCE_EXCHANGED", c;
}
function E(e, t) {
  return e?.ino === t.ino && e.dev === t.dev;
}
async function S(e) {
  try {
    return await e;
  } catch (t) {
    if (v(t) === "ENOENT") return;
    throw t;
  }
}
async function _ct(e, t) {
  try {
    if (!E(await S(d(e)), t)) return false;
    return await A(e), true;
  } catch (r) {
    if (v(r) !== "ENOENT") l(r);
    return false;
  }
}
async function z(e, t, r) {
  let n;
  try {
    n = await R(t, f.O_WRONLY | f.O_CREAT | f.O_EXCL | hs, r);
  } catch (i) {
    if (v(i) === "EEXIST") return;
    throw i;
  }
  let o;
  try {
    o = await n.stat();
    try {
      await n.chmod(r);
    } catch (i) {
      if (!Cbe(i)) throw i;
    }
    return await M(e.createReadStream({ start: 0, autoClose: false }), n.createWriteStream()), E(await d(t), o) ? o : void 0;
  } catch (i) {
    throw await n.close().catch(() => {
    }), await (o === void 0 ? A(t).catch(() => {
    }) : _ct(t, o)), i;
  }
}
async function J(e, t) {
  if (O() !== "linux") return t(e, () => w(e));
  let r = await R(e, f.O_RDONLY | f.O_DIRECTORY | hs);
  try {
    let n = `/proc/self/fd/${r.fd}`;
    return await t(n, () => C(n));
  } finally {
    await r.close();
  }
}
var H = 420;
async function Sct(e, t, r) {
  let n = m(t, r), o = await w(t), i;
  try {
    let a = vIe(r) ?? _(o, await y(u(n)), n);
    if (a !== void 0) return { outcome: "refused_name", refusal: a };
    i = await P(u(n), { recursive: true });
  } catch (a) {
    if (B.has(v(a))) return { outcome: "path_occupied" };
    throw a;
  }
  return await J(u(n), async (a, c) => {
    let s = _(o, await c(), n);
    if (s !== void 0) return { outcome: "refused_name", refusal: s };
    let p = await R(e, Fs | hs);
    try {
      if (!(await p.stat()).isFile()) {
        let F = Error("the source of a home file is not a regular file");
        throw F.code = "HOME_SOURCE_NOT_REGULAR", F;
      }
      await p.chmod(H);
      let h = m(a, g(n)), N = await Uco(e, p, h, H);
      if (N === void 0) return await I(h) ?? { outcome: "path_occupied" };
      let T = _(o, await c(), n);
      if (T !== void 0) return await _ct(h, N), { outcome: "refused_name", refusal: T };
      return { outcome: "placed", ...i !== void 0 && { madeDirectory: i } };
    } finally {
      await p.close();
    }
  });
}
export {
  $co,
  Fco,
  Nco,
  Sct,
  Uco,
  _ct,
  kIe,
  nDn,
  vIe
};
