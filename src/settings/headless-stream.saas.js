// settings/headless-stream.saas.js — Claude Code 2.1.310 模块 chunk-saaskbhq.js
import { bo } from "../context/not-admin-owned.ersa.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { _ } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { lv } from "../shell/invalid-type.qnva.js";
import { ln, $h, fe, CS } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { Lf } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { X3, wce } from "../permissions/frontmatter-grant-withheld.8tyz.js";
import { oo, qa } from "../permissions/bot-protected-tengu-atomic-magpie.zc9j.js";
import { H6 } from "../core/conversation-engine.31gx.js";
import { j$e } from "../fs/bridge-read-file-served.vng3.js";
import { iwe, Wz, Gz } from "../shell/not-serialized.5s2n.js";
import { Xcr } from "../hooks/not-loaded.fp1v.js";
import { jz } from "./chunk-x289pnbh.js";
import { vdt, Cdt } from "../shared/chunk-s0hrm2wv.js";
import { mn } from "../shared/chunk-1a0taxx3.js";
import { o, E, M, u, B, T } from "../vendor/zod/string-format.k395.js";
var Jis = "ReadFileForRemote", O4t = 4194304, p = 3e6, g = f(() => u({ path: o().max(iwe), max_bytes: E().optional(), encoding: B(["utf-8", "base64"]).optional() })), d = f(() => g().extend({ permission_context: Wz() }).strict()), D = f(() => u({ file: u({ contents: o().refine(m), truncated: M().optional(), encoding: T("base64").optional() }).optional() }));
async function Qis(e, c, r) {
  if (mn(e) && Gz(e.permission_context)) throw Error("permission_context is too large");
  let { permission_context: l, path: n, max_bytes: t, encoding: a } = d().parse(e), i = r.launchPermissionContext && M4t(r.launchPermissionContext), s = i && await j$e(n, t && Math.min(t, p), { ...jz(l, i, bo(r.session).originalCwd), ...i.blockReadsOutsideWorkingDirectories && { blockReadsOutsideWorkingDirectories: true } }, { encoding: a, telemetrySource: "headless_stream" }).catch(() => {
    return;
  });
  if (s && !m(s.contents)) throw Error("the file is too large to send back as text");
  return { summary: s ? `${s.contents.length} characters` : "read denied", output: { file: s } };
}
function M4t(e) {
  let c = [...CS()], r = wce("policySettings"), l = [fe("policySettings")];
  for (let [t, a] of [["userSettings", ln("userSettings")], ["projectSettings", ln("projectSettings")], ["localSettings", ln("localSettings")], ["localSettings", $h()]]) if (a !== void 0) {
    let i = lv(a);
    c.push(...i.errors), r.push(...X3(i.settings, t)), l.push(i.settings);
  }
  if (Cdt(vdt(c).slice(0, 10)), Xcr()) return;
  let n = H6(e, r.filter((t) => t.ruleBehavior !== "allow"), { announce: false });
  return oo(n, Lf) || qa(n, Lf) ? void 0 : { ...n, blockReadsOutsideWorkingDirectories: l.some((t) => t?.permissions?.blockReadsOutsideWorkingDirectories) };
}
function m(e) {
  return e.length <= O4t && Buffer.byteLength(_(e)) <= O4t;
}
export {
  Jis,
  M4t,
  O4t,
  Qis
};
