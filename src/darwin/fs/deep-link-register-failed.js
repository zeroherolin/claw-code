// darwin/fs/deep-link-register-failed.js — Claude Code 2.1.310（darwin）模块 chunk-6jzfdrpx.js
import { v, vr } from "../telemetry/anthropic-workspace-id.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { t } from "./gitlab-runner-authentication-token.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { je } from "../plugins/chunk-0a4c51cf.js";
import { hc } from "../shared/environment.js";
import { st } from "../git/utf8-keep-bom.js";
import { mt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { aZe } from "./chunk-dacd9872.js";
import { mae } from "../plugins/install-plugin.js";
import { x6e } from "../shared/chunk-c564b685.js";
import { z } from "../shared/chunk-be29de51.js";
import { promises as n } from "fs";
import * as w from "os";
import * as o from "path";
var cZr = "com.anthropic.claude-code-url-handler", p = "Claude Code URL Handler", h = "claude-code-url-handler.desktop", P = "Claude Code URL Handler.app", c = o.join(w.homedir(), "Applications", P), l = o.join(c, "Contents", "MacOS", "claude");
function d() {
  return o.join(x6e(), "applications", h);
}
var u = `HKEY_CURRENT_USER\\Software\\Classes\\${mae}`, k = `${u}\\shell\\open\\command`, f = 864e5;
function y(e) {
  return `Exec="${e}" --handle-uri %u`;
}
function C(e) {
  return `"${e}" --handle-uri "%1"`;
}
async function D(e) {
  let r = o.join(c, "Contents");
  try {
    await n.rm(c, { recursive: true });
  } catch (s) {
    if (v(s) !== "ENOENT") throw s;
  }
  await n.mkdir(o.dirname(l), { recursive: true });
  let i = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${cZr}</string>
  <key>CFBundleName</key>
  <string>${p}</string>
  <key>CFBundleExecutable</key>
  <string>claude</string>
  <key>CFBundleVersion</key>
  <string>1.0</string>
  <key>CFBundlePackageType</key>
  <string>APPL</string>
  <key>LSBackgroundOnly</key>
  <true/>
  <key>CFBundleURLTypes</key>
  <array>
    <dict>
      <key>CFBundleURLName</key>
      <string>Claude Code Deep Link</string>
      <key>CFBundleURLSchemes</key>
      <array>
        <string>${mae}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;
  await n.writeFile(o.join(r, "Info.plist"), i), await n.symlink(e, l), await st("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister", ["-R", c], { useCwd: false }), t(`Registered ${mae}:// protocol handler at ${c}`);
}
async function _(e) {
  await n.mkdir(o.dirname(d()), { recursive: true });
  let r = `[Desktop Entry]
Name=${p}
Comment=Handle ${mae}:// deep links for Claude Code
${y(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${mae};
`;
  await n.writeFile(d(), r);
  let i = await hc("xdg-mime");
  if (i) {
    let { code: a } = await st(i, ["default", h, `x-scheme-handler/${mae}`], { useCwd: false });
    if (a !== 0) throw Object.assign(Error(`xdg-mime exited with code ${a}`), { code: "XDG_MIME_FAILED" });
  }
  t(`Registered ${mae}:// protocol handler at ${d()}`);
}
async function F(e) {
  for (let r of [["add", u, "/ve", "/d", `URL:${p}`, "/f"], ["add", u, "/v", "URL Protocol", "/d", "", "/f"], ["add", k, "/ve", "/d", C(e), "/f"]]) {
    let { code: i } = await st("reg", r, { useCwd: false });
    if (i !== 0) throw Object.assign(Error(`reg add exited with code ${i}`), { code: "REG_FAILED" });
  }
  t(`Registered ${mae}:// protocol handler in Windows registry`);
}
async function L(e) {
  let r = e ?? await E();
  switch ("darwin") {
    case "darwin":
      await D(r);
      break;
    case "linux":
      await _(r);
      break;
    case "win32":
      await F(r);
      break;
    default:
      throw Error("Unsupported platform: darwin");
  }
}
async function E() {
  let e = aZe();
  try {
    return await n.realpath(e), e;
  } catch {
    return process.execPath;
  }
}
async function S(e) {
  try {
    switch ("darwin") {
      case "darwin":
        return await n.readlink(l) === e;
      case "linux":
        return (await n.readFile(d(), "utf8")).includes(y(e));
      case "win32": {
        let { stdout: r, code: i } = await st("reg", ["query", k, "/ve"], { useCwd: false });
        return i === 0 && r.includes(C(e));
      }
      default:
        return false;
    }
  } catch {
    return false;
  }
}
async function Rls(e) {
  if (mt().disableDeepLinkRegistration === "disable") return;
  if (!["darwin", "linux", "win32"].includes("darwin")) return;
  let r = await E();
  if (await S(r)) return;
  let i = o.join(Le(), ".deep-link-register-failed");
  if (z() && e !== void 0) {
    let a = await e.stat(je.state("deep-link-register-failed"));
    if (a.ok && Date.now() - a.value.mtimeMs < f) return;
  } else try {
    let a = await n.stat(i);
    if (Date.now() - a.mtimeMs < f) return;
  } catch {
  }
  try {
    if (await L(r), g("deep_link_register"), t("Auto-registered claude-cli:// deep link protocol handler"), z() && e !== void 0) await e.delete(je.state("deep-link-register-failed"));
    else await n.rm(i, { force: true }).catch(() => {
    });
  } catch (a) {
    let s = vr(a);
    if (m("deep_link_register", s ?? "register_failed"), t(`Failed to auto-register deep link protocol handler: ${a instanceof Error ? a.message : String(a)}`, { level: "warn" }), s === "EACCES" || s === "ENOSPC") if (z() && e !== void 0) await e.write(je.state("deep-link-register-failed"), "", { publishDiscipline: "inPlace" });
    else await n.writeFile(i, "").catch(() => {
    });
  }
}
export {
  Rls,
  cZr
};
