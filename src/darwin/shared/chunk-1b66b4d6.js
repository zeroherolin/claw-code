// darwin/shared/chunk-1b66b4d6.js — Claude Code 2.1.310（darwin）模块 chunk-2m7ekyg2.js
import { di } from "./chunk-d2c47492.js";
function fi(n, g) {
  if (!n.trim() || !g.trim()) return null;
  let c = di(g), l = new RegExp(`<${c}(?=[\\s>])`, "gi"), e = new RegExp(`<\\/${c}>`, "gi"), s = 0;
  for (; ; ) {
    l.lastIndex = s;
    let t = l.exec(n);
    e.lastIndex = s;
    let o = e.exec(n);
    if (!t || !o) return null;
    let r = n.indexOf(">", t.index + t[0].length);
    if (r === -1) return null;
    e.lastIndex = r + 1;
    let i = e.exec(n);
    if (!i) return null;
    let a = o.index + o[0].length <= t.index, x = n.slice(r + 1, i.index);
    if (x && !a) return x;
    s = i.index + i[0].length;
  }
}
export {
  fi
};
