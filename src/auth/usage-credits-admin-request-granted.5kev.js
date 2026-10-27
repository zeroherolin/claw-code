// auth/usage-credits-admin-request-granted.5kev.js — Claude Code 2.1.310 模块 chunk-5kevj79k.js
import { Dt } from "../fs/content-encoding.v6wj.js";
import { GQ, UV, fH, fR, or, Wt, Ut, k } from "../settings/global-config-and-gates.27xj.js";
import { c } from "../agents/third-party.ydpb.js";
import { N, d, Pf } from "../telemetry/anthropic-workspace-id.36ys.js";
import { X } from "../shared/chunk-3kevgx4j.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { St, l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { po } from "../telemetry/chunk-wn8xtaqg.js";
import { N_, zO } from "../api/anthropic-client.7pf8.js";
import { iKn, ZHr, vO, li, o2e } from "../core/system-prompt-blocks.dpjp.js";
import { bs } from "../context/team-memory-sync.0s3j.js";
import { cB } from "../telemetry/quota-auto-resume-cancelled.v6a4.js";
import { Nv } from "../shared/chunk-xv1h3z6v.js";
import { Js } from "../ide/opener-missing.16f4.js";
async function g(r, i) {
  return po("api_admin_request_create", async () => {
    let n = await Wt.post("/api/oauth/organizations/:orgUUID/admin_requests", r, { auth: "teleport-org", credentials: i });
    if (!n.ok) throw Error(n.reason === "no-auth" ? n.detail : `admin_requests: ${n.reason}`);
    return { request: n.data, created: n.status === 201, status: n.status };
  });
}
async function f(r, i, n) {
  return po("api_admin_request_list", async () => {
    let o = new URLSearchParams({ request_type: r });
    for (let u of i) o.append("statuses", u);
    let s = await Wt.get(`/api/oauth/organizations/:orgUUID/admin_requests/me?${o}`, { auth: "teleport-org", credentials: n });
    if (!s.ok) throw Error(s.reason === "no-auth" ? s.detail : `admin_requests/me: ${s.reason}`);
    return s.data;
  });
}
async function _(r, i) {
  return po("api_admin_request_eligibility", async () => {
    let n = await Wt.get(`/api/oauth/organizations/:orgUUID/admin_requests/eligibility?request_type=${r}`, { auth: "teleport-org", credentials: i });
    if (!n.ok) throw Error(n.reason === "no-auth" ? n.detail : `admin_requests/eligibility: ${n.reason}`);
    return n.data;
  });
}
function cDn() {
  let r = { ...li(), isUsingOverage: true };
  if (delete r.overageDisabledReason, r.status === "rejected") r.status = "allowed";
  if (r.overageStatus === "rejected") r.overageStatus = "allowed";
  o2e(r);
}
function y(r) {
  if (!Dt.isAxiosError(r)) return null;
  let i = r.response?.status;
  if (typeof i !== "number" || i >= 500) return null;
  let n = r.response?.data;
  if (!n || typeof n !== "object") return null;
  let o = n, s = o.error;
  if (s && typeof s === "object") {
    let u = s.message;
    if (typeof u === "string" && u.length > 0) return u;
  }
  for (let u of ["message", "detail"]) {
    let e = o[u];
    if (typeof e === "string" && e.length > 0) return e;
  }
  return null;
}
var Rct = "Requesting usage credits notifies your organization admins. To review and send the request, run /usage-credits in an interactive Claude Code session.", suo = 2e3, A = /* @__PURE__ */ new Set(["org_spend_cap_reached", "member_zero_credit_limit", "group_zero_credit_limit", "seat_tier_zero_credit_limit"]);
function q(r) {
  if (r == null || typeof r !== "object" || r.request_type !== "limit_increase") return null;
  let i = r.details;
  if (r.status !== "approved" || i?.approval_type !== "pre_approved" || typeof i.granted_limit !== "number" || !Number.isSafeInteger(i.granted_limit) || i.granted_limit <= 0 || typeof i.currency !== "string" || !/^[A-Za-z]{3}$/.test(i.currency)) return null;
  let n = i.period == null || i.period === "monthly" ? "monthly" : i.period === "weekly" ? "weekly" : "other", o = zO() ? ZHr : iKn, s = bs(i.granted_limit, i.currency, "fit"), u = typeof i.expires_at === "string" ? Date.parse(i.expires_at) : NaN, e = Number.isFinite(u) && u > Date.now() ? Nv(u / 1e3, true, true, true) : void 0;
  return { line: e === void 0 ? `Your ${o} is now ${s}` : `Your ${o} is now ${s} until ${e}`, shortLine: `Your ${o} is now ${s}`, fresh: r.approved_now === true, period: n, hasExpiry: e !== void 0 };
}
async function o1e(r, i, n) {
  let o;
  try {
    o = await g({ request_type: "limit_increase", details: null }, i);
  } catch (e) {
    let p = y(e);
    if (Pf(e, (m) => y(m) !== null)) t(`Admin request rejected: ${p ?? d(e)}`, { level: "error" });
    else l(e);
    if (p) return { type: "message", value: p, filed: false, outcome: Dt.isAxiosError(e) && e.response !== void 0 ? h(e.response.status) : "failed" };
    return { type: "message", filed: false, outcome: "failed", value: "Couldn't send your request. Try again later." };
  }
  let s = null;
  try {
    if (o.status >= 200 && o.status < 300) s = q(o.request);
  } catch (e) {
    l(N(e));
  }
  if (s === null) return { type: "message", filed: true, outcome: o.created ? "filed" : h(o.status), value: r == null ? "Request sent to your admin for usage credits." : r.is_enabled ? "Request sent to your admin to increase your usage credit limit." : "Request sent to your admin to turn on usage credits." };
  try {
    n?.(`${s.shortLine}.`);
  } catch (e) {
    l(N(e));
  }
  try {
    if (s.fresh) {
      if (a("tengu_usage_credits_admin_request_granted", { period: c(s.period), has_expiry: s.hasExpiry }), li().status === "rejected") await X(suo);
      let e = li();
      if (e.status === "rejected" && e.isUsingOverage !== true && e.overageScope === void 0 && e.overageDisabledReason !== void 0 && A.has(e.overageDisabledReason)) cDn();
    }
  } catch (e) {
    l(N(e));
  }
  let u = false;
  try {
    u = cB();
  } catch (e) {
    l(N(e));
  }
  return { type: "message", filed: true, outcome: "granted", grantLine: `${s.line}.`, value: u ? `${s.line}.` : `${s.line} · send a message to continue` };
}
function Z7t() {
  if (Ut()) return false;
  let r = or(), i = fH() !== null, n = k("tengu_ember_latch", false) || i, o = fR() && (i || (r === "pro" || r === "max") && !St());
  return n && o;
}
async function lte(r, i) {
  let n = or(), o = n === "team" || n === "enterprise";
  if (!N_() && o) {
    let e, p = true;
    try {
      e = (await vO(i))?.extra_usage, p &&= e !== void 0;
    } catch (m) {
      p = false, t(`extra-usage: fetchUtilization failed, falling through to ask user: ${m}`, { level: "error" });
    }
    switch (e?.disabled_reason) {
      case "out_of_credits":
        return { type: "message", value: "Your organization is out of usage credits. Contact your admin to add more.", reason: "out_of_credits" };
      case "org_level_disabled_until":
      case "org_spend_cap_reached":
        if (e.disabled_reason === "org_level_disabled_until" && e.spend_limit_reached === false) break;
        return { type: "message", value: "Your organization's usage credit cap is reached for this period. Contact your admin to raise it.", reason: "org_cap_reached" };
      default:
    }
    if (e?.is_enabled && e.monthly_limit === null) return { type: "message", value: "Your organization already has unlimited usage credits. No request needed.", reason: "unlimited" };
    try {
      let m = await _("limit_increase", i);
      if (m?.is_allowed === false) return { type: "message", value: "Usage credit requests are turned off for your organization.", reason: "requests_off" };
      p &&= m?.is_allowed === true;
    } catch (m) {
      p = false, t(`Extra usage eligibility check failed: ${m}`, { level: "error" });
    }
    try {
      let m = await f("limit_increase", ["pending"], i);
      if (m && m.length > 0) return { type: "message", value: "You've already sent a usage credit request to your admin.", reason: "pending" };
      p &&= m !== null;
    } catch (m) {
      p = false, t(`Failed to fetch pending admin requests: ${m}`, { level: "error" });
    }
    return { type: "confirm-admin-request", extraUsage: e, checked: p };
  }
  let u = o ? UV : GQ;
  if (!r.openInBrowser || Ut()) return { type: "browser-opened", url: u, opened: false };
  try {
    let e = await Js(u);
    return { type: "browser-opened", url: u, opened: e };
  } catch (e) {
    return t(`Failed to open browser for ${u}: ${e}`, { level: "error" }), { type: "message", value: `Couldn't open your browser. Visit ${u} to manage usage credits.` };
  }
}
function h(r) {
  if (r === 201) return "filed";
  if (r === 200) return "already_filed";
  if (r === 401 || r === 408 || r === 429 || r >= 500) return "failed";
  if (r >= 400) return "refused";
  return r >= 200 && r < 300 ? "filed" : "failed";
}
export {
  Rct,
  Z7t,
  cDn,
  lte,
  o1e,
  suo
};
