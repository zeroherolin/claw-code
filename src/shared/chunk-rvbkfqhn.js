// shared/chunk-rvbkfqhn.js — Claude Code 2.1.310 模块 chunk-rvbkfqhn.js
import { _, ee } from "../fs/gitlab-runner-authentication-token.d7b0.js";
var gyt = 0, i4n = 1, _dn = 262144, n = 5, Sdn = 1048576, U0e = 1e4;
function bdn(r) {
  let e = typeof r === "string" ? Buffer.from(r, "utf8") : r, t = Buffer.allocUnsafe(n + e.length);
  return t.writeUInt32BE(e.length, 0), t.writeUInt8(gyt, 4), e.copy(t, n), t;
}
function cU(r) {
  let e = Buffer.from(_(r), "utf8"), t = Buffer.allocUnsafe(n + e.length);
  return t.writeUInt32BE(e.length, 0), t.writeUInt8(i4n, 4), e.copy(t, n), t;
}
function a4n(r, e) {
  let t = Buffer.alloc(0), o = false;
  return (l) => {
    if (o) return;
    t = t.length === 0 ? l : Buffer.concat([t, l]);
    while (t.length >= n) {
      let f = t.readUInt32BE(0);
      if (f > Sdn) {
        o = true, e(`frame too large (${f} > ${Sdn})`);
        return;
      }
      let u = n + f;
      if (t.length < u) return;
      let i = t.readUInt8(4), s = t.subarray(n, u);
      if (t = t.subarray(u), i === gyt) r({ kind: gyt, payload: Buffer.from(s) });
      else if (i === i4n) {
        let c;
        try {
          c = ee(s.toString("utf8"));
        } catch {
          o = true, e("bad ctrl json");
          return;
        }
        r({ kind: i4n, ctrl: c });
      } else {
        o = true, e(`unknown frame kind ${i}`);
        return;
      }
    }
  };
}
export {
  Sdn,
  U0e,
  _dn,
  a4n,
  bdn,
  cU,
  gyt,
  i4n
};
