// linux/telemetry/bridge-min-version.js — Claude Code 2.1.310（linux）模块 chunk-0vzwbv6j.js
import { __asset_src } from "../../runtime/assets.js";
import { F_, lH, O_e, w9, $i, Wnt, Q0e, jp, kn, gH } from "../settings/global-config-and-gates.js";
import { Ke, NI, d } from "./anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { aYt, l } from "../artifacts/cowritten-artifact-html.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { aGt } from "../models/ccr-unsupported-default-mode-ignored.js";
import { OBr, wUo, MBr, DBr, HBr, LBr } from "./bridge-resume-respects-local-owner.js";
import { F8n, gYs, hYs, J_t } from "../workflows/workflow-remote-agent.js";
import { o, u } from "../vendor/zod/string-format.js";
var g = [hYs, F8n];
function Qlt(e) {
  if (e === null) return { tagsRead: false, rcChild: false, projectThreadChild: false, attended: false };
  let r = false;
  r = e.includes("hearth-rc-child");
  let i = e.includes(gYs);
  return { tagsRead: true, rcChild: i, projectThreadChild: r, attended: e.some((s) => g.includes(s)) && !i && !e.includes(J_t) };
}
function YIn(e) {
  if (OBr() || MBr()) return true;
  return HBr() || LBr() || e === "spawn" && DBr();
}
function XIn(e) {
  let r = e.roles.rcChild && !e.modePinned && OBr(), i = r && wUo() && aGt(e.settings()), s = e.roles.attended, n = false, a = false, h = false;
  s = s || e.roles.projectThreadChild, n = e.roles.projectThreadChild && DBr(), a = e.roles.projectThreadChild && HBr(), h = e.roles.projectThreadChild && LBr();
  let R = s && MBr();
  return { autoDefault: r, autoOverSettings: i, artifact: R, machineSettings: n, autoCompact: a, projectsEntrypoint: h };
}
var c = "2.1.270", _ = p(() => u({ minVersion: o().refine((e) => e === "" || w9(e)).optional() }));
function f() {
  let { value: e, source: r } = kn("tengu_bridge_min_version", { minVersion: c });
  if (r === "disabled") return null;
  if (r === "fallback" && !$i()) return { minVersion: c, unknown: "unanswered" };
  let i = _().safeParse(e);
  if (!i.success) return { minVersion: c, unknown: "malformed" };
  let s = i.data.minVersion;
  return { minVersion: s && F_(s, c) ? s : c, unknown: null };
}
function ZEi(e = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION) {
  let r = f();
  if (r === null) return null;
  if (lH(O_e(e), r.minVersion)) return `Your version of Claude Code (${e}) is too old for Remote Control.
Version ${r.minVersion} or higher is required. Run \`claude update\` to update.`;
  return null;
}
function Fwe(e = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION) {
  let r = f();
  if (r === null) return aYt() === "no-telemetry" ? { reason: "floor_unreachable", message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require cannot be received while feature-flag evaluation is off (DISABLE_TELEMETRY or DO_NOT_TRACK is set).` } : null;
  switch (r.unknown) {
    case "unanswered":
      return { reason: "floor_unanswered", message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require has not been received from the server.` };
    case "malformed":
      return { reason: "floor_malformed", message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require could not be read.` };
    case null:
      if (lH(O_e(e), r.minVersion)) return { reason: "below_floor", message: `This computer's Claude Code (${e}) is below the version a session started remotely on it requires (${r.minVersion}). Run \`claude update\` to update.` };
      return null;
  }
}
var E = 1e4, C = 500;
async function Hro(e, r, i, s = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION) {
  try {
    if (!jp() || !Q0e()) return e;
    i.inFlight ??= gH().catch((n) => t(`[bridge:floor] Flag refresh failed: ${d(n)}`, { level: "error" })).finally(() => {
      i.inFlight = void 0;
    });
    for (let n = 0; n < E && !r.aborted; n += C) {
      await X(C, r);
      let a = f();
      if (r.aborted || a === null) break;
      if (a.unknown !== "unanswered") return Fwe(s);
      if (i.inFlight === void 0 && !Wnt()) break;
    }
  } catch (n) {
    if (Ke(n) || n instanceof NI) t(`[bridge:floor] Hold ended without an answer: ${d(n)}`, { level: "error" });
    else l(n);
  }
  return e;
}
function bPt(e, r) {
  if (e === null) return r.reason !== "floor_unreachable";
  return Qlt(e).projectThreadChild;
}
export {
  Fwe,
  Hro,
  Qlt,
  XIn,
  YIn,
  ZEi,
  bPt
};
