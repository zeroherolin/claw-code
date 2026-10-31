// linux/shared/chunk-759bfb30.js — Claude Code 2.1.310（linux）模块 chunk-n5ph6h88.js
import { L, ci } from "../context/not-admin-owned.js";
import { Pl } from "./async-hooks.5238.js";
import { J7o, p8r } from "../git/utf-8.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { dsi } from "../mcp/allowed-warning.js";
async function tzr(r) {
  let e = L([ci(), Pl()]).filter((t) => t !== null);
  for (let t of e) try {
    let o = await J7o(r, t);
    if (o !== void 0) {
      let i = await dsi(t, o.gitRoot, r);
      if (typeof i === "string") p8r(i, o.gitRoot, o.canonicalRoot);
    }
  } catch (o) {
    l(o);
  }
}
export {
  tzr
};
