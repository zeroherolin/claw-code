// darwin/terminal/system-settings.js — Claude Code 2.1.310（darwin）模块 chunk-vkw6g296.js
var Hte = { clipboardRead: false, clipboardWrite: false, systemKeyCombos: false };
function i(e) {
  return e.toLowerCase().split(/[\\/]/).pop() ?? "";
}
var r = /* @__PURE__ */ new Set(["com.apple.Terminal", "com.googlecode.iterm2", "com.microsoft.VSCode", "dev.warp.Warp-Stable", "com.github.wez.wezterm", "org.alacritty", "io.alacritty", "net.kovidgoyal.kitty", "co.zeit.hyper", "com.mitchellh.ghostty", "com.todesktop.230313mzl4w4u92", "com.vscodium", "com.exafunction.windsurf", "dev.zed.Zed", "org.tabby", "com.jetbrains.intellij", "com.jetbrains.pycharm"]), s = /* @__PURE__ */ new Set(["com.apple.finder"]), t = /* @__PURE__ */ new Set(["com.apple.systempreferences"]), d = /* @__PURE__ */ new Set(["cmd.exe", "powershell.exe", "pwsh.exe", "wt.exe", "windowsterminal.exe", "code.exe", "cursor.exe", "vscodium.exe", "windsurf.exe", "zed.exe", "alacritty.exe", "wezterm-gui.exe", "warp.exe", "hyper.exe", "tabby.exe", "idea64.exe", "pycharm64.exe", "conemu.exe", "conemu64.exe"]), a = ["Microsoft.WindowsTerminal_", "Microsoft.WindowsTerminalPreview_", "Microsoft.PowerShell_"], l = /* @__PURE__ */ new Set(["explorer.exe"]), p = /* @__PURE__ */ new Set(["systemsettings.exe"]), u = ["windows.immersivecontrolpanel_"], g = /* @__PURE__ */ new Set([...r, ...s, ...t]);
function men(e) {
  if (r.has(e)) return "shell";
  if (s.has(e)) return "filesystem";
  if (t.has(e)) return "system_settings";
  if (a.some((n) => e.startsWith(n))) return "shell";
  if (u.some((n) => e.startsWith(n))) return "system_settings";
  let o = i(e);
  if (d.has(o)) return "shell";
  if (l.has(o)) return "filesystem";
  if (p.has(o)) return "system_settings";
  return null;
}
function pRs(e) {
  return men(e) !== null;
}
export {
  Hte,
  men,
  pRs
};
