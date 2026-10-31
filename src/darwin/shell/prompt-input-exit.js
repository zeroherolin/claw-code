// darwin/shell/prompt-input-exit.js — Claude Code 2.1.310（darwin）模块 chunk-dr3v5wpd.js
import { V, ke, AA, ao, Kxe } from "../context/not-admin-owned.js";
import { R, N, d } from "../telemetry/anthropic-workspace-id.js";
import { Nt } from "../shared/chunk-57ff8cc1.js";
import { Kw } from "../fs/backed-up.js";
import { oie, cAt, _dr, hh, Lxe, t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { m } from "../telemetry/chunk-9d6962d2.js";
import { wDn } from "../telemetry/terminal-nonblocking-stdout.js";
import { CM } from "./invalid-type.js";
import { vR } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { rA, nm, _m, PF } from "../shared/chunk-471874cc.js";
import { BFe } from "../shared/async-hooks.9e79.js";
import { B$, xd, Bxo, Ok, PFt, Pu, aE, e0e, g3, EHr, WWe, Xn, _s, Fin, Bt } from "../core/conversation-engine.js";
import { iP } from "../context/tool-cgroup-exclude-classes.js";
import { eb } from "../agents/in-process-teammate.9720.js";
import { __t } from "../settings/shared-if-writable.js";
import { Iu, M8 } from "../fs/chunk-dacd9872.js";
import { OHo } from "../telemetry/bg-roster-parse-failed.js";
import { bFn, wFn, z1e } from "../telemetry/quota-auto-resume-cancelled.js";
import { guo, hws } from "../shared/chunk-93d557e4.js";
import { hDn, yDn } from "../terminal/chunk-204c4d01.js";
import { _Dn } from "../shared/chunk-032bd782.js";
import { SDn } from "../shared/chunk-ed9e66c6.js";
import { hMt, PNn } from "../cli/chunk-29c07bf4.js";
import { qQt, YQt, HMt, XQt, uFn, pFn } from "../permissions/chunk-88685f75.js";
import { Mf } from "../agents/chunk-1782da8d.js";
import { spawnSync as I } from "child_process";
import { stat as w } from "fs/promises";
import { constants as y } from "os";
import { dirname as D } from "path";
async function p() {
  await Promise.all([Nt(Lxe(), 2e3, "debug flush timeout (exec)").catch(() => {
  }), Nt(BFe(), 2e3, "diag flush timeout (exec)").catch(() => {
  }), Nt(_dr(), 2e3, "pre-exit flush timeout (exec)").catch(() => {
  }), Nt(CM(), 2e3, "write queue drain timeout (exec)").catch(() => {
  })]);
}
import { isAbsolute as T } from "path";
function h(e, r, i, n) {
  if (iP(), O() === "windows" || !T(e)) return;
  let a, s;
  try {
    if (n) s = process.cwd(), hh(n);
    process.execve(e, r, _Dn(i)), t(`execve(${e}) returned — handing back to the caller`, { level: "warn" });
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
  let n = Mf(e, r);
  if (n === void 0) return false;
  try {
    let a = await n.backend.statMeta(n.key);
    if (!a.ok && a.error.code !== "NotFound") t(`transcriptHasBytes: backend statMeta failed: ${a.error.code}`);
    return a.ok && a.value.size > 0;
  } catch (a) {
    return l(a), false;
  }
}
async function i7(e, r, { responseStreaming: i = false } = {}, n) {
  let a = wFn(r);
  if (!a || i) return a;
  try {
    if (await Ok([...e, Bt(bFn[r], "warning")], void 0, void 0, void 0, n), r === "relaunch") await a6(e, n);
  } catch (s) {
    throw z1e(), s;
  }
  return true;
}
async function Mbr(e, { responseStreaming: r = false } = {}, i) {
  try {
    await i7(e, "process_exit", { responseStreaming: r }, i);
  } catch (n) {
    l(n);
  }
}
async function yEe(e, r = {}, i, n) {
  if (await Mbr(e, r, i), n) await Xn(0, "prompt_input_exit", { removeWorktree: n });
  else await Xn(0, "prompt_input_exit");
}
var E = "the automatic continue at the usage-limit reset was cancelled (/rate-limit-options to wait again)", g = `${E.charAt(0).toUpperCase()}${E.slice(1)}.`, S = "Automatic continue at the usage-limit reset was cancelled.";
function _Ee(e, r) {
  return r.includes(E) || r.includes(g) || r.includes(S) ? `${e} ${g}` : e;
}
function dte(e, r, { as: i = "sentence", exitsAfterward: n = false } = {}) {
  if (z1e(), !r) return e;
  if (i === "clause") return `${e} — ${E}`;
  return `${e}
${n ? S : g}`;
}
function Ict(e, r, i) {
  return gq(r, i).catch((n) => {
    if (n instanceof Error) n.message = dte(n.message, e, { as: "clause" });
    else z1e();
    throw n;
  });
}
async function a6(e, r) {
  let i = H9e(e)?.uuid;
  try {
    if (i) await PFt(i, void 0, r);
    else if (Bxo() && await A(r)) await PFt(null, void 0, r);
  } catch (n) {
    l(n);
  }
}
function H9e(e) {
  return e.findLast((r) => (r.type === "user" || r.type === "assistant") && aE(r) && !B$(r.uuid));
}
var v = "Claude Code couldn't restart. Your conversation is saved. Start Claude Code again and run /resume to pick it up.", P = "Claude Code couldn't restart. Start Claude Code again.";
async function SEe() {
  if (await PF()) return;
  throw m("agent_launcher", "relaunch_launcher_not_runnable"), new R(_m() ?? `${rA}: launcher \`${nm()[0]}\` was deleted or is not executable — restore it (or fix the setting), then retry; this session was left running`, "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable");
}
async function gq(e = {}, r) {
  iP();
  let { cmd: i, prefixArgs: n } = vR(() => M8(e.launcher ?? Iu()));
  await SEe();
  let a = e.extraArgs ?? [], s;
  if (e.args) s = e.args;
  else if (e.freshIfNoTranscript && !await A(r)) s = a;
  else s = ["--resume", V(), ...a];
  let u = s[0] === "--resume" && !e.args, C = _s();
  if (Fin(), !C) e.onShutdownClaimed?.();
  e0e(), EHr(), await Promise.all([Nt(Pu(), 3e4, "flush timeout (relaunch)").catch(() => {
  }), Nt(cAt(), oie, "cleanup timeout").catch(() => {
  }).then(() => Nt(WWe(), 1e3, "analytics flush timeout").catch(() => {
  }))]), e.preSpawn?.();
  let o = __t(vR(() => ({ ...process.env })));
  if (yDn(o), delete o.CLAUDE_CODE_TUI_JUST_SWITCHED, delete o.CLAUDE_CODE_TUI_TRIAL, delete o.CLAUDE_BRIDGE_REATTACH_SESSION, delete o.CLAUDE_BRIDGE_REATTACH_SEQ, delete o.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY, delete o.CLAUDE_BRIDGE_REATTACH_GROUPING, delete o.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT, delete o.CLAUDE_BRIDGE_REATTACH_OWNER_ORG, delete o.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL, delete o[OHo], delete o.CLAUDE_BG_WORKSPACE_TRUSTED, delete o.CLAUDE_BG_CARRIED_PROMPTS_SHA256, delete o[guo], AA() && Kxe()) o.CLAUDE_BG_WORKSPACE_TRUSTED = "1", Object.assign(o, await hws());
  if (delete o[hMt], SDn(o, s), delete o[qQt], delete o[HMt], delete o[XQt], delete o[YQt], e.proactivity && !e.args) Object.assign(o, uFn(e.proactivity), pFn(e.proactivity));
  Object.assign(o, e.env);
  for (let f of e.dropEnv ?? []) delete o[f];
  Object.assign(o, PNn());
  let _ = gDn();
  await p(), wDn(), h(i, [i, ...n, ...s], o, _);
  for (let f of ["SIGINT", "SIGTERM", "SIGHUP"]) process.removeAllListeners(f), process.on(f, () => {
  });
  await p(), hDn();
  let c = I(i, [...n, ...s], { stdio: "inherit", env: o, cwd: _ });
  if (process.removeAllListeners("beforeExit"), process.removeAllListeners("exit"), c.error) t(`Failed to relaunch: ${c.error.message}`, { level: "error" }), await p(), g3(e.failedLine ?? (u ? v : P)), Kw("relaunch_spawn_error"), process.exit(1);
  if (c.signal) process.removeAllListeners(c.signal), process.kill(process.pid, c.signal), process.exit(128 + (y.signals[c.signal] ?? 0));
  process.exit(c.status ?? (c.signal ? 1 : 0));
}
function gDn() {
  let e = xd(), r = ke();
  if (e && D(e) === eb(r)) return r;
  return ao();
}
export {
  H9e,
  Ict,
  Mbr,
  SEe,
  _Ee,
  a6,
  dte,
  gDn,
  gq,
  i7,
  yEe
};
