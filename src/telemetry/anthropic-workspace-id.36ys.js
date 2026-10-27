// telemetry/anthropic-workspace-id.36ys.js — Claude Code 2.1.310 模块 chunk-36ysyspx.js
import { S, Dn } from "../agents/third-party.ydpb.js";
function x$e(n) {
  return typeof n === "object" && n !== null && ("name" in n && n.name === "AbortError" || "message" in n && String(n.message).includes("FetchRequestCanceledException"));
}
var f4t = (n) => {
  if (n instanceof Error) return n;
  if (typeof n === "object" && n !== null) {
    try {
      let e = Object.prototype.toString.call(n);
      if (e === "[object Error]" || e === "[object DOMException]") {
        let t = Error(n.message, n.cause ? { cause: n.cause } : {});
        if (n.stack) t.stack = n.stack;
        if (n.cause && !t.cause) t.cause = n.cause;
        if (n.name) t.name = n.name;
        return t;
      }
    } catch {
    }
    try {
      return Error(JSON.stringify(n));
    } catch {
    }
  }
  return Error(n);
};
var ir = /* @__PURE__ */ (() => {
  class n extends Error {
  }
  return n;
})();
class Ht extends ir {
  constructor(n, e, t, r, o) {
    super(`${Ht.makeMessage(n, e, t)}`);
    this.status = n, this.headers = r, this.requestID = r?.get("request-id"), this.workspaceID = r?.get("anthropic-workspace-id"), this.error = e, this.type = o ?? null;
  }
  static makeMessage(n, e, t) {
    let r = e?.message ? typeof e.message === "string" ? e.message : JSON.stringify(e.message) : e ? JSON.stringify(e) : t;
    if (n && r) return `${n} ${r}`;
    if (n) return `${n} status code (no body)`;
    if (r) return r;
    return "(no status code or body)";
  }
  static generate(n, e, t, r) {
    if (!n || !r) return new Ru({ message: t, cause: f4t(e) });
    let o = e, i = o?.error?.type;
    if (n === 400) return new m4t(n, o, t, r, i);
    if (n === 401) return new q3e(n, o, t, r, i);
    if (n === 403) return new g4t(n, o, t, r, i);
    if (n === 404) return new Y3e(n, o, t, r, i);
    if (n === 409) return new h4t(n, o, t, r, i);
    if (n === 422) return new y4t(n, o, t, r, i);
    if (n === 429) return new _4t(n, o, t, r, i);
    if (n >= 500) return new S4t(n, o, t, r, i);
    return new Ht(n, o, t, r, i);
  }
}
class zu extends Ht {
  constructor({ message: n } = {}) {
    super(void 0, void 0, n || "Request was aborted.", void 0);
  }
}
class Ru extends Ht {
  constructor({ message: n, cause: e }) {
    super(void 0, void 0, n || "Connection error.", void 0);
    if (e) this.cause = e;
  }
}
class yk extends Ru {
  constructor({ message: n } = {}) {
    super({ message: n ?? "Request timed out." });
  }
}
class WTn extends ir {
  constructor(n, { cause: e } = {}) {
    super(n ?? "Retryable error.");
    if (e !== void 0) this.cause = e;
  }
}
class m4t extends Ht {
}
class q3e extends Ht {
}
class g4t extends Ht {
}
class Y3e extends Ht {
}
class h4t extends Ht {
}
class y4t extends Ht {
}
class _4t extends Ht {
}
class S4t extends Ht {
}
class P$e extends Error {
  constructor(n) {
    super(n);
    this.name = this.constructor.name;
  }
}
class CT extends Error {
}
class my extends Error {
  name = "CliUserError";
}
class Ye extends Error {
  constructor(n) {
    super(n);
    this.name = "AbortError";
  }
}
class Xd extends Ye {
}
function Ve(n) {
  try {
    return n instanceof Ye || n instanceof zu || n instanceof Error && (n.name === "AbortError" || "__CANCEL__" in n && Boolean(n.__CANCEL__));
  } catch {
    return false;
  }
}
class jI extends Error {
  filePath;
  defaultConfig;
  constructor(n, e, t) {
    super(n);
    this.name = "ConfigParseError", this.filePath = e, this.defaultConfig = t;
  }
}
class U1 extends Error {
  stdout;
  stderr;
  code;
  interrupted;
  hadSandboxViolation;
  sandboxViolations;
  sandboxed;
  constructor(n) {
    super("Shell command failed");
    this.name = "ShellError", this.stdout = n.stdout, this.stderr = n.stderr, this.code = n.code, this.interrupted = n.interrupted, this.hadSandboxViolation = n.hadSandboxViolation ?? false, this.sandboxViolations = n.sandboxViolations, this.sandboxed = n.sandboxed;
  }
}
class Xp extends Error {
  formattedMessage;
  constructor(n, e) {
    super(n);
    this.formattedMessage = e;
    this.name = "TeleportOperationError";
  }
}
class R extends Error {
  telemetryMessage;
  errorClass;
  constructor(n, e, t) {
    super(n);
    this.name = "TelemetrySafeError", this.telemetryMessage = e ?? n, this.errorClass = t;
  }
}
class Rr extends R {
}
var Qe = (n, e) => {
  try {
    if (n !== null && typeof n === "object" && !("telemetryMessage" in n) && Object.isExtensible(n)) Object.assign(n, { telemetryMessage: e });
  } catch {
  }
  return n;
}, a = ["AggregateError", "Error", "EvalError", "RangeError", "ReferenceError", "SuppressedError", "SyntaxError", "TypeError", "URIError"], dis = new Set(a);
function eRt(n) {
  try {
    let e = n instanceof Error ? n.name : void 0, t = a.find((r) => r === e);
    if (t !== void 0) return t;
  } catch {
  }
  return "a value that is not a built-in error";
}
var JK = (n, e) => {
  try {
    if (n !== null && typeof n === "object" && Object.isExtensible(n)) {
      let t = n, r = Object.entries(e).filter(([o, i]) => i !== void 0 && !(o in t));
      Object.assign(t, Object.fromEntries(r));
    }
  } catch {
  }
  return n;
}, s = Symbol("telemetryChildExitStatus"), cis = (n, e) => {
  try {
    if (e !== void 0 && n !== null && typeof n === "object" && !Object.hasOwn(n, s) && Object.isExtensible(n)) Object.defineProperty(n, s, { value: e, enumerable: false, writable: false, configurable: false });
  } catch {
  }
  return n;
};
function MW(n) {
  try {
    if (n !== null && typeof n === "object" && "telemetryMessage" in n && typeof n.telemetryMessage === "string") return n.telemetryMessage;
  } catch {
  }
  return;
}
function WI(n, e) {
  return n instanceof Error && n.message === e;
}
function N(n) {
  return n instanceof Error ? n : Error(String(n));
}
function d(n) {
  return n instanceof Error ? n.message : String(n);
}
function v(n) {
  if (n && typeof n === "object" && "code" in n && typeof n.code === "string") return n.code;
  return;
}
function vr(n) {
  return rw(v(n));
}
function rw(n) {
  return n && /^[A-Z][A-Z0-9_]{0,63}$/.test(n) ? Dn(n) : void 0;
}
var l = -2147483648, E = 4294967295;
function uis(n) {
  try {
    if (n === null || typeof n !== "object") return;
    let e = Object.getOwnPropertyDescriptor(n, s), t = e !== void 0 && Object.hasOwn(e, "value") ? e.value : void 0;
    return typeof t === "number" && Number.isInteger(t) && t >= l && t <= E ? t : void 0;
  } catch {
    return;
  }
}
var Wit = "did not become reachable within", Git = "exited before it became reachable", GTn = "The socket connection was closed unexpectedly";
function Mcr(n) {
  return [...n.matchAll(/\bE\d?[A-Z]{2,14}\b/g)].filter((e) => !"/\\".includes(n[e.index - 1] ?? ".")).map((e) => e[0]);
}
function wg(n) {
  let e = n?.name;
  return typeof e === "string" && /^[A-Z][a-zA-Z]{0,63}$/.test(e) ? Dn(e) : void 0;
}
function yh(n) {
  return vr(n) ?? wg(n);
}
function B1(n) {
  return Dn(vr(n)?.toLowerCase() ?? "other");
}
function j1(n) {
  return wg(n);
}
function Cie(n) {
  return n !== void 0 && /^[A-Z][A-Za-z0-9_]{0,63}$/.test(n) ? Dn(n) : void 0;
}
function b4t(n) {
  let e = Cie(n);
  return e === void 0 ? void 0 : Dn(e.toLowerCase());
}
function GI(n) {
  return typeof n === "string" && /^[A-Z][a-zA-Z]{0,63}$/.test(n) ? Dn(n) : void 0;
}
function zTn(n) {
  return typeof n === "string" && /^[a-z][a-z_]{0,39}$/.test(n) ? Dn(n) : S("unparseable");
}
function bb(n) {
  return /^[a-z][a-z0-9_]{0,39}$/.test(n) ? Dn(n) : S("unparseable");
}
function L5(n) {
  if (typeof n !== "string") return;
  return /^[A-Za-z][A-Za-z0-9_-]{0,63}$/.test(n) ? Dn(n) : S("nonconforming");
}
function pis(n) {
  if (n === void 0) return;
  let e = n.indexOf(":"), t = e === -1 ? n : n.slice(0, e);
  if (!/^[a-z][a-z0-9_]{0,39}$/.test(t)) return S("unparseable");
  if (e === -1) return Dn(t);
  let r = n.slice(e + 1), o = rw(r) ?? GI(r) ?? (r === "string" || r === "non-error" ? r : "Error");
  return Dn(`${t}:${o}`);
}
function fis(n) {
  return GI(n);
}
function zit(n) {
  let e = n?.constructor?.name;
  return typeof e === "string" && /^[A-Za-z][A-Za-z0-9_]{0,39}$/.test(e) ? Dn(e) : S("unparseable");
}
function L7r(n) {
  return p.test(n) ? Dn(n) : void 0;
}
var p = /^(?:<user-code>|(?:[\w$.\-<>[\]]{1,72}\.(?:[cm]?[jt]sx?|json|node|wasm|exe)|node:internal(?:\/[a-z0-9_-]{1,40}){1,4}|node:[a-z0-9_]{1,30}(?:\/(?:promises|web|consumers|posix|win32|types|strict|reporters))?|bun:[a-z0-9_]{1,20}|internal:[a-z0-9_-]{1,30}(?:\/[a-z0-9_-]{1,40}){0,3}|<anonymous>|\[eval\](?:-wrapper)?|native|unknown|cli|claude|ws|undici|node-fetch|isomorphic-fetch|vercel_fetch|utf-8-validate)(?::\d{1,8}){2})$/, rwe = /* @__PURE__ */ new Set(["ENOSPC", "EDQUOT", "ENFILE", "EMFILE"]);
function Vit(n) {
  let e = v(n);
  return e === "ENOSPC" || e === "EDQUOT";
}
var mis = /* @__PURE__ */ new Set(["EACCES", "EPERM", "EROFS"]);
function $s(n) {
  return n !== null && typeof n === "object" && "errno" in n && typeof n.errno === "number";
}
function QK(n, e, t = 5) {
  let r = n;
  for (let o = 0; o < t; o++) {
    if (!(r instanceof Error)) return;
    if (e(r)) return r;
    r = r.cause;
  }
  return;
}
function G(n) {
  return v(n) === "ENOENT";
}
function Us(n) {
  let e = v(n);
  return e === "ENOENT" || e === "ENOTDIR";
}
function W1(n) {
  return v(n) === "EISDIR";
}
function gis(n) {
  return v(n) === "E2BIG";
}
function his(n) {
  try {
    if (v(n) !== "ECONNRESET") return false;
    let e = n instanceof Error ? n.stack : void 0;
    if (typeof e !== "string") return false;
    let t = e.split(`
`).find((r) => r.trim().startsWith("at "));
    return t !== void 0 && t.includes("node:_http_server");
  } catch {
    return false;
  }
}
function Hcr(n) {
  if (n && typeof n === "object" && "path" in n && typeof n.path === "string") return n.path;
  return;
}
function w4t(n) {
  let e = n.message ? `${n.name}: ${n.message}` : n.name, t = n.stack;
  if (!t) return e;
  if (t.startsWith(e)) return t;
  let r = t.split(`
`), o = r[0] ?? "", i = o === n.name || o.startsWith(`${n.name}:`) ? r.slice(1) : r;
  return [e, ...i].join(`
`);
}
var u = /* @__PURE__ */ new Set(["ENOENT", "EACCES", "EPERM", "ENOTDIR", "ELOOP", "ENAMETOOLONG", "EROFS"]);
function Kt(n) {
  return TT(v(n));
}
function TT(n) {
  return n !== void 0 && u.has(n);
}
function AT(n) {
  let e = n instanceof Error ? n.cause : void 0;
  if (typeof e !== "object" || e === null || !("telemetryCode" in e)) return;
  return typeof e.telemetryCode === "string" ? e.telemetryCode : void 0;
}
var c = /* @__PURE__ */ new Set(["ENOSPC", "EDQUOT", "ENFILE", "EIO"]);
function Q_(n) {
  return N7r(v(n));
}
function N7r(n) {
  return n === "EDEADLK" || n === "EINTR" || n === "ENXIO" || n === "ENODEV" || n === "ECANCELED" || n === "ENEEDAUTH" || n === "ESTALE" || n === "EUNKNOWN" || n === "ENOMEM" || n !== void 0 && f(n);
}
function f(n) {
  return n === "UNKNOWN" || n.startsWith("Unknown system error");
}
function E4t(n, e = "darwin") {
  if (e !== "win32") return false;
  try {
    return $s(n) && n.code === "EBADF" && n.syscall === "read";
  } catch {
    return false;
  }
}
function Uz(n) {
  if (typeof n !== "string") return;
  return /^E[A-Z0-9]+$/.test(n) || f(n) ? n : void 0;
}
function yis(n) {
  let e = v(n);
  return e !== void 0 && c.has(e);
}
function tg(n) {
  return v4t(v(n));
}
function v4t(n) {
  return n !== void 0 && (u.has(n) || n === "EISDIR" || c.has(n));
}
function Pf(n, e) {
  if (e?.(n)) return true;
  if (!n || typeof n !== "object" || !("isAxiosError" in n) || !n.isAxiosError) return false;
  let t = n.response?.status;
  return t === void 0 || t === 401 || t === 403 || t === 429;
}
function nD(n) {
  return n instanceof Error && /maxContentLength size of .* exceeded/.test(n.message);
}
function ui(n) {
  let e = d(n);
  if (!n || typeof n !== "object" || !("isAxiosError" in n) || !n.isAxiosError) return { kind: "other", message: e };
  let t = n, r = t.response?.status;
  if (r === 401 || r === 403) return { kind: "auth", status: r, message: e };
  if (t.code === "ECONNABORTED") return { kind: "timeout", status: r, message: e };
  if (t.code === "ECONNREFUSED" || t.code === "ENOTFOUND") return { kind: "network", status: r, message: e };
  return { kind: "http", status: r, message: e };
}
function Tie(n) {
  return n !== void 0 && n >= 400 && n < 500 && n !== 408 && n !== 409 && n !== 429;
}
export {
  $s,
  AT,
  B1,
  CT,
  Cie,
  E4t,
  G,
  GI,
  GTn,
  Git,
  Hcr,
  Ht,
  JK,
  Kt,
  L5,
  L7r,
  MW,
  Mcr,
  N,
  N7r,
  P$e,
  Pf,
  QK,
  Q_,
  Qe,
  R,
  Rr,
  Ru,
  S4t,
  TT,
  Tie,
  U1,
  Us,
  Uz,
  Ve,
  Vit,
  W1,
  WI,
  WTn,
  Wit,
  Xd,
  Xp,
  Y3e,
  Ye,
  _4t,
  b4t,
  bb,
  cis,
  d,
  dis,
  eRt,
  f4t,
  fis,
  g4t,
  gis,
  h4t,
  his,
  ir,
  j1,
  jI,
  m4t,
  mis,
  my,
  nD,
  pis,
  q3e,
  rw,
  rwe,
  tg,
  ui,
  uis,
  v,
  v4t,
  vr,
  w4t,
  wg,
  x$e,
  y4t,
  yh,
  yis,
  yk,
  zTn,
  zit,
  zu
};
