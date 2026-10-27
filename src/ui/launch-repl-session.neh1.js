// ui/launch-repl-session.neh1.js — Claude Code 2.1.310 模块 chunk-neh1j60a.js
import { ql } from "../shell/invalid-type.qnva.js";
import { Wb, Ft, uSn } from "../settings/global-config-and-gates.27xj.js";
import { iQ, MYn, ace, RSt } from "../api/anthropic-client.7pf8.js";
import { Qrn, rWe, Z7 } from "../core/conversation-engine.31gx.js";
import { hat } from "../context/trailing-api-error-notice-skipped.3q3k.js";
import { mXt } from "../mcp/lifecycle-wakeup-source-v1.tcb3.js";
import { xr } from "../shared/chunk-p82eferg.js";
import { Axn, rcs } from "../agents/fullscreen-upsell-trial-persisted.hpnx.js";
import { u5e } from "../telemetry/fleet-nudge-state.2qws.js";
import { yN } from "../core/query-loop.ae10.js";
import { VSs, AHn } from "../telemetry/fullscreen-crash-auto-off.a1a0.js";
import { _An } from "../shared/chunk-spg5ywaj.js";
import { Qit } from "../shared/chunk-envx5rgf.js";
import { Zie } from "../shared/chunk-977nn9re.js";
import { e } from "../vendor/react/chunk-f790ajz4.js";
import { g0n } from "../mcp/claudeai-proxy.5wvt.js";
import { de, P, A, y, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
function oRt(...n) {
  let { mode: t } = n[1].initialState.toolPermissionContext;
  return RSt(t), rgi(...n);
}
async function rgi(n, t, p, l) {
  let { AppRoot: c } = await import("../shared/app-root.akae.js"), { REPL: d } = await import("./repl.ztmf.js");
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
