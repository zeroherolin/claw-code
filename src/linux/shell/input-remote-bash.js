// linux/shell/input-remote-bash.js — Claude Code 2.1.310（linux）模块 chunk-gbpm9sek.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { re, Nb, Ze } from "../shared/chunk-d2c47492.js";
import { Z0, bC, KAt } from "../artifacts/cowritten-artifact-html.js";
import { eo } from "../remote/chunk-8d3e7b64.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { fe } from "../shared/async-hooks.5238.js";
import { Xot } from "../terminal/chunk-3ca478a4.js";
import { ct } from "../git/utf8-keep-bom.js";
import { pt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Mo } from "../git/ssh-placeholder.js";
import { Wt, Nrt } from "../shared/chunk-dda594a8.js";
import { Jv, vd } from "../context/tool-result-clearing-after-idle-server-report.js";
function Axt(e, s) {
  if (!eo(s)) return d(e);
  return t(`bash spawn failure detail: ${d(e)}`, { level: "error" }), "shell command failed (detail withheld on this connection)";
}
function wmr() {
  let e = pt().defaultShell;
  if (e === "bash" && !vd()) return "powershell";
  if (e === "powershell" && !Jv()) return "bash";
  return e ?? (vd() ? "bash" : "powershell");
}
var H = 262144, J3t = "Not run: this command was sent for a different folder than the one the session is in now. Ask Claude to run it instead.", w = 6e5, vmr = "[interrupted]", M = "[timed out after 10 minutes]", N = "[stopped: the command printed more than 100 MB]";
async function WEi(e) {
  let { command: s } = e, r = e.cwd ?? fe(), o = e.maxOutputChars ?? H, { file: i, args: l } = wmr() === "powershell" ? { file: "pwsh", args: ["-NoProfile", "-Command", s] } : { file: "/bin/sh", args: ["-c", s] }, n = new AbortController(), u = setTimeout((D) => D.abort(), w + 2e3, n), c = AbortSignal.any(e.abortSignal === void 0 ? [n.signal] : [e.abortSignal, n.signal]), { stdout: p, stderr: f, code: _, exitCode: F, timedOut: O, maxBufferExceeded: A, error: h } = await ct(i, l, { abortSignal: c, timeout: w, cwd: r, env: Mo(), extendEnv: false, preserveOutputOnError: true, withoutControllingTerminal: true, abortEndsProcessGroup: true, waitForExitAfterKill: true }).finally(() => clearTimeout(u)), a = O || n.signal.aborted ? "timeout" : e.abortSignal?.aborted === true ? "interrupt" : A ? "output_limit" : void 0, S = h && a === void 0 && !h.startsWith(`Command failed with exit code ${_}`) ? h : "";
  if (S) m("input_remote_bash", "spawn_failed");
  else if (a === "timeout") m("input_remote_bash", "timed_out");
  else if (a === "output_limit") m("input_remote_bash", "output_limit");
  else g("input_remote_bash", { interrupted: a === "interrupt" });
  let B = S ? Axt(S, e.session) : "", R = a === "timeout" ? M : a === "interrupt" ? vmr : a === "output_limit" ? N : "", b = F ?? (a === "interrupt" ? 130 : a === "timeout" ? 124 : _);
  return { outputText: `<${Z0}>${T(p, o, "")}</${Z0}><${bC}>${T(f || B, o, R)}</${bC}><${KAt}>${b}</${KAt}>`, exitCode: b };
}
function T(e, s, r) {
  let o = r === "" ? "" : `
${r}`, i = s - o.length, l = re(e, Math.max(i, 0)), n = e.length - l.length, u = Emr(l), c = Wt(u), p = n === 0 && c.length <= i ? c : Wt(Nrt(u, i, (f) => U(f + n)));
  return `${p}${p === "" ? r : o}`;
}
function U(e) {
  return `
[output truncated: ${e.toLocaleString("en-US")} more characters not shown]`;
}
var E = /\x1b\[[0-9;:]*m/g;
function v(e) {
  let s = [], r = e.slice(2, -1).split(";");
  for (let o = 0; o < r.length; o++) {
    let i = r[o], l = Ze(i, ":"), n = l === "" ? 0 : Number(l);
    if (n === 38 || n === 48 || n === 58) {
      let u = i.includes(":") ? i.split(":") : r[o + 1] === "5" ? r.slice(o, o + 3) : r[o + 1] === "2" ? r.slice(o, o + 5) : [i];
      if (!i.includes(":")) o += u.length - 1;
      if (n !== 38) continue;
      if (u[1] === "5" && u.length === 3 && x(u[2])) s.push("38", "5", u[2]);
      else if (u[1] === "2") {
        let c = u.slice(-3);
        if ((u.length === 5 || u.length === 6) && c.every(x)) s.push("38", "2", ...c);
      }
      continue;
    }
    if (n === 0 || n === 1 || n === 2 || n === 3 || n === 4 || n === 9 || n >= 21 && n <= 24 || n === 29 || n >= 30 && n <= 37 || n === 39 || n >= 90 && n <= 97) s.push(String(n));
  }
  return s.length === 0 ? "" : `\x1B[${s.join(";")}m`;
}
function Emr(e, s = {}) {
  if (s.keepColors !== true) return C(e);
  let r = e.match(E) ?? [];
  return e.split(E).map((o, i) => C(o) + (r[i] === void 0 ? "" : v(r[i]))).join("");
}
function C(e) {
  return Xot(Nb(e)).replace(/\r\n?/g, `
`).replace(/(?![\t\n])[\p{Cc}\u200B\u200E\u200F\u202A-\u202E\u2060-\u2064\u2066-\u2069\u206A-\u206F\u061C\u034F\u180E\u115F\u1160\u3164\uFFA0\uFEFF\uFFF9-\uFFFB\u{E0000}-\u{E007F}]/gu, "");
}
function x(e) {
  return e !== void 0 && /^\d{1,3}$/.test(e);
}
export {
  Axt,
  Emr,
  J3t,
  WEi,
  vmr,
  wmr
};
