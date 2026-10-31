// darwin/ui/tmux-buffer.js — Claude Code 2.1.310（darwin）模块 chunk-w6360x24.js
import { c8, fhe, WKn, UC } from "../terminal/wl-copy.js";
import { w } from "./chunk-0ed4c357.js";
import { pn, n } from "../telemetry/render-glyph-cardinality.js";
import { q } from "../context/chunk-e2302e3b.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { de, P, A, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { b } from "../vendor/react/chunk-0b0bf45d.js";
j();
var R = 2e3, U = 2e3;
function Pfe(c) {
  let r = pn(), [i, t] = y(null), o = A(null), u = A(null), l = A(null), a = A(0), s = A(true), p = de(() => {
    a.current += 1, l.current?.(), l.current = null, u.current = null, o.current?.(), o.current = null, t(null);
  }, []);
  P(() => {
    if (p(), c !== null) WKn();
  }, [c, p]), P(() => (s.current = true, () => {
    s.current = false, l.current?.(), l.current = null, u.current = null, o.current?.(), o.current = null;
  }), []);
  let V = de((d) => {
    if (u.current === d) return;
    u.current = d, l.current?.(), l.current = r.setTimeout(() => {
      l.current = null, u.current = null;
    }, R);
    let m = fhe(), k = a.current;
    UC(d).then((v) => {
      if (!s.current || k !== a.current) return;
      if (v) process.stdout.write(v);
      o.current?.(), o.current = null;
      let f = m;
      if (m === "osc52" && c8()) f = fhe() === "native" ? "native" : "none";
      if (t(f), f === "native") o.current = r.setTimeout(() => {
        o.current = null, t(null);
      }, U);
    });
  }, [r]);
  return { copiedVia: i, copy: V, reset: p };
}
function zX(c) {
  let i = w(2), { via: r } = c;
  if (r === "native") {
    let t;
    if (i[0] === b) t = e(n, { color: "success", children: "(Copied!)" }), i[0] = t;
    else t = i[0];
    return t;
  }
  if (r === null) {
    let t;
    if (i[1] === b) t = e(n, { dimColor: true, children: e(q, { chord: "c", action: "copy", parens: true }) }), i[1] = t;
    else t = i[1];
    return t;
  }
  return null;
}
function VX(c) {
  let i = w(3), { via: r } = c;
  if (r === "tmux-buffer") {
    let t;
    if (i[0] === b) t = e(n, { dimColor: true, children: "(Copied to tmux buffer · select the URL manually if paste fails)" }), i[0] = t;
    else t = i[0];
    return t;
  }
  if (r === "none") {
    let t;
    if (i[1] === b) t = e(n, { dimColor: true, children: "(Couldn't copy · select the URL and copy it with your terminal)" }), i[1] = t;
    else t = i[1];
    return t;
  }
  if (r === "osc52") {
    let t;
    if (i[2] === b) t = e(n, { dimColor: true, children: "(Sent via OSC 52 · select the URL manually if paste fails)" }), i[2] = t;
    else t = i[2];
    return t;
  }
  return null;
}
export {
  Pfe,
  VX,
  zX
};
