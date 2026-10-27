// skills/skill-design-sync.ryj6.js — Claude Code 2.1.310 模块 chunk-ryj60c9z.js
import { __asset_path, __asset_text } from "../runtime/assets.js";
import { dt } from "../fs/chunk-m1c94bsz.js";
import { x, $e } from "../vendor/react/chunk-meds60nn.js";
var c = x(function(ie, b) {
  b.exports = __asset_text("skills/design-sync/converter/detect.mjs");
});
var l = x(function(ae, g) {
  g.exports = __asset_text("skills/design-sync/converter/source-kit.mjs");
});
var p = x(function(ce, S) {
  S.exports = __asset_text("skills/design-sync/converter/css-fallback.mjs");
});
var d = x(function(le, w) {
  w.exports = __asset_text("skills/design-sync/converter/preview-gen-storybook.mjs");
});
var m = x(function(pe, v) {
  v.exports = __asset_text("skills/design-sync/converter/http-serve.mjs");
});
var f = x(function(de, k) {
  k.exports = __asset_text("skills/design-sync/converter/probe.mjs");
});
var s = __asset_path("skills/design-sync/non-storybook/SKILL.md");
var o = dt(s, import.meta.dirname);
var r = __asset_path("skills/design-sync/SKILL.md");
var n = dt(r, import.meta.dirname);
var i = __asset_path("skills/design-sync/storybook/SKILL.md");
var a = dt(i, import.meta.dirname);
var e = (t) => typeof t === "string" ? t : t.default, R = import.meta.require("./skill-design-sync.554q.js"), C = import.meta.require("./skill-design-sync.rpxp.js"), F = import.meta.require("./skill-design-sync.mebz.js"), L = c(), P = import.meta.require("./skill-design-sync.bkv5.js"), O = import.meta.require("./skill-design-sync.55zj.js"), T = import.meta.require("./skill-design-sync.2ew9.js"), j = import.meta.require("./skill-design-sync.bqcy.js"), I = l(), M = import.meta.require("./skill-design-sync.2ctm.js"), _ = p(), D = import.meta.require("./skill-design-sync.595k.js"), E = import.meta.require("./skill-design-sync.e1pd.js"), q = d(), H = import.meta.require("./skill-design-sync.58ev.js"), G = import.meta.require("./skill-design-sync.82je.js"), B = m(), N = f(), A = import.meta.require("./skill-design-sync.1nhq.js"), U = import.meta.require("./skill-design-sync.r4qg.js"), Z = import.meta.require("./skill-design-sync.j7x6.js"), J = import.meta.require("./skill-design-sync.n8ab.js"), z = import.meta.require("./skill-design-sync.qg55.js"), ue = n, ye = { "storybook/SKILL.md": a, "non-storybook/SKILL.md": o, "package-build.mjs": e(R), "package-validate.mjs": e(C), "lib/common.mjs": e(F), "lib/detect.mjs": e(L), "lib/bundle.mjs": e(P), "lib/dts.mjs": e(O), "lib/css.mjs": e(T), "lib/source-storybook.mjs": e(j), "lib/source-kit.mjs": e(I), "lib/story-imports.mjs": e(M), "lib/css-fallback.mjs": e(_), "lib/emit.mjs": e(D), "lib/previews.mjs": e(E), "lib/preview-gen-storybook.mjs": e(q), "lib/docs.mjs": e(H), "lib/preview-rebuild.mjs": e(G), "storybook/http-serve.mjs": e(B), "storybook/probe.mjs": e(N), "storybook/compare.mjs": e(A), "package-capture.mjs": e(U), "lib/sync-hashes.mjs": e(Z), "lib/remote-diff.mjs": e(J), "resync.mjs": e(z) };
export {
  ye as SKILL_FILES,
  ue as SKILL_MD
};
