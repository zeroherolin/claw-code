// settings/attribution-project.0r1j.js — Claude Code 2.1.310 模块 chunk-0r1j9zr6.js
import { Qe, N } from "../telemetry/anthropic-workspace-id.36ys.js";
import { ci, ye, Il } from "../context/not-admin-owned.ersa.js";
import { g, m, p } from "../telemetry/chunk-wn8xtaqg.js";
import { fk } from "../auth/oauth-2025-04-20.ke15.js";
import { i } from "../shared/environment.9a41.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { Ro, kp } from "./workflow-launch-exec.t4r2.js";
import { mg, fe } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { nl, L4, As, uM } from "./global-config-and-gates.27xj.js";
import { E6o, fZs, Ltt } from "../auth/claude-desktop-3p.8h4z.js";
import { Ee } from "../shared/chunk-f9xfyhm1.js";
function TLo() {
  if (!Il()) {
    let e = Ltt({ anthropicAuthEnabled: nl(), oauthScopes: L4(fk) ? [fk] : [] });
    if (fZs({ isSubscriber: e })) return P();
  }
  return;
}
function ALo() {
  try {
    let e = TLo(), n = e === void 0 ? R : `${e.project?.taggedId}|${e.project?.source}|${e.ignored.join(",")}`;
    if (e !== void 0 && n !== S.last) {
      let { project: o, ignored: u } = e;
      if (u.length > 0) if (t(`Attribution Project: ignored a value that names no Project (from ${u.join(", ")})`, { level: "warn" }), o === void 0) m("attribution_project", "not_a_project_id");
      else p("attribution_project", "not_a_project_id");
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
    if (fe(s)?.attributionProject === void 0) continue;
    if (kp.has(s)) {
      if (c === void 0) if (ye()) {
        let _ = ci();
        c = _ !== null && uM(_);
      } else c = As();
      if (!c) continue;
    }
    d = s;
    break;
  }
  let f = d === null ? void 0 : fe(d)?.attributionProject;
  if (d !== null && typeof f === "string" && f.trim() !== "") {
    let r = I[d], s = A(f);
    if (s !== void 0) return { project: { taggedId: s, source: r }, written: f.trim(), ignored: e };
    e.push(r);
  }
  let a = fe("policySettings")?.attributionProjectPolicy, j = typeof a === "object" && a !== null && "default" in a ? a.default : void 0;
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
  if (!E6o.test(n)) return;
  let o = 0n;
  for (let u of n.slice(-T)) o = o * 58n + BigInt(b.indexOf(u));
  return o <= O ? n : void 0;
}
var I = { userSettings: "user", projectSettings: "project", localSettings: "local", flagSettings: "flag", policySettings: "managed" }, h = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, b = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", T = 22, O = (1n << 128n) - 1n, R = "not sent", E = "failed", S = Ee({ last: void 0 }, (e) => {
  e.last = void 0;
});
export {
  ALo,
  TLo
};
