// linux/auth/guard-relay-token-descriptor.js — Claude Code 2.1.310（linux）模块 chunk-dset9ats.js
import "../fs/async-hooks.93b1.js";
import { sd } from "../remote/chunk-95151620.js";
import { O2 } from "../shared/chunk-960c3301.js";
function n() {
  if ((process.env.CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR !== void 0 || process.argv.includes("--session-tunnel")) && sd()) O2(() => {
  });
}
export {
  n as guardRelayTokenDescriptor
};
