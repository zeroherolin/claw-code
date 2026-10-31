// linux/telemetry/web-setup-push-offer.js — Claude Code 2.1.310（linux）模块 chunk-f23b7pah.js
import { b, c } from "../agents/third-party.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { a } from "./chunk-9097a12b.js";
import { g } from "./chunk-9d6962d2.js";
import { Et, Hc, k, Re, ue, La, ch } from "../settings/global-config-and-gates.js";
import { Pt } from "../shared/async-hooks.5238.js";
import { Ae } from "../models/total-tokens-reminder.js";
import { oK } from "../api/not-signed-in.js";
import { KDe } from "../commands/command-web-setup.js";
import { Ps } from "../shared/chunk-67236fa7.js";
var p = "tengu_reflective_bee", S = ["off", "survey"], d = 3, _ = 864e5, f = "tengu_web_setup_push_offer", cio = "Pushed to GitHub. Connect GitHub to claude.ai so you can work on this repo even when this machine is offline?", uio = 1e3, dIt = new W(() => Ps({ status: "none" }));
function Ygs({ trigger: t, host: o, storageV5: s }) {
  let r = dIt.of(o);
  if (r.getState().status !== "none") return;
  if (Hc()) return;
  if (Ae() !== "firstParty" || !Et() || !KDe()) return;
  if (Pt()) return;
  if (u()) return;
  if (oK.of(o).peek(void 0, s) !== "not_connected") return;
  a(f, { event: b("eligible"), trigger: c(t) });
  let n = k(p, "off"), e = S.find((i) => i === n);
  r.setState(() => e === void 0 || e === "off" ? { status: "resolved" } : { status: "pending", variant: e, trigger: t });
}
function u() {
  let t = ue().webSetupPushOffer;
  if (t?.dismissedForever) return true;
  if (La().webSetupPushOfferShown) return true;
  if (t?.lastShownAt !== void 0 && Date.now() - t.lastShownAt < _) return true;
  return (t?.shownCount ?? 0) >= d;
}
function fio(t, o) {
  let s = dIt.of(t);
  if (s.getState().status !== "pending") return false;
  if (!u() && oK.of(t).peek(void 0, o) === "not_connected") return false;
  return s.setState(() => ({ status: "resolved" })), true;
}
function pio(t, o) {
  let s = dIt.of(t), r = s.getState();
  if (r.status !== "pending") return;
  s.setState(() => ({ ...r, status: "shown" })), a(f, { event: b("shown"), variant: c(r.variant), trigger: c(r.trigger) }), g("remote_setup_push_offer");
  let n = Date.now();
  Re((e) => e.webSetupPushOffer?.lastShownAt === n ? e : { ...e, webSetupPushOffer: { ...e.webSetupPushOffer, lastShownAt: n, shownCount: (e.webSetupPushOffer?.shownCount ?? 0) + 1 } }, o), ch((e) => e.webSetupPushOfferShown ? e : { ...e, webSetupPushOfferShown: true }, o);
}
function z6e(t, o, s) {
  let r = dIt.of(t), n = r.getState();
  if (n.status !== "shown") return;
  if (r.setState(() => ({ status: "resolved" })), a(f, { event: c(o), variant: c(n.variant), trigger: c(n.trigger) }), o === "dont_ask_again") Re((e) => e.webSetupPushOffer?.dismissedForever ? e : { ...e, webSetupPushOffer: { ...e.webSetupPushOffer, dismissedForever: true } }, s);
}
export {
  Ygs,
  cio,
  dIt,
  fio,
  pio,
  uio,
  z6e
};
