// darwin/shared/create-from-type.js — Claude Code 2.1.310（darwin）模块 chunk-sbbdyp8q.js
import { lr, Jt } from "../artifacts/cobalt-plinth-lovage.js";
import { ot } from "../fs/chunk-86be9585.js";
import { eze, em } from "./chunk-39180da8.js";
import { D } from "./chunk-7027e6d5.js";
var C8n = /* @__PURE__ */ new Set(["publish_version", "edit_version", "publish_files", "copy_file", "create_from_type"]), M$o = /* @__PURE__ */ new Set(["publish_version", "publish_files", "authorize_upload"]);
function T8n(t, e) {
  return t === "create_from_type" || M$o.has(t) && !(D(e) && e.slug !== void 0 && e.slug !== null && e.slug !== "");
}
var _pn = "delete_artifact";
function s(t) {
  let e = Array.isArray(t) ? t.find((i) => D(i) && i.type === "text") : void 0, r = typeof t === "string" ? t : D(e) ? e.text : void 0;
  if (typeof r !== "string") return null;
  let o = ot(r, false);
  return D(o) ? o : null;
}
function A8n(t) {
  let e = s(t);
  if (e === null || typeof e.url !== "string") return null;
  let r = Jt(e.url);
  if (r === null || e.slug !== void 0 && e.slug !== r.slug) return null;
  let o = typeof e.title === "string" ? em(e.title) : null, i = typeof e.version === "string" && eze.test(e.version) ? e.version : void 0;
  return { slug: r.slug, env: r.env, ...o !== null && o !== "" && { title: o }, ...i !== void 0 && { version: i } };
}
function R8n(t) {
  let e = s(t);
  return e !== null && e.deleted === true && typeof e.slug === "string" && lr.test(e.slug) ? e.slug : null;
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
var ZGe = new n();
function r3s(t) {
  ZGe.register(t);
}
class l {
  arm = null;
  register(t) {
    this.arm = t;
  }
}
var H$o = new l();
function o3s(t) {
  H$o.register(t);
}
export {
  A8n,
  C8n,
  H$o,
  M$o,
  R8n,
  T8n,
  ZGe,
  _pn,
  o3s,
  r3s
};
