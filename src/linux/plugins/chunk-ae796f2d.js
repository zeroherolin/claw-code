// linux/plugins/chunk-ae796f2d.js — Claude Code 2.1.310（linux）模块 chunk-0gzc2q7a.js
import { On } from "../shell/invalid-type.js";
import { Am } from "./skills-dir.js";
import { lV, xet } from "./entry-refused.js";
import { eje, Bv, Rd, I_, BA } from "../core/conversation-engine.js";
function d(e) {
  return e !== void 0 && Am(e) ? { kind: "unresolved", reason: "Its marketplace is a folder whose catalog could not be read, or lists it no more." } : { kind: "copy" };
}
async function IJr(e, o) {
  let [r, l] = await Promise.all([BA(e, o), Rd(o)]), n = l[On(e).marketplace ?? ""]?.source;
  if (r === null) return d(n);
  let { source: t } = r.entry, c = eje(t, n);
  if (typeof t !== "string" || !c) return { kind: "copy" };
  let i = I_(r.marketplaceInstallLocation) === void 0 ? "workspace" : "system", a = await lV(e, r.marketplaceInstallLocation, t, l, Bv(), o, i);
  return a.kind === "ok" ? { kind: "folder", path: a.entryPath } : { kind: "unresolved", reason: xet(a, r.marketplaceInstallLocation, t).message };
}
export {
  IJr
};
