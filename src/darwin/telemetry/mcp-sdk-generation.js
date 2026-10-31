// darwin/telemetry/mcp-sdk-generation.js — Claude Code 2.1.310（darwin）模块 chunk-2z484bf5.js
import { kn } from "../settings/global-config-and-gates.js";
import { c } from "../agents/third-party.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { a } from "./chunk-9097a12b.js";
import { Ee } from "../shared/chunk-fee3c428.js";
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
