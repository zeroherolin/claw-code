// linux/auth/chunk-3e75db15.js — Claude Code 2.1.310（linux）模块 chunk-r4yya6cc.js
import { es, FM, NSe } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { Vo, t } from "../fs/gitlab-runner-authentication-token.js";
import { k4e, dE } from "./descriptor-direct.js";
import { Uzo } from "../settings/non-string-value.js";
import { sd } from "../remote/chunk-95151620.js";
import { O2 } from "../shared/chunk-960c3301.js";
import { closeSync as c, openSync as d } from "fs";
import { devNull as g } from "os";
class p {
  line;
}
var l = new W(() => new p());
function lao(e = 0) {
  {
    if (!process.argv.includes("--session-tunnel") || !sd()) return;
    O2((u) => t(`[session tunnel] ${u}`, { level: "warn" }));
    let o = k4e(e, "the session tunnel's line of JSON") ?? void 0;
    es(l).line = o;
    let f = d(g, "r");
    if (f !== e) c(f);
    let n;
    try {
      n = Vo(o ?? "null");
    } catch {
      n = null;
    }
    let r = typeof n?.oauth_token === "string" ? n.oauth_token.trim() : "", i = typeof n?.agent_proxy_token === "string" ? n.agent_proxy_token.trim() : "";
    if (r !== "") dE(), FM(r), NSe("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR");
    let a = typeof n?.env === "object" && n.env !== null && !Array.isArray(n.env) ? Object.entries(n.env) : [], s = {};
    for (let [u, m] of a) if (typeof m === "string") s[u] = m;
    return Uzo(s), t(`[session tunnel] the line has ${r === "" ? "no" : "an"} OAuth token, ${i === "" ? "no" : "an"} agent proxy token; variables: ${Object.keys(s).length} of ${a.length}`), i === "" ? void 0 : i;
  }
  return;
}
function jki() {
  return es(l).line;
}
function dao() {
  let e = es(l), o = e.line;
  return e.line = void 0, o;
}
export {
  dao,
  jki,
  lao
};
