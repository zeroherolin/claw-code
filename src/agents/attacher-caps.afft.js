// agents/attacher-caps.afft.js — Claude Code 2.1.310 模块 chunk-afftzf8r.js
import { U, tt, Cit, Tu, xrs, zCn } from "../context/not-admin-owned.ersa.js";
import { d, G } from "../telemetry/anthropic-workspace-id.36ys.js";
import { X } from "../shared/chunk-3kevgx4j.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { i } from "../shared/environment.9a41.js";
import { _t, cAt, _, ee, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { re } from "../shared/chunk-j79dwkaq.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { g, m } from "../telemetry/chunk-wn8xtaqg.js";
import { zw, wT } from "../shared/chunk-daaayw23.js";
import { bl } from "../fs/reply-across-default-dirs.esvz.js";
import { wkt, xL } from "../fs/chunk-q5g832za.js";
import { wS } from "../settings/global-config-and-gates.27xj.js";
import { lii } from "../vendor/chalk/xterm-ghostty.qrwz.js";
import { zd } from "../remote/chunk-c1rfegja.js";
import { m0, A1e } from "../shared/deep-link.aet8.js";
import { vHs, dGn, sE, Mk } from "../core/conversation-engine.31gx.js";
import { iao, yXt } from "../shared/chunk-b4jb4pbg.js";
import { Ws } from "../terminal/wl-copy.gdbt.js";
import { Wgn, Ggn } from "../cli/chunk-nrbn573b.js";
import { ad, Rl, Hf, lo, JJe, Uhe, Ib, cyt, j2e, KA } from "../telemetry/bg-roster-parse-failed.yhsj.js";
import { oao, UUe, sao } from "../context/bg-prompt-stash-restore.vcsh.js";
import { vb, l0 } from "../shell/chunk-x28ms7hd.js";
import { eZt } from "../shared/chunk-tnnwxyz2.js";
import { unlink as S } from "fs/promises";
import { createServer as L } from "net";
import { join as H } from "path";
import { StringDecoder as N } from "string_decoder";
class k {
  resolver = null;
  registerResolver(e) {
    this.resolver = e;
  }
}
var R = new W(() => new k());
function hXt(e, r) {
  R.of(e).registerResolver(r);
}
function E(e, r) {
  return R.of(e).resolver?.(r) ?? false;
}
class D {
  runner = null;
  registerRunner(e) {
    this.runner = e;
  }
}
var P = new W(() => new D());
function Zio(e, r) {
  P.of(e).registerRunner(r);
}
function b(e, r) {
  try {
    return P.of(e).runner?.(r) ?? false;
  } catch (o) {
    return t(`[bg-rv] command runner threw, queueing the reply: ${d(o)}`, { level: "warn" }), false;
  }
}
import { rm as x } from "fs/promises";
import { join as M } from "path";
class u {
  static NAME = ".prompt-draft";
  static MAX_BYTES = 262144;
  #t;
  #r;
  #e = Promise.resolve();
  #o;
  constructor(e) {
    this.#t = e;
  }
  follow() {
    return this.#o ??= this.#t.subscribe(this.#s), this.#n();
  }
  settled() {
    return this.#i(this.#e);
  }
  dispose() {
    this.#o?.(), this.#o = void 0;
  }
  #s = () => {
    let { value: e, cameBack: r } = this.#t.getState();
    if (e !== this.#r?.value || r !== this.#r.cameBack) this.#n();
  };
  #n(e = i.CLAUDE_JOB_DIR) {
    if (this.#r = this.#t.getState(), e) this.#e = this.#e.then(() => this.#a(e)).catch(Rl);
    return this.#e;
  }
  #a(e) {
    let { value: r, cameBack: o } = this.#t.getState(), n = M(e, u.NAME);
    return r !== "" && !o ? UUe(n, re(r, u.MAX_BYTES)) : x(n, { force: true }).catch((a) => (Rl(a), UUe(n, "")));
  }
  async #i(e) {
    return await e, e === this.#e ? void 0 : this.#i(this.#e);
  }
}
var j = 3;
class A {
  server;
  current = void 0;
  heartbeat;
  wedgeTimer = void 0;
  wedgeDisarmed = false;
  authToken;
  currentAuthed = false;
  unauthedDrops = 0;
  gateReported = false;
  nativeBrowserEnv;
  pendingInteractiveMarks;
  storageV5;
  promptInput = m0(T());
  promptDraftFile = new u(this.promptInput);
  promptStash = new sao(this.promptInput);
  constructor(e, r, o, n, s) {
    this.authToken = r, this.storageV5 = s, this.nativeBrowserEnv = o, this.pendingInteractiveMarks = n, this.server = L((a) => this.onConnection(a)), this.server.on("error", (a) => t(`[bg-rv] server error: ${String(a)}`, { level: "warn" })), this.server.listen(e), this.server.unref(), this.heartbeat = setInterval(() => this.send({ type: "heartbeat" }), 3e4), this.heartbeat.unref();
  }
  onConnection(e) {
    this.current?.destroy(), this.current = e, this.currentAuthed = false, zCn(false);
    while (this.pendingInteractiveMarks.length > 0) {
      let n = this.pendingInteractiveMarks[0];
      if (n === void 0 || !this.send(n)) break;
      this.pendingInteractiveMarks.shift();
    }
    this.unauthedDrops = 0, this.gateReported = false, this.clearPreBootState().catch((n) => {
      if (!G(n)) Rl(n);
    }), this.restorePromptDraft().catch(() => {
    }), this.promptStash.restore().catch(l), e.on("error", () => e.destroy()), e.once("close", () => {
      if (this.current === e) this.current = void 0, zCn(false);
    });
    let r = "", o = new N("utf8");
    e.on("data", (n) => {
      if (this.current !== e) {
        e.destroy();
        return;
      }
      r += o.write(n);
      let s;
      while ((s = r.indexOf(`
`)) >= 0) {
        let a = r.slice(0, s);
        if (r = r.slice(s + 1), a) this.handleLine(a);
      }
      if (r.length > 1048576) r = "", e.destroy();
    });
  }
  stop() {
    clearInterval(this.heartbeat), clearTimeout(this.wedgeTimer), this.wedgeTimer = void 0, this.current?.destroy(), this.current = void 0, zCn(false), this.restoreNativeBrowserEnv(), this.promptDraftFile.dispose(), this.promptStash.dispose(), this.server.close();
  }
  send(e) {
    if (!this.current || this.current.destroyed) return false;
    try {
      return this.current.write(_(e) + `
`), true;
    } catch {
      return false;
    }
  }
  noteUnauthedRejection() {
    if (this.unauthedDrops++, !this.gateReported && this.unauthedDrops >= j) this.gateReported = true, m("bg_rv_gate", "unauthed_drops");
  }
  restoreNativeBrowserEnv() {
    if (this.nativeBrowserEnv === void 0) delete process.env.BROWSER;
    else process.env.BROWSER = this.nativeBrowserEnv;
  }
  handleLine(e) {
    let r;
    try {
      r = ee(e);
    } catch {
      return;
    }
    if (!r || typeof r !== "object") return;
    if ("role" in r) {
      if (this.authToken) if ("auth" in r && xL(r.auth, this.authToken)) {
        if (this.currentAuthed = true, !this.gateReported) this.gateReported = true, g("bg_rv_gate");
      } else {
        if (!this.currentAuthed) this.noteUnauthedRejection();
        this.send({ type: "auth-rejected" });
      }
      return;
    }
    let o = r;
    if (this.authToken && !this.currentAuthed && o.type !== "repaint") {
      if (t(`[bg-rv] dropped ${typeof o.type === "string" ? o.type : "unknown"} from un-authed connection`, { level: "warn" }), o.type !== "attacher-caps") this.noteUnauthedRejection();
      this.send({ type: "reply-rejected" });
      return;
    }
    if (o.type === "shutdown") {
      J(this.promptDraftFile, this.storageV5);
      return;
    }
    if (o.type === "repaint") {
      V();
      return;
    }
    if (o.type === "attacher-caps") {
      this.handleAttacherCaps(o);
      return;
    }
    if (o.type === "reply" && typeof o.text === "string") q(o);
  }
  handleAttacherCaps(e) {
    if (xrs(e.caps), zCn(true), e.caps) iao(Date.now());
    else yXt();
    if (lii(e.caps?.colorLevel), !e.caps) this.restoreNativeBrowserEnv();
    else if (typeof e.caps.browser === "string") process.env.BROWSER = e.caps.browser;
    else delete process.env.BROWSER;
    if (e.caps?.systemTheme) eZt(e.caps.systemTheme);
  }
  async waitForInkMount(e) {
    for (let r = 0; !Ws().has(process.stdout); r++) {
      if (r >= 60 || this.current !== e) return false;
      await X(500);
    }
    return true;
  }
  async clearPreBootState() {
    let e = i.CLAUDE_JOB_DIR;
    if (!e) return;
    if (!await this.waitForInkMount(this.current)) return;
    await JJe(async () => {
      let r = await lo(e, this.storageV5);
      if (!r) return;
      if (!r.forkSourceAlive) {
        let n = dGn(i.CLAUDE_CODE_RESUME_SOURCE_ALIVE);
        if (n) await ad(e, { ...r, ...n }, this.storageV5), Object.assign(r, n);
      }
      if (r.state === "working" && r.detail === Uhe) this.armStartupWedgeWatchdog(e);
      let o = (n) => {
        let s = sE.current();
        return n.tempo === "blocked" && cyt(n) && !(s?.overlay === true && s.text === n.needs);
      };
      if (o(r)) {
        let n = await lo(e, this.storageV5) ?? r;
        if (!o(n)) return;
        await ad(e, { ...n, ...j2e.includes(n.state) && { state: "running" }, tempo: "idle", needs: void 0, needsOverlay: void 0, block: void 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, this.storageV5), this.send({ type: "state", patch: { ...j2e.includes(n.state) && { state: "running" }, tempo: "idle", needs: "" } });
        return;
      }
      if (!j2e.includes(r.state)) return;
      if (r.tempo === "blocked") return;
      await ad(e, { ...r, state: "running", tempo: "idle", updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, this.storageV5), this.send({ type: "state", patch: { state: "running", tempo: "idle" } });
    });
  }
  armStartupWedgeWatchdog(e) {
    if (this.wedgeDisarmed) return;
    clearTimeout(this.wedgeTimer);
    let r = i.CLAUDE_BG_STARTUP_WEDGE_MS || 45e3;
    this.wedgeTimer = setTimeout((o) => this.onStartupWedgeTimeout(o), r, e), this.wedgeTimer.unref();
  }
  disarmStartupWedgeWatchdog() {
    this.wedgeDisarmed = true, clearTimeout(this.wedgeTimer), this.wedgeTimer = void 0;
  }
  onStartupWedgeTimeout(e) {
    lo(e, this.storageV5).then(async (r) => {
      if (this.wedgeDisarmed || r?.state !== "working" || r.detail !== Uhe || r.tempo === "blocked") return;
      await ad(e, { ...r, tempo: "blocked", detail: h, needs: f, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, this.storageV5), this.send({ type: "state", patch: { tempo: "blocked", detail: h, needs: f } });
    }).catch((r) => {
      if (!G(r)) Rl(r);
    });
  }
  async restorePromptDraft() {
    let e = i.CLAUDE_JOB_DIR;
    if (!e) return;
    let r = H(e, u.NAME), o = await bl(r, 4 * u.MAX_BYTES);
    if (o === null) return;
    await S(r).catch(() => {
    });
    let n = oao(o);
    if (!n) return;
    if (!Wgn()) Ggn(n);
    if (!await this.waitForInkMount(this.current)) return;
    if (this.promptInput.getState().value === "") A1e(this.promptInput, n);
  }
}
class B {
  server = void 0;
}
var F = new W(() => new B());
function T() {
  return U();
}
function w() {
  return T().host;
}
function v() {
  return F.of(w());
}
async function lCi(e) {
  let r = i.CLAUDE_BG_RENDEZVOUS_SOCK, o = v();
  if (!r || o.server) return;
  let n = i.BROWSER, s = [];
  vHs((c) => {
    let y = { type: "interactive-mark", ...c };
    if (Qfe(y)) return true;
    return s.push(y), true;
  }), delete process.env.CLAUDE_BG_RENDEZVOUS_SOCK;
  let a = i.CLAUDE_BG_RV_AUTH;
  delete process.env.CLAUDE_BG_RV_AUTH;
  let p = i.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if (delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, p) {
    let c = await wkt(p);
    if (c?.rvAuth) a = c.rvAuth;
    await S(p).catch(() => {
    });
  }
  await S(r).catch(() => {
  }), o.server = new A(r, a, n, s, e);
  let I = o.server;
  _t(() => I.promptStash.flush());
}
function Qfe(e) {
  return v().server?.send(e) ?? false;
}
function J(e, r) {
  Qfe({ type: "shutting-down" });
  let o = zd(), n = [e.follow()];
  if (o) {
    let s = o.getLastSequenceNum();
    o.teardown({ skipArchive: true }).catch(() => {
    });
    let a = i.CLAUDE_JOB_DIR;
    if (a && s > 0) n.push(K(a, s, r).catch(() => {
    }));
  }
  n.push(cAt()), Promise.race([Promise.all(n).catch(() => {
  }).then(() => e.settled()), X(5e3)]).finally(() => {
    process.exit(0);
  });
}
function V() {
  if (Tu() !== null) iao(Date.now());
  if (!Ws().get(process.stdout)?.forceRedraw({ flushReact: true })) process.stdout.write(wT + zw + `
  \x1B[2mSession can't redraw right now — Ctrl+Z to detach\x1B[0m
`);
  Qfe({ type: "repaint-done" });
}
function q(e) {
  if (e.nextTurn === true) {
    Mk({ agentId: tt(), mode: "prompt", value: e.text, priority: "next", origin: { kind: "human" }, skipSlashCommands: true }), Cit(), t(`[bg-rv] enqueued next-turn prompt: ${e.text.slice(0, 80)}`);
    return;
  }
  if (E(w(), e.text)) {
    t(`[bg-rv] peer reply answered question: ${e.text.slice(0, 80)}`);
    return;
  }
  if (b(w(), e.text)) {
    t(`[bg-rv] peer reply ran at once: ${e.text.slice(0, 80)}`);
    return;
  }
  let r = vb(e.text);
  if (Mk({ agentId: tt(), mode: r, value: l0(e.text), priority: "next", origin: { kind: "human" } }), r === "prompt" && !e.text.trim().startsWith("/")) Cit();
  t(`[bg-rv] enqueued reply: ${e.text.slice(0, 80)}`);
}
var h = "stuck on a startup dialog", f = "open this session to continue setup";
function eao() {
  v().server?.disarmStartupWedgeWatchdog();
}
async function C(e, r, o, n) {
  let s = await lo(e, n);
  if (!s) return { kind: "refused" };
  if (s.tempo === "blocked" && s.needs === r) return { kind: "already" };
  if (s.tempo === "blocked" && s.needs !== Ib) return { kind: "refused" };
  return await ad(e, { ...s, tempo: "blocked", detail: o, needs: r, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, n), Qfe({ type: "state", patch: { tempo: "blocked", detail: o, needs: r } }), { kind: "wrote", prior: { tempo: s.tempo, needs: s.needs, detail: s.detail } };
}
async function O(e, r, o, n) {
  let s = await lo(e, n);
  if (!s || s.tempo !== "blocked" || s.needs !== r) return;
  await ad(e, { ...s, ...o, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, n), Qfe({ type: "state", patch: { tempo: o.tempo, needs: o.needs, detail: o.detail } });
}
async function dCi(e, r) {
  let o = i.CLAUDE_JOB_DIR;
  if (!o || v().server?.wedgeDisarmed) return;
  let n = e ? `${h} (${e})` : h, s = await C(o, f, n, r);
  return s.kind === "wrote" ? s.prior : void 0;
}
async function cCi(e, r) {
  let o = i.CLAUDE_JOB_DIR;
  if (!o) return;
  await O(o, f, e, r);
}
async function tao(e, r, o) {
  let n = i.CLAUDE_JOB_DIR;
  if (!n) return { kind: "refused" };
  return JJe(() => C(n, e, r, o));
}
async function nao(e, r, o) {
  let n = i.CLAUDE_JOB_DIR;
  if (!n) return;
  await JJe(() => O(n, e, r, o));
}
async function rao(e) {
  let r = i.CLAUDE_CODE_SESSION_KIND === "bg" ? i.CLAUDE_JOB_DIR : void 0, o = r ?? wS()?.jobDir;
  if (!o) return;
  let n = await lo(o, e);
  if (n?.replayOwed === true && await JJe(async () => {
    Hf(o);
    let a = await lo(o, e);
    if (a?.replayOwed !== true || a.tempo !== "active" || !KA(a.state)) return false;
    return ad(o, { ...a, tempo: "idle", replayOwed: void 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, e).then(() => true, (p) => (Rl(p), false));
  })) {
    Qfe({ type: "state", patch: { tempo: "idle" } });
    return;
  }
  if (!r || !n || n.state !== "working" || n.tempo !== "active") return;
  await ad(o, { ...n, tempo: "blocked", needs: Ib, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, e), Qfe({ type: "state", patch: { tempo: "blocked", needs: Ib } });
}
async function K(e, r, o) {
  let n = await lo(e, o);
  if (!n || n.bridgeSessionSeq === r) return;
  await ad(e, { ...n, bridgeSessionSeq: r, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, o);
}
export {
  Qfe,
  Zio,
  cCi,
  dCi,
  eao,
  hXt,
  lCi,
  nao,
  rao,
  tao
};
