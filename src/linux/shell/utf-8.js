// linux/shell/utf-8.js — Claude Code 2.1.310（linux）模块 chunk-xe5xax1e.js
import { U, ku } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { nit, ie, t } from "../fs/gitlab-runner-authentication-token.js";
import { Ze, Ft } from "../shared/chunk-d2c47492.js";
import { EB, i } from "../shared/environment.js";
import { Gv, N1, Kne, Phe } from "../context/team-memory-sync.js";
import { II, H8r } from "../context/tool-cgroup-exclude-classes.js";
import { gxe } from "../fs/tempdir-owner-mismatch.js";
import { Ws } from "../terminal/wl-copy.js";
import { N_ } from "../context/org-memory-writes-setting-changed.js";
import { spawnSync as I } from "child_process";
import { spawn as _, spawnSync as y } from "child_process";
import { basename as h } from "path";
function v(n) {
  return !!EB(n);
}
var L = /* @__PURE__ */ new Set(["start", "cmd", "cmd.exe"]);
function x(n) {
  let e = n.trim().split(/\s+/);
  for (let r of e) {
    if (/^\/[^/]+$/.test(r)) continue;
    if (r.startsWith("-")) continue;
    let o = h(r);
    if (L.has(o.toLowerCase())) continue;
    return o;
  }
  return h(e[0] ?? n);
}
var T = ["code", "cursor", "windsurf", "codium", "subl", "atom", "gedit", "notepad++", "notepad"], b = /\b(vi|vim|nvim|nano|emacs|pico|micro|helix|hx)\b/, D = /* @__PURE__ */ new Set(["code", "cursor", "windsurf", "codium"]);
function E(n) {
  let e = x(n);
  return T.find((r) => e.includes(r));
}
function A(n, e, r) {
  if (!r) return [e];
  if (D.has(n)) return ["-g", `${e}:${r}`];
  if (n === "subl") return [`${e}:${r}`];
  return [e];
}
function R(n, e, r) {
  let o = E(n);
  if (o) return A(o, e, r);
  return r && b.test(h(Ze(n, " "))) ? [`+${r}`, e] : [e];
}
function s8e(n, e) {
  let r = XI();
  if (!r) return false;
  let o = r.split(" "), a = o[0] ?? r, d = o.slice(1), g = E(r);
  if (g) {
    let p = A(g, n, e), l = { detached: true, stdio: "ignore", windowsHide: true }, s;
    return s = _(a, [...d, ...p], l), s.on("error", (c) => t(`editor spawn failed: ${c}`, { level: "error" })), II(s.pid), s.unref(), true;
  }
  let u = Ws().get(process.stdout);
  if (!u) return false;
  let m = e && b.test(h(a));
  u.enterAlternateScreen();
  try {
    let p = { stdio: "inherit" }, l;
    {
      let s = [...d, ...m ? [`+${e}`, n] : [n]], c = H8r();
      if (l = y(a, s, { ...p, ...c }), l.error && c.cgroup !== void 0) l = y(a, s, p);
    }
    if (l.error) return t(`editor spawn failed: ${l.error}`, { level: "error" }), false;
    return true;
  } finally {
    u.exitAlternateScreen();
  }
}
class C {
  isResolved = false;
  editor = void 0;
  resolve() {
    if (this.isResolved) return this.editor;
    if (i.VISUAL) this.editor = i.VISUAL;
    else if (i.EDITOR) this.editor = i.EDITOR;
    else {
      let n = ["code", "vi", "nano"];
      this.editor = n.find((e) => v(e));
    }
    return this.isResolved = true, this.editor;
  }
  reset() {
    this.isResolved = false, this.editor = void 0;
  }
}
var F = new W(() => new C());
function P() {
  return F.of(U().host);
}
function XI() {
  return ku()?.editor ?? P().resolve();
}
function d4() {
  let n = XI();
  if (!n) return;
  let e = x(n);
  return e && e.length <= 8 ? e : void 0;
}
var N = { code: "code -w", subl: "subl --wait" };
function ume(n, e) {
  let r = ie(), o = Ws().get(process.stdout);
  if (!o) throw Error("Ink instance not found - cannot pause rendering");
  let a = XI();
  if (!a) return { content: null };
  try {
    r.statSync(n);
  } catch {
    return { content: null };
  }
  let d = E(a) === void 0;
  if (d) o.enterAlternateScreen();
  else o.prepareTerminalForHandoff();
  try {
    let g = N[a] ?? a, u = g.split(" "), m = u[0] ?? g, p = u.slice(1), l = R(a, n, e), s;
    {
      let f = H8r();
      if (s = I(m, [...p, ...l], { stdio: "inherit", ...f }), s.error && f.cgroup !== void 0) s = I(m, [...p, ...l], { stdio: "inherit" });
    }
    if (s.error || s.signal || s.status !== null && s.status !== 0) {
      let f = Gv(a);
      return { content: null, error: s.error ? `Couldn't open ${f} — ${s.error.message}` : s.signal ? `${f} closed unexpectedly (${s.signal})` : `${f} quit unexpectedly (exit code ${s.status})` };
    }
    return { content: r.readFileSync(n, { encoding: "utf-8" }) };
  } catch {
    return { content: null };
  } finally {
    if (d) o.exitAlternateScreen();
    else o.restoreTerminalAfterHandoff();
  }
}
function k(n, e, r) {
  let o = n;
  for (let [a, d] of Object.entries(r)) if (d.type === "text") {
    let g = parseInt(a), u = d.content;
    if (d.unavailable || u === "") continue;
    if (d.inline) continue;
    let m = o.indexOf(u);
    if (m !== -1) {
      let p = N1(u), l = Kne(g, p);
      o = o.slice(0, m) + l + o.slice(m + u.length);
    }
  }
  return o;
}
var S = "# ─── Write your reply below this line ──────────────────────────", O = 50;
function H(n) {
  let e = N_(n).split(`
`);
  if (e.length > O) e = e.slice(-O), e.unshift("… (earlier output truncated)");
  return `# ─── Claude's last response (for reference; removed on save) ───
${e.map((o) => o ? `# ${o}` : "#").join(`
`)}
${S}

`;
}
function G(n) {
  let e = n.indexOf(S);
  if (e === -1) return n;
  return n.slice(e + S.length).replace(/^\r?\n\r?\n?/, "");
}
function sK(n, e, r, o) {
  let a = ie(), d = gxe();
  try {
    let g = e ? Phe(n, e) : n, u = r ? H(r) : "", m = u + g, p = n.slice(0, o), l = o === void 0 ? void 0 : 1 + Ft(u, `
`) + Ft(e ? Phe(p, e) : p, `
`);
    nit(d, m, { encoding: "utf-8", flush: true });
    let s = ume(d, l);
    if (s.content === null) return s;
    let c = s.content;
    if (r) c = G(c);
    let f = c.endsWith(`\r
`) ? `\r
` : `
`;
    if (c.endsWith(f) && !c.endsWith(f + f)) c = c.slice(0, -f.length);
    if (e) c = k(c, n, e);
    return { content: c };
  } finally {
    try {
      a.unlinkSync(d);
    } catch {
    }
  }
}
export {
  XI,
  d4,
  s8e,
  sK,
  ume
};
