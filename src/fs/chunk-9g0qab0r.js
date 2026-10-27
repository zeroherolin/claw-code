// fs/chunk-9g0qab0r.js — Claude Code 2.1.310 模块 chunk-9g0qab0r.js
import { fl } from "../mcp/allowed-warning.j2d4.js";
import { x, $e } from "../vendor/react/chunk-meds60nn.js";
var d = x(function(i) {
  Object.defineProperty(i, "__esModule", { value: true });
  i.getMachineId = void 0;
  var t = $e("fs"), r = fl();
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
