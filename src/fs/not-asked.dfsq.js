// fs/not-asked.dfsq.js — Claude Code 2.1.310 模块 chunk-dfsqet1h.js
import { d, v } from "../telemetry/anthropic-workspace-id.36ys.js";
import { F } from "../context/not-admin-owned.ersa.js";
import { X } from "../shared/chunk-3kevgx4j.js";
import { l$, qo, t } from "./gitlab-runner-authentication-token.d7b0.js";
import { dc } from "../shared/chunk-j79dwkaq.js";
import { O } from "./chunk-dz0rx1wn.js";
import { pv, hn } from "./async-hooks.2k4e.js";
import { sX } from "../terminal/chunk-9vttrktj.js";
import { qm, EKe, Fy, vS, vd } from "./chunk-tzqhxyjb.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { gSe, SR } from "./chunk-q5g832za.js";
import { P2 } from "../context/team-memory-sync.0s3j.js";
import { Ja } from "./daemon-worker.e01m.js";
import { o, E, Bd, u, T } from "../vendor/zod/string-format.k395.js";
import { join as y } from "path";
var moo = /^[A-Za-z0-9]{1,64}$/, R = /^background-[A-Za-z0-9]{1,64}\.jsonl$/, S = 80, _ = 64, B = 8192, L = 256, w = 32, z = 250, C = f(() => u({ v: T(1), id: o().regex(moo), owner: Bd().positive().max(2147483647), owner_start: o().min(1).max(64).optional(), pid: Bd().positive().max(2147483647).optional(), pid_start: o().min(1).max(64).optional(), pids_in: o().min(1).max(1024).optional(), started_at: E().nonnegative(), command: o().max(4 * S), caller: o().max(4 * _), folder: o().min(1).max(4096) }));
async function goo(e) {
  if (!moo.test(e.id)) return;
  try {
    let n = { v: 1, id: e.id, owner: process.pid, owner_start: await vS(), pid: e.pid, pid_start: e.pid === void 0 ? void 0 : await vd(e.pid, { skipCache: true }), pids_in: await P(), started_at: Date.now(), command: c(e.command, S), caller: c(e.caller, _), folder: e.folder };
    await hn().mkdir(P2(), 448), await hn().writeExclusive(p(e.id), l$(n), 384), await ems();
  } catch (n) {
    t(`[remote-tools] background command record not written: ${d(n)}`, { level: "warn" });
  }
}
async function Rhr(e) {
  await m(l(e)), await m(p(e));
}
function xhr(e) {
  return m(l(e));
}
async function ems() {
  let e = [];
  try {
    let n = await hn().list(P2());
    for (let i of n.filter((r) => R.test(r)).slice(0, L)) {
      let r = await Wgi(i.slice(11, -6));
      if (r !== void 0 && r !== "ended") e.push(r);
    }
  } catch (n) {
    t(`served background records: ${d(n)}`);
  }
  return e.sort((n, i) => n.folder.localeCompare(i.folder) || n.caller.localeCompare(i.caller) || n.started_at - i.started_at || n.id.localeCompare(i.id));
}
async function Wgi(e) {
  if (!moo.test(e)) return;
  try {
    let n = await hn().readTail(p(e), B, { noFollow: true }), i = C().safeParse(qo(n.toString("utf8").trim()));
    if (!i.success || i.data.id !== e) return;
    let r = i.data, a = r.owner === process.pid && r.owner_start !== void 0 && r.owner_start === await vS() || await k(r.owner, r.owner_start);
    if (a || await k(r.pid, r.pid_start)) return { ...r, ownerGone: !a };
    if (await D(r)) return await Rhr(e), "ended";
  } catch {
  }
  return;
}
async function $ki(e) {
  return F(await ems(), (n) => !n.ownerGone && e.includes(n.folder));
}
async function Uki(e, n = 1e4) {
  let i = hn();
  try {
    await i.writeExclusive(l(e), `{}
`, 384);
  } catch (a) {
    if (v(a) !== "EEXIST") return "not_asked";
  }
  let r = Date.now() + n;
  while (Date.now() < r) if (await X(z), await i.lstat(p(e)).catch(() => null) === void 0) return await xhr(e), "stopped";
  return await m(l(e)) ? "unanswered" : "pending";
}
function Bki(e, { now: n, stopHint: i }) {
  if (e.length === 0) return [];
  let r = ["background commands started by cloud sessions:"], a;
  for (let s of e.slice(0, w)) {
    let g = `  in ${c(s.folder, 200)}, cloud session ${c(s.caller, _ + 1)}:`;
    if (g !== a) a = g, r.push(g);
    let b = s.pid === void 0 ? "pid unknown" : `pid ${s.pid}`, x = pv(Math.max(0, n - s.started_at));
    r.push(`    ${s.id}  ${b}  running ${x}  ${c(s.command, S + 1)}${s.ownerGone ? "  (its serving process is gone: nothing here will stop it)" : ""}`);
  }
  if (e.length > w) r.push(`  and ${e.length - w} more`);
  if (i) r.push("  stop one: claude daemon remote-control stop-shell <id>");
  return r;
}
function p(e) {
  return y(P2(), `background-${e}.jsonl`);
}
function l(e) {
  return y(P2(), `background-${e}.stop.jsonl`);
}
async function k(e, n) {
  return e !== void 0 && Ja(e) && (n === void 0 || await Fy(e, n) !== false);
}
async function D(e) {
  if (e.pids_in === void 0 || e.pids_in !== await P() || !await EKe() || !await h(e.owner, e.owner_start)) return false;
  let { pid: n } = e;
  if (n === void 0 || !await h(n, e.pid_start)) return false;
  if (!qm(n) || O() === "windows") return true;
  try {
    return process.kill(-n, 0), false;
  } catch (i) {
    return v(i) === "ESRCH";
  }
}
async function h(e, n) {
  return qm(e) || n !== void 0 && await Fy(e, n) === false;
}
async function P() {
  try {
    return `${await SR()} ${gSe()}`;
  } catch {
    return;
  }
}
async function m(e) {
  try {
    return await hn().delete(e), true;
  } catch {
    return false;
  }
}
function c(e, n) {
  return sX(dc(e), n);
}
export {
  $ki,
  Bki,
  Rhr,
  Uki,
  Wgi,
  ems,
  goo,
  moo,
  xhr
};
