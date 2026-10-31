// darwin/settings/notif-prefs-hydrate.js — Claude Code 2.1.310（darwin）模块 chunk-dqtfzj1n.js
import { He } from "../fs/async-hooks.93b1.js";
import { U } from "../context/not-admin-owned.js";
import { ui } from "../telemetry/anthropic-workspace-id.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { Y } from "../shared/async-hooks.9e79.js";
import { mt, Un, VKe } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { vt, Wt, yRe, ue } from "./global-config-and-gates.js";
import { Ps } from "../shared/chunk-67236fa7.js";
import { o, E, M, C, u } from "../vendor/zod/string-format.js";
var P = f(() => {
  let e = u({ enable_email: M().nullish(), enable_push: M().nullish() }), t = u({ bogosort: e.nullish(), code_requires_action: e.nullish() }), r = u({ has_active_channel: M(), platforms: C(o()).nullish().transform((n) => n ?? []), most_recent_token_refresh: o().nullish() });
  return u({ account_id: E().nullish(), organization_id: E().nullish(), preferences: u({ feature_preference: t.nullish() }).nullish(), push_reachability: r.nullish() });
});
var y = 1e4, k = new W(() => ({ reachability: Ps(void 0), hydrated: He() }));
function i() {
  return k.of(U().host);
}
function zNn() {
  return i().reachability.getState();
}
function VNn(e) {
  return i().reachability.subscribe(e);
}
function vCs(e) {
  return i().hydrated.subscribe(e);
}
function N() {
  let e = mt(), t = ue();
  return { agentPushNotifEnabled: e.agentPushNotifEnabled ?? yRe("agentPushNotifEnabled", t.agentPushNotifEnabled), inputNeededNotifEnabled: e.inputNeededNotifEnabled ?? yRe("inputNeededNotifEnabled", t.inputNeededNotifEnabled) };
}
var S = "/api/claude_code/notification/preferences";
function d() {
  return vt();
}
async function R() {
  if (!d()) return { ok: false, reason: "no_auth" };
  try {
    let e = await Wt.get(S, { timeout: y });
    if (!e.ok) return { ok: false, reason: "fetch_failed" };
    let t = P().safeParse(e.data);
    if (!t.success) return Y("warn", "notif_prefs_fetch_parse_failed", { issues: t.error.issues.map((r) => r.path.join(".")).join(",") }), { ok: false, reason: "parse_failed" };
    return { ok: true, prefs: t.data };
  } catch (e) {
    let { kind: t } = ui(e);
    return Y("warn", "notif_prefs_fetch_failed", { kind: t }), { ok: false, reason: "fetch_failed" };
  }
}
async function v(e) {
  if (!d()) return;
  try {
    if (!(await Wt.patch(S, e, { timeout: y })).ok) {
      p("notif_prefs_patch", "no_auth");
      return;
    }
    Y("info", "notif_prefs_patch_ok", {}), g("notif_prefs_patch");
  } catch (t) {
    let { kind: r } = ui(t);
    Y("warn", "notif_prefs_patch_failed", { kind: r }), m("notif_prefs_patch", "http_error");
  }
}
function mgo() {
  VKe().then(() => {
    let e = N(), t = {};
    if (typeof e.agentPushNotifEnabled === "boolean") t.bogosort = { enable_push: e.agentPushNotifEnabled };
    if (typeof e.inputNeededNotifEnabled === "boolean") t.code_requires_action = { enable_push: e.inputNeededNotifEnabled };
    if (Object.keys(t).length === 0) return;
    return v({ preferences: { feature_preference: t } });
  }).catch(l);
}
async function kCs(e) {
  if (!d()) {
    p("notif_prefs_hydrate", "no_auth"), i().reachability.setState(() => null), Y("info", "notif_prefs_hydrate_skipped", { reason: "no_auth" });
    return;
  }
  let t = await R();
  if (!t.ok) {
    m("notif_prefs_hydrate", t.reason), i().reachability.setState(() => null), Y("info", "notif_prefs_hydrate_skipped", { reason: t.reason });
    return;
  }
  let r = t.prefs, n = r.push_reachability ?? null;
  if (i().reachability.setState(() => n), n) a("tengu_push_reachability", { has_active_channel: n.has_active_channel, platform_count: n.platforms.length });
  let _ = r.preferences?.feature_preference, c = _?.bogosort?.enable_push, h = _?.code_requires_action?.enable_push, b = N(), s = {};
  if (b.agentPushNotifEnabled === void 0 && typeof c === "boolean") s.agentPushNotifEnabled = c;
  if (b.inputNeededNotifEnabled === void 0 && typeof h === "boolean") s.inputNeededNotifEnabled = h;
  if (Y("info", "notif_prefs_hydrate_result", { has_active_channel: n?.has_active_channel, server_bogosort: c, server_code_requires_action: h, seeded: Object.keys(s).length > 0 }), Object.keys(s).length === 0) {
    g("notif_prefs_hydrate");
    return;
  }
  await Un("userSettings", s, void 0, e), i().hydrated.emit(), g("notif_prefs_hydrate");
}
export {
  VNn,
  kCs,
  mgo,
  vCs,
  zNn
};
