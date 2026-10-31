// darwin/telemetry/reactive-compact-remote.js — Claude Code 2.1.310（darwin）模块 chunk-67cwp2ja.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { i } from "../shared/environment.js";
import { Qt } from "../settings/workflow-launch-exec.js";
import { FG, k } from "../settings/global-config-and-gates.js";
import { js } from "../settings/chunk-9121eb73.js";
var fzs = "claude-opus-4-8";
function mzs() {
  return k("tengu_amber_redwood2", "") || k("tengu_amber_redwood3", "");
}
var r = "tengu_goofy_jellyfish";
function gzs() {
  return k(r, "");
}
function t() {
  return Boolean(Ne(process.env.DISABLE_COMPACT) || i.DISABLE_AUTO_COMPACT);
}
function Hp() {
  if (t()) return false;
  return js("autoCompactEnabled", true).value;
}
function Hyt() {
  return js("idleCompaction", true).value;
}
function xFr() {
  return js("precomputeCompactionEnabled", true).value;
}
function NDo() {
  if (t()) return false;
  let e = js("autoCompactEnabled", true);
  if (e.value) return false;
  if (e.source === "userSettings") return true;
  if (e.source === "legacyGlobalConfig") return Qt("userSettings");
  return false;
}
class n {
  latched = void 0;
  isOpen() {
    return this.latched ??= k("tengu_reactive_compact_remote", false), this.latched;
  }
  reset() {
    this.latched = void 0;
  }
}
var u = new n();
function lF() {
  if (i.CLAUDE_CODE_REMOTE) {
    if (!u.isOpen()) return false;
  }
  return true;
}
function FDo() {
  return k("tengu_hidden_frog", true);
}
function hzs() {
  return !FG() && k("tengu_woolly_forest", true);
}
function yzs() {
  return k("tengu_plain_heron", true);
}
function _zs() {
  return k("tengu_clever_garden", false);
}
function Szs() {
  return k("tengu_sleepy_ripple", true);
}
function bzs() {
  return k("tengu_groovy_eclipse", false);
}
var a = "tengu_wise_comet";
function wzs(e) {
  let o = i.CLAUDE_CODE_WISE_COMET;
  if (o !== void 0) return { strip: o, source: "env" };
  if (e !== "adaptive") return { strip: false, source: "thinking_type" };
  return { strip: k(a, false), source: "flag" };
}
var l = /* @__PURE__ */ new Set(["prompt_suggestion", "away_summary", "agent_summary", "hook_prompt"]);
function eGe(e) {
  return e !== void 0 && l.has(e);
}
var s = /* @__PURE__ */ new Set(["side_question", "extract_memories"]);
function PFr(e) {
  return e !== void 0 && s.has(e);
}
function Ezs() {
  return k("tengu_tidy_origami", false);
}
function y1t(e) {
  return e === "compact";
}
export {
  Ezs,
  FDo,
  Hp,
  Hyt,
  NDo,
  PFr,
  Szs,
  _zs,
  bzs,
  eGe,
  fzs,
  gzs,
  hzs,
  lF,
  mzs,
  wzs,
  xFr,
  y1t,
  yzs
};
