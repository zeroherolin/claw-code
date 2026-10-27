// context/extract-memories-extraction.fm7d.js — Claude Code 2.1.310 模块 chunk-fm7dc6y8.js
import { T_ } from "../shared/chunk-9sbknd2z.js";
import { F, L, Ei, V, fv, $I, KK, WAt } from "./not-admin-owned.ersa.js";
import { c, ce } from "../agents/third-party.ydpb.js";
import { yk, Ye, Ve, N, d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { si } from "../shared/chunk-3kevgx4j.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { _, Wo, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Mr } from "../models/claude-3-5-sonnet.21mz.js";
import { I, Qa } from "../shared/chunk-j79dwkaq.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { g, m, p } from "../telemetry/chunk-wn8xtaqg.js";
import { tr } from "../shared/async-hooks.m2fg.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { i } from "../shared/environment.9a41.js";
import { ut } from "../shell/chunk-tjkwy3jp.js";
import { EBt } from "../fs/file-upload.g3fv.js";
import { $p } from "./chunk-ajwybcv5.js";
import { Vjt, bXn, qjt, uQ, gV, X2, Pa, Rze, XC } from "./org-memory-writes-setting-changed.w8x9.js";
import { wt, _S, P4, mH, zV, M4, Xv, uo, Tr, Nn, k, s3r, R4o, zvt, vsi, Znt, $ue, P4o, ksi, Bp, B4, trt, jrr, ba, eK, Fj, mZ } from "../settings/global-config-and-gates.27xj.js";
import { VL, ot } from "../fs/chunk-gzs70jxe.js";
import { MH, WCt } from "../permissions/classifier-transcript-too-long.8zvz.js";
import { dn } from "../mcp/chunk-ykcv164t.js";
import { uT } from "../settings/workflow-launch-exec.t4r2.js";
import { at, qt, Be, Tt } from "../mcp/allowed-warning.j2d4.js";
import { kYn } from "../api/anthropic-client.7pf8.js";
import { ur } from "../permissions/turn-abort.yvwf.js";
import { pjs, fjs, mjs, TMo, gjs, bJe, vln } from "./team-memory-sync.0s3j.js";
import { wd, Rt } from "./tool-result-clearing-after-idle-server-report.epan.js";
import { tj } from "../shell/tree-sitter-parse-abort.f8t3.js";
import { Of, Wje, fWe, WNt, Y9, nx, qNt, HD, Oe, Bt, $Vn } from "../core/conversation-engine.31gx.js";
import { Pd, yu, Bv, oo, qa } from "../permissions/bot-protected-tengu-atomic-magpie.zc9j.js";
import { li } from "../core/system-prompt-blocks.dpjp.js";
import { eU } from "../tasks/continued-in.f5qq.js";
import { fo, ks } from "../vendor/marked/projects-thread-reply-lead-killswitch.c5ve.js";
import { S_e } from "../shared/session-activity-parked-exceeds-refcount.8mxy.js";
import { Q_r } from "../shared/chunk-3fdmwcat.js";
import { Shs } from "../shell/run-in-background.swds.js";
import { Cs } from "../shared/chunk-pdcynnfk.js";
import { Ew, Nm, hu } from "./memory-write.r13z.js";
import { Iy } from "../shared/chunk-m4gj9wzd.js";
import { ki } from "../shared/chunk-zx7a5yyq.js";
import { Ia } from "../agents/chunk-a331t11a.js";
import { qe } from "../shared/allow-large.djgw.js";
async function JOn(e, r) {
  if (r.paths.length === 0) return;
  let n = [];
  for (let s of r.paths) try {
    let o = ut(s);
    n.push(o);
    let u = await EBt(e.readFileState, o, { requireReadBeforeWrite: true });
    if (u !== null) t(`[memdir] re-synced readFileState for ${s} after the background ${r.source} pass wrote it (${u === "changed" ? "content changed" : "mtime only, content identical"})`);
  } catch (o) {
    t(`[memdir] left ${_(s)} out of the background ${r.source} pass's change notice, could not resolve it: ${d(o)}`);
  }
  if (n.length === 0) return;
  e.enqueuePendingMemoryUpdate({ ...r, paths: L(n) });
}
import { basename as Nt, sep as Lt } from "path";
var st = /* @__PURE__ */ new WeakSet();
function QOn(e) {
  return `the ${e.ruleBehavior} rule "${dn(e.ruleValue)}"`;
}
function Ghr(e, r, n) {
  if (st.has(e)) return;
  st.add(e);
  let s = `${QOn(r)} (from ${uT(r.source)})`, o = r.ruleBehavior === "deny" ? `${s} blocks those writes` : `${s} needs your approval for each write, and background saving can't ask`;
  return `Claude isn't saving memories to ${n} in the background: ${o}. Saving resumes once that rule is removed or no longer covers that folder, and may then include what was skipped.`;
}
class it {
  extractor = null;
  drainer = async () => {
  };
  disarm = () => {
  };
  owedWithin = () => false;
  onPassEnded = null;
  savePlace = null;
  restoredPlace = null;
  restoredPlaceAt = null;
}
var re = new W(() => new it());
var ct = 2, or = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Thai}\p{Script=Lao}\p{Script=Khmer}\p{Script=Myanmar}\p{Script=Tibetan}]/gu, sr = /* @__PURE__ */ new Set(["?", "？", "؟"]), ir = /^[\s\p{P}\p{S}\p{M}]$/u;
function Me(e) {
  return F(e.split(/\s+/), Boolean);
}
function dt(e) {
  return e.match(or)?.length ?? 0;
}
function mt(e, r) {
  return Me(e) >= r || dt(e) >= r * ct;
}
function Te(e) {
  return Math.max(Me(e), Math.floor(dt(e) / ct));
}
function lt(e) {
  if (e < 3) return "0-2";
  if (e < 10) return "3-9";
  if (e < 40) return "10-39";
  return "40+";
}
function ft(e) {
  let r = [...e];
  for (let n = r.length - 1; n >= 0; n--) {
    let s = r[n];
    if (sr.has(s)) return true;
    if (!ir.test(s)) return false;
  }
  return false;
}
function We(e) {
  return e.type === "user" || e.type === "assistant";
}
function ht(e, r) {
  if (r === null || r === void 0) return F(e, We);
  let n = false, s = 0;
  for (let o of e) {
    if (!n) {
      if (o.uuid === r) n = true;
      continue;
    }
    if (We(o)) s++;
  }
  if (!n) return F(e, We);
  return s;
}
var _t = 3;
function yt(e, r) {
  let n = new Set(r.map((s) => s.uuid));
  return e.filter((s) => !n.has(s.uuid));
}
function Mt(e) {
  return e.some((r) => r.type === "attachment" && r.attachment.type === "max_turns_reached");
}
function kt(e) {
  return e.findLast((r) => r.type === "assistant")?.isApiErrorMessage === true;
}
function Ue(e, r, n) {
  let s = r === void 0, o = /* @__PURE__ */ new Set();
  for (let u of e) {
    if (!s) {
      if (u.uuid === r) s = true;
      continue;
    }
    if (u.type === "user") {
      let f = u.message.content;
      if (Array.isArray(f) && f.some((x) => x.type === "tool_result" && x.is_error !== true && o.has(x.tool_use_id))) return true;
      continue;
    }
    if (u.type !== "assistant") continue;
    let y = u.message.content;
    if (!Array.isArray(y)) continue;
    for (let f of y) {
      if (n && f.type === "tool_use" && zvt.has(f.name)) return true;
      if (f.type === "tool_use" && f.name === hu) {
        o.add(f.id);
        continue;
      }
      let x = He(f);
      if (x !== void 0 && Fj(x)) return true;
    }
  }
  return n && !s && Ue(e, void 0, true);
}
var pt = 3;
function gt(e) {
  if (e.type !== "user" || e.isMeta) return false;
  let r = e.message.content;
  if (typeof r === "string") return Me(r) >= pt;
  if (!Array.isArray(r)) return false;
  return r.some((n) => n.type === "text" && Me(n.text) >= pt);
}
function xt(e, r) {
  for (let n = e.length - 1; n >= 0; n--) {
    let s = e[n];
    if (s === void 0 || !Xv(s)) continue;
    if (s.type === "user") {
      if (!s.isMeta) return s.uuid;
    } else if (s.type === "attachment" && s.attachment.type === "queued_command" && !s.attachment.isMeta && s.attachment.source_uuid !== void 0) return s.attachment.source_uuid;
  }
  return r?.uuid;
}
function Et(e, r) {
  let n = r === void 0;
  for (let s of e) {
    if (!n) {
      if (s.uuid === r) n = true;
      continue;
    }
    if (gt(s)) return true;
  }
  if (!n) return e.some(gt);
  return false;
}
function ar(e, r) {
  if (r === void 0) return e;
  let n = e.findIndex((s) => s.uuid === r);
  return n === -1 ? e : e.slice(n + 1);
}
function le(e) {
  if (e.type === "attachment") {
    let { attachment: n } = e;
    return n.type === "queued_command" && !n.isMeta ? $e(n.prompt) : void 0;
  }
  if (e.type !== "user" || e.isMeta || e.isCompactSummary) return;
  let r = e.message.content;
  if (Array.isArray(r) && r.every((n) => n.type === "tool_result")) return;
  return $e(r);
}
function $e(e) {
  return typeof e === "string" ? e : e.filter((r) => r.type === "text").map((r) => r.text).join(`
`);
}
function Ne(e) {
  if (e.type !== "assistant") return;
  let r = e.message.content;
  return Array.isArray(r) ? $e(r) : void 0;
}
function Pt(e, r, n) {
  let o = e.flatMap((u, y) => {
    let f = le(u);
    return f === void 0 ? [] : [{ index: y, text: f }];
  }).at(-1);
  if (o === void 0) return false;
  return mt(De(e, n), r) || o.text.trim() !== "" && cr(e, o.index);
}
function De(e, r) {
  return e.flatMap((n) => le(n) ?? []).slice(-Math.max(r, 1)).join(`
`);
}
function cr(e, r) {
  for (let n = r - 1; n >= 0; n--) {
    let s = e[n];
    if (le(s) !== void 0) return false;
    let o = Ne(s);
    if (o !== void 0 && o.trim() !== "") return ft(o);
  }
  return false;
}
function bt(e, r) {
  let n = ar(e, r).flatMap((o) => {
    let u = le(o);
    if (u === void 0) return [];
    let y = o.type === "attachment" && o.attachment.type === "queued_command" ? o.attachment.origin : o.type === "user" ? o.origin : void 0;
    return [{ message: o, text: u, origin: y }];
  }), s = n.filter((o) => Xv(o.message));
  return { userTurns: n.length, ownWordsTurns: s.length, ownWordsChars: s.reduce((o, u) => o + u.text.length, 0), taskNotificationTurns: F(n, (o) => o.origin?.kind === "task-notification"), unstampedTurns: F(n, (o) => o.origin === void 0), proseWords: Te(n.map((o) => o.text).join(`
`)) };
}
function He(e) {
  if (e.type !== "tool_use" || e.name !== at && e.name !== qt) return;
  let r = e.input;
  if (typeof r === "object" && r !== null && "file_path" in r) {
    let n = r.file_path;
    return typeof n === "string" ? n : void 0;
  }
  return;
}
var dr = 64, At = 2e4, mr = 'Answer with JSON only: {"write_likely": true} or {"write_likely": false}.', St = `

`, vt = "…", lr = [{ fresh: true, user: true }, { fresh: true, user: false }, { fresh: false, user: true }, { fresh: false, user: false }];
function fr(e, r, n, s) {
  let o = r === void 0 ? -1 : e.findIndex((T) => T.uuid === r), u = [], y = 0;
  for (let T = e.length - 1; T >= 0; T--) {
    let v = e[T], M = v.type === "assistant" ? v.isApiErrorMessage || v.message.model === Ei ? void 0 : Ne(v) : pr(v) ? void 0 : le(v);
    if (M === void 0 || M.trim() === "") continue;
    let P = v.type !== "assistant";
    if (u.push({ user: P, fresh: T > o, body: M.trim() }), P && ++y >= n) break;
  }
  if (!u[0]?.fresh) return { text: "", userTurns: 0 };
  let f = /* @__PURE__ */ new Map(), x = s;
  for (let { fresh: T, user: v } of lr) for (let [M, P] of u.entries()) {
    if (P.fresh !== T || P.user !== v) continue;
    let U = v ? "User: " : "Assistant: ", R = (f.size > 0 ? St.length : 0) + U.length;
    if (R + P.body.length <= x) {
      f.set(M, U + P.body), x -= R + P.body.length;
      continue;
    }
    let H = x - R - vt.length;
    if (H > 0) f.set(M, U + vt + Qa(P.body, H));
    x = 0;
    break;
  }
  return { text: u.map((T, v) => f.get(v)).filter((T) => T !== void 0).reverse().join(St), userTurns: y };
}
async function Ot({ config: e, messages: r, sinceUuid: n, window: s, signal: o, credentials: u }) {
  let y = Date.now(), f = e.model ?? "", x = "", C = 0, T = (M, P) => {
    if (P !== void 0) p("ccr_memory_first_look", P);
    else if (M !== "empty") g("ccr_memory_first_look");
    return { verdict: M, error: P, model: f, durationMs: Date.now() - y, inputChars: x.length, userTurns: C };
  }, v = Cs(o, { timeoutMs: At, refTimer: true });
  try {
    let M = e.model ?? i.ANTHROPIC_SMALL_FAST_MODEL ?? mH();
    f = e.model ?? _S();
    let P = fr(r, n, s, e.maxInputChars);
    if (x = P.text, C = P.userTurns, x === "") return T("empty");
    if (!zV(f)) return t(`[extractMemories] first look: ${f} is not permitted by the organization's model policy; the pass is not skipped`), T("error", "policy");
    if (P4(M) !== M || P4(f) !== f) return t(`[extractMemories] first look: managed settings deny the first look's model (${M}, sent as ${f}); the pass is not skipped`), T("error", "managed_denied");
    let [U, R] = M4(f), H = fWe(r), Q = H.length > 0 ? WNt(H) : "", Y = await si(HD({ model: f, system: e.instruction, skipSystemPromptPrefix: true, messages: [{ role: "user", content: `${Q}<exchanges>
${x}
</exchanges>

${mr}` }], max_tokens: dr + R, thinking: U, output_format: { type: "json_schema", schema: { type: "object", properties: { write_likely: { type: "boolean" } }, required: ["write_likely"], additionalProperties: false } }, timeout: At, maxRetries: 0, signal: v.signal, forceAttributionHeader: true, querySource: "extract_memories_first_look", credentials: u }), v.signal, () => new Ye()), X = Y.content.find((ue) => ue.type === "text"), q = X?.type === "text" ? ot(VL(X.text), false) : null, se = typeof q === "object" && q !== null && "write_likely" in q ? q.write_likely : void 0;
    if (typeof se !== "boolean") return t(`[extractMemories] first look: the model did not answer {"write_likely": true|false} (stop reason ${Y.stop_reason}); the pass is not skipped`), T("error", "no_boolean");
    return T(se ? "yes" : "no");
  } catch (M) {
    return t(`[extractMemories] first look failed: ${d(M)}; the pass is not skipped`), T("error", M instanceof yk || v.signal.aborted && !o.aborted ? "timeout" : Ve(M) ? "aborted" : "api_error");
  } finally {
    v.cleanup();
  }
}
function pr(e) {
  let r = e.type === "attachment" && e.attachment.type === "queued_command" ? eU(e.attachment.origin, e.attachment.commandMode) : e.type === "user" ? e.origin : void 0;
  return r?.kind === "task-notification" && r.subkind !== "scheduled-trigger";
}
function Ct(e, r, n, s, o) {
  let u = wd(), y = u ? Be : Tt, f = u ? "ls/find/cat/stat/wc/head/tail and similar" : "Get-ChildItem/Get-Content/Select-Object -First/-Last and similar", x = u ? "rm" : "Remove-Item", C = r.length > 0 ? `

## Existing memory files

${r}

Check this list before writing — update an existing file rather than creating a duplicate.` : "", T = n ? "scope guidance, " : "", v = `Available tools: ${qe}, ${Tr}, ${uo}, read-only ${y} (${f}), and ${at}/${qt} for paths inside the memory directory only, and ${y} ${x} of .md files inside the memory directory only (outside protected subdirectories like .git or agents${u ? "; rm takes no flags except -f" : ""}). All other tools — MCP, Agent, write-capable ${y}, etc — will be denied.`, M = `You have a limited turn budget. ${at} requires a prior ${qe} of the same file, so the efficient strategy is: turn 1 — issue all ${qe} calls in parallel for every file you might update; turn 2 — issue all ${qt}/${at} calls in parallel. Do not interleave reads and writes across multiple turns.`;
  return [`You are now acting as the memory extraction subagent. Analyze the most recent ~${e} messages above and use them to update your persistent memory systems.`, "", v, "", M, "", `You MUST only use content from the last ~${e} messages to update your persistent memories. Do not waste any turns attempting to investigate or verify that content further — no grepping source files, no reading code to confirm a pattern exists, no git commands.` + C, "", "If nothing is worth saving, output only 'Nothing to save.' Do not explain why.", "", "If the user explicitly asks you to remember something, save it immediately as whichever type fits best. If they ask you to forget something, find and remove the relevant entry.", "", `Apply the memory types, ${T}what-not-to-save criteria, and frontmatter format from the Memory section of your system prompt — it is already in your context above.`, ...Vjt() ? ["", "Skip the project-skill upkeep step here: your writes are restricted to the memory directory, so record the correction as a feedback memory only."] : [], ...s ? ["", `The ${Ew} / ${Nm} / ${hu} tools are unavailable here, so skip anything the scope guidance marks as shared with the project — the main conversation saves those; never file them in the personal directory instead. Save only what belongs in your personal memory directory.`] : [], ...[]].join(`
`);
}
var ke = null, It = null, oe = null, zhr = "rm|remove-item|ri|del|erase", gr = new RegExp(`^(?:${zhr})$`, "i");
function G(e, r, n) {
  return t(`[autoMem] denied ${e.name} (${n}): ${r}`), a("tengu_auto_mem_tool_denied", { tool_name: Nn(e.name), reason: c(n) }), { behavior: "deny", message: r, decisionReason: { type: "other", reason: r } };
}
function hr(e, r) {
  let n = e.trim().match(/"[^"]*"|'[^']*'|\S+/g) ?? [];
  if (n.length < 2) return;
  if (!gr.test(n[0])) return;
  let s = [];
  for (let o = 1; o < n.length; o++) {
    let u = n[o];
    if (/^-(?:Literal)?Path$/i.test(u)) continue;
    if (u.startsWith("-")) return;
    let y = u.startsWith('"') && u.endsWith('"') || u.startsWith("'") && u.endsWith("'") ? u.slice(1, -1) : u;
    if (/[*?[\]$`(){}|;&<>"',]/.test(y)) return;
    if (!zPt(y, r)) return;
    s.push(y);
  }
  return s.length > 0 ? s : void 0;
}
var _r = /* @__PURE__ */ new Set([qe, Tr, uo, at, qt]), yr = { restored: "restored", none_saved: "none saved", not_in_transcript: "not restored: that message is no longer in the transcript" };
async function kr(e, r) {
  let n = await tj(e);
  if (n.kind !== "simple" || n.commands.length !== 1) return false;
  let s = n.commands[0];
  if (s === void 0 || s.argvSourceLiteral !== true || s.argv[0] !== "ls" || s.redirects.length > 0 || s.envVars.length > 0) return false;
  let o = (f) => f.replace(/[/\\]+$/, ""), u = new Set(Wo(r).map(o)), y = s.argv.slice(1).filter((f) => !/^-[laA1hF]+$/.test(f));
  return y.length > 0 && y.every((f) => {
    if (f.startsWith("-") || f.startsWith("~") || f !== f.trim() || f.split(/[/\\]/).includes("..") || /[*?[]/.test(f) || f.includes("\\")) return false;
    try {
      return Wo(ut(f)).every((x) => u.has(o(x)));
    } catch {
      return false;
    }
  });
}
function xr(e) {
  return e.replace(/['"`\\\u2018-\u201F]/g, "").includes("..");
}
function Ge(e, r) {
  if (e?.type === "subcommandResults") return [...e.reasons.values()].some((n) => Ge(n.decisionReason, r));
  return r === "rule" ? e?.type === "rule" && e.rule.ruleBehavior !== "allow" : e?.type === "safetyCheck" && e.circuitBreaker === "outsideReadsBlocked" || e?.type === "other" && e.reason === MH;
}
function Vhr(e, r) {
  try {
    for (let n of [qt, at]) {
      let s = oo(e, { name: n }) ?? qa(e, { name: n });
      if (s !== null) return s;
    }
    for (let n of Wo(r)) for (let s of ["deny", "ask"]) {
      let o = Pa(n, e, "edit", s);
      if (o !== null) return o;
    }
  } catch (n) {
    l(N(n));
  }
  return;
}
async function wr(e, r) {
  let n = await tj(e);
  if (n.kind !== "simple") return;
  if (n.commands.length !== 1) return;
  let s = n.commands[0];
  if (!s) return;
  if (s.argv[0] !== "rm") return;
  if (s.redirects.length > 0) return;
  if (s.envVars.length > 0) return;
  let o = [], u = false;
  for (let y = 1; y < s.argv.length; y++) {
    let f = s.argv[y];
    if (f === void 0) continue;
    if (!u) {
      if (f === "--") {
        u = true;
        continue;
      }
      if (f.startsWith("-")) {
        if (f === "-f" || f === "--force") continue;
        return;
      }
    }
    if (/[*?[]/.test(f)) return;
    if (!f.startsWith("/") || !zPt(f, r)) return;
    o.push(f);
  }
  return o.length > 0 ? o : void 0;
}
function zPt(e, r) {
  return e.endsWith(".md") && mZ(e, r);
}
function Khr(e, r, { fork: n = "dream", onWriteAllowed: s } = {}) {
  return async (o, u, y, f, x, C) => {
    if (B4()) return G(o, WCt, "memory_paused");
    if (o.mcpInfo) return G(o, "MCP tools are not available to the memory agent", "mcp_tool");
    if (C !== void 0 || y.hookAskFloor) return G(o, "a PreToolUse hook requires confirmation for this call, and the memory agent runs headless with no user to answer — the call is denied", "hook_ask");
    let T;
    if (o.name === Be || o.name === Tt) {
      let M = Shs("the memory agent", u);
      if (M.deniedFlag !== void 0) return G(o, M.message, "shell_flag");
      if (T = M.sanitizedInput, O() === "windows" && y.getAppState().toolPermissionContext.blockReadsOutsideWorkingDirectories === true && typeof u.command === "string" && xr(u.command)) return G(o, "On Windows with permissions.blockReadsOutsideWorkingDirectories on, the memory agent's shell commands may not contain '..' anywhere, even split by quotes or a backslash, because where it leads cannot be checked. Use absolute paths, and avoid '..' in patterns too.", "windows_dot_dot");
    }
    try {
      let M = import.meta.require("../permissions/agent-tool-pool-denied-message.jpa9.js"), { checkRuleBasedPermissions: P } = M, { carriesAskRuleIntent: U } = M, R = y.getAppState(), H = e.replace(/[/\\]+$/, ""), Q = R.toolPermissionContext.blockReadsOutsideWorkingDirectories === true && R.toolPermissionContext.restricted !== true && !qjt() && ![H, ...Wo(H)].some((ue) => jrr(ue.replace(/[/\\]+$/, ""))), Y = { ...y, toolUseId: x }, X = { ...Y, getAppState: () => ({ ...R, toolPermissionContext: { ...R.toolPermissionContext, additionalWorkingDirectories: new Map([...R.toolPermissionContext.additionalWorkingDirectories, [H, { path: H, source: "session" }]]) } }) }, q = await P(o, u, Q && _r.has(o.name) ? X : Y, { crashIsObjection: true }), se = q?.behavior === "ask" && O() !== "windows" && Q && o.name === Be && q.decisionReason?.type === "safetyCheck" && q.decisionReason.circuitBreaker === "outsideReadsBlocked" && !U(q) && typeof u.command === "string" && await kr(u.command, e) && await P(o, u, X, { crashIsObjection: true }) === null;
      if (q !== null && !se) return G(o, q.message ?? "a configured permission rule blocks this call for the memory agent", Ge(q.decisionReason, "rule") || q.behavior === "ask" && U(q) ? "permission_rule" : Ge(q.decisionReason, "read_block") ? "read_block" : "permission_check");
    } catch (M) {
      return l(N(M)), G(o, "the memory agent could not evaluate configured permission rules; failing closed", "rule_check_failed");
    }
    if (o.name === Iy) return { behavior: "allow", updatedInput: u };
    if (o.name === qe || o.name === Tr || o.name === uo) {
      let M = y.getAppState().toolPermissionContext, P = Rze(o, u, M);
      if (P) return G(o, P.message, "network_path");
      if (M.blockReadsOutsideWorkingDirectories === true) {
        let U = XC(o, u, M);
        if (U.behavior === "deny") {
          let R = o.getPath?.(u), H = Wo(e).map((Y) => Y.endsWith(Lt) ? Y : Y + Lt);
          if (!(R !== void 0 && !qjt() && Wo(R).every((Y) => H.some((X) => mZ(Y, X)))) || U.decisionReason.type !== "other" || U.decisionReason.reason !== MH) return G(o, U.message, "read_block");
        }
      }
      return { behavior: "allow", updatedInput: u };
    }
    if (o.name === Be || o.name === Tt) {
      let M = T ?? u, P = o.inputSchema.safeParse(u);
      if (P.success) {
        if (o.isReadOnly(P.data, y)) return { behavior: "allow", updatedInput: M };
        let H = P.data.command;
        if (typeof H === "string") {
          if ((o.name === Be ? await wr(H, e) : hr(H, e)) !== void 0) return { behavior: "allow", updatedInput: M };
        }
      }
      let U = o.name === Be;
      return G(o, `Only read-only shell commands and ${U ? "rm (no flags except -f)" : "Remove-Item"} of .md files under ${e} (not protected subdirectories like .git or agents) are permitted in this context (${U ? "ls, find, grep, cat, stat, wc, head, tail, and similar" : "Get-ChildItem, Get-Content, Select-Object -First/-Last, and similar"})`, "shell_not_allowed");
    }
    if ((o.name === at || o.name === qt) && "file_path" in u) {
      let M = u.file_path;
      if (typeof M === "string" && zPt(M, e)) return s?.(M, x), { behavior: "allow", updatedInput: u };
    }
    let v = wd() ? Be : Tt;
    return G(o, `only ${qe}, ${Tr}, ${uo}, read-only ${v}, and ${at}/${qt} within ${e} are allowed`, "tool_not_allowed");
  };
}
function Er(e, r) {
  return async (n, s, o) => {
    if ($I()) return G(n, WCt, "memory_paused");
    let u = o.getAppState().toolPermissionContext;
    if (Wje(u)) return r(), G(n, "tool calls are held in this session until the user writes; this background memory pass cannot run", "tools_held");
    if (n.name === ki || n.name === Iy) return { behavior: "allow", updatedInput: s };
    if (!$ue(P4o(o.options.mcpClients))) return G(n, "the session has no CCR memory server; this background memory pass cannot run", "no_memory_server");
    if ([...Pd(u), ...yu(u)].some((y) => Bv(u, n, y))) return G(n, `${n.name} is blocked by a permission rule for this session`, "permission_rule");
    if (!R4o.has(n.name)) return G(n, `this background memory pass may only call ${[...R4o].join(", ")}`, "tool_not_allowed");
    if (zvt.has(n.name) && KK() !== e) return r(), G(n, "a newer user turn has started; this background memory pass may no longer write", "newer_turn");
    return { behavior: "allow", updatedInput: s };
  };
}
function Dt(e) {
  let r = /* @__PURE__ */ new Set();
  for (let n of e) {
    if (n.type !== "user") continue;
    let s = n.message.content;
    if (!Array.isArray(s)) continue;
    for (let o of s) if (o.type === "tool_result" && o.is_error === true) r.add(o.tool_use_id);
  }
  return r;
}
function Ht(e, r) {
  let n = He(e);
  if (n === void 0) return;
  let s;
  try {
    s = ut(n);
  } catch {
    return;
  }
  return zPt(s, r) ? s : void 0;
}
function Pr(e, r) {
  let n = Dt(e), s = [];
  for (let o of e) {
    if (o.type !== "assistant") continue;
    let u = o.message.content;
    if (!Array.isArray(u)) continue;
    for (let y of u) {
      if (y.type === "tool_use" && n.has(y.id)) continue;
      let f = Ht(y, r);
      if (f !== void 0) s.push(f);
    }
  }
  return L(s);
}
function Ft(e) {
  let r = F(e, (n) => Nt(n) !== $p);
  return { source: "extract", summary: r > 0 ? `saved ${r} ${I(r, "memory", "memories")}` : "updated the memory index", paths: e };
}
function br(e, r) {
  let n = /* @__PURE__ */ new Map(), s = [];
  return { onMessage: (u) => {
    if (u.type === "assistant") {
      let f = u.message.content;
      if (!Array.isArray(f)) return;
      for (let x of f) {
        let C = Ht(x, r);
        if (x.type === "tool_use" && C !== void 0) n.set(x.id, C);
      }
      return;
    }
    if (u.type !== "user") return;
    let y = u.message.content;
    if (!Array.isArray(y)) return;
    for (let f of y) {
      if (f.type !== "tool_result") continue;
      let x = n.get(f.tool_use_id);
      if (x === void 0) continue;
      if (n.delete(f.tool_use_id), f.is_error === true) continue;
      s.push(x), EBt(e, x, { requireReadBeforeWrite: true });
    }
  }, completedWritePaths: () => L(s) };
}
function je(e) {
  let r = e.toolUseContext.queryTracking;
  return { overageInUse: r?.billedToUsageCredits ?? li().overageInUse === true, longContextBilled: r?.longContextBilled === true };
}
function Wt(e, r) {
  return r.overageInUse && kYn() ? e.whenOverage : "run";
}
function Joo(e) {
  if (i.CLAUDE_CODE_POST_TURN_MEMORY && Znt() === null) t("[extractMemories] CLAUDE_CODE_POST_TURN_MEMORY is set but CLAUDE_CODE_POST_TURN_MEMORY_CONFIG is missing or invalid; the pass is off"), p("ccr_memory_extract", "config_invalid");
  let r = /* @__PURE__ */ new Set(), n, s, o = 0;
  function u(h) {
    if (h) n = h, s = void 0, o = 0;
  }
  function y(h, E) {
    if (!h) {
      if (o++, o >= _t) {
        t(`[extractMemories] (mcp) stopped early ${o} passes in a row; the cursor moves on and these turns are not reviewed again`), u(E);
        return;
      }
    }
    s = V(), t(`[extractMemories] (mcp) ${h ? "writes refused after a newer prompt" : "the pass stopped early (an API error, the turn cap with nothing saved, or a throw)"}; the cursor stays and the next pass reviews these turns again`);
  }
  let f = false, x = false, C = 0, T = false, v, M, P, U, R;
  function H(h) {
    return r.add(h), h.finally(() => r.delete(h));
  }
  let Q = ke?.createLaptopExtractRunner(e, H);
  function Y() {
    let h = R;
    if (R = void 0, h?.timer !== void 0) clearTimeout(h.timer);
    return h;
  }
  function X(h, E, A = KK(), B = WAt(), K = je(E), D = true) {
    if (Y(), h.idleFlushSeconds === 0) return;
    R = { timer: D ? setTimeout(q, h.idleFlushSeconds * 1e3).unref() : void 0, dueAt: D ? performance.now() + h.idleFlushSeconds * 1e3 : 1 / 0, promptIndex: A, personPrompt: B, billing: K, context: E };
  }
  function q() {
    let h = Y();
    if (!h || x || S_e() || KK() !== h.promptIndex) return;
    H(Ae({ context: h.context, trigger: "idle_flush", promptIndex: h.promptIndex, personPrompt: h.personPrompt, billing: h.billing }));
  }
  function se(h) {
    try {
      re.of(e).onPassEnded?.(h);
    } catch (E) {
      l(N(E));
    }
  }
  function ue(h) {
    if (T) return;
    T = true;
    let { restoredPlace: E, restoredPlaceAt: A } = re.of(e);
    if (!E) return;
    let B = E.passAt !== null && (A ?? Date.now()) >= E.passAt, K = B ? E.tail : E.cursor;
    if (C = B ? 0 : E.turns, v = C, M = B, K !== null && h.some((b) => b.uuid === K)) n = K;
    let D = n !== void 0 ? "restored" : K === null ? "none_saved" : "not_in_transcript";
    P = c(D), t(`[extractMemories] (mcp) resumed from the previous worker: ${C} turn end(s) since its last pass${B ? " (the pass it had scheduled is counted as run)" : ""}; cursor ${yr[D]}`);
  }
  function ie(h, E) {
    let A = { turns: C, cursor: n ?? null, tail: h.at(-1)?.uuid ?? null, passAt: E };
    try {
      re.of(e).savePlace?.(A);
    } catch (B) {
      l(N(B));
    }
  }
  async function Ae({ context: h, appendSystemMessage: E, trigger: A, promptIndex: B = KK(), personPrompt: K = WAt(), billing: D = je(h) }) {
    let { messages: b } = h, w = Znt(), de = w?.carryAcrossRestarts === true && A === void 0;
    if (w?.carryAcrossRestarts) ue(b);
    let Z = ht(b, n);
    if (s !== void 0 && s !== V()) s = void 0, o = 0;
    if (s === void 0 && Ue(b, n, !!w)) {
      if (t("[extractMemories] skipping — conversation already wrote to memory in this range"), u(b.at(-1)?.uuid), de) ie(b, null);
      a("tengu_extract_memories_skipped_direct_write", { message_count: Z });
      return;
    }
    let ee = w ? bt(b, n) : void 0, Se = w?.proseGate === "chat", Ke = Se ? Math.max(w.reviewWindow, ee?.userTurns ?? 0) : 0, Gt = Se ? Pt(b, w.minProseWords, Ke) : Et(b, n), xe = w && ee ? lt(Se ? Te(De(b, Ke)) : ee.proseWords) : void 0;
    if (!Gt) {
      if (t("[extractMemories] skipping — not enough user prose"), u(b.at(-1)?.uuid), de) ie(b, null);
      a("tengu_extract_memories_skipped_no_prose", { message_count: Z, prose_gate: ce(w?.proseGate), prose_words_bucket: ce(xe) });
      return;
    }
    let ve = w?.everyNTurns ?? k("tengu_bramble_lintel", null) ?? 1, ze = Y9(h), pe = w ? Wt(w, D) : "run";
    if (A === void 0) {
      if (C++, C < ve) {
        if (w) {
          let S = C >= w.idleFlushMinTurns;
          if (X(w, h, B, K, D, S), de) ie(b, S && w.idleFlushSeconds > 0 && pe !== "skip" ? Date.now() + w.idleFlushSeconds * 1e3 : null);
        }
        return;
      }
    }
    let Je = C;
    if (C = 0, de) ie(b, Date.now());
    let { toolPermissionContext: Qe } = h.toolUseContext.getAppState(), Re = w ? void 0 : Vhr(Qe, eK());
    if (Re !== void 0) {
      if (t(`[extractMemories] skipping — ${QOn(Re)} would refuse memory writes`), a("tengu_extract_memories_skipped_permission_rule", { message_count: Z }), E !== void 0) {
        let S = Ghr(e, Re, ba());
        if (S !== void 0) E(Bt(S, "warning"));
      }
      return;
    }
    x = true;
    let we = Date.now(), Ce;
    try {
      if (w) {
        if (KK() !== B) {
          t("[extractMemories] skipping (mcp) — a newer turn started");
          return;
        }
        if (Wje(Qe)) {
          if (t("[extractMemories] skipping (mcp) — tool calls are held until a person writes"), de) ie(b, null);
          return;
        }
        if (pe === "skip") {
          if (s = V(), t("[extractMemories] skipping (mcp) — the turn was billed to Extra Usage and when_overage is 'skip'; these turns wait for the next pass"), a("tengu_extract_memories_skipped_overage", { message_count: Z, trigger: c(A ?? "cadence"), long_context_billed: D.longContextBilled, prose_words_bucket: ce(xe), own_words_turns: ee?.ownWordsTurns }), de) ie(b, null);
          return;
        }
        let J = w.firstLook === void 0 ? "off" : pe === "first_look" ? "enforce" : w.firstLook.mode, Fe = w.firstLook !== void 0 && J !== "off" ? Ot({ config: w.firstLook, messages: b, sinceUuid: n, window: w.reviewWindow, signal: h.toolUseContext.abortController.signal, credentials: h.toolUseContext.credentials }) : void 0;
        if (Fe !== void 0 && J === "enforce") {
          let j = await Fe;
          if (t(`[extractMemories] first look (enforce, a "no" skips the pass) answered ${j.verdict} after ${j.durationMs}ms`), KK() !== B) {
            C = Je, t("[extractMemories] skipping (mcp) — a newer turn started during the first look");
            return;
          }
          if (Wje(h.toolUseContext.getAppState().toolPermissionContext)) {
            t("[extractMemories] skipping (mcp) — tool calls were held during the first look");
            return;
          }
          if (j.verdict === "no" || j.verdict === "empty") {
            t(`[extractMemories] skipping (mcp) — the first look answered ${j.verdict}; these turns wait for the next pass`), a("tengu_extract_memories_skipped_first_look", { message_count: Z, trigger: c(A ?? "cadence"), overage_in_use: D.overageInUse, when_overage: c(pe), first_look_verdict: c(j.verdict), first_look_model: wt(j.model), first_look_ms: j.durationMs, first_look_input_chars: j.inputChars, first_look_user_turns: j.userTurns, prose_words_bucket: ce(xe), own_words_turns: ee?.ownWordsTurns });
            return;
          }
        }
        t(`[extractMemories] starting (mcp, ${A ?? "cadence"}) — ${Z} new messages`);
        let Pe = w.staleNote ? pjs(e) : void 0, tt = Pe ? TMo(Pe, ks(b), gjs) : "", rt = fjs(e), be = 0, Zt = Date.now(), _e = await nx({ promptMessages: [Oe({ content: (rt ?? w.instruction) + tt })], cacheSafeParams: ze, canUseTool: Er(B, () => {
          be++;
        }), querySource: "extract_memories", forkLabel: "extract_memories", overrides: { mcpRequestMeta: ksi({ citesEvent: xt(b, K) }) }, skipTranscript: true, maxTurns: w.maxTurns, skipCacheWrite: true }), er = Date.now() - Zt, te = await Fe;
        if (te !== void 0 && J === "shadow") t(`[extractMemories] first look (shadow, the pass ran regardless) answered ${te.verdict} after ${te.durationMs}ms`);
        let ae = yt(_e.messages, b);
        if (Pe) mjs(e, Pe, ae);
        let rr = Dt(ae), me = F(ae.flatMap((j) => j.type === "assistant" && Array.isArray(j.message.content) ? j.message.content : []), (j) => j.type === "tool_use" && zvt.has(j.name) && !rr.has(j.id)), nt = Mt(ae), ye = kt(ae) || me === 0 && nt, nr = ye && me === 0 ? o + 1 : 0;
        if (me > 0 || be === 0 && !ye) u(b.at(-1)?.uuid);
        else y(!ye, b.at(-1)?.uuid);
        a("tengu_extract_memories_extraction", { mode: c("mcp"), trigger: c(A ?? "cadence"), account_memory_line_rendered: false, every_n_turns: ve, input_tokens: _e.totalUsage.input_tokens, output_tokens: _e.totalUsage.output_tokens, cache_read_input_tokens: _e.totalUsage.cache_read_input_tokens, cache_creation_input_tokens: _e.totalUsage.cache_creation_input_tokens, message_count: Z, parent_context_tokens: Of(b), compacted_in_fork: ae.some(fo), turn_count: F(ae, (j) => j.type === "assistant"), written: me, superseded_writes: be, instruction_source: c(rt === void 0 ? "env" : "memory_context"), stale_note_rendered: tt !== "", review_unfinished: ye, unfinished_in_a_row: nr, reached_cap: nt, duration_ms: er, fork_model: wt(h.toolUseContext.options.mainLoopModel), turns_since_last_pass: Je, prose_gate: c(w.proseGate), prose_words_bucket: ce(xe), user_turns: ee?.userTurns, own_words_turns: ee?.ownWordsTurns, own_words_chars: ee?.ownWordsChars, task_notification_turns: ee?.taskNotificationTurns, unstamped_turns: ee?.unstampedTurns, overage_in_use: D.overageInUse, long_context_billed: D.longContextBilled, when_overage: c(pe), first_look_mode: c(J), first_look_verdict: ce(te?.verdict), first_look_error: ce(te?.error), first_look_model: wt(te?.model), first_look_ms: te?.durationMs, first_look_input_chars: te?.inputChars, first_look_user_turns: te?.userTurns, idle_flush_min_turns: w.idleFlushMinTurns, carry_across_restarts: w.carryAcrossRestarts, resumed_turns: v, resumed_pass_counted_run: M, resumed_cursor: P }), g("ccr_memory_extract"), se({ outcome: me > 0 ? "saved" : ye ? "unfinished" : be > 0 ? "writes_refused" : "nothing_to_save", trigger: A ?? "cadence", written: me, durationMs: Date.now() - we });
        return;
      }
      let S = ba();
      t(`[extractMemories] starting — ${Z} new messages, memoryDir=${S}`);
      let ge = bXn(), Le = gV() || ge, Vt = Khr(S, void 0, { fork: "extraction" }), Kt = vln(await bJe(S, ur().signal, h.toolUseContext.storageV5)), Xe = false, Ie = oe?.isPromoterExtractorOn() === true ? oe.typedTurnsInWindow(e, h.toolUseContext.session.id, b, n) : [], zt = Ct(Z, Kt, Le, ge, Xe) + (oe?.typedTurnsPromptBlock(Ie) ?? ""), Ee = oe !== null && Ie.length > 0 ? T_("extract_memories") : void 0, Jt = Ee === void 0 ? void 0 : oe?.registerExtractorFork(e, Ee, Ie);
      Ce = br(h.toolUseContext.readFileState, S);
      let z = await nx({ promptMessages: [Oe({ content: zt })], cacheSafeParams: ze, canUseTool: Vt, querySource: "extract_memories", forkLabel: "extract_memories", ...Ee !== void 0 && { overrides: { agentId: Ee } }, skipTranscript: true, maxTurns: 5, skipCacheWrite: qNt(), onMessage: Ce.onMessage }).finally(() => Jt?.());
      u(b.at(-1)?.uuid);
      let ne = Pr(z.messages, S), Qt = F(z.messages, (J) => J.type === "assistant"), Ze = z.totalUsage.input_tokens + z.totalUsage.cache_creation_input_tokens + z.totalUsage.cache_read_input_tokens, Xt = Ze > 0 ? (z.totalUsage.cache_read_input_tokens / Ze * 100).toFixed(1) : "0.0";
      if (t(`[extractMemories] finished — ${ne.length} files written, cache: read=${z.totalUsage.cache_read_input_tokens} create=${z.totalUsage.cache_creation_input_tokens} input=${z.totalUsage.input_tokens} (${Xt}% hit)`), ne.length > 0) t(`[extractMemories] memories saved: ${ne.join(", ")}`);
      else t("[extractMemories] no memories saved this run");
      let he = ne.filter((J) => Nt(J) !== $p), et = F(he, X2);
      if (a("tengu_extract_memories_extraction", { mode: c("file"), input_tokens: z.totalUsage.input_tokens, output_tokens: z.totalUsage.output_tokens, cache_read_input_tokens: z.totalUsage.cache_read_input_tokens, cache_creation_input_tokens: z.totalUsage.cache_creation_input_tokens, message_count: Z, parent_context_tokens: Of(b), compacted_in_fork: z.messages.some(fo), turn_count: Qt, files_written: ne.length, memories_saved: he.length, team_memories_saved: et, account_memory_line_rendered: Xe, duration_ms: Date.now() - we }), t(`[extractMemories] writtenPaths=${ne.length} memoryPaths=${he.length} appendSystemMessage defined=${E != null}`), he.length > 0) {
        let J = $Vn(he);
        J.teamCount = et, E?.(J);
      }
      if (ne.length > 0) await JOn(h.toolUseContext, Ft(ne));
      g("memory_extract");
    } catch (S) {
      if (t(`[extractMemories] error: ${S}`), a("tengu_extract_memories_error", { duration_ms: Date.now() - we, mode: c(w ? "mcp" : "file") }), m(w ? "ccr_memory_extract" : "memory_extract", "agent_error"), w) se({ outcome: "failed", trigger: A ?? "cadence", written: 0, durationMs: Date.now() - we }), y(false, b.at(-1)?.uuid);
      let ge = Ce?.completedWritePaths() ?? [];
      if (ge.length > 0) try {
        await JOn(h.toolUseContext, Ft(ge));
      } catch (Le) {
        t(`[extractMemories] could not queue the notice for writes that landed before the error: ${d(Le)}`);
      }
    } finally {
      x = false;
      let S = U;
      if (U = void 0, S && ve <= 1) t("[extractMemories] running trailing extraction for stashed context"), await Ae({ context: S.context, appendSystemMessage: S.appendSystemMessage, trigger: "trailing", promptIndex: S.promptIndex, personPrompt: S.personPrompt, billing: S.billing });
      else if (S && w) X(w, S.context, S.promptIndex, S.personPrompt, S.billing);
    }
  }
  async function jt(h, E) {
    if (h.toolUseContext.agentId) return;
    let A = Q?.onTurnEnd(h, E);
    try {
      if (trt() || $t()) await Yt(h, E);
    } finally {
      await A;
    }
  }
  async function Yt(h, E) {
    Y();
    let A = Znt(), B = A !== null, K = (D) => {
      if (A?.carryAcrossRestarts) ue(h.messages), ie(h.messages, D);
    };
    if (B && ($I() || Mr() || fv())) {
      K(null);
      return;
    }
    if (B && !($ue(P4o(h.toolUseContext.options.mcpClients)) && h.toolUseContext.options.tools.some((D) => Rt(D, s3r)))) {
      t("[extractMemories] skipping (mcp) — CCR memory server not mounted"), K(null);
      return;
    }
    if (B && Ia() && Q_r(h.toolUseContext.options.tools.filter((D) => Rt(D, s3r))).length === 0) {
      t("[extractMemories] skipping (mcp) — coordinator mode: the write tool is held on the memory server's word alone"), K(null);
      return;
    }
    if (!B && !k("tengu_passport_quail", false) && !$t()) return;
    if (!B && !Bp()) {
      if (B4()) n = h.messages.at(-1)?.uuid ?? n;
      return;
    }
    if (!B && uQ()) return;
    if (tr() !== null) return;
    if (x) {
      t("[extractMemories] extraction in progress — stashing for trailing run"), a("tengu_extract_memories_coalesced", {});
      let D = je(h);
      if (U = { context: h, appendSystemMessage: E, promptIndex: KK(), personPrompt: WAt(), billing: D }, A) K((A.everyNTurns <= 1 || A.idleFlushSeconds > 0) && Wt(A, D) !== "skip" ? Date.now() + A.idleFlushSeconds * 1e3 : null);
      return;
    }
    await Ae({ context: h, appendSystemMessage: E });
  }
  let fe = re.of(e);
  fe.extractor = (h, E) => H(jt(h, E)), fe.drainer = async (h = 6e4) => {
    let E = Date.now() + h;
    q(), Q?.disarmIdleFlush();
    while (r.size > 0 && Date.now() < E) await Promise.race([Promise.all(r).catch(() => {
    }), new Promise((A) => setTimeout(A, E - Date.now()).unref())]), q();
  }, fe.disarm = () => {
    fe.extractor = null, U = void 0, Y(), Q?.disarmIdleFlush();
  }, fe.owedWithin = (h) => r.size > 0 || R?.timer !== void 0 && R.promptIndex === KK() && R.dueAt - performance.now() <= h;
}
function $t() {
  return oe !== null && oe.EXTRACTOR_RUNS_FOR_PROMOTER && oe.isPromoterExtractorOn();
}
function Wki(e) {
  return ke !== null && ke.isLaptopExtractDispatched(e);
}
function Gki(e) {
  return ke !== null && ke.isLaptopExtractSync(e);
}
async function zki(e, r) {
  await re.of(e.toolUseContext.session.host).extractor?.(e, r);
}
async function Vki(e, r) {
  await re.of(e).drainer(r);
}
function Kki(e, r) {
  let n = re.of(e);
  n.restoredPlace = vsi(r), n.restoredPlaceAt = Date.now();
}
function qki(e, r) {
  re.of(e).savePlace = r;
}
export {
  Ghr,
  Gki,
  JOn,
  Joo,
  Khr,
  Kki,
  QOn,
  Vhr,
  Vki,
  Wki,
  qki,
  zPt,
  zhr,
  zki
};
