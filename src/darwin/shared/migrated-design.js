// darwin/shared/migrated-design.js — Claude Code 2.1.310（darwin）模块 chunk-nsq0werm.js
function t(r, e, a, i = false, s = false) {
  return { path: `artifact-type/reference/${r}`, inlinedByCreate: e, printed: a, readByKit: i, needsDesignSystem: s };
}
var Eco = /* @__PURE__ */ new Map([["design", [t("format.md", true, true, true), t("design-system-components.md", true, false, true, true), t("fonts.md", false, true), t("craft.md", false, true)]], ["migrated-design", [t("format.md", true, true), t("fonts.md", false, true), t("craft.md", false, true)]], ["slides", [t("format.md", true, true, true), t("fonts.md", true, true, true), t("craft.md", false, true), t("deck-files.md", false, false, true)]]]), d = [t("format.md", false, true), t("fonts.md", false, true), t("craft.md", false, true)];
function n(r) {
  return (r === void 0 ? void 0 : Eco.get(r)) ?? d;
}
function Dbs(r) {
  return n(r).filter((e) => e.inlinedByCreate).map((e) => e.path);
}
function Lbs(r) {
  return n(r).filter((e) => e.inlinedByCreate && e.needsDesignSystem).map((e) => e.path);
}
function gbr(r) {
  return n(r).filter((e) => e.printed).map((e) => e.path);
}
function Nbs(r) {
  return n(r).filter((e) => e.readByKit).map((e) => e.path);
}
export {
  Dbs,
  Eco,
  Lbs,
  Nbs,
  gbr
};
