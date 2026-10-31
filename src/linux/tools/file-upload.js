// linux/tools/file-upload.js — Claude Code 2.1.310（linux）模块 chunk-dt3z0m7t.js
import { En } from "../shared/chunk-3c6e6b31.js";
var _ = "Claude Preview", c = "Claude Browser", E = En(_), l = En(c), u = /* @__PURE__ */ new Set([E, l]);
function SOe(e) {
  return u.has(En(e));
}
var vft = ["file_upload"], WBn = "anthropic/hostAsksPerUploadedFile", d = /* @__PURE__ */ new Set(["description", "activeForm"]);
function GBn(e, o, n, i) {
  let t = `mcp__${En(e)}__${o}`;
  return { async checkPermissions() {
    return { behavior: "ask", message: `${e} requires permission.`, suggestions: [{ type: "addRules", rules: [{ toolName: t, ruleContent: void 0 }], behavior: "allow", destination: "session" }], metadata: { command: { name: t, chrome: { hostHandlesOriginConsent: true } } } };
  }, ...n !== void 0 && Object.hasOwn(n, "code") && { toAutoClassifierInput(r) {
    let a = Object.keys(r).filter((s) => !d.has(s));
    return i(Object.fromEntries(a.map((s) => [s, r[s]])), o);
  } } };
}
export {
  GBn,
  SOe,
  WBn,
  vft
};
