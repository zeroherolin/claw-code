// darwin/shared/chunk-26e3ef65.js — Claude Code 2.1.310（darwin）模块 chunk-nkqr6bsw.js
import { N } from "../telemetry/anthropic-workspace-id.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { X9s } from "../plugins/not-found.js";
import { Ie } from "../plugins/chunk-c198f87f.js";
import { Dde } from "../plugins/chunk-238ac5cd.js";
import { Rcn } from "../agents/api-system.js";
import { aye } from "../plugins/chunk-53f86049.js";
import { Db } from "./chunk-cc3dea5c.js";
function n() {
  try {
    return Dde() && Rcn();
  } catch (r) {
    return l(N(r)), true;
  }
}
function bD(r) {
  try {
    let o = Ie(), e = o.hookRegistrationEpoch !== r.epoch || o.loadedModules !== r.modules;
    return r.wasUnknown || n() || e && aye() && Rcn();
  } catch (o) {
    return l(N(o)), true;
  }
}
function dB() {
  let r = Ie();
  return { wasUnknown: n(), epoch: r.hookRegistrationEpoch, modules: r.loadedModules };
}
function y8e({ isRunReached: r }) {
  try {
    return n() || Ie().loadedModules.some((o) => !Db(o) && X9s(o.args.pluginStorageId) && (o.hooks("prompt.submit") || !r && o.hooks("command.run")));
  } catch (o) {
    return l(N(o)), true;
  }
}
export {
  bD,
  dB,
  y8e
};
