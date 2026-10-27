// remote/other-state.pt6x.js — Claude Code 2.1.310 模块 chunk-pt6xj1kw.js
import { f } from "../shared/chunk-nyvhtfb3.js";
import { o, u, Fe, T } from "../vendor/zod/string-format.k395.js";
var r = f(() => Fe([u({ v: T(1), state: o() }), u({ v: T(2), engine: T("bridge") })]));
function Las(e, n) {
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
function lwe(e) {
  return e === "none" || e === "bridge" || e === "this_helper";
}
export {
  Las,
  lwe
};
