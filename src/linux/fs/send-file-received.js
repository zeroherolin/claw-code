// linux/fs/send-file-received.js — Claude Code 2.1.310（linux）模块 chunk-220dv0wx.js
import { J } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { R } from "../telemetry/anthropic-workspace-id.js";
import { Yn } from "./node-modules.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { t } from "./gitlab-runner-authentication-token.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { Vut } from "./not-owned.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { N7o, Ww, UEn } from "../git/utf-8.js";
import { nce, Are, R9n, $5s, x9n } from "../telemetry/chunk-f6ecba11.js";
import { qut } from "../telemetry/sdk-hosted-disabled.js";
import { yx } from "../shared/chunk-c60ee8b6.js";
import { o, v, T, u } from "../vendor/zod/string-format.js";
import { et } from "../shared/chunk-061dbb8e.js";
import { randomUUID as A } from "crypto";
import { lstat as I, mkdir as H, readdir as U, stat as O, unlink as N, writeFile as M } from "fs/promises";
import { basename as E, dirname as B, isAbsolute as C, join as y, resolve as j } from "path";
var G = x9n * 24 * 60 * 60 * 1e3, k = "file-transfers";
function b(r) {
  t(`[peer-file-transfer] ${r}`);
}
function H8e(r) {
  let e = E(r).replace(/[^a-zA-Z0-9._-]/g, "_") || "attachment", i = e.lastIndexOf("."), n = i > 0 && e.length - i <= 16 ? e.slice(i) : "", s = n ? e.slice(0, i) : e, l = 200 - n.length;
  return (s.length > l ? s.slice(0, l) : s) + n;
}
function CFn(r, e) {
  return `[SendFile: "${H8e(r)}" was not delivered — ${e}]`;
}
function RFn(r) {
  return `[SendFile: ${r} additional attachment(s) were dropped — max ${Are} per message]`;
}
function xFn(r, e) {
  if (typeof e.file_size === "number" && r.length !== e.file_size) return false;
  return et(r) === e.sha256;
}
function Vkr(r, e, i) {
  if (a("tengu_send_file_received", { transport: c(r), file_count: e, verified_count: i }), i === e) g("peer_file_receive");
  else if (i > 0) f("peer_file_receive", "partial_failed");
  else m("peer_file_receive", "all_failed");
}
async function Tte(r, e) {
  try {
    let n = await O(r);
    if (!n.isFile() || n.size > e) return null;
  } catch {
    return null;
  }
  let i;
  try {
    i = await UEn(r);
  } catch {
    return null;
  }
  try {
    let n = await i.stat();
    if (!n.isFile() || n.size > e) return null;
    let s = await Ww(i, e, n.size);
    return s.overLimit ? null : s.bytes;
  } catch {
    return null;
  } finally {
    await i.close().catch(() => {
    });
  }
}
function qkr(r, e) {
  if (!e) return r;
  let i = /^<cross-session-message\b[^>]*>\n?/.exec(r);
  return i ? i[0] + e + r.slice(i[0].length) : e + r;
}
function YZt() {
  return y(Le(), k);
}
function X() {
  return yx();
}
var Y = /^[0-9a-f]{64}$/, K = p(() => u({ path: o(), file_name: o(), file_size: v().int().nonnegative(), sha256: o().regex(Y), media_type: o().optional() })), V = p(() => T(K()));
async function Dyo(r) {
  if (J()) throw new R($5s, "peer file transfer: no disk in this session");
  let e = await Tte(r, nce);
  if (e === null) throw new R(R9n, "peer file transfer: source unreadable or over the size limit");
  let i = et(e), n = YZt();
  await H(n, { recursive: true, mode: 448 });
  let s = E(r), l = y(n, `${i.slice(0, 8)}-${A().slice(0, 8)}-${H8e(s)}`);
  return await M(l, e, { mode: 384 }), { path: l, file_name: s, file_size: e.length, sha256: i, media_type: qut(s) };
}
async function Hyo() {
  if (J()) return;
  let r = YZt();
  try {
    let e = await U(r), i = Date.now() - G;
    for (let n of e.slice(0, 200)) {
      let s = y(r, n);
      try {
        let l = await O(s);
        if (l.isFile() && l.mtimeMs < i) await N(s);
      } catch {
      }
    }
  } catch {
  }
}
var L = { prefix: "", received: 0, verified: 0 };
async function CAi(r) {
  if (J()) return L;
  let e = V().safeParse(r);
  if (!e.success || e.data.length === 0) {
    if (!e.success) b(`ignoring malformed file_attachments: ${e.error.message}`);
    return L;
  }
  let i = [], n = e.data;
  if (n.length > Are) i.push(RFn(n.length - Are)), n = n.slice(0, Are);
  let s = X(), l = YZt(), z = [], x = 0;
  for (let d of n) {
    let h = (_) => {
      b(`${d.file_name}: ${_}`), i.push(CFn(d.file_name, _));
    };
    if (Yn(d.path) || N7o(d.path) || !C(d.path)) {
      h("invalid transfer path");
      continue;
    }
    let F = j(d.path), w = B(F);
    if (Yn(F) || N7o(F) || E(w) !== k) {
      h("transfer path is outside the file-transfer spool");
      continue;
    }
    try {
      if (!(await I(w)).isDirectory() || !(await I(F)).isFile()) {
        h("the transfer copy is not a regular file");
        continue;
      }
    } catch {
      h("the transfer copy could not be read (it may have expired)");
      continue;
    }
    let P = await Tte(F, nce);
    if (P === null) {
      h("the transfer copy could not be read (it may have expired)");
      continue;
    }
    if (!xFn(P, d)) {
      h("it failed integrity verification");
      continue;
    }
    let S = y(s, `${d.sha256.slice(0, 8)}-${A().slice(0, 8)}-${H8e(d.file_name)}`);
    try {
      let _ = await Vut(s);
      try {
        await M(y(_.at, E(S)), P, { mode: 384, flag: "wx" });
      } finally {
        await _.release();
      }
    } catch (_) {
      h("it could not be written to the uploads directory"), b(`write ${S} failed: ${_}`);
      continue;
    }
    if (x++, z.push(`@"${S}"`), w === l) N(F).catch(() => {
    });
  }
  let D = [...z, ...i];
  return { prefix: D.length > 0 ? D.join(" ") + " " : "", received: n.length, verified: x };
}
export {
  CAi,
  CFn,
  Dyo,
  H8e,
  Hyo,
  RFn,
  Tte,
  Vkr,
  YZt,
  qkr,
  xFn
};
