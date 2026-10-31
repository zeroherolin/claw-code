// darwin/remote/chunk-9a53b808.js — Claude Code 2.1.310（darwin）模块 chunk-espdp123.js
import { N } from "../telemetry/anthropic-workspace-id.js";
import { _ } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Uko } from "../core/conversation-engine.js";
import { Gyt } from "../agents/api-system.js";
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
