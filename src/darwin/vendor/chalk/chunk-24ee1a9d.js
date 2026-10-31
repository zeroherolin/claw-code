// darwin/vendor/chalk/chunk-24ee1a9d.js — Claude Code 2.1.310（darwin）模块 chunk-06zv4nk8.js
import { jhe, I2 } from "../../permissions/light-daltonized.js";
function Qn(e, r, o = "foreground") {
  return (t) => {
    if (!e) return t;
    if (e.startsWith("rgb(") || e.startsWith("#") || e.startsWith("ansi256(") || e.startsWith("ansi:")) return jhe(t, e, o);
    let i = typeof r === "string" ? I2(r) : r;
    return jhe(t, i[e], o);
  };
}
export {
  Qn
};
