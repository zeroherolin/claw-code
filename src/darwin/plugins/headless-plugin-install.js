// darwin/plugins/headless-plugin-install.js — Claude Code 2.1.310（darwin）模块 chunk-c71c3891.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { _, ee, ie, t } from "../fs/gitlab-runner-authentication-token.js";
import { LTt } from "../shared/async-hooks.9e79.js";
import { Wir } from "../shell/invalid-type.js";
import { tTt } from "./skills-dir.js";
import { Ie } from "./chunk-c198f87f.js";
import { O7, _Wn, vvo, aOs, lOs, ORr, cOs, uOs, S7e, Y$, Rd, j6n, Jge, Ine, Zge, pi, M_, C7e } from "../core/conversation-engine.js";
import { DRn, LRn } from "./plugin-delisted-enforcement.js";
import { z } from "../shared/chunk-be29de51.js";
import { readFile as P } from "fs/promises";
import { join as h } from "path";
async function M() {
  try {
    let n = await P(vvo(), "utf-8"), e = tTt().safeParse(ee(n));
    if (!e.success) return t(`Invalid known_marketplaces.json in zip cache: ${e.error.message}`, { level: "error" }), {};
    return e.data;
  } catch {
    return {};
  }
}
async function S(n) {
  await ORr(vvo(), _(n, null, 2));
}
async function F(n, e) {
  let s = _Wn();
  if (!s) return;
  let r = await I(e);
  if (r !== null) {
    let o = cOs(n);
    await ORr(h(s, o), r);
  }
}
async function I(n) {
  let e = [h(n, ".claude-plugin", "marketplace.json"), h(n, "marketplace.json"), n];
  for (let s of e) try {
    return await P(s, "utf-8");
  } catch {
  }
  return null;
}
async function w(n) {
  let e = await Rd(n), s = Object.entries(Wir(e)).filter(([i, c]) => Jge(i, c) === null && !Ine(i, c));
  for (let [i, c] of s) {
    if (!c.installLocation) continue;
    try {
      await F(i, c.installLocation);
    } catch (f) {
      t(`Failed to save marketplace JSON for ${i}: ${f}`);
    }
  }
  let o = { ...await M(), ...Object.fromEntries(s) };
  await S(o);
}
function tat(n, e, s) {
  let r = Ie(), o = (r.headlessInstallPass ?? Promise.resolve()).then(() => v(n, e, s));
  return r.headlessInstallPass = o.then(() => {
    return;
  }, () => {
    return;
  }), o;
}
async function v(n, e, s) {
  let r = O7();
  t(`installPluginsForHeadless: starting${r ? " (zip cache mode)" : ""}`);
  let o = await j6n(), i, c = () => i !== void 0 && Ie().pluginLoadCacheOnly === i;
  if (o) S7e(), M_("headlessPluginInstall: seed marketplaces registered"), i = C7e(e, "headlessPluginInstall");
  if (r) await ie().mkdir(aOs()), await ie().mkdir(lOs());
  let f = Object.keys(Y$()).length, g = { marketplaces_installed: 0, delisted_count: 0 }, p = o;
  try {
    if (f === 0) t("installPluginsForHeadless: no marketplaces declared");
    else {
      let u = await LTt("headless_marketplace_reconcile", () => DRn({ skip: r ? (l, C) => !uOs(C) : void 0, onProgress: (l) => {
        if (l.type === "installed") n?.({ status: "installed", name: l.name }), t(`installPluginsForHeadless: installed marketplace ${l.name}`);
        else if (l.type === "failed") n?.({ status: "failed", name: l.name, error: l.error }), t(`installPluginsForHeadless: failed to install marketplace ${l.name}: ${l.error}`);
      }, storageV5: e }), (l) => ({ installed_count: l.installed.length, updated_count: l.updated.length, failed_count: l.failed.length, skipped_count: l.skipped.length }));
      if (u.skipped.length > 0) t(`installPluginsForHeadless: skipped ${u.skipped.length} marketplace(s) unsupported by zip cache: ${u.skipped.join(", ")}`);
      let k = u.installed.length + u.updated.length;
      if (k > 0) S7e(), M_("headlessPluginInstall: marketplaces reconciled"), i = C7e(e, "headlessPluginInstall"), p = true;
      g.marketplaces_installed = k;
    }
    if (r) i = void 0, await w(e);
    let m = await LRn(e);
    if (g.delisted_count = m.length, m.length > 0) p = true, i = void 0;
    if (p && !c()) M_("headlessPluginInstall: plugins changed"), C7e(e, "headlessPluginInstall");
    return y(e, s), p;
  } catch (m) {
    if (t(`installPluginsForHeadless: failed: ${d(m)}`, { level: "error" }), p && !c()) {
      if (z() && e !== void 0) M_("headlessPluginInstall: pass failed after a change");
      C7e(e, "headlessPluginInstall");
    }
    return y(e, s), false;
  } finally {
    a("tengu_headless_plugin_install", g);
  }
}
function y(n, e) {
  if (Zge(e)) pi(n, e).catch(() => {
  });
}
export {
  tat
};
