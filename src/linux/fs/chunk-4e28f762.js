// linux/fs/chunk-4e28f762.js — Claude Code 2.1.310（linux）模块 chunk-qde9rdg5.js
import { Bhn } from "../shell/chunk-8cf0a5b0.js";
import { fl } from "../mcp/allowed-warning.js";
import { x, Fe } from "../vendor/react/chunk-0b0bf45d.js";
var u = x(function(n) {
  Object.defineProperty(n, "__esModule", { value: true });
  n.getMachineId = void 0;
  var r = Fe("fs"), i = Bhn(), t = fl();
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
