// darwin/computer-use/chunk-20fbb9ad.js — Claude Code 2.1.310（darwin）模块 chunk-p4yndg32.js
import { O } from "../fs/chunk-ce5d00cd.js";
import { DI, Os } from "../fs/utf-8.8f8e.js";
import { Tf, i } from "../shared/environment.js";
import { _Dn } from "../shared/chunk-032bd782.js";
import { x6e } from "../shared/chunk-c564b685.js";
import { link as c, mkdir as l, stat as a, unlink as p, writeFile as d } from "fs/promises";
import { join as r, sep as u } from "path";
async function m() {
  let s = r(x6e(), "claude");
  if (!Jro()) return null;
  let e = r(s, "ClaudeCode.app", "Contents", "MacOS"), n = r(e, "claude");
  try {
    let o = (await a(process.execPath)).ino;
    await l(e, { recursive: true }), await d(r(e, "..", "Info.plist"), `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict><key>CFBundleIdentifier</key><string>com.anthropic.claude-code</string><key>CFBundleName</key><string>Claude Code</string><key>CFBundleDisplayName</key><string>Claude Code</string><key>CFBundleExecutable</key><string>claude</string><key>CFBundlePackageType</key><string>APPL</string><key>LSUIElement</key><true/><key>NSMicrophoneUsageDescription</key><string>Claude Code uses the microphone for voice dictation.</string><key>NSAppleEventsUsageDescription</key><string>Claude Code needs to send Apple Events to open URLs and control applications you authorize.</string><key>NSLocalNetworkUsageDescription</key><string>Claude Code connects to servers and devices on your local network when commands you run need to reach them.</string></dict></plist>
`);
    try {
      if ((await a(n)).ino === o) return n;
    } catch {
    }
    let t = DI(n);
    await c(process.execPath, t);
    try {
      await Os(t, n);
    } finally {
      await p(t).catch(() => {
      });
    }
    return n;
  } catch {
    return null;
  }
}
async function mfs() {
  if (O() !== "macos") return;
  if (i.CLAUDE_BG_TCC_DISCLAIMED) {
    delete process.env.CLAUDE_BG_TCC_DISCLAIMED;
    return;
  }
  let e = (i.CLAUDE_PTY_HOST_NO_STABLE_PATH === "1" || i.CLAUDE_CODE_DISABLE_BG_STABLE_PATH ? null : await m()) ?? process.execPath, o = [...Tf() ? [e] : [e, process.argv[1]], ...process.argv.slice(2)], t = _Dn(process.env);
  t.CLAUDE_BG_TCC_DISCLAIMED = "1", delete t.CLAUDE_PTY_HOST_NO_STABLE_PATH;
  try {
    process.execve(e, o, t, { macDisclaimResponsibility: true });
  } catch {
  }
}
function Jro() {
  return process.execPath.startsWith(r(x6e(), "claude", "versions") + u);
}
export {
  Jro,
  mfs
};
