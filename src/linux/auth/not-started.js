// linux/auth/not-started.js — Claude Code 2.1.310（linux）模块 chunk-n6jrm8zn.js
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { fo } from "../telemetry/chunk-9d6962d2.js";
import { vqo, Xei, gn, cr, jt, Re, ue } from "../settings/global-config-and-gates.js";
var u = 14;
function peo() {
  return gn()?.claudeCodeTrialDurationDays ?? null;
}
var s = { status: "ineligible", daysRemaining: null };
function ext() {
  let r = vqo();
  if (r) return o(true, r.endsAt);
  let e = gn();
  if (!e || cr() !== "pro") return s;
  let a = e.ccOnboardingFlags?.e10 === true;
  return o(a, e.claudeCodeTrialEndsAt ?? null);
}
async function meo(r, e) {
  return fo("api_pro_trial_start", async () => {
    if (vqo()) {
      let i = new Date(Date.now() + u * 24 * 60 * 60 * 1e3).toISOString();
      return Xei({ endsAt: i }), o(true, i);
    }
    let n = await jt.post("/api/oauth/organizations/:orgUUID/claude_code/pro_trial", {}, { auth: "teleport-org", credentials: e });
    if (!n.ok) throw Error(n.reason === "no-auth" ? n.detail : `Pro trial start unavailable: ${n.reason}`);
    return t("Pro trial started", { level: "debug" }), d(n.data.ends_at, r), o(true, n.data.ends_at);
  });
}
function acs() {
  if (ext().status !== "expired") return false;
  return ue().cachedExtraUsageDisabledReason !== null;
}
function geo(r) {
  switch (r.status) {
    case "active": {
      let e = r.daysRemaining ?? 0;
      return `Trial: ${e} ${e === 1 ? "day" : "days"} left`;
    }
    case "expired":
      return "Usage credits";
    case "ineligible":
    case "not_started":
      return null;
  }
}
function o(r, e) {
  if (!r) return s;
  if (!e) return { status: "not_started", daysRemaining: null };
  let a = new Date(e);
  if (Number.isNaN(a.getTime())) return l(Error(`Invalid claude_code_trial_ends_at: ${e}`)), s;
  let n = a.getTime() - Date.now();
  if (n <= 0) return { status: "expired", daysRemaining: 0 };
  return { status: "active", daysRemaining: Math.ceil(n / 864e5) };
}
function d(r, e) {
  Re((a) => {
    if (!a.oauthAccount || a.oauthAccount.claudeCodeTrialEndsAt === r) return a;
    return { ...a, oauthAccount: { ...a.oauthAccount, claudeCodeTrialEndsAt: r } };
  }, e);
}
export {
  acs,
  ext,
  geo,
  meo,
  peo
};
