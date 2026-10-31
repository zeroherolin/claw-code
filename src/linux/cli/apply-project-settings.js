// linux/cli/apply-project-settings.js — Claude Code 2.1.310（linux）模块 chunk-fw8xqd84.js
import { OTn, Ers, Ars, Crs, xp, TC, Rrs, gXr, USe, EXr } from "../context/not-admin-owned.js";
import { d, E, G, $B } from "../telemetry/anthropic-workspace-id.js";
import { dl } from "../fs/node-modules.js";
import { mie } from "../models/claude-3-5-sonnet.js";
import { _, Po, Jse, uW, v9r, ie, t } from "../fs/gitlab-runner-authentication-token.js";
import { om, CI } from "../shell/invalid-type.js";
import { pn } from "../shared/cli-error.js";
import { nw, bS } from "./chunk-af2447be.js";
import { ot } from "../fs/chunk-86be9585.js";
import { EM } from "../remote/moved-directory.js";
import { go } from "../mcp/init-function-end.js";
import { Dr } from "../mcp/spawn-to-exec-ms.js";
import { gxe } from "../fs/tempdir-owner-mismatch.js";
import { er, D9o, Tf } from "../settings/workflow-launch-exec.js";
import { vQs } from "../shared/chunk-9f83026e.js";
import { H } from "../shared/chunk-7027e6d5.js";
import { Bse, SB } from "../fs/not-utf8.js";
var ohn = "apply-project-settings", wQs = "Review and accept settings changes for cloud sessions that use this computer";
function nzr(e = process.argv) {
  return e[2] === "apply-project-settings";
}
function U7n(e) {
  return _(e).replace(/[\u007f-\u009f]/g, (r) => "\\u" + r.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0"));
}
function vbi(e) {
  try {
    let r = e.trim(), i = r.startsWith("{") && r.endsWith("}"), a;
    if (i) {
      let o = ot(r);
      if (!o) return pn("Error: Invalid JSON provided to --settings");
      let s = U7n(o);
      a = gxe("claude-settings", ".json", { contentHash: s }), Ars(s);
    } else {
      let o = e, s = e, c;
      try {
        if (CI(e)) o = Po(ie(), e).resolvedPath, s = o;
        else {
          let n = uW(ie(), e);
          o = n.resolvedPath, s = l(n.linksResolvedPath ?? n.resolvedPath);
        }
        c = SB(o, om);
      } catch (n) {
        if (v9r(n)) return pn(`Error: Cannot use settings file ${e}: ${d(n)}`);
        if (G(n)) return pn(`Error: Settings file not found: ${o}`);
        if (E(n) === "ERR_FILE_TOO_LARGE") return pn(`Error: Settings file exceeds the ${om / 1048576}MiB limit: ${o}`);
        if (Bse(n) || $B(n)) return pn(`Error: Cannot use settings file (${d(n)}): ${o}`);
        throw n;
      }
      a = s, Crs(c);
    }
    Ers(a), er();
  } catch (r) {
    if (r instanceof Error) t(`Error processing --settings: ${d(r)}`, { level: "error" });
    return pn(`Error processing settings: ${d(r)}`);
  }
}
function Ebi(e) {
  let r = ot(e.trim(), false);
  if (!H(r)) {
    t("--managed-settings ignored: invalid JSON object", { level: "warn" }), gXr(true);
    return;
  }
  let { tier: i, organization: a, memberLost: o } = vQs(r);
  if (o) gXr(true);
  Rrs(i, a), er();
}
function g(e) {
  try {
    let r = D9o(e);
    EXr(r), er();
  } catch (r) {
    if (r instanceof Error) t(`Invalid --setting-sources flag: ${d(r)}`, { level: "error" });
    return pn(`Error processing --setting-sources: ${d(r)}`);
  }
}
function Dzo() {
  let e = performance.now();
  go("eagerLoadSettings_start");
  let r = nw("--settings");
  if (r) vbi(r);
  let i = nw("--managed-settings");
  if (i) Ebi(i);
  rzr(), f(), go("eagerLoadSettings_end"), Dr("settings_load_ms", performance.now() - e, e);
}
function f() {
  let e = nw("--fast-mode");
  if (e !== "on" && e !== "off") return;
  TC({ ...xp() ?? {}, fastMode: e === "on" }), er();
}
function rzr() {
  let e = nw("--setting-sources");
  if (e !== void 0) g(e);
  if (bS("--restricted") || mie()) g(""), OTn(true);
  if (EM()) g("");
  if (nzr()) EXr(USe().filter((r) => !Tf.has(r))), er();
}
function l(e) {
  if (dl(e)) return e;
  try {
    let r = Jse(ie(), e);
    return r.toLowerCase() === e.toLowerCase() ? r : e;
  } catch {
    return e;
  }
}
export {
  Dzo,
  Ebi,
  U7n,
  nzr,
  ohn,
  rzr,
  vbi,
  wQs
};
