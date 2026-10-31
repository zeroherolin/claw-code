// settings/directory-added.erza.js — Claude Code 2.1.310 模块 chunk-erzafzny.js
import { F, tt, Ol, PW } from "../context/not-admin-owned.ersa.js";
import { In, Ua, LR, Vs } from "../fs/node-modules.gp4v.js";
import { Po, ie, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { I } from "../shared/chunk-j79dwkaq.js";
import { Qt } from "./workflow-launch-exec.t4r2.js";
import { ZNt, WT, HP, Q0r } from "../core/conversation-engine.31gx.js";
import { he } from "../terminal/xterm-ghostty.qrwz.js";
import { Jn, Ju, fQ, Py, Mu } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { ud } from "./built-in.5fzv.js";
import { ae } from "../permissions/max-thinking-tokens.hx3h.js";
import { ze } from "../shell/sandbox.aet2.js";
import { mr } from "../workflows/chunk-0c6r1zf7.js";
import { Khe } from "../tools/tool-result-persisted.9ecy.js";
import { NHo } from "../telemetry/bg-roster-parse-failed.yhsj.js";
import { H8e } from "../shared/skill-directory-reload.3crw.js";
import { randomUUID as k } from "crypto";
import { resolve as P } from "path";
function h(e, o) {
  let s = Ol();
  if (s.some((m) => In(P(m)) === o)) return false;
  return PW([...s, o]), WT(e), HP(e, "directory_added"), H8e(), true;
}
async function m$n(e, o, s) {
  let n = { type: "addDirectories", directories: [o], destination: s ? "localSettings" : "session" };
  e.setToolPermissionContext((i) => Ju(i, n)), h(e.session, o), ze.refreshConfig(), e.storageV5 ? Q0r(o, e.storageV5) : Q0r(o), NHo("--add-dir", o, e.storageV5);
  let d;
  if (s) try {
    await fQ(n, e.storageV5), d = `Added ${he.bold(o)} as a working directory and saved to local settings`;
  } catch (i) {
    d = `Added ${he.bold(o)} as a working directory. Failed to save to local settings: ${i instanceof Error ? i.message : "Unknown error"}`;
  }
  else d = `Added ${he.bold(o)} as a working directory for this session`;
  let u = k();
  return ZNt(e.session, o, "slash_command", { storageV5: e.storageV5, credentials: e.credentials }).then(async ({ results: i, systemMessages: l }) => {
    for (let r of i) if (!r.succeeded && r.output) t(`DirectoryAdded hook failed: ${r.output}`, { level: "error" });
    let a = F(i, (r) => !r.succeeded), g = [...await Promise.all(l.map((r, f) => Khe(r, `add-dir-${u}-${f}`, "systemMessage", { storageV5: e.storageV5 }).then((p) => `DirectoryAdded hook: ${p}`))), ...a > 0 ? [`${a} DirectoryAdded ${I(a, "hook")} failed; output is in the debug log, not shown here`] : []];
    if (g.length > 0) e.messageQueue.enqueuePendingNotification({ value: g.join(`
`), mode: "task-notification", skipAttachments: true, agentId: tt(), isMeta: true });
  }).catch((i) => {
    e.messageQueue.enqueuePendingNotification({ value: `DirectoryAdded hook execution failed: ${i instanceof Error ? i.message : String(i)}`, mode: "task-notification", skipAttachments: true, agentId: tt(), isMeta: true });
  }), d;
}
function RZt(e, o) {
  let s = ae(e);
  if (o.isExactMatch || !o.isOriginalCwd) return null;
  let m = ie(), { resolvedPath: n, isCanonical: d } = Po(m, o.absolutePath), { resolvedPath: u, isCanonical: i } = Po(m, o.workingDir), l = he.bold(Jn(o.directoryPath));
  if (!d || !i) {
    if ([o.absolutePath, o.workingDir].some((c) => Vs(c) || Ua(c) || LR(c))) return null;
    return `${l} couldn't be resolved to a real location, so its skills, commands, and agents weren't loaded. Check that it is a directory inside the working directory and try again.`;
  }
  if (!Py(o.absolutePath, { ...s, additionalWorkingDirectories: /* @__PURE__ */ new Map() }) || !Mu(n, u, { caseFold: false, skipPrivateAlias: true, uncShapeParity: true })) {
    let c = Jn(n);
    return n === o.absolutePath ? `${l} leads outside the working directory, so its skills, commands, and agents weren't loaded. Add that location with /add-dir to grant access to it.` : `${l} leads outside the working directory through a link (it resolves to ${he.bold(c)}), so its skills, commands, and agents weren't loaded. Run /add-dir ${c} to grant access to it.`;
  }
  if (n === u) return null;
  let a = `${l} is inside the current working directory ${he.bold(Jn(o.workingDir))}`, g = Qt("projectSettings"), r = g && !mr("skills", { explicitlyRequested: true }) && !ud("skills"), f = g && !mr("agents") && !ud("agents");
  if (!r && !f) return `${a}; skills, commands, and agents from additional directories are disabled in this session, so nothing was loaded.`;
  let p = r && f ? "skills, commands, and agents" : r ? "skills and commands" : "agents", y = h(e.session, o.absolutePath);
  if (y) ze.refreshConfig();
  return y ? `${a}; loading its ${p} for this session.` : `${a}; its ${p} are already included for this session.`;
}
export {
  RZt,
  m$n
};
