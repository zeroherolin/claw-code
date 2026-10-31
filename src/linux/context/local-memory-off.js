// linux/context/local-memory-off.js — Claude Code 2.1.310（linux）模块 chunk-3bg8n65p.js
import { O9, ba } from "../settings/global-config-and-gates.js";
import { hr } from "../git/utf-8.js";
import { Le, dy } from "../models/claude-3-5-sonnet.js";
import { Ji } from "../shared/chunk-d2c47492.js";
import { Zo } from "../fs/utf-8.aa9a.js";
import { m_ } from "../fs/async-hooks.7959.js";
import { c2e, r1o, HS, N1r } from "./org-memory-writes-setting-changed.js";
import { l4n, lln } from "./team-memory-sync.js";
import { hgt } from "../core/conversation-engine.js";
import { join as m } from "path";
function c(t) {
  return hr(t) !== null;
}
function xxn(t, o, n = "  ") {
  let r = m(Le(), "CLAUDE.md"), s = m(o, "CLAUDE.md"), i = m(o, ".claude", "CLAUDE.md"), p = m(o, "CLAUDE.local.md"), f = t.some((e) => e.path === r), g = t.some((e) => e.path === s), y = [...t.filter((e) => e.type !== "AutoMem" && !hgt(e.path)).map((e) => ({ ...e, exists: true })), ...f ? [] : [{ path: r, type: "User", content: "", exists: false }], ...g ? [] : [{ path: s, type: "Project", content: "", exists: false }]], h = c(o), u = /* @__PURE__ */ new Map();
  return y.map((e) => {
    let d = Zo(e.path), a = e.parent ? (u.get(e.parent) ?? 0) + 1 : 0;
    u.set(e.path, a);
    let b = a > 0 ? Ji(n, a - 1) : "", l = e.type === "User" && e.path === r ? "user" : e.type === "Project" && e.path === s ? "project" : a === 0 && e.type === "Project" && e.path === i ? "project-alt" : a === 0 && e.type === "Local" && e.path === p ? "local" : "other", M = l === "user" ? "User instructions" : l === "project" ? "Project instructions" : a > 0 ? `${b}L ${d}` : d, R = e.type === "User" ? "Saved in ~/.claude/CLAUDE.md" : l === "project" ? `${h ? "Checked in at" : "Saved in"} ./CLAUDE.md` : e.parent ? "@-imported" : "";
    return { kind: l, path: e.path, label: M, description: R, exists: e.exists };
  });
}
function Pxn() {
  let t = [{ kind: "auto", path: ba(), label: "Open auto-memory folder", description: "" }];
  if (O9() && r1o()) t.push({ kind: "team", path: HS(), label: "Open team memory folder", description: "" });
  return t;
}
function Ixn(t, o = (n) => n) {
  let n = [];
  for (let r of t) if (r.memory) n.push({ kind: "agent", path: N1r(r.agentType, r.memory), label: `Open ${o(r.agentType)} agent memory`, description: `${r.memory} scope` });
  return n;
}
function jds() {
  let t = lln();
  if (t === "open" || t === "pending") return t;
  if (t === "account_off" || t === "local_memory_off") {
    let o = l4n();
    return o === "denied" ? "closed" : o;
  }
  return "closed";
}
function k5e() {
  return c2e();
}
function Wds() {
  return false;
}
var Oxn = "can't be turned on here; use a session started outside Claude Code";
function Mxn({ enabled: t, modelDisabled: o, safeMode: n, raiseAllowed: r }) {
  if (o && !t) return { status: "unavailable for current model", detail: "", dim: true, toggleable: false };
  if (n) return { status: "off in safe mode", detail: `${dy()} to re-enable`, dim: true, toggleable: false };
  if (!t && !r) return { status: "off", detail: Oxn, dim: true, toggleable: false };
  return { status: t ? "on" : "off", detail: "", dim: false, toggleable: !o };
}
function Dxn({ autoMemoryOn: t, enabled: o, running: n, lastDreamAt: r, raiseAllowed: s, heldDetail: i }) {
  if (!t) return { status: "off while auto-memory is off", detail: "", dim: true, toggleable: false };
  if (i !== void 0) return { status: o ? "on" : "off", detail: i, dim: true, toggleable: false };
  if (!o && !s) return { status: "off", detail: Oxn, dim: true, toggleable: false };
  let p = n ? "running" : r === null ? "" : r === 0 ? "never" : `last ran ${m_(new Date(r))}`;
  return { status: o ? "on" : "off", detail: p, dim: false, toggleable: true };
}
export {
  Dxn,
  Ixn,
  Mxn,
  Oxn,
  Pxn,
  Wds,
  jds,
  k5e,
  xxn
};
