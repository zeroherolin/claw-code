// darwin/auth/repl-route-how-to-by-type-key.js — Claude Code 2.1.310（darwin）模块 chunk-t5sjtkqz.js
import { __asset_text } from "../../runtime/assets.js";
import { $e } from "../vendor/react/chunk-0b0bf45d.js";
var e = __asset_text("prompts/repl-route/design.md");
var t = __asset_text("prompts/repl-route/designHowTo.md");
var s = __asset_text("prompts/repl-route/designTwoSteps.md");
var a = __asset_text("prompts/repl-route/slides.md");
var i = __asset_text("prompts/repl-route/slidesHowTo.md");
var r = __asset_text("prompts/repl-route/slidesTwoSteps.md");
var x = /* @__PURE__ */ new Map([["design", e.trim()], ["slides", a.trim()]]), O = /* @__PURE__ */ new Map([["design", s.trim()], ["slides", r.trim()]]), T = "<the new Artifact's url>", _ = '"<the tokens.json path above>"', E = "   // only with a design system", F = " With a design system, the colours, type and spacing are the ones in the files you printed.", A = /* @__PURE__ */ new Map([["design", { text: t.trim(), whole: "design", parts: "boards" }], ["slides", { text: i.trim(), whole: "deck", parts: "slides" }]]);
export {
  A as REPL_ROUTE_HOW_TO_BY_TYPE_KEY,
  E as REPL_ROUTE_HOW_TO_SYSTEM_ROW_END,
  F as REPL_ROUTE_HOW_TO_SYSTEM_SENTENCE,
  _ as REPL_ROUTE_HOW_TO_TOKENS_WORDS,
  T as REPL_ROUTE_HOW_TO_URL_WORDS,
  x as REPL_ROUTE_SECTION_BY_TYPE_KEY,
  O as REPL_ROUTE_TWO_STEPS_BY_TYPE_KEY
};
