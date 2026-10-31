// linux/ui/background-hint.js — Claude Code 2.1.310（linux）模块 chunk-hy2g8tcy.js
import { i } from "../shared/environment.js";
import { w } from "./chunk-0ed4c357.js";
import { GI } from "../context/chunk-e2302e3b.js";
import { Zl } from "../telemetry/focus-events.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { Md } from "../shared/chunk-d52cd1ac.js";
import { RQ, AG } from "../telemetry/keybinding-customization-release.js";
import { qs } from "../shared/action-not-found.c239.js";
import { xW, lN, cc } from "./truncate-end.b3f5.js";
import { sIr, con, iQ } from "../core/conversation-engine.js";
import { ow } from "../shared/chunk-f1900495.js";
import { alt } from "./chunk-61f50343.js";
import { eUe } from "./chunk-d30767b5.js";
import { slt, ilt } from "./chunk-621c1a87.js";
import { llt, vg } from "../shell/tool-use-error.js";
import { TA } from "../shared/chunk-9faca596.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { XN } from "../shared/action-not-found.4cf4.js";
import { P, Bo, ee, j } from "../vendor/react/chunk-9a0b1ced.js";
import { ap } from "../shared/chunk-e9fc3352.js";
import { $r } from "../vendor/react/chunk-0b0bf45d.js";
var h = {};
$r(h, { PILL_INDENT_COLUMNS: () => b, ToolProgressHint: () => S, default: () => h });
j();
var g = "ctrl+b", B = "ctrl+x ctrl+b", _ = new Set([g, B].map((a) => AG(RQ(a))));
function D(a) {
  for (let o of a) {
    if (o.context !== "Task") continue;
    let m = AG(o.chord);
    if (o.action === "task:background") {
      if (!_.has(m)) return true;
    } else if (o.action === null && _.has(m)) return true;
  }
  return false;
}
function U3t({ handler: a, isActive: o }) {
  let m = TA(), l = qs("task:background", "Task", g), d = Md(), c = d?.bindings, t = ee(() => c ? D(c) : false, [c]), u = Bo(a), p = !(m && !t);
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
function Zpr(a) {
  let t = w(10), { toolUseId: o, keyOnly: m, onBackground: l } = a, d = m === void 0 ? false : m, c = ow(), u;
  if (t[0] !== l || t[1] !== c) u = () => {
    iQ(c), l?.();
  }, t[0] = l, t[1] = c, t[2] = u;
  else u = t[2];
  let p = u, f;
  if (t[3] !== p) f = { handler: p, isActive: true }, t[3] = p, t[4] = f;
  else f = t[4];
  let { cohesionFixes: x, gateOnShortcut: k } = U3t(f), U = qs("task:background", "Task", "ctrl+b"), y = x ? k : i.terminal === "tmux" && U === "ctrl+b" ? "ctrl+b ctrl+b (twice)" : U;
  if (d) {
    return null;
  }
  if (ap() || x && y === "") {
    return null;
  }
  let F;
  if (t[5] !== y) F = GI({ chord: y, action: "run in background", parens: true, format: { keyCase: "lower" } }), t[5] = y, t[6] = F;
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
function xEi(a, { verbose: o, theme: m }) {
  let { command: l } = a;
  if (!l) return null;
  if (!o) {
    let d = l.split(`
`);
    if (Zl()) {
      let u = sIr(l);
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
function PEi(a, { verbose: o, tools: m, terminalSize: l, inProgressToolCallCount: d }) {
  let c = a.at(-1);
  if (!c || !c.data) return ilt();
  let t = c.data;
  return e(eUe, { fullOutput: t.fullOutput, output: t.output, elapsedTimeSeconds: t.elapsedTimeSeconds, totalLines: t.totalLines, totalBytes: t.totalBytes, timeoutMs: t.timeoutMs, taskId: t.taskId, verbose: o });
}
function IEi() {
  return slt();
}
function OEi(a, o, { verbose: m, theme: l, tools: d, style: c, input: t }) {
  let p = o.at(-1)?.data?.timeoutMs, f = typeof t === "object" && t !== null && "command" in t && typeof t.command === "string" ? t.command : void 0;
  return e(alt, { content: a, verbose: m, timeoutMs: p, style: c, command: f });
}
function MEi(a, { verbose: o, progressMessagesForMessage: m, tools: l }) {
  return e(vg, { result: a, verbose: o });
}
function DEi(a, { columns: o }) {
  if (a.isImage) return false;
  return XN(a.stdout, o) || XN(typeof a.stderr === "string" ? llt(a.stderr).trim().replace(con, "") : a.stderr, o);
}
export {
  DEi,
  IEi,
  MEi,
  OEi,
  PEi,
  U3t,
  Zpr,
  xEi
};
