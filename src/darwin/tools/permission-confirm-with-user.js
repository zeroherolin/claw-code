// darwin/tools/permission-confirm-with-user.js — Claude Code 2.1.310（darwin）模块 chunk-yxr2dj3e.js
import { c } from "../agents/third-party.js";
import { R, d } from "../telemetry/anthropic-workspace-id.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { t_e } from "../context/tool-result-clearing-after-idle-server-report.js";
import { ae } from "../permissions/max-thinking-tokens.js";
import { Nte } from "./ask-user-question-tool.js";
import { zq, Ld } from "../core/conversation-engine.js";
import { BUn, jUn, ARs } from "../shared/chunk-1d2c01b3.js";
import { cn } from "../shared/chunk-6ae01e90.js";
import { o, M, oe, u, me } from "../vendor/zod/string-format.js";
import { randomUUID as V } from "crypto";
var W0t = "confirm_";
function Q8e(e) {
  let r = ae(e);
  return zq() && r.shouldAvoidPermissionPrompts !== true && r.mode !== "dontAsk";
}
async function fpt(e) {
  let { toolUseContext: r, source: i } = e;
  if (!Q8e(r)) return { kind: "unanswered", reason: "no_one_to_ask" };
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
      else p("permission_confirm_with_user", s.reason, a);
      break;
  }
  return s;
}
async function b({ canUseTool: e, toolUseContext: r, source: i, header: s, question: a, choices: n, personOnly: k }) {
  let h = Nte.inputSchema.safeParse({ questions: [{ question: a, header: s, options: n.map(({ label: W, description: A }) => ({ label: W, description: A ?? "" })), multiSelect: false }], metadata: { source: i } });
  if (!h.success) throw new R(`confirmWithUser(${i}): the question does not satisfy the AskUserQuestion schema: ${h.error.message}`, "confirmWithUser: the question does not satisfy the AskUserQuestion schema");
  let U = await Nte.checkPermissions(h.data, r);
  if (U.behavior !== "ask") throw new R(`confirmWithUser(${i}): AskUserQuestion.checkPermissions answered ${U.behavior}, not ask`, "confirmWithUser: AskUserQuestion.checkPermissions did not answer ask");
  let w = { ...U, forcedByCaller: true, ...k === true && { personOnly: true } }, _ = `${W0t}${V()}`, y = await e(Nte, h.data, r, Ld({ content: [] }), _, w).finally(() => t_e(r.session, _));
  return P(y, w, r.abortController.signal, a, n);
}
function P(e, r, i, s, a) {
  if (BUn(e, r)) return { kind: "unanswered", reason: "no_one_to_ask" };
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
      if (e.decisionReason.type === "other" && ARs(e.decisionReason.reason)) return { kind: "unanswered", reason: "host_closed" };
      if (e.decisionReason.type === "asyncAgent" || e.decisionReason.type === "other" && jUn(e.decisionReason.reason)) return { kind: "unanswered", reason: "no_one_to_ask" };
      return { kind: "declined" };
    case "ask":
      return { kind: "declined" };
  }
}
var x = f(() => u({ answers: me(o(), oe()).optional(), followUp: M().optional() }));
function T(e) {
  if (typeof e === "string") return C(e);
  if (Array.isArray(e)) return C(e.filter((r) => typeof r === "string").join(", "));
  return "";
}
function C(e) {
  return e.replace(/\s+/g, " ").trim();
}
export {
  Q8e,
  W0t,
  fpt
};
