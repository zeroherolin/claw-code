// linux/shared/chunk-e97d1551.js — Claude Code 2.1.310（linux）模块 chunk-2zp8by90.js
class l {
  implementation = null;
  isC4EUpsellCommandEnabled() {
    return this.implementation === null ? false : this.implementation();
  }
  register(e) {
    this.implementation = e;
  }
}
var SLo = new l();
function Gzs(e) {
  SLo.register(e.isC4EUpsellCommandEnabled);
}
export {
  Gzs,
  SLo
};
