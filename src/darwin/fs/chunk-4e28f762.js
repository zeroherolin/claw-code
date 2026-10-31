// darwin/fs/chunk-4e28f762.js — Claude Code 2.1.310（darwin）模块 chunk-wpc1gjry.js
import { syn } from "../shell/chunk-8cf0a5b0.js";
import { fl } from "../mcp/allowed-warning.js";
import { x, $e } from "../vendor/react/chunk-0b0bf45d.js";
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
