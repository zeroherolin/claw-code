// linux/commands/chunk-09697fb9.js — Claude Code 2.1.310（linux）模块 chunk-qj5tfadd.js
import { pu } from "../workflows/workflow-subagent.js";
import { Edo } from "../workflows/chunk-cdaba1e7.js";
import { jm } from "../workflows/managed-settings.js";
import { Wi } from "./skill-bundled-extract.js";
import { c0 } from "../git/artifact-capabilities.js";
function kbr() {
  return [{ type: "text", text: Edo() }];
}
function zki() {
  Wi({ name: c0, description: `Reference for writing a ${pu} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`, menuDescription: "Load the reference for writing Workflow tool scripts", userInvocable: true, isEnabled: () => jm(), async getPromptForCommand() {
    return kbr();
  } });
}
export {
  kbr,
  zki
};
