// linux/shared/chunk-d2d8af65.js — Claude Code 2.1.310（linux）模块 chunk-2kejgqna.js
import { E, Vt } from "../telemetry/anthropic-workspace-id.js";
import { zs } from "../fs/node-modules.js";
import { ke, ci, wX } from "../context/not-admin-owned.js";
import { _, xxe } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { he } from "../terminal/xterm-ghostty.js";
import { Fse, ut } from "../shell/chunk-8eebd6c6.js";
import { pv, mXn, Iu } from "../context/org-memory-writes-setting-changed.js";
import { stat as c } from "fs/promises";
import { dirname as d, resolve as a } from "path";
async function Yve(t, r) {
  if (!t) return { resultType: "emptyPath" };
  if (ci() === null) return { resultType: "invalidPath", directoryPath: t, containsNullByte: false };
  let e;
  try {
    e = a(ut(t));
  } catch (o) {
    let i = o instanceof Fse;
    if (!i) l(Error("validateDirectoryForWorkspace: expandPath threw"));
    return { resultType: "invalidPath", directoryPath: t, containsNullByte: i };
  }
  if (zs(t) || await xxe(e, wX())) return { resultType: "networkPath", directoryPath: t, absolutePath: e };
  try {
    if (!(await c(e)).isDirectory()) return { resultType: "notADirectory", directoryPath: t, absolutePath: e };
  } catch (o) {
    if (!Vt(o)) l(Object.assign(Error("validateDirectoryForWorkspace: unexpected stat errno"), { code: E(o) }));
    return { resultType: "pathNotFound", directoryPath: t, absolutePath: e };
  }
  let n = r.blockReadsOutsideWorkingDirectories ? mXn(r) : pv(r), s = ke();
  for (let o of n) if (Iu(e, o, { caseFold: false })) return { resultType: "alreadyInWorkingDirectory", directoryPath: t, absolutePath: e, workingDir: o, isExactMatch: a(o) === e, isOriginalCwd: o === s };
  return { resultType: "success", absolutePath: e };
}
function Xve(t) {
  switch (t.resultType) {
    case "emptyPath":
      return "Please provide a directory path.";
    case "invalidPath": {
      let r = he.bold(_(t.directoryPath));
      return t.containsNullByte ? `Path ${r} contains a null character, so it can't be used as a working directory. Remove the null character from the path or from the settings entry that lists it.` : `Path ${r} couldn't be resolved, so it can't be used as a working directory. Check the path or the settings entry that lists it.`;
    }
    case "pathNotFound":
      return `Path ${he.bold(t.absolutePath)} was not found.`;
    case "networkPath":
      return `${he.bold(t.directoryPath)} is a network path, which cannot be added as a working directory. On Windows, map the share to a drive letter and pass it at launch with --add-dir (a drive letter added mid-session does not yet carry remote-read trust).`;
    case "notADirectory": {
      let r = d(t.absolutePath);
      return `${he.bold(t.directoryPath)} is not a directory. Did you mean to add the parent directory ${he.bold(r)}?`;
    }
    case "alreadyInWorkingDirectory": {
      let r = he.bold(t.directoryPath);
      if (t.isExactMatch) return t.isOriginalCwd ? `${r} is already the current working directory.` : `${r} is already added as a working directory.`;
      let e = t.isOriginalCwd ? "the current working directory" : "the additional working directory";
      return `${r} is already accessible within ${e} ${he.bold(t.workingDir)}.`;
    }
    case "success":
      return `Added ${he.bold(t.absolutePath)} as a working directory.`;
  }
}
export {
  Xve,
  Yve
};
