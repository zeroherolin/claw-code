// darwin/plugins/chunk-ae796f2d.js — Claude Code 2.1.310（darwin）模块 chunk-w5qp76zf.js
import { On } from "../shell/invalid-type.js";
import { Tm } from "./skills-dir.js";
import { SV, Let } from "./entry-refused.js";
import { cje, jE, Rd, O_, GT } from "../core/conversation-engine.js";
function d(e) {
  return e !== void 0 && Tm(e) ? { kind: "unresolved", reason: "Its marketplace is a folder whose catalog could not be read, or lists it no more." } : { kind: "copy" };
}
async function tJr(e, o) {
  let [r, l] = await Promise.all([GT(e, o), Rd(o)]), n = l[On(e).marketplace ?? ""]?.source;
  if (r === null) return d(n);
  let { source: t } = r.entry, c = cje(t, n);
  if (typeof t !== "string" || !c) return { kind: "copy" };
  let i = O_(r.marketplaceInstallLocation) === void 0 ? "workspace" : "system", a = await SV(e, r.marketplaceInstallLocation, t, l, jE(), o, i);
  return a.kind === "ok" ? { kind: "folder", path: a.entryPath } : { kind: "unresolved", reason: Let(a, r.marketplaceInstallLocation, t).message };
}
export {
  tJr
};
