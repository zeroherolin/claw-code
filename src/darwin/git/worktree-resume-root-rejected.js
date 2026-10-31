// darwin/git/worktree-resume-root-rejected.js — Claude Code 2.1.310（darwin）模块 chunk-z0wzn5d5.js
import { Yw, Vt } from "../shared/chunk-3b9c376b.js";
import { L, Ei, nt, V, _b, ke, NI, Fc, aN, Rf, B3t, j3t, J, mfe, dcr } from "../context/not-admin-owned.js";
import { S, c, ce } from "../agents/third-party.js";
import { v, Kt } from "../telemetry/anthropic-workspace-id.js";
import { Yn, py, A_, gl, hl, Xw, bg, Vs, YK } from "../fs/node-modules.js";
import { i } from "../shared/environment.js";
import { imi, BM, ife, Im, DS, hh, An, t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Ud } from "../plugins/skills-dir.js";
import { KF } from "../shell/invalid-type.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { p } from "../telemetry/chunk-9d6962d2.js";
import { DI, Os } from "../fs/utf-8.8f8e.js";
import { b_ } from "../remote/local-agent.js";
import { ph } from "../permissions/classifier-transcript-too-long.js";
import { pe } from "../shared/async-hooks.5238.js";
import { Qb } from "../context/utf-8.js";
import { uv, b5, F8r } from "./utf-8.js";
import { edi, bu } from "../models/total-tokens-reminder.js";
import { ud, o4 } from "../settings/built-in.js";
import { _Le, Moe, Xr, Vzt, l_, gH, IVe, dvt, cb, Xe, Ft, wm, ZQ, Ny, _l, Y6t } from "../settings/global-config-and-gates.js";
import { zs } from "../shared/chunk-f98598c3.js";
import { br } from "../workflows/chunk-a1595c7e.js";
import { iDe } from "../permissions/frontmatter-grant-withheld.js";
import { I7, Zjn, ake, nMe, ZMs, e_, Xq, hO, Lrn, Rle, UA, UXe, pGn, fGn, ff, rNt, xMe, Lzn, BMe, Jf, Za, the, oJ, Yke, Xke, NWe, j6, W6, XN, ede, Bt } from "../core/conversation-engine.js";
import { rte } from "../shared/chunk-7f9e9b1d.js";
import { MIe, xwr, j9e, Vct, h1e } from "../shared/chunk-fb108757.js";
import { zd } from "../remote/chunk-8734517b.js";
import { oR, sR, wV } from "../context/tool-result-clearing-after-idle-server-report.js";
import { TDe } from "../models/model-capability-off-from-client-data.js";
import { i_e } from "../models/ccr-unsupported-default-mode-ignored.js";
import { Nf, Q2 } from "../agents/in-process-teammate.9720.js";
import { gE, vc } from "../artifacts/utf-8.js";
import { Sze } from "../fs/unadoptable-session-id.js";
import { Ude } from "../plugins/claudeai-plugins-sync-enabled.js";
import { bYn, fSt } from "../shared/chunk-4f9a38d5.js";
import { y8 } from "../agents/web-fetch.js";
import { ure } from "../telemetry/session-name-uniqueness.js";
import { LO } from "../context/envelope-pinned-id.js";
import { yx } from "../plugins/unsubscribe-pr-activity.js";
import { ojt } from "../telemetry/bridge-resume-respects-local-owner.js";
import { M8e } from "../agents/built-in.94ba.js";
import { Edt } from "../shared/chunk-cc785fae.js";
import { zgs, nEe } from "../shared/chunk-aa7dc48e.js";
import { MLn, Jct } from "../hooks/chunk-f1b1ba40.js";
import { zEe } from "../permissions/denied-by-server.js";
import { Lho, Nho } from "../fs/chunk-b64f6574.js";
import { pLe } from "../shared/chunk-922e3fb8.js";
import { Ot, rk, Fn } from "../models/claude-mythos-preview.js";
import { z } from "../shared/chunk-be29de51.js";
import { Ee } from "../shared/chunk-fee3c428.js";
function X5e(e) {
  if (!e || !MLn(e.hooks)) {
    dcr(void 0);
    return;
  }
  let r = !ud("hooks") || o4(e.source), o = ake(e);
  if (r && o) {
    let n = iDe(e) ? G(e.hooks, "personal") : Jct(e.source) ? G(e.hooks, "checkout") : e.hooks;
    pLe(e.hooks, e.source === "plugin" ? e.plugin : void 0), dcr(n);
    return;
  }
  if (r && !o) nMe(e, "mainThread");
  dcr(void 0);
}
function G(e, r) {
  let o = {};
  for (let n of Ud) {
    let s = e[n];
    if (s !== void 0) o[n] = s.map((d) => r === "personal" ? { ...d, personal: true } : { ...d, checkout: true });
  }
  return o;
}
import { dirname as ie, resolve as Pe, win32 as se } from "path";
import { realpathSync as ve, statSync as be } from "fs";
import { appendFile as tt, readdir as ot, rename as le, rmdir as me } from "fs/promises";
import { basename as K, dirname as it, join as D, relative as Y } from "path";
class q {
  filePath = null;
  key = void 0;
  timestamp = 0;
  recorder = null;
  failed = false;
  setFile(e, r, o) {
    this.filePath = e, this.key = o, this.timestamp = r;
  }
  setFilePath(e, r) {
    this.filePath = e, this.key = r;
  }
  setRecorder(e) {
    this.recorder = e;
  }
  markFailed() {
    this.failed = true;
  }
}
function fe(e, r, o) {
  return { namespace: "recording", projectKey: e, sessionId: r, stamp: String(o) };
}
var ge = new nt(() => new q());
async function yMn(e, r) {
  let o = ge.of(e), n = o.filePath;
  if (!n || o.timestamp === 0) return;
  let s = Qb(ke()), d = o.key, u = Q2(s);
  if (z() && r !== void 0 && d !== void 0 && u !== void 0) {
    if (o.failed) return;
    let y = V(), k = D(s, y, `${o.timestamp}.cast`);
    if (n === k) return;
    let b = fe(u, y, o.timestamp), w = Y(s, n), R = Y(s, k), A = async () => {
      if (o.failed) return;
      try {
        await he(r, d, b), o.setFilePath(k, b), t(`[asciicast] Renamed recording: ${w} → ${R}`);
      } catch {
        t(`[asciicast] Failed to rename recording from ${w} to ${R}`);
      }
    };
    await (o.recorder?.park(A) ?? A());
    return;
  }
  let m = D(s, `${V()}-${o.timestamp}.cast`);
  if (n === m) return;
  await o.recorder?.flush();
  let f = K(n), h = K(m);
  try {
    await le(n, m), o.setFilePath(m), t(`[asciicast] Renamed recording: ${f} → ${h}`);
  } catch {
    t(`[asciicast] Failed to rename recording from ${f} to ${h}`);
  }
}
async function he(e, r, o) {
  imi(await e.move(r, o)), await me(D(Nf(), r.projectKey, r.sessionId)).catch(() => {
  });
}
import { open as ye, readdir as Se, unlink as X } from "fs/promises";
import { join as Q } from "path";
var we = 200, Re = 64;
function F() {
  if (J() || Za()) return null;
  try {
    return Q(oR(), V(), Lho);
  } catch (e) {
    return t(`Image store unavailable: ${e}`, { level: "warn" }), null;
  }
}
function Wgs() {
  return F() !== null;
}
async function kyr() {
  let e = F();
  if (e === null) return 0;
  let r;
  try {
    r = await Se(e);
  } catch (n) {
    if (!Kt(n)) t(`Could not list stored images: ${n}`, { level: "warn" });
    return 0;
  }
  let o = 0;
  for (let n of r) {
    let s = Number(Nho.exec(n)?.[1]);
    if (Number.isSafeInteger(s) && s > o) o = s;
  }
  return o;
}
function Z(e) {
  if (!Number.isSafeInteger(e.id) || e.id < 0 || typeof e.content !== "string" || e.content === "") return null;
  let r = F();
  if (r === null) return null;
  let o = fSt(e.content.slice(0, Re));
  return Q(r, `${e.id}.${bYn[o]}`);
}
function rIe(e, r) {
  if (e.type !== "image") return null;
  let o = Z(e);
  if (o !== null) r((n) => O(n, e.id, o));
  return o;
}
async function oIe(e, r) {
  let o = await ee(e);
  if (o) r((n) => O(n, e.id, o));
  return o;
}
async function Ggs(e, r) {
  let o = /* @__PURE__ */ new Map();
  for (let [n, s] of Object.entries(e)) if (s.type === "image") {
    let d = await ee(s);
    if (d) o.set(Number(n), d);
  }
  if (o.size > 0) r((n) => {
    let s = n;
    for (let [d, u] of o) s = O(s, d, u);
    return s;
  });
  return o;
}
async function ee(e) {
  if (e.type !== "image") return null;
  try {
    let r = Z(e);
    if (r === null) return null;
    let o = await uv(r, [r], { createParents: true, leaf: "replace" }), n = DI(o.ioPath), s = false;
    try {
      let d = await ye(n, "wx", 384);
      s = true;
      try {
        await d.writeFile(e.content, { encoding: "base64" }), await d.datasync();
      } finally {
        await d.close();
      }
      await o.recheckBeforeWrite();
      try {
        await Os(n, o.ioPath);
      } catch (u) {
        if (v(u) !== "EEXIST") throw u;
        await o.recheckBeforeWrite(), await X(o.ioPath).catch(() => {
        }), await o.recheckBeforeWrite(), await Os(n, o.ioPath);
      }
      s = false;
    } finally {
      if (s) try {
        await o.recheckBeforeWrite(), await X(n);
      } catch {
      }
      await o.close();
    }
    return t(`Stored image ${e.id} to ${r}`), r;
  } catch (r) {
    return t(`Failed to store image: ${r}`), null;
  }
}
function O(e, r, o) {
  if (e.get(r) === o) return e;
  let n = new Map(e);
  if (!n.has(r)) while (n.size >= we) {
    let s = n.keys().next().value;
    if (s === void 0) break;
    n.delete(s);
  }
  return n.set(r, o), n;
}
var te = Ee({ recorded: null }, (e) => {
  e.recorded = null;
});
function Cyr({ sourceSessionId: e, transcriptPath: r }) {
  let o = Vt(e);
  te.recorded = o === null ? null : { liveSessionId: V(), source: { sessionId: o, transcriptPath: r ?? Jf(o) } };
}
function _Mn() {
  let { recorded: e } = te;
  return e !== null && e.liveSessionId === V() ? e.source : null;
}
function Ae(e) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o?.type !== "assistant") continue;
    let n = o.message.content.find((u) => u.type === "tool_use" && u.name === yx);
    if (!n || n.type !== "tool_use") continue;
    let s = n.input;
    if (s === null || typeof s !== "object") return [];
    let d = UXe().safeParse(s.todos);
    return d.success ? d.data : [];
  }
  return [];
}
function Zso(e) {
  if (typeof e.resume !== "string" || e.forkSession || e.hasSessionIdFlag) return false;
  let r = Vt(e.resume);
  if (!r) return false;
  return _b(Yw(r), "resume"), true;
}
function sIt(e, r, o, n) {
  try {
    xMe(e.messages ?? []);
  } catch (s) {
    l(s);
  }
  if (kyr().then(Lzn).catch(l), e.fileHistorySnapshots && e.fileHistorySnapshots.length > 0) Lrn(e.fileHistorySnapshots, (s) => {
    r((d) => ({ ...d, fileHistory: s }));
  });
  if (import.meta.require("../shared/restore-goal-from-transcript.js").restoreGoalFromTranscript(e.messages, r, o), !LO() && e.messages && e.messages.length > 0) {
    let s = Ae(e.messages);
    if (s.length > 0) {
      let d = V();
      r((u) => ({ ...u, todos: { ...u.todos, [d]: s } }));
    }
  }
}
function Te(e) {
  return;
}
function iIt(e, r) {
  if (!e && !r) return;
  return { name: e ?? "", color: r === "default" ? void 0 : r };
}
function tEe(e, r, o, n) {
  if (r) return { agentDefinition: r, agentType: void 0 };
  if (!e) return mfe(void 0), X5e(void 0), { agentDefinition: void 0, agentType: void 0 };
  let s = n?.sessionAgentDefinitions ? y8(n.sessionAgentDefinitions.activeAgents, e) : void 0, d = s ?? y8(o.activeAgents, e);
  if (s) t(`Resume: agent "${e}" restored from the session home set (${n?.sessionCwd ?? "unknown"})`);
  if (!d) {
    if (t(`Resumed session had agent "${e}" but it is no longer available. Using default behavior.`), e !== M8e.agentType) {
      if (p("session_resume", "agent_resolve_miss"), n?.onResolveMiss) {
        let u = ke(), m = n.sessionAgentDefinitions && n.sessionCwd && n.sessionCwd !== u ? `${n.sessionCwd} or ${u}` : u;
        n.onResolveMiss(An(`This session was running agent '${e}', which is no longer available (no agent by that name in ${m}). Continuing with the default tools and system prompt — the agent's tool restrictions no longer apply. To restore it, re-create the agent, or resume with an explicit --agent <name>.`));
      }
    }
    return mfe(void 0), X5e(void 0), { agentDefinition: void 0, agentType: void 0 };
  }
  if (mfe(d.agentType), X5e(d), !Fc() && d.model && d.model !== "inherit") {
    let u = Ft(d.model);
    if (cb(u) || Xr(u)) Rf(u);
    else t(`Agent model "${d.model}" is not in the availableModels allowlist; keeping the session model`, { level: "warn" });
  }
  return { agentDefinition: d, agentType: d.agentType };
}
async function DUe(e, r) {
  if (!e || e === ke()) return;
  let o = Pe(e);
  if (Yn(e) || Yn(o) || A_(e) || A_(o) || A_(se.normalize(e)) || bg(e) || bg(o) || gl(e)) {
    t(`Resume: refusing cross-host session home shape "${e}"`);
    return;
  }
  if (await ife(e)) {
    t(`Resume: refusing session home with unverifiable ancestry "${e}"`);
    return;
  }
  if (!Y6t(e)) {
    t(`Resume: not loading agents from session home "${e}" — workspace trust not persisted for it`);
    return;
  }
  try {
    return await UA(e, r);
  } catch {
    return;
  }
}
function eio(e) {
  if (!e.resumedAgentSetting || e.mainThreadAgentType || b_()) return { attempt: false, loud: false };
  if (e.hasStreamingInput) return { attempt: !e.explicitAgentFlag, loud: false };
  return { attempt: true, loud: true };
}
async function Me(e, r) {
  if (r || !e) return;
  let o = ph(e);
  if (o === void 0) return;
  if (o === "plan" || o === "bypassPermissions") return;
  if (o === "default") {
    let { isAutoModeFromFallback: n, setProvisionalStartupMode: s } = await import("../permissions/auto-mode-states.js");
    if (s(void 0), n()) return "default";
    return;
  }
  if (o === "auto") {
    let { isAutoStartWithheldForHipaaTaint: n } = await import("../permissions/auto-mode-states.js");
    if (n() || zs("hipaa")) return;
    let { isAutoModeGateEnabled: s } = await import("../permissions/abandon-pending-policy-verdict-resolution.js");
    if (!s()) return;
  }
  return o;
}
async function aIt({ storedPermissionMode: e, messages: r, forkSession: o, permissionModeSuppliedOnInvocation: n, lane: s }) {
  let d;
  try {
    ({ planModeOnInteractiveResume: d } = await import("../permissions/create-plan-mode-resume-outcome.js"));
  } catch (u) {
    l(u);
  }
  return (u) => {
    if (d === void 0) return;
    try {
      let m = u.startupModeDecidedByProactivityLevel !== void 0 && sR();
      return d(u, { storedPermissionMode: e, messages: r, forkSession: o, startupModePinned: n || m, lane: s });
    } catch (m) {
      l(m);
      return;
    }
  };
}
var _e = { unknown_family: "not a model this version of Claude Code recognizes", not_allowed: "not allowed by this account's model settings", retired: "retired" };
function wdt() {
  return Boolean(Fc() !== void 0 || i.ANTHROPIC_MODEL || i.ANTHROPIC_DEFAULT_FABLE_MODEL || i.ANTHROPIC_DEFAULT_OPUS_MODEL || i.ANTHROPIC_DEFAULT_SONNET_MODEL || i.ANTHROPIC_DEFAULT_HAIKU_MODEL || IVe() || !bu());
}
async function LUe(e, r, o, { scheduleTelemetry: n = (u) => u(), storageV5: s, credentials: d } = {}) {
  if (wdt()) return;
  let u = N(e, r), m = u.kind === "declined" && u.reason === "not_allowed" ? await zEe(u.model, s, d) : void 0;
  if (m !== void 0 && wdt()) return;
  let f = m === "overturned" ? N(e, r) : u;
  if (f.kind === "none") return;
  if (f.kind === "mode_dependent_setting") {
    n(() => a("tengu_resume_model_restore", { outcome: c("skipped_mode_dependent_setting"), is_eap: false }));
    return;
  }
  if (f.kind === "declined") n(() => a("tengu_resume_model_restore", { outcome: c("declined"), decline_reason: ce(f.reason), entitlement_reprobe: ce(m), is_eap: TDe(f.model) }));
  if (f.kind === "declined") {
    let h = r && Fn(r) || "the default model";
    o?.(`Session model ${f.model} could not be restored (${_e[f.reason]}) — using ${h} instead.`);
    return;
  }
  return f.model;
}
function tio(e, r) {
  let o = N(e, r);
  return o.kind === "ok" ? o.model : void 0;
}
function Ce(e, r) {
  if (e === "opusplan") return r.includes("opus") || r.includes("sonnet");
  if (e === "haiku") return r.includes("haiku") || r.includes("sonnet");
  return false;
}
function N(e, r) {
  let o = new Set(edi.map((d) => Xe(d))), n = r ? Ft(r) : void 0, s = n ? Fn(n) : void 0;
  for (let d = e.length - 1; d >= 0; d--) {
    let u = e[d];
    if (u?.type !== "assistant" || u.isMeta || typeof u.message?.model !== "string" || u.message.model === Ei) continue;
    let m = u.message.model, f = l_(), h = typeof f === "string" ? Ot(f) : f;
    if (gH(h) && !TDe(m) && Ce(h, Xe(m))) return { kind: "mode_dependent_setting" };
    let y = _Le(m), k = !(o.has(Xe(m)) || TDe(m) || y !== void 0 && Vzt(y) || Fn(m) === s) ? "unknown_family" : !cb(m) && !Xr(m) ? "not_allowed" : Moe(m) ? "retired" : void 0;
    if (k) return { kind: "declined", model: m, reason: k };
    let b = r && wm(r) || n !== void 0 && wm(n), w = b && (Fn(m) === s || r && Xe(Ft(Fn(r))) === Xe(m)), R = Zjn(e)?.modelId, A = R !== void 0 && wm(R) && Xe(Fn(R)) === Xe(m), T = b && n !== void 0 && rk(n, m) || R !== void 0 && wm(R) && rk(R, m);
    if ((w || A) && ZQ(m) || T && !dvt(m) && ZQ(m, Xe(m, { identity: true, overridesMap: {} }))) return { kind: "ok", model: m + "[1m]" };
    return { kind: "ok", model: m };
  }
  return { kind: "none" };
}
function ae(e) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o?.type === "system" && o.subtype === "model_refusal_fallback") return o;
  }
  return;
}
function Ie(e, r) {
  let o = ae(e);
  if (!o) return false;
  let n = Fn(o.fallbackModel), s = Fn(r);
  return n === s || Xe(n) === Xe(s);
}
function lIt(e) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o?.type === "system" && o.subtype === "model_refusal_fallback") o.neutralizedByFork = true;
  }
}
function De(e) {
  let r = ae(e);
  return r?.neutralizedByFork === true ? { fallbackModel: r.fallbackModel } : void 0;
}
function C(e, r) {
  a("tengu_resume_model_restore", { outcome: c(e), is_eap: TDe(r) });
}
function oe(e, r) {
  ojt(import("../cli/bootstrap-fetch-can-converge-slot.js").then((o) => o.fetchBootstrapData(e, r)));
}
function NUe(e, r, o, n, s) {
  if (!Ie(e, r)) return Rf(r), oe(n, s), C("restored", r), r;
  if (o) {
    a("tengu_refusal_fallback_resume_latch", { action: c("fork_skip_restore") }), C("skipped_fork_fallback", r);
    return;
  }
  let d = De(e);
  if (d && Fn(d.fallbackModel) === Fn(r)) {
    a("tengu_refusal_fallback_resume_latch", { action: c("fork_neutralized_skip") }), C("skipped_fork_neutralized", r);
    return;
  }
  return Rf(r), oe(n, s), j3t({ fallbackModel: r, previousOverride: void 0, previousAppStateModel: aN() ?? null, previousModelForSession: null }), C("restored", r), a("tengu_refusal_fallback_resume_latch", { action: c("model_latch_only") }), r;
}
function FUe(e, r) {
  if (r) return;
  let o = e.flatMap((n) => n?.type === "system" && n.subtype === "model_refusal_fallback" && (n.apiRefusalCategory === "cyber" || n.sawCyberRefusal === true) && n.neutralizedByFork !== true ? [n] : []);
  if (o.length > 0) B3t(o.find((n) => n.apiRefusalCategory === "cyber" && n.requestId != null)?.requestId ?? void 0), a("tengu_refusal_fallback_resume_latch", { action: c("header_rearmed") });
}
async function Fe(e, r, o, n, s) {
  if (!e) return n;
  return sIe(r, o, s);
}
async function sIe(e, r, o) {
  br().agentDefinitions.clear();
  let n = await UA(e, o);
  return Rle(n, [...n.allAgents, ...r]);
}
function re(e) {
  try {
    return ve(e);
  } catch {
    return e;
  }
}
function ne(e) {
  try {
    return be(e).isDirectory() ? "present" : "gone";
  } catch (r) {
    let o = v(r);
    return o === "ENOENT" || o === "ENOTDIR" ? "gone" : "inaccessible";
  }
}
var x = "The worktree binding could not be cleared because transcript saving is off";
function SMn(e, r) {
  if (e.reason === "pin-is-own-launch-tree") return `Error: ${e_(e.message)} The worktree binding is kept.
`;
  if (!e.poisoned) return `Error: could not verify worktree ${e_(e.worktreePath)} for this resume, so the resume was aborted rather than continuing without isolation. This is usually transient — the worktree binding is kept; re-run the command to retry.
`;
  let o = r?.bindingCleared === void 0 ? "" : r.bindingCleared ? " The worktree binding has been cleared; re-running will continue in the current directory without worktree isolation." : ` ${x} for this run, so the same command will be refused again until that is resolved; to continue without the worktree, re-run with --fork-session or start a new conversation.`;
  return `Error: cannot resume into worktree ${e_(e.worktreePath)}: ${e_(e.message)} This session was not started.${o}
`;
}
function nio(e, r) {
  let o = r.bindingCleared ? "The worktree binding has been cleared." : `${x} for this run; a later resume will re-check it.`;
  return `Notice: the worktree ${e_(e.worktreePath)} for this session no longer exists; continuing in the current directory without worktree isolation. ${o}
`;
}
function dIt(e) {
  let r = `${x}; a later --resume will re-check it.`;
  if (e.reason === "worktree-gone") return `Your worktree ${e_(e.worktreePath)} no longer exists, so this session is working in the current directory without worktree isolation. ${Za() ? r : "The worktree binding has been cleared."}`;
  if (e.reason === "pin-is-own-launch-tree") return `Could not re-enter your worktree ${e_(e.worktreePath)}: ${e_(e.message)} The worktree binding is kept.`;
  if (e.poisoned) {
    let o = Za() ? `You are working in the current directory without worktree isolation. ${r}` : "This session's worktree binding has been cleared; you are working in the current directory without worktree isolation.";
    return `Did not re-enter your worktree ${e_(e.worktreePath)}: ${e_(e.message)} ${o}`;
  }
  return `Could not verify your worktree ${e_(e.worktreePath)} this time, so this session is working in the current directory without worktree isolation. The worktree binding is kept and a later --resume will retry it. If this keeps happening, the worktree's git metadata may need repair.`;
}
var Oe = "Memory is still paused from";
function Tyr() {
  return;
}
var Ne = "Auto-memory is still off for this session";
function Ayr() {
  return;
}
function cIt(e) {
  for (let [r, o] of [[Tyr(), Oe], [Ayr(), Ne]]) {
    if (r === void 0) continue;
    let n = e.findLastIndex((s) => s.type === "system" && s.subtype === "informational" && typeof s.content === "string" && s.content.includes(o));
    if (n !== -1 && !e.slice(n + 1).some((s) => s.type === "user" || s.type === "assistant")) continue;
    e.push(Bt(r, "notice"));
  }
}
function B(e) {
  if (Vs(e) || A_(e) || A_(se.normalize(e))) return t("[sessionRestore] transcript path is a network/NT-namespace path — not chdir-ing", { level: "warn" }), true;
  return false;
}
function $Ue(e, r, o, n) {
  let s = Le(r, o, n);
  return e.record(s), s;
}
function Le(e, r, o) {
  let n = _l();
  if (n && o?.preserveBinding !== true) return XN(n), null;
  if (!e) {
    if (e === null) return a("tengu_worktree_resume_root_rejected", { reason: S("worktree-exited-resume"), poisoned: S("false") }), t("[worktree] resuming a session whose worktree record was cleared (exited or scrubbed): running without isolation"), null;
    if (!r || pe() === r) return null;
    if (B(r)) return null;
    if (BM(r)) return t("[worktree] resume: the recorded project path has a network spelling; staying put"), null;
    try {
      hh(r);
    } catch {
      return null;
    }
    if (ff(r), h1e(r, j9e(MIe))) NI(pe());
    return BMe(), I7("resume"), vc.cache.clear?.(), gE(o?.storageV5), b5(), F8r(), zd()?.refreshGitBranch?.(), null;
  }
  let s = o?.preserveBinding === true;
  if (B(e.worktreePath) || py(e.worktreePath) || hl(e.worktreePath) || Xw(e.worktreePath) || Im(DS, e.worktreePath, { surfaceNetworkRaw: true, unreadableAncestry: "unverified" }) !== void 0) {
    if (!s) XN(null);
    return a("tengu_worktree_resume_root_rejected", { reason: S("network-spelled-pin"), poisoned: S("true") }), { worktreePath: e.worktreePath, reason: "invalid-linked-worktree", message: "its recorded path has a network spelling, which can never be a local isolation worktree.", poisoned: true };
  }
  let d = ne(e.worktreePath);
  if (d === "gone") {
    if (!s) XN(null);
    return a("tengu_worktree_resume_root_rejected", { reason: S("worktree-gone"), poisoned: S("true") }), { worktreePath: e.worktreePath, reason: "worktree-gone", message: "the worktree directory no longer exists", poisoned: true };
  }
  if (d === "inaccessible") return t(`[worktree] could not examine ${e.worktreePath} on resume; keeping the binding`, { level: "error" }), a("tengu_worktree_resume_root_rejected", { reason: S("unverifiable"), poisoned: S("false") }), { worktreePath: e.worktreePath, reason: "unverifiable", message: "the worktree directory could not be examined right now", poisoned: false };
  let u = o?.liveLaunchDir ?? MIe, m = xwr(pe(), e.worktreePath), f = ZMs(e.worktreePath, hO(e.originalCwd), L([re(u), ...hO(u), re(MIe), ...hO(MIe)]), { declineSelfOwningPinUnderLiveRoot: true });
  if (!f.ok) {
    let h = f.reason !== "unverifiable" && f.reason !== "pin-is-own-launch-tree";
    if (t(`[worktree] declining to resume into ${e.worktreePath} (${f.reason}): ${f.message}`, { level: "error" }), a("tengu_worktree_resume_root_rejected", { reason: c(f.reason), poisoned: S(h ? "true" : "false") }), h) {
      if (!s) XN(null);
      if (m) {
        let y = ie(e.worktreePath), k = ne(y) === "present" ? y : e.originalCwd;
        if (xwr(k, e.worktreePath)) return { worktreePath: e.worktreePath, reason: f.reason, message: f.message, poisoned: h };
        try {
          hh(k), ff(k);
          let b = (T) => Xq(T, e.worktreePath) === "same", w = YK(e.worktreePath), R = w !== null ? [w] : [], A = [...hO(u), ...R].filter((T) => !b(T));
          if (h1e(k, A, { requireCovered: true })) NI(k);
          BMe(), I7("resume"), F8r(), vc.cache.clear?.(), gE(o?.storageV5), b5(), zd()?.refreshGitBranch?.();
        } catch {
        }
      }
    }
    return { worktreePath: e.worktreePath, reason: f.reason, message: f.message, poisoned: h };
  }
  try {
    hh(e.worktreePath);
  } catch (h) {
    let y = v(h);
    if (y === "ENOENT" || y === "ENOTDIR") {
      if (!s) XN(null);
      return a("tengu_worktree_resume_root_rejected", { reason: S("worktree-gone"), poisoned: S("true") }), { worktreePath: e.worktreePath, reason: "worktree-gone", message: "the worktree directory no longer exists", poisoned: true };
    }
    return a("tengu_worktree_resume_root_rejected", { reason: S("unverifiable"), poisoned: S("false") }), { worktreePath: e.worktreePath, reason: "unverifiable", message: "the worktree directory could not be entered right now", poisoned: false };
  }
  return ff(e.worktreePath), NI(pe()), rNt({ ...e, liveLaunchAnchor: u, originalChangeset: void 0 }), BMe(), I7("resume"), vc.cache.clear?.(), gE(o?.storageV5), b5(), zd()?.refreshGitBranch?.(), null;
}
function rio(e, r) {
  let o = _l();
  if (!o) return;
  if (rNt(null), BMe(), I7("resume"), o.worktreePath === e) {
    vc.cache.clear?.(), gE(r);
    return;
  }
  if (B(o.originalCwd)) return;
  if (BM(o.originalCwd)) {
    t("[worktree] exit: the recorded original cwd has a network spelling; staying put");
    return;
  }
  try {
    hh(o.originalCwd);
  } catch {
    return;
  }
  ff(o.originalCwd);
  let n = o.liveLaunchAnchor;
  if (n === void 0 || h1e(o.originalCwd, j9e(n, o.worktreePath), { requireCovered: true, coveredWitnesses: Vct(n, o.worktreePath), extraCoveredRoots: (() => {
    let s = YK(o.worktreePath);
    return s !== null ? [s] : [];
  })() })) NI(pe());
  vc.cache.clear?.(), gE(r), b5(), zd()?.refreshGitBranch?.();
}
async function bMn(e, r, o) {
  Edt(o.session.host);
  let n = o.modeApi?.matchSessionMode(e.mode);
  if (n) e.messages.push(Bt(n, "warning"));
  let s = zgs({ ...e, source: r.resumeSource ?? "file" }, (g) => e.messages.push(Bt(g, "warning"))), { adoptedSessionId: d, effectiveFork: u } = Sze(r.sessionIdOverride ?? e.sessionId, r.forkSession);
  if (d) _b(d, "resume", r.transcriptPath ? ie(r.transcriptPath) : null), await yMn(o.session, o.storageV5), await oJ();
  if (u) {
    if (await NWe(e, { stripWorktreeSession: true, stripRelocatedCwd: true, storageV5: o.storageV5 }), e.contentReplacements?.length) await the(e.contentReplacements, void 0, o.storageV5);
  } else j6(e, { storageV5: o.storageV5 });
  if (nEe(s.declined === true), cIt(e.messages), ede(e), !u) {
    let g = $Ue(rte.of(o.session.host), e.worktreeSession, void 0, { storageV5: o.storageV5 });
    if (g) e.messages.push(Bt(dIt(g), "warning"));
    if (z() && o.storageV5 !== void 0) await Xke(o.storageV5);
    else Yke();
  }
  let m = await DUe(e.projectPath, o.storageV5), { agentDefinition: f, agentType: h } = tEe(e.agentSetting, o.mainThreadAgentDefinition, o.agentDefinitions, { sessionAgentDefinitions: m, sessionCwd: e.projectPath, onResolveMiss: (g) => e.messages.push(Bt(g, "warning")) }), y = e.permissionMode, k = false;
  if (!o.permissionModeCliSet && ph(y) === "auto" && o.initialState.proactivityLevel === "ask" && !wV()) y = i_e("ask", { isAutoModeAvailable: false, isBypassPermissionsModeAvailable: false }, void 0), k = true, t(`[sessionRestore] stored mode 'auto' read as '${y}': proactivity 'ask' with levels off in this process`);
  let b = o.initialState.toolPermissionContext.startupModeDecidedByProactivityLevel !== void 0 && sR(), w = await Me(y, o.permissionModeCliSet || b);
  if (k) {
    let g = w ?? o.initialState.toolPermissionContext.mode;
    if (g !== "auto") e.messages.push(Bt(`Resumed in ${KF(g).toLowerCase()} mode instead of auto: this session is set to ask before each file edit, and auto mode alone would not. Press shift+tab to switch modes.`, "warning"));
  }
  let R = null;
  if (u) lIt(e.messages);
  let A = await LUe(e.messages, o.initialState.mainLoopModel, (g) => e.messages.push(Bt(g, "warning")), { storageV5: o.storageV5, credentials: o.credentials }), T = A ? NUe(e.messages, A, u, o.storageV5, o.credentials) : void 0;
  FUe(e.messages, u), uIt(e.messages, { fork: u, startup: true });
  let M;
  if (w) {
    let { transitionPermissionMode: g } = await import("../permissions/abandon-pending-policy-verdict-resolution.js"), E = o.initialState.toolPermissionContext;
    try {
      if (M = { ...g(E.mode, w, E), mode: w }, !E.proactivityBaseline?.fromRelaunchHandoff) M = { ...M, proactivityBaseline: { mode: w, fromRelaunchHandoff: false } };
    } catch (ue) {
      t(`[sessionRestore] transitionPermissionMode rejected restored mode '${w}': ${ue}`);
    }
  }
  M = (await aIt({ storedPermissionMode: y, messages: e.messages, forkSession: u, permissionModeSuppliedOnInvocation: o.permissionModeSuppliedOnInvocation, lane: "interactive" }))(M ?? o.initialState.toolPermissionContext) ?? M, W6(o.modeApi?.isCoordinatorMode() ? "coordinator" : "normal");
  let H = r.includeAttribution ? Te(e) : void 0, j = iIt(e.agentName, e.agentColor), I = o.initialState.standaloneAgentContext ? { ...j, ...o.initialState.standaloneAgentContext } : j;
  ure(I?.name, o.storageV5, { autoOnly: !e.customTitle && !o.initialState.standaloneAgentContext?.name });
  let de = await Fe(!!n, o.currentCwd, o.cliAgents, o.agentDefinitions, o.storageV5), W = o.initialState.initialMessage;
  if (i.CLAUDE_CODE_RESUME_INTERRUPTED_TURN && e.turnInterruptionState?.kind === "interrupted_prompt" && Ny(e.turnInterruptionState.message.origin)) t("[sessionRestore] Auto-resuming interrupted turn for bg crash-respawn"), pGn("repl_restore", e.turnInterruptionState.message, { tail: e.turnInterruptionState.tail }), fGn(e.messages, e.turnInterruptionState.message), W = { message: e.turnInterruptionState.message };
  let _ = o.initialState;
  Cyr({ sourceSessionId: r.sessionIdOverride ?? e.sessionId, transcriptPath: r.transcriptPath });
  let U = Ude();
  return import.meta.require("../shared/restore-goal-from-transcript.js").restoreGoalFromTranscript(e.messages, (g) => {
    _ = g(_);
  }, U), { messages: e.messages.filter((g) => !(g.type === "system" && (g.subtype === "bridge_status" || g.subtype === "cloud_session_status"))), sessionStartHooks: e.sessionStartHooks, fileHistorySnapshots: e.fileHistorySnapshots, contentReplacements: e.contentReplacements, agentName: e.agentName, agentColor: e.agentColor === "default" ? void 0 : e.agentColor, restoredAgentDef: f, initialState: { ..._, initialMessage: W, ...!u && e.bridgeSessionId && !(_.replBridgeEnabled && !_.replBridgeOutboundOnly) && { replBridgeEnabled: true, replBridgeOutboundOnly: false }, ...e.endedByModel ? { endedByModel: true } : {}, ...h && { agent: h }, ...R && { attentionBudget: R }, ...T && { mainLoopModel: T }, ...H && { attribution: H }, ...I && { standaloneAgentContext: I }, ...M && { toolPermissionContext: M }, agentDefinitions: de }, sessionHooks: U };
}
function uIt(e, r) {
}
export {
  $Ue,
  Ayr,
  Cyr,
  DUe,
  FUe,
  Ggs,
  LUe,
  NUe,
  SMn,
  Tyr,
  Wgs,
  X5e,
  Zso,
  _Mn,
  aIt,
  bMn,
  cIt,
  dIt,
  eio,
  iIt,
  kyr,
  lIt,
  nio,
  oIe,
  rIe,
  rio,
  sIe,
  sIt,
  tEe,
  tio,
  uIt,
  wdt,
  yMn
};
