// linux/remote/turn-handoff-files-by-name.js — Claude Code 2.1.310（linux）模块 chunk-vg1bkscj.js
import { aFe } from "../context/not-admin-owned.js";
import { b, c } from "../agents/third-party.js";
import { Er } from "../telemetry/anthropic-workspace-id.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { Y } from "../shared/async-hooks.9e79.js";
import { i } from "../shared/environment.js";
import { Ad } from "../shared/chunk-d2c47492.js";
import { fe } from "../shared/async-hooks.5238.js";
import { ws } from "../fs/tempdir-owner-mismatch.js";
import { __ } from "./local-agent.js";
import { pl } from "../shell/invalid-type.js";
import { xU, Vre } from "../shared/project-docs.js";
import { jO } from "../context/tool-result-clearing-after-idle-server-report.js";
import { EU } from "../artifacts/utf-8.js";
import { Tte } from "../fs/send-file-received.js";
import { Kut } from "./bridge-attachment-prefetch-download.js";
import { dyt } from "../context/team-memory-sync.js";
import { HHn, yIe, _Ie, hct } from "../fs/path-occupied.js";
import { hCn, tat } from "../telemetry/stage-file-completed.js";
import { sRt, iRt, mCn, gCn } from "../shell/table-unread.js";
import { IHe } from "../shared/chunk-a5f59e6a.js";
import { et } from "../shared/chunk-061dbb8e.js";
import { constants as A } from "fs";
import { lstat as v, open as H, realpath as U, unlink as W } from "fs/promises";
import { posix as R } from "path";
var j = 3e3, pCn = 134217728, z = /* @__PURE__ */ new Set(["csv", "docx", "jsonl", "log", "md", "ndjson", "ods", "odt", "parquet", "pdf", "pptx", "rtf", "tsv", "txt", "xls", "xlsm", "xlsx", "zip"]), k = /* @__PURE__ */ new Set(["cmakecache.txt", "cmakelists.txt", "conanfile.txt", "constraints.txt", "requirements.txt"]), X = /^test.*\.txt$/;
function cur(e) {
  if (e.includes(R.sep)) return "has_directory";
  if (Buffer.byteLength(e) > HHn) return "too_long";
  if (!Ad(e)) return "odd_spelling";
  let l = yIe(e);
  if (l !== void 0) return l;
  let o = pl(e), d = o.lastIndexOf(".");
  if (d <= 0) return "no_suffix";
  if (!z.has(o.slice(d + 1))) return "not_data";
  return k.has(o) || X.test(o) ? "project_file" : void 0;
}
async function K(e, { fileUuid: l, name: o }, d) {
  let r = await _Ie(e, o);
  if (r !== void 0) return { outcome: r.outcome === "refused_name" ? `refused_${r.refusal}` : r.outcome, bytes: 0 };
  let t = Kut(l, void 0);
  if (t === void 0) return { outcome: "source_missing", bytes: 0 };
  if (t.size > d) return { outcome: "over_byte_budget", bytes: 0 };
  let s = await Tte(t.path, t.size);
  if (s === null) return { outcome: "source_unreadable", bytes: 0 };
  if (et(s) !== t.sha256) return { outcome: "source_changed", bytes: 0 };
  let u = await uur(e, o, s);
  if (u.outcome === "placed") await pur(e, { fileUuid: l, name: o }, t);
  return u.outcome === "refused_name" ? { outcome: `refused_${u.refusal}`, bytes: 0 } : { outcome: u.outcome, bytes: u.outcome === "placed" ? s.length : 0 };
}
async function uur(e, l, o) {
  return await fur(e, l, o, (d) => hct(d, e, l));
}
async function fur(e, l, o, d) {
  let r = R.join(e, `${hCn(l)}${Date.now()}.${Math.random().toString(36).slice(2)}`), t = await H(r, A.O_WRONLY | A.O_CREAT | A.O_EXCL | ws, 384);
  try {
    try {
      await t.writeFile(o);
    } finally {
      await t.close();
    }
    return await d(r);
  } finally {
    await W(r).catch(() => {
    });
  }
}
async function pur(e, { fileUuid: l, name: o }, { size: d, sha256: r }) {
  let t = aFe(), s = iRt(o), u = R.join(e, o), h = t.get(s);
  t.delete(s);
  let w = await v(u).catch(() => {
    return;
  });
  if (w === void 0) return;
  let S = t.size >= sRt && t.keys().next().value;
  if (typeof S === "string") t.delete(S);
  t.set(s, { path: u, fileUuid: l.toLowerCase(), dev: w.dev, ino: w.ino, mtimeMs: Math.floor(w.mtimeMs), size: d, sha256: r, ...h !== void 0 && h.path !== u && { ambiguous: true } });
}
var N = { filesWait: "not_reached", filesWaitMs: 0, copiedBytes: 0, namedInCall: 0, namedInCallPlaced: 0, namedInCallAlreadyPresent: 0, counts: {} };
async function oEi(e, l, o = j, d = pCn) {
  let { fileNames: r } = e;
  if (r === void 0) return;
  let t = performance.now(), { outcome: s, filesWait: u, counts: h, lastErrorCode: w, ...S } = r === "malformed" ? { ...N, outcome: "malformed" } : await q(r, e, l, o, d).catch((y) => ({ ...N, outcome: "failed", lastErrorCode: Er(y) ?? b("unknown") })), C = r === "malformed" ? 0 : r.length, F = { outcome: c(s), files_wait: c(u), files_wait_ms: S.filesWaitMs, duration_ms: Math.round(performance.now() - t), approx_copied_bytes: Number(S.copiedBytes.toPrecision(2)), files_listed: C, files_named_in_call: S.namedInCall, files_named_in_call_placed: S.namedInCallPlaced, files_named_in_call_already_present: S.namedInCallAlreadyPresent, ...jO(h, (y, E) => `files_${E}`), ...w !== void 0 && { last_error_code: w } };
  a("tengu_turn_handoff_files_by_name", F), Y(w !== void 0 || s === "malformed" ? "warn" : "info", "turn_handoff_files_by_name", F);
  let I = (h.placed ?? 0) + (h.already_present ?? 0) + (h.present_under_another_name ?? 0), T = IHe(Object.entries(h), ([y, E]) => y.startsWith("refused_") || y === "repeated_name" || y === "path_occupied" ? E : 0);
  if (s === "aborted") ;
  else if (s === "not_applicable") f("ccr_turn_handoff_files_by_name", s);
  else if (s !== "finished") m("ccr_turn_handoff_files_by_name", s);
  else if (T === C) f("ccr_turn_handoff_files_by_name", "all_skipped_by_rule");
  else if (I + T === C) g("ccr_turn_handoff_files_by_name");
  else if (I > 0) f("ccr_turn_handoff_files_by_name", "some_files_absent");
  else m("ccr_turn_handoff_files_by_name", "all_files_absent");
}
async function q(e, l, o, d, r) {
  let t = Vre(), [s, u] = await Promise.all([fe(), t].map((n) => U(n).catch(() => {
    return;
  })));
  if (!__() || !EU(i.CLAUDE_CODE_REMOTE_SESSION_ID, i.CLAUDE_CODE_ENVIRONMENT_KIND) || u === void 0 || s !== u) return { ...N, outcome: "not_applicable" };
  let h = performance.now(), w = await dyt(o), S = Math.round(performance.now() - h);
  await tat(t, xU), await gCn();
  let C = l.messages.at(-1), F = C?.type === "assistant" && Array.isArray(C.message.content) ? C.message.content.flatMap((n) => n.type === "tool_use" && l.toolUseIDs.includes(n.id) && typeof n.input === "object" && n.input !== null ? Object.values(n.input).flatMap((p) => typeof p === "string" ? [p, p.replaceAll("\\", "")] : []) : []) : [], I = new Set(e.filter(({ name: n }) => n !== "" && F.some((p) => p.includes(n)))), T = /* @__PURE__ */ new Map();
  for (let { name: n, fileUuid: p } of e) T.set(n, (T.get(n) ?? /* @__PURE__ */ new Set()).add(p.toLowerCase()));
  let y = {}, E = /* @__PURE__ */ new Set(), O = 0, M = 0, L = 0, x, B = false, D = performance.now() + d;
  for (let n of e.toSorted((p, _) => Number(I.has(_)) - Number(I.has(p)))) {
    if (o.aborted) {
      B = true;
      break;
    }
    let p = cur(n.name), _;
    if (p !== void 0) _ = `refused_${p}`;
    else if (T.get(n.name)?.size !== 1) _ = "repeated_name";
    else if (E.has(n.fileUuid.toLowerCase())) _ = "present_under_another_name";
    else if (performance.now() > D) _ = "over_time_budget";
    else try {
      let P = await K(t, n, r - O);
      _ = P.outcome, O += P.bytes;
    } catch (P) {
      x = Er(P) ?? b("unknown"), _ = "copy_failed";
    }
    if (y[_] = (y[_] ?? 0) + 1, _ === "placed" || _ === "already_present") E.add(n.fileUuid.toLowerCase());
    if (I.has(n) && _ === "placed") M++;
    else if (I.has(n) && _ === "already_present") L++;
  }
  if ((y.placed ?? 0) > 0) await mCn();
  return { outcome: B ? "aborted" : "finished", filesWait: w, filesWaitMs: S, copiedBytes: O, namedInCall: I.size, namedInCallPlaced: M, namedInCallAlreadyPresent: L, counts: y, ...x !== void 0 && { lastErrorCode: x } };
}
export {
  cur,
  fur,
  oEi,
  pCn,
  pur,
  uur
};
