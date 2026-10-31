// darwin/vendor/aws-sdk/chunk-dabc4269.js — Claude Code 2.1.310（darwin）模块 chunk-k5hq3azn.js
import { x } from "../react/chunk-0b0bf45d.js";
var lh = x(function(h) {
  class s extends Error {
    name = "ProviderError";
    tryNextLink;
    constructor(r, t = true) {
      let n, e = true;
      if (typeof t === "boolean") n = void 0, e = t;
      else if (t != null && typeof t === "object") n = t.logger, e = t.tryNextLink ?? true;
      super(r);
      this.tryNextLink = e, Object.setPrototypeOf(this, s.prototype), n?.debug?.(`@smithy/property-provider ${e ? "->" : "(!)"} ${r}`);
    }
    static from(r, t = true) {
      return Object.assign(new this(r.message, t), r);
    }
  }
  class f extends s {
    name = "CredentialsProviderError";
    constructor(r, t = true) {
      super(r, t);
      Object.setPrototypeOf(this, f.prototype);
    }
  }
  class l extends s {
    name = "TokenProviderError";
    constructor(r, t = true) {
      super(r, t);
      Object.setPrototypeOf(this, l.prototype);
    }
  }
  var y = (...r) => async () => {
    if (r.length === 0) throw new s("No providers in chain");
    let t;
    for (let n of r) try {
      return await n();
    } catch (e) {
      if (t = e, e?.tryNextLink) continue;
      throw e;
    }
    throw t;
  }, p = (r) => () => Promise.resolve(r), d = (r, t, n) => {
    let e, o, i, c = false, a = async () => {
      if (!o) o = r();
      try {
        e = await o, i = true, c = false;
      } finally {
        o = void 0;
      }
      return e;
    };
    if (t === void 0) return async (u) => {
      if (!i || u?.forceRefresh) e = await a();
      return e;
    };
    return async (u) => {
      if (!i || u?.forceRefresh) e = await a();
      if (c) return e;
      if (n && !n(e)) return c = true, e;
      if (t(e)) return await a(), e;
      return e;
    };
  };
  h.CredentialsProviderError = f;
  h.ProviderError = s;
  h.TokenProviderError = l;
  h.chain = y;
  h.fromStatic = p;
  h.memoize = d;
});
export {
  lh
};
