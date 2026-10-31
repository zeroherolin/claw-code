// linux/design/chunk-e4b07f81.js — Claude Code 2.1.310（linux）模块 chunk-867pw0w3.js
import { p } from "../shared/chunk-2fe3b2b7.js";
import { o, v, M, T, u } from "../vendor/zod/string-format.js";
var e = p(() => u({ path: o(), text: o(), chars: v().int().min(0), clipped: M().optional() }));
function EDn() {
  return { init_references: u({ docs: T(e()), unavailable: T(u({ path: o(), why: o() })).optional() }).optional() };
}
function vXt() {
  return { design_system: u({ url: o().optional(), default: o().optional(), title: o().optional(), store: M().optional(), docs: T(e()).optional(), unavailable: o().optional() }).optional() };
}
var t = p(() => u({ dir: o(), files: T(u({ path: o(), bytes: v() })), skipped: T(u({ path: o(), reason: o() })) })), kDn = p(() => u({ type: t().optional(), system_url: o().optional(), system: t().optional(), skill_in_result: M(), capabilities_skill: M(), repl_tool: M().optional() }));
export {
  EDn,
  kDn,
  vXt
};
