// linux/shared/file-attachments.js — Claude Code 2.1.310（linux）模块 chunk-7faha9cq.js
import { p } from "./chunk-2fe3b2b7.js";
import { o, v, M, u } from "../vendor/zod/string-format.js";
var c = p(() => u({ file_uuid: o(), file_name: o(), is_image: M().nullish(), sha256: o().nullish().catch(null), file_size: v().nullish().catch(void 0) })), s = 256;
function _x(t) {
  if (typeof t !== "object" || t === null || !("file_attachments" in t)) return [];
  let e = t.file_attachments;
  if (!Array.isArray(e)) return [];
  let a = c();
  return e.slice(0, s).flatMap((r) => {
    let n = a.safeParse(r);
    return n.success ? [n.data] : [];
  });
}
var i = p(() => u({ shouldQuery: M().optional() }));
function Dfn(t) {
  return i().safeParse(t).data?.shouldQuery;
}
export {
  Dfn,
  _x
};
