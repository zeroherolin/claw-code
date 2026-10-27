// context/auto-dream-skipped.e1n3.js — Claude Code 2.1.310 模块 chunk-e1n3shzb.js
import { S, c } from "../agents/third-party.ydpb.js";
import { N, d, j1 } from "../telemetry/anthropic-workspace-id.36ys.js";
import { V, ke } from "./not-admin-owned.ersa.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { I } from "../shared/chunk-j79dwkaq.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { g, m } from "../telemetry/chunk-wn8xtaqg.js";
import { kz } from "../remote/local-agent.we9a.js";
import { tr } from "../shared/async-hooks.m2fg.js";
import { mt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { La, k, Bp, ba, eK } from "../settings/global-config-and-gates.27xj.js";
import { at, qt } from "../mcp/allowed-warning.j2d4.js";
import { Y9, nx, qNt, Oe, Bt, $Vn } from "../core/conversation-engine.31gx.js";
import { bXn, uQ, gV } from "./org-memory-writes-setting-changed.w8x9.js";
import { $p, YU, lVe } from "./chunk-ajwybcv5.js";
import { Lg } from "./tool-result-clearing-after-idle-server-report.epan.js";
import { eb } from "../agents/in-process-teammate.040f.js";
import { JOn, QOn, Ghr, zhr, Vhr, zPt, Khr } from "./extract-memories-extraction.fm7d.js";
import { Rdt, hhs, hIt, yhs } from "../fs/chunk-sqm2ny6j.js";
import { $C, KS } from "../agents/in-process-teammate.e4p6.js";
import { Ew, Nm, hu } from "./memory-write.r13z.js";
function K() {
  return k("tengu_onyx_plover", null);
}
function bYt() {
  let e = K();
  return e?.enabled === true || e?.available === true;
}
function ddt() {
  if (!bYt()) return false;
  let e = mt().autoDreamEnabled;
  if (e !== void 0) return e;
  return K()?.enabled === true;
}
class Z {
  runner = null;
}
var Y = new W(() => new Z());
var le = "## Team memory (`team/` subdirectory)\n\nThe `team/` subdirectory holds memories shared across everyone working in this repo. Other teammates' Claude sessions write here too — treat it differently from your personal files:\n\n- **Phase 1:** `ls team/` and skim it alongside your personal files. A teammate may have already captured something you'd otherwise duplicate.\n- **Phase 3:** Merge near-duplicates *within* `team/` the same way you would personal memories. If a personal memory restates a team memory, delete the personal one.\n- **Phase 4 — be conservative pruning `team/`:**\n  - DO delete or fix a team memory that is clearly contradicted by the current code, or that a newer team memory marks as superseded.\n  - DO NOT delete a team memory just because you don't recognize it or it isn't relevant to *your* recent sessions — a teammate may rely on it.\n  - When unsure, leave it. A stale team memory costs little; deleting a teammate's load-bearing note costs a lot.\n\nDo not promote personal memories into `team/` during a dream — that's a deliberate choice the user makes via `/remember`, not something to do reflexively.", de = `### Reconcile memories against CLAUDE.md

Project CLAUDE.md instructions are loaded in your system prompt. For each memory that captures feedback or project conventions (the \`feedback\`/\`project\` types, where tagged), check whether it contradicts a CLAUDE.md instruction on the same topic:

- **Memory is stale** — CLAUDE.md and the memory describe different procedures for the same task: CLAUDE.md is the maintained, checked-in source. Delete the memory, or rewrite it to agree if it carries context worth keeping (the *why* is still useful but the *how* is wrong).
- **CLAUDE.md may be stale** — the memory is clearly dated after CLAUDE.md and explicitly corrects it: do NOT edit CLAUDE.md during a dream. Annotate the memory with "contradicts CLAUDE.md — verify which is current" and list it in your summary so the user can update CLAUDE.md.
- **Not a conflict** — the memory adds detail CLAUDE.md doesn't cover, or narrows a CLAUDE.md rule with a stated reason. Leave it.

A \`feedback\` memory's "Why: the user corrected me" framing is not evidence it's newer than CLAUDE.md — CLAUDE.md may have been updated since.`;
function Q(e, r, o, y = false, p = false, s = false) {
  return `# Dream: Memory Consolidation

You are performing a dream — a reflective pass over your memory files. Synthesize what you've learned recently into durable, well-organized memories so that future sessions can orient quickly.

Memory directory: \`${e}\`
${lVe}

Session transcripts: \`${r}\` (large JSONL files — grep narrowly, don't read whole files)
${y ? `
${le}
` : ""}
---

## Phase 1 — Orient

- \`ls\` the memory directory to see what already exists
- Read \`${$p}\` to understand the current index
- Skim existing topic files so you improve them rather than creating duplicates
- If a \`sessions/\` subdirectory exists, review recent entries there

## Phase 2 — Gather recent signal

Look for new information worth persisting. Sources in rough priority order:

1. **Existing memories that drifted** — facts that contradict something you see in the codebase now
2. **Transcript search** — if you need specific context (e.g., "what was the error message from yesterday's build failure?"), grep the JSONL transcripts for narrow terms:
   \`grep -rn "<narrow term>" ${r}/ --include="*.jsonl" | tail -50\`

Don't exhaustively read transcripts. Look only for things you already suspect matter.

## Phase 3 — Consolidate

For each thing worth remembering, write or update a memory file at the top level of the memory directory. Use the memory file format and type conventions from your system prompt's auto-memory section — it's the source of truth for what to save, how to structure it, and what NOT to save.${p ? ` The ${Ew} / ${Nm} / ${hu} tools are unavailable in a dream: consolidate only this memory directory, and leave anything that section marks as shared with the project where it is — never copy it into these files.` : ""}${""}

Focus on:
- Merging new signal into existing topic files rather than creating near-duplicates
- Converting relative dates ("yesterday", "last week") to absolute dates so they remain interpretable after time passes
- Deleting contradicted facts — if today's investigation disproves an old memory, fix it at the source

## Phase 4 — Prune and index

Update \`${$p}\` so it stays under ${YU} lines AND under ~25KB. It's an **index**, not a dump — each entry should be one line under ~150 characters: \`- [Title](file.md) — one-line hook\`. Never write memory content directly into it.

- Remove pointers to memories that are now stale, wrong, or superseded
- Demote verbose entries: if an index line is over ~200 chars, it's carrying content that belongs in the topic file — shorten the line, move the detail
- Add pointers to newly important memories
- Resolve contradictions — if two files disagree, fix the wrong one

${de}

---

Return a brief summary of what you consolidated, updated, or pruned. If nothing changed (memories are already tight), say so.${o ? `

## Additional context

${o}` : ""}`;
}
var ue = 30;
function q(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "dream";
}
function ee(e, r) {
  let o = $C("dream"), y = { ...KS(o, "dream", "dreaming"), type: "dream", status: "running", skipTranscript: true, phase: "starting", sessionsReviewing: r.sessionsReviewing, filesTouched: [], turns: [], abortController: r.abortController, priorMtime: r.priorMtime, ...r.storageV5 !== void 0 && { storageV5: r.storageV5 } };
  return e.register(y), o;
}
function te(e, r, o, y) {
  y.update(e, (p) => {
    let s = new Set(p.filesTouched), i = o.filter((n) => !s.has(n) && s.add(n));
    if (r.text === "" && r.toolUseCount === 0 && i.length === 0) return p;
    return { ...p, phase: i.length > 0 ? "updating" : p.phase, filesTouched: i.length > 0 ? [...p.filesTouched, ...i] : p.filesTouched, turns: p.turns.slice(-(ue - 1)).concat(r) };
  });
}
function re(e, r) {
  r.update(e, (o) => ({ ...o, status: "completed", endTime: Date.now(), notified: true, abortController: void 0 })), g("task_dream"), La(e, "completed", { skipTranscript: true, ambient: true });
}
function oe(e, r) {
  r.update(e, (o) => ({ ...o, status: "failed", endTime: Date.now(), notified: true, abortController: void 0 })), m("task_dream", "task_dream_failed"), La(e, "failed", { skipTranscript: true, ambient: true });
}
var w = null, ce = 6e5, pe = new RegExp(`^\\s*(?:${zhr})\\b`, "i"), se = { minHours: 24, minSessions: 5 };
function fe() {
  let e = k("tengu_onyx_plover", null);
  return { minHours: typeof e?.minHours === "number" && Number.isFinite(e.minHours) && e.minHours > 0 ? e.minHours : se.minHours, minSessions: typeof e?.minSessions === "number" && Number.isFinite(e.minSessions) && e.minSessions > 0 ? e.minSessions : se.minSessions };
}
function he() {
  if (tr() !== null) return false;
  if (kz()) return false;
  if (!Bp()) return false;
  if (uQ()) return false;
  return ddt();
}
function ge() {
  return false;
}
function wfs(e) {
  let r = 0, o = false, y = /* @__PURE__ */ new Set();
  Y.of(e).runner = async function(s, i) {
    let n = fe(), u = ge();
    if (!u && !he()) return;
    let A;
    try {
      A = await Rdt(void 0, s.toolUseContext.storageV5);
    } catch (l) {
      t(`[autoDream] readLastConsolidatedAt failed: ${d(l)}`);
      return;
    }
    let O = (Date.now() - A) / 36e5;
    if (!u && O < n.minHours) return;
    let z = Date.now() - r;
    if (!u && z < ce) {
      t(`[autoDream] scan throttle — time-gate passed but last scan was ${Math.round(z / 1e3)}s ago`);
      return;
    }
    r = Date.now();
    let f;
    try {
      f = await yhs(A, s.toolUseContext.storageV5);
    } catch (l) {
      t(`[autoDream] listSessionsTouchedSince failed: ${d(l)}`);
      return;
    }
    let ae = V();
    if (f = f.filter((l) => l !== ae), !u && f.length < n.minSessions) {
      t(`[autoDream] skip — ${f.length} sessions since last consolidation, need ${n.minSessions}`), a("tengu_auto_dream_skipped", { reason: S("sessions"), session_count: f.length, min_required: n.minSessions });
      return;
    }
    let P = Vhr(s.toolUseContext.getAppState().toolPermissionContext, eK());
    if (P !== void 0) {
      if (t(`[autoDream] skip — ${QOn(P)} would refuse memory writes`), a("tengu_auto_dream_skipped", { reason: S("permission_rule") }), i !== void 0) {
        let l = Ghr(e, P, ba());
        if (l !== void 0) i(Bt(l, "warning"));
      }
      return;
    }
    let D;
    if (u) D = A;
    else {
      try {
        D = await hhs(s.toolUseContext.storageV5);
      } catch (l) {
        t(`[autoDream] lock acquire failed: ${d(l)}`);
        return;
      }
      if (D === null) {
        a("tengu_auto_dream_skipped", { reason: S("lock") });
        return;
      }
    }
    let E = ba(), M = void 0, h = M === "unplaced" || M === "capped" ? void 0 : M;
    if (h === "newer" || h !== void 0 && "unreadable" in h) {
      if (!u) await hIt(D, s.toolUseContext.storageV5);
      if (h !== "newer") {
        if (t(`[autoDream] skipped: the memory items could not be read (cause: ${h.unreadable}); the warning above says why and what resumes consolidation`), a("tengu_auto_dream_skipped", { reason: S("items_unreadable") }), w !== null && i !== void 0 && !y.has(h.unreadable)) y.add(h.unreadable), i?.(Bt(await w.unreadableItemsNotice(h.unreadable, E), "warning"));
        return;
      }
      if (t("[autoDream] skip — newer item record"), a("tengu_auto_dream_skipped", { reason: S("record_newer") }), w !== null && i !== void 0 && !o) o = true, i?.(Bt(w.NEWER_RECORD_NOTICE, "warning"));
      return;
    }
    let F = gV();
    t(`[autoDream] firing — ${O.toFixed(1)}h since last, ${f.length} sessions to review`), a("tengu_auto_dream_fired", { hours_since: Math.round(O), sessions_since: f.length, team_memory_enabled: F });
    let { taskRegistry: x } = s.toolUseContext, v = new AbortController(), R = ee(x, { sessionsReviewing: f.length, priorMtime: D, abortController: v, storageV5: s.toolUseContext.storageV5 }), L = "fork";
    try {
      let l = eb(ke()), G = `

**Tool constraints for this run:** Shell access is restricted to read-only commands (\`ls\`, \`find\`, \`grep\`, \`cat\`, \`stat\`, \`wc\`, \`head\`, \`tail\`, and similar) plus deleting \`.md\` files inside the memory directory (outside protected subdirectories like \`.git\` or \`agents\`; \`rm\` takes no flags except \`-f\`). Anything else that writes, redirects to a file, or modifies state will be denied. Plan your exploration with this in mind.

Sessions since last consolidation (${f.length}):
${f.map((_) => `- ${_}`).join(`
`)}`, we = false, ne = Q(E, l, G, F, bXn(), false), ie = _e(R, x, E), H = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Set(), X = false, J = false, B = false, C;
      try {
        C = await nx({ promptMessages: [Oe({ content: ne })], cacheSafeParams: Y9(s), canUseTool: Khr(E, h !== void 0 ? w?.keptItemsOf(h) : void 0, { fork: "dream", onWriteAllowed: (_, U) => H.set(U, _) }), querySource: "auto_dream", forkLabel: "auto_dream", skipTranscript: true, overrides: { abortController: v }, onMessage: (_) => {
          if (ie(_), ye(_, j), _.type === "assistant") X = _.isApiErrorMessage === true;
        }, skipCacheWrite: qNt() }), J = true, B = !v.signal.aborted && !X;
      } finally {
        let _ = new Set([...H].filter(([b]) => !B || !j.has(b)).map(([, b]) => b)), U = new Set([...H].filter(([b]) => B && j.has(b)).map(([, b]) => b));
        if (w !== null && M === "capped") await w.deferCappedRunWrites({ memoryDir: E, dreamWrote: _, mayHaveWritten: U });
        if (w !== null && h !== void 0) {
          let b = await w.settleDreamItems({ memoryDir: E, before: h, dreamWrote: _, mayHaveWritten: U });
          if ((b.skipped || b.failed) && J && !v.signal.aborted && !u && await w.claimLockGiveBack(E)) await hIt(D, s.toolUseContext.storageV5);
        }
      }
      L = "completion", re(R, x);
      let T = s.toolUseContext.taskRegistry.get(R), me = q(T) ? T.filesTouched.length : 0;
      if (q(T) && T.filesTouched.length > 0) i?.({ ...$Vn(T.filesTouched), verb: "Improved" }), await JOn(s.toolUseContext, { source: "dream", summary: `consolidated ${T.filesTouched.length} ${I(T.filesTouched.length, "memory file")}`, paths: T.filesTouched });
      t(`[autoDream] completed — cache: read=${C.totalUsage.cache_read_input_tokens} created=${C.totalUsage.cache_creation_input_tokens}`), a("tengu_auto_dream_completed", { cache_read: C.totalUsage.cache_read_input_tokens, cache_created: C.totalUsage.cache_creation_input_tokens, output: C.totalUsage.output_tokens, sessions_reviewed: f.length, files_touched_count: me, team_memory_enabled: F, account_memory_line_rendered: false });
    } catch (l) {
      if (v.signal.aborted) {
        t("[autoDream] aborted by user");
        return;
      }
      if (t(`[autoDream] ${L} failed: ${d(l)}`), a("tengu_auto_dream_failed", { phase: c(L), error_class: j1(N(l)) }), L === "fork") oe(R, x), await hIt(D, s.toolUseContext.storageV5);
    }
  };
}
function ye(e, r) {
  if (e.type !== "user" || e.toolDenialKind !== void 0 || typeof e.message.content === "string") return;
  for (let o of e.message.content) if (o.type === "tool_result" && o.is_error === true) r.add(o.tool_use_id);
}
function _e(e, r, o) {
  return (y) => {
    if (y.type !== "assistant") return;
    let p = "", s = 0, i = [];
    for (let n of y.message.content) if (n.type === "text") p += n.text;
    else if (n.type === "tool_use") {
      if (s++, n.name === at || n.name === qt) {
        let u = n.input;
        if (typeof u.file_path === "string") i.push(u.file_path);
      } else if (Lg.includes(n.name)) {
        let u = n.input;
        if (typeof u.command === "string" && pe.test(u.command)) for (let A of u.command.matchAll(/"[^"]*\.md"|'[^']*\.md'|(?:\/|[A-Za-z]:[\\/])\S*\.md\b/g)) i.push(A[0].replace(/^["']|["']$/g, ""));
      }
    }
    te(e, { text: p.trim(), toolUseCount: s }, i.filter((n) => zPt(n, o)), r);
  };
}
async function Efs(e, r) {
  await Y.of(e.toolUseContext.session.host).runner?.(e, r);
}
export {
  Efs,
  bYt,
  ddt,
  wfs
};
