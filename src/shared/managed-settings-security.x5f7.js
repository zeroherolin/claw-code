// shared/managed-settings-security.x5f7.js — Claude Code 2.1.310 模块 chunk-x5f727b9.js
import { Zi, J1 } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { ha } from "./chunk-6d9n0jaa.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { w } from "../ui/chunk-zqxc4qtb.js";
import { LA } from "../cli/tty-stream-error.a1a1.js";
import { eS } from "../ui/chord-started.x7d9.js";
import { Y$e } from "../ui/chunk-pa7t20es.js";
import { e } from "../vendor/react/chunk-f790ajz4.js";
var uxt = (g, s, u) => new Promise((a, c) => {
  let n = false, o = null;
  function i(t) {
    return o !== null && !ha(t, o);
  }
  (async () => {
    let { rerender: t, unmount: p, waitUntilExit: f } = await J1(e(eS, { children: e(d, { settings: g, baseline: u, onAccept: (r) => {
      if (!i(r)) return false;
      if (n = true, a("approved"), t(null), !s) p();
    }, onReject: (r) => {
      if (!i(r)) return false;
      if (n = true, a("rejected"), t(null), !s) p();
    } }) }, "managed-settings-security"), LA(false));
    if (o = Date.now(), await f(), !n) {
      let r = Error("Managed-settings consent dialog exited without an answer");
      l(r), c(r);
    }
  })().catch((t) => {
    l(t), c(t);
  });
});
function d(g) {
  let o = w(11), { settings: s, baseline: u, onAccept: a, onReject: c } = g, n = Zi(), i;
  if (o[0] !== n || o[1] !== a) i = () => a(n), o[0] = n, o[1] = a, o[2] = i;
  else i = o[2];
  let t;
  if (o[3] !== n || o[4] !== c) t = () => c(n), o[3] = n, o[4] = c, o[5] = t;
  else t = o[5];
  let p;
  if (o[6] !== u || o[7] !== s || o[8] !== i || o[9] !== t) p = e(Y$e, { settings: s, baseline: u, reveal: "default", onAccept: i, onReject: t }), o[6] = u, o[7] = s, o[8] = i, o[9] = t, o[10] = p;
  else p = o[10];
  return p;
}
export {
  uxt
};
