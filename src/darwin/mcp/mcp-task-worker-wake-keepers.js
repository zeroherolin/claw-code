// darwin/mcp/mcp-task-worker-wake-keepers.js — Claude Code 2.1.310（darwin）模块 chunk-y5b3drgv.js
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import { nt, V } from "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import { c } from "../agents/third-party.js";
import { ui } from "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import { St, l } from "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../fs/utf-8.8f8e.js";
import "../shared/chunk-4563156b.js";
import "../fs/async-hooks.7959.js";
import "../plugins/chunk-0a4c51cf.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import "../shared/chunk-d4196a83.js";
import "../shell/chunk-fea9c492.js";
import "../context/utf-8.js";
import "../agents/in-process-teammate.9720.js";
import { ljn, nEo, Dq, djn } from "../fs/mcp-tasks.js";
import "../telemetry/chunk-9097a12b.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import "../shared/async-hooks.9e79.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../shared/chunk-59ffb646.js";
import "../cli/chunk-af2447be.js";
import "./toolbox-mcp-server-id.js";
import "../remote/local-agent.js";
import "../remote/moved-directory.js";
import "../shared/async-hooks.5238.js";
import "../shell/chunk-8eebd6c6.js";
import "../fs/utf-8.aa9a.js";
import "../auth/descriptor-direct.js";
import "../fs/content-encoding.js";
import { BV, Wt } from "../settings/global-config-and-gates.js";
import "../terminal/xterm-ghostty.js";
import "../models/total-tokens-reminder.js";
import "./allowed-warning.js";
import "../shell/invalid-type.js";
import "../fs/chunk-475c6783.js";
import "../shared/chunk-8eee6836.js";
import "../permissions/classifier-transcript-too-long.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../shared/chunk-1b1c4439.js";
import "../terminal/chunk-3ca478a4.js";
import "./chunk-0e2a1db6.js";
import "./always-allow.js";
import "../plugins/skills-dir.js";
import "../git/chunk-c16cb6b4.js";
import "../fs/chunk-86be9585.js";
import "../git/utf-8.js";
import "../artifacts/chunk-a6c9d164.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../git/utf8-keep-bom.js";
import "../fs/tempdir-owner-mismatch.js";
import "../settings/workflow-launch-exec.js";
import "../fs/chunk-9b7a3f1c.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "./init-function-end.js";
import "../shell/spawn-error.js";
import "../remote/self-hosted.js";
import "../fs/ca-certs-load.js";
import { bsr, ER } from "../shared/chunk-f98598c3.js";
import "../auth/permission-error.js";
import "../auth/claude-code-user.js";
import "../shell/find-generic-password.js";
import "../shared/async-hooks.b037.js";
import "../settings/ax-sr-suggestion-nav.js";
import "../auth/profile-explicit.js";
import "../fs/chunk-b6c2193e.js";
import "../fs/chunk-21654dda.js";
import "../context/fetch-project-timeline.js";
import "./claude-browser.js";
import "../fs/reply-across-default-dirs.js";
import "../telemetry/chunk-b109a1d6.js";
import "../telemetry/chunk-addb1ac7.js";
import "../agents/chunk-44729602.js";
import "../shared/chunk-46ffe22f.js";
import "../artifacts/cobalt-plinth-lovage.js";
import "../shared/chunk-dda594a8.js";
import "../computer-use/chunk-217335d0.js";
import "../workflows/chunk-a1595c7e.js";
import "../agents/session-stable-address.js";
import "../agents/in-process-teammate.32be.js";
import "../shared/chunk-537f65d6.js";
import "../git/ssh-placeholder.js";
import "../shared/chunk-3a99f127.js";
import "../auth/auth-launcher-host-login.js";
import "../permissions/turn-abort.js";
import "../git/get-url.js";
import "../shared/chunk-b7346a10.js";
import { Uun } from "./mcp-task-worker-wake.js";
import "../shared/chunk-e30378d4.js";
import "../shared/chunk-cb8096b1.js";
import "../shared/chunk-d1292a44.js";
import { TH } from "../shared/chunk-334c8283.js";
import "../shared/chunk-6ae01e90.js";
import "../models/claude-mythos-preview.js";
import { o, u } from "../vendor/zod/string-format.js";
import "../shared/sk-ant-sid.js";
import "../shared/chunk-cc3baac1.js";
import "../shared/chunk-1f805b50.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "../shared/chunk-8bf008d9.js";
import "../vendor/aws-sdk/chunk-d15f3977.js";
import "../shared/chunk-6da6c5a3.js";
import "../shared/chunk-86ecf3aa.js";
import "../remote/chunk-95151620.js";
var z = 1e4, W = "/worker/wakes", H = 1984, I = "allow_mcp_task_worker_wake", b = { auth: "session-jwt", host: "ccr-session", headers: { "anthropic-version": "2023-06-01" }, timeout: z, validateStatus: () => true }, K = f(() => u({ wake_id: o().regex(ljn), fire_at: TH({ offset: true }), expires_at: TH({ offset: true }) })), B = f(() => u({ error: u({ type: o().optional(), reason: o().optional(), resource_type: o().optional() }) }));
async function A({ task: e, delaySeconds: r, onTimer: s = false }) {
  let a = R("schedule", s) ?? D("schedule", s);
  if (a !== void 0) return a;
  let n = { taskId: e.taskId, serverName: e.serverName, toolName: e.toolName, mcpTaskId: e.mcpTaskId, pollIntervalMs: e.pollIntervalMs, spawnedAt: e.spawnedAt, toolUseId: e.toolUseId, protocol: "sep2663", ttlExpiresAt: e.ttlExpiresAt, transportFingerprint: e.transportFingerprint };
  if (N(n) === void 0 || Buffer.byteLength(_(n)) > H) return i("schedule", "not_sent", "unusable_payload", s);
  let d = await M("schedule", () => Wt.post(W, { delay_seconds: O(r), payload: n }, b), s);
  return x("schedule", d, s);
}
async function E({ workerWakeId: e, delaySeconds: r, onTimer: s = false }) {
  let a = R("retime", s) ?? D("retime", s);
  if (a !== void 0) return a;
  if (!ljn.test(e)) return i("retime", "rejected", "malformed_id", s);
  let n = await M("retime", () => Wt.post(W, { wake_id: e, delay_seconds: O(r) }, b), s);
  return x("retime", n, s);
}
async function P({ workerWakeId: e, onTimer: r = false }) {
  if (!ljn.test(e)) return i("cancel", "rejected", "malformed_id", r);
  let s = await M("cancel", () => Wt.delete(`${W}/${e}`, void 0, b), r);
  if (s.kind === "failed") return s;
  if (!L(s.status)) return F("cancel", s.status, r);
  if (typeof s.data !== "object" || s.data === null) return i("cancel", "rejected", "malformed_answer", r);
  if (!r) g("mcp_task_worker_wake", { call: c("cancel") });
  return { kind: "cancelled" };
}
function N(e) {
  let r = nEo(e);
  return r.success && r.data.protocol === "sep2663" ? r.data : void 0;
}
function x(e, r, s) {
  if (r.kind === "failed") return r;
  if (L(r.status)) {
    let n = K().safeParse(r.data);
    if (!n.success) return i(e, "rejected", "malformed_answer", s);
    if (!s) g("mcp_task_worker_wake", { call: c(e) });
    return { kind: "scheduled", workerWakeId: n.data.wake_id, fireAtMs: Date.parse(n.data.fire_at), expiresAtMs: Date.parse(n.data.expires_at) };
  }
  let a = U(e, r.status, r.data);
  if (a === void 0) return F(e, r.status, s);
  if (a === "wake_off") return i(e, "wake_off", void 0, s);
  return v(s, a, e), t(`mcpTaskWorkerWake ${e}: refused (${a})`), { kind: "refused", reason: a };
}
function U(e, r, s) {
  let a = B().safeParse(s), n = a.success ? a.data.error : void 0;
  switch (r === 400 ? n?.reason : void 0) {
    case "wake_unsupported_host":
      return "unsupported_host";
    case "wake_unsupported_session":
      return "unsupported_session";
    case "wake_delay_out_of_range":
      return "delay_out_of_range";
    case "wake_expired":
      return "expired";
    case "wake_cancelled":
      return "cancelled";
    case "wake_off":
      return "wake_off";
    default:
      break;
  }
  return e === "retime" && r === 404 && n?.type === "not_found_error" && n.resource_type === "worker_wake" ? "not_found" : void 0;
}
async function M(e, r, s) {
  let a = R(e, s);
  if (a !== void 0) return a;
  let n;
  try {
    n = await r();
  } catch (d) {
    let { kind: y } = ui(d);
    switch (y) {
      case "auth":
        return i(e, "unauthorized", void 0, s);
      case "timeout":
        return i(e, "timeout", void 0, s);
      case "network":
        return i(e, "network", void 0, s);
      case "http":
        return i(e, "network", "other", s);
      case "other":
        return i(e, "rejected", "threw", s);
    }
  }
  if (!n.ok) return i(e, "not_sent", n.reason, s);
  return { kind: "answered", status: n.status, data: n.data };
}
function L(e) {
  return e >= 200 && e < 300;
}
function F(e, r, s) {
  if (r === 404 || r === 405 || r === 501) return i(e, "not_deployed", `http_${r}`, s);
  if (r === 401 || r === 403) return i(e, "unauthorized", `http_${r}`, s);
  if (r === 429) return i(e, "rate_limited", void 0, s);
  if (r === 409) return i(e, "conflict", void 0, s);
  return i(e, r >= 500 ? "server_error" : "rejected", `http_${r}`, s);
}
function i(e, r, s, a) {
  let n = s === void 0 ? r : `${r}_${s}`, d = Y(r);
  if (d || r === "not_sent" || r === "not_deployed") {
    if (!(d && a)) v(a, n, e);
  } else if (a) m("mcp_task_worker_wake_timer", n, { call: c(e) });
  else m("mcp_task_worker_wake", n, { call: c(e) });
  return t(`mcpTaskWorkerWake ${e}: failed (${n})`), { kind: "failed", reason: r, retryable: d };
}
function Y(e) {
  switch (e) {
    case "rate_limited":
    case "conflict":
    case "wake_off":
    case "policy_pending":
    case "server_error":
    case "timeout":
    case "network":
      return true;
    case "not_sent":
    case "not_deployed":
    case "unauthorized":
    case "rejected":
      return false;
  }
}
function O(e) {
  return Math.max(1, Math.ceil(e));
}
function R(e, r) {
  return BV() ? void 0 : i(e, "not_sent", "no_session", r);
}
function D(e, r) {
  let s;
  try {
    if (bsr(I)) return;
    s = ER(I);
  } catch (a) {
    return l(a), i(e, "policy_pending", "threw", r);
  }
  if (s === "org_denied" || s === "latched" || s === "unregistered") return v(r, `policy_denied_${s}`, e), t(`mcpTaskWorkerWake ${e}: withheld by the organization's policy (${s})`), { kind: "refused", reason: "policy_denied" };
  return i(e, "policy_pending", s ?? "no_deny_kind", r);
}
function v(e, r, s) {
  if (e) p("mcp_task_worker_wake_timer", r, { call: c(s) });
  else p("mcp_task_worker_wake", r, { call: c(s) });
}
var h = 9e5, S = h / 3, G = 6e4, Q = 3, X = h / S;
function w(e) {
  return e.wake?.moving === true && e.state === "driving";
}
class j {
  #e = /* @__PURE__ */ new Map();
  #o = /* @__PURE__ */ new Set();
  #a = false;
  #t;
  #r;
  hasConcluded(e) {
    return this.#o.has(e);
  }
  taskBackgrounded(e) {
    try {
      this.#c(e);
    } catch (r) {
      l(r);
    }
  }
  #c({ taskRegistry: e, record: r, storageV5: s }) {
    if (this.#a || this.#e.has(r.taskId) || !BV()) return;
    if (St()) {
      this.#a = true;
      return;
    }
    let a = e.get(r.taskId);
    if (a?.type !== "mcp_task" || a.notified || a.status !== "running" || a.holdCapped === true) return;
    let n = { record: r, taskRegistry: e, storageV5: s, wake: void 0, busy: false, scheduleRetriesLeft: 0, retimeSoon: false, state: "driving" };
    this.#e.set(r.taskId, n), e.update(r.taskId, (d) => ({ ...d, onWorkerWakeOutcome: (y) => this.taskLeftDrive(r.taskId, y) })), this.#i(n, false);
  }
  taskLeftDrive(e, r) {
    try {
      this.#u(e, r);
    } catch (s) {
      l(s);
    }
  }
  #u(e, r) {
    if (r.kind !== "parked" && r.kind !== "capped") this.#o.add(e);
    let s = this.#e.get(e);
    if (s === void 0 || s.state !== "driving" && s.state !== "left_to_fire") return;
    switch (r.kind) {
      case "told":
      case "stopped":
      case "capped":
        s.state = "cancelling";
        break;
      case "parked":
        s.state = r.code === "ttl_expired" ? "cancelling" : "left_to_fire";
        break;
    }
    if (s.scheduleRetriesLeft = 0, !w(s)) s.retimeSoon = false;
    if (!s.busy) this.#s(s);
  }
  async tick() {
    let e = [];
    for (let r of this.#e.values()) {
      if (r.busy) continue;
      if (r.state === "cancelling") e.push(this.#s(r, true));
      else if (!Uun()) continue;
      else if (r.wake !== void 0 && w(r)) e.push(this.#d(r, r.wake, true));
      else if (r.wake === void 0 && r.scheduleRetriesLeft > 0) r.scheduleRetriesLeft -= 1, e.push(this.#i(r, true));
    }
    await Promise.all(e);
  }
  async #i(e, r) {
    await this.#n(e, async () => {
      let s = !r, a = await A({ task: e.record, delaySeconds: h / 1e3, onTimer: r });
      switch (a.kind) {
        case "scheduled":
          e.wake = { id: a.workerWakeId, fireAtMs: a.fireAtMs, expiresAtMs: a.expiresAtMs, moving: true, notRetryableRounds: 0 }, e.scheduleRetriesLeft = 0, this.#l(e, a.workerWakeId);
          break;
        case "refused":
          this.#a ||= a.reason === "unsupported_host" || a.reason === "unsupported_session" || a.reason === "delay_out_of_range", e.scheduleRetriesLeft = 0;
          break;
        case "failed":
          if (e.state !== "driving") e.scheduleRetriesLeft = 0;
          else if (a.reason === "policy_pending") e.scheduleRetriesLeft = 1;
          else if (a.reason !== "rate_limited") e.scheduleRetriesLeft = 0;
          else if (s) e.scheduleRetriesLeft = Q;
          break;
      }
    }), await this.#s(e);
  }
  async #d(e, r, s) {
    await this.#n(e, async () => {
      let a = { kind: "refused", reason: "expired" }, n = Date.now() + h > r.expiresAtMs ? a : await E({ workerWakeId: r.id, delaySeconds: h / 1e3, onTimer: true });
      if (e.retimeSoon = false, e.wake !== r || !r.moving) return;
      switch (n.kind) {
        case "scheduled":
          r.fireAtMs = n.fireAtMs, r.expiresAtMs = n.expiresAtMs, r.notRetryableRounds = 0;
          break;
        case "refused":
          if (n.reason === "expired") {
            if (r.moving = false, e.state === "driving") e.state = "cancelling";
          } else if (n.reason === "policy_denied") r.moving = false, e.state = "cancelling";
          else if (n.reason === "cancelled" || n.reason === "not_found") e.wake = void 0;
          else if (r.moving = false, e.state === "driving") e.state = "left_to_fire";
          break;
        case "failed":
          if (n.retryable) {
            e.retimeSoon = s;
            break;
          }
          if (s && n.reason !== "not_sent") r.notRetryableRounds += 1;
          if (n.reason === "not_sent" || r.notRetryableRounds >= X) {
            if (r.moving = false, e.state === "driving") e.state = "left_to_fire";
          }
          break;
      }
    }), await this.#s(e);
  }
  async #s(e, r = false) {
    if (e.busy) return;
    let s = e.wake;
    if (e.state === "cancelling" && s !== void 0) await this.#n(e, async () => {
      let d = await P({ workerWakeId: s.id, onTimer: r });
      if (d.kind === "cancelled" || d.reason === "not_deployed" || Date.now() >= s.fireAtMs + S) e.wake = void 0;
    });
    let a = e.record.taskId;
    if (e.wake === void 0 && (e.scheduleRetriesLeft === 0 || e.state !== "driving") && this.#e.get(a) === e) this.#e.delete(a);
    this.#f();
  }
  async #n(e, r) {
    e.busy = true;
    try {
      await r();
    } catch (s) {
      l(s);
    } finally {
      e.busy = false;
    }
  }
  #l(e, r) {
    let { record: s, taskRegistry: a, storageV5: n } = e, d = a.get(s.taskId);
    if (d?.type !== "mcp_task" || d.notified || d.status !== "running") return;
    let y = () => {
      let k = a.get(s.taskId);
      return k?.type === "mcp_task" && k.sidecarSessionId === V() && k.sidecarProjectDir === Dq();
    }, T = d.sidecarWrite, C = y() ? (async () => {
      if (await T, !y()) return;
      await djn(s.taskId, { ...s, protocol: "sep2663", workerWakeId: r }, n);
    })().catch((k) => {
      t(`MCP task ${s.taskId}: could not save its worker wake id to the task's record (${String(k)}); a restarted worker will not be able to cancel that wake`), p("mcp_task_worker_wake", "wake_id_not_saved");
    }) : T;
    a.update(s.taskId, (k) => ({ ...k, workerWakeId: r, sidecarWrite: C }));
  }
  #f() {
    let e = false, r = false;
    for (let s of this.#e.values()) e ||= s.state === "cancelling" || w(s) || s.scheduleRetriesLeft > 0, r ||= s.retimeSoon;
    if (e && this.#t === void 0) this.#t = setInterval(() => void this.tick(), S), this.#t.unref();
    else if (!e && this.#t !== void 0) clearInterval(this.#t), this.#t = void 0;
    if (r && this.#r === void 0) this.#r = setTimeout(() => {
      this.#r = void 0, this.#k();
    }, G), this.#r.unref();
  }
  async #k() {
    let e = [];
    for (let r of this.#e.values()) if (r.retimeSoon && !r.busy && r.wake !== void 0 && w(r) && Uun()) e.push(this.#d(r, r.wake, false));
    await Promise.all(e);
  }
}
var We = new nt(() => new j());
export {
  We as mcpTaskWorkerWakeKeepers
};
