// linux/shared/stop-command.js — Claude Code 2.1.310（linux）模块 chunk-9xz7emqc.js
import { xyt } from "./chunk-bb143d83.js";
import { Cie } from "../ui/repl-screen.js";
import { KHn } from "../telemetry/bg-agent-action.js";
async function keo(e, a) {
  e();
  let o = xyt();
  if (o !== null) return o.close(), null;
  return await KHn("stop_command", a.storageV5, Cie()), null;
}
export {
  keo
};
