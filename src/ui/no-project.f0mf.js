// ui/no-project.f0mf.js — Claude Code 2.1.310 模块 chunk-f0mfq8w9.js
import { u$, vee } from "../context/not-admin-owned.ersa.js";
import { N, d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { d4t } from "../models/claude-3-5-sonnet.21mz.js";
import { i } from "../shared/environment.9a41.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { wS, Ut } from "../settings/global-config-and-gates.27xj.js";
import { w } from "./chunk-zqxc4qtb.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { Te } from "../models/total-tokens-reminder.psq3.js";
import { cKe, Tn } from "../mcp/allowed-warning.j2d4.js";
import { SZ } from "../settings/ax-sr-suggestion-nav.8qsa.js";
import { s, n } from "../telemetry/render-glyph-cardinality.7car.js";
import { lt } from "../shared/chunk-vj9gqe2s.js";
import { ae, oAe } from "../permissions/max-thinking-tokens.hx3h.js";
import { $D, hCe } from "../context/team-memory-sync.0s3j.js";
import { Fhe, rre, $he } from "../telemetry/bg-roster-parse-failed.yhsj.js";
import { i7, Ict, a6, SEe } from "../shell/prompt-input-exit.dr3v.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
import { a1e } from "../mcp/monitor-ws.srey.js";
import { A, y, j } from "../vendor/react/chunk-s8vmszp2.js";
import { cn } from "../shared/chunk-dpjnt83j.js";
import { b } from "../vendor/react/chunk-meds60nn.js";
j();
function x() {
  return { provider: Te(), awsRegion: cKe(), vertexRegion: d4t(), vertexProjectId: i.ANTHROPIC_VERTEX_PROJECT_ID ?? "", accountDigest: cn([i.AWS_PROFILE, i.AWS_BEARER_TOKEN_BEDROCK, i.AWS_ACCESS_KEY_ID, i.GOOGLE_APPLICATION_CREDENTIALS].map((o) => o ?? "").join(`
`)) };
}
function O(o, p) {
  let g = x(), c = o.provider === p && g.provider === o.provider && g.awsRegion === o.awsRegion && g.vertexRegion === o.vertexRegion && g.vertexProjectId === o.vertexProjectId && g.accountDigest === o.accountDigest;
  return t(`Provider-setup restart: ${c ? "carrying" : "dropping"} the model pick (launched on ${o.provider} ${o.awsRegion}/${o.vertexRegion}/${o.vertexProjectId || "no-project"}, now ${g.provider} ${g.awsRegion}/${g.vertexRegion}/${g.vertexProjectId || "no-project"}${g.accountDigest === o.accountDigest ? "" : ", credentials changed"}, target ${p})`), c;
}
var P = "Your settings were saved — restart Claude Code to apply them.";
async function _(o, p, g) {
  try {
    if (Ut()) return `A background session can't restart itself. ${P}`;
    if (wS() !== null) return `Claude can't restart itself from inside the agents view. ${P}`;
    let c = W(o);
    if (c !== void 0) return c;
    if (Tn()) return;
    if (await SEe(), await a6($D(o), o.storageV5), Tn()) return;
    let m = W(o);
    if (m !== void 0) return m;
    let v = ae(o), R = await i7($D(o), "relaunch", { responseStreaming: hCe(o) }, o.storageV5);
    await Ict(R, { freshIfNoTranscript: true, extraArgs: [...Fhe(v, oAe(o), { carryModel: O(g, p) }), ...$he(v, vee())], proactivity: { proactivityLevel: o.getProactivityLevel(), toolPermissionContext: v }, env: SZ() }, o.storageV5);
    return;
  } catch (c) {
    return l(N(c)), `Couldn't restart Claude Code (${d(c)}). ${P}`;
  }
}
function W(o) {
  let p = rre(ae(o), u$());
  if (p.length > 0) return `This session has restrictions a restart can't carry over (${p.join("; ")}). ${P}`;
  if (a1e(o.taskRegistry.all())) return `Work is running in the background, and restarting would orphan it (wait for it to finish, or stop it via /tasks). ${P}`;
  return;
}
function J5t(o) {
  let u = w(21), { Wizard: p, cancelledEvent: g, targetProvider: c, onDone: m, context: v } = o, [R, Z] = y(null), [D] = y(x), h = A(false), [I, F] = y(false), V;
  if (u[0] !== v || u[1] !== D || u[2] !== m || u[3] !== c) V = () => {
    if (h.current) {
      return;
    }
    h.current = true, F(true), _(v, c, D).then((z) => {
      if (z !== void 0) h.current = false, F(false), m(z, { display: "system" });
    });
  }, u[0] = v, u[1] = D, u[2] = m, u[3] = c, u[4] = V;
  else V = u[4];
  const T = R !== null;
  let G;
  if (u[5] !== T) G = { context: "Confirmation", isActive: T }, u[5] = T, u[6] = G;
  else G = u[6];
  if (lt("confirm:yes", V, G), R !== null) {
    let C2;
    if (u[7] !== R) C2 = e(n, { color: "success", children: R }), u[7] = R, u[8] = C2;
    else C2 = u[8];
    let f2;
    if (u[9] !== I) f2 = I ? e(n, { dimColor: true, children: "Restarting Claude Code…" }) : r(n, { dimColor: true, children: ["Press ", e(n, { bold: true, children: "Enter" }), " to restart Claude Code."] }), u[9] = I, u[10] = f2;
    else f2 = u[10];
    let S2;
    if (u[11] !== C2 || u[12] !== f2) S2 = r(s, { flexDirection: "column", gap: 1, marginTop: 1, children: [C2, f2] }), u[11] = C2, u[12] = f2, u[13] = S2;
    else S2 = u[13];
    return S2;
  }
  let C;
  if (u[14] === b) C = (ee) => Z(ee), u[14] = C;
  else C = u[14];
  let f;
  if (u[15] !== g || u[16] !== m) f = () => {
    a(g, {}), m();
  }, u[15] = g, u[16] = m, u[17] = f;
  else f = u[17];
  let S;
  if (u[18] !== p || u[19] !== f) S = e(p, { onComplete: C, onCancel: f }), u[18] = p, u[19] = f, u[20] = S;
  else S = u[20];
  return S;
}
export {
  J5t
};
