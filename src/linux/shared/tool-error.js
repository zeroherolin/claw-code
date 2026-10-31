// linux/shared/tool-error.js — Claude Code 2.1.310（linux）模块 chunk-09qvtsa3.js
import { R, d, E, G } from "../telemetry/anthropic-workspace-id.js";
import { vme, uJ } from "../vendor/mcp-sdk/input-required.88fd.js";
import { Qpe } from "../vendor/mcp-sdk/tool-result.js";
import { p } from "./chunk-2fe3b2b7.js";
import { Qi, $q, gl, Sg, Fl } from "../fs/node-modules.js";
import { _, te, Gy, sF, Db, ait } from "../fs/gitlab-runner-authentication-token.js";
import { re } from "./chunk-d2c47492.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { q9t } from "./chunk-692d8c00.js";
import { o, M, oe, T, u, $e, Gr, me, B, A, gA } from "../vendor/zod/string-format.js";
import { createHash as de } from "crypto";
import { constants as x } from "fs";
import v from "path";
import { open as L } from "fs/promises";
import J from "path";
var z = 120;
function F(e) {
  return e.length > z ? `${re(e, z)}...` : e;
}
function Yp(e) {
  return ait(_(F(e)));
}
function sio(e) {
  if (typeof e === "string") return Yp(e);
  let t = _(e) ?? String(e);
  return t.length <= z ? ait(t) : ait(_(F(t)));
}
async function ev(e, t, r, i = []) {
  let n = J.resolve(e, t), s = Yp(t), a = [e, ...i];
  if (Sg(t) && !gl(t) || Sg(n) && !gl(n)) throw new R(`${r}: ${s} is an automounter path (macOS /Network, or the bare /net root) — refusing it (a lookup there is a network request)`, "plugin eval: a repo-authored path is an automounter path — refusing it");
  let c = Fl(n) || Fl(t) && !Qi(n, e);
  if (Qi(t, e) && i.every((h) => Qi(n, h)) && !c) throw new R(`${r}: ${s} is a network-reaching path (UNC / automount) — refusing it`, "plugin eval: a repo-authored path is network-reaching — refusing it");
  let m, y = await sF(Db, n, { anchors: a, surfaceNetworkRaw: true, unreadableAncestry: "unverified", onOutcome: (h) => {
    if (h.kind === "resolved") m = h.path;
  } });
  if (y === Gy) throw new R(`${r}: ${s} passes through a component that cannot be examined (unreadable, a link or junction whose target does not exist, or a symlink chain too long to follow) — refusing it (it could not be vetted)`, "plugin eval: a repo-authored path has an unexaminable component — refusing it");
  if (y !== void 0) throw new R(`${r}: ${s} passes through a symlink to a network-reaching path (or a dotted one that cannot be vetted) — refusing it`, "plugin eval: a repo-authored path links to a network-reaching path — refusing it");
  if (m !== void 0 && $q(m)) throw new R(`${r}: ${s} leads to an automounter map directory (/net, /net/<host>; macOS /Network, /home) — refusing it (naming anything in it asks the automounter or a host)`, "plugin eval: a repo-authored path lands on an automounter map directory — refusing it");
}
import N from "path";
var Q = 8192, H = 5e7, ee = /^[is]*$/;
function D(e) {
  let r = 0, i = 1, n = 0, s = false, a = false, c = false;
  for (let l = 0; l < e.length; l++) {
    let f = e[l];
    if (f === "(" || f === ")" || f === "|") return { problem: 'expect: /regex/ guards use a small dialect — literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(…)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead' };
    if (f === "^") {
      if (l !== 0) return { problem: 'expect: /regex/ guards use a small dialect — literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(…)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead' };
      s = true, a = false, c = false;
      continue;
    }
    if (f === "$") {
      if (l !== e.length - 1) return { problem: 'expect: /regex/ guards use a small dialect — literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(…)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead' };
      continue;
    }
    let b = null;
    if (f === "*") b = { lo: 0, hi: 1 / 0 };
    else if (f === "+") b = { lo: 1, hi: 1 / 0 };
    else if (f === "?") {
      if (c) {
        c = false;
        continue;
      }
      b = { lo: 0, hi: 1 };
    } else if (f === "{") {
      let g = /^\{(\d+)(?:,(\d*))?\}/.exec(e.slice(l));
      if (g) {
        let w = Number(g[1]), k = g[2] === void 0 ? w : g[2] === "" ? 1 / 0 : Number(g[2]);
        if (k < w) return { problem: `quantifier ${g[0]} has max < min` };
        b = { lo: w, hi: k }, l += g[0].length - 1;
      }
    }
    if (b !== null) {
      if (!a) return { problem: "a quantifier must follow a single character, escape, or class" };
      if (n += (b.hi === 1 / 0 ? b.lo : b.hi) - 1, b.hi === 1 / 0) r++;
      else i *= b.hi - b.lo + 1;
      a = false, c = true;
      continue;
    }
    if (c = false, f === "\\") {
      let g = e[l + 1];
      if (g === void 0) return { problem: "pattern ends with a lone backslash" };
      if (/[1-9]/.test(g) || g === "k") return { problem: 'expect: /regex/ guards use a small dialect — literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(…)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead' };
      if (a = g !== "b" && g !== "B", a) n++;
      l++;
      continue;
    }
    if (f === "[") {
      l++;
      while (l < e.length && e[l] !== "]") {
        if (e[l] === "\\") l++;
        l++;
      }
      if (l >= e.length) return { problem: "unterminated character class" };
      a = true, n++;
      continue;
    }
    a = true, n++;
  }
  if (i > H) return { problem: "too many optional/bounded repeats for an expect: guard" };
  let m = (l) => {
    let f = 1;
    for (let b = 1; b <= r; b++) f = f * (l + b) / b;
    return (s ? 1 : Math.max(1, l)) * f * i * (l + n);
  }, y = 0, h = Q;
  while (y < h) {
    let l = Math.ceil((y + h) / 2);
    if (m(l) <= H) y = l;
    else h = l - 1;
  }
  if (y < 16) return { problem: "this combination of repeats leaves no useful subject length under the matching budget — use fewer quantifiers" };
  return { maxSubject: y, problem: null };
}
var ne = /* @__PURE__ */ new Set(["string", "number", "bool", "boolean", "object", "array"]);
function P(e, t) {
  let r = e;
  for (let i of t.split(".")) {
    if (r === null || typeof r !== "object") return;
    if (Array.isArray(r)) {
      if (!/^\d+$/.test(i)) return;
      r = r[Number(i)];
      continue;
    }
    r = Object.hasOwn(r, i) ? r[i] : void 0;
  }
  return r;
}
function lIt(e, t, r = "") {
  for (let [i, n] of Object.entries(t)) {
    let s = r ? `${r}.${i}` : i, a = P(e, s), c = ie(a, n, s, e);
    if (c !== null) return c;
  }
  return null;
}
function ie(e, t, r, i) {
  if (Array.isArray(t)) return t.some((s) => U(e, s)) ? null : `${r} = ${S(e)} is not one of [${t.join(", ")}]`;
  if (typeof t === "object" && t !== null) return lIt(i, t, r);
  let n = q(t);
  if (n !== null) {
    let s = typeof e === "string" ? e : typeof e === "number" || typeof e === "boolean" ? String(e) : null, a = D(n.source);
    if (!("maxSubject" in a)) return `${r}: ${t} is not a usable guard (${a.problem})`;
    let c = a.maxSubject;
    if (s !== null && s.length > c) return `${r} is ${s.length} characters, more than this /regex/ guard checks (${c})`;
    return s !== null && n.test(s) ? null : `${r} = ${S(e)} does not match ${t}`;
  }
  if (ne.has(t)) {
    let s = t === "boolean" ? "bool" : t;
    return se(e) === s ? null : `${r} = ${S(e)} is not a ${t}`;
  }
  return U(e, t) ? null : `${r} = ${S(e)} is not "${t}"`;
}
function U(e, t) {
  if (typeof e === "string") return e === t;
  if (typeof e === "number" || typeof e === "boolean") return String(e) === t;
  return false;
}
function q(e) {
  let t = /^\/(.+)\/([a-z]*)$/s.exec(e);
  if (!t) return null;
  return new RegExp(t[1] ?? "", t[2] ?? "");
}
function se(e) {
  if (Array.isArray(e)) return "array";
  if (e === null || e === void 0) return "missing";
  if (typeof e === "boolean") return "bool";
  return typeof e;
}
function S(e) {
  if (e === void 0) return "(missing)";
  let t = _(e);
  return t.length > 80 ? `${re(t, 77)}...` : t;
}
var C = 32;
function iio(e, t = "") {
  let r = [];
  if (t === "") {
    let i = X(e);
    if (i > C) return r.push(`expect: ${i} guards is more than the ${C} one responder may carry — every call checks each of them; keep the ones that catch a wrong call`), r;
  }
  for (let [i, n] of Object.entries(e)) {
    let s = t ? `${t}.${i}` : i;
    if (Array.isArray(n)) {
      if (n.length === 0) r.push(`expect.${s}: an empty list of allowed values can never be satisfied — list at least one`);
      continue;
    }
    if (typeof n === "object" && n !== null) {
      r.push(...iio(n, s));
      continue;
    }
    if (/^\/.*\/[a-z]*$/s.test(n)) try {
      let a = q(n), c = a ? D(a.source) : null;
      if (a && !ee.test(a.flags)) r.push(`expect.${s}: ${n} — only the i and s flags are supported in expect: guards`);
      else if (c && c.problem !== null) r.push(`expect.${s}: ${n} — ${c.problem}`);
    } catch (a) {
      r.push(`expect.${s}: invalid regular expression ${n} (${a instanceof Error ? a.message : String(a)}) — a value written /like this/ is read as a regex; for a literal that starts and ends with a slash, write a one-element list: ["${n}"]`);
    }
  }
  return r;
}
var ae = /^(?!\.{1,2}$)[A-Za-z0-9._-]+$/;
async function Pyr(e, t, r, i, n = Number.POSITIVE_INFINITY) {
  let s = null, a = [], c = 0;
  for (let y of e.matchAll(/\{\{\s*(input\.[A-Za-z0-9_.-]+|file:(?:[^{}]|\{input\.[A-Za-z0-9_.-]+\})+?)\s*\}\}/g)) {
    a.push(e.slice(c, y.index)), c = y.index + y[0].length;
    let h = y[1] ?? "";
    if (h.startsWith("input.")) {
      let g = P(t, h.slice(6)), w = g === void 0 ? "" : typeof g === "string" ? g : _(g);
      a.push(w.length > n ? `${re(w, n)}… [${w.length - n} more characters omitted]` : w);
      continue;
    }
    let l = h.slice(5).trim(), f = null;
    if (l = l.replace(/\{input\.([A-Za-z0-9_.-]+)\}/g, (g, w) => {
      let k = P(t, w), I = k === void 0 || k === null ? "" : String(k);
      if (!ae.test(I)) f = `{input.${w}} = ${S(k)} is not a plain file-name segment`;
      return I;
    }), f !== null) {
      s ??= f;
      continue;
    }
    let b = N.resolve(r, l);
    if (!le(r, b)) {
      s ??= `{{file:${l}}} names a path outside the mock's directory`;
      continue;
    }
    a.push(i(b).then((g) => {
      if (typeof g !== "string") return s ??= `{{file:${l}}}: ${g.problem}`, "";
      return g;
    }));
  }
  a.push(e.slice(c));
  let m = await Promise.all(a);
  if (s !== null) return { ok: false, reason: s };
  return { ok: true, text: m.join("") };
}
function le(e, t) {
  let r = N.relative(e, t);
  return r !== "" && !r.startsWith("..") && !N.isAbsolute(r);
}
function X(e) {
  let t = 0;
  for (let r of Object.values(e)) if (t += typeof r === "object" && r !== null && !Array.isArray(r) ? X(r) : 1, t > C) break;
  return t;
}
import { createConnection as ue } from "net";
var V9t = "eval aborted by mock", nIe = "mock agent responder failed";
var pe = p(() => u({ verdict: B(["ok", "tool_error", "abort"]), text: o(), replay: B(["hit", "miss"]).optional() })), fe = 4194304;
async function V(e, t, r) {
  try {
    let i = await ge(e.socketPath, `${_({ token: e.token, ...t })}
`, r);
    return pe().parse(te(i));
  } catch (i) {
    return process.stderr.write(`eval mock stand-in: agent relay failed: ${d(i)}
`), { verdict: "abort", text: `${nIe} (harness_unreachable) — see the eval debug log` };
  }
}
function ge(e, t, r) {
  return new Promise((i, n) => {
    if (r.aborted) {
      n(Error("aborted"));
      return;
    }
    let s = ue({ path: e }), a = Buffer.alloc(0), c = false, m = (h, l) => {
      if (c) return;
      if (c = true, r.removeEventListener("abort", y), s.destroy(), h !== null) n(h);
      else i(l ?? "");
    }, y = () => m(Error("aborted"));
    r.addEventListener("abort", y, { once: true }), s.once("connect", () => s.write(t)), s.on("data", (h) => {
      if (a = Buffer.concat([a, h]), a.length > fe) {
        m(Error("relay response too large"));
        return;
      }
      let l = a.indexOf(10);
      if (l !== -1) m(null, a.subarray(0, l).toString("utf8"));
    }), s.once("error", (h) => m(h)), s.once("close", () => m(Error("harness closed the relay without answering")));
  });
}
var he = p(() => {
  let e = gA(() => $e([o(), T(o()), me(o(), e)])), t = me(o(), e).nullable(), r = Gr("kind", [u({ kind: A("fixed"), body: o(), isError: M(), expect: t, baseDir: o() }), u({ kind: A("agent"), prompt: o(), abortWhen: o().nullable(), expect: t, baseDir: o(), replay: u({ mockHash: o(), replayDir: o(), pinned: me(o(), o()) }).default({ mockHash: "", replayDir: "", pinned: {} }) })]);
  return u({ registeredName: o(), server: o(), nonce: o(), callLogPath: o(), tools: T(u({ name: o(), description: o(), inputSchema: me(o(), oe()) })), responders: me(o(), r), agent: u({ socketPath: o(), token: o() }).nullable() });
}), Y = 1048576;
async function Eki(e, t) {
  if (!e) throw Error("missing spec path");
  let r = await ve(e);
  if (t !== void 0 && de("sha256").update(r).digest("hex") !== t) throw Error("spec file does not match the hash the harness launched this stand-in with — refusing to serve it");
  let i = Se(r), n = be(i), s = new q9t();
  if (!await K(i.callLogPath, _({ ready: i.nonce, server: i.server }))) throw Error("could not write the identity line to the run call log — refusing to serve unidentified");
  await n.connect(s), process.stdin.on("end", () => void n.close()), process.stdin.on("error", () => void n.close());
}
function be(e) {
  let t = 0, r = new AbortController(), i = { spec: e, signal: r.signal }, n = new Qpe({ name: `eval-mock/${e.server}`, version: "1" }, { capabilities: { tools: {} } });
  n.onclose = () => r.abort(), n.setRequestHandler(vme, async () => ({ tools: e.tools.map((c) => ({ name: c.name, description: c.description, inputSchema: { type: "object", ...c.inputSchema } })) }));
  let s = Promise.resolve();
  n.setRequestHandler(uJ, (c) => {
    let m = s.then(() => a(c.params));
    return s = m.catch(() => {
    }), m;
  });
  async function a(c) {
    let m = c.name, y = c.arguments ?? {}, h = Date.now(), l = Object.hasOwn(e.responders, m) ? e.responders[m] : void 0, f = l === void 0 ? { verdict: "tool_error", text: `no mock for ${e.server}/${m}` } : await ye(l, y, i, m), b = { nonce: e.nonce, seq: t++, server: e.server, tool: m, responder: l?.kind ?? "fixed", input: we(y), verdict: f.verdict, output: W(f.text), ms: Date.now() - h, ...f.replay && { replay: f.replay } };
    if (!await K(e.callLogPath, _(b)) && f.verdict === "abort") process.stderr.write(`eval mock stand-in: could not write the abort record to the call log
`);
    switch (f.verdict) {
      case "ok":
        return { content: [{ type: "text", text: OMn(f.text) }] };
      case "tool_error":
        return { content: [{ type: "text", text: OMn(f.text) }], isError: true };
      case "abort":
        return { content: [{ type: "text", text: `${V9t} ${e.nonce}: ${e.server}/${m} — ${f.text}` }], isError: true };
    }
  }
  return n;
}
async function ye(e, t, r, i = "") {
  if (e.expect !== null) {
    let n = lIt(t, e.expect);
    if (n !== null) return { verdict: "abort", text: `input violates expect: ${n}` };
  }
  switch (e.kind) {
    case "agent": {
      if (!r || r.spec.agent === null) return { verdict: "tool_error", text: "agent mock responder called without a harness relay" };
      return V(r.spec.agent, { registeredName: r.spec.registeredName, tool: i, input: t }, r.signal);
    }
    case "fixed": {
      let n = await Pyr(e.body, t, e.baseDir, Iyr);
      if (!n.ok) return { verdict: "tool_error", text: n.reason };
      return { verdict: e.isError ? "tool_error" : "ok", text: n.text };
    }
  }
}
async function Iyr(e) {
  try {
    await ev(v.dirname(e), v.basename(e), "mock fixture");
    let t = await L(e, x.O_RDONLY | (O() === "windows" ? 0 : x.O_NONBLOCK));
    try {
      let r = await t.stat();
      if (!r.isFile()) return { problem: "is not a regular file" };
      if (r.size > Y) return { problem: `is ${r.size} bytes, over the ${Y}-byte fixture limit` };
      return (await Z(t, r.size)).toString("utf8");
    } finally {
      await t.close();
    }
  } catch (t) {
    return { problem: G(t) ? "no such fixture" : `could not be read (${E(t) ?? d(t)})` };
  }
}
var aio = 16384, j = 16384;
function W(e) {
  return e.length > j ? `${re(e, j)}…[truncated]` : e;
}
function we(e) {
  let t = _(e) ?? "";
  return t.length > j ? W(t) : e;
}
async function K(e, t) {
  try {
    let r = x.O_WRONLY | x.O_APPEND | x.O_CREAT | (O() === "windows" ? 0 : x.O_NONBLOCK), i = await L(e, r, 384);
    try {
      if (!(await i.stat()).isFile()) return false;
      let n = Buffer.from(`${t}
`, "utf8"), s = 0;
      while (s < n.length) {
        let { bytesWritten: a } = await i.write(n, s);
        if (a <= 0) return false;
        s += a;
      }
      return true;
    } finally {
      await i.close();
    }
  } catch {
    return false;
  }
}
async function Z(e, t) {
  let r = Buffer.alloc(t), i = 0;
  while (i < t) {
    let { bytesRead: n } = await e.read({ buffer: r, offset: i, position: i });
    if (n <= 0) break;
    i += n;
  }
  return r.subarray(0, i);
}
function OMn(e) {
  return ke.test(e.trimStart()) ? `${xe}${e.trimStart()}` : e;
}
var xe = "| ", ke = new RegExp(`^(?:${V9t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}|MCP server "|MCP error -32000: Connection closed)`);
function Se(e) {
  return he().parse(te(e));
}
var Ee = 4194304;
async function ve(e) {
  await ev(v.dirname(e), v.basename(e), "mock spec");
  let t = await L(e, x.O_RDONLY | (O() === "windows" ? 0 : x.O_NONBLOCK));
  try {
    let r = await t.stat();
    if (!r.isFile()) throw Error("spec path is not a regular file — refusing to read it");
    if (r.size > Ee) throw Error("spec file is over the size limit the harness writes — refusing to read it");
    return (await Z(t, r.size)).toString("utf8");
  } finally {
    await t.close();
  }
}
export {
  Eki,
  Iyr,
  OMn,
  Pyr,
  V9t,
  Yp,
  aio,
  ev,
  iio,
  lIt,
  nIe,
  sio
};
