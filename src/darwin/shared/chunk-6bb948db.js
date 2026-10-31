// darwin/shared/chunk-6bb948db.js — Claude Code 2.1.310（darwin）模块 chunk-f698j42v.js
async function kUn(e, i, n) {
  if (i === null || e.behavior === "deny") return e;
  return e.behavior === "ask" ? { ...e, matchedAskRule: e.matchedAskRule ?? i } : { behavior: "ask", message: await n(), decisionReason: { type: "rule", rule: i }, ..."updatedInput" in e && e.updatedInput !== void 0 && { updatedInput: e.updatedInput } };
}
export {
  kUn
};
