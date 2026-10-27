// ui/background-hint.szsd.js — Claude Code 2.1.310 模块 chunk-szsddm79.js
import { i } from "../shared/environment.9a41.js";
import { w } from "./chunk-zqxc4qtb.js";
import { YI } from "../context/chunk-d05584w8.js";
import { Zl } from "../telemetry/focus-events.e5dw.js";
import { s, n } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { Md } from "../shared/chunk-5zq7df98.js";
import { LJ, L2 } from "../telemetry/keybinding-customization-release.66sh.js";
import { qs } from "../shared/action-not-found.hpy9.js";
import { FW, pN, cc } from "./truncate-end.8a5j.js";
import { CIr, Con, mJ } from "../core/conversation-engine.31gx.js";
import { sw } from "../shared/chunk-cebc5xzf.js";
import { plt } from "./chunk-6ry3ntyf.js";
import { lUe } from "./chunk-khjm2mq5.js";
import { clt, ult } from "./chunk-5x6392b9.js";
import { flt, Eg } from "../shell/tool-use-error.q2cq.js";
import { RT } from "../shared/chunk-5gjnrzjz.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
import { eF } from "../shared/action-not-found.3j3w.js";
import { P, Bo, te, j } from "../vendor/react/chunk-s8vmszp2.js";
import { sf } from "../shared/chunk-tndwavj2.js";
import { Fr } from "../vendor/react/chunk-meds60nn.js";
var h = {};
Fr(h, { PILL_INDENT_COLUMNS: () => b, ToolProgressHint: () => S, default: () => h });
j();
var g = "ctrl+b", B = "ctrl+x ctrl+b", _ = new Set([g, B].map((a) => L2(LJ(a))));
function D(a) {
  for (let o of a) {
    if (o.context !== "Task") continue;
    let m = L2(o.chord);
    if (o.action === "task:background") {
      if (!_.has(m)) return true;
    } else if (o.action === null && _.has(m)) return true;
  }
  return false;
}
function Z9t({ handler: a, isActive: o }) {
  let m = RT(), l = qs("task:background", "Task", g), d = Md(), c = d?.bindings, t = te(() => c ? D(c) : false, [c]), u = Bo(a), p = !(m && !t);
  P(() => {
    if (!d || !o) return;
    return d.registerHandler({ action: "task:background", context: "Task", handler: () => u(), singleKey: p });
  }, [d, o, p]);
  let f = t ? l : B, x = l === "" ? "" : i.terminal === "tmux" ? f.split(" ").map((k) => k === g ? `${g} ${g}` : k).join(" ") : f;
  return { cohesionFixes: m, gateOnShortcut: x, resolvedShortcut: l };
}
var b = 5;
function z(t) {
  return t.props.hint === "" ? null : e(s, { paddingLeft: b, children: e(n, { dimColor: true, children: t.props.hint }) });
}
var S = (a) => {
  let l = w(4), { toolUseId: o, hint: m } = a, d, c;
  if (l[0] !== m || l[1] !== o) d = () => ({ requestId: o, props: { tool_use_id: o, kind: "background_hint", hint: m } }), c = [o, m], l[0] = m, l[1] = o, l[2] = d, l[3] = c;
  else d = l[2], c = l[3];
  return cc.useRenderHook(cc.useRenderInput("ToolProgress", d, c), z);
};
var O = 2, T = 160;
function gmr(a) {
  let t = w(10), { toolUseId: o, keyOnly: m, onBackground: l } = a, d = m === void 0 ? false : m, c = sw(), u;
  if (t[0] !== l || t[1] !== c) u = () => {
    mJ(c), l?.();
  }, t[0] = l, t[1] = c, t[2] = u;
  else u = t[2];
  let p = u, f;
  if (t[3] !== p) f = { handler: p, isActive: true }, t[3] = p, t[4] = f;
  else f = t[4];
  let { cohesionFixes: x, gateOnShortcut: k } = Z9t(f), U = qs("task:background", "Task", "ctrl+b"), y = x ? k : i.terminal === "tmux" && U === "ctrl+b" ? "ctrl+b ctrl+b (twice)" : U;
  if (d) {
    return null;
  }
  if (sf() || x && y === "") {
    return null;
  }
  let F;
  if (t[5] !== y) F = YI({ chord: y, action: "run in background", parens: true, format: { keyCase: "lower" } }), t[5] = y, t[6] = F;
  else F = t[6];
  let R = F;
  if (R === "") {
    return null;
  }
  let A;
  if (t[7] !== R || t[8] !== o) A = e(h.ToolProgressHint, { toolUseId: o, hint: R }), t[7] = R, t[8] = o, t[9] = A;
  else A = t[9];
  return A;
}
function yki(a, { verbose: o, theme: m }) {
  let { command: l } = a;
  if (!l) return null;
  if (!o) {
    let d = l.split(`
`);
    if (Zl()) {
      let u = CIr(l);
      if (u) return u.length > T ? u.slice(0, T) + "…" : u;
    }
    let c = d.length > O, t = l.length > T;
    if (c || t) {
      let u = l;
      if (c) u = d.slice(0, O).join(`
`);
      if (u.length > T) u = u.slice(0, T);
      return r(n, { children: [u.trim(), "…"] });
    }
  }
  return l;
}
function _ki(a, { verbose: o, tools: m, terminalSize: l, inProgressToolCallCount: d }) {
  let c = a.at(-1);
  if (!c || !c.data) return ult();
  let t = c.data;
  return e(lUe, { fullOutput: t.fullOutput, output: t.output, elapsedTimeSeconds: t.elapsedTimeSeconds, totalLines: t.totalLines, totalBytes: t.totalBytes, timeoutMs: t.timeoutMs, taskId: t.taskId, verbose: o });
}
function Ski() {
  return clt();
}
function bki(a, o, { verbose: m, theme: l, tools: d, style: c, input: t }) {
  let p = o.at(-1)?.data?.timeoutMs, f = typeof t === "object" && t !== null && "command" in t && typeof t.command === "string" ? t.command : void 0;
  return e(plt, { content: a, verbose: m, timeoutMs: p, style: c, command: f });
}
function wki(a, { verbose: o, progressMessagesForMessage: m, tools: l }) {
  return e(Eg, { result: a, verbose: o });
}
function Eki(a, { columns: o }) {
  if (a.isImage) return false;
  return eF(a.stdout, o) || eF(typeof a.stderr === "string" ? flt(a.stderr).trim().replace(Con, "") : a.stderr, o);
}
export {
  Eki,
  Ski,
  Z9t,
  _ki,
  bki,
  gmr,
  wki,
  yki
};
