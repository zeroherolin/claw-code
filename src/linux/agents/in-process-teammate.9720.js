// linux/agents/in-process-teammate.9720.js — Claude Code 2.1.310（linux）模块 chunk-zjm5ncxc.js
import { Br, MB } from "../shared/chunk-3b9c376b.js";
import { U, q, xSe, ke, ci, J } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { _r } from "../plugins/chunk-0a4c51cf.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { fT, Fst } from "../context/utf-8.js";
import { la } from "../shared/first-truncation.js";
import { z } from "../shared/chunk-be29de51.js";
import { readdir as d } from "fs/promises";
import { basename as u, dirname as p, join as i } from "path";
function Np() {
  return i(Le(), "projects");
}
function WG(t) {
  return p(t) === Np() ? u(t) : void 0;
}
function H1o(t) {
  if (typeof t === "string") return WG(t);
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
function Zb(t) {
  let e = c.of(U().host), n = e.projectDirCache.get(t);
  if (n !== void 0) return n;
  let r = i(Np(), fT(t));
  return e.cacheProjectDir(t, r), r;
}
function ZHe() {
  let t = ci();
  if (t !== null) return Zb(t);
  return Fst() ?? Zb(ke());
}
function $8() {
  return xSe() ?? ZHe();
}
function bf() {
  return i($8(), `${q()}.jsonl`);
}
function L1o() {
  return $8();
}
function N1o(t, e) {
  c.of(U().host).setAgentTranscriptSubdir(t, e);
}
function ljr(t) {
  c.of(U().host).clearAgentTranscriptSubdir(t);
}
function yet() {
  return i($8(), q(), "subagents");
}
function A2e(t) {
  return $m(t);
}
function $m(t) {
  let e = c.of(U().host).agentTranscriptSubdirs.get(t), n = e ? i(yet(), e) : yet();
  return i(n, `agent-${t}.jsonl`);
}
function Vpn(t) {
  return MB(t) ? $m(Br(t)) : void 0;
}
async function _et(t) {
  let e = WG($8());
  if (z() && t !== void 0 && e !== void 0) return f(t, e, q());
  if (J()) return [];
  let n;
  try {
    n = await d(yet(), { withFileTypes: true });
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
function $1o(t, e) {
  let n = {};
  for (let r of Object.values(t)) {
    let o = e[r.id]?.messages;
    if (r.type === "in_process_teammate" && r.identity?.agentId && o && o.length > 0) n[r.identity.agentId] = o;
  }
  return n;
}
export {
  $1o,
  $8,
  $m,
  A2e,
  H1o,
  L1o,
  N1o,
  Np,
  Vpn,
  WG,
  ZHe,
  Zb,
  _et,
  bf,
  ljr,
  yet
};
