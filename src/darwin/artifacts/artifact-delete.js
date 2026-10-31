// darwin/artifacts/artifact-delete.js — Claude Code 2.1.310（darwin）模块 chunk-ysg55nmq.js
import { S } from "../agents/third-party.js";
import { Ye } from "../telemetry/anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { Oh } from "../telemetry/service-error-detail-not-plain.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { Fa } from "../fs/content-encoding.js";
import { l } from "./cowritten-artifact-html.js";
import { i } from "../shared/environment.js";
import { MKe, ll } from "./cobalt-plinth-lovage.js";
import { nr } from "../remote/moved-directory.js";
import { hhn, Z } from "./same-account.js";
import { v6, R7, E0, R9, JR, cu } from "./cobalt-plinth-comfrey.js";
import { Hy } from "../mcp/cobalt-plinth-sedge.js";
import { Uce } from "./artifact-share-status.js";
import { dpt } from "./str-replace.js";
import { iY } from "../settings/gable-onyx-sluice.js";
import { apo } from "./slate-lantern-hush.js";
import { $vs } from "../tasks/artifact-changed.js";
import { fIe, W0n } from "./artifact-durable-subscribe.js";
import { pB } from "../shared/chunk-eac3d901.js";
import { Xc } from "../shared/chunk-a5f59e6a.js";
function X_r() {
  return iY() ? `Deleting Artifacts isn't available in this cloud session right now, so nothing was deleted; do not retry here. If the Artifact is the user's own, ${dpt(true)}` : "Deleting Artifacts isn't available in this cloud session right now, so nothing was deleted; do not retry here. If the Artifact is the user's own, they can delete it themselves on claude.ai from the Artifact's own menu, or with `/artifacts` in Claude Code on their own machine (press d on the selected one).";
}
function Tlo() {
  return nr() && !E0();
}
var b = { ok: false, reason: "relay-unavailable", status: 0, route: "relay", fromFrame: false };
function h(t) {
  return `Couldn't confirm the delete (the cloud relay failed: ${t}) — it may have gone through; check with action "list" before telling the user or trying again.`;
}
var A = 65536, R = 1e3, w = 1e4;
function C(t) {
  return typeof t === "string" ? t.trim() : "";
}
function y(t, o, n) {
  return { source: t.source === "tool" ? S("tool") : S("dialog"), route: n === "relay" ? S("relay") : S("direct"), ...t.sessionMinted !== void 0 && { session_minted: t.sessionMinted }, ...t.ageSeconds !== void 0 && { age_s: t.ageSeconds }, ...t.sinceUpdateSeconds !== void 0 && { since_update_s: t.sinceUpdateSeconds }, ...o && { retried: true } };
}
async function B0n(t, o, n) {
  let c = () => Tlo() ? Promise.resolve(b) : cu.deleteRelayOnly(`/api/frame/${encodeURIComponent(t)}`, { refreshOAuth: true, headers: Xc(), timeout: 15e3, maxContentLength: A, signal: n.signal, credentials: o }), e, d = false;
  try {
    if (e = await c(), e.ok && e.fromFrame && (e.status === 409 || e.status === 429 || e.status === 503)) {
      let a = e.response.headers?.["retry-after"], s = Math.min(Oh(typeof a === "string" ? a : void 0) ?? R, w);
      await X(s, n.signal, { abortError: () => new Ye() }), d = true, e = await c();
    }
  } catch (a) {
    if (Fa(a) || a instanceof Ye || n.signal?.aborted) throw a;
    let s = JR(a);
    return m("artifact_delete", "request_error", y(n, d, s ? "relay" : "direct")), { err: s ? h("no answer") : "Couldn't delete the Artifact (network error)", reason: "request_error" };
  }
  let r = y(n, d, e.route);
  if (!e.ok) {
    if (e.reason === "relay-unavailable" || e.reason === "relay-not-served") return m("artifact_delete", e.reason.replace(/-/g, "_"), { ...r, status: e.status }), { err: X_r(), reason: "unavailable" };
    return m("artifact_delete", e.reason, r), { err: e.reason === "no-auth" ? Hy(e.detail) : `Artifact delete unavailable: ${e.reason}`, reason: "unavailable" };
  }
  if (!e.fromFrame && (e.status < 200 || e.status >= 300)) return m("artifact_delete", "relay_error", { ...r, status: e.status }), { err: h(`HTTP ${e.status}`), reason: "http_failed", status: e.status };
  if (e.status === 404) {
    if (!R7(e.data)) return m("artifact_delete", "not_found_foreign", { ...r, status: 404 }), { err: `Couldn't confirm the delete: the "not found" answer did not come from the Artifact service (a proxy or network edge may have answered), so the Artifact may still be online — check the Artifacts list again before treating it as deleted.`, reason: "http_failed", status: 404 };
    return p("artifact_delete", "not_found", r), { err: null, alreadyGone: true };
  }
  if (e.status === 403) {
    let a = C(e.data);
    if (/^not owner\b/.test(a)) return p("artifact_delete", "not_owner", r), { err: "Only the Artifact's owner can delete it.", reason: "not_owner", status: 403 };
    if (a.startsWith(v6)) return m("artifact_delete", "ccr_credential_refused", r), { err: X_r(), reason: "unavailable", status: 403 };
  }
  if (e.status < 200 || e.status >= 300) return m("artifact_delete", "http_failed", { ...r, status: e.status }), { err: e.status >= 500 ? `Couldn't confirm the delete (HTTP ${e.status}) — the Artifact may already be unreachable; retry once.` : `Couldn't delete the Artifact (HTTP ${e.status})`, reason: "http_failed", status: e.status };
  if (e.status !== 204 || e.route === "relay" && !R9(e)) return m("artifact_delete", "ok_foreign", { ...r, status: e.status }), { err: `Couldn't confirm the delete: the answer (HTTP ${e.status}) was not the Artifact service's own, so the Artifact may still be online — check the Artifacts list again before treating it as deleted.`, reason: "http_failed", status: e.status };
  return g("artifact_delete", r), { err: null, alreadyGone: false };
}
function F(t, o) {
  let n = Object.keys(t.frameUrls), c = n.filter((u) => ll(t.frameUrls[u].url) !== o), e = t.artifactRefs?.filter((u) => u.slug !== o), d = (e?.length ?? 0) !== (t.artifactRefs?.length ?? 0), r = t.artifactReadVersions !== void 0 && o in t.artifactReadVersions, a = t.artifactReadObservers !== void 0 && o in t.artifactReadObservers;
  if (c.length === n.length && !d && !r && !a) return t;
  let { [o]: s, ...f } = t.artifactReadVersions ?? {}, { [o]: D, ..._ } = t.artifactReadObservers ?? {};
  return { ...t, frameUrls: Object.fromEntries(c.map((u) => [u, t.frameUrls[u]])), ...d && { artifactRefs: e }, ...r && { artifactReadVersions: f }, ...a && { artifactReadObservers: _ } };
}
function WUe(t, o) {
  let n;
  if (o.updateAppState((s) => {
    let f = F(s, t);
    return n = f === s ? void 0 : f.frameUrls, f;
  }), n !== void 0) pB(n);
  let { shareStatus: c, createdFromType: e, deferredSurface: d, remoteControlSkippedSlugs: r, coordinatorEditors: a } = Z();
  for (let [s, f] of c.filePathToSlug) if (f === t) Uce(s);
  for (let [s, f] of e) if (f.slug === t) e.delete(s);
  if (d.delete(t), r.delete(t), hhn(t, "page_gone"), a.delete(t), apo(t, o.context), Z().liveDocWatch.stop?.(t), $vs(t), i.CLAUDE_CODE_REMOTE || fIe(t) !== void 0) W0n({ slug: t, context: o.context }).catch(l);
}
function Alo(t) {
  return `<${MKe} url="${t}"/> The user deleted this Artifact from /artifacts: its link no longer works for anyone, it cannot be restored, and it cannot be published to again — publishing the same file creates a new Artifact at a new URL. Do not pass this url to the Artifact tool.`;
}
export {
  Alo,
  B0n,
  Tlo,
  WUe,
  X_r
};
