// darwin/ui/launch-repl-session.js — Claude Code 2.1.310（darwin）模块 chunk-neh1j60a.js
import { ql } from "../shell/invalid-type.js";
import { Wb, Ft, uSn } from "../settings/global-config-and-gates.js";
import { iQ, MYn, ace, RSt } from "../api/anthropic-client.js";
import { Qrn, rWe, Z7 } from "../core/conversation-engine.js";
import { hat } from "../context/trailing-api-error-notice-skipped.js";
import { mXt } from "../mcp/lifecycle-wakeup-source-v1.js";
import { xr } from "../shared/chunk-e4a3aa33.js";
import { Axn, rcs } from "../agents/fullscreen-upsell-trial-persisted.js";
import { u5e } from "../telemetry/fleet-nudge-state.js";
import { yN } from "../core/query-loop.js";
import { VSs, AHn } from "../telemetry/fullscreen-crash-auto-off.js";
import { _An } from "../shared/chunk-3ff31549.js";
import { Qit } from "../shared/chunk-a3357e0d.js";
import { Zie } from "../shared/chunk-ab2cef45.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { g0n } from "../mcp/claudeai-proxy.8e2e.js";
import { de, P, A, y, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function oRt(...n) {
  let { mode: t } = n[1].initialState.toolPermissionContext;
  return RSt(t), rgi(...n);
}
async function rgi(n, t, p, l) {
  let { AppRoot: c } = await import("../shared/app-root.5c65.js"), { REPL: d } = await import("./repl.js");
  function S(r) {
    let a = xr();
    Axn();
    let f = A(r.commands), h = de((s) => {
      f.current = s;
    }, []), g = A(() => {
      throw Error("engine: queryParams called before REPL registered builder");
    }), E = de((s) => {
      g.current = s;
    }, []), [m] = y(() => hat({ run: yN, queryParams: async (s) => g.current(), commands: () => Z7(f.current), models: () => ace(iQ()), unavailableModels: () => ace(MYn()), agents: () => Qrn(a.getState().agentDefinitions.activeAgents), account: uSn(), outputStyle: rWe(), mcpServers: () => g0n(a.getState().mcp.clients), ambient: mXt, initialModel: () => {
      let s = a.getState();
      return Ft(s.mainLoopModelForSession ?? s.mainLoopModel ?? Wb());
    }, initialPermissionMode: () => ql(a.getState().toolPermissionContext.mode), hostOwnsPermissionMode: true, hostOwnsModel: true }));
    return P(() => () => m.close(), [m]), e(d, { ...r, engine: m, onCommandsChange: h, onQueryParamsChange: E });
  }
  let { session: i, storageV5: o, credentials: u, fleetNudgeStore: R = new u5e({ storageV5: o }) } = t, C = Qit(o);
  await VSs({ onHealthy: () => rcs(o), storageV5: o });
  let M = _An(i, t.initialState, (r) => Zie(r, i, o, u));
  try {
    await l(n, e(c, { session: i, storageV5: o, messageQueue: C, store: M, fleetNudgeStore: R, sessionHooks: t.sessionHooks, writesExitHandoff: true, getFpsMetrics: t.getFpsMetrics, stats: t.stats, keybindings: false, children: e(S, { ...p }) }), i, o, u);
  } catch (r) {
    throw await AHn().catch(() => false), r;
  }
}
export {
  oRt,
  rgi
};
