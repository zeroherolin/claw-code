// darwin/telemetry/chunk-df86191c.js — Claude Code 2.1.310（darwin）模块 chunk-9rmb8gm6.js
import { Fi, kn, k } from "../settings/global-config-and-gates.js";
function Dms() {
  try {
    let { value: e, source: n } = kn("tengu_radiant_heron", false);
    switch (n) {
      case "payload":
      case "override":
        return e === true;
      case "disabled":
        return false;
      case "fallback":
        return Fi() ? false : "unknown";
      case "disk":
        return "unknown";
    }
  } catch {
    return "unknown";
  }
}
function Lms() {
  return k("tengu_radiant_heron", false);
}
export {
  Dms,
  Lms
};
