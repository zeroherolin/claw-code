// shared/file-attachments.4ctq.js — Claude Code 2.1.310 模块 chunk-4ctq945c.js
import { f } from "./chunk-nyvhtfb3.js";
import { o, E, M, u } from "../vendor/zod/string-format.k395.js";
var c = f(() => u({ file_uuid: o(), file_name: o(), is_image: M().nullish(), sha256: o().nullish().catch(null), file_size: E().nullish().catch(void 0) })), s = 256;
function wx(t) {
  if (typeof t !== "object" || t === null || !("file_attachments" in t)) return [];
  let e = t.file_attachments;
  if (!Array.isArray(e)) return [];
  let a = c();
  return e.slice(0, s).flatMap((r) => {
    let n = a.safeParse(r);
    return n.success ? [n.data] : [];
  });
}
var i = f(() => u({ shouldQuery: M().optional() }));
function Xpn(t) {
  return i().safeParse(t).data?.shouldQuery;
}
export {
  Xpn,
  wx
};
