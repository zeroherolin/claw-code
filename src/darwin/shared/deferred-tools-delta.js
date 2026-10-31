// darwin/shared/deferred-tools-delta.js — Claude Code 2.1.310（darwin）模块 chunk-08ywwmd3.js
function $He(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "tool_reference";
}
function Q8n(e, r) {
  return `${e}
${r}`;
}
function J_t(e) {
  return $He(e) && "tool_name" in e && typeof e.tool_name === "string";
}
function MZe(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "tool_result" && "content" in e && Array.isArray(e.content);
}
function kye(e, r) {
  let s = [];
  for (let o of e) {
    if (r?.surfacedOnWire !== void 0 && o.type === "attachment" && o.attachment.type === "deferred_tools_delta") {
      let n = o.attachment.surfacedNames;
      for (let t of Array.isArray(n) ? n : []) if (typeof t === "string" && r.surfacedOnWire.has(t)) s.push({ toolUseId: o.uuid, toolName: t });
      continue;
    }
    if (o.type !== "user") continue;
    let c = o.message?.content;
    if (!Array.isArray(c)) continue;
    for (let n of c) {
      if (!MZe(n) || typeof n.tool_use_id !== "string") continue;
      for (let t of n.content) if (J_t(t)) s.push({ toolUseId: n.tool_use_id, toolName: t.tool_name });
    }
  }
  return s;
}
export {
  $He,
  J_t,
  MZe,
  Q8n,
  kye
};
