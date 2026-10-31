// linux/shared/no-backup.js — Claude Code 2.1.310（linux）模块 chunk-6e3yxj2r.js
import { Vt } from "../telemetry/anthropic-workspace-id.js";
import { Re, ue } from "../settings/global-config-and-gates.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { it } from "../git/utf8-keep-bom.js";
import { stat as i } from "fs/promises";
import { homedir as s } from "os";
import { join as c } from "path";
async function u(e, a) {
  await Re((r) => ({ ...r, appleTerminalSetupInProgress: true, appleTerminalBackupPath: e }), a);
}
async function Y9t(e) {
  await Re((a) => ({ ...a, appleTerminalSetupInProgress: false }), e);
}
function p() {
  let e = ue();
  return { inProgress: e.appleTerminalSetupInProgress ?? false, backupPath: e.appleTerminalBackupPath || null };
}
function X9t() {
  return c(s(), "Library", "Preferences", "com.apple.Terminal.plist");
}
async function Kgs(e) {
  let a = X9t(), r = `${a}.bak`;
  try {
    let { code: n } = await it("defaults", ["export", "com.apple.Terminal", a]);
    if (n !== 0) return null;
    try {
      await i(a);
    } catch {
      return null;
    }
    return await it("defaults", ["export", "com.apple.Terminal", r]), await u(r, e), r;
  } catch (n) {
    if (Vt(n)) return t(`backupTerminalPreferences: fs inaccessible: ${n}`), null;
    return l(n), null;
  }
}
async function MMn(e) {
  let { inProgress: a, backupPath: r } = p();
  if (!a) return { status: "no_backup" };
  if (!r) return await Y9t(e), { status: "no_backup" };
  try {
    await i(r);
  } catch {
    return await Y9t(e), { status: "no_backup" };
  }
  let n = false;
  try {
    let { code: o } = await it("defaults", ["import", "com.apple.Terminal", r]);
    if (o !== 0) return { status: "failed", backupPath: r };
    return n = true, await it("killall", ["cfprefsd"]), await Y9t(e), { status: "restored" };
  } catch (o) {
    if (Vt(o)) t(`checkAndRestoreTerminalBackup: fs inaccessible: ${o}`);
    else l(o);
    return await Y9t(e), n ? { status: "restored" } : { status: "failed", backupPath: r };
  }
}
export {
  Kgs,
  MMn,
  X9t,
  Y9t
};
