// shared/chunk-ns8czn4y.js — Claude Code 2.1.310 模块 chunk-ns8czn4y.js
import { oc } from "../agents/in-process-teammate.5te1.js";
function PTs(t) {
  if (oc()) return;
  return t.standaloneAgentContext?.name;
}
function A8e(t, n) {
  let e = t.standaloneAgentContext;
  if (!Object.keys(n).some((o) => e?.[o] !== n[o])) return t;
  return { ...t, standaloneAgentContext: { ...e, name: e?.name ?? "", ...n } };
}
export {
  A8e,
  PTs
};
