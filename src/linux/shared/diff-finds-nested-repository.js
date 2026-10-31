// linux/shared/diff-finds-nested-repository.js — Claude Code 2.1.310（linux）模块 chunk-s2zyg7bw.js
var IKo = "runner-declares";
var Vhn = "diff-finds-nested-repository", OKo = "no-repository-checked-out";
function MKo(e) {
  return "--runner-declares=" + e.join(",");
}
async function JRi(e) {
  if (!e.startsWith("--runner-declares=")) return;
  let E = e.slice(18).split(",");
  if (!E.includes("diff-finds-nested-repository")) return;
  let { setRunnerDeclaredNestedRepositoryDiff: t, setRunnerDeclaredNoRepositoryCheckedOut: R } = await import("../mcp/acquire-mcp-clients-accessor.js");
  if (t(true), E.includes("no-repository-checked-out")) R(true);
}
export {
  IKo,
  JRi,
  MKo,
  OKo,
  Vhn
};
