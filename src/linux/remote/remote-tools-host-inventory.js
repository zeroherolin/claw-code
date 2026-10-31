// linux/remote/remote-tools-host-inventory.js — Claude Code 2.1.310（linux）模块 chunk-c6dz8eqs.js
import { N } from "../telemetry/anthropic-workspace-id.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { _ } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { yWr, _Wr, bWr } from "../context/tool-result-clearing-after-idle-server-report.js";
import { MOn, Aoo } from "../mcp/bridge-host-profile-collect.js";
import { udt } from "../telemetry/chunk-3175847a.js";
import { statfs as u } from "fs/promises";
import { availableParallelism as d, totalmem as p } from "os";
var c = ["gcloud", "aws", "az", "gh", "brew", "apt", "sqlite3", "ffmpeg", "rg", "jq"], s = 2e3, a = 2n ** 30n;
function ahr() {
  try {
    return udt() && MOn("basic") !== "off";
  } catch (t) {
    return l(N(t)), false;
  }
}
async function nki(t) {
  try {
    if (!ahr()) return;
    let [e, r] = await Promise.all([Aoo({ includeMcpServers: false, signal: AbortSignal.timeout(s), alsoLookFor: c, maxTools: yWr }), Pe(u(t, { bigint: true }), s).catch(() => {
      return;
    })]);
    if (e === void 0) {
      m("remote_tools_host_inventory", "unsupported_platform");
      return;
    }
    let n = r === void 0 ? -1n : r.bavail * r.bsize;
    if (!e.complete) f("remote_tools_host_inventory", "deadline");
    else if (n < 0n) f("remote_tools_host_inventory", "disk_unread");
    else g("remote_tools_host_inventory");
    let i = { ...!e.complete && { incomplete: true }, cpus: d(), memory_gb: Math.round(p() / Number(a)), ...n >= 0n && { disk_free_gb: Math.min(Number(n / a), _Wr) } }, o = e.profile.tools;
    while (o.length > 0 && _({ tools: o, ...i }).length > bWr) o = o.slice(0, -1);
    return { tools: o, ...i };
  } catch (e) {
    l(N(e)), m("remote_tools_host_inventory", "error");
    return;
  }
}
export {
  ahr,
  nki
};
