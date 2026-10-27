// mcp/artifact-mcp-swap.dypj.js — Claude Code 2.1.310 模块 chunk-dypjjzj9.js
import { Z } from "../artifacts/same-account.bxg8.js";
import { g, p } from "../telemetry/chunk-wn8xtaqg.js";
import { i } from "../shared/environment.9a41.js";
import { Lj } from "../settings/global-config-and-gates.27xj.js";
import { Id } from "./claude-browser.hdf6.js";
import { yd } from "../remote/self-hosted.qq4m.js";
import { ul } from "../artifacts/read-shared-artifact.9fgd.js";
import { Ihe } from "../context/team-memory-sync.0s3j.js";
import { tut } from "./artifact-summon-arm-emit.jfmv.js";
import { Wun, HGe } from "../telemetry/chunk-9wrwp5rn.js";
function c() {
  if (yd.isSelfHostedRunnerChild) return Lj;
  if (i.CLAUDE_CODE_REMOTE || i.CLAUDE_CODE_REMOTE_SESSION_ID) return null;
  if (Wun() === void 0 && !ul()) return null;
  return import.meta.require("./artifacts-mcp-laptop-states.7sbk.js").isArtifactsMcpLaptopEntry;
}
function s(e) {
  let t = Wun();
  return t !== void 0 && e(t.config) ? t : void 0;
}
function l(e) {
  let t = s(e);
  if (t === void 0 || HGe(t)) return false;
  return t.type === "connected" || t.type === "cached";
}
function y() {
  return import.meta.require("../artifacts/artifact-held-policy-deny-cause.h5vd.js").artifactToolWithholdingGate() !== null;
}
function u() {
  return import.meta.require("../cli/mcp-row-for.dsvn.js").MCP_ROW_TOOL_NAMES;
}
function A(e, t) {
  let n = u();
  return t.some((r) => r.mcpInfo?.serverName === Id && !n.includes(r.mcpInfo.toolName)) && l(e);
}
function K0n(e, t = e) {
  let n = c();
  if (n === null) return [...e];
  let r = () => e.filter((o) => o.mcpInfo?.serverName !== Id), a = s(n);
  if (a !== void 0 && (HGe(a) || y())) return r();
  let T = u(), f = t.filter((o) => o.mcpInfo?.serverName === Id);
  if (f.length === 0 || f.some((o) => !T.includes(o.mcpInfo?.toolName ?? "")) || !l(n)) return [...e];
  return r();
}
function R_s(e, t) {
  if (!ul()) {
    let n = c();
    if (n === null || !A(n, t)) return [...e];
    let r = Z();
    r.builtInArtifactHiddenForMcp = true, r.autoReact.enabledMemo = false, g("artifact_mcp_swap"), tut(r.live), d();
  }
  return m(e);
}
function x_s() {
  if (!ul()) return;
  let e = c();
  if (e === null) return;
  let t = s(e);
  if (t !== void 0 && HGe(t)) p("artifact_mcp_swap", "entry_not_served");
  else switch (t?.type) {
    case void 0:
      p("artifact_mcp_swap", "entry_gone");
      break;
    case "failed":
      p("artifact_mcp_swap", "entry_failed");
      break;
    case "needs-auth":
      p("artifact_mcp_swap", "entry_needs_auth");
      break;
    case "connected":
    case "cached":
    case "pending":
    case "disabled":
      return;
    default:
      return;
  }
  let n = Z();
  n.builtInArtifactHiddenForMcp = false, n.autoReact.optIn = false, n.autoReact.wakeEnabledMemo = false, tut(n.live);
  for (let r of [...n.wakes.takenFrom.keys()]) import("../models/hand-back-taken-over-slug.phne.js").then((a) => a.handBackTakenOverSlug(r));
  d();
}
function d() {
  import.meta.require("../skills/built-in-command-names.bg4t.js").clearCommandMemoizationCaches();
}
function P_s(e) {
  return ul() ? m(e) : [...e];
}
function Mlo(e) {
  if (Ihe(e)) return true;
  let t = import.meta.require("../shared/appifact-repl-tool-name.416x.js").APPIFACT_REPL_TOOL_NAME;
  return t !== void 0 && e.mcpInfo === void 0 && e.name === t;
}
function m(e) {
  return e.filter((t) => !Mlo(t));
}
export {
  K0n,
  Mlo,
  P_s,
  R_s,
  x_s
};
