// linux/shared/chunk-ec79692e.js — Claude Code 2.1.310（linux）模块 chunk-7jgmpv5v.js
import { De } from "../fs/async-hooks.93b1.js";
import { tu, Ns, Fbe } from "../shell/invalid-type.js";
import { ZLe, _oe, vp } from "../commands/claude-code.js";
import { $De, Hk } from "./chunk-2d0a0ef6.js";
import { $r } from "../vendor/react/chunk-0b0bf45d.js";
var bdn = {};
$r(bdn, { FALLBACK_RENDER_SITE: () => d, activeModNames: () => UUt, changed: () => n, copyInterface: () => i, copyPlugin: () => p, default: () => bdn, devtoolsEvents: () => R, devtoolsHooks: () => a, devtoolsInterfaces: () => S, devtoolsRenderSites: () => k, failed: () => l, hooksOn: () => BUt, latest: () => QQe, loadedArgsOf: () => Hk, loadedModuleNamed: () => $De, publishHookFailure: () => ZQe, publishInterfaces: () => DGs, publishRegistry: () => HGs, publishRenderSites: () => LGs, snapshots: () => u, subscribeHookFailures: () => NGs, subscribeRegistry: () => NDe });
var UUt = (e) => e.filter((o) => !vp(o.args.pluginStorageId)).map((o) => o.name);
var n = De();
var l = De();
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
var QQe = u();
var ZQe = l.emit;
function i(e) {
  return e.owner === void 0 ? { name: e.name, methods: [...e.methods], suppressedBy: e.suppressedBy } : { name: e.name, methods: [...e.methods], owner: e.owner };
}
var p = (e) => ({ name: e.name, events: [...e.events], calls: [...e.calls], tier: e.tier, generation: e.generation });
var BUt = (e) => QQe.plugins().flatMap((o) => {
  let t = o.events.find((s) => _oe(s, e));
  if (t === void 0) return [];
  return [{ plugin: o.name, tier: o.tier, hook: t, generation: o.generation }];
});
function R() {
  let e = {};
  for (let o of ZLe) e[o] = BUt(o);
  return e;
}
var a = () => QQe.plugins().map(p);
var S = () => QQe.interfaces().map(i);
var k = () => QQe.renderSites().map((e) => ({ ...e }));
var DGs = (e) => QQe.setInterfaces(e.map(i));
function HGs(e) {
  QQe.setPlugins(e.map(p)), n.emit(a());
}
var LGs = (e) => QQe.setRenderSites(e.map((o) => ({ ...o })));
var NGs = l.subscribe;
var NDe = n.subscribe;
var E = [Ns, tu];
function pyt(e) {
  return Fbe({ name: e, source: `${e}@${Ns}` }).some((o) => {
    let t = $De(o);
    return t !== void 0 && t.status().kind === "live" && E.some((s) => t.args.pluginStorageId === `${o}@${s}`);
  });
}
export {
  BUt,
  DGs,
  HGs,
  LGs,
  NDe,
  NGs,
  QQe,
  UUt,
  ZQe,
  bdn,
  pyt
};
