// linux/fs/hipaa-history-retention-prune.js — Claude Code 2.1.310（linux）模块 chunk-wapyem7a.js
import { q, J } from "../context/not-admin-owned.js";
import { b, c } from "../agents/third-party.js";
import { d, G, Vt, J_ } from "../telemetry/anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { te, Vo, ie, t } from "./gitlab-runner-authentication-token.js";
import { Le, up, Oit } from "../models/claude-3-5-sonnet.js";
import { Ze } from "../shared/chunk-d2c47492.js";
import { YAt, l } from "../artifacts/cowritten-artifact-html.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { xM, Slr, ree } from "./utf-8.8f8e.js";
import { XS, Wfe, z4t, bkn, IZo } from "../context/utf-8.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Fd, QXn, ZXn, t0, u7, L2e, J1, Det, uJn, T3s, Q1, N2e, A3s, n0, kWt } from "../plugins/entry-refused.js";
import { Gui, _r, JZ, We, Vui } from "../plugins/chunk-0a4c51cf.js";
import { eAe, _Ur, Oze, C3n, RUr, p1t, m1t, Jqs, Qqs, k$o, PUr } from "../shell/sandbox.js";
import { Ap, rkn, okn, jd } from "./tempdir-owner-mismatch.js";
import { DOo, sQe, Wa } from "../telemetry/bg-roster-parse-failed.js";
import { AI, W9, mvn, t$e, RTt } from "../shell/invalid-type.js";
import { JE } from "./chunk-b6c2193e.js";
import { Qt } from "../settings/workflow-launch-exec.js";
import { lYo, w0, k, Z0e, ba } from "../settings/global-config-and-gates.js";
import { w4t, $ar, Xci, Jci, R7o, x7o, Qci, cxe } from "../git/utf-8.js";
import { Hkn } from "../remote/local-agent.js";
import { vl, zg } from "./chunk-475c6783.js";
import { pe, pr, w9o, kb, hM, Uqe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Ks } from "../shared/chunk-f98598c3.js";
import { X$n } from "./job-sweep-drafts.js";
import { WGo } from "../context/account-memory-text-not-identified.js";
import { Rye, ice, Ra } from "../context/org-memory-writes-setting-changed.js";
import { cvo } from "../shared/chunk-b576bb30.js";
import { J$n, TAs } from "../context/service-account-impersonation-url.js";
import { mdn } from "../hooks/plugin-function-hooks-switch-followed.js";
import { hK, Jme, j1e, tLt, HC, vAo, EAo, t$t } from "../core/conversation-engine.js";
import { Np } from "../agents/in-process-teammate.9720.js";
import { PWr } from "../context/tool-result-clearing-after-idle-server-report.js";
import { Ie } from "../plugins/chunk-c198f87f.js";
import { Hpn } from "../artifacts/utf-8.js";
import { w8n, v8n, E8n, k8n } from "../remote/bridge-outcome-branch-dropped.js";
import { Une, XOo, gQe, JFt, xMo, z1s, Q1s } from "../context/team-memory-sync.js";
import { oye } from "./file-upload.js";
import { EUs } from "../settings/settings-change-staged.js";
import { x9n } from "../telemetry/chunk-f6ecba11.js";
import { YZt } from "./send-file-received.js";
import { zve } from "../settings/chunk-7fc531c8.js";
import { kAs } from "./chunk-b64f6574.js";
import { hde } from "./chunk-81d6ccfe.js";
import { Xa } from "./daemon-worker.js";
import { o, v, u } from "../vendor/zod/string-format.js";
import { vt } from "../telemetry/chunk-a27d4004.js";
import { z } from "../shared/chunk-be29de51.js";
import * as x from "fs/promises";
import { homedir as ke, tmpdir as $e } from "os";
import { basename as V, dirname as Re, join as h } from "path";
import { join as Ae } from "path";
var de = "mcp-skill-archives", Me = "meta.json";
var xe = p(() => u({ uri: o().optional(), cacheKey: o(), fetchedAt: v() }));
function Ne(e) {
  return hde(Ae(e, Me), () => xe().nullable(), { defaultValue: null, ensureDir: true });
}
var ue = 64, je = 16, $r = ue + 2 + ue + 2 + je;
async function me(e) {
  try {
    return await Ne(e).read();
  } catch {
    return null;
  }
}
import { join as he } from "path";
var Be = "image-cache";
async function we() {
  let e = ie(), r = he(Le(), Be), s = q();
  try {
    let n;
    try {
      n = await e.readdir(r);
    } catch {
      return;
    }
    for (let f of n) {
      if (f.name === s) continue;
      let i = he(r, f.name);
      try {
        await e.rm(i, { recursive: true, force: true }), t(`Cleaned up old image cache: ${i}`);
      } catch {
      }
    }
    try {
      if ((await e.lstat(r)).isDirectory()) await e.rmdir(r);
    } catch {
    }
  } catch {
  }
}
var Qr = p(() => u({ key: o(), integrity: o().nullable(), time: v() }));
async function re(e = mdn) {
  let r = Ie(), s = { end: () => {
  } }, n = new AbortController();
  if (await Promise.race([Promise.resolve(r.hooksLoadAtStartup).catch(() => {
  }).then(() => r.hookRegistrationInFlight?.catch(() => {
  })).then(async () => {
    while (r.hookRegistrationOwed && !n.signal.aborted) await new Promise((w) => {
      s.end = r.hookRegistrationEnded.subscribe(w);
    }), s.end();
    if (n.signal.aborted) return false;
    return await t$t("a retention sweep starts"), true;
  }), X(e, n.signal).then(() => false)]).finally(() => n.abort())) return r.hooksUnknownCause === void 0 ? "asked" : "load_failed";
  s.end();
  let m = r.hookRegistrationInFlight !== void 0 ? "load_running" : "unanswered", g = r.hookRegistrationOwed ? "load_owed" : m;
  return t(`Retention cleanup: the settings.read hooks were not asked within ${e} ms (${g}); the sweep begins on the merge as last held.`), g;
}
var He = 0, Ue = ["ccr-tip.json", "custom-title.json", "precompact.json", "sent-prefix.json", w8n];
function ye(e) {
  let r = JZ(e);
  return _r(e) && r.length === 1 && r[0] === e.toLowerCase() && Qci(e);
}
function Ye(e) {
  return Ue.some((r) => e === r || xM(e, r)) || e.startsWith(v8n) && (e.endsWith(".json") || e.includes(".json.tmp.")) || e.startsWith(E8n) && e.endsWith(".md");
}
async function Y$n(e) {
  if (J()) return "diskless";
  if (!Qt("userSettings") && pr()?.cleanupPeriodDays === void 0) return t("Skipping retention cleanup: userSettings source is disabled (--setting-sources) and no enabled source provides cleanupPeriodDays."), "user_source_disabled";
  if (pe("policySettings")?.cleanupPeriodDays !== void 0) return null;
  if (zve().errors.filter((s) => !s.mcpErrorMetadata && s.severity !== "warning").length > 0) for (let s of RTt) {
    let n = await Uqe(s, e, s === "desktopSessionCleanupPeriodDays" ? { presenceSources: ["userSettings", "flagSettings"] } : void 0);
    if (n === "unknowable") return t(`Skipping cleanup: a settings file could not be read or parsed, so ${s} may be set to a value that cannot be seen. Fix the settings file (see /doctor) to re-enable cleanup.`), "settings_unknowable";
    if (n === "present") return t(`Skipping cleanup: settings have validation errors but ${s} was explicitly set. Fix settings errors to enable cleanup.`), "settings_invalid_key_set";
  }
  if (W9() && mvn(AI() === true)) return t("Skipping retention cleanup: this session reads no stored server-managed settings and holds none of its own (its request failed, has not finished, or returned nothing that could be applied), so cleanupPeriodDays may be set to a value that cannot be seen. A later process that is not paused for this reason runs the cleanup."), "remote_settings_unknowable";
  return null;
}
async function Rho(e, r) {
  return await re(r), await Y$n(e) === null;
}
function _e(e) {
  let r = new Date(Date.now() - e * 24 * 60 * 60 * 1e3);
  return Number.isNaN(r.getTime()) ? null : r;
}
function kS(e) {
  let s = (pr() || {}).cleanupPeriodDays ?? m1t;
  if (s === 0) return null;
  if (e !== void 0 && e < s) s = e;
  return _e(s);
}
var Z = ".desktop-released.json", Ke = 4096;
function ne(e) {
  return e.slice(0, -6) + Z;
}
var ze = p(() => u({ reason: o().optional() }));
async function ge(e, r, s) {
  let n = await r.readFileFdGated(e, Ke);
  if (n === null) return "none";
  let f;
  try {
    let i = ze().safeParse(te(n.content));
    f = i.success ? i.data.reason : void 0;
  } catch {
    return "none";
  }
  if (f === "delete") return "release-now";
  if (f === "archive") return n.stats.mtime < s ? "release-now" : "grace";
  return "none";
}
function Ge(e) {
  return /^[0-9A-Za-z_-]{1,64}$/.test(e);
}
function Xe() {
  return ae("desktopSessionCleanupPeriodDays", He);
}
function ae(e, r) {
  let s = hM(e)[0] ?? r;
  if (s === 0) return null;
  return _e(s);
}
function Je() {
  if (pe("policySettings")?.cleanupPeriodDays !== void 0) return true;
  if (w9o()) return true;
  return kb().some((e) => e.file !== t$e && (RTt.some((r) => r === e.path) || e.severity !== "warning"));
}
function vAs() {
  return Je() || Ks("hipaa") || Ks("zdr");
}
function E() {
  return { messages: 0, errors: 0, filesRetainedFresh: 0, filesPastCutoff: 0 };
}
function N(e, r) {
  return { messages: e.messages + r.messages, errors: e.errors + r.errors, filesRetainedFresh: e.filesRetainedFresh + r.filesRetainedFresh, filesPastCutoff: e.filesPastCutoff + r.filesPastCutoff };
}
function qe(e) {
  let r = Ze(e, ".").replace(/T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z/, "T$1:$2:$3.$4Z");
  return new Date(r);
}
function yme(e) {
  return Vt(e) || J_(e);
}
async function Se(e, r, s) {
  let n = E();
  try {
    let f = await ie().readdir(e);
    for (let i of f) try {
      if (qe(i.name) < r) if (await ie().unlink(h(e, i.name)), s) n.messages++;
      else n.errors++;
    } catch (m) {
      t(`Failed to clean up file ${i.name} in ${e}: ${m}`, { level: "error" });
    }
  } catch (f) {
    if (G(f)) ;
    else if (yme(f)) t(`cleanup readdir ${e} failed: ${f.code}`, { level: "error" });
    else l(f);
  }
  return n;
}
async function Ve() {
  let e = ie(), r = kS();
  if (r === null) return E();
  let s = YAt.errors(), n = YAt.baseLogs(), f = await Se(s, r, false);
  try {
    let i;
    try {
      i = await e.readdir(n);
    } catch {
      return f;
    }
    let m = i.filter((g) => g.isDirectory() && g.name.startsWith("mcp-logs-")).map((g) => h(n, g.name));
    for (let g of m) f = N(f, await Se(g, r, true)), await T(g, e);
  } catch (i) {
    if (G(i)) ;
    else if (yme(i)) t(`cleanup mcp-logs scan failed: ${i.code}`, { level: "error" });
    else l(i);
  }
  return f;
}
async function M(e, r, s, n, f = r, i) {
  let m;
  try {
    m = await s.stat(e);
  } catch (g) {
    if (G(g)) return false;
    throw g;
  }
  if (!(m.mtime < r)) return n.filesRetainedFresh++, false;
  if (i !== void 0 && await i(e, m)) return false;
  try {
    await s.unlink(e);
  } catch (g) {
    if (G(g)) return false;
    if (f !== null && m.mtime < f) n.filesPastCutoff++;
    throw g;
  }
  return true;
}
async function T(e, r) {
  if (!await U(e, r)) return;
  try {
    await r.rmdir(e);
  } catch {
  }
}
var se = [Xci, Jci];
async function Qe(e, r, s, n) {
  try {
    for (let R of se) await Pe(h(e, R), r, s, n);
    let f = false;
    try {
      let { sweepCheckoutSessionTrash: R } = await import("./sweep-checkout-session-trash.js"), S = await R(e, r.getTime());
      n.messages += S.removed, n.errors += S.errors, f = S.newestKeptMs !== null;
    } catch {
      n.errors++, f = true;
    }
    let i = (await s.readdir(e)).filter((R) => !se.includes(R.name)), m = null;
    for (let R of i) {
      let S = h(e, R.name), y = await oe(R, S, s) === "directory" ? await K(S, s, { requireCompleteWalk: true }) : (await s.lstat(S)).mtimeMs;
      if (y !== null) m = Math.max(m ?? -1 / 0, y);
    }
    if (!((m ?? await Ee(e, s)) < r.getTime())) return;
    let w = (await Promise.all(se.map((R) => s.lstat(h(e, R)).then((S) => S.isDirectory(), (S) => {
      if (G(S)) return false;
      throw S;
    })))).includes(true), D = i.toSorted((R, S) => Number(R.name === R7o) - Number(S.name === R7o));
    if (w || f) {
      let R = false;
      for (let S of D) {
        if (f && S.name === $ar) {
          R = await tt(h(e, S.name), s) || R;
          continue;
        }
        await s.rm(h(e, S.name), { recursive: true, force: true }), R = true;
      }
      if (R) n.messages++;
      return;
    }
    for (let R of D.slice(0, -1)) await s.rm(h(e, R.name), { recursive: true, force: true });
    await s.rm(e, { recursive: true, force: true }), n.messages++;
  } catch (f) {
    if (!G(f)) n.errors++;
  }
}
async function Pe(e, r, s, n) {
  if (!await U(e, s)) return;
  let f = await s.readdir(e).catch(() => []);
  for (let i of f) {
    let m = await oe(i, h(e, i.name), s).catch((w) => {
      if (!G(w)) n.errors++;
      return "other";
    });
    if (m === "file") {
      try {
        if (await M(h(e, i.name), r, s, n)) n.messages++;
      } catch {
        n.errors++;
      }
      continue;
    }
    if (m !== "directory") continue;
    let g = h(e, i.name);
    try {
      if ((await K(g, s, { requireCompleteWalk: true }) ?? await Ee(g, s)) < r.getTime()) await s.rm(g, { recursive: true, force: true }), n.messages++;
    } catch (w) {
      if (!G(w)) n.errors++;
    }
  }
  await T(e, s);
}
async function oe(e, r, s) {
  if (e.isDirectory()) return "directory";
  if (e.isFile()) return "file";
  if (e.isSymbolicLink() || e.isFIFO() || e.isSocket() || e.isBlockDevice() || e.isCharacterDevice()) return "other";
  let n = await s.lstat(r);
  return n.isDirectory() ? "directory" : n.isFile() ? "file" : "other";
}
async function Ee(e, r) {
  return (await r.lstat(e)).mtimeMs;
}
async function et(e) {
  let r = kS(), s = E();
  if (r === null) return s;
  let n = Np(), f = ie();
  for (let i of await f.readdir(n).catch(() => [])) {
    let m = h(n, i.name), g = h(m, w4t);
    if (i.isDirectory() && await U(g, f)) await Qe(g, r, f, s), await T(m, f);
  }
  return s;
}
async function tt(e, r) {
  let s = e, n = false;
  for (let f of ["objects", "info", "alternates"]) {
    if (!(await r.lstat(s)).isDirectory()) return await r.rm(s, { recursive: true, force: true }), true;
    for (let i of await r.readdir(s)) if (i.name !== f) await r.rm(h(s, i.name), { recursive: true, force: true }), n = true;
    s = h(s, f);
  }
  return n;
}
async function U(e, r) {
  try {
    return (await r.lstat(e)).isDirectory();
  } catch {
    return false;
  }
}
async function Q(e, r, s, n, f = {}) {
  let { entryMatcher: i } = f, m = await s.readdir(e).catch((g) => {
    if (f.countEnumerationFailures === true && !G(g)) n.errors++;
    return [];
  });
  for (let g of m) {
    let w = h(e, g.name);
    if (g.isDirectory()) await Q(w, r, s, n, f);
    else if (i !== void 0 && !i(g.name)) ;
    else if (g.isFile()) try {
      if (await M(w, r, s, n)) n.messages++;
    } catch {
      n.errors++;
    }
    else try {
      if ((await s.lstat(w)).mtime < r) await s.unlink(w), n.messages++;
    } catch {
      n.errors++;
    }
  }
  await T(e, s);
}
async function K(e, r, { requireCompleteWalk: s = false } = {}) {
  let n = -1 / 0, f = await r.readdir(e).catch((i) => {
    if (s && !G(i)) throw i;
    return [];
  });
  for (let i of f) {
    let m = h(e, i.name), g = s ? await oe(i, m, r).catch((w) => {
      if (G(w)) return "other";
      throw w;
    }) : i.isDirectory() ? "directory" : i.isFile() ? "file" : "other";
    if (g === "directory") {
      let w = await K(m, r, { requireCompleteWalk: s });
      if (w !== null) n = Math.max(n, w);
    } else if (g === "file") try {
      let { mtimeMs: w } = await r.stat(m);
      n = Math.max(n, w);
    } catch (w) {
      if (s && !G(w)) throw w;
    }
  }
  return n === -1 / 0 ? null : n;
}
async function rt() {
  let e = kS(), r = { ...E(), transcripts: 0, transcriptsExemptedDesktop: 0 };
  if (e === null) return r;
  let s = Np(), n = ie(), f;
  try {
    f = await n.readdir(s);
  } catch {
    return r;
  }
  let i;
  try {
    if (i = jd(), !(await n.lstat(i)).isDirectory()) i = null;
  } catch {
    i = null;
  }
  let m = vAs(), g = Xe(), w = null, D = m ? void 0 : async (R, S) => {
    if (Ks("hipaa") || Ks("zdr")) return false;
    if (g !== null && S.mtime < g) return false;
    let y = await ge(ne(R), n, e);
    if (y === "release-now") return false;
    if (y === "grace") return r.transcriptsExemptedDesktop++, true;
    if (S.size === 0) {
      if (!await n.stat(R.slice(0, -6)).then((I) => I.isDirectory(), () => false)) return r.transcriptsExemptedDesktop++, true;
    }
    w ??= Buffer.allocUnsafe(XS);
    let { head: P, tail: O } = await bkn(R, S.size, w);
    if (P === "" && S.size > 0) throw await n.stat(R), Error("transient read failure while classifying a transcript for the desktop retention exemption");
    let C = S.size > XS ? IZo(O) : O, _ = Wfe(P, "entrypoint"), A = z4t(C, "entrypoint");
    if (!(_ !== void 0 && Hkn(_) || A !== void 0 && Hkn(A))) return false;
    let H = V(R).startsWith("agent-") ? Wfe(P, "sessionId") ?? z4t(C, "sessionId") : void 0;
    if (H !== void 0 && Ge(H)) {
      let B = h(Re(R), `${H}${Z}`);
      if (B !== ne(R)) {
        if (await ge(B, n, e) === "release-now") return false;
      }
    }
    return r.transcriptsExemptedDesktop++, true;
  };
  for (let R of f) {
    if (!R.isDirectory()) continue;
    let S = h(s, R.name), y;
    try {
      y = await n.readdir(S);
    } catch {
      r.errors++;
      continue;
    }
    y.sort((_, A) => Number(A.isDirectory()) - Number(_.isDirectory()));
    let P = [], O = null, C = new Set(y.filter((_) => _.isFile() && _.name.endsWith(".jsonl")).map((_) => _.name.slice(0, -6)));
    for (let _ of y) {
      if (O === null && !_.isDirectory()) O = r.errors;
      if (_.isFile()) {
        if (_.name.endsWith(Z) && C.has(_.name.slice(0, -Z.length))) continue;
        if (!_.name.endsWith(".jsonl") && !_.name.endsWith(".cast") && !_.name.endsWith(".ccr-tip.json") && !_.name.endsWith(".precompact.json") && !_.name.endsWith(Z) && !_.name.includes(".desktop-released.json.tmp") && !_.name.endsWith(".dir-sync.json") && !_.name.endsWith(".dir-sync-empty.json") && !_.name.endsWith(".cloud-worktrees.json") && !_.name.includes(".ccr-tip.json.tmp.") && !_.name.includes(".precompact.json.tmp.") && !_.name.includes(".dir-sync.json.tmp.") && !_.name.includes(".dir-sync-empty.json.tmp.") && !_.name.includes(".cloud-worktrees.json.tmp.") && !_.name.includes(".jsonl.compact.tmp.") && !_.name.includes(".jsonl.superseded-")) continue;
        let A = h(S, _.name);
        try {
          if (await M(A, e, n, r, void 0, _.name.endsWith(".jsonl") ? D : void 0)) {
            if (r.messages++, _.name.endsWith(".jsonl")) {
              r.transcripts++;
              let L = _.name.slice(0, -6);
              if (ye(L)) {
                if (await n.unlink(h(S, `${L}.ccr-tip.json`)).catch(() => {
                }), await n.unlink(h(S, `${L}.precompact.json`)).catch(() => {
                }), P.push(ne(A)), await n.rm(h(S, L), { recursive: true, force: true }).catch(() => {
                  r.errors++;
                }), i !== null) {
                  let H = h(i, R.name), B = await n.lstat(H).catch(() => null);
                  if (B?.isDirectory()) {
                    if (await n.rm(h(H, L), { recursive: true, force: true }).catch(() => {
                      r.errors++;
                    }), B.mtime < e) await T(H, n);
                  }
                }
              }
            }
          }
        } catch (L) {
          if (!G(L)) r.errors++;
        }
      } else if (_.isDirectory()) {
        let A = h(S, _.name);
        if (_.name === "bagel") {
          let I = await K(A, n);
          if (I !== null && I < e.getTime()) try {
            await n.rm(A, { recursive: true, force: true }), r.messages++;
          } catch {
            r.errors++;
          }
          continue;
        }
        if (_.name === w4t) continue;
        if (!ye(_.name)) {
          let I = await n.lstat(A).catch(() => null);
          if (I !== null && I.mtime < e) await T(A, n);
          continue;
        }
        let L = h(A, cxe);
        if (await U(L, n)) {
          let I = await n.readdir(L).catch(() => []);
          for (let W of I) if (W.isFile()) try {
            if (await M(h(L, W.name), e, n, r)) r.messages++;
          } catch {
            r.errors++;
          }
          else if (W.isDirectory()) {
            let ee = h(L, W.name), ce;
            try {
              ce = await n.readdir(ee);
            } catch {
              continue;
            }
            for (let le of ce) {
              if (!le.isFile()) continue;
              try {
                if (await M(h(ee, le.name), e, n, r)) r.messages++;
              } catch {
                r.errors++;
              }
            }
            await T(ee, n);
          }
          await T(L, n);
        }
        let H = await n.readdir(A).catch(() => []);
        for (let I of H) {
          if (!I.isFile() || !(Ye(I.name) || x7o(I.name) !== void 0)) continue;
          if (I.name === "custom-title.json" && C.has(_.name)) continue;
          try {
            if (await M(h(A, I.name), e, n, r)) r.messages++;
          } catch {
            r.errors++;
          }
        }
        let B = h(A, "mcp-tasks");
        if (await U(B, n)) {
          for (let I of await n.readdir(B).catch(() => [])) {
            let W = I.name.endsWith(".json") || I.name.includes(".json.tmp.");
            if (!I.isFile() || !W) continue;
            try {
              if (await M(h(B, I.name), e, n, r)) r.messages++;
            } catch {
              r.errors++;
            }
          }
          await T(B, n);
        }
        if (!C.has(_.name)) for (let I of ["subagents", "workflows", "remote-agents"]) {
          let W = h(A, I);
          if (await U(W, n)) await Q(W, e, n, r);
        }
        await T(A, n);
      }
    }
    if (O !== null && r.errors > O) P.length = 0;
    for (let _ of P) await n.unlink(_).catch(() => {
    });
    await T(S, n);
  }
  return r;
}
async function F(e, r, s = true, n, f) {
  let i = f === void 0 ? kS(n) : f, m = E();
  if (i === null) return m;
  let g = f !== void 0 || n === void 0 ? i : kS(), w = typeof r === "string" ? (S) => S.endsWith(r) : r, D = ie(), R;
  try {
    R = await D.readdir(e);
  } catch {
    return m;
  }
  for (let S of R) {
    if (!S.isFile() || !w(S.name)) continue;
    try {
      if (await M(h(e, S.name), i, D, m, g)) m.messages++;
    } catch {
      m.errors++;
    }
  }
  if (s) await T(e, D);
  return m;
}
async function nt() {
  let e = E(), r = kS();
  if (r === null) return e;
  let s = h(Le(), "hfi-auth.json");
  try {
    if (await M(s, r, ie(), e)) e.messages++;
  } catch (n) {
    if (!G(n)) t(`Failed to clean up HFI auth file: ${n}`, { level: "error" }), e.errors++;
  }
  return e;
}
async function st() {
  let e = E(), r = kS();
  if (r === null) return e;
  let s = h(Le(), "cache", "team-discovery.json");
  try {
    if (await M(s, r, ie(), e)) e.messages++;
  } catch (n) {
    if (!G(n)) if (e.errors++, yme(n)) t(`cleanup team-discovery-cache failed: ${n.code}`, { level: "error" });
    else l(n);
  }
  return e;
}
async function it() {
  let e = E(), r = kS();
  if (r === null) return e;
  for (let s of [J$n(), TAs()]) try {
    if (await M(s, r, ie(), e)) e.messages++;
  } catch (n) {
    if (!G(n)) if (e.errors++, yme(n)) t(`cleanup model-access memory failed: ${n.code}`, { level: "error" });
    else l(n);
  }
  return e;
}
async function at() {
  return F(w0(), (e) => e !== lYo && e !== cvo && (e.endsWith(".json") || e.includes(".json.tmp.")));
}
async function ot() {
  let e = E(), r = kS();
  if (r === null) return e;
  let s = h(Le(), "mcp-needs-auth-cache.json");
  try {
    if (await M(s, r, ie(), e)) e.messages++;
  } catch (n) {
    if (!G(n)) if (e.errors++, yme(n)) t(`cleanup mcp-auth-cache failed: ${n.code}`, { level: "error" });
    else l(n);
  }
  return e;
}
async function ct() {
  let e = E(), r = kS();
  if (r === null) return e;
  let s = h(Le(), "state", "device-unbound-creates.json");
  try {
    if (await M(s, r, ie(), e)) e.messages++;
  } catch (n) {
    if (!G(n)) if (e.errors++, yme(n)) t(`cleanup device-unbound-creates failed: ${n.code}`, { level: "error" });
    else l(n);
  }
  return e;
}
async function lt() {
  let e = E(), r = kS();
  if (r === null) return e;
  let s = h(Le(), "state", "mcp-discover-verdicts.json");
  try {
    if (await M(s, r, ie(), e)) e.messages++;
  } catch (n) {
    if (!G(n)) if (e.errors++, yme(n)) t(`cleanup mcp-discover-verdicts failed: ${n.code}`, { level: "error" });
    else l(n);
  }
  return e;
}
async function ut() {
  let e = E(), r = kS(), s = up();
  if (r === null || s === null) return e;
  let n = h(s, "state", "device-mcp-consent-not-now.json");
  try {
    if (await M(n, r, ie(), e)) e.messages++;
  } catch (f) {
    if (!G(f)) if (e.errors++, yme(f)) t(`cleanup device-mcp-not-now failed: ${f.code}`, { level: "error" });
    else l(f);
  }
  return e;
}
async function ft(e = h(ke(), ".claude", "state", "served-calls")) {
  return F(e, (r) => r.endsWith(".jsonl") || r.includes(".jsonl.tmp."), true, void 0, ae("cleanupPeriodDays", m1t));
}
async function dt(e = h(ke(), ".claude", "state", "unattended-serving-runs")) {
  return F(e, (r) => {
    let s = /^([1-9][0-9]{0,9})\.json$/.exec(r)?.[1];
    return s === void 0 ? r.includes(".json.tmp.") : !Xa(Number(s));
  }, true, void 0, ae("cleanupPeriodDays", m1t));
}
async function pt(e) {
  let r = E(), s = kS();
  if (s === null) return r;
  try {
    r.messages += await EUs(s, e);
  } catch (n) {
    if (r.errors++, yme(n)) t(`cleanup settings-review store failed: ${n.code}`, { level: "error" });
    else l(n);
  }
  return r;
}
function mt(e) {
  if (!e) return false;
  try {
    let r = Vo(e);
    if (typeof r !== "object" || r === null) return true;
    if (!("timestamp" in r)) return true;
    let { timestamp: s } = r;
    return typeof s !== "number" || !Number.isFinite(s);
  } catch {
    return true;
  }
}
function ht(e, r) {
  if (!e) return false;
  try {
    let s = Vo(e);
    if (typeof s !== "object" || s === null || !("timestamp" in s)) return false;
    let { timestamp: n } = s;
    return typeof n === "number" && Number.isFinite(n) && n < r;
  } catch {
    return false;
  }
}
async function wt(e, r) {
  let s;
  try {
    s = await x.readdir(e);
  } catch {
    return;
  }
  let n = r.getTime();
  await Promise.all(s.filter((f) => xM(f, "history.jsonl") || Une(f)).map(async (f) => {
    let i = h(e, f);
    try {
      let m = await x.lstat(i);
      if (m.isFile() && m.mtimeMs < n) await x.unlink(i);
    } catch {
    }
  }));
}
async function yt(e) {
  let r = h(Le(), "history.jsonl"), s = e.getTime(), n = (w) => ht(w, s) || mt(w), f, i;
  try {
    if (f = await x.lstat(r), !f.isFile()) return t("History retention prune skipped: history.jsonl is not a regular file", { level: "error" }), { entriesPruned: 0, errors: 1 };
    i = await xMo(r, n, { start: 0, end: f.size, tail: "defer", expect: { ino: f.ino, birthtimeMs: f.birthtimeMs } });
  } catch (w) {
    if (G(w)) return { entriesPruned: 0, errors: 0 };
    if (w instanceof JFt) return t("History retention prune deferred: history.jsonl changed under the scan"), { entriesPruned: 0, errors: 0 };
    return t(`History retention prune failed: ${w}`, { level: "error" }), { entriesPruned: 0, errors: 1 };
  }
  if (i.dropped === 0 && i.consumed === f.size) return { entriesPruned: 0, errors: 0 };
  let m, g = false;
  try {
    m = await vl(r, { ...gQe, onCompromised: (w) => {
      g = true, t(`History retention lock compromised: ${w}`, { level: "error" });
    } });
  } catch (w) {
    if (G(w)) return { entriesPruned: 0, errors: 0 };
    return t(`History retention prune failed: ${w}`, { level: "error" }), { entriesPruned: 0, errors: 1 };
  }
  try {
    let w = await x.lstat(r);
    if (!w.isFile() || w.size < i.consumed || f.ino !== 0 && w.ino !== f.ino || w.birthtimeMs !== f.birthtimeMs) return t("History retention prune deferred: history.jsonl changed under the scan"), { entriesPruned: 0, errors: 0 };
    let D = await xMo(r, n, { start: i.consumed, end: w.size, tail: "judge", expect: { ino: w.ino, birthtimeMs: w.birthtimeMs }, verifiedHead: { bytes: i.consumed, digest: i.digest }, residueBytes: f.size - i.consumed }), R = i.dropped + D.dropped;
    if (g) throw Error("history lock compromised before the rewrite");
    if (R === 0 && D.terminated && !D.split) return { entriesPruned: 0, errors: 0 };
    let S = i.kept.concat(D.kept);
    return await ree(r, S.length ? `${S.join(`
`)}
` : "", { exactMode: w.mode & 511 }), { entriesPruned: R, errors: 0 };
  } catch (w) {
    if (w instanceof JFt) return t("History retention prune deferred: history.jsonl changed under the scan"), { entriesPruned: 0, errors: 0 };
    return t(`History retention prune failed: ${w}`, { level: "error" }), { entriesPruned: 0, errors: 1 };
  } finally {
    await zg(m, "history retention");
  }
}
async function gt() {
  let e = h(Le(), "mcp-discovery-cache"), r = await F(e, (i) => i.endsWith(".json") || i.includes(".json.tmp."), false), s = kS();
  if (s === null) return r;
  let n = ie(), f;
  try {
    f = await n.readdir(e);
  } catch {
    return r;
  }
  for (let i of f) {
    if (!i.isDirectory() || !i.name.endsWith(".json.lock")) continue;
    let m = h(e, i.name);
    try {
      if ((await n.stat(m)).mtime < s) await n.rmdir(m), r.messages++;
    } catch {
      r.errors++;
    }
  }
  return await T(e, n), r;
}
async function St(e) {
  if (J()) return E();
  let r = h(Le(), "plans");
  try {
    if (e !== void 0) return await F(r, (s) => s.endsWith(".md") || s.includes(".md.tmp."));
    return await F(r, ".md");
  } finally {
    Hpn();
  }
}
async function j(e, { exclude: r, skipIf: s, refuseRedirectedRoot: n = false, removeEmptyBaseDir: f = true, maxAgeDays: i, baseDir: m, storageV5: g } = {}) {
  let w = kS(i), D = E();
  if (w === null) return D;
  let R = ie(), S = Le(), y = m ?? h(S, e);
  if (n) {
    if (await hK(y, S, { event: "cleanup_sweep_root_refused", phase: "sweep", rootLabel: e }, { storageV5: g }) !== "real") return D;
  }
  let P;
  try {
    P = await R.readdir(y);
  } catch {
    return D;
  }
  for (let O of P) {
    if (!O.isDirectory() || r?.has(O.name)) continue;
    let C = h(y, O.name);
    try {
      if ((await R.stat(C)).mtime < w) {
        if (await s?.(C)) continue;
        await R.rm(C, { recursive: true, force: true }), D.messages++;
      }
    } catch {
      D.errors++;
    }
  }
  if (f) await T(y, R);
  return D;
}
function Dt() {
  return j("file-history");
}
function kt() {
  return j("session-env");
}
function Rt() {
  return j("tasks");
}
function _t() {
  return j("uploads");
}
function Pt() {
  let e = HC.get()?.folder, r = kS();
  return j("dev-mods", { exclude: /* @__PURE__ */ new Set([q(), ...e === void 0 ? [] : [V(e)]]), skipIf: (s) => be(s, r, Et), removeEmptyBaseDir: false });
}
var Et = 3, Ct = 2;
async function Ot() {
  let e = Oze(), r = await eAe(e).catch(() => null);
  if (!r) return E();
  return j(_Ur, { removeEmptyBaseDir: false, maxAgeDays: Ct, baseDir: e, skipIf: async (s) => !await C3n(s, r) });
}
async function bt() {
  try {
    return await Q1s();
  } catch (e) {
    if (yme(e)) t(`[cleanup] the sweep of seed-admin did not run: ${e.code}`, { level: "warn" });
    else l(e);
    return { removed: 0, errors: 1, held: 0, refused: "no" };
  }
}
async function Ft(e) {
  if (z() && e !== void 0) {
    let n = await It(e);
    if (n !== "unaddressed") return n;
  }
  let r = p1t(), s = await eAe(r).catch(() => null);
  if (!s) return E();
  return j(RUr, { removeEmptyBaseDir: false, maxAgeDays: k$o, baseDir: r, skipIf: async (n) => {
    let f = await eAe(r);
    return f?.ino !== s.ino || f.dev !== s.dev || await eAe(n) === null || await x.realpath(n) !== h(await x.realpath(Re(r)), RUr, V(n));
  } });
}
async function It(e) {
  let r = E(), s = Vui(), n = await e.scopeKind(s);
  if (!n.ok) return n.error.code === "InvalidArgument" ? "unaddressed" : r;
  if (n.value.kind !== "directory" || n.value.object === void 0 || n.value.owner === "other") return r;
  let f = kS(k$o);
  if (f === null) return r;
  let i = await e.deleteScope(s, { olderThanMs: Math.max(0, Date.now() - f.getTime()) });
  if (!i.ok) return r;
  return r.messages += i.value.deleted, r.errors += i.value.failed ?? 0, r;
}
function Tt() {
  return F(YZt(), "", false, x9n);
}
async function At(e) {
  return N(N(await j(uJn, { refuseRedirectedRoot: true, storageV5: e }), await j(T3s, { refuseRedirectedRoot: true, storageV5: e })), await Ce(J1, e));
}
async function Ce(e, r) {
  let s = E();
  if (kS() === null) return s;
  let n = Le(), f = h(n, e);
  if (await hK(f, n, { event: "cleanup_sweep_root_refused", phase: "sweep", rootLabel: e }, { storageV5: r }) !== "real") return s;
  let m;
  try {
    m = await ie().readdir(f);
  } catch {
    return s;
  }
  for (let g of m) {
    if (!g.isDirectory() || !L2e(g.name)) continue;
    s = N(s, await j(h(e, "*", u7), { baseDir: h(f, g.name, u7), refuseRedirectedRoot: true, storageV5: r }));
  }
  return s;
}
function Mt(e) {
  return j(Det, { refuseRedirectedRoot: true, storageV5: e });
}
async function ve(e, r, s, n) {
  let f = E(), i = kS();
  if (i === null) return f;
  let m = await n0().catch((P) => {
    l(P);
    return;
  });
  if (m === void 0) return f;
  let g = m ?? kWt(), w = Le(), D = h(w, e);
  if (await hK(D, w, { event: "cleanup_sweep_root_refused", phase: "sweep", rootLabel: e }, { storageV5: n }) !== "real") return f;
  let S = ie(), y;
  try {
    y = await S.readdir(D);
  } catch {
    return f;
  }
  for (let P of y) {
    if (!P.isDirectory() || !L2e(P.name) || P.name === g || await j1e(D, P.name) === "unmarked") continue;
    let O = h(D, P.name), C;
    try {
      C = (await S.lstat(h(O, t0)).catch(() => S.lstat(O))).mtime;
    } catch {
      continue;
    }
    if (C >= i) {
      f.filesRetainedFresh++;
      continue;
    }
    if (f.filesPastCutoff++, await Jme({ dir: O, trashRoot: h(w, r), configHome: w, failureEvent: s, storageV5: n })) await tLt(D, P.name).catch(() => {
    }), f.messages++;
    else f.errors++;
  }
  return f;
}
function xt(e) {
  return ve(Q1, N2e, "plugins_sync_trash_move_failed", e);
}
function Nt(e) {
  return ve(J1, Det, "skills_sync_trash_move_failed", e);
}
function jt(e) {
  return j(N2e, { refuseRedirectedRoot: true, storageV5: e });
}
async function Lt(e) {
  return N(await j(A3s, { refuseRedirectedRoot: true, storageV5: e }), await Ce(Q1, e));
}
async function Bt() {
  let e = h(Fd(), "store"), r = await F(e, (n) => n.endsWith(".json") || n.includes(".json.tmp."), false), s = kS();
  if (s !== null) await Pe(e, s, ie(), r);
  return r;
}
function $t() {
  return F(Fd(), (e) => QXn(e) || ZXn(e), false);
}
async function Ht() {
  let e = kS(), r = E();
  if (e === null) return r;
  let s = ie(), n = h(Le(), de), f;
  try {
    f = await s.readdir(n);
  } catch {
    return r;
  }
  for (let i of f) {
    if (!i.isDirectory()) continue;
    let m = h(n, i.name), g = (await me(m))?.cacheKey ?? null, w;
    try {
      w = await s.readdir(m);
    } catch {
      r.errors++;
      continue;
    }
    for (let D of w) {
      if (!D.isDirectory() || D.name === g) continue;
      let R = h(m, D.name);
      try {
        if ((await s.stat(R)).mtime < e) await s.rm(R, { recursive: true, force: true }), r.messages++;
      } catch {
        r.errors++;
      }
    }
    try {
      if ((await s.stat(m)).mtime < e) await s.rm(m, { recursive: true, force: true }), r.messages++;
    } catch {
      r.errors++;
    }
  }
  return await T(n, s), r;
}
async function Wt() {
  let e = h(Le(), "usage-data"), r = await F(h(e, "facets"), (s) => s.endsWith(".json") || s.includes(".json.tmp."));
  return r = N(r, await F(h(e, "session-meta"), (s) => s.endsWith(".json") || s.includes(".json.tmp."))), r = N(r, await F(e, (s) => s.endsWith(".html") || Gui(s), false)), await T(e, ie()), r;
}
async function Ut() {
  let e = kS(), r = E();
  if (e === null) return r;
  let s = ie(), n;
  try {
    n = jd();
  } catch {
    return r;
  }
  let f;
  try {
    f = await s.readdir(n);
  } catch {
    return r;
  }
  for (let i of f) {
    let m = i.name.startsWith("cc-transcript-") && i.name.endsWith(".txt"), g = i.name.startsWith(k8n) && i.name.endsWith(".md"), w = i.name.startsWith(PWr) && (i.name.endsWith(".json") || i.name.endsWith(".diff")), D = false;
    if (!i.isFile() || !m && !g && !w && true) continue;
    try {
      if (await M(h(n, i.name), e, s, r)) r.messages++;
    } catch {
      r.errors++;
    }
  }
  return r;
}
async function Yt() {
  let e = E(), r = kS(Qqs);
  if (r === null) return e;
  let s = ie(), n;
  try {
    if (n = jd(), !(await s.lstat(n)).isDirectory()) return e;
  } catch {
    return e;
  }
  let f = h(n, "speculation"), i;
  try {
    i = await s.lstat(f);
  } catch {
    return e;
  }
  if (!i.isDirectory()) return e;
  try {
    if ((await K(f, s, { requireCompleteWalk: true }) ?? i.mtimeMs) < r.getTime()) return await s.rm(f, { recursive: true, force: true }), e.messages++, e;
  } catch {
    e.errors++;
  }
  return await T(f, s), e;
}
async function Kt() {
  let e = h(Le(), "shares"), r = await j("shares");
  return r = N(r, await F(e, (s) => s.endsWith(".zip") || s.includes(".zip.tmp.") && Slr(s), false)), await T(e, ie()), r;
}
async function zt() {
  let e = h(Le(), "telemetry"), r = await F(e, ".json", false), s = kS();
  if (s === null) return r;
  let n = h(e, "runs"), f = ie();
  if (await U(e, f) && await U(n, f)) await Q(n, s, f, r, { entryMatcher: (i) => i.endsWith(".json") });
  return await T(e, ie()), r;
}
function Gt() {
  return F(h(Le(), "dump-prompts"), ".jsonl", true, Jqs);
}
function Xt() {
  return F(h(Le(), "shell-snapshots"), ".sh", false);
}
async function Jt() {
  let e = kS(), r = E();
  if (e === null) return r;
  let s = ie(), n = Oit();
  for (let f of await s.readdir(n).catch(() => [])) {
    if (!f.isDirectory()) continue;
    let i = h(n, f.name, "inboxes");
    if (await U(i, s)) {
      for (let m of await s.readdir(i).catch(() => [])) {
        if (!m.isFile() || !m.name.endsWith(".json")) continue;
        try {
          if (await M(h(i, m.name), e, s, r)) r.messages++;
        } catch {
          r.errors++;
        }
      }
      await T(i, s);
    }
    await T(h(n, f.name), s);
  }
  return r;
}
async function Zt(e, r = $e()) {
  let s = E(), n = ie(), f = process.getuid?.(), i;
  try {
    i = await n.readdir(r);
  } catch (m) {
    if (!G(m)) s.errors++;
    return s;
  }
  for (let m of i) {
    if (!m.name.startsWith("cc-daemon-")) continue;
    let g = m.name.slice(10);
    if (/^\d+$/.test(g) || f !== void 0 && g === String(f) || /^[0-9a-f]{16}$/.test(g)) continue;
    let w = h(r, m.name);
    try {
      let D = await eAe(w);
      if (D === null) continue;
      let R = await n.readdir(w);
      if (R.length !== 1 || R[0].name !== "stderr.log") continue;
      let S = h(w, "stderr.log"), y = await n.lstat(S);
      if (!y.isFile()) continue;
      if (!(y.mtime < e)) {
        s.filesRetainedFresh++;
        continue;
      }
      let P = await eAe(w);
      if (P === null || P.dev !== D.dev || P.ino !== D.ino) continue;
      try {
        await n.unlink(S);
      } catch (O) {
        if (G(O)) continue;
        throw s.filesPastCutoff++, O;
      }
      s.messages++, await T(w, n);
    } catch (D) {
      if (!G(D)) s.errors++;
    }
  }
  return s;
}
var Ns = new RegExp(`^${rkn}[A-Za-z0-9]{6}$`);
var qt = new RegExp(`^${okn}[A-Za-z0-9]{6}$`);
async function er(e = kS(), r = Ap()) {
  let s = E();
  if (e === null) return s;
  let n = ie(), f;
  try {
    f = await n.readdir(r);
  } catch (i) {
    if (!G(i)) s.errors++;
    return s;
  }
  for (let i of f) {
    if (!qt.test(i.name)) continue;
    let m = h(r, i.name);
    try {
      let g = await eAe(m);
      if (g === null) continue;
      if (!((await K(m, n, { requireCompleteWalk: true }) ?? g.mtimeMs) < e.getTime())) {
        s.filesRetainedFresh++;
        continue;
      }
      let D = await eAe(m);
      if (D === null || D.dev !== g.dev || D.ino !== g.ino) continue;
      await n.rm(m, { recursive: true, force: true }), s.messages++;
    } catch (g) {
      if (!G(g)) s.errors++;
    }
  }
  return s;
}
async function tr(e, r) {
  let s = Le(), n = await F(h(s, "jobs", "settled"), ".json");
  n = N(n, await F(h(s, "daemon", "dispatch", "rejected"), ".json")), n = N(n, await F(h(s, "daemon", "dispatch"), ".json", false)), n = N(n, await F(h(s, "daemon", "auth"), ".json"));
  try {
    let D = h(s, "daemon", "host-managed"), R = ie(), S = kS();
    if (S) for (let y of await R.readdir(D)) {
      if (!y.isFile()) continue;
      try {
        await R.lstat(h(s, "jobs", y.name));
      } catch (P) {
        if (!G(P)) {
          n.errors++;
          continue;
        }
        try {
          if (await M(h(D, y.name), S, R, n)) n.messages++;
        } catch (O) {
          if (!G(O)) n.errors++;
        }
      }
    }
  } catch (D) {
    if (!G(D)) n.errors++;
  }
  let f = vAs(), i = kS(), m = /* @__PURE__ */ new Set();
  if (!f) for (let D of await sQe(e)) m.add(D);
  let g = false, w = false;
  try {
    let D = h(s, "daemon", "roster.json"), R = await ie().lstat(D);
    if (!R.isFile() || R.size > 8388608) throw Error("not a regular file");
    let S = await ie().readFile(D, { encoding: "utf-8" }), y = te(S);
    if (y !== null && typeof y === "object" && "workers" in y) {
      let P = y.workers;
      if (P !== null && typeof P === "object") {
        g = true;
        for (let [O, C] of Object.entries(P)) if (C !== null && typeof C === "object" && "pid" in C && typeof C.pid === "number" && Xa(C.pid) && await JE(C.pid, "procStart" in C && typeof C.procStart === "string" ? C.procStart : void 0)) m.add(O), w = true;
      }
    }
  } catch {
  }
  if (n = N(n, await j("jobs", { exclude: m, skipIf: async (D) => {
    let R;
    try {
      R = await DOo(D, e);
    } catch (S) {
      throw l(S), t(`[cleanup] jobs/${V(D)}: job state read threw — keeping the folder (${d(S)})`, { level: "error" }), S;
    }
    if (!f && (R === null || !Wa(R))) return true;
    if (R?.worktreePath && Wa(R) && i) {
      let S = await EAo({ worktreePath: R.worktreePath, worktreeBranch: R.worktreeBranch, originCwd: R.originCwd, hookBased: R.worktreeHookBased, cutoff: i, ...{} }).catch((y) => (l(y), false));
    }
    return false;
  } })), i !== null) {
    n = N(n, await Zt(i));
    let D = ie();
    for (let S of [h(s, "daemon.log"), h(s, "daemon.log.1")]) try {
      if (await M(S, i, D, n)) n.messages++;
    } catch (y) {
      if (!G(y)) n.errors++;
    }
    let R = h(s, "daemon", "roster.json");
    try {
      if ((await D.lstat(R)).mtime < i && !w && (g || f)) await D.unlink(R), n.messages++;
    } catch (S) {
      if (!G(S)) n.errors++;
    }
    for (let S of await D.readdir(h(s, "daemon")).catch(() => [])) {
      if (!S.isFile() || !S.name.startsWith("roster.json.corrupt.")) continue;
      try {
        if (await M(h(s, "daemon", S.name), i, D, n)) n.messages++;
      } catch {
        n.errors++;
      }
    }
  }
  return await X$n(), n;
}
function rr() {
  return F(h(Le(), "backups"), "", false);
}
async function nr() {
  let e = kS(), r = E();
  if (e === null) return r;
  let s = ie(), n = h(Le(), "debug"), f;
  try {
    f = await s.readdir(n);
  } catch {
    return r;
  }
  for (let i of f) {
    if (i.name === "latest" || !i.isFile()) continue;
    try {
      if (await M(h(n, i.name), e, s, r)) r.messages++;
    } catch {
      r.errors++;
    }
  }
  return r;
}
async function sr() {
  return F(h(Le(), "feedback-bundles"), ".zip");
}
async function ir() {
  return F(h(Le(), "feedback", "drafts"), (e) => e.endsWith(".json") || e.includes(".json.tmp."), true, 30);
}
async function ar() {
  let e = h(Le(), "remote-control", "fork-seeds"), r = await F(e, (f) => f.endsWith(".json") || f.includes(".json.tmp."));
  if (kS() === null) return r;
  let s = /* @__PURE__ */ new Date(), n = ie();
  for (let f of await n.readdir(e).catch(() => [])) try {
    let i = h(e, f.name);
    if (f.isFile() && (await n.stat(i)).mtime > s) await x.lutimes(i, s, s);
  } catch {
    r.errors++;
  }
  return r;
}
async function or() {
  let e = await F(h(Le(), "traces"), ".json"), r = await F(h(Le(), "startup-perf"), ".txt"), s = await F(h(Le(), "startup-perf"), ".json");
  return N(N(e, r), s);
}
var cr = 864e5, Oe = XOo;
function lr(e) {
  if (e === void 0) return b("none");
  if (!Oe.has(e)) return b("other");
  return e === "ELOOP" ? b("ELOOP") : e === "EISDIR" ? b("EISDIR") : b("ENXIO");
}
function ur(e) {
  return e.code === "Failed" && e.telemetryCode !== void 0 && Oe.has(e.telemetryCode);
}
function fr(e) {
  if (e.ok) return "removed it";
  return ("telemetryCode" in e.error ? e.error.telemetryCode : void 0) === "EISDIR" ? "could not remove it (EISDIR): a directory at the marker path stays and the marker write will keep failing" : `could not remove it (${e.error.code})`;
}
async function xho(e) {
  let r = await e.statMeta(We.state("last-cleanup"));
  if (r.ok || r.error.code === "NotFound" || !ur(r.error)) return;
  a("tengu_cleanup_throttle_marker", { marker: b("last-cleanup"), verdict: b("not_regular_rerun"), code: c(r.error.code), errno: lr("telemetryCode" in r.error ? r.error.telemetryCode : void 0) });
  let s = await e.delete(We.state("last-cleanup"));
  t(`.last-cleanup: sentinel is not a regular file (${vt(r.error)}) — ${fr(s)}; rewriting`, { level: "warn" });
}
var dr = [".npm-cache-cleanup", ".version-cleanup", ".last-cleanup", ".deep-link-register-failed"];
async function Pho(e, r) {
  if (!r.claimStagingReap()) return;
  let s;
  try {
    s = await x.readdir(e);
  } catch {
    return;
  }
  let n = Date.now() - cr;
  await Promise.all(s.filter((f) => dr.some((i) => xM(f, i))).map(async (f) => {
    let i = h(e, f);
    try {
      let m = await x.lstat(i);
      if (m.isFile() && m.mtimeMs < n) await x.unlink(i);
    } catch {
    }
  }));
}
async function mr() {
  let e = kS(), r = E();
  if (e === null) return r;
  let s = ie();
  for (let n of PUr) {
    let f = h(Le(), n), i = await s.lstat(f).catch((w) => {
      if (!G(w)) r.errors++;
      return null;
    });
    if (i === null || !i.isDirectory()) continue;
    let m;
    try {
      m = await s.readdir(f);
    } catch {
      continue;
    }
    let g = false;
    for (let w of m) {
      let D = h(f, w.name);
      try {
        if (!((await s.stat(D)).mtime < e)) continue;
        let S = await s.lstat(f).catch(() => null);
        if (S === null || !S.isDirectory() || S.dev !== i.dev || S.ino !== i.ino) {
          g = true;
          break;
        }
        if (w.isDirectory()) await s.rm(D, { recursive: true, force: true });
        else await s.unlink(D);
        r.messages++;
      } catch {
        r.errors++;
      }
    }
    if (!g) await T(f, s);
  }
  return r;
}
async function hr() {
  let e = E(), r = kS();
  if (r === null) return e;
  let s = h(Z0e(), "projects"), n = ie(), f = await n.lstat(s).catch((m) => {
    if (!G(m)) e.errors++;
    return null;
  });
  if (f === null || !f.isDirectory()) return e;
  let i = await n.readdir(s).catch((m) => {
    if (!G(m)) e.errors++;
    return [];
  });
  for (let m of i) {
    if (!m.isDirectory()) continue;
    let g = h(s, m.name, "tiny_memory"), w = await n.lstat(g).catch((D) => {
      if (!G(D)) e.errors++;
      return null;
    });
    if (w === null || !w.isDirectory()) continue;
    await Q(g, r, n, e, { countEnumerationFailures: true });
  }
  return e;
}
async function wr() {
  let r = E(), s = kS();
  if (s === null) return r;
  let n = h(Z0e(), "projects"), f = ie(), i = await f.readdir(n).catch(() => []);
  for (let m of i) {
    if (!m.isDirectory()) continue;
    r = N(r, await De(h(n, m.name, "memory", "proposals"), s, f));
  }
  return N(r, await De(h(ba(), "proposals"), s, f));
}
var yr = "skill-proposal";
async function De(e, r, s) {
  let n = E();
  try {
    if ((await s.lstat(e)).isSymbolicLink()) return n;
  } catch (i) {
    if (!Vt(i)) n.errors++;
    return n;
  }
  let f = await s.readdir(e).catch((i) => {
    if (!G(i)) n.errors++;
    return [];
  });
  for (let i of f) {
    if (!i.isFile() || !i.name.endsWith(".md")) continue;
    let m = h(e, i.name);
    try {
      let { content: g, mtimeMs: w } = await oye(m, 0, Rye, ice, void 0, { truncateOnByteLimit: true });
      if (!(w < r.getTime())) continue;
      if (Ra(g, m).frontmatter.type !== yr) continue;
      await s.unlink(m), n.messages++;
    } catch (g) {
      if (!G(g)) n.errors++;
    }
  }
  return await T(e, s), n;
}
async function Iho(e) {
  await we();
  let r = await bt(), s = { seedAdminRemoved: r.removed, seedAdminErrors: r.errors, seedAdminHeld: r.held, seedAdminRefused: c(r.refused) }, n = await re(), f = n === "asked" ? {} : { hooksUnasked: c(n) }, i = await Y$n(e), m = pr()?.cleanupPeriodDays;
  if (i !== null) return a("tengu_retention_sweep", { skipped: true, skipReason: c(i), ...s, ...f }), WGo({ result: "skipped", skipReason: i, periodDays: m ?? m1t, usedDefault: m === void 0 }), i;
  a("tengu_retention_sweep", { phase: b("start"), ...s, ...f });
  let g = void 0, w, D = () => w ??= et(g);
  await using R = { [Symbol.asyncDispose]: () => D().then(() => {
  }, () => {
  }) };
  await Ve();
  let S = await rt(), y = [S];
  y.push(await St(e)), y.push(await Dt()), y.push(await kt()), y.push(await Rt()), y.push(await _t()), y.push(await Pt()), y.push(await Ft(e)), y.push(await Ot()), y.push(await Tt()), y.push(await Wt()), y.push(await At(e)), y.push(await Lt(e)), y.push(await Nt(e)), y.push(await xt(e)), y.push(await Mt(e)), y.push(await jt(e)), y.push(await Bt()), y.push(await $t()), y.push(await Ht()), y.push(await Ut()), y.push(await er()), y.push(await Yt()), y.push(await Kt()), y.push(await zt()), y.push(await nr()), y.push(await sr()), y.push(await ir()), y.push(await ar()), y.push(await or()), y.push(await Gt()), y.push(await Xt()), y.push(await Jt()), y.push(await tr(e, g)), y.push(await rr()), y.push(await nt()), y.push(await ot()), y.push(await ct()), y.push(await lt()), y.push(await ut()), y.push(await ft()), y.push(await dt()), y.push(await pt()), y.push(await gt()), y.push(await st()), y.push(await it()), y.push(await at()), y.push(await mr()), y.push(await hr()), y.push(await wr());
  let P = { entriesPruned: 0, errors: 0 }, O = kS();
  if (O !== null) {
    await z1s(O, e);
    let _ = await kAs(O);
    y.push({ ...E(), messages: _.removed, errors: _.errors });
    let A = await vAo(O, g, false);
    if (A > 0) a("tengu_worktree_cleanup", { removed: A });
    if (await wt(Le(), O), Ks("hipaa") && k("tengu_hipaa_history_retention_prune", true)) P = await yt(O), y.push({ ...E(), errors: P.errors });
  }
  y.push(await D());
  let C = y.reduce(N, E());
  a("tengu_retention_sweep", { phase: b("complete"), skipped: false, transcriptsDeleted: S.transcripts, transcriptsExemptedDesktop: S.transcriptsExemptedDesktop, sessionFilesDeleted: S.messages, artifactsDeleted: C.messages, filesRetainedFresh: C.filesRetainedFresh, filesPastCutoff: C.filesPastCutoff, errors: C.errors, historyEntriesPruned: P.entriesPruned, periodDays: m ?? m1t, usedDefault: m === void 0 }), WGo({ result: "complete", periodDays: m ?? m1t, usedDefault: m === void 0, transcriptsDeleted: S.transcripts, transcriptsExemptedDesktop: S.transcriptsExemptedDesktop, sessionFilesDeleted: S.messages, artifactsDeleted: C.messages, filesRetainedFresh: C.filesRetainedFresh, filesPastCutoff: C.filesPastCutoff, errorCount: C.errors, historyEntriesPruned: P.entriesPruned });
}
async function be(e, r, s) {
  if (r === null) return true;
  let n = await x.readdir(e, { withFileTypes: true }).catch(() => []);
  for (let f of n) {
    let i = h(e, f.name), m = await x.lstat(i).catch(() => null);
    if (m !== null && m.mtime > r) return true;
    if (s > 1 && f.isDirectory() && await be(i, r, s - 1)) return true;
  }
  return false;
}
export {
  Iho,
  Pho,
  Rho,
  Y$n,
  kS,
  vAs,
  xho,
  yme
};
