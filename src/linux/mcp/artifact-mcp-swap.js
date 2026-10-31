// linux/mcp/artifact-mcp-swap.js — Claude Code 2.1.310（linux）模块 chunk-d02rasrq.js
import { Z } from "../artifacts/same-account.js";
import { g, f } from "../telemetry/chunk-9d6962d2.js";
import { i } from "../shared/environment.js";
import { Pj } from "../settings/global-config-and-gates.js";
import { Id } from "./claude-browser.js";
import { hd } from "../remote/self-hosted.js";
import { cl } from "../artifacts/read-shared-artifact.js";
import { xhe } from "../context/team-memory-sync.js";
import { Qct } from "./artifact-summon-arm-emit.js";
import { Tun, kze } from "../telemetry/chunk-cbe4ae1f.js";
function c() {
  if (hd.isSelfHostedRunnerChild) return Pj;
  if (i.CLAUDE_CODE_REMOTE || i.CLAUDE_CODE_REMOTE_SESSION_ID) return null;
  if (Tun() === void 0 && !cl()) return null;
  return import.meta.require("./artifacts-mcp-laptop-states.js").isArtifactsMcpLaptopEntry;
}
function s(e) {
  let t = Tun();
  return t !== void 0 && e(t.config) ? t : void 0;
}
function u(e) {
  let t = s(e);
  if (t === void 0 || kze(t)) return false;
  return t.type === "connected" || t.type === "cached";
}
function y() {
  return import.meta.require("../artifacts/artifact-held-policy-deny-cause.js").artifactToolWithholdingGate() !== null;
}
function p() {
  return import.meta.require("../cli/mcp-row-for.js").MCP_ROW_TOOL_NAMES;
}
function A(e, t) {
  let n = p();
  return t.some((r) => r.mcpInfo?.serverName === Id && !n.includes(r.mcpInfo.toolName)) && u(e);
}
function cDn(e, t = e) {
  let n = c();
  if (n === null) return [...e];
  let r = () => e.filter((o) => o.mcpInfo?.serverName !== Id), a = s(n);
  if (a !== void 0 && (kze(a) || y())) return r();
  let T = p(), l = t.filter((o) => o.mcpInfo?.serverName === Id);
  if (l.length === 0 || l.some((o) => !T.includes(o.mcpInfo?.toolName ?? "")) || !u(n)) return [...e];
  return r();
}
function lys(e, t) {
  if (!cl()) {
    let n = c();
    if (n === null || !A(n, t)) return [...e];
    let r = Z();
    r.builtInArtifactHiddenForMcp = true, r.autoReact.enabledMemo = false, g("artifact_mcp_swap"), Qct(r.live), d();
  }
  return m(e);
}
function dys() {
  if (!cl()) return;
  let e = c();
  if (e === null) return;
  let t = s(e);
  if (t !== void 0 && kze(t)) f("artifact_mcp_swap", "entry_not_served");
  else switch (t?.type) {
    case void 0:
      f("artifact_mcp_swap", "entry_gone");
      break;
    case "failed":
      f("artifact_mcp_swap", "entry_failed");
      break;
    case "needs-auth":
      f("artifact_mcp_swap", "entry_needs_auth");
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
  n.builtInArtifactHiddenForMcp = false, n.autoReact.optIn = false, n.autoReact.wakeEnabledMemo = false, Qct(n.live);
  for (let r of [...n.wakes.takenFrom.keys()]) import("../models/hand-back-taken-over-slug.js").then((a) => a.handBackTakenOverSlug(r));
  d();
}
function d() {
  import.meta.require("../skills/built-in-command-names.js").clearCommandMemoizationCaches();
}
function cys(e) {
  return cl() ? m(e) : [...e];
}
function aao(e) {
  if (xhe(e)) return true;
  let t = import.meta.require("../shared/appifact-repl-tool-name.js").APPIFACT_REPL_TOOL_NAME;
  return t !== void 0 && e.mcpInfo === void 0 && e.name === t;
}
function m(e) {
  return e.filter((t) => !aao(t));
}
export {
  aao,
  cDn,
  cys,
  dys,
  lys
};
