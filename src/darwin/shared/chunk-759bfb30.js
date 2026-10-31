// darwin/shared/chunk-759bfb30.js — Claude Code 2.1.310（darwin）模块 chunk-wggvy62s.js
import { L, ci } from "../context/not-admin-owned.js";
import { Pl } from "./async-hooks.5238.js";
import { AZo, N8r } from "../git/utf-8.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Ksi } from "../mcp/allowed-warning.js";
async function EGr(r) {
  let e = L([ci(), Pl()]).filter((t) => t !== null);
  for (let t of e) try {
    let o = await AZo(r, t);
    if (o !== void 0) {
      let i = await Ksi(t, o.gitRoot, r);
      if (typeof i === "string") N8r(i, o.gitRoot, o.canonicalRoot);
    }
  } catch (o) {
    l(o);
  }
}
export {
  EGr
};
