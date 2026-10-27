// hooks/create-device-hook-template-store.yh47.js — Claude Code 2.1.310 模块 chunk-yh47a4pq.js
import { I5o } from "../mcp/allowed-warning.j2d4.js";
import "../permissions/classifier-transcript-too-long.8zvz.js";
import "../shared/chunk-nyvhtfb3.js";
import "../permissions/quota-auto-resume-disabled.gt6d.js";
import { $at } from "./chunk-9jkyv6ws.js";
import { createHash as n } from "crypto";
function f(d = { byId: $at }) {
  let t = /* @__PURE__ */ new Map();
  return { accept({ template: r, digest: e, contentBase64: s }) {
    let o = d.byId(r);
    if (o === void 0) return { ok: false, kind: "refused", error: "template_refused: unknown_template" };
    if (!o.digests.some((i) => i.sha256 === e)) return { ok: false, kind: "refused", error: "template_refused: version_mismatch" };
    if (!I5o.test(s) || s.length % 4 === 1) return { ok: false, kind: "invalid", error: "invalid_upload: bad_base64" };
    let a = Buffer.from(s, "base64");
    if (a.length > o.maxBytes) return { ok: false, kind: "refused", error: "template_refused: too_large" };
    if (n("sha256").update(a).digest("hex") !== e) return { ok: false, kind: "refused", error: "template_refused: digest_mismatch" };
    if (t.has(e)) return { ok: true, status: "already_stored", template: o, bytes: a.length };
    return t.set(e, a), { ok: true, status: "stored", template: o, bytes: a.length };
  }, bytesFor: (r) => {
    let e = t.get(r);
    return e === void 0 ? void 0 : Buffer.from(e);
  }, template: (r) => d.byId(r), size: () => t.size, clear: () => t.clear() };
}
export {
  f as createDeviceHookTemplateStore
};
