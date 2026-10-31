// linux/artifacts/read-page-data.js — Claude Code 2.1.310（linux）模块 chunk-w7sca1cx.js
import { is } from "../fs/async-hooks.93b1.js";
import { L } from "../context/not-admin-owned.js";
import { m } from "../telemetry/chunk-9d6962d2.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { Vg } from "../shared/chunk-d2c47492.js";
import { Na } from "../fs/content-encoding.js";
import { i } from "../shared/environment.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { Uu, Nc } from "../remote/local-agent.js";
import { fe } from "../shared/async-hooks.5238.js";
import { ut } from "../shell/chunk-8eebd6c6.js";
import { Ut } from "../settings/global-config-and-gates.js";
import { cA } from "../shell/invalid-type.js";
import { dn } from "../mcp/chunk-0e2a1db6.js";
import { lc } from "../fs/async-hooks.7959.js";
import { Lt, Bg, kNe, je, Jt, LRe, al, xn, wH, rB, s5r, Kl, jz, f_, qSn } from "./cobalt-plinth-lovage.js";
import { fc } from "../agents/in-process-teammate.32be.js";
import { Z } from "./same-account.js";
import { two, jAr, Ag } from "./cobalt-plinth-samphire.js";
import { $Y, kU, K1o, Qpn, emn, V1o } from "../vendor/highlight/file-path.js";
import { du } from "./cobalt-plinth-comfrey.js";
import { Dce, vwt, ny } from "../mcp/cobalt-plinth-sedge.js";
import { ip, xw } from "../shared/chunk-0542336f.js";
import { IT } from "./template-instance.js";
import { Ct, vGt, dz, $f, rtt, zE, tc } from "./artifact-share-status.js";
import { Ih, pb, sh, ae } from "../permissions/max-thinking-tokens.js";
import { VZt, fCs } from "./workshop-decisions.0faf.js";
import { u1, _tn } from "./artifact-comment-reply.js";
import { E4, Fv, kOe, h3, Fft } from "./store-unavailable.9d8d.js";
import { T7, k$ } from "../settings/gable-onyx-sluice.js";
import { KOt, r3, GW, rJ, t1, Aae, Ip, AT, xF } from "../agents/artifact-inherited-type-grant.js";
import { mAe } from "../tasks/bridge-ingress-demoted.js";
import { p$ } from "../telemetry/bridge-resume-respects-local-owner.js";
import { WW, WOt } from "./artifact-routine-first-publish-unasked.js";
import { bN, MIe } from "../ide/foreign-read.js";
import { pen, CT, rEe } from "../permissions/from-url.js";
import { TDt, S_o, w_o, v_o, IA, Cen, Ren } from "./str-replace.js";
import { NZt, SP, Tg, VBe, Jve } from "./cobalt-plinth-willow.js";
import { _4s } from "../shared/create-from-type.js";
import { z4, aG } from "../core/conversation-engine.js";
import { LUe } from "./artifact-delete.js";
import { J6 } from "../shared/artifact-files.js";
import { i1 } from "../shared/chunk-eac3d901.js";
import { Yc } from "../shared/chunk-a5f59e6a.js";
import { qn } from "../web/allow-web-fetch.js";
import { Mgn } from "../ide/opener-missing.js";
import { H } from "../shared/chunk-7027e6d5.js";
function k() {
  return Ut() ? "bg" : fc() ? "teammate" : p$() ? "remote" : Nc() ? "desktop" : Uu() === "claude-vscode" ? "vscode" : null;
}
function qao(e, n, r) {
  let o = Z();
  if (n.agentId !== void 0 || !xF(n).hasInteractiveUI || o.accountEpoch !== r.account || o.conversationEpoch !== r.conversation) return;
  o.deferredSurface.set(e.slug, { slug: e.slug, url: e.url });
}
function Yao(e, n) {
  let r = Z(), o = r.deferredSurface.get(n);
  if (o === void 0) return;
  if (r.remoteControlSkippedSlugs.has(n) && mAe(e.options.messageClientPlatform)) return;
  if (r.deferredSurface.delete(n), Udt(e, true, o, false) === "auto_open_skipped_remote_control") r.deferredSurface.set(n, o);
}
function Udt(e, n, r, o, s) {
  if (!n) return null;
  let u = two(), a = k(), l = mAe(e.options.messageClientPlatform), d = Z(), p = o && !d.remoteControlSkippedSlugs.has(r.slug) ? "auto_open_skipped_redeploy" : a !== null ? `auto_open_skipped_${a}` : l ? "auto_open_skipped_remote_control" : is(i.CLAUDE_CODE_ARTIFACT_AUTO_OPEN) ? "auto_open_skipped_env" : null;
  if (p !== null) {
    if (p === "auto_open_skipped_remote_control") d.remoteControlSkippedSlugs.add(r.slug);
    return jAr("frame_surfaced", { slug: r.slug, via: u, mode: p, credentials: e.credentials }), p;
  }
  d.remoteControlSkippedSlugs.delete(r.slug);
  let g = r.url;
  try {
    let c = new URL(r.url);
    c.searchParams.set("via", "auto_preview"), g = c.toString();
  } catch {
  }
  return Mgn(g).then((c) => {
    if (!c.ok) t(`[artifact] auto-open failed (${c.reason}): ${c.detail ?? ""}`);
    s?.(c.ok), jAr("frame_surfaced", { slug: r.slug, via: u, mode: c.ok ? "auto_open_ok" : `auto_open_failed_${c.reason}`, credentials: e.credentials });
  }), null;
}
import { join as T } from "path";
var E = null;
function Wys(e, n) {
  return e.getAppState().frameUrls[n];
}
function e3e(e, n) {
  return e ? { type: "safetyCheck", reason: n, classifierApprovable: false } : { type: "other", reason: n };
}
function Xg(e, n) {
  let r = jz(Ct(e.slug)?.title || aG(n.getAppState().frameUrls).find(([, o]) => o.title && al(o.url) === e.slug)?.[1].title);
  return { url: xn(e), ...r && { title: r } };
}
function Xao(e, n, r, { mcpPublished: o = false } = {}) {
  let s = `${z4}${n.slug}`, u = s, a = false, l = false, d;
  if (e.setAppState((f) => {
    let [p, g] = Object.entries(f.frameUrls).find(([, h]) => al(h.url) === n.slug) ?? [];
    if (a = p !== void 0 && g?.dismissed !== true, u = p !== void 0 && p !== s ? p : s, l = f.frameOpenFailedPath === u, o && p !== void 0 && p !== s && g !== void 0) {
      let { [p]: h, ...R } = f.frameUrls, { dismissed: J, ...v } = g;
      return d = { ...R, [p]: { ...v, updatedAt: Date.now() } }, { ...f, frameUrls: d };
    }
    if (p !== void 0 && g?.dismissed === true) {
      let { dismissed: h, ...R } = g;
      return { ...f, frameUrls: { ...f.frameUrls, [p]: R } };
    }
    if (a && f.frameUrls[s] === void 0) return f;
    let { [s]: c, ...w } = f.frameUrls;
    return d = { ...w, [s]: { url: xn(n), updatedAt: Date.now(), ...(r ?? c?.title) !== void 0 && { title: r ?? c?.title }, ...(o || c?.mcpPublished === true) && { mcpPublished: true }, ...(o || c?.mcpPublishedHere === true) && { mcpPublishedHere: true } } }, { ...f, frameUrls: d };
  }), o && d !== void 0) i1(d);
  return { rowKey: u, alreadyShown: a, lastOpenFailed: l };
}
function F(e, n) {
  LUe(n, { updateAppState: e.setAppState, context: e });
}
function EXt(e, n, r) {
  e.setAppState((o) => {
    if (r) return o.frameOpenFailedPath === n ? { ...o, frameOpenFailedPath: null } : o;
    if (o.frameOpenFailedPath === n) return o;
    return { ...o, frameOpenFailedPath: n, frameOpenFailedSeen: false };
  });
}
function Bdt(e, n) {
  return tc(e) && GW(e) && !t1(e) ? " (yours; a co-writer has also published to it)" : n === "files" && tc(e) && rJ(e) ? " (yours; its files come from an Artifact type its publisher wrote)" : $f(e);
}
function x_r(e, n) {
  return tc(e) && GW(e) && !t1(e) ? " [ownership: yours, co-written: a non-owner has also published to it]" : n === "files" && tc(e) && rJ(e) ? qSn : `${zE(e)}${dz(e)}`;
}
function I(e) {
  return _([e.path, e.from.slug, e.from.path, e.from.ver ?? ""]);
}
function Jao(e) {
  return L(e.map(I)).sort().join(`
`);
}
function P_r(e, n) {
  return (e ?? "") === Jao(n);
}
function jdt(e, n) {
  let { mode: r, modeBeforeRewrite: o } = ae(e);
  if (r === "auto" || o === "auto") return false;
  return T7(e.getAppState(), r === "plan" ? "artifactAssetUploadHumanConsentSlugs" : "artifactAssetUploadConsentSlugs", n);
}
function I_r(e, n, r, o, s, u, a = false) {
  let l = s && !t1(Ct(r.slug));
  if (WW(n) && (l || a) && o && !r3(e, n) && !MIe(n, r, tc(Ct(r.slug))) && (Ih(n) || pb(n) || bN(n))) throw m("artifact_cowritten_consent", "refused_unasked", { assets: u === "assets", ...!l && { from_type: true } }), new je(l ? `a co-writer has published to this artifact, so its ${u} are someone else's content — nothing was returned; retry the same action so it is checked again (the user is asked once where a prompt can reach them)` : `this artifact was created from an Artifact type, so its ${u} are the type publisher's content — nothing was returned; retry the same action so it is checked again (the user is asked once where a prompt can reach them)`, `${u === "files" ? "file" : "asset"}_${l ? "cowritten" : "from_type"}_unasked`);
}
function kXt(e, n, r) {
  return m("artifact_outside_org_consent", "refused_unasked", { assets: n === "asset_copy" }), new je(WOt(e, true, n === "file_copy" ? { retryUrl: r } : void 0), `${n}_outside_org_unasked`);
}
function ADn(e, n, r) {
  if (e === Dce) N(n, r);
}
function N(e, n) {
  throw m("artifact_outside_org_consent", "refused_unasked", { assets: n !== "files" }), new je(WOt(e), `${n === "files" ? "file" : "asset"}_outside_org_unasked`);
}
function t3e(e) {
  let { assetId: n, outDir: r } = Aae(e);
  if (n === void 0 || !Bg.test(n)) return;
  let o, s = false;
  try {
    if (r === void 0 || r === "") {
      let { url: u } = e, a = typeof u === "string" ? Jt(u) : null, l = a !== null ? J6(a.slug) : null;
      s = l !== null, o = l ?? fe();
    } else o = ut(r);
  } catch {
    return;
  }
  return { stem: T(o, n), ...s && { defaultDir: true } };
}
function GR(e, n = "", r = "url") {
  if (LRe(e) === void 0) return;
  let o = Jt(e), s = o !== null ? ` (${xn(o)})` : "";
  return { result: false, message: `\`${r}\` names a path inside the artifact — pass the artifact's own URL${s} as \`${r}\`${n}.`, errorCode: 4 };
}
function e4(e) {
  let n = (d) => {
    let f = e[d];
    return typeof f === "string" ? f : void 0;
  }, r = e.data, o = r !== null && typeof r === "object" && !Array.isArray(r) ? r : void 0, { replace_all: s, if_version: u, query: a } = e, l = a !== null && typeof a === "object" && !Array.isArray(a) ? a : void 0;
  return { dbOp: n("db_op"), collection: n("collection"), docId: n("doc_id"), data: o, query: l, outDir: n("out_dir"), filePath: n("file_path"), strReplace: { field: n("field"), oldStr: n("old_str"), newStr: n("new_str"), replaceAll: s === void 0 ? void 0 : cA(s) === true }, ifVersion: O_r(u) ? u : void 0 };
}
function O_r(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 1;
}
var Qao = ["set", "update", Fv, "delete"];
function q6(e) {
  let n = Zao(e);
  return n === ip ? [] : n;
}
function Zao(e) {
  let n = xw(e.writes);
  if (n === void 0 || n === ip) return n ?? [];
  return n.map((r) => {
    let o = (g) => r !== null && typeof r === "object" ? r[g] : void 0, s = { db_op: o("op"), collection: o("collection"), doc_id: o("doc_id"), data: o("data"), file_path: o("file_path"), if_version: o("if_version") }, { dbOp: u, collection: a, docId: l, data: d, filePath: f, ifVersion: p } = e4(s);
    return { op: u, collection: a, docId: l, data: d, filePath: f, ifVersion: p, ifVersionGiven: s.if_version !== void 0 };
  });
}
function U(e) {
  return e.db_op === IA ? q6(e).map((n) => n.ifVersion) : [];
}
function elo(e) {
  return e4(e).ifVersion !== void 0 || U(e).some((n) => n !== void 0);
}
function M_r(e) {
  return typeof e === "object" && e !== null && e.action === "write_db" && e.db_op === IA;
}
function TXt(e) {
  return s5r(Kl(ny(e.ruleValue.ruleContent ?? "", { max: 1024 }).replace(f_, " ")));
}
function Ek(e) {
  let n = e?.type_url;
  return typeof n === "string" ? n : void 0;
}
function Wdt(e) {
  let n = e?.type;
  return typeof n === "string" ? n : void 0;
}
function D_r(e) {
  return `type_url: not an Artifact type's link: ${e} — pass a ${kNe()} link from a list_types result`;
}
function H_r(e) {
  return e.auto_open === "after_first_write" ? "after_first_write" : "at_create";
}
function iIe(e) {
  let { outDir: n, collection: r } = e4(e);
  if (n === void 0) return { kind: "inline" };
  let o;
  try {
    o = ut(n === "" ? fe() : n);
  } catch {
    return { kind: "unresolvable" };
  }
  let s = r !== void 0 && E4.test(r) ? T(o, ...r.split("/").map(tlo)) : o;
  return { kind: "dir", outDir: o, dir: s };
}
function tlo(e) {
  let n = e.replaceAll("~", "@"), r = O();
  return r === "windows" || r === "wsl" ? n.replaceAll(":", "%3A") : n;
}
function nlo(e, n) {
  return `${e}\0${dn(n)}`;
}
var Gys = { changed: "file_path no longer names the file that was approved (it moved, was replaced, or was rewritten) — retry the write so it is checked again", via_link: "file_path reaches its file through a symbolic link that resolves somewhere this session may not read without asking — pass the resolved path, or copy the file under the working directory first", hard_link: "file_path is one of several hard links to its file, and this approval did not examine that — copy the file to a fresh path under the working directory and pass the copy", read_denied: "reading where file_path resolves is blocked by a Read permission rule — the write was not attempted", no_identity: Ren, not_a_file: Cen, size: `file_path is empty or larger than ${Fft} bytes — write_db reads at most that much JSON, and the document must serialize to ${h3} bytes or fewer` };
function Gdt(e) {
  return typeof e === "object" && e !== null && e.action === "read_db" && typeof e.out_dir === "string";
}
function TIt(e) {
  if (typeof e !== "object" || e === null || e.action !== "write_db") return false;
  if (typeof e.file_path === "string") return true;
  return q6(e).some((n) => n.filePath !== void 0);
}
var rlo = 3e3;
function L_r(e) {
  try {
    return Buffer.byteLength(_(e), "utf8");
  } catch {
    return null;
  }
}
var j = 1024, zys = 49152, B = /data:[a-z0-9.+-]+\/[a-z0-9.+-]+(?:;[a-z0-9=.+-]+)*;base64,[A-Za-z0-9+/_-]{1000,}/gi, C = /^[A-Za-z0-9+/_-]+$/, P = /^[A-Za-z0-9+/_-]+={0,2}$/, M = /* @__PURE__ */ new Set([60, 64, 76]);
function V(e) {
  let n = e.trim(), r = n.indexOf(`
`), o = n.slice(r + 1, r + 513);
  if (!/[A-Z]/.test(o) || !/[a-z]/.test(o) || !/[0-9]/.test(o)) return false;
  if (r === -1) return P.test(n);
  let s = Vg(n.slice(0, r), "\r");
  if (!C.test(s)) return false;
  let u = n.slice(r + 1).replaceAll(`\r
`, `
`).split(`
`), a = u.pop() ?? "", l = u[0]?.length ?? s.length;
  return M.has(l) && s.length <= l && a.length <= l && P.test(a) && u.every((d) => d.length === l && C.test(d));
}
function G(e) {
  if (V(e)) return e.length;
  let n = 0;
  for (let r of e.matchAll(B)) n += r[0].length;
  return n;
}
function Kys(e) {
  let n = 0, r = 0, o = [...e];
  while (o.length > 0) {
    let s = o.pop();
    if (typeof s === "string") {
      let u = s.length >= j ? G(s) : 0;
      if (u > 0) n++, r += u;
    } else if (typeof s === "object" && s !== null) for (let u of Object.values(s)) o.push(u);
  }
  return { strings: n, chars: r };
}
function Vys(e, n, r, o, s, u) {
  let a = u1(e, r), l = s.get(e), d = `${l ?? "viewer"}${!a && u.has(e) ? ", outside your organization" : ""} ${e.slice(0, 8)}`, f = n === "assistant" ? a ? "Claude (via the user)" : `Claude (via ${d})` : n !== void 0 && n !== "" ? `viewer ${e.slice(0, 8)} (unverified lane)` : a ? l !== void 0 ? `the user (${l})` : "the user" : d;
  return o ? `${f}, posted by the artifact` : f;
}
var qys = 5, olo = 10;
function N_r(e, n) {
  let r = e.length > n ? ` and ${e.length - n} more` : "";
  return `${e.slice(0, n).join(", ")}${r}`;
}
var b = (e) => e.outsideAsk || e.flaggedOutside;
function CDn(e) {
  let [n] = e;
  if (e.length === 1 && n !== void 0) {
    let a = [];
    if (b(n)) a.push(n.resolvesOutside ? "reaches, through a symbolic link, a file outside the folders this session can read" : "is outside the folders this session can read");
    if (n.linkNote !== "" && !b(n)) a.push("is a hard link to a file that may also live elsewhere on this machine");
    return a.length === 0 ? "" : ` The local file "${lc(n.askPath, 256)}" ${a.join(" and ")}.`;
  }
  let r = (a) => ` (${N_r(a.map((l) => `"${lc(l.askPath, 256)}"`), olo)})`, o = [{ group: e.filter((a) => b(a) && !a.resolvesOutside), one: "is outside the folders this session can read", many: "are outside the folders this session can read" }, { group: e.filter((a) => a.resolvesOutside), one: "reaches, through a symbolic link, a file outside the folders this session can read", many: "reach, through symbolic links, files outside the folders this session can read" }, { group: e.filter((a) => a.linkNote !== "" && !b(a)), one: "is a hard link to a file that may also live elsewhere on this machine", many: "are hard links to files that may also live elsewhere on this machine" }].filter((a) => a.group.length > 0), [s] = o;
  if (s === void 0) return "";
  if (o.length === 1 && s.group.length === e.length) return ` ${e.length === 2 ? "Both" : `All ${e.length}`} local files being copied ${s.many}${r(s.group)}.`;
  let u = o.map((a) => `${a.group.length} ${a.group.length === 1 ? a.one : a.many}${r(a.group)}`);
  return ` Of the ${e.length} local files being copied, ${u.join("; ")}.`;
}
function qpe(e) {
  if (e === void 0) return "";
  try {
    let n = _(e);
    return `${ny(n, { max: 300 }).replace(f_, " ")}${RDn(n, 300)}`;
  } catch {
    return "(unserializable payload)";
  }
}
function RDn(e, n) {
  return Array.from(e.slice(0, 2 * n + 2)).length <= n ? "" : `… [truncated — ${Buffer.byteLength(e, "utf8")} bytes total]`;
}
function Yys({ field: e, oldStr: n, newStr: r, replaceAll: o }) {
  let s = (u, a) => {
    if (u === void 0) return "(missing)";
    let l = _(u);
    return `${ny(l, { max: a }).replace(f_, " ").replace(wH, "'").replace(rB, "'")}${RDn(l, a)}`;
  };
  return `field ${s(e, kOe)}: replace ${o === true ? "every " : ""}${s(n, 200)} with ${s(r, 200)}`;
}
function slo(e) {
  return e !== null && typeof e === "object" && e.live === false && Object.keys(e).length === 1;
}
var D = /* @__PURE__ */ new Set([...Qpn, ...emn]);
function S(e, n) {
  if (typeof n === "string") return D.has(kU(n));
  return typeof e === "string" && D.has($Y(e) ?? "");
}
function ilo(e) {
  if (typeof e !== "object" || e === null) return 0;
  let { file_path: n, files: r } = e, o = S(n) ? 1 : 0, s = xw(r);
  if (s === ip) return ip;
  if (s !== void 0) for (let u of s) o += S(typeof u === "string" ? u : u?.path, u?.contentType) ? 1 : 0;
  else if (r !== null && typeof r === "object") for (let [u, a] of Object.entries(r)) {
    if (a === null || slo(a)) continue;
    let l = typeof a === "object" && typeof a.artifact === "string" ? a.path : void 0;
    o += (l !== void 0 ? S(u) || S(l) : S(u, a?.contentType)) ? 1 : 0;
  }
  return o;
}
var W = /* @__PURE__ */ new Set([...V1o, ...K1o]);
function y(e, n, r) {
  if (typeof e !== "string") return false;
  let o = $Y(e);
  if (o === void 0 || !r.has(kU(o))) return false;
  return n === void 0 || typeof n === "string" && r.has(kU(n));
}
function Y(e, n, r) {
  return y(e, void 0, r) && y(n, void 0, r);
}
function A(e) {
  return e.live !== void 0 || e.reseed !== void 0;
}
function Xys(e) {
  return e !== null && typeof e === "object" && Object.hasOwn(e, "mcp");
}
function alo(e, n) {
  if (typeof e !== "object" || e === null) return false;
  let r = n.documents ? W : V1o, { file_path: o, files: s } = e;
  if (A(e) || !y(o, void 0, r)) return false;
  if (s === void 0) return true;
  let u = xw(s);
  if (u === ip) return false;
  if (u !== void 0) return u.every((a) => typeof a === "string" ? y(a, void 0, r) : a !== null && typeof a === "object" && !A(a) && y(a.path, a.contentType, r));
  if (s === null || typeof s !== "object") return false;
  return Object.entries(s).every(([a, l]) => {
    if (l === null) return true;
    if (typeof l === "string") return y(a, void 0, r);
    if (typeof l !== "object" || Array.isArray(l)) return false;
    if (A(l)) return false;
    let d = l;
    if (typeof d.from === "string" && d.artifact !== void 0) return false;
    if (typeof d.artifact === "string") return Y(a, l.path, r);
    return y(a, l.contentType, r);
  });
}
function llo() {
  return Jve(SP().shape.action, "read_file");
}
function dlo() {
  return Jve(SP().shape.action, "delete");
}
function zdt() {
  return Jve(SP().shape.action, "open");
}
function AIt() {
  return Jve(SP().shape.action, "pin");
}
function AXt() {
  return Jve(SP().shape.action, "share");
}
function clo() {
  return "version" in SP().shape;
}
function Jys(e, n) {
  if (e?.title === void 0) return;
  if (n === void 0) return e.title;
  let r = al(n);
  return r !== null && al(e.url) === r ? e.title : void 0;
}
var Qys = /* @__PURE__ */ new Set([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"]);
function n3e(e) {
  if (ae(e).mode === "plan") return "plan";
  if (bN(e)) return "cowork_no_surface";
  if (sh(e)) return "no_surface";
  return null;
}
function x(e, n, r) {
  let o = r ? "Copying from this artifact is" : e.ruleValue.toolName === qn ? "Artifact reads are" : "Reading this artifact is", s = n === "" ? "" : ` — ${n}`;
  return `${o} blocked by ${rEe(e)}${s}`;
}
function hP(e, n = "", r = false) {
  return { behavior: "deny", message: `${x(e, n, r)}.`, decisionReason: { type: "rule", rule: e } };
}
function t4(e, n, r, o, s) {
  let u = CT(ae(e), n, r, "deny", s);
  return u === null ? void 0 : new je(x(u, o, s.copySource === true), "read_denied");
}
function Xee(e) {
  return e.ruleValue.toolName === qn ? ` (your ${qn} ask rule covers artifact reads)` : ` (your ${e.ruleValue.toolName} ask rule covers this url)`;
}
function CXt(e) {
  if (!VBe() || e === null || e === void 0) return false;
  if (e.action !== void 0 && e.action !== "publish") return false;
  let n = vwt(e);
  if (n !== void 0) return H(n) && n.room !== void 0;
  let r = Ek(e);
  if (r !== void 0) {
    let u = Jt(r);
    return u !== null && KOt(u.slug);
  }
  let o = typeof e.url === "string" ? Jt(e.url) : null, s;
  try {
    s = o !== null ? Ct(o.slug) : typeof e.file_path === "string" ? vGt(ut(e.file_path)) : void 0;
  } catch {
    s = void 0;
  }
  return s?.capabilities?.room !== void 0;
}
var $_r = { threadIds: /* @__PURE__ */ new Set(), commentIds: /* @__PURE__ */ new Set() };
function ulo(e) {
  return { url: Ag(e.slug), release: e.current };
}
function uL(e) {
  let n = typeof e === "string" ? Jt(e) : null;
  if (!n) throw new je(`not an artifact URL: ${String(e)}`, "invalid_url");
  return n;
}
function xDn(e, n, r, o) {
  if (typeof r !== "object" || r === null || !M_r(r)) return;
  let { writes: s, ...u } = r;
  for (let [a, l] of q6(r).entries()) {
    let d = pen(n, e, { ...u, db_op: l.op, collection: l.collection, doc_id: l.docId, ...l.data !== void 0 && { data: l.data }, ...l.filePath !== void 0 && { file_path: l.filePath } }, o);
    if (d) return { index: a, rule: d };
  }
  return;
}
function F_r(e, n, r, o) {
  if (typeof r !== "object" || r === null || r.db_op !== Fv) return;
  return pen(n, e, { ...r, db_op: "update" }, o) ?? void 0;
}
function hN(e) {
  return e.ruleValue.ruleContent === void 0 ? e.ruleValue.toolName : `${e.ruleValue.toolName}(${TXt(e)})`;
}
function PDn(e, n, r) {
  let o = xDn(e, n, r, "deny");
  return o === void 0 ? void 0 : { behavior: "deny", message: `Permission to use ${Lt} has been denied by your rule ${hN(o.rule)} (writes[${o.index}] of this batch matches it), so nothing in the batch was written.`, decisionReason: { type: "rule", rule: o.rule } };
}
function Zys(e, n, r) {
  let o = F_r(e, n, r, "deny");
  return o === void 0 ? void 0 : { behavior: "deny", message: `Permission to use ${Lt} has been denied by your rule ${hN(o)} (a str_replace is an update of one field), so nothing was written.`, decisionReason: { type: "rule", rule: o } };
}
function e_s(e, n, r, o) {
  let s = xDn(e, r, o, "ask");
  if (s === void 0 || typeof o !== "object" || o === null) return;
  let u = Reflect.get(o, "url"), a = typeof u === "string" ? Jt(u) : null;
  return { behavior: "ask", message: `Claude wants to write a batch to this artifact's database, and writes[${s.index}] matches your ask rule ${hN(s.rule)} — the full permission check could not complete, so approving covers only this call.`, updatedInput: { ...o, [Ip]: false, [AT]: a === null ? null : Xg(a, n) }, suppressAlwaysAllowRule: true, decisionReason: { type: "rule", rule: s.rule } };
}
function vT(e, n) {
  if (!rtt(Ct(e.slug))) return null;
  return { behavior: "deny", message: `${xn(e)}: ${TDt}. ${n}; tell the user.`, decisionReason: { type: "other", reason: S_o } };
}
function flo(e, n) {
  let r = vT(e, n);
  if (r !== null) return r;
  if (!k$(Ct(e.slug))) return null;
  return { behavior: "deny", message: `${xn(e)}: ${w_o}. ${n}; tell the user.`, decisionReason: { type: "other", reason: v_o } };
}
function RXt(e, n, r) {
  let o = e === "watch" && Tg();
  if (o && n.path !== void 0 && E?.livePathFrom(n) === void 0) return { result: false, message: E?.LIVE_PATH_INVALID ?? "invalid path", errorCode: 8 };
  let s = Object.keys(n).filter((l) => l !== "action" && l !== "url" && !(e === "read_page_data" && l === "schema") && !(o && l === "path") && n[l] !== void 0);
  if (s.length > 0) return { result: false, message: `action "${e}" takes only ${e === "read_page_data" ? "`url` and `schema`" : o ? "`url` (and `path`)" : "`url`"} — remove ${s.join(", ")}.`, errorCode: 8 };
  if (e === "read_page_data") {
    let l = n.schema, d = Z().frozenReadPageDataSchemaNames;
    if (l === void 0) return { result: false, message: `action "read_page_data" requires \`schema\` — the registered interaction schema to validate against${d?.size ? ` (e.g. "${[...d][0]}")` : ""}.`, errorCode: 7 };
    if (!NZt(l)) return { result: false, message: `interaction schema "${ny(l)}" is not available in this session. Available schemas: ${[...d ?? []].join(", ") || "(none)"}.`, errorCode: 8 };
    let f = VZt(l);
    if (!f.ok) return { result: false, message: f.reason === "unknown" ? `unknown interaction schema "${l}" — registered schemas: ${fCs().join(", ") || "(none)"}.` : `interaction schema "${l}" failed validation in this build — report this; nothing can be read against it.`, errorCode: 8 };
  }
  if (r === void 0) {
    if (e === "status") return { result: true };
    if (e === "verify") return { result: true };
    return { result: false, message: `action "${e}" requires \`url\` — the artifact's claude.ai URL (find it with action: "list" or action: "status").`, errorCode: 7 };
  }
  let u = GR(r);
  if (u) return u;
  let a = IT(r);
  if (!a.ok) return { result: false, message: a.message, errorCode: a.errorCode };
  return { result: true };
}
_4s({ addOpenedFrameRow: Xao, forgetArtifactDeletedThroughMcp: F, markFrameOpenOutcome: EXt, derivePublishContext: xF, surfacePublishedArtifact: Udt });
var Kdt = 64, z = 15e3, K = 65536;
async function t_s(e, n, r, o) {
  let s = Z(), u = s.accountEpoch, a = s.profileIdsForgets.get(e) ?? 0, l;
  try {
    l = await du.postRelayBound(`/api/frame/user/profiles/${encodeURIComponent(e)}`, { ids: n }, { refreshOAuth: true, credentials: o, headers: Yc(), timeout: z, maxContentLength: K, signal: r });
  } catch (c) {
    if (Na(c)) throw c;
    return { ok: false };
  }
  if (!l.ok) return { ok: false };
  let d = () => Z() === s && s.accountEpoch === u && (s.profileIdsForgets.get(e) ?? 0) === a;
  if (!l.fromFrame || l.status < 200 || l.status >= 300) {
    if (l.fromFrame && d() && l.status === 403 && H(l.data) && l.data.error === "not_declared") s.profileIdsServed.set(e, false);
    return { ok: false, status: l.status };
  }
  let f = H(l.data) ? l.data.profiles : void 0;
  if (!H(f)) return { ok: false, status: l.status };
  let p = new Set(n), g = {};
  for (let [c, w] of Object.entries(f)) {
    if (!p.has(c)) continue;
    let h = plo(w);
    if (h.name !== void 0 || h.guest === true) g[c] = h;
  }
  if (d()) s.profileIdsServed.set(e, true), Q(e, { ...Object.fromEntries(n.map((c) => [c, {}])), ...g });
  return { ok: true, profiles: g };
}
function plo(e) {
  if (!H(e)) return {};
  let n = _tn(e.name);
  return { ...n !== void 0 && { name: n }, ...e.guest === true && { guest: true } };
}
var q = 512;
function X(e, n) {
  return `${e}\0${n}`;
}
function Q(e, n) {
  let r = Z().profileNames;
  for (let [o, s] of Object.entries(n)) {
    let u = X(e, o);
    r.delete(u), r.set(u, s.name === void 0 ? { ...s, at: Date.now() } : s);
  }
  while (r.size > q) {
    let o = r.keys().next().value;
    if (o === void 0) break;
    r.delete(o);
  }
}
export {
  $_r,
  ADn,
  AIt,
  AXt,
  Bdt,
  CDn,
  CXt,
  D_r,
  EXt,
  Ek,
  F_r,
  GR,
  Gdt,
  Gys,
  H_r,
  I_r,
  Jao,
  Jys,
  Kdt,
  Kys,
  L_r,
  M_r,
  N_r,
  O_r,
  PDn,
  P_r,
  Qao,
  Qys,
  RDn,
  RXt,
  TIt,
  TXt,
  Udt,
  Vys,
  Wdt,
  Wys,
  Xao,
  Xee,
  Xg,
  Xys,
  Yao,
  Yys,
  Zao,
  Zys,
  alo,
  clo,
  dlo,
  e3e,
  e4,
  e_s,
  elo,
  flo,
  hN,
  hP,
  iIe,
  ilo,
  jdt,
  kXt,
  llo,
  n3e,
  nlo,
  olo,
  plo,
  q6,
  qao,
  qpe,
  qys,
  rlo,
  slo,
  t3e,
  t4,
  t_s,
  tlo,
  uL,
  ulo,
  vT,
  xDn,
  x_r,
  zdt,
  zys
};
