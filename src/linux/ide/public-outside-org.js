// linux/ide/public-outside-org.js — Claude Code 2.1.310（linux）模块 chunk-hb4xqste.js
import { em } from "../shared/chunk-39180da8.js";
import { Hft, v4, wP } from "../artifacts/template-instance.js";
import { ywt, n9 } from "../artifacts/artifact-share-status.js";
async function Hdt(t, a, i, s) {
  let e = await wP(t, a, i, { gatePublicRead: false, credentials: s });
  if (e.err !== null) {
    if (e.errorCode === "boot_404") return { ok: false, reason: Hft(e) ? "never_published" : "not_found" };
    if (v4(e)) return { ok: false, reason: "other_org", err: e.err };
    return { ok: false, reason: "failed", err: e.err, errorCode: e.errorCode };
  }
  if (e.assetToken === void 0) return { ok: false, reason: "public_outside_org" };
  let r = typeof e.data.title === "string" ? e.data.title : void 0, o = r !== void 0 ? em(r) ?? void 0 : void 0, n = n9({ role: ywt(e.data.perm?.role) });
  return { ok: true, ...o !== void 0 && { title: o }, ...n !== void 0 && { owned: n } };
}
var gDn = 15e3;
function hDn(t) {
  switch (t.reason) {
    case "public_outside_org":
      return "Couldn't open that artifact. It's public and from outside your organization.";
    case "other_org":
      return "Couldn't open that artifact. It's in another of your organizations.";
    case "never_published":
      return "Couldn't open that artifact. Nothing has been published to it yet.";
    case "not_found":
      return "Couldn't open that artifact. It may have been deleted, or it isn't shared with you.";
    case "failed":
      return t.errorCode === void 0 || t.errorCode === "boot_request_error" ? "Couldn't check that artifact, so it wasn't opened. Try again." : "Couldn't check that artifact, so it wasn't opened.";
  }
}
export {
  Hdt,
  gDn,
  hDn
};
