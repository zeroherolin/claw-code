// linux/fs/chunk-5af1fe04.js — Claude Code 2.1.310（linux）模块 chunk-wdbqcm2t.js
import { t } from "./gitlab-runner-authentication-token.js";
import { Cm, oa } from "./ca-certs-load.js";
import { xRe } from "../git/ssh-placeholder.js";
import { readFile as i } from "fs/promises";
async function dEe(e) {
  if (!Cm()) {
    let r = xRe();
    if (r.HTTPS_PROXY && URL.parse(e)?.protocol === "https:") {
      let n;
      if (r.SSL_CERT_FILE) try {
        n = await i(r.SSL_CERT_FILE, "utf8");
      } catch (o) {
        t(`MCP agent-proxy fallback: failed to read CA bundle: ${o instanceof Error ? o.message : String(o)}`, { level: "warn" });
      }
      return oa({ url: e, fallbackProxy: { url: r.HTTPS_PROXY, noProxy: r.NO_PROXY, ca: n } });
    }
  }
  return oa({ url: e });
}
export {
  dEe
};
