// darwin/settings/chunk-854b416f.js — Claude Code 2.1.310（darwin）模块 chunk-scxed4qj.js
import { __asset_src } from "../../runtime/assets.js";
function oEt(n) {
  let e = false, r, t = { addDir: [], pluginDir: [], pluginDirNoMcp: [], settings: void 0, managedSettings: void 0, mcpConfig: [], strictMcpConfig: false, restricted: false }, g = [], d = { "--cwd": (i) => {
    r = i;
  }, "--settings": (i) => {
    t.settings = i;
  }, "--managed-settings": (i) => {
    t.managedSettings = i;
  }, "--setting-sources": () => {
  }, "--add-dir": (i) => t.addDir.push(i), "--plugin-dir": (i) => t.pluginDir.push(i), "--plugin-dir-no-mcp": (i) => t.pluginDirNoMcp.push(i), "--mcp-config": (i) => t.mcpConfig.push(i) };
  for (let i = 0; i < n.length; i++) {
    let s = n[i];
    if (s === "agents" && !e) {
      e = true;
      continue;
    }
    if (s === "--strict-mcp-config") {
      t.strictMcpConfig = true;
      continue;
    }
    if (s === "--restricted") {
      t.restricted = true;
      continue;
    }
    let o = s.indexOf("="), l = o === -1 ? s : s.slice(0, o), a = Object.hasOwn(d, l) ? d[l] : void 0;
    if (a) {
      if (o !== -1) a(s.slice(o + 1));
      else if (i + 1 < n.length) a(n[++i]);
      else g.push(s);
      continue;
    }
    g.push(s);
  }
  return { hasAgentsPositional: e, cwdFilter: r, config: t, rest: g };
}
function lVo(n) {
  let e = n.trim();
  return e === "~" || e.startsWith("~/");
}
function sEt(n, e) {
  let r = (t, g) => t === "" || g && t.trimStart().startsWith("{") ? t : e(t);
  return { settings: n.settings === void 0 ? void 0 : r(n.settings, true), managedSettings: n.managedSettings, pluginDir: n.pluginDir.map((t) => r(t, false)), pluginDirNoMcp: n.pluginDirNoMcp.map((t) => r(t, false)), addDir: n.addDir.map((t) => lVo(t) ? t : r(t, false)), mcpConfig: n.mcpConfig.map((t) => r(t, true)), strictMcpConfig: n.strictMcpConfig, restricted: n.restricted, settingSources: n.settingSources };
}
function iue(n) {
  return [...n.settings ? ["--settings", n.settings] : [], ...n.managedSettings ? ["--managed-settings", n.managedSettings] : [], ...n.pluginDir.flatMap((e) => ["--plugin-dir", e]), ...n.pluginDirNoMcp.flatMap((e) => ["--plugin-dir-no-mcp", e]), ...n.addDir.flatMap((e) => ["--add-dir", e]), ...n.mcpConfig.flatMap((e) => ["--mcp-config", e]), ...n.settingSources !== void 0 ? [`--setting-sources=${n.settingSources}`] : [], ...n.strictMcpConfig ? ["--strict-mcp-config"] : [], ...n.restricted ? ["--restricted"] : []];
}
function BZs(n) {
  let e = 0;
  while (n[e] === "--dangerously-skip-permissions" || n[e] === "--allow-dangerously-skip-permissions") e++;
  return n[e] === "daemon" ? n.slice(e + 1) : null;
}
function S4(n = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.BUILD_REF_NAME) {
  return "";
}
function ner() {
  return { version: `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION}${S4()}`, buildTime: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.BUILD_TIME };
}
export {
  BZs,
  S4,
  iue,
  lVo,
  ner,
  oEt,
  sEt
};
