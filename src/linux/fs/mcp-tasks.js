// linux/fs/mcp-tasks.js — Claude Code 2.1.310（linux）模块 chunk-tqd8rcc8.js
import { q, xSe, ke, J } from "../context/not-admin-owned.js";
import { Vt } from "../telemetry/anthropic-workspace-id.js";
import { _, te, t } from "./gitlab-runner-authentication-token.js";
import { $s } from "../shared/chunk-4563156b.js";
import { hn } from "./async-hooks.7959.js";
import { We } from "../plugins/chunk-0a4c51cf.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { JS, Fst } from "../context/utf-8.js";
import { H1o } from "../agents/in-process-teammate.9720.js";
import { BD } from "../shared/chunk-b7346a10.js";
import { u3n } from "../shared/chunk-9d4f4f95.js";
import { dye, LG } from "../shared/chunk-e30378d4.js";
import { fr, ge, bn, Tt, qd } from "../vendor/zod/invalid-return-type.js";
import { hg, la } from "../shared/first-truncation.js";
import { z } from "../shared/chunk-be29de51.js";
import { dirname as w, join as y } from "path";
var kwo = ["input_unservable"], I = /^k[0-9a-z]{8}$/, g = 256, f = /^(?:[^\p{Cc}\p{Cf}]|[\u200c\u200d])+$/u, j1n = /^[A-Za-z0-9_-]{1,128}$/, R = p(() => Tt({ taskId: ge().regex(I), serverName: ge().min(1).max(g).regex(f), toolName: ge().min(1).max(g).regex(f), mcpTaskId: ge().min(1).regex(f), pollIntervalMs: bn().optional(), spawnedAt: bn(), toolUseId: ge().regex(u3n).optional(), protocol: ge().min(1).max(g).regex(/^[\x20-\x7e]+$/).optional(), ttlExpiresAt: bn().optional(), transportFingerprint: ge().max(8192).optional(), workerWakeId: ge().regex(j1n).optional(), cancelReason: qd(kwo).optional().catch(void 0) }).passthrough().superRefine((e, n) => {
  if (e.protocol === "sep2663" && (e.mcpTaskId.length > dye || !LG.test(e.mcpTaskId))) n.addIssue({ code: fr.custom, path: ["mcpTaskId"], message: "sep2663 task id exceeds the wire bound" });
}));
function Two(e) {
  return R().safeParse(e);
}
var D = 1e4, l = 4194304, b = p(() => Tt({ registryId: ge().regex(I), sessionId: ge().min(1).max(g), runId: ge().regex(u3n), toolUseId: ge().regex(u3n).optional().catch(void 0), endedAt: bn().int().min(0).max(864e13), serverName: ge().min(1).max(g).regex(f), toolName: ge().min(1).max(g).regex(f), mcpTaskId: ge().max(dye).regex(LG), status: qd(["completed", "failed", "cancelled"]), code: ge().regex(/^[a-z_]{1,64}$/).optional(), resultText: ge().optional(), resultHint: ge().max(D).regex(f).optional().catch(void 0), statusMessage: ge().optional() }));
function T4() {
  return A();
}
function A() {
  return xSe() ?? Fst() ?? JS(ke());
}
function Jtn(e, n) {
  return e === q() ? T4() : n ?? T4();
}
function P(e = q(), n = A()) {
  return y(n, e, "mcp-tasks");
}
function h(e, n = q(), r, s = "meta") {
  return y(P(n, r), `mcp-task-${e}.${s}.json`);
}
function T(e = T4()) {
  return H1o(e);
}
function x(e, n, r = q(), s = "meta") {
  return We.sidecar(e, r, ["mcp-tasks", `mcp-task-${n}.${s}.json`]);
}
async function W1n(e, n, r) {
  let s = z() && r !== void 0 ? T() : void 0, c = q(), d = BD(T4()), a = d === void 0 ? void 0 : h(e, c, d);
  if (r && s !== void 0) {
    if (a !== void 0) await hn().mkdir(w(a));
    let o = await r.write(x(s, e, c), _(n), { publishDiscipline: "inPlace" });
    if (!o.ok) throw t(`writeMcpTaskMetadata: ${o.error.code}`), Error("mcp task metadata write failed");
    return;
  }
  if (a === void 0) return;
  await hn().mkdir(w(a)), await hn().write(a, _(n));
}
async function Fxs(e, n, r) {
  if (J()) return;
  let { registryId: s, sessionId: c } = e, d = z() && n !== void 0 ? T(r) : void 0;
  if (n && d !== void 0) {
    let o = await n.write(x(d, s, c, "outcome"), _(e), { publishDiscipline: "atomic", mode: 384 });
    if (!o.ok) throw t(`writeMcpTaskOutcome: ${o.error.code}`), Error("mcp task outcome write failed");
    return;
  }
  if (typeof r === "object") throw Error("mcp task outcome: the project folder is a storage scope and no storage backend can take it");
  let a = h(s, c, r, "outcome");
  await hn().mkdir(w(a), 448), await hn().atomicWrite(a, _(e), 384);
}
function Qtn(e, n, r, s) {
  return b3(e, n, r, s, "outcome");
}
async function b3(e, n, r, s, c = "meta") {
  let d = z() && n !== void 0 ? T(s) : void 0;
  if (n && d !== void 0) {
    let o = await n.delete(x(d, e, r, c));
    if (!o.ok) throw t(`deleteMcpTaskMetadata: ${o.error.code}`), Error("mcp task metadata delete failed");
    return;
  }
  if (J() || typeof s === "object") return;
  let a = h(e, r, s, c);
  try {
    await hn().delete(a);
  } catch (o) {
    if (Vt(o)) return;
    throw o;
  }
}
function G1n(e) {
  return E("listMcpTaskMetadata", ".meta.json", Two, e);
}
function Uxs(e) {
  return E("listMcpTaskOutcomes", ".outcome.json", (n, r) => b().refine((s) => r === `mcp-task-${s.registryId}.outcome.json`, "the file is named for another task").safeParse(n), e);
}
async function E(e, n, r, s) {
  let c = z() && s !== void 0 ? T() : void 0;
  if (s && c !== void 0) return K(e, n, r, s, c);
  if (J()) return [];
  let d = P(), a;
  try {
    a = await hn().list(d);
  } catch (u) {
    if (Vt(u)) return [];
    throw u;
  }
  let o = [];
  for (let u of a) {
    if (!u.endsWith(n)) continue;
    try {
      let m = await j(y(d, u)), i = r(te(m), u);
      if (!i.success) {
        t(`${e}: skipping ${u}: ${String(i.error)}`);
        continue;
      }
      o.push(i.data);
    } catch (m) {
      t(`${e}: skipping ${u}: ${String(m)}`);
    }
  }
  return o;
}
async function j(e) {
  let n = hn();
  if ($s === 0 && (await n.lstat(e))?.isFile === false) throw Error("not a regular file");
  let r = await n.readTail(e, l + 1, { noFollow: true });
  if (r.length > l) throw Error("over the size bound");
  return r.toString("utf8");
}
async function K(e, n, r, s, c) {
  let d = { namespace: "sidecar", projectKey: c, sessionId: q(), relPath: ["mcp-tasks"] }, a = [], o = await la((m) => s.listEntries(d, { cursor: m, skipKeyStats: true, skipScopeStats: true }), (m) => {
    for (let i of m) {
      if (i.kind !== "key" || i.key.namespace !== "sidecar") continue;
      if ((i.key.relPath.at(-1) ?? "").endsWith(n)) a.push(i.key);
    }
  });
  switch (o.status) {
    case "done":
      break;
    case "error":
      throw t(`${e}: ${o.error.code}`), Error("mcp task metadata list failed");
    case "capped":
      throw t(`${e}: list exceeded ${hg} pages`), Error("mcp task metadata list exceeded the page cap");
  }
  let u = [];
  for (let m of a) {
    let i = m.relPath.at(-1) ?? "", M = await s.read([{ key: m, offset: 0, length: l + 1 }]);
    if (!M.ok) {
      t(`${e}: skipping ${i}: ${M.error.code}`);
      continue;
    }
    let S = M.value.items[0];
    if (!S.found) continue;
    if (S.totalBytes > l) {
      t(`${e}: skipping ${i}: over the size bound`);
      continue;
    }
    try {
      let k = r(te(Buffer.from(S.value).toString("utf8")), i);
      if (!k.success) {
        t(`${e}: skipping ${i}: ${String(k.error)}`);
        continue;
      }
      u.push(k.data);
    } catch (k) {
      t(`${e}: skipping ${i}: ${String(k)}`);
    }
  }
  return u;
}
export {
  Fxs,
  G1n,
  Jtn,
  Qtn,
  T4,
  Two,
  Uxs,
  W1n,
  b3,
  j1n,
  kwo
};
