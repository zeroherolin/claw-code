// darwin/shell/not-serialized.js — Claude Code 2.1.310（darwin）模块 chunk-5s2n3v1z.js
import { f } from "../shared/chunk-2fe3b2b7.js";
import { ZT, Ll } from "../context/tool-result-clearing-after-idle-server-report.js";
import { xo, ok, fot } from "./invalid-type.js";
import { BL } from "../permissions/classifier-transcript-too-long.js";
import { aj } from "../permissions/bot-protected-tengu-atomic-magpie.js";
import { mn } from "../shared/chunk-62f8d501.js";
import { o, M, oe, C, u, Ue, Fe, RE, me, sbe, B, T } from "../vendor/zod/string-format.js";
import { EK } from "../fs/chunk-41037178.js";
var g = 524288, z = { mode: "serialized", additionalWorkingDirectories: "serialized", trustedNetworkDirectories: "serialized", alwaysAllowRules: "serialized", alwaysDenyRules: "serialized", alwaysAskRules: "serialized", strippedDangerousRules: "serialized", prePlanMode: "serialized", modeBeforeRewrite: "serialized", restricted: "serialized_as_restriction", blockReadsOutsideWorkingDirectories: "serialized_as_restriction", bashCommandClamps: "serialized_as_restriction", toolAliases: "serialized_as_restriction", servedCall: "set_by_deserialize", sandboxAutoAllowSuspended: "set_by_deserialize", callerClassifiesWebCalls: "not_serialized", chromeClassifierFloorEnabled: "not_serialized", chromeNavigationClassifierEnabled: "not_serialized", chromeClickClassifierEnabled: "not_serialized", chromeHostToolAsksEnabled: "not_serialized", canAutoClassifierRun: "not_serialized", proactivityBaseline: "not_serialized", startupModeDecidedByProactivityLevel: "not_serialized", isAutoModeAvailable: "not_serialized", isBypassPermissionsModeAvailable: "not_serialized", shouldAvoidPermissionPrompts: "not_serialized", awaitAutomatedChecksBeforeDialog: "not_serialized", mcpPermissionModeOverrides: "not_serialized", mcpAskForTools: "not_serialized", builtInToolsDisabled: "not_serialized", toolsKeptByLaunchList: "not_serialized", pollEventDeliveryGuard: "not_serialized", turnDisallowedTools: "not_serialized", toolsHeldUntilAPersonTypes: "not_serialized", isRemoteMode: "not_serialized", remoteBrowserCardAnswers: "not_serialized" }, _ = { restricted: false, blockReadsOutsideWorkingDirectories: false, bashCommandClamps: [], toolAliases: {} }, p = Object.keys(_), H = Object.entries(z).flatMap(([e, s]) => s === "serialized" ? [e] : []);
var d = f(() => B(BL)), m = f(() => B(aj)), a = f(() => o().min(1)), n = f(() => sbe(m(), C(o()))), iwe = 4096, NJr = f(() => o().max(iwe).refine((e) => e.startsWith("/") && !e.includes("\0"))), y = f(() => Fe([T(false), RE([]), Ue({})])), S = f(() => u({ restricted: M(), blockReadsOutsideWorkingDirectories: M(), bashCommandClamps: C(C(o())), toolAliases: me(a(), a()) }).catchall(y()));
function FJr(e) {
  let s = mn(e) ? e.restrictions : void 0;
  return mn(s) && Object.values(xo(s, p)).some((t) => !y().safeParse(t).success);
}
function c({ $map: e }) {
  return new Set(e.map(([s]) => s)).size === e.length;
}
var A = f(() => Ue({ mode: d(), additionalWorkingDirectories: Ue({ $map: C(RE([NJr(), Ue({ path: o(), source: m() })])) }).refine(c).refine(({ $map: e }) => e.every(([s, { path: t }]) => s === t)), trustedNetworkDirectories: Ue({ $map: C(RE([a(), C(a())])) }).refine(c).optional(), alwaysAllowRules: n(), alwaysDenyRules: n(), alwaysAskRules: n(), strippedDangerousRules: n().optional(), prePlanMode: d().optional(), modeBeforeRewrite: d().optional(), restrictions: S() })), Wz = f(() => oe().transform((e, s) => {
  let t = A().safeParse(e), r = t.success ? Object.entries(mn(e) ? e : {}).filter(([i, l]) => i === "__proto__" || fot(l)).map(([i]) => ({ path: [i], message: "a key named __proto__" })) : t.error.issues;
  return s.issues.push(...r.slice(0, 1).map(({ path: i, message: l }) => ({ code: "custom", path: i, message: l, input: e }))), t.success && r.length === 0 ? t.data : EK;
}));
function Gz(e) {
  return e !== void 0 && ZT(e) > g;
}
function kas(e) {
  let { restrictions: s, additionalWorkingDirectories: t, trustedNetworkDirectories: r, ...i } = e;
  return { ...Ll(), ...i, additionalWorkingDirectories: new Map(t.$map), ...r && { trustedNetworkDirectories: new Map(r.$map) }, ...ok(s, p), servedCall: true, sandboxAutoAllowSuspended: true };
}
export {
  FJr,
  Gz,
  NJr,
  Wz,
  iwe,
  kas
};
