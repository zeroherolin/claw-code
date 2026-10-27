// settings/chunk-842gkt0c.js — Claude Code 2.1.310 模块 chunk-842gkt0c.js
import { $Se, cEn, mir, gT } from "../shell/invalid-type.qnva.js";
import { Ro } from "./workflow-launch-exec.t4r2.js";
import { fee } from "../shared/environment.9a41.js";
import { BSn, Asi, pI, ue } from "./global-config-and-gates.27xj.js";
import { ln, mg, Zrt, fe, Xm } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { bAe } from "./chunk-rq620hy6.js";
import { pzo } from "./non-string-value.58dq.js";
import { RP, e8, pm } from "../core/conversation-engine.31gx.js";
function YEe() {
  let t = Xm(), i = e8.flatMap((e) => pm(e).errors.map((s) => s.file ? s : { ...s, file: RP(e) })), r = ue(), o = bAe.filter((e) => t.settings[e] === void 0 && r[e] !== pI[e] && Asi(e, r[e])).map((e) => ({ file: fee(), path: e, message: BSn(e) ? "Not a valid value for this setting, so it is ignored and the setting counts as off" : "Not a valid value for this setting, so it is ignored and the setting counts as unset", severity: "warning", suggestion: "Set it with /config, or delete the key from this file" })), n = Dho();
  return { settings: t.settings, errors: [...t.errors, ...i, ...o, ...n.ignored, ...n.turnedOff] };
}
var c = new Set(cEn);
function Dho() {
  let t = [], i = [], r = Ro();
  for (let o of r) {
    if (!$Se(o)) continue;
    if (o === "projectSettings" && r.includes("userSettings") && mg()) continue;
    let n = fe(o)?.env ?? {}, e = [], s = [];
    for (let a of Object.keys(n)) {
      let f = a.toUpperCase();
      if (!c.has(f)) continue;
      if (mir(a, n[a], pzo)) s.push(a);
      else e.push(a);
    }
    let l = ln(o), g = gT(o);
    if (e.length > 0) t.push({ file: l, path: "env", message: `Claude Code ignores these telemetry variables in ${g}: ${e.join(", ")}. A project's settings files can only turn telemetry off: set OTEL_LOGS_EXPORTER, OTEL_METRICS_EXPORTER, or OTEL_TRACES_EXPORTER to none, or a content variable such as OTEL_LOG_USER_PROMPTS to 0, with the name in upper case. That doesn't work for a variable that managed settings, a --settings file, or the environment you start Claude Code from already sets. If you set them on purpose, set them in your shell, your user settings (~/.claude/settings.json), or managed settings instead.`, severity: "warning", statusOnly: true });
    if (s.length > 0) i.push({ file: l, path: "env", message: `${g} turns telemetry off with these variables: ${s.join(", ")}. Claude Code uses these values unless managed settings or a --settings file sets the same variable. Your user settings don't override this file. To keep one on, set it in the environment you start Claude Code from, in a --settings file, or in managed settings.`, severity: "warning", statusOnly: true });
  }
  return { ignored: t, turnedOff: i };
}
function SZt() {
  return Zrt().filter((t) => !t.preserveOnWrite);
}
function Iut() {
  let t = ln("localSettings");
  return [...YEe().errors.filter((r) => !r.mcpErrorMetadata && r.severity !== "warning" && r.file !== t), ...SZt()];
}
export {
  Dho,
  Iut,
  SZt,
  YEe
};
