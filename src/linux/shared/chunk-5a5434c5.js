// linux/shared/chunk-5a5434c5.js — Claude Code 2.1.310（linux）模块 chunk-40d7g4g3.js
import { ku, KH, Yns, Xns } from "../context/not-admin-owned.js";
import { I } from "./chunk-d2c47492.js";
import { Ut } from "../settings/global-config-and-gates.js";
import { thn, Z, N7n } from "../artifacts/same-account.js";
import { n3, hy, yy, P_ } from "../mcp/artifact-summon-arm-emit.js";
import { kk } from "../core/conversation-engine.js";
function bve() {
  if (!Ut()) return true;
  return ku() !== null && Yns();
}
function mvs(e) {
  let t = KH(e), n = Xns(e);
  return () => {
    t(), n();
  };
}
function Bct() {
  if (Z().autoReact.enabledMemo !== true) return /* @__PURE__ */ new Set();
  return new Set(Array.from(u(), (e) => e.slug));
}
function sBe() {
  let { autoReact: e, durable: t, live: n, wakes: r } = Z(), i = /* @__PURE__ */ new Set();
  if (e.enabledMemo === false || e.userDisarmed) return i;
  for (let [o, s] of n.bootingWiredArms) {
    if (s.scanGeneration !== r.scanGeneration || n.retiredInFlightArms.has(o) || t.stopLatches.isStopped(o)) continue;
    if (!hy(o) || s.freshPublish && P_(o) && s.stopGeneration === n3(o)) i.add(o);
  }
  return i;
}
function* u() {
  for (let e of Z().live.supervisors.values()) if (!e.stopped && e.autoReactWiring !== void 0 && !yy(e.slug)) yield e;
}
function awr(e) {
  let { live: t } = Z();
  for (let n of u()) if (e?.reconnecting !== true || n.timer !== void 0 || t.inFlightSubscribes.has(n.slug)) return true;
  return false;
}
function gvs() {
  return Z().autoReact.enabledMemo === true && awr({ reconnecting: true });
}
function AQt(e) {
  let t = Z().live;
  for (let n of e) {
    let r = t.supervisors.get(n);
    if (r !== void 0) thn(r), t.supervisors.delete(n);
    t.heardVersions.delete(n), N7n(n), Z().liveDocWatch.headSinks.get(n)?.sourceEnded();
  }
  c(e);
}
function c(e) {
  let t = Z().live;
  for (let n of e) if (t.inFlightSubscribes.has(n) && !t.supervisors.has(n)) t.retiredInFlightArms.add(n), t.bootingWiredArms.delete(n), t.inFlightWiredIntent.delete(n);
}
var jct = 1e4;
function a() {
  return Z().autoReact.unattendedReplies;
}
function ffo(e) {
  let t = a();
  t.set(e, Math.min((t.get(e) ?? 0) + 1, jct));
}
function pfo(e, t) {
  if (t > 0) {
    let n = a();
    n.set(e, Math.min((n.get(e) ?? 0) + t, jct));
  }
}
function hvs(e) {
  let t = a(), n = t.get(e) ?? 0;
  return t.delete(e), n;
}
function QLn() {
  let e = Z().autoReact, t = e.unattendedReplies;
  e.unattendedReplies = /* @__PURE__ */ new Map();
  let n = 0;
  for (let r of t.values()) n += r;
  return { total: n, bySlug: t };
}
function ZLn(e, { where: t, stop: n }) {
  return kk(`Claude auto-replied to ${e} ${I(e, "comment")}${t} while you were away.${n}`, "notice");
}
export {
  AQt,
  Bct,
  QLn,
  ZLn,
  awr,
  bve,
  ffo,
  gvs,
  hvs,
  jct,
  mvs,
  pfo,
  sBe
};
