// linux/shared/chunk-9a53444c.js — Claude Code 2.1.310（linux）模块 chunk-ck9nfjp8.js
import { De } from "../fs/async-hooks.93b1.js";
var a = 50;
function FBe() {
  let s = De(), t = [], n = 0;
  return { publish(e, i, r) {
    let u = r === void 0 ? { line: e, level: i } : { line: e, level: i, notice: r };
    if (n === 0) {
      t = [...t, u].slice(-a);
      return;
    }
    s.emit(u);
  }, takeBacklog() {
    let e = t;
    return t = [], e;
  }, subscribe(e) {
    n += 1;
    let i = s.subscribe(e);
    return () => {
      n -= 1, i();
    };
  } };
}
export {
  FBe
};
