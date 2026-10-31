// linux/shared/migrated-design.js — Claude Code 2.1.310（linux）模块 chunk-qv7h707n.js
function t(r, e, a, i = false, s = false) {
  return { path: `artifact-type/reference/${r}`, inlinedByCreate: e, printed: a, readByKit: i, needsDesignSystem: s };
}
var sco = /* @__PURE__ */ new Map([["design", [t("format.md", true, true, true), t("design-system-components.md", true, false, true, true), t("fonts.md", false, true), t("craft.md", false, true)]], ["migrated-design", [t("format.md", true, true), t("fonts.md", false, true), t("craft.md", false, true)]], ["slides", [t("format.md", true, true, true), t("fonts.md", true, true, true), t("craft.md", false, true), t("deck-files.md", false, false, true)]]]), d = [t("format.md", false, true), t("fonts.md", false, true), t("craft.md", false, true)];
function n(r) {
  return (r === void 0 ? void 0 : sco.get(r)) ?? d;
}
function iSs(r) {
  return n(r).filter((e) => e.inlinedByCreate).map((e) => e.path);
}
function aSs(r) {
  return n(r).filter((e) => e.inlinedByCreate && e.needsDesignSystem).map((e) => e.path);
}
function tSr(r) {
  return n(r).filter((e) => e.printed).map((e) => e.path);
}
function lSs(r) {
  return n(r).filter((e) => e.readByKit).map((e) => e.path);
}
export {
  aSs,
  iSs,
  lSs,
  sco,
  tSr
};
