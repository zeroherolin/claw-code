// linux/permissions/classifier-transcript-too-long.js — Claude Code 2.1.310（linux）模块 chunk-63a6mqbs.js
import { rW } from "../shared/chunk-1f805b50.js";
import { P9r, I9r, aTn, cCt } from "../context/not-admin-owned.js";
function A(e, o, s, n) {
  var r = e.length, i = s + (n ? 1 : -1);
  while (n ? i-- : ++i < r) if (o(e[i], i, e)) return i;
  return -1;
}
var y = A;
function h(e) {
  return e !== e;
}
var R = h;
function g(e, o, s) {
  var n = s - 1, r = e.length;
  while (++n < r) if (e[n] === o) return n;
  return -1;
}
var f = g;
function b(e, o, s) {
  return o === o ? f(e, o, s) : y(e, R, s);
}
var O = b;
function E(e, o) {
  var s = e == null ? 0 : e.length;
  return !!s && O(e, o, 0) > -1;
}
var _ = E;
function D(e, o, s) {
  var n = -1, r = e == null ? 0 : e.length;
  while (++n < r) if (s(o, e[n])) return true;
  return false;
}
var k = D;
function x() {
}
var xot = x;
var C = 1 / 0, I = !(cCt && 1 / aTn(new cCt([, -0]))[1] == C) ? xot : function(e) {
  return new cCt(e);
}, P = I;
var N = 200;
function T(e, o, s) {
  var n = -1, r = _, i = e.length, u = true, l = [], t = l;
  if (s) u = false, r = k;
  else if (i >= N) {
    var p = o ? null : P(e);
    if (p) return aTn(p);
    u = false, r = I9r, t = new P9r();
  } else t = o ? [] : l;
  e: while (++n < i) {
    var a = e[n], c = o ? o(a) : a;
    if (a = s || a !== 0 ? a : 0, u && c === c) {
      var m = t.length;
      while (m--) if (t[m] === c) continue e;
      if (o) t.push(c);
      l.push(a);
    } else if (!r(t, c, s)) {
      if (t !== l) t.push(c);
      l.push(a);
    }
  }
  return l;
}
var Lqt = T;
function M(e, o) {
  return e && e.length ? Lqt(e, rW(o, 2)) : [];
}
var ri = M;
var N0 = ["acceptEdits", "auto", "bypassPermissions", "default", "dontAsk", "plan"], S = [...N0], oT = S, gB = "manual";
function Ny(e) {
  return e === "manual" ? "default" : e;
}
function fh(e) {
  let o = Ny(e);
  return S.find((s) => s === o);
}
var Wbe = `Cannot set permission mode: must be one of ${N0.join(", ")}`, Nqt = 32, Avn = /^[A-Za-z0-9_-]{1,64}$/, Pot = { dangerousRemoval: { bypassImmune: true, classifierRouted: true, autoModeDeny: true, hostPersonOnly: false, localProjectionOnly: false, servedUnplaceable: false }, backgroundOperator: { bypassImmune: false, classifierRouted: true, autoModeDeny: false, hostPersonOnly: false, localProjectionOnly: false, servedUnplaceable: false }, suspiciousWindowsPath: { bypassImmune: false, classifierRouted: true, autoModeDeny: false, hostPersonOnly: false, localProjectionOnly: false, servedUnplaceable: false }, isolatePeerMachines: { bypassImmune: true, classifierRouted: false, autoModeDeny: false, hostPersonOnly: false, localProjectionOnly: false, servedUnplaceable: false }, restrictedMode: { bypassImmune: true, classifierRouted: false, autoModeDeny: false, hostPersonOnly: false, localProjectionOnly: false, servedUnplaceable: false }, outsideReadsBlocked: { bypassImmune: true, classifierRouted: false, autoModeDeny: false, hostPersonOnly: false, localProjectionOnly: false, servedUnplaceable: false }, claudeSettingsFile: { bypassImmune: false, classifierRouted: false, autoModeDeny: false, hostPersonOnly: true, localProjectionOnly: false, servedUnplaceable: false }, internalHardDeny: { bypassImmune: false, classifierRouted: false, autoModeDeny: false, hostPersonOnly: false, localProjectionOnly: false, servedUnplaceable: true }, unfinishedCheck: { bypassImmune: true, classifierRouted: false, autoModeDeny: false, hostPersonOnly: true, localProjectionOnly: false, servedUnplaceable: false }, ...{}, ...{} };
function sq(e) {
  return d(e).some((o) => Pot[o]?.bypassImmune === true);
}
function Cvn(e) {
  return d(e).some((o) => Pot[o]?.servedUnplaceable === true);
}
function d(e) {
  return [...e.circuitBreaker !== void 0 ? [e.circuitBreaker] : [], ...e.also ?? []];
}
function $0(e) {
  return e.circuitBreaker !== void 0 && Pot[e.circuitBreaker]?.classifierRouted === true;
}
function txe(e) {
  return e.circuitBreaker !== void 0 && Pot[e.circuitBreaker]?.autoModeDeny === true;
}
function t2(e) {
  return d(e).some((o) => Pot[o]?.hostPersonOnly === true);
}
function DJo(e) {
  return d(e).some((o) => Pot[o]?.localProjectionOnly === true);
}
function HJo(e) {
  return e.decideLocation === "pre-ask";
}
function s4e(e, o) {
  return e.behavior !== "allow" && e !== o && !i4e(e);
}
function i4e(e) {
  return e.behavior === "deny" && e.invalidInput === true;
}
var DTt = ["rule", "mode", "subcommandResults", "permissionPromptTool", "hook", "asyncAgent", "sandboxOverride", "workingDir", "safetyCheck", "classifier", "other"];
var Iot = "Auto-allowed with sandbox (autoAllowBashIfSandboxed enabled)", Gbe = "Read-only command is allowed", Rvn = "Command is read-only and safe to execute", xvn = "All pipeline commands are individually allowed, some only by the read-only allowlist", Pvn = "Auto mode held this command for the server-side classifier to review", Kir = "Auto mode reviews this action before it runs in the cloud environment", LJo = "Path is outside allowed working directories", Ivn = "--restricted: path outside the working directory", PH = "Reads outside the working directories are blocked (permissions.blockReadsOutsideWorkingDirectories). Add the directory with /add-dir, or remove that setting.", Vir = "permission check needs a working directory; the session has none", Oot = "permission check needs a config or temp path; the session has none", $qt = /* @__PURE__ */ new Map([["python", /* @__PURE__ */ new Set(["-c"])], ["node", /* @__PURE__ */ new Set(["-e", "--eval", "-p", "--print"])], ["nodejs", /* @__PURE__ */ new Set(["-e", "--eval", "-p", "--print"])], ["bun", /* @__PURE__ */ new Set(["-e", "--eval", "-p", "--print"])], ["perl", /* @__PURE__ */ new Set(["-e", "-E"])], ["ruby", /* @__PURE__ */ new Set(["-e"])], ["php", /* @__PURE__ */ new Set(["-r"])], ["bash", /* @__PURE__ */ new Set(["-c"])], ["sh", /* @__PURE__ */ new Set(["-c"])], ["zsh", /* @__PURE__ */ new Set(["-c"])], ["dash", /* @__PURE__ */ new Set(["-c"])], ["ksh", /* @__PURE__ */ new Set(["-c"])], ["lua", /* @__PURE__ */ new Set(["-e"])], ["luajit", /* @__PURE__ */ new Set(["-e"])], ["tsx", /* @__PURE__ */ new Set(["-e", "--eval", "-p", "--print"])], ["deno", /* @__PURE__ */ new Set(["eval"])], ["Rscript", /* @__PURE__ */ new Set(["-e"])], ["julia", /* @__PURE__ */ new Set(["-e", "-E"])], ["osascript", /* @__PURE__ */ new Set(["-e"])]]);
function F0(e) {
  return e?.type === "safetyCheck" && e.circuitBreaker === "outsideReadsBlocked";
}
function Mot(e, o) {
  return e?.type === "sandboxOverride" && o.blockReadsOutsideWorkingDirectories === true;
}
function Rb(e) {
  let o = `${e} names a path that is computed at run time, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)`;
  return { behavior: "ask", message: o, decisionReason: { type: "safetyCheck", reason: o, classifierApprovable: false, circuitBreaker: "outsideReadsBlocked" } };
}
function iq(e) {
  let o = `${e}; under the read block (permissions.blockReadsOutsideWorkingDirectories) a command the shell parser cannot analyze asks the person`;
  return { behavior: "ask", message: o, decisionReason: { type: "safetyCheck", reason: o, classifierApprovable: false, circuitBreaker: "outsideReadsBlocked" }, suggestions: [] };
}
function Ovn() {
  return { behavior: "ask", message: "This sed script is not on the allowlist and can read or write any file, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)", decisionReason: { type: "safetyCheck", reason: "This sed script is not on the allowlist and can read or write any file, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)", classifierApprovable: false, circuitBreaker: "outsideReadsBlocked" } };
}
var Fqt = "bashCommandClamp: no clamp rule matches this command", Mvn = "bashCommandClamp fail-closed: permission check crashed", a4e = "Classifier unavailable", qir = "Auto mode unavailable — stopped after repeated responses with no safety verdict", Yir = "Auto mode could not evaluate this action and is blocking it for safety", Dot = "Auto mode classifier transcript exceeded context window — falling back to manual approval (try /compact to reduce conversation size)", Xir = "Auto mode classifier transcript exceeded context window; will try to compact the conversation before the next request", B = /* @__PURE__ */ new Set([a4e, qir, Dot, Xir]);
function NJo(e) {
  return B.has(e) ? `Blocked: ${e}` : e;
}
function Jir(e) {
  if (e.reason === a4e || e.reason === qir) return "unavailable";
  return e.noVerdict ? "no_verdict" : "block";
}
var HTt = "Memory is paused for this session; only the user can turn it back on.", Qir = "memory access blocked by /pause-memory", Zir = ["classifier_transcript_too_long", "outside_reads_blocked", "memory_paused"];
function Tse(e) {
  switch (e?.type) {
    case "classifier":
      return e.noVerdict === true && (e.reason === Dot || e.reason === Xir) ? "classifier_transcript_too_long" : void 0;
    case "other":
    case "safetyCheck":
      switch (e.reason) {
        case Dot:
          return "classifier_transcript_too_long";
        case PH:
          return "outside_reads_blocked";
        case HTt:
        case Qir:
          return "memory_paused";
        default:
          return;
      }
    case "subcommandResults": {
      let o;
      for (let s of e.reasons.values()) {
        let n = Tse(s.decisionReason);
        if (n === "outside_reads_blocked") return n;
        o ??= n;
      }
      return o;
    }
    default:
      return;
  }
}
var q6r = "ask rule on hook-rewritten input", Dvn = { type: "asyncAgent", reason: q6r }, Y6r = { type: "asyncAgent", reason: "tool requires user interaction; no prompt available in headless mode" }, X6r = "no approval surface in this session; permission request denied automatically", $Jo = { type: "asyncAgent", reason: X6r };
function Uqt(e) {
  return { ...e.decisionReason !== void 0 && { decisionReason: e.decisionReason }, ...e.matchedAskRule !== void 0 && { matchedAskRule: e.matchedAskRule } };
}
var FJo = { type: "other", reason: "MCP tool requires user interaction; not supported via --permission-prompt-tool" }, J6r = { type: "other", reason: "This MCP server's name starts like a claude.ai connector's, so --permission-prompt-tool cannot approve its tools. To use them here, the server needs another name." }, Hot = "tool permission stream closed before response received", l4e = "canUseTool returned a schema-invalid permission result", l$e = "tool permission request failed", Hvn = "tool permission request aborted", UJo = { type: "other", reason: Hot }, Lot = { type: "other", reason: l4e }, Q6r = "permission prompt tool no longer connected", BJo = { type: "other", reason: Q6r }, Z6r = "permission prompt tool is on server remote-browser under its mode floor", jJo = { type: "other", reason: Z6r }, Bqt = { type: "other", reason: l$e }, Not = { type: "other", reason: Hvn };
export {
  $0,
  $Jo,
  $qt,
  Avn,
  BJo,
  Bqt,
  Cvn,
  DJo,
  DTt,
  Dot,
  Dvn,
  F0,
  FJo,
  Fqt,
  Gbe,
  HJo,
  HTt,
  Hot,
  Hvn,
  Iot,
  Ivn,
  J6r,
  Jir,
  Kir,
  LJo,
  Lot,
  Lqt,
  Mot,
  Mvn,
  N0,
  NJo,
  Not,
  Nqt,
  Ny,
  Oot,
  Ovn,
  PH,
  Pot,
  Pvn,
  Q6r,
  Qir,
  Rb,
  Rvn,
  Tse,
  UJo,
  Uqt,
  Vir,
  Wbe,
  X6r,
  Xir,
  Y6r,
  Yir,
  Z6r,
  Zir,
  a4e,
  fh,
  gB,
  i4e,
  iq,
  jJo,
  l$e,
  l4e,
  oT,
  q6r,
  qir,
  ri,
  s4e,
  sq,
  t2,
  txe,
  xot,
  xvn
};
