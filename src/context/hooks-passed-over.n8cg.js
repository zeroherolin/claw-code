// context/hooks-passed-over.n8cg.js — Claude Code 2.1.310 模块 chunk-n8cgvyjs.js
import { sLe, Coe } from "../commands/claude-code.vy1w.js";
import { VHn } from "../shared/chunk-427gt1az.js";
import { $un } from "../shared/chunk-emh9bc9e.js";
import { L } from "./not-admin-owned.ersa.js";
var gco = Object.freeze(["attachment", "hook-context", "compaction"]);
function hco(t) {
  return t !== void 0 && t.length > 0 && t.every((r) => gco.includes(r)) ? t.map((r) => `session.append{door=${r}}`) : [];
}
var yco = Object.freeze(["prompt.section", "prompt.context", "prompt.attachment", "prompt.compose", "skill.prompt", "attribution.text", "session.compact", "settings.read"]);
function _co(t) {
  return t.filter((o) => {
    let r = sLe.filter((e) => Coe(o, e));
    return r.length > 0 && r.every((e) => e.startsWith("classic.") || yco.includes(e));
  });
}
function lbr(t) {
  return (t.some($un) ? t.filter((e) => e.tier === "user") : []).flatMap((e) => {
    let s = e.registrationsFor("session.append"), n = L([..._co(e.patterns), ...s.flatMap((p) => hco(VHn(e.matcherFor("session.append", s.filter((a) => a !== p)))))]);
    return n.length > 0 ? [{ type: "hooks-passed-over", source: e.args.pluginStorageId, patterns: n }] : [];
  });
}
export {
  _co,
  gco,
  hco,
  lbr,
  yco
};
