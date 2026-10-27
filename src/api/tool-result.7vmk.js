// api/tool-result.7vmk.js — Claude Code 2.1.310 模块 chunk-7vmkxgcc.js
import { Pn } from "../context/not-admin-owned.ersa.js";
import { Gft, Za } from "../core/conversation-engine.31gx.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { I } from "../shared/chunk-j79dwkaq.js";
import { Em } from "../artifacts/cobalt-plinth-lovage.hxm5.js";
import { AO } from "../context/team-memory-sync.0s3j.js";
import { Rv } from "../telemetry/fleet-past-sessions.vsk9.js";
import { U1e, KQt } from "../hooks/no-verdict.k3nf.js";
function $1e() {
  return Rv() && !Pn();
}
function p(e, n) {
  if (!e) return "idle-fork";
  return n ? "defer-then-fork" : "abort-then-fork";
}
function d(e) {
  let { inFlight: n } = e;
  if (e.isBg) return { ok: true, via: "detach", inFlight: n };
  if (!e.fleetEnabled) return { ok: false, reason: "fleet-disabled", inFlight: n };
  if (e.isRemote) return { ok: false, reason: "remote", inFlight: n };
  if (e.persistenceDisabled) return { ok: false, reason: "persistence", inFlight: n };
  if (e.isExternalLoading) return { ok: false, reason: "loading", inFlight: n };
  return { ok: true, via: p(e.isLoading, e.betweenCalls), inFlight: n };
}
function eFn(e, n) {
  return !n && !f(e);
}
function f(e) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r.type === "assistant") return r.message?.stop_reason === null;
    if (r.type === "user") return false;
  }
  return false;
}
function Rvr(e) {
  let n = 0;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o.type === "assistant") {
      if (o.message?.stop_reason !== null) return n;
      for (let i of o.message?.content ?? []) if (i.type === "text" && typeof i.text === "string") n += i.text.length;
    } else if (o.type === "user") return n;
  }
  return n;
}
function xvr(e, n) {
  let r = e.length;
  for (let i = e.length - 1; i >= 0; i--) {
    let s = e[i];
    if (s.type === "assistant") {
      if (s.message?.stop_reason !== null) break;
      r = i;
    } else if (s.type === "user") break;
  }
  let o = "";
  for (let i = r; i < e.length; i++) {
    let s = e[i];
    if (s.type !== "assistant") continue;
    for (let a of s.message?.content ?? []) if (a.type === "text" && typeof a.text === "string") o += a.text;
  }
  return o + (n ?? "");
}
function tFn(e) {
  let n, r = false;
  return (o) => {
    if (r) return true;
    try {
      return n ??= U1e(e()), KQt(o.under, n);
    } catch (i) {
      return r = true, t(`heldScreening could not read the screening: ${i}`, { level: "error" }), true;
    }
  };
}
function Pvr(e, n) {
  let r = 0;
  for (let o of e) {
    if (Gft(o)) continue;
    if (o.priority === "later" || o.drainOnly === true || o.screeningPending === true || o.promptSubmitted !== void 0 && n !== void 0 && n(o.promptSubmitted) || o.mode === "bash" || o.mode === "poll-event" || AO(o.value) && !o.skipSlashCommands) r++;
  }
  return r;
}
function PCs(e) {
  return `Still backgrounding after the current tool — waiting for ${e} running ${I(e, "subagent")} so the work carries over. Press ← again to skip ahead and restart ${e === 1 ? "it" : "them"} from the beginning.`;
}
function zQt(e, n) {
  return `Backgrounding cancelled — ${e}.${n === void 0 ? "" : ` ${n}`}`;
}
var nFn = zQt("you have unsent text in the input", "Send it or clear it, then press ← again."), ICs = "Still backgrounding after the current tool — a question is waiting for your answer.", Ivr = zQt("the turn was stopped");
function l(e) {
  if (e.type !== "user") return false;
  let n = e.message?.content;
  return Array.isArray(n) && n[0]?.type === "tool_result" && n.every((r) => r.type === "tool_result" || r.type === "text" || r.type === "image");
}
function g(e) {
  if (e.type === "system") return true;
  if (e.type === "assistant") {
    let n = e.message?.stop_reason;
    return n === null || n === "tool_use";
  }
  if (e.type === "user") return Em(e);
  return false;
}
function RMt(e) {
  let n = e.length, r = false;
  while (n > 0) {
    let i = e[n - 1];
    if (i.type === "user") if (Em(i)) r ||= l(i);
    else if (r && l(i)) ;
    else break;
    else if (i.type === "assistant") {
      if (!g(i)) break;
      r = false;
    }
    n--;
  }
  let o = e.slice(n).filter((i) => i.type !== "user" && i.type !== "assistant" && i.type !== "system");
  if (n + o.length === e.length) return e;
  return [...e.slice(0, n), ...o];
}
function VQt(e) {
  let n = RMt(e);
  for (let r = n.length - 1; r >= 0; r--) {
    let o = n[r].type;
    if (o === "user" || o === "assistant") return n[r].uuid;
  }
  return;
}
function OCs(e, n) {
  if (e === null || e.length < 1 || e.length > n.length) return false;
  let r = e.length - 1;
  if (n[r]?.uuid !== e.uuid) return false;
  for (let o = e.length; o < n.length; o++) {
    let i = n[o].type;
    if (i === "user" || i === "assistant") return false;
  }
  return true;
}
function rFn(e) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r.type === "user") return !Em(r);
    if (r.type === "assistant") return false;
  }
  return false;
}
function oFn(e) {
  return e.ok && e.via !== "detach";
}
function xMt(e) {
  return d({ ...e, fleetEnabled: Rv(), isRemote: Pn(), persistenceDisabled: Za() });
}
export {
  $1e,
  ICs,
  Ivr,
  OCs,
  PCs,
  Pvr,
  RMt,
  Rvr,
  VQt,
  eFn,
  nFn,
  oFn,
  rFn,
  tFn,
  xMt,
  xvr,
  zQt
};
