// darwin/telemetry/check-mantle-default-availability.js — Claude Code 2.1.310（darwin）模块 chunk-h37mv51y.js
import { __asset_src } from "../../runtime/assets.js";
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import { S, c } from "../agents/third-party.js";
import "./anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import { a } from "./chunk-9097a12b.js";
import "../models/claude-3-5-sonnet.js";
import "../shared/chunk-0870a9b4.js";
import { i } from "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-59ffb646.js";
import { gI, jx, Vb, o1, fM, dNe } from "../mcp/allowed-warning.js";
import "../shared/chunk-f98598c3.js";
import "../shared/chunk-2fe3b2b7.js";
import { Fo, Te } from "../models/total-tokens-reminder.js";
import "../fs/content-encoding.js";
import "../remote/local-agent.js";
import "../remote/moved-directory.js";
import "./chunk-9d6962d2.js";
import "../shared/async-hooks.5238.js";
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
import "../plugins/chunk-0a4c51cf.js";
import "../shared/chunk-dda594a8.js";
import "../agents/session-stable-address.js";
import "../agents/in-process-teammate.32be.js";
import "../cli/chunk-af2447be.js";
import "../mcp/toolbox-mcp-server-id.js";
import "../context/fetch-project-timeline.js";
import "../mcp/claude-browser.js";
import "../shared/chunk-1b1c4439.js";
import "../auth/profile-explicit.js";
import { mt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../shared/chunk-537f65d6.js";
import "../git/utf-8.js";
import "../shared/async-hooks.9e79.js";
import "../shared/chunk-8eee6836.js";
import "../git/utf8-keep-bom.js";
import "../git/chunk-c16cb6b4.js";
import "../shared/chunk-4563156b.js";
import "../shared/chunk-d4196a83.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/async-hooks.7959.js";
import "../shell/invalid-type.js";
import "../fs/chunk-475c6783.js";
import "../permissions/classifier-transcript-too-long.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../terminal/chunk-3ca478a4.js";
import "../mcp/chunk-0e2a1db6.js";
import "../mcp/always-allow.js";
import "../plugins/skills-dir.js";
import "../fs/chunk-86be9585.js";
import "../settings/workflow-launch-exec.js";
import "../fs/chunk-9b7a3f1c.js";
import "../mcp/init-function-end.js";
import "../shell/spawn-error.js";
import "../git/ssh-placeholder.js";
import "../fs/reply-across-default-dirs.js";
import "../fs/chunk-b6c2193e.js";
import "../fs/chunk-21654dda.js";
import { GV, l_, avt, bm, rT, fd, Tue, HY, nZ } from "../settings/global-config-and-gates.js";
import "../terminal/xterm-ghostty.js";
import "../auth/permission-error.js";
import "../auth/claude-code-user.js";
import "../shell/find-generic-password.js";
import { dce } from "../api/anthropic-client.js";
import "../shared/async-hooks.b037.js";
import "../shared/chunk-3a99f127.js";
import "../auth/auth-launcher-host-login.js";
import "../permissions/turn-abort.js";
import "../settings/ax-sr-suggestion-nav.js";
import "./chunk-b109a1d6.js";
import "./chunk-addb1ac7.js";
import "../agents/chunk-44729602.js";
import "../git/get-url.js";
import "../shared/chunk-46ffe22f.js";
import "../artifacts/cobalt-plinth-lovage.js";
import "../computer-use/chunk-217335d0.js";
import "../workflows/chunk-a1595c7e.js";
import "../auth/claude-desktop-3p.js";
import "../settings/attribution-project.js";
import { Out, Mut, q1e, Y1e } from "../context/service-account-impersonation-url.js";
import { X$t, Xht } from "../context/team-memory-sync.js";
import { lvr } from "./bedrock-probe-result.js";
import "../shared/chunk-9e8feed3.js";
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
var b = Object.keys(Fo).filter((e) => Fo[e].mantle !== null);
async function z(e = avt, n) {
  if (Te() !== "mantle") return [];
  if (i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let o = mt().modelOverrides;
  if (o?.[Fo[e].firstParty]) return [];
  let u = n?.userPinned ?? l_() != null, m = i.ANTHROPIC_DEFAULT_OPUS_MODEL, s;
  if (m !== void 0 && !GV("opus")) {
    if (u) return [];
    let r = await y(rT(m));
    if (a("tengu_mantle_probe_result", { model_key: S("admin_pin"), accessible: S(r === "refuted" ? "false" : r === "accessible" || r === "outdated" ? "true" : "unknown") }), r !== "refuted") return [{ kind: "adminPin", tier: "opus", adminMantleId: m }];
    s = m;
  }
  let d = Fo[e].mantle;
  if (!d) return [];
  a("tengu_mantle_default_check", {});
  let p = await h(d);
  if (a("tengu_mantle_probe_result", { model_key: c(e), accessible: S(p ? "true" : "false") }), p) {
    if (s !== void 0) return [{ kind: "pinRefuted", tier: "opus", refutedValue: s, workingKey: e, workingName: bm(Fo[e].firstParty) ?? d, workingMantleId: d, defaultKey: e }];
    return [];
  }
  let l = bm(Fo[e].firstParty) ?? d, A = b.indexOf(e), g = b.slice(0, A).reverse().filter((r) => r.startsWith("opus") && !o?.[Fo[r].firstParty]), f = await Promise.all(g.map(async (r) => {
    let _ = Fo[r].mantle, M = await h(_);
    a("tengu_mantle_probe_result", { model_key: c(r), accessible: S(M ? "true" : "false") });
    let w = bm(Fo[r].firstParty) ?? _;
    return { key: r, mantleId: _, name: w, ok: M };
  }));
  for (let r of f) if (r.ok) {
    if (t(`[mantle-fallback] default=${e} fallback=${r.key}`), s !== void 0) return [{ kind: "pinRefuted", tier: "opus", refutedValue: s, workingKey: r.key, workingName: r.name, workingMantleId: r.mantleId, defaultKey: e }];
    return [{ kind: "fallback", tier: "opus", envVar: "ANTHROPIC_DEFAULT_OPUS_MODEL", defaultKey: e, defaultName: l, fallbackKey: r.key, fallbackName: r.name, fallbackMantleId: r.mantleId }];
  }
  let k = [...s !== void 0 ? [`the admin-configured model (${s})`] : [], l, ...f.map((r) => r.name)];
  return t(`[mantle-fallback] default=${e} exhausted — no working Opus`), [{ kind: "exhausted", tier: "opus", defaultName: l, triedNames: k }];
}
async function y(e) {
  let n = await Mut("mantle", async () => [await gI(), i.ANTHROPIC_BEDROCK_MANTLE_BASE_URL, i.CLAUDE_CODE_SKIP_MANTLE_AUTH ? "skip-auth" : void 0, ...lvr(), Out()]);
  if (n !== void 0 && (await q1e(n, e))?.state === "ok") return t(`[mantle-probe] ${e}: accessible (remembered)`), "accessible";
  let o = await P(e);
  if (o === "accessible" && n !== void 0) Y1e(n, e, "ok");
  return o;
}
async function P(e) {
  try {
    return await E(e), "accessible";
  } catch (n) {
    let o = n?.status;
    if (o === 429) return "accessible";
    let u = X$t("mantle", n);
    if (u === "outdated") return t(`[mantle-probe] ${e}: needs a newer Claude Code than ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION}; keeping it, so the first request shows the update message`), "outdated";
    if (o === 400 || o === 403 || o === 404) return u === "credential" ? "unknown" : "refuted";
    return "unknown";
  }
}
async function h(e) {
  let n = await y(e);
  return n === "accessible" || n === "outdated";
}
async function E(e) {
  let [{ AnthropicBedrockMantle: n }, { getProxyFetchOptions: o }] = await Promise.all([import("../vendor/aws-sdk/anthropic-bedrock.js"), import("../auth/clear-proxy-auth-helper-cache.js")]), u = await gI(), m = { awsRegion: u, maxRetries: 0, timeout: 8e3, fetchOptions: o({ url: i.ANTHROPIC_BEDROCK_MANTLE_BASE_URL || `https://bedrock-mantle.${u}.api.aws` }) }, s, d = dce(), p = i.AWS_BEARER_TOKEN_BEDROCK;
  if (p) s = new n({ ...m, apiKey: p, defaultHeaders: { ...d, ...Vb(), ...o1(), Authorization: `Bearer ${p}`, ...!jx() && { "X-Api-Key": null } } });
  else {
    let l = i.CLAUDE_CODE_SKIP_MANTLE_AUTH, A = fd(), g = { authToken: null, defaultHeaders: { ...d, ...Vb(), ...o1(), Authorization: null, ...!jx() && { "X-Api-Key": null } }, ...fM }, f = l ? dNe() : void 0, k = l || A ? null : await HY();
    s = k ? new n({ ...m, ...g, awsAccessKey: k.accessKeyId, awsSecretAccessKey: k.secretAccessKey, awsSessionToken: k.sessionToken }) : new n({ ...m, ...l && !f && { skipAuth: true, authToken: null, defaultHeaders: { ...d, ...o1() }, ...fM }, ...l && f && { apiKey: f.match(/^Bearer (.+)$/i)?.[1] ?? f, defaultHeaders: { ...d, ...o1(), Authorization: f } }, ...!l && g, ...!l && A && { providerChainResolver: Tue("Mantle").providerChainResolver }, ...!l && !A && { providerChainResolver: nZ(u) } });
  }
  await s.messages.create(Xht(e));
}
export {
  z as checkMantleDefaultAvailability
};
