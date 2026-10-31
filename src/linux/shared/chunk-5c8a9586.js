// linux/shared/chunk-5c8a9586.js — Claude Code 2.1.310（linux）模块 chunk-h77sc3qf.js
import { x } from "../vendor/react/chunk-0b0bf45d.js";
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
var EV = x(function(y) {
  var l = a(), i = (t) => {
    if (typeof t === "string") return i(new URL(t));
    let { hostname: r, pathname: n, port: e, protocol: s, search: o } = t, p;
    if (o) p = l.parseQueryString(o);
    return { hostname: r, port: e ? parseInt(e) : void 0, protocol: s, path: n, query: p };
  };
  y.parseUrl = i;
});
export {
  EV
};
