// darwin/telemetry/cc-plugin-responsive-mode.js — Claude Code 2.1.310（darwin）模块 chunk-veeqh5j3.js
import { aDo } from "./tool-result.js";
import { N } from "./anthropic-workspace-id.js";
import { Wn } from "../settings/global-config-and-gates.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { qlr, o$ } from "../remote/local-agent.js";
import { Syt } from "../shared/chunk-ec79692e.js";
function $Hn(e) {
  let o = e.trim();
  return o !== "" && !o.startsWith("/");
}
var eco = () => false;
var tco = () => o$() && !qlr() && Wn("tengu_quiet_ember", eco());
var UHn = { name: "cc-plugin-responsive-mode", description: "Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt", isAvailable: tco, defaultEnabled: false };
function VSr({ text: e, pastedContents: o, isSentByPerson: t, wait: r }) {
  if (!t || r || !$Hn(e)) return false;
  try {
    return aDo(e, o).length === 0 && Syt(UHn.name);
  } catch (i) {
    return l(N(i)), false;
  }
}
export {
  $Hn,
  UHn,
  VSr,
  eco,
  tco
};
