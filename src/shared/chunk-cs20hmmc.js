// shared/chunk-cs20hmmc.js — Claude Code 2.1.310 模块 chunk-cs20hmmc.js
import { un } from "../fs/async-hooks.2k4e.js";
import { pn } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { an } from "./chunk-vj9gqe2s.js";
import { de, kt, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
function b$(r, o, t = 1e3, n = 0, a) {
  let e = pn(), u = () => un(Math.max(0, (a ?? Date.now()) - r - n)), l = de((f) => {
    if (!o) return () => {
    };
    let i, s = () => {
      try {
        f();
      } finally {
        i = e.setTimeout(s, t);
      }
    };
    return i = e.setTimeout(s, t), () => i();
  }, [o, t, e]);
  return kt(l, u, u);
}
function Vz({ onClose: r, onBack: o, onKill: t, onEnter: n }) {
  return an({ "confirm:yes": n ?? r }, { context: "Confirmation" }), function(e) {
    if (e.key === " ") e.preventDefault(), r();
    else if (e.key === "left" && o) e.preventDefault(), o();
    else if (e.key === "x" && !e.ctrl && !e.meta && t) e.preventDefault(), t();
  };
}
export {
  Vz,
  b$
};
