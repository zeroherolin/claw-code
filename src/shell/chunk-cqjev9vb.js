// shell/chunk-cqjev9vb.js — Claude Code 2.1.310 模块 chunk-cqjev9vb.js
import { v } from "../telemetry/anthropic-workspace-id.36ys.js";
import { Pe } from "../shared/chunk-3kevgx4j.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { i } from "../shared/environment.9a41.js";
import { ct } from "../git/utf8-keep-bom.c49x.js";
import { spawn as m } from "child_process";
import { lstat as g } from "fs/promises";
import { dirname as C, win32 as h } from "path";
var w = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths", f = 1e4, A = 5e3;
function P() {
  if (!i.LOCALAPPDATA) return;
  let e = i.LOCALAPPDATA.replace(/[\\/]+$/, "");
  return h.normalize(`${e}\\Microsoft\\WindowsApps\\`).toLowerCase();
}
function V2() {
  return i.SYSTEMROOT || i.SystemRoot || "C:\\Windows";
}
function S(e) {
  for (let s of e.split(/\r?\n/)) {
    let o = s.match(/^\s+.+?\s+REG_(?:EXPAND_)?SZ\s+(.+)$/i);
    if (o && o[1]) {
      let r = o[1].trim();
      if (r.length >= 2 && r.startsWith('"') && r.endsWith('"')) r = r.slice(1, -1);
      return r;
    }
  }
  return null;
}
function E(e, s = process.env) {
  let o = /* @__PURE__ */ new Map();
  for (let [r, n] of Object.entries(s)) if (n !== void 0) o.set(r.toLowerCase(), n);
  return e.replace(/%([^%]+)%/g, (r, n) => o.get(n.toLowerCase()) ?? r);
}
async function Jqs(e, s = A) {
  let o = V2(), r = `${o}\\System32\\reg.exe`;
  for (let n of ["HKCU", "HKLM"]) {
    let u = await ct(r, ["query", `${n}\\${w}\\${e}`, "/ve"], { timeout: f, cwd: o });
    if (u.code !== 0) {
      if (u.exitCode === void 0) t(`[Claude in Chrome] ${n} App Paths query for ${e} did not run to completion: ${u.error ?? `killed at the ${f}ms bound, or reg.exe failed to spawn`}`);
      continue;
    }
    let p = S(u.stdout);
    if (!p) {
      t(`[Claude in Chrome] ${n} App Paths value for ${e} had no parseable string default; skipping`);
      continue;
    }
    let c = E(p);
    if (!/^(?:[a-zA-Z]:[\\/]|\\\\)/.test(c)) {
      t(`[Claude in Chrome] Skipping ${n} App Paths candidate for ${e}: not a fully qualified path`);
      continue;
    }
    try {
      let d = g(c);
      d.catch(() => {
      });
      let a = await Pe(d, s);
      if (a === void 0) {
        t(`[Claude in Chrome] Skipping ${n} App Paths candidate for ${e}: existence check exceeded ${s}ms`);
        continue;
      }
      if (!a.isDirectory()) return t(`[Claude in Chrome] Resolved ${e} via ${n} App Paths`), c;
      t(`[Claude in Chrome] Skipping ${n} App Paths candidate for ${e}: resolves to a directory`);
    } catch (d) {
      let a = v(d), l = P();
      if (l !== void 0 && h.normalize(c).toLowerCase().startsWith(l) && a !== "ENOENT" && a !== "ENOTDIR") return t(`[Claude in Chrome] Resolved ${e} via ${n} App Paths (stat-odd: ${a ?? String(d)})`), c;
      t(`[Claude in Chrome] Skipping ${n} App Paths candidate for ${e}: ${a ?? String(d)}`);
    }
  }
  return null;
}
function Qqs(e, s) {
  return new Promise((o) => {
    let r;
    try {
      r = m(e, s, { cwd: C(e), detached: true, stdio: "ignore", windowsHide: false });
    } catch (n) {
      t(`[Claude in Chrome] Detached launch of ${e} failed: ${v(n) ?? String(n)}`, { level: "error" }), o(false);
      return;
    }
    r.once("spawn", () => o(true)), r.once("error", (n) => {
      t(`[Claude in Chrome] Detached launch of ${e} failed: ${v(n) ?? n.message}`, { level: "error" }), o(false);
    }), r.unref();
  });
}
export {
  Jqs,
  Qqs,
  V2
};
