// darwin/shared/chunk-2fe3b2b7.js — Claude Code 2.1.310（darwin）模块 chunk-nyvhtfb3.js
class i {
  resetters = [];
  built = [];
  lazy(e) {
    let t, r = () => {
      t = void 0;
    };
    return this.resetters.push(r), () => {
      if (t === void 0) t = e(), this.built.push(r);
      return t;
    };
  }
  builtCount() {
    return this.built.length;
  }
  releaseBuiltSince(e) {
    for (let t of this.built.splice(e)) t();
  }
  reset() {
    for (let e of this.resetters) e();
    this.built.length = 0;
  }
}
var s8r = new i();
function f(e) {
  return s8r.lazy(e);
}
export {
  f,
  s8r
};
