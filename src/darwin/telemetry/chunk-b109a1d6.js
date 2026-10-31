// darwin/telemetry/chunk-b109a1d6.js — Claude Code 2.1.310（darwin）模块 chunk-8c3dyx0k.js
class u {
  reader = null;
  register(e) {
    let r = this.reader;
    return this.reader = e, r;
  }
}
var o = new u();
function pai(e) {
  return o.register(e);
}
function tsr() {
  let e = o.reader;
  if (!e) return true;
  try {
    let { value: r, source: t, defaultHost: a } = e("tengu_tingly_pearl", true);
    return r !== false || t !== "payload" || !a;
  } catch {
    return true;
  }
}
class n {
  reader = null;
  register(e) {
    let r = this.reader;
    return this.reader = e, r;
  }
}
var d = new n();
function fai(e) {
  return d.register(e);
}
function mai() {
  let e = d.reader;
  if (!e) return true;
  try {
    let { value: r, source: t, defaultHost: a } = e("tengu_calm_nautilus", true);
    return r !== false || t !== "payload" || !a;
  } catch {
    return true;
  }
}
export {
  fai,
  mai,
  pai,
  tsr
};
