// darwin/shared/daemon-status.js — Claude Code 2.1.310（darwin）模块 chunk-3k5mznh4.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { I, dc } from "./chunk-d2c47492.js";
import { hn } from "../fs/async-hooks.7959.js";
import { je } from "../plugins/chunk-0a4c51cf.js";
import { sX } from "../terminal/chunk-3ca478a4.js";
import { Qv, tpe } from "../fs/chunk-b6c2193e.js";
import { ot } from "../fs/chunk-86be9585.js";
import { o, Bd, u } from "../vendor/zod/string-format.js";
import { z } from "./chunk-be29de51.js";
import { join as l } from "path";
function S7t() {
  return l(Le(), "daemon.status.json");
}
function b7t() {
  return je.state("daemon-status");
}
async function Ido(s, n) {
  let r = { supervisorPid: process.pid, supervisorProcStart: tpe(), writtenAt: Date.now(), workers: s };
  if (z() && n !== void 0) try {
    let e = await n.write(b7t(), _(r, null, 2), { mode: 438 & ~process.umask() });
    if (!e.ok) t(`writeDaemonStatus: ${e.error.code}`);
    return e.ok;
  } catch (e) {
    return t(`writeDaemonStatus: ${d(e)}`), false;
  }
  try {
    return await hn().atomicWrite(S7t(), _(r, null, 2)), true;
  } catch (e) {
    return t(`writeDaemonStatus: ${d(e)}`), false;
  }
}
async function Odo(s) {
  if (z() && s !== void 0) {
    try {
      let n = await s.delete(b7t());
      if (!n.ok) t(`removeDaemonStatus: ${n.error.code}`);
    } catch (n) {
      t(`removeDaemonStatus: ${d(n)}`);
    }
    return;
  }
  try {
    await hn().delete(S7t());
  } catch {
  }
}
async function MSr(s) {
  let n;
  if (z() && s !== void 0) {
    let i;
    try {
      i = await s.readText([b7t()]);
    } catch {
      return null;
    }
    if (!i.ok) return null;
    let c = i.value.items[0];
    if (!c.found) return null;
    n = c.value;
  } else try {
    n = await hn().read(S7t());
  } catch {
    return null;
  }
  let r = ot(n, false);
  if (!r || typeof r !== "object") return null;
  let e = r;
  if (typeof e.supervisorPid !== "number" || typeof e.workers !== "object" || e.workers === null) return null;
  try {
    process.kill(e.supervisorPid, 0);
  } catch {
    return null;
  }
  let a = typeof e.supervisorProcStart === "string" ? e.supervisorProcStart : void 0;
  if (!await Qv(e.supervisorPid, a)) return null;
  return r;
}
var m = 4096, p = 200, HSr = 64, f = 32;
function S(s) {
  let n = [], r = u({ servedFolder: u({ dir: o().min(1).max(m), sessions: Bd().positive().max(HSr) }) });
  for (let e of Object.values(s?.workers ?? {})) {
    let a = r.safeParse(e);
    if (a.success) n.push(a.data.servedFolder);
  }
  return n;
}
async function Mdo(s, n) {
  try {
    let r = await MSr(n);
    return r?.supervisorPid === s ? S(r) : [];
  } catch (r) {
    t(`readServedFolders: ${d(r)}`);
  }
  return [];
}
function Hdo(s) {
  let r = s.slice(0, f).map(({ dir: a, sessions: i }) => `serving tools: ${i} ${I(i, "cloud session")} in ${sX(dc(a), p)}`), e = s.length - r.length;
  return e > 0 ? r.concat(`serving tools: and ${e} more ${I(e, "folder")}`) : r;
}
export {
  HSr,
  Hdo,
  Ido,
  MSr,
  Mdo,
  Odo,
  S7t,
  b7t
};
