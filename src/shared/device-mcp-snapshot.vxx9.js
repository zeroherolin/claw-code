// shared/device-mcp-snapshot.vxx9.js — Claude Code 2.1.310 模块 chunk-vxx9vfmm.js
import { d, G } from "../telemetry/anthropic-workspace-id.36ys.js";
import { _, ga, ee, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Le } from "../models/claude-3-5-sonnet.21mz.js";
import { hn } from "../fs/async-hooks.2k4e.js";
import { je } from "../plugins/chunk-x0a7sawk.js";
import { f } from "./chunk-nyvhtfb3.js";
import { ss } from "../shell/chunk-tjkwy3jp.js";
import { pG } from "../tools/device-session-limit.cjq3.js";
import { n2 } from "../shell/gave-up.tnt0.js";
import { o, C, u, Fe, me, T } from "../vendor/zod/string-format.k395.js";
import { et } from "./chunk-tftf1nn4.js";
import { z } from "./chunk-mxa4mwnj.js";
import { hostname as w } from "os";
import { dirname as x, join as D } from "path";
var v = 1, g = "device-mcp-snapshot", EZr = 8, M = 128;
function vZr(e) {
  return e.added.length > 0 || e.changed.length > 0;
}
var O = f(() => u({ version: T(v), hostname: o(), servers: me(o(), Fe([me(o(), o()), T("declined")])), withheld: me(o(), u({ added: C(o()), changed: C(o()) })) }));
function b(e) {
  let r = typeof e._meta === "object" && e._meta !== null ? e._meta : {};
  return et(ga({ name: e.name, description: e.description, inputSchema: e.inputSchema, searchHint: r[pG.searchHint] }));
}
function j(e) {
  return Object.fromEntries(e.map((r) => [r.name, b(r)]));
}
function R(e, r) {
  if (r === "declined") return { added: [], changed: [] };
  let i = Object.keys(e).filter((s) => !Object.hasOwn(r, s)), n = Object.keys(e).filter((s) => Object.hasOwn(r, s) && r[s] !== e[s]);
  if (i.length === 0 && n.length === 0) return;
  return { added: m(i), changed: m(n) };
}
function m(e) {
  return e.slice(0, EZr).map((r) => r.slice(0, M));
}
function kZr(e, r) {
  if (r === void 0) return e;
  return { servers: { ...r.servers, ...e.servers }, withheld: e.withheld };
}
function $ls(e, r) {
  let i = /* @__PURE__ */ new Map(), n = { ...r.servers }, s = false;
  for (let [a, y] of e) {
    let h = j(y), l = Object.hasOwn(r.servers, a) ? r.servers[a] : void 0;
    if (l === void 0) {
      n[a] = h, s = true;
      continue;
    }
    let S = R(h, l);
    if (S !== void 0) i.set(a, S);
  }
  let c = Object.fromEntries([...i].filter(([, a]) => vZr(a)));
  return { withheld: i, next: { servers: n, withheld: c }, changed: s || ga(c) !== ga(r.withheld) };
}
function ZRn(e, r, i) {
  let n = { ...e.servers };
  for (let s of r) if (i === "accepted") delete n[s];
  else n[s] = "declined";
  return { servers: n, withheld: {} };
}
async function pwe(e) {
  let r = { servers: {}, withheld: {} }, i;
  try {
    i = await e.readText();
  } catch (n) {
    return t(`device-mcp snapshot: store unreadable (${d(n)})`, { level: "warn" }), "unreadable";
  }
  if (i === void 0) return r;
  try {
    let n = O().safeParse(ee(i));
    return n.success && n2(n.data.hostname) === n2(e.hostname()) ? { servers: n.data.servers, withheld: n.data.withheld } : r;
  } catch {
    return r;
  }
}
async function bat(e, r) {
  try {
    return await r.writeText(_({ version: v, hostname: n2(r.hostname()), servers: e.servers, withheld: e.withheld }, null, 2) + `
`), true;
  } catch (i) {
    return t(`device-mcp snapshot: not saved (${d(i)})`, { level: "warn" }), false;
  }
}
function p() {
  return D(Le(), "state", `${g}.json`);
}
function Uls() {
  return `delete ${ss(p())} to reset every server's baseline`;
}
function fwe(e) {
  let r = z() && e !== void 0 ? e : void 0, i = je.state(g);
  return { readText: async () => {
    if (r) {
      let n = await r.readText([i]);
      if (!n.ok) throw Error("device-mcp snapshot read failed");
      let s = n.value.items[0];
      return s.found ? s.value : void 0;
    }
    try {
      return await hn().read(p());
    } catch (n) {
      if (G(n)) return;
      throw n;
    }
  }, writeText: async (n) => {
    if (r) {
      if (!(await r.write(i, n, { mode: 384 })).ok) throw Error("device-mcp snapshot write failed");
      return;
    }
    let s = p();
    await hn().mkdir(x(s), 448), await hn().atomicWrite(s, n, 384);
  }, hostname: w };
}
export {
  $ls,
  EZr,
  Uls,
  ZRn,
  bat,
  fwe,
  kZr,
  pwe,
  vZr
};
