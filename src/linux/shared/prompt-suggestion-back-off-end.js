// linux/shared/prompt-suggestion-back-off-end.js — Claude Code 2.1.310（linux）模块 chunk-dk9t7hr6.js
import { N } from "../telemetry/anthropic-workspace-id.js";
import { g, f } from "../telemetry/chunk-9d6962d2.js";
import { i } from "./environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Re, uI, ue } from "../settings/global-config-and-gates.js";
function yMt() {
  try {
    return false;
  } catch (e) {
    return l(N(e)), false;
  }
}
var r = 20, a = r + 1, Zks = 10, _ = 12096e5, zmo = [{ text: "Showing fewer prompt suggestions" }, { text: " · use one to bring them back", dim: true }];
function aEr() {
  let e = ue();
  if (s(e) < r) return false;
  if (i.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === true) return false;
  if (yMt()) return false;
  if (Date.now() - Date.parse(e.firstStartTime ?? "1970-01-01") < _) return false;
  return true;
}
function O7t(e, o, n) {
  if (e) {
    if (n) n.unusedInARow = 0;
    m(o, false);
    return;
  }
  if (!n || s(ue()) >= r) return;
  if (n.unusedInARow++, n.unusedInARow >= r) n.unusedInARow = 0, Re(S, o);
}
function eTs(e, o) {
  if (o) o.unusedInARow = 0;
  m(e, true);
}
function Kmo(e) {
  if (!p(ue()) || !aEr()) return false;
  return Re((o) => p(o) ? { ...o, promptSuggestionUnusedStreak: a } : o, e), g("prompt_suggestion_back_off_notice"), true;
}
function m(e, o) {
  let n = s(ue());
  if (n === 0) return;
  if (!aEr()) {
    Re(d, e);
    return;
  }
  let c = { was_notice_claimed: n === a, via_config_toggle: o };
  uI(d, e).then((u) => {
    if (u) g("prompt_suggestion_back_off_end", c);
    else f("prompt_suggestion_back_off_end", "reset_unconfirmed", c);
  }).catch((u) => t(`Prompt suggestion back-off: could not log the end event: ${u}`, { level: "error" }));
}
function d(e) {
  return s(e) === 0 ? e : { ...e, promptSuggestionUnusedStreak: 0 };
}
function S(e) {
  return s(e) >= r ? e : { ...e, promptSuggestionUnusedStreak: r };
}
function p(e) {
  let o = s(e);
  return o >= r && o !== a;
}
function s(e) {
  let o = e.promptSuggestionUnusedStreak;
  return typeof o === "number" && Number.isFinite(o) ? o : 0;
}
export {
  Kmo,
  O7t,
  Zks,
  aEr,
  eTs,
  yMt,
  zmo
};
