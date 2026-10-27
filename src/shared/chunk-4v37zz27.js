// shared/chunk-4v37zz27.js — Claude Code 2.1.310 模块 chunk-4v37zz27.js
import { de, P, y, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
function gv(r) {
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
  gv
};
