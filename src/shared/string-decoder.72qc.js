// shared/string-decoder.72qc.js — Claude Code 2.1.310 模块 chunk-72qc7jaz.js
import { StringDecoder as s } from "string_decoder";
var p = 1048576;
function i8t(o, r) {
  let d = new s("utf8"), e = "", t = false, l = (i) => {
    if (t) return;
    e += typeof i === "string" ? i : d.write(i);
    let f;
    while ((f = e.indexOf(`
`)) >= 0) {
      let c = e.slice(0, f);
      if (e = e.slice(f + 1), c) r(c);
    }
    if (e.length > p) {
      if (t = true, e = "", "destroy" in o) o.destroy();
    }
  }, n = () => {
    if (t) return;
    if (e += d.end(), e) r(e), e = "";
  };
  return o.on("data", l), o.on("end", n), o.on("close", n), () => {
    o.off("data", l), o.off("end", n), o.off("close", n);
  };
}
export {
  i8t
};
