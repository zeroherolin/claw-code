// linux/fs/chunk-9b7a3f1c.js — Claude Code 2.1.310（linux）模块 chunk-va73d26h.js
import { Llr } from "../remote/remote-cowork-trigger.js";
import { jAt } from "../shared/chunk-69487f54.js";
import { Fe } from "../vendor/react/chunk-0b0bf45d.js";
import { ve } from "../shared/chunk-fee3c428.js";
var Osr = "HKLM\\SOFTWARE\\Policies\\ClaudeCode", Msr = "HKCU\\SOFTWARE\\Policies\\ClaudeCode", Nwn = "Settings";
var uli = 5e3, L9o = 2097152, Bqe = "/mnt/c/Windows/System32/reg.exe", EI = "/mnt/c/Program Files/ClaudeCode", o = ve({ isCoworkCloud: void 0 }, (e) => {
  e.isCoworkCloud = void 0;
});
function rqt() {
  if (o.isCoworkCloud === void 0) {
    let e = process.env.CLAUDE_CODE_ENTRYPOINT;
    o.isCoworkCloud = Llr.some((r) => r === e);
  }
  return o.isCoworkCloud;
}
function fli() {
  o.isCoworkCloud = void 0, rqt();
}
function oqt() {
  let e = rqt();
  if (process.env.WSL_DISTRO_NAME && !e) return true;
  try {
    let r = Fe("fs").readFileSync("/proc/version", "utf8").toLowerCase();
    return jAt(r);
  } catch {
    return false;
  }
}
export {
  Bqe,
  EI,
  L9o,
  Msr,
  Nwn,
  Osr,
  fli,
  oqt,
  rqt,
  uli
};
