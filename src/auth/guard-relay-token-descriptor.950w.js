// auth/guard-relay-token-descriptor.950w.js — Claude Code 2.1.310 模块 chunk-950wsm5w.js
import "../fs/async-hooks.9s1z.js";
import { sd } from "../remote/chunk-t0kv6pst.js";
import { Bz } from "../shared/chunk-4fkyaqc3.js";
function n() {
  if ((process.env.CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR !== void 0 || process.argv.includes("--session-tunnel")) && sd()) Bz(() => {
  });
}
export {
  n as guardRelayTokenDescriptor
};
