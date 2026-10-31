// linux/shared/create-from-type.js — Claude Code 2.1.310（linux）模块 chunk-f6febadb.js
import { ar, Jt } from "../artifacts/cobalt-plinth-lovage.js";
import { ot } from "../fs/chunk-86be9585.js";
import { Gze, em } from "./chunk-39180da8.js";
import { H } from "./chunk-7027e6d5.js";
var s8n = /* @__PURE__ */ new Set(["publish_version", "edit_version", "publish_files", "copy_file", "create_from_type"]), oFo = /* @__PURE__ */ new Set(["publish_version", "publish_files", "authorize_upload"]);
function i8n(t, e) {
  return t === "create_from_type" || oFo.has(t) && !(H(e) && e.slug !== void 0 && e.slug !== null && e.slug !== "");
}
var nfn = "delete_artifact";
function s(t) {
  let e = Array.isArray(t) ? t.find((i) => H(i) && i.type === "text") : void 0, r = typeof t === "string" ? t : H(e) ? e.text : void 0;
  if (typeof r !== "string") return null;
  let o = ot(r, false);
  return H(o) ? o : null;
}
function a8n(t) {
  let e = s(t);
  if (e === null || typeof e.url !== "string") return null;
  let r = Jt(e.url);
  if (r === null || e.slug !== void 0 && e.slug !== r.slug) return null;
  let o = typeof e.title === "string" ? em(e.title) : null, i = typeof e.version === "string" && Gze.test(e.version) ? e.version : void 0;
  return { slug: r.slug, env: r.env, ...o !== null && o !== "" && { title: o }, ...i !== void 0 && { version: i } };
}
function l8n(t) {
  let e = s(t);
  return e !== null && e.deleted === true && typeof e.slug === "string" && ar.test(e.slug) ? e.slug : null;
}
class n {
  writers = null;
  loadWriters = null;
  register(t) {
    this.writers = t;
  }
  loaded() {
    if (this.writers === null) this.loadWriters?.();
    return this.writers;
  }
}
var Wze = new n();
function _4s(t) {
  Wze.register(t);
}
class l {
  arm = null;
  register(t) {
    this.arm = t;
  }
}
var sFo = new l();
function b4s(t) {
  sFo.register(t);
}
export {
  Wze,
  _4s,
  a8n,
  b4s,
  i8n,
  l8n,
  nfn,
  oFo,
  s8n,
  sFo
};
