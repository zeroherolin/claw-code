// shared/chunk-rmqyvpf6.js — Claude Code 2.1.310 模块 chunk-rmqyvpf6.js
import { He } from "../fs/async-hooks.9s1z.js";
import { nu, Ns, zSe } from "../shell/invalid-type.qnva.js";
import { sLe, Coe, wf } from "../commands/claude-code.vy1w.js";
import { G0e, Lk } from "./chunk-afcyzt3y.js";
import { Fr } from "../vendor/react/chunk-meds60nn.js";
var Mdn = {};
Fr(Mdn, { FALLBACK_RENDER_SITE: () => d, activeModNames: () => QUt, changed: () => n, copyInterface: () => i, copyPlugin: () => p, default: () => Mdn, devtoolsEvents: () => R, devtoolsHooks: () => a, devtoolsInterfaces: () => S, devtoolsRenderSites: () => k, failed: () => l, hooksOn: () => ZUt, latest: () => iQe, loadedArgsOf: () => Lk, loadedModuleNamed: () => G0e, publishHookFailure: () => aQe, publishInterfaces: () => SGs, publishRegistry: () => bGs, publishRenderSites: () => wGs, snapshots: () => u, subscribeHookFailures: () => EGs, subscribeRegistry: () => W0e });
var QUt = (e) => e.filter((o) => !wf(o.args.pluginStorageId)).map((o) => o.name);
var n = He();
var l = He();
var d = { event: "ui.render", component: "AskUserQuestion", drawnBy: "AskUserQuestionPermissionDialog" };
function u() {
  let e = [], o = [d], t = [];
  return { plugins: () => e, setPlugins: (s) => {
    e = s;
  }, renderSites: () => o, setRenderSites: (s) => {
    o = s;
  }, interfaces: () => t, setInterfaces: (s) => {
    t = s;
  } };
}
var iQe = u();
var aQe = l.emit;
function i(e) {
  return e.owner === void 0 ? { name: e.name, methods: [...e.methods], suppressedBy: e.suppressedBy } : { name: e.name, methods: [...e.methods], owner: e.owner };
}
var p = (e) => ({ name: e.name, events: [...e.events], calls: [...e.calls], tier: e.tier, generation: e.generation });
var ZUt = (e) => iQe.plugins().flatMap((o) => {
  let t = o.events.find((s) => Coe(s, e));
  if (t === void 0) return [];
  return [{ plugin: o.name, tier: o.tier, hook: t, generation: o.generation }];
});
function R() {
  let e = {};
  for (let o of sLe) e[o] = ZUt(o);
  return e;
}
var a = () => iQe.plugins().map(p);
var S = () => iQe.interfaces().map(i);
var k = () => iQe.renderSites().map((e) => ({ ...e }));
var SGs = (e) => iQe.setInterfaces(e.map(i));
function bGs(e) {
  iQe.setPlugins(e.map(p)), n.emit(a());
}
var wGs = (e) => iQe.setRenderSites(e.map((o) => ({ ...o })));
var EGs = l.subscribe;
var W0e = n.subscribe;
var E = [Ns, nu];
function Syt(e) {
  return zSe({ name: e, source: `${e}@${Ns}` }).some((o) => {
    let t = G0e(o);
    return t !== void 0 && t.status().kind === "live" && E.some((s) => t.args.pluginStorageId === `${o}@${s}`);
  });
}
export {
  EGs,
  Mdn,
  QUt,
  SGs,
  Syt,
  W0e,
  ZUt,
  aQe,
  bGs,
  iQe,
  wGs
};
