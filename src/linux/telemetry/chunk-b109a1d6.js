// linux/telemetry/chunk-b109a1d6.js — Claude Code 2.1.310（linux）模块 chunk-drhbqmbg.js
class u {
  reader = null;
  register(e) {
    let r = this.reader;
    return this.reader = e, r;
  }
}
var o = new u();
function Rii(e) {
  return o.register(e);
}
function Nor() {
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
function xii(e) {
  return d.register(e);
}
function Pii() {
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
  Nor,
  Pii,
  Rii,
  xii
};
