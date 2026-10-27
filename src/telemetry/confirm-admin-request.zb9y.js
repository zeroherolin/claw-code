// telemetry/confirm-admin-request.zb9y.js — Claude Code 2.1.310 模块 chunk-zb9y1axs.js
import { Wr } from "../context/not-admin-owned.ersa.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { gn, or, Ut, k } from "../settings/global-config-and-gates.27xj.js";
import { Nae } from "./quota-auto-resume-cancelled.v6a4.js";
import { EPe, cxt, bwe } from "../remote/gateway-cert-mismatch.7v96.js";
import { NAn, FAn } from "../ui/repl-screen.zq77.js";
import { e } from "../vendor/react/chunk-f790ajz4.js";
import { Rct, Z7t, lte } from "../auth/usage-credits-admin-request-granted.5kev.js";
import { o, u, Gr, T } from "../vendor/zod/string-format.k395.js";
function a() {
  return o().regex(/^\P{Cc}*$/u);
}
var h = f(() => Gr("mode", [u({ mode: T("one_step") }), u({ mode: T("confirm"), title: a().optional(), body: a().optional(), note: a().optional(), send: a().optional(), cancel: a().optional() })]));
function oPn() {
  let i = k("tengu_tidy_lemon", null);
  if (i === null || i === void 0) return null;
  let r = h().safeParse(i);
  return r.success ? r.data : null;
}
async function Wat(i, r) {
  let n = Nae(i);
  if (Z7t()) return e(FAn, { onDone: n });
  let t = await lte({ openInBrowser: true }, r.credentials);
  if (t.type === "message") return n(t.value), null;
  if (t.type === "confirm-admin-request") {
    if (Ut()) return n(Rct), null;
    return e(NAn, { extraUsage: t.extraUsage, flag: oPn(), wouldTakeAnswer: () => true, onDone: n });
  }
  let l = or();
  if (l === "team" || l === "enterprise") return n(t.opened ? `Opened ${t.url} in your browser to manage usage credits for your organization.` : `Visit ${t.url} to manage usage credits for your organization.`), null;
  if (!t.opened) return n(`Visit ${t.url} to manage usage credits.`), null;
  let s = gn(), g = s && { accountUuid: s.accountUuid, organizationUuid: s.organizationUuid }, c = Wr();
  return e(bwe, { startingMessage: "Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.", onDone: async (m, A, p) => {
    let d = await EPe(r, m, { setAppState: p, previousAccount: g, previousGatewayAuth: c });
    n(...cxt(r, m, d));
  } });
}
export {
  Wat,
  oPn
};
