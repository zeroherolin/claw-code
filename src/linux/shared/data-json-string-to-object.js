// linux/shared/data-json-string-to-object.js — Claude Code 2.1.310（linux）模块 chunk-749e7ccs.js
import { ot } from "../fs/chunk-86be9585.js";
import { xq, yi } from "./chunk-d2c47492.js";
import { YV } from "../artifacts/cobalt-plinth-lovage.js";
import { aot } from "../shell/invalid-type.js";
import { H } from "./chunk-7027e6d5.js";
var u = ["note", "lang"], c = `Note: \`label\` was longer than ${YV} characters and was cut to that length; only its start was kept. A label is a few words naming the version, not a description of the changes.`;
function vDn(t) {
  if (!H(t)) return null;
  let r = u.filter((e) => e in t), o;
  if (typeof t.label === "string" && xq(t.label) > YV) {
    let e = t.label.replaceAll(`\r
`, `
`).trim(), p = xq(e) > YV;
    o = { value: p ? yi(e, YV).trimEnd() : e, cut: p };
  }
  let s, a;
  if (t.action === "call_endpoint" && typeof t.body === "string") {
    let e = aot(ot(t.body, false)).stripped;
    if (Array.isArray(e)) s = "array";
    else if (e !== null && typeof e === "object") s = "object";
    a = e;
  }
  let l;
  if (t.action === "write_db" && typeof t.data === "string") {
    let e = aot(ot(t.data, false)).stripped;
    if (H(e)) l = e;
  }
  let d = (t.action === void 0 || t.action === "publish") && Array.isArray(t.files) && t.files.some((e) => typeof e === "string") ? t.files.map((e) => typeof e === "string" ? { path: e } : e) : void 0, f = (t.action === void 0 || t.action === "publish") && Array.isArray(t.edits) && t.edits.length === 0;
  if (r.length === 0 && s === void 0 && l === void 0 && d === void 0 && !f && o === void 0) return null;
  let n = { ...t }, i = [];
  for (let e of r) delete n[e], i.push(`legacy_${e}`);
  if (s !== void 0) n.body = a, i.push(`body_json_string_to_${s}`);
  if (l !== void 0) n.data = l, i.push("data_json_string_to_object");
  if (d !== void 0) n.files = d, i.push("files_string_list");
  if (f) delete n.edits, i.push("edits_empty");
  if (o !== void 0) n.label = o.value, i.push(o.cut ? "label_clamped" : "label_trimmed");
  return { input: n, shapeClass: i.join("+"), ...o?.cut && { resultNote: c } };
}
export {
  vDn
};
