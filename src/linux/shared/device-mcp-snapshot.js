// linux/shared/device-mcp-snapshot.js — Claude Code 2.1.310（linux）模块 chunk-y93jyzg9.js
import { d, G } from "../telemetry/anthropic-workspace-id.js";
import { _, ma, te, t } from "../fs/gitlab-runner-authentication-token.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { hn } from "../fs/async-hooks.7959.js";
import { We } from "../plugins/chunk-0a4c51cf.js";
import { p } from "./chunk-2fe3b2b7.js";
import { os } from "../shell/chunk-8eebd6c6.js";
import { rz } from "../tools/device-session-limit.js";
import { VW } from "../shell/gave-up.js";
import { o, T, u, $e, me, A } from "../vendor/zod/string-format.js";
import { et } from "./chunk-061dbb8e.js";
import { z } from "./chunk-be29de51.js";
import { hostname as w } from "os";
import { dirname as x, join as D } from "path";
var v = 1, g = "device-mcp-snapshot", ZQr = 8, M = 128;
function e7r(e) {
  return e.added.length > 0 || e.changed.length > 0;
}
var O = p(() => u({ version: A(v), hostname: o(), servers: me(o(), $e([me(o(), o()), A("declined")])), withheld: me(o(), u({ added: T(o()), changed: T(o()) })) }));
function b(e) {
  let r = typeof e._meta === "object" && e._meta !== null ? e._meta : {};
  return et(ma({ name: e.name, description: e.description, inputSchema: e.inputSchema, searchHint: r[rz.searchHint] }));
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
  return e.slice(0, ZQr).map((r) => r.slice(0, M));
}
function t7r(e, r) {
  if (r === void 0) return e;
  return { servers: { ...r.servers, ...e.servers }, withheld: e.withheld };
}
function aas(e, r) {
  let i = /* @__PURE__ */ new Map(), n = { ...r.servers }, s = false;
  for (let [a, y] of e) {
    let f = j(y), l = Object.hasOwn(r.servers, a) ? r.servers[a] : void 0;
    if (l === void 0) {
      n[a] = f, s = true;
      continue;
    }
    let S = R(f, l);
    if (S !== void 0) i.set(a, S);
  }
  let c = Object.fromEntries([...i].filter(([, a]) => e7r(a)));
  return { withheld: i, next: { servers: n, withheld: c }, changed: s || ma(c) !== ma(r.withheld) };
}
function _Cn(e, r, i) {
  let n = { ...e.servers };
  for (let s of r) if (i === "accepted") delete n[s];
  else n[s] = "declined";
  return { servers: n, withheld: {} };
}
async function rwe(e) {
  let r = { servers: {}, withheld: {} }, i;
  try {
    i = await e.readText();
  } catch (n) {
    return t(`device-mcp snapshot: store unreadable (${d(n)})`, { level: "warn" }), "unreadable";
  }
  if (i === void 0) return r;
  try {
    let n = O().safeParse(te(i));
    return n.success && VW(n.data.hostname) === VW(e.hostname()) ? { servers: n.data.servers, withheld: n.data.withheld } : r;
  } catch {
    return r;
  }
}
async function nat(e, r) {
  try {
    return await r.writeText(_({ version: v, hostname: VW(r.hostname()), servers: e.servers, withheld: e.withheld }, null, 2) + `
`), true;
  } catch (i) {
    return t(`device-mcp snapshot: not saved (${d(i)})`, { level: "warn" }), false;
  }
}
function h() {
  return D(Le(), "state", `${g}.json`);
}
function las() {
  return `delete ${os(h())} to reset every server's baseline`;
}
function owe(e) {
  let r = z() && e !== void 0 ? e : void 0, i = We.state(g);
  return { readText: async () => {
    if (r) {
      let n = await r.readText([i]);
      if (!n.ok) throw Error("device-mcp snapshot read failed");
      let s = n.value.items[0];
      return s.found ? s.value : void 0;
    }
    try {
      return await hn().read(h());
    } catch (n) {
      if (G(n)) return;
      throw n;
    }
  }, writeText: async (n) => {
    if (r) {
      if (!(await r.write(i, n, { mode: 384 })).ok) throw Error("device-mcp snapshot write failed");
      return;
    }
    let s = h();
    await hn().mkdir(x(s), 448), await hn().atomicWrite(s, n, 384);
  }, hostname: w };
}
export {
  ZQr,
  _Cn,
  aas,
  e7r,
  las,
  nat,
  owe,
  rwe,
  t7r
};
