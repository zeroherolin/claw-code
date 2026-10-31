// ui/clawd-body.bepa.js — Claude Code 2.1.310 模块 chunk-bepasq5q.js
import { __asset_src } from "../runtime/assets.js";
import { i } from "../shared/environment.9a41.js";
import { Pr } from "../shared/chunk-y6x1q9pp.js";
import { w } from "./chunk-zqxc4qtb.js";
import { rt, s, n } from "../telemetry/render-glyph-cardinality.7car.js";
import { Ce } from "../shared/chunk-9vjqn6fm.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
import { b } from "../vendor/react/chunk-meds60nn.js";
var A = 58, z = 30;
function eae() {
  let l = w(39), [S] = Pr(), T = rt(), { rows: N } = Ce();
  if (T || N < z) {
    let o2;
    if (l[0] === b) o2 = r(n, { color: "claude", children: ["Welcome to Claude Code", " "] }), l[0] = o2;
    else o2 = l[0];
    let d2;
    if (l[1] === b) d2 = r(n, { children: [o2, r(n, { dimColor: true, children: ["v", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION] })] }), l[1] = d2;
    else d2 = l[1];
    return d2;
  }
  if (i.terminal === "Apple_Terminal") {
    let o2;
    if (l[2] !== S) o2 = e(V, { theme: S, welcomeMessage: "Welcome to Claude Code" }), l[2] = S, l[3] = o2;
    else o2 = l[3];
    return o2;
  }
  if (["light", "light-daltonized", "light-ansi"].includes(S)) {
    let o2;
    if (l[4] === b) o2 = r(n, { color: "claude", children: ["Welcome to Claude Code", " "] }), l[4] = o2;
    else o2 = l[4];
    let d2, a2, c2, t2, m2, g2, C2, u2, y2;
    if (l[5] === b) d2 = r(n, { children: [o2, r(n, { dimColor: true, children: ["v", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION, " "] })] }), a2 = e(n, { children: ".........................................................." }), c2 = e(n, { children: "                                                          " }), t2 = e(n, { children: "                                                          " }), m2 = e(n, { children: "                                                          " }), g2 = e(n, { children: "            ░░░░░░                                        " }), C2 = e(n, { children: "    ░░░   ░░░░░░░░░░                                      " }), u2 = e(n, { children: "   ░░░░░░░░░░░░░░░░░░░                                    " }), y2 = e(n, { children: "                                                          " }), l[5] = d2, l[6] = a2, l[7] = c2, l[8] = t2, l[9] = m2, l[10] = g2, l[11] = C2, l[12] = u2, l[13] = y2;
    else d2 = l[5], a2 = l[6], c2 = l[7], t2 = l[8], m2 = l[9], g2 = l[10], C2 = l[11], u2 = l[12], y2 = l[13];
    let _2;
    if (l[14] === b) _2 = r(n, { children: [e(n, { dimColor: true, children: "                           ░░░░" }), e(n, { children: "                     ██    " })] }), l[14] = _2;
    else _2 = l[14];
    let h2, R2;
    if (l[15] === b) h2 = r(n, { children: [e(n, { dimColor: true, children: "                         ░░░░░░░░░░" }), e(n, { children: "               ██▒▒██  " })] }), R2 = e(n, { children: "                                            ▒▒      ██   ▒" }), l[15] = h2, l[16] = R2;
    else h2 = l[15], R2 = l[16];
    let k2;
    if (l[17] === b) k2 = r(n, { children: ["      ", e(n, { color: "clawd_body", children: " █████████ " }), "                         ▒▒░░▒▒      ▒ ▒▒"] }), l[17] = k2;
    else k2 = l[17];
    let f2;
    if (l[18] === b) f2 = r(n, { children: ["      ", e(n, { color: "clawd_body", backgroundColor: "clawd_background", children: "██▄█████▄██" }), "                           ▒▒         ▒▒ "] }), l[18] = f2;
    else f2 = l[18];
    let p2;
    if (l[19] === b) p2 = r(n, { children: ["      ", e(n, { color: "clawd_body", children: " █████████ " }), "                          ░          ▒   "] }), l[19] = p2;
    else p2 = l[19];
    let M2;
    if (l[20] === b) M2 = e(s, { width: A, children: r(s, { flexDirection: "column", children: [d2, a2, c2, t2, m2, g2, C2, u2, y2, _2, h2, R2, k2, f2, p2, r(n, { children: [".......", e(n, { color: "clawd_body", children: "█ █   █ █" }), "..........................░..........▒...."] })] }) }), l[20] = M2;
    else M2 = l[20];
    return M2;
  }
  let o;
  if (l[21] === b) o = r(n, { color: "claude", children: ["Welcome to Claude Code", " "] }), l[21] = o;
  else o = l[21];
  let d, a, c, t, m, g, C;
  if (l[22] === b) d = r(n, { children: [o, r(n, { dimColor: true, children: ["v", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION, " "] })] }), a = e(n, { children: ".........................................................." }), c = e(n, { children: "                                                          " }), t = e(n, { children: "     *                                       █████▓▓░     " }), m = e(n, { children: "                                 *         ███▓░     ░░   " }), g = e(n, { children: "            ░░░░░░                        ███▓░           " }), C = e(n, { children: "    ░░░   ░░░░░░░░░░                      ███▓░           " }), l[22] = d, l[23] = a, l[24] = c, l[25] = t, l[26] = m, l[27] = g, l[28] = C;
  else d = l[22], a = l[23], c = l[24], t = l[25], m = l[26], g = l[27], C = l[28];
  let _, h, R, u, y;
  if (l[29] === b) u = r(n, { children: [e(n, { children: "   ░░░░░░░░░░░░░░░░░░░    " }), e(n, { bold: true, children: "*" }), e(n, { children: "                ██▓░░      ▓   " })] }), y = e(n, { children: "                                             ░▓▓███▓▓░    " }), _ = e(n, { dimColor: true, children: " *                                 ░░░░                   " }), h = e(n, { dimColor: true, children: "                                 ░░░░░░░░                 " }), R = e(n, { dimColor: true, children: "                               ░░░░░░░░░░░░░░░░           " }), l[29] = _, l[30] = h, l[31] = R, l[32] = u, l[33] = y;
  else _ = l[29], h = l[30], R = l[31], u = l[32], y = l[33];
  let k;
  if (l[34] === b) k = e(n, { color: "clawd_body", children: " █████████ " }), l[34] = k;
  else k = l[34];
  let f;
  if (l[35] === b) f = r(n, { children: ["      ", k, "                                       ", e(n, { dimColor: true, children: "*" }), e(n, { children: " " })] }), l[35] = f;
  else f = l[35];
  let p;
  if (l[36] === b) p = r(n, { children: ["      ", e(n, { color: "clawd_body", children: "██▄█████▄██" }), e(n, { children: "                        " }), e(n, { bold: true, children: "*" }), e(n, { children: "                " })] }), l[36] = p;
  else p = l[36];
  let M;
  if (l[37] === b) M = r(n, { children: ["      ", e(n, { color: "clawd_body", children: " █████████ " }), "     *                                   "] }), l[37] = M;
  else M = l[37];
  let O;
  if (l[38] === b) O = e(s, { width: A, children: r(s, { flexDirection: "column", children: [d, a, c, t, m, g, C, u, y, _, h, R, f, p, M, r(n, { children: [".......", e(n, { color: "clawd_body", children: "█ █   █ █" }), ".........................................."] })] }) }), l[38] = O;
  else O = l[38];
  return O;
}
function V(S) {
  let o = w(44), { theme: T, welcomeMessage: N } = S;
  if (["light", "light-daltonized", "light-ansi"].includes(T)) {
    let d2;
    if (o[0] !== N) d2 = r(n, { color: "claude", children: [N, " "] }), o[0] = N, o[1] = d2;
    else d2 = o[1];
    let a2;
    if (o[2] === b) a2 = r(n, { dimColor: true, children: ["v", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION, " "] }), o[2] = a2;
    else a2 = o[2];
    let c2;
    if (o[3] !== d2) c2 = r(n, { children: [d2, a2] }), o[3] = d2, o[4] = c2;
    else c2 = o[4];
    let t2, m2, g2, C2, u2, y2, _2, h2;
    if (o[5] === b) g2 = e(n, { children: ".........................................................." }), C2 = e(n, { children: "                                                          " }), u2 = e(n, { children: "                                                          " }), y2 = e(n, { children: "                                                          " }), _2 = e(n, { children: "            ░░░░░░                                        " }), h2 = e(n, { children: "    ░░░   ░░░░░░░░░░                                      " }), t2 = e(n, { children: "   ░░░░░░░░░░░░░░░░░░░                                    " }), m2 = e(n, { children: "                                                          " }), o[5] = t2, o[6] = m2, o[7] = g2, o[8] = C2, o[9] = u2, o[10] = y2, o[11] = _2, o[12] = h2;
    else t2 = o[5], m2 = o[6], g2 = o[7], C2 = o[8], u2 = o[9], y2 = o[10], _2 = o[11], h2 = o[12];
    let R2;
    if (o[13] === b) R2 = r(n, { children: [e(n, { dimColor: true, children: "                           ░░░░" }), e(n, { children: "                     ██    " })] }), o[13] = R2;
    else R2 = o[13];
    let k2, f2, p2;
    if (o[14] === b) k2 = r(n, { children: [e(n, { dimColor: true, children: "                         ░░░░░░░░░░" }), e(n, { children: "               ██▒▒██  " })] }), f2 = e(n, { children: "                                            ▒▒      ██   ▒" }), p2 = e(n, { children: "                                          ▒▒░░▒▒      ▒ ▒▒" }), o[14] = k2, o[15] = f2, o[16] = p2;
    else k2 = o[14], f2 = o[15], p2 = o[16];
    let M2;
    if (o[17] === b) M2 = r(n, { children: ["      ", e(n, { color: "clawd_body", children: "▗" }), r(n, { color: "clawd_background", backgroundColor: "clawd_body", children: [" ", "▗", "     ", "▖", " "] }), e(n, { color: "clawd_body", children: "▖" }), "                           ▒▒         ▒▒ "] }), o[17] = M2;
    else M2 = o[17];
    let O2;
    if (o[18] === b) O2 = r(n, { children: ["       ", e(n, { backgroundColor: "clawd_body", children: " ".repeat(9) }), "                           ░          ▒   "] }), o[18] = O2;
    else O2 = o[18];
    let x2;
    if (o[19] === b) x2 = r(n, { children: [".......", e(n, { backgroundColor: "clawd_body", children: " " }), e(n, { children: " " }), e(n, { backgroundColor: "clawd_body", children: " " }), e(n, { children: "   " }), e(n, { backgroundColor: "clawd_body", children: " " }), e(n, { children: " " }), e(n, { backgroundColor: "clawd_body", children: " " }), "..........................░..........▒...."] }), o[19] = x2;
    else x2 = o[19];
    let v2;
    if (o[20] !== c2) v2 = e(s, { width: A, children: r(s, { flexDirection: "column", children: [c2, g2, C2, u2, y2, _2, h2, t2, m2, R2, k2, f2, p2, M2, O2, x2] }) }), o[20] = c2, o[21] = v2;
    else v2 = o[21];
    return v2;
  }
  let d;
  if (o[22] !== N) d = r(n, { color: "claude", children: [N, " "] }), o[22] = N, o[23] = d;
  else d = o[23];
  let a;
  if (o[24] === b) a = r(n, { dimColor: true, children: ["v", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION, " "] }), o[24] = a;
  else a = o[24];
  let c;
  if (o[25] !== d) c = r(n, { children: [d, a] }), o[25] = d, o[26] = c;
  else c = o[26];
  let g, C, u, y, _, h;
  if (o[27] === b) g = e(n, { children: ".........................................................." }), C = e(n, { children: "                                                          " }), u = e(n, { children: "     *                                       █████▓▓░     " }), y = e(n, { children: "                                 *         ███▓░     ░░   " }), _ = e(n, { children: "            ░░░░░░                        ███▓░           " }), h = e(n, { children: "    ░░░   ░░░░░░░░░░                      ███▓░           " }), o[27] = g, o[28] = C, o[29] = u, o[30] = y, o[31] = _, o[32] = h;
  else g = o[27], C = o[28], u = o[29], y = o[30], _ = o[31], h = o[32];
  let t, m, R, k, f;
  if (o[33] === b) t = r(n, { children: [e(n, { children: "   ░░░░░░░░░░░░░░░░░░░    " }), e(n, { bold: true, children: "*" }), e(n, { children: "                ██▓░░      ▓   " })] }), m = e(n, { children: "                                             ░▓▓███▓▓░    " }), R = e(n, { dimColor: true, children: " *                                 ░░░░                   " }), k = e(n, { dimColor: true, children: "                                 ░░░░░░░░                 " }), f = e(n, { dimColor: true, children: "                               ░░░░░░░░░░░░░░░░           " }), o[33] = t, o[34] = m, o[35] = R, o[36] = k, o[37] = f;
  else t = o[33], m = o[34], R = o[35], k = o[36], f = o[37];
  let p;
  if (o[38] === b) p = r(n, { children: ["                                                      ", e(n, { dimColor: true, children: "*" }), e(n, { children: "   " })] }), o[38] = p;
  else p = o[38];
  let M;
  if (o[39] === b) M = r(n, { children: ["      ", e(n, { color: "clawd_body", children: "▗" }), r(n, { color: "clawd_background", backgroundColor: "clawd_body", children: [" ", "▗", "     ", "▖", " "] }), e(n, { color: "clawd_body", children: "▖" }), e(n, { children: "                       " }), e(n, { bold: true, children: "*" }), e(n, { children: "                 " })] }), o[39] = M;
  else M = o[39];
  let O;
  if (o[40] === b) O = r(n, { children: ["       ", e(n, { backgroundColor: "clawd_body", children: " ".repeat(9) }), "      *                                   "] }), o[40] = O;
  else O = o[40];
  let x;
  if (o[41] === b) x = r(n, { children: [".......", e(n, { backgroundColor: "clawd_body", children: " " }), e(n, { children: " " }), e(n, { backgroundColor: "clawd_body", children: " " }), e(n, { children: "   " }), e(n, { backgroundColor: "clawd_body", children: " " }), e(n, { children: " " }), e(n, { backgroundColor: "clawd_body", children: " " }), ".........................................."] }), o[41] = x;
  else x = o[41];
  let v;
  if (o[42] !== c) v = e(s, { width: A, children: r(s, { flexDirection: "column", children: [c, g, C, u, y, _, h, t, m, R, k, f, p, M, O, x] }) }), o[42] = c, o[43] = v;
  else v = o[43];
  return v;
}
export {
  eae
};
