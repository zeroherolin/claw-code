// fs/chunk-nz9988fz.js — Claude Code 2.1.310 模块 chunk-nz9988fz.js
import { _r } from "../plugins/chunk-x0a7sawk.js";
import { ZL, vbe } from "../context/utf-8.yzy3.js";
import { Q2 } from "../agents/in-process-teammate.040f.js";
import { QKn, Wan } from "../tasks/continued-in.f5qq.js";
import { Mf, Hk } from "../agents/chunk-hv1nfndb.js";
import { la } from "../shared/first-truncation.pnw3.js";
import { z } from "../shared/chunk-mxa4mwnj.js";
import { readdir as P, stat as w } from "fs/promises";
import { basename as ee, join as g } from "path";
function S(s) {
  let e = Q2(s);
  return e !== void 0 && _r(e) ? e : void 0;
}
async function wio(s, e, o, d, a, u) {
  let f = z() && d !== void 0 ? S(s) : void 0;
  if (d !== void 0 && f !== void 0) {
    let i = /* @__PURE__ */ new Map();
    try {
      await la((r) => d.listEntries({ namespace: "transcript", projectKey: f }, { skipScopeStats: true, ...e ? {} : { skipKeyStats: true }, ...r !== void 0 && { cursor: r } }), (r) => {
        for (let t of r) {
          if (t.kind !== "key" || t.key.namespace !== "transcript") continue;
          let l = ZL(t.key.sessionId);
          if (!l) continue;
          if (e && t.mtimeMs === void 0) continue;
          let m = e ? Math.trunc(t.mtimeMs ?? 0) : 0, p = i.get(l);
          if (p !== void 0) {
            if (m > p.mtime) p.mtime = m;
            continue;
          }
          i.set(l, { sessionId: l, filePath: g(s, `${t.key.sessionId}.jsonl`), mtime: m, projectPath: o, ownWorktrees: u });
        }
      }, a !== void 0 ? { budget: a } : void 0);
    } catch {
    }
    return [...i.values()];
  }
  let n;
  try {
    n = await P(s);
  } catch {
    return [];
  }
  return (await Promise.all(n.map(async (i) => {
    if (!i.endsWith(".jsonl")) return null;
    let r = ZL(i.slice(0, -6));
    if (!r) return null;
    let t = g(s, i);
    if (!e) return { sessionId: r, filePath: t, mtime: 0, projectPath: o, ownWorktrees: u };
    try {
      let l = await w(t);
      return { sessionId: r, filePath: t, mtime: l.mtime.getTime(), projectPath: o, ownWorktrees: u };
    } catch {
      return null;
    }
  }))).filter((i) => i !== null);
}
var h = 32;
async function _hs(s, e, o) {
  let d = await wio(s, false, void 0, o);
  for (let a = 0; a < d.length; a += h) {
    let f = (await Promise.all(d.slice(a, a + h).map(async (n) => {
      let c = await vbe(n.filePath, Hk(Mf(n.filePath, o)));
      return c !== null && QKn(c.tail) === e && await Wan(n.filePath, c.head, c.tail, c.size, o) ? n.filePath : void 0;
    }))).find((n) => n !== void 0);
    if (f !== void 0) return f;
  }
  return;
}
export {
  _hs,
  wio
};
