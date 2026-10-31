// darwin/shared/chunk-8df782f9.js — Claude Code 2.1.310（darwin）模块 chunk-qrdwg3n8.js
import { x } from "../vendor/react/chunk-0b0bf45d.js";
var DGt = x(function(c) {
  var i = {}, r = {};
  for (let e = 0; e < 256; e++) {
    let t = e.toString(16).toLowerCase();
    if (t.length === 1) t = `0${t}`;
    i[e] = t, r[t] = e;
  }
  function s(e) {
    if (e.length % 2 !== 0) throw Error("Hex encoded strings must have an even number length");
    let t = new Uint8Array(e.length / 2);
    for (let n = 0; n < e.length; n += 2) {
      let o = e.slice(n, n + 2).toLowerCase();
      if (o in r) t[n / 2] = r[o];
      else throw Error(`Cannot decode unrecognized sequence ${o} as hexadecimal`);
    }
    return t;
  }
  function l(e) {
    let t = "";
    for (let n = 0; n < e.byteLength; n++) t += i[e[n]];
    return t;
  }
  c.fromHex = s;
  c.toHex = l;
});
export {
  DGt
};
