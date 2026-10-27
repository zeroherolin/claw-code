// vendor/ajv/chunk-de44k3s5.js — Claude Code 2.1.310 模块 chunk-de44k3s5.js
import { x } from "../react/chunk-meds60nn.js";
var x2o = x(function(p, s) {
  s.exports = function o(r, e) {
    if (r === e) return true;
    if (r && e && typeof r == "object" && typeof e == "object") {
      if (r.constructor !== e.constructor) return false;
      var u, t, f;
      if (Array.isArray(r)) {
        if (u = r.length, u != e.length) return false;
        for (t = u; t-- !== 0; ) if (!o(r[t], e[t])) return false;
        return true;
      }
      if (r.constructor === RegExp) return r.source === e.source && r.flags === e.flags;
      if (r.valueOf !== Object.prototype.valueOf) return r.valueOf() === e.valueOf();
      if (r.toString !== Object.prototype.toString) return r.toString() === e.toString();
      if (f = Object.keys(r), u = f.length, u !== Object.keys(e).length) return false;
      for (t = u; t-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(e, f[t])) return false;
      for (t = u; t-- !== 0; ) {
        var n = f[t];
        if (!o(r[n], e[n])) return false;
      }
      return true;
    }
    return r !== r && e !== e;
  };
});
var Cgn = x(function(l) {
  Object.defineProperty(l, "__esModule", { value: true });
  var c = x2o();
  c.code = 'require("ajv/dist/runtime/equal").default';
  l.default = c;
});
export {
  Cgn,
  x2o
};
