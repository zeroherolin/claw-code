// linux/shared/chunk-6bb948db.js — Claude Code 2.1.310（linux）模块 chunk-61bma724.js
async function oUn(e, i, n) {
  if (i === null || e.behavior === "deny") return e;
  return e.behavior === "ask" ? { ...e, matchedAskRule: e.matchedAskRule ?? i } : { behavior: "ask", message: await n(), decisionReason: { type: "rule", rule: i }, ..."updatedInput" in e && e.updatedInput !== void 0 && { updatedInput: e.updatedInput } };
}
export {
  oUn
};
