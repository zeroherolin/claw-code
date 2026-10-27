// ui/chunk-d4kptfww.js — Claude Code 2.1.310 模块 chunk-d4kptfww.js
import { Xp } from "../telemetry/anthropic-workspace-id.36ys.js";
import { U } from "../context/not-admin-owned.ersa.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { hkn } from "../git/utf-8.vh7e.js";
import { jln } from "../context/team-memory-sync.0s3j.js";
import { bon, aTo, ai } from "../core/conversation-engine.31gx.js";
import { ne } from "../workflows/workflow-size-guideline-change.1rc0.js";
import { cd } from "../git/config-unreadable.hb66.js";
import { w } from "./chunk-zqxc4qtb.js";
import { il } from "../shared/chunk-bezz9j8a.js";
import { Me } from "../shared/chunk-y6x1q9pp.js";
import { s, n } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { lt } from "../shared/chunk-vj9gqe2s.js";
import { mlt } from "../shared/chunk-gz1gj1mt.js";
import { sPt } from "./chunk-2bwm2gye.js";
import { yv, we } from "./keybinding-auto-hints.yb17.js";
import { q } from "../context/chunk-d05584w8.js";
import { cr } from "./chunk-jz19cqtw.js";
import { ji } from "./spinner-stall-cleared.psn4.js";
import { MPe } from "./oauth-console-selected.3d5y.js";
import { Ho } from "./chunk-31c7bzna.js";
import { aw, HA } from "./chunk-5ffz46a0.js";
import { Q, e, r } from "../vendor/react/chunk-f790ajz4.js";
import { de, P, y, j } from "../vendor/react/chunk-s8vmszp2.js";
import { b } from "../vendor/react/chunk-meds60nn.js";
j();
j();
function M({ onStashAndContinue: S, onCancel: d, cancelQuits: l }) {
  let [f, R] = y(null), m = f !== null ? [...f.tracked, ...f.untracked] : [], [H, T] = y(true), [E, c] = y(false), [x, L] = y(null);
  P(() => {
    (async () => {
      try {
        let { cwd: o } = bon(), h = await hkn(o, cd(o, void 0, { userLocale: true }));
        R(h);
      } catch (o) {
        let h = o instanceof Error ? o.message : String(o);
        t(`Error getting changed files: ${h}`, { level: "error" }), L(o instanceof Xp ? o.message : "Failed to get changed files");
      } finally {
        T(false);
      }
    })();
  }, []);
  let I = async () => {
    c(true);
    try {
      if (t("Stashing changes before teleport..."), !await aTo("Teleport auto-stash", bon())) {
        L("Failed to stash changes"), c(false);
        return;
      }
      t("Successfully stashed changes");
    } catch (i) {
      let o = i instanceof Error ? i.message : String(i);
      t(`Error stashing changes: ${o}`, { level: "error" }), L(i instanceof Xp ? i.message : "Failed to stash changes"), c(false);
      return;
    }
    try {
      await S();
    } finally {
      c(false);
    }
  };
  if (H) return e(s, { flexDirection: "column", padding: 1, children: r(s, { marginBottom: 1, children: [e(ji, {}), r(n, { children: [" Checking git status", ne.ellipsis] })] }) });
  if (x) return r(s, { flexDirection: "column", padding: 1, children: [r(n, { bold: true, color: "error", children: ["Error: ", x] }), e(s, { marginTop: 1, children: e(n, { dimColor: true, children: e(q, { chord: "escape", action: "cancel", bold: true }) }) })] });
  let a = m.length > 8, p = E && !l;
  return r(we, { title: "Working directory has changes", onCancel: p ? he : d, exitOnCtrlCD: l || p, inputGuide: p ? "Teleport continues when the stash finishes…" : void 0, children: [e(n, { children: "Teleport will switch git branches. The following changes were found:" }), e(s, { flexDirection: "column", paddingLeft: 2, children: m.length > 0 ? a ? r(n, { children: [m.length, " files changed"] }) : m.map((i, o) => e(n, { children: i }, o)) : e(Ho, { children: "No changes detected" }) }), e(n, { children: "Would you like to stash these changes and continue with teleport?" }), E ? r(s, { children: [e(ji, {}), e(n, { children: " Stashing changes..." })] }) : e(cr, { confirmLabel: "Stash changes and continue", cancelLabel: l ? "Exit" : "Cancel", onConfirm: () => void I(), onCancel: d })] }, p ? "stashing" : "asking");
}
function he() {
}
function xe() {
  return ai(0);
}
var X = /* @__PURE__ */ new Set();
function xxn(S) {
  let a = w(32), { onComplete: d, onCancel: l, errorsToIgnore: f, isStandalone: R } = S, m = f === void 0 ? X : f, H = R === void 0 ? false : R, [T, E] = y(null), [c, x] = y(false), L = il(), { credentials: I } = Me(), p;
  if (a[0] !== I || a[1] !== m || a[2] !== d) p = async () => {
    let i = await jln(I, m);
    if (i.size === 0) {
      d();
      return;
    }
    if (i.has("needsLogin")) E("needsLogin");
    else if (i.has("needsGitStash")) E("needsGitStash");
  }, a[0] = I, a[1] = m, a[2] = d, a[3] = p;
  else p = a[3];
  let o = p, h, ae;
  if (a[4] !== o) h = () => {
    o();
  }, ae = [o], a[4] = o, a[5] = h, a[6] = ae;
  else h = a[5], ae = a[6];
  P(h, ae);
  let g = l === void 0, u = l ?? xe, le;
  if (a[7] !== o) le = () => {
    x(false), o();
  }, a[7] = o, a[8] = le;
  else le = a[8];
  let G = le, ce;
  if (a[9] === b) ce = () => {
    x(true);
  }, a[9] = ce;
  else ce = a[9];
  let Le = ce, ge;
  if (a[10] !== o) ge = () => o(), a[10] = o, a[11] = ge;
  else ge = a[11];
  let K = ge, { entries: z, exitState: me } = sPt(l, void 0, l !== void 0 && c);
  const Y = H && T === "needsGitStash";
  let ue;
  if (a[12] !== Y) ue = { context: "Confirmation", isActive: Y }, a[12] = Y, a[13] = ue;
  else ue = a[13];
  if (lt("confirm:no", u, ue), !T) {
    return null;
  }
  switch (T) {
    case "needsGitStash": {
      let C;
      if (a[14] !== g || a[15] !== K || a[16] !== u) C = e(M, { onStashAndContinue: K, onCancel: u, cancelQuits: g }), a[14] = g, a[15] = K, a[16] = u, a[17] = C;
      else C = a[17];
      return C;
    }
    case "needsLogin": {
      const C = L ? HA : aw;
      let pe;
      if (a[18] !== G || a[19] !== C) pe = e(MPe, { onDone: G, mode: "login", forceLoginMethod: "claudeai", urlOutdent: C }), a[18] = G, a[19] = C, a[20] = pe;
      else pe = a[20];
      let B = pe;
      const J = c ? G : u;
      const V = me.pending ? `Press ${me.keyName} again to cancel` : void 0;
      let A;
      if (a[21] !== g || a[22] !== c || a[23] !== z || a[24] !== u || a[25] !== B) A = c ? g ? B : e(yv, { claimFocus: true, flexDirection: "column", bindings: z, children: B }) : r(Q, { children: [r(s, { flexDirection: "column", children: [e(n, { dimColor: true, children: "Teleport requires a Claude.ai account." }), e(n, { dimColor: true, children: "Your Claude Pro/Max subscription will be used by Claude Code." })] }), e(cr, { confirmLabel: "Login with Claude account", cancelLabel: g ? "Exit" : "Cancel", onConfirm: Le, onCancel: u })] }), a[21] = g, a[22] = c, a[23] = z, a[24] = u, a[25] = B, a[26] = A;
      else A = a[26];
      let fe;
      if (a[27] !== g || a[28] !== J || a[29] !== V || a[30] !== A) fe = e(we, { title: "Log in to Claude", onCancel: J, exitOnCtrlCD: g, inputGuide: V, children: A }), a[27] = g, a[28] = J, a[29] = V, a[30] = A, a[31] = fe;
      else fe = a[31];
      return fe;
    }
  }
}
function Jvi(S, d) {
  return mlt(S, [(l) => e(xxn, { errorsToIgnore: d, onComplete: () => l(), isStandalone: true })], { session: U() });
}
export {
  Jvi,
  xxn
};
