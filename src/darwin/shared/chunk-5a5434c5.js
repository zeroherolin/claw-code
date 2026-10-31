// darwin/shared/chunk-5a5434c5.js — Claude Code 2.1.310（darwin）模块 chunk-5ym902nn.js
import { Tu, YH, Prs, Irs } from "../context/not-admin-owned.js";
import { I } from "./chunk-d2c47492.js";
import { Ut } from "../settings/global-config-and-gates.js";
import { yhn, Z, tZn } from "../artifacts/same-account.js";
import { p9, _y, Sy, I_ } from "../mcp/artifact-summon-arm-emit.js";
import { Ck } from "../core/conversation-engine.js";
function vEe() {
  if (!Ut()) return true;
  return Tu() !== null && Prs();
}
function DEs(e) {
  let t = YH(e), n = Irs(e);
  return () => {
    t(), n();
  };
}
function Uct() {
  if (Z().autoReact.enabledMemo !== true) return /* @__PURE__ */ new Set();
  return new Set(Array.from(u(), (e) => e.slug));
}
function f1e() {
  let { autoReact: e, durable: t, live: n, wakes: r } = Z(), i = /* @__PURE__ */ new Set();
  if (e.enabledMemo === false || e.userDisarmed) return i;
  for (let [o, s] of n.bootingWiredArms) {
    if (s.scanGeneration !== r.scanGeneration || n.retiredInFlightArms.has(o) || t.stopLatches.isStopped(o)) continue;
    if (!_y(o) || s.freshPublish && I_(o) && s.stopGeneration === p9(o)) i.add(o);
  }
  return i;
}
function* u() {
  for (let e of Z().live.supervisors.values()) if (!e.stopped && e.autoReactWiring !== void 0 && !Sy(e.slug)) yield e;
}
function Swr(e) {
  let { live: t } = Z();
  for (let n of u()) if (e?.reconnecting !== true || n.timer !== void 0 || t.inFlightSubscribes.has(n.slug)) return true;
  return false;
}
function LEs() {
  return Z().autoReact.enabledMemo === true && Swr({ reconnecting: true });
}
function IJt(e) {
  let t = Z().live;
  for (let n of e) {
    let r = t.supervisors.get(n);
    if (r !== void 0) yhn(r), t.supervisors.delete(n);
    t.heardVersions.delete(n), tZn(n), Z().liveDocWatch.headSinks.get(n)?.sourceEnded();
  }
  c(e);
}
function c(e) {
  let t = Z().live;
  for (let n of e) if (t.inFlightSubscribes.has(n) && !t.supervisors.has(n)) t.retiredInFlightArms.add(n), t.bootingWiredArms.delete(n), t.inFlightWiredIntent.delete(n);
}
var Bct = 1e4;
function a() {
  return Z().autoReact.unattendedReplies;
}
function Dpo(e) {
  let t = a();
  t.set(e, Math.min((t.get(e) ?? 0) + 1, Bct));
}
function Lpo(e, t) {
  if (t > 0) {
    let n = a();
    n.set(e, Math.min((n.get(e) ?? 0) + t, Bct));
  }
}
function NEs(e) {
  let t = a(), n = t.get(e) ?? 0;
  return t.delete(e), n;
}
function sLn() {
  let e = Z().autoReact, t = e.unattendedReplies;
  e.unattendedReplies = /* @__PURE__ */ new Map();
  let n = 0;
  for (let r of t.values()) n += r;
  return { total: n, bySlug: t };
}
function iLn(e, { where: t, stop: n }) {
  return Ck(`Claude auto-replied to ${e} ${I(e, "comment")}${t} while you were away.${n}`, "notice");
}
export {
  Bct,
  DEs,
  Dpo,
  IJt,
  LEs,
  Lpo,
  NEs,
  Swr,
  Uct,
  f1e,
  iLn,
  sLn,
  vEe
};
