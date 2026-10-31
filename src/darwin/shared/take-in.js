// darwin/shared/take-in.js — Claude Code 2.1.310（darwin）模块 chunk-5mamav4d.js
import { ED } from "./chunk-5569a444.js";
import { nt } from "../context/not-admin-owned.js";
var d = ["take_in"];
class r {
  visitors = /* @__PURE__ */ new Map();
}
var l = new nt(() => new r());
function a(o) {
  try {
    return o.pending() === true;
  } catch {
    return false;
  }
}
function rms(o) {
  let e = l.peek(o)?.visitors;
  return e !== void 0 && [...e.values()].some(a);
}
async function oms(o, e) {
  let n = l.peek(o)?.visitors;
  if (n === void 0) return;
  let p = (async () => {
    for (let s of d) {
      let i = n.get(s);
      if (i !== void 0 && !ED(e) && a(i)) try {
        await i.visit(e);
      } catch {
      }
    }
  })();
  if (ED(e)) return;
  let t = () => {
  }, c = new Promise((s) => {
    t = () => s();
  });
  e.addEventListener("abort", t, { once: true });
  try {
    await Promise.race([p, c]);
  } finally {
    e.removeEventListener("abort", t);
  }
}
export {
  oms,
  rms
};
