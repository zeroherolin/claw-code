// darwin/shared/chunk-7c8022d3.js — Claude Code 2.1.310（darwin）模块 chunk-5710zkfq.js
import { Gos } from "../context/not-admin-owned.js";
import { G } from "../telemetry/anthropic-workspace-id.js";
import { _t, _, ee } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { f } from "./chunk-2fe3b2b7.js";
import { bl } from "../fs/reply-across-default-dirs.js";
import { rc, _H } from "../settings/global-config-and-gates.js";
import { Rl } from "../telemetry/bg-roster-parse-failed.js";
import { UUe } from "../context/bg-prompt-stash-restore.js";
import { _s } from "../core/conversation-engine.js";
import { o, E, Ue } from "../vendor/zod/string-format.js";
import { rm as a } from "fs/promises";
import { join as t } from "path";
var s = ".pending-wakeup", p = 1024, m = f(() => Ue({ toolUseId: o().min(1).max(256), scheduledFor: E().int().positive(), chainStartedAt: E().int().nonnegative() }));
async function x9t(i, r) {
  let e = t(i, s);
  try {
    if (r === void 0) {
      if (await a(e, { force: true }).then(() => true, (d) => (Rl(d), false))) return;
    }
    await UUe(e, r === void 0 ? "" : _(r));
  } catch (n) {
    if (!G(n)) Rl(n);
  }
}
async function qcs(i) {
  let r = await bl(t(i, s), p);
  if (!r) return null;
  try {
    let e = m().safeParse(ee(r));
    return e.success ? e.data : null;
  } catch {
    return null;
  }
}
class nto {
  #o = Promise.resolve();
  #r = 0;
  #e;
  #i;
  constructor() {
    this.#i = Gos(this.#n);
  }
  #n = (i) => {
    try {
      if (!rc()) return;
      let r = _H();
      if (r === void 0) return;
      if (i !== void 0 && _s()) return;
      this.#e ??= _t(() => this.#o);
      let e = ++this.#r;
      this.#o = this.#o.then(() => e === this.#r ? x9t(r, i) : void 0);
    } catch (r) {
      l(r);
    }
  };
  flush() {
    return this.#o;
  }
  dispose() {
    this.#i(), this.#o.then(() => this.#e?.());
  }
}
export {
  nto,
  qcs,
  x9t
};
