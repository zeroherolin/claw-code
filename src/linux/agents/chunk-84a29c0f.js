// linux/agents/chunk-84a29c0f.js — Claude Code 2.1.310（linux）模块 chunk-88y2srrb.js
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { $j } from "../fs/reply-across-default-dirs.js";
import { Oe } from "../core/conversation-engine.js";
import { Yu, WJe } from "../git/bridge-child-tool-diff.js";
import { fIe } from "./swarm-in-process-kill.js";
import { cs } from "./in-process-teammate.b77f.js";
function cbr(e, a, s) {
  if (s.get(e)?.status !== "running") return;
  s.updateTranscript(e, (n) => ({ ...n, messages: WJe(n.messages, a) }));
}
function WIt(e, a, s, n) {
  let o = s.get(e);
  if (!o || cs(o.status)) {
    t(`Dropping message for teammate task ${e}: task status is "${o?.status}"`);
    return;
  }
  s.update(e, (r) => ({ ...r, pendingUserMessages: [...r.pendingUserMessages, { text: a, origin: n }] })), s.updateTranscript(e, (r) => ({ ...r, messages: WJe(r.messages, Oe({ content: a, origin: n })) }));
}
function sdo(e, a) {
  let s = a.get(e);
  if (!Yu(s) || !s.awaitingPlanApproval) return;
  a.update(e, (n) => ({ ...n, awaitingPlanApproval: false, pendingPlanApproval: void 0 })), WIt(e, "The person moved you out of plan mode. Continue your work.", a, { kind: "task-notification" });
}
function ido(e, a, s) {
  let n = fIe($j(a, s), e);
  if (n?.status === "running") n.retryWake?.emit();
}
export {
  WIt,
  cbr,
  ido,
  sdo
};
