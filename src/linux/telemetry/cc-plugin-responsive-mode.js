// linux/telemetry/cc-plugin-responsive-mode.js — Claude Code 2.1.310（linux）模块 chunk-c67tg2y4.js
import { MHo } from "./tool-result.js";
import { N } from "./anthropic-workspace-id.js";
import { Wn } from "../settings/global-config-and-gates.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Olr, eF } from "../remote/local-agent.js";
import { pyt } from "../shared/chunk-ec79692e.js";
function dHn(e) {
  let o = e.trim();
  return o !== "" && !o.startsWith("/");
}
var Cdo = () => false;
var Rdo = () => eF() && !Olr() && Wn("tengu_quiet_ember", Cdo());
var cHn = { name: "cc-plugin-responsive-mode", description: "Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt", isAvailable: Rdo, defaultEnabled: false };
function Rbr({ text: e, pastedContents: o, isSentByPerson: t, wait: r }) {
  if (!t || r || !dHn(e)) return false;
  try {
    return MHo(e, o).length === 0 && pyt(cHn.name);
  } catch (i) {
    return l(N(i)), false;
  }
}
export {
  Cdo,
  Rbr,
  Rdo,
  cHn,
  dHn
};
