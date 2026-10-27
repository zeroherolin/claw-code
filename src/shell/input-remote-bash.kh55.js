// shell/input-remote-bash.kh55.js — Claude Code 2.1.310 模块 chunk-kh55tq9h.js
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { re, FS, Ze } from "../shared/chunk-j79dwkaq.js";
import { rN, EA, nAt } from "../artifacts/cowritten-artifact-html.thm2.js";
import { eo } from "../remote/chunk-7nwr416d.js";
import { g, m } from "../telemetry/chunk-wn8xtaqg.js";
import { pe } from "../shared/async-hooks.m2fg.js";
import { rst } from "../terminal/chunk-9vttrktj.js";
import { ct } from "../git/utf8-keep-bom.c49x.js";
import { mt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { Mo } from "../git/ssh-placeholder.1144.js";
import { jt, Grt } from "../shared/chunk-nfgwaxf2.js";
import { QE, wd } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
function Vxt(e, s) {
  if (!eo(s)) return d(e);
  return t(`bash spawn failure detail: ${d(e)}`, { level: "error" }), "shell command failed (detail withheld on this connection)";
}
function ngr() {
  let e = mt().defaultShell;
  if (e === "bash" && !wd()) return "powershell";
  if (e === "powershell" && !QE()) return "bash";
  return e ?? (wd() ? "bash" : "powershell");
}
var H = 262144, k8t = "Not run: this command was sent for a different folder than the one the session is in now. Ask Claude to run it instead.", w = 6e5, rgr = "[interrupted]", M = "[timed out after 10 minutes]", N = "[stopped: the command printed more than 100 MB]";
async function Hki(e) {
  let { command: s } = e, r = e.cwd ?? pe(), o = e.maxOutputChars ?? H, { file: i, args: l } = ngr() === "powershell" ? { file: "pwsh", args: ["-NoProfile", "-Command", s] } : { file: "/bin/sh", args: ["-c", s] }, n = new AbortController(), u = setTimeout((D) => D.abort(), w + 2e3, n), c = AbortSignal.any(e.abortSignal === void 0 ? [n.signal] : [e.abortSignal, n.signal]), { stdout: p, stderr: f, code: _, exitCode: F, timedOut: O, maxBufferExceeded: A, error: h } = await ct(i, l, { abortSignal: c, timeout: w, cwd: r, env: Mo(), extendEnv: false, preserveOutputOnError: true, withoutControllingTerminal: true, abortEndsProcessGroup: true, waitForExitAfterKill: true }).finally(() => clearTimeout(u)), a = O || n.signal.aborted ? "timeout" : e.abortSignal?.aborted === true ? "interrupt" : A ? "output_limit" : void 0, S = h && a === void 0 && !h.startsWith(`Command failed with exit code ${_}`) ? h : "";
  if (S) m("input_remote_bash", "spawn_failed");
  else if (a === "timeout") m("input_remote_bash", "timed_out");
  else if (a === "output_limit") m("input_remote_bash", "output_limit");
  else g("input_remote_bash", { interrupted: a === "interrupt" });
  let B = S ? Vxt(S, e.session) : "", R = a === "timeout" ? M : a === "interrupt" ? rgr : a === "output_limit" ? N : "", b = F ?? (a === "interrupt" ? 130 : a === "timeout" ? 124 : _);
  return { outputText: `<${rN}>${T(p, o, "")}</${rN}><${EA}>${T(f || B, o, R)}</${EA}><${nAt}>${b}</${nAt}>`, exitCode: b };
}
function T(e, s, r) {
  let o = r === "" ? "" : `
${r}`, i = s - o.length, l = re(e, Math.max(i, 0)), n = e.length - l.length, u = ogr(l), c = jt(u), p = n === 0 && c.length <= i ? c : jt(Grt(u, i, (f) => U(f + n)));
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
function ogr(e, s = {}) {
  if (s.keepColors !== true) return C(e);
  let r = e.match(E) ?? [];
  return e.split(E).map((o, i) => C(o) + (r[i] === void 0 ? "" : v(r[i]))).join("");
}
function C(e) {
  return rst(FS(e)).replace(/\r\n?/g, `
`).replace(/(?![\t\n])[\p{Cc}\u200B\u200E\u200F\u202A-\u202E\u2060-\u2064\u2066-\u2069\u206A-\u206F\u061C\u034F\u180E\u115F\u1160\u3164\uFFA0\uFEFF\uFFF9-\uFFFB\u{E0000}-\u{E007F}]/gu, "");
}
function x(e) {
  return e !== void 0 && /^\d{1,3}$/.test(e);
}
export {
  Hki,
  Vxt,
  k8t,
  ngr,
  ogr,
  rgr
};
