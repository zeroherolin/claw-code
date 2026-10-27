// fs/job-sweep-drafts.g18m.js — Claude Code 2.1.310 模块 chunk-g18m721z.js
import { U } from "../context/not-admin-owned.ersa.js";
import { po } from "../telemetry/chunk-wn8xtaqg.js";
import { _, ee } from "./gitlab-runner-authentication-token.d7b0.js";
import { Hn, eN } from "./utf-8.7pve.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { je } from "../plugins/chunk-x0a7sawk.js";
import { MNr, HNr, jD } from "../telemetry/bg-roster-parse-failed.yhsj.js";
import { bl } from "./reply-across-default-dirs.esvz.js";
import { o, E, C, u } from "../vendor/zod/string-format.k395.js";
import { z } from "../shared/chunk-mxa4mwnj.js";
import { createHash as D } from "crypto";
import { mkdir as S, readdir as h, rm as w, unlink as k } from "fs/promises";
import { join as p } from "path";
var l = 864e5, d = 8388608;
function c(t) {
  return D("sha256").update(t).digest("hex").slice(0, 8);
}
function n(t) {
  return p(jD(), `.draft-${c(t)}`);
}
function m(t) {
  return _({ ...t, ts: Date.now() });
}
async function _Zt(t, r, e) {
  await mkr(t, r, e);
}
async function mkr(t, r, e) {
  if (z() && e) return (await e.write(je.jobDraft(c(t)), m(r), { publishDiscipline: "atomic", mode: 438 & ~process.umask() }).catch(() => {
    return;
  }))?.ok === true;
  try {
    return await S(jD(), { recursive: true }), await Hn(n(t), m(r)), true;
  } catch {
    return false;
  }
}
function Mho(t, r) {
  try {
    eN(n(t), m(r));
  } catch {
  }
}
async function Hho(t, r) {
  if (r) {
    await r.delete(je.jobDraft(c(t))).catch(() => {
    });
    return;
  }
  await k(n(t)).catch(() => {
  });
}
var g = f(() => u({ q: o(), collapsed: C(o()).optional(), ts: E() }));
async function NTs(t, r) {
  let e = r ? await P(r, t) : await bl(n(t), d);
  if (e === null) return;
  let a;
  try {
    a = g().safeParse(ee(e));
  } catch {
    return;
  }
  if (!a.success) return;
  let { q: i, collapsed: s, ts: y } = a.data;
  if (Date.now() - y > l) return;
  return { q: i, collapsed: s ?? [] };
}
async function P(t, r) {
  return HNr(t, je.jobDraft(c(r)), { cap: d, screens: x(), screenKey: n(r) });
}
function x() {
  return MNr.of(U().host).drafts;
}
async function t$n() {
  return po("job_sweep_drafts", async () => {
    let t;
    try {
      t = await h(jD());
    } catch {
      return;
    }
    let r = Date.now();
    await Promise.all(t.filter((e) => e.startsWith(".draft-")).map(async (e) => {
      let a = p(jD(), e), i = await bl(a, d);
      if (i !== null) try {
        let s = g().safeParse(ee(i));
        if (s.success && r - s.data.ts <= l) return;
      } catch {
      }
      await w(a, { recursive: true, force: true }).catch(() => {
      });
    }));
  });
}
export {
  Hho,
  Mho,
  NTs,
  _Zt,
  mkr,
  t$n
};
