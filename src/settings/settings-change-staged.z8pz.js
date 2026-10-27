// settings/settings-change-staged.z8pz.js — Claude Code 2.1.310 模块 chunk-z8pzcbhp.js
import { E4 } from "../shared/chunk-n23x7w17.js";
import { F, V, bns } from "../context/not-admin-owned.ersa.js";
import { c } from "../agents/third-party.ydpb.js";
import { R, d, v, G } from "../telemetry/anthropic-workspace-id.36ys.js";
import { fy, Vs } from "../fs/node-modules.gp4v.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { g, m } from "../telemetry/chunk-wn8xtaqg.js";
import { _, ee, Pz, ie, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { $t } from "../shared/chunk-j79dwkaq.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { wYr, mW, dP, Os, gW } from "../fs/utf-8.7pve.js";
import { ut } from "../shell/chunk-tjkwy3jp.js";
import { Qqt, aYr, y_, Alr, lYr, kxe, Cxe, OR } from "../fs/utf-8.fmbx.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { Jgn } from "../vendor/opentelemetry/chunk-6rkmrewr.js";
import { uv } from "../git/utf-8.vh7e.js";
import { hn } from "../fs/async-hooks.2k4e.js";
import { Ixe, Sfi } from "../remote/local-agent.we9a.js";
import { Epe, om, II } from "../shell/invalid-type.qnva.js";
import { TS } from "./workflow-launch-exec.t4r2.js";
import { rCt, RZ, ln } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { NXs, FXs } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { Gi, Eo, Lye, XSt, nWt, LBo } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { vw } from "../fs/cowork-plugins.r4h3.js";
import { wLo } from "../telemetry/chunk-27ds9t2x.js";
import { o, oe, C, u, me, B, T } from "../vendor/zod/string-format.k395.js";
import { k1, Qpe, Xse, __ } from "../fs/not-utf8.sqq6.js";
import { et } from "../shared/chunk-tftf1nn4.js";
var dht = 3, SDr = 5e3;
function EKn(n, e) {
  if (e === 0) return n;
  return n.map((r) => ({ ...r, oldStart: r.oldStart + e, newStart: r.newStart + e }));
}
function vKn(n, e, r, i) {
  let s = 0, h = 0;
  if (n.length === 0 && (r || i)) s = r ? $t(r, `
`) + 1 : 0, h = i ? $t(i, `
`) + 1 : 0;
  else s = n.reduce((p, w) => p + F(w.lines, (S) => S.startsWith("+")), 0), h = n.reduce((p, w) => p + F(w.lines, (S) => S.startsWith("-")), 0);
  return bns(s, h), wLo()?.add(s, { type: "added", model: Jgn(e) }), wLo()?.add(h, { type: "removed", model: Jgn(e) }), { lines_added: s, lines_removed: h };
}
function f$t(...n) {
  a("tengu_file_changed", vKn(...n));
}
function uhe({ filePath: n, oldContent: e, newContent: r, ignoreWhitespace: i = false, singleHunk: s = false, convertTabs: h = false }) {
  let p = E4(n, n, e, r, void 0, void 0, { ignoreWhitespace: i, context: s ? 1e5 : dht, timeout: SDr });
  if (!p) return [];
  return h ? m$t(p.hunks) : p.hunks;
}
function a8({ filePath: n, fileContents: e, edits: r, ignoreWhitespace: i = false }) {
  let s = E4(n, n, e, r.reduce((h, p) => {
    let { old_string: w, new_string: S } = p;
    if ("replace_all" in p ? p.replace_all : false) return h.replaceAll(w, () => S);
    else return h.replace(w, () => S);
  }, e), void 0, void 0, { context: dht, ignoreWhitespace: i, timeout: SDr });
  if (!s) return [];
  return m$t(s.hunks);
}
function m$t(n) {
  return n.map((e) => ({ ...e, lines: e.lines.map((r) => r.slice(0, 1) + Cxe(r.slice(1))) }));
}
import { join as ze } from "path";
import { randomBytes as pe } from "crypto";
import { constants as ge } from "fs";
import { lstat as re, open as Te, readdir as xe, realpath as _e, stat as Fe, unlink as he } from "fs/promises";
import { homedir as Re } from "os";
import { basename as Se, dirname as W, join as H } from "path";
function gJ(n) {
  return (n.startsWith("\uFEFF") ? n.slice(1) : n).replaceAll(`\r
`, `
`);
}
var pDr = 1, Ie = 64, Oe = 1048576, fDr = ".proposed-", De = /^[0-9a-f]{8}$/, Ne = 9e5, We = { userSettings: "user_settings", projectSettings: "project_settings", localSettings: "local_settings", flagSettings: "policy_settings", policySettings: "policy_settings" }, Ae = f(() => u({ id: o().min(1), path: o().min(1), resolvedPath: o().min(1), baseSha256: o().nullable(), proposedSha256: o(), proposedContent: o(), stagedAt: o(), by: u({ tool: B(["Write", "Edit"]), origin: B(["local", "served"]), sessionId: o() }) })), Be = f(() => u({ version: T(pDr), entries: C(Ae()) }));
function ne() {
  return H(Re(), ".claude", "state", "settings-review.json");
}
var we = ["policySettings", "flagSettings", ...TS];
function z(n) {
  let e = Eo(n);
  return we.find((r) => {
    let i = ln(r);
    return i !== void 0 && Eo(i) === e;
  });
}
async function ye(n) {
  let e;
  try {
    e = await j(n);
  } catch {
    return z(n);
  }
  return Y(n, e);
}
async function Y(n, e) {
  let r = z(n);
  if (r !== void 0) return r;
  let i = Eo(e);
  for (let s of we) {
    let h = ln(s);
    if (h === void 0) continue;
    try {
      if (Eo(await j(h)) === i) return s;
    } catch {
    }
  }
  return;
}
function fe(n) {
  let e = n.content.startsWith("\uFEFF");
  return { text: e ? n.content.slice(1) : n.content, encoding: n.encoding, bom: e, lineEndings: n.lineEndings };
}
function q(n) {
  return { readStore: async () => {
    try {
      return await hn().read(ne());
    } catch (e) {
      if (G(e)) return;
      throw e;
    }
  }, writeStore: async (e) => {
    let r = ne();
    await hn().mkdir(W(r), 448), await hn().atomicWrite(r, e, 384);
  }, deleteStore: async () => {
    try {
      await hn().delete(ne());
    } catch (e) {
      if (!G(e)) throw e;
    }
  }, readTarget: async (e) => {
    try {
      return fe(await __(await Ce(e), om)).text;
    } catch (r) {
      if (G(r)) return null;
      throw r;
    }
  }, writeTarget: async ({ path: e, resolvedPath: r, baseSha256: i, content: s, blockedOnceWritten: h }) => {
    let p;
    try {
      p = await uv(r, [r], { createParents: true });
    } catch (P) {
      if (P instanceof y_) return "redirected";
      throw P;
    }
    let w = Se(r), S = `${fDr}${pe(4).toString("hex")}`, y = H(W(r), mW), b = H(W(p.ioPath), `${w}${S}`), E = false;
    try {
      b = aYr(y, p.ioPath, S, false);
      let P = W(b) !== W(p.ioPath);
      await He(W(b), w);
      let x = async () => {
        let M;
        try {
          M = await p.readExisting(om);
        } catch (ue) {
          if (k1(ue)) return "changed";
          throw ue;
        }
        let te = M === null ? null : fe(M);
        return (te === null ? null : et(te.text)) === i ? te : "changed";
      }, D = await x();
      if (D === "changed") return "changed";
      let I = D?.encoding ?? "utf8", N = (D?.bom ? "\uFEFF" : "") + kxe(s, D?.lineEndings ?? "LF"), L = Buffer.from(N, I);
      await gW(b, L, 384), E = true;
      let J = P ? b : H(W(r), `${w}${S}`);
      if (await h(J)) return "blocked";
      if (await x() === "changed") return "changed";
      let k = await Le(b, J, L);
      if (k === null) return "tampered";
      await p.recheckBeforeWrite();
      let A = await re(b).catch(() => null);
      if (A === null || A.isSymbolicLink() || A.ino !== k.ino || A.dev !== k.dev) return "tampered";
      if (P) Qqt(y);
      try {
        await Os(b, p.ioPath), E = false;
      } catch (M) {
        if (!dP.has(v(M) ?? "")) throw M;
        await OR(p.ioPath, N, { encoding: I, stagingDir: y, refuseHardLinkedInPlace: true });
      }
      let ce = await Y(e, r), de = ce === void 0 ? void 0 : ln(ce);
      if (de !== void 0) rCt(de);
      return "written";
    } catch (P) {
      if (P instanceof Alr) return "hard_linked";
      if (P instanceof y_) return "redirected";
      if (P instanceof lYr) return "tampered";
      throw P;
    } finally {
      if (E) await he(b).catch((P) => {
        t(`settings review store: could not remove the proposal sibling (${d(P)}); the next accept of this file sweeps it`, { level: "warn" });
      });
      await p.close();
    }
  }, locate: j, isSettingsFile: async (e) => Lye(e) || nWt(e) && XSt(e, await K()), configChangeBlocked: async (e, r, i) => {
    let s = await Y(e, r);
    if (s === void 0) return false;
    if (n?.configChangeHookGate === void 0) return l(Error("settings review store: ConfigChange hook gate not wired")), true;
    return n.configChangeHookGate(We[s], i);
  }, afterApplied: async (e, r) => {
    let i = await Y(e, r);
    if (i !== void 0) Gi.notifyChange(i);
  }, now: () => /* @__PURE__ */ new Date() };
}
async function Le(n, e, r) {
  try {
    let i = O() === "windows";
    if (i && (await re(n)).isSymbolicLink()) return null;
    let s = await Te(n, ge.O_RDONLY | (i ? 0 : ge.O_NOFOLLOW));
    try {
      let h = await s.stat();
      if (!h.isFile() || h.nlink !== 1) return null;
      if (et(await s.readFile()) !== et(r)) return null;
      let p = await Fe(e);
      return p.dev === h.dev && p.ino === h.ino ? { dev: h.dev, ino: h.ino } : null;
    } finally {
      await s.close();
    }
  } catch {
    return null;
  }
}
async function He(n, e) {
  let r;
  try {
    r = await xe(n);
  } catch {
    return;
  }
  let i = `${e}${fDr}`, s = Date.now() - Ne;
  for (let h of r) {
    if (!h.startsWith(i) || !De.test(h.slice(i.length))) continue;
    try {
      if ((await re(H(n, h))).mtimeMs < s) await he(H(n, h));
    } catch {
    }
  }
}
async function Ce(n) {
  if (z(n) === "policySettings" || II(n)) return n;
  let e = await Pz(ie(), n);
  return e.linksResolvedPath ?? e.resolvedPath;
}
async function j(n) {
  return ae(await Ce(n));
}
async function ae(n) {
  try {
    return await _e(n);
  } catch (e) {
    if (!G(e) || W(n) === n) throw e;
    return H(await ae(W(n)), Se(n));
  }
}
async function K() {
  return LBo(ae);
}
async function U(n) {
  let e = await n.readStore();
  if (e === void 0) return [];
  let r;
  try {
    r = ee(e);
  } catch {
    r = void 0;
  }
  let i = Be().safeParse(r);
  if (!i.success) throw new ve();
  return i.data.entries;
}
class ve extends Error {
  constructor() {
    super("settings review store: malformed or of an unknown version");
  }
}
async function Me(n, e) {
  return await e.isSettingsFile(n.path) || await e.isSettingsFile(n.resolvedPath);
}
async function Z(n, e) {
  if (n.length === 0) {
    await e.deleteStore();
    return;
  }
  await e.writeStore(_({ version: pDr, entries: n }, null, 2) + `
`);
}
async function be(n, e = q()) {
  let r = await U(e), i = await e.readTarget(n.path), s = gJ(n.proposedContent), h = { id: pe(6).toString("hex"), path: n.path, resolvedPath: await e.locate(n.path), baseSha256: i === null ? null : et(i), proposedSha256: et(s), proposedContent: s, stagedAt: e.now().toISOString(), by: n.by }, p = Eo(h.path), w = Eo(h.resolvedPath), S = [...r.filter((b) => Eo(b.path) !== p && Eo(b.resolvedPath) !== w), h], y = 0;
  while (S.length > Ie || _(S).length > Oe) {
    let b = S.findIndex((E) => E !== h && E.by.sessionId === h.by.sessionId);
    if (b === -1) throw Error("settings review store: no room, proposal not staged");
    S.splice(b, 1), y++;
  }
  if (y > 0) t(`settings review store: full, dropped the ${y} oldest pending proposal(s)`, { level: "warn" });
  return await Z(S, e), h;
}
async function a1s(n, e = q()) {
  let i = (await U(e)).find((w) => w.id === n.id);
  if (i === void 0 || !await Me(i, e)) return "gone";
  if (_(i) !== _(n) || et(i.proposedContent) !== i.proposedSha256) return "stale";
  if (await e.locate(i.path) !== i.resolvedPath) return "redirected";
  let s = await e.readTarget(i.resolvedPath);
  if ((s === null ? null : et(s)) !== i.baseSha256) return "conflict";
  let p;
  try {
    p = await e.writeTarget({ path: i.path, resolvedPath: i.resolvedPath, baseSha256: i.baseSha256, content: i.proposedContent, blockedOnceWritten: (w) => e.configChangeBlocked(i.path, i.resolvedPath, w) });
  } catch (w) {
    let S = v(w);
    if (S === "EACCES" || S === "EPERM" || S === "EROFS" || S === "EBUSY") return "not_writable";
    throw w;
  }
  switch (p) {
    case "changed":
      return "conflict";
    case "redirected":
    case "hard_linked":
    case "blocked":
    case "tampered":
      return p;
    case "written":
      break;
  }
  await e.afterApplied(i.path, i.resolvedPath);
  try {
    let w = await U(e);
    await Z(w.filter((S) => S.id !== i.id), e);
  } catch (w) {
    t(`settings review store: applied, but the store could not be updated (${d(w)})`, { level: "warn" });
  }
  return "applied";
}
async function l1s(n, e = q()) {
  let r = await U(e), i = r.filter((s) => s.id !== n);
  if (i.length === r.length) return false;
  return await Z(i, e), true;
}
async function d1s(n, e = q()) {
  let r = await U(e), i = e.now().getTime(), s = r.filter((h) => {
    let p = Date.parse(h.stagedAt);
    return Number.isFinite(p) && p >= n.getTime() && p <= i;
  });
  if (s.length !== r.length || r.length === 0) await Z(s, e);
  return r.length - s.length;
}
function mDr(n, e) {
  let r = (p) => {
    if (p === null) return {};
    try {
      let w = me(o(), oe()).safeParse(ee(gJ(p)));
      return w.success ? w.data : void 0;
    } catch {
      return;
    }
  }, i = r(n), s = r(e);
  if (s === void 0) return ["not valid JSON"];
  if (i === void 0) return ["replaces a file that was not valid JSON"];
  let h = [];
  for (let p of /* @__PURE__ */ new Set([...Object.keys(i), ...Object.keys(s)])) if (!(p in i)) h.push(`adds ${p}`);
  else if (!(p in s)) h.push(`removes ${p}`);
  else if (_(i[p]) !== _(s[p])) h.push(`changes ${p}`);
  return h;
}
function $e({ session: n, served: e }) {
  return !e && Ixe() && NXs(n);
}
function gDr({ session: n, served: e, cause: r }) {
  if (r !== "unapproved") return r;
  if ($e({ session: n, served: e })) return "card";
  return !e && Sfi() ? "cloud" : "review";
}
function hDr(n, e) {
  switch (e) {
    case "card":
      return `Not applied: ${n} was NOT modified. In the Claude desktop app, a change to a Claude Code settings file applies only when the user approves that edit on its permission card. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "cloud":
      return `Not applied: ${n} was NOT modified. A change to a Claude Code settings file applies only when a person approves it at the computer that Claude Code runs on, and a cloud session cannot take that approval. Approving the edit in this session does not apply it. The /settings-review command does not run in a cloud session, and on another computer it would not list this change. Tell the user what you meant to change. If the file is committed to a repository, the user can make the change themselves outside this session and push it. Do not retry the edit or try to make the same change another way.`;
    case "linked":
      return `Not applied: ${n} was NOT modified. The user approved this edit on its permission card, but this path reaches a Claude Code settings file through a symbolic link, so the approval does not apply it. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "policy":
      return `Not applied: ${n} was NOT modified. The user approved this edit on its permission card, but this path is, or may be, a managed policy settings file or the --settings file, so the approval does not apply it. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "review":
      return `Staged for review: ${n} was NOT modified. Changes to Claude Code settings files made without the owner of this computer approving them in person are held for their review; the owner applies or discards them with /settings-review, and the change takes effect only if they accept it. Do not retry the edit or try to make the same change another way.`;
  }
}
class se extends R {
  constructor(n) {
    super(`Not written: ${n} was NOT modified. Claude Code could not resolve where its managed settings folder is, so it cannot rule out that this path is a managed settings file, and it does not write the file. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`, "settings write refused: a managed drop-in directory did not resolve");
  }
}
var wKn = "Staged for your review · not applied until you accept it in /settings-review";
async function yDr(n, e, r) {
  let i = n.remoteCall !== void 0;
  if (!wYr({ served: i })) return;
  if (i) {
    let { settingsSpellings: y, unclassified: b } = await Pe(e), [E] = y;
    if (E !== void 0) return { path: E, cause: "unapproved" };
    if (b !== void 0) throw new se(r.absolutePath);
    return;
  }
  if (n.permissionSurface !== void 0) return;
  let { settingsSpellings: s, unclassified: h, dropIns: p } = await Pe(e), [w] = s;
  if (w === void 0) {
    if (h !== void 0) throw new se(r.absolutePath);
    return;
  }
  if (!FXs(n.session, n.toolUseId, r)) return { path: w, cause: "unapproved" };
  let S = await je(r.absolutePath, e, s, p ?? await K());
  return S === "covered" ? void 0 : { path: w, cause: S };
}
async function Pe(n) {
  let e = n.some(nWt) ? await K() : void 0;
  return { settingsSpellings: n.filter((r) => Lye(r) || e !== void 0 && XSt(r, e)), unclassified: e === void 0 || e.allResolved ? void 0 : n.find(nWt), dropIns: e };
}
async function je(n, e, r, i) {
  if (!r.includes(n)) return "linked";
  let s = e.filter((p) => p !== n);
  if (await Ge(e, i)) return s.length === 0 ? "policy" : "linked";
  if (s.length === 0) return "covered";
  let h = z(n);
  if (h === void 0) return "linked";
  for (let p of s) if (await ye(p) !== h) return "linked";
  return "covered";
}
async function Ge(n, e) {
  if (!e.allResolved || !e.allLocated) return true;
  let r = /* @__PURE__ */ new Set();
  for (let i of Ue()) {
    r.add(vw(i));
    try {
      r.add(vw(await j(i)));
    } catch {
      return true;
    }
  }
  for (let i of n) {
    let s;
    try {
      s = await j(i);
    } catch {
      return true;
    }
    if (XSt(i, e) || XSt(s, e) || r.has(vw(ut(i))) || r.has(vw(s))) return true;
  }
  return false;
}
function Ue() {
  let n = ln("flagSettings");
  return [...Epe(RZ()).map((e) => ze(e, "managed-settings.json")), ...n === void 0 ? [] : [n]];
}
async function _Dr(n) {
  let e = n.writeCtx.remoteCall === void 0 ? "local" : "served", r;
  try {
    r = await be({ path: n.absolutePath, proposedContent: n.proposedContent, by: { tool: n.tool, origin: e, sessionId: n.writeCtx.remoteCall?.origin.callerSessionId ?? V() } });
  } catch (i) {
    throw m("settings_quarantine", "stage_failed"), new R(`Could not stage this change to a Claude Code settings file for the owner's review, so nothing was written. (${d(i)})`, "settings review store: stage failed");
  }
  return a("tengu_settings_change_staged", { origin: c(e), tool: c(n.tool), source_kind: c(z(n.absolutePath) ?? "other"), key_count: mDr(n.currentContent, n.proposedContent).length }), g("settings_quarantine"), r;
}
import { open as Ve } from "fs/promises";
var X = 8192, Y7e = 10485760, Q = 10, Xe = 13;
async function c1s(n, e, r = 3) {
  let i = await Tan(n);
  if (i === null) return null;
  try {
    return await bDr(i, e, r);
  } finally {
    await i.close();
  }
}
async function Tan(n) {
  if (Vs(n) || fy(n)) return null;
  if (n.includes("\0")) return null;
  try {
    return await Ve(n, "r");
  } catch (e) {
    if (G(e)) return null;
    throw e;
  }
}
async function bDr(n, e, r) {
  if (e === "") return { content: "", lineOffset: 1, truncated: false };
  let i = Buffer.from(e, "utf8"), s = 0;
  for (let P = 0; P < i.length; P++) if (i[P] === Q) s++;
  let h, p = i.length + s - 1, w = Math.max(X, p), S = Buffer.allocUnsafe(w + p), y = 0, b = 0, E = 0;
  while (y < Y7e) {
    let { bytesRead: P } = await n.read(S, E, w, y);
    if (P === 0) break;
    let x = E + P;
    if (y === 0 && Qpe(S.subarray(0, x)) !== "utf8") return { content: "", lineOffset: 1, truncated: false };
    let D = ke(S, i, x), I = i.length;
    if (D === -1 && s > 0) h ??= Buffer.from(e.replaceAll(`
`, `\r
`), "utf8"), D = ke(S, h, x), I = h.length;
    if (D !== -1) {
      let L = y - E + D;
      return await qe(n, S, L, I, r, b + le(S, 0, D));
    }
    y += P;
    let N = Math.min(p, x);
    b += le(S, 0, x - N), E = N, S.copyWithin(0, x - E, x);
  }
  return { content: "", lineOffset: 1, truncated: y >= Y7e };
}
async function kKn(n) {
  let e = Buffer.allocUnsafe(X), r = 0;
  for (; ; ) {
    if (r === e.length) {
      let s = Buffer.allocUnsafe(Math.min(e.length * 2, Y7e + X));
      e.copy(s, 0, 0, r), e = s;
    }
    let { bytesRead: i } = await n.read(e, r, e.length - r, r);
    if (i === 0) break;
    if (r += i, r > Y7e) return null;
  }
  return Xse(e.subarray(0, r));
}
function ke(n, e, r) {
  let i = n.indexOf(e);
  return i === -1 || i + e.length > r ? -1 : i;
}
function le(n, e, r) {
  let i = 0;
  for (let s = e; s < r; s++) if (n[s] === Q) i++;
  return i;
}
function Ee(n) {
  return (n & 192) === 128;
}
function Je(n) {
  return n >= 240 ? 4 : n >= 224 ? 3 : n >= 192 ? 2 : 1;
}
function Ye(n, e) {
  let r = n.toString("utf8", 0, e);
  return r.includes("\r") ? r.replaceAll(`\r
`, `
`) : r;
}
async function qe(n, e, r, i, s, h) {
  let p = Math.min(r, X), { bytesRead: w } = await n.read(e, 0, p, r - p), S = r, y = 0;
  for (let k = w - 1; k >= 0 && y <= s; k--) {
    if (e[k] === Q) {
      if (y++, y > s) break;
    }
    S--;
  }
  let b = r - w;
  for (let k = 0; k < 3 && S < r && Ee(e[S - b]); k++) S++;
  let E = r - S, P = h - le(e, w - E, w) + 1, x = r + i, { bytesRead: D } = await n.read(e, 0, X, x), I = x;
  y = 0;
  for (let k = 0; k < D; k++) if (I++, e[k] === Q) {
    if (y++, y >= s + 1) break;
  }
  for (let k = 0; k <= 3 && I - 1 - k >= x; k++) {
    let A = e[I - 1 - k - x];
    if (Ee(A)) continue;
    if (A >= 192 && Je(A) > k + 1) I -= k + 1;
    break;
  }
  if (I > x && e[I - 1 - x] === Xe) I--;
  let N = I - S, L = N <= e.length ? e : Buffer.allocUnsafe(N), { bytesRead: J } = await n.read(L, 0, N, S);
  return { content: Ye(L, J), lineOffset: P, truncated: false };
}
export {
  EKn,
  SDr,
  Tan,
  Y7e,
  _Dr,
  a1s,
  a8,
  bDr,
  c1s,
  d1s,
  dht,
  f$t,
  fDr,
  gDr,
  gJ,
  hDr,
  kKn,
  l1s,
  m$t,
  mDr,
  pDr,
  uhe,
  vKn,
  wKn,
  yDr
};
