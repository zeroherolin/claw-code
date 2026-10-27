// shared/no-backup.2bwq.js — Claude Code 2.1.310 模块 chunk-2bwqev9c.js
import { Kt } from "../telemetry/anthropic-workspace-id.36ys.js";
import { Re, ue } from "../settings/global-config-and-gates.27xj.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { st } from "../git/utf8-keep-bom.c49x.js";
import { stat as i } from "fs/promises";
import { homedir as s } from "os";
import { join as c } from "path";
async function u(e, a) {
  await Re((r) => ({ ...r, appleTerminalSetupInProgress: true, appleTerminalBackupPath: e }), a);
}
async function KYt(e) {
  await Re((a) => ({ ...a, appleTerminalSetupInProgress: false }), e);
}
function p() {
  let e = ue();
  return { inProgress: e.appleTerminalSetupInProgress ?? false, backupPath: e.appleTerminalBackupPath || null };
}
function qYt() {
  return c(s(), "Library", "Preferences", "com.apple.Terminal.plist");
}
async function ogs(e) {
  let a = qYt(), r = `${a}.bak`;
  try {
    let { code: n } = await st("defaults", ["export", "com.apple.Terminal", a]);
    if (n !== 0) return null;
    try {
      await i(a);
    } catch {
      return null;
    }
    return await st("defaults", ["export", "com.apple.Terminal", r]), await u(r, e), r;
  } catch (n) {
    if (Kt(n)) return t(`backupTerminalPreferences: fs inaccessible: ${n}`), null;
    return l(n), null;
  }
}
async function iMn(e) {
  let { inProgress: a, backupPath: r } = p();
  if (!a) return { status: "no_backup" };
  if (!r) return await KYt(e), { status: "no_backup" };
  try {
    await i(r);
  } catch {
    return await KYt(e), { status: "no_backup" };
  }
  let n = false;
  try {
    let { code: o } = await st("defaults", ["import", "com.apple.Terminal", r]);
    if (o !== 0) return { status: "failed", backupPath: r };
    return n = true, await st("killall", ["cfprefsd"]), await KYt(e), { status: "restored" };
  } catch (o) {
    if (Kt(o)) t(`checkAndRestoreTerminalBackup: fs inaccessible: ${o}`);
    else l(o);
    return await KYt(e), n ? { status: "restored" } : { status: "failed", backupPath: r };
  }
}
export {
  KYt,
  iMn,
  ogs,
  qYt
};
