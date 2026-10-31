// linux/mcp/run-chrome-native-host.js — Claude Code 2.1.310（linux）模块 chunk-j4crbqwg.js
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../telemetry/chunk-9097a12b.js";
import { fo } from "../telemetry/chunk-9d6962d2.js";
import "../models/claude-3-5-sonnet.js";
import "../shared/chunk-0870a9b4.js";
import { i } from "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import { _, te } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../fs/backed-up.js";
import { re } from "../shared/chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../shared/async-hooks.5238.js";
import "../shared/chunk-de56f88d.js";
import "../shared/chunk-8eee6836.js";
import { it } from "../git/utf8-keep-bom.js";
import "../shell/chunk-fea9c492.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import "../remote/chunk-7e620e0d.js";
import { Aun, Cun } from "../chrome/chrome-open-url.js";
import "../shell/chunk-57b85523.js";
import { ge, Tt } from "../vendor/zod/invalid-return-type.js";
import "../shared/chunk-1f805b50.js";
import "../shared/chunk-6da6c5a3.js";
import { appendFile as I, chmod as P, mkdir as B, readdir as b, rmdir as E, unlink as y } from "fs/promises";
import { createServer as N } from "net";
import { hostname as M, platform as u } from "os";
import { join as F } from "path";
var U = "1.0.0", w = 1048576, T = 64, x = 2e3, k = void 0;
function s(e, ...t) {
  if (k) {
    let n = (/* @__PURE__ */ new Date()).toISOString(), r = t.length > 0 ? " " + _(t) : "", o = `[${n}] [Claude Chrome Native Host] ${e}${r}
`;
    I(k, o).catch(() => {
    });
  }
  console.error(`[Claude Chrome Native Host] ${e}`, ...t);
}
var C;
async function L() {
  let e = C ??= z();
  try {
    let t = await e;
    if (t !== void 0) return t;
  } catch {
    s("Computer name lookup failed");
  }
  if (C === e) C = void 0;
  try {
    return d(M());
  } catch {
    return;
  }
}
function d(e) {
  let t = e.replace(/\p{Cc}/gu, "").trim().replace(/\.local$/i, "").trim();
  return t ? re(t, T) : void 0;
}
async function z() {
  switch (u()) {
    case "darwin": {
      let { stdout: e, code: t } = await it("/usr/sbin/scutil", ["--get", "ComputerName"], { timeout: x, useCwd: false, stderr: "ignore" });
      return t === 0 ? d(e) : void 0;
    }
    case "win32":
      return d(i.COMPUTERNAME ?? "");
    default:
      return d(M());
  }
}
function c(e) {
  let t = Buffer.from(e, "utf-8"), n = Buffer.alloc(4);
  n.writeUInt32LE(t.length, 0), process.stdout.write(n), process.stdout.write(t);
}
async function ee() {
  return fo("chrome_native_host_run", async () => {
    s("Initializing...");
    let e = new S(), t = new R();
    await e.start();
    while (true) {
      let n = await t.read();
      if (n === null) break;
      await e.handleMessage(n);
    }
    await e.stop();
  });
}
var D = p(() => Tt({ type: ge() }).passthrough());
class S {
  mcpClients = /* @__PURE__ */ new Map();
  nextClientId = 1;
  server = null;
  running = false;
  socketPath = null;
  async start() {
    if (this.running) return;
    if (this.socketPath = Cun(), u() !== "win32") {
      let e = Aun();
      await y(e).catch(() => {
      }), await B(e, { recursive: true, mode: 448 }), await P(e, 448).catch(() => {
      });
      try {
        let t = await b(e);
        for (let n of t) {
          if (!n.endsWith(".sock")) continue;
          let r = parseInt(n.replace(".sock", ""), 10);
          if (isNaN(r)) continue;
          try {
            process.kill(r, 0);
          } catch {
            await y(F(e, n)).catch(() => {
            }), s(`Removed stale socket for PID ${r}`);
          }
        }
      } catch {
      }
    }
    if (s(`Creating socket listener: ${this.socketPath}`), this.server = N((e) => this.handleMcpClient(e)), await new Promise((e, t) => {
      this.server.listen(this.socketPath, () => {
        s("Socket server listening for connections"), this.running = true, e();
      }), this.server.on("error", (n) => {
        s("Socket server error:", n), t(n);
      });
    }), u() !== "win32") try {
      await P(this.socketPath, 384), s("Socket permissions set to 0600");
    } catch (e) {
      s("Failed to set socket permissions:", e);
    }
  }
  async stop() {
    if (!this.running) return;
    for (let [, e] of this.mcpClients) e.socket.destroy();
    if (this.mcpClients.clear(), this.server) await new Promise((e) => {
      this.server.close(() => e());
    }), this.server = null;
    if (u() !== "win32" && this.socketPath) {
      try {
        await y(this.socketPath), s("Cleaned up socket file");
      } catch {
      }
      try {
        let e = Aun();
        if ((await b(e)).length === 0) await E(e), s("Removed empty socket directory");
      } catch {
      }
    }
    this.running = false;
  }
  async isRunning() {
    return this.running;
  }
  async handleMessage(e) {
    let t;
    try {
      t = te(e);
    } catch (o) {
      s("Invalid JSON from Chrome:", o.message), c(_({ type: "error", error: "Invalid message format" }));
      return;
    }
    let n = D().safeParse(t);
    if (!n.success) {
      s("Invalid message from Chrome:", n.error.message), c(_({ type: "error", error: "Invalid message format" }));
      return;
    }
    let r = n.data;
    switch (s(`Handling Chrome message type: ${r.type}`), r.type) {
      case "ping":
        s("Responding to ping"), c(_({ type: "pong", timestamp: Date.now() }));
        break;
      case "get_status":
        L().then((o) => c(_({ type: "status_response", native_host_version: U, computer_name: o }))).catch((o) => s("Failed to send status_response:", o));
        break;
      case "tool_response": {
        if (this.mcpClients.size > 0) {
          s(`Forwarding tool response to ${this.mcpClients.size} MCP clients`);
          let { type: o, ...l } = r, a = Buffer.from(_(l), "utf-8"), f = Buffer.alloc(4);
          f.writeUInt32LE(a.length, 0);
          let h = Buffer.concat([f, a]);
          for (let [m, g] of this.mcpClients) try {
            g.socket.write(h);
          } catch (v) {
            s(`Failed to send to MCP client ${m}:`, v);
          }
        }
        break;
      }
      case "notification": {
        if (this.mcpClients.size > 0) {
          s(`Forwarding notification to ${this.mcpClients.size} MCP clients`);
          let { type: o, ...l } = r, a = Buffer.from(_(l), "utf-8"), f = Buffer.alloc(4);
          f.writeUInt32LE(a.length, 0);
          let h = Buffer.concat([f, a]);
          for (let [m, g] of this.mcpClients) try {
            g.socket.write(h);
          } catch (v) {
            s(`Failed to send notification to MCP client ${m}:`, v);
          }
        }
        break;
      }
      default:
        s(`Unknown message type: ${r.type}`), c(_({ type: "error", error: `Unknown message type: ${r.type}` }));
    }
  }
  handleMcpClient(e) {
    let t = this.nextClientId++, n = { id: t, socket: e, buffer: Buffer.alloc(0) };
    this.mcpClients.set(t, n), s(`MCP client ${t} connected. Total clients: ${this.mcpClients.size}`), c(_({ type: "mcp_connected" })), e.on("data", (r) => {
      n.buffer = Buffer.concat([n.buffer, r]);
      while (n.buffer.length >= 4) {
        let o = n.buffer.readUInt32LE(0);
        if (o === 0 || o > w) {
          s(`Invalid message length from MCP client ${t}: ${o}`), e.destroy();
          return;
        }
        if (n.buffer.length < 4 + o) break;
        let l = n.buffer.slice(4, 4 + o);
        n.buffer = n.buffer.slice(4 + o);
        try {
          let a = te(l.toString("utf-8"));
          s(`Forwarding tool request from MCP client ${t}: ${a.method}`), c(_({ type: "tool_request", method: a.method, params: a.params }));
        } catch (a) {
          s(`Failed to parse tool request from MCP client ${t}:`, a);
        }
      }
    }), e.on("error", (r) => {
      s(`MCP client ${t} error: ${r}`);
    }), e.on("close", () => {
      s(`MCP client ${t} disconnected. Remaining clients: ${this.mcpClients.size - 1}`), this.mcpClients.delete(t), c(_({ type: "mcp_disconnected" }));
    });
  }
}
class R {
  buffer = Buffer.alloc(0);
  pendingResolve = null;
  closed = false;
  constructor() {
    process.stdin.on("data", (e) => {
      this.buffer = Buffer.concat([this.buffer, e]), this.tryProcessMessage();
    }), process.stdin.on("end", () => {
      if (this.closed = true, this.pendingResolve) this.pendingResolve(null), this.pendingResolve = null;
    }), process.stdin.on("error", () => {
      if (this.closed = true, this.pendingResolve) this.pendingResolve(null), this.pendingResolve = null;
    });
  }
  tryProcessMessage() {
    if (!this.pendingResolve) return;
    if (this.buffer.length < 4) return;
    let e = this.buffer.readUInt32LE(0);
    if (e === 0 || e > w) {
      s(`Invalid message length: ${e}`), this.pendingResolve(null), this.pendingResolve = null;
      return;
    }
    if (this.buffer.length < 4 + e) return;
    let t = this.buffer.subarray(4, 4 + e);
    this.buffer = this.buffer.subarray(4 + e);
    let n = t.toString("utf-8");
    this.pendingResolve(n), this.pendingResolve = null;
  }
  async read() {
    if (this.closed) return null;
    if (this.buffer.length >= 4) {
      let e = this.buffer.readUInt32LE(0);
      if (e > 0 && e <= w && this.buffer.length >= 4 + e) {
        let t = this.buffer.subarray(4, 4 + e);
        return this.buffer = this.buffer.subarray(4 + e), t.toString("utf-8");
      }
    }
    return new Promise((e) => {
      this.pendingResolve = e, this.tryProcessMessage();
    });
  }
}
export {
  ee as runChromeNativeHost
};
