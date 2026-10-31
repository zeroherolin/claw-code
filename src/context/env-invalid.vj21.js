// context/env-invalid.vj21.js — Claude Code 2.1.310 模块 chunk-vj21r9wj.js
import { L, Wr } from "./not-admin-owned.ersa.js";
import { yn } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { d4t } from "../models/claude-3-5-sonnet.21mz.js";
import { re, zr, x5, dc, Pdr } from "../shared/chunk-j79dwkaq.js";
import { i } from "../shared/environment.9a41.js";
import { Fli, fe, UYo, Gwn, qYo, tk, XYo, Kwn } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { _m, PF, wG } from "../shared/chunk-pg9vp681.js";
import { Iu } from "../fs/chunk-tcpay5ps.js";
import { bv } from "../telemetry/not-stopped.spmj.js";
import { wLe, SL, kc, nl, LVe, tZ, _vt, lRe, KV, gn, FLe } from "../settings/global-config-and-gates.27xj.js";
import { QA } from "../workflows/chunk-0c6r1zf7.js";
import { nk, rEn, Te, VNe } from "../models/total-tokens-reminder.psq3.js";
import { Qvt, gI, n5o } from "../mcp/allowed-warning.j2d4.js";
import { Zo } from "../fs/utf-8.fmbx.js";
import { Ri } from "../fs/async-hooks.2k4e.js";
import { uXo, Ro } from "../settings/workflow-launch-exec.t4r2.js";
import { _T, Lqe, TK } from "../fs/ca-certs-load.ft7b.js";
import { g5, Sqt } from "../auth/profile-explicit.b7t3.js";
import { XZe, $Yn } from "../api/anthropic-client.7pf8.js";
import { s, n } from "../telemetry/render-glyph-cardinality.7car.js";
import { zE } from "./team-memory-sync.0s3j.js";
import { ag, M9s } from "../permissions/frontmatter-grant-withheld.8tyz.js";
import { _Xe, DOs, OWn, srn, irn, xDt, tGn, Fke, wRo, Egt, EWe, _w, Bsn, jsn } from "../core/conversation-engine.31gx.js";
import { ne } from "../workflows/workflow-size-guideline-change.1rc0.js";
import { uU } from "../mcp/declared-tools-dropped-at-compaction.brrn.js";
import { FQn, $Qn, PJs } from "../settings/gable-onyx-sluice.5y5b.js";
import { e$n } from "../fs/hipaa-history-retention-prune.1f18.js";
import { uft } from "../fs/npm-global.xrw6.js";
import { XYe } from "../telemetry/version-lock-acquired.cpwy.js";
import { YEe } from "../settings/chunk-842gkt0c.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
import { kdt } from "../shared/chunk-s0hrm2wv.js";
import { Qn } from "../vendor/chalk/chunk-06zv4nk8.js";
import { ZPs } from "../remote/invalid-url.k29p.js";
import { z } from "../shared/chunk-mxa4mwnj.js";
function LPn(o) {
  let t = [];
  for (let u of o) {
    let a = typeof u.value === "string" ? u.value : Array.isArray(u.value) ? u.value.join(", ") : null;
    if (a === null || a === "" || a === "none") continue;
    t.push(u.label ? { label: u.label, value: a } : { value: a });
  }
  return t;
}
function r5e(o) {
  let t = o.map((u) => u.filter((a) => !a.antOnly));
  return t.push(o.flatMap((u) => u.filter((a) => a.antOnly))), t;
}
var vr = import.meta.require("../artifacts/is-artifact-preview-enabled.zs3r.js");
function jus() {
  return [];
}
function Wus() {
  return [];
}
function Gus() {
  return [];
}
function zus(o, t = null, u) {
  let a = o?.find((c) => c.name === "ide");
  if (t) {
    let c = zE(t.ideType), l = Fke(t.ideType) ? "plugin" : "extension";
    if (t.error) return [{ label: "IDE", value: r(n, { children: [Qn("error", u)(ne.cross), " Error installing ", c, " ", l, ": ", t.error, `
`, "Please restart your IDE and try again."] }) }];
    if (t.installed) if (a && a.type === "connected") if (t.installedVersion !== a.serverInfo?.version) return [{ label: "IDE", value: `Connected to ${c} ${l} version ${t.installedVersion} (server version: ${a.serverInfo?.version})` }];
    else return [{ label: "IDE", value: `Connected to ${c} ${l} version ${t.installedVersion}` }];
    else return [{ label: "IDE", value: `Installed ${c} ${l}` }];
  } else if (a) {
    let c = wRo(a) ?? "IDE";
    if (a.type === "connected") return [{ label: "IDE", value: `Connected to ${c} extension` }];
    else return [{ label: "IDE", value: `${Qn("error", u)(ne.cross)} Not connected to ${c}` }];
  }
  return [];
}
function Vus(o = [], t) {
  let u = o.filter((l) => l.name !== "ide" && !uU(l));
  if (!u.length) return [];
  let a = { connected: 0, cached: 0, pending: 0, needsAuth: 0, disabled: 0, failed: 0 };
  for (let l of u) switch (l.type) {
    case "connected":
      a.connected++;
      break;
    case "cached":
      a.cached++;
      break;
    case "pending":
      a.pending++;
      break;
    case "needs-auth":
      a.needsAuth++;
      break;
    case "disabled":
      a.disabled++;
      break;
    case "failed":
      a.failed++;
      break;
    default:
  }
  let c = [];
  if (a.connected) c.push(Qn("success", t)(`${a.connected} connected`));
  if (a.cached) c.push(Qn("inactive", t)(`${a.cached} cached`));
  if (a.needsAuth) c.push(Qn("warning", t)(`${a.needsAuth} need auth`));
  if (a.pending) c.push(Qn("inactive", t)(`${a.pending} pending`));
  if (a.disabled) c.push(Qn("inactive", t)(`${a.disabled} disabled`));
  if (a.failed) c.push(Qn("error", t)(`${a.failed} failed`));
  return [{ label: "MCP servers", value: `${c.join(", ")} ${Qn("inactive", t)("· /mcp")}` }];
}
async function Kus(o, t, u) {
  if (QA()) return [];
  let a = await _w(o, false, t, u), c = Bsn(a), l = [], d = jsn(a);
  if (d) l.push(`Instruction files will impact performance: ${d.summary.fileCount} files, ${Ri(d.summary.totalChars)} chars in total > ${Ri(d.summary.totalLimitChars)}`);
  let g = EWe();
  c.forEach((p) => {
    let m = Zo(p.path);
    l.push(`Large ${m} will impact performance (${Ri(p.content.length)} chars > ${Ri(g)})`);
  });
  let f = xDt(Egt(o));
  for (let { path: p, why: m } of f.shown) {
    let v = srn(m, Zo(p));
    l.push(r(s, { flexDirection: "column", flexShrink: 1, children: [e(n, { children: v.lead }), r(s, { flexDirection: "row", children: [e(s, { flexShrink: 0, marginRight: 1, children: e(n, { children: v.mark }) }), e(n, { bold: true, wrap: "truncate-start", children: v.path })] })] }, p));
  }
  if (f.more > 0) l.push(irn(f));
  return l;
}
function y(o = "remote") {
  let t = Gwn();
  if (!t) return null;
  return `Enterprise managed settings (${t.map((a) => a === "remote" ? o : C(a)).join(" + ")}, merged)`;
}
function qus() {
  let o = Ro(), t = UYo(), c = [{ label: "Setting sources", value: o.filter((p) => {
    if (p === "policySettings" && t.composes !== "none") return true;
    let m = fe(p);
    return m !== null && Object.keys(m).length > 0;
  }).map((p) => {
    if (p === "policySettings") {
      if (t.composes !== "none") {
        let v = t.composes === "remoteSlot", S = Fli() ? `${v ? "remote " : ""}default settings payload` : v ? "remote helper" : "helper", b = t.mergedOver ? `${S} merged over ${C(t.mergedOver)}` : S;
        return (v ? y(b) : null) ?? `Enterprise managed settings (${b})`;
      }
      let m = tk();
      if (m === null) return null;
      return y() ?? A(m);
    }
    return uXo(p);
  }).filter((p) => p !== null) }], l = XYo();
  if (l.length > 0) c.push({ label: "Skipped sources", value: l.map(A) });
  if (ag()) {
    let p = [...M9s()];
    c.push({ label: "Permission rules", value: ["Managed settings only (allowManagedPermissionRulesOnly)", ...p.length > 0 ? [`allowed-tools ignored this session: ${p.join(", ")}`] : []] });
  }
  let d = _Xe();
  if (d && DOs(d)) c.push({ label: "Managed settings (remote)", value: OWn(d) });
  let g = FQn();
  if (PJs(g)) c.push({ label: "Organization policy", value: $Qn(g) });
  let f = ZPs();
  if (f !== void 0) c.push({ label: "Client data", value: f });
  return c;
}
function Yus(o) {
  return [{ label: "Auto mode server", value: tGn(o) ? "Enabled" : "Disabled" }];
}
function Xus() {
  return [];
}
function C(o) {
  switch (o) {
    case "helper":
    case "remote":
    case "plist":
      return o;
    case "hklm":
      return "HKLM";
    case "file": {
      let { hasBase: t, hasDropIns: u } = qYo();
      if (t && u) return "file + drop-ins";
      return u ? "drop-ins" : "file";
    }
    case "parent":
      return "parent process";
    case "hkcu":
      return "HKCU";
  }
}
function A(o) {
  return `Enterprise managed settings (${C(o)})`;
}
async function Jus() {
  return (await XYe()).filter((t) => t.type !== "error").map((t) => t.message);
}
async function Qus(o) {
  let t = wG(), u = _m();
  if (!t && !u) return [];
  let a = [];
  if (u) return a.push(`${u} — nothing will run unwrapped: new background sessions are refused unless a background service that validated an earlier value is still serving them (\`claude daemon status\` shows it)`), a;
  let c = Iu();
  if (a.push(`Self-exec: \`${[c.cmd, ...c.prefixArgs].join(" ")}\` (CLAUDE_CODE_PROCESS_WRAPPER)`), !await PF()) a.push(`The launcher \`${c.cmd}\` cannot run right now (deleted or not executable) — new background sessions are refused until it is restored; a background service that validated it earlier keeps serving its existing sessions (\`claude daemon status\`)`);
  let l = await bv(1, o).catch(() => null);
  if (!l) return a;
  let [{ controlRequest: d }, { BG_PROTO: g }] = await Promise.all([import("../tasks/control-request.k4qr.js"), import("../tasks/bounded-mark-count-or-undefined.9adx.js")]), f = await d({ proto: g, op: "nudge" }).catch(() => null), p = f?.ok && f.op === "nudge" ? f.processWrapper ?? "" : l.processWrapper ?? "", m = re(zr(yn(p)), 200);
  if (l.origin === "service") a.push(`The installed background service predates launcher support and runs outside \`${c.cmd}\`; its sessions are covered, the service process itself is not — a launcher-aware \`claude daemon install\` will close this`);
  if (p !== t) a.push(`The running background service launches sessions via \`${m || "(no launcher)"}\`, but this session resolves \`${t}\` — restart it (and your running claude sessions) to converge`);
  return a;
}
async function Zus(o) {
  let t = await uft({ storageV5: o }), u = [], { statusNotices: a, invalidEntries: c } = kdt(YEe().errors);
  if (c.length > 0) {
    let d = L(c.map((f) => f.file && dc(f.file))).join(", ");
    u.push(`Found invalid entries in: ${d}.`);
    let g = await e$n(o);
    if (g === "settings_unknowable" || g === "settings_invalid_key_set") u.push("Transcript retention cleanup is paused until the settings errors above are fixed (cleanupPeriodDays cannot be determined reliably).");
  }
  for (let l of a) u.push(l.message);
  for (let [l, d] of Kwn()) u.push(`${l}
${d}`);
  if (t.warnings.forEach((l) => {
    u.push(l.issue);
  }), t.hasUpdatePermissions === false) u.push("No write permissions for auto-updates");
  return u;
}
function o5e(o) {
  if (!(z() && o !== void 0)) return;
  return (async () => ({ refreshKnownDead: nl() && await KV(o) }))().catch(() => ({ refreshKnownDead: false }));
}
function NPn(o) {
  let t = FLe();
  if (!t) return [];
  let u = [];
  if (o !== void 0 && z() ? o.refreshKnownDead : nl() && lRe()) {
    u.push({ label: "Login", value: "Expired — log in again" });
    let p = gn();
    if (p?.organizationName && !i.IS_DEMO) u.push({ label: "Organization", value: p.organizationName });
    if (p?.emailAddress && !i.IS_DEMO) u.push({ label: "Email", value: p.emailAddress });
    return u;
  }
  if (t.subscription) u.push({ label: "Login method", value: `${t.subscription} account` });
  let a = " · not in use", c = t.apiKeySource ?? "none", l = LVe(t.tokenSource ?? "none", c);
  if (t.tokenSource) u.push({ label: "Auth token", value: l.tokenSource === t.tokenSource ? t.tokenSource : `${t.tokenSource}${a}` });
  if (t.apiKeySource) u.push({ label: "API key", value: l.apiKey ? t.apiKeySource : `${t.apiKeySource}${a}` });
  let d = _vt();
  if (d && tZ()) u.push({ label: "apiKeyHelper", value: i.IS_DEMO ? "Failing" : `Failing — last run ${x5(d, Pdr)}` });
  let g = kc(), f = g && LVe("profile", c).tokenSource === "profile";
  if (g) u.push({ label: "Profile", value: `${Sqt()}${f ? "" : a}` });
  if (f) {
    let p = g5();
    if (!i.IS_DEMO) {
      if (p?.organizationName || p?.organizationUuid) u.push({ label: "Organization", value: [p.organizationName, p.organizationUuid].filter(Boolean).join(" · ") });
      if (p?.accountEmail) u.push({ label: "Email", value: p.accountEmail });
    }
  }
  if (t.organization && !i.IS_DEMO) u.push({ label: "Organization", value: t.organization });
  if (t.email && !i.IS_DEMO) u.push({ label: "Email", value: t.email });
  return u;
}
function h(o) {
  let t;
  try {
    t = new URL(o);
  } catch {
    t = void 0;
  }
  if (t?.host) {
    if (!t.username && !t.password) return o;
    let c = new URL(t.href);
    return c.username = "***", c.password = "", c.href;
  }
  let u = o.lastIndexOf("@");
  if (u < 0) return o;
  return `${/^[a-z][a-z0-9+.-]*:\/\//i.exec(o)?.[0] ?? ""}***${o.slice(u)}`;
}
function FPn() {
  let o = Te(), t = [], u = wLe();
  if (u !== void 0) t.push({ label: "Allowed providers", value: u.length === 0 ? "none (managed allowedProviders is empty)" : `${u.map(rEn).join(", ")} (managed allowedProviders)` });
  if (o !== "firstParty") {
    let l = VNe(), d = l ? `${nk[o]} + ${nk[l]}` : nk[o];
    t.push({ label: "API provider", value: d });
  }
  if (o === "firstParty") {
    let l = i.ANTHROPIC_BASE_URL;
    if (l) t.push({ label: "Anthropic base URL", value: h(l) });
  } else if (o === "bedrock") {
    let l = i.ANTHROPIC_BEDROCK_BASE_URL;
    if (l) t.push({ label: "Bedrock base URL", value: h(l) });
    t.push({ label: "AWS region", value: E() });
    let d = i.ANTHROPIC_BEDROCK_SERVICE_TIER;
    if (d) t.push({ label: "Bedrock service tier", value: d });
    if (i.CLAUDE_CODE_SKIP_BEDROCK_AUTH) t.push({ value: "AWS auth skipped" });
  } else if (o === "vertex") {
    let l = i.ANTHROPIC_VERTEX_BASE_URL;
    if (l) t.push({ label: "Vertex base URL", value: h(l) });
    let d = i.ANTHROPIC_VERTEX_PROJECT_ID;
    if (d) t.push({ label: "GCP project", value: d });
    if (t.push({ label: "Default region", value: d4t() }), i.CLAUDE_CODE_SKIP_VERTEX_AUTH) t.push({ value: "GCP auth skipped" });
  } else if (o === "foundry") {
    let l = i.ANTHROPIC_FOUNDRY_BASE_URL;
    if (l) t.push({ label: "Microsoft Foundry base URL", value: h(l) });
    let d = i.ANTHROPIC_FOUNDRY_RESOURCE;
    if (d) t.push({ label: "Microsoft Foundry resource", value: d });
    if (i.CLAUDE_CODE_SKIP_FOUNDRY_AUTH) t.push({ value: "Microsoft Foundry auth skipped" });
  } else if (o === "anthropicAws") {
    let l = i.ANTHROPIC_AWS_BASE_URL;
    if (l) t.push({ label: "Claude Platform on AWS base URL", value: h(l) });
    let d = i.ANTHROPIC_AWS_WORKSPACE_ID;
    if (d) t.push({ label: "Workspace ID", value: d });
    if (t.push({ label: "AWS region", value: Qvt() }), i.CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH) t.push({ value: "Claude Platform on AWS auth skipped" });
  } else if (o === "anthropicGoogleCloud") {
    let l = i.ANTHROPIC_GOOGLE_CLOUD_BASE_URL;
    if (l) t.push({ label: "Claude Platform on Google Cloud base URL", value: h(l) });
    let d = i.ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID;
    if (d) t.push({ label: "Workspace ID", value: d });
    let g = i.ANTHROPIC_GOOGLE_CLOUD_PROJECT || i.GOOGLE_CLOUD_PROJECT;
    if (g) t.push({ label: "GCP project", value: g });
    if (t.push({ label: "GCP location", value: i.ANTHROPIC_GOOGLE_CLOUD_LOCATION || "global" }), i.CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH) t.push({ value: "Claude Platform on Google Cloud auth skipped" });
  } else if (o === "gateway") {
    let l = Wr();
    if (l) {
      if (t.push({ label: "Gateway URL", value: h(l.url) }), l.email && !i.IS_DEMO) t.push({ label: "Gateway account", value: l.email });
    }
  }
  if (o === "mantle" || VNe() === "mantle") {
    let l = i.ANTHROPIC_BEDROCK_MANTLE_BASE_URL;
    if (l) t.push({ label: "Amazon Bedrock (Mantle) base URL", value: h(l) });
    if (o === "mantle") t.push({ label: "AWS region", value: E() });
    if (i.CLAUDE_CODE_SKIP_MANTLE_AUTH) t.push({ value: "Amazon Bedrock (Mantle) auth skipped" });
  }
  let a = Lqe();
  if (a) t.push({ label: "Proxy", value: TK(a) ? h(a) : `${h(a).replace(/\p{Cc}/gu, "")} (invalid — ignored; fix or unset the proxy env var)` });
  let c = _T();
  if (i.NODE_EXTRA_CA_CERTS) t.push({ label: "Additional CA cert(s)", value: i.NODE_EXTRA_CA_CERTS });
  if (c) {
    if (c.cert && i.CLAUDE_CODE_CLIENT_CERT) t.push({ label: "mTLS client cert", value: i.CLAUDE_CODE_CLIENT_CERT });
    if (c.key && i.CLAUDE_CODE_CLIENT_KEY) t.push({ label: "mTLS client key", value: i.CLAUDE_CODE_CLIENT_KEY });
  }
  return t;
}
function E() {
  let { region: o, source: t } = n5o();
  switch (t) {
    case "env":
      return o;
    case "shared-config":
      return `${o} (from AWS config)`;
    case "env-invalid":
    case "default":
      return gI(), t === "env-invalid" ? `${o} (default — region env var invalid, ignored; fix or unset AWS_REGION / AWS_DEFAULT_REGION)` : `${o} (default — set AWS_REGION or add a region to your AWS config)`;
  }
}
function eps(o) {
  let t = SL(o), u = XZe();
  if (u !== void 0) return `${t} (${$Yn(SL(u.previousModel))})`;
  return t;
}
export {
  FPn,
  Gus,
  Jus,
  Kus,
  LPn,
  NPn,
  Qus,
  Vus,
  Wus,
  Xus,
  Yus,
  Zus,
  eps,
  jus,
  o5e,
  qus,
  r5e,
  zus
};
