// shared/stop-command.epjh.js — Claude Code 2.1.310 模块 chunk-epjh23tr.js
import { Lyt } from "./chunk-swxwxsg8.js";
import { Die } from "../ui/repl-screen.zq77.js";
import { rDn } from "../telemetry/bg-agent-action.adqn.js";
async function Yeo(e, a) {
  e();
  let o = Lyt();
  if (o !== null) return o.close(), null;
  return await rDn("stop_command", a.storageV5, Die()), null;
}
export {
  Yeo
};
