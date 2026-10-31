// darwin/commands/chunk-09697fb9.js — Claude Code 2.1.310（darwin）模块 chunk-b5m94tr0.js
import { mu } from "../workflows/workflow-subagent.js";
import { Udo } from "../workflows/chunk-cdaba1e7.js";
import { jm } from "../workflows/managed-settings.js";
import { Wi } from "./skill-bundled-extract.js";
import { fL } from "../git/artifact-capabilities.js";
function $Sr() {
  return [{ type: "text", text: Udo() }];
}
function xCi() {
  Wi({ name: fL, description: `Reference for writing a ${mu} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`, menuDescription: "Load the reference for writing Workflow tool scripts", userInvocable: true, isEnabled: () => jm(), async getPromptForCommand() {
    return $Sr();
  } });
}
export {
  $Sr,
  xCi
};
