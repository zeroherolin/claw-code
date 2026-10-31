// darwin/auth/teleport-org.js — Claude Code 2.1.310（darwin）模块 chunk-97jrm6f2.js
import { N, ui } from "../telemetry/anthropic-workspace-id.js";
import { Y } from "../shared/async-hooks.9e79.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Uu } from "../remote/local-agent.js";
import { Wt } from "../settings/global-config-and-gates.js";
import { XCe } from "../plugins/plugin-command-source-refresh.js";
import { k$r, $Vs, zVs, KVs, R$r, x$r, $J, G5n } from "../plugins/claudeai-plugins-sync-enabled.js";
import { eAs } from "../shared/none-yet.js";
import { writeFile as p } from "fs/promises";
var k = 3e4, iyo = 3e5, m = XCe, y = 16777216, c = "/api/oauth/organizations/:orgUUID/skills/list-skills?include_wiggle_skills=true";
function _(r) {
  return r ? `${c}&entrypoint=${encodeURIComponent(r)}` : c;
}
var f = "&wrapped_skills_as_plugins=true";
async function AZt(r = {}) {
  let s = await d(r);
  if (!s.success && $J(s)) return d(r);
  return s;
}
async function d(r) {
  try {
    let s = `${_(Uu())}${r.convertedSkillsAsPlugins === true ? f : ""}`, e = await Wt.get(s, { auth: "teleport-org", isBackground: r.isBackground, timeout: k, maxContentLength: y, credentials: r.credentials, earlyAnswer: r.earlyAnswer });
    if (!e.ok || !Array.isArray(e.data?.skills)) return R$r("skills", e);
    let n = e.data.skills.filter(KVs), a = n.map(zVs);
    try {
      eAs(n);
    } catch (t) {
      Y("warn", "skills_sync_ownerships_not_recorded"), l(N(t));
    }
    try {
      $Vs(n);
    } catch (t) {
      Y("warn", "skills_sync_host_mount_kinds_not_recorded"), l(N(t));
    }
    return { success: true, skills: a };
  } catch (s) {
    return x$r(s);
  }
}
async function ZTs(r, s, e, n = {}) {
  let a = Uu(), t = [];
  if (a) t.push(`entrypoint=${encodeURIComponent(a)}`);
  if (e) t.push(`version=${encodeURIComponent(e)}`);
  let u = t.length > 0 ? `?${t.join("&")}` : "";
  try {
    let o = await Wt.get(`/api/oauth/organizations/:orgUUID/skills/${encodeURIComponent(r)}/download${u}`, { auth: "teleport-org", isBackground: n.isBackground, timeout: iyo, responseType: "arraybuffer", maxContentLength: m, credentials: n.credentials });
    if (!o.ok || !o.data) return Y("warn", "skills_sync_download_not_ok", { reason: o.ok ? "empty_body" : o.reason }), false;
    let i = Buffer.from(o.data);
    if (!k$r(i)) return Y("warn", "skills_sync_download_not_zip", { serverError: G5n(i), bodyLen: i.length }), false;
    return await p(s, i), true;
  } catch (o) {
    let { kind: i } = ui(o);
    return Y("warn", "skills_sync_download_exception", { kind: i }), false;
  }
}
export {
  AZt,
  ZTs,
  iyo
};
