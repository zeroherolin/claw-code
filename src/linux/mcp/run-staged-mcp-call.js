// linux/mcp/run-staged-mcp-call.js — Claude Code 2.1.310（linux）模块 chunk-tbzwjqjd.js
import { Urr } from "./allowed-warning.js";
import "../permissions/classifier-transcript-too-long.js";
import "../shared/chunk-2fe3b2b7.js";
import "../permissions/quota-auto-resume-disabled.js";
import { ur } from "../permissions/turn-abort.js";
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import { d, E, G } from "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import { _ } from "../fs/gitlab-runner-authentication-token.js";
import { Y } from "../shared/async-hooks.9e79.js";
import "../models/claude-3-5-sonnet.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../shared/chunk-50219e50.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-de56f88d.js";
import { pxe } from "../fs/tempdir-owner-mismatch.js";
import "../telemetry/chunk-9097a12b.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { jQe } from "../context/team-memory-sync.js";
import "../fs/utf-8.8f8e.js";
import "../shared/out-of-order.js";
import "../fs/content-encoding.js";
import "../cli/chunk-af2447be.js";
import "./toolbox-mcp-server-id.js";
import "../settings/global-config-and-gates.js";
import "../shell/chunk-fea9c492.js";
import "../terminal/xterm-ghostty.js";
import "../models/total-tokens-reminder.js";
import { Ir } from "../shell/invalid-type.js";
import "../shared/chunk-4563156b.js";
import "../fs/chunk-475c6783.js";
import "../plugins/chunk-0a4c51cf.js";
import "../remote/local-agent.js";
import "../shared/chunk-8eee6836.js";
import "../shared/chunk-1b1c4439.js";
import "../terminal/chunk-3ca478a4.js";
import "./chunk-0e2a1db6.js";
import "./always-allow.js";
import "../plugins/skills-dir.js";
import "../git/chunk-c16cb6b4.js";
import "../fs/chunk-86be9585.js";
import "../shared/async-hooks.5238.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.aa9a.js";
import "../git/utf-8.js";
import "../artifacts/chunk-a6c9d164.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../git/utf8-keep-bom.js";
import "../shared/chunk-d4196a83.js";
import "../fs/async-hooks.7959.js";
import "../settings/workflow-launch-exec.js";
import "../fs/chunk-9b7a3f1c.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../remote/moved-directory.js";
import "./init-function-end.js";
import "../shell/spawn-error.js";
import "../auth/descriptor-direct.js";
import "../remote/self-hosted.js";
import "../fs/ca-certs-load.js";
import "../shared/chunk-f98598c3.js";
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
import "../git/get-url.js";
import { pZt, k8e, q$n, iK, skr, Sho, who } from "../remote/ccr-synced-file-push.js";
import { Vme } from "../shared/chunk-b4f29855.js";
import "../shared/chunk-cb8096b1.js";
import "../shared/chunk-d1292a44.js";
import "../shared/chunk-6ae01e90.js";
import "../models/claude-mythos-preview.js";
import { H } from "../shared/chunk-7027e6d5.js";
import "../shared/sk-ant-sid.js";
import "../vendor/aws-sdk/chunk-d15f3977.js";
import "../shared/chunk-cc3baac1.js";
import "../shared/chunk-1f805b50.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "../shared/chunk-8bf008d9.js";
import "../shared/chunk-6da6c5a3.js";
import "../shared/chunk-86ecf3aa.js";
import "../remote/chunk-95151620.js";
import { constants as z } from "fs";
import { mkdir as K, mkdtemp as ot, open as it, realpath as Z, rm as V, writeFile as at } from "fs/promises";
import { posix as st } from "path";
var { extname: ut, join: x } = st, lt = 12e4, ct = 6e5, ft = 1e3, dt = 2e3, tt = /^\{\{(in|out):([A-Za-z0-9_-]{1,64})\}\}$/, I = "cancelled by client";
function r(e, t, n, a) {
  return { staging: et(e, t, n), telemetryCode: a };
}
function P(e, t) {
  if (typeof e === "string") {
    if (tt.test(e)) t.add(e);
    return;
  }
  if (Array.isArray(e)) {
    for (let n of e) P(n, t);
    return;
  }
  if (H(e)) for (let n of Object.values(e)) P(n, t);
}
function U(e, t) {
  if (typeof e === "string") {
    if (tt.test(e)) return t.get(e) ?? e;
    return e;
  }
  if (Array.isArray(e)) return e.map((n) => U(n, t));
  if (H(e)) return Ir(e, (n) => U(n, t));
  return e;
}
function J(e) {
  let t = ut(e);
  return /^\.[A-Za-z0-9]{1,8}$/.test(t) ? t : "";
}
function Q(e, t) {
  let n;
  try {
    n = skr(k8e, t);
  } catch (a) {
    return { refused: r("tool_error", `invalid ${e} lane_path ${_(t)}: ${d(a)}`) };
  }
  if (jQe(n)) return { refused: r("tool_error", `invalid ${e} lane_path ${_(t)}: ${q$n}`, void 0, "lane_path_reserved") };
  return { rel: n };
}
async function Nt(e, t) {
  let n, a, y;
  try {
    let c = await gt(e, t);
    n = c.staging, a = c.tool, y = c.telemetryCode;
  } catch (c) {
    let N = E(c);
    n = et("tool_error", `unexpected failure: ${N ?? d(c)}`);
  }
  if (t.signal?.aborted) return { staging: n, tool: a };
  if (n.ok) g("ccr_mcp_call_staged");
  else m("ccr_mcp_call_staged", y ?? n.error_code);
  return { staging: n, tool: a };
}
function et(e, t, n) {
  return { ok: false, error_code: e, detail: t.slice(0, dt).replace(/[\uD800-\uDBFF]$/, ""), ...n !== void 0 && { retryable: n } };
}
function pt(e) {
  if (typeof e === "string") return e;
  if (Array.isArray(e)) return e.map((t) => t !== null && typeof t === "object" && "text" in t && typeof t.text === "string" ? t.text : "").filter(Boolean).join(`
`);
  return "";
}
async function gt(e, t) {
  let n = Urr().safeParse(e);
  if (!n.success) return r("tool_error", `invalid request: ${n.error.message}`);
  let a = n.data;
  if (O() === "windows") return r("tool_error", "staged mcp_call is not supported on this platform");
  if (a.output_files !== void 0 && a.expires_at === void 0) return r("tool_error", "invalid request: expires_at is required when output_files are declared");
  if (a.expires_at !== void 0) {
    let i = Vme(a.expires_at);
    if (Number.isNaN(i)) return r("expired", `expires_at is not an RFC3339 timestamp with a zone: ${a.expires_at}`, void 0, "expires_at_unparseable");
    if (Date.now() > i) return r("expired", `request expired at ${a.expires_at}`);
  }
  let y = [];
  for (let i of a.input_files ?? []) {
    let s = Q("input", i.lane_path);
    if ("refused" in s) return s.refused;
    y.push({ spec: i, rel: s.rel });
  }
  let c = [], N = /* @__PURE__ */ new Map();
  for (let i of a.output_files ?? []) {
    let s = Q("output", i.lane_path);
    if ("refused" in s) return s.refused;
    let { rel: f } = s, p = N.get(f);
    if (p !== void 0) return r("tool_error", `duplicate output lane_path: ${i.lane_path} collides with ${p}`);
    N.set(f, i.lane_path), c.push({ spec: i, rel: f });
  }
  for (let [i, s] of [["input", a.input_files ?? []], ["output", a.output_files ?? []]]) {
    let f = /* @__PURE__ */ new Set();
    for (let { name: p } of s) {
      if (f.has(p)) return r("tool_error", `duplicate ${i} name: ${p}`);
      f.add(p);
    }
  }
  let W = a.input_files !== void 0 || a.output_files !== void 0;
  if (W) {
    let i = /* @__PURE__ */ new Set([...y.map(({ spec: u }) => `{{in:${u.name}}}`), ...c.map(({ spec: u }) => `{{out:${u.name}}}`)]), s = /* @__PURE__ */ new Set();
    P(a.arguments ?? {}, s);
    let f = [...s].filter((u) => !i.has(u));
    if (f.length > 0) return r("tool_error", `invalid request: args token names no declared file: ${f.join(", ")}`);
    let p = c.filter(({ spec: u }) => !s.has(`{{out:${u.name}}}`)).map(({ spec: u }) => u.name);
    if (p.length > 0) return r("tool_error", `invalid request: declared output not referenced by any {{out:NAME}} token in arguments: ${p.join(", ")}`);
  }
  let R;
  try {
    let i;
    if (t.tempRoot === void 0) i = pxe();
    else i = t.tempRoot, await K(i, { recursive: true, mode: 448 });
    R = await ot(x(i, "plugin-tool-")), await K(x(R, "in"), { mode: 448 }), await K(x(R, "out"), { mode: 448 });
  } catch (i) {
    if (R !== void 0) await V(R, { recursive: true, force: true }).catch(() => {
    });
    let s = E(i);
    return Y("warn", "ptc_staging_unavailable", { code: s ?? "temp_dir_refused" }), r("tool_error", `staging unavailable: ${s ?? "temp_dir_refused"}`);
  }
  let D = R;
  try {
    let i = /* @__PURE__ */ new Map(), s = [];
    for (let [o, { spec: h, rel: k }] of y.entries()) {
      if (t.signal?.aborted) return r("tool_error", I);
      let l = await Sho(k);
      if (l.kind === "not_found") return r("input_missing", `input not found: ${h.lane_path}`);
      if (l.kind === "error") return r("tool_error", `input fetch failed for ${h.lane_path}: ${l.message}`, l.retryable);
      let A = x(D, "in", `${o}${J(h.lane_path)}`);
      try {
        await at(A, l.buf, { mode: 384 });
      } catch (M) {
        return r("tool_error", `input stage failed: ${E(M) ?? "unknown"}`);
      }
      i.set(`{{in:${h.name}}}`, A), s.push({ lane_path: h.lane_path, etag: l.content_sha256 });
    }
    let f = c.map(({ spec: o, rel: h }, k) => {
      let l = x(D, "out", `${k}${J(o.lane_path)}`);
      return i.set(`{{out:${o.name}}}`, l), { spec: o, rel: h, path: l };
    }), p = W ? Ir(a.arguments ?? {}, (o) => U(o, i)) : a.arguments ?? {}, u = Math.min(Math.max(a.timeout_ms ?? lt, ft), ct), L = ur(), F = false, rt = setTimeout(() => {
      if (L.signal.aborted) return;
      F = true, L.abort(Error("staged mcp_call timed out"));
    }, u), q = () => L.abort(t.signal?.reason);
    if (t.signal?.aborted) q();
    else t.signal?.addEventListener("abort", q, { once: true });
    let b;
    try {
      b = await t.call(p, L.signal);
    } catch (o) {
      if (F) return r("timeout", `tool did not complete within ${u}ms (${d(o)})`);
      if (t.signal?.aborted) return r("tool_error", `${I} (${d(o)})`);
      return r("tool_error", `tool call failed: ${d(o)}`);
    } finally {
      clearTimeout(rt), t.signal?.removeEventListener("abort", q);
    }
    if (b.isError) {
      if (F) return r("timeout", `tool call exceeded ${u}ms`);
      if (t.signal?.aborted) return r("tool_error", I);
      let o = pt(b.content);
      return r("tool_error", o || "tool returned an error result");
    }
    let nt = await Z(D), j = [];
    for (let { spec: o, rel: h, path: k } of f) {
      if (t.signal?.aborted) return r("tool_error", I);
      let l;
      try {
        l = await Z(k);
      } catch (w) {
        if (G(w)) return r("tool_error", `tool did not produce output: ${o.name}`);
        return r("tool_error", `output read failed for ${o.name}: ${E(w) ?? "unknown"}`);
      }
      if (!l.startsWith(nt + "/")) return r("tool_error", `output path escapes the staging dir: ${o.name}`);
      let A = iK, M;
      try {
        let w = await it(l, z.O_RDONLY | z.O_NOFOLLOW | z.O_NONBLOCK);
        try {
          let T = await w.stat();
          if (!T.isFile()) return r("tool_error", `output is not a regular file: ${o.name}`);
          if (T.nlink > 1) return r("tool_error", `output has multiple hard links: ${o.name}`);
          if (T.size > A) return r("output_too_large", `output ${o.name} is ${T.size} bytes (cap ${A})`);
          let B = Number(T.size), v = Buffer.allocUnsafe(B + 1), S = 0;
          for (; ; ) {
            let { bytesRead: X } = await w.read(v, S, B + 1 - S, S);
            if (X === 0) break;
            S += X;
          }
          if (S !== B) return r("tool_error", `output changed during collection: ${o.name}`);
          M = v.subarray(0, S);
        } finally {
          await w.close();
        }
      } catch (w) {
        if (G(w)) return r("tool_error", `tool did not produce output: ${o.name}`);
        return r("tool_error", `output read failed for ${o.name}: ${E(w) ?? "unknown"}`);
      }
      let C = await who(t.syncDir ?? pZt, h, M, o.if_match);
      if (!C.ok) return r(C.reason === "too_large" ? "output_too_large" : C.reason === "conflict" ? "output_conflict" : "tool_error", `output write failed for ${o.lane_path}: ${C.error}`, C.retryable);
      j.push({ lane_path: o.lane_path, etag: C.etag, bytes: M.length });
    }
    return Y("info", "mcp_call_staged_ok", { inputs: s.length, outputs: j.length }), { staging: { ok: true, outputs: j, inputs_used: s }, tool: { content: b.content, structuredContent: b.structuredContent, _meta: b._meta } };
  } finally {
    await V(D, { recursive: true, force: true }).catch(() => {
    });
  }
}
export {
  Nt as runStagedMcpCall
};
