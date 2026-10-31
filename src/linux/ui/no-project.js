// linux/ui/no-project.js — Claude Code 2.1.310（linux）模块 chunk-myxyrc9s.js
import { aF, gee } from "../context/not-admin-owned.js";
import { N, d } from "../telemetry/anthropic-workspace-id.js";
import { YYt } from "../models/claude-3-5-sonnet.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Sb, Ut } from "../settings/global-config-and-gates.js";
import { w } from "./chunk-0ed4c357.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { Ae } from "../models/total-tokens-reminder.js";
import { nqe, An } from "../mcp/allowed-warning.js";
import { uZ } from "../settings/ax-sr-suggestion-nav.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { lt } from "../shared/chunk-76877d92.js";
import { ae, ZAe } from "../permissions/max-thinking-tokens.js";
import { $L, fTe } from "../context/team-memory-sync.js";
import { ghe, Nne, hhe } from "../telemetry/bg-roster-parse-failed.js";
import { ZX, Rct, Q2, mve } from "../shell/prompt-input-exit.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { QUe } from "../mcp/monitor-ws.js";
import { C, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { cn } from "../shared/chunk-6ae01e90.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
j();
function h() {
  return { provider: Ae(), awsRegion: nqe(), vertexRegion: YYt(), vertexProjectId: i.ANTHROPIC_VERTEX_PROJECT_ID ?? "", accountDigest: cn([i.AWS_PROFILE, i.AWS_BEARER_TOKEN_BEDROCK, i.AWS_ACCESS_KEY_ID, i.GOOGLE_APPLICATION_CREDENTIALS].map((o) => o ?? "").join(`
`)) };
}
function O(o, p) {
  let g = h(), c = o.provider === p && g.provider === o.provider && g.awsRegion === o.awsRegion && g.vertexRegion === o.vertexRegion && g.vertexProjectId === o.vertexProjectId && g.accountDigest === o.accountDigest;
  return t(`Provider-setup restart: ${c ? "carrying" : "dropping"} the model pick (launched on ${o.provider} ${o.awsRegion}/${o.vertexRegion}/${o.vertexProjectId || "no-project"}, now ${g.provider} ${g.awsRegion}/${g.vertexRegion}/${g.vertexProjectId || "no-project"}${g.accountDigest === o.accountDigest ? "" : ", credentials changed"}, target ${p})`), c;
}
var E = "Your settings were saved — restart Claude Code to apply them.";
async function b(o, p, g) {
  try {
    if (Ut()) return `A background session can't restart itself. ${E}`;
    if (Sb() !== null) return `Claude can't restart itself from inside the agents view. ${E}`;
    let c = W(o);
    if (c !== void 0) return c;
    if (An()) return;
    if (await mve(), await Q2($L(o), o.storageV5), An()) return;
    let m = W(o);
    if (m !== void 0) return m;
    let v = ae(o), R = await ZX($L(o), "relaunch", { responseStreaming: fTe(o) }, o.storageV5);
    await Rct(R, { freshIfNoTranscript: true, extraArgs: [...ghe(v, ZAe(o), { carryModel: O(g, p) }), ...hhe(v, gee())], proactivity: { proactivityLevel: o.getProactivityLevel(), toolPermissionContext: v }, env: uZ() }, o.storageV5);
    return;
  } catch (c) {
    return l(N(c)), `Couldn't restart Claude Code (${d(c)}). ${E}`;
  }
}
function W(o) {
  let p = Nne(ae(o), aF());
  if (p.length > 0) return `This session has restrictions a restart can't carry over (${p.join("; ")}). ${E}`;
  if (QUe(o.taskRegistry.all())) return `Work is running in the background, and restarting would orphan it (wait for it to finish, or stop it via /tasks). ${E}`;
  return;
}
function $6t(o) {
  let u = w(21), { Wizard: p, cancelledEvent: g, targetProvider: c, onDone: m, context: v } = o, [R, Z] = y(null), [I] = y(h), T = C(false), [_, F] = y(false), V;
  if (u[0] !== v || u[1] !== I || u[2] !== m || u[3] !== c) V = () => {
    if (T.current) {
      return;
    }
    T.current = true, F(true), b(v, c, I).then((z) => {
      if (z !== void 0) T.current = false, F(false), m(z, { display: "system" });
    });
  }, u[0] = v, u[1] = I, u[2] = m, u[3] = c, u[4] = V;
  else V = u[4];
  const A = R !== null;
  let G;
  if (u[5] !== A) G = { context: "Confirmation", isActive: A }, u[5] = A, u[6] = G;
  else G = u[6];
  if (lt("confirm:yes", V, G), R !== null) {
    let P2;
    if (u[7] !== R) P2 = e(n, { color: "success", children: R }), u[7] = R, u[8] = P2;
    else P2 = u[8];
    let f2;
    if (u[9] !== _) f2 = _ ? e(n, { dimColor: true, children: "Restarting Claude Code…" }) : r(n, { dimColor: true, children: ["Press ", e(n, { bold: true, children: "Enter" }), " to restart Claude Code."] }), u[9] = _, u[10] = f2;
    else f2 = u[10];
    let k2;
    if (u[11] !== P2 || u[12] !== f2) k2 = r(s, { flexDirection: "column", gap: 1, marginTop: 1, children: [P2, f2] }), u[11] = P2, u[12] = f2, u[13] = k2;
    else k2 = u[13];
    return k2;
  }
  let P;
  if (u[14] === S) P = (ee) => Z(ee), u[14] = P;
  else P = u[14];
  let f;
  if (u[15] !== g || u[16] !== m) f = () => {
    a(g, {}), m();
  }, u[15] = g, u[16] = m, u[17] = f;
  else f = u[17];
  let k;
  if (u[18] !== p || u[19] !== f) k = e(p, { onComplete: P, onCancel: f }), u[18] = p, u[19] = f, u[20] = k;
  else k = u[20];
  return k;
}
export {
  $6t
};
