// darwin/mcp/mcp-xaa-idp-login.3ded.js — Claude Code 2.1.310（darwin）模块 chunk-3xb1mt73.js
import { lHt, sbo, BRs } from "../vendor/mcp-sdk/not-in-era.js";
import { R, N, d } from "../telemetry/anthropic-workspace-id.js";
import { ee } from "../fs/gitlab-runner-authentication-token.js";
import { se } from "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { po } from "../telemetry/chunk-9d6962d2.js";
import { Vn } from "../auth/permission-error.js";
import { ho, HN } from "./user-agent.js";
import { oa } from "../fs/ca-certs-load.js";
import { PN } from "../shared/anthropic-serif.js";
import { ptn, vOe } from "../auth/chunk-789a406d.js";
import { Js } from "../ide/opener-missing.js";
import { randomBytes as b } from "crypto";
import { createServer as x } from "http";
import { parse as _ } from "url";
var E = 3e5, T = 3e4, v = 60;
function ltn(n) {
  try {
    let t = new URL(n);
    return t.pathname = t.pathname.replace(/\/+$/, ""), t.host = t.host.toLowerCase(), t.toString();
  } catch {
    return n.replace(/\/+$/, "");
  }
}
async function C1n(n) {
  let r = (await Vn().readAsync())?.mcpXaaIdp?.[ltn(n)];
  if (!r) return;
  if (r.expiresAt - Date.now() <= v * 1e3) return;
  return r.idToken;
}
async function k(n, t, e) {
  await Vn().mutate((r) => ({ ...r, mcpXaaIdp: { ...r.mcpXaaIdp, [ltn(n)]: { idToken: t, expiresAt: e } } }));
}
async function HAi(n, t) {
  let e = A(t), r = e ? e * 1e3 : Date.now() + 36e5;
  return await k(n, t, r), r;
}
async function iTr(n) {
  let t = ltn(n);
  try {
    await Vn().mutate((e) => {
      if (!e.mcpXaaIdp?.[t]) return e;
      let r = { ...e.mcpXaaIdp };
      return delete r[t], { ...e, mcpXaaIdp: r };
    });
  } catch (e) {
    se("xaa", `clearIdpIdToken(${ho(t)}) failed: ${d(e)}`);
  }
}
async function DAi(n, t) {
  try {
    return await Vn().mutate((e) => ({ ...e, mcpXaaIdpConfig: { ...e.mcpXaaIdpConfig, [ltn(n)]: { clientSecret: t } } }));
  } catch (e) {
    return { success: false, warning: d(e) };
  }
}
async function aTr(n) {
  return (await Vn().readAsync())?.mcpXaaIdpConfig?.[ltn(n)]?.clientSecret;
}
async function LAi(n) {
  let t = ltn(n);
  try {
    await Vn().mutate((e) => {
      if (!e.mcpXaaIdpConfig?.[t]) return e;
      let r = { ...e.mcpXaaIdpConfig };
      return delete r[t], { ...e, mcpXaaIdpConfig: r };
    });
  } catch (e) {
    se("xaa", `clearIdpClientSecret(${ho(t)}) failed: ${d(e)}`);
  }
}
function P(n, t) {
  return fetch(n, { ...t, ...oa({ url: String(n) }), signal: AbortSignal.timeout(T) }).catch((e) => HN(e, n));
}
async function T1n(n) {
  let t = n.endsWith("/") ? n : n + "/";
  if (!URL.canParse(".well-known/openid-configuration", t)) throw new R(`XAA IdP: OIDC discovery failed: issuer is not a valid URL: ${ho(n)}`, "XAA IdP: OIDC discovery failed: issuer is not a valid URL");
  let e = new URL(".well-known/openid-configuration", t), r = await P(e, { headers: { Accept: "application/json" } });
  if (!r.ok) throw Error(`XAA IdP: OIDC discovery failed: HTTP ${r.status} at ${ho(e.href)}`);
  let i;
  try {
    i = await r.json();
  } catch {
    throw Error(`XAA IdP: OIDC discovery returned non-JSON at ${ho(e.href)} (captive portal or proxy?)`);
  }
  let a = lHt.safeParse(i);
  if (!a.success) throw Error(`XAA IdP: invalid OIDC metadata: ${a.error.message}`);
  if (!URL.canParse(a.data.token_endpoint) || new URL(a.data.token_endpoint).protocol !== "https:") throw Error(`XAA IdP: refusing non-HTTPS token endpoint: ${ho(a.data.token_endpoint)}`);
  return a.data;
}
function A(n) {
  let t = n.split(".");
  if (t.length !== 3) return;
  try {
    let e = ee(Buffer.from(t[1], "base64url").toString("utf-8"));
    return typeof e.exp === "number" ? e.exp : void 0;
  } catch {
    return;
  }
}
function X(n, t, e, r) {
  let i = null, a = null, l = null, f = () => {
    if (i?.removeAllListeners(), i?.on("error", () => {
    }), i?.close(), i = null, a) clearTimeout(a), a = null;
    if (e && l) e.removeEventListener("abort", l), l = null;
  };
  return new Promise((m, g) => {
    let p = false, I = (s, o) => {
      if (p) return;
      p = true, f(), m({ code: s, iss: o });
    }, c = (s) => {
      if (p) return;
      p = true, f(), g(s);
    };
    if (e) {
      if (l = () => c(Error("XAA IdP: login cancelled")), e.aborted) {
        l();
        return;
      }
      e.addEventListener("abort", l, { once: true });
    }
    i = x((s, o) => {
      let u = _(s.url || "", true);
      if (u.pathname !== "/callback") {
        o.writeHead(404), o.end();
        return;
      }
      let y = u.query.code, C = u.query.state, h = u.query.error, S = ptn(u.query.iss);
      if (h) {
        let w = u.query.error_description;
        o.writeHead(400, { "Content-Type": "text/html" }), o.end(PN({ ok: false, heading: "Sign-in failed", message: "Close this tab and try again from Claude Code.", detail: `${h}: ${w ?? ""}` })), c(Error(`XAA IdP: ${h}${w ? ` — ${w}` : ""}`));
        return;
      }
      if (C !== t) {
        o.writeHead(400, { "Content-Type": "text/html" }), o.end(PN({ ok: false, heading: "Sign-in failed", message: "State mismatch. Close this tab and try again." })), c(Error("XAA IdP: state mismatch (possible CSRF)"));
        return;
      }
      if (!y) {
        o.writeHead(400, { "Content-Type": "text/html" }), o.end(PN({ ok: false, heading: "Sign-in failed", message: "No authorization code received. Close this tab and try again." })), c(Error("XAA IdP: callback missing code"));
        return;
      }
      o.writeHead(200, { "Content-Type": "text/html" }), o.end(PN({ ok: true, heading: "Sign-in complete", message: "You can close this tab and return to Claude Code." })), I(y, S);
    }), i.on("error", (s) => {
      if (s.code === "EADDRINUSE") {
        let o = O() === "windows" ? `netstat -ano | findstr :${n}` : `lsof -ti:${n} -sTCP:LISTEN`;
        c(Error(`XAA IdP: callback port ${n} is already in use. Run \`${o}\` to find the holder.`));
      } else c(Error(`XAA IdP: callback server failed: ${s.message}`));
    }), i.listen(n, "127.0.0.1", () => {
      try {
        r();
      } catch (s) {
        c(N(s));
      }
    }), i.unref(), a = setTimeout((s) => s(Error("XAA IdP: login timed out")), E, c), a.unref();
  });
}
async function XSo(n) {
  return po("mcp_xaa_idp_login", async () => {
    let { idpIssuer: t, idpClientId: e } = n, r = await C1n(t);
    if (r) return se("xaa", `Using cached id_token for ${ho(t)}`), r;
    se("xaa", `No cached id_token for ${ho(t)}; starting OIDC login`);
    let i = await T1n(t), a = n.callbackPort ?? await vOe(), l = `http://localhost:${a}/callback`, f = b(32).toString("base64url"), m = { client_id: e, ...n.idpClientSecret && { client_secret: n.idpClientSecret } }, { authorizationUrl: g, codeVerifier: p } = await sbo(t, { metadata: i, clientInformation: m, redirectUrl: l, scope: "openid", state: f }), I = await X(a, f, n.abortSignal, () => {
      if (n.onAuthorizationUrl(g.toString()), !n.skipBrowserOpen) se("xaa", "Opening browser to IdP authorization endpoint"), Js(g.toString());
    }), c = await BRs(t, { metadata: i, clientInformation: m, authorizationCode: I.code, iss: I.iss, codeVerifier: p, redirectUri: l, fetchFn: P });
    if (!c.id_token) throw Error("XAA IdP: token response missing id_token (check scope=openid)");
    let s = A(c.id_token), o = s ? s * 1e3 : Date.now() + (c.expires_in ?? 3600) * 1e3;
    try {
      await k(t, c.id_token, o), se("xaa", `Cached id_token for ${ho(t)} (expires ${new Date(o).toISOString()})`);
    } catch (u) {
      se("xaa", `id_token cache write failed: ${d(u)}`);
    }
    return c.id_token;
  });
}
export {
  C1n,
  DAi,
  HAi,
  LAi,
  T1n,
  XSo,
  aTr,
  iTr,
  ltn
};
