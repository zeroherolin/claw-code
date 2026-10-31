// darwin/hooks/run-hook-edit.js — Claude Code 2.1.310（darwin）模块 chunk-gxpnmzep.js
import "../shared/chunk-d2c47492.js";
import "../shared/chunk-57ff8cc1.js";
import "../shared/chunk-2fe3b2b7.js";
import "../fs/async-hooks.93b1.js";
import "../shared/chunk-3b9c376b.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import { Ud, Zt, Ape } from "../plugins/skills-dir.js";
import { Qt, TS } from "../settings/workflow-launch-exec.js";
import { Ir } from "../shell/invalid-type.js";
import "../telemetry/chunk-9097a12b.js";
import "../telemetry/chunk-9d6962d2.js";
import "../auth/oauth-2025-04-20.js";
import "../shared/chunk-4563156b.js";
import "../fs/utf-8.8f8e.js";
import "../fs/chunk-475c6783.js";
import "../plugins/chunk-0a4c51cf.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../shared/chunk-59ffb646.js";
import "../remote/local-agent.js";
import "../shared/chunk-8eee6836.js";
import "../permissions/classifier-transcript-too-long.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../shared/chunk-1b1c4439.js";
import "../terminal/chunk-3ca478a4.js";
import "../mcp/chunk-0e2a1db6.js";
import "../mcp/always-allow.js";
import "../git/chunk-c16cb6b4.js";
import "../fs/chunk-86be9585.js";
import "../shared/async-hooks.5238.js";
import "../shell/chunk-fea9c492.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.aa9a.js";
import "../git/utf-8.js";
import "../artifacts/chunk-a6c9d164.js";
import "../shared/async-hooks.9e79.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../git/utf8-keep-bom.js";
import "../shared/chunk-d4196a83.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/async-hooks.7959.js";
import "../fs/chunk-9b7a3f1c.js";
import { kS, ln, $h, fe, kI, GKe, wa } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../remote/moved-directory.js";
import "../cli/chunk-af2447be.js";
import "../mcp/init-function-end.js";
import "../models/total-tokens-reminder.js";
import "../shell/spawn-error.js";
import { ud, sb } from "../settings/built-in.js";
import "../workflows/chunk-5e65bb82.js";
import "../settings/chunk-10c0eeb6.js";
import "../settings/global-config-and-gates.js";
import "../terminal/xterm-ghostty.js";
import "../mcp/allowed-warning.js";
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
import "../git/ssh-placeholder.js";
import "../plugins/not-found.js";
import "../shared/chunk-16f9cd1b.js";
import "../shared/chunk-53e41b56.js";
import "../plugins/entry-refused.js";
import "../plugins/chunk-c198f87f.js";
import "../shared/chunk-471874cc.js";
import "../fs/chunk-dacd9872.js";
import { igr } from "../settings/mcp-tool.js";
import "../context/tool-name.js";
import "../plugins/chunk-53f86049.js";
import { qO } from "../context/tool-result-clearing-after-idle-server-report.js";
import "../shared/chunk-fe849e7d.js";
import "../shared/chunk-c564b685.js";
import "../shared/chunk-b09058c6.js";
import "../auth/none-at-claim.js";
import "../shared/chunk-7e745eb7.js";
import "../mcp/chunk-d6e9c05b.js";
import "../shared/chunk-7c8c6c5a.js";
import "../shared/chunk-67236fa7.js";
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
var T = ["add", "replace", "remove"], K = 1e4, M = 262144;
function h(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var A = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function _(e) {
  if (Array.isArray(e)) return e.some(_);
  if (!h(e)) return false;
  return Object.keys(e).some((o) => A.has(o) || _(e[o]));
}
function S(e, o) {
  if (!h(e)) return { ok: false, error: `edit_hook: ${o} must be an object` };
  if (_(e)) return { ok: false, error: `edit_hook: ${o} has a key that is not allowed` };
  if (JSON.stringify(e).length > M) return { ok: false, error: `edit_hook: ${o} is too large` };
  let t = Ape().safeParse(e);
  if (!t.success) {
    let a = t.error.issues[0], r = a && a.path.length > 0 ? ` (${a.path.join(".")})` : "";
    return { ok: false, error: `edit_hook: ${o} is not a valid hook${r}: ${a?.message ?? "invalid"}` };
  }
  return { ok: true, hook: t.data };
}
function x(e, o) {
  if (e === void 0 || e === null) return { ok: true, matcher: "" };
  if (typeof e !== "string") return { ok: false, error: `edit_hook: ${o} must be a string` };
  if (e.length > K) return { ok: false, error: `edit_hook: ${o} is too long` };
  if (e in {}) return { ok: false, error: `edit_hook: ${o} is not allowed` };
  return { ok: true, matcher: e };
}
function F(e) {
  let o = e.op;
  if (typeof o !== "string" || !T.includes(o)) return { ok: false, error: "edit_hook: op must be add, replace, or remove" };
  let t = e.source;
  if (typeof t !== "string" || !TS.includes(t)) return { ok: false, error: "edit_hook: source must be userSettings, projectSettings, or localSettings" };
  let a = e.event;
  if (typeof a !== "string" || !Ud.includes(a)) return { ok: false, error: "edit_hook: event is not a known hook event" };
  let r = x(e.matcher, "matcher");
  if (!r.ok) return r;
  let n;
  if (o === "add" || o === "replace") {
    let c = S(e.hook, "hook");
    if (!c.ok) return c;
    n = c.hook;
  }
  let i;
  if (o === "replace" || o === "remove") {
    let c = e.target;
    if (!h(c)) return { ok: false, error: "edit_hook: target must be an object for replace and remove" };
    let u = c.event;
    if (typeof u !== "string" || !Ud.includes(u)) return { ok: false, error: "edit_hook: target.event is not a known hook event" };
    let l = x(c.matcher, "target.matcher");
    if (!l.ok) return l;
    let s = S(c.hook, "target.hook");
    if (!s.ok) return s;
    i = { event: u, matcher: l.matcher, hook: s.hook };
  }
  return { ok: true, value: { op: o, source: t, event: a, matcher: r.matcher, hook: n, target: i } };
}
function I() {
  let e = fe("policySettings");
  if (e?.disableAllHooks === true) return "edit_hook: hooks are disabled by managed settings";
  if (e?.allowManagedHooksOnly === true) return "edit_hook: managed settings allow managed hooks only";
  if (ud("hooks")) return "edit_hook: managed settings restrict hooks to plugin sources";
  if (sb()) return "edit_hook: managed settings could not be read, so hooks cannot be edited";
  return null;
}
function L(e) {
  if (!Qt(e)) return `edit_hook: the ${e} source is disabled for this session (--setting-sources)`;
  return null;
}
async function J(e, o) {
  let t = null;
  return { error: (await wa(e.source, (r) => {
    let n = N(r, e);
    return t = n.outcome, n.partial;
  }, { legacyRevocation: "skip" }, o)).error, outcome: t };
}
function g(e) {
  if (Array.isArray(e)) return `[${e.map(g).join(",")}]`;
  if (h(e)) return `{${Object.keys(e).sort().map((o) => `${JSON.stringify(o)}:${g(e[o])}`).join(",")}}`;
  return JSON.stringify(e) ?? "null";
}
function w(e, o) {
  let t = Ape().safeParse(e);
  if (!t.success) return false;
  return g(igr(t.data)) === g(igr(o));
}
function P(e) {
  return g(e.type === "http" && e.headers !== void 0 ? { ...e, headers: qO(e.headers, (o, t) => t.toLowerCase()) } : e);
}
function B(e) {
  let o = Ape().safeParse(e);
  return o.success ? P(o.data) : null;
}
function O(e, o, t, a) {
  let r = Ape().safeParse(t);
  if (!r.success) return null;
  let n = P(r.data), i = false;
  for (let [c, u] of e.entries()) {
    if (m(u) !== o) continue;
    for (let [l, s] of u.hooks.entries()) {
      if (a?.group === c && a.index === l) continue;
      if (B(s) === n) return "exact";
      if (w(s, r.data)) i = true;
    }
  }
  return i ? "by-headers" : null;
}
function v(e) {
  return e === "exact" ? "duplicate" : "twin-by-headers";
}
function m(e) {
  if (!h(e) || !Array.isArray(e.hooks)) return null;
  let o = e.matcher;
  if (o === void 0 || o === null || o === "") return "";
  return typeof o === "string" ? o : null;
}
function R(e, o) {
  let t = o, a = {};
  if (h(e)) {
    let n = Ape().safeParse(e);
    if (n.success) {
      for (let i of Object.keys(e)) if (!(i in n.data) && !A.has(i)) a[i] = e[i];
      if (n.data.type === "http" && t.type === "http") {
        let i = n.data.headers ?? {};
        if (t.headers === void 0) a.headers = n.data.headers;
        else {
          let c = new Map(Object.entries(i).map(([u, l]) => [u.toLowerCase(), l]));
          t = { ...t, headers: Ir(t.headers, (u, l) => u === "" ? (Object.hasOwn(i, l) ? i[l] : c.get(l.toLowerCase())) ?? "" : u) };
        }
      }
    }
  }
  let r = { ...a, ...t };
  if (r.type === "http" && h(r.headers) && Object.keys(r.headers).length === 0) delete r.headers;
  return r;
}
function C(e, o) {
  let t = e?.hooks;
  if (!h(t) || !Array.isArray(t[o.event])) return 0;
  let a = 0;
  for (let r of t[o.event]) {
    if (m(r) !== o.matcher) continue;
    for (let n of r.hooks) if (w(n, o.hook)) a++;
  }
  return a;
}
function N(e, o) {
  let t = e?.hooks;
  if (t !== void 0 && !h(t)) return { partial: null, outcome: "not-a-list" };
  let a = t ?? {}, r = /* @__PURE__ */ new Map(), n = (s) => {
    let k = r.get(s);
    if (k) return k;
    let d = a[s];
    if (d !== void 0 && !Array.isArray(d)) return null;
    let p = (d ?? []).map((f) => h(f) && Array.isArray(f.hooks) ? { ...f, hooks: [...f.hooks] } : f);
    return r.set(s, p), p;
  }, i;
  if (o.op === "add") i = { ...o.hook };
  else {
    let s = o.target, k = n(s.event);
    if (k === null) return { partial: null, outcome: "not-a-list" };
    let d = null;
    for (let f = 0; f < k.length && d === null; f++) {
      let H = k[f];
      if (m(H) !== s.matcher) continue;
      let E = H.hooks, b = E.findIndex((j) => w(j, s.hook));
      if (b >= 0) d = { list: E, index: b, groupIndex: f };
    }
    if (d === null) return { partial: null, outcome: "target-missing" };
    if (o.op === "replace" && o.event === s.event && o.matcher === s.matcher) {
      i = R(d.list[d.index], o.hook);
      let f = O(k, s.matcher, i, { group: d.groupIndex, index: d.index });
      if (f !== null) return { partial: null, outcome: v(f) };
      return d.list[d.index] = i, { partial: y(a, r), outcome: "applied" };
    }
    let [p] = d.list.splice(d.index, 1);
    if (d.list.length === 0) k.splice(d.groupIndex, 1);
    if (o.op === "remove") return { partial: y(a, r), outcome: "applied" };
    i = R(p, o.hook);
  }
  let c = n(o.event);
  if (c === null) return { partial: null, outcome: "not-a-list" };
  let u = O(c, o.matcher, i);
  if (u !== null) return { partial: null, outcome: v(u) };
  let l = c.find((s) => m(s) === o.matcher);
  if (l) l.hooks.push(i);
  else {
    let s = { ...o.matcher !== "" && { matcher: o.matcher }, hooks: [i] };
    c.push(s);
  }
  return { partial: y(a, r), outcome: "applied" };
}
function y(e, o) {
  let t = {};
  for (let [n, i] of o) t[n] = i.length > 0 ? i : void 0;
  return Object.keys(e).filter((n) => !(n in t) || t[n] !== void 0).length > 0 || Object.values(t).some((n) => n !== void 0) ? { hooks: t } : { hooks: void 0 };
}
async function Q(e, o) {
  let t = (s, k, d) => ({ ok: false, error: k, code: s, ...d !== void 0 && { refusal: d } }), a = I();
  if (a !== null) return t("policy_locked", a);
  if (!h(e)) return t("bad_request", "edit_hook: the edit must be a JSON object");
  let r = F(e);
  if (!r.ok) return t("bad_request", Zt(r.error));
  let n = r.value, i = L(n.source);
  if (i !== null) return t("source_disabled", i);
  let c = kI(n.source), u = ln(n.source);
  if (c === null && u !== void 0 && kS(u).errors.some((s) => s.severity !== "warning")) return t("file_unloadable", `edit_hook: the ${n.source} file has errors and could not be loaded; fix it by hand first`, u === void 0 ? void 0 : { code: "unloadable", file: u });
  if (n.target !== void 0) {
    let s = C(c, n.target);
    if (n.source === "localSettings" && C(fe(n.source), n.target) > s) {
      let d = $h();
      return t("legacy_file", "edit_hook: that hook is defined in the launch directory’s own .claude/settings.local.json, which this dialog cannot edit; edit that file directly", d === void 0 ? void 0 : { code: "legacy", file: d });
    }
    if (s === 0) return t("target_missing", `edit_hook: that hook is no longer in ${n.source}; it may have been changed outside this dialog`);
    if (s > 1) return t("target_ambiguous", `edit_hook: more than one identical hook is configured for ${n.event} in ${n.source}; edit the file by hand`, u === void 0 ? void 0 : { code: "twins", file: u });
  }
  let l = await J(n, o);
  if (await GKe(), l.error) return t("write_failed", `edit_hook: the settings write failed: ${Zt(l.error.message)}`);
  switch (l.outcome) {
    case "applied":
      break;
    case "duplicate":
      return t("duplicate", `edit_hook: an identical hook is already configured for ${n.event} in ${n.source}`);
    case "twin-by-headers":
      return t("twin_by_headers", `edit_hook: a hook that differs from this one only in header values is already configured for ${n.event} in ${n.source}; this dialog could not tell the two apart afterwards, so edit the file by hand to keep both`);
    case "not-a-list":
      return t("not_a_list", `edit_hook: the ${n.event} entry in ${n.source} is not a list; fix the file by hand`, u === void 0 ? void 0 : { code: "not-a-list", file: u });
    default:
      return t("target_missing", `edit_hook: that hook is no longer in ${n.source}; it may have been changed outside this dialog`);
  }
  return { ok: true };
}
export {
  Q as runHookEdit
};
