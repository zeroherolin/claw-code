// linux/context/hooks-passed-over.js — Claude Code 2.1.310（linux）模块 chunk-atb05msf.js
import { ZLe, _oe } from "../commands/claude-code.js";
import { AHn } from "../shared/chunk-de256722.js";
import { uun } from "../shared/chunk-cbf69fda.js";
import { L } from "./not-admin-owned.js";
var Gdo = Object.freeze(["attachment", "hook-context", "compaction"]);
function zdo(t) {
  return t !== void 0 && t.length > 0 && t.every((r) => Gdo.includes(r)) ? t.map((r) => `session.append{door=${r}}`) : [];
}
var Kdo = Object.freeze(["prompt.section", "prompt.context", "prompt.attachment", "prompt.compose", "skill.prompt", "attribution.text", "session.compact", "settings.read"]);
function Vdo(t) {
  return t.filter((o) => {
    let r = ZLe.filter((e) => _oe(o, e));
    return r.length > 0 && r.every((e) => e.startsWith("classic.") || Kdo.includes(e));
  });
}
function Gbr(t) {
  return (t.some(uun) ? t.filter((e) => e.tier === "user") : []).flatMap((e) => {
    let s = e.registrationsFor("session.append"), n = L([...Vdo(e.patterns), ...s.flatMap((p) => zdo(AHn(e.matcherFor("session.append", s.filter((a) => a !== p)))))]);
    return n.length > 0 ? [{ type: "hooks-passed-over", source: e.args.pluginStorageId, patterns: n }] : [];
  });
}
export {
  Gbr,
  Gdo,
  Kdo,
  Vdo,
  zdo
};
