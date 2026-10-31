// darwin/context/unknown-model.js — Claude Code 2.1.310（darwin）模块 chunk-v6mdb6fh.js
import { Qe, N } from "../telemetry/anthropic-workspace-id.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { yS, cnr, Nx, Anr } from "../settings/global-config-and-gates.js";
import { yr } from "../fs/async-hooks.7959.js";
import { _c, Tb } from "../core/conversation-engine.js";
var cio = "https://code.claude.com/docs/en/model-config", uio = `${cio}#correct-the-window-for-a-gateway-or-custom-model-id`;
function Kgs(o, e) {
  if (t(`[autocompact] ${o.detail}`, { level: "warn" }), e.interactive) return o;
  return e.headless(o.text), null;
}
function qgs(o, e, n) {
  try {
    return u(o, e, n);
  } catch (d) {
    return l(Qe(N(d), "unknown-model notice failed")), null;
  }
}
function u(o, e, n) {
  let { source: d, window: r } = Tb(_c(o, n), e, n);
  if (d !== "unknown-model") return null;
  let m = Anr(o), a = i.CLAUDE_CODE_MAX_CONTEXT_TOKENS;
  if (m && a !== void 0 && a > 0) return null;
  let w = r < 1e6, s = [];
  if (!Nx() && w) s.push("append [1m] to the model name for 1M");
  if (m) s.push("set CLAUDE_CODE_MAX_CONTEXT_TOKENS to its real window");
  let c = s.length > 0 ? `; if the model accepts ${w ? "more" : "less"}, ${s.join(", or ")}` : "";
  return { model: o, window: r, text: `Claude Code doesn't recognize the model "${yS(o)}", so it assumes a context window of ${yr(r)} tokens. Update Claude Code, or see ${uio} to set the window.`, detail: `${cnr(o)} Until then auto-compact keeps this session within ${yr(r)} tokens (the context window it assumes)${c}; CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT=1 restores the previous wait-for-the-API behavior.` };
}
export {
  Kgs,
  cio,
  qgs,
  uio
};
