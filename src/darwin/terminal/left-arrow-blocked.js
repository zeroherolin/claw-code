// darwin/terminal/left-arrow-blocked.js — Claude Code 2.1.310（darwin）模块 chunk-q730vgdv.js
import { S } from "../agents/third-party.js";
import { R, G, Kt } from "../telemetry/anthropic-workspace-id.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { Qr } from "../models/claude-3-5-sonnet.js";
import { XI, K } from "../shared/chunk-e4a3aa33.js";
import { it, k, Re, ue } from "../settings/global-config-and-gates.js";
import { rfe, i } from "../shared/environment.js";
import { O, Rfi } from "../fs/chunk-ce5d00cd.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { Ko } from "../shared/chunk-8eee6836.js";
import { st } from "../git/utf8-keep-bom.js";
import { le } from "../shared/chunk-4563156b.js";
import { Hn } from "../fs/utf-8.8f8e.js";
import { Wc } from "../fs/utf-8.aa9a.js";
import { $Fe, ku } from "../fs/async-hooks.7959.js";
import { No, kqe, mvn, Tar, SFe, XJo, Rci } from "../fs/chunk-86be9585.js";
import { he } from "./xterm-ghostty.js";
import { qi } from "../shared/async-hooks.b037.js";
import { Wf, K4 } from "../settings/ax-sr-suggestion-nav.js";
import { _i, pn, Wa, X1 } from "../telemetry/render-glyph-cardinality.js";
import { QI, RUe, Ffe } from "./ink-renderer.js";
import { Co } from "../shared/chunk-4837e50a.js";
import { yy } from "./chunk-2969c20f.js";
import { Me } from "../shared/chunk-be0ce119.js";
import { Vlt, jIn, T5e } from "../shared/chunk-4ef913a6.js";
import { o9e, _Xt } from "../shared/chunk-bdfeb227.js";
import { p0o, C2e, T2e, Iln, Mhe } from "../context/team-memory-sync.js";
import { J5 } from "../shared/chunk-76877d92.js";
import { Y8t, X8t } from "../shared/xterm-ghostty.js";
import { wro, Vh } from "../computer-use/chunk-c206db8f.js";
import { c_i, u_i, k6n } from "../core/conversation-engine.js";
import { ld } from "../telemetry/tool-result.js";
import { Kh } from "../telemetry/chunk-56c542d7.js";
import { KYt, qYt, ogs, iMn } from "../shared/no-backup.js";
import { dIe, vb, vIt } from "../shell/chunk-526e5cd9.js";
import { XUe } from "../ide/chunk-2bb82cbe.js";
import { Qn } from "../vendor/chalk/chunk-24ee1a9d.js";
import { S9, Cme, fAs, Oyo, mAs } from "../shell/clipboard-read.js";
import { de, Se, P, Bo, te, A, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { D } from "../shared/chunk-7027e6d5.js";
import { $a, eee, zZo } from "../shared/chunk-5acf247e.js";
j();
function x_(e, r, n = false) {
  P(() => {
    let s = e.current;
    if (!s) return;
    let o = QI(s);
    if (!r) {
      if (n && o.activeElement === s) o.blur();
      return;
    }
    return o.focus(s), o.subscribe(() => {
      let u = e.current;
      if (!u || o.activeElement === u) return;
      if (!o.activeElement) {
        o.focus(u);
        return;
      }
      let d = u.parentNode;
      while (d) {
        if (d === o.activeElement) {
          o.focus(u);
          return;
        }
        d = d.parentNode;
      }
    });
  }, [r, e, n]);
}
j();
import { randomBytes as De } from "crypto";
import { copyFile as Ne, mkdir as ft, readFile as $e, writeFile as Ze } from "fs/promises";
import { homedir as Je, platform as We } from "os";
import { dirname as dr, join as ne } from "path";
var h = `
`, Ie = { ghostty: "Ghostty", kitty: "Kitty", "iTerm.app": "iTerm2", WezTerm: "WezTerm", WarpTerminal: "Warp", "windows-terminal": "Windows Terminal" };
function Qe() {
  let e = i.VSCODE_GIT_ASKPASS_MAIN ?? "", r = i.PATH ?? "";
  return e.includes(".vscode-server") || e.includes(".cursor-server") || e.includes(".windsurf-server") || e.includes(".devin-server") || r.includes(".vscode-server") || r.includes(".cursor-server") || r.includes(".windsurf-server") || r.includes(".devin-server");
}
function Pgr() {
  if (!i.terminal || !(i.terminal in Ie)) return null;
  return Ie[i.terminal] ?? null;
}
function ze() {
  return "";
}
async function Igr(e, r, n) {
  let s = "", o = true;
  switch (i.terminal) {
    case "Apple_Terminal":
      s = await mr(r, n);
      break;
    case "vscode":
      s = await ct(e, "VSCode", r), s += await ut(e, "VSCode", r), s += await Sro(e, "VSCode", r);
      break;
    case "cursor":
      s = await ct(e, "Cursor", r), s += await ut(e, "Cursor", r), s += await Sro(e, "Cursor", r);
      break;
    case "windsurf":
      s = await ct(e, "Devin Desktop", r), s += await ut(e, "Devin Desktop", r), s += await Sro(e, "Devin Desktop", r);
      break;
    case "alacritty":
      s = await hr(r);
      break;
    case "zed": {
      let u = await pr(r);
      s = u.message, o = u.installed;
      break;
    }
    case null:
      break;
  }
  return await Re((u) => {
    if (o && vt.includes(i.terminal ?? "")) {
      if (u.shiftEnterKeyBindingInstalled === true) return u;
      return { ...u, shiftEnterKeyBindingInstalled: true };
    } else if (i.terminal === "Apple_Terminal") {
      if (u.optionAsMetaKeyInstalled === true) return u;
      return { ...u, optionAsMetaKeyInstalled: true };
    }
    return u;
  }, n), s;
}
var kt = 'iTerm2 → Settings → General → Selection → check "Applications in terminal may access clipboard"';
async function Bgi(e) {
  let r = he.dim(kt);
  try {
    let { stdout: n, code: s } = await st("defaults", ["read", "com.googlecode.iterm2", "AllowClipboardAccess"]);
    if (s === 0 && n.trim() === "1") return `${Qn("success", e)("iTerm2 clipboard access already enabled")}${h}${h}`;
    let { code: o } = await st("defaults", ["write", "com.googlecode.iterm2", "AllowClipboardAccess", "-bool", "true"]);
    if (o !== 0) return `${Qn("warning", e)("Couldn't update iTerm2 clipboard setting.")}${h}${r}${h}${h}`;
    return `${Qn("success", e)('Enabled "Applications in terminal may access clipboard" in iTerm2')}${h}${he.dim("Restart iTerm2 for this to take effect. Undo: defaults write com.googlecode.iterm2 AllowClipboardAccess -bool false")}${h}${h}`;
  } catch (n) {
    return l(n), `${Qn("warning", e)("Couldn't update iTerm2 clipboard setting.")}${h}${r}${h}${h}`;
  }
}
function jgi() {
  return ue().shiftEnterKeyBindingInstalled === true;
}
var vt = ["vscode", "cursor", "windsurf", "alacritty", "zed"];
function Hfe() {
  if (i.terminal === "Apple_Terminal" && We() === "darwin") return true;
  if (i.terminal && i.terminal in Ie) return true;
  return vt.includes(i.terminal ?? "") && jgi();
}
function yro() {
  return ue().hasUsedBackslashReturn === true;
}
function Pps(e) {
  if (!ue().hasUsedBackslashReturn) Re((n) => ({ ...n, hasUsedBackslashReturn: true }), e);
}
async function Dki(e, r, n) {
  if (We() === "darwin" && i.__CFBundleIdentifier === "com.googlecode.iterm2" && (i.terminal === "iTerm.app" || i.terminal === "tmux" || i.terminal === "screen" || i.terminal === null)) {
    let u = `${await Bgi(r.options.theme)}Shift+Enter is natively supported in iTerm2.

No configuration needed. Just use Shift+Enter to add newlines.${ze()}`;
    return e(u), null;
  }
  if (i.terminal && i.terminal in Ie) {
    let o = `Shift+Enter is natively supported in ${Ie[i.terminal]}.

No configuration needed. Just use Shift+Enter to add newlines.${ze()}`;
    return e(o), null;
  }
  if (!XUe()) {
    let o = i.terminal || "your current terminal", u = O(), d = "";
    if (u === "macos") d = `   • macOS: Apple Terminal
`;
    let f = i.LC_TERMINAL === "iTerm2" ? `${h}${h}You appear to be connected from iTerm2 on another machine. For /copy to reach your local clipboard, on that machine open:${h}${he.dim(kt)}` : "", w = `Terminal setup cannot be run from ${o}.

This command configures a convenient Shift+Enter shortcut for multi-line prompts.
${he.dim("Note: You can already use backslash (\\\\) + return to add newlines.")}

To set up the shortcut (optional):
1. Exit tmux/screen temporarily
2. Run /terminal-setup directly in one of these terminals:
${d}   • IDE: VSCode, Cursor, Devin Desktop, Zed
   • Other: Alacritty
3. Return to tmux/screen - settings will persist

${he.dim("Note: iTerm2, WezTerm, Ghostty, Kitty, Warp, and Windows Terminal support Shift+Enter natively.")}${f}${ze()}`;
    return e(w), null;
  }
  let s = await Igr(r.session.host, r.options.theme, r.storageV5);
  return e(s + ze()), null;
}
var _e = "terminal.integrated.mouseWheelScrollSensitivity", Pe = 3, qe = "terminal.integrated.gpuAcceleration", lt = "off";
async function _ro(e) {
  let r = fr();
  if (!r || Qe()) return null;
  try {
    let n = await $e(ne(await Ogr.of(e).pathFor(r), "settings.json"), { encoding: "utf-8" }), s = SFe(n), o = D(s) ? s[_e] : void 0;
    return { editor: r, sensitivity: typeof o === "number" ? o : null, recommended: Pe };
  } catch (n) {
    if (!Kt(n)) l(n);
    return { editor: r, sensitivity: null, recommended: Pe };
  }
}
function fr() {
  switch (i.terminal) {
    case "vscode":
      return "VSCode";
    case "cursor":
      return "Cursor";
    case "windsurf":
      return "Devin Desktop";
    default:
      return null;
  }
}
class _t {
  pathFor = Qr(async (e) => {
    let r = (n) => ne(Je(), We() === "win32" ? ne("AppData", "Roaming", n, "User") : We() === "darwin" ? ne("Library", "Application Support", n, "User") : ne(".config", n, "User"));
    if (e === "VSCode") return r("Code");
    if (e === "Devin Desktop") {
      let n = r("Devin");
      return await Wc(n) ? n : r("Windsurf");
    }
    return r(e);
  }, (e) => `${e}:${Je()}`);
}
var Ogr = new W(() => new _t());
async function ut(e, r, n) {
  let s = he.dim(`For smoother scrolling, set "${_e}": ${Pe} in ${r} settings.`);
  if (Qe()) return `${s}${h}`;
  let o = ne(await Ogr.of(e).pathFor(r), "settings.json");
  try {
    let u = "{}", d = false;
    try {
      u = await $e(o, { encoding: "utf-8" }), d = true;
    } catch (x) {
      if (!Kt(x)) throw x;
    }
    let f = SFe(u);
    if (!D(f)) return `${Qn("warning", n)(`${r} settings.json isn't a JSON object; not modifying it.`)}${h}${s}${h}`;
    if (_e in f) return `${Qn("success", n)(`${r} ${_e} already set; leaving as-is`)}${h}${he.dim(`See ${o}`)}${h}`;
    let w = XJo(u, _e, Pe);
    if (w === u) return `${Qn("warning", n)(`Couldn't update ${r} settings.json.`)}${h}${s}${h}`;
    if (d) {
      let x = `${o}.${De(4).toString("hex")}.bak`;
      try {
        await Ne(o, x);
      } catch {
        return `${Qn("warning", n)(`Couldn't back up ${r} settings.json; not modifying it.`)}${h}${s}${h}`;
      }
    }
    return await Ze(o, w, { encoding: "utf-8" }), `${Qn("success", n)(`Set ${r} terminal scroll sensitivity to ${Pe}`)}${h}${he.dim(`See ${o}`)}${h}`;
  } catch (u) {
    return t(`Couldn't update ${r} settings.json at ${o}: ${u instanceof Error ? u.message : String(u)}`, { level: "error" }), `${Qn("warning", n)(`Couldn't update ${r} settings.json.`)}${h}${s}${h}`;
  }
}
async function Sro(e, r, n) {
  let s = he.dim(`To fix garbled text, set "${qe}": "${lt}" in ${r} settings (undo: set it back to "auto").`);
  if (Qe()) return p("terminal_setup_gpu_accel", "remote_ssh"), `${s}${h}`;
  let o = ne(await Ogr.of(e).pathFor(r), "settings.json");
  try {
    let u = "{}", d = false;
    try {
      u = await $e(o, { encoding: "utf-8" }), d = true;
    } catch (x) {
      if (!Kt(x)) throw x;
    }
    let f = SFe(u);
    if (!D(f)) return p("terminal_setup_gpu_accel", "not_json_object"), `${Qn("warning", n)(`${r} settings.json isn't a JSON object; not modifying it.`)}${h}${s}${h}`;
    if (f[qe] === lt) return g("terminal_setup_gpu_accel"), `${Qn("success", n)(`${r} GPU acceleration already off; leaving as-is`)}${h}${he.dim(`See ${o}`)}${h}`;
    let w = XJo(u, qe, lt);
    if (w === u) return p("terminal_setup_gpu_accel", "write_failed"), `${Qn("warning", n)(`Couldn't update ${r} settings.json.`)}${h}${s}${h}`;
    if (d) {
      let x = `${o}.${De(4).toString("hex")}.bak`;
      try {
        await Ne(o, x);
      } catch {
        return p("terminal_setup_gpu_accel", "backup_failed"), `${Qn("warning", n)(`Couldn't back up ${r} settings.json; not modifying it.`)}${h}${s}${h}`;
      }
    }
    return await Ze(o, w, { encoding: "utf-8" }), g("terminal_setup_gpu_accel"), `${Qn("success", n)(`Turned off ${r} GPU acceleration to fix garbled text`)}${h}${he.dim(`Reload the ${r} window to apply. Undo: set "${qe}" back to "auto".`)}${h}${he.dim(`See ${o}`)}${h}`;
  } catch (u) {
    return p("terminal_setup_gpu_accel", "write_failed"), t(`Couldn't update ${r} settings.json at ${o}: ${u instanceof Error ? u.message : String(u)}`, { level: "error" }), `${Qn("warning", n)(`Couldn't update ${r} settings.json.`)}${h}${s}${h}`;
  }
}
async function ct(e, r = "VSCode", n) {
  if (Qe()) return `${Qn("warning", n)(`Cannot install keybindings from a remote ${r} session.`)}${h}${h}${r} keybindings must be installed on your local machine, not the remote server.${h}${h}To install the Shift+Enter keybinding:${h}1. Open ${r} on your local machine (not connected to remote)${h}2. Open the Command Palette (Cmd/Ctrl+Shift+P) → "Preferences: Open Keyboard Shortcuts (JSON)"${h}3. Add this keybinding (the file must be a JSON array):${h}${h}${he.dim(`[
  {
    "key": "shift+enter",
    "command": "workbench.action.terminal.sendSequence",
    "args": { "text": "\\u001b\\r" },
    "when": "terminalFocus"
  }
]`)}${h}`;
  let s = await Ogr.of(e).pathFor(r), o = ne(s, "keybindings.json");
  try {
    await ft(s, { recursive: true });
    let u = "[]", d = [], f = false;
    try {
      u = await $e(o, { encoding: "utf-8" }), f = true, d = SFe(u) ?? [];
    } catch (L) {
      if (!Kt(L)) throw L;
    }
    if (f) {
      let L = De(4).toString("hex"), B = `${o}.${L}.bak`;
      try {
        await Ne(o, B);
      } catch {
        return `${Qn("warning", n)(`Error backing up existing ${r} terminal keybindings. Bailing out.`)}${h}${he.dim(`See ${o}`)}${h}${he.dim(`Backup path: ${B}`)}${h}`;
      }
    }
    let w = { key: "shift+enter", command: "workbench.action.terminal.sendSequence", args: { text: "\x1B\r" }, when: "terminalFocus" }, x = d.find((L) => L.key === w.key && L.command === w.command && L.when === w.when);
    if (x) {
      let L = he.dim(`See ${o}`);
      if (x.args?.text === w.args.text) return `${Qn("success", n)(`${r} terminal Shift+Enter key binding already configured`)}${h}${L}${h}`;
      return `${Qn("warning", n)(`${r} already has a Shift+Enter terminal binding with different args; leaving it as-is.`)}${h}${L}${h}`;
    }
    let E = Rci(u, w);
    return await Ze(o, E, { encoding: "utf-8" }), `${Qn("success", n)(`Installed ${r} terminal Shift+Enter key binding`)}${h}${he.dim(`See ${o}`)}${h}`;
  } catch (u) {
    throw t(`Failed to install ${r} terminal Shift+Enter keybinding: ${u instanceof Error ? u.message : String(u)}`, { level: "error" }), Error(`Failed to install ${r} terminal Shift+Enter key binding`);
  }
}
async function Ct(e) {
  let { code: r } = await st("/usr/libexec/PlistBuddy", ["-c", `Add :'Window Settings':'${e}':useOptionAsMetaKey bool true`, qYt()]);
  if (r !== 0) {
    let { code: n } = await st("/usr/libexec/PlistBuddy", ["-c", `Set :'Window Settings':'${e}':useOptionAsMetaKey true`, qYt()]);
    if (n !== 0) return t(`Failed to enable Option as Meta key for Terminal.app profile: ${e}`, { level: "error" }), false;
  }
  return true;
}
async function $t(e) {
  let { code: r } = await st("/usr/libexec/PlistBuddy", ["-c", `Add :'Window Settings':'${e}':Bell bool false`, qYt()]);
  if (r !== 0) {
    let { code: n } = await st("/usr/libexec/PlistBuddy", ["-c", `Set :'Window Settings':'${e}':Bell false`, qYt()]);
    if (n !== 0) return t(`Failed to disable audio bell for Terminal.app profile: ${e}`, { level: "error" }), false;
  }
  return true;
}
async function mr(e, r) {
  let n = (Rfi() ?? 0) >= 27, s = Wf();
  if (n && s) return `${Qn("success", e)("No Terminal.app changes needed.")}${h}${he.dim("Shift+Return already enters a newline on this macOS version, and screen-reader mode leaves the audible bell setting unchanged.")}${h}`;
  try {
    if (!await ogs(r)) throw Error("Failed to create backup of Terminal.app preferences, bailing out");
    let { stdout: u, code: d } = await st("defaults", ["read", "com.apple.Terminal", "Default Window Settings"]);
    if (d !== 0 || !u.trim()) throw Error("Failed to read default Terminal.app profile");
    let { stdout: f, code: w } = await st("defaults", ["read", "com.apple.Terminal", "Startup Window Settings"]);
    if (w !== 0 || !f.trim()) throw Error("Failed to read startup Terminal.app profile");
    let x = false, E = u.trim(), L = n ? false : await Ct(E), B = s ? false : await $t(E);
    if (L || B) x = true;
    let se = f.trim();
    if (se !== E) {
      let ie = n ? false : await Ct(se), H = s ? false : await $t(se);
      if (ie || H) x = true;
    }
    if (!x) {
      if (n) throw Error("Failed to disable audio bell for any Terminal.app profile");
      if (s) throw Error("Failed to enable Option as Meta key for any Terminal.app profile");
      throw Error("Failed to enable Option as Meta key or disable audio bell for any Terminal.app profile");
    }
    await st("killall", ["cfprefsd"]), await KYt(r);
    let q = [Qn("success", e)("Configured Terminal.app settings:")];
    if (!n) q.push(Qn("success", e)('- Enabled "Use Option as Meta key"'));
    if (!s) q.push(Qn("success", e)("- Disabled the audible bell"));
    else q.push(he.dim("- Left the audible bell setting unchanged (screen-reader mode uses it)"));
    let Q = n ? he.dim("Shift+Return will now enter a newline.") : he.dim("Option+Enter will now enter a newline.");
    return `${q.join(h)}${h}${Q}${h}${he.dim("You must restart Terminal.app for changes to take effect.")}${h}`;
  } catch (o) {
    t(`Terminal.app setup failed: ${o instanceof Error ? o.message : String(o)}`, { level: "error" });
    let u = await iMn(r), d = n ? "Failed to disable the audio bell for Terminal.app." : "Failed to enable Option as Meta key for Terminal.app.";
    if (u.status === "restored") throw Error(`${d} Your settings have been restored from backup.`);
    else if (u.status === "failed") throw Error(`${d} Restoring from backup failed, try manually with: defaults import com.apple.Terminal ${u.backupPath}`);
    else throw Error(`${d} No backup was available to restore from.`);
  }
}
async function hr(e) {
  let n = [], s = i.XDG_CONFIG_HOME;
  if (s) n.push(ne(s, "alacritty", "alacritty.toml"));
  else n.push(ne(Je(), ".config", "alacritty", "alacritty.toml"));
  if (We() === "win32") {
    let f = i.APPDATA;
    if (f) n.push(ne(f, "alacritty", "alacritty.toml"));
  }
  let o = null, u = "", d = false;
  for (let f of n) try {
    u = await $e(f, { encoding: "utf-8" }), o = f, d = true;
    break;
  } catch (w) {
    if (!Kt(w)) throw w;
  }
  if (!o) o = n[0] ?? null;
  if (!o) throw Error("No valid config path found for Alacritty");
  try {
    if (d) {
      if (u.includes('mods = "Shift"') && u.includes('key = "Return"')) return `${Qn("success", e)("Alacritty Shift+Enter key binding already configured")}${h}${he.dim(`See ${o}`)}${h}`;
      let w = De(4).toString("hex"), x = `${o}.${w}.bak`;
      try {
        await Ne(o, x);
      } catch {
        return `${Qn("warning", e)("Error backing up existing Alacritty config. Bailing out.")}${h}${he.dim(`See ${o}`)}${h}${he.dim(`Backup path: ${x}`)}${h}`;
      }
    } else await ft(dr(o), { recursive: true });
    let f = u;
    if (u && !u.endsWith(`
`)) f += `
`;
    return f += `
[[keyboard.bindings]]
key = "Return"
mods = "Shift"
chars = "\\u001B\\r"
`, await Ze(o, f, { encoding: "utf-8" }), `${Qn("success", e)("Installed Alacritty Shift+Enter key binding")}${h}${Qn("success", e)("You may need to restart Alacritty for changes to take effect")}${h}${he.dim(`See ${o}`)}${h}`;
  } catch (f) {
    throw t(`Failed to install Alacritty keybinding: ${f instanceof Error ? f.message : String(f)}`, { level: "error" }), Error("Failed to install Alacritty Shift+Enter key binding");
  }
}
var dt = ["terminal::SendText", "\x1B\r"];
function Lt(e) {
  return D(e) && e.context === "Terminal" && D(e.bindings) && "shift-enter" in e.bindings;
}
async function pr(e) {
  let r = O() === "linux" ? i.XDG_CONFIG_HOME : void 0, n = r ? ne(r, "zed") : ne(Je(), ".config", "zed"), s = ne(n, "keymap.json"), o = he.dim(`See ${s}`), u = he.dim(`To add the binding yourself, add this block to the keymap array in ${s}:${h}{ "context": "Terminal", "bindings": { "shift-enter": ["terminal::SendText", "\\u001b\\r"] } }`), d = `${Qn("success", e)("Installed Zed Shift+Enter key binding")}${h}${o}${h}`, f = `${Qn("warning", e)("Couldn't read your Zed keymap, so it was left unchanged.")}${h}${u}${h}`, w = `${Qn("warning", e)("Your Zed keymap isn't a readable list of keybindings, so it was left unchanged.")}${h}${u}${h}`;
  try {
    await ft(n, { recursive: true });
    let x = null;
    try {
      x = await $e(s, { encoding: "utf-8" });
    } catch (M) {
      if (!Kt(M)) throw M;
      if (!G(M)) return { message: f, installed: false };
    }
    if (x === null || No(x).trim() === "") return await Hn(s, _([{ context: "Terminal", bindings: { "shift-enter": dt } }], null, 2) + `
`), { message: d, installed: true };
    let E = [], L = No(x), B = kqe(L, E, { allowTrailingComma: true });
    if (E.length > 0 || !Array.isArray(B)) return { message: w, installed: false };
    if (B.some(Lt)) return { message: `${Qn("success", e)("Zed Shift+Enter key binding already configured")}${h}${o}${h}`, installed: true };
    let se = De(4).toString("hex"), q = `${s}.${se}.bak`;
    try {
      await Ne(s, q);
    } catch (M) {
      return t(`Failed to back up Zed keymap: ${M instanceof Error ? M.message : String(M)}`, { level: "error" }), { message: `${Qn("warning", e)("Couldn't back up your Zed keymap; not modifying it.")}${h}${u}${h}`, installed: false };
    }
    let Q = B.findIndex((M) => D(M) && M.context === "Terminal" && D(M.bindings)), ie = { insertSpaces: true, tabSize: 2 }, H = null;
    try {
      let M = Q >= 0 ? mvn(L, [Q, "bindings", "shift-enter"], dt, { formattingOptions: ie }) : mvn(L, [B.length], { context: "Terminal", bindings: { "shift-enter": dt } }, { formattingOptions: ie, isArrayInsertion: true });
      H = M.length > 0 ? Tar(L, M) : null;
    } catch (M) {
      t(`Failed to edit Zed keymap: ${M instanceof Error ? M.message : String(M)}`, { level: "error" });
    }
    let V = [], J = H === null ? null : kqe(H, V, { allowTrailingComma: true });
    if (H === null || V.length > 0 || !Array.isArray(J) || !J.some(Lt)) return { message: `${Qn("warning", e)("Couldn't update your Zed keymap, so it was left unchanged.")}${h}${u}${h}`, installed: false };
    return await Hn(s, H), { message: d, installed: true };
  } catch (x) {
    throw t(`Failed to install Zed Shift+Enter key binding: ${x instanceof Error ? x.message : String(x)}`, { level: "error" }), Error("Failed to install Zed Shift+Enter key binding");
  }
}
var Xe = /[\u001b\u0080-\u009f]/g, Pt = "⁠";
function Mt(e, r, n = ku) {
  let s = e.search(Xe) === -1 ? e : gr(e), o = n(s, r, { hard: true, trim: false }).split(`
`), u = [], d = 0, f = true;
  for (let w of o) {
    if (!s.startsWith(w, d)) return { rows: Rt(e, r), degraded: true };
    let x = d + w.length, E = s.startsWith(`\r
`, x) ? 2 : s[x] === `
` || s[x] === "\r" ? 1 : 0;
    u.push({ text: e.slice(d, x), startOffset: d, isPrecededByNewline: f, endsWithNewline: E > 0 }), f = E > 0, d = x + E;
  }
  return d === e.length ? { rows: u, degraded: false } : { rows: Rt(e, r), degraded: true };
}
function gr(e) {
  let r = $Fe();
  return e.split(`
`).map((n) => n.search(Xe) === -1 ? n : n.split("\r").map((s) => s.search(Xe) === -1 ? s : [...r.feed(s), ...r.flush()].map((o) => o.type === "sequence" ? Pt.repeat(o.value.length) : o.value.replace(Xe, Pt)).join("")).join("\r")).join(`
`);
}
function Rt(e, r) {
  let n = [], s = 0;
  for (let o of e.split(/\r\n|[\n\r]/)) {
    let u = 0, d = 0;
    for (let { segment: x, index: E } of $a().segment(o)) {
      let L = le(x);
      if (d + L > r && E > u) n.push({ text: o.slice(u, E), startOffset: s + u, isPrecededByNewline: u === 0, endsWithNewline: false }), u = E, d = 0;
      d += L;
    }
    let f = s + o.length, w = e.startsWith(`\r
`, f) ? 2 : f < e.length ? 1 : 0;
    n.push({ text: o.slice(u), startOffset: s + u, isPrecededByNewline: u === 0, endsWithNewline: w > 0 }), s = f + w;
  }
  return n;
}
var br = /^[\p{L}\p{N}\p{M}_]+$/u, wr = /[\p{L}\p{N}][\p{L}\p{N}\p{M}]*/gu, Le = /\s/, mt = "(?:\\[(?:Pasted text|Image|\\.\\.\\.Truncated text|✦ Team setup guide) #\\d+(?: \\+\\d+ lines)?\\.*\\]|\\[⧉ [^\\]\\n]+\\])", xr = new RegExp(mt + "$"), It = new RegExp("^" + mt), Ips = (e, r) => e[r] === "[" && It.test(e.slice(r)), Dt = new RegExp(mt, "g");
function Ops(e) {
  return e.replace(Dt, (r) => " ".repeat(r.length));
}
var k5e = (e) => br.test(e), $lt = (e) => Le.test(e), Ult = (e) => e.length > 0 && !$lt(e) && !k5e(e);
class xi {
  measuredText;
  selection;
  offset;
  constructor(e, r = 0, n = 0) {
    this.measuredText = e;
    this.selection = n;
    this.offset = Math.max(0, Math.min(this.text.length, r));
  }
  static fromText(e, r, n = 0, s = 0) {
    return new xi(new Bt(e, r - 1), n, s);
  }
  getViewportStartLine(e) {
    if (e === void 0 || e <= 0) return 0;
    let { line: r } = this.getPosition(), n = this.measuredText.getWrappedText();
    if (n.length <= e) return 0;
    let s = Math.floor(e / 2), o = Math.max(0, r - s), u = Math.min(n.length, o + e);
    if (u - o < e) o = Math.max(0, u - e);
    return o;
  }
  getRenderedRowStartOffsets(e) {
    let { startLine: r, endLine: n } = this.getViewportLineRange(e);
    return this.measuredText.getWrappedLines().slice(r, n).map((s) => s.displayStartOffset);
  }
  getViewportLineRange(e) {
    let r = this.measuredText.getWrappedLines().length, n = this.getViewportStartLine(e), s = e !== void 0 && e > 0 ? Math.min(r, n + e) : r;
    return { startLine: n, endLine: s };
  }
  render(e, r, n, s, o, u, d, f, w, x) {
    let E = this.measuredText.getWrappedLines(), { startLine: L, endLine: B } = this.getViewportLineRange(o);
    if (u !== void 0) {
      let H = Math.min(u, this.offset), V = Math.max(u, this.offset), J = d ? this.findLogicalLineStart(H) : H, M = d ? this.findLogicalLineEnd(V) : this.measuredText.nextOffset(V);
      return E.slice(L, B).map((Y, me) => {
        let T = (f ?? false) && (Y.endsWithNewline || me + L === E.length - 1), { displayText: U, displayStartOffset: Z } = Y, z = Z + U.length;
        if (M <= Z || J >= z) {
          if (Z === z && J <= Z && (d ? M >= z : M > z)) return f ?? false ? "" : n(" ");
          return T ? U : U.trimEnd();
        }
        if (Z === z) return f ?? false ? "" : n(" ");
        let ae = Math.max(0, J - Z), ee = Math.min(U.length, M - Z);
        if (f ?? false) {
          let N = T ? U : U.trimEnd(), F = Math.min(ae, N.length), fe = Math.min(ee, N.length);
          return N.slice(0, F) + Wt(N, { from: F, to: fe }, n, { spans: w ?? [], rowStart: Z }) + N.slice(fe);
        }
        return U.slice(0, ae) + Wt(U, { from: ae, to: ee }, n, { spans: w ?? [], rowStart: Z }) + U.slice(ee).trimEnd();
      }).join(`
`);
    }
    let { line: se, column: q } = this.getPosition(), Q = this.measuredText.getWrappedText(), ie = this.measuredText.getWrappedLines();
    return Q.slice(L, B).map((H, V) => {
      let J = V + L, M = (f ?? false) && ((ie[J]?.endsWithNewline ?? false) || J === Q.length - 1), Y = H;
      if (r) {
        let N = Array.from($a().segment(H));
        if (J === Q.length - 1 && !x) {
          let F = Math.min(6, N.length), fe = N.length - F, re = N.length > F ? N[fe].index : 0;
          Y = r.repeat(fe) + H.slice(re);
        } else Y = r.repeat(N.length);
      }
      if (se !== J) return M ? Y : Y.trimEnd();
      let me = "", T = e, U = "", Z = 0, z = false;
      for (let { segment: N } of $a().segment(Y)) {
        if (z) {
          U += N;
          continue;
        }
        let F = Z + le(N);
        if (F > q) T = N, z = true;
        else Z = F, me += N;
      }
      let ae, ee = "";
      if (s && J === Q.length - 1 && this.isAtEnd() && s.text.length > 0) {
        let N = eee(s.text) || s.text[0];
        ae = e ? n(N) : N;
        let F = s.text.slice(N.length);
        if (F.length > 0) ee = s.dim(F);
      } else ae = e ? n(T) : T;
      if (f && !M && e === "") return (me + ae + ee + U).trimEnd();
      return me + ae + ee + (M ? U : U.trimEnd());
    }).join(`
`);
  }
  left() {
    if (this.offset === 0) return this;
    let e = this.placeholderEndingAt(this.offset);
    if (e) return new xi(this.measuredText, e.start);
    let r = this.measuredText.prevOffset(this.offset);
    return new xi(this.measuredText, r);
  }
  right() {
    if (this.offset >= this.text.length) return this;
    let e = this.placeholderStartingAt(this.offset);
    if (e) return new xi(this.measuredText, e.end);
    let r = this.measuredText.nextOffset(this.offset);
    return new xi(this.measuredText, Math.min(r, this.text.length));
  }
  placeholderEndingAt(e) {
    if (this.text[e - 1] !== "]") return null;
    let r = this.text.slice(0, e).match(xr);
    return r ? { start: e - r[0].length, end: e } : null;
  }
  placeholderStartingAt(e) {
    if (this.text[e] !== "[") return null;
    let r = this.text.slice(e).match(It);
    return r ? { start: e, end: e + r[0].length } : null;
  }
  placeholderContaining(e) {
    for (let r of this.text.matchAll(Dt)) {
      let n = r.index, s = n + r[0].length;
      if (e > n && e < s) return { start: n, end: s };
      if (n >= e) break;
    }
    return null;
  }
  snapOutOfPlaceholder(e, r) {
    let n = this.placeholderContaining(e);
    if (!n) return e;
    return r === "start" ? n.start : n.end;
  }
  up() {
    let { line: e, column: r } = this.getPosition();
    if (e === 0) return this;
    let n = this.measuredText.getWrappedText()[e - 1];
    if (n === void 0) return this;
    let s = le(n);
    if (r > s) {
      let u = this.getOffset({ line: e - 1, column: s });
      return new xi(this.measuredText, u, 0);
    }
    let o = this.getOffset({ line: e - 1, column: r });
    return new xi(this.measuredText, o, 0);
  }
  down() {
    let { line: e, column: r } = this.getPosition();
    if (e >= this.measuredText.lineCount - 1) return this;
    let n = this.measuredText.getWrappedText()[e + 1];
    if (n === void 0) return this;
    let s = le(n);
    if (r > s) {
      let u = this.getOffset({ line: e + 1, column: s });
      return new xi(this.measuredText, u, 0);
    }
    let o = this.getOffset({ line: e + 1, column: r });
    return new xi(this.measuredText, o, 0);
  }
  startOfCurrentLine() {
    let { line: e } = this.getPosition();
    return new xi(this.measuredText, this.getOffset({ line: e, column: 0 }), 0);
  }
  startOfLine() {
    let { line: e, column: r } = this.getPosition();
    if (r === 0 && e > 0) return new xi(this.measuredText, this.getOffset({ line: e - 1, column: 0 }), 0);
    return this.startOfCurrentLine();
  }
  firstNonBlankInLine() {
    let { line: e } = this.getPosition(), n = (this.measuredText.getWrappedText()[e] || "").match(/^\s*\S/), s = n?.index ? n.index + n[0].length - 1 : 0, o = this.getOffset({ line: e, column: s });
    return new xi(this.measuredText, o, 0);
  }
  endOfLine() {
    let { line: e, column: r } = this.getPosition(), n = this.measuredText.getLineLength(e);
    if (r >= n && e < this.measuredText.lineCount - 1) {
      let o = this.measuredText.getLineLength(e + 1), u = this.getOffset({ line: e + 1, column: o });
      return new xi(this.measuredText, u, 0);
    }
    let s = this.getOffset({ line: e, column: n });
    return new xi(this.measuredText, s, 0);
  }
  findLogicalLineStart(e = this.offset) {
    if (e === 0) return 0;
    let r = this.text.lastIndexOf(`
`, e - 1);
    return r === -1 ? 0 : r + 1;
  }
  findLogicalLineEnd(e = this.offset) {
    let r = this.text.indexOf(`
`, e);
    return r === -1 ? this.text.length : r;
  }
  getLogicalLineBounds() {
    return { start: this.findLogicalLineStart(), end: this.findLogicalLineEnd() };
  }
  createCursorWithColumn(e, r, n) {
    let s = r - e, o = Math.min(n, s), u = e + o, d = this.measuredText.snapToGraphemeBoundary(u);
    return new xi(this.measuredText, d, 0);
  }
  endOfLogicalLine() {
    return new xi(this.measuredText, this.findLogicalLineEnd(), 0);
  }
  lastCharInLogicalLine() {
    let e = this.findLogicalLineStart(), r = this.findLogicalLineEnd(), n = r > e ? this.measuredText.prevOffset(r) : e;
    return new xi(this.measuredText, n, 0);
  }
  startOfLogicalLine() {
    return new xi(this.measuredText, this.findLogicalLineStart(), 0);
  }
  firstNonBlankInLogicalLine() {
    let { start: e, end: r } = this.getLogicalLineBounds(), s = this.text.slice(e, r).match(/\S/), o = e + (s?.index ?? 0);
    return new xi(this.measuredText, o, 0);
  }
  upLogicalLine() {
    let { start: e } = this.getLogicalLineBounds();
    if (e === 0) return new xi(this.measuredText, 0, 0);
    let r = this.offset - e, n = e - 1, s = this.findLogicalLineStart(n);
    return this.createCursorWithColumn(s, n, r);
  }
  downLogicalLine() {
    let { start: e, end: r } = this.getLogicalLineBounds();
    if (r >= this.text.length) return new xi(this.measuredText, this.text.length, 0);
    let n = this.offset - e, s = r + 1, o = this.findLogicalLineEnd(s);
    return this.createCursorWithColumn(s, o, n);
  }
  forwardWord() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e) return new xi(this.measuredText, e.end);
    for (let r of this.measuredText.getReadlineWordBoundaries()) if (r.end > this.offset) {
      let n = this.snapOutOfPlaceholder(r.end, "end");
      return new xi(this.measuredText, n);
    }
    return new xi(this.measuredText, this.text.length);
  }
  backwardWord() {
    if (this.isAtStart()) return this;
    let e = this.placeholderEndingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e) return new xi(this.measuredText, e.start);
    let r = this.measuredText.getReadlineWordBoundaries();
    for (let n = r.length - 1; n >= 0; n--) {
      let s = r[n];
      if (s.start < this.offset) {
        let o = this.snapOutOfPlaceholder(s.start, "start");
        return new xi(this.measuredText, o);
      }
    }
    return new xi(this.measuredText, 0);
  }
  killWord() {
    let e = this.forwardWord();
    if (e.offset === this.offset) return { cursor: this, killed: "" };
    return this.killRange(this.offset, e.offset);
  }
  backwardKillWord() {
    let e = this.backwardWord();
    if (e.offset === this.offset) return { cursor: this, killed: "" };
    return this.killRange(e.offset, this.offset);
  }
  nextVimWord() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e) {
      let o = e.end;
      while (o < this.text.length && Le.test(this.graphemeAt(o))) o = this.measuredText.nextOffset(o);
      return new xi(this.measuredText, o);
    }
    let r = this.offset, n = (o) => this.measuredText.nextOffset(o), s = this.graphemeAt(r);
    if (!s) return this;
    if (k5e(s)) while (r < this.text.length && k5e(this.graphemeAt(r))) r = n(r);
    else if (Ult(s)) while (r < this.text.length && Ult(this.graphemeAt(r))) r = n(r);
    while (r < this.text.length && Le.test(this.graphemeAt(r))) r = n(r);
    return new xi(this.measuredText, this.snapOutOfPlaceholder(r, "end"));
  }
  endOfVimWord() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e && this.offset < e.end - 1) return new xi(this.measuredText, e.end - 1);
    let r = this.text, n = this.offset, s = (d) => this.measuredText.nextOffset(d);
    if (this.graphemeAt(n) === "") return this;
    n = s(n);
    while (n < r.length && Le.test(this.graphemeAt(n))) n = s(n);
    if (n >= r.length) return new xi(this.measuredText, r.length);
    let o = this.graphemeAt(n);
    if (k5e(o)) while (n < r.length) {
      let d = s(n);
      if (d >= r.length || !k5e(this.graphemeAt(d))) break;
      n = d;
    }
    else if (Ult(o)) while (n < r.length) {
      let d = s(n);
      if (d >= r.length || !Ult(this.graphemeAt(d))) break;
      n = d;
    }
    let u = this.placeholderStartingAt(n) ?? this.placeholderContaining(n);
    if (u) n = u.end - 1;
    return new xi(this.measuredText, n);
  }
  prevVimWord() {
    if (this.isAtStart()) return this;
    let e = this.placeholderEndingAt(this.offset);
    if (e) return new xi(this.measuredText, e.start);
    let r = this.placeholderContaining(this.offset);
    if (r) return new xi(this.measuredText, r.start);
    let n = this.offset, s = (u) => this.measuredText.prevOffset(u);
    n = s(n);
    while (n > 0 && Le.test(this.graphemeAt(n))) n = s(n);
    if (n === 0 && Le.test(this.graphemeAt(0))) return new xi(this.measuredText, 0);
    let o = this.graphemeAt(n);
    if (k5e(o)) while (n > 0) {
      let u = s(n);
      if (!k5e(this.graphemeAt(u))) break;
      n = u;
    }
    else if (Ult(o)) while (n > 0) {
      let u = s(n);
      if (!Ult(this.graphemeAt(u))) break;
      n = u;
    }
    return new xi(this.measuredText, this.snapOutOfPlaceholder(n, "start"));
  }
  nextWORD() {
    let e = this;
    while (!e.isOverWhitespace() && !e.isAtEnd()) e = e.right();
    while (e.isOverWhitespace() && !e.isAtEnd()) e = e.right();
    return e;
  }
  endOfWORD() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e && this.offset < e.end - 1) return new xi(this.measuredText, e.end - 1);
    let r = this;
    if (!r.isOverWhitespace() && (r.right().isOverWhitespace() || r.right().isAtEnd())) return r = r.right(), r.endOfWORD();
    if (r.isOverWhitespace()) {
      r = r.nextWORD();
      let s = r.placeholderStartingAt(r.offset);
      if (s) return new xi(this.measuredText, s.end - 1);
    }
    while (!r.right().isOverWhitespace() && !r.isAtEnd()) r = r.right();
    return r;
  }
  prevWORD() {
    let e = this;
    if (e.left().isOverWhitespace()) e = e.left();
    while (e.isOverWhitespace() && !e.isAtStart()) e = e.left();
    if (!e.isOverWhitespace()) while (!e.left().isOverWhitespace() && !e.isAtStart()) e = e.left();
    return e;
  }
  modifyText(e, r = "") {
    let n = this.offset, s = e.offset, o = this.text.slice(0, n) + r, u = o + this.text.slice(s), d = o.normalize("NFC").length, f = xi.fromText(u, this.columns, d), w = d !== n + r.normalize("NFC").length, { measuredText: x, offset: E } = f;
    if (w && x.snapToGraphemeBoundary(E) !== E) return new xi(x, x.nextOffset(E));
    return f;
  }
  insert(e) {
    return this.modifyText(this, e);
  }
  del() {
    if (this.isAtEnd()) return this;
    return this.modifyText(this.right());
  }
  backspace() {
    if (this.isAtStart()) return this;
    return this.left().modifyText(this);
  }
  deleteToLineStart(e) {
    if (this.offset > 0 && this.text[this.offset - 1] === `
`) return { cursor: this.left().modifyText(this), killed: `
` };
    let r = e ?? this.startOfLine();
    return this.killRange(r.offset, this.offset);
  }
  deleteToLineEnd(e) {
    if (this.text[this.offset] === `
`) return { cursor: this.modifyText(this.right()), killed: `
` };
    return this.killRange(this.offset, (e ?? this.endOfLine()).offset);
  }
  deleteToLogicalLineEnd() {
    if (this.text[this.offset] === `
`) return this.modifyText(this.right());
    return this.killRange(this.offset, this.endOfLogicalLine().offset).cursor;
  }
  deleteWORDBefore() {
    if (this.isAtStart()) return { cursor: this, killed: "" };
    return this.killRange(this.prevWORD().offset, this.offset);
  }
  killRange(e, r) {
    let n = this.snapOutOfPlaceholder(e, "start"), s = this.snapOutOfPlaceholder(r, "end"), o = new xi(this.measuredText, n), u = new xi(this.measuredText, s);
    return { cursor: o.modifyText(u), killed: this.text.slice(n, s) };
  }
  graphemeAt(e) {
    if (e >= this.text.length) return "";
    let r = this.measuredText.nextOffset(e);
    return this.text.slice(e, r);
  }
  isOverWhitespace() {
    let e = this.text[this.offset] ?? "";
    return /\s/.test(e);
  }
  equals(e) {
    return this.offset === e.offset && this.measuredText === e.measuredText;
  }
  isAtStart() {
    return this.offset === 0;
  }
  isAtEnd() {
    return this.offset >= this.text.length;
  }
  startOfFirstLine() {
    return new xi(this.measuredText, 0, 0);
  }
  startOfLastLine() {
    let e = this.text.lastIndexOf(`
`);
    if (e === -1) return this.startOfLine();
    return new xi(this.measuredText, e + 1, 0);
  }
  goToLine(e) {
    let r = this.text.split(`
`), n = Math.min(Math.max(0, e - 1), r.length - 1), s = 0;
    for (let o = 0; o < n; o++) s += (r[o]?.length ?? 0) + 1;
    return new xi(this.measuredText, s, 0);
  }
  endOfFile() {
    return new xi(this.measuredText, this.text.length, 0);
  }
  get text() {
    return this.measuredText.text;
  }
  get columns() {
    return this.measuredText.columns + 1;
  }
  getPosition() {
    return this.measuredText.getPositionFromOffset(this.offset);
  }
  getOffset(e) {
    return this.measuredText.getOffsetFromPosition(e);
  }
  findCharacter(e, r, n = 1) {
    let s = r === "f" || r === "t", o = r === "t" || r === "T", u = 0;
    if (s) {
      let d = this.findLogicalLineEnd(), f = this.measuredText.nextOffset(this.offset);
      while (f < d) {
        if (this.graphemeAt(f) === e) {
          if (u++, u === n) return o ? Math.max(this.offset, this.measuredText.prevOffset(f)) : f;
        }
        f = this.measuredText.nextOffset(f);
      }
    } else {
      let d = this.findLogicalLineStart();
      if (this.offset <= d) return null;
      let f = this.measuredText.prevOffset(this.offset);
      while (f >= d) {
        if (this.graphemeAt(f) === e) {
          if (u++, u === n) return o ? Math.min(this.offset, this.measuredText.nextOffset(f)) : f;
        }
        if (f === d) break;
        f = this.measuredText.prevOffset(f);
      }
    }
    return null;
  }
}
class Nt {
  text;
  startOffset;
  isPrecededByNewline;
  endsWithNewline;
  displayText;
  displayStartOffset;
  constructor(e, r, n, s) {
    this.text = e;
    this.startOffset = r;
    this.isPrecededByNewline = n;
    this.endsWithNewline = s;
    this.displayText = n ? e : e.trimStart(), this.displayStartOffset = r + (e.length - this.displayText.length);
  }
  equals(e) {
    return this.text === e.text && this.startOffset === e.startOffset;
  }
}
class Bt {
  columns;
  _wrappedLines;
  text;
  navigationCache;
  graphemeBoundaries;
  constructor(e, r) {
    this.columns = r;
    this.text = e.normalize("NFC"), this.navigationCache = /* @__PURE__ */ new Map();
  }
  get wrappedLines() {
    if (!this._wrappedLines) {
      let { rows: e, degraded: r } = Mt(this.text, this.columns);
      if (r) yr(this.columns, this.text.length);
      this._wrappedLines = e.map((n) => new Nt(n.text, n.startOffset, n.isPrecededByNewline, n.endsWithNewline));
    }
    return this._wrappedLines;
  }
  getGraphemeBoundaries() {
    if (!this.graphemeBoundaries) {
      this.graphemeBoundaries = [];
      for (let { index: e } of $a().segment(this.text)) this.graphemeBoundaries.push(e);
      this.graphemeBoundaries.push(this.text.length);
    }
    return this.graphemeBoundaries;
  }
  wordBoundariesCache;
  getWordBoundaries() {
    if (!this.wordBoundariesCache) {
      this.wordBoundariesCache = [];
      for (let e of zZo().segment(this.text)) this.wordBoundariesCache.push({ start: e.index, end: e.index + e.segment.length });
    }
    return this.wordBoundariesCache;
  }
  readlineWordBoundariesCache;
  getReadlineWordBoundaries() {
    if (!this.readlineWordBoundariesCache) {
      let e = [], r = false;
      for (let n of this.getWordBoundaries()) {
        let s = this.text.slice(n.start, n.end);
        for (let o of s.matchAll(wr)) {
          let u = this.snapToGraphemeBoundary(n.start + o.index), d = n.start + o.index + o[0].length, f = this.snapToGraphemeBoundary(d), w = f === d ? d : this.nextOffset(f), x = e.at(-1);
          if (x && (u < x.end || u === x.end && r)) x.end = Math.max(x.end, w);
          else e.push({ start: u, end: w });
          r = w !== d;
        }
      }
      this.readlineWordBoundariesCache = e;
    }
    return this.readlineWordBoundariesCache;
  }
  binarySearchBoundary(e, r, n) {
    let s = 0, o = e.length - 1, u = n ? this.text.length : 0;
    while (s <= o) {
      let d = Math.floor((s + o) / 2), f = e[d];
      if (f === void 0) break;
      if (n) if (f > r) u = f, o = d - 1;
      else s = d + 1;
      else if (f < r) u = f, s = d + 1;
      else o = d - 1;
    }
    return u;
  }
  stringIndexToDisplayWidth(e, r) {
    if (r <= 0) return 0;
    if (r >= e.length) return le(e);
    return le(e.substring(0, r));
  }
  displayWidthToStringIndex(e, r) {
    if (r <= 0) return 0;
    if (!e) return 0;
    if (e === this.text) return this.offsetAtDisplayWidth(r);
    let n = 0, s = 0;
    for (let { segment: o, index: u } of $a().segment(e)) {
      let d = le(o);
      if (n + d > r) break;
      n += d, s = u + o.length;
    }
    return s;
  }
  offsetAtDisplayWidth(e) {
    if (e <= 0) return 0;
    let r = 0, n = this.getGraphemeBoundaries();
    for (let s = 0; s < n.length - 1; s++) {
      let o = n[s], u = n[s + 1];
      if (o === void 0 || u === void 0) continue;
      let d = this.text.substring(o, u), f = le(d);
      if (r + f > e) return o;
      r += f;
    }
    return this.text.length;
  }
  getWrappedText() {
    return this.wrappedLines.map((e) => e.displayText);
  }
  getWrappedLines() {
    return this.wrappedLines;
  }
  getLine(e) {
    let r = this.wrappedLines;
    return r[Math.max(0, Math.min(e, r.length - 1))];
  }
  getOffsetFromPosition(e) {
    let r = this.getLine(e.line);
    if (r.text.length === 0 && r.endsWithNewline) return r.startOffset;
    let n = r.displayStartOffset - r.startOffset, s = e.column + n, o = this.displayWidthToStringIndex(r.text, s), u = r.startOffset + o;
    return this.snapToGraphemeBoundary(u);
  }
  getLineLength(e) {
    let r = this.getLine(e);
    return le(r.text);
  }
  getPositionFromOffset(e) {
    let r = this.wrappedLines;
    for (let o = 0; o < r.length; o++) {
      let u = r[o], d = r[o + 1];
      if (e >= u.startOffset && (!d || e < d.startOffset)) {
        let f = e - u.startOffset, w;
        if (u.isPrecededByNewline) w = this.stringIndexToDisplayWidth(u.text, f);
        else {
          let x = u.displayStartOffset - u.startOffset;
          if (f < x) w = 0;
          else {
            let E = u.displayText, L = f - x;
            w = this.stringIndexToDisplayWidth(E, L);
          }
        }
        return { line: o, column: Math.max(0, w) };
      }
    }
    let n = r.length - 1, s = this.wrappedLines[n];
    return { line: n, column: le(s.text) };
  }
  get lineCount() {
    return this.wrappedLines.length;
  }
  withCache(e, r) {
    let n = this.navigationCache.get(e);
    if (n !== void 0) return n;
    let s = r();
    return this.navigationCache.set(e, s), s;
  }
  nextOffset(e) {
    return this.withCache(`next:${e}`, () => {
      let r = this.getGraphemeBoundaries();
      return this.binarySearchBoundary(r, e, true);
    });
  }
  prevOffset(e) {
    if (e <= 0) return 0;
    return this.withCache(`prev:${e}`, () => {
      let r = this.getGraphemeBoundaries();
      return this.binarySearchBoundary(r, e, false);
    });
  }
  snapToGraphemeBoundary(e) {
    if (e <= 0) return 0;
    if (e >= this.text.length) return this.text.length;
    let r = this.getGraphemeBoundaries(), n = 0, s = r.length - 1;
    while (n < s) {
      let o = n + s + 1 >> 1;
      if (r[o] <= e) n = o;
      else s = o - 1;
    }
    return r[n];
  }
}
function Wt(e, { from: r, to: n }, s, { spans: o, rowStart: u }) {
  let d = r, f = "";
  for (let w of o) {
    let x = Math.max(d, w.start - u), E = Math.min(n, w.end - u);
    if (E <= x) continue;
    f += (x > d ? s(e.slice(d, x)) : "") + e.slice(x, E), d = E;
  }
  return d === r || n > d ? f + s(e.slice(d, n)) : f;
}
function yr(e, r) {
  if (!qi().claim("measured_text_wrap_fallback")) return;
  l(new R(`Wrapped rows do not tile the text (columns=${e}, length=${r}); fell back to plain hard wrapping`, "Wrapped rows do not tile the text; fell back to plain hard wrapping"));
}
class Ft {
  prewarmed = false;
  claim() {
    if (this.prewarmed) return false;
    return this.prewarmed = true, true;
  }
  reset() {
    this.prewarmed = false;
  }
}
var Pn = new W(() => new Ft());
function Ht() {
}
function Gt(e) {
  return false;
}
var RIn = 3e3, xIn = "Press ← again to go back to agents", Mgr = "Ambiguous ←, press again to detach", jt = 1e3, Hgr = 150, Tr = 150;
function Dgr() {
  return { editedEmptyAtMs: 0, armedAtMs: 0, absorbAnchorMs: 0, lastQualifiedLeftPressMs: 0, attachConfirmArmedAtMs: 0, absorbLogged: false };
}
function Lgr(e, r, n, s = k("tengu_left_arrow_editing_guard", true), o = _Xt(r), u = o9e()) {
  if (n !== true) return "reject";
  let d = (w) => w !== 0 && w >= u;
  if (o) {
    if (d(e.absorbAnchorMs) && r - e.absorbAnchorMs < jt) return "attach-absorb";
    if (d(e.attachConfirmArmedAtMs) && r - e.attachConfirmArmedAtMs <= 3e3) return r - e.attachConfirmArmedAtMs >= Tr ? "fire" : "attach-absorb";
    return "attach-arm";
  }
  if (!s) return "fire";
  if (d(e.lastQualifiedLeftPressMs) && r - e.lastQualifiedLeftPressMs < Hgr) return "absorb";
  if (d(e.armedAtMs) && r - e.armedAtMs <= 3e3) return "fire";
  if (d(e.absorbAnchorMs) && r - e.absorbAnchorMs < jt) return "absorb";
  return d(e.editedEmptyAtMs) && r - e.editedEmptyAtMs < 2e3 ? "arm" : "fire";
}
function Ngr(e, r, n) {
  switch (r) {
    case "fire":
      if (e.armedAtMs !== 0) e.editedEmptyAtMs = 0;
      e.armedAtMs = 0, e.attachConfirmArmedAtMs = 0, e.absorbAnchorMs = n, e.lastQualifiedLeftPressMs = n, e.absorbLogged = false;
      return;
    case "arm":
      e.armedAtMs = n, e.absorbAnchorMs = n, e.lastQualifiedLeftPressMs = n, e.absorbLogged = false;
      return;
    case "absorb":
      if (n - e.lastQualifiedLeftPressMs < Hgr) e.absorbAnchorMs = n;
      e.lastQualifiedLeftPressMs = n;
      return;
    case "reject":
      return;
    case "attach-arm":
      e.attachConfirmArmedAtMs = n;
      return;
    case "attach-absorb":
      return;
  }
}
function Fgr(e, r, n) {
  let s = r - o9e();
  switch (e) {
    case "fire":
      return;
    case "arm":
      a("tengu_left_arrow_blocked", { reason: S("editing-quiet") });
      return;
    case "attach-arm":
      a("tengu_left_arrow_blocked", { reason: S("attach-quiet-hint"), ms_since_stamp: s }), t(`leftArrowGesture: attach-quiet hint armed (ms_since_stamp=${s})`, { level: "debug" });
      return;
    case "attach-absorb":
      a("tengu_left_arrow_blocked", { reason: S("attach-quiet"), ms_since_stamp: s }), t(`leftArrowGesture: attach-quiet silent absorb (ms_since_stamp=${s})`, { level: "debug" });
      return;
    case "reject":
      if (qi().claim("left_arrow_not_solo_reject")) a("tengu_left_arrow_blocked", { reason: S("not-solo") });
      return;
    case "absorb":
      if (n.absorbAnchorMs === r || n.absorbLogged) return;
      n.absorbLogged = true;
      let o = r - n.absorbAnchorMs;
      a("tengu_left_arrow_blocked", { reason: S("absorb"), ms_since_press: o }), t(`leftArrowGesture: human-cadence press absorbed, too soon after the last ← that fired or showed the hint (ms_since_press=${o})`, { level: "debug" });
      return;
  }
}
var PIn = (e, r) => e.filter((n) => n.start < r), $gr = (e, r) => e.normalize("NFC") === e && r.text.normalize("NFC") === r.text;
function Sr(e, r, n) {
  let s = n === "up" || n === "down", o = e.cursorOver(r);
  for (; ; ) {
    let u = o[n]();
    if (u.equals(o)) return r;
    let d = u.getPosition().line, f = p0o(e.text, u.offset), w = (s ? [f, r.measuredText.nextOffset(f), r.measuredText.prevOffset(f)] : [f]).find((x) => x !== r.offset && (!s || e.rowOf(x) === d));
    if (w !== void 0) return new xi(r.measuredText, w);
    o = u;
  }
}
function ht({ buffer: e, texts: r, columns: n, side: s }) {
  if (r.length === 0) return;
  let o = Iln(e, r);
  if (!$gr(e, o)) return;
  let { measuredText: u } = xi.fromText(o.text, n), d = (w) => new xi(u, T2e(o, w.offset, s)), f = (w) => u.getPositionFromOffset(T2e(o, w, s)).line;
  return { text: o, cursorOver: d, rowOf: f, lastRow: () => {
    let w = T2e(o, e.length, "before");
    return u.getPositionFromOffset(e.endsWith(`
`) ? w : u.prevOffset(w)).line;
  }, rowMoved: (w, x) => Sr({ text: o, cursorOver: d, rowOf: f }, w, x) };
}
function IIn({ buffer: e, offset: r, texts: n, columns: s, side: o }) {
  let u = xi.fromText(e, s, r), d = ht({ buffer: e, texts: n, columns: s, side: o });
  if (d === void 0) return { cursor: u, bufferOffset: (f) => f };
  return { cursor: d.cursorOver(u), bufferOffset: (f) => p0o(d.text, f) };
}
var Er = () => {
};
function Ar(e, r) {
  if (e === "") return;
  if (r !== "") {
    K4("deleted");
    return;
  }
  let n = e.trim() === "" ? e.includes(`
`) ? "new line" : e.includes("	") ? "tab" : "space" : e.replaceAll(`
`, " ").trim();
  K4(n);
}
var Or = /* @__PURE__ */ new Set(["insert", "clear", "enter", "center", "undefined", "mouse", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12"]);
function z8t() {
  return i.terminal === "Apple_Terminal" && Gt("shift");
}
function Ut(e) {
  let r = new Map(e);
  return function(n) {
    return (r.get(n) ?? Er)(n);
  };
}
function V8t({ value: e, onChange: r, onSubmit: n, onExit: s, onExitMessage: o, onEscapeMessage: u, historyOnClear: d = true, onLeftArrowOnEmpty: f, leftArrowConfirmHint: w, onHistoryUp: x, onHistoryDown: E, onHistoryReset: L, mask: B = "", maskWhole: se = false, multiline: q = false, disableBackslashReturn: Q = false, clearOnSubmit: ie = true, disableCtrlCClear: H = false, cursorChar: V, preserveTrailingWhitespace: J = false, invert: M, columns: Y, leadingPill: me, onImagePaste: T, disableCursorMovementForUpDownKeys: U = false, disableEscapeDoublePress: Z = false, maxVisibleLines: z, externalOffset: ae, onOffsetChange: ee, inputFilter: N, getPastedContents: F, getInputMode: fe, inlineGhostText: re, dim: xe, virtualTexts: oe, isCursorOnCharacter: ye = false, editRelay: be, commitEdit: we, selectionAnchor: Oe, selectionLinewise: Yt = false }) {
  let gt = _i(), Te = T5e();
  if (i.terminal === "Apple_Terminal") Ht();
  let Be = ae, Fe = ee, I = me?.text ?? "", b = xi.fromText(I + e, Y, I.length + Be), bt = re && xe && re.insertPosition === Be ? { text: re.text, dim: xe } : void 0, wt = bt !== void 0 && Be >= e.length, et = te(() => oe === void 0 || oe.length === 0 || e === "" || B !== "" ? void 0 : ht({ buffer: I + e, texts: C2e(wt ? PIn(oe, e.length) : oe, I.length), columns: Y, side: ye ? "after" : "before" }), [oe, e, B, I, wt, Y, ye]), tt = false, rt, He = false;
  function Ee(c) {
    return N && rt ? N(c, rt) : c;
  }
  let { addNotification: Ge, removeNotification: nt } = Co(), { storageV5: ot } = Me(), [pe] = y(Dgr), Ke = "left-arrow-again-for-agents", je = A({ key: "Ctrl-C", pending: false }), zt = J5((c) => {
    je.current.pending = c, o?.(c, je.current.key);
  }, () => s?.(), () => {
    if (!H && e) r(""), Fe(0), L?.();
  });
  function xt(c) {
    if (!je.current.pending) je.current.key = c;
    zt();
  }
  let qt = J5((c) => {
    if (!e) return;
    if (u) {
      u(c);
      return;
    }
    if (!c) return;
    Ge({ key: "escape-again-to-clear", kind: "feedback", text: "Esc again to clear", row1Hint: "Esc again to clear", priority: "immediate", timeoutMs: 1e3 });
  }, () => {
    if (u?.(false), nt("escape-again-to-clear"), e) {
      if (d && B === "" && e.trim() !== "") {
        let c = F ? Ko(F(), (ce) => ce.type === "text" && ce.unavailable === true) : void 0, C = fe?.(), v = C !== void 0 ? dIe(e, C) : e, X = c ? { display: v, pastedContents: c } : v;
        if (C !== void 0) Mhe(X, ot, { submitMode: C });
        else Mhe(X, ot);
      }
      r(""), Fe(0), L?.();
    }
  });
  function Jt() {
    if (b.text === I && e === "") return xt("Ctrl-D"), b;
    return b.del();
  }
  function yt() {
    if (I !== "" && b.offset === I.length) return xi.fromText(b.text.slice(I.length), Y);
    return b.backspace();
  }
  function ke(c, C) {
    let v = c.startsWith(I) ? c.slice(I.length) : c;
    return Te.dispatch(B === "" ? { type: "kill", text: v, direction: C } : { type: "interrupt" }), Ar(v, B), v;
  }
  function at() {
    let { cursor: c, killed: C } = b.deleteToLineEnd(ge("endOfLine"));
    return ke(C, "append"), c;
  }
  function Tt() {
    let { cursor: c, killed: C } = b.deleteToLineStart(ge("startOfLine")), v = ke(C, "prepend");
    if (B === "" && v.length >= 3) Ge({ key: "kill-paste-hint", kind: "hint", text: "Ctrl+Y to paste deleted text", row1Hint: "ctrl+y to undo delete", priority: "immediate", timeoutMs: 5e3 });
    return c;
  }
  function Zt() {
    let { cursor: c, killed: C } = b.killWord();
    return ke(C, "append"), c;
  }
  function Qt() {
    let { cursor: c, killed: C } = b.backwardKillWord();
    return ke(C, "prepend"), c;
  }
  function Xt() {
    let { cursor: c, killed: C } = b.deleteWORDBefore();
    return ke(C, "prepend"), c;
  }
  function er() {
    let c = Ee(Vlt(Te.state));
    if (c.length > 0) {
      let C = b.offset - I.length, v = b.insert(c);
      return Te.dispatch({ type: "yank", start: C, length: c.length }), v;
    }
    return b;
  }
  function tr() {
    let c = jIn(Te.state);
    if (!c) return b;
    let { text: C, length: v } = c, X = I.length + c.start, ce = Ee(C);
    Te.dispatch({ type: "yankPop" });
    let Ae = b.text.slice(0, X), Ye = b.text.slice(X + v), ur = Ae + ce + Ye, cr = X + ce.length;
    return Te.dispatch({ type: "updateYankLength", length: ce.length }), xi.fromText(ur, Y, cr);
  }
  let rr = Ut([["a", () => b.startOfLogicalLine()], ["b", () => b.left()], ["c", () => (xt("Ctrl-C"), b)], ["d", Jt], ["e", () => b.endOfLogicalLine()], ["f", () => b.right()], ["h", yt], ["k", at], ["n", () => At()], ["p", () => Et()], ["u", Tt], ["w", Xt], ["y", er]]), nr = Ut([["b", () => b.backwardWord()], ["f", () => b.forwardWord()], ["d", Zt], ["y", tr]]);
  function sr({ meta: c, shift: C }) {
    if (q && !Q && b.offset > 0 && b.text[b.offset - 1] === "\\") return Pps(ot), b.backspace().insert(Ee(`
`));
    if (c || C) return b.insert(Ee(`
`));
    if (z8t()) return b.insert(Ee(`
`));
    if (n) n(b.text.slice(I.length)), tt = true;
    return b;
  }
  function Ue() {
    pe.editedEmptyAtMs = Date.now();
  }
  function St() {
    if (pe.armedAtMs === 0) return;
    pe.armedAtMs = 0, nt(Ke);
  }
  function Ve() {
    return et !== void 0 && b.text === et.text.draft ? et : void 0;
  }
  function ge(c) {
    return Ve()?.rowMoved(b, c) ?? b[c]();
  }
  function Et() {
    if (U) return Ue(), x?.(), b;
    let c = Ve();
    if (x && (c ? c.rowOf(b.offset) <= c.rowOf(I.length) : b.getPosition().line <= b.measuredText.getPositionFromOffset(I.length).line)) return Ue(), x(), b;
    let C = ge("up");
    if (!C.equals(b)) return C;
    if (q) {
      let v = b.upLogicalLine();
      if (!v.equals(b)) return v;
    }
    return b;
  }
  function At() {
    if (U) return Ue(), E?.(), b;
    let c = Ve();
    if (E && (c ? c.rowOf(b.offset) >= c.lastRow() : b.getPosition().line >= b.measuredText.lineCount - 1)) return Ue(), E(), b;
    let C = ge("down");
    if (!C.equals(b)) return C;
    if (q) {
      let v = b.downLogicalLine();
      if (!v.equals(b)) return v;
    }
    return b;
  }
  function ir(c) {
    if (c.ctrl && (c.key === "k" || c.key === "u" || c.key === "w")) return true;
    if (c.meta && !c.ctrl && c.key === "d") return true;
    if (c.key === "backspace" && (c.meta || c.superKey || c.ctrl)) return true;
    if (c.key === "delete" && (c.meta || c.superKey)) return true;
    return false;
  }
  function or(c) {
    return (c.ctrl || c.meta) && c.key === "y";
  }
  function ar(c, C) {
    switch (c.name) {
      case "escape":
        if (Z) return;
        return qt(), b;
      case "left":
        if (c.superKey) return ge("startOfLine");
        if (c.ctrl || c.meta || c.fn) return b.backwardWord();
        if (f && !c.shift && b.text === I) {
          let v = Date.now(), X = Lgr(pe, v, c.soloKeypress), ce = pe.armedAtMs === 0 ? void 0 : v - pe.absorbAnchorMs;
          switch (Ngr(pe, X, v), Fgr(X, v, pe), X) {
            case "fire":
              return nt(Ke), f(ce), b;
            case "arm":
              return Ge({ key: Ke, kind: "feedback", text: w ?? "Press ← again", priority: "immediate", timeoutMs: RIn }), b;
            case "absorb":
              return b;
            case "attach-arm":
              return Ge({ key: Ke, kind: "feedback", text: Mgr, priority: "immediate", timeoutMs: RIn }), b;
            case "attach-absorb":
              return b;
            case "reject":
              return b.left();
          }
        }
        return b.left();
      case "right":
        if (c.superKey) return ge("endOfLine");
        if (c.ctrl || c.meta || c.fn) return b.forwardWord();
        return b.right();
      case "up":
        if (c.shift || c.ctrl || c.meta) return;
        return Et();
      case "down":
        if (c.shift || c.ctrl || c.meta) return;
        return At();
      case "backspace":
        if (c.superKey) return Tt();
        if (c.meta || c.ctrl) return Qt();
        return yt();
      case "delete":
        if (c.superKey) return at();
        if (c.meta) return at();
        return b.del();
      case "home":
        if (c.ctrl) return;
        return ge("startOfLine");
      case "end":
        if (c.ctrl) return;
        return ge("endOfLine");
      case "pagedown":
        if (gt || c.ctrl) return;
        return ge("endOfLine");
      case "pageup":
        if (gt || c.ctrl) return;
        return ge("startOfLine");
      case "return":
        if (c.ctrl) return;
        return sr(c);
      case "enter":
        return b.insert(Ee(`
`));
      case "tab":
        return;
    }
    if (q && c.ctrl && !c.shift && !c.meta && c.name === "j") return b.insert(Ee(`
`));
    if (c.ctrl) return rr(c.key);
    if (c.meta) return nr(c.key);
    if (Or.has(c.name)) return;
    if (C.length === 0) return;
    if (fe !== void 0 && b.offset === I.length && vIt(C) && fe() !== vb(C)) return He = true, b.insert(C).left();
    return b.insert(C);
  }
  function lr(c) {
    rt = c, He = false;
    let C = N ? N(c.key, c) : c.key;
    if (C === "" && c.key !== "") {
      c.preventDefault();
      return;
    }
    if (!ir(c) && !or(c)) Te.dispatch({ type: "interrupt" });
    if (!(c.name === "left" && !c.ctrl && !c.meta && !c.fn && !c.superKey && !c.shift)) St();
    let v = ar(c, C);
    if (v === void 0) return;
    if (c.preventDefault(), !b.equals(v)) {
      let X = v.text.startsWith(I);
      if (X && v.offset < I.length) v = new xi(v.measuredText, I.length);
      let ce = b.text.slice(I.length), Ae = X ? v.text.slice(I.length) : v.text, Ye = v.offset - (X ? I.length : 0);
      if (ce !== "" && Ae === "") pe.editedEmptyAtMs = Date.now();
      if (ce !== Ae) if (we !== void 0 && !He) we(() => r(Ae));
      else r(Ae);
      if (Fe(Ye), be?.isRecording() === true && !He) be.record({ before: { text: ce, cursor: Math.max(0, b.offset - I.length) }, after: { text: Ae, cursor: Ye }, key: c });
      if (b = v, !X) I = "", me?.onDelete();
    }
    if (tt) {
      if (tt = false, ie) b = xi.fromText(I, Y, I.length);
    }
  }
  let Ce = Ve(), ve = Ce?.cursorOver(b) ?? b, Ot = ve.getPosition();
  return { handleKeyDown: lr, renderedValue: ve.render(V, B, M, bt, z, Oe === void 0 || Oe === null ? void 0 : Ce ? T2e(Ce.text, I.length + Oe, "after") : I.length + Oe, Yt, J, Ce?.text.spans, se), offset: Be, setOffset: Fe, cursorLine: Ot.line - ve.getViewportStartLine(z), cursorColumn: Ot.column, renderedRowStartOffsets: ve.getRenderedRowStartOffsets(z), shown: Ce && { text: Ce.text, cursorOffset: ve.offset }, noteKeystrokeEmptied: () => {
    pe.editedEmptyAtMs = Date.now();
  }, disarmLeftArrowConfirm: St };
}
var pt = " ▁▂▃▄▅▆▇█", Cr = 0.7, $r = 1.8, Lr = 0.15;
function fPt() {
  let e = K((V) => Kh(V.settings.prefersReducedMotion)), r = wro(), n = Vh((V) => V.voiceState) === "recording", s = Vh((V) => V.voiceAudioLevels), o = n && !e, [u, d] = Wa(o ? 50 : null);
  if (!o) return [u, null];
  let f = s.at(-1) ?? 0, w = Math.min(f * $r, 1), x = r.next(w, Cr), E = Math.max(1, Math.min(Math.round(x * (pt.length - 1)), pt.length - 1)), L = f < Lr, B = d / 1e3 * 90 % 360, se = yy() ? Y8t(B) : B, { r: q, g: Q, b: ie } = L ? { r: 128, g: 128, b: 128 } : X8t(se), H = `#${(q << 16 | Q << 8 | ie).toString(16).padStart(6, "0")}`;
  return [u, { char: pt[E], hex: H }];
}
j();
import { basename as kr, isAbsolute as vr } from "path";
var _r = 50;
function Vt() {
  return ld(it());
}
function Blt({ onPaste: e, handleKeyDown: r, onImagePaste: n }) {
  let s = pn(), o = Se(XI), [u, d] = y(false), f = A(true), w = A(false), x = A(false), [E, L] = y(0), B = te(() => O() === "macos", []), se = te(() => O() === "wsl", []);
  P(() => () => {
    f.current = false;
  }, []);
  let q = Bo(() => {
    r(new RUe({ kind: "key", name: "return", fn: false, ctrl: false, meta: false, shift: false, option: false, super: false, sequence: "\r", raw: "\r", code: void 0, col: void 0, row: void 0 }));
  });
  P(() => {
    if (E === 0) return;
    return s.setTimeout(() => {
      if (w.current = false, x.current) x.current = false, q();
    }, 0);
  }, [E, s]);
  let Q = de(() => {
    if (!n || !f.current) return;
    Cme(Vt()).then((T) => {
      if (T && f.current) n(T.base64, { mediaType: T.mediaType, dimensions: T.dimensions });
    }).catch((T) => {
      if (f.current) m("input_image_paste", "clipboard_read_failed"), l(T);
    }).finally(() => {
      V();
    });
  }, [n]), ie = X1(Q, _r);
  function H(T) {
    if (e) {
      e(T);
      return;
    }
    r(new RUe({ kind: "key", name: void 0, fn: false, ctrl: false, meta: false, shift: false, option: false, super: false, sequence: T, raw: T, code: void 0, col: void 0, row: void 0 }));
  }
  function V() {
    if (!f.current) return;
    w.current = false, x.current = false, d(false);
  }
  function J() {
    d(false), L((T) => T + 1);
  }
  function M(T, U = T.length === 0, Z = T.endsWith("[I") || T.endsWith("[O")) {
    w.current = true;
    let z = Z ? T.replace(/\[[IO]$/, "") : T;
    if (U && (B || se) && n) {
      ie();
      return;
    }
    let ae = z.split(/ (?=\/|[A-Za-z]:\\)/).flatMap((F) => F.split(`
`)).filter((F) => F.trim()), ee = [], N = [];
    for (let F of ae) if (fAs(F)) ee.push(F);
    else N.push(F);
    if (n && ee.length > 0) {
      let F = /\/TemporaryItems\/.*screencaptureui.*\/Screenshot/i.test(z), fe = Vt();
      Promise.all(ee.map((re) => mAs(re, fe, (xe) => c_i(xe, () => {
        let oe = o?.getState().toolPermissionContext;
        return oe ? [oe, u_i(oe)] : [];
      }, (oe, ye) => k6n(oe, ye, "person"))))).then((re) => {
        if (!f.current) return;
        let xe = re.includes("refused"), oe = ee.every((be) => vr(Oyo(be) ?? "")), ye = re.filter((be) => be !== null && be !== "refused");
        if (ye.length > 0) {
          for (let [be, we] of ye.entries()) {
            let Oe = kr(we.path);
            n(we.base64, { mediaType: we.mediaType, filename: Oe, dimensions: we.dimensions, sourcePath: we.path, continuesGesture: be > 0 });
          }
          if (N.length > 0) H(N.join(`
`));
          V();
        } else if (F && B && !xe && oe) ie();
        else p("input_image_drag", xe ? "read_withheld" : "read_failed"), H(z), V();
      }).catch((re) => {
        if (!f.current) return;
        m("input_image_drag", "read_threw"), t(`Image paste read failed: ${re instanceof Error ? re.message : String(re)}`, { level: "error" }), H(z), V();
      });
      return;
    }
    H(z), J();
  }
  function Y(T) {
    T.preventDefault(), d(true), M(T.text, T.rawEmpty, T.rawEndedWithFocusTail);
  }
  function me(T) {
    if (w.current && T.name === "return") {
      T.preventDefault(), x.current = true;
      return;
    }
    if ((e || n) && !T.ctrl && !T.meta && T.key.length > S9 && !T.defaultPrevented) {
      T.preventDefault(), d(true);
      let U = new Ffe(T.key);
      M(U.text, U.rawEmpty, U.rawEndedWithFocusTail);
      return;
    }
    r(T);
  }
  return { handleKeyDown: me, handlePaste: Y, isPasting: u };
}
export {
  $gr,
  $lt,
  Bgi,
  Blt,
  Dgr,
  Dki,
  Fgr,
  Hfe,
  Hgr,
  IIn,
  Igr,
  Ips,
  Lgr,
  Mgr,
  Ngr,
  Ogr,
  Ops,
  PIn,
  Pgr,
  Pps,
  RIn,
  Sro,
  Ult,
  V8t,
  _ro,
  fPt,
  jgi,
  k5e,
  xIn,
  x_,
  xi,
  yro,
  z8t
};
