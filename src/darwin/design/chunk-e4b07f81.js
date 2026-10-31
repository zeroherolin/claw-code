// darwin/design/chunk-e4b07f81.js — Claude Code 2.1.310（darwin）模块 chunk-x6pjgeyc.js
import { f } from "../shared/chunk-2fe3b2b7.js";
import { o, E, M, C, u } from "../vendor/zod/string-format.js";
var e = f(() => u({ path: o(), text: o(), chars: E().int().min(0), clipped: M().optional() }));
function q0n() {
  return { init_references: u({ docs: C(e()), unavailable: C(u({ path: o(), why: o() })).optional() }).optional() };
}
function BXt() {
  return { design_system: u({ url: o().optional(), default: o().optional(), title: o().optional(), store: M().optional(), docs: C(e()).optional(), unavailable: o().optional() }).optional() };
}
var t = f(() => u({ dir: o(), files: C(u({ path: o(), bytes: E() })), skipped: C(u({ path: o(), reason: o() })) })), Y0n = f(() => u({ type: t().optional(), system_url: o().optional(), system: t().optional(), skill_in_result: M(), capabilities_skill: M(), repl_tool: M().optional() }));
export {
  BXt,
  Y0n,
  q0n
};
