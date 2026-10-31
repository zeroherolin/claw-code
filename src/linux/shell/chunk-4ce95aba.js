// linux/shell/chunk-4ce95aba.js — Claude Code 2.1.310（linux）模块 chunk-87kxx1c2.js
import { Cn } from "../fs/gitlab-runner-authentication-token.js";
import { at } from "../mcp/allowed-warning.js";
import { VL, ze } from "./sandbox.js";
import { qe } from "../shared/allow-large.js";
import { stripVTControlCharacters as i } from "util";
function XHt(t, e = 3) {
  let r = t.map((s) => Cn(i(s)).trim()), o = r.slice(0, e).join(", "), n = r.length - e;
  return n > 0 ? `${o} (${n} more)` : o;
}
function TCr(t = Number.POSITIVE_INFINITY) {
  try {
    if (!ze.isSandboxingEnabled()) return;
    let e = ze.getDeniesDroppedForAnotherHost();
    if (e.length === 0) return;
    let r = `The sandbox would contact that computer before each command, so it leaves these entries out. An entry that the list calls a ${qe} rule or an ${at} rule still applies to the file tools. To have the sandbox block the paths, start Claude Code in a folder on that computer.`;
    return { issue: `Sandbox deny paths on another computer are not enforced, so sandboxed commands are not blocked from them: ${XHt(e, t)}`, fix: e.some((o) => o.endsWith(" from policySettings")) ? `${r} If an administrator manages the entries from policySettings, tell them that the sandbox does not enforce these.` : r };
  } catch (e) {
    VL(e, "deniesOnAnotherHostNotDescribed");
    return;
  }
}
function gvo() {
  let t = TCr(3);
  if (t) process.stderr.write(`
⚠ ${t.issue}
  ${t.fix} \`claude doctor\` lists every entry.

`);
}
export {
  TCr,
  XHt,
  gvo
};
