// shared/chunk-dx2f26xc.js — Claude Code 2.1.310 模块 chunk-dx2f26xc.js
import { syn } from "../shell/chunk-nepemb8q.js";
import { fl } from "../mcp/allowed-warning.j2d4.js";
import { x } from "../vendor/react/chunk-meds60nn.js";
var o = x(function(c) {
  Object.defineProperty(c, "__esModule", { value: true });
  c.getMachineId = void 0;
  var i = syn(), n = fl();
  async function u() {
    try {
      let t = (await i.execAsync('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout.split(`
`).find((d) => d.includes("IOPlatformUUID"));
      if (!t) return;
      let r = t.split('" = "');
      if (r.length === 2) return r[1].slice(0, -1);
    } catch (e) {
      n.diag.debug(`error reading machine id: ${e}`);
    }
    return;
  }
  c.getMachineId = u;
});
var stdin_default = o();
export {
  stdin_default as default
};
