// linux/shared/chunk-67ada34f.js — Claude Code 2.1.310（linux）模块 chunk-68w4m6yn.js
import { oc } from "../agents/in-process-teammate.32be.js";
function tAs(t) {
  if (oc()) return;
  return t.standaloneAgentContext?.name;
}
function S8e(t, n) {
  let e = t.standaloneAgentContext;
  if (!Object.keys(n).some((o) => e?.[o] !== n[o])) return t;
  return { ...t, standaloneAgentContext: { ...e, name: e?.name ?? "", ...n } };
}
export {
  S8e,
  tAs
};
