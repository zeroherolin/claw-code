// darwin/telemetry/sdk-hosted-disabled.js — Claude Code 2.1.310（darwin）模块 chunk-n8b9paz2.js
import { J, Vc } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { R, v, $s } from "./anthropic-workspace-id.js";
import { Yn, cl, fy } from "../fs/node-modules.js";
import { mo } from "../artifacts/chunk-a6c9d164.js";
import { i } from "../shared/environment.js";
import { Po, Wo, ie, yc, mp } from "../fs/gitlab-runner-authentication-token.js";
import { I } from "../shared/chunk-d2c47492.js";
import { fp } from "../remote/local-agent.js";
import { lbe } from "../git/utf-8.js";
import { pe } from "../shared/async-hooks.5238.js";
import { ut } from "../shell/chunk-8eebd6c6.js";
import { zFe, qpe } from "../fs/utf-8.aa9a.js";
import { xFe } from "../remote/moved-directory.js";
import { k } from "../settings/global-config-and-gates.js";
import { XE } from "../remote/chunk-8734517b.js";
import { $8, e1o } from "./image-resize-fallback.js";
import { ZHe, Py } from "../context/org-memory-writes-setting-changed.js";
import { c0t } from "../shell/clipboard-read.js";
import { Ra, wYn } from "../shared/chunk-34a7f8ba.js";
import { mX } from "../shared/chunk-65fb1c9c.js";
import { stat as S } from "fs/promises";
import { basename as O, extname as W, isAbsolute as X, join as Y } from "path";
var G = 3, q = 32;
function x$n(n) {
  if (i.CLAUDE_CODE_ATTACHMENTS_BY_PATH) return "none";
  if (n.replBridgeEnabled) return "repl";
  if (i.CLAUDE_CODE_BRIEF_UPLOAD) return "env_brief_upload";
  if (i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE) return "env_ccr";
  if (i.CLAUDE_CODE_REMOTE) return "env_byoc";
  if (XE() !== null && Vc()) return k("tengu_async_goblet", true) ? "sdk_hosted" : "sdk_hosted_disabled";
  return "none";
}
function P$n(n) {
  return n === "sdk_hosted" && fp();
}
var K = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif", ".webp": "image/webp", ".svg": "image/svg+xml", ".bmp": "image/bmp", ".ico": "image/x-icon", ".heic": "image/heic", ".heif": "image/heif", ".avif": "image/avif", ".tif": "image/tiff", ".tiff": "image/tiff", ".mp4": "video/mp4", ".m4v": "video/x-m4v", ".mov": "video/quicktime", ".webm": "video/webm", ".avi": "video/x-msvideo", ".mkv": "video/x-matroska", ".mp3": "audio/mpeg", ".m4a": "audio/mp4", ".wav": "audio/wav", ".ogg": "audio/ogg", ".aac": "audio/aac", ".flac": "audio/flac", ".pdf": "application/pdf", ".txt": "text/plain", ".log": "text/plain", ".md": "text/markdown", ".json": "application/json", ".csv": "text/csv", ".html": "text/html", ".htm": "text/html", ".xml": "application/xml", ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document", ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation", ".zip": "application/zip" };
function Vut(n) {
  return K[W(n).toLowerCase()];
}
function Pyo(n) {
  return n.pathValidated === true && n.file_uuid !== void 0 && (n.media_type === "image/png" || n.media_type === "image/jpeg") && n.media_type !== Vut(n.path);
}
function F(n) {
  return typeof n !== "string";
}
async function Q(n, e, t) {
  let o = await qpe(e);
  if (o) return o;
  if (!X(n)) {
    let [a, ...d] = n.split(/[\\/]+/);
    if (a === O(t) && d.length > 0) {
      let p = Y(t, ...d);
      try {
        if ((await S(p)).isFile()) return d.join("/");
      } catch {
      }
    }
  }
  return await zFe(e);
}
function Iyo(n) {
  let e = mp(n);
  if (/^[a-z][a-z0-9+.-]+:\/\//i.test(n)) return { result: false, message: `Attachment "${e}" looks like a URL, not a local file path. This tool can only send files that exist on the local filesystem — download or write the content to a local file first, then pass that path.`, errorCode: 1 };
  let t = ut(n);
  if (Yn(t)) return { result: false, message: `Attachment "${e}" is a UNC network path, which is not supported.`, errorCode: 1 };
  if (fy(t)) return { result: false, message: `Attachment "${e}" is under /net, /Network, /.vol, /.file, /.nofollow or /.resolve, which could trigger a network mount, so it is not supported. Copy the file to an ordinary local path and pass that path instead.`, errorCode: 1 };
  return;
}
var U = "A file path cannot be attached here: this tool cannot read files in this session.";
function I$n(n, e) {
  return T(n, e, void 0);
}
async function uAs(n, e) {
  if (!e.restricted && e.blockReadsOutsideWorkingDirectories !== true) return { verdict: await T(n, e, void 0), judged: void 0 };
  let t = [], o = /* @__PURE__ */ new Map();
  return { verdict: await T(n, e, { paths: t, identities: o }), judged: { paths: t, identities: o, doorChannel: void 0 } };
}
async function T(n, e, t) {
  for (let o of n) {
    if (F(o)) continue;
    if (J()) return { result: false, message: U, errorCode: 1 };
    let a = Iyo(o);
    if (a !== void 0) return a;
    let d = mp(o), p = ut(o), h = t !== void 0 || e.restricted || e.blockReadsOutsideWorkingDirectories === true ? Wo(p) : void 0;
    if (e.restricted && !Py(p, e, h)) return { result: false, message: `Attachment "${d}" is outside the working directory; --restricted only sends files from inside it.`, errorCode: 1 };
    if (ZHe(p, e, h)) return { result: false, message: `Attachment "${d}" is outside the working directories; reads outside them are blocked (permissions.blockReadsOutsideWorkingDirectories).`, errorCode: 1 };
    try {
      if (!(await S(p)).isFile()) return { result: false, message: `Attachment "${d}" is not a regular file.`, errorCode: 1 };
    } catch (g) {
      let E = v(g);
      if (E === "ENOENT") {
        let P = pe(), y = await Q(o, p, P), b = mp(y);
        return { result: false, message: `Attachment "${d}" does not exist. Current working directory: ${mp(P)}.` + (y && b === y ? ` Did you mean "${b}"?` : ""), errorCode: 1 };
      }
      if ($s(g)) return { result: false, message: `Attachment "${d}" is not accessible (${E}).`, errorCode: 1 };
      throw g;
    }
    if (t !== void 0 && h !== void 0) t.paths.push(...h), t.identities.set(p, await lbe(h));
  }
  return { result: true };
}
async function O$n(n, e) {
  let t = [], o = [];
  for (let r of n) {
    if (F(r)) {
      t.push({ path: r.file_name, size: r.size, isImage: r.is_image, file_uuid: r.file_uuid, media_type: r.media_type ?? Vut(r.file_name), pathValidated: false });
      continue;
    }
    if (J()) throw new R(U, "attachment path refused in a diskless session");
    let u = ut(r);
    if (cl(u)) throw Error(`Attachment "${mp(r)}" is a network path (UNC or /net autofs), which is not supported.`);
    let f = await S(u).catch((s) => {
      if (s instanceof Error) s.message = mp(s.message);
      throw s;
    });
    o.push(t.length), t.push({ path: u, size: f.size, isImage: c0t.test(u), media_type: Vut(u), pathValidated: true });
  }
  let { lane: a } = e, d = mo().projectFilesDoor?.() ?? null, p = d !== null && d.channelId === e.projectFilesChannel ? d : null, h = a !== "none" && a !== "sdk_hosted_disabled";
  if (o.length === 0 || p === null && !h) {
    for (let r of o) {
      let u = L(t[r].path, e.judged?.paths);
      if (typeof u !== "string") t[r] = { ...t[r], upload_error: u.error };
    }
    if (xFe()) for (let r of o) t[r] = { ...t[r], upload_error: d === null ? "not delivered: this session is not on a project thread, so it has nowhere to place a file" : "not delivered: the project folder is not written in plan mode until the plan is approved" };
    return t;
  }
  let { uploadBriefAttachment: g, writeAttachmentToProjectFolder: E } = await import("../remote/upload-brief-attachment.js"), P = mX(), y = { upload_lane: c(a) }, b = !k("tengu_playful_panda", true), N = !k("tengu_level_wren", true), z = k("tengu_zany_flask", 2), M = wYn(G), C = () => {
  }, H = new Promise((r) => {
    C = r;
  });
  e.signal?.addEventListener("abort", C, { once: true });
  let V = Ra(q, async (r) => {
    let { path: u, size: f } = t[r], s = L(u, e.judged?.paths);
    if (typeof s !== "string") return { folder: { error: s.error }, chat: void 0 };
    let l = O(u), _ = e.judged?.identities, w = _ === void 0 || _.has(u) ? _?.get(u) : null, m, D = async () => {
      await Promise.race([m ??= M.acquire(), H]);
    };
    try {
      let [A, j] = await Promise.allSettled([p ? E(s, f, p, { filename: l, identity: w, signal: e.signal, telemetry: y, waitForTurn: D }) : void 0, h ? g(s, f, { lane: a, filename: l, identity: w, signal: e.signal, credentials: e.credentials, copyLock: P, waitForTurn: D, originalsOnly: e.originalsOnly, noPreviewCopies: b, noScaledCopies: N, maxPosts: z }) : void 0]);
      if (A.status === "rejected") throw A.reason;
      if (j.status === "rejected") throw j.reason;
      return { folder: A.value, chat: j.value };
    } finally {
      m?.then((A) => A());
    }
  }), x = o.map(V);
  Promise.allSettled(x).then(() => e.signal?.removeEventListener("abort", C));
  let B = await Promise.all(x);
  return o.forEach((r, u) => {
    let { folder: f, chat: s } = B[u], l = { ...t[r] };
    if (typeof f === "string") l.project_path = f;
    if (s !== void 0 && !("error" in s)) {
      if (l.file_uuid = s.file_uuid, s.copy !== void 0) l.isImage = s.copy.isImage, l.media_type = s.copy.mediaType;
      if (s.scaled !== void 0) l.scaled = s.scaled;
    }
    let _ = f !== void 0 && typeof f !== "string", w = s !== void 0 && "error" in s;
    if (l.project_path === void 0 && l.file_uuid === void 0) {
      let m = _ ? f : w ? s : void 0;
      if (m !== void 0) {
        if (l.upload_error = m.error, m.errorCode !== void 0) l.upload_error_code = m.errorCode;
        if (m.suspectedLimitBytes !== void 0) l.upload_suspected_limit_bytes = m.suspectedLimitBytes;
      }
    } else if (_) l.partial_error = `not placed in the project folder (${f.error})`;
    else if (w) l.partial_error = `not sent to the chat viewers (${e1o(s.error, s.errorCode, true)})`;
    t[r] = l;
  }), t;
}
function L(n, e) {
  let { resolvedPath: t } = Po(ie(), n);
  if (e === void 0) return t;
  return e.includes(t) ? t : { error: "not sent: it now resolves to what was not approved" };
}
function M$n(n) {
  let e = n.flatMap(({ path: o, scaled: a, project_path: d }) => a === void 0 ? [] : [{ path: yc(o), scaled: a, inFolder: d !== void 0 }]), t = e.length;
  if (t === 0) return;
  return `${t} ${I(t, "image was sent to the chat as a scaled-down copy", "images were sent to the chat as scaled-down copies")}, because the server accepts images at most ${$8} pixels wide or tall:
` + e.map(({ path: o, scaled: a, inFolder: d }) => `  ${o}: sent at ${a.width}×${a.height} pixels; the original (${a.original_width}×${a.original_height}) is ${d ? "in the project folder" : "unchanged on disk"}`).join(`
`) + `
Tell the user they are seeing ${I(t, "a scaled-down copy", "scaled-down copies")}; ` + (e.every((o) => o.inFolder) ? `the project folder has ${I(t, "the full-size original", "the full-size originals")}.` : `if they need ${I(t, "the full-size original", "a full-size original")}, offer to send it inside a .zip.`);
}
export {
  I$n,
  Iyo,
  M$n,
  O$n,
  P$n,
  Pyo,
  Vut,
  uAs,
  x$n
};
