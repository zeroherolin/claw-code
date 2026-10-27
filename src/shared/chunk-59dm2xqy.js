// shared/chunk-59dm2xqy.js — Claude Code 2.1.310 模块 chunk-59dm2xqy.js
import { x } from "../vendor/react/chunk-meds60nn.js";
var a = x(function(u) {
  function c(t) {
    let r = {};
    if (t = t.replace(/^\?/, ""), t) for (let n of t.split("&")) {
      let [e, s = null] = n.split("=");
      if (e = decodeURIComponent(e), s) s = decodeURIComponent(s);
      if (!(e in r)) r[e] = s;
      else if (Array.isArray(r[e])) r[e].push(s);
      else r[e] = [r[e], s];
    }
    return r;
  }
  u.parseQueryString = c;
});
var HV = x(function(y) {
  var l = a(), i = (t) => {
    if (typeof t === "string") return i(new URL(t));
    let { hostname: r, pathname: n, port: e, protocol: s, search: o } = t, p;
    if (o) p = l.parseQueryString(o);
    return { hostname: r, port: e ? parseInt(e) : void 0, protocol: s, path: n, query: p };
  };
  y.parseUrl = i;
});
export {
  HV
};
