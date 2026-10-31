// darwin/telemetry/local-agent.js — Claude Code 2.1.310（darwin）模块 chunk-vzb52q3s.js
import { br } from "../workflows/chunk-a1595c7e.js";
import { i } from "../shared/environment.js";
import { Abe, ay } from "../remote/local-agent.js";
import { D_e } from "../commands/claude-code.js";
function nme() {
  let r = br();
  if (r.builtinPluginsInitialized) return;
  if (r.builtinPluginsInitialized = true, D_e("cc-plugin-sec-default", () => import.meta.require("../plugins/admission-policy.js")), D_e("cc-plugin-agents-md", () => import.meta.require("../plugins/is-available.2348.js")), D_e("cc-plugin-telemetry", () => import.meta.require("../plugins/is-available.2f65.js")), i.CLAUDE_CODE_ENTRYPOINT !== "local-agent") {
    if (D_e("cc-plugin-plugin-authoring", () => import.meta.require("../skills/is-available.js")), D_e("cc-plugin-mods-guide", () => import.meta.require("../plugins/availability-flag.3128.js")), !Abe()) D_e("cc-plugin-tips", () => import.meta.require("../plugins/host-module-of.js")), D_e("cc-plugin-mermaid", () => import.meta.require("../plugins/is-available.f0ac.js"));
  }
  let e = i.CLAUDE_CODE_ENTRYPOINT !== "local-agent" && !Abe();
  if (e || ay() === "remote") D_e("cc-plugin-responsive-mode", () => import.meta.require("../plugins/cuts-the-turn.js"));
  if (e) D_e("cc-plugin-diff", () => import.meta.require("../plugins/availability-flag.7b04.js"));
  if (i.CLAUDE_CODE_ENTRYPOINT !== "local-agent") D_e("cc-plugin-you-should-know", () => import.meta.require("../ui/about-card.js"));
  if (e) D_e("cc-plugin-easel", () => import.meta.require("../plugins/availability-flag.8db9.js"));
  if (e) D_e("cc-plugin-claude-test", () => import.meta.require("../auth/are-own-agents-listed.js"));
}
export {
  nme
};
