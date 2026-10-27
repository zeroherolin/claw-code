// artifacts/artifact-comment-consent-read.n4w6.js — Claude Code 2.1.310 模块 chunk-n4w6gxe8.js
import { Ve } from "../telemetry/anthropic-workspace-id.36ys.js";
import { yi } from "../shared/chunk-j79dwkaq.js";
import { p } from "../telemetry/chunk-wn8xtaqg.js";
import { lr, CH, l1, XG, tC, jkt, Wkt, ipe, m_ } from "./cobalt-plinth-lovage.hxm5.js";
import { Z } from "./same-account.bxg8.js";
import { _Ae } from "../mcp/cobalt-plinth-sedge.awk2.js";
import { F$ } from "./template-instance.kxgt.js";
import { yB, CHt, Jg, ABe, Rve } from "./artifact-comment-reply.1d3x.js";
import { ae } from "../permissions/max-thinking-tokens.hx3h.js";
import { Cs } from "../shared/chunk-pdcynnfk.js";
var pNn = "__artifactCommentTarget", g = 120, C = 4e3, T = 32;
function _(e, t) {
  return `${e}/${t}`;
}
function lQt(e) {
  return ABe(e).replace(/[\n\t]/g, " ").replace(XG, " ").replace(/\s+/g, " ").replace(/"/g, "'").replace(CH, "'").replace(l1, "'").trim();
}
function A(e, t) {
  let o = lQt(e);
  return Array.from(o).length > t ? `${F$(yi(o, t))}…` : o;
}
function E(e, t, o) {
  let r = e.find((s) => s.id === t), n = r?.comments[0];
  if (r === void 0 || n === void 0 || r.commentsDegraded) return;
  let a = tC(A(n.text.replace(m_, " "), g)).replace(ipe, " ").replace(jkt, Wkt).replace(/ {2,}/g, " ").trim();
  if (a === "") return;
  let i = yB(n.account, o), c = Jg(n), d = n.postedByArtifact || c === "unknown" ? "unknown" : n.role === "assistant" ? i ? "claude" : "unknown" : c === "agent" ? "unknown" : i ? "user" : "viewer";
  return { display: { thread_id: t, by: d, excerpt: a, replies: r.comments.length - 1, resolved: r.resolved && r.resolvedDegraded !== true }, ...d === "viewer" && n.access !== void 0 && { access: n.access } };
}
function xEr(e) {
  let t = ae(e);
  return e.toolUseId !== void 0 && t.mode !== "dontAsk" && t.shouldAvoidPermissionPrompts !== true;
}
async function PEr(e, t, o) {
  if (!lr.test(t)) return;
  let r = _(e.slug, t), n = Z().commentTargets, a = Z().accountEpoch, i = n.get(r);
  if (i !== void 0 && o.toolUseId !== void 0 && i.toolUseId === o.toolUseId) return i.target;
  let { signal: c, cleanup: d } = Cs(o.abortController.signal, { timeoutMs: C, refTimer: true });
  try {
    let [s, f] = await Promise.all([Rve(e, c, o.credentials, "artifact_comment_consent_read", { skipBootProbe: true }), _Ae(o.credentials)]);
    if (s.err !== null) {
      n.delete(r);
      return;
    }
    let m = E(s.threads, t, { account: f?.accountUuid?.toLowerCase(), tokens: CHt() });
    if (m === void 0) {
      p("artifact_comment_consent_read", "no_opening_comment"), n.delete(r);
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
    p("artifact_comment_consent_read", Ve(s) ? "deadline" : "read_threw");
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
function IEr({ display: e, access: t }) {
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
function vks({ display: e, access: t }) {
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
function bmo(e, t) {
  if (t === void 0 && !(pNn in e)) return;
  let { [pNn]: o, ...r } = e;
  return t === void 0 ? r : { ...r, [pNn]: t };
}
export {
  IEr,
  PEr,
  bmo,
  lQt,
  pNn,
  vks,
  xEr
};
