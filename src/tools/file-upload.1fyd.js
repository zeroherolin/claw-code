// tools/file-upload.1fyd.js — Claude Code 2.1.310 模块 chunk-1fydx0y7.js
import { vn } from "../shared/chunk-npfaxhr1.js";
var _ = "Claude Preview", c = "Claude Browser", E = vn(_), l = vn(c), u = /* @__PURE__ */ new Set([E, l]);
function TOe(e) {
  return u.has(vn(e));
}
var xpt = ["file_upload"], lBn = "anthropic/hostAsksPerUploadedFile", d = /* @__PURE__ */ new Set(["description", "activeForm"]);
function dBn(e, o, n, i) {
  let t = `mcp__${vn(e)}__${o}`;
  return { async checkPermissions() {
    return { behavior: "ask", message: `${e} requires permission.`, suggestions: [{ type: "addRules", rules: [{ toolName: t, ruleContent: void 0 }], behavior: "allow", destination: "session" }], metadata: { command: { name: t, chrome: { hostHandlesOriginConsent: true } } } };
  }, ...n !== void 0 && Object.hasOwn(n, "code") && { toAutoClassifierInput(r) {
    let a = Object.keys(r).filter((s) => !d.has(s));
    return i(Object.fromEntries(a.map((s) => [s, r[s]])), o);
  } } };
}
export {
  TOe,
  dBn,
  lBn,
  xpt
};
