// mcp/mcp-multidialog-choice.8bx7.js — Claude Code 2.1.310 模块 chunk-8bx7bwt7.js
import { L, PE, Wdr } from "../context/not-admin-owned.ersa.js";
import { c } from "../agents/third-party.ydpb.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { I } from "../shared/chunk-j79dwkaq.js";
import { est } from "./always-allow.9m89.js";
import { w } from "../ui/chunk-zqxc4qtb.js";
import { Me } from "../shared/chunk-y6x1q9pp.js";
import { Ut, fI } from "../settings/global-config-and-gates.27xj.js";
import { i } from "../shared/environment.9a41.js";
import { $w, fK } from "../shell/invalid-type.qnva.js";
import { Un, wa } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { rt, s, n, Yt } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { Zr } from "../shared/chunk-6d9n0jaa.js";
import { Ma, xc, Go, xs, Je } from "../ui/aria-hidden.r9bm.js";
import { q } from "../context/chunk-d05584w8.js";
import { ve } from "../ui/chunk-kjz7kbmb.js";
import { kDt, _le, pi, pm } from "../core/conversation-engine.31gx.js";
import { ad, Rl, lo } from "../telemetry/bg-roster-parse-failed.yhsj.js";
import { k$ } from "../ui/compact-vertical.p8v4.js";
import { we } from "../ui/keybinding-auto-hints.yb17.js";
import { pt } from "../shared/chunk-2ktb785b.js";
import { Q, e, r } from "../vendor/react/chunk-f790ajz4.js";
import { de, A, j } from "../vendor/react/chunk-s8vmszp2.js";
import { b } from "../vendor/react/chunk-meds60nn.js";
j();
function k() {
  let t = w(1), u;
  if (t[0] === b) u = r(n, { children: ["MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the", " ", e(Yt, { url: "https://code.claude.com/docs/en/mcp", children: "MCP documentation" }), "."] }), t[0] = u;
  else u = t[0];
  return u;
}
function UPn({ serverName: t, isPluginServer: u = false, onDone: d }) {
  let { storageV5: o } = Me(), l = A(false), f = Ma(Zr), { refusedWithin: m, noteRefused: S, epoch: v } = Go(), h = xc(v, Zr);
  function E() {
    if (f() || m(Zr)) return S(), true;
    return false;
  }
  async function C(p) {
    if (E()) return;
    if (l.current) return;
    switch (l.current = true, a("tengu_mcp_dialog_choice", { choice: c(p) }), p) {
      case "yes":
      case "yes_all": {
        let g = false;
        {
          let { error: y } = await wa("localSettings", (M) => {
            let P = M?.enabledMcpjsonServers || [];
            if (P.includes(t)) return null;
            return { enabledMcpjsonServers: [...P, t] };
          }, void 0, o);
          g ||= y != null;
        }
        if (p === "yes_all") {
          let { error: y } = await Un("localSettings", { enableAllProjectMcpServers: true }, void 0, o);
          g ||= y != null;
        }
        Wdr(fI(), [t]), d({ persistFailed: g });
        break;
      }
      case "no": {
        let { error: g } = await wa("localSettings", (y) => {
          let M = y?.disabledMcpjsonServers || [];
          if (M.includes(t)) return null;
          return { disabledMcpjsonServers: [...M, t] };
        }, void 0, o);
        d({ persistFailed: g != null });
        break;
      }
    }
  }
  return r(we, { title: `New MCP server found in this project: ${est(t, u)}`, color: "warning", onCancel: () => void C("no"), exitOnCtrlCD: true, children: [e(k, {}), e(Je, { options: [{ label: "Use this MCP server", value: "yes" }, { label: "Use this and all future MCP servers in this project", value: "yes_all" }, { label: "Continue without using this MCP server", value: "no" }], onChange: (p) => void C(p), onCancel: () => void C("no"), hideIndexes: true, refuseInput: E, defaultFocusValue: "no", selectedValue: xs }, h.remountKey)] });
}
j();
function BPn({ serverNames: t, pluginServerNames: u, onDone: d }) {
  let { storageV5: o } = Me(), l = A(false), f = Ma(Zr), { refusedWithin: m, noteRefused: S } = Go(), v = rt(), h = de(() => {
    if (f() || m(Zr)) return S(), true;
    return false;
  }, [f, m, S]);
  async function E(p) {
    if (h()) return;
    if (l.current) return;
    l.current = true;
    let [g, y] = $w(t, (P) => p.includes(P));
    a("tengu_mcp_multidialog_choice", { approved: g.length, rejected: y.length });
    let M = false;
    if (g.length > 0) {
      let { error: P } = await wa("localSettings", (R) => ({ enabledMcpjsonServers: L([...R?.enabledMcpjsonServers || [], ...g]) }), void 0, o);
      M ||= P != null;
    }
    if (Wdr(fI(), g), y.length > 0) {
      let { error: P } = await wa("localSettings", (R) => ({ disabledMcpjsonServers: L([...R?.disabledMcpjsonServers || [], ...y]) }), void 0, o);
      M ||= P != null;
    }
    d({ persistFailed: M });
  }
  let C = de(async () => {
    if (h()) return;
    if (l.current) return;
    l.current = true;
    let { error: p } = await wa("localSettings", (g) => ({ disabledMcpjsonServers: L([...g?.disabledMcpjsonServers || [], ...t]) }), void 0, o);
    d({ persistFailed: p != null });
  }, [h, t, d, o]);
  return r(Q, { children: [r(we, { title: `${t.length} new MCP servers found in this project`, subtitle: "Select any you wish to enable.", color: "warning", onCancel: C, exitOnCtrlCD: true, hideInputGuide: true, children: [e(k, {}), e(k$, { options: t.map((p) => ({ label: est(p, u?.has(p) ?? false), value: p })), defaultValue: v ? [] : t, submitButtonText: "Enable selected", onSubmit: E, onCancel: C, hideIndexes: true, refuseInput: h, refuseSubmitFocus: h })] }), e(s, { paddingX: 1, children: e(n, { dimColor: true, italic: true, children: r(ve, { children: [e(q, { chord: "space", action: "select" }), e(pt, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "reject all" })] }) }) })] });
}
async function jPn(t) {
  if (PE()) return { pendingServers: [], pluginServerNames: /* @__PURE__ */ new Set() };
  let { serverNames: u, pluginServerNames: d } = await dno(t);
  return { pendingServers: u.filter((l) => _le(l) === "pending"), pluginServerNames: d };
}
async function dno(t) {
  let { servers: u } = pm("project"), d = Object.keys(u), o = new Set(d), l = /* @__PURE__ */ new Set(), { enabled: f } = await pi(t), m = f.filter(fK);
  for (let S of m) {
    let v = await kDt(S, [], t);
    if (!v) continue;
    for (let h of Object.keys(v)) {
      if (o.has(h) || l.has(h)) continue;
      d.push(h), l.add(h);
    }
  }
  return { serverNames: d, pluginServerNames: l, rootServers: u };
}
async function nps({ pendingServers: t, pluginServerNames: u }, d, o) {
  if (t.length === 0) return null;
  let l;
  l = await x(t.map((v) => est(v, u.has(v))), o);
  let f = (v) => {
    _(l, o).catch(() => {
    }).then(() => d(v));
  }, [m, ...S] = t;
  return m !== void 0 && S.length === 0 ? e(UPn, { serverName: m, isPluginServer: u.has(m), onDone: f }) : e(BPn, { serverNames: t, pluginServerNames: u, onDone: f });
}
async function x(t, u) {
  {
    if (!Ut()) return;
    let d = i.CLAUDE_JOB_DIR;
    if (!d) return;
    let o = await lo(d, u);
    if (!o) return;
    let l = t.length, f = I(l, "server"), m = I(l, "needs", "need");
    try {
      return await ad(d, { ...o, state: "blocked", detail: `${l} new MCP ${f} ${m} approval`, tempo: "blocked", needs: `approve ${l} new project MCP ${f} (${t.join(", ")}) — attach to respond`, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, u), { state: o.state, tempo: o.tempo, needs: o.needs, detail: o.detail };
    } catch (S) {
      Rl(S);
    }
  }
  return;
}
async function _(t, u) {
  {
    if (!t || !Ut()) return;
    let d = i.CLAUDE_JOB_DIR;
    if (!d) return;
    let o = await lo(d, u);
    if (!o || o.state !== "blocked") return;
    try {
      await ad(d, { ...o, ...t, block: void 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, u);
    } catch (l) {
      Rl(l);
    }
  }
}
export {
  BPn,
  UPn,
  dno,
  jPn,
  nps
};
