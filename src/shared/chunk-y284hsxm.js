// shared/chunk-y284hsxm.js — Claude Code 2.1.310 模块 chunk-y284hsxm.js
import { bo } from "../context/not-admin-owned.ersa.js";
import { w } from "../ui/chunk-zqxc4qtb.js";
import { e } from "../vendor/react/chunk-f790ajz4.js";
import { Gt, Se, A, y, kt, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
var l = Gt(null), d = Gt(null), P = Gt(null), h = () => () => {
};
function egr(i) {
  let r = w(11), { session: o, children: c } = i, s;
  if (r[0] !== o) s = () => ({ subscribe: o.subscribe, get: () => bo(o) }), r[0] = o, r[1] = s;
  else s = r[1];
  let [u] = y(s), t;
  if (r[2] !== c || r[3] !== u) t = e(P.Provider, { value: u, children: c }), r[2] = c, r[3] = u, r[4] = t;
  else t = r[4];
  let n;
  if (r[5] !== o.host || r[6] !== t) n = e(d.Provider, { value: o.host, children: t }), r[5] = o.host, r[6] = t, r[7] = n;
  else n = r[7];
  let p;
  if (r[8] !== o || r[9] !== n) p = e(l.Provider, { value: o, children: n }), r[8] = o, r[9] = n, r[10] = p;
  else p = r[10];
  return p;
}
function tgr(i) {
  let s = w(8), { host: o, project: c, children: r } = i, u;
  if (s[0] !== c) u = () => ({ subscribe: h, get: () => c }), s[0] = c, s[1] = u;
  else u = s[1];
  let [t] = y(u), n;
  if (s[2] !== r || s[3] !== t) n = e(P.Provider, { value: t, children: r }), s[2] = r, s[3] = t, s[4] = n;
  else n = s[4];
  let p;
  if (s[5] !== o || s[6] !== n) p = e(d.Provider, { value: o, children: n }), s[5] = o, s[6] = n, s[7] = p;
  else p = s[7];
  return p;
}
function Es() {
  let i = Se(d);
  if (!i) {
    throw ReferenceError("useHost cannot be called outside of a <SessionProvider /> or <HostProjectProvider />");
  }
  return i;
}
function wC(i) {
  let o = Se(P);
  if (!o) {
    throw ReferenceError("useProject cannot be called outside of a <SessionProvider /> or <HostProjectProvider />");
  }
  return v(o, o.subscribe, o.get, i);
}
function BR() {
  return Se(l) ?? void 0;
}
function Jr(i) {
  let c = w(2), o = Se(l);
  if (!o) {
    throw ReferenceError("useSession cannot be called outside of a <SessionProvider />");
  }
  let r;
  if (c[0] !== o) r = () => o, c[0] = o, c[1] = r;
  else r = c[1];
  return v(o, o.subscribe, r, i);
}
function v(i, o, c, r) {
  let s = A(null);
  if (s.current === null || s.current.owner !== i) {
    let t = { owner: i, read: c, selector: r, get: () => {
      let n = t.read();
      return t.selector ? t.selector(n) : n;
    } };
    s.current = t;
  }
  s.current.read = c, s.current.selector = r;
  let u = s.current.get;
  return kt(o, u, u);
}
export {
  BR,
  Es,
  Jr,
  egr,
  tgr,
  wC
};
