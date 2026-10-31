// darwin/agents/in-process-teammate.9720.js — Claude Code 2.1.310（darwin）模块 chunk-040fj5r2.js
import { Br, F1 } from "../shared/chunk-3b9c376b.js";
import { U, V, Lbe, ke, ci, J } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { _r } from "../plugins/chunk-0a4c51cf.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { mC, zst } from "../context/utf-8.js";
import { la } from "../shared/first-truncation.js";
import { z } from "../shared/chunk-be29de51.js";
import { readdir as d } from "fs/promises";
import { basename as u, dirname as p, join as i } from "path";
function Nf() {
  return i(Le(), "projects");
}
function Q2(t) {
  return p(t) === Nf() ? u(t) : void 0;
}
function cjo(t) {
  if (typeof t === "string") return Q2(t);
  let { scope: e } = t;
  return e.namespace === "transcript" && e.sessionId === void 0 ? e.projectKey : void 0;
}
class g {
  projectDirCache = /* @__PURE__ */ new Map();
  agentTranscriptSubdirs = /* @__PURE__ */ new Map();
  cacheProjectDir(t, e) {
    this.projectDirCache.set(t, e);
  }
  clearProjectDirCache() {
    this.projectDirCache.clear();
  }
  setAgentTranscriptSubdir(t, e) {
    this.agentTranscriptSubdirs.set(t, e);
  }
  clearAgentTranscriptSubdir(t) {
    this.agentTranscriptSubdirs.delete(t);
  }
}
var c = new W(() => new g());
function eb(t) {
  let e = c.of(U().host), n = e.projectDirCache.get(t);
  if (n !== void 0) return n;
  let r = i(Nf(), mC(t));
  return e.cacheProjectDir(t, r), r;
}
function sDe() {
  let t = ci();
  if (t !== null) return eb(t);
  return zst() ?? eb(ke());
}
function V8() {
  return Lbe() ?? sDe();
}
function _p() {
  return i(V8(), `${V()}.jsonl`);
}
function ujo() {
  return V8();
}
function pjo(t, e) {
  c.of(U().host).setAgentTranscriptSubdir(t, e);
}
function xjr(t) {
  c.of(U().host).clearAgentTranscriptSubdir(t);
}
function Cet() {
  return i(V8(), V(), "subagents");
}
function Lze(t) {
  return Fm(t);
}
function Fm(t) {
  let e = c.of(U().host).agentTranscriptSubdirs.get(t), n = e ? i(Cet(), e) : Cet();
  return i(n, `agent-${t}.jsonl`);
}
function lmn(t) {
  return F1(t) ? Fm(Br(t)) : void 0;
}
async function Tet(t) {
  let e = Q2(V8());
  if (z() && t !== void 0 && e !== void 0) return f(t, e, V());
  if (J()) return [];
  let n;
  try {
    n = await d(Cet(), { withFileTypes: true });
  } catch {
    return [];
  }
  return n.filter((r) => r.isFile() && r.name.startsWith("agent-") && r.name.endsWith(".jsonl")).map((r) => r.name.slice(6, -6));
}
async function f(t, e, n) {
  let r = [];
  try {
    return (await la((a) => t.listEntries({ namespace: "transcript", projectKey: e, sessionId: n }, { skipKeyStats: true, skipScopeStats: true, ...a !== void 0 && { cursor: a } }), (a) => {
      for (let s of a) if (s.kind === "key" && s.key.namespace === "transcript" && s.key.agentId !== void 0 && s.key.agentRelPath === void 0 && _r(s.key.agentId)) r.push(s.key.agentId);
    })).status === "done" ? r : [];
  } catch {
    return [];
  }
}
function fjo(t, e) {
  let n = {};
  for (let r of Object.values(t)) {
    let o = e[r.id]?.messages;
    if (r.type === "in_process_teammate" && r.identity?.agentId && o && o.length > 0) n[r.identity.agentId] = o;
  }
  return n;
}
export {
  Cet,
  Fm,
  Lze,
  Nf,
  Q2,
  Tet,
  V8,
  _p,
  cjo,
  eb,
  fjo,
  lmn,
  pjo,
  sDe,
  ujo,
  xjr
};
