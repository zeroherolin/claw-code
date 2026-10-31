// linux/web/transcript-cleared.js — Claude Code 2.1.310（linux）模块 chunk-vvh1h2k6.js
import { bdr, fCt, pCt, Sdr, vdr, hCt, Edr, xos, jM, ps } from "../context/not-admin-owned.js";
import { K7 } from "../settings/global-config-and-gates.js";
import { GEn, R4t } from "../git/utf-8.js";
import { mIs, GEe, cMs, Qzn, FN, hsn, xke, Tsn, mKn, MVn, gFs } from "../core/conversation-engine.js";
import { Lo } from "../agents/chunk-44729602.js";
import { AEn } from "../git/get-url.js";
import { rcn } from "../mcp/declared-tools-dropped-at-compaction.js";
import { I9s } from "../context/tool-result-clearing-after-idle-server-report.js";
import { LWo } from "../context/tool-use-id.js";
import { Mmn } from "../shared/chunk-22f77b65.js";
import { Wve, Fgo } from "../fs/file-suggestions-git-ls-files.js";
import { YTs } from "../api/context-management.js";
import { _8e } from "../agents/chunk-7e8c5e89.js";
import { qIe } from "../shared/chunk-71052fa8.js";
import { $Mt } from "../shared/chunk-5b150a52.js";
import { LTs } from "../shell/input-digest-mismatch.js";
import { BBe } from "../shared/chunk-59e12108.js";
function $go(t, r = /* @__PURE__ */ new Set(), s, o, n, m = false) {
  let a = r.size > 0;
  if (mKn(t), R4t(t), Mmn.of(t).clear(), Fgo(Wve), FN(), I9s(r), !a) rcn.peek(t)?.clear();
  let l = hsn();
  if (l?.getTeleportCacheState().status === "active") l.revertTeleportCache("transcript_cleared", "main");
  if (xke(t, void 0, s, void 0, void 0, n), jM("clear"), bdr(ps()), pCt(ps()), Sdr(ps()), fCt(ps()), vdr(ps()), hCt(ps()), Edr(ps()), !m) qEr(), Qzn(t.host);
  if (Tsn(t, "session_start"), GEe.of(t).reset(), LWo.of(t).clear(), _8e.of(t).reset(), s?.((e) => {
    if (e.storedImagePaths.size === 0 && e.imageDescriptions.size === 0 && Object.keys(e.displayedMessageContent).length === 0) return e;
    return { ...e, storedImagePaths: /* @__PURE__ */ new Map(), imageDescriptions: /* @__PURE__ */ new Map(), displayedMessageContent: {} };
  }), mIs(), !a) LTs();
  if (AEn(), !a) YTs();
  if (xos(r), GEn(), gFs(), MVn().catch(() => {
  }), cMs(t), o) o.get($Mt).clear(), o.get(BBe).clear(), o.get(qIe).clear(), import("../models/apply-prompt-to-markdown.js").then(({ WebFetchCache: e }) => o.get(e).clear()), import("./max-prompt-hashes-per-url.js").then(({ WebFetchHistory: e }) => o.get(e).clear()), import("../shared/bound-tool-search-query.js").then(({ ToolSearchDescriptionCache: e }) => o.get(e).clear());
  import("../mcp/agent-mcp-source.js").then(({ clearAgentDefinitionsCache: e }) => e());
}
function qEr() {
  let t = Lo();
  t.bashPromptSkillCommands = void 0, t.workflowAuthoringSkillAvailable = void 0, K7();
}
export {
  $go,
  qEr
};
