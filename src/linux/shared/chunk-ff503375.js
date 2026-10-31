// linux/shared/chunk-ff503375.js — Claude Code 2.1.310（linux）模块 chunk-mev35m44.js
import { Ht } from "../fs/content-encoding.js";
import { q } from "../context/not-admin-owned.js";
import { a5t } from "../telemetry/anthropic-workspace-id.js";
import { Qr } from "../models/claude-3-5-sonnet.js";
import { Epi, bt, HM, _, ie, Ms, t } from "../fs/gitlab-runner-authentication-token.js";
import { Jlr, YAt, Ses, tit, wes } from "../artifacts/cowritten-artifact-html.js";
import { sGe } from "../remote/claude-code-error-tracking.js";
import { NJs } from "../context/account-memory-text-not-identified.js";
import { Wh } from "./chunk-65fb1c9c.js";
import { dirname as p, join as g } from "path";
var a = Qr(() => Ses(/* @__PURE__ */ new Date()));
function l() {
  return g(YAt.errors(), a() + ".jsonl");
}
function f(e) {
  return g(YAt.mcpLogs(e), a() + ".jsonl");
}
function d(e) {
  let r = Epi(e);
  return { write(o) {
    r.write(_(o) + `
`);
  }, flush: r.flush, dispose: r.dispose };
}
function u() {
}
class c {
  writers = /* @__PURE__ */ new Map();
  pendingWrites = Wh();
  writerFor(e) {
    let r = this.writers.get(e);
    if (!r) {
      let o = p(e), i = false;
      r = d({ writeFn: (s) => {
        this.pendingWrites.run(e, async () => {
          try {
            await m(o, e, s);
          } catch (n) {
            if (!i) i = true, t(`Dropping log batch for ${e}: ${n instanceof Error ? n.message : String(n)}`);
          }
        });
      }, flushIntervalMs: 1e3, maxBufferSize: 50 }), this.writers.set(e, r), bt(async () => {
        r?.dispose(), await this.pendingWrites.settle();
      }), HM(this.flushBeforeExit);
    }
    return r;
  }
  async flush() {
    for (let e of this.writers.values()) e.flush();
    await this.pendingWrites.settle();
  }
  flushBeforeExit = () => this.flush();
  async reset() {
    for (let e of this.writers.values()) e.dispose();
    await this.pendingWrites.settle(), this.writers.clear(), this.pendingWrites.clearForTest();
  }
}
async function m(e, r, o) {
  let i = ie();
  try {
    await i.appendFile(r, o);
  } catch {
    await i.mkdir(e).catch(u), await i.appendFile(r, o);
  }
}
function w(e, r, o) {
  return;
}
function E(e) {
  if (typeof e === "string") return e;
  if (e && typeof e === "object") {
    let r = e;
    if (typeof r.message === "string") return r.message;
    if (typeof r.error === "object" && r.error && "message" in r.error && typeof r.error.message === "string") return r.error.message;
  }
  return;
}
function v(e, r) {
  NJs(r), sGe(r);
  let o = a5t(r), i = "";
  if (Ht.isAxiosError(r) && r.config?.url) {
    let s = [`url=${r.config.url}`];
    if (r.response?.status !== void 0) s.push(`status=${r.response.status}`);
    let n = E(r.response?.data);
    if (n) s.push(`body=${n}`);
    i = `[${s.join(",")}] `;
  }
  t(`${r.name}: ${i}${o}`, { level: "error" }), w(e, l(), { error: `${i}${o}` });
}
function h(e, r, o) {
  t(`MCP server "${r}" ${o}`, { level: "error" });
  let i = f(r), s = o instanceof Error ? a5t(o) : String(o), n = { error: Ms(s), timestamp: (/* @__PURE__ */ new Date()).toISOString(), sessionId: q(), cwd: Jlr() };
  e.writerFor(i).write(n);
}
function S(e, r, o) {
  t(`MCP server "${r}": ${o}`);
  let i = f(r), s = { debug: Ms(o), timestamp: (/* @__PURE__ */ new Date()).toISOString(), sessionId: q(), cwd: Jlr() };
  e.writerFor(i).write(s);
}
function dio() {
  wes(y(new c()));
  let e = tit.droppedBeforeSink;
  t(e === 0 ? "Error log sink initialized" : `Error log sink initialized; ${e} events logged before it attached were dropped`);
}
function y(e) {
  return { logError: (r) => v(e, r), logMCPError: (r, o) => h(e, r, o), logMCPDebug: (r, o) => S(e, r, o) };
}
export {
  dio
};
