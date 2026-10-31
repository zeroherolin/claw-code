// darwin/shell/clipboard-read.js — Claude Code 2.1.310（darwin）模块 chunk-4stkkmxh.js
import { QZ } from "../git/utf-8.js";
import { d, v } from "../telemetry/anthropic-workspace-id.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { Ry, B3, fSt, SF } from "../shared/chunk-4f9a38d5.js";
import { fV, GO, lze, Jpn, aBr } from "../telemetry/image-resize-fallback.js";
import { ie, t } from "../fs/gitlab-runner-authentication-token.js";
import { i } from "../shared/environment.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { iy, aP } from "../context/tool-cgroup-exclude-classes.js";
import { Pt } from "../shared/async-hooks.5238.js";
import { jd } from "../fs/tempdir-owner-mismatch.js";
import { _Ze } from "../shared/chunk-b7194706.js";
import { wo } from "../shared/chunk-5c1d3f9e.js";
import { randomBytes as W } from "crypto";
import { basename as _, dirname as E, isAbsolute as T, join as I } from "path";
var S9 = 800, b = { darwin: "osascript -e 'get POSIX path of (the clipboard as «class furl»)'", linux: "xclip -selection clipboard -t text/plain -o 2>/dev/null || wl-paste 2>/dev/null", win32: ["powershell", "-NoProfile", "-Command", "Get-Clipboard"] };
function A() {
  let s = jd(), o = "claude_cli_latest_screenshot.png", c = { darwin: I(s, "claude_cli_latest_screenshot.png"), linux: I(s, "claude_cli_latest_screenshot.png"), win32: I(s, "claude_cli_latest_screenshot.png") }, r = c.darwin || c.linux, a = wo([r]), u = `set fp to open for access POSIX file ${`"${r.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`} with write permission`, p = "", h = false, f = '"$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)"', w = "", R = "", S = { darwin: { checkImage: "osascript -e 'the clipboard as «class PNGf»'", saveImage: `osascript -e 'set png_data to (the clipboard as «class PNGf»)' -e ${wo([u])} -e 'write png_data to fp' -e 'close access fp'`, getPath: b.darwin, deleteFile: `rm -f -- ${a}` }, linux: { checkImage: 'xclip -selection clipboard -t TARGETS -o 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)" || wl-paste -l 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)"', saveImage: `xclip -selection clipboard -t image/png -o > ${a} 2>/dev/null || wl-paste --type image/png > ${a} 2>/dev/null || xclip -selection clipboard -t image/bmp -o > ${a} 2>/dev/null || wl-paste --type image/bmp > ${a}`, getPath: b.linux, deleteFile: `rm -f -- ${a}` }, win32: { checkImage: ["powershell", "-NoProfile", "-NonInteractive", "-Sta", "-Command", "Add-Type -AssemblyName System.Windows.Forms; if (-not [System.Windows.Forms.Clipboard]::ContainsImage()) { exit 1 }"], saveImage: ["powershell", "-NoProfile", "-NonInteractive", "-Sta", "-Command", "Add-Type -AssemblyName System.Windows.Forms; $img = [System.Windows.Forms.Clipboard]::GetImage(); if ($null -eq $img) { exit 1 }; $img.Save(, [System.Drawing.Imaging.ImageFormat]::Png)"], getPath: b.win32, deleteFile: ["powershell", "-NoProfile", "-Command", "Remove-Item -Force -LiteralPath "] } };
  return { commands: S.darwin || S.linux, screenshotPath: r };
}
async function y(e) {
  if (typeof e === "string") return aP(e, { reject: false });
  let [s, ...o] = e;
  return iy(s, o, { reject: false });
}
async function pAs() {
  try {
    return Bun.Image.hasClipboardImage();
  } catch (e) {
    return l(e), false;
  }
}
async function Cme(e) {
  try {
    let r = Bun.Image.fromClipboard();
    if (!r) return null;
    let { width: a, height: n } = await r.metadata(), u = a > e.maxWidth || n > e.maxHeight;
    if (u) r.resize(e.maxWidth, e.maxHeight, { fit: "inside", withoutEnlargement: true });
    let p = (await aBr(() => r, P())).webp ?? await r.png().toBuffer(), { width: h, height: f } = (u ? SF(p) : void 0) ?? { width: a, height: n };
    if (p.length > e.targetRawSize) {
      let w = await lze(p, p.length, "png", e);
      return g("clipboard_read"), { base64: w.buffer.toString("base64"), mediaType: `image/${w.mediaType}`, dimensions: { originalWidth: a, originalHeight: n, displayWidth: w.dimensions?.displayWidth ?? h, displayHeight: w.dimensions?.displayHeight ?? f } };
    }
    return g("clipboard_read"), { base64: p.toString("base64"), mediaType: B3(p), dimensions: { originalWidth: a, originalHeight: n, displayWidth: h, displayHeight: f } };
  } catch (r) {
    if (r instanceof GO || v(r)?.startsWith("ERR_IMAGE_")) t(`Clipboard image read failed: ${d(r)}`, { level: "error" });
    else l(r);
  }
  let s;
  try {
    s = A();
  } catch (r) {
    return l(r), m("clipboard_read", "construct_failed"), null;
  }
  let { commands: o, screenshotPath: c } = s;
  try {
    if ((await y(o.checkImage)).exitCode !== 0) return null;
    if (await ie().mkdir(E(c), { mode: 448 }), (await y(o.saveImage)).exitCode !== 0) return m("clipboard_read", "save_failed"), null;
    let n = await ie().readFileBytes(c);
    if (n.length >= 2 && n[0] === 66 && n[1] === 77) n = await (await fV())(n).png().toBuffer();
    let u = await lze(n, n.length, "png", e, { directWebpMaxBytes: P() }), p = u.buffer.toString("base64"), h = fSt(p);
    return y(o.deleteFile), g("clipboard_read"), { base64: p, mediaType: h, dimensions: u.dimensions };
  } catch {
    return m("clipboard_read", "read_failed"), null;
  }
}
async function B() {
  try {
    let s = b.darwin || b.linux, o = await y(s);
    if (o.exitCode !== 0 || !o.stdout) return null;
    return o.stdout.trim();
  } catch (e) {
    return t(`Failed to read image path from clipboard: ${e instanceof Error ? e.message : String(e)}`, { level: "error" }), null;
  }
}
var c0t = /\.(png|jpe?g|gif|webp)$/i;
function x(e) {
  if (e.startsWith('"') && e.endsWith('"') || e.startsWith("'") && e.endsWith("'")) return e.slice(1, -1);
  return e;
}
var C = /^(?:[A-Za-z]:\\|\\\\)/;
function F(e) {
  if (O() === "wsl" && C.test(e)) return e;
  let c = `__DOUBLE_BACKSLASH_${W(8).toString("hex")}__`;
  return e.replaceAll("\\\\", c).replace(/\\(.)/g, "$1").replace(new RegExp(c, "g"), "\\");
}
function fAs(e) {
  let s = x(e.trim()), o = F(s);
  return c0t.test(o);
}
function Oyo(e) {
  let s = x(e.trim()), o = F(s);
  if (c0t.test(o)) return o;
  return null;
}
async function mAs(e, s, o) {
  let c = Oyo(e);
  if (!c) return null;
  let r = c;
  if (O() === "wsl" && C.test(r)) r = await new _Ze(i.WSL_DISTRO_NAME).toLocalPath(r);
  let a;
  try {
    if (T(r)) a = await o(r);
    else {
      let f = await B();
      if (f && r === _(f)) a = await o(f);
    }
  } catch (f) {
    return t(`Failed to read pasted image file ${r}: ${f instanceof Error ? f.message : String(f)}`, { level: "error" }), null;
  }
  if (a === "refused") return "refused";
  if (!a || a === "absent") return null;
  if (a.length === 0) return t(`Image file is empty: ${r}`, { level: "warn" }), null;
  if (a.length >= 2 && a[0] === 66 && a[1] === 77) a = await (await fV())(a).png().toBuffer();
  let n = Ry(a);
  if (n === null) return t(`Pasted path has image extension but content is not a supported image: ${r}`, { level: "warn" }), null;
  let u = n.split("/")[1] || "png", p = await lze(a, a.length, u, s, { directWebpMaxBytes: P() }), h = p.buffer.toString("base64");
  return { path: r, base64: h, mediaType: `image/${p.mediaType}`, dimensions: p.dimensions };
}
function Myo(e) {
  if (e.includes("\0")) return true;
  let s = e.slice(0, 4096);
  if (s.length < 32) return false;
  let o = 0;
  for (let c of s) if (c === "�") o++;
  return o / s.length > 0.05;
}
function P() {
  return Pt() ? void 0 : Jpn(QZ);
}
export {
  Cme,
  Myo,
  Oyo,
  S9,
  c0t,
  fAs,
  mAs,
  pAs
};
