// shared/after-quickstart-saved-line.qc2a.js — Claude Code 2.1.310 模块 chunk-qc2ah1br.js
import "./chunk-9sbknd2z.js";
import "../fs/async-hooks.9s1z.js";
import "../context/not-admin-owned.ersa.js";
import "../fs/chunk-kqpf5fh3.js";
import "../agents/third-party.ydpb.js";
import "../telemetry/anthropic-workspace-id.36ys.js";
import "./chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import "./chunk-3y73jbfr.js";
import "../artifacts/cowritten-artifact-html.thm2.js";
import "../models/claude-3-5-sonnet.21mz.js";
import "../auth/oauth-2025-04-20.ke15.js";
import "../fs/gitlab-runner-authentication-token.d7b0.js";
import "./chunk-x6r6k81p.js";
import "../fs/backed-up.p1qn.js";
import "./chunk-j79dwkaq.js";
import "./chunk-nrx8c90j.js";
import "./environment.9a41.js";
import "../fs/chunk-dz0rx1wn.js";
import "./chunk-cg45s1mf.js";
import "./chunk-4kxy1036.js";
import "../remote/local-agent.we9a.js";
import "./chunk-vf2gp3w9.js";
import { Xi } from "../artifacts/cobalt-plinth-lovage.hxm5.js";
import "./chunk-nfgwaxf2.js";
import "./chunk-zmrs49f3.js";
import { wo } from "./chunk-rnxkk435.js";
function c(t, o, a, d) {
  let e = (i, r) => typeof i === "string" && typeof r === "string" && i === a(r), s = e(t.saved_pages_dir, o) ? `[A quickstart in this conversation saved reference pages of this type on disk in ${wo([t.saved_pages_dir])}; its result lists them, so those are not attached here.]` : "";
  if (t.not_listed === true) return s === "" ? "" : `

${s}`;
  let n = s === "" ? "" : ` ${s}`;
  if (typeof t.saved_system === "string" && e(t.saved_system_dir, t.saved_system)) return `

[A quickstart in this conversation already listed the design systems and saved the files of ${Xi(t.saved_system, "(unrecognized address)")} on disk — skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;
  return s === "" ? null : `${d}${n}`;
}
export {
  c as afterQuickstartSavedLine
};
