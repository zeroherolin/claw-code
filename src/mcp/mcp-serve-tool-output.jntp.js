// mcp/mcp-serve-tool-output.jntp.js — Claude Code 2.1.310 模块 chunk-jntp4e0n.js
import { p } from "../telemetry/chunk-wn8xtaqg.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { d2r, dgn, FJn, $Jn } from "../permissions/peer-too-old.5bsv.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { sv } from "../shared/chunk-5x6nmyvf.js";
import { ot } from "../fs/chunk-gzs70jxe.js";
import { mn } from "../shared/chunk-1a0taxx3.js";
import { o, oe, u } from "../vendor/zod/string-format.k395.js";
var _ = "anthropic/toolHostInterface";
function hAn() {
  return yAn();
}
function yAn() {
  let { version: e } = dgn;
  return { version: e, min_version: d2r(sv.CLAUDE_CODE_MCP_SERVE_INTERFACE_MIN_VERSION, e) };
}
function vvi() {
  let e = hAn(), n = sv.CLAUDE_CODE_MCP_SERVE_INTERFACE_MIN_VERSION;
  if (n !== void 0 && e?.min_version !== n) p("mcp_serve_tool_output", "launch_min_version_ignored", { launch_min_version: n, ...e && { daemon_interface_version: e.version, daemon_interface_min_version: e.min_version } });
  return { experimental: e === void 0 ? {} : { [_]: e } };
}
var l = 100;
function kvi(e, n) {
  let i = mn(n) ? n[_] : void 0;
  if (i === void 0) return;
  let r = hAn();
  if (r === void 0) return;
  let s = typeof i === "string" && i.length <= l ? FJn(ot(i, false)) : void 0, a = s === void 0 ? "unreadable" : { peer_too_old: "session_too_old", self_too_old: "daemon_too_old", agreed: void 0 }[$Jn(r, s).kind];
  if (a === void 0) return;
  let d = `${e} was not run: ${s === void 0 ? "this server could not read the version of the interface that its caller stated with the call" : a === "session_too_old" ? `this session speaks version ${s.version} of the interface to this server, which works with version ${r.min_version} or later` : `this session works with version ${s.min_version} or later of the interface to this server, which speaks version ${r.version}`}. Retrying won't help: tell the user.`;
  return t(`MCP server: ${d}`, { level: "warn" }), p("mcp_serve_tool_output", `caller_interface_${a}`, { daemon_interface_min_version: r.min_version }), { isError: true, content: [{ type: "text", text: d }], _meta: { [_]: { refused: a, range: r } } };
}
var O = f(() => u({ refused: o(), range: oe().optional() }));
export {
  hAn,
  kvi,
  vvi,
  yAn
};
