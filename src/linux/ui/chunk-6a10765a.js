// linux/ui/chunk-6a10765a.js — Claude Code 2.1.310（linux）模块 chunk-a3h68jg3.js
import { Qf } from "../telemetry/anthropic-workspace-id.js";
import { U } from "../context/not-admin-owned.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { ekn } from "../git/utf-8.js";
import { Kln } from "../context/team-memory-sync.js";
import { son, OTo, ai } from "../core/conversation-engine.js";
import { ne } from "../workflows/workflow-size-guideline-change.js";
import { cd } from "../git/config-unreadable.js";
import { w } from "./chunk-0ed4c357.js";
import { sl } from "../shared/chunk-9bbd1b38.js";
import { Me } from "../shared/chunk-be0ce119.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { lt } from "../shared/chunk-76877d92.js";
import { dlt } from "../shared/chunk-e9c14dfc.js";
import { Uxt } from "./chunk-6c28faa3.js";
import { hE, we } from "./keybinding-auto-hints.js";
import { V } from "../context/chunk-e2302e3b.js";
import { dr } from "./chunk-783db08b.js";
import { ji } from "./spinner-stall-cleared.js";
import { APe } from "./oauth-console-selected.js";
import { Ho } from "./chunk-aecb5a24.js";
import { iw, IC } from "./chunk-e2c1cf01.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { de, P, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
j();
j();
function M({ onStashAndContinue: T, onCancel: d, cancelQuits: l }) {
  let [f, R] = y(null), m = f !== null ? [...f.tracked, ...f.untracked] : [], [W, E] = y(true), [x, c] = y(false), [L, I] = y(null);
  P(() => {
    (async () => {
      try {
        let { cwd: o } = son(), h = await ekn(o, cd(o, void 0, { userLocale: true }));
        R(h);
      } catch (o) {
        let h = o instanceof Error ? o.message : String(o);
        t(`Error getting changed files: ${h}`, { level: "error" }), I(o instanceof Qf ? o.message : "Failed to get changed files");
      } finally {
        E(false);
      }
    })();
  }, []);
  let v = async () => {
    c(true);
    try {
      if (t("Stashing changes before teleport..."), !await OTo("Teleport auto-stash", son())) {
        I("Failed to stash changes"), c(false);
        return;
      }
      t("Successfully stashed changes");
    } catch (i) {
      let o = i instanceof Error ? i.message : String(i);
      t(`Error stashing changes: ${o}`, { level: "error" }), I(i instanceof Qf ? i.message : "Failed to stash changes"), c(false);
      return;
    }
    try {
      await T();
    } finally {
      c(false);
    }
  };
  if (W) return e(s, { flexDirection: "column", padding: 1, children: r(s, { marginBottom: 1, children: [e(ji, {}), r(n, { children: [" Checking git status", ne.ellipsis] })] }) });
  if (L) return r(s, { flexDirection: "column", padding: 1, children: [r(n, { bold: true, color: "error", children: ["Error: ", L] }), e(s, { marginTop: 1, children: e(n, { dimColor: true, children: e(V, { chord: "escape", action: "cancel", bold: true }) }) })] });
  let a = m.length > 8, p = x && !l;
  return r(we, { title: "Working directory has changes", onCancel: p ? he : d, exitOnCtrlCD: l || p, inputGuide: p ? "Teleport continues when the stash finishes…" : void 0, children: [e(n, { children: "Teleport will switch git branches. The following changes were found:" }), e(s, { flexDirection: "column", paddingLeft: 2, children: m.length > 0 ? a ? r(n, { children: [m.length, " files changed"] }) : m.map((i, o) => e(n, { children: i }, o)) : e(Ho, { children: "No changes detected" }) }), e(n, { children: "Would you like to stash these changes and continue with teleport?" }), x ? r(s, { children: [e(ji, {}), e(n, { children: " Stashing changes..." })] }) : e(dr, { confirmLabel: "Stash changes and continue", cancelLabel: l ? "Exit" : "Cancel", onConfirm: () => void v(), onCancel: d })] }, p ? "stashing" : "asking");
}
function he() {
}
function xe() {
  return ai(0);
}
var X = /* @__PURE__ */ new Set();
function uxn(T) {
  let a = w(32), { onComplete: d, onCancel: l, errorsToIgnore: f, isStandalone: R } = T, m = f === void 0 ? X : f, W = R === void 0 ? false : R, [E, x] = y(null), [c, L] = y(false), I = sl(), { credentials: v } = Me(), p;
  if (a[0] !== v || a[1] !== m || a[2] !== d) p = async () => {
    let i = await Kln(v, m);
    if (i.size === 0) {
      d();
      return;
    }
    if (i.has("needsLogin")) x("needsLogin");
    else if (i.has("needsGitStash")) x("needsGitStash");
  }, a[0] = v, a[1] = m, a[2] = d, a[3] = p;
  else p = a[3];
  let o = p, h, ae;
  if (a[4] !== o) h = () => {
    o();
  }, ae = [o], a[4] = o, a[5] = h, a[6] = ae;
  else h = a[5], ae = a[6];
  P(h, ae);
  let g = l === void 0, u = l ?? xe, le;
  if (a[7] !== o) le = () => {
    L(false), o();
  }, a[7] = o, a[8] = le;
  else le = a[8];
  let G = le, ce;
  if (a[9] === S) ce = () => {
    L(true);
  }, a[9] = ce;
  else ce = a[9];
  let Le = ce, ge;
  if (a[10] !== o) ge = () => o(), a[10] = o, a[11] = ge;
  else ge = a[11];
  let H = ge, { entries: K, exitState: me } = Uxt(l, void 0, l !== void 0 && c);
  const z = W && E === "needsGitStash";
  let ue;
  if (a[12] !== z) ue = { context: "Confirmation", isActive: z }, a[12] = z, a[13] = ue;
  else ue = a[13];
  if (lt("confirm:no", u, ue), !E) {
    return null;
  }
  switch (E) {
    case "needsGitStash": {
      let C;
      if (a[14] !== g || a[15] !== H || a[16] !== u) C = e(M, { onStashAndContinue: H, onCancel: u, cancelQuits: g }), a[14] = g, a[15] = H, a[16] = u, a[17] = C;
      else C = a[17];
      return C;
    }
    case "needsLogin": {
      const C = I ? IC : iw;
      let pe;
      if (a[18] !== G || a[19] !== C) pe = e(APe, { onDone: G, mode: "login", forceLoginMethod: "claudeai", urlOutdent: C }), a[18] = G, a[19] = C, a[20] = pe;
      else pe = a[20];
      let B = pe;
      const Y = c ? G : u;
      const J = me.pending ? `Press ${me.keyName} again to cancel` : void 0;
      let A;
      if (a[21] !== g || a[22] !== c || a[23] !== K || a[24] !== u || a[25] !== B) A = c ? g ? B : e(hE, { claimFocus: true, flexDirection: "column", bindings: K, children: B }) : r(Q, { children: [r(s, { flexDirection: "column", children: [e(n, { dimColor: true, children: "Teleport requires a Claude.ai account." }), e(n, { dimColor: true, children: "Your Claude Pro/Max subscription will be used by Claude Code." })] }), e(dr, { confirmLabel: "Login with Claude account", cancelLabel: g ? "Exit" : "Cancel", onConfirm: Le, onCancel: u })] }), a[21] = g, a[22] = c, a[23] = K, a[24] = u, a[25] = B, a[26] = A;
      else A = a[26];
      let fe;
      if (a[27] !== g || a[28] !== Y || a[29] !== J || a[30] !== A) fe = e(we, { title: "Log in to Claude", onCancel: Y, exitOnCtrlCD: g, inputGuide: J, children: A }), a[27] = g, a[28] = Y, a[29] = J, a[30] = A, a[31] = fe;
      else fe = a[31];
      return fe;
    }
  }
}
function mEi(T, d) {
  return dlt(T, [(l) => e(uxn, { errorsToIgnore: d, onComplete: () => l(), isStandalone: true })], { session: U() });
}
export {
  mEi,
  uxn
};
