// darwin/artifacts/workshop-decisions.c3e2.js — Claude Code 2.1.310（darwin）模块 chunk-f709yzqt.js
import { r$ } from "../remote/local-agent.js";
import { Ao, Lt } from "./cobalt-plinth-lovage.js";
import { Z } from "./same-account.js";
import { Dx } from "../settings/global-config-and-gates.js";
import { qte, bB } from "./cobalt-plinth-comfrey.js";
import { qn } from "../web/allow-web-fetch.js";
function gAr(e) {
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
function rPs(e) {
  a.register(e);
}
function snn() {
  return a.isAvailable();
}
var hAr = new o();
function oPs(e) {
  hAr.register(e);
}
function VBn() {
  return hAr.isAvailable() ? `read it with the ${Lt} tool (action: "read", url)` : `${qn} the url`;
}
function sPs() {
  return snn() ? `for a workshop page use the ${Lt} tool's read_page_data action with schema "workshop-decisions" — the workshop skill forbids a content read there; otherwise ${VBn()}` : VBn();
}
function Bme(e) {
  let t = e !== "plain" && snn(), n = VBn(), r = Ao(), s = Z().contentHostEgressDenied.has(r) && !(qte() && !bB(Dx)), i = r === "staging" ? "*.frame.staging.claudeusercontent.com" : "*.frame.claudeusercontent.com";
  return { readRemedy: t ? `for a workshop page use the ${Lt} tool's read_page_data action with schema "workshop-decisions" — the workshop skill forbids a content read and force there; otherwise ${n}` : n, forceAdvisory: t ? "" : " force:true discards that newer version — someone's save from the page itself, or another session's publish — so use it only when the user explicitly asks to overwrite.", contentReadsBlocked: s ? r$() ? `The artifact content host is blocked from this session, so the live version can be neither read nor handed over here. ${gAr(i)} Tell the user, and publish again only once you can build on the live version.` : `This environment's network allowlist blocks the artifact content host, so the live version can be neither read nor handed over here until ${i} is added at environment settings → Code → Network access → Custom → Allowed domains. An admin can add the same entry to a shared environment from admin settings → Cloud environments; sessions that run in that environment get the access. Tell the user, and publish again only once you can build on the live version.` : null };
}
export {
  Bme,
  VBn,
  gAr,
  hAr,
  oPs,
  rPs,
  sPs,
  snn
};
