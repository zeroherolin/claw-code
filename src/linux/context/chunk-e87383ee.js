// linux/context/chunk-e87383ee.js — Claude Code 2.1.310（linux）模块 chunk-dvdbvf5k.js
import { Tz, Az, i_, dh, cg, Hx } from "../settings/global-config-and-gates.js";
function n() {
  let e = i_();
  if (e === "opus" && Tz() && !Hx(dh())) return { alias: "opus[1m]", name: "Opus 1M", multiplier: 5 };
  else if (e === "sonnet" && Az() && !Hx(cg())) return { alias: "sonnet[1m]", name: "Sonnet 1M", multiplier: 5 };
  return null;
}
function dve(e) {
  let t = n();
  if (!t) return null;
  switch (e) {
    case "warning":
      return `/model ${t.alias}`;
    case "tip":
      return `Tip: You have access to ${t.name} with ${t.multiplier}x more context`;
    default:
      return null;
  }
}
var EJt = "No messages to compact", MHn = "Compaction failed · conversation could not be reduced below the context limit", DHn = "Compaction failed · attached media exceeds size limits", kJt = "Error during compaction: ";
export {
  DHn,
  EJt,
  MHn,
  dve,
  kJt
};
