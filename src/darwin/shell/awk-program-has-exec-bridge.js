// darwin/shell/awk-program-has-exec-bridge.js — Claude Code 2.1.310（darwin）模块 chunk-rzr346a9.js
import { gQ, mi, zye, NXn, sjo, ijo, ajo, nbt, Sjr, FXn, bjr, wjr, mWt, gWt, $Xn, UXn, Ejr, BXn, tj, vjr, K3, jXn, Zfn, kjr, WXn, emn, ljo, rbt, Hze, rDe, tmn, hWt, nmn, rmn, jre, BTe, yWt, Vye, omn, nL, oDe, hQ, djo, Cjr, vet, obt, Tjr, Ajr, sbt, smn, imn, ibt, ket, q3, Dze, GXn, amn, _Wt } from "./tree-sitter-parse-abort.js";
import "../fs/redirected-statement.js";
import "../telemetry/chunk-addb1ac7.js";
import "../git/ssh-placeholder.js";
import "../shared/chunk-537f65d6.js";
import "../mcp/toolbox-mcp-server-id.js";
import "../context/fetch-project-timeline.js";
import "../telemetry/chunk-b109a1d6.js";
import "../mcp/claude-browser.js";
import "../shared/chunk-f98598c3.js";
import "../shared/chunk-6ae01e90.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "./spawn-error.js";
import "../fs/chunk-9b7a3f1c.js";
import "../settings/workflow-launch-exec.js";
import "../models/total-tokens-reminder.js";
import "../models/claude-mythos-preview.js";
import "./invalid-type.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../permissions/classifier-transcript-too-long.js";
import "../plugins/skills-dir.js";
import "../shared/chunk-1b1c4439.js";
import "../fs/chunk-86be9585.js";
import "../mcp/always-allow.js";
import "../mcp/chunk-0e2a1db6.js";
import "../terminal/chunk-3ca478a4.js";
import "../auth/profile-explicit.js";
import "../shared/chunk-2fe3b2b7.js";
import "../fs/chunk-475c6783.js";
import "../fs/ca-certs-load.js";
import "../fs/content-encoding.js";
import "../remote/self-hosted.js";
import "../shared/sk-ant-sid.js";
import "../auth/descriptor-direct.js";
import "../remote/moved-directory.js";
import "../shared/chunk-cc3baac1.js";
import "../git/utf-8.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/async-hooks.7959.js";
import "../shared/chunk-d4196a83.js";
import "../shared/async-hooks.9e79.js";
import "../git/utf8-keep-bom.js";
import "../shared/chunk-4563156b.js";
import "../plugins/chunk-0a4c51cf.js";
import "../shared/chunk-1f805b50.js";
import "../shared/chunk-8eee6836.js";
import "../git/chunk-c16cb6b4.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../fs/utf-8.aa9a.js";
import "./chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "../fs/utf-8.8f8e.js";
import "./chunk-fea9c492.js";
import "../shared/chunk-8bf008d9.js";
import "../artifacts/chunk-a6c9d164.js";
import "../shared/async-hooks.5238.js";
import "../telemetry/chunk-9d6962d2.js";
import "../shared/chunk-6da6c5a3.js";
import "../cli/chunk-af2447be.js";
import "../mcp/init-function-end.js";
import "../shared/chunk-86ecf3aa.js";
import "../remote/local-agent.js";
import "../telemetry/chunk-9097a12b.js";
import "../shared/chunk-59ffb646.js";
import "../shared/environment.js";
import "../fs/chunk-ce5d00cd.js";
import "../auth/oauth-2025-04-20.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-d2c47492.js";
import "../fs/backed-up.js";
import "../context/not-admin-owned.js";
import "../shared/chunk-3b9c376b.js";
import "../shared/chunk-0870a9b4.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../remote/chunk-95151620.js";
import "../fs/async-hooks.93b1.js";
import "../shared/chunk-50219e50.js";
export {
  omn as APPLET_SHELL_NAMES,
  BTe as AWK_NAMES,
  bjr as BACKSLASH_ESCAPED_SPACE_RE,
  wjr as BACKSLASH_LINE_CONTINUATION_RE,
  Tjr as BARE_SUBSCRIPT_NAME_BUILTINS,
  emn as BASH_IMPLICITLY_REBOUND_VARS,
  gQ as CMDSUB_PLACEHOLDER,
  nbt as CONTROL_CHAR_RE,
  sbt as DECLARATION_LIKE_BUILTINS,
  jre as EVAL_LIKE_BUILTINS,
  ibt as INTEGER_ATTR_DEFAULT_VARS,
  Sjr as LONE_SURROGATE_RE,
  Vye as POSIX_SHELL_NAMES,
  WXn as POSIX_SPECIAL_BUILTINS_NONEVAL,
  Ajr as PRINT_PROMPT_FLAG,
  Dze as READ_DATA_FLAGS,
  GXn as READ_NUMERIC_ARG_FLAGS,
  amn as READ_NUMERIC_OPERAND_RE,
  imn as SET_O_SAFE_LETTERS,
  smn as SET_O_SAFE_OPTS,
  nL as SHELL_PROGRAM_NAMES,
  Cjr as SUBSCRIPT_EVAL_FLAGS,
  vet as TEST_ARITH_CMP_OPS,
  obt as TEST_ARITH_NUMERIC_RE,
  oDe as TRANSPARENT_LAUNCHER_NAMES,
  hQ as UNHANDLED_EXEC_WRAPPERS,
  FXn as UNICODE_WHITESPACE_RE,
  mWt as WORD_LEAF_EXPANSION_RE,
  gWt as WORD_LEAF_QUOTE_RE,
  rDe as ZSH_DANGEROUS_BUILTINS,
  UXn as ZSH_EQUALS_EXPANSION_RE,
  Ejr as ZSH_NUMERIC_GLOB_RE,
  kjr as ZSH_SPECIAL_SUBSCRIPT_TESTEXPR_RE,
  $Xn as ZSH_TILDE_BRACKET_RE,
  yWt as awkProgramHasExecBridge,
  _Wt as checkSemantics,
  mi as containsAnyPlaceholder,
  sjo as containsRuntimePlaceholder,
  Zfn as containsStandaloneCondCloser,
  vjr as declarationPrefixReadings,
  NXn as deletePlaceholders,
  nmn as findWordTakesFlagValue,
  hWt as findWordTakesOperand,
  BXn as hasSourceUnquotedGlob,
  rmn as isAmbiguousFindWord,
  q3 as isAssignmentNameUnsafeForSandbox,
  ket as isExecInfluencingVar,
  tmn as isFindDangerousAction,
  djo as isSandboxAutoAllowUnsafeBase,
  ljo as liveBracedExpansionBodies,
  ajo as nodeTypeId,
  tj as parseForSecurity,
  K3 as parseForSecurityFromAst,
  zye as redactPlaceholdersForDisplay,
  jXn as scanSameLineStatementSplits,
  ijo as startsWithAnyPlaceholder,
  rbt as stripLiteralQuotedRegions,
  Hze as stripQuotedRegions
};
