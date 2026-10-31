// linux/shared/drain-on-signal.js — Claude Code 2.1.310（linux）模块 chunk-eh1wzg6h.js
import "../fs/async-hooks.93b1.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "./chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "./chunk-37dd5dd4.js";
import "../models/claude-3-5-sonnet.js";
import "./chunk-0870a9b4.js";
import { i } from "./environment.js";
import "./chunk-3b9c376b.js";
import "../context/not-admin-owned.js";
import "../auth/oauth-2025-04-20.js";
import "../fs/gitlab-runner-authentication-token.js";
import "./chunk-50219e50.js";
import "../fs/backed-up.js";
import "./chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "./chunk-de56f88d.js";
import "../fs/content-encoding.js";
import "../remote/local-agent.js";
import "../remote/moved-directory.js";
import "../telemetry/chunk-9097a12b.js";
import "../telemetry/chunk-9d6962d2.js";
import "./async-hooks.5238.js";
import "../fs/utf-8.8f8e.js";
import "../shell/chunk-fea9c492.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.aa9a.js";
import "../auth/descriptor-direct.js";
import "../artifacts/chunk-a6c9d164.js";
import "../remote/self-hosted.js";
import "../fs/ca-certs-load.js";
import "../context/tool-cgroup-exclude-classes.js";
import { kr } from "../telemetry/chunk-5bc5c7ea.js";
import "./sk-ant-sid.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "./chunk-8bf008d9.js";
import "./chunk-6da6c5a3.js";
import "../remote/chunk-95151620.js";
var c = 25e3;
function t() {
  process.exit(0);
}
function u(o, p) {
  let n = i.CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS || c, s = false, r = (a) => {
    if (p(), s) kr("warn", `${a} received while shutting down: not waiting any longer, closing open requests now and exiting`), o.stop(), t();
    s = true, kr("info", `${a} received: shutting down. Refusing new connections; open requests get up to ${n / 1e3}s to finish (set by CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS)`);
    let d = n + 3e3;
    setTimeout((e) => {
      kr("warn", `shutdown still not finished ${e / 1e3}s after the signal: exiting now. Requests still open are cut and their spend may not be recorded`), t();
    }, d, d).unref(), o.drain(n).then((e) => {
      kr(e === 0 ? "info" : "warn", e === 0 ? "shutdown complete: every open request finished, none was cut" : `drain window over after ${n / 1e3}s: cut ${e} request(s) still open. Raise CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS and the orchestrator's grace period together to give streams longer`), t();
    });
  };
  process.prependListener("SIGTERM", () => r("SIGTERM")), process.prependListener("SIGINT", () => r("SIGINT"));
}
export {
  u as drainOnSignal
};
