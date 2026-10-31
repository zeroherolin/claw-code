// linux/remote/other-state.js — Claude Code 2.1.310（linux）模块 chunk-akv19aq7.js
import { p } from "../shared/chunk-2fe3b2b7.js";
import { o, u, $e, A } from "../vendor/zod/string-format.js";
var r = p(() => $e([u({ v: A(1), state: o() }), u({ v: A(2), engine: A("bridge") })]));
function ras(e, n) {
  if (e === void 0 || e === null) return typeof n === "object" && n !== null ? "none" : "unstated";
  let t = r().safeParse(e);
  if (!t.success) return "unreadable";
  if (t.data.v === 2) return "bridge";
  switch (t.data.state) {
    case "connected":
    case "requested":
    case "detached":
      return t.data.state;
    default:
      return "other_state";
  }
}
function nwe(e) {
  return e === "none" || e === "bridge" || e === "this_helper";
}
export {
  nwe,
  ras
};
