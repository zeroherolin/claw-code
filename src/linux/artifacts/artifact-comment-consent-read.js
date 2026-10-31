// linux/artifacts/artifact-comment-consent-read.js — Claude Code 2.1.310（linux）模块 chunk-d9b6ed2g.js
import { Ke } from "../telemetry/anthropic-workspace-id.js";
import { yi } from "../shared/chunk-d2c47492.js";
import { f } from "../telemetry/chunk-9d6962d2.js";
import { ar, wH, rB, Bz, eT, Dkt, Hkt, Zue, f_ } from "./cobalt-plinth-lovage.js";
import { Z } from "./same-account.js";
import { fCe } from "../mcp/cobalt-plinth-sedge.js";
import { DF } from "./template-instance.js";
import { u1, pHt, Jg, _1e, vEe } from "./artifact-comment-reply.js";
import { ae } from "../permissions/max-thinking-tokens.js";
import { Ts } from "../shared/chunk-82eb5142.js";
var J0n = "__artifactCommentTarget", g = 120, C = 4e3, T = 32;
function _(e, t) {
  return `${e}/${t}`;
}
function JQt(e) {
  return _1e(e).replace(/[\n\t]/g, " ").replace(Bz, " ").replace(/\s+/g, " ").replace(/"/g, "'").replace(wH, "'").replace(rB, "'").trim();
}
function A(e, t) {
  let o = JQt(e);
  return Array.from(o).length > t ? `${DF(yi(o, t))}…` : o;
}
function E(e, t, o) {
  let r = e.find((s) => s.id === t), n = r?.comments[0];
  if (r === void 0 || n === void 0 || r.commentsDegraded) return;
  let a = eT(A(n.text.replace(f_, " "), g)).replace(Zue, " ").replace(Dkt, Hkt).replace(/ {2,}/g, " ").trim();
  if (a === "") return;
  let i = u1(n.account, o), c = Jg(n), d = n.postedByArtifact || c === "unknown" ? "unknown" : n.role === "assistant" ? i ? "claude" : "unknown" : c === "agent" ? "unknown" : i ? "user" : "viewer";
  return { display: { thread_id: t, by: d, excerpt: a, replies: r.comments.length - 1, resolved: r.resolved && r.resolvedDegraded !== true }, ...d === "viewer" && n.access !== void 0 && { access: n.access } };
}
function pvr(e) {
  let t = ae(e);
  return e.toolUseId !== void 0 && t.mode !== "dontAsk" && t.shouldAvoidPermissionPrompts !== true;
}
async function mvr(e, t, o) {
  if (!ar.test(t)) return;
  let r = _(e.slug, t), n = Z().commentTargets, a = Z().accountEpoch, i = n.get(r);
  if (i !== void 0 && o.toolUseId !== void 0 && i.toolUseId === o.toolUseId) return i.target;
  let { signal: c, cleanup: d } = Ts(o.abortController.signal, { timeoutMs: C, refTimer: true });
  try {
    let [s, p] = await Promise.all([vEe(e, c, o.credentials, "artifact_comment_consent_read", { skipBootProbe: true }), fCe(o.credentials)]);
    if (s.err !== null) {
      n.delete(r);
      return;
    }
    let m = E(s.threads, t, { account: p?.accountUuid?.toLowerCase(), tokens: pHt() });
    if (m === void 0) {
      f("artifact_comment_consent_read", "no_opening_comment"), n.delete(r);
      return;
    }
    if (Z().accountEpoch !== a) return;
    n.delete(r), n.set(r, { target: m, toolUseId: o.toolUseId });
    while (n.size > T) {
      let u = n.keys().next().value;
      if (u === void 0) break;
      n.delete(u);
    }
    return m;
  } catch (s) {
    if (o.abortController.signal.aborted) throw s;
    f("artifact_comment_consent_read", Ke(s) ? "deadline" : "read_threw");
    return;
  } finally {
    d();
  }
}
function l(e) {
  switch (e) {
    case "owner":
      return "the owner's";
    case "editor":
      return "an editor's";
    case "commenter":
      return "a commenter's";
    case void 0:
      return "a viewer's";
  }
}
function gvr({ display: e, access: t }) {
  switch (e.by) {
    case "user":
      return `your comment "${e.excerpt}"`;
    case "claude":
      return `Claude's comment "${e.excerpt}"`;
    case "viewer":
      return `${l(t)} comment "${e.excerpt}"`;
    case "unknown":
      return `the comment "${e.excerpt}"`;
  }
}
function VEs({ display: e, access: t }) {
  switch (e.by) {
    case "user":
      return "your comment thread";
    case "claude":
      return "Claude's comment thread";
    case "viewer":
      return `${l(t)} comment thread`;
    case "unknown":
      return "a comment thread";
  }
}
function Ppo(e, t) {
  if (t === void 0 && !(J0n in e)) return;
  let { [J0n]: o, ...r } = e;
  return t === void 0 ? r : { ...r, [J0n]: t };
}
export {
  J0n,
  JQt,
  Ppo,
  VEs,
  gvr,
  mvr,
  pvr
};
