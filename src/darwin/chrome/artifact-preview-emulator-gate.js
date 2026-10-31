// darwin/chrome/artifact-preview-emulator-gate.js — Claude Code 2.1.310（darwin）模块 chunk-vx9bbq5y.js
import { k } from "../settings/global-config-and-gates.js";
import { L } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { d, v, Us } from "../telemetry/anthropic-workspace-id.js";
import { cl } from "../fs/node-modules.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { nr } from "../remote/moved-directory.js";
import { Lo } from "../agents/chunk-44729602.js";
import { stat as C } from "fs/promises";
import { homedir as E } from "os";
import { join as s } from "path";
function B() {
  switch ("darwin") {
    case "darwin":
      return ["Google Chrome.app/Contents/MacOS/Google Chrome", "Chromium.app/Contents/MacOS/Chromium", "Microsoft Edge.app/Contents/MacOS/Microsoft Edge", "Brave Browser.app/Contents/MacOS/Brave Browser"].flatMap((r) => [s("/Applications", r), s(E(), "Applications", r)]);
    case "win32":
      return ["C:\\Program Files", "C:\\Program Files (x86)", s(E(), "AppData", "Local")].flatMap((r) => [s(r, "Google", "Chrome", "Application", "chrome.exe"), s(r, "Chromium", "Application", "chrome.exe"), s(r, "Microsoft", "Edge", "Application", "msedge.exe")]);
    default:
      return ["/usr/bin/google-chrome-stable", "/usr/bin/google-chrome", "/usr/bin/chromium-browser", "/usr/bin/chromium", "/usr/local/bin/chromium", "/opt/google/chrome/chrome"];
  }
}
async function T(e, r) {
  try {
    let o = await C(e);
    return o.isFile() && (o.mode & 73) !== 0;
  } catch (o) {
    if (r && !Us(o)) throw o;
    return false;
  }
}
async function _(e) {
  let r = [];
  for (let o of B()) {
    if (cl(o)) continue;
    if (await T(o, e?.strict === true)) r.push(o);
  }
  return r;
}
import { lstatSync as O } from "fs";
import { isAbsolute as R, join as p, relative as S, sep as h } from "path";
var x = "/mnt/skills", y = "examples/artifact-emulator", xbo = "scripts/bootstrap.py", D = "tengu_cobalt_plinth_hornbeam", f = { base: x, ownerUid: 0 };
function _Bn() {
  return p(f.base, y);
}
function Pbo(e) {
  let r = S(f.base, e);
  if (r === "" || r === ".." || r.startsWith(`..${h}`) || R(r)) return "outside_mount";
  let o = r.split(h), m = f.base;
  for (let l = 0; l <= o.length; l++) {
    if (l > 0) m = p(m, o[l - 1]);
    let n;
    try {
      n = O(m);
    } catch (A) {
      let w = v(A);
      return w === "ENOENT" || w === "ENOTDIR" ? "missing" : "unreadable";
    }
    if (n.isSymbolicLink()) return "link";
    if (l === o.length ? !n.isFile() : !n.isDirectory()) return "wrong_type";
    if (n.uid !== f.ownerUid) return "wrong_owner";
    if ((n.mode & 18) !== 0) return "writable";
  }
  return;
}
function M() {
  if (!nr()) return "not_hosted";
  return Pbo(p(_Bn(), xbo));
}
function P() {
  return U().on;
}
function U() {
  let e = Lo();
  if (e.artifactPreviewEmulator === void 0) e.artifactPreviewEmulator = I(), a("tengu_artifact_preview_emulator_gate", { on: e.artifactPreviewEmulator.on, reason: c(e.artifactPreviewEmulator.reason) });
  return e.artifactPreviewEmulator;
}
function I() {
  let e = i.CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR;
  if (e === false) return { on: false, reason: "pinned_off" };
  let r;
  try {
    r = M();
  } catch (o) {
    t(`Artifact preview: could not check the emulator skill's files, so the emulator stays off: ${d(o)}`), r = "unreadable";
  }
  if (r !== void 0) return { on: false, reason: r };
  if (e === true) return { on: true, reason: "pinned_on" };
  return k(D, false) === true ? { on: true, reason: "flag_on" } : { on: false, reason: "flag_off" };
}
var u = null;
function g() {
  return u !== null && true;
}
function ROe() {
  if (i.CLAUDE_CODE_ARTIFACT_PREVIEW === false) return false;
  if (N$() === "emulator") return true;
  if (!V()) return false;
  if (i.CLAUDE_CODE_ARTIFACT_PREVIEW === true) return true;
  return W() !== "none";
}
var F = { on: false };
function N$() {
  let e = Lo();
  return e.artifactPreviewEngine ??= i.CLAUDE_CODE_ARTIFACT_PREVIEW !== false && F.on && H() ? "emulator" : "local_chrome", e.artifactPreviewEngine;
}
function H() {
  return i.CLAUDE_CODE_REMOTE === true && P();
}
function V() {
  if (i.CLAUDE_CODE_REMOTE || !g()) return false;
  return i.CLAUDE_CODE_ARTIFACT_PREVIEW ?? k("tengu_cobalt_plinth_aspen", false);
}
function DTr() {
  if (u === null) throw Error("artifact preview is not compiled into this build");
  let { findPlaywrightChromes: e } = u, r = async (o) => i.BUN_CHROME_PATH ? [i.BUN_CHROME_PATH] : L([...await e(o), ...await _(o)]);
  return { chromeCandidates: r, resolveChrome: async () => (await r())[0], noSandbox: u.needsNoSandbox, installHint: u.chromeInstallHint, installDir: u.chromeInstallDir };
}
function b() {
  return `${i.BUN_CHROME_PATH ?? ""}
${i.PLAYWRIGHT_BROWSERS_PATH ?? ""}`;
}
async function UAi() {
  let e;
  try {
    if (i.CLAUDE_CODE_ARTIFACT_PREVIEW !== void 0 || i.CLAUDE_CODE_REMOTE || !g()) return;
    let r = Lo();
    if (r.artifactPreviewBrowserSearch !== void 0) return;
    e = { env: b(), state: "pending" }, r.artifactPreviewBrowserSearch = e;
  } catch (r) {
    t(`Artifact preview: could not start the browser search: ${d(r)}`);
    return;
  }
  try {
    let r = await DTr().chromeCandidates({ strict: true });
    e.state = r.length > 0 ? "found" : "none";
  } catch (r) {
    e.state = "error", t(`Artifact preview: the startup browser search failed: ${d(r)}`);
  }
}
function W() {
  let e = Lo();
  if (e.artifactPreviewBrowser === void 0) e.artifactPreviewBrowser = G(e.artifactPreviewBrowserSearch), a("tengu_artifact_preview_browser", { verdict: c(e.artifactPreviewBrowser.verdict), source: c(e.artifactPreviewBrowser.source) });
  return e.artifactPreviewBrowser.verdict;
}
function Ibo() {
  return Lo().artifactPreviewBrowser;
}
function G(e) {
  if (e === void 0) return { verdict: "unknown", source: "not_started" };
  if (e.env !== b()) return { verdict: "unknown", source: "stale_env" };
  if (e.state === "pending" || e.state === "error") return { verdict: "unknown", source: e.state };
  return { verdict: e.state, source: "session" };
}
export {
  DTr,
  Ibo,
  N$,
  Pbo,
  ROe,
  UAi,
  _Bn,
  xbo
};
