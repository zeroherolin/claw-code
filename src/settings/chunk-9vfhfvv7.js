// settings/chunk-9vfhfvv7.js — Claude Code 2.1.310 模块 chunk-9vfhfvv7.js
import { bie } from "../models/claude-3-5-sonnet.21mz.js";
import { ye } from "../context/not-admin-owned.ersa.js";
import { tT } from "../fs/read-failed.v1w2.js";
import { As } from "./global-config-and-gates.27xj.js";
import { NM } from "../remote/local-agent.we9a.js";
import { Qt } from "./workflow-launch-exec.t4r2.js";
import { fe } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { GZ, kK, CK, TK, Lvn, Yb } from "../vendor/aws-sdk/ca-certs-load.ft7b.js";
import { wbr } from "../shared/chunk-4zrd9788.js";
import { F4n } from "../fs/chunk-gen8agw1.js";
import { z7t } from "../shared/chunk-wrns4f69.js";
import { bct } from "./config-read-failed.p199.js";
import { Fr } from "../vendor/react/chunk-meds60nn.js";
var Dco = {};
Fr(Dco, { default: () => Dco, earlyCredentialsOf: () => Pco, hostProxyAuthConfigured: () => Oco, personProxyAuthHelper: () => Ico, proxyAgentsInstalled: () => Mco, sessionFactsRestored: () => t1e, signInRestored: () => Hco });
function Pco(e) {
  return e?.backend !== void 0 && bie(e.configHome) ? tT(e?.backend) : void 0;
}
function Ico() {
  let e = fe("policySettings")?.proxyAuthHelper, r = Qt("userSettings") ? fe("userSettings")?.proxyAuthHelper : void 0;
  return { helper: e ?? r, fromProjectOrLocal: e === void 0 && r !== void 0 && (fe("projectSettings")?.proxyAuthHelper === r || fe("localSettings")?.proxyAuthHelper === r), trustAccepted: As, sources: "personAndPolicy" };
}
var s = `a proxy helper set by this project is not run by this command
`;
function Oco() {
  let e = NM(), t = e && Boolean(process.stderr.isTTY) && (fe("projectSettings")?.proxyAuthHelper !== void 0 || fe("localSettings")?.proxyAuthHelper !== void 0);
  if (e) Lvn(Ico());
  if (t) process.stderr.write(s);
}
var p = "Error: the proxy setting named above is refused.";
function Mco() {
  let e = CK(), t = e !== void 0 && !TK(e.value);
  return Yb(), t ? { reason: p, kind: "lasting" } : null;
}
function Hco(e) {
  let t = Boolean(process.stderr.isTTY) || !ye();
  return z7t(Pco(e), () => t);
}
async function t1e(e) {
  let t = await Promise.resolve().then(bct).then(() => Promise.all([GZ(), kK()])).then(F4n).then(Oco).then(() => Hco(e)).then(() => null, wbr), r = await Promise.resolve().then(Mco).catch(wbr);
  return t ?? r;
}
export {
  Dco,
  Hco,
  Ico,
  Mco,
  Oco,
  Pco,
  t1e
};
