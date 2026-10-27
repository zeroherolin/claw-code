// remote/chunk-rm15x6z2.js — Claude Code 2.1.310 模块 chunk-rm15x6z2.js
import { _r, je } from "../plugins/chunk-x0a7sawk.js";
import { G } from "../telemetry/anthropic-workspace-id.36ys.js";
import { _, ee, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Hn } from "../fs/utf-8.7pve.js";
import { n3t, im, mC } from "../context/utf-8.yzy3.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { n$ } from "../artifacts/chunk-m8t7qekn.js";
import { Vpn } from "../telemetry/bridge-resume-respects-local-owner.8dk3.js";
import { o, E, C, u, Fe, B, T } from "../vendor/zod/string-format.k395.js";
import { Et } from "../telemetry/chunk-q6tk46bn.js";
import { z } from "../shared/chunk-mxa4mwnj.js";
import { mkdir as I, readFile as w, stat as y, unlink as j } from "fs/promises";
import { dirname as x, join as M } from "path";
var h = 50, Ygi = 144e5, b = 6048e5;
function k(e, r, n) {
  return Vpn() && Boolean(e?.length) && r !== void 0 && Qgi(r, n, b);
}
function Xgi(e, r) {
  return k(e.projectThreadSessionIds, e.projectThreadSessionIdsPersistedAt, r) ? e.projectThreadSessionIds : void 0;
}
function Jgi(e, r) {
  return k(e.parkedProjectThreadSessionIds, e.parkedProjectThreadSessionIdsPersistedAt, r) ? e.parkedProjectThreadSessionIds ?? [] : [];
}
function R(e, r, n) {
  if (r?.projectThreadResume && (Xgi(e, n) !== void 0 || Jgi(e, n).length > 0)) return b;
  return Ygi;
}
var Zki = 9e5, v = 12e4;
function Qgi(e, r, n) {
  return r - e <= n && e - r <= v;
}
var VPt = 64, p = f(() => o().max(256).refine(n$)), A = f(() => u({ sessionId: Fe([T(""), p()]), environmentId: p(), source: B(["standalone", "repl"]), pid: E().optional(), procStart: o().optional(), activeSessionIds: C(p()).max(VPt).optional(), activeSessionIdsPersistedAt: E().int().min(0).max(864e13).optional(), projectThreadSessionIds: C(p()).max(VPt).optional(), parkedProjectThreadSessionIds: C(p()).max(VPt).optional(), parkedProjectThreadSessionIdsPersistedAt: E().int().min(0).max(864e13).optional(), projectThreadSessionIdsPersistedAt: E().int().min(0).max(864e13).optional() }));
function P(e) {
  return M(im(), mC(e), "bridge-pointer.json");
}
function S(e) {
  let r = mC(e);
  return _r(r) ? je.bridgePointer(r) : null;
}
async function eCi(e, r, n) {
  let s = P(e), i = z() && n !== void 0 ? S(e) : null;
  if (z() && n !== void 0 && i) {
    let d = await n.write(i, _(r), { mode: 438 & ~process.umask() });
    if (!d.ok) return t(`[bridge:pointer] write failed: ${Et(d.error)}`, { level: "warn" }), false;
    return t(`[bridge:pointer] wrote ${s}`), true;
  }
  try {
    return await I(x(s), { recursive: true }), await Hn(s, _(r)), t(`[bridge:pointer] wrote ${s}`), true;
  } catch (d) {
    return t(`[bridge:pointer] write failed: ${d}`, { level: "warn" }), false;
  }
}
function tCi() {
  let e = Promise.resolve();
  return (r) => (e = e.then(r, r), e);
}
async function Jms(e, r, n) {
  let s = P(e), i, d, g = n ? S(e) : null;
  if (n && g) {
    let l = await n.read([g]);
    if (!l.ok || !l.value.items[0].found) return null;
    d = l.value.items[0].mtimeMs, i = Buffer.from(l.value.items[0].value).toString("utf8");
  } else try {
    d = (await y(s)).mtimeMs, i = await w(s, "utf8");
  } catch {
    return null;
  }
  let m = A().safeParse(O(i));
  if (!m.success) {
    if (!r?.noClear) t(`[bridge:pointer] invalid schema, clearing: ${s}`), await Qms(e, n);
    return null;
  }
  let c = Date.now(), a = Math.max(0, c - d);
  if (!r?.ignoreTtl && a > R(m.data, r, c)) {
    if (!r?.noClear) t(`[bridge:pointer] stale mtime, clearing: ${s}`), await Qms(e, n);
    return null;
  }
  return { ...m.data, ageMs: a };
}
async function nCi(e, r, n) {
  let s = await Jms(e, n, r);
  if (s) return { pointer: s, dir: e };
  let i = await n3t(e);
  if (i.length <= 1) return null;
  if (i.length > h) return t(`[bridge:pointer] ${i.length} worktrees exceeds fanout cap ${h}, skipping`), null;
  let d = mC(e), g = i.filter((a) => mC(a) !== d), m = await Promise.all(g.map(async (a) => {
    let l = await Jms(a, void 0, r);
    return l ? { pointer: l, dir: a } : null;
  })), c = null;
  for (let a of m) if (a && (!c || a.pointer.ageMs < c.pointer.ageMs)) c = a;
  if (c) t(`[bridge:pointer] fanout found pointer in worktree ${c.dir} (ageMs=${c.pointer.ageMs})`);
  return c;
}
async function Qms(e, r) {
  let n = P(e), s = r ? S(e) : null;
  if (r && s) {
    let i = await r.delete(s);
    if (i.ok || i.error.code === "NotFound") t(`[bridge:pointer] cleared ${n}`);
    else t(`[bridge:pointer] clear failed: ${Et(i.error)}`, { level: "warn" });
    return;
  }
  try {
    await j(n), t(`[bridge:pointer] cleared ${n}`);
  } catch (i) {
    if (!G(i)) t(`[bridge:pointer] clear failed: ${i}`, { level: "warn" });
  }
}
function O(e) {
  try {
    return ee(e);
  } catch {
    return null;
  }
}
export {
  Jgi,
  Jms,
  Qgi,
  Qms,
  VPt,
  Xgi,
  Ygi,
  Zki,
  eCi,
  nCi,
  tCi
};
