// linux/tools/permission-confirm-with-user.js — Claude Code 2.1.310（linux）模块 chunk-6477an49.js
import { c } from "../agents/third-party.js";
import { R, d } from "../telemetry/anthropic-workspace-id.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Yye } from "../context/tool-result-clearing-after-idle-server-report.js";
import { ae } from "../permissions/max-thinking-tokens.js";
import { xte } from "./ask-user-question-tool.js";
import { H4, Ld } from "../core/conversation-engine.js";
import { vUn, EUn, WCs } from "../shared/chunk-1d2c01b3.js";
import { cn } from "../shared/chunk-6ae01e90.js";
import { o, M, oe, u, me } from "../vendor/zod/string-format.js";
import { randomUUID as V } from "crypto";
var IDt = "confirm_";
function G8e(e) {
  let r = ae(e);
  return H4() && r.shouldAvoidPermissionPrompts !== true && r.mode !== "dontAsk";
}
async function ift(e) {
  let { toolUseContext: r, source: i } = e;
  if (!G8e(r)) return { kind: "unanswered", reason: "no_one_to_ask" };
  let s;
  try {
    s = await b(e);
  } catch (n) {
    if (r.abortController.signal.aborted) t(`confirmWithUser(${i}): ask aborted with the turn: ${d(n)}`), s = { kind: "aborted" };
    else l(n), s = { kind: "unanswered", reason: "error" };
  }
  let a = { source_hash: cn(i) };
  switch (s.kind) {
    case "chose":
    case "declined":
    case "aborted":
      g("permission_confirm_with_user", { ...a, answer: c(s.kind) });
      break;
    case "unanswered":
      if (s.reason === "error") m("permission_confirm_with_user", "error", a);
      else f("permission_confirm_with_user", s.reason, a);
      break;
  }
  return s;
}
async function b({ canUseTool: e, toolUseContext: r, source: i, header: s, question: a, choices: n, personOnly: k }) {
  let h = xte.inputSchema.safeParse({ questions: [{ question: a, header: s, options: n.map(({ label: W, description: A }) => ({ label: W, description: A ?? "" })), multiSelect: false }], metadata: { source: i } });
  if (!h.success) throw new R(`confirmWithUser(${i}): the question does not satisfy the AskUserQuestion schema: ${h.error.message}`, "confirmWithUser: the question does not satisfy the AskUserQuestion schema");
  let U = await xte.checkPermissions(h.data, r);
  if (U.behavior !== "ask") throw new R(`confirmWithUser(${i}): AskUserQuestion.checkPermissions answered ${U.behavior}, not ask`, "confirmWithUser: AskUserQuestion.checkPermissions did not answer ask");
  let w = { ...U, forcedByCaller: true, ...k === true && { personOnly: true } }, _ = `${IDt}${V()}`, y = await e(xte, h.data, r, Ld({ content: [] }), _, w).finally(() => Yye(r.session, _));
  return P(y, w, r.abortController.signal, a, n);
}
function P(e, r, i, s, a) {
  if (vUn(e, r)) return { kind: "unanswered", reason: "no_one_to_ask" };
  if (i.aborted) return { kind: "aborted" };
  switch (e.behavior) {
    case "allow": {
      let n = x().safeParse(e.updatedInput);
      if (!n.success) return { kind: "unanswered", reason: "no_selection" };
      if (n.data.followUp === true) return { kind: "declined" };
      let k = T(n.data.answers?.[s]);
      if (k === "") return { kind: "unanswered", reason: "no_selection" };
      let h = a.find((U) => C(U.label) === k);
      return h !== void 0 ? { kind: "chose", value: h.value } : { kind: "declined", typedAnswer: k };
    }
    case "deny":
      if (e.decisionReason.type === "other" && WCs(e.decisionReason.reason)) return { kind: "unanswered", reason: "host_closed" };
      if (e.decisionReason.type === "asyncAgent" || e.decisionReason.type === "other" && EUn(e.decisionReason.reason)) return { kind: "unanswered", reason: "no_one_to_ask" };
      return { kind: "declined" };
    case "ask":
      return { kind: "declined" };
  }
}
var x = p(() => u({ answers: me(o(), oe()).optional(), followUp: M().optional() }));
function T(e) {
  if (typeof e === "string") return C(e);
  if (Array.isArray(e)) return C(e.filter((r) => typeof r === "string").join(", "));
  return "";
}
function C(e) {
  return e.replace(/\s+/g, " ").trim();
}
export {
  G8e,
  IDt,
  ift
};
