// linux/ui/clawd-body.js — Claude Code 2.1.310（linux）模块 chunk-qmgw1yjr.js
import { __asset_src } from "../../runtime/assets.js";
import { i } from "../shared/environment.js";
import { Pr } from "../shared/chunk-be0ce119.js";
import { w } from "./chunk-0ed4c357.js";
import { rt, s, n } from "../telemetry/render-glyph-cardinality.js";
import { Te } from "../shared/chunk-bdaaea45.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
var M = 58, z = 30;
function Vie() {
  let l = w(39), [O] = Pr(), T = rt(), { rows: A } = Te();
  if (T || A < z) {
    let o2;
    if (l[0] === S) o2 = r(n, { color: "claude", children: ["Welcome to Claude Code", " "] }), l[0] = o2;
    else o2 = l[0];
    let d2;
    if (l[1] === S) d2 = r(n, { children: [o2, r(n, { dimColor: true, children: ["v", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION] })] }), l[1] = d2;
    else d2 = l[1];
    return d2;
  }
  if (i.terminal === "Apple_Terminal") {
    let o2;
    if (l[2] !== O) o2 = e(V, { theme: O, welcomeMessage: "Welcome to Claude Code" }), l[2] = O, l[3] = o2;
    else o2 = l[3];
    return o2;
  }
  if (["light", "light-daltonized", "light-ansi"].includes(O)) {
    let o2;
    if (l[4] === S) o2 = r(n, { color: "claude", children: ["Welcome to Claude Code", " "] }), l[4] = o2;
    else o2 = l[4];
    let d2, a2, c2, t2, m2, b2, g2, C2, u2;
    if (l[5] === S) d2 = r(n, { children: [o2, r(n, { dimColor: true, children: ["v", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, " "] })] }), a2 = e(n, { children: ".........................................................." }), c2 = e(n, { children: "                                                          " }), t2 = e(n, { children: "                                                          " }), m2 = e(n, { children: "                                                          " }), b2 = e(n, { children: "            ░░░░░░                                        " }), g2 = e(n, { children: "    ░░░   ░░░░░░░░░░                                      " }), C2 = e(n, { children: "   ░░░░░░░░░░░░░░░░░░░                                    " }), u2 = e(n, { children: "                                                          " }), l[5] = d2, l[6] = a2, l[7] = c2, l[8] = t2, l[9] = m2, l[10] = b2, l[11] = g2, l[12] = C2, l[13] = u2;
    else d2 = l[5], a2 = l[6], c2 = l[7], t2 = l[8], m2 = l[9], b2 = l[10], g2 = l[11], C2 = l[12], u2 = l[13];
    let y2;
    if (l[14] === S) y2 = r(n, { children: [e(n, { dimColor: true, children: "                           ░░░░" }), e(n, { children: "                     ██    " })] }), l[14] = y2;
    else y2 = l[14];
    let _2, h2;
    if (l[15] === S) _2 = r(n, { children: [e(n, { dimColor: true, children: "                         ░░░░░░░░░░" }), e(n, { children: "               ██▒▒██  " })] }), h2 = e(n, { children: "                                            ▒▒      ██   ▒" }), l[15] = _2, l[16] = h2;
    else _2 = l[15], h2 = l[16];
    let R2;
    if (l[17] === S) R2 = r(n, { children: ["      ", e(n, { color: "clawd_body", children: " █████████ " }), "                         ▒▒░░▒▒      ▒ ▒▒"] }), l[17] = R2;
    else R2 = l[17];
    let k2;
    if (l[18] === S) k2 = r(n, { children: ["      ", e(n, { color: "clawd_body", backgroundColor: "clawd_background", children: "██▄█████▄██" }), "                           ▒▒         ▒▒ "] }), l[18] = k2;
    else k2 = l[18];
    let f2;
    if (l[19] === S) f2 = r(n, { children: ["      ", e(n, { color: "clawd_body", children: " █████████ " }), "                          ░          ▒   "] }), l[19] = f2;
    else f2 = l[19];
    let p2;
    if (l[20] === S) p2 = e(s, { width: M, children: r(s, { flexDirection: "column", children: [d2, a2, c2, t2, m2, b2, g2, C2, u2, y2, _2, h2, R2, k2, f2, r(n, { children: [".......", e(n, { color: "clawd_body", children: "█ █   █ █" }), "..........................░..........▒...."] })] }) }), l[20] = p2;
    else p2 = l[20];
    return p2;
  }
  let o;
  if (l[21] === S) o = r(n, { color: "claude", children: ["Welcome to Claude Code", " "] }), l[21] = o;
  else o = l[21];
  let d, a, c, t, m, b, g;
  if (l[22] === S) d = r(n, { children: [o, r(n, { dimColor: true, children: ["v", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, " "] })] }), a = e(n, { children: ".........................................................." }), c = e(n, { children: "                                                          " }), t = e(n, { children: "     *                                       █████▓▓░     " }), m = e(n, { children: "                                 *         ███▓░     ░░   " }), b = e(n, { children: "            ░░░░░░                        ███▓░           " }), g = e(n, { children: "    ░░░   ░░░░░░░░░░                      ███▓░           " }), l[22] = d, l[23] = a, l[24] = c, l[25] = t, l[26] = m, l[27] = b, l[28] = g;
  else d = l[22], a = l[23], c = l[24], t = l[25], m = l[26], b = l[27], g = l[28];
  let y, _, h, C, u;
  if (l[29] === S) C = r(n, { children: [e(n, { children: "   ░░░░░░░░░░░░░░░░░░░    " }), e(n, { bold: true, children: "*" }), e(n, { children: "                ██▓░░      ▓   " })] }), u = e(n, { children: "                                             ░▓▓███▓▓░    " }), y = e(n, { dimColor: true, children: " *                                 ░░░░                   " }), _ = e(n, { dimColor: true, children: "                                 ░░░░░░░░                 " }), h = e(n, { dimColor: true, children: "                               ░░░░░░░░░░░░░░░░           " }), l[29] = y, l[30] = _, l[31] = h, l[32] = C, l[33] = u;
  else y = l[29], _ = l[30], h = l[31], C = l[32], u = l[33];
  let R;
  if (l[34] === S) R = e(n, { color: "clawd_body", children: " █████████ " }), l[34] = R;
  else R = l[34];
  let k;
  if (l[35] === S) k = r(n, { children: ["      ", R, "                                       ", e(n, { dimColor: true, children: "*" }), e(n, { children: " " })] }), l[35] = k;
  else k = l[35];
  let f;
  if (l[36] === S) f = r(n, { children: ["      ", e(n, { color: "clawd_body", children: "██▄█████▄██" }), e(n, { children: "                        " }), e(n, { bold: true, children: "*" }), e(n, { children: "                " })] }), l[36] = f;
  else f = l[36];
  let p;
  if (l[37] === S) p = r(n, { children: ["      ", e(n, { color: "clawd_body", children: " █████████ " }), "     *                                   "] }), l[37] = p;
  else p = l[37];
  let N;
  if (l[38] === S) N = e(s, { width: M, children: r(s, { flexDirection: "column", children: [d, a, c, t, m, b, g, C, u, y, _, h, k, f, p, r(n, { children: [".......", e(n, { color: "clawd_body", children: "█ █   █ █" }), ".........................................."] })] }) }), l[38] = N;
  else N = l[38];
  return N;
}
function V(O) {
  let o = w(44), { theme: T, welcomeMessage: A } = O;
  if (["light", "light-daltonized", "light-ansi"].includes(T)) {
    let d2;
    if (o[0] !== A) d2 = r(n, { color: "claude", children: [A, " "] }), o[0] = A, o[1] = d2;
    else d2 = o[1];
    let a2;
    if (o[2] === S) a2 = r(n, { dimColor: true, children: ["v", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, " "] }), o[2] = a2;
    else a2 = o[2];
    let c2;
    if (o[3] !== d2) c2 = r(n, { children: [d2, a2] }), o[3] = d2, o[4] = c2;
    else c2 = o[4];
    let t2, m2, b2, g2, C2, u2, y2, _2;
    if (o[5] === S) b2 = e(n, { children: ".........................................................." }), g2 = e(n, { children: "                                                          " }), C2 = e(n, { children: "                                                          " }), u2 = e(n, { children: "                                                          " }), y2 = e(n, { children: "            ░░░░░░                                        " }), _2 = e(n, { children: "    ░░░   ░░░░░░░░░░                                      " }), t2 = e(n, { children: "   ░░░░░░░░░░░░░░░░░░░                                    " }), m2 = e(n, { children: "                                                          " }), o[5] = t2, o[6] = m2, o[7] = b2, o[8] = g2, o[9] = C2, o[10] = u2, o[11] = y2, o[12] = _2;
    else t2 = o[5], m2 = o[6], b2 = o[7], g2 = o[8], C2 = o[9], u2 = o[10], y2 = o[11], _2 = o[12];
    let h2;
    if (o[13] === S) h2 = r(n, { children: [e(n, { dimColor: true, children: "                           ░░░░" }), e(n, { children: "                     ██    " })] }), o[13] = h2;
    else h2 = o[13];
    let R2, k2, f2;
    if (o[14] === S) R2 = r(n, { children: [e(n, { dimColor: true, children: "                         ░░░░░░░░░░" }), e(n, { children: "               ██▒▒██  " })] }), k2 = e(n, { children: "                                            ▒▒      ██   ▒" }), f2 = e(n, { children: "                                          ▒▒░░▒▒      ▒ ▒▒" }), o[14] = R2, o[15] = k2, o[16] = f2;
    else R2 = o[14], k2 = o[15], f2 = o[16];
    let p2;
    if (o[17] === S) p2 = r(n, { children: ["      ", e(n, { color: "clawd_body", children: "▗" }), r(n, { color: "clawd_background", backgroundColor: "clawd_body", children: [" ", "▗", "     ", "▖", " "] }), e(n, { color: "clawd_body", children: "▖" }), "                           ▒▒         ▒▒ "] }), o[17] = p2;
    else p2 = o[17];
    let N2;
    if (o[18] === S) N2 = r(n, { children: ["       ", e(n, { backgroundColor: "clawd_body", children: " ".repeat(9) }), "                           ░          ▒   "] }), o[18] = N2;
    else N2 = o[18];
    let x2;
    if (o[19] === S) x2 = r(n, { children: [".......", e(n, { backgroundColor: "clawd_body", children: " " }), e(n, { children: " " }), e(n, { backgroundColor: "clawd_body", children: " " }), e(n, { children: "   " }), e(n, { backgroundColor: "clawd_body", children: " " }), e(n, { children: " " }), e(n, { backgroundColor: "clawd_body", children: " " }), "..........................░..........▒...."] }), o[19] = x2;
    else x2 = o[19];
    let v2;
    if (o[20] !== c2) v2 = e(s, { width: M, children: r(s, { flexDirection: "column", children: [c2, b2, g2, C2, u2, y2, _2, t2, m2, h2, R2, k2, f2, p2, N2, x2] }) }), o[20] = c2, o[21] = v2;
    else v2 = o[21];
    return v2;
  }
  let d;
  if (o[22] !== A) d = r(n, { color: "claude", children: [A, " "] }), o[22] = A, o[23] = d;
  else d = o[23];
  let a;
  if (o[24] === S) a = r(n, { dimColor: true, children: ["v", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, " "] }), o[24] = a;
  else a = o[24];
  let c;
  if (o[25] !== d) c = r(n, { children: [d, a] }), o[25] = d, o[26] = c;
  else c = o[26];
  let b, g, C, u, y, _;
  if (o[27] === S) b = e(n, { children: ".........................................................." }), g = e(n, { children: "                                                          " }), C = e(n, { children: "     *                                       █████▓▓░     " }), u = e(n, { children: "                                 *         ███▓░     ░░   " }), y = e(n, { children: "            ░░░░░░                        ███▓░           " }), _ = e(n, { children: "    ░░░   ░░░░░░░░░░                      ███▓░           " }), o[27] = b, o[28] = g, o[29] = C, o[30] = u, o[31] = y, o[32] = _;
  else b = o[27], g = o[28], C = o[29], u = o[30], y = o[31], _ = o[32];
  let t, m, h, R, k;
  if (o[33] === S) t = r(n, { children: [e(n, { children: "   ░░░░░░░░░░░░░░░░░░░    " }), e(n, { bold: true, children: "*" }), e(n, { children: "                ██▓░░      ▓   " })] }), m = e(n, { children: "                                             ░▓▓███▓▓░    " }), h = e(n, { dimColor: true, children: " *                                 ░░░░                   " }), R = e(n, { dimColor: true, children: "                                 ░░░░░░░░                 " }), k = e(n, { dimColor: true, children: "                               ░░░░░░░░░░░░░░░░           " }), o[33] = t, o[34] = m, o[35] = h, o[36] = R, o[37] = k;
  else t = o[33], m = o[34], h = o[35], R = o[36], k = o[37];
  let f;
  if (o[38] === S) f = r(n, { children: ["                                                      ", e(n, { dimColor: true, children: "*" }), e(n, { children: "   " })] }), o[38] = f;
  else f = o[38];
  let p;
  if (o[39] === S) p = r(n, { children: ["      ", e(n, { color: "clawd_body", children: "▗" }), r(n, { color: "clawd_background", backgroundColor: "clawd_body", children: [" ", "▗", "     ", "▖", " "] }), e(n, { color: "clawd_body", children: "▖" }), e(n, { children: "                       " }), e(n, { bold: true, children: "*" }), e(n, { children: "                 " })] }), o[39] = p;
  else p = o[39];
  let N;
  if (o[40] === S) N = r(n, { children: ["       ", e(n, { backgroundColor: "clawd_body", children: " ".repeat(9) }), "      *                                   "] }), o[40] = N;
  else N = o[40];
  let x;
  if (o[41] === S) x = r(n, { children: [".......", e(n, { backgroundColor: "clawd_body", children: " " }), e(n, { children: " " }), e(n, { backgroundColor: "clawd_body", children: " " }), e(n, { children: "   " }), e(n, { backgroundColor: "clawd_body", children: " " }), e(n, { children: " " }), e(n, { backgroundColor: "clawd_body", children: " " }), ".........................................."] }), o[41] = x;
  else x = o[41];
  let v;
  if (o[42] !== c) v = e(s, { width: M, children: r(s, { flexDirection: "column", children: [c, b, g, C, u, y, _, t, m, h, R, k, f, p, N, x] }) }), o[42] = c, o[43] = v;
  else v = o[43];
  return v;
}
export {
  Vie
};
