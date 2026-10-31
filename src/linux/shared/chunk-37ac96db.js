// linux/shared/chunk-37ac96db.js — Claude Code 2.1.310（linux）模块 chunk-p5eyfpv9.js
import { Bhn } from "../shell/chunk-8cf0a5b0.js";
import { fl } from "../mcp/allowed-warning.js";
import { x, Fe } from "../vendor/react/chunk-0b0bf45d.js";
var d = x(function(s) {
  Object.defineProperty(s, "__esModule", { value: true });
  s.getMachineId = void 0;
  var e = Fe("process"), n = Bhn(), c = fl();
  async function o() {
    let t = "%windir%\\System32\\REG.exe";
    if (e.arch === "ia32" && "PROCESSOR_ARCHITEW6432" in e.env) t = "%windir%\\sysnative\\cmd.exe /c " + t;
    try {
      let i = (await n.execAsync(`${t} QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid`)).stdout.split("REG_SZ");
      if (i.length === 2) return i[1].trim();
    } catch (r) {
      c.diag.debug(`error reading machine id: ${r}`);
    }
    return;
  }
  s.getMachineId = o;
});
var stdin_default = d();
export {
  stdin_default as default
};
