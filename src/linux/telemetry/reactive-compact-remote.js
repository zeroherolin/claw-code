// linux/telemetry/reactive-compact-remote.js — Claude Code 2.1.310（linux）模块 chunk-t5b6h5a5.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { i } from "../shared/environment.js";
import { Qt } from "../settings/workflow-launch-exec.js";
import { xz, k } from "../settings/global-config-and-gates.js";
import { js } from "../settings/chunk-9121eb73.js";
var Rzs = "claude-opus-4-8";
function xzs() {
  return k("tengu_amber_redwood2", "") || k("tengu_amber_redwood3", "");
}
var r = "tengu_goofy_jellyfish";
function Pzs() {
  return k(r, "");
}
function t() {
  return Boolean(Ne(process.env.DISABLE_COMPACT) || i.DISABLE_AUTO_COMPACT);
}
function Hf() {
  if (t()) return false;
  return js("autoCompactEnabled", true).value;
}
function Ryt() {
  return js("idleCompaction", true).value;
}
function d$r() {
  return js("precomputeCompactionEnabled", true).value;
}
function dLo() {
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
function o$() {
  if (i.CLAUDE_CODE_REMOTE) {
    if (!u.isOpen()) return false;
  }
  return true;
}
function cLo() {
  return k("tengu_hidden_frog", true);
}
function Izs() {
  return !xz() && k("tengu_woolly_forest", true);
}
function Ozs() {
  return k("tengu_plain_heron", true);
}
function Mzs() {
  return k("tengu_clever_garden", false);
}
function Dzs() {
  return k("tengu_sleepy_ripple", true);
}
function Hzs() {
  return k("tengu_groovy_eclipse", false);
}
var a = "tengu_wise_comet";
function Lzs(e) {
  let o = i.CLAUDE_CODE_WISE_COMET;
  if (o !== void 0) return { strip: o, source: "env" };
  if (e !== "adaptive") return { strip: false, source: "thinking_type" };
  return { strip: k(a, false), source: "flag" };
}
var l = /* @__PURE__ */ new Set(["prompt_suggestion", "away_summary", "agent_summary", "hook_prompt"]);
function GGe(e) {
  return e !== void 0 && l.has(e);
}
var s = /* @__PURE__ */ new Set(["side_question", "extract_memories"]);
function c$r(e) {
  return e !== void 0 && s.has(e);
}
function Nzs() {
  return k("tengu_tidy_origami", false);
}
function sBt(e) {
  return e === "compact";
}
export {
  Dzs,
  GGe,
  Hf,
  Hzs,
  Izs,
  Lzs,
  Mzs,
  Nzs,
  Ozs,
  Pzs,
  Ryt,
  Rzs,
  c$r,
  cLo,
  d$r,
  dLo,
  o$,
  sBt,
  xzs
};
