// plugins/plugin-delisted-enforcement.4b3d.js — Claude Code 2.1.310 模块 chunk-4b3dyyjq.js
import { wn, ke, no } from "../context/not-admin-owned.ersa.js";
import { S, c } from "../agents/third-party.ydpb.js";
import { R, d, v } from "../telemetry/anthropic-workspace-id.36ys.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { _, ee, ie, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { mT, Dr, jSe, km, md } from "../shell/invalid-type.qnva.js";
import { $0, E8 } from "./plugin-enabled-for-session.9xx8.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { Hn } from "../fs/utf-8.7pve.js";
import { Wc } from "../fs/utf-8.fmbx.js";
import { je } from "./chunk-x0a7sawk.js";
import { Uy, Tm, xpe } from "./skills-dir.cemw.js";
import { wM } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { Sp } from "./not-found.2nbd.js";
import { $d, Het } from "./entry-refused.bp7z.js";
import { Ie } from "./chunk-hxt89a41.js";
import { yXe, aS, Y$, Zsn, LFs, Ic, Rd, zle, hxo, hFt, Ik, k2, BFs, Sc, p3, SFt } from "../core/conversation-engine.31gx.js";
import { Cfe } from "./plugin-marketplace-resolve.ses6.js";
import { Et } from "../telemetry/chunk-q6tk46bn.js";
import { z } from "../shared/chunk-mxa4mwnj.js";
import { readFile as j } from "fs/promises";
import { join as x } from "path";
var L = "flagged-plugins.json", U = 1728e5;
function A() {
  return x($d(), L);
}
function F(e) {
  let r = ee(e);
  if (typeof r !== "object" || r === null || !("plugins" in r) || typeof r.plugins !== "object" || r.plugins === null) return {};
  let s = r.plugins, g = {};
  for (let [o, n] of Object.entries(s)) if (n && typeof n === "object" && "flaggedAt" in n && typeof n.flaggedAt === "string") {
    let u = { flaggedAt: n.flaggedAt };
    if ("seenAt" in n && typeof n.seenAt === "string") u.seenAt = n.seenAt;
    g[o] = u;
  }
  return g;
}
var M = /* @__PURE__ */ new Set(["ENOSPC", "EROFS", "EACCES", "ENOENT", "ENOTDIR"]), B = /* @__PURE__ */ new Set([...M, "EEXIST", "EISDIR", "AbsentParent", "UnexpectedAbsent"]);
function b(e) {
  return z() && e !== void 0 && yXe("flagged") !== null ? e : void 0;
}
async function h(e) {
  let r = b(e);
  if (r) {
    let g = await r.read([je.pluginRegistry("flagged")]), o = g.ok ? g.value.items[0] : void 0;
    if (!o?.found) return {};
    let n = o.value;
    try {
      return F(Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString("utf-8"));
    } catch {
      return {};
    }
  }
  let s = A();
  try {
    let g = await j(s, { encoding: "utf-8" });
    return F(g);
  } catch {
    return {};
  }
}
async function I(e, r) {
  let s = b(r);
  if (s) {
    let o = await s.write(je.pluginRegistry("flagged"), _({ plugins: e }, null, 2));
    if (o.ok) {
      Ie().flaggedPlugins = e;
      return;
    }
    let n = "telemetryCode" in o.error ? o.error.telemetryCode : void 0;
    if (n !== void 0 && B.has(n)) t(`Failed to persist flagged plugins: ${Et(o.error)}`, { level: "error" });
    else l(new R(`Failed to persist flagged plugins: ${o.error.code}${n === void 0 ? "" : ` ${n}`}`, "flagged plugins v5 write failed"));
    return;
  }
  let g = A();
  try {
    await ie().mkdir($d());
    let o = _({ plugins: e }, null, 2);
    await Hn(g, o, 384), Ie().flaggedPlugins = e;
  } catch (o) {
    let n = v(o);
    if (n !== void 0 && M.has(n)) t(`Failed to persist flagged plugins: ${o}`, { level: "error" });
    else l(o);
  }
}
async function T(e) {
  let r = await h(e), s = Date.now(), g = false;
  for (let [o, n] of Object.entries(r)) if (n.seenAt && s - new Date(n.seenAt).getTime() >= U) delete r[o], g = true;
  if (Ie().flaggedPlugins = r, g) await I(r, e);
}
function DRt() {
  return Ie().flaggedPlugins ?? {};
}
async function O(e, r) {
  let s = Ie();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await h(r);
  let g = { ...s.flaggedPlugins, [e]: { flaggedAt: (/* @__PURE__ */ new Date()).toISOString() } };
  await I(g, r), t(`Flagged plugin: ${e}`);
}
async function Cls(e, r) {
  let s = Ie();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await h(r);
  let g = (/* @__PURE__ */ new Date()).toISOString(), o = false, n = { ...s.flaggedPlugins };
  for (let u of e) {
    let f = n[u];
    if (f && !f.seenAt) n[u] = { ...f, seenAt: g }, o = true;
  }
  if (o) await I(n, r);
}
async function Tls(e, r) {
  let s = Ie();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await h(r);
  if (!(e in s.flaggedPlugins)) return;
  let { [e]: g, ...o } = s.flaggedPlugins;
  s.flaggedPlugins = o, await I(o, r);
}
function G(e, r, s) {
  let g = new Set(r.plugins.map((u) => u.name)), o = `@${s}`, n = [];
  for (let u of Object.keys(e.plugins)) {
    if (!u.endsWith(o)) continue;
    let f = u.slice(0, -o.length), y = r.renames && SFt(f, r.renames, g)?.kind === "renamed";
    if (!g.has(f) && !y) n.push(u);
  }
  return n;
}
async function LRn(e) {
  await T(e);
  let r = z() && e !== void 0 ? await p3(e) : Sc(), s = DRt(), g = await Rd(e), o = [];
  for (let [n, u] of Object.entries(g)) try {
    if (n.toLowerCase() === Uy) continue;
    if (km(u.source) && !Object.keys(r.plugins).some((m) => m.endsWith(`@${n}`))) continue;
    let f = km(u.source) ? await Ik(n, e, { registryEntry: u }) : await k2(n, e);
    if (f === null) {
      if (Object.keys(r.plugins).some((m) => m.endsWith(`@${n}`))) a("tengu_plugin_delisted_enforcement", { outcome: S("scan-skipped-no-catalog"), is_official_marketplace: false });
      continue;
    }
    if (!f.forceRemoveDeletedPlugins) continue;
    let y = G(r, f, n);
    for (let m of y) {
      if (m in s) continue;
      let E = r.plugins[m] ?? [];
      if (!E.some((p) => p.scope === "user" || p.scope === "project" || p.scope === "local")) continue;
      for (let p of E) {
        let { scope: k } = p;
        if (k !== "user" && k !== "project" && k !== "local") continue;
        try {
          let P = await Cfe(m, k, true, e, { settingsStillOn: "remove-anyway" });
          a("tengu_plugin_delisted_enforcement", { outcome: P.success ? S("uninstalled") : S("uninstall-failed"), scope: c(k), ...!P.success && { error_kind: c(E8(P.message)) }, ...$0(m, Sp()) });
        } catch (P) {
          t(`Failed to auto-uninstall delisted plugin ${m} from ${k}: ${d(P)}`, { level: "error" }), a("tengu_plugin_delisted_enforcement", { outcome: S("uninstall-failed"), scope: c(k), error_kind: c(E8(P)), ...$0(m, Sp()) });
        }
      }
      await O(m, e), o.push(m);
    }
  } catch (f) {
    t(`Failed to check for delisted plugins in "${n}": ${d(f)}`, { level: "warn" }), a("tengu_plugin_delisted_enforcement", { outcome: S("scan-failed"), error_kind: c(E8(f)), _PROTO_marketplace_name: n, is_official_marketplace: md(n) });
  }
  return o;
}
import { isAbsolute as K, resolve as W } from "path";
function sZr(e, r, s) {
  let g = [], o = [], n = [];
  for (let [u, f] of Object.entries(e)) {
    let y = aS(r, u), m = N(f.source, s?.projectRoot);
    if (!y) g.push(u);
    else if (f.sourceIsFallback) n.push(u);
    else if (!wn(m, y.source)) o.push({ name: u, declaredSource: m, materializedSource: y.source });
    else n.push(u);
  }
  return { missing: g, sourceChanged: o, upToDate: n };
}
async function DRn(e) {
  let r = Y$();
  if (Object.keys(r).length === 0) return { installed: [], updated: [], failed: [], upToDate: [], skipped: [] };
  let s = e?.storageV5, g;
  try {
    g = await Ic(s);
  } catch (i) {
    t(`reconciler: failed to load known_marketplaces.json, treating as empty: ${d(i)}`, { level: "error" }), g = {};
  }
  let o = sZr(r, g, { projectRoot: ke() }), n = [...o.missing.map((i) => ({ name: i, source: N(r[i].source), action: "install" })), ...o.sourceChanged.map(({ name: i, declaredSource: p }) => ({ name: i, source: p, action: "update" }))], u = [], f = [], y = [];
  for (let i of n) {
    if (LFs(i.name)) {
      t(`[reconcile] '${i.name}' is the built-in ${Dr}'s name: a settings entry under it adds no marketplace. Only an autoUpdate from ${Zsn} counts, and only while the Directory is turned on.`), u.push(i.name);
      continue;
    }
    let p = hFt(i.name);
    if (mT(i.name) || p !== void 0) {
      let P = `${p === void 0 ? jSe(i.name) : hxo(i.name, p)} This marketplace was not added. Remove it from extraKnownMarketplaces in settings.`;
      t(`[reconcile] '${i.name}' ${P}`, { level: "warn" }), y.push({ name: i.name, error: P }), e?.onProgress?.({ type: "failed", name: i.name, error: P });
      continue;
    }
    if (e?.skip?.(i.name, i.source)) {
      u.push(i.name);
      continue;
    }
    if (Het(i.name)) {
      let k = `not materialized: names starting with "${xpe}" are reserved for marketplaces hosted on claude.ai — rename the declaration`;
      t(`[reconcile] '${i.name}' ${k}`, { level: "warn" }), y.push({ name: i.name, error: k }), e?.onProgress?.({ type: "failed", name: i.name, error: k });
      continue;
    }
    if (i.action === "update" && Tm(i.source) && !await Wc(i.source.path)) {
      t(`[reconcile] '${i.name}' declared path does not exist; keeping materialized entry`), u.push(i.name);
      continue;
    }
    f.push(i);
  }
  let m = [], E = [];
  if (f.length > 0) {
    t(`[reconcile] ${f.length} marketplace(s): ${f.map((i) => `${i.name}(${i.action})`).join(", ")}`);
    for (let i = 0; i < f.length; i++) {
      let { name: p, source: k, action: P } = f[i];
      e?.onProgress?.({ type: "installing", name: p, action: P, index: i + 1, total: f.length });
      try {
        let w = await zle(k, void 0, s, p);
        if (P === "install") m.push(p);
        else E.push(p);
        e?.onProgress?.({ type: "installed", name: p, alreadyMaterialized: w.alreadyMaterialized });
      } catch (w) {
        let D = d(w);
        y.push({ name: p, error: D }), e?.onProgress?.({ type: "failed", name: p, error: D }), t(`[reconcile] failed to ${P} marketplace '${p}': ${D}`, { level: "error" });
      }
    }
  }
  return await BFs(s), { installed: m, updated: E, failed: y, upToDate: o.upToDate, skipped: u };
}
function N(e, r) {
  if ((e.source === "directory" || e.source === "file") && !K(e.path)) {
    let s = no(), g = s ?? r ?? ke(), o = s === null ? wM(g) : null;
    return { ...e, path: W(o ?? g, e.path) };
  }
  return e;
}
export {
  Cls,
  DRn,
  DRt,
  LRn,
  Tls,
  sZr
};
