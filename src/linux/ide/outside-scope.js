// linux/ide/outside-scope.js — Claude Code 2.1.310（linux）模块 chunk-3phmnq3h.js
import { ke, Ol, wW } from "../context/not-admin-owned.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { ae } from "../permissions/max-thinking-tokens.js";
import { c1o } from "../context/org-memory-writes-setting-changed.js";
import { ze } from "../shell/sandbox.js";
import { Qit, x5t, aCn } from "./bad-reported.js";
import { P8e } from "../shared/skill-directory-reload.js";
import { o, u, $e } from "../vendor/zod/string-format.js";
import { relative as f, sep as h } from "path";
var Fcr = "RegisterRepoRoot", w = 32, uQr = 4096, y = p(() => u({ directory: o().max(uQr) })), E = p(() => $e([u({ directory: o().min(1).max(4096) }), u({ refusal: o().min(1).max(64) })]));
async function Wis(s, R, l) {
  let { directory: c } = y().parse(s), m = l.toolUseContext(), { workspaceRoot: e = { kind: "absent" } } = l, r;
  try {
    r = await aCn(c, () => ({ ...ae(m), additionalWorkingDirectories: new Map(e.kind === "valid" ? [[e.root, { path: e.root, source: "cliArg" }]] : []) }), ke());
  } catch (i) {
    let a = Qit(i);
    if (a === void 0) throw i;
    if (a === "outside_scope") {
      let g = e.kind === "valid" ? "the folder is not below the workspace root" : e.kind === "invalid" ? `the workspace root is invalid: ${e.fault}` : "no workspace root";
      t(`${Fcr}: outside_scope: ${g}`, { level: "warn" });
    }
    return d(a);
  }
  if (e.kind === "valid" && !x5t(r, ke(), [], []).allowed && f(e.real, r).split(h).some((i) => i === "" || i.startsWith("."))) return t(`${Fcr}: outside_scope: the folder is not strictly below where the workspace root led at the daemon's start, or a folder on the way has a name that starts with a dot`, { level: "warn" }), d("outside_scope");
  R.throwIfAborted();
  let n = Ol();
  if (!n.includes(r)) {
    if (n.length >= w) return d("too_many");
    wW([...n, r]), c1o(r), ze.refreshConfig();
  }
  return await P8e(), { summary: "folder registered", output: { directory: r } };
}
function d(s) {
  return { summary: `folder not registered: ${s}`, output: { refusal: s } };
}
export {
  Fcr,
  Wis,
  uQr
};
