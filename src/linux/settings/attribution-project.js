// linux/settings/attribution-project.js — Claude Code 2.1.310（linux）模块 chunk-pz8fd9j0.js
import { Qe, N } from "../telemetry/anthropic-workspace-id.js";
import { ci, ye, Il } from "../context/not-admin-owned.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { fk } from "../auth/oauth-2025-04-20.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Ro, Tf } from "./workflow-launch-exec.js";
import { mg, pe } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { tl, T5, Cs, sM } from "./global-config-and-gates.js";
import { q2o, x7s, xtt } from "../auth/claude-desktop-3p.js";
import { ve } from "../shared/chunk-fee3c428.js";
function QLo() {
  if (!Il()) {
    let e = xtt({ anthropicAuthEnabled: tl(), oauthScopes: T5(fk) ? [fk] : [] });
    if (x7s({ isSubscriber: e })) return P();
  }
  return;
}
function ZLo() {
  try {
    let e = QLo(), n = e === void 0 ? R : `${e.project?.taggedId}|${e.project?.source}|${e.ignored.join(",")}`;
    if (e !== void 0 && n !== S.last) {
      let { project: o, ignored: u } = e;
      if (u.length > 0) if (t(`Attribution Project: ignored a value that names no Project (from ${u.join(", ")})`, { level: "warn" }), o === void 0) m("attribution_project", "not_a_project_id");
      else f("attribution_project", "not_a_project_id");
      else if (o !== void 0) g("attribution_project");
      if (o !== void 0) t(`Attribution Project: ${o.taggedId} (from ${o.source})`);
    }
    return S.last = n, e?.project;
  } catch (e) {
    if (S.last !== E) S.last = E, m("attribution_project", "resolution_failed"), l(Qe(N(e), "attribution Project resolution failed"));
    return;
  }
}
function P() {
  let e = [], n = i.CLAUDE_CODE_ATTRIBUTION_PROJECT;
  if (n !== void 0 && n.trim() !== "") {
    let r = A(n);
    if (r !== void 0) return { project: { taggedId: r, source: "harness" }, written: n.trim(), ignored: e };
    e.push("harness");
  }
  let o = Ro(), u = o.includes("userSettings") && mg(), c, d = null;
  for (let r = o.length - 1; r >= 0; r--) {
    let s = o[r];
    if (s === "projectSettings" && u) continue;
    if (pe(s)?.attributionProject === void 0) continue;
    if (Tf.has(s)) {
      if (c === void 0) if (ye()) {
        let _ = ci();
        c = _ !== null && sM(_);
      } else c = Cs();
      if (!c) continue;
    }
    d = s;
    break;
  }
  let a = d === null ? void 0 : pe(d)?.attributionProject;
  if (d !== null && typeof a === "string" && a.trim() !== "") {
    let r = I[d], s = A(a);
    if (s !== void 0) return { project: { taggedId: s, source: r }, written: a.trim(), ignored: e };
    e.push(r);
  }
  let p = pe("policySettings")?.attributionProjectPolicy, j = typeof p === "object" && p !== null && "default" in p ? p.default : void 0;
  if (typeof j === "string" && j.trim() !== "") {
    let r = A(j);
    if (r !== void 0) return { project: { taggedId: r, source: "admin_default" }, written: j.trim(), ignored: e };
    e.push("admin_default");
  }
  return { project: void 0, written: void 0, ignored: e };
}
function A(e) {
  let n = e.trim();
  if (h.test(n)) {
    let u = BigInt(`0x${n.replaceAll("-", "")}`), c = "";
    while (u > 0n) c = b[Number(u % 58n)] + c, u /= 58n;
    return `claude_proj_01${c.padStart(T, b[0])}`;
  }
  if (!q2o.test(n)) return;
  let o = 0n;
  for (let u of n.slice(-T)) o = o * 58n + BigInt(b.indexOf(u));
  return o <= O ? n : void 0;
}
var I = { userSettings: "user", projectSettings: "project", localSettings: "local", flagSettings: "flag", policySettings: "managed" }, h = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, b = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", T = 22, O = (1n << 128n) - 1n, R = "not sent", E = "failed", S = ve({ last: void 0 }, (e) => {
  e.last = void 0;
});
export {
  QLo,
  ZLo
};
