// darwin/shared/first-truncation.js — Claude Code 2.1.310（darwin）模块 chunk-pnw381n1.js
var hg = 1e4;
async function la(e, r, t) {
  let s = Math.max(1, Math.floor(t?.maxPages ?? 1e4)), u;
  for (let a = 0; a < s; a++) {
    if (t?.budget !== void 0) {
      if (t.budget.pagesLeft < 1) return { status: "capped" };
      t.budget.pagesLeft--;
    }
    let n = await e(u);
    if (!n.ok) return { status: "error", error: n.error };
    if (await r(n.value.items), t?.until?.()) return { status: "done" };
    if (u = n.value.cursor, !u) return { status: "done" };
  }
  return { status: "capped" };
}
function Hlr(e = 1e4) {
  return { pagesLeft: e, capped: 0 };
}
function Kpi(e, r) {
  if (e.status === "error") return "error";
  if (e.status === "capped") return r.capped++, r.capped === 1 ? "first-truncation" : void 0;
  return;
}
function qpi(e) {
  return Math.max(0, e.capped - 1);
}
export {
  Hlr,
  Kpi,
  hg,
  la,
  qpi
};
