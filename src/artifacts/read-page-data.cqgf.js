// artifacts/read-page-data.cqgf.js — Claude Code 2.1.310 模块 chunk-cqgfa15m.js
import { as } from "../fs/async-hooks.9s1z.js";
import { L } from "../context/not-admin-owned.ersa.js";
import { m } from "../telemetry/chunk-wn8xtaqg.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Kg } from "../shared/chunk-j79dwkaq.js";
import { Fa } from "../fs/content-encoding.v6wj.js";
import { i } from "../shared/environment.9a41.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { Uu, Nc } from "../remote/local-agent.we9a.js";
import { pe } from "../shared/async-hooks.m2fg.js";
import { ut } from "../shell/chunk-tjkwy3jp.js";
import { Ut } from "../settings/global-config-and-gates.27xj.js";
import { fT } from "../shell/invalid-type.qnva.js";
import { dn } from "../mcp/chunk-ykcv164t.js";
import { lc } from "../fs/async-hooks.2k4e.js";
import { Lt, Bg, PNe, We, Jt, BRe, ll, xn, CH, l1, A4r, Vl, JG, m_, cwn } from "./cobalt-plinth-lovage.hxm5.js";
import { pc } from "../agents/in-process-teammate.5te1.js";
import { Z } from "./same-account.bxg8.js";
import { Rwo, aAr, Tg } from "./cobalt-plinth-samphire.3k3d.js";
import { Y3, RU, wjo, fmn, gmn, Ejo } from "../vendor/highlight/file-path.bk20.js";
import { cu } from "./cobalt-plinth-comfrey.n2h2.js";
import { Bce, xwt, ny } from "../mcp/cobalt-plinth-sedge.awk2.js";
import { of, Pw } from "../shared/chunk-jfsgpm14.js";
import { MC } from "./template-instance.kxgt.js";
import { At, H2t, _G, Np, ctt, Vv, tc } from "./artifact-share-status.jp2v.js";
import { Ih, mS, sh, ae } from "../permissions/max-thinking-tokens.hx3h.js";
import { sen, YAs } from "./workshop-decisions.wghb.js";
import { yB, Mtn } from "./artifact-comment-reply.1d3x.js";
import { Hq, UE, IOe, T9, Xpt } from "./store-unavailable.qmfy.js";
import { MQ, RF } from "../settings/gable-onyx-sluice.5y5b.js";
import { ZOt, f9, ZW, c7, aB, Hae, If, RC, M$ } from "../agents/artifact-inherited-type-grant.a449.js";
import { hTe } from "../tasks/bridge-ingress-demoted.dnpp.js";
import { yF } from "../telemetry/bridge-resume-respects-local-owner.8dk3.js";
import { QW, XOt } from "./artifact-routine-first-publish-unasked.q98v.js";
import { vN, $Ie } from "../ide/foreign-read.2ne7.js";
import { Ren, xC, dve } from "../permissions/from-url.eejb.js";
import { N0t, X_o, J_o, Q_o, HT, jen, Wen } from "./str-replace.9xk6.js";
import { YZt, vP, Cg, oBe, rve } from "./cobalt-plinth-willow.60cj.js";
import { r3s } from "../shared/create-from-type.sbbd.js";
import { t3, y2 } from "../core/conversation-engine.31gx.js";
import { WUe } from "./artifact-delete.ysg5.js";
import { a9 } from "../shared/artifact-files.kwa9.js";
import { pB } from "../shared/chunk-evnd096q.js";
import { Xc } from "../shared/chunk-z4jb9fnd.js";
import { qn } from "../web/allow-web-fetch.pt5y.js";
import { Ygn } from "../ide/opener-missing.16f4.js";
import { D } from "../shared/chunk-6rnejvk7.js";
function k() {
  return Ut() ? "bg" : pc() ? "teammate" : yF() ? "remote" : Nc() ? "desktop" : Uu() === "claude-vscode" ? "vscode" : null;
}
function ilo(e, n, r) {
  let o = Z();
  if (n.agentId !== void 0 || !M$(n).hasInteractiveUI || o.accountEpoch !== r.account || o.conversationEpoch !== r.conversation) return;
  o.deferredSurface.set(e.slug, { slug: e.slug, url: e.url });
}
function alo(e, n) {
  let r = Z(), o = r.deferredSurface.get(n);
  if (o === void 0) return;
  if (r.remoteControlSkippedSlugs.has(n) && hTe(e.options.messageClientPlatform)) return;
  if (r.deferredSurface.delete(n), Wdt(e, true, o, false) === "auto_open_skipped_remote_control") r.deferredSurface.set(n, o);
}
function Wdt(e, n, r, o, s) {
  if (!n) return null;
  let u = Rwo(), a = k(), l = hTe(e.options.messageClientPlatform), d = Z(), p = o && !d.remoteControlSkippedSlugs.has(r.slug) ? "auto_open_skipped_redeploy" : a !== null ? `auto_open_skipped_${a}` : l ? "auto_open_skipped_remote_control" : as(i.CLAUDE_CODE_ARTIFACT_AUTO_OPEN) ? "auto_open_skipped_env" : null;
  if (p !== null) {
    if (p === "auto_open_skipped_remote_control") d.remoteControlSkippedSlugs.add(r.slug);
    return aAr("frame_surfaced", { slug: r.slug, via: u, mode: p, credentials: e.credentials }), p;
  }
  d.remoteControlSkippedSlugs.delete(r.slug);
  let g = r.url;
  try {
    let c = new URL(r.url);
    c.searchParams.set("via", "auto_preview"), g = c.toString();
  } catch {
  }
  return Ygn(g).then((c) => {
    if (!c.ok) t(`[artifact] auto-open failed (${c.reason}): ${c.detail ?? ""}`);
    s?.(c.ok), aAr("frame_surfaced", { slug: r.slug, via: u, mode: c.ok ? "auto_open_ok" : `auto_open_failed_${c.reason}`, credentials: e.credentials });
  }), null;
}
import { join as x } from "path";
var E = null;
function p_s(e, n) {
  return e.getAppState().frameUrls[n];
}
function i9e(e, n) {
  return e ? { type: "safetyCheck", reason: n, classifierApprovable: false } : { type: "other", reason: n };
}
function Xg(e, n) {
  let r = JG(At(e.slug)?.title || y2(n.getAppState().frameUrls).find(([, o]) => o.title && ll(o.url) === e.slug)?.[1].title);
  return { url: xn(e), ...r && { title: r } };
}
function llo(e, n, r, { mcpPublished: o = false } = {}) {
  let s = `${t3}${n.slug}`, u = s, a = false, l = false, d;
  if (e.setAppState((f) => {
    let [p, g] = Object.entries(f.frameUrls).find(([, h]) => ll(h.url) === n.slug) ?? [];
    if (a = p !== void 0 && g?.dismissed !== true, u = p !== void 0 && p !== s ? p : s, l = f.frameOpenFailedPath === u, o && p !== void 0 && p !== s && g !== void 0) {
      let { [p]: h, ...R } = f.frameUrls, { dismissed: J, ...F } = g;
      return d = { ...R, [p]: { ...F, updatedAt: Date.now() } }, { ...f, frameUrls: d };
    }
    if (p !== void 0 && g?.dismissed === true) {
      let { dismissed: h, ...R } = g;
      return { ...f, frameUrls: { ...f.frameUrls, [p]: R } };
    }
    if (a && f.frameUrls[s] === void 0) return f;
    let { [s]: c, ...w } = f.frameUrls;
    return d = { ...w, [s]: { url: xn(n), updatedAt: Date.now(), ...(r ?? c?.title) !== void 0 && { title: r ?? c?.title }, ...(o || c?.mcpPublished === true) && { mcpPublished: true }, ...(o || c?.mcpPublishedHere === true) && { mcpPublishedHere: true } } }, { ...f, frameUrls: d };
  }), o && d !== void 0) pB(d);
  return { rowKey: u, alreadyShown: a, lastOpenFailed: l };
}
function I(e, n) {
  WUe(n, { updateAppState: e.setAppState, context: e });
}
function IXt(e, n, r) {
  e.setAppState((o) => {
    if (r) return o.frameOpenFailedPath === n ? { ...o, frameOpenFailedPath: null } : o;
    if (o.frameOpenFailedPath === n) return o;
    return { ...o, frameOpenFailedPath: n, frameOpenFailedSeen: false };
  });
}
function Gdt(e, n) {
  return tc(e) && ZW(e) && !aB(e) ? " (yours; a co-writer has also published to it)" : n === "files" && tc(e) && c7(e) ? " (yours; its files come from an Artifact type its publisher wrote)" : Np(e);
}
function $_r(e, n) {
  return tc(e) && ZW(e) && !aB(e) ? " [ownership: yours, co-written: a non-owner has also published to it]" : n === "files" && tc(e) && c7(e) ? cwn : `${Vv(e)}${_G(e)}`;
}
function N(e) {
  return _([e.path, e.from.slug, e.from.path, e.from.ver ?? ""]);
}
function dlo(e) {
  return L(e.map(N)).sort().join(`
`);
}
function U_r(e, n) {
  return (e ?? "") === dlo(n);
}
function zdt(e, n) {
  let { mode: r, modeBeforeRewrite: o } = ae(e);
  if (r === "auto" || o === "auto") return false;
  return MQ(e.getAppState(), r === "plan" ? "artifactAssetUploadHumanConsentSlugs" : "artifactAssetUploadConsentSlugs", n);
}
function B_r(e, n, r, o, s, u, a = false) {
  let l = s && !aB(At(r.slug));
  if (QW(n) && (l || a) && o && !f9(e, n) && !$Ie(n, r, tc(At(r.slug))) && (Ih(n) || mS(n) || vN(n))) throw m("artifact_cowritten_consent", "refused_unasked", { assets: u === "assets", ...!l && { from_type: true } }), new We(l ? `a co-writer has published to this artifact, so its ${u} are someone else's content — nothing was returned; retry the same action so it is checked again (the user is asked once where a prompt can reach them)` : `this artifact was created from an Artifact type, so its ${u} are the type publisher's content — nothing was returned; retry the same action so it is checked again (the user is asked once where a prompt can reach them)`, `${u === "files" ? "file" : "asset"}_${l ? "cowritten" : "from_type"}_unasked`);
}
function OXt(e, n, r) {
  return m("artifact_outside_org_consent", "refused_unasked", { assets: n === "asset_copy" }), new We(XOt(e, true, n === "file_copy" ? { retryUrl: r } : void 0), `${n}_outside_org_unasked`);
}
function L0n(e, n, r) {
  if (e === Bce) U(n, r);
}
function U(e, n) {
  throw m("artifact_outside_org_consent", "refused_unasked", { assets: n !== "files" }), new We(XOt(e), `${n === "files" ? "file" : "asset"}_outside_org_unasked`);
}
function a9e(e) {
  let { assetId: n, outDir: r } = Hae(e);
  if (n === void 0 || !Bg.test(n)) return;
  let o, s = false;
  try {
    if (r === void 0 || r === "") {
      let { url: u } = e, a = typeof u === "string" ? Jt(u) : null, l = a !== null ? a9(a.slug) : null;
      s = l !== null, o = l ?? pe();
    } else o = ut(r);
  } catch {
    return;
  }
  return { stem: x(o, n), ...s && { defaultDir: true } };
}
function KR(e, n = "", r = "url") {
  if (BRe(e) === void 0) return;
  let o = Jt(e), s = o !== null ? ` (${xn(o)})` : "";
  return { result: false, message: `\`${r}\` names a path inside the artifact — pass the artifact's own URL${s} as \`${r}\`${n}.`, errorCode: 4 };
}
function cq(e) {
  let n = (d) => {
    let f = e[d];
    return typeof f === "string" ? f : void 0;
  }, r = e.data, o = r !== null && typeof r === "object" && !Array.isArray(r) ? r : void 0, { replace_all: s, if_version: u, query: a } = e, l = a !== null && typeof a === "object" && !Array.isArray(a) ? a : void 0;
  return { dbOp: n("db_op"), collection: n("collection"), docId: n("doc_id"), data: o, query: l, outDir: n("out_dir"), filePath: n("file_path"), strReplace: { field: n("field"), oldStr: n("old_str"), newStr: n("new_str"), replaceAll: s === void 0 ? void 0 : fT(s) === true }, ifVersion: j_r(u) ? u : void 0 };
}
function j_r(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 1;
}
var clo = ["set", "update", UE, "delete"];
function o9(e) {
  let n = ulo(e);
  return n === of ? [] : n;
}
function ulo(e) {
  let n = Pw(e.writes);
  if (n === void 0 || n === of) return n ?? [];
  return n.map((r) => {
    let o = (g) => r !== null && typeof r === "object" ? r[g] : void 0, s = { db_op: o("op"), collection: o("collection"), doc_id: o("doc_id"), data: o("data"), file_path: o("file_path"), if_version: o("if_version") }, { dbOp: u, collection: a, docId: l, data: d, filePath: f, ifVersion: p } = cq(s);
    return { op: u, collection: a, docId: l, data: d, filePath: f, ifVersion: p, ifVersionGiven: s.if_version !== void 0 };
  });
}
function j(e) {
  return e.db_op === HT ? o9(e).map((n) => n.ifVersion) : [];
}
function plo(e) {
  return cq(e).ifVersion !== void 0 || j(e).some((n) => n !== void 0);
}
function W_r(e) {
  return typeof e === "object" && e !== null && e.action === "write_db" && e.db_op === HT;
}
function MXt(e) {
  return A4r(Vl(ny(e.ruleValue.ruleContent ?? "", { max: 1024 }).replace(m_, " ")));
}
function kk(e) {
  let n = e?.type_url;
  return typeof n === "string" ? n : void 0;
}
function Vdt(e) {
  let n = e?.type;
  return typeof n === "string" ? n : void 0;
}
function G_r(e) {
  return `type_url: not an Artifact type's link: ${e} — pass a ${PNe()} link from a list_types result`;
}
function z_r(e) {
  return e.auto_open === "after_first_write" ? "after_first_write" : "at_create";
}
function pIe(e) {
  let { outDir: n, collection: r } = cq(e);
  if (n === void 0) return { kind: "inline" };
  let o;
  try {
    o = ut(n === "" ? pe() : n);
  } catch {
    return { kind: "unresolvable" };
  }
  let s = r !== void 0 && Hq.test(r) ? x(o, ...r.split("/").map(flo)) : o;
  return { kind: "dir", outDir: o, dir: s };
}
function flo(e) {
  let n = e.replaceAll("~", "@"), r = O();
  return r === "windows" || r === "wsl" ? n.replaceAll(":", "%3A") : n;
}
function mlo(e, n) {
  return `${e}\0${dn(n)}`;
}
var f_s = { changed: "file_path no longer names the file that was approved (it moved, was replaced, or was rewritten) — retry the write so it is checked again", via_link: "file_path reaches its file through a symbolic link that resolves somewhere this session may not read without asking — pass the resolved path, or copy the file under the working directory first", hard_link: "file_path is one of several hard links to its file, and this approval did not examine that — copy the file to a fresh path under the working directory and pass the copy", read_denied: "reading where file_path resolves is blocked by a Read permission rule — the write was not attempted", no_identity: Wen, not_a_file: jen, size: `file_path is empty or larger than ${Xpt} bytes — write_db reads at most that much JSON, and the document must serialize to ${T9} bytes or fewer` };
function Kdt(e) {
  return typeof e === "object" && e !== null && e.action === "read_db" && typeof e.out_dir === "string";
}
function MIt(e) {
  if (typeof e !== "object" || e === null || e.action !== "write_db") return false;
  if (typeof e.file_path === "string") return true;
  return o9(e).some((n) => n.filePath !== void 0);
}
var glo = 3e3;
function V_r(e) {
  try {
    return Buffer.byteLength(_(e), "utf8");
  } catch {
    return null;
  }
}
var B = 1024, m_s = 49152, M = /data:[a-z0-9.+-]+\/[a-z0-9.+-]+(?:;[a-z0-9=.+-]+)*;base64,[A-Za-z0-9+/_-]{1000,}/gi, C = /^[A-Za-z0-9+/_-]+$/, P = /^[A-Za-z0-9+/_-]+={0,2}$/, H = /* @__PURE__ */ new Set([60, 64, 76]);
function V(e) {
  let n = e.trim(), r = n.indexOf(`
`), o = n.slice(r + 1, r + 513);
  if (!/[A-Z]/.test(o) || !/[a-z]/.test(o) || !/[0-9]/.test(o)) return false;
  if (r === -1) return P.test(n);
  let s = Kg(n.slice(0, r), "\r");
  if (!C.test(s)) return false;
  let u = n.slice(r + 1).replaceAll(`\r
`, `
`).split(`
`), a = u.pop() ?? "", l = u[0]?.length ?? s.length;
  return H.has(l) && s.length <= l && a.length <= l && P.test(a) && u.every((d) => d.length === l && C.test(d));
}
function G(e) {
  if (V(e)) return e.length;
  let n = 0;
  for (let r of e.matchAll(M)) n += r[0].length;
  return n;
}
function g_s(e) {
  let n = 0, r = 0, o = [...e];
  while (o.length > 0) {
    let s = o.pop();
    if (typeof s === "string") {
      let u = s.length >= B ? G(s) : 0;
      if (u > 0) n++, r += u;
    } else if (typeof s === "object" && s !== null) for (let u of Object.values(s)) o.push(u);
  }
  return { strings: n, chars: r };
}
function h_s(e, n, r, o, s, u) {
  let a = yB(e, r), l = s.get(e), d = `${l ?? "viewer"}${!a && u.has(e) ? ", outside your organization" : ""} ${e.slice(0, 8)}`, f = n === "assistant" ? a ? "Claude (via the user)" : `Claude (via ${d})` : n !== void 0 && n !== "" ? `viewer ${e.slice(0, 8)} (unverified lane)` : a ? l !== void 0 ? `the user (${l})` : "the user" : d;
  return o ? `${f}, posted by the artifact` : f;
}
var y_s = 5, hlo = 10;
function K_r(e, n) {
  let r = e.length > n ? ` and ${e.length - n} more` : "";
  return `${e.slice(0, n).join(", ")}${r}`;
}
var b = (e) => e.outsideAsk || e.flaggedOutside;
function N0n(e) {
  let [n] = e;
  if (e.length === 1 && n !== void 0) {
    let a = [];
    if (b(n)) a.push(n.resolvesOutside ? "reaches, through a symbolic link, a file outside the folders this session can read" : "is outside the folders this session can read");
    if (n.linkNote !== "" && !b(n)) a.push("is a hard link to a file that may also live elsewhere on this machine");
    return a.length === 0 ? "" : ` The local file "${lc(n.askPath, 256)}" ${a.join(" and ")}.`;
  }
  let r = (a) => ` (${K_r(a.map((l) => `"${lc(l.askPath, 256)}"`), hlo)})`, o = [{ group: e.filter((a) => b(a) && !a.resolvesOutside), one: "is outside the folders this session can read", many: "are outside the folders this session can read" }, { group: e.filter((a) => a.resolvesOutside), one: "reaches, through a symbolic link, a file outside the folders this session can read", many: "reach, through symbolic links, files outside the folders this session can read" }, { group: e.filter((a) => a.linkNote !== "" && !b(a)), one: "is a hard link to a file that may also live elsewhere on this machine", many: "are hard links to files that may also live elsewhere on this machine" }].filter((a) => a.group.length > 0), [s] = o;
  if (s === void 0) return "";
  if (o.length === 1 && s.group.length === e.length) return ` ${e.length === 2 ? "Both" : `All ${e.length}`} local files being copied ${s.many}${r(s.group)}.`;
  let u = o.map((a) => `${a.group.length} ${a.group.length === 1 ? a.one : a.many}${r(a.group)}`);
  return ` Of the ${e.length} local files being copied, ${u.join("; ")}.`;
}
function tme(e) {
  if (e === void 0) return "";
  try {
    let n = _(e);
    return `${ny(n, { max: 300 }).replace(m_, " ")}${F0n(n, 300)}`;
  } catch {
    return "(unserializable payload)";
  }
}
function F0n(e, n) {
  return Array.from(e.slice(0, 2 * n + 2)).length <= n ? "" : `… [truncated — ${Buffer.byteLength(e, "utf8")} bytes total]`;
}
function __s({ field: e, oldStr: n, newStr: r, replaceAll: o }) {
  let s = (u, a) => {
    if (u === void 0) return "(missing)";
    let l = _(u);
    return `${ny(l, { max: a }).replace(m_, " ").replace(CH, "'").replace(l1, "'")}${F0n(l, a)}`;
  };
  return `field ${s(e, IOe)}: replace ${o === true ? "every " : ""}${s(n, 200)} with ${s(r, 200)}`;
}
function ylo(e) {
  return e !== null && typeof e === "object" && e.live === false && Object.keys(e).length === 1;
}
var T = /* @__PURE__ */ new Set([...fmn, ...gmn]);
function S(e, n) {
  if (typeof n === "string") return T.has(RU(n));
  return typeof e === "string" && T.has(Y3(e) ?? "");
}
function _lo(e) {
  if (typeof e !== "object" || e === null) return 0;
  let { file_path: n, files: r } = e, o = S(n) ? 1 : 0, s = Pw(r);
  if (s === of) return of;
  if (s !== void 0) for (let u of s) o += S(typeof u === "string" ? u : u?.path, u?.contentType) ? 1 : 0;
  else if (r !== null && typeof r === "object") for (let [u, a] of Object.entries(r)) {
    if (a === null || ylo(a)) continue;
    let l = typeof a === "object" && typeof a.artifact === "string" ? a.path : void 0;
    o += (l !== void 0 ? S(u) || S(l) : S(u, a?.contentType)) ? 1 : 0;
  }
  return o;
}
var W = /* @__PURE__ */ new Set([...Ejo, ...wjo]);
function y(e, n, r) {
  if (typeof e !== "string") return false;
  let o = Y3(e);
  if (o === void 0 || !r.has(RU(o))) return false;
  return n === void 0 || typeof n === "string" && r.has(RU(n));
}
function Y(e, n, r) {
  return y(e, void 0, r) && y(n, void 0, r);
}
function A(e) {
  return e.live !== void 0 || e.reseed !== void 0;
}
function S_s(e) {
  return e !== null && typeof e === "object" && Object.hasOwn(e, "mcp");
}
function Slo(e, n) {
  if (typeof e !== "object" || e === null) return false;
  let r = n.documents ? W : Ejo, { file_path: o, files: s } = e;
  if (A(e) || !y(o, void 0, r)) return false;
  if (s === void 0) return true;
  let u = Pw(s);
  if (u === of) return false;
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
function blo() {
  return rve(vP().shape.action, "read_file");
}
function wlo() {
  return rve(vP().shape.action, "delete");
}
function qdt() {
  return rve(vP().shape.action, "open");
}
function HIt() {
  return rve(vP().shape.action, "pin");
}
function HXt() {
  return rve(vP().shape.action, "share");
}
function Elo() {
  return "version" in vP().shape;
}
function b_s(e, n) {
  if (e?.title === void 0) return;
  if (n === void 0) return e.title;
  let r = ll(n);
  return r !== null && ll(e.url) === r ? e.title : void 0;
}
var w_s = /* @__PURE__ */ new Set([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"]);
function l9e(e) {
  if (ae(e).mode === "plan") return "plan";
  if (vN(e)) return "cowork_no_surface";
  if (sh(e)) return "no_surface";
  return null;
}
function v(e, n, r) {
  let o = r ? "Copying from this artifact is" : e.ruleValue.toolName === qn ? "Artifact reads are" : "Reading this artifact is", s = n === "" ? "" : ` — ${n}`;
  return `${o} blocked by ${dve(e)}${s}`;
}
function SP(e, n = "", r = false) {
  return { behavior: "deny", message: `${v(e, n, r)}.`, decisionReason: { type: "rule", rule: e } };
}
function uq(e, n, r, o, s) {
  let u = xC(ae(e), n, r, "deny", s);
  return u === null ? void 0 : new We(v(u, o, s.copySource === true), "read_denied");
}
function ote(e) {
  return e.ruleValue.toolName === qn ? ` (your ${qn} ask rule covers artifact reads)` : ` (your ${e.ruleValue.toolName} ask rule covers this url)`;
}
function DXt(e) {
  if (!oBe() || e === null || e === void 0) return false;
  if (e.action !== void 0 && e.action !== "publish") return false;
  let n = xwt(e);
  if (n !== void 0) return D(n) && n.room !== void 0;
  let r = kk(e);
  if (r !== void 0) {
    let u = Jt(r);
    return u !== null && ZOt(u.slug);
  }
  let o = typeof e.url === "string" ? Jt(e.url) : null, s;
  try {
    s = o !== null ? At(o.slug) : typeof e.file_path === "string" ? H2t(ut(e.file_path)) : void 0;
  } catch {
    s = void 0;
  }
  return s?.capabilities?.room !== void 0;
}
var q_r = { threadIds: /* @__PURE__ */ new Set(), commentIds: /* @__PURE__ */ new Set() };
function vlo(e) {
  return { url: Tg(e.slug), release: e.current };
}
function mD(e) {
  let n = typeof e === "string" ? Jt(e) : null;
  if (!n) throw new We(`not an artifact URL: ${String(e)}`, "invalid_url");
  return n;
}
function $0n(e, n, r, o) {
  if (typeof r !== "object" || r === null || !W_r(r)) return;
  let { writes: s, ...u } = r;
  for (let [a, l] of o9(r).entries()) {
    let d = Ren(n, e, { ...u, db_op: l.op, collection: l.collection, doc_id: l.docId, ...l.data !== void 0 && { data: l.data }, ...l.filePath !== void 0 && { file_path: l.filePath } }, o);
    if (d) return { index: a, rule: d };
  }
  return;
}
function Y_r(e, n, r, o) {
  if (typeof r !== "object" || r === null || r.db_op !== UE) return;
  return Ren(n, e, { ...r, db_op: "update" }, o) ?? void 0;
}
function bN(e) {
  return e.ruleValue.ruleContent === void 0 ? e.ruleValue.toolName : `${e.ruleValue.toolName}(${MXt(e)})`;
}
function U0n(e, n, r) {
  let o = $0n(e, n, r, "deny");
  return o === void 0 ? void 0 : { behavior: "deny", message: `Permission to use ${Lt} has been denied by your rule ${bN(o.rule)} (writes[${o.index}] of this batch matches it), so nothing in the batch was written.`, decisionReason: { type: "rule", rule: o.rule } };
}
function E_s(e, n, r) {
  let o = Y_r(e, n, r, "deny");
  return o === void 0 ? void 0 : { behavior: "deny", message: `Permission to use ${Lt} has been denied by your rule ${bN(o)} (a str_replace is an update of one field), so nothing was written.`, decisionReason: { type: "rule", rule: o } };
}
function v_s(e, n, r, o) {
  let s = $0n(e, r, o, "ask");
  if (s === void 0 || typeof o !== "object" || o === null) return;
  let u = Reflect.get(o, "url"), a = typeof u === "string" ? Jt(u) : null;
  return { behavior: "ask", message: `Claude wants to write a batch to this artifact's database, and writes[${s.index}] matches your ask rule ${bN(s.rule)} — the full permission check could not complete, so approving covers only this call.`, updatedInput: { ...o, [If]: false, [RC]: a === null ? null : Xg(a, n) }, suppressAlwaysAllowRule: true, decisionReason: { type: "rule", rule: s.rule } };
}
function kC(e, n) {
  if (!ctt(At(e.slug))) return null;
  return { behavior: "deny", message: `${xn(e)}: ${N0t}. ${n}; tell the user.`, decisionReason: { type: "other", reason: X_o } };
}
function klo(e, n) {
  let r = kC(e, n);
  if (r !== null) return r;
  if (!RF(At(e.slug))) return null;
  return { behavior: "deny", message: `${xn(e)}: ${J_o}. ${n}; tell the user.`, decisionReason: { type: "other", reason: Q_o } };
}
function LXt(e, n, r) {
  let o = e === "watch" && Cg();
  if (o && n.path !== void 0 && E?.livePathFrom(n) === void 0) return { result: false, message: E?.LIVE_PATH_INVALID ?? "invalid path", errorCode: 8 };
  let s = Object.keys(n).filter((l) => l !== "action" && l !== "url" && !(e === "read_page_data" && l === "schema") && !(o && l === "path") && n[l] !== void 0);
  if (s.length > 0) return { result: false, message: `action "${e}" takes only ${e === "read_page_data" ? "`url` and `schema`" : o ? "`url` (and `path`)" : "`url`"} — remove ${s.join(", ")}.`, errorCode: 8 };
  if (e === "read_page_data") {
    let l = n.schema, d = Z().frozenReadPageDataSchemaNames;
    if (l === void 0) return { result: false, message: `action "read_page_data" requires \`schema\` — the registered interaction schema to validate against${d?.size ? ` (e.g. "${[...d][0]}")` : ""}.`, errorCode: 7 };
    if (!YZt(l)) return { result: false, message: `interaction schema "${ny(l)}" is not available in this session. Available schemas: ${[...d ?? []].join(", ") || "(none)"}.`, errorCode: 8 };
    let f = sen(l);
    if (!f.ok) return { result: false, message: f.reason === "unknown" ? `unknown interaction schema "${l}" — registered schemas: ${YAs().join(", ") || "(none)"}.` : `interaction schema "${l}" failed validation in this build — report this; nothing can be read against it.`, errorCode: 8 };
  }
  if (r === void 0) {
    if (e === "status") return { result: true };
    if (e === "verify") return { result: true };
    return { result: false, message: `action "${e}" requires \`url\` — the artifact's claude.ai URL (find it with action: "list" or action: "status").`, errorCode: 7 };
  }
  let u = KR(r);
  if (u) return u;
  let a = MC(r);
  if (!a.ok) return { result: false, message: a.message, errorCode: a.errorCode };
  return { result: true };
}
r3s({ addOpenedFrameRow: llo, forgetArtifactDeletedThroughMcp: I, markFrameOpenOutcome: IXt, derivePublishContext: M$, surfacePublishedArtifact: Wdt });
var Ydt = 64, z = 15e3, K = 65536;
async function k_s(e, n, r, o) {
  let s = Z(), u = s.accountEpoch, a = s.profileIdsForgets.get(e) ?? 0, l;
  try {
    l = await cu.postRelayBound(`/api/frame/user/profiles/${encodeURIComponent(e)}`, { ids: n }, { refreshOAuth: true, credentials: o, headers: Xc(), timeout: z, maxContentLength: K, signal: r });
  } catch (c) {
    if (Fa(c)) throw c;
    return { ok: false };
  }
  if (!l.ok) return { ok: false };
  let d = () => Z() === s && s.accountEpoch === u && (s.profileIdsForgets.get(e) ?? 0) === a;
  if (!l.fromFrame || l.status < 200 || l.status >= 300) {
    if (l.fromFrame && d() && l.status === 403 && D(l.data) && l.data.error === "not_declared") s.profileIdsServed.set(e, false);
    return { ok: false, status: l.status };
  }
  let f = D(l.data) ? l.data.profiles : void 0;
  if (!D(f)) return { ok: false, status: l.status };
  let p = new Set(n), g = {};
  for (let [c, w] of Object.entries(f)) {
    if (!p.has(c)) continue;
    let h = Clo(w);
    if (h.name !== void 0 || h.guest === true) g[c] = h;
  }
  if (d()) s.profileIdsServed.set(e, true), Q(e, { ...Object.fromEntries(n.map((c) => [c, {}])), ...g });
  return { ok: true, profiles: g };
}
function Clo(e) {
  if (!D(e)) return {};
  let n = Mtn(e.name);
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
  $0n,
  $_r,
  B_r,
  Clo,
  DXt,
  E_s,
  Elo,
  F0n,
  G_r,
  Gdt,
  HIt,
  HXt,
  IXt,
  KR,
  K_r,
  Kdt,
  L0n,
  LXt,
  MIt,
  MXt,
  N0n,
  OXt,
  SP,
  S_s,
  Slo,
  U0n,
  U_r,
  V_r,
  Vdt,
  W_r,
  Wdt,
  Xg,
  Y_r,
  Ydt,
  __s,
  _lo,
  a9e,
  alo,
  bN,
  b_s,
  blo,
  clo,
  cq,
  dlo,
  f_s,
  flo,
  g_s,
  glo,
  h_s,
  hlo,
  i9e,
  ilo,
  j_r,
  kC,
  k_s,
  kk,
  klo,
  l9e,
  llo,
  mD,
  m_s,
  mlo,
  o9,
  ote,
  pIe,
  p_s,
  plo,
  q_r,
  qdt,
  tme,
  ulo,
  uq,
  v_s,
  vlo,
  w_s,
  wlo,
  y_s,
  ylo,
  z_r,
  zdt
};
