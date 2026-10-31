// linux/telemetry/kairos-brief-stop-hook-text.js — Claude Code 2.1.310（linux）模块 chunk-egrbwnxe.js
import { C2 } from "../context/not-admin-owned.js";
import { k, BV } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { rm, Lrt } from "../shared/chunk-46ffe22f.js";
import { eze, l0o } from "./pewter-owl-model.js";
var t = 3e5;
function Z5n() {
  return i.CLAUDE_CODE_BRIEF || BV("tengu_kairos_brief", false, t);
}
function oRi(e) {
  if (!e.includes(rm) && !e.includes(Lrt)) return false;
  if (eze()) return false;
  return Z5n();
}
function ND() {
  return C2() && Z5n() || l0o();
}
var r = `In brief mode, plain assistant text is hidden from the user — only ${rm} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;
function sRi() {
  let e = k("tengu_kairos_brief_stop_hook_text", "");
  return typeof e === "string" && e.length > 0 ? e : r;
}
export {
  ND,
  Z5n,
  oRi,
  sRi
};
