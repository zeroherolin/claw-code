// linux/settings/chunk-275ba5ad.js — Claude Code 2.1.310（linux）模块 chunk-qmxzzq9n.js
import { fie } from "../models/claude-3-5-sonnet.js";
import { ye } from "../context/not-admin-owned.js";
import { ZT } from "../fs/read-failed.js";
import { Cs } from "./global-config-and-gates.js";
import { OM } from "../remote/local-agent.js";
import { Qt } from "./workflow-launch-exec.js";
import { pe } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { OZ, pq, mq, gq, dEn, qS } from "../fs/ca-certs-load.js";
import { xyr } from "../shared/chunk-b2ef44f8.js";
import { Gqn } from "../fs/chunk-b6b2e102.js";
import { OJt } from "../shared/chunk-ce098b8b.js";
import { yct } from "./config-read-failed.js";
import { $r } from "../vendor/react/chunk-0b0bf45d.js";
var tio = {};
$r(tio, { default: () => tio, earlyCredentialsOf: () => Xso, hostProxyAuthConfigured: () => Qso, personProxyAuthHelper: () => Jso, proxyAgentsInstalled: () => Zso, sessionFactsRestored: () => Adt, signInRestored: () => eio });
function Xso(e) {
  return e?.backend !== void 0 && fie(e.configHome) ? ZT(e?.backend) : void 0;
}
function Jso() {
  let e = pe("policySettings")?.proxyAuthHelper, r = Qt("userSettings") ? pe("userSettings")?.proxyAuthHelper : void 0;
  return { helper: e ?? r, fromProjectOrLocal: e === void 0 && r !== void 0 && (pe("projectSettings")?.proxyAuthHelper === r || pe("localSettings")?.proxyAuthHelper === r), trustAccepted: Cs, sources: "personAndPolicy" };
}
var s = `a proxy helper set by this project is not run by this command
`;
function Qso() {
  let e = OM(), t = e && Boolean(process.stderr.isTTY) && (pe("projectSettings")?.proxyAuthHelper !== void 0 || pe("localSettings")?.proxyAuthHelper !== void 0);
  if (e) dEn(Jso());
  if (t) process.stderr.write(s);
}
var p = "Error: the proxy setting named above is refused.";
function Zso() {
  let e = mq(), t = e !== void 0 && !gq(e.value);
  return qS(), t ? { reason: p, kind: "lasting" } : null;
}
function eio(e) {
  let t = Boolean(process.stderr.isTTY) || !ye();
  return OJt(Xso(e), () => t);
}
async function Adt(e) {
  let t = await Promise.resolve().then(yct).then(() => Promise.all([OZ(), pq()])).then(Gqn).then(Qso).then(() => eio(e)).then(() => null, xyr), r = await Promise.resolve().then(Zso).catch(xyr);
  return t ?? r;
}
export {
  Adt,
  Jso,
  Qso,
  Xso,
  Zso,
  eio,
  tio
};
