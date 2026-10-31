// linux/telemetry/chunk-b840990e.js — Claude Code 2.1.310（linux）模块 chunk-m1x40vnx.js
import { Xr, $x, ue } from "../settings/global-config-and-gates.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Zcs, eus } from "./starry-waterfall-asked.js";
import { JI } from "../shared/chunk-5dfabe95.js";
import { ge, bn, Go, lr, Tt } from "../vendor/zod/invalid-return-type.js";
var m = p(() => lr(Tt({ id: ge(), title: ge().optional(), text: ge(), textIfUnusedLimitReset: ge().optional().catch(void 0), footer: ge().optional(), priority: bn().default(0), maxImpressions: bn().default(3), accentBar: Go().default(true), requiresModel: ge().optional() })).default([])), o = [];
function i() {
  let e = $x("tengu_startup_announcements", o), t = m().safeParse(e);
  return t.success ? t.data : o;
}
function s(e) {
  return e.requiresModel === void 0 || Xr(e.requiresModel);
}
function u() {
  let e = ue().announcementImpressions ?? {};
  return i().filter((t) => (e[t.id] ?? 0) < t.maxImpressions && s(t));
}
function gPe(e) {
  let t = JI();
  if (t.startupAnnouncementPick !== void 0) return t.startupAnnouncementPick;
  let n = u().sort((a, c) => c.priority - a.priority)[0], r = n?.textIfUnusedLimitReset && Zcs() ? { ...n, text: n.textIfUnusedLimitReset } : n;
  if (e && r !== void 0) t.startupAnnouncementPick = r;
  return r;
}
function lcs(e, t) {
  if (u().some((n) => n.textIfUnusedLimitReset)) eus(e, t);
}
function dcs() {
  let e = i().filter(s).sort((t, n) => n.priority - t.priority)[0];
  if (e === void 0) return false;
  return JSON.stringify({ id: e.id, title: e.title, text: e.text, footer: e.footer });
}
export {
  dcs,
  gPe,
  lcs
};
