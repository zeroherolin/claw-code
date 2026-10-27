// auth/chunk-ajy8trtw.js — Claude Code 2.1.310 模块 chunk-ajy8trtw.js
import { es, GM, Gbe } from "../context/not-admin-owned.ersa.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { qo, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Bqe, cv } from "./descriptor-direct.zd2z.js";
import { gzo } from "../settings/non-string-value.58dq.js";
import { sd } from "../remote/chunk-t0kv6pst.js";
import { Bz } from "../shared/chunk-4fkyaqc3.js";
import { closeSync as c, openSync as d } from "fs";
import { devNull as g } from "os";
class p {
  line;
}
var l = new W(() => new p());
function Eao(e = 0) {
  {
    if (!process.argv.includes("--session-tunnel") || !sd()) return;
    Bz((u) => t(`[session tunnel] ${u}`, { level: "warn" }));
    let o = Bqe(e, "the session tunnel's line of JSON") ?? void 0;
    es(l).line = o;
    let f = d(g, "r");
    if (f !== e) c(f);
    let n;
    try {
      n = qo(o ?? "null");
    } catch {
      n = null;
    }
    let r = typeof n?.oauth_token === "string" ? n.oauth_token.trim() : "", i = typeof n?.agent_proxy_token === "string" ? n.agent_proxy_token.trim() : "";
    if (r !== "") cv(), GM(r), Gbe("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR");
    let a = typeof n?.env === "object" && n.env !== null && !Array.isArray(n.env) ? Object.entries(n.env) : [], s = {};
    for (let [u, m] of a) if (typeof m === "string") s[u] = m;
    return gzo(s), t(`[session tunnel] the line has ${r === "" ? "no" : "an"} OAuth token, ${i === "" ? "no" : "an"} agent proxy token; variables: ${Object.keys(s).length} of ${a.length}`), i === "" ? void 0 : i;
  }
  return;
}
function CCi() {
  return es(l).line;
}
function vao() {
  let e = es(l), o = e.line;
  return e.line = void 0, o;
}
export {
  CCi,
  Eao,
  vao
};
