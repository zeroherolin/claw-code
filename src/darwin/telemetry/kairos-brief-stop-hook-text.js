// darwin/telemetry/kairos-brief-stop-hook-text.js — Claude Code 2.1.310（darwin）模块 chunk-xvhagv4b.js
import { Lz } from "../context/not-admin-owned.js";
import { k, QV } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { rm, Urt } from "../shared/chunk-46ffe22f.js";
import { cGe, LLo } from "./pewter-owl-model.js";
var t = 3e5;
function S5n() {
  return i.CLAUDE_CODE_BRIEF || QV("tengu_kairos_brief", false, t);
}
function jRi(e) {
  if (!e.includes(rm) && !e.includes(Urt)) return false;
  if (cGe()) return false;
  return S5n();
}
function B0() {
  return Lz() && S5n() || LLo();
}
var r = `In brief mode, plain assistant text is hidden from the user — only ${rm} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;
function WRi() {
  let e = k("tengu_kairos_brief_stop_hook_text", "");
  return typeof e === "string" && e.length > 0 ? e : r;
}
export {
  B0,
  S5n,
  WRi,
  jRi
};
