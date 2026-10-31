// linux/fs/job-sweep-drafts.js — Claude Code 2.1.310（linux）模块 chunk-rtx4z8z6.js
import { U } from "../context/not-admin-owned.js";
import { fo } from "../telemetry/chunk-9d6962d2.js";
import { _, te } from "./gitlab-runner-authentication-token.js";
import { Dn, X0 } from "./utf-8.8f8e.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { We } from "../plugins/chunk-0a4c51cf.js";
import { RLr, xLr, NL } from "../telemetry/bg-roster-parse-failed.js";
import { bl } from "./reply-across-default-dirs.js";
import { o, v, T, u } from "../vendor/zod/string-format.js";
import { z } from "../shared/chunk-be29de51.js";
import { createHash as D } from "crypto";
import { mkdir as S, readdir as h, rm as w, unlink as k } from "fs/promises";
import { join as d } from "path";
var l = 864e5, m = 8388608;
function c(t) {
  return D("sha256").update(t).digest("hex").slice(0, 8);
}
function n(t) {
  return d(NL(), `.draft-${c(t)}`);
}
function f(t) {
  return _({ ...t, ts: Date.now() });
}
async function hZt(t, r, e) {
  await ikr(t, r, e);
}
async function ikr(t, r, e) {
  if (z() && e) return (await e.write(We.jobDraft(c(t)), f(r), { publishDiscipline: "atomic", mode: 438 & ~process.umask() }).catch(() => {
    return;
  }))?.ok === true;
  try {
    return await S(NL(), { recursive: true }), await Dn(n(t), f(r)), true;
  } catch {
    return false;
  }
}
function Oho(t, r) {
  try {
    X0(n(t), f(r));
  } catch {
  }
}
async function Mho(t, r) {
  if (r) {
    await r.delete(We.jobDraft(c(t))).catch(() => {
    });
    return;
  }
  await k(n(t)).catch(() => {
  });
}
var g = p(() => u({ q: o(), collapsed: T(o()).optional(), ts: v() }));
async function EAs(t, r) {
  let e = r ? await P(r, t) : await bl(n(t), m);
  if (e === null) return;
  let a;
  try {
    a = g().safeParse(te(e));
  } catch {
    return;
  }
  if (!a.success) return;
  let { q: i, collapsed: s, ts: y } = a.data;
  if (Date.now() - y > l) return;
  return { q: i, collapsed: s ?? [] };
}
async function P(t, r) {
  return xLr(t, We.jobDraft(c(r)), { cap: m, screens: x(), screenKey: n(r) });
}
function x() {
  return RLr.of(U().host).drafts;
}
async function X$n() {
  return fo("job_sweep_drafts", async () => {
    let t;
    try {
      t = await h(NL());
    } catch {
      return;
    }
    let r = Date.now();
    await Promise.all(t.filter((e) => e.startsWith(".draft-")).map(async (e) => {
      let a = d(NL(), e), i = await bl(a, m);
      if (i !== null) try {
        let s = g().safeParse(te(i));
        if (s.success && r - s.data.ts <= l) return;
      } catch {
      }
      await w(a, { recursive: true, force: true }).catch(() => {
      });
    }));
  });
}
export {
  EAs,
  Mho,
  Oho,
  X$n,
  hZt,
  ikr
};
