// shared/chunk-wggvy62s.js — Claude Code 2.1.310 模块 chunk-wggvy62s.js
import { L, ci } from "../context/not-admin-owned.ersa.js";
import { Pl } from "./async-hooks.m2fg.js";
import { AZo, N8r } from "../git/utf-8.vh7e.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { Ksi } from "../mcp/allowed-warning.j2d4.js";
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
