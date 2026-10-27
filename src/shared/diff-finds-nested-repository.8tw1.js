// shared/diff-finds-nested-repository.8tw1.js — Claude Code 2.1.310 模块 chunk-8tw1n3ya.js
var sVo = "runner-declares";
var cyn = "diff-finds-nested-repository", iVo = "no-repository-checked-out";
function aVo(e) {
  return "--runner-declares=" + e.join(",");
}
async function Dxi(e) {
  if (!e.startsWith("--runner-declares=")) return;
  let E = e.slice(18).split(",");
  if (!E.includes("diff-finds-nested-repository")) return;
  let { setRunnerDeclaredNestedRepositoryDiff: t, setRunnerDeclaredNoRepositoryCheckedOut: R } = await import("../mcp/acquire-mcp-clients-accessor.n7y2.js");
  if (t(true), E.includes("no-repository-checked-out")) R(true);
}
export {
  Dxi,
  aVo,
  cyn,
  iVo,
  sVo
};
