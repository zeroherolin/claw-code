// plugins/dead-probe-legacy-plugin-tip-counts.5399.js — Claude Code 2.1.310 模块 chunk-5399n6g0.js
import { U } from "../context/not-admin-owned.ersa.js";
import { S, c, Dn } from "../agents/third-party.ydpb.js";
import { Qe, N } from "../telemetry/anthropic-workspace-id.36ys.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { mc } from "../shell/invalid-type.qnva.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { g } from "../telemetry/chunk-wn8xtaqg.js";
import { fr } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { dut, _te, Iks, e2 } from "../permissions/workflow-size-prompting-ambient.c6s8.js";
import { Zdo, zSr, wIe } from "../settings/tips-org-tips-file-load.0bkx.js";
import { lp } from "../shared/claude-plugins-official.6xj4.js";
class u {
  seated = void 0;
  picker = void 0;
  seat(e) {
    this.seated = e;
  }
  vacate(e) {
    if (this.seated === e) this.seated = void 0;
  }
  current() {
    return this.seated;
  }
  install(e) {
    this.picker = e;
  }
  pickDue() {
    if (this.picker === void 0 || this.seated === void 0) return false;
    return this.picker(this.seated), true;
  }
}
var tOt = new W(() => new u());
function nOt() {
  return import.meta.require("./advertised-command-is-offered.7amc.js");
}
function m(e) {
  if (e.id.startsWith(Zdo) || e.id.startsWith(zSr)) return S("org-tip");
  let { isBuiltInTipId: i, MARKETPLACE_PLUGIN_TIP_ID_PREFIX: t } = nOt();
  if (e.id.startsWith(t)) return e.pluginId !== void 0 && mc(e.pluginId).marketplace === lp ? Dn(e.id) : S("marketplace-plugin:org-marketplace");
  return i(e.id) ? Dn(e.id) : S("other");
}
function T(e) {
  if (e.length === 0) return;
  if (e.length === 1) return e[0];
  let i = e.map((t) => ({ tip: t, sessions: e2(t.id) }));
  return i.sort((t, n) => {
    if (t.sessions !== n.sessions) return n.sessions - t.sessions;
    return (n.tip.priority ?? 0) - (t.tip.priority ?? 0);
  }), i[0]?.tip;
}
async function bbs(e) {
  if (fr().spinnerTipsEnabled === false) return;
  let { getRelevantTips: i } = await import("./advertised-command-is-offered.7amc.js"), t = await i(e);
  if (t.length === 0) return;
  return T(t);
}
async function wbs(e, i) {
  try {
    return await e.content(i);
  } catch (t) {
    let { tipSessionCaches: n } = await import("./advertised-command-is-offered.7amc.js");
    return n.of(i.session.host).failedTipIds.add(e.id), l(Qe(N(t), "tip content threw")), "";
  }
}
var s = 2;
class h {
  fired = /* @__PURE__ */ new Set();
  fire(e, i) {
    if (e <= 0) return;
    let t = e > i ? "true" : "false", n = e >= s && i < s ? "true" : "false", r = `${t}|${n}`;
    if (this.fired.has(r)) return;
    this.fired.add(r), a("tengu_dead_probe_legacy_plugin_tip_counts", { changes_max: c(t), changes_outcome: c(n) });
  }
}
var _ = new W(() => new h());
function w() {
  return _.of(U().host);
}
async function Ebs(e) {
  if (fr().spinnerTipsEnabled === false) return;
  let { isTipRelevantSafe: i, tipSessionCaches: t } = await import("./advertised-command-is-offered.7amc.js"), n = t.of(e.session.host);
  if (wIe()) return;
  let r = await n.getMarketplacePluginTips(e.storageV5);
  if (r.length === 0) return;
  let p = [];
  for (let o of r) {
    if (!o.pluginId) continue;
    if (n.failedTipIds.has(o.id)) continue;
    let d = _te(o.id), f = Iks(o.pluginId);
    if (w().fire(f, d), Math.max(d, f) >= s) continue;
    if (e2(o.id) < o.cooldownSessions) continue;
    if (await i(o, e)) p.push(o);
  }
  return T(p);
}
function rOt(e, i = "spinner", t) {
  dut(e.id, t, e.advertisedCommand), g(i === "startup" ? "tips_startup_show" : "tips_spinner_show"), a("tengu_tip_shown", { tipIdLength: m(e), cooldownSessions: e.cooldownSessions, surface: c(i) });
}
var cct = "cc-plugin-tips";
export {
  Ebs,
  bbs,
  cct,
  nOt,
  rOt,
  tOt,
  wbs
};
