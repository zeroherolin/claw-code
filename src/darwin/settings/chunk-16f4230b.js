// darwin/settings/chunk-16f4230b.js — Claude Code 2.1.310（darwin）模块 chunk-x289pnbh.js
import { wn } from "../context/not-admin-owned.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { rW } from "../shell/invalid-type.js";
import { Ipe, Bn, dn } from "../mcp/chunk-0e2a1db6.js";
import { at } from "../mcp/allowed-warning.js";
import { Cx, UBo, NTe } from "../context/org-memory-writes-setting-changed.js";
import { Wv } from "../shell/chunk-fc32a44c.js";
import { aj } from "../permissions/bot-protected-tengu-atomic-magpie.js";
import { kas } from "../shell/not-serialized.js";
import { qe } from "../shared/allow-large.js";
function jz(e, o, n, s) {
  let r = kas(e);
  for (let [i, { source: l }] of r.additionalWorkingDirectories) if (l !== "cliArg") UBo(i);
  return { ...r, ...LJr(r, o, n, s, "native") };
}
function LJr(e, o, n, s, r) {
  let i = (u) => Object.fromEntries(aj.map((m) => [m, [...f(e[u][m] ?? [], m, u === "alwaysDenyRules" ? "deny" : "ask", s), ...(o[u][m] ?? []).filter((a) => {
    if (!rW.test(a)) return true;
    return t(`Ignoring the launch ${u === "alwaysDenyRules" ? "deny" : "ask"} rule "${a}" (from CLAUDE_CODE_MCP_SERVE_SETTINGS, or for ReadFileForRemote and ListDirectoryForRemote a settings file here): a rule starting with "!" removes paths from the rules listed before it instead of restricting anything, and here those include the calling session's own rules. Spell the rule without the exception instead.`, { level: "warn" }), false;
  }).flatMap((a) => [a, ...d(a, n)])]])), l = { alwaysDenyRules: i("alwaysDenyRules"), alwaysAskRules: i("alwaysAskRules") };
  return s === void 0 ? l : p(l, r);
}
function p(e, o) {
  let { composedRepoRules: n } = Wv(), s = n[o];
  if (s !== void 0 && wn(s, e)) return s;
  let r = { alwaysDenyRules: R(e.alwaysDenyRules), alwaysAskRules: R(e.alwaysAskRules) };
  return n[o] = r, r;
}
function R(e) {
  return Object.values(e).forEach((o) => Object.freeze(o)), Object.freeze(e);
}
function f(e, o, n, s) {
  if (s === void 0 || o !== "projectSettings" && o !== "localSettings") return e;
  return [...s[o][n], ...e.filter((r) => !rW.test(r))];
}
function d(e, o) {
  let { toolName: n, ruleContent: s } = Bn(e);
  if (s === void 0 || n !== qe && n !== at) return [];
  let { relativePattern: r, root: i } = NTe(s, o);
  if (i !== null) return [];
  return [dn({ toolName: n, ruleContent: `/${Ipe(`${Cx(o)}/`, { escapeGlobs: true })}**/${r}` })];
}
export {
  LJr,
  jz
};
