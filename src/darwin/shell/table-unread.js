// darwin/shell/table-unread.js — Claude Code 2.1.310（darwin）模块 chunk-gdm0ds3p.js
import { He } from "../fs/async-hooks.93b1.js";
import { L, V, h$e, Bdr, hXr, OX } from "../context/not-admin-owned.js";
import { S } from "../agents/third-party.js";
import { R, N, v, vr } from "../telemetry/anthropic-workspace-id.js";
import { _, ee } from "../fs/gitlab-runner-authentication-token.js";
import { Y } from "../shared/async-hooks.9e79.js";
import { i } from "../shared/environment.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { $8e, R$n, zut } from "../fs/bridge-attachment-user-data-root.js";
import { Fs } from "../shared/chunk-4563156b.js";
import { Gw } from "../git/utf-8.js";
import { Hn } from "../fs/utf-8.8f8e.js";
import { S_ } from "../remote/local-agent.js";
import { Lr } from "../tools/device-session-limit.js";
import { QE } from "../context/tool-result-clearing-after-idle-server-report.js";
import { Tt } from "../mcp/allowed-warning.js";
import { hs } from "../fs/tempdir-owner-mismatch.js";
import { AU } from "../artifacts/utf-8.js";
import { Q6 } from "../context/team-memory-sync.js";
import { Sho, JFn } from "./run-in-background.4c23.js";
import { Jho } from "../settings/output-styles.js";
import { jzs } from "../mcp/declared-tools-dropped-at-compaction.js";
import { bx, L_t, N_t } from "../shared/chunk-c60ee8b6.js";
import { o, vFe } from "../vendor/zod/string-format.js";
import { open as H, unlink as w } from "fs/promises";
import { dirname as T, join as h } from "path";
var fRt = 64, E = 262144, k = /* @__PURE__ */ new Set(["ELOOP", "ENXIO"]);
function mRt(e) {
  return e.normalize("NFC");
}
function V4t() {
  return OX() === null && S_() && AU(i.CLAUDE_CODE_REMOTE_SESSION_ID, i.CLAUDE_CODE_ENVIRONMENT_KIND);
}
function K4t(e) {
  let t = h$e();
  return t.size > 0 && e.some(({ fileUuid: r, name: a }) => {
    let n = t.get(mRt(a));
    return n !== void 0 && n.fileUuid !== r.toLowerCase();
  });
}
function ZJr(e) {
  return e.length > 0 && V4t() && (Bdr() !== "done" || K4t(e));
}
var y = ".placed-by-name.json";
function A() {
  let e = bx();
  return [e, ...OX() === null ? N_t().map((t) => h(t, V())).filter((t) => t !== e) : []].map((t) => h(t, y));
}
async function C(e) {
  if (T(e) === L_t()) {
    await w(h(e, y));
    return;
  }
  let t = await $8e(e, 0);
  if (typeof t !== "string") try {
    if (await R$n(t) === true) await w(h(t.at, y));
  } finally {
    await t.release();
  }
}
async function AAn() {
  if (Bdr() !== "done") {
    Y("warn", "turn_handoff_files_by_name_table", { state: "not_stored", error_code: S("table_unread") });
    return;
  }
  try {
    let e = await zut(bx());
    try {
      await Hn(h(e.at, y), _([...h$e()]), 384);
    } finally {
      await e.release();
    }
    await Promise.allSettled(A().slice(1).map((t) => C(T(t))));
  } catch (e) {
    Y("warn", "turn_handoff_files_by_name_table", { state: "not_stored", error_code: vr(e) ?? S("unknown") });
  }
}
function F(e) {
  if (!Array.isArray(e) || e.length !== 2) return false;
  let [t, r] = e;
  if (typeof t !== "string" || typeof r !== "object" || r === null) return false;
  let { path: a, fileUuid: n, dev: s, ino: c, mtimeMs: f, size: p, sha256: m, ambiguous: d } = r;
  return typeof a === "string" && typeof n === "string" && [s, c, f, p].every((u) => typeof u === "number" && Number.isFinite(u)) && typeof m === "string" && (d === void 0 || d === true);
}
function RAn() {
  let e = Bdr();
  if (e !== void 0) return e === "done" ? Promise.resolve() : e;
  let t = M().then((r) => {
    if (hXr(r.state === "table_unread" ? void 0 : "done"), r.state !== "table_absent") Y("info", "turn_handoff_files_by_name_table", r);
  });
  return hXr(t), t;
}
async function M() {
  let [e, ...t] = A(), r = await P(e);
  if (r.state !== "table_absent") return r;
  for (let a of t) {
    let n = await P(a);
    if (n.state === "table_read") return n;
  }
  return r;
}
async function P(e) {
  let t;
  try {
    let n = await H(e, Fs | hs);
    try {
      let s = await n.stat(), c = s.isFile() && s.size <= E ? await Gw(n, E, s.size) : void 0;
      t = c === void 0 || c.overLimit ? void 0 : ee(c.bytes.toString("utf8"));
    } finally {
      await n.close();
    }
  } catch (n) {
    let s = v(n);
    return { state: s === "ENOENT" ? "table_absent" : s === void 0 || k.has(s) ? "table_damaged" : "table_unread", rows: 0 };
  }
  if (!Array.isArray(t) || t.length > fRt || !t.every(F)) return { state: "table_damaged", rows: 0 };
  let r = h$e(), a = [...r];
  r.clear();
  for (let [n, s] of t) {
    let { path: c, fileUuid: f, dev: p, ino: m, mtimeMs: d, size: u, sha256: b, ambiguous: g } = s;
    r.set(n, { path: c, fileUuid: f.toLowerCase(), dev: p, ino: m, mtimeMs: d, size: u, sha256: b, ...g && { ambiguous: g }, fromEarlierProcess: true });
  }
  for (let [n, s] of a) r.delete(n), r.set(n, s);
  for (let n of [...r.keys()].slice(0, Math.max(0, r.size - fRt))) r.delete(n);
  return { state: "table_read", rows: t.length };
}
var D = { supported: true, refusedInputFields: JFn, decidingInputFields: ["command", "run_in_background", "dangerouslyDisableSandbox"] };
function I() {
  return import.meta.require("../tools/power-shell-tool.js").PowerShellTool;
}
function eQr(e, t) {
  let r = I(), a = Sho({ edition: t?.powershell?.edition ?? null, buildTools: [], onWindows: true, backgroundRuns: false }), n = x(r.inputSchema, ["run_in_background"]).extend({ [Lr]: o().optional().describe("Optional. Names the attached computer this runs on — the attached-machines note says which computers serve PowerShell. While exactly one does it may be omitted and the call runs there; when several do, name one. It never runs in this session's own environment, which has no PowerShell. The result says where it ran.") }), s = Object.defineProperties({}, { ...Object.getOwnPropertyDescriptors(r), inputSchema: { value: n, enumerable: true }, prompt: { value: async () => a, enumerable: true }, isEnabled: { value: () => true, enumerable: true }, remoteExecution: { value: D, enumerable: true }, suppressesAllPermissionUpdates: { value: () => true, enumerable: true }, call: { value: async () => {
    throw new R(`PowerShell runs only on ${e}; the session runs it there and it cannot run here.`, "session-channel PowerShell tool called without being routed to its machine");
  }, enumerable: true } });
  return jzs(s);
}
function Oas(e, t) {
  if (QE()) return 0;
  let r = L(t.filter((n) => n.tool === Tt).map((n) => n.host));
  if (r.length === 0) return 0;
  let a;
  try {
    a = r.map((n) => ({ tool: eQr(n, void 0), machine: n }));
  } catch (n) {
    return l(N(n)), 0;
  }
  return e.presentUntilAnnounced(a, Q6), a.length;
}
function x(e, t) {
  if (!(e instanceof vFe)) throw TypeError("PowerShellTool no longer declares an object schema");
  let r = t.filter((n) => n in e.shape), a = Object.fromEntries(r.map((n) => [n, true]));
  return r.length === 0 ? e : e.omit(a);
}
var O = 8, tQr = 256;
function Mas(e = () => performance.now()) {
  let t = [], r = [], a = 0, n = 0, s = false, c = false, f = false, p = He();
  return { noteStagedRow(m) {
    if (m.mount_path !== Jho) return false;
    let d = m.content_sha256, u = typeof d === "string" && d.length > 0 && d.length <= tQr ? d : null;
    if (u === null) {
      if (!f) f = true, Y("warn", "home_seed_stage_without_usable_etag", {});
      return false;
    }
    n++;
    let b = { etag: u, beforeFirstCommand: !s && !c, ordinal: n };
    t = [...t, b].slice(-O), r = [...r, { etag: u, ordinal: n, heardAtMs: e(), turnsAtHoldBefore: a }].slice(-O);
    try {
      p.emit(b);
    } catch {
      Y("error", "home_seed_announcement_listener_threw", {});
    }
    return true;
  }, noteStagedRowRead(m) {
    if (m.mount_path !== Jho) return;
    let d = r.find((u) => u.etag === m.content_sha256);
    if (d === void 0) return { onRecord: false };
    return r = r.filter((u) => u !== d), { onRecord: true, ordinal: d.ordinal, behindMs: Math.round(e() - d.heardAtMs), turnsAtHoldBefore: d.turnsAtHoldBefore, turnAtHoldMeanwhile: a > d.turnsAtHoldBefore };
  }, markTurnAtHold() {
    a++;
  }, markUserFrameDelivered() {
    c = true;
  }, markFirstCommandDequeued() {
    s = true;
  }, firstCommandDequeued() {
    return s;
  }, announcements() {
    return t;
  }, announcementCount() {
    return n;
  }, announcementForEtag(m) {
    return t.findLast((d) => d.etag === m);
  }, announced: { subscribe: p.subscribe } };
}
export {
  AAn,
  K4t,
  Mas,
  Oas,
  RAn,
  V4t,
  ZJr,
  eQr,
  fRt,
  mRt,
  tQr
};
