// darwin/auth/guard-relay-token-descriptor.js — Claude Code 2.1.310（darwin）模块 chunk-950wsm5w.js
import "../fs/async-hooks.93b1.js";
import { sd } from "../remote/chunk-95151620.js";
import { Bz } from "../shared/chunk-d7d58ade.js";
function n() {
  if ((process.env.CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR !== void 0 || process.argv.includes("--session-tunnel")) && sd()) Bz(() => {
  });
}
export {
  n as guardRelayTokenDescriptor
};
