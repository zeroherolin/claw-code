// darwin/design/design-project-grant.js — Claude Code 2.1.310（darwin）模块 chunk-d7xy9enz.js
import { R, d } from "../telemetry/anthropic-workspace-id.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Ln, al, pa, Wt } from "../settings/global-config-and-gates.js";
import { St } from "../artifacts/cowritten-artifact-html.js";
import { $n } from "../models/total-tokens-reminder.js";
import { VRs, KRs, wBe, Eve, qRs, YRs } from "../context/update-member-role.js";
import { zIe, dgo } from "../auth/needs-design-login.js";
import { exs, txs, nxs } from "../shared/chunk-cd9b985e.js";
import { z } from "../shared/chunk-be29de51.js";
var u = ["agent_design_projects"];
function IQt(e) {
  return typeof e === "string" && u.includes(e);
}
function O1e(e) {
  switch (e) {
    case "agent_design_projects":
      return "Connect to Claude Design? Claude can read and edit your Design projects from this tool. Change anytime at claude.ai/design/settings or with /design revoke.";
  }
}
function fCs(e) {
  e.consentCache = null, e.consentFetch = null, e.consentCacheGeneration++;
}
async function l(e) {
  await pa({ credentials: e });
  let n;
  if (z() && e !== void 0) n = await al(e);
  else n = Ln();
  let s = n?.refreshToken && n.scopes?.includes("user:design:read") ? n.accessToken : null;
  if (!s) {
    let r = await dgo(e);
    s = r.ok ? r.accessToken : n?.accessToken ?? null;
  }
  return { auth: "none", ...s && { headers: { Authorization: `Bearer ${s}` } } };
}
async function y(e) {
  try {
    let n = await Wt.get("/v1/design/consent", { ...await l(e), validateStatus: (r) => r < 500 });
    if (!n.ok || n.status !== 200) return {};
    let s = {};
    for (let r of u) {
      let o = n.data?.[r];
      if (typeof o === "boolean") s[r] = o;
    }
    return s;
  } catch (n) {
    return t(`Design consent pre-flight GET failed (${d(n)}); falling back to 403-seeded cache.`), {};
  }
}
function _me(e, n, s) {
  if (n === "agent_design_projects" && s === false) KRs(e), qRs(e), VRs(e);
  e.consentCache = { ...e.consentCache ?? {}, [n]: s };
}
async function mCs(e) {
  return !!(await zIe(e))?.accessToken;
}
async function h(e) {
  if (!$n()) return { ok: false, reason: "wrong_provider" };
  if (St()) return { ok: false, reason: "essential_traffic_only" };
  await pa({ credentials: e });
  let n;
  if (z() && e !== void 0) n = await al(e);
  else n = Ln();
  if (n?.accessToken && n.refreshToken && n.scopes?.includes("user:design:read")) return { ok: true, accessToken: n.accessToken, bearer: "design_scoped_login" };
  let s = await dgo(e);
  if (s.ok) return { ok: true, accessToken: s.accessToken, bearer: "design_credential" };
  if (n?.accessToken) return { ok: true, accessToken: n.accessToken, bearer: n.scopes?.includes("user:design:read") ? "design_scoped_login" : "login" };
  return { ok: false, reason: s.reason, detail: s.detail };
}
async function SMt(e) {
  return h(e);
}
async function OQt(e, n) {
  if (!$n() || St()) return null;
  if (e.consentCache === null) {
    let s = e.consentFetch ??= y(n), r = e.consentCacheGeneration, o = await s;
    if (e.consentCache === null && e.consentCacheGeneration === r) {
      e.consentCache = {};
      for (let a of u) {
        let i = o[a];
        if (typeof i === "boolean") _me(e, a, i);
      }
    }
    if (e.consentFetch === s) e.consentFetch = null;
  }
  return e.consentCache?.agent_design_projects === false ? "agent_design_projects" : null;
}
async function lgo(e) {
  if (!$n() || St()) return false;
  let n;
  if (z() && e !== void 0) n = (await al(e))?.accessToken;
  else n = Ln()?.accessToken;
  if (n) return false;
  return !(await zIe(e))?.accessToken;
}
async function M1e(e, n, s) {
  try {
    let r = await Wt.post("/v1/design/consent", { consent: n }, { ...await l(s), validateStatus: (o) => o < 300 });
    if (!r.ok) throw new R(`Couldn't record Design consent (${r.reason === "no-auth" ? r.detail : r.reason}).`, "design consent POST blocked by policy gate");
  } catch (r) {
    throw m("design_consent", "post_failed"), r;
  }
  _me(e, n, true), g("design_consent");
}
async function gCs(e, n, s) {
  try {
    let r = await Wt.delete("/v1/design/consent", { consent: n }, { ...await l(s), validateStatus: (o) => o < 300 || o === 404 });
    if (!r.ok) throw new R(`Couldn't revoke Design consent (${r.reason === "no-auth" ? r.detail : r.reason}).`, "design consent DELETE blocked by policy gate");
  } catch (r) {
    throw m("design_consent", "delete_failed"), r;
  }
  _me(e, n, false), g("design_consent");
}
async function _(e) {
  try {
    let n = await Wt.get("/v1/design/grants", { ...await l(e), validateStatus: (o) => o < 500 });
    if (!n.ok || n.status !== 200) {
      let o = n.ok ? n.status : 0;
      return p("design_project_grant", o === 404 ? "probe_404_old_server" : "probe_http_error", { status: o }), null;
    }
    let s = n.data?.grants;
    if (!Array.isArray(s)) return p("design_project_grant", "probe_shape"), null;
    let r = /* @__PURE__ */ new Set();
    for (let o of s) {
      let a = o?.project_id;
      if (typeof a === "string" && a.length > 0) r.add(a);
    }
    return r;
  } catch (n) {
    return t(`Design project-grant probe failed (${d(n)}); falling back to the per-batch plan flow.`), p("design_project_grant", "probe_network"), null;
  }
}
async function FNn(e, n, s) {
  let r = e.grantsFetch ??= _(s);
  try {
    let o = await r;
    if (o === null) return "unavailable";
    return o.has(n) ? "granted" : "notGranted";
  } finally {
    if (e.grantsFetch === r) e.grantsFetch = null;
  }
}
async function hCs(e, n, s) {
  let r;
  try {
    let o = await Wt.post("/v1/design/grants", { project_id: n }, { ...await l(s), validateStatus: (a) => a < 300 || a === 404 });
    if (!o.ok) throw new R(`Couldn't record the Design project write grant (${o.reason === "no-auth" ? o.detail : o.reason}).`, "design project grant POST blocked by policy gate");
    r = o.status;
  } catch (o) {
    throw m("design_project_grant", "post_failed"), o;
  }
  if (r === 404) throw YRs(e, n), m("design_project_grant", "mint_refused_404"), new R("This project cannot hold a durable write grant for this account (it may be shared from another organization, or not viewable) — use finalize_plan with writes/deletes and pass the returned plan_token for writes to this project.", "design project grant mint refused for this project");
  wBe(e, n), g("design_project_grant");
}
function yCs(e, n, s) {
  let r = null;
  async function o() {
    let a;
    try {
      let i = await Wt.get("/v1/design/grants", { ...await l(s), validateStatus: (c) => c < 500 });
      if (!i.ok || i.status !== 200) return null;
      a = i.data?.grants;
    } catch (i) {
      return t(`Server-approval watcher poll failed (${d(i)}); will poll again.`), null;
    }
    if (!Array.isArray(a)) return null;
    for (let i of a) {
      let c = i;
      if (c?.project_id !== n) continue;
      let f = typeof c.created_at === "string" ? Date.parse(c.created_at) : NaN;
      if (Number.isNaN(f)) return null;
      return { present: true, createdAtMs: f };
    }
    return { present: false };
  }
  return { async poll() {
    let a = await o();
    if (a === null) return false;
    if (r === null) return r = { createdAtMs: a.present ? a.createdAtMs : null }, false;
    if (!a.present) return false;
    if (!(r.createdAtMs === null || a.createdAtMs > r.createdAtMs)) return false;
    if (Eve(e, n)) return false;
    return wBe(e, n), true;
  } };
}
exs(h);
txs(async (e) => !!await zIe(e));
nxs({ wouldNeedDesignConsent: OQt, consentPromptFor: O1e, postDesignConsent: M1e, seedDesignConsentBit: _me, isConsentBit: IQt });
export {
  FNn,
  IQt,
  M1e,
  O1e,
  OQt,
  SMt,
  _me,
  fCs,
  gCs,
  hCs,
  lgo,
  mCs,
  yCs
};
