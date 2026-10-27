// remote/chunk-espdp123.js — Claude Code 2.1.310 模块 chunk-espdp123.js
import { N } from "../telemetry/anthropic-workspace-id.36ys.js";
import { _ } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { Uko } from "../core/conversation-engine.31gx.js";
import { Gyt } from "../agents/api-system.j9gt.js";
function r9e() {
  try {
    return Gyt() || Uko({ kind: "bridge" });
  } catch (r) {
    return l(N(r)), true;
  }
}
var e = /\u2028|\u2029/g;
function Jfe(r) {
  return _(r).replace(e, (o) => o === "\u2028" ? "\\u2028" : "\\u2029");
}
export {
  Jfe,
  r9e
};
