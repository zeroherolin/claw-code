// linux/shared/chunk-ab773be5.js — Claude Code 2.1.310（linux）模块 chunk-e4f7sb0e.js
import { _, te } from "../fs/gitlab-runner-authentication-token.js";
var Mht = 0, Zqn = 1, Jan = 262144, n = 5, Qan = 1048576, bDe = 1e4;
function Zan(r) {
  let e = typeof r === "string" ? Buffer.from(r, "utf8") : r, t = Buffer.allocUnsafe(n + e.length);
  return t.writeUInt32BE(e.length, 0), t.writeUInt8(Mht, 4), e.copy(t, n), t;
}
function ZF(r) {
  let e = Buffer.from(_(r), "utf8"), t = Buffer.allocUnsafe(n + e.length);
  return t.writeUInt32BE(e.length, 0), t.writeUInt8(Zqn, 4), e.copy(t, n), t;
}
function e4n(r, e) {
  let t = Buffer.alloc(0), o = false;
  return (l) => {
    if (o) return;
    t = t.length === 0 ? l : Buffer.concat([t, l]);
    while (t.length >= n) {
      let f = t.readUInt32BE(0);
      if (f > Qan) {
        o = true, e(`frame too large (${f} > ${Qan})`);
        return;
      }
      let u = n + f;
      if (t.length < u) return;
      let i = t.readUInt8(4), s = t.subarray(n, u);
      if (t = t.subarray(u), i === Mht) r({ kind: Mht, payload: Buffer.from(s) });
      else if (i === Zqn) {
        let c;
        try {
          c = te(s.toString("utf8"));
        } catch {
          o = true, e("bad ctrl json");
          return;
        }
        r({ kind: Zqn, ctrl: c });
      } else {
        o = true, e(`unknown frame kind ${i}`);
        return;
      }
    }
  };
}
export {
  Jan,
  Mht,
  Qan,
  ZF,
  Zan,
  Zqn,
  bDe,
  e4n
};
