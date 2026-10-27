// shared/chunk-55zn3q0t.js — Claude Code 2.1.310 模块 chunk-55zn3q0t.js
import { yS, bE } from "../settings/global-config-and-gates.27xj.js";
import { Ck } from "../core/conversation-engine.31gx.js";
function o(e) {
  let t = yS(e);
  return t === yS("") ? "(unnamed agent)" : t;
}
function r(e, t, i) {
  return `${o(e)} agent: ${bE(t, i)}`;
}
function s(e, t, i) {
  return { type: "notification", notification: { key: `agent-model-restricted-${o(e)}-${yS(t)}`, text: r(e, t, i), priority: "medium", color: "warning", timeoutMs: 1e4 } };
}
function _Ln(e, t) {
  return (i, n) => {
    t?.(s(e, i, n));
  };
}
function DIe(e, t) {
  return (i, n) => {
    t?.(Ck(r(e, i, n), "warning"));
  };
}
export {
  DIe,
  _Ln
};
