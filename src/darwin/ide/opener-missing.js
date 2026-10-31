// darwin/ide/opener-missing.js — Claude Code 2.1.310（darwin）模块 chunk-16f4agxv.js
import { Tu } from "../context/not-admin-owned.js";
import { cl } from "../fs/node-modules.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { i } from "../shared/environment.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { st } from "../git/utf8-keep-bom.js";
import { hwt } from "../shared/utf-8.js";
import { fileURLToPath as w } from "url";
import { pathToFileURL as d } from "url";
function s(r, e) {
  if (r === "macos") return { command: "open", args: ["-R", "--", e] };
  if (r === "windows") return { command: "explorer", args: [`/select,${e}`] };
  return { command: "dbus-send", args: ["--session", "--print-reply", "--dest=org.freedesktop.FileManager1", "--type=method_call", "/org/freedesktop/FileManager1", "org.freedesktop.FileManager1.ShowItems", `array:string:${d(e).href.replaceAll(",", "%2C")}`, "string:"] };
}
var f = { useCwd: true, useToolMemoryCgroup: false }, uGo = /* @__PURE__ */ new Set(["https:", "http:", "vscode:", "vscode-insiders:", "cursor:", "windsurf:", "zed:", "jetbrains:", "idea:", "slack:", "linear:", "notion:", "figma:"]);
function g(r) {
  let e;
  try {
    e = new URL(r);
  } catch (o) {
    throw Error(`Invalid URL format: ${r}`);
  }
  if (e.protocol !== "http:" && e.protocol !== "https:") throw Error(`Invalid URL protocol: must use http:// or https://, got ${e.protocol}`);
}
async function Kgn(r) {
  try {
    let o = "open", { code: n } = await st(o, [r], f);
    return n === 0;
  } catch (e) {
    return false;
  }
}
async function h(r) {
  try {
    let e = O();
    if (e === "macos") {
      let { command: a, args: l } = s("macos", r), { code: c } = await st(a, l);
      return c === 0;
    }
    if (e === "windows") {
      let { command: a, args: l } = s("windows", r), { exitCode: c } = await st(a, l);
      return c !== void 0;
    }
    let { command: o, args: n } = s("linux", r), { code: u } = await st(o, n);
    return u === 0;
  } catch (e) {
    return false;
  }
}
async function qgn(r) {
  let e;
  try {
    e = new URL(r);
  } catch {
    return false;
  }
  let o = e.protocol;
  if (o === "file:") {
    if (e.host !== "") return false;
    try {
      let n = w(r);
      if (cl(n) || hwt(n)) return false;
      return await h(n);
    } catch {
      return false;
    }
  }
  if (!uGo.has(o)) return t(`[hyperlink] refusing to dispatch clicked link with non-allowlisted scheme ${o}`, { level: "warn" }), false;
  return (await m(r)).ok;
}
function RV() {
  if (!process.stdout.isTTY) return true;
  if (i.BROWSER && i.BROWSER !== "true") return false;
  if (i.SSH_CONNECTION) return true;
  return p();
}
function p() {
  return O() === "linux" && !i.DISPLAY && !i.WAYLAND_DISPLAY;
}
async function Ygn(r) {
  try {
    g(r);
  } catch (e) {
    return { ok: false, reason: "invalid_url", detail: e instanceof Error ? e.message : String(e) };
  }
  return m(r);
}
async function Js(r) {
  return (await Ygn(r)).ok;
}
async function m(r) {
  try {
    let e = Tu()?.browser, o = e !== void 0 ? e ?? void 0 : i.BROWSER, n = "darwin";
    if (!o && p()) return { ok: false, reason: "no_display" };
    return y(await st(o || "open", [r], f));
  } catch (e) {
    return { ok: false, reason: "unknown", detail: e instanceof Error ? e.message : String(e) };
  }
}
function y(r) {
  if (r.code === 0) return { ok: true };
  let e = r.error ?? "", o = r.stderr || e || `exit ${r.code}`;
  if (r.code === 127 || e.includes("ENOENT")) return { ok: false, reason: "opener_missing", detail: o };
  if (e.includes("ETIMEDOUT") || e.includes("timed out")) return { ok: false, reason: "timeout", detail: o };
  if (e.includes("EACCES") || e.includes("EPERM")) return { ok: false, reason: "spawn_error", detail: o };
  if (r.code > 0) return { ok: false, reason: "nonzero_exit", detail: o };
  return { ok: false, reason: "unknown", detail: o };
}
export {
  Js,
  Kgn,
  RV,
  Ygn,
  qgn,
  uGo
};
