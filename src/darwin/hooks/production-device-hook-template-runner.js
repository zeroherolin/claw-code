// darwin/hooks/production-device-hook-template-runner.js — Claude Code 2.1.310（darwin）模块 chunk-6nx32q1v.js
import "../shared/chunk-2fe3b2b7.js";
import "../mcp/allowed-warning.js";
import "../permissions/classifier-transcript-too-long.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../fs/async-hooks.93b1.js";
import "../shared/chunk-3b9c376b.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import { c } from "../agents/third-party.js";
import { v } from "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import { _, ee, t } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../shell/invalid-type.js";
import "../terminal/chunk-3ca478a4.js";
import "../mcp/chunk-0e2a1db6.js";
import "../mcp/always-allow.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../shared/chunk-59ffb646.js";
import { Hht, KMo, Phe, lS, fde, $qn, Uqn } from "../context/team-memory-sync.js";
import { Hn } from "../fs/utf-8.8f8e.js";
import "../shared/async-hooks.9e79.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import "../telemetry/chunk-9d6962d2.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../settings/workflow-launch-exec.js";
import "../shared/chunk-4563156b.js";
import "../fs/chunk-475c6783.js";
import "../plugins/chunk-0a4c51cf.js";
import "../remote/local-agent.js";
import "../shared/chunk-8eee6836.js";
import "../shared/chunk-1b1c4439.js";
import "../plugins/skills-dir.js";
import "../git/chunk-c16cb6b4.js";
import "../fs/chunk-86be9585.js";
import "../shared/async-hooks.5238.js";
import "../shell/chunk-fea9c492.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.aa9a.js";
import "../git/utf-8.js";
import "../artifacts/chunk-a6c9d164.js";
import "../git/utf8-keep-bom.js";
import "../shared/chunk-d4196a83.js";
import { hxe } from "../fs/tempdir-owner-mismatch.js";
import "../fs/async-hooks.7959.js";
import "../fs/chunk-9b7a3f1c.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../remote/moved-directory.js";
import "../cli/chunk-af2447be.js";
import "../mcp/init-function-end.js";
import "../models/total-tokens-reminder.js";
import "../shell/spawn-error.js";
import "../settings/built-in.js";
import "../settings/chunk-10c0eeb6.js";
import "../settings/global-config-and-gates.js";
import "../terminal/xterm-ghostty.js";
import "../fs/content-encoding.js";
import "../auth/descriptor-direct.js";
import "../remote/self-hosted.js";
import "../fs/ca-certs-load.js";
import "../shared/chunk-f98598c3.js";
import "../auth/permission-error.js";
import "../auth/claude-code-user.js";
import "../shell/find-generic-password.js";
import "../auth/profile-explicit.js";
import "../shared/async-hooks.b037.js";
import "../fs/chunk-b6c2193e.js";
import "../fs/chunk-21654dda.js";
import "../shared/chunk-3a99f127.js";
import "../auth/auth-launcher-host-login.js";
import "../permissions/turn-abort.js";
import "../mcp/toolbox-mcp-server-id.js";
import "../settings/ax-sr-suggestion-nav.js";
import "../context/fetch-project-timeline.js";
import "../mcp/claude-browser.js";
import "../fs/reply-across-default-dirs.js";
import "../telemetry/chunk-b109a1d6.js";
import "../telemetry/chunk-addb1ac7.js";
import "../agents/chunk-44729602.js";
import "../git/get-url.js";
import "../shared/chunk-dda594a8.js";
import "../shared/chunk-46ffe22f.js";
import "../artifacts/cobalt-plinth-lovage.js";
import "../computer-use/chunk-217335d0.js";
import "../workflows/chunk-a1595c7e.js";
import "../agents/session-stable-address.js";
import "../agents/in-process-teammate.32be.js";
import "../shared/chunk-537f65d6.js";
import { Mo } from "../git/ssh-placeholder.js";
import "../shared/chunk-6ea667ee.js";
import "../shell/chunk-fc32a44c.js";
import { $at, Zxn } from "./chunk-180a6084.js";
import { Um } from "../context/tool-result-clearing-after-idle-server-report.js";
import "../shared/chunk-b09058c6.js";
import "../shared/chunk-cb8096b1.js";
import "../shared/chunk-d1292a44.js";
import "../shared/chunk-6ae01e90.js";
import "../models/claude-mythos-preview.js";
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
import { spawn as L } from "child_process";
import { createHash as F } from "crypto";
import { constants as E } from "fs";
import { lstat as S, mkdir as I, open as J, realpath as j } from "fs/promises";
import { homedir as B } from "os";
import { join as x } from "path";
var U = ["/usr/bin/python3", "/usr/local/bin/python3", "/bin/python3"], N = 86, z = () => ["import hashlib,os,sys", "p,d,n=sys.argv[1],sys.argv[2],int(sys.argv[3])", `fail=lambda m:(sys.stderr.write('device hook template integrity check failed: '+m+'\\n'),sys.exit(${N}))`, "os.path.isfile(p) or fail('not a regular file')", "os.path.getsize(p)<=n or fail('too large')", "b=None", 'try: b=open(p,"rb").read()', "except OSError as e: fail(type(e).__name__)", "hashlib.sha256(b).hexdigest()==d or fail('digest mismatch')", "sys.argv=[p]", "exec(compile(b,p,'exec'),{'__name__':'__main__','__file__':p})"].join(`
`), V = z();
async function Y(o) {
  for (let r of U) {
    let e = await o.vet(r);
    if (e !== null) return e;
  }
  return null;
}
async function G(o, r, e) {
  await e.mkdir(e.templateDir, 448);
  let n = x(e.templateDir, `${o}.py`);
  return await e.writeFileAtomic(n, r, 384), n;
}
function W(o, r, e, n = 262144) {
  return [o, "-I", "-S", "-c", V, r, e, String(n)];
}
var K = /^(?:LD_|DYLD_|GCONV_PATH$|NLSPATH$|DEVELOPER_DIR$|PYTHON)/;
function X(o) {
  let r = { ...o };
  for (let e of Object.keys(r)) if (K.test(e)) delete r[e];
  return r;
}
var P = 65536;
async function q(o, r, e) {
  let n = await H(r.cwd, o, r, e);
  return n.status === null && n.signal === void 0 && !n.timedOut && /ENOENT|spawn .* cwd|uv_cwd|not a directory/i.test(n.stderr) ? H(B(), o, r, e) : n;
}
function H(o, r, e, n) {
  return new Promise((i) => {
    let [l, ...s] = r;
    if (l === void 0) {
      i({ stdout: "", stderr: "no command", status: null, timedOut: false });
      return;
    }
    let p = false, k = (d) => {
      if (!p) p = true, i(d);
    }, u;
    try {
      u = L(l, s, { cwd: o, env: { ...X(n.env ?? Mo()), CLAUDE_PROJECT_DIR: n.projectDir }, stdio: ["pipe", "pipe", "pipe"], detached: true, windowsHide: true, ...Hht(e.hook_event_name) });
    } catch (d) {
      k({ stdout: "", stderr: d instanceof Error ? d.message : "spawn failed", status: null, timedOut: false });
      return;
    }
    let f = () => {
      try {
        if (u.pid !== void 0) process.kill(-u.pid, "SIGKILL");
      } catch {
        u.kill("SIGKILL");
      }
    }, m = "", y = "", w = false, g = false, h = false, R = setTimeout((d) => {
      w = true, d();
    }, n.timeoutMs, f), T = () => f();
    if (n.signal !== void 0) if (n.signal.aborted) T();
    else n.signal.addEventListener("abort", T, { once: true });
    let D = (d, b, M) => {
      if (d.length + b.length > P) M();
      return d.length >= P ? d : (d + b).slice(0, P);
    };
    u.stdout?.setEncoding("utf8"), u.stderr?.setEncoding("utf8"), u.stdout?.on("data", (d) => m = D(m, d, () => g = true)), u.stderr?.on("data", (d) => y = D(y, d, () => h = true)), u.stdin?.on("error", () => {
    });
    let C = (d, b) => {
      clearTimeout(R), n.signal?.removeEventListener("abort", T), k({ stdout: m, stderr: y, status: d, ...b !== void 0 && { signal: b }, timedOut: w, ...g && { stdoutTruncated: g }, ...h && { stderrTruncated: h } });
    };
    u.on("error", (d) => {
      y = y || d.message, C(null);
    }), u.on("close", (d, b) => C(d, b ?? void 0));
    let O;
    try {
      O = _(e);
    } catch {
      O = "";
    }
    u.stdin?.end(O);
  });
}
function A(o) {
  let r = o.stdout.trim();
  if (o.stdoutTruncated === true) return { kind: "unreadable" };
  if (!r.startsWith("{")) return r === "" ? { kind: "silent" } : { kind: "unreadable" };
  try {
    let e = fde().safeParse(ee(r));
    if (!e.success) return { kind: "unreadable" };
    let n = e.data;
    return "async" in n ? { kind: "unreadable" } : { kind: "answer", answer: n };
  } catch {
    return { kind: "unreadable" };
  }
}
function Q(o) {
  if (o.status === 2) return { decision: "block", reason: o.stderr.trim() || "blocked by a device hook template" };
  if (o.status !== 0) return {};
  let r = A(o);
  if (r.kind !== "answer") return {};
  let e = r.answer, n = { ...e.continue === false && { continue: false, ...e.stopReason !== void 0 && { stopReason: e.stopReason } }, ...e.decision === "block" && { decision: "block", ...e.reason !== void 0 && { reason: e.reason } }, ...e.systemMessage !== void 0 && { systemMessage: e.systemMessage } }, i = e.hookSpecificOutput;
  if (i?.hookEventName === "PreToolUse") {
    let l = i.permissionDecision === "deny" || i.permissionDecision === "ask" ? i.permissionDecision : void 0;
    return { ...n, hookSpecificOutput: { hookEventName: "PreToolUse", ...l !== void 0 && { permissionDecision: l }, ...l !== void 0 && i.permissionDecisionReason !== void 0 && { permissionDecisionReason: i.permissionDecisionReason }, ...i.additionalContext !== void 0 && { additionalContext: i.additionalContext } } };
  }
  if (i?.hookEventName === "PostToolUse" && i.additionalContext !== void 0) return { ...n, hookSpecificOutput: { hookEventName: "PostToolUse", additionalContext: i.additionalContext } };
  return n;
}
function Z(o, r) {
  if (r) return "aborted";
  if (o.timedOut) return "timeout";
  if (o.signal !== void 0) return "killed";
  if (o.status === null) return "spawn_failed";
  if (o.status === N) return "integrity_failed";
  if (o.status === 0) return A(o).kind === "unreadable" ? "error" : "ok";
  return o.status === 2 ? "blocked" : "error";
}
var te = { integrity_failed: "its file no longer matched what was verified", error: "it exited with an error or an unreadable answer", spawn_failed: "it could not be started", killed: "it was killed before it answered", interpreter_untrusted: "its interpreter can no longer be trusted", timeout: "it took too long" };
function ne(o, r, e, n, i, l) {
  return async (s, p, k) => {
    let u = Date.now(), f = await i(), m = f ? await q(o, s, { timeoutMs: Math.max(1e3, r * 1e3 - 2e3), projectDir: l(), ...k !== void 0 && { signal: k } }) : { stdout: "", stderr: "interpreter no longer trusted", status: null, timedOut: false }, y = Q({ ...m, stderr: KMo(m.stderr, 2e3).text }), { answer: w, report: g } = Phe(y, e.event), h = f ? Z(m, k?.aborted === true) : "interpreter_untrusted", R = h === "ok" && lS(w) ? "blocked" : h;
    if (n({ outcome: R, durationMs: Date.now() - u, fieldsDropped: g.dropped.length > 0 || g.truncated.length > 0 }), R === "aborted") return e.failClosed ? { decision: "block", reason: `cloud template ${e.id} was interrupted before it could answer` } : {};
    let T = te[R];
    if (T !== void 0) {
      let D = `cloud template ${e.id} did not run cleanly: ${T}`;
      return e.failClosed ? { decision: "block", reason: D, systemMessage: D } : { ...w, systemMessage: D };
    }
    return w;
  };
}
function re(o) {
  return { vet: async (r) => {
    try {
      let e = typeof process.getuid === "function" ? process.getuid() : void 0, n = (p) => e !== void 0 && e !== 0 && p === e, i = async (p) => {
        let k = p.split("/").filter(Boolean);
        for (let u = 0; u < k.length; u += 1) {
          let f = await S("/" + k.slice(0, u).join("/"));
          if (!f.isDirectory() || (f.mode & 18) !== 0 || n(f.uid)) return false;
        }
        return true;
      };
      if (!await i(r)) return null;
      let l = await j(r);
      if (!await i(l)) return null;
      let s = await S(l);
      return s.isFile() && (s.mode & 73) !== 0 && (s.mode & 18) === 0 && !n(s.uid) ? l : null;
    } catch {
      return null;
    }
  }, mkdir: async (r, e) => {
    try {
      await I(r, { mode: e });
    } catch (l) {
      if (v(l) !== "EEXIST") throw l;
    }
    let n = await S(r), i = typeof process.getuid === "function" ? process.getuid() : void 0;
    if (!n.isDirectory() || i !== void 0 && n.uid !== i || (n.mode & 63) !== 0) throw Error("unsafe device-hook template directory");
  }, writeFileAtomic: (r, e, n) => Hn(r, e, n), templateDir: o };
}
function Oe(o) {
  let r = Um(), e = re(x(r, "device-hook-templates", String(process.pid))), n, i = () => (n ??= Y(e).then((s) => {
    if (s === null) n = void 0;
    return s;
  }), n), l = /* @__PURE__ */ new Map();
  return { resolveInterpreter: i, async prepare(s, p, k, u) {
    let f = await i();
    if (f === null) throw Error("no absolute python3 for a device hook template");
    await I(r, { recursive: true, mode: 448 }), hxe(r);
    let m = l.get(p);
    if (m !== void 0 && !await oe(await m.catch(() => null), p, s.maxBytes)) l.delete(p), m = void 0;
    if (m === void 0) m = (async () => (await e.mkdir(x(r, "device-hook-templates"), 448), G(p, k, e)))(), l.set(p, m), m.catch(() => l.delete(p));
    let y = await m, w = Zxn(s);
    return ne(W(f, y, p, s.maxBytes), u, { id: s.id, event: s.event, failClosed: w }, (g) => {
      if (a("tengu_device_hook_template_run", { template: c(ie(s.id)), outcome: c(g.outcome), duration_ms: g.durationMs, fields_dropped: g.fieldsDropped }), g.outcome === "integrity_failed") t(`Device hook template ${s.id} refused at run time: integrity check failed (${y})`, { level: "warn" });
      else if (g.outcome === "interpreter_untrusted") t(`Device hook template ${s.id} refused at run time: ${f} no longer vets as a trusted interpreter`, { level: "warn" });
    }, async () => {
      let g = await e.vet(f) === f;
      if (!g) n = void 0;
      return g;
    }, o);
  }, install: (s, p, k) => $qn(s, p, "templates", k), remove: (s) => Uqn(s, "templates") };
}
async function oe(o, r, e) {
  if (o === null) return false;
  let n;
  try {
    n = await J(o, E.O_RDONLY | E.O_NONBLOCK | E.O_NOFOLLOW);
    let i = await n.stat();
    if (!i.isFile() || i.size > e) return false;
    let l = Buffer.alloc(i.size), { bytesRead: s } = await n.read(l, 0, i.size, 0);
    return s === i.size && F("sha256").update(l).digest("hex") === r;
  } catch {
    return false;
  } finally {
    await n?.close().catch(() => {
    });
  }
}
function ie(o) {
  return $at(o)?.id ?? "unknown";
}
export {
  Oe as productionDeviceHookTemplateRunner,
  ie as telemetryTemplateId
};
