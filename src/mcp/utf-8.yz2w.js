// mcp/utf-8.yz2w.js — Claude Code 2.1.310 模块 chunk-yz2wkvw3.js
import { L } from "../context/not-admin-owned.ersa.js";
import { N, d, $s } from "../telemetry/anthropic-workspace-id.36ys.js";
import { z3e } from "../fs/node-modules.gp4v.js";
import { ee, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { bn, Vp, fK, On } from "../shell/invalid-type.qnva.js";
import { Uy } from "../plugins/skills-dir.cemw.js";
import { QL } from "../shell/chunk-tjkwy3jp.js";
import { Vk } from "../commands/claude-code.vy1w.js";
import { tje, kft, x0r, z6n, Rgt, GWe, vIo } from "../core/conversation-engine.31gx.js";
import { xa, Lre } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { Fbt, Vd } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { U0 } from "./copy-failed.e8vn.js";
import * as f from "fs/promises";
import * as u from "path";
async function sfr(n, e) {
  if (e === "builtin") {
    let h = Vk(n.name);
    if (!h) throw Error(`Built-in plugin ${n.name} not found`);
    return { commands: [], agents: [], skills: h.skills?.map((_) => ({ name: _.name })) ?? [], hooks: h.hooks ? Object.keys(h.hooks) : [], mcpServers: h.mcpServers ? Object.keys(h.mcpServers) : [], lspServers: [] };
  }
  let r = Vp(e) || e === Uy, s = On(n.source).name || n.name, m = e === bn ? (await Rgt(`${s}@${e}`, void 0, "load"))?.entry ?? (await x0r(s, void 0, true))?.entry : void 0, o = r ? void 0 : m ?? (await z6n(e, void 0)).plugins.find((h) => h.name === s);
  if (!o && !r) throw Error(`Plugin ${s} not found in marketplace ${e}`);
  let [c, a, p] = await Promise.all([F([n.commandsPath, ...n.commandsPaths ?? []]), F([n.agentsPath, ...n.agentsPaths ?? []]), A([n.skillsPath, ...n.skillsPaths ?? []], n.name)]), y = n.hooksConfig ? Object.keys(n.hooksConfig) : k(o?.hooks), i = n.mcpServers ? Object.keys(n.mcpServers) : L(await D(n)), P = i.length > 0 ? i : k(o?.mcpServers), g = n.lspServers ? Object.keys(n.lspServers) : (await M(n)).concat(k(n.manifest.lspServers)), T = g.length > 0 ? L(g) : k(o?.lspServers);
  return { commands: c, agents: a, skills: p, hooks: y, mcpServers: P, lspServers: T };
}
async function Zvi(n, e, r) {
  let [s, m, o] = await Promise.all([Promise.all(n.skills.map((i) => w(i.path ? u.join(i.path, "SKILL.md") : void 0, E(i, r)))), Promise.all(n.agents.map((i) => w(i.path, i.name, "agent"))), Promise.all(n.commands.map((i) => w(i.path, E(i, r))))]), c = [...s, ...m, ...o], a = c.map((i) => i.alwaysOn).filter(Boolean).join(`
`), p = c.map((i) => i.onInvoke).filter(Boolean).join(`

`), y = {};
  for (let i of e) {
    let [P, g] = await Promise.all([j(a, i), j(p, i)]);
    if (P !== null && g !== null) y[i] = { always_on: P, on_invoke: g };
  }
  return { tokens: y, inventory: { ...n, skills: S(n.skills, s), agents: S(n.agents, m), commands: S(n.commands, o) } };
}
function eki(n, e, r, s = 4) {
  if (r !== void 0 && e > 0) return Math.round(n / e * r);
  return Vd(" ".repeat(n), s);
}
var v = 1048576;
function E(n, e) {
  if (!e) return n.name;
  return `${e}:${n.name.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
}
async function w(n, e, r = "skill") {
  if (!n) return { alwaysOn: "", onInvoke: "" };
  let s;
  try {
    s = await b(n, v);
  } catch (i) {
    return C(n, i), { alwaysOn: "", onInvoke: "" };
  }
  let { frontmatter: m, content: o } = xa(s, n, { normalizeKeys: true }), c = { description: Lre(m.description, e) ?? tje(o, "Skill"), whenToUse: m.when_to_use != null ? String(m.when_to_use) : void 0 }, { description: a, whenToUse: p } = r === "agent" ? c : Fbt({ ...c, argumentHint: void 0, argumentNames: [] });
  return { alwaysOn: vIo({ name: e, description: a, whenToUse: p }), onInvoke: o.trim() };
}
async function b(n, e) {
  let r = await f.open(n, "r");
  try {
    let { size: s } = await r.stat(), m = Math.min(s, e), o = Buffer.alloc(m), { bytesRead: c } = await r.read(o, 0, m, 0);
    return o.toString("utf8", 0, c);
  } finally {
    await r.close();
  }
}
function S(n, e) {
  return n.map((r, s) => {
    let m = e[s];
    if (!m) return r;
    return { ...r, chars: { always_on: m.alwaysOn.length, on_invoke: m.onInvoke.length } };
  });
}
async function j(n, e) {
  if (!n) return 0;
  return GWe([{ role: "user", content: n }], [], e);
}
function k(n) {
  return [n].flat().filter((e) => e != null && typeof e === "object").flatMap(Object.keys);
}
async function D(n) {
  if (n.isBuiltin) return [];
  let e = [await I(await O(n, ".mcp.json"))];
  for (let r of [n.manifest.mcpServers ?? []].flat()) if (typeof r !== "string") e.push(k(r));
  else if (!U0(r) && !QL(r) && !z3e(r)) e.push(await I(await kft(n, r)));
  return e.flat();
}
async function I(n) {
  if (n === null) return [];
  try {
    let e = ee(await b(n, v));
    if (e == null || typeof e !== "object") return [];
    let r = "mcpServers" in e && typeof e.mcpServers === "object" ? e.mcpServers : e;
    return r == null ? [] : Object.keys(r);
  } catch {
    return [];
  }
}
async function M(n) {
  try {
    let e = await O(n, ".lsp.json");
    if (e === null) return [];
    let r = await f.readFile(e, "utf-8"), s = ee(r);
    if (s == null || typeof s !== "object") return [];
    return Object.keys(s);
  } catch {
    return [];
  }
}
async function O(n, e) {
  return fK(n) ? kft(n, e) : u.join(n.path, e);
}
async function F(n) {
  let e = [], r = /* @__PURE__ */ new Set();
  for (let s of n) {
    if (!s) continue;
    let m;
    try {
      m = await f.readdir(s, { withFileTypes: true });
    } catch (o) {
      C(s, o);
      continue;
    }
    for (let o of m) if (o.isFile() && o.name.endsWith(".md")) {
      let c = u.join(s, o.name), a = u.resolve(c);
      if (r.has(a)) continue;
      r.add(a), e.push({ name: u.basename(o.name, ".md"), path: c });
    }
  }
  return e;
}
async function A(n, e) {
  let r = [], s = /* @__PURE__ */ new Set(), m = (o, c) => {
    let a = u.resolve(c);
    if (s.has(a)) return;
    s.add(a), r.push({ name: o, path: c });
  };
  for (let o of n) {
    if (!o) continue;
    try {
      let a = u.join(o, "SKILL.md");
      if ((await f.stat(a)).isFile()) {
        let y = "";
        try {
          let i = await b(a, v), { frontmatter: P } = xa(i, a), g = typeof P.name === "string" ? P.name.trim() : "";
          y = g.startsWith(`${e}:`) ? g.slice(e.length + 1) : g;
        } catch {
        }
        m(y || u.basename(o), o);
        continue;
      }
    } catch {
    }
    let c;
    try {
      c = await f.readdir(o, { withFileTypes: true });
    } catch (a) {
      C(o, a);
      continue;
    }
    for (let a of c) {
      if (!a.isDirectory() && !a.isSymbolicLink()) continue;
      let p = u.join(o, a.name);
      try {
        if ((await f.stat(u.join(p, "SKILL.md"))).isFile()) m(a.name, p);
      } catch {
      }
    }
  }
  return r;
}
function C(n, e) {
  if (t(`Failed to read plugin components from ${n}: ${d(e)}`, { level: "error" }), $s(e)) return;
  l(N(e));
}
export {
  Zvi,
  eki,
  sfr
};
