// linux/shared/chunk-2fe3b2b7.js — Claude Code 2.1.310（linux）模块 chunk-qmkm2x59.js
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
var K3r = new i();
function p(e) {
  return K3r.lazy(e);
}
export {
  K3r,
  p
};
