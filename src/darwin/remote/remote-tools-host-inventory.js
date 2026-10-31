// darwin/remote/remote-tools-host-inventory.js — Claude Code 2.1.310（darwin）模块 chunk-ybz3vgkq.js
import { N } from "../telemetry/anthropic-workspace-id.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { _ } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { FWr, $Wr, UWr } from "../context/tool-result-clearing-after-idle-server-report.js";
import { zOn, Yoo } from "../mcp/bridge-host-profile-collect.js";
import { fdt } from "../telemetry/chunk-3175847a.js";
import { statfs as f } from "fs/promises";
import { availableParallelism as u, totalmem as d } from "os";
var c = ["gcloud", "aws", "az", "gh", "brew", "apt", "sqlite3", "ffmpeg", "rg", "jq"], s = 2e3, a = 2n ** 30n;
function Shr() {
  try {
    return fdt() && zOn("basic") !== "off";
  } catch (t) {
    return l(N(t)), false;
  }
}
async function Fki(t) {
  try {
    if (!Shr()) return;
    let [e, r] = await Promise.all([Yoo({ includeMcpServers: false, signal: AbortSignal.timeout(s), alsoLookFor: c, maxTools: FWr }), Pe(f(t, { bigint: true }), s).catch(() => {
      return;
    })]);
    if (e === void 0) {
      m("remote_tools_host_inventory", "unsupported_platform");
      return;
    }
    let n = r === void 0 ? -1n : r.bavail * r.bsize;
    if (!e.complete) p("remote_tools_host_inventory", "deadline");
    else if (n < 0n) p("remote_tools_host_inventory", "disk_unread");
    else g("remote_tools_host_inventory");
    let i = { ...!e.complete && { incomplete: true }, cpus: u(), memory_gb: Math.round(d() / Number(a)), ...n >= 0n && { disk_free_gb: Math.min(Number(n / a), $Wr) } }, o = e.profile.tools;
    while (o.length > 0 && _({ tools: o, ...i }).length > UWr) o = o.slice(0, -1);
    return { tools: o, ...i };
  } catch (e) {
    l(N(e)), m("remote_tools_host_inventory", "error");
    return;
  }
}
export {
  Fki,
  Shr
};
