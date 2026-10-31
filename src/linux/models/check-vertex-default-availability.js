// linux/models/check-vertex-default-availability.js — Claude Code 2.1.310（linux）模块 chunk-y963mck0.js
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import { c, Vr } from "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { LCt, VSe } from "./claude-3-5-sonnet.js";
import "../shared/chunk-0870a9b4.js";
import { i } from "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-de56f88d.js";
import { aM, rNe, KKt, hRe, yRe } from "../mcp/allowed-warning.js";
import "../shared/chunk-f98598c3.js";
import "../shared/chunk-2fe3b2b7.js";
import { $o, Ae } from "./total-tokens-reminder.js";
import "../fs/content-encoding.js";
import "../remote/local-agent.js";
import "../remote/moved-directory.js";
import "../telemetry/chunk-9d6962d2.js";
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
import { pt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
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
import { Bp, wt, p_n, B7, Cz, qtr, sI, y_n, w_n, Sm, pd, mEt, Q2t } from "../settings/global-config-and-gates.js";
import "../terminal/xterm-ghostty.js";
import "../auth/permission-error.js";
import "../auth/claude-code-user.js";
import "../shell/find-generic-password.js";
import { tce } from "../api/anthropic-client.js";
import "../shared/async-hooks.b037.js";
import "../shared/chunk-3a99f127.js";
import "../auth/auth-launcher-host-login.js";
import "../permissions/turn-abort.js";
import "../settings/ax-sr-suggestion-nav.js";
import "../telemetry/chunk-b109a1d6.js";
import "../telemetry/chunk-addb1ac7.js";
import "../agents/chunk-44729602.js";
import "../git/get-url.js";
import "../shared/chunk-46ffe22f.js";
import "../artifacts/cobalt-plinth-lovage.js";
import "../computer-use/chunk-217335d0.js";
import "../workflows/chunk-a1595c7e.js";
import "../auth/claude-desktop-3p.js";
import "../settings/attribution-project.js";
import { Kve, Out, Mut, jBe, WBe, Q$n, Z$n } from "../context/service-account-impersonation-url.js";
import { Jln, Qln, Zln, edn, tdn, i8, AGe, CGe, ndn, syt } from "../context/team-memory-sync.js";
import "../shared/chunk-9e8feed3.js";
import "../shared/chunk-cb8096b1.js";
import "../shared/chunk-d1292a44.js";
import "../shared/chunk-6ae01e90.js";
import "./claude-mythos-preview.js";
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
function T() {
  return Qln(y_n);
}
async function ee() {
  if (Ae() !== "vertex") return [];
  if (i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let e = Zln(T());
  if (e.length === 0) return [];
  a("tengu_vertex_upgrade_check", { stale_tiers: Vr(e.length) });
  let d = (await Promise.all(e.map(async (n) => {
    let u = $o[n.defaultKey].vertex;
    if (u === null) return null;
    if (i8(u)) return t(`[vertex-upgrade] ${AGe(n.tier, "upgrade", [u])}`), null;
    let g = await M(u, { isDefault: true, versionTooOld: "unavailable" });
    if (a("tengu_vertex_probe_result", { tier: c(n.tier), model_id: wt(u), accessible: g }), !g) return null;
    let v = Sm($o[n.pinnedKey].firstParty), o = Sm($o[n.defaultKey].firstParty);
    if (!v || !o) return null;
    return { tier: n.tier, envVar: n.envVar, fromKey: n.pinnedKey, fromMarketingName: v, toKey: n.defaultKey, toMarketingName: o, toVertexId: u };
  }))).filter((n) => n !== null);
  return t(`[vertex-upgrade] tiersWithPin=${e.length} candidates=${d.length}`), d;
}
function te(e) {
  return edn(e, T());
}
async function re() {
  if (Ae() !== "vertex") return [];
  if (i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let e = Jln(Date.now()), s = pt().modelOverrides, d = T(), n = tdn(d, s);
  if (n.length === 0) return [];
  a("tengu_vertex_default_check", { unpinned_tiers: Vr(n.length) });
  let u = n.some((o) => o.tier === "sonnet"), g = await Promise.all(n.map(async (o) => {
    let _ = $o[o.defaultKey], m = d[o.tier].documentTarget, V = d[o.tier].fromDocument === true, y = m?.modelId ?? _.vertex;
    if (y !== null && i8(y)) return t(`[vertex-fallback] ${AGe(o.tier, "check", [y])}`), null;
    await K(o, s, m, V, u);
    let p = {}, b = await M(y, { isDefault: true, ...d[o.tier].fromDocument && { versionTooOld: "unavailable" }, onVerdict: (f, D) => {
      p.verdict = f, p.at = D;
    } });
    if (a("tengu_vertex_probe_result", { tier: c(o.tier), model_id: wt(y), accessible: b }), b || p.verdict === "temporary") return null;
    if (y !== null && p.verdict === "refused") Cz(y, B7(y), (p.at ?? Date.now()) + Kve);
    let r = await O(o.defaultKey, o.tier, s, e, m !== void 0, V);
    if (!r) return null;
    if (p.verdict !== "refused" && r.answeredLive !== true && r.adminMapped !== true && !await M(r.vertexId, { live: true })) return null;
    let l = m?.name ?? Sm(_.firstParty), x = Sm($o[r.key].firstParty);
    if (!l || !x) return null;
    return { tier: o.tier, envVar: o.envVar, defaultKey: o.defaultKey, defaultName: l, ...m !== void 0 && { documentTargetId: m.modelId }, fallbackKey: r.key, fallbackName: x, fallbackVertexId: r.vertexId, ...r.crossTier && { crossTier: true } };
  })), v = [];
  for (let o of g) if (o !== null) v.push(o);
  return t(`[vertex-fallback] unpinnedTiers=${n.length} fallbacks=${v.length}`), v;
}
async function O(e, s, d, n, u = false, g = false) {
  let v = (f) => Boolean(d?.[$o[f].firstParty]), o = (f) => v(f) && !i8(String(Bp()[f])), _ = CGe(e, s, u), m = g ? _.find(o) : void 0, V = (m === void 0 ? _ : _.slice(0, _.indexOf(m))).filter((f) => !v(f)), y = V.filter((f) => !P(f)), p = s === "opus" && m === void 0, b = p && !P(sI) ? [sI] : [], r = V.filter(P).map((f) => String($o[f].vertex));
  if (p && P(sI)) r.push(`${$o[sI].vertex} (the cross-tier Sonnet default)`);
  if (r.length > 0) t(`[vertex-fallback] ${AGe(s, "fallback", r)}`);
  let l = /* @__PURE__ */ new Set(), x = await Z$n([y, b], (f, D) => {
    let A = $o[f].vertex;
    return M(A, { ...D && { live: D }, ...u && f === e && { isDefault: true }, ...g && { versionTooOld: "unavailable" }, onVerdict: (k, h) => {
      if (k === "refused" && A !== null) Cz(A, B7(A), (h ?? Date.now()) + Kve);
      else if (k === "accessible" && A !== null) {
        if (qtr(A), h === void 0) l.add(f);
      }
    } });
  }, async (f) => {
    let D = $o[f].vertex;
    if (D === null) return false;
    let A = await E(D);
    return A !== void 0 && (await jBe(A, D))?.state === "refused";
  }, n);
  if (x === void 0) return m === void 0 ? null : { key: m, vertexId: String(Bp()[m]), adminMapped: true };
  return { key: x, vertexId: $o[x].vertex, ...b.includes(x) && { crossTier: true }, ...l.has(x) && { answeredLive: true } };
}
async function ne() {
  if (Ae() !== "vertex" || i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST || !w_n()) return [];
  let e = await ndn(async (s, d) => {
    let n = {}, u = await M(s, { isDefault: true, versionTooOld: "unavailable", onVerdict: (g) => {
      n.verdict = g;
    } });
    return a("tengu_vertex_probe_result", { tier: c(d ?? "default"), model_id: wt(s), accessible: u }), u || n.verdict === "temporary";
  }, pt().modelOverrides);
  return t(`[vertex-fallback] refutedDocumentDefaults=${e.length}`), e;
}
async function M(e, s) {
  if (e === null) return s?.onVerdict?.("refused"), false;
  return await Q$n("vertex", await E(e), e, () => R(e), s) === "accessible";
}
async function ie(e, s) {
  try {
    let d = await E(e);
    if (d !== void 0) await WBe(d, e, s);
  } catch (d) {
    t(`[3p-model-memory] vertex record failed: ${d}`);
  }
}
async function K(e, s, d, n, u) {
  let g = (r) => {
    let l = $o[r];
    return l.vertex === null ? void 0 : { id: l.vertex, name: Sm(l.firstParty) ?? l.firstParty };
  }, v = d === void 0 ? g(e.defaultKey) : { id: d.modelId, name: d.name };
  if (v === void 0) return;
  let o = (r) => Boolean(s?.[$o[r].firstParty]), _ = (r) => o(r) && !i8(String(Bp()[r])), m = (r) => r.filter((l) => !P(l)).flatMap((l) => g(l) ?? []), V = (r, l) => m(CGe(r, l).filter((x) => !o(x))), y = CGe(e.defaultKey, e.tier, d !== void 0), p = n ? y.find(_) : void 0, b = [v, ...m((p === void 0 ? y : y.slice(0, y.indexOf(p))).filter((r) => !o(r)))];
  if (p !== void 0) b.push({ id: String(Bp()[p]), name: Sm($o[p].firstParty) ?? $o[p].firstParty });
  else if (e.tier === "opus") {
    let r = g(sI), l = r === void 0 ? [] : !P(sI) ? [r] : u ? V(sI, "sonnet") : [];
    b.push(...l.map((x) => ({ ...x, crossTier: true })));
  }
  p_n("vertex", e.tier, e.envVar, b), await Promise.all(b.slice(1).map(async (r) => {
    let l = await E(r.id), x = l === void 0 ? void 0 : await jBe(l, r.id);
    if (x?.state === "refused") Cz(r.id, B7(r.id), x.at + Kve);
  })).catch(() => {
  });
}
function E(e) {
  return Mut("vertex", () => [i.ANTHROPIC_VERTEX_PROJECT_ID, mEt(), i.ANTHROPIC_GOOGLE_CLOUD_PROJECT, VSe(e), i.ANTHROPIC_VERTEX_BASE_URL, i.GOOGLE_APPLICATION_CREDENTIALS, i.CLOUDSDK_CONFIG, i.CLAUDE_CODE_SKIP_VERTEX_AUTH ? "skip-auth" : void 0, Out()]);
}
async function R(e) {
  try {
    let [{ AnthropicVertex: s }, { getProxyFetchOptions: d }] = await Promise.all([import("../vendor/google-auth/anthropic-vertex.js"), import("../auth/clear-proxy-auth-helper-cache.js")]), n = i.CLAUDE_CODE_SKIP_VERTEX_AUTH, u = pd();
    if (!n && !u) await Q2t();
    let g = await KKt(n ? { kind: "skip" } : { kind: "default" }, mEt()), v = VSe(e), o = n ? rNe() : void 0;
    return await hRe(new s({ region: v, googleAuth: g, maxRetries: 0, defaultHeaders: { ...tce(), ...yRe(n ? { wireAuthorization: o } : false) }, ...aM, timeout: 8e3, fetchOptions: d({ url: i.ANTHROPIC_VERTEX_BASE_URL || LCt(v) }) })).messages.create(syt(e)), { accessible: true };
  } catch (s) {
    if (s?.status === 429) return { accessible: true };
    return { accessible: false, error: s };
  }
}
function P(e) {
  let s = $o[e].vertex;
  return s !== null && i8(s);
}
export {
  re as checkVertexDefaultAvailability,
  ne as checkVertexDocumentDefaults,
  ee as findVertexUpgradeCandidates,
  M as probeVertexModel,
  ie as rememberVertexModelAccess,
  te as seedEnvDefaultForUserPin
};
