// linux/shared/default-claude-max-20x.js — Claude Code 2.1.310（linux）模块 chunk-8qn2gf74.js
import { Wr } from "../context/not-admin-owned.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Wvt, Ln, Et, gn, iRe } from "../settings/global-config-and-gates.js";
import { xae } from "../telemetry/quota-auto-resume-cancelled.js";
import { hPe, txt, mwe } from "../remote/gateway-cert-mismatch.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { Js } from "../ide/opener-missing.js";
function s(a) {
  return `https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${a}`;
}
async function gEi(a, i) {
  return w5e(a, i, "upgrade_command");
}
async function w5e(a, i, m) {
  let u = xae(a), c = s(m);
  try {
    if (Et()) {
      let o = Ln(), n = false;
      if (o?.subscriptionType && o?.rateLimitTier) n = o.subscriptionType === "max" && o.rateLimitTier === "default_claude_max_20x";
      else if (o?.accessToken) {
        let t = await Wvt(o.accessToken);
        n = t?.organization?.organization_type === "claude_max" && t?.organization?.rate_limit_tier === "default_claude_max_20x";
      }
      if (n) {
        let t = iRe();
        return setTimeout(u, 0, t ? `You’re already on the highest Max subscription plan. For additional usage, run ${t}.` : "You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."), null;
      }
    }
    await Js(c);
    let r = gn(), p = r && { accountUuid: r.accountUuid, organizationUuid: r.organizationUuid }, d = Wr();
    return e(mwe, { startingMessage: "Starting new login following /upgrade. Exit with Ctrl-C to use existing account.", onDone: async (o, n, t) => {
      let g = await hPe(i, o, { setAppState: t, previousAccount: p, previousGatewayAuth: d });
      u(...txt(i, o, g));
    } });
  } catch (r) {
    l(r), setTimeout(u, 0, `Failed to open browser. Please visit ${c} to upgrade.`);
  }
  return null;
}
export {
  gEi,
  w5e
};
