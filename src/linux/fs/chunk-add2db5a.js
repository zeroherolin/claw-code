// linux/fs/chunk-add2db5a.js — Claude Code 2.1.310（linux）模块 chunk-4kt6s82s.js
import { fl } from "../mcp/allowed-warning.js";
import { x, Fe } from "../vendor/react/chunk-0b0bf45d.js";
var d = x(function(i) {
  Object.defineProperty(i, "__esModule", { value: true });
  i.getMachineId = void 0;
  var t = Fe("fs"), r = fl();
  async function s() {
    let c = ["/etc/machine-id", "/var/lib/dbus/machine-id"];
    for (let a of c) try {
      return (await t.promises.readFile(a, { encoding: "utf8" })).trim();
    } catch (e) {
      r.diag.debug(`error reading machine id: ${e}`);
    }
    return;
  }
  i.getMachineId = s;
});
var stdin_default = d();
export {
  stdin_default as default
};
