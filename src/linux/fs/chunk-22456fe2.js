// linux/fs/chunk-22456fe2.js — Claude Code 2.1.310（linux）模块 chunk-sdv7wcwv.js
import { FE } from "./files-directories.js";
import { _r, We } from "../plugins/chunk-0a4c51cf.js";
import { De } from "./async-hooks.93b1.js";
import { U } from "../context/not-admin-owned.js";
import { d, E, G, Vt } from "../telemetry/anthropic-workspace-id.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { _, te, t } from "./gitlab-runner-authentication-token.js";
import { mr } from "../workflows/chunk-5e65bb82.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { ZYn, wG, u8 } from "../permissions/light-daltonized.js";
import { hde } from "./chunk-81d6ccfe.js";
import { Ps } from "../shared/chunk-67236fa7.js";
import { o, u, me } from "../vendor/zod/string-format.js";
import { hg, la } from "../shared/first-truncation.js";
import { IM } from "../shared/chunk-65fb1c9c.js";
import { vt } from "../telemetry/chunk-a27d4004.js";
import { z } from "../shared/chunk-be29de51.js";
import { readdir as M, readFile as A, stat as I } from "fs/promises";
import { basename as w, extname as x, join as C } from "path";
import { isDeepStrictEqual as P } from "util";
class B {
  customThemeBases = void 0;
  userThemes = void 0;
  pluginThemes = Ps([]);
  systemTheme = void 0;
  systemThemeChanged = De();
  onSystemThemeChange = this.systemThemeChanged.subscribe;
  customThemeBase(e) {
    return this.customThemeBases?.get(e);
  }
  addCustomThemeBases(e) {
    this.customThemeBases ??= /* @__PURE__ */ new Map();
    for (let r of e) this.customThemeBases.set(r.slug, r.base);
  }
  commitUserThemes(e) {
    if (this.customThemeBases = new Map(e.map((r) => [r.slug, r.base])), this.addCustomThemeBases(this.pluginThemes.getState()), this.userThemes === void 0 || !P(this.userThemes, e)) this.userThemes = e;
    return this.userThemes;
  }
  cachedUserThemes() {
    return this.userThemes ?? [];
  }
  cachedSystemTheme() {
    return this.systemTheme;
  }
  setSystemTheme(e) {
    if (this.systemTheme === e) return;
    this.systemTheme = e, this.systemThemeChanged.emit();
  }
}
var R = new W(() => new B());
function qW() {
  return R.of(U().host);
}
var b = "custom:", N = 262144;
function pgo(e) {
  return qW().customThemeBase(e);
}
function DEr() {
  return qW().cachedUserThemes();
}
function mgo(e) {
  let r = qW();
  return r.cachedUserThemes().find((s) => s.slug === e) ?? r.pluginThemes.getState().find((s) => s.slug === e);
}
function _ut() {
  return C(Le(), "themes");
}
function hte(e) {
  return `${b}${e}`;
}
function uD(e) {
  return e.startsWith(b) ? e.slice(b.length) : null;
}
function k(e, r, s) {
  let i;
  try {
    i = te(r);
  } catch {
    t(`[theme] ${e}.json: invalid JSON`, { level: "warn" });
    return;
  }
  if (typeof i !== "object" || i === null || Array.isArray(i)) return;
  let m = i, h = ZYn(m.base) ? m.base : "dark", c = typeof m.name === "string" ? m.name : e, n = {};
  if (typeof m.overrides === "object" && m.overrides !== null) {
    let T = wG(h);
    for (let [g, y] of Object.entries(m.overrides)) if (Object.hasOwn(T, g) && u8(y)) n[g] = y;
  }
  return { slug: e, name: c, base: h, overrides: n, source: s };
}
async function S(e, r, s, i, m, h) {
  if (i && m) {
    let n;
    try {
      n = await i.read([m]);
    } catch (g) {
      if (h) h.readErrors++;
      t(`[theme] failed to read ${e}: ${d(g)}`, { level: "warn" });
      return;
    }
    if (!n.ok) {
      if (h) h.readErrors++;
      t(`[theme] failed to read ${e}: ${vt(n.error)}`, { level: "warn" });
      return;
    }
    let T = n.value.items[0];
    return T?.found ? k(r, Buffer.from(T.value).toString("utf8"), s) : void 0;
  }
  let c;
  try {
    if ((await I(e)).size > N) {
      t(`[theme] ${e} exceeds 256KB; skipping`, { level: "warn" });
      return;
    }
    c = await A(e, "utf8");
  } catch (n) {
    if (!G(n)) t(`[theme] failed to read ${e}`, { level: "warn" });
    return;
  }
  return k(r, c, s);
}
async function HEr(e, r, s = "") {
  return await D(e, r, s) ?? [];
}
async function D(e, r, s, i) {
  if (i && r === "user" && e === _ut()) {
    let c = { namespace: "userConfigDir", dir: "themes" }, n = [], T = await la((a) => i.listEntries(c, a === void 0 ? void 0 : { cursor: a }), (a) => {
      for (let f of a) {
        if (f.kind !== "key") continue;
        let l = f.key.namespace === "userConfigDir" ? f.key.relPath.at(-1) ?? "" : "";
        if (x(l) !== ".json") continue;
        if ((f.size ?? 0) > N) {
          t(`[theme] ${C(e, l)} exceeds 256KB; skipping`, { level: "warn" });
          continue;
        }
        n.push({ slug: s + w(l, ".json"), name: l });
      }
    }).catch((a) => (t(`[theme] list themes failed: ${d(a)}; keeping the previously loaded themes (if any)`, { level: "warn" }), null));
    if (T === null) return null;
    switch (T.status) {
      case "done":
        break;
      case "error":
        return t(`[theme] list themes failed: ${vt(T.error)}; keeping the previously loaded themes (if any)`, { level: "warn" }), null;
      case "capped":
        return t(`[theme] list themes exceeded ${hg} pages; keeping the previously loaded themes (if any)`, { level: "warn" }), null;
    }
    if (n.length === 0) return [];
    let g = n.map((a) => We.userConfigDir("themes", [a.name])), y;
    try {
      y = await i.read(g);
    } catch (a) {
      t(`[theme] batched theme read failed: ${d(a)}`, { level: "warn" });
    }
    let v = [];
    if (y?.ok) {
      for (let [a, f] of y.value.items.entries()) {
        if (!f.found) continue;
        let l = k(n[a].slug, Buffer.from(f.value).toString("utf8"), r);
        if (l) v.push(l);
      }
      return v;
    }
    let j = { readErrors: 0 };
    for (let [a, f] of n.entries()) {
      let l = await S(C(e, f.name), f.slug, r, i, g[a], j);
      if (l) v.push(l);
    }
    if (v.length === 0 && j.readErrors > 0) return t(`[theme] could not read any of ${n.length} listed theme files; keeping the previously loaded themes (if any)`, { level: "warn" }), null;
    return v;
  }
  let m;
  try {
    m = await M(e);
  } catch (c) {
    if (E(c) === "ENOTDIR") {
      let n = await S(e, s + w(e, ".json"), r);
      return n ? [n] : [];
    }
    if (!Vt(c)) t(`[theme] readdir ${e} failed`, { level: "warn" });
    return [];
  }
  let h = [];
  for (let c of m) {
    if (x(c) !== ".json") continue;
    let n = await S(C(e, c), s + w(c, ".json"), r);
    if (n) h.push(n);
  }
  return h;
}
var PMt = IM(async (e) => {
  let r = qW(), s = mr("themes") ? [] : await D(_ut(), "user", "", e) ?? r.cachedUserThemes();
  return s.sort((i, m) => i.name.localeCompare(m.name)), r.commitUserThemes(s);
}), F = p(() => u({ name: o(), base: o(), overrides: me(o(), o()) }));
async function K7t(e, r) {
  let s = { name: e.name, base: e.base, overrides: e.overrides }, i = `${e.slug}.json`;
  if (z() && r !== void 0 && _r(i)) {
    let m = _(s, null, 2) + `
`, h = await r.write(We.userConfigDir("themes", [i]), m, { publishDiscipline: "atomic", mode: 438 & ~process.umask() });
    if (!h.ok) throw t(`[theme] v5 save ${e.slug} failed: ${vt(h.error)}`, { level: "warn" }), Error("theme save failed");
    return;
  }
  await hde(C(_ut(), `${e.slug}.json`), F, { defaultValue: () => ({ name: e.slug, base: "dark", overrides: {} }), ensureDir: true, indent: 2, trailingNewline: true }).write(s);
}
function ggo(e) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "theme";
}
function LEr(e) {
  if (mr("themes")) return () => {
  };
  let r = FE.watch(_ut(), { persistent: true, ignoreInitial: true, depth: 0, awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 }, ignorePermissionErrors: true });
  return r.on("add", e), r.on("change", e), r.on("unlink", e), r.on("error", (s) => t(`[theme] watcher error: ${d(s)}`, { level: "warn" })), () => void r.close();
}
export {
  DEr,
  HEr,
  K7t,
  LEr,
  PMt,
  _ut,
  ggo,
  hte,
  mgo,
  pgo,
  qW,
  uD
};
