// linux/mcp/read-claude-desktop-mcp-servers.js — Claude Code 2.1.310（linux）模块 chunk-6f21bxyn.js
import "../shared/chunk-2fe3b2b7.js";
import "../shared/chunk-1b1c4439.js";
import "../agents/third-party.js";
import { E } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-d2c47492.js";
import "../terminal/chunk-3ca478a4.js";
import "./chunk-0e2a1db6.js";
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "./always-allow.js";
import { Fot } from "../plugins/skills-dir.js";
import "../shared/chunk-0870a9b4.js";
import { i } from "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../artifacts/cowritten-artifact-html.js";
import { oes, O } from "../fs/chunk-ce5d00cd.js";
import { ot } from "../fs/chunk-86be9585.js";
import "../shared/chunk-8bf008d9.js";
import { readdir as u, readFile as d, stat as p } from "fs/promises";
import { homedir as m } from "os";
import { join as l } from "path";
async function g() {
  let o = O();
  if (!oes.includes(o)) throw Error(`Unsupported platform: ${o} - Claude Desktop integration only works on macOS and WSL.`);
  if (o === "macos") return l(m(), "Library", "Application Support", "Claude", "claude_desktop_config.json");
  let a = i.USERPROFILE ? i.USERPROFILE.replace(/\\/g, "/") : null;
  if (a) {
    let e = `/mnt/c${a.replace(/^[A-Z]:/, "")}/AppData/Roaming/Claude/claude_desktop_config.json`;
    try {
      return await p(e), e;
    } catch {
    }
  }
  try {
    try {
      let e = await u("/mnt/c/Users", { withFileTypes: true });
      for (let r of e) {
        if (r.name === "Public" || r.name === "Default" || r.name === "Default User" || r.name === "All Users") continue;
        let s = l("/mnt/c/Users", r.name, "AppData", "Roaming", "Claude", "claude_desktop_config.json");
        try {
          return await p(s), s;
        } catch {
        }
      }
    } catch {
    }
  } catch (n) {
    t(`Failed scanning /mnt/c/Users for Claude Desktop config: ${n}`, { level: "error" });
  }
  throw Error("Could not find Claude Desktop config file in Windows. Make sure Claude Desktop is installed on Windows.");
}
async function R() {
  if (!oes.includes(O())) throw Error("Unsupported platform - Claude Desktop integration only works on macOS and WSL.");
  try {
    let o = await g(), a;
    try {
      a = await d(o, { encoding: "utf8" });
    } catch (s) {
      if (E(s) === "ENOENT") return {};
      throw s;
    }
    let n = ot(a);
    if (!n || typeof n !== "object") return {};
    let e = n.mcpServers;
    if (!e || typeof e !== "object") return {};
    let r = {};
    for (let [s, c] of Object.entries(e)) {
      if (!c || typeof c !== "object") continue;
      let f = Fot().safeParse(c);
      if (f.success) r[s] = f.data;
    }
    return r;
  } catch (o) {
    return t(`Failed to read Claude Desktop MCP servers: ${o}`, { level: "error" }), {};
  }
}
export {
  R as readClaudeDesktopMcpServers
};
