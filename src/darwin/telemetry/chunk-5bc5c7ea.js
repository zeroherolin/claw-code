// darwin/telemetry/chunk-5bc5c7ea.js — Claude Code 2.1.310（darwin）模块 chunk-35h7qwz8.js
import { i } from "../shared/environment.js";
import { Am, K_ } from "../fs/ca-certs-load.js";
import { isIP as m } from "net";
var s = { debug: 0, info: 1, warn: 2, error: 3 };
function c() {
  let e = i.CLAUDE_GATEWAY_LOG_LEVEL?.toLowerCase();
  return e && e in s ? s[e] : s.info;
}
var f = { "\n": "\\n", "\r": "\\r", "	": "\\t" };
function g(e) {
  return e.replace(/[\u0000-\u001f\u007f-\u009f\u2028\u2029]/g, (r) => f[r] ?? `\\u${r.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function kr(e, r) {
  if (s[e] < c()) return;
  process.stderr.write(`[gateway] ${(/* @__PURE__ */ new Date()).toISOString()} ${e} ${g(r)}
`);
}
function LX(e, r) {
  process.stderr.write(`${JSON.stringify({ ts: (/* @__PURE__ */ new Date()).toISOString(), evt: e, ...r })}
`);
}
function Cas(e, r) {
  process.stderr.write(`
┌─────────────────────────────────────┐
│  Claude Code Gateway                │
└─────────────────────────────────────┘
`);
  let d = r.tls ? "https" : "http", u = ["metrics", "logs", "traces"].filter((t) => e.telemetry.forward_to.some((o) => o[t]));
  if (kr("info", `claude gateway listening on ${d}://${r.hostname}:${r.port}`), e.listen.public_url) kr("info", `public_url ${e.listen.public_url}`);
  let n = e.listen.trusted_proxies.length;
  if (kr("info", n === 0 ? "client IPs: TCP peer address (listen.trusted_proxies empty)" : `client IPs: X-Forwarded-For via listen.trusted_proxies (${n} ${n === 1 ? "entry" : "entries"})`), e.oidc) {
    kr("info", `oidc issuer ${e.oidc.issuer}`);
    let t = e.oidc.allowed_email_domains ?? [];
    kr("info", `email domains ${t.length > 0 ? t.join(",") : "(unrestricted)"}`);
    let o = e.oidc.allowed_groups ?? [];
    kr("info", `allowed groups ${o.length > 0 ? o.join(",") : "(unrestricted)"}`);
  } else kr("info", "oidc: not configured (customer-routed inference only)");
  if (e.cri?.enabled) kr("info", `customer-routed inference: enabled (${e.cri.org_allowlist.length} allowed org(s), policy webhook ${e.cri.policy?.webhook ? "configured" : "not configured"})`);
  kr("info", `upstreams ${e.upstreams.length}: ${e.upstreams.map((t) => `${t.name}(${t.provider})`).join(", ")}`), kr("info", e.telemetry.forward_to.length === 0 ? "telemetry relay: not configured" : `telemetry relay: ${e.telemetry.forward_to.length} destination(s), signals enabled: ${u.join(",") || "none"}`);
  for (let t of e.telemetry.forward_to) {
    let { host: o, hostname: p } = new URL(t.url);
    if (!m(p.replace(/^\[|\]$/g, "")) && Am() && K_(t.url)) kr("info", `telemetry relay: ${o} matches NO_PROXY; exports to it skip the proxy`);
  }
  kr("info", `managed settings: ${r.managed ? "configured" : "not configured"}`), kr("info", `upstream requests: at most ${r.outboundLimit} at once per process (set BUN_CONFIG_MAX_HTTP_REQUESTS to change)`);
  let a = e.upstreams.filter((t) => t.provider !== "anthropic");
  if (e.timeouts.operator_set && a.length > 0) kr("info", `timeouts.upstream_ttfb_ms: ${e.timeouts.upstream_ttfb_ms} ms also applies to streaming and count_tokens requests on ${a.map((t) => t.name).join(", ")} (older gateways applied it to provider: anthropic upstreams only)`);
  let l = e.store.readiness_grace_seconds;
  if (l > 0) kr("info", `readiness: /readyz keeps reporting ready for up to ${l}s after Postgres stops answering (store.readiness_grace_seconds)`);
}
export {
  Cas,
  LX,
  kr
};
