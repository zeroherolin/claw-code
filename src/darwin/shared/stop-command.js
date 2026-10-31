// darwin/shared/stop-command.js — Claude Code 2.1.310（darwin）模块 chunk-epjh23tr.js
import { Lyt } from "./chunk-bb143d83.js";
import { Die } from "../ui/repl-screen.js";
import { rDn } from "../telemetry/bg-agent-action.js";
async function Yeo(e, a) {
  e();
  let o = Lyt();
  if (o !== null) return o.close(), null;
  return await rDn("stop_command", a.storageV5, Die()), null;
}
export {
  Yeo
};
