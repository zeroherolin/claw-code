// darwin/telemetry/web-setup-push-offer.js — Claude Code 2.1.310（darwin）模块 chunk-6ndzcvqa.js
import { S, c } from "../agents/third-party.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { a } from "./chunk-9097a12b.js";
import { g } from "./chunk-9d6962d2.js";
import { vt, Dc, k, Re, ue, Na, ch } from "../settings/global-config-and-gates.js";
import { Pt } from "../shared/async-hooks.5238.js";
import { Te } from "../models/total-tokens-reminder.js";
import { f6 } from "../api/not-signed-in.js";
import { Q0e } from "../commands/command-web-setup.js";
import { Ps } from "../shared/chunk-67236fa7.js";
var p = "tengu_reflective_bee", d = ["off", "survey"], _ = 3, h = 864e5, f = "tengu_web_setup_push_offer", Aio = "Pushed to GitHub. Connect GitHub to claude.ai so you can work on this repo even when this machine is offline?", Rio = 1e3, yIt = new W(() => Ps({ status: "none" }));
function Ehs({ trigger: t, host: o, storageV5: s }) {
  let r = yIt.of(o);
  if (r.getState().status !== "none") return;
  if (Dc()) return;
  if (Te() !== "firstParty" || !vt() || !Q0e()) return;
  if (Pt()) return;
  if (u()) return;
  if (f6.of(o).peek(void 0, s) !== "not_connected") return;
  a(f, { event: S("eligible"), trigger: c(t) });
  let n = k(p, "off"), e = d.find((i) => i === n);
  r.setState(() => e === void 0 || e === "off" ? { status: "resolved" } : { status: "pending", variant: e, trigger: t });
}
function u() {
  let t = ue().webSetupPushOffer;
  if (t?.dismissedForever) return true;
  if (Na().webSetupPushOfferShown) return true;
  if (t?.lastShownAt !== void 0 && Date.now() - t.lastShownAt < h) return true;
  return (t?.shownCount ?? 0) >= _;
}
function xio(t, o) {
  let s = yIt.of(t);
  if (s.getState().status !== "pending") return false;
  if (!u() && f6.of(t).peek(void 0, o) === "not_connected") return false;
  return s.setState(() => ({ status: "resolved" })), true;
}
function Pio(t, o) {
  let s = yIt.of(t), r = s.getState();
  if (r.status !== "pending") return;
  s.setState(() => ({ ...r, status: "shown" })), a(f, { event: S("shown"), variant: c(r.variant), trigger: c(r.trigger) }), g("remote_setup_push_offer");
  let n = Date.now();
  Re((e) => e.webSetupPushOffer?.lastShownAt === n ? e : { ...e, webSetupPushOffer: { ...e.webSetupPushOffer, lastShownAt: n, shownCount: (e.webSetupPushOffer?.shownCount ?? 0) + 1 } }, o), ch((e) => e.webSetupPushOfferShown ? e : { ...e, webSetupPushOfferShown: true }, o);
}
function Q5e(t, o, s) {
  let r = yIt.of(t), n = r.getState();
  if (n.status !== "shown") return;
  if (r.setState(() => ({ status: "resolved" })), a(f, { event: c(o), variant: c(n.variant), trigger: c(n.trigger) }), o === "dont_ask_again") Re((e) => e.webSetupPushOffer?.dismissedForever ? e : { ...e, webSetupPushOffer: { ...e.webSetupPushOffer, dismissedForever: true } }, s);
}
export {
  Aio,
  Ehs,
  Pio,
  Q5e,
  Rio,
  xio,
  yIt
};
