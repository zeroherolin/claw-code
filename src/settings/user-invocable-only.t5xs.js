// settings/user-invocable-only.t5xs.js — Claude Code 2.1.310 模块 chunk-t5xsvsvv.js
import { qg } from "../shared/chunk-j79dwkaq.js";
import { eW, Xsr, rC, Qt } from "./workflow-launch-exec.t4r2.js";
import { ty } from "../plugins/entry-refused.bp7z.js";
import { ss } from "../shell/chunk-tjkwy3jp.js";
import { fe } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { Uo, Bs } from "../context/team-memory-sync.0s3j.js";
import { FT, Zve, hje, yje, mrn, Bft, eke, Wft, hrn, j7e } from "../core/conversation-engine.31gx.js";
import { Z3 } from "../permissions/bot-protected-tengu-atomic-magpie.zc9j.js";
var RPt = ["on", "name-only", "user-invocable-only", "off"];
function x(e) {
  return e.type === "prompt" && e.hiddenBehindPlugin === void 0 && (e.loadedFrom === "skills" || e.loadedFrom === "syncedSkills" || e.loadedFrom === "commands_DEPRECATED" || e.loadedFrom === "plugin" || e.loadedFrom === "mcp");
}
function Qro(e) {
  let n = Bft(e);
  if (n) {
    let t = e.source === "plugin" ? eke(e) : n.value;
    return { value: t, source: t !== n.value ? "plugin" : n.source === "policySettings" ? "policy" : "flag" };
  }
  if (!Zve(e.name)) return { value: e.disableModelInvocation ? "user-invocable-only" : "on", source: "reserved-name" };
  if (e.disableModelInvocation) return { value: "user-invocable-only", source: "author" };
  if (e.source === "plugin") return { value: eke(e), source: "plugin" };
  return;
}
function F(e, { skipLocalBareKey: n = false } = {}) {
  if (e.loadedFrom === "mcp") {
    let a = [e.name, ...mrn(e)];
    for (let y of ["projectSettings", "userSettings"]) {
      if (!Qt(y)) continue;
      let m = yje(fe(y)?.skillOverrides, a);
      if (m !== void 0) return m;
    }
    return;
  }
  let t = (a) => Qt(a) ? fe(a)?.skillOverrides : void 0, o = (a) => FT(t("projectSettings"), a) ?? FT(t("userSettings"), a), i = hje(e), f = n ? void 0 : FT(fe("localSettings")?.skillOverrides, i);
  return o(e.name) ?? (i != null ? f ?? o(i) : void 0);
}
function b(e, n) {
  return e.loadedFrom === "mcp" ? yje(n, [e.name, ...mrn(e)]) : FT(n, e.name);
}
function PUe({ source: e, loadedFrom: n, pluginInfo: t }) {
  if (n === "syncedSkills" || Z3(t?.repository)) return eW;
  switch (e) {
    case "mcp":
    case "plugin":
      return e;
    case "memoryStore":
      return "memory store";
    case "bundled":
    case "builtin":
      return "built-in";
    default:
      return rC(e);
  }
}
function I5e(e) {
  let n = hrn(e);
  return n !== void 0 && Uo(e) === n ? n : e.name;
}
function Zro(e, n) {
  let t = n.filter((l) => l.loadedFrom !== "syncedSkills"), o = [];
  for (let l of e) {
    let S = l.unqualifiedName;
    if (l.loadedFrom !== "syncedSkills" || S === void 0 || Wft(l) !== void 0) continue;
    let r = qg(S), u = Bs(S, t), O = ty(S), v = (g) => [g.name, Uo(g), ...g.aliases ?? []], C = (g) => v(g).find((R) => ty(R) === O), d = u ?? t.find((g) => C(g));
    if (!d) {
      o.push({ bare: r, sentence: `Your claude.ai skill can't use /${r} in this session.`, held: false, userCanFree: false, renameNeedsNameLine: false });
      continue;
    }
    let p = d.type === "prompt" ? d : void 0, k = p?.skillRoot !== void 0 ? "skill" : `command file ${qg(d.name)}.md`, c, s = "", h = false;
    if (d.kind === "workflow") c = "a workflow";
    else if (d.loadedFrom === "plugin") c = "a command from a plugin";
    else switch (Xsr(d)) {
      case "user": {
        let g = p?.skillRoot !== void 0 ? ` in ${qg(ss(p.skillRoot))}` : "";
        c = `your own ${k}${g}`, h = d.loadedFrom === "skills", s = h ? " Rename it (folder and SKILL.md name) or delete it to use the claude.ai one." : " Rename or delete it to use the claude.ai one.";
        break;
      }
      case "project":
        c = `this project's ${k}`;
        break;
      case "managed":
        c = `a ${k} your organization manages`;
        break;
      case "plugin":
        c = "a command from a plugin";
        break;
      case "remote":
        c = d.loadedFrom === "mcp" ? "a skill from an MCP server" : d.isMcp ? "a prompt from an MCP server" : "another command";
        break;
      case "builtin":
      case "bundled":
        c = "a built-in Claude Code command";
        break;
      default:
        c = "another command";
    }
    let w = `/${qg(C(d) ?? d.name)}`, N = u !== void 0 ? `/${r} runs ${c}${s ? `.${s}` : ", not your claude.ai skill."}` : `/${r} is too close to ${w}, ${c}${s ? `.${s}` : ", so your claude.ai skill can't use it."}`;
    o.push({ bare: r, sentence: N, held: true, userCanFree: s !== "", renameNeedsNameLine: h });
  }
  if (o.length === 0) return;
  if (o.length === 1) return o[0].sentence;
  let i = o.every((l) => l.held) ? "are taken by other commands" : "are taken by other commands or unavailable in this session", f = `${L(o)} ${i}, so they don't run your claude.ai skills.`, a = o.filter((l) => l.userCanFree);
  if (a.length === 0) return f;
  let y = a.some((l) => l.renameNeedsNameLine) ? "Rename (folder and SKILL.md name)" : "Rename", m = a.length === 1 ? "one" : "ones";
  return `${f} ${y} or delete your own ${L(a)} to use the claude.ai ${m}.`;
}
function L(e) {
  let n = e.map((t) => `/${t.bare}`);
  if (n.length === 1) return n[0];
  if (n.length <= 4) return `${n.slice(0, -1).join(", ")} and ${n.at(-1)}`;
  return `${n.slice(0, 3).join(", ")} and ${n.length - 3} more`;
}
function O5e(e, { sortByTokens: n = false } = {}) {
  let t = e.filter(x);
  if (n) {
    let o = new Map(t.map((i) => [i, j7e(i)]));
    return t.sort((i, f) => (o.get(f) ?? 0) - (o.get(i) ?? 0) || I5e(i).localeCompare(I5e(f)));
  }
  return t.sort((o, i) => PUe(o).localeCompare(PUe(i)) || I5e(o).localeCompare(I5e(i)));
}
function fhr() {
  return Object.assign(/* @__PURE__ */ Object.create(null), fe("localSettings")?.skillOverrides);
}
function M5e(e, n = fhr()) {
  let t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  for (let i of e) {
    let f = F(i);
    if (f) t.set(i.name, f);
    let a = Qro(i);
    if (a) o.set(i, a);
  }
  return { localOverrides: n, lowerTier: t, locked: o };
}
function H5e(e, n) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let o of e) {
    if (Object.hasOwn(t, o.name)) continue;
    t[o.name] = n.locked.get(o)?.value ?? b(o, n.localOverrides) ?? n.lowerTier.get(o.name) ?? "on";
  }
  return t;
}
function _Yt(e, n, t) {
  let { localOverrides: o, lowerTier: i, locked: f } = t, a = new Set(Array.from(f.keys(), (r) => r.name)), y = new Set(a), m = /* @__PURE__ */ Object.create(null), l = 0, S = 0;
  for (let r of e) {
    if (y.has(r.name)) continue;
    y.add(r.name);
    let u = FT(n, r.name) ?? "on", O = i.get(r.name) ?? "on", v = b(r, o) ?? O;
    if (r.loadedFrom === "mcp") {
      if (u === v) continue;
      let p = false, k = u === O ? void 0 : u;
      if (k !== FT(o, r.name) || Object.hasOwn(m, r.name)) m[r.name] = k, p = true;
      for (let c of mrn(r)) {
        if (FT(o, c) === void 0) continue;
        for (let s of e) {
          if (s.name === r.name || s.loadedFrom !== "mcp" || !mrn(s).includes(c) || Object.hasOwn(m, s.name)) continue;
          let h = b(s, o);
          if ((a.has(s.name) || (FT(n, s.name) ?? "on") === (h ?? i.get(s.name) ?? "on")) && h !== void 0) m[s.name] = h;
        }
        m[c] = void 0, p = true;
      }
      if (p) l++;
      S++;
      continue;
    }
    let C = r.loadedFrom === "syncedSkills" ? hje(r) : void 0;
    if (C != null && FT(o, C) !== void 0 && u !== v) {
      let p = F(r, { skipLocalBareKey: true }) ?? "on", k = u === p ? void 0 : u;
      if (k !== FT(o, r.name)) m[r.name] = k;
      m[C] = void 0, l++, S++;
      continue;
    }
    if (r.loadedFrom === "syncedSkills" && u === v) continue;
    let d = u === O ? void 0 : u;
    if (d !== FT(o, r.name)) m[r.name] = d, l++;
    if (u !== v) S++;
  }
  return { diff: m, writes: l, effectiveChanged: S };
}
export {
  H5e,
  I5e,
  M5e,
  O5e,
  PUe,
  Qro,
  RPt,
  Zro,
  _Yt,
  fhr
};
