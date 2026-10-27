// permissions/classifier-transcript-too-long.8zvz.js — Claude Code 2.1.310 模块 chunk-8zvzpa8h.js
import { pW } from "../shared/chunk-81mpzfkq.js";
import { tXr, nXr, kCn, bAt } from "../context/not-admin-owned.ersa.js";
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
var Lot = x;
var C = 1 / 0, I = !(bAt && 1 / kCn(new bAt([, -0]))[1] == C) ? Lot : function(e) {
  return new bAt(e);
}, P = I;
var N = 200;
function T(e, o, s) {
  var n = -1, r = _, i = e.length, u = true, l = [], t = l;
  if (s) u = false, r = k;
  else if (i >= N) {
    var p = o ? null : P(e);
    if (p) return kCn(p);
    u = false, r = nXr, t = new tXr();
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
var YKt = T;
function M(e, o) {
  return e && e.length ? YKt(e, pW(o, 2)) : [];
}
var ri = M;
var BL = ["acceptEdits", "auto", "bypassPermissions", "default", "dontAsk", "plan"], S = [...BL], iC = S, b1 = "manual";
function $y(e) {
  return e === "manual" ? "default" : e;
}
function ph(e) {
  let o = $y(e);
  return S.find((s) => s === o);
}
var YSe = `Cannot set permission mode: must be one of ${BL.join(", ")}`, XKt = 32, jEn = /^[A-Za-z0-9_-]{1,64}$/, Not = { dangerousRemoval: { bypassImmune: true, classifierRouted: true, autoModeDeny: true, hostPersonOnly: false, localProjectionOnly: false, servedUnplaceable: false }, backgroundOperator: { bypassImmune: false, classifierRouted: true, autoModeDeny: false, hostPersonOnly: false, localProjectionOnly: false, servedUnplaceable: false }, suspiciousWindowsPath: { bypassImmune: false, classifierRouted: true, autoModeDeny: false, hostPersonOnly: false, localProjectionOnly: false, servedUnplaceable: false }, isolatePeerMachines: { bypassImmune: true, classifierRouted: false, autoModeDeny: false, hostPersonOnly: false, localProjectionOnly: false, servedUnplaceable: false }, restrictedMode: { bypassImmune: true, classifierRouted: false, autoModeDeny: false, hostPersonOnly: false, localProjectionOnly: false, servedUnplaceable: false }, outsideReadsBlocked: { bypassImmune: true, classifierRouted: false, autoModeDeny: false, hostPersonOnly: false, localProjectionOnly: false, servedUnplaceable: false }, claudeSettingsFile: { bypassImmune: false, classifierRouted: false, autoModeDeny: false, hostPersonOnly: true, localProjectionOnly: false, servedUnplaceable: false }, internalHardDeny: { bypassImmune: false, classifierRouted: false, autoModeDeny: false, hostPersonOnly: false, localProjectionOnly: false, servedUnplaceable: true }, unfinishedCheck: { bypassImmune: true, classifierRouted: false, autoModeDeny: false, hostPersonOnly: true, localProjectionOnly: false, servedUnplaceable: false }, ...{}, ...{} };
function gK(e) {
  return d(e).some((o) => Not[o]?.bypassImmune === true);
}
function WEn(e) {
  return d(e).some((o) => Not[o]?.servedUnplaceable === true);
}
function d(e) {
  return [...e.circuitBreaker !== void 0 ? [e.circuitBreaker] : [], ...e.also ?? []];
}
function jL(e) {
  return e.circuitBreaker !== void 0 && Not[e.circuitBreaker]?.classifierRouted === true;
}
function ixe(e) {
  return e.circuitBreaker !== void 0 && Not[e.circuitBreaker]?.autoModeDeny === true;
}
function cz(e) {
  return d(e).some((o) => Not[o]?.hostPersonOnly === true);
}
function uJo(e) {
  return d(e).some((o) => Not[o]?.localProjectionOnly === true);
}
function pJo(e) {
  return e.decideLocation === "pre-ask";
}
function fqe(e, o) {
  return e.behavior !== "allow" && e !== o && !mqe(e);
}
function mqe(e) {
  return e.behavior === "deny" && e.invalidInput === true;
}
var jCt = ["rule", "mode", "subcommandResults", "permissionPromptTool", "hook", "asyncAgent", "sandboxOverride", "workingDir", "safetyCheck", "classifier", "other"];
var Fot = "Auto-allowed with sandbox (autoAllowBashIfSandboxed enabled)", XSe = "Read-only command is allowed", GEn = "Command is read-only and safe to execute", zEn = "All pipeline commands are individually allowed, some only by the read-only allowlist", VEn = "Auto mode held this command for the server-side classifier to review", car = "Auto mode reviews this action before it runs in the cloud environment", fJo = "Path is outside allowed working directories", KEn = "--restricted: path outside the working directory", MH = "Reads outside the working directories are blocked (permissions.blockReadsOutsideWorkingDirectories). Add the directory with /add-dir, or remove that setting.", uar = "permission check needs a working directory; the session has none", $ot = "permission check needs a config or temp path; the session has none", JKt = /* @__PURE__ */ new Map([["python", /* @__PURE__ */ new Set(["-c"])], ["node", /* @__PURE__ */ new Set(["-e", "--eval", "-p", "--print"])], ["nodejs", /* @__PURE__ */ new Set(["-e", "--eval", "-p", "--print"])], ["bun", /* @__PURE__ */ new Set(["-e", "--eval", "-p", "--print"])], ["perl", /* @__PURE__ */ new Set(["-e", "-E"])], ["ruby", /* @__PURE__ */ new Set(["-e"])], ["php", /* @__PURE__ */ new Set(["-r"])], ["bash", /* @__PURE__ */ new Set(["-c"])], ["sh", /* @__PURE__ */ new Set(["-c"])], ["zsh", /* @__PURE__ */ new Set(["-c"])], ["dash", /* @__PURE__ */ new Set(["-c"])], ["ksh", /* @__PURE__ */ new Set(["-c"])], ["lua", /* @__PURE__ */ new Set(["-e"])], ["luajit", /* @__PURE__ */ new Set(["-e"])], ["tsx", /* @__PURE__ */ new Set(["-e", "--eval", "-p", "--print"])], ["deno", /* @__PURE__ */ new Set(["eval"])], ["Rscript", /* @__PURE__ */ new Set(["-e"])], ["julia", /* @__PURE__ */ new Set(["-e", "-E"])], ["osascript", /* @__PURE__ */ new Set(["-e"])]]);
function WL(e) {
  return e?.type === "safetyCheck" && e.circuitBreaker === "outsideReadsBlocked";
}
function Uot(e, o) {
  return e?.type === "sandboxOverride" && o.blockReadsOutsideWorkingDirectories === true;
}
function xS(e) {
  let o = `${e} names a path that is computed at run time, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)`;
  return { behavior: "ask", message: o, decisionReason: { type: "safetyCheck", reason: o, classifierApprovable: false, circuitBreaker: "outsideReadsBlocked" } };
}
function hK(e) {
  let o = `${e}; under the read block (permissions.blockReadsOutsideWorkingDirectories) a command the shell parser cannot analyze asks the person`;
  return { behavior: "ask", message: o, decisionReason: { type: "safetyCheck", reason: o, classifierApprovable: false, circuitBreaker: "outsideReadsBlocked" }, suggestions: [] };
}
function qEn() {
  return { behavior: "ask", message: "This sed script is not on the allowlist and can read or write any file, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)", decisionReason: { type: "safetyCheck", reason: "This sed script is not on the allowlist and can read or write any file, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)", classifierApprovable: false, circuitBreaker: "outsideReadsBlocked" } };
}
var QKt = "bashCommandClamp: no clamp rule matches this command", YEn = "bashCommandClamp fail-closed: permission check crashed", gqe = "Classifier unavailable", par = "Auto mode unavailable — stopped after repeated responses with no safety verdict", far = "Auto mode could not evaluate this action and is blocking it for safety", Bot = "Auto mode classifier transcript exceeded context window — falling back to manual approval (try /compact to reduce conversation size)", mar = "Auto mode classifier transcript exceeded context window; will try to compact the conversation before the next request", B = /* @__PURE__ */ new Set([gqe, par, Bot, mar]);
function mJo(e) {
  return B.has(e) ? `Blocked: ${e}` : e;
}
function gar(e) {
  if (e.reason === gqe || e.reason === par) return "unavailable";
  return e.noVerdict ? "no_verdict" : "block";
}
var WCt = "Memory is paused for this session; only the user can turn it back on.", har = "memory access blocked by /pause-memory", yar = ["classifier_transcript_too_long", "outside_reads_blocked", "memory_paused"];
function Mse(e) {
  switch (e?.type) {
    case "classifier":
      return e.noVerdict === true && (e.reason === Bot || e.reason === mar) ? "classifier_transcript_too_long" : void 0;
    case "other":
    case "safetyCheck":
      switch (e.reason) {
        case Bot:
          return "classifier_transcript_too_long";
        case MH:
          return "outside_reads_blocked";
        case WCt:
        case har:
          return "memory_paused";
        default:
          return;
      }
    case "subcommandResults": {
      let o;
      for (let s of e.reasons.values()) {
        let n = Mse(s.decisionReason);
        if (n === "outside_reads_blocked") return n;
        o ??= n;
      }
      return o;
    }
    default:
      return;
  }
}
var _9r = "ask rule on hook-rewritten input", XEn = { type: "asyncAgent", reason: _9r }, S9r = { type: "asyncAgent", reason: "tool requires user interaction; no prompt available in headless mode" }, b9r = "no approval surface in this session; permission request denied automatically", gJo = { type: "asyncAgent", reason: b9r };
function ZKt(e) {
  return { ...e.decisionReason !== void 0 && { decisionReason: e.decisionReason }, ...e.matchedAskRule !== void 0 && { matchedAskRule: e.matchedAskRule } };
}
var hJo = { type: "other", reason: "MCP tool requires user interaction; not supported via --permission-prompt-tool" }, w9r = { type: "other", reason: "This MCP server's name starts like a claude.ai connector's, so --permission-prompt-tool cannot approve its tools. To use them here, the server needs another name." }, jot = "tool permission stream closed before response received", hqe = "canUseTool returned a schema-invalid permission result", mFe = "tool permission request failed", JEn = "tool permission request aborted", yJo = { type: "other", reason: jot }, Wot = { type: "other", reason: hqe }, E9r = "permission prompt tool no longer connected", _Jo = { type: "other", reason: E9r }, v9r = "permission prompt tool is on server remote-browser under its mode floor", SJo = { type: "other", reason: v9r }, eqt = { type: "other", reason: mFe }, Got = { type: "other", reason: JEn };
export {
  $ot,
  $y,
  BL,
  Bot,
  E9r,
  Fot,
  GEn,
  Got,
  JEn,
  JKt,
  KEn,
  Lot,
  MH,
  Mse,
  Not,
  QKt,
  S9r,
  SJo,
  Uot,
  VEn,
  WCt,
  WEn,
  WL,
  Wot,
  XEn,
  XKt,
  XSe,
  YEn,
  YKt,
  YSe,
  ZKt,
  _9r,
  _Jo,
  b1,
  b9r,
  car,
  cz,
  eqt,
  fJo,
  far,
  fqe,
  gJo,
  gK,
  gar,
  gqe,
  hJo,
  hK,
  har,
  hqe,
  iC,
  ixe,
  jCt,
  jEn,
  jL,
  jot,
  mFe,
  mJo,
  mar,
  mqe,
  pJo,
  par,
  ph,
  qEn,
  ri,
  uJo,
  uar,
  v9r,
  w9r,
  xS,
  yJo,
  yar,
  zEn
};
