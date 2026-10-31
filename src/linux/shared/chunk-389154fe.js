// linux/shared/chunk-389154fe.js — Claude Code 2.1.310（linux）模块 chunk-p8e74wwb.js
import { hb, bv } from "../settings/global-config-and-gates.js";
import { kk } from "../core/conversation-engine.js";
function o(e) {
  let t = hb(e);
  return t === hb("") ? "(unnamed agent)" : t;
}
function r(e, t, i) {
  return `${o(e)} agent: ${bv(t, i)}`;
}
function s(e, t, i) {
  return { type: "notification", notification: { key: `agent-model-restricted-${o(e)}-${hb(t)}`, text: r(e, t, i), priority: "medium", color: "warning", timeoutMs: 1e4 } };
}
function r0n(e, t) {
  return (i, n) => {
    t?.(s(e, i, n));
  };
}
function xIe(e, t) {
  return (i, n) => {
    t?.(kk(r(e, i, n), "warning"));
  };
}
export {
  r0n,
  xIe
};
