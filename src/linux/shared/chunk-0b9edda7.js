// linux/shared/chunk-0b9edda7.js — Claude Code 2.1.310（linux）模块 chunk-qxsz0sd7.js
import { fl } from "../mcp/allowed-warning.js";
import { x } from "../vendor/react/chunk-0b0bf45d.js";
var i = x(function(t) {
  Object.defineProperty(t, "__esModule", { value: true });
  t.getMachineId = void 0;
  var e = fl();
  async function n() {
    e.diag.debug("could not read machine-id: unsupported platform");
    return;
  }
  t.getMachineId = n;
});
var stdin_default = i();
export {
  stdin_default as default
};
