// darwin/ui/powerup-lesson-completed.js — Claude Code 2.1.310（darwin）模块 chunk-75xfrc21.js
import { c } from "../agents/third-party.js";
import { Re, ue } from "../settings/global-config-and-gates.js";
import { Me } from "../shared/chunk-be0ce119.js";
import { w } from "./chunk-0ed4c357.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { ko, gEn, txe, CCt, Uw, CR } from "../shell/invalid-type.js";
import { le } from "../shared/chunk-4563156b.js";
import { s, n, Wa, Vr } from "../telemetry/render-glyph-cardinality.js";
import { qs } from "../shared/action-not-found.c239.js";
import { ne } from "../workflows/workflow-size-guideline-change.js";
import { ve } from "./chunk-067d565d.js";
import { q } from "../context/chunk-e2302e3b.js";
import { an } from "../shared/chunk-76877d92.js";
import { Je } from "./aria-hidden.aa9d.js";
import { gt } from "./aria-label.132c.js";
import { hP } from "./aria-label.0571.js";
import { Wd } from "../shared/chunk-d08b9350.js";
import { Ds } from "./chunk-e2c1cf01.js";
import { UW } from "../context/not-a-retry-status.js";
import { Kh } from "../telemetry/chunk-56c542d7.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { FPt } from "../remote/bridge-failed.js";
import { te, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { b } from "../vendor/react/chunk-0b0bf45d.js";
j();
function Jo(T) {
  return T.split(`
`).map(Ee);
}
function Go(v, U) {
  return e(n, { color: v.color, children: v.text }, U);
}
function Xo(C, M) {
  return e(n, { dimColor: C.dim, children: C.segments.map(Go) }, M);
}
function Qo() {
  return [];
}
function Wo(Ae, ce) {
  return Ae.x - ce.x;
}
function Zo(N, He) {
  let I = 0;
  return e(s, { height: 1, children: N.map((_, F) => {
    let Ue = Math.max(0, _.x - I);
    return I = Math.max(I, _.x) + 1, r(n, { children: [" ".repeat(Ue), e(n, { color: _.color, children: _.char })] }, F);
  }) }, He);
}
function Oo(d) {
  return (d + 1) % G.length;
}
var J = 3e3, E = 48, X = 3;
function K(p) {
  let u = w(10), { live: t, boxRef: l, children: o } = p, i;
  if (u[0] !== o) i = e(s, { flexDirection: "column", width: E - 4, height: X, children: o }), u[0] = o, u[1] = i;
  else i = u[1];
  const x = !t, g = t ? "claude" : void 0, h = t ? `${CR} try it` : `  ${gEn} demo`;
  let f;
  if (u[2] !== x || u[3] !== g || u[4] !== h) f = e(s, { position: "absolute", marginLeft: E - 12, children: e(n, { dimColor: x, color: g, children: h }) }), u[2] = x, u[3] = g, u[4] = h, u[5] = f;
  else f = u[5];
  let k;
  if (u[6] !== l || u[7] !== i || u[8] !== f) k = r(s, { ref: l, borderStyle: "round", borderColor: "inactive", paddingX: 1, width: E, height: X + 2, children: [i, f] }), u[6] = l, u[7] = i, u[8] = f, u[9] = k;
  else k = u[9];
  return k;
}
var io = /\[(\w+):([^\]]*)\]/g;
function Ee(p) {
  let t = p.startsWith("#"), l = t ? p.slice(1) : p, o = [], u = 0;
  for (let i of l.matchAll(io)) {
    if (i.index > u) o.push({ text: l.slice(u, i.index) });
    o.push({ text: i[2], color: i[1] }), u = i.index + i[0].length;
  }
  if (u < l.length) o.push({ text: l.slice(u) });
  if (o.length === 0) o.push({ text: "" });
  return { dim: t, segments: o };
}
function R(p) {
  let k = w(4), { frames: t } = p, l = t.map(Jo), o = Kh(Wd().prefersReducedMotion), [u, i] = Wa(o ? null : J), x = Math.floor(i / J) % l.length, g = l[x];
  const h = K, f = g.map(Xo);
  let d;
  if (k[0] !== h || k[1] !== u || k[2] !== f) d = e(h, { boxRef: u, children: f }), k[0] = h, k[1] = u, k[2] = f, k[3] = d;
  else d = k[3];
  return d;
}
var G = [{ label: "default", symbol: "", color: "text" }, { label: "accept edits on", symbol: CCt, color: "autoAccept" }, { label: "plan mode on", symbol: txe, color: "planMode" }, { label: "auto mode on", symbol: CCt, color: "warning" }], Q = 80, ze = 60, W = 1400, B = 16, Ke = 60, Pe = 100, go = [CR, Uw, ko, "·"], yo = ["claude", "success", "warning", "suggestion", "autoAccept"];
function je(p) {
  let t = [];
  for (let l = 0; l < p; l++) t.push({ x: Math.floor(Math.random() * Pe), delay: Math.random() * 400, speed: 0.7 + Math.random() * 0.6, char: UW(go), color: UW(yo) });
  return t;
}
function H(p) {
  let l = w(6), { onDone: t } = p, o;
  if (l[0] === b) o = je(40), l[0] = o;
  else o = l[0];
  let u = o, i = Kh(Wd().prefersReducedMotion), [x, g] = Wa(i ? null : ze), [h] = y(g), f = g - h, k;
  if (l[1] !== t) k = [t], l[1] = t, l[2] = k;
  else k = l[2];
  Vr(t, W + 600, k);
  let d;
  if (l[3] !== f || l[4] !== x) {
    let T = Array.from({ length: B }, Qo);
    for (const v of u) {
      let U = Math.max(0, f - v.delay);
      let C = Math.floor(U / W * B * v.speed);
      if (C >= 0 && C < B) T[C].push(v);
    }
    for (const M of T) M.sort(Wo);
    d = e(s, { ref: x, position: "absolute", marginLeft: Ke, flexDirection: "column", width: Pe, height: B, children: T.map(Zo) });
    l[3] = f, l[4] = x, l[5] = d;
  } else d = l[5];
  return d;
}
function S(p) {
  let h = w(14), { text: t } = p, l = le(t), o = Kh(Wd().prefersReducedMotion), [u, i] = Wa(o ? null : Q), x = l + 20, g = Math.floor(i / Q) % x - 10, f;
  if (h[0] !== g || h[1] !== t) f = FPt(t, g), h[0] = g, h[1] = t, h[2] = f;
  else f = h[2];
  let { before: k, shimmer: d, after: T } = f, v;
  if (h[3] !== k) v = e(n, { bold: true, color: "claude", children: k }), h[3] = k, h[4] = v;
  else v = h[4];
  let U;
  if (h[5] !== d) U = e(n, { bold: true, color: "claudeShimmer", children: d }), h[5] = d, h[6] = U;
  else U = h[6];
  let C;
  if (h[7] !== T) C = e(n, { bold: true, color: "claude", children: T }), h[7] = T, h[8] = C;
  else C = h[8];
  let M;
  if (h[9] !== u || h[10] !== v || h[11] !== U || h[12] !== C) M = r(s, { ref: u, children: [v, U, C] }), h[9] = u, h[10] = v, h[11] = U, h[12] = C, h[13] = M;
  else M = h[13];
  return M;
}
function ee() {
  let u = w(11), [p, t] = y(0), l = G[p], o = qs("confirm:cycleMode", "Confirmation", "shift+tab"), i, x;
  if (u[0] === b) i = { "confirm:cycleMode": () => t(Oo) }, x = { context: "Confirmation" }, u[0] = i, u[1] = x;
  else i = u[0], x = u[1];
  an(i, x);
  let g;
  if (u[2] !== o) g = r(n, { dimColor: true, children: ["Press ", o, " now", `

`] }), u[2] = o, u[3] = g;
  else g = u[3];
  const h = l.symbol ? `${l.symbol} ` : "  ";
  let f;
  if (u[4] !== l.color || u[5] !== l.label || u[6] !== h) f = r(n, { color: l.color, children: [h, l.label] }), u[4] = l.color, u[5] = l.label, u[6] = h, u[7] = f;
  else f = u[7];
  let k;
  if (u[8] !== g || u[9] !== f) k = e(K, { live: true, children: r(n, { children: [g, f] }) }), u[8] = g, u[9] = f, u[10] = k;
  else k = u[10];
  return k;
}
function A(p) {
  let l = w(2), { children: t } = p, o;
  if (l[0] !== t) o = e(n, { bold: true, color: "claude", children: t }), l[0] = t, l[1] = o;
  else o = l[1];
  return o;
}
function m(p) {
  let l = w(2), { children: t } = p, o;
  if (l[0] !== t) o = e(n, { color: "suggestion", children: t }), l[0] = t, l[1] = o;
  else o = l[1];
  return o;
}
var sD = [{ id: "at-mentions", title: "Talk to your codebase", tagline: "@ files, line refs", body: r(s, { flexDirection: "column", gap: 1, children: [r(n, { children: ["Type ", e(A, { children: "@" }), " anywhere in your prompt to fuzzy-find and attach a file. Claude reads it before answering — no more pasting code."] }), e(R, { frames: [`> what does [suggestion:@]
#type a file name…`, `> what does [suggestion:@src/auth.ts]
  [suggestion:❯ src/auth.ts]
#   src/auth.test.ts`, `> what does [suggestion:@src/auth.ts] do?
#◐ Reading src/auth.ts…`, `> what does [suggestion:@src/auth.ts] do?
Exports validateToken() which
checks JWT expiry and signature.`] }), r(n, { children: ["Reference specific lines with ", e(m, { children: "src/app.ts:42" }), " and Claude jumps straight there. Works in both directions: Claude cites files the same way, so you can click to open them in your editor."] }), r(n, { dimColor: true, children: ["Also try: ", e(m, { children: "@folder/" }), " to attach a whole directory tree."] })] }) }, { id: "modes", title: "Steer with modes", tagline: "shift+tab, plan, auto", body: e(Fe, {}) }, { id: "undo", title: "Undo anything", tagline: "/rewind, Esc-Esc", body: r(s, { flexDirection: "column", gap: 1, children: [r(n, { children: ["Claude checkpoints your files before every edit. Press", " ", e(A, { children: "Esc Esc" }), " (double-tap) to open ", e(m, { children: "/rewind" }), " and roll back to any prior state — code, conversation, or both."] }), e(R, { frames: [`[success:✓] Updated regex in parser.ts
#[error:8 tests failing]`, `#press Esc Esc
Rewind to:
  [suggestion:❯ before parser.ts edit]`, `#[success:✓] parser.ts restored
> try a simpler approach
#◐ thinking…`] }), e(n, { children: "Went down the wrong path? Rewind to before the detour and try a different prompt. Your git history stays clean." }), r(n, { dimColor: true, children: ["Also: ", e(m, { children: "/clear" }), " wipes conversation but keeps files.", " ", e(m, { children: "/branch" }), " forks the conversation to try two approaches."] })] }) }, { id: "background", title: "Run in the background", tagline: "tasks, /tasks", body: r(s, { flexDirection: "column", gap: 1, children: [r(n, { children: ["Long builds and test suites do not have to block you. Add", " ", e(A, { children: "&" }), " to any bash command and it runs in the background — you keep chatting, Claude notifies you when it finishes."] }), e(R, { frames: [`> run the test suite [claude:&]
#task started in background`, `> now fix the lint in app.ts
#◐ Editing app.ts…
#[warning:◐] bun test · 12s`, `> now fix the lint in app.ts
[success:✓] Removed unused import
#[warning:◐] bun test · 28s`, `> now fix the lint in app.ts
[success:✓] Removed unused import
#[success:✓] bun test · 284 pass`] }), r(n, { children: ["Run ", e(m, { children: "/tasks" }), " to see everything in flight. Claude can read task output mid-run and react to failures automatically."] }), e(n, { dimColor: true, children: "Subagents also run as tasks — it is all one queue." })] }) }, { id: "memory", title: "Teach Claude your rules", tagline: "CLAUDE.md, /memory", body: r(s, { flexDirection: "column", gap: 1, children: [r(n, { children: ["Drop a ", e(m, { children: "CLAUDE.md" }), " file in your repo and Claude reads it at the start of every session. Put your conventions there: test commands, style rules, do-not-touch directories."] }), e(R, { frames: [`#─ CLAUDE.md ─
#Run tests with: [suggestion:bun test]
#Never edit src/legacy/`, `> add tests for the cache
#◐ reading CLAUDE.md…`, `> add tests for the cache
Writing cache.test.ts,
running [suggestion:bun test] to verify.`] }), r(n, { children: ["Run ", e(m, { children: "/init" }), " to generate a starter CLAUDE.md from your codebase. Run ", e(m, { children: "/memory" }), " to edit it inline."] }), e(n, { dimColor: true, children: "Works at three levels: repo, your home directory (all projects), and per-directory overrides." })] }) }, { id: "mcp", title: "Extend with tools", tagline: "MCP, /mcp", body: r(s, { flexDirection: "column", gap: 1, children: [r(n, { children: ["MCP servers give Claude new tools: read your Slack, query your database, control your browser. Run ", e(m, { children: "/mcp" }), " to browse and connect servers."] }), e(R, { frames: [`> [suggestion:/mcp]
Connected servers:
  [success:✓] slack    [success:✓] github`, `> anything urgent in #eng?
#◐ [suggestion:slack] · reading channel…`, `Boris posted about the merge
freeze. Also 3 PRs await
your review on github.`] }), e(n, { children: 'Once connected, tools appear automatically — ask Claude to "check my calendar" or "search our Notion" and it just works.' }), r(n, { dimColor: true, children: ["From your shell:", " ", e(m, { children: "claude mcp add my-server -- npx some-mcp-pkg" }), " to wire one up without leaving the terminal."] })] }) }, { id: "automate", title: "Automate your workflow", tagline: "skills, hooks", body: r(s, { flexDirection: "column", gap: 1, children: [r(n, { children: ["Save a prompt to ", e(m, { children: ".claude/skills/deploy/SKILL.md" }), " and it becomes ", e(m, { children: "/deploy" }), " — type it, Claude runs it. Run", " ", e(m, { children: "/skills" }), " to see what you have."] }), e(R, { frames: [`> [suggestion:/deploy] staging
#◐ skill: deploy`, `[success:✓] built
[success:✓] tests pass
#◐ pushing to staging…`, `[success:✓] deployed
#[suggestion:staging.app.com]
#PostToolUse hook ran prettier`] }), r(n, { children: ["Hooks run your own scripts on events: before a tool call, after a response, on session start. Use them to enforce rules, log activity, or inject context. Run ", e(m, { children: "/hooks" }), " to see what fires when."] }), r(n, { dimColor: true, children: ["Run ", e(m, { children: "/install-github-app" }), " to let Claude review PRs when tagged."] })] }) }, { id: "subagents", title: "Multiply yourself", tagline: "subagents", body: r(s, { flexDirection: "column", gap: 1, children: [e(n, { children: 'Claude can spawn copies of itself to work in parallel. Ask it to "use subagents to search these 5 directories" and watch the fan-out.' }), e(R, { frames: [`> find any error handling bugs
#◐ Spawning 3 agents…`, `#[warning:◐] agent-1 · scanning api
#[warning:◐] agent-2 · scanning utils
#[warning:◐] agent-3 · scanning cli`, `#[success:✓] agent-1 · found reject
#[warning:◐] agent-2 · scanning utils
#[success:✓] agent-3 · no issues`, `Found 2 issues:
  [suggestion:api/fetch.ts:42] unhandled
  [suggestion:utils/retry.ts:18] swallowed`] }), r(n, { dimColor: true, children: ["Subagents run in isolated context. For true parallel sessions on separate branches, launch with ", e(m, { children: "claude --worktree" }), "."] })] }) }, { id: "cross-device", title: "Code from anywhere", tagline: "/remote-control, /teleport", body: r(s, { flexDirection: "column", gap: 1, children: [r(n, { children: ["Run ", e(m, { children: "/remote-control" }), " to take this session with you and pick up right where you left off on any device. Open the Code tab in the Claude mobile app, or visit claude.ai/code in a browser. The session keeps running on this machine while your other devices act as a remote control."] }), e(R, { frames: [`> [suggestion:/remote-control]
#◐ connecting…`, `[success:✓] connected
see this session at
[suggestion:claude.ai/code/abc123]`, `#─ on your phone ─
#abc123 · running tests
[warning:◐] 142 of 284`, `#─ on your phone ─
#abc123 · [success:✓] all pass
> ship it`] }), r(n, { children: ["Run ", e(m, { children: "/teleport" }), " to move a session between here and the cloud — send this one up to keep it going after you close the lid, or pull a cloud session into this terminal with full history."] }), e(n, { dimColor: true, children: "Kick off a long task, close your laptop, check progress from your phone." })] }) }, { id: "model-dial", title: "Dial the model", tagline: "/model, /effort", body: r(s, { flexDirection: "column", gap: 1, children: [r(n, { children: ["Run ", e(m, { children: "/model" }), " to switch models. Fable for the hardest problems, Opus for complex work, Sonnet for most tasks, Haiku for quick questions. Each trades speed for depth."] }), e(R, { frames: [`> [suggestion:/effort] high
#effort set to [claude:high]`, `> why is the list page slow?
#[claude:◐ thinking deeply…]`, `Three hypotheses, ranked:
 1. N+1 query in loader
 2. missing index on users`] }), r(n, { children: [e(m, { children: "/effort" }), " controls how long Claude thinks before answering.", " ", e(A, { children: "high" }), " for tricky bugs, ", e(A, { children: "low" }), " when you just need a quick edit."] }), r(n, { dimColor: true, children: ["Also: ", e(m, { children: "/fast" }), " toggles fast mode — same model, faster output."] })] }) }];
