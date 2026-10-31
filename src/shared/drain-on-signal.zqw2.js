// shared/drain-on-signal.zqw2.js — Claude Code 2.1.310 模块 chunk-zqw2zdj4.js
import "../fs/async-hooks.9s1z.js";
import "../fs/chunk-kqpf5fh3.js";
import "../agents/third-party.ydpb.js";
import "../telemetry/anthropic-workspace-id.36ys.js";
import "./chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import "./chunk-3y73jbfr.js";
import "../models/claude-3-5-sonnet.21mz.js";
import "./chunk-nrx8c90j.js";
import { i } from "./environment.9a41.js";
import "./chunk-9sbknd2z.js";
import "../context/not-admin-owned.ersa.js";
import "../auth/oauth-2025-04-20.ke15.js";
import "../fs/gitlab-runner-authentication-token.d7b0.js";
import "./chunk-x6r6k81p.js";
import "../fs/backed-up.p1qn.js";
import "./chunk-j79dwkaq.js";
import "../artifacts/cowritten-artifact-html.thm2.js";
import "../fs/chunk-dz0rx1wn.js";
import "./chunk-4kxy1036.js";
import "../fs/content-encoding.v6wj.js";
import "../remote/local-agent.we9a.js";
import "../remote/moved-directory.z3m0.js";
import "../telemetry/chunk-wq923bwc.js";
import "../telemetry/chunk-wn8xtaqg.js";
import "./async-hooks.m2fg.js";
import "../fs/utf-8.7pve.js";
import "../shell/chunk-gx93fya1.js";
import "../shell/chunk-tjkwy3jp.js";
import "../context/utf-8.yzy3.js";
import "../fs/utf-8.fmbx.js";
import "../auth/descriptor-direct.zd2z.js";
import "../artifacts/chunk-m8t7qekn.js";
import "../remote/self-hosted.qq4m.js";
import "../fs/ca-certs-load.ft7b.js";
import "../context/tool-cgroup-exclude-classes.t1za.js";
import { kr } from "../telemetry/chunk-35h7qwz8.js";
import "./sk-ant-sid.0hme.js";
import "../fs/not-utf8.sqq6.js";
import "../context/tool-result.evq2.js";
import "./chunk-bhdett2m.js";
import "./chunk-n07cvysj.js";
import "../remote/chunk-t0kv6pst.js";
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
