// linux/vendor/chalk/chunk-24ee1a9d.js — Claude Code 2.1.310（linux）模块 chunk-n35x7axc.js
import { Nhe, wG } from "../../permissions/light-daltonized.js";
function Qn(e, r, o = "foreground") {
  return (t) => {
    if (!e) return t;
    if (e.startsWith("rgb(") || e.startsWith("#") || e.startsWith("ansi256(") || e.startsWith("ansi:")) return Nhe(t, e, o);
    let i = typeof r === "string" ? wG(r) : r;
    return Nhe(t, i[e], o);
  };
}
export {
  Qn
};