function oe() {
  let p = w(1), t;
  if (p[0] === b) t = e(n, { dimColor: true, italic: true, children: r(ve, { children: [e(q, { chord: ["up", "down"], action: "select" }), e(q, { chord: "enter", action: "open" }), e(q, { chord: "escape", action: "close" })] }) }), p[0] = t;
  else t = p[0];
  return t;
}
function se() {
  let p = w(1), t;
  if (p[0] === b) t = e(n, { dimColor: true, italic: true, children: r(ve, { children: [e(q, { chord: "enter", action: "mark done" }), e(q, { chord: "escape", action: "back" })] }) }), p[0] = t;
  else t = p[0];
  return t;
}
function Fe() {
  let p = w(9), t, l;
  if (p[0] === b) t = r(n, { children: ["Press ", e(A, { children: "shift+tab" }), " to cycle permission modes. Each mode changes how much Claude asks before acting:"] }), l = e(ee, {}), p[0] = t, p[1] = l;
  else t = p[0], l = p[1];
  let o;
  if (p[2] === b) o = r(n, { children: [e(n, { color: "success", children: "default" }), " — ask before every edit"] }), p[2] = o;
  else o = p[2];
  let u;
  if (p[3] === b) u = r(n, { children: [e(n, { color: "autoAccept", children: "accept edits" }), " — edit freely, ask for commands"] }), p[3] = u;
  else u = p[3];
  let i;
  if (p[4] === b) i = r(n, { children: [e(n, { color: "planMode", children: "plan" }), " — research and propose, never touch files"] }), p[4] = i;
  else i = p[4];
  let x;
  if (p[5] === b) x = r(s, { flexDirection: "column", paddingLeft: 2, children: [o, u, i, r(n, { children: [e(n, { color: "warning", children: "auto" }), " — Claude decides what is safe"] })] }), p[5] = x;
  else x = p[5];
  let g;
  if (p[6] === b) g = e(n, { color: "planMode", children: "plan" }), p[6] = g;
  else g = p[6];
  let h;
  if (p[7] === b) h = e(n, { color: "warning", children: "auto" }), p[7] = h;
  else h = p[7];
  let f;
  if (p[8] === b) f = r(s, { flexDirection: "column", gap: 1, children: [t, l, x, r(n, { dimColor: true, children: ["Use ", g, " for big refactors you want to review first. Use ", h, " for long unattended tasks. Run ", e(m, { children: "/permissions" }), " to pre-allow specific commands so Claude stops asking about them."] })] }), p[8] = f;
  else f = p[8];
  return f;
}
j();
function kt(Rt) {
  return sD.some((Tt) => Tt.id === Rt);
}
function wt() {
  let Pt = ue().powerupsUnlocked ?? [];
  return new Set(Pt.filter(kt));
}
function XRt(p) {
  let d = w(48), { onExit: t } = p, { storageV5: l } = Me(), [o, u] = y(wt), [i, x] = y(null), [g, h] = y(sD[0].id), [f, k] = y(false), T;
  if (d[0] === b) T = () => k(false), d[0] = T;
  else T = d[0];
  let v = T, U;
  if (d[1] !== o) U = function M2(C) {
    h(C.id), x(C), a("tengu_powerup_lesson_opened", { lesson_id: c(C.id), was_already_unlocked: o.has(C.id), unlocked_count: o.size });
  }, d[1] = o, d[2] = U;
  else U = d[2];
  let M = U, Ae;
  if (d[3] !== l || d[4] !== o) Ae = function I2(ce) {
    if (o.has(ce)) {
      return;
    }
    let N = new Set(o).add(ce);
    if (u(N), Re((He) => ({ ...He, powerupsUnlocked: [...N] }), l), a("tengu_powerup_lesson_completed", { lesson_id: c(ce), unlocked_count: N.size, all_unlocked: N.size === sD.length }), N.size === sD.length) k(true);
  }, d[3] = l, d[4] = o, d[5] = Ae;
  else Ae = d[5];
  let I = Ae, _;
  if (d[6] !== o) _ = sD.map((F) => {
    let Ue = o.has(F.id);
    let Se = `${Ue ? ne.tick : ne.circle} ${F.title}`;
    return { label: Ue ? e(n, { color: "success", children: Se }) : Se, value: F.id, description: F.tagline };
  }), d[6] = o, d[7] = _;
  else _ = d[7];
  let Ie = _;
  if (i) {
    let D2;
    if (d[8] !== o || d[9] !== i.id) D2 = o.has(i.id), d[8] = o, d[9] = i.id, d[10] = D2;
    else D2 = d[10];
    let L2;
    if (d[11] !== I || d[12] !== i.id) L2 = () => {
      I(i.id), x(null);
    }, d[11] = I, d[12] = i.id, d[13] = L2;
    else L2 = d[13];
    let z2;
    if (d[14] === b) z2 = () => x(null), d[14] = z2;
    else z2 = d[14];
    let V2;
    if (d[15] !== D2 || d[16] !== L2 || d[17] !== i) V2 = e(Be, { lesson: i, isUnlocked: D2, onDone: L2, onBack: z2 }), d[15] = D2, d[16] = L2, d[17] = i, d[18] = V2;
    else V2 = d[18];
    return V2;
  }
  let de = o.size === sD.length, D;
  if (d[19] !== de) D = de ? e(S, { text: "All powered up" }) : e(n, { bold: true, color: "claude", children: "Power-ups" }), d[19] = de, d[20] = D;
  else D = d[20];
  let L;
  if (d[21] !== o.size) L = r(n, { dimColor: true, children: [" ", o.size, "/", sD.length, " unlocked", " "] }), d[21] = o.size, d[22] = L;
  else L = d[22];
  const z = o.size / sD.length;
  let V;
  if (d[23] !== z) V = e(hP, { ratio: z, width: 16, fillColor: "claude", emptyColor: "inactive" }), d[23] = z, d[24] = V;
  else V = d[24];
  let me;
  if (d[25] !== D || d[26] !== L || d[27] !== V) me = r(s, { marginBottom: 1, children: [D, L, V] }), d[25] = D, d[26] = L, d[27] = V, d[28] = me;
  else me = d[28];
  const Ve = de ? "Now go build something." : "Each power-up teaches one thing Claude Code can do that most people miss. Open one, read it, try it, mark it done.";
  let pe;
  if (d[29] !== Ve) pe = e(s, { marginBottom: 1, children: e(n, { dimColor: true, wrap: "wrap", children: Ve }) }), d[29] = Ve, d[30] = pe;
  else pe = d[30];
  let fe;
  if (d[31] !== M) fe = (Ct) => {
    let eo = sD.find((vt) => vt.id === Ct);
    if (eo) M(eo);
  }, d[31] = M, d[32] = fe;
  else fe = d[32];
  let he;
  if (d[33] !== t) he = () => t("Power-ups closed"), d[33] = t, d[34] = he;
  else he = d[34];
  let ge;
  if (d[35] !== Ie || d[36] !== g || d[37] !== fe || d[38] !== he) ge = e(Je, { options: Ie, hideIndexes: true, visibleOptionCount: sD.length, defaultFocusValue: g, onChange: fe, onCancel: he }), d[35] = Ie, d[36] = g, d[37] = fe, d[38] = he, d[39] = ge;
  else ge = d[39];
  let oo;
  if (d[40] === b) oo = e(s, { marginTop: 1, children: e(oe, {}) }), d[40] = oo;
  else oo = d[40];
  let ye;
  if (d[41] !== f) ye = f && e(H, { onDone: v }), d[41] = f, d[42] = ye;
  else ye = d[42];
  let to;
  if (d[43] !== pe || d[44] !== ge || d[45] !== ye || d[46] !== me) to = e(Ds, { color: "claude", children: r(s, { flexDirection: "column", children: [me, pe, ge, oo, ye] }) }), d[43] = pe, d[44] = ge, d[45] = ye, d[46] = me, d[47] = to;
  else to = d[47];
  return to;
}
function Be(p) {
  let i = w(15), { lesson: t, isUnlocked: l, onDone: o, onBack: u } = p, x;
  if (i[0] !== u || i[1] !== o) x = { "confirm:yes": o, "confirm:no": u }, i[0] = u, i[1] = o, i[2] = x;
  else x = i[2];
  let g;
  if (i[3] === b) g = { context: "Confirmation" }, i[3] = g;
  else g = i[3];
  an(x, g);
  const h = l ? "success" : "pending";
  let f;
  if (i[4] !== h) f = e(gt, { status: h, withSpace: true }), i[4] = h, i[5] = f;
  else f = i[5];
  let k;
  if (i[6] !== t.title) k = e(n, { bold: true, color: "claude", children: t.title }), i[6] = t.title, i[7] = k;
  else k = i[7];
  let d;
  if (i[8] !== f || i[9] !== k) d = r(s, { children: [f, k] }), i[8] = f, i[9] = k, i[10] = d;
  else d = i[10];
  let T;
  if (i[11] === b) T = e(se, {}), i[11] = T;
  else T = i[11];
  let v;
  if (i[12] !== t.body || i[13] !== d) v = e(Ds, { color: "claude", children: r(s, { flexDirection: "column", gap: 1, children: [d, t.body, T] }) }), i[12] = t.body, i[13] = d, i[14] = v;
  else v = i[14];
  return v;
}
export {
  XRt,
  sD
};
