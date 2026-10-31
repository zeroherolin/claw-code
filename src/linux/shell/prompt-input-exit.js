// linux/shell/prompt-input-exit.js — Claude Code 2.1.310（linux）模块 chunk-6z861t7d.js
import { q, ke, kC, ao, Bxe } from "../context/not-admin-owned.js";
import { R, N, d } from "../telemetry/anthropic-workspace-id.js";
import { Nt } from "../shared/chunk-57ff8cc1.js";
import { Kw } from "../fs/backed-up.js";
import { Xse, eCt, ndr, hh, Ixe, t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { m } from "../telemetry/chunk-9d6962d2.js";
import { lLn } from "../telemetry/terminal-nonblocking-stdout.js";
import { bM } from "./invalid-type.js";
import { SR } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { eC, nm, _m, A$ } from "../shared/chunk-471874cc.js";
import { D$e } from "../shared/async-hooks.9e79.js";
import { NF, xd, fxo, Ik, _$t, Ru, iv, qMe, sY, nHr, MWe, Xn, ys, Ein, Bt } from "../core/conversation-engine.js";
import { oP } from "../context/tool-cgroup-exclude-classes.js";
import { Zb } from "../agents/in-process-teammate.9720.js";
import { i_t } from "../settings/shared-if-writable.js";
import { xu, E8 } from "../fs/chunk-dacd9872.js";
import { OOo } from "../telemetry/bg-roster-parse-failed.js";
import { a$n, l$n, LBe } from "../telemetry/quota-auto-resume-cancelled.js";
import { zco, BSs } from "../shared/chunk-93d557e4.js";
import { rLn, oLn } from "../terminal/chunk-204c4d01.js";
import { sLn } from "../shared/chunk-032bd782.js";
import { iLn } from "../shared/chunk-ed9e66c6.js";
import { dMt, hNn } from "../cli/chunk-29c07bf4.js";
import { $7t, F7t, CMt, U7t, QNn, ZNn } from "../permissions/chunk-88685f75.js";
import { Mp } from "../agents/chunk-1782da8d.js";
import { spawnSync as I } from "child_process";
import { stat as w } from "fs/promises";
import { constants as y } from "os";
import { dirname as D } from "path";
async function p() {
  await Promise.all([Nt(Ixe(), 2e3, "debug flush timeout (exec)").catch(() => {
  }), Nt(D$e(), 2e3, "diag flush timeout (exec)").catch(() => {
  }), Nt(ndr(), 2e3, "pre-exit flush timeout (exec)").catch(() => {
  }), Nt(bM(), 2e3, "write queue drain timeout (exec)").catch(() => {
  })]);
}
import { isAbsolute as T } from "path";
function h(e, r, i, n) {
  if (oP(), O() === "windows" || !T(e)) return;
  let a, s;
  try {
    if (n) s = process.cwd(), hh(n);
    process.execve(e, r, sLn(i)), t(`execve(${e}) returned — handing back to the caller`, { level: "warn" });
  } catch (u) {
    a = N(u), t(`execReplaceProcess: ${d(u)} — handing the error back to the caller`, { level: "warn" });
  } finally {
    if (s !== void 0) try {
      hh(s);
    } catch {
    }
  }
  return a;
}
async function A(e) {
  let r = xd();
  if (!r) return false;
  return L(r, e);
}
async function L(e, r) {
  if (await w(e).then((a) => a.size > 0, () => false)) return true;
  let n = Mp(e, r);
  if (n === void 0) return false;
  try {
    let a = await n.backend.statMeta(n.key);
    if (!a.ok && a.error.code !== "NotFound") t(`transcriptHasBytes: backend statMeta failed: ${a.error.code}`);
    return a.ok && a.value.size > 0;
  } catch (a) {
    return l(a), false;
  }
}
async function ZX(e, r, { responseStreaming: i = false } = {}, n) {
  let a = l$n(r);
  if (!a || i) return a;
  try {
    if (await Ik([...e, Bt(a$n[r], "warning")], void 0, void 0, void 0, n), r === "relaunch") await Q2(e, n);
  } catch (s) {
    throw LBe(), s;
  }
  return true;
}
async function ySr(e, { responseStreaming: r = false } = {}, i) {
  try {
    await ZX(e, "process_exit", { responseStreaming: r }, i);
  } catch (n) {
    l(n);
  }
}
async function fve(e, r = {}, i, n) {
  if (await ySr(e, r, i), n) await Xn(0, "prompt_input_exit", { removeWorktree: n });
  else await Xn(0, "prompt_input_exit");
}
var E = "the automatic continue at the usage-limit reset was cancelled (/rate-limit-options to wait again)", g = `${E.charAt(0).toUpperCase()}${E.slice(1)}.`, S = "Automatic continue at the usage-limit reset was cancelled.";
function pve(e, r) {
  return r.includes(E) || r.includes(g) || r.includes(S) ? `${e} ${g}` : e;
}
function nte(e, r, { as: i = "sentence", exitsAfterward: n = false } = {}) {
  if (LBe(), !r) return e;
  if (i === "clause") return `${e} — ${E}`;
  return `${e}
${n ? S : g}`;
}
function Rct(e, r, i) {
  return s4(r, i).catch((n) => {
    if (n instanceof Error) n.message = nte(n.message, e, { as: "clause" });
    else LBe();
    throw n;
  });
}
async function Q2(e, r) {
  let i = C3e(e)?.uuid;
  try {
    if (i) await _$t(i, void 0, r);
    else if (fxo() && await A(r)) await _$t(null, void 0, r);
  } catch (n) {
    l(n);
  }
}
function C3e(e) {
  return e.findLast((r) => (r.type === "user" || r.type === "assistant") && iv(r) && !NF(r.uuid));
}
var v = "Claude Code couldn't restart. Your conversation is saved. Start Claude Code again and run /resume to pick it up.", P = "Claude Code couldn't restart. Start Claude Code again.";
async function mve() {
  if (await A$()) return;
  throw m("agent_launcher", "relaunch_launcher_not_runnable"), new R(_m() ?? `${eC}: launcher \`${nm()[0]}\` was deleted or is not executable — restore it (or fix the setting), then retry; this session was left running`, "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable");
}
async function s4(e = {}, r) {
  oP();
  let { cmd: i, prefixArgs: n } = SR(() => E8(e.launcher ?? xu()));
  await mve();
  let a = e.extraArgs ?? [], s;
  if (e.args) s = e.args;
  else if (e.freshIfNoTranscript && !await A(r)) s = a;
  else s = ["--resume", q(), ...a];
  let u = s[0] === "--resume" && !e.args, C = ys();
  if (Ein(), !C) e.onShutdownClaimed?.();
  qMe(), nHr(), await Promise.all([Nt(Ru(), 3e4, "flush timeout (relaunch)").catch(() => {
  }), Nt(eCt(), Xse, "cleanup timeout").catch(() => {
  }).then(() => Nt(MWe(), 1e3, "analytics flush timeout").catch(() => {
  }))]), e.preSpawn?.();
  let o = i_t(SR(() => ({ ...process.env })));
  if (oLn(o), delete o.CLAUDE_CODE_TUI_JUST_SWITCHED, delete o.CLAUDE_CODE_TUI_TRIAL, delete o.CLAUDE_BRIDGE_REATTACH_SESSION, delete o.CLAUDE_BRIDGE_REATTACH_SEQ, delete o.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY, delete o.CLAUDE_BRIDGE_REATTACH_GROUPING, delete o.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT, delete o.CLAUDE_BRIDGE_REATTACH_OWNER_ORG, delete o.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL, delete o[OOo], delete o.CLAUDE_BG_WORKSPACE_TRUSTED, delete o.CLAUDE_BG_CARRIED_PROMPTS_SHA256, delete o[zco], kC() && Bxe()) o.CLAUDE_BG_WORKSPACE_TRUSTED = "1", Object.assign(o, await BSs());
  if (delete o[dMt], iLn(o, s), delete o[$7t], delete o[CMt], delete o[U7t], delete o[F7t], e.proactivity && !e.args) Object.assign(o, QNn(e.proactivity), ZNn(e.proactivity));
  Object.assign(o, e.env);
  for (let f of e.dropEnv ?? []) delete o[f];
  Object.assign(o, hNn());
  let _ = nLn();
  await p(), lLn(), h(i, [i, ...n, ...s], o, _);
  for (let f of ["SIGINT", "SIGTERM", "SIGHUP"]) process.removeAllListeners(f), process.on(f, () => {
  });
  await p(), rLn();
  let c = I(i, [...n, ...s], { stdio: "inherit", env: o, cwd: _ });
  if (process.removeAllListeners("beforeExit"), process.removeAllListeners("exit"), c.error) t(`Failed to relaunch: ${c.error.message}`, { level: "error" }), await p(), sY(e.failedLine ?? (u ? v : P)), Kw("relaunch_spawn_error"), process.exit(1);
  if (c.signal) process.removeAllListeners(c.signal), process.kill(process.pid, c.signal), process.exit(128 + (y.signals[c.signal] ?? 0));
  process.exit(c.status ?? (c.signal ? 1 : 0));
}
function nLn() {
  let e = xd(), r = ke();
  if (e && D(e) === Zb(r)) return r;
  return ao();
}
export {
  C3e,
  Q2,
  Rct,
  ZX,
  fve,
  mve,
  nLn,
  nte,
  pve,
  s4,
  ySr
};
