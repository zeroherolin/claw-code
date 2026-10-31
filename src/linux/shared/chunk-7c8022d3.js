// linux/shared/chunk-7c8022d3.js — Claude Code 2.1.310（linux）模块 chunk-dc23snzd.js
import { dos } from "../context/not-admin-owned.js";
import { G } from "../telemetry/anthropic-workspace-id.js";
import { bt, _, te } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { p } from "./chunk-2fe3b2b7.js";
import { bl } from "../fs/reply-across-default-dirs.js";
import { rc, mH } from "../settings/global-config-and-gates.js";
import { Rl } from "../telemetry/bg-roster-parse-failed.js";
import { OUe } from "../context/bg-prompt-stash-restore.js";
import { ys } from "../core/conversation-engine.js";
import { o, v, Ue } from "../vendor/zod/string-format.js";
import { rm as a } from "fs/promises";
import { join as t } from "path";
var s = ".pending-wakeup", m = 1024, u = p(() => Ue({ toolUseId: o().min(1).max(256), scheduledFor: v().int().positive(), chainStartedAt: v().int().nonnegative() }));
async function h3t(i, r) {
  let e = t(i, s);
  try {
    if (r === void 0) {
      if (await a(e, { force: true }).then(() => true, (d) => (Rl(d), false))) return;
    }
    await OUe(e, r === void 0 ? "" : _(r));
  } catch (n) {
    if (!G(n)) Rl(n);
  }
}
async function ycs(i) {
  let r = await bl(t(i, s), m);
  if (!r) return null;
  try {
    let e = u().safeParse(te(r));
    return e.success ? e.data : null;
  } catch {
    return null;
  }
}
class Ieo {
  #o = Promise.resolve();
  #r = 0;
  #e;
  #i;
  constructor() {
    this.#i = dos(this.#n);
  }
  #n = (i) => {
    try {
      if (!rc()) return;
      let r = mH();
      if (r === void 0) return;
      if (i !== void 0 && ys()) return;
      this.#e ??= bt(() => this.#o);
      let e = ++this.#r;
      this.#o = this.#o.then(() => e === this.#r ? h3t(r, i) : void 0);
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
  Ieo,
  h3t,
  ycs
};
