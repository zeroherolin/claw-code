// mcp/pro-trial-start-screen-shown.wanw.js — Claude Code 2.1.310 模块 chunk-wanweh1d.js
import { __asset_src } from "../runtime/assets.js";
import { Ne } from "../fs/async-hooks.9s1z.js";
import { L, U, ke, LCn, _ns, xit, zM, U3e, Pn, J_, B3e, Sss } from "../context/not-admin-owned.ersa.js";
import { c } from "../agents/third-party.ydpb.js";
import { N, d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { Nt } from "../shared/chunk-3kevgx4j.js";
import { nwe } from "../fs/node-modules.gp4v.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { _w, Wsn, hFs, vWe, Zge, pi, M_, g3, vHr, Xn, ai } from "../core/conversation-engine.31gx.js";
import { Sr, FTn } from "../models/claude-3-5-sonnet.21mz.js";
import { i } from "../shared/environment.9a41.js";
import { _t, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { dc } from "../shared/chunk-j79dwkaq.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { Y_n, n1, Ut, Ti, k, ub, G6t, As, $g, fI, Bx, Re, ue, j4o } from "../settings/global-config-and-gates.27xj.js";
import { g, m, p } from "../telemetry/chunk-wn8xtaqg.js";
import { Te } from "../models/total-tokens-reminder.psq3.js";
import { l5 } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { Px } from "../settings/non-string-value.58dq.js";
import { g2e } from "../vendor/anthropic-sdk/claude-code-error-tracking.ba0h.js";
import { gE } from "../artifacts/utf-8.vzjz.js";
import { w } from "../ui/chunk-zqxc4qtb.js";
import { Umr } from "../ui/chord-started.x7d9.js";
import { Zfe, wXt } from "../telemetry/agent-proxy-init.2ybv.js";
import { LA } from "../cli/tty-stream-error.a1a1.js";
import { aae } from "../terminal/aria-preserve-whitespace.s6ps.js";
import { s, n, GR } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { aMn, ehi, Fso } from "../cli/session-setup.jbe4.js";
import { mlt, aD } from "../shared/chunk-gz1gj1mt.js";
import { uut } from "../auth/grove-print-viewed.zy09.js";
import { jPn, nps } from "./mcp-multidialog-choice.8bx7.js";
import { eO, yMt, ngo } from "../telemetry/mantle-default-fallback.6m0a.js";
import { HPn } from "../settings/chunk-r94bz11h.js";
import { AHn } from "../telemetry/fullscreen-crash-auto-off.a1a0.js";
import { z5e } from "../settings/chunk-pnh8wpnq.js";
import { Iut } from "../settings/chunk-842gkt0c.js";
import { Ras } from "../fs/chunk-s3dh4j2k.js";
import { dxt } from "../auth/not-started.jqsb.js";
import { Zie } from "../shared/chunk-977nn9re.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
import { yws } from "../shared/chunk-c2x9q9ej.js";
import { f5n } from "../telemetry/chunk-27ds9t2x.js";
import { de, P, A, y, j } from "../vendor/react/chunk-s8vmszp2.js";
import { b } from "../vendor/react/chunk-meds60nn.js";
j();
import { openSync as Ie, writeSync as Oe } from "fs";
import { homedir as Fe } from "os";
var Ee = { iterm: "iTerm", "iterm.app": "iTerm", ghostty: "Ghostty", kitty: "kitty", alacritty: "Alacritty", wezterm: "WezTerm", apple_terminal: "Terminal" };
function se(o) {
  let u = i.TERM_PROGRAM;
  if (!u) return;
  let f = Ee[u.toLowerCase()];
  if (!f) return;
  if (ue().deepLinkTerminal === f) return;
  Re((D) => ({ ...D, deepLinkTerminal: f }), o), t(`Stored deep link terminal preference: ${f}`);
}
class Z {
  frameDurations = [];
  totalFrames = 0;
  firstRenderTime;
  lastRenderTime;
  record(o) {
    let u = performance.now();
    if (this.firstRenderTime === void 0) this.firstRenderTime = u;
    if (this.lastRenderTime = u, this.totalFrames++, this.frameDurations.push(o), this.frameDurations.length > 3600) this.frameDurations.splice(0, this.frameDurations.length >> 1);
  }
  getMetrics() {
    if (this.totalFrames === 0 || this.firstRenderTime === void 0 || this.lastRenderTime === void 0) return;
    let o = this.lastRenderTime - this.firstRenderTime;
    if (o <= 0) return;
    let u = this.totalFrames / (o / 1e3), f = this.frameDurations.slice().sort((_, M) => M - _), x = Math.max(0, Math.ceil(f.length * 0.01) - 1), D = f[x], T = D > 0 ? 1e3 / D : 0;
    return { averageFps: Math.round(u * 100) / 100, low1PctFps: Math.round(T * 100) / 100 };
  }
}
function Ze(ot) {
  return ot(false);
}
function tt(nt) {
  return nt.execRelaunch();
}
function Ve(it) {
  it(), import("../shell/exec-relaunch.mds8.js").then(tt);
}
function et(at) {
  return { ...at, phase: "save-failed" };
}
function ogi(o) {
  if (i.CLAUBBIT || !As()) return;
  zM(true), gE(o);
}
function sgi(o) {
  Re((u) => ({ ...u, hasCompletedOnboarding: true, lastOnboardingVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION }), o);
}
function Aas(o, u) {
  return async (f) => {
    let x = await jPn(o), D = Iut();
    if (x.pendingServers.length === 0) return null;
    if (D.length > 0) {
      let T = L(D.flatMap((_) => _.file ? [dc(_.file)] : [])).join(", ");
      return p("mcp_project_approval_dialog", "mcp_project_approval_skipped_settings_errors"), u({ key: "mcp-approval-skipped", text: `skipping .mcp.json server approval (settings errors${T ? ` in ${T}` : ""}) · run \`claude doctor\` to list them, fix them, then restart` }), null;
    }
    try {
      return await nps(x, (T) => {
        try {
          let _ = Be(T);
          if (_) u(_);
        } catch (_) {
          l(N(_));
        } finally {
          f();
        }
      }, o);
    } catch (T) {
      throw m("mcp_project_approval_dialog", "mcp_project_approval_dialog_threw"), T;
    }
  };
}
function Be(o) {
  if (o.persistFailed) return m("mcp_project_approval_dialog", "mcp_approval_persist_failed"), { key: "mcp-approval-persist-failed", text: "one or more of your MCP server choices could not be saved (check permissions on .claude/settings.local.json) · you will be asked again next startup" };
  let u = fI();
  if (LCn().some((f) => f.workspaceKey === u) && !$g() && Bx({ onIndeterminate: "tracked" })) return p("mcp_project_approval_dialog", "mcp_approval_persist_gated"), { key: "mcp-approval-persist-gated", text: "your MCP server choices apply to this session only (workspace not explicitly trusted; .claude/settings.local.json is gated) · to persist, add them to enabledMcpjsonServers in ~/.claude/settings.json" };
  return g("mcp_project_approval_dialog"), null;
}
async function xvi(o, u) {
  aD(o, e(n, { color: "error", children: u })), o.unmount(), await Ce(u);
}
async function Ce(o) {
  let { setBgExitCause: u, setBgExitDetail: f } = await import("../shared/read-and-clear-bg-exit-cause.4s4x.js");
  u("exit_with_message"), f("exit_with_message", o);
}
async function Pvi(o, u, f, x) {
  return cur(o, u, { color: "error", beforeExit: f, unsentPrompt: x });
}
async function cur(o, u, f) {
  let x = f?.color, D = f?.exitCode ?? 1, T = x ? e(n, { color: x, children: u }) : e(n, { children: u });
  if (aD(o, f?.unsentPrompt ? r(s, { flexDirection: "column", children: [T, e(n, { children: `
Your message was not sent:
${f.unsentPrompt}` })] }) : T), o.unmount(), await f?.beforeExit?.(), D !== 0) await Ce(u);
  let { flushAnalyticsSinks: _ } = await import("../ui/claim-shutdown.0yqb.js");
  await _();
  let { drainRegisteredWriteQueues: M } = await import("../shared/drain-registered-write-queues.n6y6.js"), { withTimeout: E } = await import("../shared/full-jitter-backoff-ms.qsyd.js");
  await E(M(), 2e3, "write queue drain timeout (exitWithMessage)").catch(() => {
  }), process.exit(D);
}
function tPe(o, u, f) {
  return new Promise((x, D) => {
    mlt(o, [(T) => u((_) => {
      x(_), T();
    })], { session: U(), onChangeAppState: f?.onChangeAppState, marksJobBlocked: true }).catch(D);
  });
}
async function jJr(o, u, f, x, D) {
  let T = aD(o, u);
  j4o(), Fso(f, x, D);
  try {
    if (await Promise.race([o.waitUntilExit().then(() => "exited"), T.replaced.then(() => "replaced")]) === "replaced") return;
  } catch (_) {
    let M = N(_), F = await AHn().catch(() => false) ? " It happened while the fullscreen renderer was starting, so the next launch will use the classic renderer (CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1 forces that any time)." : "";
    if (g3(`Claude Code exited after an unrecoverable interface error (${M.message}).${F}`), Ut() || FTn()) throw _;
    try {
      g2e(M, "unhandled_rejection");
    } catch {
    }
    await Xn(1, "other");
    return;
  }
  await vHr.of(f.host).runBeforeInteractiveShutdown(), await Xn(0);
}
var Ue = 2e3, le = "GB post-onboarding init";
async function Ivi(o, u, f, x, D, T, _, M, E, F, R) {
  let v = { onboardingShown: false, onboardingSkippedSignIn: false, mcpApprovalSkipWarning: null, claudeInChromeAccepted: false }, O = (I) => {
    v.mcpApprovalSkipWarning = I;
  };
  if (Ut() || i.CLAUDE_BRIDGE_REATTACH_SESSION) {
    let I = As(), h = I || i.CLAUDE_BG_WORKSPACE_TRUSTED === true && nwe(ke(), Fe());
    if (!h) t("Workspace trust is not recorded for this directory; continuing as an untrusted session (hooks and project settings env stay off)", { level: "warn" });
    let S = [() => {
      if (h) zM(true);
      if (G6t({ preservePendingExposures: true }), Ti().catch((C) => l(N(C))), h) vWe(o), import("../hooks/chain-order.0j7d.js").then((C) => C.loadHooksModulesHeldForTrust(E, F)).catch((C) => l(N(C)));
      return null;
    }, Aas(E, O), () => {
      if (h) Px(), import("../auth/is-desktop-entrypoint-exempted.n5kh.js").then((C) => C.maybePrewarmRecallIndex(o)), gE(E);
      if (aMn(o.host), HPn(), h) {
        if (!I && !Pn() && !Sr()) Ae(E, F);
        setImmediate(Zfe, E);
      }
      return null;
    }];
    return await mlt(u, S, { session: o, storageV5: E }), v;
  }
  if (Ne(false) || i.IS_DEMO) return ogi(E), aMn(o.host), HPn(), v;
  return await mlt(u, igi({ session: o, permissionMode: f, allowDangerouslySkipPermissions: x, commands: D, claudeInChrome: T, devChannels: _, offerClaudeInChrome: M, storageV5: E, credentials: F, askCloudDefaultReason: R }, v), { session: o, onChangeAppState: Zie, marksJobBlocked: true, storageV5: E }), v;
}
function igi({ session: o, permissionMode: u, allowDangerouslySkipPermissions: f, commands: x, claudeInChrome: D, devChannels: T, offerClaudeInChrome: _, storageV5: M, credentials: E, askCloudDefaultReason: F }, R) {
  let v = ue(), O = false, I = true;
  return [(h) => {
    if (v.hasCompletedOnboarding && i.CLAUDE_CODE_POWERUP_ONBOARDING !== "banner" && i.CLAUDE_CODE_POWERUP_ONBOARDING !== "step") return null;
    return R.onboardingShown = true, import("../ui/preflight-check-failed.t4yr.js").then(({ Onboarding: S }) => e(S, { host: o.host, onDone: ({ skippedSignIn: C }) => {
      R.onboardingSkippedSignIn = C, sgi(M), h();
    } }));
  }, (h) => {
    if (i.CLAUBBIT) return null;
    if (I = As(), I && !z5e()) return null;
    return O = true, (I ? Promise.resolve(false) : yws()).then((S) => {
      if (S) return U3e(true), null;
      return import("../ui/trust-dialog.g8te.js").then(({ TrustDialog: C }) => e(C, { commands: x, onDone: h }));
    });
  }, () => {
    if (i.CLAUBBIT) return null;
    if (zM(true), O) {
      if (M_("post-trust: re-discover project @skills-dir plugins"), Zge(E)) pi(M, E).catch(() => {
      });
    }
    if (import("../hooks/chain-order.0j7d.js").then((h) => h.loadHooksModulesHeldForTrust(M, E)).catch((h) => l(N(h))), G6t({ preservePendingExposures: true }), v.hasCompletedOnboarding) return Ti().catch((h) => l(N(h))), null;
    return n1(), ce();
  }, () => {
    if (i.CLAUBBIT) return null;
    return null;
  }, (h) => i.CLAUBBIT ? null : Aas(M, (S) => {
    R.mcpApprovalSkipWarning = S;
  })(h), async (h) => {
    if (i.CLAUBBIT || !await hFs(o, M)) return null;
    let S = Wsn(await _w(o, true, M, E)), { ClaudeMdExternalIncludesDialog: C } = await import("../context/record-external-includes-decision.8117.js");
    return e(C, { onDone: () => h(), isStandaloneDialog: true, externalIncludes: S });
  }, () => {
    if (Ras(M), se(M), Px(), aMn(o.host), import("../auth/is-desktop-entrypoint-exempted.n5kh.js").then((h) => h.maybePrewarmRecallIndex(o)), gE(M), HPn(), O && !I && !Pn() && !Sr()) Ae(M, E);
    if (R.onboardingShown) _t(agi);
    else setImmediate(Zfe, M);
    return ehi(o.host, v) ? ce() : null;
  }, async (h) => null, async (h) => {
    if (!await uut(M, E)) return null;
    let { GroveDialog: S } = await import("../ui/grove-dialog.6jsd.js");
    return e(S, { showIfAlreadyViewed: false, location: R.onboardingShown ? "onboarding" : "policy_update_modal", onDone: (C) => {
      if (C !== "escape") {
        h();
        return;
      }
      a("tengu_grove_policy_exited", {}), ai(0), R.onboardingShown = false, R.claudeInChromeAccepted = false, h("stop");
    } });
  }, async (h) => {
    if (dxt().status !== "not_started") return null;
    let { ProTrialStartScreen: S } = await import("../ui/pro-trial-start-screen.mc7y.js");
    return a("tengu_pro_trial_start_screen_shown", {}), e(S, { onDone: () => h(), storageV5: M, credentials: E });
  }, async (h) => {
    if (!R.onboardingShown) return null;
    let { resolvePowerupDiscoveryArm: S } = await import("../shared/resolve-powerup-discovery-arm.4k66.js");
    if (S() !== "step") return null;
    let { PowerupDiscoveryStep: C } = await import("../ui/powerup-discovery-step.vwd3.js");
    return e(C, { onDone: () => h() });
  }, (h) => {
    let S = Y_n();
    if (!S) return null;
    return pe(import("../auth/approve-api-key.czab.js").then(({ ApproveApiKey: C }) => e(C, { customApiKeyTruncated: S, onDone: () => h() })));
  }, ge("bedrock", M), ge("vertex", M), async (h) => {
    let S;
    try {
      S = await ngo();
    } catch (B) {
      return l(B), null;
    }
    let { lines: C, hasHardFailure: G } = S;
    if (C.length === 0) return null;
    return e(De, { afterMs: G ? 4e3 : 1500, onDone: h, children: e(s, { flexDirection: "column", children: C.map((B) => e(n, { color: "warning", children: B }, B)) }) });
  }, (h) => {
    if (u !== "bypassPermissions" && !f || l5()) return null;
    return import("../permissions/bypass-permissions-mode-dialog.qvdv.js").then(({ BypassPermissionsModeDialog: S }) => e(S, { onAccept: () => h(), storageV5: M }));
  }, ...[], async (h) => {
    if (J_().length === 0 && (T?.length ?? 0) === 0) return null;
    if (await ub("tengu_harbor"), !T || T.length === 0) return null;
    let [{ isChannelsOffForSession: S }, { isChannelsPolicyBlocked: C }, { getSettingsForSource: G }] = await Promise.all([import("../shared/get-channel-allowlist.tky5.js"), import("../permissions/find-channel-entry.p19y.js"), import("../onboarding/admin-policy-load-failure-refuses-launch.s893.js")]), B = () => {
      let H = T.map((J) => ({ ...J, dev: true }));
      B3e(J_().concat(H)), Sss(true);
    };
    if (S() || Te() !== "firstParty" || C(G("policySettings"))) return B(), null;
    let { DevChannelsDialog: Y } = await import("../ui/dev-channels-dialog.pb73.js");
    return e(Y, { channels: T, onAccept: () => {
      B(), h();
    } });
  }, (h) => {
    if (!D || ue().hasCompletedClaudeInChromeOnboarding) return null;
    return pe(import("../onboarding/claude-in-chrome-onboarding.wt28.js").then(({ ClaudeInChromeOnboarding: S }) => e(S, { onDone: () => h() })));
  }, async (h) => {
    if (!_) return null;
    let { isChromeExtensionInstalled: S } = await import("../ide/adopt-hosted-claude-in-chrome.adfw.js"), C = await Nt(S(), 1500, "chrome extension scan timed out before offer").catch(() => true), G = Boolean(ue().chromeExtension?.pairedDeviceId);
    if (!C && !G) return t("[Claude in Chrome] Skipping offer: extension not present locally (stale cache)"), null;
    await Nt(Ti().catch(() => {
    }), 1500, "GrowthBook init timed out before chrome offer").catch(() => {
    });
    let B = k("tengu_chrome_auto_enable", false), Y = ue().claudeInChromeDefaultEnabled !== void 0, { isChromeServerPolicyDenied: H } = await import("../shared/get-chrome-server-policy-refusal.cva0.js"), { isClaudeInChromeAllowed: J } = await import("../ide/adopt-hosted-claude-in-chrome.adfw.js");
    if (H() || !J()) return t("[Claude in Chrome] Skipping offer: blocked by enterprise MCP config, managed deniedMcpServers policy, or organization policy (allow_claude_browser_extension)"), null;
    if (Y) return t("[Claude in Chrome] Skipping offer: decision already recorded (another instance answered)"), R.claudeInChromeAccepted = ue().claudeInChromeDefaultEnabled === true, null;
    if (!B) return t("[Claude in Chrome] Skipping offer: tengu_chrome_auto_enable no longer set (stale GB cache)"), null;
    let { ChromeAutoEnableDialog: ie } = await import("../ui/chrome-auto-enable-dialog.gt9c.js");
    return e(ie, { onDone: (ae) => {
      R.claudeInChromeAccepted = ae, h();
    }, isDontAskMode: u === "dontAsk", isAutoMode: u === "auto" });
  }];
}
async function agi() {
  try {
    if (xit() && f5n() === null) {
      await wXt();
      let { flushTelemetry: o } = await import("../telemetry/big-query-export-interval-ms.ekt2.js");
      await o();
    }
  } catch (o) {
    t(`[3P telemetry] Export before exit failed: ${d(o)}`, { level: "error" });
  }
}
async function pe(o) {
  let [u, { FullPageNotice: f }] = await Promise.all([o, import("../shared/use-is-full-page-notice.st1m.js")]);
  return u === null ? null : e(f, { children: u });
}
async function ce() {
  let o = Date.now();
  try {
    await Nt(Ti(), Ue, le), t(`[STARTUP] post-onboarding GB await ${Date.now() - o}ms`);
  } catch (u) {
    if (t(`[STARTUP] post-onboarding GB await ${Date.now() - o}ms: ${u}`, { level: "warn" }), !(u instanceof Error && u.message === le)) l(N(u));
  }
  return null;
}
function De(o) {
  let D = w(4), { afterMs: u, onDone: f, children: x } = o, T, _;
  if (D[0] !== u || D[1] !== f) T = () => {
    let M = setTimeout(f, u);
    return () => clearTimeout(M);
  }, _ = [u, f], D[0] = u, D[1] = f, D[2] = T, D[3] = _;
  else T = D[2], _ = D[3];
  return P(T, _), x;
}
var oe = { bedrock: { accepted: "tengu_bedrock_upgrade_accepted", declined: "tengu_bedrock_upgrade_declined", saveFailed: "tengu_bedrock_upgrade_save_failed", relaunch: "tengu_bedrock_upgrade_relaunch" }, vertex: { accepted: "tengu_vertex_upgrade_accepted", declined: "tengu_vertex_upgrade_declined", saveFailed: "tengu_vertex_upgrade_save_failed", relaunch: "tengu_vertex_upgrade_relaunch" } };
function ge(o, u) {
  let f = oe[o];
  return async (x) => {
    if (Te() !== o) return null;
    try {
      let [D, { upgradeKey: T }] = await Promise.all([o === "bedrock" ? import("../models/aws-credential-selectors.8nkz.js").then((v) => yMt("bedrock-upgrade", v.findBedrockUpgradeCandidates()).then((O) => O.map((I) => ({ ...I, toId: I.toBedrockId })))) : import("../models/check-vertex-default-availability.7e11.js").then((v) => yMt("vertex-upgrade", v.findVertexUpgradeCandidates()).then((O) => O.map((I) => ({ ...I, toId: I.toVertexId })))), import("../cli/collect-stale-pins.c9mf.js")]), _ = (o === "bedrock" ? ue().bedrockDeclinedUpgrades : ue().vertexDeclinedUpgrades) ?? {}, M = D.filter((v) => _[v.tier] !== T(v));
      if (M.length === 0) return null;
      let [{ updateSettingsForSource: E }, { ThirdPartyModelUpgradeDialog: F }] = await Promise.all([import("../onboarding/admin-policy-load-failure-refuses-launch.s893.js"), import("../models/third-party-model-upgrade-dialog.tspm.js")]);
      async function R(v, O) {
        let I = c(v.tier);
        if (!O) return await Re((C) => {
          let G = o === "bedrock" ? "bedrockDeclinedUpgrades" : "vertexDeclinedUpgrades";
          return { ...C, [G]: { ...C[G], [v.tier]: T(v) } };
        }, u), a(f.declined, { tier: I, from_key: c(v.fromKey), to_key: c(v.toKey) }), false;
        let h = v.tier === "haiku" ? { ANTHROPIC_DEFAULT_HAIKU_MODEL: v.toId, ...v.envVar === "ANTHROPIC_SMALL_FAST_MODEL" && { ANTHROPIC_SMALL_FAST_MODEL: v.toId } } : { [v.envVar]: v.toId }, { error: S } = await E("userSettings", { env: h }, void 0, u);
        if (S) return a(f.saveFailed, { tier: I }), false;
        for (let C of Object.keys(h)) process.env[C] = v.toId;
        return a(f.accepted, { tier: I, from_key: c(v.fromKey), to_key: c(v.toKey) }), true;
      }
      return e(Pe, { provider: o, pending: M, answer: R, onDone: () => x(), Dialog: F });
    } catch (D) {
      return l(D), null;
    }
  };
}
function Pe(o) {
  let _ = w(27), { provider: u, pending: f, answer: x, onDone: D, Dialog: T } = o, M;
  if (_[0] === b) M = { at: 0, acceptedAny: false, phase: "asking" }, _[0] = M;
  else M = _[0];
  let [E, F] = y(M), { at: R, acceptedAny: v, phase: O } = E, { exit: I } = GR(), h = A(null), S = f[R], C;
  if (_[1] !== f.length) C = (G) => F((B) => {
    let Y = B.acceptedAny || G;
    if (B.at + 1 < f.length) {
      return { at: B.at + 1, acceptedAny: Y, phase: "asking" };
    }
    return { ...B, acceptedAny: Y, phase: Y ? "relaunching" : "done" };
  }), _[1] = f.length, _[2] = C;
  else C = _[2];
  let H = C, J, ne;
  if (_[3] !== H || _[4] !== I || _[5] !== D || _[6] !== O || _[7] !== u) J = () => {
    if (O === "done") {
      D();
      return;
    }
    if (O === "save-failed") {
      let ie = setTimeout(Ze, 2e3, H);
      return () => clearTimeout(ie);
    }
    if (O === "relaunching") {
      a(oe[u].relaunch, {});
      let ae = setTimeout(Ve, 250, I);
      return () => clearTimeout(ae);
    }
  }, ne = [O, u, H, D, I], _[3] = H, _[4] = I, _[5] = D, _[6] = O, _[7] = u, _[8] = J, _[9] = ne;
  else J = _[8], ne = _[9];
  if (P(J, ne), O === "relaunching" && v) {
    let W2;
    if (_[10] === b) W2 = e(n, { dimColor: true, children: "Restarting Claude Code to apply the new model…" }), _[10] = W2;
    else W2 = _[10];
    return W2;
  }
  if (S === void 0 || O === "done") {
    return null;
  }
  if (O === "save-failed") {
    const W2 = eO[S.tier];
    let q2;
    if (_[11] !== W2) q2 = r(n, { color: "error", children: ["Failed to save ", W2, " upgrade to settings."] }), _[11] = W2, _[12] = q2;
    else q2 = _[12];
    return q2;
  }
  const W = eO[S.tier];
  let q;
  if (_[13] !== H || _[14] !== x || _[15] !== R || _[16] !== S || _[17] !== D) q = (be) => {
    if (h.current === R) {
      return;
    }
    h.current = R, x(S, be).then((Me) => {
      if (be && !Me) {
        F(et);
        return;
      }
      H(Me);
    }, (rt) => {
      l(rt), D();
    });
  }, _[13] = H, _[14] = x, _[15] = R, _[16] = S, _[17] = D, _[18] = q;
  else q = _[18];
  let xe;
  if (_[19] !== T || _[20] !== R || _[21] !== S.fromMarketingName || _[22] !== S.toId || _[23] !== S.toMarketingName || _[24] !== W || _[25] !== q) xe = e(T, { tierLabel: W, fromName: S.fromMarketingName, toName: S.toMarketingName, toProviderId: S.toId, onDone: q }, R), _[19] = T, _[20] = R, _[21] = S.fromMarketingName, _[22] = S.toId, _[23] = S.toMarketingName, _[24] = W, _[25] = q, _[26] = xe;
  else xe = _[26];
  return xe;
}
function Ovi(o) {
  let u = 0, f = LA(o);
  if (f.stdin) a("tengu_stdin_interactive", {});
  let x = new Z(), D = Umr();
  _ns(D);
  let T = i.CLAUDE_CODE_FRAME_TIMING_LOG, _ = -1, M = 0, E = Math.max(1, i.CLAUDE_CODE_FRAME_TIMING_SAMPLE_EVERY || 1);
  if (T) try {
    _ = Ie(T, "a");
  } catch {
  }
  return { getFpsMetrics: () => x.getMetrics(), stats: D, renderOptions: { ...f, onFrame: (F) => {
    if (x.record(F.durationMs), D.observe("frame_duration_ms", F.durationMs), _ >= 0 && F.phases) {
      let R = M++ % E === 0, v = JSON.stringify({ total: F.durationMs, at: Date.now(), ...F.phases, ...R && { rss: process.memoryUsage.rss(), cpu: process.cpuUsage() } }) + `
`;
      Oe(_, v);
    }
    if (aae()) return;
    for (let R of F.flickers) {
      if (R.reason === "resize") continue;
      let v = Date.now();
      if (v - u < 1e3) a("tengu_flicker", { desiredHeight: R.desiredHeight, actualHeight: R.availableHeight, reason: R.reason });
      u = v;
    }
  } } };
}
function Ae(o, u) {
  import("../context/memory-watchers.kpxm.js").then((f) => f.startMemoryWatcher(o, u));
}
export {
  Aas,
  Ivi,
  Ovi,
  Pvi,
  agi,
  cur,
  igi,
  jJr,
  ogi,
  sgi,
  tPe,
  xvi
};
