// linux/telemetry/chunk-df86191c.js — Claude Code 2.1.310（linux）模块 chunk-5gx8aqe4.js
import { $i, kn, k } from "../settings/global-config-and-gates.js";
function _ms() {
  try {
    let { value: e, source: n } = kn("tengu_radiant_heron", false);
    switch (n) {
      case "payload":
      case "override":
        return e === true;
      case "disabled":
        return false;
      case "fallback":
        return $i() ? false : "unknown";
      case "disk":
        return "unknown";
    }
  } catch {
    return "unknown";
  }
}
function bms() {
  return k("tengu_radiant_heron", false);
}
export {
  _ms,
  bms
};
