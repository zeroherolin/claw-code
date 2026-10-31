// linux/shell/not-serialized.js — Claude Code 2.1.310（linux）模块 chunk-bha6jwbq.js
import { p } from "../shared/chunk-2fe3b2b7.js";
import { XA, Ll } from "../context/tool-result-clearing-after-idle-server-report.js";
import { xo, rk, iot } from "./invalid-type.js";
import { N0 } from "../permissions/classifier-transcript-too-long.js";
import { ej } from "../permissions/bot-protected-tengu-atomic-magpie.js";
import { mn } from "../shared/chunk-62f8d501.js";
import { o, M, oe, T, u, Ue, $e, Cv, me, eSe, B, A } from "../vendor/zod/string-format.js";
import { hq } from "../fs/chunk-41037178.js";
var g = 524288, z = { mode: "serialized", additionalWorkingDirectories: "serialized", trustedNetworkDirectories: "serialized", alwaysAllowRules: "serialized", alwaysDenyRules: "serialized", alwaysAskRules: "serialized", strippedDangerousRules: "serialized", prePlanMode: "serialized", modeBeforeRewrite: "serialized", restricted: "serialized_as_restriction", blockReadsOutsideWorkingDirectories: "serialized_as_restriction", bashCommandClamps: "serialized_as_restriction", toolAliases: "serialized_as_restriction", servedCall: "set_by_deserialize", sandboxAutoAllowSuspended: "set_by_deserialize", callerClassifiesWebCalls: "not_serialized", chromeClassifierFloorEnabled: "not_serialized", chromeNavigationClassifierEnabled: "not_serialized", chromeClickClassifierEnabled: "not_serialized", chromeHostToolAsksEnabled: "not_serialized", canAutoClassifierRun: "not_serialized", proactivityBaseline: "not_serialized", startupModeDecidedByProactivityLevel: "not_serialized", isAutoModeAvailable: "not_serialized", isBypassPermissionsModeAvailable: "not_serialized", shouldAvoidPermissionPrompts: "not_serialized", awaitAutomatedChecksBeforeDialog: "not_serialized", mcpPermissionModeOverrides: "not_serialized", mcpAskForTools: "not_serialized", builtInToolsDisabled: "not_serialized", toolsKeptByLaunchList: "not_serialized", pollEventDeliveryGuard: "not_serialized", turnDisallowedTools: "not_serialized", toolsHeldUntilAPersonTypes: "not_serialized", isRemoteMode: "not_serialized", remoteBrowserCardAnswers: "not_serialized" }, _ = { restricted: false, blockReadsOutsideWorkingDirectories: false, bashCommandClamps: [], toolAliases: {} }, m = Object.keys(_), H = Object.entries(z).flatMap(([e, s]) => s === "serialized" ? [e] : []);
var d = p(() => B(N0)), y = p(() => B(ej)), a = p(() => o().min(1)), n = p(() => eSe(y(), T(o()))), ewe = 4096, lQr = p(() => o().max(ewe).refine((e) => e.startsWith("/") && !e.includes("\0"))), f = p(() => $e([A(false), Cv([]), Ue({})])), S = p(() => u({ restricted: M(), blockReadsOutsideWorkingDirectories: M(), bashCommandClamps: T(T(o())), toolAliases: me(a(), a()) }).catchall(f()));
function dQr(e) {
  let s = mn(e) ? e.restrictions : void 0;
  return mn(s) && Object.values(xo(s, m)).some((t) => !f().safeParse(t).success);
}
function c({ $map: e }) {
  return new Set(e.map(([s]) => s)).size === e.length;
}
var R = p(() => Ue({ mode: d(), additionalWorkingDirectories: Ue({ $map: T(Cv([lQr(), Ue({ path: o(), source: y() })])) }).refine(c).refine(({ $map: e }) => e.every(([s, { path: t }]) => s === t)), trustedNetworkDirectories: Ue({ $map: T(Cv([a(), T(a())])) }).refine(c).optional(), alwaysAllowRules: n(), alwaysDenyRules: n(), alwaysAskRules: n(), strippedDangerousRules: n().optional(), prePlanMode: d().optional(), modeBeforeRewrite: d().optional(), restrictions: S() })), D2 = p(() => oe().transform((e, s) => {
  let t = R().safeParse(e), r = t.success ? Object.entries(mn(e) ? e : {}).filter(([i, l]) => i === "__proto__" || iot(l)).map(([i]) => ({ path: [i], message: "a key named __proto__" })) : t.error.issues;
  return s.issues.push(...r.slice(0, 1).map(({ path: i, message: l }) => ({ code: "custom", path: i, message: l, input: e }))), t.success && r.length === 0 ? t.data : hq;
}));
function H2(e) {
  return e !== void 0 && XA(e) > g;
}
function jis(e) {
  let { restrictions: s, additionalWorkingDirectories: t, trustedNetworkDirectories: r, ...i } = e;
  return { ...Ll(), ...i, additionalWorkingDirectories: new Map(t.$map), ...r && { trustedNetworkDirectories: new Map(r.$map) }, ...rk(s, m), servedCall: true, sandboxAutoAllowSuspended: true };
}
export {
  D2,
  H2,
  dQr,
  ewe,
  jis,
  lQr
};
