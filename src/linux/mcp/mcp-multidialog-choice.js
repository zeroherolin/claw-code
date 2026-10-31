// linux/mcp/mcp-multidialog-choice.js — Claude Code 2.1.310（linux）模块 chunk-gv4v91yx.js
import { L, xv, Cdr } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { I } from "../shared/chunk-d2c47492.js";
import { Vot } from "./always-allow.js";
import { w } from "../ui/chunk-0ed4c357.js";
import { Me } from "../shared/chunk-be0ce119.js";
import { Ut, cI } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { $w, rq } from "../shell/invalid-type.js";
import { Un, Sa } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { rt, s, n, Yt } from "../telemetry/render-glyph-cardinality.js";
import { Zr } from "../shared/chunk-f81ec543.js";
import { Oa, xc, Wo, xs, Je } from "../ui/aria-hidden.aa9d.js";
import { V } from "../context/chunk-e2302e3b.js";
import { Ee } from "../ui/chunk-067d565d.js";
import { fLt, dle, fi, fm } from "../core/conversation-engine.js";
import { ad, Rl, lo } from "../telemetry/bg-roster-parse-failed.js";
import { vF } from "../ui/compact-vertical.js";
import { we } from "../ui/keybinding-auto-hints.js";
import { ft } from "../shared/chunk-c602eee2.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { de, C, j } from "../vendor/react/chunk-9a0b1ced.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
j();
function E() {
  let t = w(1), u;
  if (t[0] === S) u = r(n, { children: ["MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the", " ", e(Yt, { url: "https://code.claude.com/docs/en/mcp", children: "MCP documentation" }), "."] }), t[0] = u;
  else u = t[0];
  return u;
}
function kPn({ serverName: t, isPluginServer: u = false, onDone: d }) {
  let { storageV5: o } = Me(), l = C(false), f = Oa(Zr), { refusedWithin: m, noteRefused: b, epoch: v } = Wo(), h = xc(v, Zr);
  function R() {
    if (f() || m(Zr)) return b(), true;
    return false;
  }
  async function k(p) {
    if (R()) return;
    if (l.current) return;
    switch (l.current = true, a("tengu_mcp_dialog_choice", { choice: c(p) }), p) {
      case "yes":
      case "yes_all": {
        let g = false;
        {
          let { error: y } = await Sa("localSettings", (M) => {
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
        Cdr(cI(), [t]), d({ persistFailed: g });
        break;
      }
      case "no": {
        let { error: g } = await Sa("localSettings", (y) => {
          let M = y?.disabledMcpjsonServers || [];
          if (M.includes(t)) return null;
          return { disabledMcpjsonServers: [...M, t] };
        }, void 0, o);
        d({ persistFailed: g != null });
        break;
      }
    }
  }
  return r(we, { title: `New MCP server found in this project: ${Vot(t, u)}`, color: "warning", onCancel: () => void k("no"), exitOnCtrlCD: true, children: [e(E, {}), e(Je, { options: [{ label: "Use this MCP server", value: "yes" }, { label: "Use this and all future MCP servers in this project", value: "yes_all" }, { label: "Continue without using this MCP server", value: "no" }], onChange: (p) => void k(p), onCancel: () => void k("no"), hideIndexes: true, refuseInput: R, defaultFocusValue: "no", selectedValue: xs }, h.remountKey)] });
}
j();
function TPn({ serverNames: t, pluginServerNames: u, onDone: d }) {
  let { storageV5: o } = Me(), l = C(false), f = Oa(Zr), { refusedWithin: m, noteRefused: b } = Wo(), v = rt(), h = de(() => {
    if (f() || m(Zr)) return b(), true;
    return false;
  }, [f, m, b]);
  async function R(p) {
    if (h()) return;
    if (l.current) return;
    l.current = true;
    let [g, y] = $w(t, (P) => p.includes(P));
    a("tengu_mcp_multidialog_choice", { approved: g.length, rejected: y.length });
    let M = false;
    if (g.length > 0) {
      let { error: P } = await Sa("localSettings", (A) => ({ enabledMcpjsonServers: L([...A?.enabledMcpjsonServers || [], ...g]) }), void 0, o);
      M ||= P != null;
    }
    if (Cdr(cI(), g), y.length > 0) {
      let { error: P } = await Sa("localSettings", (A) => ({ disabledMcpjsonServers: L([...A?.disabledMcpjsonServers || [], ...y]) }), void 0, o);
      M ||= P != null;
    }
    d({ persistFailed: M });
  }
  let k = de(async () => {
    if (h()) return;
    if (l.current) return;
    l.current = true;
    let { error: p } = await Sa("localSettings", (g) => ({ disabledMcpjsonServers: L([...g?.disabledMcpjsonServers || [], ...t]) }), void 0, o);
    d({ persistFailed: p != null });
  }, [h, t, d, o]);
  return r(Q, { children: [r(we, { title: `${t.length} new MCP servers found in this project`, subtitle: "Select any you wish to enable.", color: "warning", onCancel: k, exitOnCtrlCD: true, hideInputGuide: true, children: [e(E, {}), e(vF, { options: t.map((p) => ({ label: Vot(p, u?.has(p) ?? false), value: p })), defaultValue: v ? [] : t, submitButtonText: "Enable selected", onSubmit: R, onCancel: k, hideIndexes: true, refuseInput: h, refuseSubmitFocus: h })] }), e(s, { paddingX: 1, children: e(n, { dimColor: true, italic: true, children: r(Ee, { children: [e(V, { chord: "space", action: "select" }), e(ft, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "reject all" })] }) }) })] });
}
async function APn(t) {
  if (xv()) return { pendingServers: [], pluginServerNames: /* @__PURE__ */ new Set() };
  let { serverNames: u, pluginServerNames: d } = await Nto(t);
  return { pendingServers: u.filter((l) => dle(l) === "pending"), pluginServerNames: d };
}
async function Nto(t) {
  let { servers: u } = fm("project"), d = Object.keys(u), o = new Set(d), l = /* @__PURE__ */ new Set(), { enabled: f } = await fi(t), m = f.filter(rq);
  for (let b of m) {
    let v = await fLt(b, [], t);
    if (!v) continue;
    for (let h of Object.keys(v)) {
      if (o.has(h) || l.has(h)) continue;
      d.push(h), l.add(h);
    }
  }
  return { serverNames: d, pluginServerNames: l, rootServers: u };
}
async function kus({ pendingServers: t, pluginServerNames: u }, d, o) {
  if (t.length === 0) return null;
  let l;
  l = await x(t.map((v) => Vot(v, u.has(v))), o);
  let f = (v) => {
    _(l, o).catch(() => {
    }).then(() => d(v));
  }, [m, ...b] = t;
  return m !== void 0 && b.length === 0 ? e(kPn, { serverName: m, isPluginServer: u.has(m), onDone: f }) : e(TPn, { serverNames: t, pluginServerNames: u, onDone: f });
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
    } catch (b) {
      Rl(b);
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
  APn,
  Nto,
  TPn,
  kPn,
  kus
};
