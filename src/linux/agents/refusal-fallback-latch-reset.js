// linux/agents/refusal-fallback-latch-reset.js — Claude Code 2.1.310（linux）模块 chunk-bwt94x0y.js
import { b, c } from "./third-party.js";
import { R, E, yh } from "../telemetry/anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { ml, gk, Fa, gl, lpe, kAn, zs, wA, QH, Vp, zM } from "../fs/node-modules.js";
import { Wg } from "../plugins/skills-dir.js";
import { _, te, Gy, LM, Im, Db, pW, t } from "../fs/gitlab-runner-authentication-token.js";
import { xq } from "../shared/chunk-d2c47492.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Br } from "../shared/chunk-3b9c376b.js";
import { F, tt, Eu, Rp, SW, Om, Fxe, UYt, ZTn, TX } from "../context/not-admin-owned.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { r2 } from "../terminal/chunk-3ca478a4.js";
import { Ha, Yo, ZO, eM } from "../settings/global-config-and-gates.js";
import { r8r, Q9, cE } from "../git/utf-8.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { f } from "../telemetry/chunk-9d6962d2.js";
import { $s } from "../shared/chunk-4563156b.js";
import { vq, Os, Dn } from "../fs/utf-8.8f8e.js";
import { _r, We } from "../plugins/chunk-0a4c51cf.js";
import { ot } from "../fs/chunk-86be9585.js";
import { ZQ } from "../api/anthropic-client.js";
import { abe } from "../fs/chunk-b6c2193e.js";
import { Nl } from "../permissions/turn-abort.js";
import { Wt, FVt, sE, pg } from "../shared/chunk-dda594a8.js";
import { eHe } from "../fs/utf-8.0ed0.js";
import { gx } from "../context/kairos-cron-durable.js";
import { ole, EP, pp, qHs, Ru } from "../core/conversation-engine.js";
import { Np, WG, yet, $m } from "./in-process-teammate.9720.js";
import { Um, tR } from "../context/tool-result-clearing-after-idle-server-report.js";
import { Bk, pCe, Z } from "../artifacts/same-account.js";
import { Di } from "../context/chunk-a8653d40.js";
import { zK } from "../context/team-memory-sync.js";
import { fLr, Tn } from "../git/bridge-child-tool-diff.js";
import { _o } from "../telemetry/bg-roster-parse-failed.js";
import { W7e } from "../workflows/workflow-subagent.js";
import { vIe } from "../workflows/local-workflow.d406.js";
import { ZB, ime, ES } from "../tasks/artifact-changed.js";
import { M3e } from "../artifacts/artifact-comment-monitor.js";
import { T8t, Plt } from "../telemetry/dead-probe-adopt-ticks-token.js";
import { SIe, JB } from "../mcp/monitor-ws.js";
import { BW } from "../workflows/chunk-89ff2d95.js";
import { Bct, sBe, AQt, jct } from "../shared/chunk-5a5434c5.js";
import { Gct, _wr, CQt } from "../vendor/marked/absent-but-marked.js";
import { zL } from "../shared/chunk-9d4f4f95.js";
import { Mn } from "../shared/ccd-session-mgmt.js";
import { fr, ge, bn, Go, pc, lr, Tt, Tp, qd, Twi } from "../vendor/zod/invalid-return-type.js";
import { vt } from "../telemetry/chunk-a27d4004.js";
import { z } from "../shared/chunk-be29de51.js";
import { createHash as Ue, randomBytes as _e } from "crypto";
import { constants as H } from "fs";
import { copyFile as be, link as Te, mkdir as ue, readdir as Be, readFile as He, realpath as D, rm as Ve, rmdir as ze, stat as ve, symlink as Pe, unlink as N, lstat as x, readlink as Ee, open as ee } from "fs/promises";
import { basename as Y, dirname as U, isAbsolute as ne, join as j, relative as Re, sep as le } from "path";
var Clt = 12e4, rgi = 6e4, gno = 4e3, Ke = 250, Ymr = /^[\w-]+$/, Kxt = 256, QPn = 128, Ge = 16777216;
function ae(e) {
  let n = () => [...e(), ...[]], o = (r) => {
    let s = Fa(r) ? lpe(r) : null;
    return s === null ? null : kAn(s);
  };
  return ge().transform((r, s) => {
    let d = (A) => (s.addIssue({ code: fr.custom, message: A }), Twi), i, u = () => {
      if (i === void 0) {
        let A = n(), m = A.map(Vp).filter((w) => w !== null);
        i = { allowed: m, anchor: [...A, ...m] };
      }
      return i;
    };
    if (QH(r)) return d(`adopt path is remote UNC: ${r}`);
    let g = wA(r);
    if (gk(g) || zM(g) || g !== r && /[. ](?:[\\/]|$)/.test(g)) return d(`adopt path is a Windows device-namespace spelling (\\\\?\\, \\\\.\\ or \\??\\) other than a plain \\\\?\\<drive>:\\ path: ${r}`);
    if (r = g, !ne(r) || ml(r)) return d(`adopt path is not an absolute, dot-free spelling: ${r}`);
    let k = o(r), h = k !== null && k.startsWith("/net/") ? u().anchor.filter((A) => o(A) === k) : [];
    if (k !== null && h.length === 0) return d(k.startsWith("/net/") ? `adopt path is on an automount host (or map) none of the allowed roots live on: ${r}` : `adopt path is under the macOS /Network/Servers automount directory, refused regardless of the allowed roots: ${r}`);
    let S = Im(Db, r, h.length > 0 ? { anchors: h, unreadableAncestry: "unverified", surfaceNetworkRaw: true } : void 0);
    if (S === Gy) return d(`adopt path runs through a directory that could not be examined or a symlink chain too long to follow: ${r}`);
    if (S !== void 0) return d(`adopt path traverses symlink/junction to remote UNC: ${S}`);
    let y = Vp(r);
    if (y === null) return d(`adopt path unresolvable: ${r}`);
    let T = u().allowed;
    if (T.length === 0) return d("adopt path roots unresolvable");
    if (!T.some((A) => {
      let m = Re(A, y);
      return m === "" || !m.startsWith("..") && !ne(m);
    })) return d(`adopt path outside allowed roots: ${y}`);
    return y;
  });
}
function Xe() {
  return [tR()];
}
function re() {
  return ge().max(Kxt).regex(Ymr);
}
function Ie(e) {
  return Tt({ taskId: re(), pid: bn().int().positive(), procStart: ge().optional(), startTimeTicks: bn().int().optional(), command: ge().transform((n) => EP(n) ?? ""), description: ge().transform((n) => EP(n) ?? ""), outputPath: ae(e), lastReportedTotalLines: bn().int(), toolUseId: pc().transform(zL).optional(), kind: qd(["bash", "monitor"]).optional(), agentId: re().optional() });
}
var Ye = p(() => Ie(Xe)), he = 1e5, Je = p(() => Tt({ id: ge().max(Kxt), cron: ge(), prompt: ge(), createdAt: bn(), recurring: Go().optional(), agentId: ge().max(Kxt).optional(), plugin: pc().optional(), kind: Tp("loop").optional(), scheduledFor: bn().optional(), reason: ge().transform((e) => EP(e)).optional(), keepalive: Tp(true).optional() })), Qe = p(() => Tt({ taskId: re(), workflowRunId: ge().max(QPn).regex(W7e), scriptPath: ge(), scriptSha256: ge().regex(/^[0-9a-f]{64}$/).optional(), argsJson: ge().optional(), description: ge().transform((e) => EP(e) ?? ""), startTime: bn().optional(), withholdScriptFromSdkEvents: Go().optional(), transcriptDir: ae(() => [Np()]) })), Ze = p(() => Tt({ agentId: re(), agentType: ge().optional(), description: ge().transform((e) => EP(e)).optional(), toolUseId: pc().transform(zL).optional(), spawnDepth: bn().int().optional(), startTime: bn().optional(), transcriptPath: ae(() => [Np()]).optional(), parentAgentId: re().optional(), forkedSkillName: ge().min(1).max(256).optional() })), qe = p(() => Tt({ slug: ge().uuid(), title: ge().min(1).max(256).optional(), writtenAtMs: bn().finite().optional(), unattendedReplies: bn().int().min(0).max(jct).optional() }));
function Le(e = Ye()) {
  return Tt({ writtenAtMs: bn(), origin: qd(["background", "exit"]).optional(), shells: lr(e), cron: lr(Je()), loopWakeFires: bn().int().nonnegative().optional(), agents: lr(Ze()).optional(), workflows: lr(Qe()).optional(), frameLive: lr(qe()).optional(), prefill: Tt({ text: ge(), boundaryUuid: ge().max(Kxt).optional() }).optional() });
}
var Fe = p(() => Le());
function Oe(e) {
  let n = Array.isArray(e) ? e : [e];
  return Le(Ie(() => [tR(), ...n]));
}
var de = 67108864;
async function Xmr(e, n) {
  let o = await e.shellCommand?.detach?.();
  if (o === void 0) return null;
  let r = e.shellCommand.taskOutput.path, s = n?.rerootOutputsTo;
  if (s !== void 0) {
    let d = async (u) => {
      t(`[adopt] dropping shell ${e.id} from the handoff (${u})`, { level: "error" });
      try {
        await e.shellCommand?.kill?.();
      } catch {
      }
      return null;
    }, i = false;
    try {
      if (zs(r) || gl(r)) throw Error("network-spelled output path");
      let u = Im(Db, r);
      if (u === Gy) throw Error("output path has a symlink chain too long to vet");
      if (u !== void 0) throw Error("output path traverses a junction to remote UNC");
      if ((await x(r)).isSymbolicLink()) {
        let y = await Ee(r);
        if (zs(y) || gl(y)) throw Error("network-spelled symlink target");
        let T = ne(y) ? y : j(U(r), y);
        if (zs(T) || gl(T)) throw Error("network-spelled symlink hop");
        let v = Im(Db, T);
        if (v === Gy) throw Error("symlink target has a symlink chain too long to vet");
        if (v !== void 0) throw Error("symlink target traverses a junction to remote UNC");
        if ((await x(T)).isSymbolicLink()) throw Error("multi-hop symlink chain");
      }
      let k = await D(r), h = await x(k);
      i = true;
      let S = await D(s).catch(() => s);
      if (!k.startsWith(S + le)) {
        if (!(await Promise.all([Um(), ...[]].map((w) => D(w).catch(() => null)))).filter((w) => w !== null).some((w) => k.startsWith(w + le))) return await d("its output resolves outside the task-output tree");
        let v = j(s, "rerooted", `${e.id}.output`), A;
        try {
          A = await cE(v, [v], { createParents: true, leaf: "replace" });
        } catch {
          return await d("reroot directory not trustworthy");
        }
        let m = A.ioPath;
        try {
          if (!h.isFile()) return await d("gate target is not a regular file");
          if (h.nlink !== 1) return await d("gate target has another name");
          let w = await ee(k, O() === "windows" ? "r" : H.O_RDONLY | (H.O_NONBLOCK ?? 0) | $s);
          try {
            let P = await w.stat();
            if (!P.isFile() || P.nlink !== 1 || P.dev !== h.dev || P.ino !== h.ino) return await d("handle identity mismatch");
            {
              if (await A.recheckBeforeWrite(), await N(m).catch(() => {
              }), P.size > de) return await d("over-cap escaping output");
              let K;
              try {
                await A.recheckBeforeWrite(), K = O() === "windows" ? await ee(m, "wx") : await Q9(m, H.O_WRONLY | H.O_CREAT | H.O_EXCL | H.O_NOFOLLOW, O());
              } catch {
                return await d("reroot destination not creatable");
              }
              try {
                let B = 0, I = Buffer.allocUnsafe(65536);
                while (B < de) {
                  let { bytesRead: C } = await w.read(I, 0, Math.min(I.length, de - B), B);
                  if (C === 0) break;
                  let L = 0;
                  while (L < C) {
                    let { bytesWritten: V } = await K.write(I, L, C - L);
                    L += V;
                  }
                  B += C;
                }
              } finally {
                await K.close();
              }
              r = v;
            }
          } finally {
            await w.close();
          }
        } finally {
          await A.close();
        }
      }
    } catch {
      if (i) return await d("reroot failed after the gate");
    }
  }
  return { taskId: e.id, pid: o, procStart: await abe(o), startTimeTicks: await T8t(o) ?? void 0, command: e.command, description: e.description, outputPath: r, lastReportedTotalLines: e.lastReportedTotalLines, toolUseId: e.toolUseId, kind: e.kind, agentId: e.agentId };
}
async function Jmr(e, n = {}) {
  let o = n.derivedTranscriptPath ?? $m(Br(e.agentId));
  return { agentId: e.agentId, agentType: e.agentType, description: e.description, toolUseId: e.toolUseId, spawnDepth: e.spawnDepth, startTime: e.startTime, transcriptPath: await D(o).catch(() => {
    return;
  }), parentAgentId: e.parentAgentId, forkedSkillName: e.forkedSkillName };
}
async function Qmr(e, n = {}) {
  let o = n.derivedTranscriptDir ?? BW(e.workflowRunId);
  return { taskId: e.id, workflowRunId: e.workflowRunId, scriptPath: e.scriptPath, scriptSha256: e.script ? Ue("sha256").update(e.script).digest("hex") : void 0, argsJson: e.args !== void 0 ? _(e.args) : void 0, description: e.description, startTime: e.startTime, withholdScriptFromSdkEvents: e.withholdScriptFromSdkEvents, transcriptDir: await D(o).catch(() => o) };
}
function F6(e) {
  return SIe() && ime(e) && e.frameLive !== void 0;
}
function xwe(e) {
  let n = /* @__PURE__ */ new Set();
  if (!SIe()) return n;
  for (let o of Object.values(e)) if (F6(o) && o.frameLive !== void 0) n.add(o.frameLive.slug);
  for (let o of Bct()) n.add(o);
  for (let o of sBe()) n.add(o);
  return n;
}
function ZPn(e) {
  let { supervisors: n, bootingWiredArms: o } = Z().live, r = sBe(), s = [], d = Date.now();
  for (let i of xwe(e)) {
    let u = n.get(i), g = r.has(i) ? o.get(i) : void 0;
    if (u === void 0 && g === void 0) continue;
    let k = g?.title ?? u?.autoReactWiring?.title, h = k !== void 0 && k.length >= 1 && k.length <= 256;
    s.push({ slug: i, writtenAtMs: d, ...h && { title: k } });
  }
  return s;
}
async function eIn(e, n) {
  let o = FX(e), r = Object.values(e).filter((m) => ngr(m, o)), s = Object.values(e).filter((m) => rgr(m, o)), d = Object.values(e).filter((m) => rIn(m, o)), i = Om().filter((m) => lUe(m, o));
  if (r.length === 0 && s.length === 0 && d.length === 0 && i.length === 0 && ZPn(e).length === 0) return null;
  let u = (await Promise.all(r.map((m) => Xmr(m, { rerootOutputsTo: tR() })))).filter((m) => m !== null), g = await Promise.all(s.map((m) => Jmr(m))), k = await Promise.all(d.map((m) => Qmr(m))), h = ZPn(e), S = new Set(h.map((m) => m.slug)), y = Object.values(e).filter((m) => F6(m) && m.frameLive !== void 0 && S.has(m.frameLive.slug)).map((m) => m.id);
  if (u.length === 0 && g.length === 0 && k.length === 0 && i.length === 0 && h.length === 0) return null;
  let T = false, v = false, A = (m) => {
    if (v) return;
    v = true, M3e(S), AQt(S);
    let w = new Set(y);
    if (S.size > 0) {
      for (let P of Object.values(m.all())) if (ZB(P) && P.status === "running" && P.frameLive !== void 0 && S.has(P.frameLive.slug)) w.add(P.id);
    }
    for (let P of w) ES(P, m, { quiet: true });
  };
  return { payload: { writtenAtMs: Date.now(), shells: u, cron: i.map((m) => ({ id: m.id, cron: m.cron, prompt: m.prompt, createdAt: m.createdAt, recurring: m.recurring, agentId: m.agentId, plugin: m.plugin, kind: m.kind, scheduledFor: m.scheduledFor, reason: m.reason, keepalive: m.keepalive })), ...UYt() > 0 && { loopWakeFires: UYt() }, agents: g, workflows: k, ...h.length > 0 && { frameLive: h } }, checkpointAgents: async (m) => {
    for (let w of d) w.abortController?.abort(Nl("background")), vIe(w.id, m);
    if (g.length === 0) return;
    for (let w of u) if (w.agentId !== void 0) m.remove(w.taskId);
    for (let w of s) w.abortController.abort(Nl("background"));
    await Wg(), await Ru().catch((w) => {
      f("task_local_agent", "adopt_checkpoint_flush_failed"), t(`[adopt] checkpoint flush: ${w}`, { level: "warn" });
    });
  }, stopCarriedWatches: A, disown: (m) => {
    A(m);
    for (let w of u) m.remove(w.taskId);
    for (let w of g) m.remove(w.agentId);
    for (let w of k) m.remove(w.taskId);
    if (i.length > 0) TX(i.map((w) => w.id));
  }, abandon: () => {
    if (T) return;
    T = true;
    for (let m of r) try {
      m.shellCommand?.kill();
    } catch (w) {
      t(`[adopt] abandon ${m.id}: ${w}`, { level: "warn" });
    }
    for (let m of s) {
      let w = `Background agent "${xlt(m.description)}" was checkpointed for the background fork but the fork failed to spawn; the agent was not resumed.`;
      J(m.agentId, w, n);
    }
    if (s.length > 0) f("task_local_agent", "adopt_spawn_failed");
    for (let m of d) {
      let w = m.withholdScriptFromSdkEvents === true ? "" : De({ workflowRunId: m.workflowRunId ?? "", scriptPath: m.scriptPath, argsJson: m.args !== void 0 ? _(m.args) : void 0 }, ""), P = `Background workflow "${xlt(m.description)}" was checkpointed for the background fork but the fork failed to spawn; it was not resumed.${w}`;
      J(m.id, P, n);
    }
    if (d.length > 0) f("task_local_workflow", "adopt_spawn_failed");
    if (v) {
      for (let m of y) J(m, "The background session didn't start, so automatic replies to Artifact comments stopped. Publish the Artifact again to turn them back on.", n);
      if (h.length > 0) f("artifact_live_subscribe", "adopt_spawn_failed");
    }
  } };
}
function Zmr(e) {
  let n = /* @__PURE__ */ new Map();
  for (let o of e) for (let r of o.entries) {
    let s = { ...r, writtenAtMs: r.writtenAtMs ?? o.fallbackBasis }, d = n.get(r.slug), i = Math.min((d?.unattendedReplies ?? 0) + (r.unattendedReplies ?? 0), jct), u = d === void 0 || s.writtenAtMs > (d.writtenAtMs ?? 0) ? s : d;
    n.set(r.slug, i > 0 ? { ...u, unattendedReplies: i } : u);
  }
  if (n.size > Bk) f("artifact_live_subscribe", "merged_consent_capped");
  return [...n.values()].sort((o, r) => (r.writtenAtMs ?? 0) - (o.writtenAtMs ?? 0)).slice(0, pCe);
}
function et(e, n) {
  let o = (r, s, d) => [...r, ...s].filter((i, u, g) => g.findIndex((k) => d(k) === d(i)) === u);
  return { writtenAtMs: n.writtenAtMs, origin: n.origin ?? e.origin, shells: o(e.shells, n.shells, (r) => r.pid), cron: o(e.cron, n.cron, (r) => r.id), ...(n.loopWakeFires ?? e.loopWakeFires) !== void 0 && { loopWakeFires: n.loopWakeFires ?? e.loopWakeFires }, agents: o(e.agents ?? [], n.agents ?? [], (r) => r.agentId), workflows: o(e.workflows ?? [], n.workflows ?? [], (r) => r.taskId), ...((e.frameLive?.length ?? 0) > 0 || (n.frameLive?.length ?? 0) > 0) && { frameLive: Zmr([{ entries: e.frameLive ?? [], fallbackBasis: e.writtenAtMs }, { entries: n.frameLive ?? [], fallbackBasis: n.writtenAtMs }]) }, prefill: n.prefill ?? e.prefill };
}
async function nt(e, n) {
  let o = await e.read([We.job(n, ["adopt.json"])]);
  if (!o.ok) return t(`[adopt] v5 merge read refused: ${vt(o.error)}`), null;
  let r = o.value.items[0];
  if (!r.found) return null;
  return Buffer.from(r.value).toString("utf8");
}
async function Rlt(e, n, o = {}, r) {
  let s = j(e, "adopt.json"), d = Y(e), i = z() && r !== void 0 && _r(d) && e === _o(d) ? r : void 0, u = n;
  try {
    let g = i ? await nt(i, d) : await He(s, "utf-8");
    if (g !== null && g.length <= 1e6) {
      let h = (o.mergeShellOutputRoot !== void 0 ? Oe(o.mergeShellOutputRoot) : Fe()).safeParse(te(g));
      if (h.success) {
        if (h.data.shells.length + (h.data.cron?.length ?? 0) + (h.data.agents?.length ?? 0) + (h.data.workflows?.length ?? 0) + (h.data.frameLive?.length ?? 0) <= 256) u = et(h.data, n);
      }
    }
  } catch {
  }
  if (i) {
    let g = await i.write(We.job(d, ["adopt.json"]), _(u), { publishDiscipline: "atomic", mode: 438 & ~process.umask(), parent: o.parent ?? "mustExist" });
    if (!g.ok) throw Object.assign(new R(`adopt.json v5 write failed: ${vt(g.error)}`, "adopt.json v5 write failed"), "telemetryCode" in g.error && g.error.telemetryCode !== void 0 ? { code: g.error.telemetryCode } : {});
    return;
  }
  await Dn(s, _(u));
}
async function hno(e, n = {}) {
  if (!e) return null;
  let o = j(e, "adopt.json"), r = `${o}.${process.pid}`, s = Date.now() + (n.waitMs ?? 0), d = false;
  for (; ; ) try {
    d = await Os(o, r);
    break;
  } catch (g) {
    let k = E(g);
    if (k === "ENOENT") {
      if (Date.now() < s) {
        await X(Ke);
        continue;
      }
      return a("tengu_adopt_claim", { result: b("enoent") }), null;
    }
    return t(`[adopt] rename failed: ${g}`, { level: "warn" }), a("tengu_adopt_claim", { result: k !== void 0 && vq.has(k) ? b("ebusy_gave_up") : yh(g) }), null;
  }
  let i = Date.now(), u = d ? b("ebusy_retry") : b("ok");
  try {
    let g = await zK(r, Ge);
    if (g.kind !== "ok") return t(`[adopt] carrier not read: ${g.kind}`, { level: "warn" }), a("tengu_adopt_claim", { result: b("not_read") }), null;
    let k = g.content, S = (n.extraShellOutputRoot !== void 0 ? Oe(n.extraShellOutputRoot) : Fe()).safeParse(JSON.parse(k));
    if (!S.success) return t(`[adopt] schema rejected: ${S.error.message}`, { level: "warn" }), a("tengu_adopt_claim", { result: b("schema_rejected") }), null;
    let y = i - S.data.writtenAtMs;
    if (S.data.origin !== "exit" && y > Clt) {
      t(`[adopt] stale (age ${y}ms)`, { level: "warn" });
      let T = S.data.frameLive ?? [];
      if (T.length === 0) return a("tengu_adopt_claim", { result: b("stale") }), null;
      return a("tengu_adopt_claim", { result: b("stale"), frame_live_stale: b("true") }), f("artifact_live_subscribe", "carried_consent_stale_dropped"), { writtenAtMs: S.data.writtenAtMs, ...S.data.origin !== void 0 && { origin: S.data.origin }, shells: [], cron: [], frameLive: T.map((v) => ({ ...v, writtenAtMs: v.writtenAtMs ?? S.data.writtenAtMs, stale: true })) };
    }
    if ((S.data.frameLive?.length ?? 0) > 0) {
      let T = S.data.frameLive.map((A) => {
        let m = A.writtenAtMs ?? S.data.writtenAtMs, w = i - m;
        return w >= -rgi && w <= Clt ? { ...A, writtenAtMs: m } : { ...A, writtenAtMs: m, stale: true };
      }), v = F(T, (A) => "stale" in A);
      if (v > 0) t(`[adopt] ${v}/${T.length} frameLive entries marked stale`, { level: "warn" });
      return a("tengu_adopt_claim", { result: u, ...v > 0 && { frame_live_stale: b("true") } }), Object.assign(S.data, { frameLive: T });
    }
    return a("tengu_adopt_claim", { result: u }), S.data;
  } catch (g) {
    return t(`[adopt] read/parse failed: ${g}`, { level: "warn" }), a("tengu_adopt_claim", { result: b("parse_failed") }), null;
  } finally {
    await N(r).catch(() => {
    });
  }
}
function yno(e, n, o, r) {
  let s = ole();
  if (n.length === 0 && o.length === 0) {
    s.unresumedAdopt.delete(e);
    return;
  }
  s.unresumedAdopt.set(e, { agents: n, workflows: o, owner: r });
}
function _no(e, n) {
  if (ole().unresumedAdopt.get(e)?.owner !== n) return { agents: [], workflows: [] };
  return egr(e);
}
function egr(e) {
  let n = ole(), o = n.unresumedAdopt.get(e);
  return n.unresumedAdopt.delete(e), { agents: o?.agents ?? [], workflows: o?.workflows ?? [] };
}
function bno(e, n, o) {
  let r = ole();
  if (n.length === 0) {
    r.unresumedFrameLive.delete(e);
    return;
  }
  r.unresumedFrameLive.set(e, { entries: n.map(({ stale: s, ...d }) => d), owner: o });
}
function Sno(e, n) {
  if (ole().unresumedFrameLive.get(e)?.owner !== n) return [];
  return tIn(e);
}
function tIn(e) {
  let n = ole(), o = n.unresumedFrameLive.get(e);
  return n.unresumedFrameLive.delete(e), o?.entries ?? [];
}
function wno(e, n, o) {
  let r = ole(), s = r.unresumedFrameLive.get(e);
  if (n.length === 0 || s !== void 0 && s.owner !== o) return;
  r.unresumedFrameLive.set(e, { entries: [...n], owner: o });
}
function vno(e, n, o) {
  let r = ole(), s = r.unresumedFrameLive.get(e);
  if (s === void 0 || s.owner !== o) return;
  let d = s.entries.filter((i) => i.slug !== n);
  if (d.length > 0) r.unresumedFrameLive.set(e, { entries: d, owner: o });
  else r.unresumedFrameLive.delete(e);
}
function Eno(e, n) {
  if (n.length > 0) ole().exitRetryFrameLive.set(e, [...n]);
}
function kno(e) {
  if (e === void 0) return [];
  let n = ole(), o = n.exitRetryFrameLive.get(e) ?? [];
  return n.exitRetryFrameLive.delete(e), o;
}
var rt = /* @__PURE__ */ new Set(["EXDEV", "EPERM", "ENOTSUP", "EOPNOTSUPP", "ENOSYS", "EMLINK"]), it = 1048576, Me = ".adopt-relink.";
function at(e) {
  return `${e}${Me}${process.pid}.${Date.now()}.${_e(4).toString("hex")}`;
}
async function st(e, n, o, r) {
  let s;
  try {
    await r(e, n), s = "UNVERIFIED";
  } catch (i) {
    let u = E(i);
    if (u === void 0 || !rt.has(u)) throw i;
    s = u;
  }
  if (s === "UNVERIFIED") {
    let i = await x(n);
    if (i.isFile() && i.dev === o.dev && i.ino === o.ino) return { method: "hardlink", identity: o };
    await N(n);
  }
  let d = await dt(e, n, o);
  return { method: "copy", fallbackCode: s, identity: d };
}
async function dt(e, n, o) {
  let r = await ee(e, H.O_RDONLY | $s);
  try {
    let s = await r.stat();
    if (!s.isFile() || s.dev !== o.dev || s.ino !== o.ino) throw Object.assign(Error("adopted file copy source is not the validated inode"), { code: "ADOPT_IDENTITY_MISMATCH" });
    let d = await ee(n, "wx", r8r), i = false;
    try {
      let u = Buffer.allocUnsafe(it);
      for (; ; ) {
        let { bytesRead: h } = await r.read(u, 0, u.length, null);
        if (h === 0) break;
        let S = 0;
        while (S < h) {
          let { bytesWritten: y } = await d.write(u, S, h - S);
          if (y === 0) throw Object.assign(Error("adopted file copy made no progress"), { code: "ADOPT_COPY_STALLED" });
          S += y;
        }
      }
      let { dev: g, ino: k } = await d.stat();
      return await d.utimes(s.atime, s.mtime).catch((h) => {
        t(`[adopt] copied file keeps fresh timestamps (${E(h) ?? "error"})`, { level: "warn" });
      }), await d.close(), i = true, { dev: g, ino: k };
    } finally {
      if (!i) await d.close().catch(() => {
      }), await N(n).catch(() => {
      });
    }
  } finally {
    await r.close().catch(() => {
    });
  }
}
async function lt(e, n, o) {
  let r;
  try {
    r = await x(n);
  } catch (s) {
    if (E(s) !== "ENOENT") throw s;
  }
  if (r !== void 0 && !r.isSymbolicLink()) {
    if (!r.isFile()) throw Object.assign(Error("adopted agent name is held by a non-file entry"), { code: "ADOPT_NAME_NOT_FILE" });
    if (o) return "kept";
  }
  try {
    await Os(e, n);
  } catch (s) {
    if (r === void 0 || E(s) !== "EEXIST") throw s;
    await N(n), await Os(e, n);
  }
  return r === void 0 ? "created" : "replaced";
}
async function ce(e, n, o, r, s) {
  if (s) {
    let h = await x(e).catch(() => {
      return;
    });
    if (h !== void 0 && !h.isSymbolicLink() && h.isFile()) return { method: "kept", created: null };
  }
  let d = at(e), i = await st(n, d, o, r), u = "kept";
  try {
    u = await lt(d, e, s);
  } finally {
    await N(d).catch(() => {
    });
  }
  let { identity: g, ...k } = i;
  return u === "kept" ? { method: "kept", created: null } : { ...k, created: u === "created" ? g : null };
}
async function Tno(e, { storageV5: n, linkFn: o = Te } = {}) {
  if (n === void 0) return ct(e);
  try {
    let r = await ut(e, o);
    if (r.method !== void 0) a("tengu_adopt_link", { kind: b("agent"), method: c(r.method), fallback_code: yh({ code: r.fallbackCode }) });
    return r;
  } catch (r) {
    throw a("tengu_adopt_link", { kind: b("agent"), method: c("fail"), error_code: yh(r) }), r;
  }
}
async function ct(e) {
  if (!e.transcriptPath) return {};
  let n = $m(Br(e.agentId)), o = (i) => i.replace(/\.jsonl$/, ".meta.json");
  await ve(o(e.transcriptPath));
  let r = null, s, d = Gct(e.transcriptPath);
  if (e.forkedSkillName !== void 0) {
    let i = await CQt(d);
    if (i.status !== "valid") throw new R(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record is unusable (${i.status})`, "adopted forked-skill scoping record unusable");
    if (i.scoping.skillName !== e.forkedSkillName) throw new R(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record names a different skill`, "adopted forked-skill scoping identity mismatch");
    r = { parent: d, fork: Gct(n) };
  } else {
    let i = await CQt(d);
    switch (i.status) {
      case "absent":
        break;
      case "valid":
        r = { parent: d, fork: Gct(n) }, s = i.scoping.skillName;
        break;
      case "malformed":
      case "absent-but-marked":
      case "diskless":
        throw new R(`adopted agent ${e.agentId} has an unusable forked-skill scoping record (${i.status})`, "adopted forked-skill scoping record unusable");
    }
  }
  if (n === e.transcriptPath) return { forkedSkillNameFromSidecar: s };
  if (await D(n).catch(() => {
    return;
  }) === e.transcriptPath) return { forkedSkillNameFromSidecar: s };
  if (await ue(U(n), { recursive: true }), r) await N(r.fork.provenanceMarker).catch(() => {
  }), await _wr(r.fork.provenanceMarker, e.forkedSkillName ?? s), await N(r.fork.scoping).catch(() => {
  }), await be(r.parent.scoping, r.fork.scoping);
  for (let [i, u] of [[n, e.transcriptPath], [o(n), o(e.transcriptPath)]]) await N(i).catch(() => {
  }), await Pe(u, i);
  return { forkedSkillNameFromSidecar: s };
}
function Q(e, n) {
  return Object.assign(e, { code: n });
}
async function ut(e, n) {
  if (!e.transcriptPath) return {};
  let o = $m(Br(e.agentId)), r = (A) => A.replace(/\.jsonl$/, ".meta.json");
  if (Y(e.transcriptPath) !== Y(o)) throw Q(new R(`adopted agent ${e.agentId} carrier names a transcript that is not agent-${e.agentId}.jsonl`, "adopted agent transcript path has the wrong leaf name"), "ADOPT_WRONG_LEAF");
  let [s, d] = await Promise.all([x(e.transcriptPath), x(r(e.transcriptPath))]);
  if (!s.isFile() || !d.isFile()) throw Q(new R(`adopted agent ${e.agentId} parent transcript or .meta.json is not a regular file`, "adopted agent parent file is not a regular file"), "ADOPT_PARENT_NOT_REGULAR");
  let i = null, u, g = Gct(e.transcriptPath);
  if (e.forkedSkillName !== void 0) {
    let A = await CQt(g);
    if (A.status !== "valid") throw Q(new R(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record is unusable (${A.status})`, "adopted forked-skill scoping record unusable"), "ADOPT_SCOPING_UNUSABLE");
    if (A.scoping.skillName !== e.forkedSkillName) throw Q(new R(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record names a different skill`, "adopted forked-skill scoping identity mismatch"), "ADOPT_SCOPING_MISMATCH");
    i = { parent: g, fork: Gct(o) };
  } else {
    let A = await CQt(g);
    switch (A.status) {
      case "absent":
        break;
      case "valid":
        i = { parent: g, fork: Gct(o) }, u = A.scoping.skillName;
        break;
      case "malformed":
      case "absent-but-marked":
      case "diskless":
        throw Q(new R(`adopted agent ${e.agentId} has an unusable forked-skill scoping record (${A.status})`, "adopted forked-skill scoping record unusable"), "ADOPT_SCOPING_UNUSABLE");
    }
  }
  if (o === e.transcriptPath) return { forkedSkillNameFromSidecar: u, method: "noop" };
  let k = await D(U(o)).catch(() => {
    return;
  });
  if (k !== void 0 && j(k, Y(o)) === e.transcriptPath) return { forkedSkillNameFromSidecar: u, method: "noop" };
  if (await ue(U(o), { recursive: true }), i) await N(i.fork.provenanceMarker).catch(() => {
  }), await _wr(i.fork.provenanceMarker, e.forkedSkillName ?? u), await N(i.fork.scoping).catch(() => {
  }), await be(i.parent.scoping, i.fork.scoping);
  let h = await x(o).catch(() => {
    return;
  }), S = h !== void 0 && (h.isFile() || h.isSymbolicLink() && await D(o).catch(() => {
    return;
  }) === e.transcriptPath), y = await ce(r(o), r(e.transcriptPath), d, n, S), T;
  try {
    T = await ce(o, e.transcriptPath, s, n, true);
  } catch (A) {
    if (y.created !== null) {
      let m = y.created;
      await x(r(o)).then(async (w) => {
        if (w.dev === m.dev && w.ino === m.ino) await N(r(o));
      }).catch(() => {
      });
    }
    throw A;
  }
  let v = T.fallbackCode ?? y.fallbackCode;
  if (v !== void 0) {
    let A = [...T.method === "copy" ? ["transcript"] : [], ...y.method === "copy" ? ["meta"] : []].join("+");
    t(`[adopt] agent ${e.agentId}: hard link impossible (${v}) — materialised a copy of ${A}`, { level: "warn" }), f("task_local_agent", "adopt_link_fallback_copy");
  }
  return { forkedSkillNameFromSidecar: u, method: T.method, fallbackCode: v };
}
var pt = /^agent-[\w-]+\.(?:jsonl|meta\.json)$/, ft = new RegExp("^agent-[\\w-]+\\.(?:jsonl|meta\\.json)" + Me.replace(/[.]/g, "\\.") + "\\d+\\.(\\d+)\\.[0-9a-f]{8}$"), mt = 9e5, gt = 64;
function Ne(e, n) {
  let o = Re(e, n);
  if (o === "" || o.startsWith("..") || ne(o)) return null;
  let r = o.split(le);
  if (r.length < 3 || r[2] !== "subagents") return null;
  return { session: j(r[0], r[1]), depth: r.length };
}
async function Ano({ storageV5: e, linkFn: n = Te } = {}) {
  if (e === void 0) return;
  try {
    await ht(yet(), n);
  } catch (o) {
    if (E(o) !== void 0) {
      t(`[adopt] relink sweep abandoned: ${o}`, { level: "warn" });
      return;
    }
    l(o);
  }
}
async function ht(e, n) {
  let o;
  try {
    o = await Be(e, { withFileTypes: true });
  } catch {
    return;
  }
  let r = Date.now(), s = [];
  for (let I of o) {
    let C = ft.exec(I.name);
    if (C) {
      if (Math.abs(r - Number(C[1])) > mt) await N(j(e, I.name)).catch(() => {
      });
      continue;
    }
    if (I.isSymbolicLink() && pt.test(I.name)) s.push(I.name);
  }
  if (s.length === 0) return;
  let d = (I) => I.replace(/\.(?:jsonl|meta\.json)$/, ""), i = /* @__PURE__ */ new Map();
  for (let I of s) {
    let C = i.get(d(I)) ?? {};
    if (I.endsWith(".jsonl")) C.transcript = I;
    else C.meta = I;
    i.set(d(I), C);
  }
  let u = [...i.entries()], g = u.length > 1 ? _e(4).readUInt32BE() % u.length : 0, k = [...u.slice(g), ...u.slice(0, g)], [h, S] = await Promise.all([D(Np()).catch(() => null), D(e).catch(() => null)]);
  if (h === null || S === null) return;
  let y = Ne(h, S);
  if (WG(U(U(e))) === void 0 || y === null || y.depth !== 3) {
    t(`[adopt] relink sweep: ${s.length} symlinked name(s) left as is (session dir outside the transcript store)`, { level: "warn" });
    return;
  }
  let T = y.session, v = 0, A = 0, m = 0, w = 0, P = [], K = (I) => {
    if (I === "copy") A++;
    else v++;
  }, B = /* @__PURE__ */ new Set();
  for (let [I, [C, L]] of k.entries()) {
    let V = [L.transcript, L.meta].filter((W) => W !== void 0);
    if (w + V.length > gt) {
      m = k.slice(I).reduce((W, [, M]) => W + Number(!!M.transcript) + Number(!!M.meta), 0), P.push(`${m} more (per-pass cap)`);
      break;
    }
    w += V.length;
    try {
      let W = `${C}.jsonl`, M = L.transcript !== void 0 ? await Ae(e, W, h, T) : await St(e, W);
      if (typeof M === "string") {
        for (let G of V) P.push(`${G} (${G === L.meta && L.transcript !== void 0 ? "transcript not convertible" : M})`);
        continue;
      }
      let se;
      if (L.meta !== void 0) {
        let G = M !== null && M.gate.size === 0 ? "meta beside an empty transcript" : await Ae(e, L.meta, h, T, { besideDir: M === null ? void 0 : U(M.real) });
        if (typeof G === "string") {
          for (let me of V) P.push(`${me} (${me === L.meta ? G : "meta not convertible"})`);
          continue;
        }
        se = G;
      }
      if (M !== null) K(await Se(M, n)), B.add(W);
      if (se !== void 0 && L.meta !== void 0) K(await Se(se, n)), B.add(L.meta);
    } catch (W) {
      if (E(W) === void 0) l(W);
      for (let M of V) if (!B.has(M)) P.push(`${M} (${E(W) ?? "error"})`);
    }
  }
  if (A > 0) f("task_local_agent", "adopt_link_fallback_copy");
  t(`[adopt] relink sweep: ${v} hard-linked, ${A} copied, ${P.length - (m > 0 ? 1 : 0) + m} left as is${P.length > 0 ? ` (${P.slice(0, 5).join(", ")})` : ""}`, { level: P.length > 0 || A > 0 ? "warn" : "debug" }), a("tengu_adopt_relink", { linked: v, copied: A, left: P.length - (m > 0 ? 1 : 0) + m });
}
var q = 65536, kt = p(() => Tt({ agentType: ge() })), wt = p(() => Tt({ agentId: ge() }));
async function Ce(e, n, o) {
  let r = await ee(e, H.O_RDONLY | $s);
  try {
    let s = await r.stat();
    if (s.dev !== n.dev || s.ino !== n.ino) return "target changed during the check";
    if (o.endsWith(".meta.json")) {
      if (s.size > q) return "meta too large";
      let g = ke((await we(r)).toString("utf-8"));
      return kt().safeParse(g).success ? void 0 : "not an agent meta";
    }
    if (s.size === 0) return;
    let d = o.slice(6, -6), i = await we(r), u = i.toString("utf-8");
    if (i.length >= q && i.indexOf(10) === -1) return At(u, d) ? void 0 : "no record naming this agent in the first 64 KiB";
    for (let g of u.split(`
`)) {
      let k = ke(g);
      if (k === null) continue;
      let h = wt().safeParse(k);
      if (h.success && h.data.agentId === d) return;
    }
    return "no record naming this agent in the first 64 KiB";
  } finally {
    await r.close().catch(() => {
    });
  }
}
function ke(e) {
  try {
    return te(e);
  } catch {
    return null;
  }
}
async function we(e) {
  let n = Buffer.allocUnsafe(q), o = 0;
  while (o < q) {
    let { bytesRead: r } = await e.read(n, o, q - o, o);
    if (r === 0) break;
    o += r;
  }
  return n.subarray(0, o);
}
function At(e, n) {
  if (e[0] !== "{") return false;
  let o = `"agentId":"${n}"`, r = 0, s = false, d = false;
  for (let i = 0; i < e.length; i++) {
    let u = e[i];
    if (s) {
      if (d) d = false;
      else if (u === "\\") d = true;
      else if (u === '"') s = false;
      continue;
    }
    if (u === "{" || u === "[") r++;
    else if (u === "}" || u === "]") {
      if (r--, r === 0) return false;
    } else if (u === '"') {
      if (r === 1 && e.startsWith(o, i) && (e[i - 1] === "{" || e[i - 1] === ",")) return true;
      s = true;
    }
  }
  return false;
}
async function Ae(e, n, o, r, { besideDir: s } = {}) {
  let d = j(e, n), i = await Ee(d);
  if (!ne(i) || Y(i) !== n || LM(i)) return "unexpected target spelling";
  let u;
  try {
    u = await x(i);
  } catch (y) {
    return `target ${E(y) ?? "unreadable"}`;
  }
  if (!u.isFile()) return u.isSymbolicLink() ? "chained link" : "non-regular target";
  let g = await D(i), k = Ne(o, g);
  if (k === null || k.depth < 4 || Y(g) !== n) return "outside the transcript store";
  if (k.session === r) return "this session's own file";
  if (s !== void 0 && U(g) !== s) return "not beside its transcript";
  let h = await x(g);
  if (!h.isFile() || h.dev !== u.dev || h.ino !== u.ino) return "target changed during the check";
  let S = await Ce(g, u, n);
  if (S !== void 0) return S;
  return { linkPath: d, real: g, gate: u };
}
async function St(e, n) {
  let o = j(e, n), r;
  try {
    r = await x(o);
  } catch {
    return "meta without its transcript";
  }
  if (!r.isFile() || r.size === 0) return "meta without its transcript";
  let s = await Ce(o, r, n);
  return s === void 0 ? null : `transcript ${s}`;
}
async function Se(e, n) {
  return (await ce(e.linkPath, e.real, e.gate, n, true)).method;
}
function Cno(e) {
  return Plt(e.pid, e.startTimeTicks, e.procStart);
}
async function Rno(e) {
  let n = BW(e.workflowRunId);
  if (n === e.transcriptDir) return;
  if (await D(n).catch(() => {
    return;
  }) === e.transcriptDir) return;
  await ve(j(e.transcriptDir, "journal.jsonl")), await ue(U(n), { recursive: true });
  try {
    await N(n);
  } catch (o) {
    if (E(o) !== "ENOENT") try {
      await ze(n);
    } catch (s) {
      if (E(s) === "ENOTEMPTY") await Ve(n, { recursive: true, force: true });
    }
  }
  await Pe(e.transcriptDir, n, void 0);
}
function E8t(e, n, o, r = "") {
  let s = e.withholdScriptFromSdkEvents === true ? "" : De(e, r), d = `Background workflow "${xlt(e.description)}" was checkpointed for the background fork but could not be resumed (${aUe(n, pe, oe) ?? fe}).${s}`;
  J(e.taskId, d, o);
}
var ye = 16e3, yt = 4096, pe = 1e3, $e = "!#$%&(*+,\\-./:;<=>?@[\\\\\\]^_{|~\\u00b7\\u2013\\u2014\\u3001\\u3002", xe = `${$e})}`, _t = new RegExp(`^(?:\\p{L}[\\p{Mn}\\p{Mc}]{0,4}|[\\p{N}\\p{Sc} '${xe}])*$`, "u"), oe = new RegExp(`^(?:\\p{L}[\\p{Mn}\\p{Mc}]{0,4}|[\\p{N}\\p{Sc} '${$e}])*$`, "u"), bt = new RegExp(`^(?:\\p{L}[\\p{Mn}\\p{Mc}]{0,4}|[\\p{N}\\p{Sc} '"${xe}])*$`, "u"), Pt = "\\u030b\\u030d-\\u030f\\u0312-\\u0315\\u0329\\u0334-\\u0338\\u0348\\u0350\\u0351\\u0354-\\u0358\\u0485\\u0486\\u059c-\\u059e\\u08f7-\\u08fd\\u1ab0-\\u1aff\\u1cd4\\u1ce2-\\u1ce8\\u1dce\\u1dfe\\u1dff\\u{10efa}\\u20d2\\u20d3\\u20d8-\\u20da\\u20e5\\u20e6\\u20ea\\u20eb\\u{10a39}\\u{16af0}-\\u{16af4}\\u{1bc9e}\\u{1d167}-\\u{1d169}", Et = new RegExp(`[${FVt}\\u02b0-\\u02ff\\u0559\\u07f4\\u07f5\\ua700-\\ua721\\ua788-\\ua78c\\u144a\\u16b2\\ua4f8-\\ua4ff\\u{16f3f}${Pt}]|\\\\$`, "u");
function aUe(e, n, o = _t) {
  if (!(sE(e) === e && pW(e) === e && o.test(e) && !Et.test(e))) return;
  let s = Wt(e);
  return s.length <= n || xq(s) <= n ? s : void 0;
}
function De(e, n) {
  if (e.scriptPath === void 0) return "";
  let o = aUe(e.scriptPath, yt, oe), r = aUe(e.workflowRunId, QPn);
  if (o === void 0 || r === void 0) return " Its script's file name or run id holds what this notice does not repeat, so no call to resume it is given.";
  return ` To resume manually: Workflow({scriptPath: ${_(o)}, resumeFromRunId: ${_(r)}${Lt(e.argsJson)}${n}`;
}
var Rt = "(a description this notice does not repeat)", fe = "a reason this notice does not repeat", It = 1e3;
function xlt(e) {
  return aUe(e, It, oe) ?? Rt;
}
var ie = " The launch's args are not in this call: they are not JSON, are too long or too deeply nested for a notice, or hold characters a notice never repeats. Add them as args, or the run resumes without its input.";
function Lt(e) {
  if (e === void 0) return "}).";
  if (e.length > ye) return `}).${ie}`;
  let n = ot(e, false);
  if (n === null) return e.trim() === "null" ? "})." : `}).${ie}`;
  try {
    let o = aUe(_(_(n)), ye, bt);
    return o === void 0 ? `}).${ie}` : `, args: JSON.parse(${o})}).`;
  } catch {
    return `}).${ie}`;
  }
}
function J(e, n, o, r = tt(), s = "failed") {
  o.enqueuePendingNotification({ value: Di({ taskId: Wt(e), status: s, summary: n }), agentId: r, mode: "task-notification", skipAttachments: true, priority: "next", taskId: e }), Ha(e, s, { summary: pg(n) });
}
function xno(e) {
  let n = ae(() => [Np()]).safeParse(e);
  if (!n.success) throw new R(n.error.issues[0]?.message ?? "scriptPath rejected", "adopt scriptPath rejected");
  return n.data;
}
function tgr(e) {
  return e.mcp.clientsInitialized === true && !e.mcp.clients.some((n) => n.type === "pending");
}
function Pno(e) {
  let n = e.parentAgentId !== void 0, o = e.forkedSkillName !== void 0;
  return { emit: n || o, excludeFromReconcile: !n && o };
}
function nIn(e, n, o, r) {
  let s = `Background agent "${xlt(e.description ?? e.agentId)}" was checkpointed for the background fork but could not be resumed (${aUe(n, pe, oe) ?? fe}).`;
  J(e.agentId, s, r, je(e, o));
}
function Ino(e, n, o, r) {
  qHs(e.agentId, o), J(e.agentId, `Background agent "${xlt(e.description ?? e.agentId)}" was checkpointed for the background fork and was not resumed (${aUe(n, pe, oe) ?? fe}). Sending it a message with ${Mn} asks to resume it again.`, r, je(e, o), "stopped");
}
function je(e, n) {
  return e.parentAgentId !== void 0 && Tn(n.get(e.parentAgentId)) ? Br(e.parentAgentId) : tt();
}
function Ono(e, n) {
  let o = Date.now(), r = new Set(Om().map((d) => d.id)), s = 0;
  for (let d of e) {
    if (d.prompt.length > he) {
      f("task_local_agent", "adopt_cron_prompt_too_long"), t(`[adopt] cron ${r2(d.id, 64)} skipped: prompt is ${d.prompt.length} characters, over the ${he} limit`, { level: "warn" });
      continue;
    }
    let { plugin: i, ...u } = d;
    if (i !== void 0 && !eHe(i)) {
      t(`[adopt] cron ${r2(d.id, 64)} skipped: its plugin name fails the rule for a stored name`, { level: "warn" });
      continue;
    }
    if (!r.has(d.id)) Fxe({ ...u, ...i !== void 0 && { plugin: i }, ...d.recurring && { lastFiredAt: o } }), r.add(d.id), s++;
  }
  if (s > 0) {
    if (gx()) SW(true);
  }
  for (let d = 0; d < (n ?? 0); d++) ZTn();
}
function FX(e) {
  let n = /* @__PURE__ */ new Map();
  if (!SIe()) return n;
  let o = (i) => Tn(i) ? i.parentAgentId : "agentId" in i ? i.agentId : void 0, r = /* @__PURE__ */ new Map();
  for (let i of Object.values(e)) {
    if (i.status !== "running" && i.status !== "pending" || Tn(i) && i.forkWorker) continue;
    let u = o(i);
    if (u !== void 0) {
      let g = r.get(u) ?? [];
      g.push(i), r.set(u, g);
    }
  }
  let s = (i) => {
    if (Tn(i)) return i.agentType !== "main-session" && i.status === "running" && i.isBackgrounded && i.abortController !== void 0;
    if (pp(i)) return i.kind !== "monitor" && i.status === "running" && i.isBackgrounded && i.shellCommand !== null && i.shellCommand.detach !== void 0;
    if (fLr(i)) return i.status === "running" && i.v2Run === void 0 && i.scriptPath !== void 0 && i.workflowRunId !== void 0 && i.abortController !== void 0;
    return false;
  }, d = (i, u) => {
    u.push(i.id);
    let g = s(i);
    for (let k of r.get(i.id) ?? []) g = d(k, u) && g;
    return g;
  };
  for (let i of Object.values(e)) {
    if (!(Tn(i) ? i.parentAgentId === void 0 : pp(i) ? i.agentId === void 0 : fLr(i))) continue;
    let g = [], k = d(i, g);
    for (let h of g) n.set(h, k);
  }
  return n;
}
function ngr(e, n) {
  return pp(e) && (n.get(e.id) ?? false);
}
function lUe(e, n) {
  return SIe() && (e.agentId === void 0 || (n.get(e.agentId) ?? false));
}
function rgr(e, n) {
  return Tn(e) && (n.get(e.id) ?? false);
}
function rIn(e, n) {
  return fLr(e) && (n.get(e.id) ?? false);
}
function u6e(e, n) {
  return n.get(e.id) ?? false;
}
function Vxt(e, n = FX(e)) {
  let o = xwe(e);
  return F(Object.values(e), (r) => u6e(r, n)) + F(Om(), (r) => lUe(r, n)) + o.size;
}
function qxt(e, n = FX(e)) {
  return JB(e).count - Vxt(e, n);
}
function f6e(e, n = FX(e)) {
  let o = 0, r = 0, s = 0;
  for (let d of Object.values(e)) {
    if (!rIn(d, n)) continue;
    let i = 1 / 0;
    for (let u of d.workflowProgress) if (u.type === "workflow_agent" && u.state === "error") i = Math.min(i, u.index);
    for (let u of d.workflowProgress) {
      if (u.type !== "workflow_agent") continue;
      if (u.state === "done") if (u.index > i) s++;
      else r++;
      else if (u.state === "progress" || u.state === "start" && !(u.queuedAt !== void 0 && u.startedAt === void 0)) o++;
    }
  }
  return { running: o, finished: r, rerun: s };
}
function Mno(e, n = FX(e)) {
  return qxt(e, n) > 0 || xwe(e).size > 0 || f6e(e, n).running > 0;
}
function Yxt(e, n) {
  let o = 0;
  for (let r of xwe(e)) if (!n.has(r)) o++;
  return o;
}
function Dno(e) {
  return e.shells.length > 0 || (e.agents?.length ?? 0) > 0 || (e.workflows?.length ?? 0) > 0 || e.cron.length > 0;
}
function oIn(e) {
  return { adopted_shells: e?.shells.length ?? 0, adopted_agents: e?.agents?.length ?? 0, adopted_workflows: e?.workflows?.length ?? 0, adopted_cron: e?.cron.length ?? 0, adopted_frame_live: e?.frameLive?.length ?? 0 };
}
function k8t(e) {
  return Eu((n, o, r) => {
    if (!r) return;
    Ft(r, e), a("tengu_refusal_fallback_latch_reset", { source: c(o), restored_to_explicit_override: r.restoredToExplicitOverride, model_scope: c(ZQ(r.fallbackModel)) });
  });
}
function Yus(e) {
  return Eu((n, o, r) => {
    if (r) e();
  });
}
function Ft(e, n) {
  let o, r;
  if (n((s) => {
    let d = e.overrideValue ?? e.forSessionValue ?? e.appStateModel, i = Yo() ? ZO(d, s.fastMode) : !!s.fastMode;
    return o = s.fastMode, r = i, s.mainLoopModel === e.appStateModel && s.mainLoopModelForSession === e.forSessionValue && i === !!s.fastMode ? s : { ...s, mainLoopModel: e.appStateModel, mainLoopModelForSession: e.forSessionValue, fastMode: i };
  }), r !== void 0) eM(o, r);
  Rp(e.overrideValue);
}
export {
  Ano,
  Clt,
  Cno,
  Dno,
  E8t,
  Eno,
  F6,
  FX,
  Ino,
  Jmr,
  Kxt,
  Mno,
  Ono,
  Pno,
  QPn,
  Qmr,
  Rlt,
  Rno,
  Sno,
  Tno,
  Vxt,
  Xmr,
  Ymr,
  Yus,
  Yxt,
  ZPn,
  Zmr,
  _no,
  aUe,
  bno,
  eIn,
  egr,
  f6e,
  gno,
  hno,
  k8t,
  kno,
  lUe,
  nIn,
  ngr,
  oIn,
  qxt,
  rIn,
  rgi,
  rgr,
  tIn,
  tgr,
  u6e,
  vno,
  wno,
  xlt,
  xno,
  xwe,
  yno
};
