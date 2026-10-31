// darwin/vendor/anthropic-sdk/anthropic-version.js — Claude Code 2.1.310（darwin）模块 chunk-kjb4csjz.js
import { Dt } from "../../fs/content-encoding.js";
import { rn } from "../../auth/oauth-2025-04-20.js";
import { i } from "../../shared/environment.js";
import { _ } from "../../fs/gitlab-runner-authentication-token.js";
import { rX } from "../../fs/chunk-86be9585.js";
import { Ln, al, pa } from "../../settings/global-config-and-gates.js";
import { Iwn } from "../../auth/auth-launcher-host-login.js";
import { Qd } from "../../workflows/chunk-023a9c5d.js";
import { z } from "../../shared/chunk-be29de51.js";
var m = " — run `claude login` to refresh your session, or verify ANTHROPIC_BASE_URL matches your login environment";
class a extends Error {
  status;
  constructor(t, e) {
    super(e);
    this.name = "SelfHostedRunnerApiError", this.status = t;
  }
}
var p9e = 8080;
function l() {
  let { getAPIProvider: t } = import.meta.require("../../ide/allowed-provider-label.js");
  if (t() !== "firstParty") throw new a(403, "Self-hosted runner management is only available on the first-party Anthropic API provider.");
}
var f = "Not logged in. Environment-management endpoints require the operator OAuth session — run `claude login`, then re-invoke this tool. (`ANTHROPIC_API_KEY` will not work for these endpoints.)";
function f9e() {
  let t = i.ANTHROPIC_BASE_URL?.replace(/\/+$/, "");
  if (t) return t;
  return rn().BASE_API_URL;
}
function W_s() {
  return rn().CLAUDE_AI_ORIGIN;
}
async function g(t) {
  l();
  let e = import.meta.require("../../remote/archive-remote-session.d709.js");
  if (e.isConsoleProfileSessionsCredential()) {
    let s = await e.sessionsApiAccessToken(true);
    if (!s) throw new a(401, e.cloudSessionsSignInRefusal());
    return s;
  }
  await pa({ credentials: t }).catch(() => {
  });
  let o = z() && t !== void 0 ? (await al(t))?.accessToken : Ln()?.accessToken;
  if (!o) throw new a(401, f);
  return o;
}
function KUe(t) {
  return { ui: t };
}
async function qUe(t, e, o, s, d) {
  l();
  let u = await g(d);
  if (Iwn(u)) throw new a(401, f);
  let n = await Dt.request({ method: t, url: `${f9e()}${e}`, data: o, headers: { Authorization: `Bearer ${u}`, "anthropic-version": "2023-06-01", "content-type": "application/json" }, timeout: 2e4, signal: s, validateStatus: (r) => r < 500 }).catch((r) => {
    if (Dt.isAxiosError(r) && !Dt.isCancel(r) && r.response === void 0) throw new a(0, `${t} ${e}: ${r.message}`);
    throw r;
  });
  if (n.status >= 400) {
    let r = n.data?.error?.message ?? _(n.data), c = `HTTP ${n.status} ${t} ${e}: ${r}`;
    if ([401, 403, 404, 409, 429].includes(n.status)) {
      let p = n.status === 401 || n.status === 403 ? m : "";
      throw new a(n.status, c + p);
    }
    throw Error(c);
  }
  return n.data;
}
function t7(t, e) {
  return { tool_use_id: t, type: "tool_result", content: Qd(_(e)) };
}
function pq(t) {
  let e = rX(t);
  if (e !== null) return e;
  return Object.entries(t).filter(([, o]) => o !== void 0).map(([o, s]) => `${o}=${typeof s === "string" ? s : _(s)}`).join(" ");
}
export {
  KUe,
  W_s,
  f9e,
  p9e,
  pq,
  qUe,
  t7
};
