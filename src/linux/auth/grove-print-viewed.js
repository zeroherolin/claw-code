// linux/auth/grove-print-viewed.js — Claude Code 2.1.310（linux）模块 chunk-prmhfqsf.js
import { R } from "../telemetry/anthropic-workspace-id.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { Qr } from "../models/claude-3-5-sonnet.js";
import { Yst } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { E2 } from "../fs/backed-up.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { W_n, gn, b0, O$, Sv, jt, Re, ue } from "../settings/global-config-and-gates.js";
import { Xn } from "../core/conversation-engine.js";
var p = 864e5, h = 3e3;
function w() {
  return { "anthropic-client-os": Yst() };
}
var pte = Qr(async (e) => {
  try {
    return { success: true, data: (await Sv(async () => {
      let r = await jt.get("/api/oauth/account/settings", { timeout: h, credentials: e });
      if (!r.ok) throw Error(`Failed to get Grove settings: ${r.reason}`);
      if (u(r.status), r.data?.grove_enabled !== null && typeof r.data?.grove_enabled !== "boolean") throw Error("Grove settings answer has no boolean or null grove_enabled");
      return r;
    }, { credentials: e })).data };
  } catch (o) {
    if (!(o instanceof Error) || !/data-residency|essential-traffic-only|no-auth/.test(o.message)) t(`Failed to fetch Grove settings: ${o}`, { level: "error" });
    return pte.cache.clear?.(), { success: false };
  }
}, () => "account");
async function Avr(e) {
  try {
    await Sv(async () => {
      let o = await jt.post("/api/oauth/account/grove_notice_viewed", {}, { credentials: e, headers: w() });
      if (!o.ok) throw Error(`Failed to mark Grove notice viewed: ${o.reason}`);
      return u(o.status), o;
    }, { credentials: e }), g("api_grove_notice_mark_viewed");
  } catch (o) {
    t(`Failed to mark Grove notice viewed: ${o instanceof Error ? o.message : String(o)}`, { level: "error" }), m("api_grove_notice_mark_viewed", "request_failed");
  } finally {
    pte.cache.clear?.();
  }
}
async function rMt(e, o) {
  try {
    await Sv(async () => {
      let r = await jt.patch("/api/oauth/account/settings", { grove_enabled: e }, { credentials: o, headers: w() });
      if (!r.ok) throw Error(`Failed to update Grove settings: ${r.reason}`);
      return u(r.status), r;
    }, { credentials: o }), g("api_grove_settings_update");
  } catch (r) {
    t(`updateGroveSettings failed: ${String(r)}`, { level: "error" }), m("api_grove_settings_update", "request_failed");
  } finally {
    pte.cache.clear?.();
  }
}
async function lut(e, o) {
  if (!O$()) return false;
  if (!W_n()) return false;
  let r = gn()?.accountUuid;
  if (!r) return false;
  let n = ue().groveConfigCache?.[r], d = Date.now();
  if (!n) return t("Grove: No cache, fetching config in background (dialog skipped this session)"), _(r, e, o), false;
  if (d - n.timestamp > p) return t("Grove: Cache stale, returning cached data and refreshing in background"), _(r, e, o), n.grove_enabled;
  return t("Grove: Using fresh cached config"), n.grove_enabled;
}
async function _(e, o, r) {
  try {
    let i = b0(), n = await Pve(r);
    if (!n.success) {
      if (n.errorStatus !== void 0 && n.errorStatus !== 401 && i && ue().groveConfigCache?.[e]) await Re((s) => {
        let f = s.groveConfigCache?.[e];
        return f ? { ...s, groveConfigCache: { ...s.groveConfigCache, [e]: { ...f, timestamp: Date.now() } } } : s;
      }, o);
      return;
    }
    let d = n.data.grove_enabled, c = ue().groveConfigCache?.[e];
    if (c?.grove_enabled === d && Date.now() - c.timestamp <= p) return;
    await Re((s) => ({ ...s, groveConfigCache: { ...s.groveConfigCache, [e]: { grove_enabled: d, timestamp: Date.now() } } }), o);
  } catch (i) {
    t(`Grove: Failed to fetch and store config: ${i}`);
  }
}
var Pve = Qr(async (e) => {
  try {
    let o = await Sv(async () => {
      let c = await jt.get("/api/claude_code_grove", { timeout: h, credentials: e });
      if (!c.ok) throw Error(`Failed to fetch Grove notice config: ${c.reason}`);
      if (u(c.status), typeof c.data?.grove_enabled !== "boolean") throw Error("Grove notice config answer has no boolean grove_enabled");
      return c;
    }, { credentials: e }), { grove_enabled: r, domain_excluded: i, notice_is_grace_period: n, notice_reminder_frequency: d } = o.data;
    return { success: true, data: { grove_enabled: r, domain_excluded: i ?? false, notice_is_grace_period: n ?? true, notice_reminder_frequency: d } };
  } catch (o) {
    return t(`Failed to fetch Grove notice config: ${o}`), Pve.cache.clear?.(), o instanceof v ? { success: false, errorStatus: o.status } : { success: false };
  }
}, () => "config");
function Cvr(e, o, r) {
  if (!e.success || !o.success) return false;
  let i = e.data, n = o.data;
  if (i.grove_enabled !== null) return false;
  if (r) return true;
  if (!n.notice_is_grace_period) return true;
  let c = n.notice_reminder_frequency;
  if (c !== null && i.grove_notice_viewed_at) {
    let s = new Date(i.grove_notice_viewed_at).getTime();
    if (isNaN(s)) return l(Error(`Invalid grove_notice_viewed_at from API: ${i.grove_notice_viewed_at}`)), true;
    return Math.floor((Date.now() - s) / 864e5) >= c;
  } else {
    let s = i.grove_notice_viewed_at;
    return s === null || s === void 0;
  }
}
async function pks(e) {
  let [o, r] = await Promise.all([pte(e), Pve(e)]);
  if (Cvr(o, r, false)) {
    let n = r.success ? r.data : null;
    if (a("tengu_grove_print_viewed", { dismissable: n?.notice_is_grace_period }), n === null || n.notice_is_grace_period) E2(`
An update to our Consumer Terms and Privacy Policy will take effect on October 8, 2025. Run \`claude\` to review the updated terms.

`), await Avr(e);
    else E2(`
[ACTION REQUIRED] An update to our Consumer Terms and Privacy Policy has taken effect on October 8, 2025. You must run \`claude\` to review the updated terms.

`), await Xn(1);
  }
}
class v extends R {
  status;
  constructor(e) {
    super(`HTTP ${e}`, "Grove request answered with an error status");
    this.status = e;
  }
}
function u(e) {
  if (e < 200 || e >= 300) throw new v(e);
}
export {
  Avr,
  Cvr,
  Pve,
  lut,
  pks,
  pte,
  rMt
};
