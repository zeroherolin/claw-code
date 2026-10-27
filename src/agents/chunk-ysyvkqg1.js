// agents/chunk-ysyvkqg1.js — Claude Code 2.1.310 模块 chunk-ysyvkqg1.js
import { _r, pC, je } from "../plugins/chunk-x0a7sawk.js";
import { G } from "../telemetry/anthropic-workspace-id.36ys.js";
import { im } from "../context/utf-8.yzy3.js";
import { Rm, CTt } from "../git/utf-8.vh7e.js";
import { la } from "../shared/first-truncation.pnw3.js";
import { z } from "../shared/chunk-mxa4mwnj.js";
import { readdir as b, readFile as fe } from "fs/promises";
import { isAbsolute as y, join as f, relative as h, sep as p } from "path";
function T(i) {
  let e = h(im(), i);
  if (e === "" || e.startsWith(`..${p}`) || e === ".." || y(e)) return null;
  let t = e.split(p);
  return t.length < 4 || t[2] !== "subagents" ? null : t;
}
function qms(i) {
  let e = T(i), t = e?.at(-1);
  if (!e || !t?.startsWith("agent-") || !t.endsWith(".jsonl")) return null;
  let r = t.slice(6, -6), o = e.slice(3, -1);
  if (!pC([e[0], e[1], r]) || o.length > 0 && !pC(o)) return null;
  let a = je.transcript(e[0], e[1], r, o.length > 0 ? o : void 0);
  return Rm(a) === void 0 ? a : null;
}
async function Yms(i, e, { rejectUnlistable: t = false } = {}) {
  let r = z() && e !== void 0 ? k(i) : null;
  if (e !== void 0 && r !== null) return U(e, r, i, M, t);
  let o = [];
  async function a(u) {
    let d;
    try {
      d = await b(u, { withFileTypes: true });
    } catch (s) {
      if (t && !G(s)) throw s;
      return;
    }
    for (let s of d) if (s.isFile() && s.name.startsWith("agent-") && s.name.endsWith(".jsonl")) {
      let c = s.name.slice(6, -6);
      o.push({ agentId: c, filePath: f(u, s.name) });
    } else if (s.isDirectory()) await a(f(u, s.name));
  }
  return await a(i), o;
}
function k(i) {
  let e = h(im(), i);
  if (e === "" || e.startsWith(`..${p}`) || y(e)) return null;
  let t = e.split(p);
  if (t.length !== 3 || t[2] !== "subagents" || !pC([t[0], t[1]])) return null;
  let r = { namespace: "transcript", projectKey: t[0], sessionId: t[1] };
  return CTt(r) === void 0 ? r : null;
}
var M = 1e4;
async function U(i, e, t, r, o) {
  let a = [], u = [e], d = /* @__PURE__ */ new Set([""]), s = 0;
  try {
    while (u.length > 0) {
      if (++s > r) throw Error("sub-agent listing incomplete");
      let c = u.shift(), m = [];
      if ((await la((l) => i.listEntries(c, { skipKeyStats: true, skipScopeStats: true, ...l !== void 0 && { cursor: l } }), (l) => {
        for (let n of l) if (n.kind === "key" && n.key.namespace === "transcript" && n.key.agentId !== void 0 && _r(n.key.agentId) && (n.key.agentRelPath === void 0 || pC(n.key.agentRelPath))) a.push({ agentId: n.key.agentId, filePath: f(t, ...n.key.agentRelPath ?? [], `agent-${n.key.agentId}.jsonl`) });
        else if (n.kind === "scope" && n.scope.namespace === "transcript" && n.scope.agentRelPath !== void 0 && pC(n.scope.agentRelPath) && !d.has(n.scope.agentRelPath.join("/"))) {
          let g = { ...e, agentRelPath: n.scope.agentRelPath };
          if (CTt(g) === void 0) d.add(n.scope.agentRelPath.join("/")), m.push(g);
        }
      })).status !== "done") throw Error("sub-agent listing incomplete");
      u.unshift(...m);
    }
  } catch (c) {
    if (o) throw c;
    return [];
  }
  return a;
}
export {
  Yms,
  qms
};
