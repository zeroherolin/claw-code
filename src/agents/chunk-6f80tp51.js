// agents/chunk-6f80tp51.js — Claude Code 2.1.310 模块 chunk-6f80tp51.js
var LNn = /* @__PURE__ */ new Set(["agents.md", "agents.override.md", "gemini.md", ".cursorrules"]), n = { instructions: 0, setting: 1, subagent: 2, command: 3, mcp: 4, skill: 5 };
function _Mt(e) {
  return e.scope === "user" && !e.warning && e.kind !== "skill";
}
function u8e(e) {
  if (e.scope === "project") return "project";
  if (e.warning || e.kind === "skill") return "warned";
  return null;
}
function ago(e, t) {
  let r = n[e.kind] - n[t.kind];
  if (r !== 0) return r;
  if (e.scope !== t.scope) return e.scope === "project" ? -1 : 1;
  return e.label.localeCompare(t.label);
}
export {
  LNn,
  _Mt,
  ago,
  u8e
};
