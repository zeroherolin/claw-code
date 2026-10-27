// mcp/read-claude-desktop-mcp-servers.cq7m.js — Claude Code 2.1.310 模块 chunk-cq7mw31q.js
import "../shared/chunk-nyvhtfb3.js";
import "../shared/chunk-xz73gv4f.js";
import "../agents/third-party.ydpb.js";
import { v } from "../telemetry/anthropic-workspace-id.36ys.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import "../shared/chunk-j79dwkaq.js";
import "../terminal/chunk-9vttrktj.js";
import "./chunk-ykcv164t.js";
import "../shared/chunk-9sbknd2z.js";
import "../fs/async-hooks.9s1z.js";
import "../context/not-admin-owned.ersa.js";
import "../fs/chunk-kqpf5fh3.js";
import "../shared/chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import "../shared/chunk-3y73jbfr.js";
import "../shared/chunk-x6r6k81p.js";
import "../models/claude-3-5-sonnet.21mz.js";
import "../fs/backed-up.p1qn.js";
import "./always-allow.9m89.js";
import { Vot } from "../plugins/skills-dir.cemw.js";
import "../shared/chunk-nrx8c90j.js";
import { i } from "../shared/environment.9a41.js";
import "../auth/oauth-2025-04-20.ke15.js";
import "../artifacts/cowritten-artifact-html.thm2.js";
import { $es, O } from "../fs/chunk-dz0rx1wn.js";
import { ot } from "../fs/chunk-gzs70jxe.js";
import "../shared/chunk-bhdett2m.js";
import { readdir as u, readFile as d, stat as p } from "fs/promises";
import { homedir as m } from "os";
import { join as l } from "path";
async function g() {
  let o = O();
  if (!$es.includes(o)) throw Error(`Unsupported platform: ${o} - Claude Desktop integration only works on macOS and WSL.`);
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
  if (!$es.includes(O())) throw Error("Unsupported platform - Claude Desktop integration only works on macOS and WSL.");
  try {
    let o = await g(), a;
    try {
      a = await d(o, { encoding: "utf8" });
    } catch (s) {
      if (v(s) === "ENOENT") return {};
      throw s;
    }
    let n = ot(a);
    if (!n || typeof n !== "object") return {};
    let e = n.mcpServers;
    if (!e || typeof e !== "object") return {};
    let r = {};
    for (let [s, c] of Object.entries(e)) {
      if (!c || typeof c !== "object") continue;
      let f = Vot().safeParse(c);
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
