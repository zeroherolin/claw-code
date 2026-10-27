// agents/chunk-9sxe331v.js — Claude Code 2.1.310 模块 chunk-9sxe331v.js
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { zj } from "../fs/reply-across-default-dirs.esvz.js";
import { Oe } from "../core/conversation-engine.31gx.js";
import { Yu, J7e } from "../git/bridge-child-tool-diff.m7a8.js";
import { SIe } from "./swarm-in-process-kill.30bj.js";
import { us } from "./in-process-teammate.e4p6.js";
function kSr(e, a, s) {
  if (s.get(e)?.status !== "running") return;
  s.updateTranscript(e, (n) => ({ ...n, messages: J7e(n.messages, a) }));
}
function JIt(e, a, s, n) {
  let o = s.get(e);
  if (!o || us(o.status)) {
    t(`Dropping message for teammate task ${e}: task status is "${o?.status}"`);
    return;
  }
  s.update(e, (r) => ({ ...r, pendingUserMessages: [...r.pendingUserMessages, { text: a, origin: n }] })), s.updateTranscript(e, (r) => ({ ...r, messages: J7e(r.messages, Oe({ content: a, origin: n })) }));
}
function Edo(e, a) {
  let s = a.get(e);
  if (!Yu(s) || !s.awaitingPlanApproval) return;
  a.update(e, (n) => ({ ...n, awaitingPlanApproval: false, pendingPlanApproval: void 0 })), JIt(e, "The person moved you out of plan mode. Continue your work.", a, { kind: "task-notification" });
}
function vdo(e, a, s) {
  let n = SIe(zj(a, s), e);
  if (n?.status === "running") n.retryWake?.emit();
}
export {
  Edo,
  JIt,
  kSr,
  vdo
};
