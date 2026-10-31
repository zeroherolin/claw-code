// linux/artifacts/workshop-decisions.c3e2.js — Claude Code 2.1.310（linux）模块 chunk-76g26p0f.js
import { Z$ } from "../remote/local-agent.js";
import { Co, Lt } from "./cobalt-plinth-lovage.js";
import { Z } from "./same-account.js";
import { Ox } from "../settings/global-config-and-gates.js";
import { Ute, m1 } from "./cobalt-plinth-comfrey.js";
import { qn } from "../web/allow-web-fetch.js";
function XAr(e) {
  return `This cloud session's network access follows the "Allow network egress" setting for Cowork in claude.ai, not an environment allowlist. To allow direct artifact reads here, an organization admin (or the user, on an individual plan) can turn that setting on and either allow all domains or add ${e} to its additional allowed domains.`;
}
class o {
  availability = () => false;
  register(e) {
    this.availability = e;
  }
  isAvailable() {
    return this.availability();
  }
}
var a = new o();
function Cxs(e) {
  a.register(e);
}
function ztn() {
  return a.isAvailable();
}
var JAr = new o();
function Rxs(e) {
  JAr.register(e);
}
function I1n() {
  return JAr.isAvailable() ? `read it with the ${Lt} tool (action: "read", url)` : `${qn} the url`;
}
function xxs() {
  return ztn() ? `for a workshop page use the ${Lt} tool's read_page_data action with schema "workshop-decisions" — the workshop skill forbids a content read there; otherwise ${I1n()}` : I1n();
}
function Nme(e) {
  let t = e !== "plain" && ztn(), n = I1n(), r = Co(), s = Z().contentHostEgressDenied.has(r) && !(Ute() && !m1(Ox)), i = r === "staging" ? "*.frame.staging.claudeusercontent.com" : "*.frame.claudeusercontent.com";
  return { readRemedy: t ? `for a workshop page use the ${Lt} tool's read_page_data action with schema "workshop-decisions" — the workshop skill forbids a content read and force there; otherwise ${n}` : n, forceAdvisory: t ? "" : " force:true discards that newer version — someone's save from the page itself, or another session's publish — so use it only when the user explicitly asks to overwrite.", contentReadsBlocked: s ? Z$() ? `The artifact content host is blocked from this session, so the live version can be neither read nor handed over here. ${XAr(i)} Tell the user, and publish again only once you can build on the live version.` : `This environment's network allowlist blocks the artifact content host, so the live version can be neither read nor handed over here until ${i} is added at environment settings → Code → Network access → Custom → Allowed domains. An admin can add the same entry to a shared environment from admin settings → Cloud environments; sessions that run in that environment get the access. Tell the user, and publish again only once you can build on the live version.` : null };
}
export {
  Cxs,
  I1n,
  JAr,
  Nme,
  Rxs,
  XAr,
  xxs,
  ztn
};
