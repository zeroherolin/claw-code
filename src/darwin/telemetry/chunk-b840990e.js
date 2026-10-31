// darwin/telemetry/chunk-b840990e.js — Claude Code 2.1.310（darwin）模块 chunk-26h43h81.js
import { Xr, dT, ue } from "../settings/global-config-and-gates.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { Pus, Ius } from "./starry-waterfall-asked.js";
import { nO } from "../shared/chunk-5dfabe95.js";
import { ge, Sn, zo, dr, Ct } from "../vendor/zod/invalid-return-type.js";
var m = f(() => dr(Ct({ id: ge(), title: ge().optional(), text: ge(), textIfUnusedLimitReset: ge().optional().catch(void 0), footer: ge().optional(), priority: Sn().default(0), maxImpressions: Sn().default(3), accentBar: zo().default(true), requiresModel: ge().optional() })).default([])), o = [];
function i() {
  let e = dT("tengu_startup_announcements", o), t = m().safeParse(e);
  return t.success ? t.data : o;
}
function s(e) {
  return e.requiresModel === void 0 || Xr(e.requiresModel);
}
function u() {
  let e = ue().announcementImpressions ?? {};
  return i().filter((t) => (e[t.id] ?? 0) < t.maxImpressions && s(t));
}
function wPe(e) {
  let t = nO();
  if (t.startupAnnouncementPick !== void 0) return t.startupAnnouncementPick;
  let n = u().sort((a, c) => c.priority - a.priority)[0], r = n?.textIfUnusedLimitReset && Pus() ? { ...n, text: n.textIfUnusedLimitReset } : n;
  if (e && r !== void 0) t.startupAnnouncementPick = r;
  return r;
}
function $cs(e, t) {
  if (u().some((n) => n.textIfUnusedLimitReset)) Ius(e, t);
}
function Ucs() {
  let e = i().filter(s).sort((t, n) => n.priority - t.priority)[0];
  if (e === void 0) return false;
  return JSON.stringify({ id: e.id, title: e.title, text: e.text, footer: e.footer });
}
export {
  $cs,
  Ucs,
  wPe
};
