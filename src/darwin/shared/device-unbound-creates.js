// darwin/shared/device-unbound-creates.js — Claude Code 2.1.310（darwin）模块 chunk-4v3jy13x.js
import { d, G } from "../telemetry/anthropic-workspace-id.js";
import { rr } from "../artifacts/chunk-a6c9d164.js";
import { _, ee, t } from "../fs/gitlab-runner-authentication-token.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { hn } from "../fs/async-hooks.7959.js";
import { je } from "../plugins/chunk-0a4c51cf.js";
import { f } from "./chunk-2fe3b2b7.js";
import { o, C, u, T } from "../vendor/zod/string-format.js";
import { z } from "./chunk-be29de51.js";
import { dirname as l, join as w } from "path";
var b = 50, D = f(() => u({ version: T(1), sessions: C(u({ id: o(), reason: o(), at: o() })) })), m = "device-unbound-creates";
function c() {
  return w(Le(), "state", `${m}.json`);
}
async function p(r) {
  let i = await r.readText();
  if (i === void 0) return [];
  let n = y(i);
  if (!n.success) return [];
  let e = await r.retentionCutoff();
  return e === null ? n.data.sessions : n.data.sessions.filter((s) => !v(s.at, e));
}
function y(r) {
  try {
    return D().safeParse(ee(r));
  } catch {
    return { success: false };
  }
}
function v(r, i) {
  let n = Date.parse(r);
  return Number.isNaN(n) || n < i.getTime();
}
async function QTi(r, i, n) {
  try {
    let e = rr(r), a = [...(await p(n)).filter((g) => rr(g.id) !== e), { id: e, reason: i, at: n.now().toISOString() }].slice(-b);
    await n.writeText(_({ version: 1, sessions: a }, null, 2) + `
`);
  } catch (e) {
    t(`[deviceBind] unbound create not recorded (${d(e)})`);
  }
}
async function $ho(r, i, n) {
  try {
    let e = rr(r), s = (await p(n)).find((a) => rr(a.id) === e);
    return s !== void 0 && i(s.reason) ? s.reason : void 0;
  } catch (e) {
    t(`[deviceBind] unbound-create record unreadable (${d(e)})`);
    return;
  }
}
function Uho(r) {
  let i = z() && r !== void 0 ? r : void 0, n = je.state(m);
  return { readText: async () => {
    if (i) {
      let e = await i.readText([n]);
      if (!e.ok) throw Error("device unbound-creates read failed");
      let s = e.value.items[0];
      return s.found ? s.value : void 0;
    }
    try {
      return await hn().read(c());
    } catch (e) {
      if (G(e)) return;
      throw e;
    }
  }, writeText: async (e) => {
    if (i) {
      if (!(await i.write(n, e, { mode: 384 })).ok) throw Error("device unbound-creates write failed");
      return;
    }
    let s = c();
    await hn().mkdir(l(s), 448), await hn().atomicWrite(s, e, 384);
  }, now: () => /* @__PURE__ */ new Date(), retentionCutoff: async () => {
    let e = await import("../tasks/cleanup-old-message-files-in-background.js");
    return await e.isRetentionCleanupSafe(r, 0) ? e.getCutoffDate() : null;
  } };
}
export {
  $ho,
  QTi,
  Uho
};
