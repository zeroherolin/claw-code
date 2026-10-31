// darwin/shared/chunk-f81ec543.js — Claude Code 2.1.310（darwin）模块 chunk-6d9n0jaa.js
import { Zi } from "../telemetry/render-glyph-cardinality.js";
import { y, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
var cD = 150, Zr = 250, Lfe = 600;
function ha(e, n, t = cD) {
  let o = e() - n;
  if (o >= 0) return o < t;
  return n <= Date.now();
}
function MIn(e) {
  let n = Zi(), [t, o] = y(() => ({ key: e, at: Date.now() }));
  if (t.key !== e) o({ key: e, at: Date.now() });
  return function() {
    return ha(n, t.at);
  };
}
export {
  Lfe,
  MIn,
  Zr,
  cD,
  ha
};
