// fs/chunk-1sqsqtmh.js — Claude Code 2.1.310 模块 chunk-1sqsqtmh.js
import { t } from "./gitlab-runner-authentication-token.d7b0.js";
import { Am, oa } from "./ca-certs-load.ft7b.js";
import { HRe } from "../git/ssh-placeholder.1144.js";
import { readFile as i } from "fs/promises";
async function mve(e) {
  if (!Am()) {
    let r = HRe();
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
  mve
};
