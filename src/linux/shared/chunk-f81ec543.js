// linux/shared/chunk-f81ec543.js — Claude Code 2.1.310（linux）模块 chunk-xkry565w.js
import { Zi } from "../telemetry/render-glyph-cardinality.js";
import { y, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
var aL = 150, Zr = 250, xpe = 600;
function ga(e, n, t = aL) {
  let o = e() - n;
  if (o >= 0) return o < t;
  return n <= Date.now();
}
function yIn(e) {
  let n = Zi(), [t, o] = y(() => ({ key: e, at: Date.now() }));
  if (t.key !== e) o({ key: e, at: Date.now() });
  return function() {
    return ga(n, t.at);
  };
}
export {
  Zr,
  aL,
  ga,
  xpe,
  yIn
};
