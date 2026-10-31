// darwin/permissions/question-changed.js — Claude Code 2.1.310（darwin）模块 chunk-04g7njpw.js
import { bo } from "../context/not-admin-owned.js";
import { p } from "../telemetry/chunk-9d6962d2.js";
import { ri, cz } from "./classifier-transcript-too-long.js";
import { ot } from "../fs/chunk-86be9585.js";
import { _, vW, LS } from "../fs/gitlab-runner-authentication-token.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { dn } from "../mcp/chunk-0e2a1db6.js";
import { mn } from "../shared/chunk-62f8d501.js";
import { o, M, C, u, Ue, T } from "../vendor/zod/string-format.js";
import { createHash as w } from "crypto";
import { realpath as A, stat as P } from "fs/promises";
var $4t = "anthropic/permissionAsks";
function wvi() {
  return { experimental: { [$4t]: { v: 1 } } };
}
var W = f(() => u({ experimental: u({ [$4t]: u({ v: T(1) }) }) })), x = "anthropic/permissionQuestion", k = 32, b = 2e3, O = 1024, E = new RegExp(`[${LS}]+`, "gu");
function s4e(n) {
  return vW(n.replace(E, "�"));
}
var R = f(() => o().regex(/^[0-9a-f]{64}$/)), z = f(() => Ue({ v: T(1), approved: Ue({ ask_digest: R(), attested: M() }).optional() })), Z = f(() => Ue({ v: T(1), outcome: T("needs_approval"), ask_digest: R(), reasons: C(Ue({ reason: o().min(1).max(b), classifier_approvable: M(), circuit_breaker: o().max(64).optional(), also: C(o().max(64)).max(k).optional() })).min(1).max(k) }));
function aur(n) {
  let e = mn(n) ? n[$4t] : void 0;
  if (e === void 0) return { kind: "absent" };
  if (typeof e !== "string" || e.length > O) return { kind: "unreadable" };
  let r = z().safeParse(ot(e, false)).data;
  if (r === void 0) return { kind: "unreadable" };
  return r.approved === void 0 ? { kind: "can_ask" } : { kind: "approved", askDigest: r.approved.ask_digest, attested: r.approved.attested };
}
function lur(n, e) {
  return { reason: s4e(n.reason), classifier_approvable: e && !cz(n), ...n.circuitBreaker !== void 0 && { circuit_breaker: n.circuitBreaker }, ...n.also !== void 0 && { also: [...n.also] } };
}
function gAn(n) {
  if (n?.type === "safetyCheck") return [n];
  return n?.type === "subcommandResults" ? [...n.reasons.values()].flatMap((e) => gAn(e.decisionReason)) : [];
}
function v({ matchedAskRule: n, decisionReason: e }) {
  return [...n?.ruleBehavior === "ask" ? [g(n)] : [], ...e?.type === "rule" && e.rule.ruleBehavior === "ask" ? [g(e.rule)] : [], ...e?.type === "other" ? [S(e.reason)] : [], ...e?.type === "subcommandResults" ? [...e.reasons.values()].flatMap((r) => r.behavior === "ask" ? v(r) : []) : []];
}
function g(n) {
  return S(`A permission rule says to ask a person before a call like this one: '${dn(n.ruleValue)}'`);
}
function S(n) {
  return { type: "safetyCheck", reason: n, classifierApprovable: false };
}
function j(n, e, { path: r, identity: c }, s) {
  return w("sha256").update(_([n, e, r, c ?? null, s])).digest("hex");
}
function Q(n, e, r, c) {
  let s = (a) => lur(a, a.classifierApprovable), t = gAn(r.decisionReason).map(s), d = v(r).map(s), m = d.length === 0 ? t : [...t.toSorted((a, y) => Number(a.classifier_approvable) - Number(y.classifier_approvable)), ...d].map((a) => ({ ...a, classifier_approvable: false })), i = ri(m, _);
  if (i.length === 0 || i.length > k) return;
  if (i.some((a) => a.reason.length > b)) return;
  return { v: 1, outcome: "needs_approval", ask_digest: j(n.name, e, c, i), reasons: i };
}
async function HJr(n, e, r, c, s) {
  let t = aur(n);
  if (t.kind === "absent") return "as_without_the_key";
  if (s === void 0) return t.kind === "approved" ? l(e, "question_changed", h) : "as_without_the_key";
  if (t.kind === "unreadable") return l(e, "asks_key_unreadable", `${s.message} That needs a person's approval, and this server could not read its caller's offer to ask for one, so nobody was asked. Retrying won't help.`);
  let d = bo(c).cwd, m = { path: d, identity: await Promise.all([A(d), P(d, { bigint: true })]).then(([a, y]) => a === d ? `${y.dev}:${y.ino}` : void 0, () => {
    return;
  }) };
  if (m.identity === void 0) return t.kind === "approved" ? l(e, "question_changed", h) : l(e, "start_folder_unconfirmed", `${s.message} That needs a person's approval, and nobody was asked, because the working directory was moved, is gone or cannot be read. Change directory first, then send the call again.`);
  let i = Q(e, r, s, m);
  if (i === void 0) return l(e, "question_too_large", `${s.message} The permission check's objections are too many, or one is too long, for this server to put to a person, so nobody was asked. Send smaller calls, or use shorter paths.`);
  switch (t.kind) {
    case "can_ask":
      return p("mcp_serve_plain_call", "asked"), { rejection: `${e.name} was not run: ${s.message} A person has to approve this call, and none did. Tell the user what you wanted to run and why.`, meta: { [x]: i } };
    case "approved":
      if (!t.attested) return l(e, "approval_not_from_person", "the approval sent with this call did not come from a person, and only a person's counts. Tell the user what you wanted to run and why.");
      return i.ask_digest === t.askDigest ? "run" : l(e, "question_changed", h);
  }
}
var h = "what a person approved is no longer what this call would do: the working directory, or what the permission check found, has changed since, or the working directory was moved, is gone or cannot be read. If it was moved, is gone or cannot be read, change directory first. Then send the call again to have it checked afresh.";
function l(n, e, r) {
  return p("mcp_serve_plain_call", e), { rejection: `${n.name} was not run: ${r}` };
}
export {
  $4t,
  HJr,
  aur,
  gAn,
  lur,
  s4e,
  wvi
};
