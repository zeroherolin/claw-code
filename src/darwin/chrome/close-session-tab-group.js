// darwin/chrome/close-session-tab-group.js — Claude Code 2.1.310（darwin）模块 chunk-3fvcp6hm.js
import "../computer-use/ref-1.js";
import { pen } from "../permissions/not-signed-in.js";
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import { U, Cu } from "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import { Nt } from "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../telemetry/chunk-9097a12b.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { _t, ee, t } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { Tn } from "../mcp/allowed-warning.js";
import "../shared/chunk-0870a9b4.js";
import { i } from "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-59ffb646.js";
import { k } from "../settings/global-config-and-gates.js";
import "../git/utf-8.js";
import "../artifacts/chunk-a6c9d164.js";
import "../shared/async-hooks.5238.js";
import "../shared/async-hooks.9e79.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../shared/chunk-8eee6836.js";
import "../git/utf8-keep-bom.js";
import "../shell/chunk-fea9c492.js";
import "../git/chunk-c16cb6b4.js";
import "../shared/chunk-4563156b.js";
import "../shared/chunk-d4196a83.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.8f8e.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/utf-8.aa9a.js";
import "../fs/async-hooks.7959.js";
import "../plugins/chunk-0a4c51cf.js";
import "../fs/chunk-86be9585.js";
import "../remote/local-agent.js";
import "../mcp/toolbox-mcp-server-id.js";
import "../mcp/claude-browser.js";
import "../cli/chunk-af2447be.js";
import "../remote/self-hosted.js";
import "../context/fetch-project-timeline.js";
import "../shared/chunk-1b1c4439.js";
import "../shell/invalid-type.js";
import "../settings/workflow-launch-exec.js";
import "../fs/chunk-475c6783.js";
import "../permissions/classifier-transcript-too-long.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../terminal/chunk-3ca478a4.js";
import "../mcp/chunk-0e2a1db6.js";
import "../mcp/always-allow.js";
import "../plugins/skills-dir.js";
import "../fs/chunk-9b7a3f1c.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../remote/moved-directory.js";
import "../mcp/init-function-end.js";
import "../models/total-tokens-reminder.js";
import "../shell/spawn-error.js";
import "../terminal/xterm-ghostty.js";
import "../fs/content-encoding.js";
import "../auth/descriptor-direct.js";
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
import "../settings/ax-sr-suggestion-nav.js";
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
import { zi } from "../remote/chunk-7e620e0d.js";
import "../shared/chunk-cb8096b1.js";
import "../shared/chunk-d1292a44.js";
import "../shared/chunk-6ae01e90.js";
import "../models/claude-mythos-preview.js";
import { o, E, RM, sm, C, u, T } from "../vendor/zod/string-format.js";
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
var z = 50, x = 1500, P = 5e3, w = /* @__PURE__ */ new Set(["chrome://newtab/", "about:blank"]), M = f(() => u({ error: RM().or(sm()).or(T(false)).or(T("")).optional(), result: u({ isError: T(true).optional() }) }));
function A(e) {
  let s = M().safeParse(e);
  return s.success && s.data.result.isError !== true;
}
var F = f(() => u({ availableTabs: C(u({ tabId: E(), url: o() })) }));
function I({ sessionId: e, onlyIfEmpty: s, clientOverride: c, callTimeoutMs: b = P }) {
  if (i.CLAUDE_CODE_REMOTE_SESSION_ID || !k("tengu_chrome_tab_group_close", true)) return Promise.resolve({ status: "disabled" });
  let n = zi().closesInFlight, d = n.get(e);
  if (d && (s || !d.onlyIfEmpty)) return d.promise;
  let r = (d?.promise ?? Promise.resolve()).then(() => R({ sessionId: e, onlyIfEmpty: s, clientOverride: c, callTimeoutMs: b })).finally(() => {
    if (n.get(e)?.promise === r) n.delete(e);
  });
  return n.set(e, { onlyIfEmpty: s, promise: r }), r;
}
async function R({ sessionId: e, onlyIfEmpty: s, clientOverride: c, callTimeoutMs: b }) {
  let n = c ?? zi().bridgeBinding?.socketClient;
  if (!n || !n.isConnected()) return t("[closeSessionTabGroup] bridge not connected, skipping"), { status: "not_connected" };
  let d = { permissionMode: "ask", sessionScope: { sessionId: e } }, r, _;
  try {
    let a = await Nt(n.callTool("tabs_context_mcp", { createIfEmpty: false }, d), b, "tabs_context_mcp timed out"), { tabGroupId: h, json: O } = pen(a);
    if (h === void 0 || O === void 0) return t("[closeSessionTabGroup] no group for session"), { status: "no_group" };
    _ = h;
    let G = F().safeParse(ee(O));
    if (!G.success) return t(`[closeSessionTabGroup] group ${_}: unreadable tab list, keeping it`), p("chrome_tab_group_close", "tabs_unreadable"), { status: "kept", tabs: 0 };
    r = G.data.availableTabs;
  } catch (a) {
    return t(`[closeSessionTabGroup] tabs_context_mcp failed: ${String(a)}`), m("chrome_tab_group_close", "context_failed"), { status: "no_group" };
  }
  if (s && r.some((a) => !w.has(a.url))) return t(`[closeSessionTabGroup] group ${_} has content, keeping ${r.length} tabs`), { status: "kept", tabs: r.length };
  if (r.length > z) return t(`[closeSessionTabGroup] group ${_} holds ${r.length} tabs, over the close cap; keeping it`), p("chrome_tab_group_close", "over_cap"), { status: "kept", tabs: r.length };
  let v = { permissionMode: "ask", sessionScope: { sessionId: e, tabGroupId: _ } }, y = 0, S = 0;
  for (let a = r.length - 1; a >= 0; a--) {
    let { tabId: h } = r[a];
    try {
      let O = await Nt(n.callTool("tabs_close_mcp", { tabId: h }, v), b, "tabs_close_mcp timed out");
      if (!A(O)) {
        S++;
        break;
      }
      y++;
    } catch {
      S++;
      break;
    }
  }
  if (t(`[closeSessionTabGroup] group ${_}: closed ${y}/${r.length} tabs` + (S > 0 ? ", stopped at a failed close" : "")), S > 0) p("chrome_tab_group_close", "close_failed");
  else g("chrome_tab_group_close");
  return { status: "closed", closed: y, failed: S };
}
function Z() {
  let e = zi();
  if (e.tabGroupCleanupRegistered) return;
  e.tabGroupCleanupRegistered = true;
  let s = U().id;
  e.unsubscribeSessionSwitch = Cu((c, b) => {
    if (c === s) return;
    let n = s;
    s = c, I({ sessionId: n, onlyIfEmpty: true }).catch(l);
  }), e.unregisterExitCleanup = _t(() => {
    if (!Tn()) return;
    let c = Array.from(e.closesInFlight.values(), (b) => b.promise);
    return Nt(Promise.allSettled([...c, I({ sessionId: U().id, onlyIfEmpty: true })]), x, "chrome tab group close timed out at exit").catch(() => {
    });
  });
}
export {
  I as closeSessionTabGroup,
  Z as registerChromeTabGroupCleanup
};
