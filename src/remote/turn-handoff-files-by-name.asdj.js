// remote/turn-handoff-files-by-name.asdj.js — Claude Code 2.1.310 模块 chunk-asdjrmpy.js
import { h$e } from "../context/not-admin-owned.ersa.js";
import { S, c } from "../agents/third-party.ydpb.js";
import { vr } from "../telemetry/anthropic-workspace-id.36ys.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { g, m, p } from "../telemetry/chunk-wn8xtaqg.js";
import { Y } from "../shared/async-hooks.923e.js";
import { i } from "../shared/environment.9a41.js";
import { Td } from "../shared/chunk-j79dwkaq.js";
import { pe } from "../shared/async-hooks.m2fg.js";
import { hs } from "../fs/tempdir-owner-mismatch.5xe1.js";
import { S_ } from "./local-agent.we9a.js";
import { ml } from "../shell/invalid-type.qnva.js";
import { MU, Zre } from "../shared/project-docs.pfj1.js";
import { qO } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { AU } from "../artifacts/utf-8.vzjz.js";
import { xte } from "../fs/send-file-received.w8v9.js";
import { Gut } from "./bridge-attachment-prefetch-download.5dan.js";
import { eyt } from "../context/team-memory-sync.0s3j.js";
import { nDn, vIe, kIe, Sct } from "../fs/path-occupied.ahb6.js";
import { xAn, sat } from "../telemetry/stage-file-completed.3e63.js";
import { fRt, mRt, AAn, RAn } from "../shell/table-unread.gdm0.js";
import { NHe } from "../shared/chunk-z4jb9fnd.js";
import { et } from "../shared/chunk-tftf1nn4.js";
import { constants as A } from "fs";
import { lstat as v, open as H, realpath as U, unlink as W } from "fs/promises";
import { posix as R } from "path";
var j = 3e3, TAn = 134217728, z = /* @__PURE__ */ new Set(["csv", "docx", "jsonl", "log", "md", "ndjson", "ods", "odt", "parquet", "pdf", "pptx", "rtf", "tsv", "txt", "xls", "xlsm", "xlsx", "zip"]), k = /* @__PURE__ */ new Set(["cmakecache.txt", "cmakelists.txt", "conanfile.txt", "constraints.txt", "requirements.txt"]), X = /^test.*\.txt$/;
function hur(e) {
  if (e.includes(R.sep)) return "has_directory";
  if (Buffer.byteLength(e) > nDn) return "too_long";
  if (!Td(e)) return "odd_spelling";
  let l = vIe(e);
  if (l !== void 0) return l;
  let o = ml(e), d = o.lastIndexOf(".");
  if (d <= 0) return "no_suffix";
  if (!z.has(o.slice(d + 1))) return "not_data";
  return k.has(o) || X.test(o) ? "project_file" : void 0;
}
async function K(e, { fileUuid: l, name: o }, d) {
  let r = await kIe(e, o);
  if (r !== void 0) return { outcome: r.outcome === "refused_name" ? `refused_${r.refusal}` : r.outcome, bytes: 0 };
  let t = Gut(l, void 0);
  if (t === void 0) return { outcome: "source_missing", bytes: 0 };
  if (t.size > d) return { outcome: "over_byte_budget", bytes: 0 };
  let s = await xte(t.path, t.size);
  if (s === null) return { outcome: "source_unreadable", bytes: 0 };
  if (et(s) !== t.sha256) return { outcome: "source_changed", bytes: 0 };
  let f = await yur(e, o, s);
  if (f.outcome === "placed") await Sur(e, { fileUuid: l, name: o }, t);
  return f.outcome === "refused_name" ? { outcome: `refused_${f.refusal}`, bytes: 0 } : { outcome: f.outcome, bytes: f.outcome === "placed" ? s.length : 0 };
}
async function yur(e, l, o) {
  return await _ur(e, l, o, (d) => Sct(d, e, l));
}
async function _ur(e, l, o, d) {
  let r = R.join(e, `${xAn(l)}${Date.now()}.${Math.random().toString(36).slice(2)}`), t = await H(r, A.O_WRONLY | A.O_CREAT | A.O_EXCL | hs, 384);
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
async function Sur(e, { fileUuid: l, name: o }, { size: d, sha256: r }) {
  let t = h$e(), s = mRt(o), f = R.join(e, o), b = t.get(s);
  t.delete(s);
  let h = await v(f).catch(() => {
    return;
  });
  if (h === void 0) return;
  let w = t.size >= fRt && t.keys().next().value;
  if (typeof w === "string") t.delete(w);
  t.set(s, { path: f, fileUuid: l.toLowerCase(), dev: h.dev, ino: h.ino, mtimeMs: Math.floor(h.mtimeMs), size: d, sha256: r, ...b !== void 0 && b.path !== f && { ambiguous: true } });
}
var N = { filesWait: "not_reached", filesWaitMs: 0, copiedBytes: 0, namedInCall: 0, namedInCallPlaced: 0, namedInCallAlreadyPresent: 0, counts: {} };
async function Nvi(e, l, o = j, d = TAn) {
  let { fileNames: r } = e;
  if (r === void 0) return;
  let t = performance.now(), { outcome: s, filesWait: f, counts: b, lastErrorCode: h, ...w } = r === "malformed" ? { ...N, outcome: "malformed" } : await q(r, e, l, o, d).catch((y) => ({ ...N, outcome: "failed", lastErrorCode: vr(y) ?? S("unknown") })), C = r === "malformed" ? 0 : r.length, F = { outcome: c(s), files_wait: c(f), files_wait_ms: w.filesWaitMs, duration_ms: Math.round(performance.now() - t), approx_copied_bytes: Number(w.copiedBytes.toPrecision(2)), files_listed: C, files_named_in_call: w.namedInCall, files_named_in_call_placed: w.namedInCallPlaced, files_named_in_call_already_present: w.namedInCallAlreadyPresent, ...qO(b, (y, E) => `files_${E}`), ...h !== void 0 && { last_error_code: h } };
  a("tengu_turn_handoff_files_by_name", F), Y(h !== void 0 || s === "malformed" ? "warn" : "info", "turn_handoff_files_by_name", F);
  let I = (b.placed ?? 0) + (b.already_present ?? 0) + (b.present_under_another_name ?? 0), T = NHe(Object.entries(b), ([y, E]) => y.startsWith("refused_") || y === "repeated_name" || y === "path_occupied" ? E : 0);
  if (s === "aborted") ;
  else if (s === "not_applicable") p("ccr_turn_handoff_files_by_name", s);
  else if (s !== "finished") m("ccr_turn_handoff_files_by_name", s);
  else if (T === C) p("ccr_turn_handoff_files_by_name", "all_skipped_by_rule");
  else if (I + T === C) g("ccr_turn_handoff_files_by_name");
  else if (I > 0) p("ccr_turn_handoff_files_by_name", "some_files_absent");
  else m("ccr_turn_handoff_files_by_name", "all_files_absent");
}
async function q(e, l, o, d, r) {
  let t = Zre(), [s, f] = await Promise.all([pe(), t].map((n) => U(n).catch(() => {
    return;
  })));
  if (!S_() || !AU(i.CLAUDE_CODE_REMOTE_SESSION_ID, i.CLAUDE_CODE_ENVIRONMENT_KIND) || f === void 0 || s !== f) return { ...N, outcome: "not_applicable" };
  let b = performance.now(), h = await eyt(o), w = Math.round(performance.now() - b);
  await sat(t, MU), await RAn();
  let C = l.messages.at(-1), F = C?.type === "assistant" && Array.isArray(C.message.content) ? C.message.content.flatMap((n) => n.type === "tool_use" && l.toolUseIDs.includes(n.id) && typeof n.input === "object" && n.input !== null ? Object.values(n.input).flatMap((_) => typeof _ === "string" ? [_, _.replaceAll("\\", "")] : []) : []) : [], I = new Set(e.filter(({ name: n }) => n !== "" && F.some((_) => _.includes(n)))), T = /* @__PURE__ */ new Map();
  for (let { name: n, fileUuid: _ } of e) T.set(n, (T.get(n) ?? /* @__PURE__ */ new Set()).add(_.toLowerCase()));
  let y = {}, E = /* @__PURE__ */ new Set(), O = 0, M = 0, L = 0, x, B = false, D = performance.now() + d;
  for (let n of e.toSorted((_, u) => Number(I.has(u)) - Number(I.has(_)))) {
    if (o.aborted) {
      B = true;
      break;
    }
    let _ = hur(n.name), u;
    if (_ !== void 0) u = `refused_${_}`;
    else if (T.get(n.name)?.size !== 1) u = "repeated_name";
    else if (E.has(n.fileUuid.toLowerCase())) u = "present_under_another_name";
    else if (performance.now() > D) u = "over_time_budget";
    else try {
      let P = await K(t, n, r - O);
      u = P.outcome, O += P.bytes;
    } catch (P) {
      x = vr(P) ?? S("unknown"), u = "copy_failed";
    }
    if (y[u] = (y[u] ?? 0) + 1, u === "placed" || u === "already_present") E.add(n.fileUuid.toLowerCase());
    if (I.has(n) && u === "placed") M++;
    else if (I.has(n) && u === "already_present") L++;
  }
  if ((y.placed ?? 0) > 0) await AAn();
  return { outcome: B ? "aborted" : "finished", filesWait: h, filesWaitMs: w, copiedBytes: O, namedInCall: I.size, namedInCallPlaced: M, namedInCallAlreadyPresent: L, counts: y, ...x !== void 0 && { lastErrorCode: x } };
}
export {
  Nvi,
  Sur,
  TAn,
  _ur,
  hur,
  yur
};
