// telemetry/mcp-sdk-generation.2z48.js — Claude Code 2.1.310 模块 chunk-2z484bf5.js
import { kn } from "../settings/global-config-and-gates.27xj.js";
import { c } from "../agents/third-party.ydpb.js";
import { i } from "../shared/environment.9a41.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { a } from "./chunk-wq923bwc.js";
import { Ee } from "../shared/chunk-f9xfyhm1.js";
class f {
  latched = void 0;
  latch(e) {
    this.latched = e;
  }
  reset() {
    this.latched = void 0;
  }
}
var d = Ee(new f(), (e) => e.reset());
function jO() {
  {
    if (d.latched !== void 0) return d.latched;
    let e = i.MCP_SDK_GENERATION, o = e === "v1" || e === "v2" ? e : void 0;
    if (e !== void 0 && o === void 0) t(`MCP_SDK_GENERATION=${e} is invalid; expected 'v1' or 'v2' — ignoring`, { level: "warn" });
    let n = o === void 0 ? kn("tengu_brindle_causeway", true) : void 0, r = o ?? (n?.value === false ? "v1" : "v2"), u = n === void 0 ? "env" : n.source === "disabled" || n.source === "fallback" ? "default" : "growthbook";
    return d.latch(r), t(`mcp runtime arm: ${r} (source: ${u})`), a("tengu_mcp_sdk_generation", { generation: c(r), source: c(u) }), r;
  }
  return "v1";
}
export {
  jO
};
