// darwin/remote/self-hosted-runner-decode-token-main.js — Claude Code 2.1.310（darwin）模块 chunk-694d9xmp.js
import "../fs/content-encoding.js";
import "../fs/async-hooks.93b1.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../models/claude-3-5-sonnet.js";
import "../auth/oauth-2025-04-20.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../shared/chunk-3b9c376b.js";
import "../context/not-admin-owned.js";
import { _, ee } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-59ffb646.js";
import "../shell/chunk-fea9c492.js";
import "../terminal/xterm-ghostty.js";
import "../cli/chunk-af2447be.js";
import "../telemetry/chunk-9097a12b.js";
import "../telemetry/chunk-9d6962d2.js";
import "../shared/chunk-2fe3b2b7.js";
import "../models/total-tokens-reminder.js";
import "../mcp/allowed-warning.js";
import "../shell/invalid-type.js";
import "../shared/chunk-4563156b.js";
import "../fs/utf-8.8f8e.js";
import "../fs/chunk-475c6783.js";
import "../plugins/chunk-0a4c51cf.js";
import "./local-agent.js";
import "../shared/chunk-8eee6836.js";
import "../permissions/classifier-transcript-too-long.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../shared/chunk-1b1c4439.js";
import "../terminal/chunk-3ca478a4.js";
import "../mcp/chunk-0e2a1db6.js";
import "../mcp/always-allow.js";
import "../plugins/skills-dir.js";
import "../git/chunk-c16cb6b4.js";
import "../fs/chunk-86be9585.js";
import "../shared/async-hooks.5238.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.aa9a.js";
import "../git/utf-8.js";
import "../artifacts/chunk-a6c9d164.js";
import "../shared/async-hooks.9e79.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../git/utf8-keep-bom.js";
import "../shared/chunk-d4196a83.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/async-hooks.7959.js";
import "../settings/workflow-launch-exec.js";
import "../fs/chunk-9b7a3f1c.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "./moved-directory.js";
import "../mcp/init-function-end.js";
import "../shell/spawn-error.js";
import "../auth/descriptor-direct.js";
import "./self-hosted.js";
import { rP, oa } from "../fs/ca-certs-load.js";
import "../settings/global-config-and-gates.js";
import "../shared/chunk-f98598c3.js";
import "../auth/permission-error.js";
import "../auth/claude-code-user.js";
import "../shell/find-generic-password.js";
import "../shared/async-hooks.b037.js";
import "../settings/ax-sr-suggestion-nav.js";
import "../auth/profile-explicit.js";
import "../fs/chunk-b6c2193e.js";
import "../fs/chunk-21654dda.js";
import "../context/fetch-project-timeline.js";
import "../mcp/toolbox-mcp-server-id.js";
import "../mcp/claude-browser.js";
import "../fs/reply-across-default-dirs.js";
import "../telemetry/chunk-b109a1d6.js";
import "../telemetry/chunk-addb1ac7.js";
import "../agents/chunk-44729602.js";
import "../git/get-url.js";
import "../shared/chunk-dda594a8.js";
import "../shared/chunk-46ffe22f.js";
import "../artifacts/cobalt-plinth-lovage.js";
import "../computer-use/chunk-217335d0.js";
import "../workflows/chunk-a1595c7e.js";
import "../agents/session-stable-address.js";
import "../agents/in-process-teammate.32be.js";
import "../shared/chunk-537f65d6.js";
import "../git/ssh-placeholder.js";
import "../shared/chunk-3a99f127.js";
import "../auth/auth-launcher-host-login.js";
import "../permissions/turn-abort.js";
import "../workflows/chunk-023a9c5d.js";
import { f9e } from "../vendor/anthropic-sdk/anthropic-version.js";
import "../shared/utf-8.js";
import "../cli/chunk-0b672c58.js";
import "../auth/claude-desktop-3p.js";
import "../auth/env-quad.js";
import "../context/account-memory-text-not-identified.js";
import "./chunk-c3e8b741.js";
import "../auth/needs-sign-in.js";
import { Tl } from "../shared/chunk-f52ecb8a.js";
import "../auth/oauth-slot-refresh-diskless.js";
import "../auth/oauth-automatic-redirect.js";
import "../ide/opener-missing.js";
import "../context/other-server.js";
import "../shared/chunk-37f396c1.js";
import "../shared/chunk-339a284e.js";
import "../shared/chunk-cb8096b1.js";
import "../shared/chunk-d1292a44.js";
import "../shared/chunk-6ae01e90.js";
import "../models/claude-mythos-preview.js";
import "../shared/sk-ant-sid.js";
import "../shared/chunk-cc3baac1.js";
import "../shared/chunk-1f805b50.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "../shared/chunk-8bf008d9.js";
import "../vendor/aws-sdk/chunk-d15f3977.js";
import "../shared/chunk-6da6c5a3.js";
import "../shared/chunk-86ecf3aa.js";
import "./chunk-95151620.js";
import { createPublicKey as l, verify as g } from "crypto";
function y(r) {
  let t = { header: false, verify: true, checkExpiry: true, help: false };
  for (let e = 0; e < r.length; e++) {
    let n = r[e];
    switch (n) {
      case "--help":
      case "-h":
        t.help = true;
        break;
      case "--header":
        t.header = true;
        break;
      case "--verify":
        t.verify = true;
        break;
      case "--no-verify":
        t.verify = false;
        break;
      case "--no-check-expiry":
        t.checkExpiry = false;
        break;
      case "--api-url": {
        let o = r[++e];
        if (o === void 0) throw Error("decode-token: --api-url requires a value");
        t.apiUrl = o;
        break;
      }
      default:
        if (n.startsWith("-")) throw Error(`decode-token: unknown flag ${n}`);
        if (t.token !== void 0) throw Error("decode-token: at most one positional token argument");
        t.token = n;
    }
  }
  return t;
}
function w(r) {
  let e = r.trim().replace(/^sk-ant-[a-z0-9]+-/i, "").split(".");
  if (e.length !== 3 || !e[0] || !e[1] || !e[2]) throw Error(`decode-token: not a JWT — expected 3 dot-separated base64url segments (after stripping any sk-ant- prefix), got ${e.length}`);
  return { headerB64: e[0], payloadB64: e[1], signatureB64: e[2] };
}
function u(r, t) {
  if (!/^[A-Za-z0-9_-]+$/.test(r)) throw Error(`decode-token: ${t} is not valid base64url (unexpected characters)`);
  let e = Buffer.from(r, "base64url").toString("utf8"), n;
  try {
    n = ee(e);
  } catch (o) {
    throw Error(`decode-token: ${t} is not valid JSON: ${o}`);
  }
  if (n === null || typeof n !== "object" || Array.isArray(n)) throw Error(`decode-token: ${t} is not a JSON object`);
  return n;
}
var E = { ES256: "EC", RS256: "RSA" };
function S(r, t = Math.floor(Date.now() / 1e3), e = 60) {
  let { exp: n, nbf: o } = r;
  if (typeof n !== "number") throw Error("decode-token: token has no numeric `exp` claim");
  if (t > n + e) throw Error(`decode-token: token EXPIRED at ${new Date(n * 1e3).toISOString()} (${Math.round(t - n)}s ago)`);
  if (typeof o === "number" && t + e < o) throw Error(`decode-token: token not valid until ${new Date(o * 1e3).toISOString()}`);
}
async function m(r) {
  let t = r.header.alg, e = r.header.kid;
  if (typeof t !== "string" || typeof e !== "string") throw Error("decode-token: JWT header is missing `alg` or `kid` — cannot select a JWKS key");
  let n = E[t];
  if (!n) throw Error(`decode-token: unsupported alg=${t} — only ES256 and RS256 are supported`);
  let o;
  try {
    o = await r.fetchFn(r.jwksUrl, { ...oa({ url: r.jwksUrl }), ...rP(void 0), signal: AbortSignal.timeout(3e4) });
  } catch (a) {
    throw Error(`decode-token: failed to fetch JWKS from ${r.jwksUrl}: ${a}`);
  }
  if (!o.ok) throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${r.jwksUrl}`);
  let i = (await o.json()).keys?.find((a) => a.kid === e);
  if (!i) throw Error(`decode-token: no JWKS key with kid=${e} at ${r.jwksUrl} — token may be signed by a different environment (try --api-url).`);
  if (i.kty !== n) throw Error(`decode-token: JWKS key kid=${e} has kty=${i.kty} but alg=${t} needs kty=${n}`);
  let c = "sha256", d = t === "ES256" ? { key: l({ key: i, format: "jwk" }), dsaEncoding: "ieee-p1363" } : { key: l({ key: i, format: "jwk" }) }, k = Buffer.from(`${r.headerB64}.${r.payloadB64}`, "utf8"), f = Buffer.from(r.signatureB64, "base64url");
  if (!g(c, k, d, f)) throw Error("decode-token: signature verification FAILED");
  if (r.checkExpiry !== false) S(r.payload);
  return { kid: e };
}
var h = 16384, x = 5e3;
async function b(r = process.stdin) {
  if (r.isTTY) return "";
  let t = [], e = 0;
  for await (let n of r) {
    let o = Buffer.from(n);
    if (e += o.length, e > h) throw Error(`decode-token: stdin exceeds ${h / 1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);
    t.push(o);
  }
  return Buffer.concat(t).toString("utf8");
}
async function v(r, t, e = process.stdin, n = x) {
  if (r?.trim()) return r.trim();
  let o = t.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();
  if (o) return o;
  let s = (await Tl(b(e), n, "decode-token: reading token from stdin")).trim();
  if (s) return s;
  throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.");
}
var O = `Usage: claude self-hosted-runner decode-token [token] [options]

Decode a session-ingress JWT (CLAUDE_CODE_SESSION_ACCESS_TOKEN) and print its
claims as JSON to stdout. Strips any sk-ant-cc- / sk-ant-si- prefix
automatically. Pipe to jq to extract a single claim.

Token source (first non-empty wins):
  1. Positional argument
  2. $CLAUDE_CODE_SESSION_ACCESS_TOKEN
  3. Piped stdin

Signature verification against <api-url>/v1/code/.well-known/jwks.json is ON
by default, as is the exp/nbf check (60s skew). Prints "verified (kid=…,
sig+exp)" to stderr on success; exits 1 on verification failure, expiry, or
JWKS fetch error. Does NOT pin iss/aud/token-type — compare those from the
decoded claims if your auth model depends on them.

Options:
  --header           Print the JWT header instead of the claims.
  --no-verify        Skip signature verification and the JWKS fetch. For
                     offline inspection only — do NOT feed the output to an
                     auth decision.
  --no-check-expiry  Skip the exp/nbf check (signature still verified). For
                     forensics ("was this token ever issued by us?").
  --api-url <url>    API base URL for JWKS fetch (default: $ANTHROPIC_BASE_URL
                     or the built-in default).
  --verify           (Deprecated — verification is the default. Kept so older
                     wrapper scripts don't break.)
  --help, -h         Show this help.

Examples:
  # In an --exec-path wrapper: who created this session? Signature is
  # verified by default, so a tampered token exits non-zero here.
  # Use jq -re (not -r) when the claim gates an auth decision — jq -r prints
  # the literal string "null" and exits 0 when the claim is missing.
  creator=$(claude self-hosted-runner decode-token | jq -re .act.email) \\
    || { echo "session JWT: no creator identity or verification failed" >&2; exit 1; }

  # Offline inspection (no network, no auth decision)
  claude self-hosted-runner decode-token --no-verify

  # Decode a different token by piping it (unset the env var first)
  echo "$SOME_TOKEN" | env -u CLAUDE_CODE_SESSION_ACCESS_TOKEN \\
    claude self-hosted-runner decode-token --no-verify
`;
async function K(r) {
  let t;
  try {
    t = y(r);
  } catch (e) {
    process.stderr.write(`${e instanceof Error ? e.message : e}
`), process.exit(1);
  }
  if (t.help) process.stdout.write(O), process.exit(0);
  try {
    let e = await v(t.token, process.env), { headerB64: n, payloadB64: o, signatureB64: s } = w(e), i = u(n, "header"), c = u(o, "payload");
    if (t.verify) {
      let f = `${(t.apiUrl ?? f9e()).replace(/\/+$/, "")}/v1/code/.well-known/jwks.json`, { kid: p } = await m({ headerB64: n, payloadB64: o, signatureB64: s, header: i, payload: c, jwksUrl: f, fetchFn: fetch, checkExpiry: t.checkExpiry }), a = t.checkExpiry ? "sig+exp" : "sig only, exp SKIPPED";
      process.stderr.write(`verified (kid=${p}, ${a})
`);
    }
    let d = t.header ? i : c;
    process.stdout.write(`${_(d, null, 2)}
`), process.exit(0);
  } catch (e) {
    process.stderr.write(`${e instanceof Error ? e.message : e}
`), process.exit(1);
  }
}
export {
  K as selfHostedRunnerDecodeTokenMain
};
