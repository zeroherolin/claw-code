// permissions/agent-memory.6j3s.js — Claude Code 2.1.310 模块 chunk-6j3s5vcy.js
import { In, mP } from "../fs/node-modules.gp4v.js";
import { Ne } from "../fs/async-hooks.9s1z.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Le } from "../models/claude-3-5-sonnet.21mz.js";
import { g1, bCt, hir } from "../shell/invalid-type.qnva.js";
import { i } from "../shared/environment.9a41.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { Cf, FFe } from "../fs/tempdir-owner-mismatch.5xe1.js";
import { rf } from "../git/not-link.8b09.js";
import { J2t, iZn, Hwt } from "../settings/non-string-value.58dq.js";
import { homedir as A } from "os";
import { isAbsolute as R, join as u, relative as D, resolve as L, sep as m } from "path";
var F0e = /* @__PURE__ */ new Set(["--model", "-m", "--permission-mode", "--inherit-permission-mode", "--proactivity", "--agent", "--agents", "--routine", "--effort", "--fast-mode", "--add-dir", "--mcp-config", "--settings", "--setting-sources", "--managed-settings", "--client-data-url", "--system-prompt", "--system-prompt-file", "--append-system-prompt", "--append-system-prompt-file", "--system-prompt-snapshot", "--append-subagent-system-prompt", "--append-subagent-system-prompt-file", "--fallback-model", "--advisor", "--channels", "--watch-artifact", "--watch-artifact-no-autoreact", "--permission-prompt-tool", "--permission-prompts", "--allowed-tools", "--allowedTools", "--disallowed-tools", "--disallowedTools", "--tools", "--session-id", "--debug-file", "-n", "--name", "--autocompact", "--betas", "--file", "--max-budget-usd", "--max-thinking-tokens", "--max-turns", "--task-budget", "--plan-mode-instructions", "--plugin-dir", "--plugin-dir-no-mcp", "--plugin-url", "--rewind-files", "--thinking", "--thinking-display", "--remote-control-session-name-prefix", "--json-schema"]), YUt = /* @__PURE__ */ new Set([...F0e, "--resume-session-at", "--resume-drops-turn", "--project-config-root", "--exec"]), myt = /* @__PURE__ */ new Set(["--allowed-tools", "--allowedTools", "--disallowed-tools", "--disallowedTools", "--tools", "--mcp-config", "--betas", "--add-dir", "--file", "--channels"]), C = /* @__PURE__ */ new Set(["--plugin-dir", "--plugin-dir-no-mcp", "--plugin-url"]), gdn = /* @__PURE__ */ new Set(["--dangerously-skip-permissions", "--allow-dangerously-skip-permissions", "--strict-mcp-config", "--dangerously-allow-browser-network-access", "--restricted", "--disable-slash-commands", "--include-unsupported-models", "--verbose", "--reply-on-resume", "--ide", "--chrome", "--no-chrome", "--bare", "--safe-mode", "--brief", "--remote-control", "--rc", "--local", "--unsandboxed", "--allow-other-models"]), KHo = /* @__PURE__ */ new Set(["CLAUDE_CODE_SUBAGENT_MODEL_FORCE", "CLAUDE_CODE_HOST_GATEWAY_LINEAGE"]), qHo = [...bCt, ...hir, "CLAUDE_CODE_SUBAGENT_MODEL_FORCE"], tQe = /* @__PURE__ */ new Set(["CLAUDE_CONFIG_DIR", "CLAUDE_INTERNAL_FC_OVERRIDES", ...qHo, "CLAUDE_CODE_CLIENT_DATA_URL", "CLAUDE_CODE_ALLOW_OTHER_MODELS", "CLAUDE_CODE_ATTRIBUTION_PROJECT", ...g1, "AWS_REGION", "AWS_DEFAULT_REGION", "ANTHROPIC_BEDROCK_REGION_PREFIX", "AWS_PROFILE", "AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", "GOOGLE_APPLICATION_CREDENTIALS", "GOOGLE_CLOUD_PROJECT", "GCLOUD_PROJECT", "CLAUDE_SECURESTORAGE_CONFIG_DIR", "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST", "CLAUDE_CODE_HOST_GATEWAY_LINEAGE"]), g = /* @__PURE__ */ new Set(["AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", "GOOGLE_APPLICATION_CREDENTIALS"]), S = "CLAUDE_SECURESTORAGE_CONFIG_DIR";
function T(n) {
  let s = Le(), r = [u(s, "jobs"), u(Cf(), FFe()), u(s, "projects"), u(s, "plans"), u(s, "agent-memory")], e = i.CLAUDE_CODE_REMOTE_MEMORY_DIR;
  if (e) r.push(u(e, "projects"), u(e, "agent-memory"));
  if (g.has(n)) try {
    r.push(u(A(), ".claude"));
  } catch {
  }
  return r;
}
function f(n) {
  return rf(In(L(n)));
}
function I(n) {
  return O() === "windows" ? /^([A-Za-z]:[\\/]|[\\/]{2})/.test(n) : R(n);
}
function w(n, s) {
  if (s === "") return n === S ? void 0 : "empty path";
  if (!I(s)) return "not a full path";
  let r = f(s);
  if (O() !== "windows" && r.split(m).includes(rf(FFe()))) return "path is inside a Claude temp folder, which background sessions can write to without asking";
  for (let e of T(n)) {
    let o = D(f(e), r);
    if (o !== ".." && !o.startsWith(`..${m}`) && !R(o)) return `path is inside ${e}, where background sessions can write some files without asking`;
  }
  return;
}
function nGs(n, s) {
  let r = {};
  for (let [e, o] of Object.entries(n)) r[e] = o !== "" && g.has(e) ? L(s, N(e, o)) : o;
  return r;
}
function N(n, s) {
  if (!n.startsWith("AWS_") || !s.startsWith("~/")) return s;
  try {
    return u(A(), s.slice(2));
  } catch {
    return s;
  }
}
var y = /^\s*(?:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}|claude_proj_(?:staging_|local_)?01[1-9A-HJ-NP-Za-km-z]{22})\s*$/;
function rGs(n) {
  let s = {}, r = [];
  for (let [e, o] of Object.entries(n)) {
    let a = !tQe.has(e) ? "not kept for background sessions" : KHo.has(e) && !Ne(o) ? "only kept when set to a true value such as 1" : g.has(e) || e === S ? w(e, o) : e === "CLAUDE_CODE_ATTRIBUTION_PROJECT" && !y.test(o) ? "not a claude.ai Project ID" : void 0;
    if (a) r.push(`${Hwt(e)} (${a})`);
    else s[e] = o;
  }
  if (r.length === 0) return n;
  return t(`[jobs] ignored these saved environment entries in the job's state.json: ${r.join(", ")}`, { level: "warn" }), Object.keys(s).length > 0 ? s : void 0;
}
function WNr(n, s) {
  let { kept: r, dropped: e } = iZn(n);
  return e.forEach(({ name: o, problem: a }) => {
    try {
      t(`[jobs] dropped environment entry ${Hwt(o)} from ${s}: ${J2t[a]}.`, { level: "warn" });
    } catch {
    }
  }), r;
}
function $0e(n) {
  let s = [], r = [];
  for (let e = 0; e < n.length; e++) {
    let o = n[e];
    if (!o.startsWith("-")) {
      r.push(o);
      continue;
    }
    let a = o.indexOf("="), l = a === -1 ? o : o.slice(0, a);
    if (a !== -1 && !F0e.has(l) && gdn.has(l)) {
      s.push(l), r.push(o);
      continue;
    }
    let d = a === -1 && F0e.has(l), _ = l !== "-m" && (a === -1 ? gdn.has(l) || d && n[e + 1] !== void 0 : F0e.has(l)), h = _ ? s : r;
    if (h.push(o), d && n[e + 1] !== void 0) h.push(n[++e]);
    if (!_ || d && myt.has(l)) while (n[e + 1] !== void 0 && !n[e + 1].startsWith("-")) h.push(n[++e]);
  }
  if (r.length > 0) t(`[jobs] stripped respawnFlags token(s) that a restart does not re-apply: ${r.join(" ")}`, { level: "warn" });
  return U(F(s));
}
function F(n) {
  let s = [];
  for (let r = 0; r < n.length; r++) {
    let e = n[r];
    if (!F0e.has(e)) {
      s.push(e);
      continue;
    }
    let o = n[++r];
    if (!o.startsWith("-")) {
      s.push(e, o);
      continue;
    }
    s.push(`${e === "-n" ? "--name" : e}=${o}`);
    let a = n[r + 1];
    if (myt.has(e) && a !== void 0 && !a.startsWith("-")) s.push(e);
  }
  return s;
}
function U(n) {
  let s = [];
  for (let e = 0; e < n.length; e++) {
    let o = n[e], a = o.indexOf("="), l = a === -1 ? o : o.slice(0, a), d = [o];
    if (a === -1 && F0e.has(l) && n[e + 1] !== void 0) {
      if (d.push(n[++e]), myt.has(l)) while (n[e + 1] !== void 0 && !n[e + 1].startsWith("-")) d.push(n[++e]);
    }
    s.push({ name: l, toks: d });
  }
  let r = /* @__PURE__ */ new Map();
  for (let e = 0; e < s.length; e++) {
    let o = s[e];
    if (F0e.has(o.name) && !myt.has(o.name) && !C.has(o.name)) r.set(o.name, e);
  }
  return s.filter((e, o) => (r.get(e.name) ?? o) === o).flatMap((e) => e.toks);
}
function sre(n) {
  let s = [];
  for (let r = 0; r < n.length; r++) {
    let e = n[r];
    if (e === "--") {
      for (let a = r; a < n.length; a++) s.push(n[a]);
      break;
    }
    let o = e.startsWith("--") ? e.indexOf("=") : -1;
    if (o !== -1 && (YUt.has(e.slice(0, o)) || c.has(e.slice(0, o)))) {
      s.push(e.slice(0, o + 1) + p(e.slice(0, o), e.slice(o + 1)));
      continue;
    }
    if (/^-[a-zA-Z].+/.test(e)) {
      let a = 1;
      while (a < e.length - 1 && GNr.has(`-${e[a]}`)) a++;
      let l = `-${e[a]}`;
      if (e.length > a + 1 && (YUt.has(l) || c.has(l))) {
        s.push(e.slice(0, a + 1) + p(l, e.slice(a + 1)));
        continue;
      }
      if (e.length === a + 1 && a > 1 && (YUt.has(l) || c.has(l))) {
        if (s.push(e), YUt.has(l) && n[r + 1] !== void 0) {
          if (s.push(p(l, n[++r])), myt.has(l)) while (n[r + 1] !== void 0 && !E(n[r + 1])) s.push(p(l, n[++r]));
        } else if (c.has(l) && n[r + 1] !== void 0 && !E(n[r + 1])) s.push(mP(n[++r]));
        continue;
      }
    }
    if (s.push(e), YUt.has(e) && n[r + 1] !== void 0) {
      if (s.push(p(e, n[++r])), myt.has(e)) while (n[r + 1] !== void 0 && !E(n[r + 1])) s.push(p(e, n[++r]));
    } else if (c.has(e) && n[r + 1] !== void 0 && !E(n[r + 1])) s.push(mP(n[++r]));
  }
  return s;
}
var b = /* @__PURE__ */ new Set(["--system-prompt", "--append-system-prompt", "--append-subagent-system-prompt", "--plan-mode-instructions", "--name", "-n"]);
function p(n, s) {
  return b.has(n) ? s : mP(s);
}
var c = /* @__PURE__ */ new Set(["-r", "--resume"]), GNr = /* @__PURE__ */ new Set(["-c", "-p", "-h", "-v"]);
function E(n) {
  return n.length > 1 && n.startsWith("-");
}
function hdn(n) {
  return n.includes("--reply-on-resume") ? [...n] : [...n, "--reply-on-resume"];
}
function ydn(n) {
  return n.filter((s) => s !== "--reply-on-resume");
}
export {
  $0e,
  F0e,
  GNr,
  KHo,
  WNr,
  YUt,
  gdn,
  hdn,
  myt,
  nGs,
  qHo,
  rGs,
  sre,
  tQe,
  ydn
};
