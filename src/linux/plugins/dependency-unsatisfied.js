// linux/plugins/dependency-unsatisfied.js — Claude Code 2.1.310（linux）模块 chunk-y04rbgmk.js
import { L } from "../context/not-admin-owned.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { I2e, Ou } from "./entry-refused.js";
import { Sn, On, ER } from "../shell/invalid-type.js";
import { lHe, dze, dHe, Sw } from "./plugin-command-source-refresh.js";
import { ket, Fre, d3s } from "./not-found.js";
import { lsn, yWe, ib, Rd, Pk, ZNs, wgt, fi } from "../core/conversation-engine.js";
async function iws(l, r) {
  return l.some((n) => n.endsWith(`@${Sn}`)) ? ZNs(r) : "not_needed";
}
var M = ["user", "project", "local"];
async function bae(l, r) {
  let n = /* @__PURE__ */ new Map();
  for (let e of l) {
    if (e.type !== "dependency-unsatisfied" || e.reason !== "not-found") continue;
    let a = n.get(e.dependency);
    if (!a) a = /* @__PURE__ */ new Set(), n.set(e.dependency, a);
    a.add(e.source);
  }
  if (n.size === 0) return { installed: [], stillUnresolved: [], marketplaceMissing: [] };
  let i = await Rd(r), f = M.map((e) => [e, ket(ER(e))]), g = [], s = [], p = [];
  for (let [e, a] of n) {
    let u = On(e).marketplace, k = u ? ib(i, u) : void 0;
    if (!u || !k) {
      s.push(e), p.push(e);
      continue;
    }
    if (!Ou(k.source)) {
      t(`resolveMissingDependencies: skipping "${e}" — marketplace "${u}" is blocked by enterprise policy`), s.push(e);
      continue;
    }
    let y = false;
    for (let o of a) {
      let c = On(o).marketplace;
      if (c === u) {
        y = true;
        break;
      }
      if (!c) continue;
      if ((await Pk(c, r))?.allowCrossMarketplaceDependenciesOn?.includes(u)) {
        y = true;
        break;
      }
    }
    if (!y) {
      t(`resolveMissingDependencies: skipping "${e}" — cross-marketplace dependency not in any declaring marketplace's allowlist`), s.push(e);
      continue;
    }
    try {
      let o = await wgt(e, r, "install");
      if (!o) {
        s.push(e);
        continue;
      }
      let c = o.entry.source;
      if (typeof c === "object" && c.source === "archive" && lHe(dze({ entry: o.entry, archiveUrl: c.url, marketplaceSource: dHe(e, i), trustedSettingsEntryAuth: yWe(Sw(e), o.entry.name) }).entry)) {
        t(`resolveMissingDependencies: skipping "${e}" — it fetches its archive through an entry headersHelper, which only an explicit install from /plugin may run`), s.push(e);
        continue;
      }
      let m = D(a, f), h = await lsn({ pluginId: e, entry: o.entry, scope: m ?? "user", marketplaceInstallLocation: o.marketplaceInstallLocation, trigger: "dependency-resolution", explicit: false, auto: m !== void 0, requiredByEnabledDependent: true, storageV5: r });
      if (h.ok) {
        for (let S of h.closure) if (!g.includes(S)) g.push(S);
      } else t(`resolveMissingDependencies: install of "${e}" did not complete (${h.reason})`, { level: "warn" }), s.push(e);
    } catch (o) {
      t(`resolveMissingDependencies: install of "${e}" threw: ${d(o)}`, { level: "warn" }), s.push(e);
    }
  }
  return { installed: g, stillUnresolved: s, marketplaceMissing: p };
}
async function buo(l, r) {
  let { errors: n } = await fi(r);
  return n.filter(I2e).filter((i) => i.source === l);
}
async function pOt(l, r) {
  let n = await buo(l, r);
  if (n.length === 0) return null;
  let { installed: i, marketplaceMissing: f } = await bae(n, r), g = new Set(i), s = L(n.map((p) => p.dependency)).filter((p) => !g.has(p));
  return { suffix: `${Fre(i)}${d3s(s, f)}`, changed: i.length > 0 };
}
function D(l, r) {
  for (let [n, i] of r) for (let f of l) if (i.has(f)) return n;
  return;
}
export {
  bae,
  buo,
  iws,
  pOt
};
