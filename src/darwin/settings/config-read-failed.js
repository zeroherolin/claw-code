// darwin/settings/config-read-failed.js — Claude Code 2.1.310（darwin）模块 chunk-p1999rp0.js
import { p } from "../telemetry/chunk-9d6962d2.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Nc } from "../remote/local-agent.js";
import { Fu, cot } from "../shell/invalid-type.js";
import { ue } from "./global-config-and-gates.js";
import { Qt } from "./workflow-launch-exec.js";
import { EI, fe } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { dZn } from "./non-string-value.js";
import { sd } from "../remote/chunk-95151620.js";
function bct() {
  if (i.NODE_EXTRA_CA_CERTS) return;
  let o = f();
  if (o) process.env.NODE_EXTRA_CA_CERTS = o, t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${o}`);
}
function f() {
  try {
    if (i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && !Nc() && cot("NODE_EXTRA_CA_CERTS")) {
      t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");
      return;
    }
    if (Fu()) return;
    if (EI() || sd()) return;
    let o = ue(), e = dZn(o?.env, "globalConfig"), s = Qt("userSettings") ? fe("userSettings") : void 0, n = dZn(s?.env, "userSettings");
    t(`CA certs: Config fallback - globalEnv keys: ${e ? Object.keys(e).join(",") : "none"}, settingsEnv keys: ${n ? Object.keys(n).join(",") : "none"}`);
    let r = n?.NODE_EXTRA_CA_CERTS || e?.NODE_EXTRA_CA_CERTS;
    if (r) t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);
    return r;
  } catch (o) {
    t(`CA certs: Config fallback failed: ${o}`, { level: "error" }), p("ca_certs_load", "config_read_failed");
    return;
  }
}
export {
  bct
};
