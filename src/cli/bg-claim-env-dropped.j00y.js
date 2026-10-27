// cli/bg-claim-env-dropped.j00y.js — Claude Code 2.1.310 模块 chunk-j00y8yrr.js
import { Yw } from "../shared/chunk-9sbknd2z.js";
import { Ne } from "../fs/async-hooks.9s1z.js";
import { F, L, _b, PCn, ICn, fos } from "../context/not-admin-owned.ersa.js";
import { Ka } from "../agents/third-party.ydpb.js";
import { ee, hh, xts, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { I } from "../shared/chunk-j79dwkaq.js";
import { tqe, xH, pEn, fEn, P5r, cot } from "../shell/invalid-type.qnva.js";
import { ofe, i } from "../shared/environment.9a41.js";
import { tQe } from "../permissions/agent-memory.6j3s.js";
import { nSn, n1, G6t, jSn, B4o, lKe } from "../settings/global-config-and-gates.27xj.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { MS } from "../context/utf-8.yzy3.js";
import { yd } from "../remote/self-hosted.qq4m.js";
import { er } from "../settings/workflow-launch-exec.t4r2.js";
import { hKt, Vli } from "../shared/chunk-s56ftfc1.js";
import { XRe, $Ne } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { tN } from "../mcp/init-function-end.wpfb.js";
import { Dvn, Yb, KZ } from "../vendor/aws-sdk/ca-certs-load.ft7b.js";
import { Cvn } from "../auth/profile-explicit.b7t3.js";
import { xL } from "../fs/chunk-q5g832za.js";
import { V8o } from "../auth/auth-launcher-host-login.9f3m.js";
import { pY, J2t, iZn, Hwt, R6e, uzo, tm, yzo, xGr, lZn } from "../settings/non-string-value.58dq.js";
import { Hr, sZn } from "../mcp/spawn-to-exec-ms.vdbg.js";
import { Ghs } from "../shared/chunk-t3r45pw0.js";
import { createServer as h } from "net";
function rAn(e, r, m) {
  return new Promise((f, p) => {
    let E = (o) => {
      n.close(), p(o);
    }, n = h((o) => {
      let c = "";
      o.setEncoding("utf8"), o.on("data", (d) => {
        if (c += d, m && c.length > 8388608) {
          o.destroy();
          return;
        }
        let _ = c.indexOf(`
`);
        if (_ < 0) return;
        if (m) {
          let s;
          try {
            s = ee(c.slice(0, _));
          } catch {
            s = void 0;
          }
          if (!s || !xL(s.auth, m)) {
            o.destroy();
            return;
          }
          n.close(), f(s);
          return;
        }
        n.close();
        try {
          f(ee(c.slice(0, _)));
        } catch (s) {
          p(s);
        }
      }), o.on("error", m ? () => o.destroy() : E);
    });
    if (n.on("error", E), r) n.once("listening", () => {
      try {
        r();
      } catch (o) {
        E(o);
      }
    });
    n.listen(e);
  });
}
async function oAn(e, r, m) {
  let f = performance.now(), p = await MS(e.cwd, void 0);
  hh(p);
  let E = { originalCwd: p, projectRoot: p, cwd: p };
  if (e.sessionId) _b(Yw(e.sessionId), "spare_claim", null, E);
  else PCn(E);
  er(), lKe(), jSn(), ICn(), sZn(), tN({ warm_spare_claimed: 1 });
  let n = Ne(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST);
  if (n) {
    for (let l of Object.keys(process.env)) if ((pEn(l) || l === "ANTHROPIC_CUSTOM_HEADERS" || fEn(l) || cot(l)) && !P5r(l)) delete process.env[l];
  }
  if (R6e(e.env)) uzo();
  delete process.env.ANTHROPIC_AUTH_TOKEN, delete process.env.ANTHROPIC_API_KEY, delete process.env.CLAUDE_CODE_OAUTH_TOKEN, i.unset("CLAUDE_CODE_CONFIG_WATCH_EVENTS");
  let { kept: o, dropped: c } = iZn(e.env), d = n && lZn(xGr(tm() ?? {}, Object.keys(o), o), P5r);
  if (Object.assign(process.env, o), V8o(), Vli(), hKt()) {
    let { mdm: l, hkcu: v, wslInherits: g, whereAsked: u } = await $Ne();
    XRe(l, v, g, u);
  }
  if (process.argv = [process.argv[0], process.argv[1], ...e.argv], er(), xts(), c.length > 0) S(c);
  m?.(), B4o(), yd.reset();
  let _ = performance.now();
  if (await Ghs(e.argv), Hr("spare_claim_token_file_wait_ms", performance.now() - _, _), fos(), nSn(), Cvn(), pY(), G6t({ preservePendingExposures: true, preserveLoggedExposures: true }), n1(), yzo(Object.keys(o), o) || d) Dvn();
  KZ(), Yb();
  let { main: s } = await r;
  Hr("spare_claim_apply_ms", performance.now() - f, f), await s();
}
var C = 8;
function S(e) {
  if (e.slice(0, C).forEach(({ name: r, problem: m }) => {
    t(`[bg-spare] environment variable ${Hwt(r)} was not applied to this background session: ${J2t[m]}. Programs it starts will not see it.`, { level: "warn" });
  }), e.length > C) {
    let r = e.length - C;
    t(`[bg-spare] …and ${r} more environment ${I(r, "variable was", "variables were")} not applied.`, { level: "warn" });
  }
  a("tengu_bg_claim_env_dropped", { dropped: e.length, nul_in_value: F(e, (r) => r.problem === "nul-in-value"), invalid_name: F(e, (r) => r.problem === "invalid-name"), non_string_value: F(e, (r) => r.problem === "non-string-value"), name_classes: Ka(L(e.map((r) => w(r.name)))) });
}
function w(e) {
  return e === "PATH" ? "path" : e.startsWith("CLAUDE_BG_") || e === "CLAUDE_JOB_DIR" || e === "CLAUDE_CODE_SESSION_KIND" || e === "CLAUDE_CODE_SESSION_NAME" ? "bg_worker" : xH.includes(e) ? "credential" : tqe.includes(e) ? "gateway" : tQe.has(e) ? "provider" : ofe(i).includes(e) ? "declared" : "other";
}
export {
  oAn,
  rAn
};
