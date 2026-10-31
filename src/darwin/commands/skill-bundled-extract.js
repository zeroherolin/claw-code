// darwin/commands/skill-bundled-extract.js — Claude Code 2.1.310（darwin）模块 chunk-zw7phs3y.js
import { v } from "../telemetry/anthropic-workspace-id.js";
import { br } from "../workflows/chunk-a1595c7e.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { rWt } from "../context/org-memory-writes-setting-changed.js";
import { cLe, ptr, ftr } from "../shared/chunk-9a4e91c3.js";
import { v4, pVe, $V } from "../shared/allow-bundled-skills.js";
import { join as E, posix as O } from "path";
import { constants as c } from "fs";
import { lstat as x, mkdir as w, open as y } from "fs/promises";
import C, { dirname as F } from "path";
var h = c.O_NOFOLLOW ?? 0, T = c.O_WRONLY | c.O_CREAT | c.O_EXCL | h;
async function B(e, o, n = 384) {
  let r = await y(e, T, n);
  try {
    if (n !== 384) await r.chmod(n);
    await r.writeFile(o, "utf8");
  } finally {
    await r.close();
  }
}
function P(e, o, n = C) {
  let r = n.normalize(o);
  if (n.isAbsolute(r) || r.split(n.sep).includes("..") || r.split("/").includes("..")) throw Error("bundled file path escapes its extraction dir");
  return n.join(e, r);
}
async function cBr(e, o, n) {
  let r = /* @__PURE__ */ new Map();
  for (let [l, p] of Object.entries(o)) {
    let a = P(e, l), d = F(a), u = [a, p, n?.mode?.(l) ?? 384], i = r.get(d);
    if (i) i.push(u);
    else r.set(d, [u]);
  }
  await Promise.all([...r].map(async ([l, p]) => {
    await w(l, { recursive: true, mode: 448 }), await Promise.all(p.map(([a, d, u]) => B(a, d, u).catch((i) => {
      if (n?.tolerateExisting && v(i) === "EEXIST") {
        if (n.tolerateExisting !== "verify-content") return x(a).then((s) => {
          if (!s.isFile()) throw i;
        });
        return y(a, c.O_RDONLY | h | (c.O_NONBLOCK ?? 0)).then((s) => s.stat().then((b) => {
          if (!b.isFile()) throw i;
          return s.readFile({ encoding: "utf8" });
        }).finally(() => s.close())).then((s) => {
          if (s !== d) throw i;
        });
      }
      throw i;
    })));
  }));
}
function Zpn(e) {
  br().bundledSkillSessionResetHooks.push(e);
}
function jZe() {
  for (let e of br().bundledSkillSessionResetHooks) try {
    e();
  } catch (o) {
    t(`[skills] session-reset hook failed: ${o instanceof Error ? o.message : String(o)}`);
  }
}
function ebi(e) {
  let { files: o } = e, n = typeof o === "function";
  if (!o || !n && Object.keys(o).length === 0) return { skillRoot: void 0, getPromptForCommand: e.getPromptForCommand };
  let r, l, p = e.getPromptForCommand, a = async (d, u) => {
    l ??= (async () => {
      let k = r ?? (n ? await o(u) : o);
      if (Object.keys(k).length > 0) r = k;
      return R(e.name, k);
    })();
    let i = l, f;
    try {
      f = await i;
    } catch (k) {
      if (l === i) l = void 0, r = void 0;
      throw k;
    }
    if (l === i) l = void 0;
    let s = await p(d, u, f);
    if (f === null) return s;
    let b = `Base directory for this skill: ${f}

`;
    if (s.length > 0 && s[0].type === "text") return [{ type: "text", text: b + s[0].text }, ...s.slice(1)];
    return [{ type: "text", text: b }, ...s];
  };
  return { skillRoot: WZe(e.name), getPromptForCommand: a };
}
function Wi(e) {
  let { skillRoot: o, getPromptForCommand: n } = ebi(e), r = { type: "prompt", name: e.name, description: typeof e.description === "function" ? "" : e.description, menuDescription: typeof e.menuDescription === "function" ? void 0 : e.menuDescription, aliases: e.aliases, subcommands: e.subcommands, subcommandsBareOnly: e.subcommandsBareOnly, hasUserSpecifiedDescription: true, allowedTools: e.allowedTools ?? [], getAllowedTools: e.getAllowedTools, disallowedTools: e.disallowedTools ?? [], argumentHint: typeof e.argumentHint === "function" ? void 0 : e.argumentHint, whenToUse: typeof e.whenToUse === "function" ? void 0 : e.whenToUse, model: e.model, disableModelInvocation: typeof e.disableModelInvocation === "function" ? true : e.disableModelInvocation ?? false, disableBridgeInvocation: e.disableBridgeInvocation, userInvocable: e.userInvocable ?? true, terminalOriented: e.terminalOriented, argsMayContainSlashCommands: e.argsMayContainSlashCommands, contentLength: 0, source: "bundled", loadedFrom: "bundled", hooks: e.hooks, skillRoot: o, context: e.context, getContext: e.getContext, agent: e.agent, background: e.background, formatForegroundForkResult: e.formatForegroundForkResult, isEnabled: e.isEnabled, policyGate: typeof e.policyGate === "function" ? void 0 : e.policyGate, requires: e.requires, isHidden: !(e.userInvocable ?? true), progressMessage: e.progressMessage ?? "running", getPromptForCommand: n, getEffort: e.getEffort, getDefaultEffort: e.getDefaultEffort, onUserTypedArgs: e.onUserTypedArgs, getArgumentCompletions: e.getArgumentCompletions, enterTakesArgumentCompletion: e.enterTakesArgumentCompletion };
  cLe(r, "description", e.description), cLe(r, "menuDescription", e.menuDescription), cLe(r, "argumentHint", e.argumentHint), cLe(r, "whenToUse", e.whenToUse), ptr(r, "disableModelInvocation", e.disableModelInvocation), ftr(r, e.policyGate);
  let l = br();
  if (e.survivesBundledKillSwitch) l.bundledSkillKillSwitchSurvivors.add(r);
  l.bundledSkills.push(r);
}
function oQ() {
  let e = br();
  if (v4()) return e.bundledSkills.filter((o) => e.bundledSkillKillSwitchSurvivors.has(o));
  if (pVe()) return e.bundledSkills.filter((o) => e.bundledSkillKillSwitchSurvivors.has(o) || !$V(o.name));
  return [...e.bundledSkills];
}
function fjt(e) {
  if (e.type !== "prompt" || e.source !== "bundled") return false;
  for (let o of br().bundledSkillKillSwitchSurvivors) if (o === e || o.name === e.name) return false;
  return $V(e.name);
}
function efn() {
  return [...br().bundledSkills];
}
function WZe(e) {
  let o = br().bundledSkillFilesElsewhere;
  return o ? O.join(o.root, e) : E(rWt(), e);
}
async function R(e, o) {
  if (Object.keys(o).length === 0) return null;
  let n = WZe(e);
  try {
    return await S(n, o, "verify-content"), g("skill_bundled_extract"), n;
  } catch (r) {
    return t(`Failed to extract bundled skill '${e}' to ${n}: ${r instanceof Error ? r.message : String(r)}`), m("skill_bundled_extract", "skill_bundled_extract_write_failed"), null;
  }
}
async function uBr(e, o) {
  if (Object.keys(o).length === 0) return null;
  let n = WZe(e);
  try {
    return await S(n, o, true), n;
  } catch (r) {
    return t(`Failed to extract additional skill files for '${e}' to ${n}: ${r instanceof Error ? r.message : String(r)}`), null;
  }
}
function S(e, o, n) {
  let r = br().bundledSkillFilesElsewhere;
  return r ? r.write(e, o) : cBr(e, o, { tolerateExisting: n });
}
export {
  WZe,
  Wi,
  Zpn,
  cBr,
  ebi,
  efn,
  fjt,
  jZe,
  oQ,
  uBr
};
