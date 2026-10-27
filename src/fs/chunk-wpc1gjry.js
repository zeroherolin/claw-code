// fs/chunk-wpc1gjry.js — Claude Code 2.1.310 模块 chunk-wpc1gjry.js
import { syn } from "../shell/chunk-nepemb8q.js";
import { fl } from "../mcp/allowed-warning.j2d4.js";
import { x, $e } from "../vendor/react/chunk-meds60nn.js";
var u = x(function(n) {
  Object.defineProperty(n, "__esModule", { value: true });
  n.getMachineId = void 0;
  var r = $e("fs"), i = syn(), t = fl();
  async function c() {
    try {
      return (await r.promises.readFile("/etc/hostid", { encoding: "utf8" })).trim();
    } catch (e) {
      t.diag.debug(`error reading machine id: ${e}`);
    }
    try {
      return (await i.execAsync("kenv -q smbios.system.uuid")).stdout.trim();
    } catch (e) {
      t.diag.debug(`error reading machine id: ${e}`);
    }
    return;
  }
  n.getMachineId = c;
});
var stdin_default = u();
export {
  stdin_default as default
};
