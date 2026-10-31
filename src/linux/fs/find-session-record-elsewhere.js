// linux/fs/find-session-record-elsewhere.js — Claude Code 2.1.310（linux）模块 chunk-st5cr80h.js
import "../shared/chunk-3b9c376b.js";
import "./async-hooks.93b1.js";
import { ke } from "../context/not-admin-owned.js";
import "./chunk-86a4e44e.js";
import "../agents/third-party.js";
import { d, E, G } from "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import { Rc, lcr } from "./node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import { Yl } from "../artifacts/chunk-a6c9d164.js";
import { t } from "./gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "./backed-up.js";
import "../shared/chunk-d2c47492.js";
import { hr } from "../git/utf-8.js";
import "../telemetry/chunk-9097a12b.js";
import "../telemetry/chunk-9d6962d2.js";
import "../shared/async-hooks.5238.js";
import "../shared/async-hooks.9e79.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../artifacts/cowritten-artifact-html.js";
import "./chunk-ce5d00cd.js";
import "../shared/chunk-de56f88d.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../shared/chunk-8eee6836.js";
import "../git/utf8-keep-bom.js";
import "../shell/chunk-fea9c492.js";
import "../git/chunk-c16cb6b4.js";
import "../shared/chunk-4563156b.js";
import "../shared/chunk-d4196a83.js";
import "../shell/chunk-8eebd6c6.js";
import { im } from "../context/utf-8.js";
import "./utf-8.8f8e.js";
import "./tempdir-owner-mismatch.js";
import "./utf-8.aa9a.js";
import "./async-hooks.7959.js";
import "../plugins/chunk-0a4c51cf.js";
import "../settings/global-config-and-gates.js";
import "./chunk-86be9585.js";
import "../shared/chunk-2fe3b2b7.js";
import "../remote/local-agent.js";
import "../mcp/toolbox-mcp-server-id.js";
import "../mcp/claude-browser.js";
import "../cli/chunk-af2447be.js";
import "../remote/self-hosted.js";
import "../context/fetch-project-timeline.js";
import "../shared/chunk-1b1c4439.js";
import "../shell/invalid-type.js";
import "../settings/workflow-launch-exec.js";
import "./chunk-475c6783.js";
import "../permissions/classifier-transcript-too-long.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../terminal/chunk-3ca478a4.js";
import "../mcp/chunk-0e2a1db6.js";
import "../mcp/always-allow.js";
import "../plugins/skills-dir.js";
import "./chunk-9b7a3f1c.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../remote/moved-directory.js";
import "../mcp/init-function-end.js";
import "../models/total-tokens-reminder.js";
import "../shell/spawn-error.js";
import "../terminal/xterm-ghostty.js";
import "../mcp/allowed-warning.js";
import "./content-encoding.js";
import "../auth/descriptor-direct.js";
import "./ca-certs-load.js";
import "../shared/chunk-f98598c3.js";
import "../auth/permission-error.js";
import "../auth/claude-code-user.js";
import "../shell/find-generic-password.js";
import "../auth/profile-explicit.js";
import "../shared/async-hooks.b037.js";
import "./chunk-b6c2193e.js";
import "./chunk-21654dda.js";
import "../shared/chunk-3a99f127.js";
import "../auth/auth-launcher-host-login.js";
import "../permissions/turn-abort.js";
import "../settings/ax-sr-suggestion-nav.js";
import "./reply-across-default-dirs.js";
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
import "../shared/chunk-de64395b.js";
import "../telemetry/flag-off.js";
import { Xbs, Jbs, Wdo, Wbr } from "./empty-id.js";
import { eat } from "../remote/remote-attach-record-lookup.js";
import { PA } from "./chunk-50d26643.js";
import "../shared/chunk-cb8096b1.js";
import "../shared/chunk-d1292a44.js";
import "../shared/chunk-6ae01e90.js";
import "../models/claude-mythos-preview.js";
import "../shared/sk-ant-sid.js";
import "../vendor/aws-sdk/chunk-d15f3977.js";
import "../shared/chunk-cc3baac1.js";
import "../shared/chunk-1f805b50.js";
import "./not-utf8.js";
import "../context/tool-result.js";
import "../shared/chunk-8bf008d9.js";
import "../shared/chunk-6da6c5a3.js";
import "../shared/chunk-86ecf3aa.js";
import { vt } from "../telemetry/chunk-a27d4004.js";
import { z } from "../shared/chunk-be29de51.js";
import "../remote/chunk-95151620.js";
import { lstat as j, readdir as P, realpath as C } from "fs/promises";
import { dirname as K, join as _, resolve as B } from "path";
var T = 4e3, R = 16, b = { kind: "elsewhere" }, g = { kind: "nowhere" }, y = { kind: "nowhere", hasOwnSessionRecord: true };
async function v(n, r) {
  return j(n).then((o) => (r === "file" ? o.isFile() : o.isDirectory()) ? true : void 0, (o) => {
    let s = E(o);
    return s === "ENOENT" || s === "ENOTDIR" ? false : void 0;
  });
}
function N(n) {
  return v(n, "file");
}
async function O(n) {
  let r = await v(K(n), "dir");
  return r === true ? N(n) : r;
}
async function ee(n, r, o = T) {
  if (!eat()) return { kind: "unknown", why: "not_looked" };
  let s = Yl(n), c = ke(), l = hr(c) ?? B(c);
  if (Rc(l) || lcr() || Rc(await C(l).catch(() => l))) return { kind: "unknown", why: "path_misread" };
  if (z() && r !== void 0) return M(r, l, s, o);
  let h = await Xbs(l, s, r), u = im(), k = Wbr(s);
  try {
    let e = await O(h);
    if (e !== false) return e ? y : { kind: "unknown", why: "here_unreadable" };
    let i = await P(u, { withFileTypes: true }), f = await Promise.all(i.map((a) => PA(a, _(u, a.name), "unknown"))), p = i.filter((a, m) => f[m] === "dir"), w = p.slice(0, o), S = f.some((a) => a === "symlink" || a === "unknown");
    for (let a = 0; a < w.length; a += R) {
      let m = await Promise.all(w.slice(a, a + R).map((F) => N(_(u, F.name, k))));
      if (m.includes(true)) return b;
      S ||= m.includes(void 0);
    }
    return S ? { kind: "unknown", why: "probe_failed" } : p.length > w.length ? { kind: "unknown", why: "listing_capped" } : g;
  } catch (e) {
    if (G(e)) return g;
    return t(`[sessionRecord] could not tell whether another project folder holds this session's record: ${d(e)}`, { level: "warn" }), { kind: "unknown", why: "listing_failed" };
  }
}
async function M(n, r, o, s) {
  try {
    return await D(n, r, o, s);
  } catch (c) {
    return t(`[sessionRecord] could not tell whether another project folder holds this session's record: ${d(c)}`, { level: "warn" }), { kind: "unknown", why: "listing_failed" };
  }
}
async function D(n, r, o, s) {
  let c = await Jbs(r, o, n);
  if (c.v5 === void 0) {
    let e = await O(c.path);
    if (e !== false) return e ? y : { kind: "unknown", why: "here_unreadable" };
  } else {
    let e = await n.scopeKind({ namespace: "transcript", projectKey: c.projectKey });
    if (!e.ok || e.value.kind === "link" || e.value.kind === "other") return { kind: "unknown", why: "here_unreadable" };
    if (e.value.kind === "directory") {
      let i = await n.statMeta(c.v5.key);
      if (i.ok) return y;
      if (i.error.code !== "NotFound") return { kind: "unknown", why: "here_unreadable" };
    }
  }
  let l = [], h;
  do {
    let e = await n.listEntries({ namespace: "transcript" }, { cursor: h, skipScopeStats: true, skipKeyStats: true });
    if (!e.ok) return t(`[sessionRecord] could not tell whether another project folder holds this session's record: ${vt(e.error)}`, { level: "warn" }), { kind: "unknown", why: "listing_failed" };
    for (let i of e.value.items) if (i.kind === "scope" && i.scope.namespace === "transcript") {
      let f = i.scope.projectKey;
      if (f !== void 0) l.push(f);
    }
    h = e.value.cursor;
  } while (h !== void 0 && l.length < s);
  let u = l.slice(0, s), k = false;
  for (let e = 0; e < u.length; e += R) {
    let i = await Promise.all(u.slice(e, e + R).map(async (f) => {
      let p = Wdo(f, o);
      if (p === void 0) return;
      let w = await n.statMeta(p);
      return w.ok ? true : w.error.code === "NotFound" ? false : void 0;
    }));
    if (i.includes(true)) return b;
    k ||= i.includes(void 0);
  }
  return k ? { kind: "unknown", why: "probe_failed" } : h !== void 0 || l.length > u.length ? { kind: "unknown", why: "listing_capped" } : g;
}
export {
  ee as findSessionRecordElsewhere
};
