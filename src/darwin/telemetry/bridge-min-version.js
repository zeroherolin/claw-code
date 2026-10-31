// darwin/telemetry/bridge-min-version.js — Claude Code 2.1.310（darwin）模块 chunk-04nyph4z.js
import { __asset_src } from "../../runtime/assets.js";
import { U_, pH, $_e, xY, Fi, Xnt, oNe, jf, kn, SH } from "../settings/global-config-and-gates.js";
import { Ve, jI, d } from "./anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { w3t, l } from "../artifacts/cowritten-artifact-html.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { S2t } from "../models/ccr-unsupported-default-mode-ignored.js";
import { X1r, GUo, J1r, Q1r, Z1r, eBr } from "./bridge-resume-respects-local-owner.js";
import { eYn, V3s, K3s, Q_t } from "../workflows/workflow-remote-agent.js";
import { o, u } from "../vendor/zod/string-format.js";
var g = [K3s, eYn];
function hdt(e) {
  if (e === null) return { tagsRead: false, rcChild: false, projectThreadChild: false, attended: false };
  let r = false;
  r = e.includes("hearth-rc-child");
  let i = e.includes(V3s);
  return { tagsRead: true, rcChild: i, projectThreadChild: r, attended: e.some((s) => g.includes(s)) && !i && !e.includes(Q_t) };
}
function KOn(e) {
  if (X1r() || J1r()) return true;
  return Z1r() || eBr() || e === "spawn" && Q1r();
}
function qOn(e) {
  let r = e.roles.rcChild && !e.modePinned && X1r(), i = r && GUo() && S2t(e.settings()), s = e.roles.attended, n = false, a = false, m = false;
  s = s || e.roles.projectThreadChild, n = e.roles.projectThreadChild && Q1r(), a = e.roles.projectThreadChild && Z1r(), m = e.roles.projectThreadChild && eBr();
  let R = s && J1r();
  return { autoDefault: r, autoOverSettings: i, artifact: R, machineSettings: n, autoCompact: a, projectsEntrypoint: m };
}
var c = "2.1.270", _ = f(() => u({ minVersion: o().refine((e) => e === "" || xY(e)).optional() }));
function h() {
  let { value: e, source: r } = kn("tengu_bridge_min_version", { minVersion: c });
  if (r === "disabled") return null;
  if (r === "fallback" && !Fi()) return { minVersion: c, unknown: "unanswered" };
  let i = _().safeParse(e);
  if (!i.success) return { minVersion: c, unknown: "malformed" };
  let s = i.data.minVersion;
  return { minVersion: s && U_(s, c) ? s : c, unknown: null };
}
function jki(e = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION) {
  let r = h();
  if (r === null) return null;
  if (pH($_e(e), r.minVersion)) return `Your version of Claude Code (${e}) is too old for Remote Control.
Version ${r.minVersion} or higher is required. Run \`claude update\` to update.`;
  return null;
}
function Qwe(e = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION) {
  let r = h();
  if (r === null) return w3t() === "no-telemetry" ? { reason: "floor_unreachable", message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require cannot be received while feature-flag evaluation is off (DISABLE_TELEMETRY or DO_NOT_TRACK is set).` } : null;
  switch (r.unknown) {
    case "unanswered":
      return { reason: "floor_unanswered", message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require has not been received from the server.` };
    case "malformed":
      return { reason: "floor_malformed", message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require could not be read.` };
    case null:
      if (pH($_e(e), r.minVersion)) return { reason: "below_floor", message: `This computer's Claude Code (${e}) is below the version a session started remotely on it requires (${r.minVersion}). Run \`claude update\` to update.` };
      return null;
  }
}
var E = 1e4, p = 500;
async function Xoo(e, r, i, s = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION) {
  try {
    if (!jf() || !oNe()) return e;
    i.inFlight ??= SH().catch((n) => t(`[bridge:floor] Flag refresh failed: ${d(n)}`, { level: "error" })).finally(() => {
      i.inFlight = void 0;
    });
    for (let n = 0; n < E && !r.aborted; n += p) {
      await X(p, r);
      let a = h();
      if (r.aborted || a === null) break;
      if (a.unknown !== "unanswered") return Qwe(s);
      if (i.inFlight === void 0 && !Xnt()) break;
    }
  } catch (n) {
    if (Ve(n) || n instanceof jI) t(`[bridge:floor] Hold ended without an answer: ${d(n)}`, { level: "error" });
    else l(n);
  }
  return e;
}
function GPt(e, r) {
  if (e === null) return r.reason !== "floor_unreachable";
  return hdt(e).projectThreadChild;
}
export {
  GPt,
  KOn,
  Qwe,
  Xoo,
  hdt,
  jki,
  qOn
};
