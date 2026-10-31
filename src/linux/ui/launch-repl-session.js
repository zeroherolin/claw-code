// linux/ui/launch-repl-session.js — Claude Code 2.1.310（linux）模块 chunk-h1w5cjyw.js
import { ql } from "../shell/invalid-type.js";
import { jS, $t, q_n } from "../settings/global-config-and-gates.js";
import { QQ, d9n, Zde, _bt } from "../api/anthropic-client.js";
import { Nrn, Vje, zJ } from "../core/conversation-engine.js";
import { mat } from "../context/trailing-api-error-notice-skipped.js";
import { nXt } from "../mcp/lifecycle-wakeup-source-v1.js";
import { xr } from "../shared/chunk-e4a3aa33.js";
import { pxn, Ads } from "../agents/fullscreen-upsell-trial-persisted.js";
import { p6e } from "../telemetry/fleet-nudge-state.js";
import { pN } from "../core/query-loop.js";
import { bbs, mHn } from "../telemetry/fullscreen-crash-auto-off.js";
import { nCn } from "../shared/chunk-3ff31549.js";
import { Vit } from "../shared/chunk-a3357e0d.js";
import { Kie } from "../shared/chunk-ab2cef45.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { eDn } from "../mcp/claudeai-proxy.8e2e.js";
import { de, P, C, y, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function YCt(...n) {
  let { mode: t } = n[1].initialState.toolPermissionContext;
  return _bt(t), Smi(...n);
}
async function Smi(n, t, p, l) {
  let { AppRoot: c } = await import("../shared/app-root.c43f.js"), { REPL: d } = await import("./repl.js");
  function S(r) {
    let a = xr();
    pxn();
    let f = C(r.commands), A = de((s) => {
      f.current = s;
    }, []), g = C(() => {
      throw Error("engine: queryParams called before REPL registered builder");
    }), E = de((s) => {
      g.current = s;
    }, []), [m] = y(() => mat({ run: pN, queryParams: async (s) => g.current(), commands: () => zJ(f.current), models: () => Zde(QQ()), unavailableModels: () => Zde(d9n()), agents: () => Nrn(a.getState().agentDefinitions.activeAgents), account: q_n(), outputStyle: Vje(), mcpServers: () => eDn(a.getState().mcp.clients), ambient: nXt, initialModel: () => {
      let s = a.getState();
      return $t(s.mainLoopModelForSession ?? s.mainLoopModel ?? jS());
    }, initialPermissionMode: () => ql(a.getState().toolPermissionContext.mode), hostOwnsPermissionMode: true, hostOwnsModel: true }));
    return P(() => () => m.close(), [m]), e(d, { ...r, engine: m, onCommandsChange: A, onQueryParamsChange: E });
  }
  let { session: i, storageV5: o, credentials: u, fleetNudgeStore: R = new p6e({ storageV5: o }) } = t, M = Vit(o);
  await bbs({ onHealthy: () => Ads(o), storageV5: o });
  let h = nCn(i, t.initialState, (r) => Kie(r, i, o, u));
  try {
    await l(n, e(c, { session: i, storageV5: o, messageQueue: M, store: h, fleetNudgeStore: R, sessionHooks: t.sessionHooks, writesExitHandoff: true, getFpsMetrics: t.getFpsMetrics, stats: t.stats, keybindings: false, children: e(S, { ...p }) }), i, o, u);
  } catch (r) {
    throw await mHn().catch(() => false), r;
  }
}
export {
  Smi,
  YCt
};
