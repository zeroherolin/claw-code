// permissions/sdk-launch-initialize.s89n.js — Claude Code 2.1.310 模块 chunk-s89n2cn8.js
import { Ne } from "../fs/async-hooks.9s1z.js";
import { ke, Sb, _C } from "../context/not-admin-owned.ersa.js";
import { R, d, v } from "../telemetry/anthropic-workspace-id.36ys.js";
import { i } from "../shared/environment.9a41.js";
import { _, ee, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { P3t, wCn, ECn } from "../fs/backed-up.p1qn.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { vM, USe, BSe } from "../shell/invalid-type.qnva.js";
import { fn, gj, rs } from "../shared/cli-error.bk7h.js";
import { frt, Be, Tt } from "../mcp/allowed-warning.j2d4.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { g, m, p } from "../telemetry/chunk-wn8xtaqg.js";
import { uo, Tr, _l } from "../settings/global-config-and-gates.27xj.js";
import { Ykn } from "../cli/chunk-33ax6j5s.js";
import { cj } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { No } from "../fs/chunk-gzs70jxe.js";
import { Ro, kp } from "../settings/workflow-launch-exec.t4r2.js";
import { Bn } from "../mcp/chunk-ykcv164t.js";
import { $li, TYo, fe, nz, JYo } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { tm, loe, y4 } from "../settings/non-string-value.58dq.js";
import { Gi } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { bi } from "../context/account-memory-text-not-identified.y6np.js";
import { VDe } from "../shared/request-id.qrf8.js";
import { oe, C, u, yt, T } from "../vendor/zod/string-format.k395.js";
import { et } from "../shared/chunk-tftf1nn4.js";
import { resolve as y } from "path";
var Y = 268435456, D = Symbol("first line too long"), A = 65536, E, b, Q = f(() => u({ type: T("control_request"), request: yt({ subtype: T("initialize"), plugins: oe().optional() }) }));
function Oys(e) {
  if (E) return;
  let n = x(e);
  E = Z(n).then(te, (r) => (n.error = r, p("sdk_launch_initialize", "stdin_error"), { kind: "absent" })).catch(() => (m("sdk_launch_initialize", "parse_threw"), { kind: "absent" })), E.then(() => j(n));
}
function Mys(e) {
  if (b) return;
  let n = x(e);
  j(n);
}
function Hys(e) {
  let n = b;
  if (!n || !n.pumping || n.capped || n.adopted || n.watch) return;
  let r = { watcher: e, held: [], heldChars: 0, passing: false };
  n.watch = r;
  for (let s of n.stash.splice(0)) G(n, s);
  if (n.ended || n.error !== void 0) e.ended();
  return () => F(n, r);
}
function A_r() {
  return E ?? Promise.resolve(void 0);
}
function R_r() {
  let e = b;
  if (!e || e.adopted) return;
  if (e.watch) F(e, e.watch);
  return e.adopted = true, ne(e);
}
function bao(e) {
  let n = C(frt()).optional().safeParse(e);
  if (!n.success) return false;
  let r = n.data;
  if (r === void 0 || r.length === 0) return;
  let s = _l(), a = s?.preEnterOriginalCwd ?? s?.originalCwd ?? ke(), o = new Set(Sb().map((h) => y(a, h))), c = new Set(_C().map((h) => y(a, h)));
  return r.every((h) => h.skipMcpDiscovery ? c.has(y(a, h.path)) : o.has(y(a, h.path)));
}
function x(e) {
  let n = { generator: e(), stash: [], inflight: void 0, ended: false, error: void 0, adopted: false, capped: false, pumping: false, watch: void 0 };
  return b = n, n;
}
async function Z(e) {
  let n = "";
  for (; ; ) {
    let r = n.indexOf(`
`);
    if (r !== -1) {
      let a = n.slice(0, r);
      if (a.trim() !== "") return a;
      n = n.slice(r + 1);
      continue;
    }
    if (n.length > Y) return e.capped = true, D;
    e.inflight = e.generator.next();
    let s = await e.inflight;
    if (e.inflight = void 0, s.done) return e.ended = true, null;
    e.stash.push(s.value), n += s.value;
  }
}
async function j(e) {
  e.pumping = true;
  try {
    while (!e.adopted && !e.ended && !e.capped && e.error === void 0) {
      e.inflight = e.generator.next();
      let n = await e.inflight;
      if (e.inflight = void 0, n.done) e.ended = true;
      else G(e, n.value);
    }
  } catch (n) {
    e.inflight = void 0, e.error = n;
  }
  if (e.ended || e.error !== void 0) e.watch?.watcher.ended();
}
function G(e, n) {
  let r = e.watch;
  if (!r) {
    e.stash.push(n);
    return;
  }
  let s = 0;
  for (; ; ) {
    let o = n.indexOf(`
`, s);
    if (o === -1) break;
    let c = n.slice(s, o);
    s = o + 1;
    let h = !r.passing && r.heldChars + c.length <= A;
    if (r.passing = false, h && r.watcher.takes(r.held.join("") + c)) {
      r.held = [], r.heldChars = 0;
      continue;
    }
    k(e, r), e.stash.push(c + `
`);
  }
  if (s === n.length) return;
  let a = s === 0 ? n : n.slice(s);
  if (r.passing) {
    e.stash.push(a);
    return;
  }
  if (r.held.push(a), r.heldChars += a.length, r.heldChars > A) k(e, r), r.passing = true;
}
function k(e, n) {
  for (let r of n.held) e.stash.push(r);
  n.held = [], n.heldChars = 0;
}
function F(e, n) {
  if (e.watch !== n) return;
  k(e, n), e.watch = void 0;
}
async function* ne(e) {
  let n = false;
  try {
    while (e.stash.length > 0) yield e.stash.shift();
    if (e.inflight) {
      await e.inflight.catch(() => {
      });
      while (e.stash.length > 0) yield e.stash.shift();
    }
    if (e.error !== void 0) throw e.error;
    if (e.ended) return;
    n = true, yield* e.generator;
  } finally {
    if (!n && !e.ended) e.generator.return(void 0).catch(() => {
    });
  }
}
function te(e) {
  if (e === null) return t("--await-initialize: stdin ended before an initialize request arrived", { level: "warn" }), p("sdk_launch_initialize", "stdin_ended"), { kind: "absent" };
  if (e === D) return t("--await-initialize: first stdin line exceeds the line-size ceiling; not parsed", { level: "error" }), m("sdk_launch_initialize", "first_line_too_long"), { kind: "absent" };
  let n;
  try {
    n = VDe(ee(No(e)));
  } catch {
    return m("sdk_launch_initialize", "first_line_not_json"), { kind: "violation", message: "Error: --await-initialize requires the initialize control request as the first stdin line, and the first line is not valid JSON." };
  }
  let r = Q().safeParse(n);
  if (!r.success) return m("sdk_launch_initialize", "first_line_not_initialize"), { kind: "violation", message: "Error: --await-initialize requires the initialize control request as the first stdin line, and the first line is a different message." };
  let s = C(frt()).optional().safeParse(r.data.request.plugins);
  if (!s.success) return m("sdk_launch_initialize", "plugins_malformed"), { kind: "violation", message: "Error: initialize.plugins must be an array of { type: 'local', path: string, skipMcpDiscovery?: boolean } entries." };
  let a = s.data ?? [];
  return g("sdk_launch_initialize"), { kind: "applied", pluginDirs: a.filter((o) => !o.skipMcpDiscovery).map((o) => o.path), pluginDirsNoMcp: a.filter((o) => o.skipMcpDiscovery).map((o) => o.path) };
}
var H = 10485760, W = Symbol("stream-json messages of this process's stdin");
function Dys(e) {
  return typeof e !== "string" && W in e;
}
async function* AIt() {
  try {
    process.stdin.setEncoding("utf8"), yield* ECn(process.stdin);
  } catch (e) {
    if (!P3t(e)) throw e;
    t(`getInputPrompt: stream-json stdin unreadable: ${d(e)}`, { level: "error" }), l(Object.assign(Error("getInputPrompt: stream-json stdin unreadable"), { code: v(e) })), await rs(`Error: cannot read --input-format=stream-json messages from stdin (${v(e)}): stdin is unreadable. stream-json input requires a readable stdin for the lifetime of the session.`);
  }
}
async function Lys(e, n) {
  if (!process.stdin.isTTY && Ykn() !== "mcp") {
    if (n === "stream-json") return Object.defineProperty(R_r() ?? AIt(), W, { value: true });
    let r = "", s = (o) => {
      if (r.length + o.length > H) return process.stdin.off("data", s), fn(`Error: piped stdin input exceeds ${H / 1024 / 1024}MB. Pass large content as a file path in your prompt instead.`);
      r += o;
    };
    try {
      process.stdin.setEncoding("utf8"), process.stdin.on("data", s);
    } catch (o) {
      if (process.stdin.off("data", s), !P3t(o)) throw o;
      return t(`getInputPrompt: piped stdin unreadable: ${d(o)}`, { level: "error" }), l(Object.assign(Error("getInputPrompt: piped stdin unreadable"), { code: v(o) })), gj(`Warning: stdin is unreadable (${v(o)}), proceeding without piped input. If you piped input, it was not received — pass it as a prompt argument, or check that the process launching Claude Code wires stdin to a pipe or /dev/null.`), e;
    }
    let a = await wCn(process.stdin, 3e3);
    if (process.stdin.off("data", s), a) gj("Warning: no stdin data received in 3s, proceeding without it. If piping from a slow command, redirect stdin explicitly: < /dev/null to skip, or wait longer.");
    return [e, r].filter(Boolean).join(`
`);
  }
  return e;
}
var S = "[REDACTED]";
function z(e) {
  let n = e;
  for (let r = 0; n && r < 32; r++) {
    let s = n._zod.def;
    switch (s.type) {
      case "optional":
      case "nullable":
      case "default":
      case "prefault":
      case "catch":
      case "nonoptional":
      case "readonly":
        n = s.innerType;
        break;
      case "pipe":
        n = s.in?._zod.def.type === "transform" ? s.out : s.in;
        break;
      case "lazy":
        n = s.getter?.();
        break;
      default:
        return n;
    }
  }
  return;
}
function P(e, n) {
  let r = z(e);
  if (r?._zod.def.type !== "union") return r;
  let s = r._zod.def.options?.find((a) => a.safeParse(n).success);
  return s && P(s, n);
}
function ie(e) {
  let n = e?._zod.def.type;
  return n !== void 0 && n !== "unknown" && n !== "any";
}
function re(e, n) {
  let r = P(e, n)?._zod.def;
  return r?.type === "array" ? r.element : void 0;
}
function N(e, n) {
  let r = z(e)?._zod.def;
  switch (r?.type) {
    case "boolean":
      return typeof n === "boolean";
    case "number":
      return typeof n === "number";
    case "enum":
      return Object.values(r.entries ?? {}).includes(n);
    case "literal":
      return r.values?.includes(n) ?? false;
    case "union":
      return r.options?.some((s) => N(s, n)) ?? false;
    default:
      return false;
  }
}
var B = /* @__PURE__ */ new Set(["permissions.allow", "permissions.deny", "permissions.ask"]), se = /^mcp__[\w-]+(?:__(?:[\w.-]+|\*))?$/;
function ae() {
  return /* @__PURE__ */ new Set([...(cj() ?? []).flatMap((e) => [e.name, ...e.aliases ?? []]), Be, Tt, uo, Tr]);
}
function de(e, n) {
  if (typeof e !== "string") return S;
  let { toolName: r, ruleContent: s } = Bn(e);
  if (!(n.has(r) || se.test(r))) return S;
  return s === void 0 ? r : `${r}(${S})`;
}
var ce = "sandbox.ignoreViolations";
function le(e, n) {
  let r = P(n, e)?._zod.def;
  if (r?.type === "object" && r.shape) {
    let { shape: o } = r;
    return Object.keys(e).filter((c) => Object.hasOwn(o, c)).map((c) => [c, o[c]]);
  }
  let { keyType: s, valueType: a } = r ?? {};
  if (r?.type === "record" && s && a && ie(z(a))) return Object.keys(e).filter((o) => s.safeParse(o).success).map((o) => [o, a]);
  return;
}
var ue = /* @__PURE__ */ new Set(["sandbox.network.httpProxyPort", "sandbox.network.socksProxyPort"]);
function w(e, n, r, s) {
  switch (typeof e) {
    case "string":
    case "boolean":
      return N(n, e) ? e : S;
    case "number":
      return N(n, e) && !ue.has(r) ? e : S;
    case "undefined":
      return;
    case "object":
      break;
    default:
      return S;
  }
  if (e === null) return null;
  if (Array.isArray(e)) {
    if (B.has(r)) return e.map((h) => de(h, s));
    let c = re(n, e);
    return c ? e.map((h) => w(h, c, r, s)) : S;
  }
  if (B.has(r)) return S;
  let a = le(e, n);
  if (!a) return S;
  let o = e;
  if (r === ce) return a.map(([c, h]) => w(o[c], h, r, s));
  return Object.fromEntries(a.map(([c, h]) => [c, w(o[c], h, r ? `${r}.${c}` : c, s)]));
}
var q = 8192;
function pe(e) {
  let n = _(w(e, USe(e), "", ae()));
  if (Buffer.byteLength(n) <= q) return { content: n, truncated: false };
  let r = 0, s = 0;
  for (let a of n) {
    if (r += Buffer.byteLength(a), r > q) break;
    s += a.length;
  }
  return { content: n.slice(0, s), truncated: true };
}
function U(e) {
  let { sources: n, behavior: r } = JYo(), s = $li(), a = s.entry, o = s.state === "none" && a?.path === void 0 && a?.script === void 0 && nz() === "remote" && TYo().errors.some((h) => BSe().chain.some((O) => h.path === `policyHelpers.${O}`)), c = { "managed_settings.trigger": e, "managed_settings.sources": n, "managed_settings.source_behavior": r, "managed_settings.helper.state": o ? "entry_invalid" : s.state, "managed_settings.helper.applied": s.applied };
  if (a) {
    if (c["managed_settings.helper.entry"] = a.key, a.path !== void 0) c["managed_settings.helper.path"] = a.path;
    else if (a.script !== void 0) c["managed_settings.helper.script_sha256"] = et(a.script);
  }
  return c;
}
function L(e) {
  let n = e instanceof Error ? e.constructor.name : typeof e;
  l(new R(`managed_settings_resolved emit failed (${n})`, "managed_settings_resolved emit failed"));
}
function K() {
  let e = loe()?.OTEL_LOG_MANAGED_SETTINGS;
  for (let r of Ro()) {
    if (kp.has(r)) continue;
    e = y4(fe(r)?.env, r).OTEL_LOG_MANAGED_SETTINGS ?? e;
  }
  let n = tm();
  return Ne(e ?? (n ? n.OTEL_LOG_MANAGED_SETTINGS : i.OTEL_LOG_MANAGED_SETTINGS));
}
function J(e, n) {
  if (!n) delete e["managed_settings.resolved_sha256"], delete e["managed_settings.helper.script_sha256"];
}
function Nys() {
  let e = false, n = null, r = (a) => {
    try {
      let o = U(a), c = fe("policySettings");
      if (c) o["managed_settings.resolved_sha256"] = et(_(vM(c)));
      let { "managed_settings.trigger": h, ...O } = o, I = _(O);
      if (I === n) return;
      n = I;
      let M = K();
      if (J(o, M), c && M) {
        let { content: V, truncated: X } = pe(c);
        o["managed_settings.settings"] = V, o["managed_settings.settings_truncated"] = X;
      }
      bi("managed_settings_resolved", o).catch(L);
    } catch (o) {
      L(o);
    }
  }, s = Gi.subscribe((a) => {
    if (a === "policySettings" && e) r("change");
  });
  return r("startup"), e = true, s;
}
function wao(e) {
  try {
    let n = U("refused");
    J(n, K()), bi("managed_settings_resolved", { ...n, "error.type": e }).catch(L);
  } catch (n) {
    L(n);
  }
}
export {
  AIt,
  A_r,
  Dys,
  Hys,
  Lys,
  Mys,
  Nys,
  Oys,
  R_r,
  bao,
  wao
};
