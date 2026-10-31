// linux/telemetry/confirm-admin-request.js — Claude Code 2.1.310（linux）模块 chunk-02y1pdbt.js
import { Wr } from "../context/not-admin-owned.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { gn, cr, Ut, k } from "../settings/global-config-and-gates.js";
import { xae } from "./quota-auto-resume-cancelled.js";
import { hPe, txt, mwe } from "../remote/gateway-cert-mismatch.js";
import { xCn, PCn } from "../ui/repl-screen.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { Tct, WJt, tte } from "../auth/usage-credits-admin-request-granted.js";
import { o, u, Gr, A } from "../vendor/zod/string-format.js";
function a() {
  return o().regex(/^\P{Cc}*$/u);
}
var h = p(() => Gr("mode", [u({ mode: A("one_step") }), u({ mode: A("confirm"), title: a().optional(), body: a().optional(), note: a().optional(), send: a().optional(), cancel: a().optional() })]));
function jxn() {
  let i = k("tengu_tidy_lemon", null);
  if (i === null || i === void 0) return null;
  let r = h().safeParse(i);
  return r.success ? r.data : null;
}
async function $at(i, r) {
  let n = xae(i);
  if (WJt()) return e(PCn, { onDone: n });
  let t = await tte({ openInBrowser: true }, r.credentials);
  if (t.type === "message") return n(t.value), null;
  if (t.type === "confirm-admin-request") {
    if (Ut()) return n(Tct), null;
    return e(xCn, { extraUsage: t.extraUsage, flag: jxn(), wouldTakeAnswer: () => true, onDone: n });
  }
  let l = cr();
  if (l === "team" || l === "enterprise") return n(t.opened ? `Opened ${t.url} in your browser to manage usage credits for your organization.` : `Visit ${t.url} to manage usage credits for your organization.`), null;
  if (!t.opened) return n(`Visit ${t.url} to manage usage credits.`), null;
  let s = gn(), g = s && { accountUuid: s.accountUuid, organizationUuid: s.organizationUuid }, c = Wr();
  return e(mwe, { startingMessage: "Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.", onDone: async (m, y, d) => {
    let f = await hPe(r, m, { setAppState: d, previousAccount: g, previousGatewayAuth: c });
    n(...txt(r, m, f));
  } });
}
export {
  $at,
  jxn
};
