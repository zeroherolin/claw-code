// shared/prompt-suggestion-back-off-end.0qms.js — Claude Code 2.1.310 模块 chunk-0qms47m0.js
import { N } from "../telemetry/anthropic-workspace-id.36ys.js";
import { g, p } from "../telemetry/chunk-wn8xtaqg.js";
import { i } from "./environment.9a41.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { Re, mI, ue } from "../settings/global-config-and-gates.27xj.js";
function kMt() {
  try {
    return false;
  } catch (e) {
    return l(N(e)), false;
  }
}
var r = 20, a = r + 1, RCs = 10, _ = 12096e5, ggo = [{ text: "Showing fewer prompt suggestions" }, { text: " · use one to bring them back", dim: true }];
function Evr() {
  let e = ue();
  if (s(e) < r) return false;
  if (i.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === true) return false;
  if (kMt()) return false;
  if (Date.now() - Date.parse(e.firstStartTime ?? "1970-01-01") < _) return false;
  return true;
}
function jQt(e, o, n) {
  if (e) {
    if (n) n.unusedInARow = 0;
    m(o, false);
    return;
  }
  if (!n || s(ue()) >= r) return;
  if (n.unusedInARow++, n.unusedInARow >= r) n.unusedInARow = 0, Re(S, o);
}
function xCs(e, o) {
  if (o) o.unusedInARow = 0;
  m(e, true);
}
function hgo(e) {
  if (!d(ue()) || !Evr()) return false;
  return Re((o) => d(o) ? { ...o, promptSuggestionUnusedStreak: a } : o, e), g("prompt_suggestion_back_off_notice"), true;
}
function m(e, o) {
  let n = s(ue());
  if (n === 0) return;
  if (!Evr()) {
    Re(c, e);
    return;
  }
  let f = { was_notice_claimed: n === a, via_config_toggle: o };
  mI(c, e).then((u) => {
    if (u) g("prompt_suggestion_back_off_end", f);
    else p("prompt_suggestion_back_off_end", "reset_unconfirmed", f);
  }).catch((u) => t(`Prompt suggestion back-off: could not log the end event: ${u}`, { level: "error" }));
}
function c(e) {
  return s(e) === 0 ? e : { ...e, promptSuggestionUnusedStreak: 0 };
}
function S(e) {
  return s(e) >= r ? e : { ...e, promptSuggestionUnusedStreak: r };
}
function d(e) {
  let o = s(e);
  return o >= r && o !== a;
}
function s(e) {
  let o = e.promptSuggestionUnusedStreak;
  return typeof o === "number" && Number.isFinite(o) ? o : 0;
}
export {
  Evr,
  RCs,
  ggo,
  hgo,
  jQt,
  kMt,
  xCs
};
