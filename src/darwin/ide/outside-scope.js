// darwin/ide/outside-scope.js — Claude Code 2.1.310（darwin）模块 chunk-02s0px69.js
import { ke, Ol, PW } from "../context/not-admin-owned.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { ae } from "../permissions/max-thinking-tokens.js";
import { $Bo } from "../context/org-memory-writes-setting-changed.js";
import { ze } from "../shell/sandbox.js";
import { rat, j4t, vAn } from "./bad-reported.js";
import { H8e } from "../shared/skill-directory-reload.js";
import { o, u, Fe } from "../vendor/zod/string-format.js";
import { relative as g, sep as h } from "path";
var dur = "RegisterRepoRoot", w = 32, BJr = 4096, y = f(() => u({ directory: o().max(BJr) })), E = f(() => Fe([u({ directory: o().min(1).max(4096) }), u({ refusal: o().min(1).max(64) })]));
async function Tas(s, l, d) {
  let { directory: R } = y().parse(s), c = d.toolUseContext(), { workspaceRoot: e = { kind: "absent" } } = d, r;
  try {
    r = await vAn(R, () => ({ ...ae(c), additionalWorkingDirectories: new Map(e.kind === "valid" ? [[e.root, { path: e.root, source: "cliArg" }]] : []) }), ke());
  } catch (i) {
    let a = rat(i);
    if (a === void 0) throw i;
    if (a === "outside_scope") {
      let m = e.kind === "valid" ? "the folder is not below the workspace root" : e.kind === "invalid" ? `the workspace root is invalid: ${e.fault}` : "no workspace root";
      t(`${dur}: outside_scope: ${m}`, { level: "warn" });
    }
    return p(a);
  }
  if (e.kind === "valid" && !j4t(r, ke(), [], []).allowed && g(e.real, r).split(h).some((i) => i === "" || i.startsWith("."))) return t(`${dur}: outside_scope: the folder is not strictly below where the workspace root led at the daemon's start, or a folder on the way has a name that starts with a dot`, { level: "warn" }), p("outside_scope");
  l.throwIfAborted();
  let n = Ol();
  if (!n.includes(r)) {
    if (n.length >= w) return p("too_many");
    PW([...n, r]), $Bo(r), ze.refreshConfig();
  }
  return await H8e(), { summary: "folder registered", output: { directory: r } };
}
function p(s) {
  return { summary: `folder not registered: ${s}`, output: { refusal: s } };
}
export {
  BJr,
  Tas,
  dur
};
