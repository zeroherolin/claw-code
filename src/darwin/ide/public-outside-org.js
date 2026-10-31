// darwin/ide/public-outside-org.js — Claude Code 2.1.310（darwin）模块 chunk-g2rrrhdb.js
import { em } from "../shared/chunk-39180da8.js";
import { jpt, Oq, kP } from "../artifacts/template-instance.js";
import { kwt, cY } from "../artifacts/artifact-share-status.js";
async function Fdt(t, a, i, s) {
  let e = await kP(t, a, i, { gatePublicRead: false, credentials: s });
  if (e.err !== null) {
    if (e.errorCode === "boot_404") return { ok: false, reason: jpt(e) ? "never_published" : "not_found" };
    if (Oq(e)) return { ok: false, reason: "other_org", err: e.err };
    return { ok: false, reason: "failed", err: e.err, errorCode: e.errorCode };
  }
  if (e.assetToken === void 0) return { ok: false, reason: "public_outside_org" };
  let r = typeof e.data.title === "string" ? e.data.title : void 0, o = r !== void 0 ? em(r) ?? void 0 : void 0, n = cY({ role: kwt(e.data.perm?.role) });
  return { ok: true, ...o !== void 0 && { title: o }, ...n !== void 0 && { owned: n } };
}
var R0n = 15e3;
function x0n(t) {
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
  Fdt,
  R0n,
  x0n
};
