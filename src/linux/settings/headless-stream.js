// linux/settings/headless-stream.js — Claude Code 2.1.310（linux）模块 chunk-wpqtrh1y.js
import { So } from "../context/not-admin-owned.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { _ } from "../fs/gitlab-runner-authentication-token.js";
import { aE } from "../shell/invalid-type.js";
import { ln, Fh, pe, kb } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { Lp } from "../context/org-memory-writes-setting-changed.js";
import { FY, mce } from "../permissions/frontmatter-grant-withheld.js";
import { oo, Va } from "../permissions/bot-protected-tengu-atomic-magpie.js";
import { EK } from "../core/conversation-engine.js";
import { LFe } from "../fs/bridge-read-file-served.js";
import { ewe, D2, H2 } from "../shell/not-serialized.js";
import { Hcr } from "../hooks/not-loaded.js";
import { M2 } from "./chunk-16f4230b.js";
import { _dt, Sdt } from "../shared/chunk-d51105fe.js";
import { mn } from "../shared/chunk-62f8d501.js";
import { o, v, M, u, B, A } from "../vendor/zod/string-format.js";
var Sis = "ReadFileForRemote", b5t = 4194304, g = 3e6, d = p(() => u({ path: o().max(ewe), max_bytes: v().optional(), encoding: B(["utf-8", "base64"]).optional() })), f = p(() => d().extend({ permission_context: D2() }).strict()), w = p(() => u({ file: u({ contents: o().refine(m), truncated: M().optional(), encoding: A("base64").optional() }).optional() }));
async function wis(e, c, r) {
  if (mn(e) && H2(e.permission_context)) throw Error("permission_context is too large");
  let { permission_context: l, path: n, max_bytes: t, encoding: a } = f().parse(e), i = r.launchPermissionContext && S5t(r.launchPermissionContext), s = i && await LFe(n, t && Math.min(t, g), { ...M2(l, i, So(r.session).originalCwd), ...i.blockReadsOutsideWorkingDirectories && { blockReadsOutsideWorkingDirectories: true } }, { encoding: a, telemetrySource: "headless_stream" }).catch(() => {
    return;
  });
  if (s && !m(s.contents)) throw Error("the file is too large to send back as text");
  return { summary: s ? `${s.contents.length} characters` : "read denied", output: { file: s } };
}
function S5t(e) {
  let c = [...kb()], r = mce("policySettings"), l = [pe("policySettings")];
  for (let [t, a] of [["userSettings", ln("userSettings")], ["projectSettings", ln("projectSettings")], ["localSettings", ln("localSettings")], ["localSettings", Fh()]]) if (a !== void 0) {
    let i = aE(a);
    c.push(...i.errors), r.push(...FY(i.settings, t)), l.push(i.settings);
  }
  if (Sdt(_dt(c).slice(0, 10)), Hcr()) return;
  let n = EK(e, r.filter((t) => t.ruleBehavior !== "allow"), { announce: false });
  return oo(n, Lp) || Va(n, Lp) ? void 0 : { ...n, blockReadsOutsideWorkingDirectories: l.some((t) => t?.permissions?.blockReadsOutsideWorkingDirectories) };
}
function m(e) {
  return e.length <= b5t && Buffer.byteLength(_(e)) <= b5t;
}
export {
  S5t,
  Sis,
  b5t,
  wis
};
