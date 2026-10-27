// artifacts/read-failed.1ns4.js — Claude Code 2.1.310 模块 chunk-1ns41pc4.js
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { g, p } from "../telemetry/chunk-wn8xtaqg.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Rn } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { Lt, Su, Jt, xn, cA, Vl } from "./cobalt-plinth-lovage.hxm5.js";
import { ae } from "../permissions/max-thinking-tokens.hx3h.js";
import { At, tc, ym } from "./artifact-share-status.jp2v.js";
import { Pd, yu, Bv } from "../permissions/bot-protected-tengu-atomic-magpie.zc9j.js";
import { Zgn } from "../settings/gable-onyx-sluice.5y5b.js";
import { rS } from "../permissions/from-url.eejb.js";
import { cO, zte } from "./template-instance.kxgt.js";
import { Gen } from "./str-replace.9xk6.js";
import { bTr, DT, Cve, Mpt, Ime, MTr, Rbo, Hpt } from "./cobalt-plinth-linden.561n.js";
import { Oae, fte } from "../ide/foreign-read.2ne7.js";
import { jae } from "./artifact-file-list.2t1b.js";
import { yct, Obs, E9e } from "../skills/read-file.gwyf.js";
import { Zp } from "../permissions/chunk-y3hq6skv.js";
import { ef } from "../telemetry/cobalt-plinth-damson.6bqz.js";
import { Cs } from "../shared/chunk-pdcynnfk.js";
function O(n, e) {
  return _(cA(n, e));
}
var H = 3e3;
function cbr(n, e) {
  let i = n.mcpInfo?.effectiveMaxPermission;
  if (i !== void 0 && i !== "allow") return "permission_ceiling";
  if (n.requiresUserInteraction?.()) return "requires_interaction";
  return [...Pd(e), ...yu(e)].some((r) => Bv(e, n, r)) ? "rule" : void 0;
}
var j = /^The user just created a new, empty (?:[^\n<]{1,80}? )?artifact at (https?:\/\/\S+) and has it open beside this conversation/, R = /artifact at (https?:\/\/\S+) and has it open beside this conversation/g, U = /<system-reminder>([\s\S]*?)<\/system-reminder>/g;
function ubr(n, e) {
  let i = [];
  for (let r of n) {
    if (r.type === "assistant") break;
    if (r.type !== "user") continue;
    if (r.origin !== void 0 && r.origin.kind !== "human" || r.verifiedSlackHumanTurn === true || r.projectsUserTurn === true || r.isMeta === true) continue;
    let { content: s } = r.message, a = typeof s === "string" ? [s] : s.flatMap((o) => o.type === "text" ? [o.text] : []);
    for (let o of a) i.push(...YHn(o, e));
  }
  return i;
}
var F = "The user just created a new, empty ";
function B(n) {
  let e = new RegExp(R), i = n.indexOf(F);
  while (i !== -1) {
    let r = i + F.length;
    e.lastIndex = r;
    let s = e.exec(n);
    if (n.slice(r, s?.index).includes("<")) return true;
    i = s === null ? -1 : n.indexOf(F, s.index + s[0].length);
  }
  return new Set([...n.matchAll(R)].map((r) => r[1])).size > 1;
}
function YHn(n, e) {
  if (!e(n) || B(n)) return [];
  return [...n.matchAll(U)].map((i) => (i[1] ?? "").trim()).filter((i) => i !== "");
}
function pbr(n) {
  if (new Set(n.flatMap((r) => [...r.matchAll(R)].map((s) => s[1]))).size > 1) return null;
  let i;
  for (let r of n) {
    let s = j.exec(r)?.[1], a = s === void 0 ? null : Jt(s);
    if (s === void 0 || a === null) continue;
    if (i !== void 0 && i.slug !== a.slug) return null;
    i ??= { slug: a.slug, env: a.env, url: s };
  }
  return i === void 0 ? null : { blankArtifact: i };
}
var W = "The artifact named in this session's opening context carries an instructions file; it is below, read ahead for you. The artifact's own content was not read: read it as the opening context asks; that read's result will repeat these instructions.";
function fbr(n, e) {
  return !ym(e.slug) && Oae(n, e, "files", "land");
}
function Sco(n, e) {
  return !ym(e) && fte(n, e);
}
var u = "artifact-type/reference/";
async function K(n, e, i, r = { warmShareEntry: Zp, readTypeInstructions: Mpt, isArtifactReadEnabled: Zgn, filesConsented: fbr, listArtifactTypes: Cve, listFrameFiles: jae }, s) {
  let a = n.blankArtifact, o = performance.now(), c = Cs(i, { timeoutMs: H, refTimer: true });
  try {
    if (!r.isArtifactReadEnabled()) return { kind: "skipped", reason: "artifact_off" };
    if (!Hpt()) return { kind: "skipped", reason: "catalog_off" };
    let y = ae(e), A = Rn(e.options.tools ?? [], Lt), w = A === void 0 ? "not_in_pool" : cbr(A, y);
    if (w !== void 0) return { kind: "skipped", reason: "tool_unavailable", detail: w };
    let k = a.url;
    for (let l of ["deny", "ask"]) if (rS(y, a, k, l) !== null) return { kind: "skipped", reason: "rule", detail: l };
    await r.warmShareEntry(a, { abortController: { signal: c.signal }, credentials: e.credentials }, "opening_prefetch");
    let N = ae(e);
    for (let l of ["deny", "ask"]) if (rS(N, a, k, l) !== null) return { kind: "skipped", reason: "rule", detail: l };
    let E = At(a.slug);
    if (!tc(E)) {
      if (c.signal.aborted && !i.aborted) return { kind: "skipped", reason: "read_failed", detail: "the share probe took longer than the prefetch budget" };
      return { kind: "skipped", reason: "not_owned" };
    }
    if (E?.typeLocked !== true) return { kind: "skipped", reason: "not_typed" };
    let f = await r.readTypeInstructions(a, c.signal, e.credentials);
    if (f.kind !== "read") return { kind: "skipped", reason: "instructions_unavailable", detail: f.kind === "unavailable" ? f.why : "none" };
    let D = Ime(f);
    try {
      await r.listArtifactTypes({ firstParty: true, signal: c.signal, credentials: e.credentials, httpOnly: true });
    } catch {
    }
    let m = await q(a, c.signal, e, r), C = xn(a), x = mbr(ef());
    if (m.why === "listing failed") p("artifact_opening_prefetch", "listing_failed");
    if (!m.listed) t(`[artifactOpeningPrefetch] type files of ${a.slug} not saved: not attempted, the type's reference pages were not listed (the files consent does not stand for this artifact, or its listing failed)`);
    let P = !m.listed ? null : f.clipped ? await (r.readWholeInstructions ?? G)(a, c.signal, e.credentials) : f.text, I = P === null ? null : (await E9e({ type: { artifact: a, instructions: P, pages: m.pages.map((l) => u + l), stillConsented: () => r.filesConsented(e, a) }, system: null }, e, c.signal, r.readFrameFile)).type, T = m.listed && Gen(e.options.tools ?? []) ? Rbo(f.text) : null, v = T ?? "", h = I === null ? null : { ...I, urlReadAsked: v !== "", skillByRead: !f.clipped }, b = h === null ? null : Obs(h, [v, bTr(f.text), MTr(f.text)].map((l) => l.trim()).filter((l) => l !== "").map((l) => `

${l}`).join(""));
    if (h !== null && b === null) t(`[artifactOpeningPrefetch] type files of ${a.slug} saved but not used: SKILL.md does not fit one Bash output, the text stays inline`);
    if (h !== null && b !== null) return { kind: "attached", content: b, manifest: V(C, x, T === null && s !== void 0 && M(e, s)), typeFiles: h, durationMs: performance.now() - o };
    return { kind: "attached", content: W + D, manifest: X(C, m, x, T === null && s !== void 0 && M(e, s)), typeFiles: null, durationMs: performance.now() - o };
  } catch (y) {
    return { kind: "skipped", reason: "read_failed", detail: c.signal.aborted && !i.aborted ? "the read took longer than the prefetch budget" : d(y) };
  } finally {
    c.cleanup();
  }
}
async function G(n, e, i) {
  let r = await cO({ ...n, file: DT }, e, i, "artifact_type_instructions_read");
  if (r.err !== null) return t(`[artifactOpeningPrefetch] type files of ${n.slug} not saved: the whole SKILL.md was not read (${zte(r)})`), null;
  return Vl(r.html);
}
async function OCi(n, e, i, r, s) {
  let a = pbr([...ubr(e, r.isSystemReminderOnlyText), ...i === null ? [] : YHn(i, r.isSystemReminderOnlyText)]);
  if (a === null) return null;
  let o = await K(a, n, n.abortController.signal, s, r.isDeferredTool);
  if (t(o.kind === "attached" ? `[artifactOpeningPrefetch] attached: ${o.content.length} chars + index ${o.manifest.length} chars in ${Math.round(o.durationMs)}ms` : `[artifactOpeningPrefetch] skipped: ${o.reason}${o.detail === void 0 ? "" : ` (${o.detail})`}`), o.kind === "attached") return g("artifact_opening_prefetch", { duration_ms: Math.round(o.durationMs) }), { content: `${o.content}

${o.manifest}`, slug: a.blankArtifact.slug, typeFiles: o.typeFiles };
  if (o.reason === "read_failed" || o.detail === "listing failed") p("artifact_opening_prefetch", o.reason === "read_failed" ? "read_failed" : "listing_failed");
  return null;
}
async function q(n, e, i, r) {
  if (!r.filesConsented(i, n)) return { listed: false, pages: [], why: "no files consent" };
  let s;
  try {
    s = await r.listFrameFiles(n, e, i.credentials);
  } catch {
    s = null;
  }
  if (s?.kind !== "ok") return { listed: false, pages: [], why: "listing failed" };
  return { listed: true, pages: s.files.map((a) => a.path).filter((a) => a.startsWith(u) && a.endsWith(".md")).map((a) => a.slice(u.length)).filter((a) => !a.includes("/")).sort() };
}
function mbr(n) {
  return { readFile: n ? (e, i) => `Artifact action "read", url "${e}", path ${O(i, S)}` : (e, i) => `Artifact action "read_file", url "${e}", path ${O(i, S)}`, listFiles: n ? (e) => `Artifact action "list", url "${e}", scope "files"` : (e) => `Artifact action "list_files", url "${e}"`, readArtifact: (e) => `Artifact action "read", url "${e}"` };
}
var Y = yct;
function z(n, e, i) {
  let r = e.slice(0, Y), s = r.map((a) => `- ${O(u + a, S)}: ${i.readFile(n, u + a)}`);
  if (e.length > r.length) s.push(`- and ${e.length - r.length} more under ${u} (${i.listFiles(n)} names them)`);
  return [`Reference pages of the type of the artifact at ${n}, on the artifact and not loaded (the names are the type's own files, listed as data):`, ...s, `Issue every file read you need, and the artifact read itself (${i.readArtifact(n)}), in ONE message (parallel tool calls); then Read any file a result says was saved; then write. Use exactly the call shapes given here; no other fields.`].join(`
`);
}
function M(n, e) {
  let i = Rn(n.options.tools ?? [], Su);
  return i !== void 0 && !e(i);
}
var L = "ArtifactData is loaded in this session: read the canvas (ArtifactData list / get on this url) in that same first message rather than searching for the tool first.";
function X(n, e, i, r) {
  let s = z(n, e.pages, i);
  return [`Loaded ahead of this turn for the artifact at ${n}: the instructions file found on it (SKILL.md) — inlined above; do not read it again.`, ...e.pages.length > 0 ? [s] : [...e.listed ? [] : [`Its type's reference pages are on the artifact under ${u} (${i.listFiles(n)} names them).`], ...s.split(`
`).slice(1)], ...r ? [L] : []].join(`
`);
}
function V(n, e, i) {
  return [`Make that Bash call and the artifact read itself, ${e.readArtifact(n)}, in ONE message (parallel tool calls); then write.`, ...i ? [L] : []].join(`
`);
}
var S = 128;
export {
  OCi,
  Sco,
  YHn,
  cbr,
  fbr,
  mbr,
  pbr,
  ubr
};
