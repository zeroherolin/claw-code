// skills/skill-plugin-authoring.jsy6.js — Claude Code 2.1.310 模块 chunk-jsy60ys5.js
import { __asset_path, __asset_text } from "../runtime/assets.js";
import { dt } from "../fs/chunk-m1c94bsz.js";
import { Fr, $e } from "../vendor/react/chunk-meds60nn.js";
var t = {};
Fr(t, { EXAMPLE_BAND: () => p, EXAMPLE_BAND_STATE: () => h, EXAMPLE_PANE: () => f, EXAMPLE_PANE_STATE: () => g, EXAMPLE_PANE_TEST: () => S, EXAMPLE_TOOL_CALL: () => P, REFERENCE_MD: () => H, SKILL_MD: () => Q, default: () => t });
var e = __asset_text("skills/plugin-authoring/examples/band.tsx");
var p = e;
var o = __asset_text("skills/plugin-authoring/examples/band-state.d.ts");
var h = o;
var n = __asset_text("skills/plugin-authoring/examples/pane.tsx");
var f = n;
var s = __asset_text("skills/plugin-authoring/examples/pane-state.d.ts");
var g = s;
var a = __asset_text("skills/plugin-authoring/examples/pane.test.tsx");
var S = a;
var r = __asset_text("skills/plugin-authoring/examples/tool-call.ts");
var P = r;
var l = __asset_path("skills/plugin-authoring/REFERENCE.md");
var i = dt(l, import.meta.dirname);
var H = i;
var c = __asset_path("skills/plugin-authoring/SKILL.md");
var d = dt(c, import.meta.dirname);
var Q = d;
export {
  p as EXAMPLE_BAND,
  h as EXAMPLE_BAND_STATE,
  f as EXAMPLE_PANE,
  g as EXAMPLE_PANE_STATE,
  S as EXAMPLE_PANE_TEST,
  P as EXAMPLE_TOOL_CALL,
  H as REFERENCE_MD,
  Q as SKILL_MD,
  t as default
};
