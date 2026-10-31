// linux/shared/chunk-26e3ef65.js — Claude Code 2.1.310（linux）模块 chunk-rntn87dm.js
import { N } from "../telemetry/anthropic-workspace-id.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { f3s } from "../plugins/not-found.js";
import { Ie } from "../plugins/chunk-c198f87f.js";
import { Ade } from "../plugins/chunk-238ac5cd.js";
import { pcn } from "../agents/api-system.js";
import { nye } from "../plugins/chunk-53f86049.js";
import { DS } from "./chunk-cc3dea5c.js";
function n() {
  try {
    return Ade() && pcn();
  } catch (r) {
    return l(N(r)), true;
  }
}
function yL(r) {
  try {
    let o = Ie(), e = o.hookRegistrationEpoch !== r.epoch || o.loadedModules !== r.modules;
    return r.wasUnknown || n() || e && nye() && pcn();
  } catch (o) {
    return l(N(o)), true;
  }
}
function r1() {
  let r = Ie();
  return { wasUnknown: n(), epoch: r.hookRegistrationEpoch, modules: r.loadedModules };
}
function c8e({ isRunReached: r }) {
  try {
    return n() || Ie().loadedModules.some((o) => !DS(o) && f3s(o.args.pluginStorageId) && (o.hooks("prompt.submit") || !r && o.hooks("command.run")));
  } catch (o) {
    return l(N(o)), true;
  }
}
export {
  c8e,
  r1,
  yL
};
