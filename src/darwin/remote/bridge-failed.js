// darwin/remote/bridge-failed.js — Claude Code 2.1.310（darwin）模块 chunk-4jhdjzrm.js
import { h1t } from "../tools/tool-result-persisted.js";
import { h_ } from "../fs/async-hooks.7959.js";
import { $a } from "../shared/chunk-5acf247e.js";
import { le } from "../shared/chunk-4563156b.js";
var Ims = 3e4, VW = "bridge-failed", gdt = "disabled after repeated failures · restart to retry", Ioo = "Remote Control not started here";
function Oms(t, { crossSessionMessaging: e }, r = /* @__PURE__ */ new Date()) {
  let n = t.startedAt > 0 && t.startedAt <= r.getTime() ? ` (started ${h_(new Date(t.startedAt), { now: r })})` : "";
  return `${Ioo} · another Claude Code on this machine${n} already has Remote Control for this conversation${e ? ", so this terminal can't see your sessions on other machines and they can't reach it" : ""} · run /remote-control to move it to this terminal`;
}
var Ooo = 150;
function B5e() {
  let t = /* @__PURE__ */ new Date(), e = String(t.getHours()).padStart(2, "0"), r = String(t.getMinutes()).padStart(2, "0"), n = String(t.getSeconds()).padStart(2, "0");
  return `${e}:${r}:${n}`;
}
function NOn(t, e) {
  return `${h1t(void 0, e)}/code?environment=${t}`;
}
function Moo(t, e) {
  let r = e + 20;
  return e + 10 - t % r;
}
function FPt(t, e) {
  let r = le(t), n = e - 1, i = e + 1;
  if (n >= r || i < 0) return { before: t, shimmer: "", after: "" };
  let g = Math.max(0, n), s = 0, c = "", a = "", l = "";
  for (let { segment: o } of $a().segment(t)) {
    let u = le(o);
    if (s + u <= g) c += o;
    else if (s > i) l += o;
    else a += o;
    s += u;
  }
  return { before: c, shimmer: a, after: l };
}
var m = { label: "/rc failed", color: "error" }, d = { label: "/rc reconnecting", color: "warning" }, f = { label: "/rc active", color: "success" }, p = { label: "/rc connecting…", color: "warning" };
function j5e({ error: t, connected: e, sessionActive: r, reconnecting: n }) {
  if (t) return m;
  if (n) return d;
  if (r || e) return f;
  return p;
}
function MYt(t) {
  return `Code anywhere with the Claude mobile app or ${t}`;
}
var Mms = "Or ask Claude to work in this folder from your projects on claude.ai";
function HYt(t) {
  return `Continue coding in the Claude mobile app or ${t}`;
}
var Hoo = "Run /remote-control to retry";
function Hms(t, e) {
  return `\x1B]8;;${e}\x07${t}\x1B]8;;\x07`;
}
export {
  B5e,
  FPt,
  HYt,
  Hms,
  Hoo,
  Ims,
  Ioo,
  MYt,
  Mms,
  Moo,
  NOn,
  Oms,
  Ooo,
  VW,
  gdt,
  j5e
};
