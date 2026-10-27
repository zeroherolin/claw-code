// fs/hipaa-history-retention-prune.1f18.js — Claude Code 2.1.310 模块 chunk-1f18fc15.js
import { V, J } from "../context/not-admin-owned.ersa.js";
import { S, c } from "../agents/third-party.ydpb.js";
import { d, G, Kt, Q_ } from "../telemetry/anthropic-workspace-id.36ys.js";
import { X } from "../shared/chunk-3kevgx4j.js";
import { ee, qo, ie, t } from "./gitlab-runner-authentication-token.d7b0.js";
import { Le, cf, $it } from "../models/claude-3-5-sonnet.21mz.js";
import { Ze } from "../shared/chunk-j79dwkaq.js";
import { sAt, l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { HM, Llr, uee } from "./utf-8.7pve.js";
import { Jb, Xpe, r3t, Dkn, aes } from "../context/utf-8.yzy3.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { $d, h7n, y7n, oL, SQ, Vze, oj, Bet, x7n, d8s, sj, Kze, c8s, sL, LWt } from "../plugins/entry-refused.bp7z.js";
import { Api, _r, see, je, Ppi } from "../plugins/chunk-x0a7sawk.js";
import { iTe, $Ur, jGe, K9n, YUr, CBt, TBt, Lqs, Nqs, t$o, JUr } from "../shell/sandbox.aet2.js";
import { Cf, Skn, bkn, jd } from "./tempdir-owner-mismatch.5xe1.js";
import { HHo, YJe, Ga } from "../telemetry/bg-roster-parse-failed.yhsj.js";
import { PI, JY, PEn, aFe, LCt } from "../shell/invalid-type.qnva.js";
import { Qv } from "./chunk-tzqhxyjb.js";
import { Qt } from "../settings/workflow-launch-exec.t4r2.js";
import { N3o, kL, k, sNe, ba } from "../settings/global-config-and-gates.27xj.js";
import { Mqt, nlr, Mui, Hui, oZo, sZo, Dui, mxe } from "../git/utf-8.vh7e.js";
import { Qkn } from "../remote/local-agent.we9a.js";
import { El, Gg } from "./chunk-w461d8x8.js";
import { fe, fr, QYo, CS, EM, qKe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { zs } from "../shared/chunk-cg45s1mf.js";
import { t$n } from "./job-sweep-drafts.g18m.js";
import { gGo } from "../context/account-memory-text-not-identified.y6np.js";
import { Hye, fce, xa } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { $Eo } from "../shared/chunk-vxgqfz66.js";
import { n$n, $Ts } from "../context/service-account-impersonation-url.xtgg.js";
import { Rdn } from "../hooks/plugin-function-hooks-switch-followed.e90f.js";
import { A6, nge, QBe, fDt, FA, JTo, QTo, fFt } from "../core/conversation-engine.31gx.js";
import { Nf } from "../agents/in-process-teammate.040f.js";
import { JWr } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { Ie } from "../plugins/chunk-hxt89a41.js";
import { Xfn } from "../artifacts/utf-8.vzjz.js";
import { L8n, N8n, F8n, $8n } from "../remote/bridge-outcome-branch-dropped.9kms.js";
import { Wne, cJe, Y$t, PMo, hjs, vjs } from "../context/team-memory-sync.0s3j.js";
import { cye } from "./file-upload.g3fv.js";
import { vFo } from "../telemetry/chunk-zbtej1v8.js";
import { d1s } from "../settings/settings-change-staged.z8pz.js";
import { Hjn } from "../telemetry/chunk-d2xe79w0.js";
import { jZt } from "./send-file-received.w8v9.js";
import { YEe } from "../settings/chunk-842gkt0c.js";
import { FTs } from "./chunk-rb032ed2.js";
import { Rde } from "./chunk-6tvcm7a7.js";
import { Ja } from "./daemon-worker.e01m.js";
import { o, E, u } from "../vendor/zod/string-format.k395.js";
import { Et } from "../telemetry/chunk-q6tk46bn.js";
import { z } from "../shared/chunk-mxa4mwnj.js";
import * as x from "fs/promises";
import { homedir as ke, tmpdir as He } from "os";
import { basename as q, dirname as Re, join as h } from "path";
import { join as Ae } from "path";
var pe = "mcp-skill-archives", Me = "meta.json";
var xe = f(() => u({ uri: o().optional(), cacheKey: o(), fetchedAt: E() }));
function Ne(e) {
  return Rde(Ae(e, Me), () => xe().nullable(), { defaultValue: null, ensureDir: true });
}
var ue = 64, Be = 16, $r = ue + 2 + ue + 2 + Be;
async function me(e) {
  try {
    return await Ne(e).read();
  } catch {
    return null;
  }
}
import { join as he } from "path";
var $e = "image-cache";
async function we() {
  let e = ie(), r = he(Le(), $e), s = V();
  try {
    let n;
    try {
      n = await e.readdir(r);
    } catch {
      return;
    }
    for (let p of n) {
      if (p.name === s) continue;
      let i = he(r, p.name);
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
var Qr = f(() => u({ key: o(), integrity: o().nullable(), time: E() }));
async function re(e = Rdn) {
  let r = Ie(), s = { end: () => {
  } }, n = new AbortController();
  if (await Promise.race([Promise.resolve(r.hooksLoadAtStartup).catch(() => {
  }).then(() => r.hookRegistrationInFlight?.catch(() => {
  })).then(async () => {
    while (r.hookRegistrationOwed && !n.signal.aborted) await new Promise((w) => {
      s.end = r.hookRegistrationEnded.subscribe(w);
    }), s.end();
    if (n.signal.aborted) return false;
    return await fFt("a retention sweep starts"), true;
  }), X(e, n.signal).then(() => false)]).finally(() => n.abort())) return r.hooksUnknownCause === void 0 ? "asked" : "load_failed";
  s.end();
  let m = r.hookRegistrationInFlight !== void 0 ? "load_running" : "unanswered", g = r.hookRegistrationOwed ? "load_owed" : m;
  return t(`Retention cleanup: the settings.read hooks were not asked within ${e} ms (${g}); the sweep begins on the merge as last held.`), g;
}
var We = 0, Ue = ["ccr-tip.json", "custom-title.json", "precompact.json", "sent-prefix.json", L8n];
function ye(e) {
  let r = see(e);
  return _r(e) && r.length === 1 && r[0] === e.toLowerCase() && Dui(e);
}
function Ye(e) {
  return Ue.some((r) => e === r || HM(e, r)) || e.startsWith(N8n) && (e.endsWith(".json") || e.includes(".json.tmp.")) || e.startsWith(F8n) && e.endsWith(".md");
}
async function e$n(e) {
  if (J()) return "diskless";
  if (!Qt("userSettings") && fr()?.cleanupPeriodDays === void 0) return t("Skipping retention cleanup: userSettings source is disabled (--setting-sources) and no enabled source provides cleanupPeriodDays."), "user_source_disabled";
  if (fe("policySettings")?.cleanupPeriodDays !== void 0) return null;
  if (YEe().errors.filter((s) => !s.mcpErrorMetadata && s.severity !== "warning").length > 0) for (let s of LCt) {
    let n = await qKe(s, e, s === "desktopSessionCleanupPeriodDays" ? { presenceSources: ["userSettings", "flagSettings"] } : void 0);
    if (n === "unknowable") return t(`Skipping cleanup: a settings file could not be read or parsed, so ${s} may be set to a value that cannot be seen. Fix the settings file (see /doctor) to re-enable cleanup.`), "settings_unknowable";
    if (n === "present") return t(`Skipping cleanup: settings have validation errors but ${s} was explicitly set. Fix settings errors to enable cleanup.`), "settings_invalid_key_set";
  }
  if (JY() && PEn(PI() === true)) return t("Skipping retention cleanup: this session reads no stored server-managed settings and holds none of its own (its request failed, has not finished, or returned nothing that could be applied), so cleanupPeriodDays may be set to a value that cannot be seen. A later process that is not paused for this reason runs the cleanup."), "remote_settings_unknowable";
  return null;
}
async function xho(e, r) {
  return await re(r), await e$n(e) === null;
}
function _e(e) {
  let r = new Date(Date.now() - e * 24 * 60 * 60 * 1e3);
  return Number.isNaN(r.getTime()) ? null : r;
}
function Cb(e) {
  let s = (fr() || {}).cleanupPeriodDays ?? TBt;
  if (s === 0) return null;
  if (e !== void 0 && e < s) s = e;
  return _e(s);
}
var Z = ".desktop-released.json", Ke = 4096;
function ne(e) {
  return e.slice(0, -6) + Z;
}
var ze = f(() => u({ reason: o().optional() }));
async function ge(e, r, s) {
  let n = await r.readFileFdGated(e, Ke);
  if (n === null) return "none";
  let p;
  try {
    let i = ze().safeParse(ee(n.content));
    p = i.success ? i.data.reason : void 0;
  } catch {
    return "none";
  }
  if (p === "delete") return "release-now";
  if (p === "archive") return n.stats.mtime < s ? "release-now" : "grace";
  return "none";
}
function Ge(e) {
  return /^[0-9A-Za-z_-]{1,64}$/.test(e);
}
function Xe() {
  return ae("desktopSessionCleanupPeriodDays", We);
}
function ae(e, r) {
  let s = EM(e)[0] ?? r;
  if (s === 0) return null;
  return _e(s);
}
function Je() {
  if (fe("policySettings")?.cleanupPeriodDays !== void 0) return true;
  if (QYo()) return true;
  return CS().some((e) => e.file !== aFe && (LCt.some((r) => r === e.path) || e.severity !== "warning"));
}
function LTs() {
  return Je() || zs("hipaa") || zs("zdr");
}
function v() {
  return { messages: 0, errors: 0, filesRetainedFresh: 0, filesPastCutoff: 0 };
}
function N(e, r) {
  return { messages: e.messages + r.messages, errors: e.errors + r.errors, filesRetainedFresh: e.filesRetainedFresh + r.filesRetainedFresh, filesPastCutoff: e.filesPastCutoff + r.filesPastCutoff };
}
function qe(e) {
  let r = Ze(e, ".").replace(/T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z/, "T$1:$2:$3.$4Z");
  return new Date(r);
}
function bme(e) {
  return Kt(e) || Q_(e);
}
async function Se(e, r, s) {
  let n = v();
  try {
    let p = await ie().readdir(e);
    for (let i of p) try {
      if (qe(i.name) < r) if (await ie().unlink(h(e, i.name)), s) n.messages++;
      else n.errors++;
    } catch (m) {
      t(`Failed to clean up file ${i.name} in ${e}: ${m}`, { level: "error" });
    }
  } catch (p) {
    if (G(p)) ;
    else if (bme(p)) t(`cleanup readdir ${e} failed: ${p.code}`, { level: "error" });
    else l(p);
  }
  return n;
}
async function Ve() {
  let e = ie(), r = Cb();
  if (r === null) return v();
  let s = sAt.errors(), n = sAt.baseLogs(), p = await Se(s, r, false);
  try {
    let i;
    try {
      i = await e.readdir(n);
    } catch {
      return p;
    }
    let m = i.filter((g) => g.isDirectory() && g.name.startsWith("mcp-logs-")).map((g) => h(n, g.name));
    for (let g of m) p = N(p, await Se(g, r, true)), await T(g, e);
  } catch (i) {
    if (G(i)) ;
    else if (bme(i)) t(`cleanup mcp-logs scan failed: ${i.code}`, { level: "error" });
    else l(i);
  }
  return p;
}
async function M(e, r, s, n, p = r, i) {
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
    if (p !== null && m.mtime < p) n.filesPastCutoff++;
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
var se = [Mui, Hui];
async function Qe(e, r, s, n) {
  try {
    for (let _ of se) await Pe(h(e, _), r, s, n);
    let p = false;
    try {
      let { sweepCheckoutSessionTrash: _ } = await import("./sweep-checkout-session-trash.g5k2.js"), D = await _(e, r.getTime());
      n.messages += D.removed, n.errors += D.errors, p = D.newestKeptMs !== null;
    } catch {
      n.errors++, p = true;
    }
    let i = (await s.readdir(e)).filter((_) => !se.includes(_.name)), m = null;
    for (let _ of i) {
      let D = h(e, _.name), y = await oe(_, D, s) === "directory" ? await K(D, s, { requireCompleteWalk: true }) : (await s.lstat(D)).mtimeMs;
      if (y !== null) m = Math.max(m ?? -1 / 0, y);
    }
    if (!((m ?? await Ee(e, s)) < r.getTime())) return;
    let w = (await Promise.all(se.map((_) => s.lstat(h(e, _)).then((D) => D.isDirectory(), (D) => {
      if (G(D)) return false;
      throw D;
    })))).includes(true), R = i.toSorted((_, D) => Number(_.name === oZo) - Number(D.name === oZo));
    if (w || p) {
      let _ = false;
      for (let D of R) {
        if (p && D.name === nlr) {
          _ = await tt(h(e, D.name), s) || _;
          continue;
        }
        await s.rm(h(e, D.name), { recursive: true, force: true }), _ = true;
      }
      if (_) n.messages++;
      return;
    }
    for (let _ of R.slice(0, -1)) await s.rm(h(e, _.name), { recursive: true, force: true });
    await s.rm(e, { recursive: true, force: true }), n.messages++;
  } catch (p) {
    if (!G(p)) n.errors++;
  }
}
async function Pe(e, r, s, n) {
  if (!await U(e, s)) return;
  let p = await s.readdir(e).catch(() => []);
  for (let i of p) {
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
  let r = Cb(), s = v();
  if (r === null) return s;
  let n = Nf(), p = ie();
  for (let i of await p.readdir(n).catch(() => [])) {
    let m = h(n, i.name), g = h(m, Mqt);
    if (i.isDirectory() && await U(g, p)) await Qe(g, r, p, s), await T(m, p);
  }
  return s;
}
async function tt(e, r) {
  let s = e, n = false;
  for (let p of ["objects", "info", "alternates"]) {
    if (!(await r.lstat(s)).isDirectory()) return await r.rm(s, { recursive: true, force: true }), true;
    for (let i of await r.readdir(s)) if (i.name !== p) await r.rm(h(s, i.name), { recursive: true, force: true }), n = true;
    s = h(s, p);
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
async function Q(e, r, s, n, p = {}) {
  let { entryMatcher: i } = p, m = await s.readdir(e).catch((g) => {
    if (p.countEnumerationFailures === true && !G(g)) n.errors++;
    return [];
  });
  for (let g of m) {
    let w = h(e, g.name);
    if (g.isDirectory()) await Q(w, r, s, n, p);
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
  let n = -1 / 0, p = await r.readdir(e).catch((i) => {
    if (s && !G(i)) throw i;
    return [];
  });
  for (let i of p) {
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
  let e = Cb(), r = { ...v(), transcripts: 0, transcriptsExemptedDesktop: 0 };
  if (e === null) return r;
  let s = Nf(), n = ie(), p;
  try {
    p = await n.readdir(s);
  } catch {
    return r;
  }
  let i;
  try {
    if (i = jd(), !(await n.lstat(i)).isDirectory()) i = null;
  } catch {
    i = null;
  }
  let m = LTs(), g = Xe(), w = null, R = m ? void 0 : async (_, D) => {
    if (zs("hipaa") || zs("zdr")) return false;
    if (g !== null && D.mtime < g) return false;
    let y = await ge(ne(_), n, e);
    if (y === "release-now") return false;
    if (y === "grace") return r.transcriptsExemptedDesktop++, true;
    if (D.size === 0) {
      if (!await n.stat(_.slice(0, -6)).then((I) => I.isDirectory(), () => false)) return r.transcriptsExemptedDesktop++, true;
    }
    w ??= Buffer.allocUnsafe(Jb);
    let { head: C, tail: b } = await Dkn(_, D.size, w);
    if (C === "" && D.size > 0) throw await n.stat(_), Error("transient read failure while classifying a transcript for the desktop retention exemption");
    let O = D.size > Jb ? aes(b) : b, P = Xpe(C, "entrypoint"), A = r3t(O, "entrypoint");
    if (!(P !== void 0 && Qkn(P) || A !== void 0 && Qkn(A))) return false;
    let H = q(_).startsWith("agent-") ? Xpe(C, "sessionId") ?? r3t(O, "sessionId") : void 0;
    if (H !== void 0 && Ge(H)) {
      let B = h(Re(_), `${H}${Z}`);
      if (B !== ne(_)) {
        if (await ge(B, n, e) === "release-now") return false;
      }
    }
    return r.transcriptsExemptedDesktop++, true;
  };
  for (let _ of p) {
    if (!_.isDirectory()) continue;
    let D = h(s, _.name), y;
    try {
      y = await n.readdir(D);
    } catch {
      r.errors++;
      continue;
    }
    y.sort((P, A) => Number(A.isDirectory()) - Number(P.isDirectory()));
    let C = [], b = null, O = new Set(y.filter((P) => P.isFile() && P.name.endsWith(".jsonl")).map((P) => P.name.slice(0, -6)));
    for (let P of y) {
      if (b === null && !P.isDirectory()) b = r.errors;
      if (P.isFile()) {
        if (P.name.endsWith(Z) && O.has(P.name.slice(0, -Z.length))) continue;
        if (!P.name.endsWith(".jsonl") && !P.name.endsWith(".cast") && !P.name.endsWith(".ccr-tip.json") && !P.name.endsWith(".precompact.json") && !P.name.endsWith(Z) && !P.name.includes(".desktop-released.json.tmp") && !P.name.endsWith(".dir-sync.json") && !P.name.endsWith(".dir-sync-empty.json") && !P.name.endsWith(".cloud-worktrees.json") && !P.name.includes(".ccr-tip.json.tmp.") && !P.name.includes(".precompact.json.tmp.") && !P.name.includes(".dir-sync.json.tmp.") && !P.name.includes(".dir-sync-empty.json.tmp.") && !P.name.includes(".cloud-worktrees.json.tmp.") && !P.name.includes(".jsonl.compact.tmp.") && !P.name.includes(".jsonl.superseded-")) continue;
        let A = h(D, P.name);
        try {
          if (await M(A, e, n, r, void 0, P.name.endsWith(".jsonl") ? R : void 0)) {
            if (r.messages++, P.name.endsWith(".jsonl")) {
              r.transcripts++;
              let L = P.name.slice(0, -6);
              if (ye(L)) {
                if (await n.unlink(h(D, `${L}.ccr-tip.json`)).catch(() => {
                }), await n.unlink(h(D, `${L}.precompact.json`)).catch(() => {
                }), C.push(ne(A)), await n.rm(h(D, L), { recursive: true, force: true }).catch(() => {
                  r.errors++;
                }), i !== null) {
                  let H = h(i, _.name), B = await n.lstat(H).catch(() => null);
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
      } else if (P.isDirectory()) {
        let A = h(D, P.name);
        if (P.name === "bagel") {
          let I = await K(A, n);
          if (I !== null && I < e.getTime()) try {
            await n.rm(A, { recursive: true, force: true }), r.messages++;
          } catch {
            r.errors++;
          }
          continue;
        }
        if (P.name === Mqt) continue;
        if (!ye(P.name)) {
          let I = await n.lstat(A).catch(() => null);
          if (I !== null && I.mtime < e) await T(A, n);
          continue;
        }
        let L = h(A, mxe);
        if (await U(L, n)) {
          let I = await n.readdir(L).catch(() => []);
          for (let W of I) if (W.isFile()) try {
            if (await M(h(L, W.name), e, n, r)) r.messages++;
          } catch {
            r.errors++;
          }
          else if (W.isDirectory()) {
            let te = h(L, W.name), ce;
            try {
              ce = await n.readdir(te);
            } catch {
              continue;
            }
            for (let le of ce) {
              if (!le.isFile()) continue;
              try {
                if (await M(h(te, le.name), e, n, r)) r.messages++;
              } catch {
                r.errors++;
              }
            }
            await T(te, n);
          }
          await T(L, n);
        }
        let H = await n.readdir(A).catch(() => []);
        for (let I of H) {
          if (!I.isFile() || !(Ye(I.name) || sZo(I.name) !== void 0)) continue;
          if (I.name === "custom-title.json" && O.has(P.name)) continue;
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
        if (!O.has(P.name)) for (let I of ["subagents", "workflows", "remote-agents"]) {
          let W = h(A, I);
          if (await U(W, n)) await Q(W, e, n, r);
        }
        await T(A, n);
      }
    }
    if (b !== null && r.errors > b) C.length = 0;
    for (let P of C) await n.unlink(P).catch(() => {
    });
    await T(D, n);
  }
  return r;
}
async function F(e, r, s = true, n, p) {
  let i = p === void 0 ? Cb(n) : p, m = v();
  if (i === null) return m;
  let g = p !== void 0 || n === void 0 ? i : Cb(), w = typeof r === "string" ? (D) => D.endsWith(r) : r, R = ie(), _;
  try {
    _ = await R.readdir(e);
  } catch {
    return m;
  }
  for (let D of _) {
    if (!D.isFile() || !w(D.name)) continue;
    try {
      if (await M(h(e, D.name), i, R, m, g)) m.messages++;
    } catch {
      m.errors++;
    }
  }
  if (s) await T(e, R);
  return m;
}
async function nt() {
  let e = v(), r = Cb();
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
  let e = v(), r = Cb();
  if (r === null) return e;
  let s = h(Le(), "cache", "team-discovery.json");
  try {
    if (await M(s, r, ie(), e)) e.messages++;
  } catch (n) {
    if (!G(n)) if (e.errors++, bme(n)) t(`cleanup team-discovery-cache failed: ${n.code}`, { level: "error" });
    else l(n);
  }
  return e;
}
async function it() {
  let e = v(), r = Cb();
  if (r === null) return e;
  for (let s of [n$n(), $Ts()]) try {
    if (await M(s, r, ie(), e)) e.messages++;
  } catch (n) {
    if (!G(n)) if (e.errors++, bme(n)) t(`cleanup model-access memory failed: ${n.code}`, { level: "error" });
    else l(n);
  }
  return e;
}
async function at() {
  return F(kL(), (e) => e !== N3o && e !== $Eo && (e.endsWith(".json") || e.includes(".json.tmp.")));
}
async function ot() {
  let e = v(), r = Cb();
  if (r === null) return e;
  let s = h(Le(), "mcp-needs-auth-cache.json");
  try {
    if (await M(s, r, ie(), e)) e.messages++;
  } catch (n) {
    if (!G(n)) if (e.errors++, bme(n)) t(`cleanup mcp-auth-cache failed: ${n.code}`, { level: "error" });
    else l(n);
  }
  return e;
}
async function ct() {
  let e = v(), r = Cb();
  if (r === null) return e;
  let s = h(Le(), "state", "device-unbound-creates.json");
  try {
    if (await M(s, r, ie(), e)) e.messages++;
  } catch (n) {
    if (!G(n)) if (e.errors++, bme(n)) t(`cleanup device-unbound-creates failed: ${n.code}`, { level: "error" });
    else l(n);
  }
  return e;
}
async function lt() {
  let e = v(), r = Cb();
  if (r === null) return e;
  let s = h(Le(), "state", "mcp-discover-verdicts.json");
  try {
    if (await M(s, r, ie(), e)) e.messages++;
  } catch (n) {
    if (!G(n)) if (e.errors++, bme(n)) t(`cleanup mcp-discover-verdicts failed: ${n.code}`, { level: "error" });
    else l(n);
  }
  return e;
}
async function ut() {
  let e = v(), r = Cb(), s = cf();
  if (r === null || s === null) return e;
  let n = h(s, "state", "device-mcp-consent-not-now.json");
  try {
    if (await M(n, r, ie(), e)) e.messages++;
  } catch (p) {
    if (!G(p)) if (e.errors++, bme(p)) t(`cleanup device-mcp-not-now failed: ${p.code}`, { level: "error" });
    else l(p);
  }
  return e;
}
async function ft(e = h(ke(), ".claude", "state", "served-calls")) {
  return F(e, (r) => r.endsWith(".jsonl") || r.includes(".jsonl.tmp."), true, void 0, ae("cleanupPeriodDays", TBt));
}
async function dt(e = h(ke(), ".claude", "state", "unattended-serving-runs")) {
  return F(e, (r) => {
    let s = /^([1-9][0-9]{0,9})\.json$/.exec(r)?.[1];
    return s === void 0 ? r.includes(".json.tmp.") : !Ja(Number(s));
  }, true, void 0, ae("cleanupPeriodDays", TBt));
}
async function pt(e) {
  let r = v(), s = Cb();
  if (s === null) return r;
  try {
    r.messages += await d1s(s, e);
  } catch (n) {
    if (r.errors++, bme(n)) t(`cleanup settings-review store failed: ${n.code}`, { level: "error" });
    else l(n);
  }
  return r;
}
function mt(e) {
  if (!e) return false;
  try {
    let r = qo(e);
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
    let s = qo(e);
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
  await Promise.all(s.filter((p) => HM(p, "history.jsonl") || Wne(p)).map(async (p) => {
    let i = h(e, p);
    try {
      let m = await x.lstat(i);
      if (m.isFile() && m.mtimeMs < n) await x.unlink(i);
    } catch {
    }
  }));
}
async function yt(e) {
  let r = h(Le(), "history.jsonl"), s = e.getTime(), n = (w) => ht(w, s) || mt(w), p, i;
  try {
    if (p = await x.lstat(r), !p.isFile()) return t("History retention prune skipped: history.jsonl is not a regular file", { level: "error" }), { entriesPruned: 0, errors: 1 };
    i = await PMo(r, n, { start: 0, end: p.size, tail: "defer", expect: { ino: p.ino, birthtimeMs: p.birthtimeMs } });
  } catch (w) {
    if (G(w)) return { entriesPruned: 0, errors: 0 };
    if (w instanceof Y$t) return t("History retention prune deferred: history.jsonl changed under the scan"), { entriesPruned: 0, errors: 0 };
    return t(`History retention prune failed: ${w}`, { level: "error" }), { entriesPruned: 0, errors: 1 };
  }
  if (i.dropped === 0 && i.consumed === p.size) return { entriesPruned: 0, errors: 0 };
  let m, g = false;
  try {
    m = await El(r, { ...cJe, onCompromised: (w) => {
      g = true, t(`History retention lock compromised: ${w}`, { level: "error" });
    } });
  } catch (w) {
    if (G(w)) return { entriesPruned: 0, errors: 0 };
    return t(`History retention prune failed: ${w}`, { level: "error" }), { entriesPruned: 0, errors: 1 };
  }
  try {
    let w = await x.lstat(r);
    if (!w.isFile() || w.size < i.consumed || p.ino !== 0 && w.ino !== p.ino || w.birthtimeMs !== p.birthtimeMs) return t("History retention prune deferred: history.jsonl changed under the scan"), { entriesPruned: 0, errors: 0 };
    let R = await PMo(r, n, { start: i.consumed, end: w.size, tail: "judge", expect: { ino: w.ino, birthtimeMs: w.birthtimeMs }, verifiedHead: { bytes: i.consumed, digest: i.digest }, residueBytes: p.size - i.consumed }), _ = i.dropped + R.dropped;
    if (g) throw Error("history lock compromised before the rewrite");
    if (_ === 0 && R.terminated && !R.split) return { entriesPruned: 0, errors: 0 };
    let D = i.kept.concat(R.kept);
    return await uee(r, D.length ? `${D.join(`
`)}
` : "", { exactMode: w.mode & 511 }), { entriesPruned: _, errors: 0 };
  } catch (w) {
    if (w instanceof Y$t) return t("History retention prune deferred: history.jsonl changed under the scan"), { entriesPruned: 0, errors: 0 };
    return t(`History retention prune failed: ${w}`, { level: "error" }), { entriesPruned: 0, errors: 1 };
  } finally {
    await Gg(m, "history retention");
  }
}
async function gt() {
  let e = h(Le(), "mcp-discovery-cache"), r = await F(e, (i) => i.endsWith(".json") || i.includes(".json.tmp."), false), s = Cb();
  if (s === null) return r;
  let n = ie(), p;
  try {
    p = await n.readdir(e);
  } catch {
    return r;
  }
  for (let i of p) {
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
  if (J()) return v();
  let r = h(Le(), "plans");
  try {
    if (e !== void 0) return await F(r, (s) => s.endsWith(".md") || s.includes(".md.tmp."));
    return await F(r, ".md");
  } finally {
    Xfn();
  }
}
async function j(e, { exclude: r, skipIf: s, refuseRedirectedRoot: n = false, removeEmptyBaseDir: p = true, maxAgeDays: i, baseDir: m, storageV5: g } = {}) {
  let w = Cb(i), R = v();
  if (w === null) return R;
  let _ = ie(), D = Le(), y = m ?? h(D, e);
  if (n) {
    if (await A6(y, D, { event: "cleanup_sweep_root_refused", phase: "sweep", rootLabel: e }, { storageV5: g }) !== "real") return R;
  }
  let C;
  try {
    C = await _.readdir(y);
  } catch {
    return R;
  }
  for (let b of C) {
    if (!b.isDirectory() || r?.has(b.name)) continue;
    let O = h(y, b.name);
    try {
      if ((await _.stat(O)).mtime < w) {
        if (await s?.(O)) continue;
        await _.rm(O, { recursive: true, force: true }), R.messages++;
      }
    } catch {
      R.errors++;
    }
  }
  if (p) await T(y, _);
  return R;
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
  let e = FA.get()?.folder, r = Cb();
  return j("dev-mods", { exclude: /* @__PURE__ */ new Set([V(), ...e === void 0 ? [] : [q(e)]]), skipIf: (s) => be(s, r, Ct), removeEmptyBaseDir: false });
}
var Ct = 3, vt = 2;
async function Ot() {
  let e = jGe(), r = await iTe(e).catch(() => null);
  if (!r) return v();
  return j($Ur, { removeEmptyBaseDir: false, maxAgeDays: vt, baseDir: e, skipIf: async (s) => !await K9n(s, r) });
}
async function bt() {
  try {
    return await vjs();
  } catch (e) {
    if (bme(e)) t(`[cleanup] the sweep of seed-admin did not run: ${e.code}`, { level: "warn" });
    else l(e);
    return { removed: 0, errors: 1, held: 0, refused: "no" };
  }
}
async function Ft(e) {
  if (z() && e !== void 0) {
    let n = await It(e);
    if (n !== "unaddressed") return n;
  }
  let r = CBt(), s = await iTe(r).catch(() => null);
  if (!s) return v();
  return j(YUr, { removeEmptyBaseDir: false, maxAgeDays: t$o, baseDir: r, skipIf: async (n) => {
    let p = await iTe(r);
    return p?.ino !== s.ino || p.dev !== s.dev || await iTe(n) === null || await x.realpath(n) !== h(await x.realpath(Re(r)), YUr, q(n));
  } });
}
async function It(e) {
  let r = v(), s = Ppi(), n = await e.scopeKind(s);
  if (!n.ok) return n.error.code === "InvalidArgument" ? "unaddressed" : r;
  if (n.value.kind !== "directory" || n.value.object === void 0 || n.value.owner === "other") return r;
  let p = Cb(t$o);
  if (p === null) return r;
  let i = await e.deleteScope(s, { olderThanMs: Math.max(0, Date.now() - p.getTime()) });
  if (!i.ok) return r;
  return r.messages += i.value.deleted, r.errors += i.value.failed ?? 0, r;
}
function Tt() {
  return F(jZt(), "", false, Hjn);
}
async function At(e) {
  return N(N(await j(x7n, { refuseRedirectedRoot: true, storageV5: e }), await j(d8s, { refuseRedirectedRoot: true, storageV5: e })), await Ce(oj, e));
}
async function Ce(e, r) {
  let s = v();
  if (Cb() === null) return s;
  let n = Le(), p = h(n, e);
  if (await A6(p, n, { event: "cleanup_sweep_root_refused", phase: "sweep", rootLabel: e }, { storageV5: r }) !== "real") return s;
  let m;
  try {
    m = await ie().readdir(p);
  } catch {
    return s;
  }
  for (let g of m) {
    if (!g.isDirectory() || !Vze(g.name)) continue;
    s = N(s, await j(h(e, "*", SQ), { baseDir: h(p, g.name, SQ), refuseRedirectedRoot: true, storageV5: r }));
  }
  return s;
}
function Mt(e) {
  return j(Bet, { refuseRedirectedRoot: true, storageV5: e });
}
async function ve(e, r, s, n) {
  let p = v(), i = Cb();
  if (i === null) return p;
  let m = await sL().catch((C) => {
    l(C);
    return;
  });
  if (m === void 0) return p;
  let g = m ?? LWt(), w = Le(), R = h(w, e);
  if (await A6(R, w, { event: "cleanup_sweep_root_refused", phase: "sweep", rootLabel: e }, { storageV5: n }) !== "real") return p;
  let D = ie(), y;
  try {
    y = await D.readdir(R);
  } catch {
    return p;
  }
  for (let C of y) {
    if (!C.isDirectory() || !Vze(C.name) || C.name === g || await QBe(R, C.name) === "unmarked") continue;
    let b = h(R, C.name), O;
    try {
      O = (await D.lstat(h(b, oL)).catch(() => D.lstat(b))).mtime;
    } catch {
      continue;
    }
    if (O >= i) {
      p.filesRetainedFresh++;
      continue;
    }
    if (p.filesPastCutoff++, await nge({ dir: b, trashRoot: h(w, r), configHome: w, failureEvent: s, storageV5: n })) await fDt(R, C.name).catch(() => {
    }), p.messages++;
    else p.errors++;
  }
  return p;
}
function xt(e) {
  return ve(sj, Kze, "plugins_sync_trash_move_failed", e);
}
function Nt(e) {
  return ve(oj, Bet, "skills_sync_trash_move_failed", e);
}
function jt(e) {
  return j(Kze, { refuseRedirectedRoot: true, storageV5: e });
}
async function Lt(e) {
  return N(await j(c8s, { refuseRedirectedRoot: true, storageV5: e }), await Ce(sj, e));
}
async function Bt() {
  let e = h($d(), "store"), r = await F(e, (n) => n.endsWith(".json") || n.includes(".json.tmp."), false), s = Cb();
  if (s !== null) await Pe(e, s, ie(), r);
  return r;
}
function $t() {
  return F($d(), (e) => h7n(e) || y7n(e), false);
}
async function Ht() {
  let e = Cb(), r = v();
  if (e === null) return r;
  let s = ie(), n = h(Le(), pe), p;
  try {
    p = await s.readdir(n);
  } catch {
    return r;
  }
  for (let i of p) {
    if (!i.isDirectory()) continue;
    let m = h(n, i.name), g = (await me(m))?.cacheKey ?? null, w;
    try {
      w = await s.readdir(m);
    } catch {
      r.errors++;
      continue;
    }
    for (let R of w) {
      if (!R.isDirectory() || R.name === g) continue;
      let _ = h(m, R.name);
      try {
        if ((await s.stat(_)).mtime < e) await s.rm(_, { recursive: true, force: true }), r.messages++;
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
  return r = N(r, await F(h(e, "session-meta"), (s) => s.endsWith(".json") || s.includes(".json.tmp."))), r = N(r, await F(e, (s) => s.endsWith(".html") || Api(s), false)), await T(e, ie()), r;
}
async function Ut() {
  let e = Cb(), r = v();
  if (e === null) return r;
  let s = ie(), n;
  try {
    n = jd();
  } catch {
    return r;
  }
  let p;
  try {
    p = await s.readdir(n);
  } catch {
    return r;
  }
  for (let i of p) {
    let m = i.name.startsWith("cc-transcript-") && i.name.endsWith(".txt"), g = i.name.startsWith($8n) && i.name.endsWith(".md"), w = i.name.startsWith(JWr) && (i.name.endsWith(".json") || i.name.endsWith(".diff")), R = false;
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
  let e = v(), r = Cb(Nqs);
  if (r === null) return e;
  let s = ie(), n;
  try {
    if (n = jd(), !(await s.lstat(n)).isDirectory()) return e;
  } catch {
    return e;
  }
  let p = h(n, "speculation"), i;
  try {
    i = await s.lstat(p);
  } catch {
    return e;
  }
  if (!i.isDirectory()) return e;
  try {
    if ((await K(p, s, { requireCompleteWalk: true }) ?? i.mtimeMs) < r.getTime()) return await s.rm(p, { recursive: true, force: true }), e.messages++, e;
  } catch {
    e.errors++;
  }
  return await T(p, s), e;
}
async function zt() {
  let e = h(Le(), "shares"), r = await j("shares");
  return r = N(r, await F(e, (s) => s.endsWith(".zip") || s.includes(".zip.tmp.") && Llr(s), false)), await T(e, ie()), r;
}
async function Gt() {
  let e = h(Le(), "telemetry"), r = await F(e, ".json", false), s = Cb();
  if (s === null) return r;
  let n = h(e, "runs"), p = ie();
  if (await U(e, p) && await U(n, p)) await Q(n, s, p, r, { entryMatcher: (i) => i.endsWith(".json") });
  return await T(e, ie()), r;
}
function Xt() {
  return F(h(Le(), "dump-prompts"), ".jsonl", true, Lqs);
}
function Jt() {
  return F(h(Le(), "shell-snapshots"), ".sh", false);
}
async function Zt() {
  let e = Cb(), r = v();
  if (e === null) return r;
  let s = ie(), n = $it();
  for (let p of await s.readdir(n).catch(() => [])) {
    if (!p.isDirectory()) continue;
    let i = h(n, p.name, "inboxes");
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
    await T(h(n, p.name), s);
  }
  return r;
}
async function qt(e, r = He()) {
  let s = v(), n = ie(), p = process.getuid?.(), i;
  try {
    i = await n.readdir(r);
  } catch (m) {
    if (!G(m)) s.errors++;
    return s;
  }
  for (let m of i) {
    if (!m.name.startsWith("cc-daemon-")) continue;
    let g = m.name.slice(10);
    if (/^\d+$/.test(g) || p !== void 0 && g === String(p) || /^[0-9a-f]{16}$/.test(g)) continue;
    let w = h(r, m.name);
    try {
      let R = await iTe(w);
      if (R === null) continue;
      let _ = await n.readdir(w);
      if (_.length !== 1 || _[0].name !== "stderr.log") continue;
      let D = h(w, "stderr.log"), y = await n.lstat(D);
      if (!y.isFile()) continue;
      if (!(y.mtime < e)) {
        s.filesRetainedFresh++;
        continue;
      }
      let C = await iTe(w);
      if (C === null || C.dev !== R.dev || C.ino !== R.ino) continue;
      try {
        await n.unlink(D);
      } catch (b) {
        if (G(b)) continue;
        throw s.filesPastCutoff++, b;
      }
      s.messages++, await T(w, n);
    } catch (R) {
      if (!G(R)) s.errors++;
    }
  }
  return s;
}
var Ns = new RegExp(`^${Skn}[A-Za-z0-9]{6}$`);
var Vt = new RegExp(`^${bkn}[A-Za-z0-9]{6}$`);
async function er(e = Cb(), r = Cf()) {
  let s = v();
  if (e === null) return s;
  let n = ie(), p;
  try {
    p = await n.readdir(r);
  } catch (i) {
    if (!G(i)) s.errors++;
    return s;
  }
  for (let i of p) {
    if (!Vt.test(i.name)) continue;
    let m = h(r, i.name);
    try {
      let g = await iTe(m);
      if (g === null) continue;
      if (!((await K(m, n, { requireCompleteWalk: true }) ?? g.mtimeMs) < e.getTime())) {
        s.filesRetainedFresh++;
        continue;
      }
      let R = await iTe(m);
      if (R === null || R.dev !== g.dev || R.ino !== g.ino) continue;
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
    let R = h(s, "daemon", "host-managed"), _ = ie(), D = Cb();
    if (D) for (let y of await _.readdir(R)) {
      if (!y.isFile()) continue;
      try {
        await _.lstat(h(s, "jobs", y.name));
      } catch (C) {
        if (!G(C)) {
          n.errors++;
          continue;
        }
        try {
          if (await M(h(R, y.name), D, _, n)) n.messages++;
        } catch (b) {
          if (!G(b)) n.errors++;
        }
      }
    }
  } catch (R) {
    if (!G(R)) n.errors++;
  }
  let p = LTs(), i = Cb(), m = /* @__PURE__ */ new Set();
  if (!p) for (let R of await YJe(e)) m.add(R);
  let g = false, w = false;
  try {
    let R = h(s, "daemon", "roster.json"), _ = await ie().lstat(R);
    if (!_.isFile() || _.size > 8388608) throw Error("not a regular file");
    let D = await ie().readFile(R, { encoding: "utf-8" }), y = ee(D);
    if (y !== null && typeof y === "object" && "workers" in y) {
      let C = y.workers;
      if (C !== null && typeof C === "object") {
        g = true;
        for (let [b, O] of Object.entries(C)) if (O !== null && typeof O === "object" && "pid" in O && typeof O.pid === "number" && Ja(O.pid) && await Qv(O.pid, "procStart" in O && typeof O.procStart === "string" ? O.procStart : void 0)) m.add(b), w = true;
      }
    }
  } catch {
  }
  if (n = N(n, await j("jobs", { exclude: m, skipIf: async (R) => {
    let _;
    try {
      _ = await HHo(R, e);
    } catch (D) {
      throw l(D), t(`[cleanup] jobs/${q(R)}: job state read threw — keeping the folder (${d(D)})`, { level: "error" }), D;
    }
    if (!p && (_ === null || !Ga(_))) return true;
    if (_?.worktreePath && Ga(_) && i) {
      let D = await QTo({ worktreePath: _.worktreePath, worktreeBranch: _.worktreeBranch, originCwd: _.originCwd, hookBased: _.worktreeHookBased, cutoff: i, ...{} }).catch((y) => (l(y), false));
    }
    return false;
  } })), i !== null) {
    n = N(n, await qt(i));
    let R = ie();
    for (let D of [h(s, "daemon.log"), h(s, "daemon.log.1")]) try {
      if (await M(D, i, R, n)) n.messages++;
    } catch (y) {
      if (!G(y)) n.errors++;
    }
    let _ = h(s, "daemon", "roster.json");
    try {
      if ((await R.lstat(_)).mtime < i && !w && (g || p)) await R.unlink(_), n.messages++;
    } catch (D) {
      if (!G(D)) n.errors++;
    }
    for (let D of await R.readdir(h(s, "daemon")).catch(() => [])) {
      if (!D.isFile() || !D.name.startsWith("roster.json.corrupt.")) continue;
      try {
        if (await M(h(s, "daemon", D.name), i, R, n)) n.messages++;
      } catch {
        n.errors++;
      }
    }
  }
  return await t$n(), n;
}
function rr() {
  return F(h(Le(), "backups"), "", false);
}
async function nr() {
  let e = Cb(), r = v();
  if (e === null) return r;
  let s = ie(), n = h(Le(), "debug"), p;
  try {
    p = await s.readdir(n);
  } catch {
    return r;
  }
  for (let i of p) {
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
  let e = h(Le(), "remote-control", "fork-seeds"), r = await F(e, (p) => p.endsWith(".json") || p.includes(".json.tmp."));
  if (Cb() === null) return r;
  let s = /* @__PURE__ */ new Date(), n = ie();
  for (let p of await n.readdir(e).catch(() => [])) try {
    let i = h(e, p.name);
    if (p.isFile() && (await n.stat(i)).mtime > s) await x.lutimes(i, s, s);
  } catch {
    r.errors++;
  }
  return r;
}
async function or() {
  let e = await F(h(Le(), "traces"), ".json"), r = await F(h(Le(), "startup-perf"), ".txt"), s = await F(h(Le(), "startup-perf"), ".json");
  return N(N(e, r), s);
}
var cr = 864e5, Oe = vFo;
function lr(e) {
  if (e === void 0) return S("none");
  if (!Oe.has(e)) return S("other");
  return e === "ELOOP" ? S("ELOOP") : e === "EISDIR" ? S("EISDIR") : S("ENXIO");
}
function ur(e) {
  return e.code === "Failed" && e.telemetryCode !== void 0 && Oe.has(e.telemetryCode);
}
function dr(e) {
  if (e.ok) return "removed it";
  return ("telemetryCode" in e.error ? e.error.telemetryCode : void 0) === "EISDIR" ? "could not remove it (EISDIR): a directory at the marker path stays and the marker write will keep failing" : `could not remove it (${e.error.code})`;
}
async function Pho(e) {
  let r = await e.statMeta(je.state("last-cleanup"));
  if (r.ok || r.error.code === "NotFound" || !ur(r.error)) return;
  a("tengu_cleanup_throttle_marker", { marker: S("last-cleanup"), verdict: S("not_regular_rerun"), code: c(r.error.code), errno: lr("telemetryCode" in r.error ? r.error.telemetryCode : void 0) });
  let s = await e.delete(je.state("last-cleanup"));
  t(`.last-cleanup: sentinel is not a regular file (${Et(r.error)}) — ${dr(s)}; rewriting`, { level: "warn" });
}
var pr = [".npm-cache-cleanup", ".version-cleanup", ".last-cleanup", ".deep-link-register-failed"];
async function Iho(e, r) {
  if (!r.claimStagingReap()) return;
  let s;
  try {
    s = await x.readdir(e);
  } catch {
    return;
  }
  let n = Date.now() - cr;
  await Promise.all(s.filter((p) => pr.some((i) => HM(p, i))).map(async (p) => {
    let i = h(e, p);
    try {
      let m = await x.lstat(i);
      if (m.isFile() && m.mtimeMs < n) await x.unlink(i);
    } catch {
    }
  }));
}
async function mr() {
  let e = Cb(), r = v();
  if (e === null) return r;
  let s = ie();
  for (let n of JUr) {
    let p = h(Le(), n), i = await s.lstat(p).catch((w) => {
      if (!G(w)) r.errors++;
      return null;
    });
    if (i === null || !i.isDirectory()) continue;
    let m;
    try {
      m = await s.readdir(p);
    } catch {
      continue;
    }
    let g = false;
    for (let w of m) {
      let R = h(p, w.name);
      try {
        if (!((await s.stat(R)).mtime < e)) continue;
        let D = await s.lstat(p).catch(() => null);
        if (D === null || !D.isDirectory() || D.dev !== i.dev || D.ino !== i.ino) {
          g = true;
          break;
        }
        if (w.isDirectory()) await s.rm(R, { recursive: true, force: true });
        else await s.unlink(R);
        r.messages++;
      } catch {
        r.errors++;
      }
    }
    if (!g) await T(p, s);
  }
  return r;
}
async function hr() {
  let e = v(), r = Cb();
  if (r === null) return e;
  let s = h(sNe(), "projects"), n = ie(), p = await n.lstat(s).catch((m) => {
    if (!G(m)) e.errors++;
    return null;
  });
  if (p === null || !p.isDirectory()) return e;
  let i = await n.readdir(s).catch((m) => {
    if (!G(m)) e.errors++;
    return [];
  });
  for (let m of i) {
    if (!m.isDirectory()) continue;
    let g = h(s, m.name, "tiny_memory"), w = await n.lstat(g).catch((R) => {
      if (!G(R)) e.errors++;
      return null;
    });
    if (w === null || !w.isDirectory()) continue;
    await Q(g, r, n, e, { countEnumerationFailures: true });
  }
  return e;
}
async function wr() {
  let r = v(), s = Cb();
  if (s === null) return r;
  let n = h(sNe(), "projects"), p = ie(), i = await p.readdir(n).catch(() => []);
  for (let m of i) {
    if (!m.isDirectory()) continue;
    r = N(r, await De(h(n, m.name, "memory", "proposals"), s, p));
  }
  return N(r, await De(h(ba(), "proposals"), s, p));
}
var yr = "skill-proposal";
async function De(e, r, s) {
  let n = v();
  try {
    if ((await s.lstat(e)).isSymbolicLink()) return n;
  } catch (i) {
    if (!Kt(i)) n.errors++;
    return n;
  }
  let p = await s.readdir(e).catch((i) => {
    if (!G(i)) n.errors++;
    return [];
  });
  for (let i of p) {
    if (!i.isFile() || !i.name.endsWith(".md")) continue;
    let m = h(e, i.name);
    try {
      let { content: g, mtimeMs: w } = await cye(m, 0, Hye, fce, void 0, { truncateOnByteLimit: true });
      if (!(w < r.getTime())) continue;
      if (xa(g, m).frontmatter.type !== yr) continue;
      await s.unlink(m), n.messages++;
    } catch (g) {
      if (!G(g)) n.errors++;
    }
  }
  return await T(e, s), n;
}
async function Oho(e) {
  await we();
  let r = await bt(), s = { seedAdminRemoved: r.removed, seedAdminErrors: r.errors, seedAdminHeld: r.held, seedAdminRefused: c(r.refused) }, n = await re(), p = n === "asked" ? {} : { hooksUnasked: c(n) }, i = await e$n(e), m = fr()?.cleanupPeriodDays;
  if (i !== null) return a("tengu_retention_sweep", { skipped: true, skipReason: c(i), ...s, ...p }), gGo({ result: "skipped", skipReason: i, periodDays: m ?? TBt, usedDefault: m === void 0 }), i;
  a("tengu_retention_sweep", { phase: S("start"), ...s, ...p });
  let g = void 0, w, R = () => w ??= et(g);
  await using _ = { [Symbol.asyncDispose]: () => R().then(() => {
  }, () => {
  }) };
  await Ve();
  let D = await rt(), y = [D];
  y.push(await St(e)), y.push(await Dt()), y.push(await kt()), y.push(await Rt()), y.push(await _t()), y.push(await Pt()), y.push(await Ft(e)), y.push(await Ot()), y.push(await Tt()), y.push(await Wt()), y.push(await At(e)), y.push(await Lt(e)), y.push(await Nt(e)), y.push(await xt(e)), y.push(await Mt(e)), y.push(await jt(e)), y.push(await Bt()), y.push(await $t()), y.push(await Ht()), y.push(await Ut()), y.push(await er()), y.push(await Yt()), y.push(await zt()), y.push(await Gt()), y.push(await nr()), y.push(await sr()), y.push(await ir()), y.push(await ar()), y.push(await or()), y.push(await Xt()), y.push(await Jt()), y.push(await Zt()), y.push(await tr(e, g)), y.push(await rr()), y.push(await nt()), y.push(await ot()), y.push(await ct()), y.push(await lt()), y.push(await ut()), y.push(await ft()), y.push(await dt()), y.push(await pt()), y.push(await gt()), y.push(await st()), y.push(await it()), y.push(await at()), y.push(await mr()), y.push(await hr()), y.push(await wr());
  let C = { entriesPruned: 0, errors: 0 }, b = Cb();
  if (b !== null) {
    await hjs(b, e);
    let P = await FTs(b);
    y.push({ ...v(), messages: P.removed, errors: P.errors });
    let A = await JTo(b, g, false);
    if (A > 0) a("tengu_worktree_cleanup", { removed: A });
    if (await wt(Le(), b), zs("hipaa") && k("tengu_hipaa_history_retention_prune", true)) C = await yt(b), y.push({ ...v(), errors: C.errors });
  }
  y.push(await R());
  let O = y.reduce(N, v());
  a("tengu_retention_sweep", { phase: S("complete"), skipped: false, transcriptsDeleted: D.transcripts, transcriptsExemptedDesktop: D.transcriptsExemptedDesktop, sessionFilesDeleted: D.messages, artifactsDeleted: O.messages, filesRetainedFresh: O.filesRetainedFresh, filesPastCutoff: O.filesPastCutoff, errors: O.errors, historyEntriesPruned: C.entriesPruned, periodDays: m ?? TBt, usedDefault: m === void 0 }), gGo({ result: "complete", periodDays: m ?? TBt, usedDefault: m === void 0, transcriptsDeleted: D.transcripts, transcriptsExemptedDesktop: D.transcriptsExemptedDesktop, sessionFilesDeleted: D.messages, artifactsDeleted: O.messages, filesRetainedFresh: O.filesRetainedFresh, filesPastCutoff: O.filesPastCutoff, errorCount: O.errors, historyEntriesPruned: C.entriesPruned });
}
async function be(e, r, s) {
  if (r === null) return true;
  let n = await x.readdir(e, { withFileTypes: true }).catch(() => []);
  for (let p of n) {
    let i = h(e, p.name), m = await x.lstat(i).catch(() => null);
    if (m !== null && m.mtime > r) return true;
    if (s > 1 && p.isDirectory() && await be(i, r, s - 1)) return true;
  }
  return false;
}
export {
  Cb,
  Iho,
  LTs,
  Oho,
  Pho,
  bme,
  e$n,
  xho
};
