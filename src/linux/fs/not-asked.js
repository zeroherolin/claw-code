// linux/fs/not-asked.js — Claude Code 2.1.310（linux）模块 chunk-47k1e1dm.js
import { d, E } from "../telemetry/anthropic-workspace-id.js";
import { F } from "../context/not-admin-owned.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { oF, Vo, t } from "./gitlab-runner-authentication-token.js";
import { dc } from "../shared/chunk-d2c47492.js";
import { O } from "./chunk-ce5d00cd.js";
import { uE, hn } from "./async-hooks.7959.js";
import { J9 } from "../terminal/chunk-3ca478a4.js";
import { qm, mqe, Ly, vb, kd } from "./chunk-b6c2193e.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { lbe, hR } from "./chunk-21654dda.js";
import { SG } from "../context/team-memory-sync.js";
import { Xa } from "./daemon-worker.js";
import { o, v, Bd, u, A } from "../vendor/zod/string-format.js";
import { join as y } from "path";
var too = /^[A-Za-z0-9]{1,64}$/, R = /^background-[A-Za-z0-9]{1,64}\.jsonl$/, S = 80, _ = 64, B = 8192, L = 256, w = 32, z = 250, C = p(() => u({ v: A(1), id: o().regex(too), owner: Bd().positive().max(2147483647), owner_start: o().min(1).max(64).optional(), pid: Bd().positive().max(2147483647).optional(), pid_start: o().min(1).max(64).optional(), pids_in: o().min(1).max(1024).optional(), started_at: v().nonnegative(), command: o().max(4 * S), caller: o().max(4 * _), folder: o().min(1).max(4096) }));
async function noo(e) {
  if (!too.test(e.id)) return;
  try {
    let n = { v: 1, id: e.id, owner: process.pid, owner_start: await vb(), pid: e.pid, pid_start: e.pid === void 0 ? void 0 : await kd(e.pid, { skipCache: true }), pids_in: await P(), started_at: Date.now(), command: c(e.command, S), caller: c(e.caller, _), folder: e.folder };
    await hn().mkdir(SG(), 448), await hn().writeExclusive(m(e.id), oF(n), 384), await Lps();
  } catch (n) {
    t(`[remote-tools] background command record not written: ${d(n)}`, { level: "warn" });
  }
}
async function hhr(e) {
  await f(l(e)), await f(m(e));
}
function yhr(e) {
  return f(l(e));
}
async function Lps() {
  let e = [];
  try {
    let n = await hn().list(SG());
    for (let i of n.filter((r) => R.test(r)).slice(0, L)) {
      let r = await ugi(i.slice(11, -6));
      if (r !== void 0 && r !== "ended") e.push(r);
    }
  } catch (n) {
    t(`served background records: ${d(n)}`);
  }
  return e.sort((n, i) => n.folder.localeCompare(i.folder) || n.caller.localeCompare(i.caller) || n.started_at - i.started_at || n.id.localeCompare(i.id));
}
async function ugi(e) {
  if (!too.test(e)) return;
  try {
    let n = await hn().readTail(m(e), B, { noFollow: true }), i = C().safeParse(Vo(n.toString("utf8").trim()));
    if (!i.success || i.data.id !== e) return;
    let r = i.data, a = r.owner === process.pid && r.owner_start !== void 0 && r.owner_start === await vb() || await k(r.owner, r.owner_start);
    if (a || await k(r.pid, r.pid_start)) return { ...r, ownerGone: !a };
    if (await D(r)) return await hhr(e), "ended";
  } catch {
  }
  return;
}
async function rki(e) {
  return F(await Lps(), (n) => !n.ownerGone && e.includes(n.folder));
}
async function oki(e, n = 1e4) {
  let i = hn();
  try {
    await i.writeExclusive(l(e), `{}
`, 384);
  } catch (a) {
    if (E(a) !== "EEXIST") return "not_asked";
  }
  let r = Date.now() + n;
  while (Date.now() < r) if (await X(z), await i.lstat(m(e)).catch(() => null) === void 0) return await yhr(e), "stopped";
  return await f(l(e)) ? "unanswered" : "pending";
}
function ski(e, { now: n, stopHint: i }) {
  if (e.length === 0) return [];
  let r = ["background commands started by cloud sessions:"], a;
  for (let s of e.slice(0, w)) {
    let g = `  in ${c(s.folder, 200)}, cloud session ${c(s.caller, _ + 1)}:`;
    if (g !== a) a = g, r.push(g);
    let b = s.pid === void 0 ? "pid unknown" : `pid ${s.pid}`, x = uE(Math.max(0, n - s.started_at));
    r.push(`    ${s.id}  ${b}  running ${x}  ${c(s.command, S + 1)}${s.ownerGone ? "  (its serving process is gone: nothing here will stop it)" : ""}`);
  }
  if (e.length > w) r.push(`  and ${e.length - w} more`);
  if (i) r.push("  stop one: claude daemon remote-control stop-shell <id>");
  return r;
}
function m(e) {
  return y(SG(), `background-${e}.jsonl`);
}
function l(e) {
  return y(SG(), `background-${e}.stop.jsonl`);
}
async function k(e, n) {
  return e !== void 0 && Xa(e) && (n === void 0 || await Ly(e, n) !== false);
}
async function D(e) {
  if (e.pids_in === void 0 || e.pids_in !== await P() || !await mqe() || !await h(e.owner, e.owner_start)) return false;
  let { pid: n } = e;
  if (n === void 0 || !await h(n, e.pid_start)) return false;
  if (!qm(n) || O() === "windows") return true;
  try {
    return process.kill(-n, 0), false;
  } catch (i) {
    return E(i) === "ESRCH";
  }
}
async function h(e, n) {
  return qm(e) || n !== void 0 && await Ly(e, n) === false;
}
async function P() {
  try {
    return `${await hR()} ${lbe()}`;
  } catch {
    return;
  }
}
async function f(e) {
  try {
    return await hn().delete(e), true;
  } catch {
    return false;
  }
}
function c(e, n) {
  return J9(dc(e), n);
}
export {
  Lps,
  hhr,
  noo,
  oki,
  rki,
  ski,
  too,
  ugi,
  yhr
};
