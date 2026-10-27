// telemetry/local-agent.vzb5.js — Claude Code 2.1.310 模块 chunk-vzb52q3s.js
import { br } from "../workflows/chunk-exaq0a52.js";
import { i } from "../shared/environment.9a41.js";
import { Abe, ay } from "../remote/local-agent.we9a.js";
import { D_e } from "../commands/claude-code.vy1w.js";
function nme() {
  let r = br();
  if (r.builtinPluginsInitialized) return;
  if (r.builtinPluginsInitialized = true, D_e("cc-plugin-sec-default", () => import.meta.require("../plugins/admission-policy.ma2p.js")), D_e("cc-plugin-agents-md", () => import.meta.require("../plugins/is-available.3xgz.js")), D_e("cc-plugin-telemetry", () => import.meta.require("../plugins/is-available.kxrq.js")), i.CLAUDE_CODE_ENTRYPOINT !== "local-agent") {
    if (D_e("cc-plugin-plugin-authoring", () => import.meta.require("../skills/is-available.pcbw.js")), D_e("cc-plugin-mods-guide", () => import.meta.require("../plugins/availability-flag.xsm1.js")), !Abe()) D_e("cc-plugin-tips", () => import.meta.require("../plugins/host-module-of.fsrd.js")), D_e("cc-plugin-mermaid", () => import.meta.require("../plugins/is-available.fs2t.js"));
  }
  let e = i.CLAUDE_CODE_ENTRYPOINT !== "local-agent" && !Abe();
  if (e || ay() === "remote") D_e("cc-plugin-responsive-mode", () => import.meta.require("../plugins/cuts-the-turn.m0pz.js"));
  if (e) D_e("cc-plugin-diff", () => import.meta.require("../plugins/availability-flag.0zg1.js"));
  if (i.CLAUDE_CODE_ENTRYPOINT !== "local-agent") D_e("cc-plugin-you-should-know", () => import.meta.require("../ui/about-card.wdd9.js"));
  if (e) D_e("cc-plugin-easel", () => import.meta.require("../plugins/availability-flag.3f0r.js"));
  if (e) D_e("cc-plugin-claude-test", () => import.meta.require("../auth/are-own-agents-listed.frgr.js"));
}
export {
  nme
};
