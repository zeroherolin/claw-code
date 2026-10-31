// darwin/web/transcript-cleared.js — Claude Code 2.1.310（darwin）模块 chunk-90fvkp5j.js
import { Ddr, EAt, vAt, Ldr, Fdr, TAt, $dr, css, KM, ps } from "../context/not-admin-owned.js";
import { eZ } from "../settings/global-config-and-gates.js";
import { ikn, Uqt } from "../git/utf-8.js";
import { ZIs, Xve, YMs, Szn, WN, Isn, Dke, Usn, D6n, eKn, eUs } from "../core/conversation-engine.js";
import { Lo } from "../agents/chunk-44729602.js";
import { jvn } from "../git/get-url.js";
import { Scn } from "../mcp/declared-tools-dropped-at-compaction.js";
import { gXs } from "../context/tool-result-clearing-after-idle-server-report.js";
import { u2o } from "../context/tool-use-id.js";
import { qmn } from "../shared/chunk-22f77b65.js";
import { qEe, dho } from "../fs/file-suggestions-git-ls-files.js";
import { kTs } from "../api/context-management.js";
import { C8e } from "../agents/chunk-7e8c5e89.js";
import { eOe } from "../shared/chunk-71052fa8.js";
import { zMt } from "../shared/chunk-5b150a52.js";
import { uTs } from "../shell/input-digest-mismatch.js";
import { Q1e } from "../shared/chunk-59e12108.js";
function lho(t, r = /* @__PURE__ */ new Set(), s, o, n, m = false) {
  let a = r.size > 0;
  if (D6n(t), Uqt(t), qmn.of(t).clear(), dho(qEe), WN(), gXs(r), !a) Scn.peek(t)?.clear();
  let l = Isn();
  if (l?.getTeleportCacheState().status === "active") l.revertTeleportCache("transcript_cleared", "main");
  if (Dke(t, void 0, s, void 0, void 0, n), KM("clear"), Ddr(ps()), vAt(ps()), Ldr(ps()), EAt(ps()), Fdr(ps()), TAt(ps()), $dr(ps()), !m) dkr(), Szn(t.host);
  if (Usn(t, "session_start"), Xve.of(t).reset(), u2o.of(t).clear(), C8e.of(t).reset(), s?.((e) => {
    if (e.storedImagePaths.size === 0 && e.imageDescriptions.size === 0 && Object.keys(e.displayedMessageContent).length === 0) return e;
    return { ...e, storedImagePaths: /* @__PURE__ */ new Map(), imageDescriptions: /* @__PURE__ */ new Map(), displayedMessageContent: {} };
  }), ZIs(), !a) uTs();
  if (jvn(), !a) kTs();
  if (css(r), ikn(), eUs(), eKn().catch(() => {
  }), YMs(t), o) o.get(zMt).clear(), o.get(Q1e).clear(), o.get(eOe).clear(), import("../models/apply-prompt-to-markdown.js").then(({ WebFetchCache: e }) => o.get(e).clear()), import("./max-prompt-hashes-per-url.js").then(({ WebFetchHistory: e }) => o.get(e).clear()), import("../shared/bound-tool-search-query.js").then(({ ToolSearchDescriptionCache: e }) => o.get(e).clear());
  import("../mcp/agent-mcp-source.js").then(({ clearAgentDefinitionsCache: e }) => e());
}
function dkr() {
  let t = Lo();
  t.bashPromptSkillCommands = void 0, t.workflowAuthoringSkillAvailable = void 0, eZ();
}
export {
  dkr,
  lho
};
