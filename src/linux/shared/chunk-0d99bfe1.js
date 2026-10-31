// linux/shared/chunk-0d99bfe1.js — Claude Code 2.1.310（linux）模块 chunk-mnrc938a.js
import { de, P, y, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function mE(r) {
  let [t, n] = y({ attempts: 0, refused: null }), s = de((e) => {
    n((a) => ({ attempts: a.attempts + 1, refused: e }));
  }, []), u = de((e) => {
    if (r(e) === false) return s(e), false;
    return true;
  }, [r, s]);
  return P(() => {
    if (t.refused !== null) n((e) => ({ attempts: e.attempts, refused: null }));
  }, [t.refused]), { answer: u, refuse: s, refused: t.refused, attempts: t.attempts };
}
export {
  mE
};
