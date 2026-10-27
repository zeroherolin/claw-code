// shared/chunk-nkqr6bsw.js — Claude Code 2.1.310 模块 chunk-nkqr6bsw.js
import { N } from "../telemetry/anthropic-workspace-id.36ys.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { X9s } from "../plugins/not-found.2nbd.js";
import { Ie } from "../plugins/chunk-hxt89a41.js";
import { Dde } from "../plugins/chunk-3qffpjgv.js";
import { Rcn } from "../agents/api-system.j9gt.js";
import { aye } from "../plugins/chunk-tcdz2w3z.js";
import { Db } from "./chunk-b6n7b0tm.js";
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
