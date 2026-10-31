// linux/git/plugin-directory-catalog-load.js — Claude Code 2.1.310（linux）模块 chunk-d2975tv6.js
import { c } from "../agents/third-party.js";
import { R, N, d, E, G } from "../telemetry/anthropic-workspace-id.js";
import { DB, pE } from "../fs/node-modules.js";
import { _, te, ie, fW, hW, wC, lm, Xkn, t } from "../fs/gitlab-runner-authentication-token.js";
import { Mt, gd } from "../terminal/chunk-3ca478a4.js";
import { J } from "../context/not-admin-owned.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { u6 } from "./chunk-c16cb6b4.js";
import { $s } from "../shared/chunk-4563156b.js";
import { Dn } from "../fs/utf-8.8f8e.js";
import { ws } from "../fs/tempdir-owner-mismatch.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Sn, mc } from "../shell/invalid-type.js";
import { Fd, JXn, eS } from "../plugins/entry-refused.js";
import { OE, c5n, Fdn, LD } from "../plugins/plugin-enabled-for-session.js";
import { lv } from "../telemetry/chunk-ce222b3e.js";
import { o, u, me, A } from "../vendor/zod/string-format.js";
var v = "https, http, ssh (also written git+ssh or ssh+git), user@host:path, or a local file:// address with no host. git:// isn't supported because it isn't encrypted.", q = /^(?!-)[A-Za-z0-9._-]+@(?:(?!-)[A-Za-z0-9._-]+|\[[0-9A-Fa-f:.]+\]):(?!\/\/)/, V = /^(?:(?!-)[A-Za-z0-9._-]+|\[[0-9A-Fa-f:.]+\])$/, Z = /^(?!-)[A-Za-z0-9._-]+$/;
function D(e) {
  if (e === wC) return e;
  return gd(Mt(e, 200)) || "“”";
}
function ZNr(e) {
  if (/[\u0000-\u001f\u007f]/.test(e)) throw new R(`Invalid git URL: ${D(lm(e))} — control characters are not allowed`, "git URL contains control characters");
  if (e.includes("%00")) throw new R(`Invalid git URL: ${D(lm(e))} — "%00" in a git address means different things to different versions of git, so it is not allowed. Remove it.`, "git URL contains %00");
  if (hW(e)) throw new R(`Invalid git URL: ${D(lm(e))} — git can read a square bracket (also written %5B or %5D) as marking a server name or where a local path starts, so it could connect to a different server or open a different folder than this address names. In a server address, brackets may only surround an IPv6 address, as in git@[2001:db8::1]:repo.git. Remove them, or rename the folder whose name has them.`, "git URL has a square bracket that git could read as the host");
  if (q.test(e)) {
    if (!e.includes("://")) return e;
    throw new R(`Invalid git URL: an address written as user@host:path can't contain "://", because git then reads the text before "://" as a protocol name, as in https://. Remove the "://".`, "scp-like git URL contains ://");
  }
  let i;
  try {
    i = new URL(e);
  } catch {
    throw new R(`Invalid git URL: ${D(lm(e))} (it could not be read as a URL). Supported: ${v}`, "Invalid git URL");
  }
  if (!["https:", "http:", "ssh:", "file:", "git+ssh:", "ssh+git:"].includes(i.protocol)) {
    let r = lm(e), n = e.slice(0, e.indexOf(":") + 1).toLowerCase();
    throw new R(r === e ? `Invalid git URL protocol: ${gd(Mt(i.protocol, 40))}. Supported: ${v}` : n !== "" && r.toLowerCase().startsWith(n) ? `Invalid git URL: ${D(r)}. Supported: ${v}` : `Invalid git URL. Supported: ${v}`, "Invalid git URL protocol");
  }
  if ((i.protocol === "https:" || i.protocol === "http:") && u6(e)) throw new R(`Invalid git URL: ${D(lm(e))} — a backslash before the first "/" can make git connect to a different server than this address names. Remove it, or write it as %5C if it is part of a user name.`, "git URL has a backslash in its authority");
  if (["ssh:", "git+ssh:", "ssh+git:"].includes(i.protocol)) {
    let r = /^[a-z][a-z0-9+.-]*:\/\/([^/]*)/i.exec(e)?.[1] ?? "", n = r.lastIndexOf("@"), s = n === -1 ? void 0 : r.slice(0, n), y = n === -1 ? r : r.slice(n + 1), h = /^(.*?)(?::([0-9]{1,5}))?$/.exec(y)?.[1] ?? y;
    if (/[?#]/.test(e) || !V.test(h) || s !== void 0 && !Z.test(s)) {
      let b = /^[\u0000-\u0020]*[a-z][a-z0-9+.-]*:(?:\/\/)?([^/?#]*)/i.exec(e), k = b?.[1] ?? "", S = (b?.[0].length ?? 0) - k.length, U = k.slice(0, Math.max(0, k.lastIndexOf("@"))), C = U.search(Xkn), Y = C !== -1 ? e.slice(0, S) + `${U.slice(0, C)}:***` + e.slice(S + U.length) : e, F = b?.[0].includes("//") === true, K = F && k !== "" && !/:(?!\d+$)|%3a/i.test(k), j = e.includes("@") && !k.includes("@") && !K || k.includes("@") && e.includes("@", S + k.length), W = /%40/i.test(e) || lm(e) === wC ? wC : j || !F ? lm(e) : Y.replace(/[?#][\s\S]*$/, (H) => `${H[0]}***`);
      throw new R(`Invalid ssh git URL: the host must be a hostname or bracketed IPv6 literal (optionally :port), the user a plain name, and the URL may not carry ? or # (${D(W)})`, "ssh git URL host or user has disallowed characters");
    }
  }
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(e)) throw new R(`Invalid git URL: ${D(lm(e))} — a scheme URL must be spelled scheme://…`, "git URL scheme without //");
  if (i.protocol === "file:" && (DB(X(e)) || i.host !== "" || /^file:\/\/[^/\\]/i.test(e) || /^file:[\\/]*[\\]/i.test(e) || pE(Q(i)))) throw new R(`Refusing git URL ${D(lm(e))}: a file: URL must name a local path (no host, no network-shaped path).${/^file:\/\/[a-z]:/i.test(e) ? " A drive letter such as C: counts as a local path only on Windows." : ""}`, "file git URL names a host or network path");
  return e;
}
function X(e) {
  try {
    return decodeURIComponent(e.replace(/^file:\/\//i, ""));
  } catch {
    return "/../malformed-percent-encoding";
  }
}
function Q(e) {
  try {
    return decodeURIComponent(e.pathname);
  } catch {
    return "//malformed-percent-encoding/";
  }
}
function l7e(e) {
  try {
    return ZNr(e), null;
  } catch (i) {
    return N(i);
  }
}
function vyt(e) {
  return l7e(e) === null;
}
function Zne(e) {
  return c5n(mc(e).marketplace);
}
function Idn({ pluginId: e, surface: i, replaced: r }) {
  return { ...i !== void 0 && { surface: c(i) }, replaced: r, is_directory: Zne(e) };
}
function dzs(e) {
  switch (a("tengu_plugin_directory_catalog_load", { outcome: c(e.outcome), trigger: c(e.trigger), pages: e.pages, listing_count: e.listingCount, installable_count: e.tally.installable, skipped_unparseable: e.tally.unparseable, skipped_other_surface: e.tally.skipped.other_surface, skipped_no_pin: e.tally.skipped.no_pin, skipped_bad_url: e.tally.skipped.bad_url, skipped_bad_path: e.tally.skipped.bad_path, name_clashes: e.tally.nameClashes, ...e.namesRepaired !== void 0 && { names_repaired: e.namesRepaired }, duration_ms: e.durationMs, ...e.cacheAgeMin !== void 0 && { cache_age_min: e.cacheAgeMin }, ...e.outcome === "stale_failed" && { incomplete_walk: e.incompleteWalk }, ...e.outcome === "refused" && { refusal: c(e.refusal) } }), e.outcome) {
    case "fresh_cache":
    case "walked":
      g("plugin_directory_catalog");
      return;
    case "walked_names_only":
    case "walked_not_written":
    case "stale_failed":
    case "stale_empty":
    case "stale_duplicate_id":
    case "backoff":
      f("plugin_directory_catalog", e.outcome);
      return;
    case "incomplete":
    case "duplicate_id":
    case "backoff_cold":
      m("plugin_directory_catalog", e.outcome);
      return;
    case "refused":
      switch (e.refusal) {
        case "not-served":
        case "failed":
          m("plugin_directory_catalog", e.refusal);
          return;
        case "policy":
          if (!e.blockedByOrganization) f("plugin_directory_catalog", "policy_not_loaded");
          return;
      }
  }
}
function czs({ directoryRows: e, totalRows: i, foldedRows: r, loadMs: n, entry: s, directoryState: y, knownMarketplaceCount: l }) {
  a("tengu_plugin_discover_shown", { directory_rows: e, total_rows: i, folded_rows: r, load_ms: n, entry: c(s), directory_state: c(y), known_marketplace_count: l });
}
function d7e({ fromPluginId: e, toPluginId: i, surface: r, managedNames: n, result: s }) {
  {
    let y = { surface: c(r), from_is_directory: Zne(e), to_is_directory: Zne(i) };
    if (s.outcome === "bad") {
      m("plugin_directory_switch", s.code, y);
      return;
    }
    if (s.isPrimary) if (s.outcome === "sad") f("plugin_directory_switch", s.code, y);
    else g("plugin_directory_switch", y);
    let l = mc(e), h = Fdn(l.name, l.marketplace, n);
    a("tengu_plugin_marketplace_switched", { ...y, scope_changed: s.scopeChanged, stayed_disabled: s.stayedDisabled, data_dir_carried: s.dataDirCarried, pin_changed: s.pinChanged, replaced_count: s.replacedCount, is_primary: s.isPrimary, from_plugin_id_hash: h.plugin_id_hash, from_plugin_scope: h.plugin_scope, from_plugin_name_redacted: h.plugin_name_redacted, from_marketplace_name_redacted: h.marketplace_name_redacted, ...LD(i, n) });
  }
}
function jDe({ enabled: e, surface: i, failure: r }) {
  {
    let n = { enabled: e, surface: c(i) };
    if (r !== void 0) {
      m("plugin_directory_toggle", r, n);
      return;
    }
    g("plugin_directory_toggle", n), a("tengu_plugin_directory_toggled", n);
  }
}
function c7e(e) {
  {
    let i = OE();
    if (i.blockedLogged.has(e)) return;
    i.blockedLogged.add(e), a("tengu_plugin_directory_blocked", { by: c(e) });
  }
}
function Odn({ reason: e, sourceKind: i, surface: r }) {
  a("tengu_marketplace_add_failed", { reason: c(e), source_kind: c(i === "github" || i === "git" || i === "url" ? i : i === "file" || i === "directory" ? "local" : "other"), surface: c(r) });
}
import { join as ae } from "path";
import { constants as ee } from "fs";
import { lstat as re, open as oe } from "fs/promises";
import { join as ne } from "path";
async function u7e(e, i, r) {
  if (J()) return { state: "absent" };
  let n = ne(Fd(), e), s = r === "plugin catalog cache" ? "Plugin catalog cache" : `Plugin directory ${r}`;
  try {
    if ($s === 0 && (await re(n)).isSymbolicLink()) return t(`${s} is a symbolic link; ignoring it`, { level: "warn" }), { state: "unusable", readFailed: false };
    await using y = await oe(n, ee.O_RDONLY | $s | ws);
    if (!(await y.stat()).isFile()) return t(`${s} is not a file; ignoring it`, { level: "warn" }), { state: "unusable", readFailed: false };
    let l = await fW(y, i + 1, "file");
    if (l.length > i) return t(`${s} is too large; ignoring it`, { level: "warn" }), { state: "unusable", readFailed: false };
    return { state: "read", json: te(l.toString("utf-8")) };
  } catch (y) {
    if (G(y)) return { state: "absent" };
    let l = E(y);
    if (l === "ELOOP" || l === "EMLINK") return t(`${s} is a symbolic link; ignoring it`, { level: "warn" }), { state: "unusable", readFailed: false };
    return t(`${s} could not be read: ${d(y)}`), { state: "unusable", readFailed: !(y instanceof SyntaxError) };
  }
}
var T = "plugin-directory-bindings.json", x = 1, M = 1048576, Mdn = 4096, se = p(() => u({ schemaVersion: A(x), bindings: me(o(), u({ repositoryKey: o().min(1).max(Mdn) }).optional().catch(void 0)) }));
function qb(e) {
  let i = e.split("@");
  return i.length === 2 && i[1] === Sn;
}
function zC(e, i) {
  if (!qb(i)) return [];
  let r = [...e].filter((n) => qb(n) && JXn(n, i));
  return [...r.filter((n) => n === i), ...r.filter((n) => n !== i)];
}
var O = /* @__PURE__ */ new WeakSet();
function Fhe(e) {
  return O.has(e);
}
async function yde() {
  let e = await z();
  if (e.readFailed) O.add(e.bindings);
  return e.bindings;
}
async function l5n(e, i, r) {
  if (!qb(e)) return;
  if (i !== void 0 && !B()) return;
  await L((n) => {
    if (i === void 0) for (let s of zC(n.keys(), e)) n.delete(s);
    else if (!(r?.keepExisting === true && zC(n.keys(), e).length > 0)) n.set(e, i);
  });
}
async function Ddn(e, i) {
  if (!qb(e)) return "none";
  if (!i) {
    let r = await L(() => {
    });
    if (Fhe(r)) return "unreadable";
    return zC(r.keys(), e).length > 0 ? "held" : "none";
  }
  return await l5n(e, void 0), "none";
}
async function f7e(e, i) {
  return p7e([[e, i ?? []]]);
}
async function p7e(e) {
  {
    let i = false, r = /* @__PURE__ */ new Map();
    for (let [n, s] of e) {
      if (!qb(n)) continue;
      i = true;
      let y = s.find((l) => l.directoryRepositoryKey !== void 0)?.directoryRepositoryKey;
      if (y !== void 0) r.set(n, y);
    }
    if (!i) return /* @__PURE__ */ new Map();
    if (r.size === 0 || !B()) return yde();
    return L((n) => {
      for (let [s, y] of r) if (zC(n.keys(), s).length === 0) n.set(s, y);
    });
  }
  return /* @__PURE__ */ new Map();
}
function ZUt(e) {
  return Boolean(e.directoryRepositoryKey);
}
async function Eyt(e, i) {
  {
    if (!qb(e)) return "not-directory";
    let r = (i ?? []).find((l) => l.directoryRepositoryKey)?.directoryRepositoryKey, n = (l) => l.has(e) || zC(l.keys(), e).some((h) => l.get(h) === r);
    await L((l) => {
      if (r !== void 0 && !n(l)) l.set(e, r);
    });
    let s = await L(() => {
    }), y = !Fhe(s);
    if (y && (r === void 0 ? zC(s.keys(), e).length > 0 : n(s))) return "held";
    if (r === void 0) return "no-key";
    return y && e.length > 1024 ? "cannot-hold" : "not-persisted";
  }
  return "not-directory";
}
async function e$r(e, i, r) {
  if (!qb(e)) return true;
  if (!r.some(ZUt)) return await Eyt(e, i) !== "not-persisted";
  return await f7e(e, i), true;
}
function B() {
  return lv() && eS() === null;
}
async function z() {
  let e = /* @__PURE__ */ new Map();
  {
    let i = await u7e(T, M, "bindings file"), r = i.state === "read" ? se().safeParse(i.json) : void 0;
    if (r?.success) {
      for (let [n, s] of Object.entries(r.data.bindings)) if (s !== void 0 && n.length <= 1024) e.set(n, s.repositoryKey);
    }
    return { bindings: e, readFailed: i.state === "unusable" || i.state === "read" && r?.success !== true };
  }
  return { bindings: e, readFailed: false };
}
async function L(e) {
  let i = /* @__PURE__ */ new Map();
  {
    let r = OE(), n = r.bindingsWriteTail, { promise: s, resolve: y } = Promise.withResolvers();
    r.bindingsWriteTail = s, await n;
    try {
      let l = await z();
      if (l.readFailed) O.add(i);
      for (let [w, b] of l.bindings) i.set(w, b);
      e(i);
      for (let [w, b] of [...i]) if (w.length > 1024 || b === "") i.delete(w);
      let h = i.size !== l.bindings.size || [...i].some(([w, b]) => l.bindings.get(w) !== b);
      if (h && l.readFailed) t("Plugin directory bindings file could not be used; leaving it as it is", { level: "warn" });
      else if (h && J()) t("Plugin directory bindings file not written: this session saves nothing to disk");
      else if (h) {
        let w = _({ schemaVersion: x, bindings: Object.fromEntries([...i].map(([b, k]) => [b, { repositoryKey: k }])) });
        if (Buffer.byteLength(w) > M) t("Plugin directory bindings file would grow past 1 MB, the most that is read back; leaving it as it is", { level: "warn" });
        else await ie().mkdir(Fd()), await Dn(ae(Fd(), T), w, 384);
      }
    } catch (l) {
      t(`Failed to update plugin directory bindings file: ${d(l)}`, { level: "warn" });
    } finally {
      y();
    }
  }
  return i;
}
export {
  Ddn,
  Eyt,
  Fhe,
  Idn,
  Mdn,
  Odn,
  ZNr,
  ZUt,
  Zne,
  c7e,
  czs,
  d7e,
  dzs,
  e$r,
  f7e,
  jDe,
  l5n,
  l7e,
  p7e,
  qb,
  u7e,
  vyt,
  yde,
  zC
};
