// linux/ui/tmux-buffer.js — Claude Code 2.1.310（linux）模块 chunk-tr5ba667.js
import { e8, lhe, vqn, $T } from "../terminal/wl-copy.js";
import { w } from "./chunk-0ed4c357.js";
import { fn, n } from "../telemetry/render-glyph-cardinality.js";
import { V } from "../context/chunk-e2302e3b.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { de, P, C, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
j();
var U = 2e3, x = 2e3;
function Epe(c) {
  let r = fn(), [i, t] = y(null), o = C(null), u = C(null), l = C(null), a = C(0), s = C(true), p = de(() => {
    a.current += 1, l.current?.(), l.current = null, u.current = null, o.current?.(), o.current = null, t(null);
  }, []);
  P(() => {
    if (p(), c !== null) vqn();
  }, [c, p]), P(() => (s.current = true, () => {
    s.current = false, l.current?.(), l.current = null, u.current = null, o.current?.(), o.current = null;
  }), []);
  let k = de((d) => {
    if (u.current === d) return;
    u.current = d, l.current?.(), l.current = r.setTimeout(() => {
      l.current = null, u.current = null;
    }, U);
    let v = lhe(), R = a.current;
    $T(d).then((b) => {
      if (!s.current || R !== a.current) return;
      if (b) process.stdout.write(b);
      o.current?.(), o.current = null;
      let f = v;
      if (v === "osc52" && e8()) f = lhe() === "native" ? "native" : "none";
      if (t(f), f === "native") o.current = r.setTimeout(() => {
        o.current = null, t(null);
      }, x);
    });
  }, [r]);
  return { copiedVia: i, copy: k, reset: p };
}
function LX(c) {
  let i = w(2), { via: r } = c;
  if (r === "native") {
    let t;
    if (i[0] === S) t = e(n, { color: "success", children: "(Copied!)" }), i[0] = t;
    else t = i[0];
    return t;
  }
  if (r === null) {
    let t;
    if (i[1] === S) t = e(n, { dimColor: true, children: e(V, { chord: "c", action: "copy", parens: true }) }), i[1] = t;
    else t = i[1];
    return t;
  }
  return null;
}
function NX(c) {
  let i = w(3), { via: r } = c;
  if (r === "tmux-buffer") {
    let t;
    if (i[0] === S) t = e(n, { dimColor: true, children: "(Copied to tmux buffer · select the URL manually if paste fails)" }), i[0] = t;
    else t = i[0];
    return t;
  }
  if (r === "none") {
    let t;
    if (i[1] === S) t = e(n, { dimColor: true, children: "(Couldn't copy · select the URL and copy it with your terminal)" }), i[1] = t;
    else t = i[1];
    return t;
  }
  if (r === "osc52") {
    let t;
    if (i[2] === S) t = e(n, { dimColor: true, children: "(Sent via OSC 52 · select the URL manually if paste fails)" }), i[2] = t;
    else t = i[2];
    return t;
  }
  return null;
}
export {
  Epe,
  LX,
  NX
};
