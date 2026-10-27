// ui/session-search-toggled.htwx.js — Claude Code 2.1.310 模块 chunk-htwx3eg4.js
import { v } from "../telemetry/anthropic-workspace-id.36ys.js";
import { Yn, bg } from "../fs/node-modules.gp4v.js";
import { M5 } from "../shared/chunk-9sbknd2z.js";
import { ke } from "../context/not-admin-owned.ersa.js";
import { vX } from "../artifacts/cowritten-artifact-html.thm2.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { he } from "../vendor/chalk/xterm-ghostty.qrwz.js";
import { w } from "./chunk-zqxc4qtb.js";
import { Me, eE } from "../shared/chunk-y6x1q9pp.js";
import { $u } from "../shell/invalid-type.qnva.js";
import { cs } from "../shared/chunk-bezz9j8a.js";
import { pn, s, n } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { lt } from "../shared/chunk-vj9gqe2s.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { vu } from "../git/utf-8.vh7e.js";
import { le } from "../shared/chunk-abagh0tt.js";
import { n3t } from "../context/utf-8.yzy3.js";
import { ft, h_, wkn } from "../fs/async-hooks.2k4e.js";
import { JSe } from "../plugins/skills-dir.cemw.js";
import { z0e } from "../permissions/light-daltonized.tkrm.js";
import { Pc } from "../shared/chunk-h1g05r4t.js";
import { ds } from "./chunk-2bwm2gye.js";
import { Ce } from "../shared/chunk-9vjqn6fm.js";
import { P3n, FJe } from "../context/team-memory-sync.0s3j.js";
import { Z_, ow } from "../computer-use/native-auto-updater-skipped-unverified-release.435s.js";
import { wC } from "../shared/chunk-y284hsxm.js";
import { gMe, _ne, gGn, hVn, m3, Dm, Zle, XMe } from "../core/conversation-engine.31gx.js";
import { q } from "../context/chunk-d05584w8.js";
import { EC } from "./keybinding-auto-hints.yb17.js";
import { ve } from "./chunk-kjz7kbmb.js";
import { BS } from "../tools/worktree-entered-existing.1dq1.js";
import { Cr } from "../commands/aria-preserve-whitespace.e4g5.js";
import { Tfe, Afe } from "./normalizer-retained-output-check-failed.an36.js";
import { Rfe } from "./tool-message-rendering.cz42.js";
import { Je } from "./aria-hidden.r9bm.js";
import { Ho } from "./chunk-31c7bzna.js";
import { qr } from "./chunk-x922q9mr.js";
import { aw, Ds } from "./chunk-5ffz46a0.js";
import { pt } from "../shared/chunk-2ktb785b.js";
import { Q, e, r } from "../vendor/react/chunk-f790ajz4.js";
import { de, R8, P, te, A, y, j } from "../vendor/react/chunk-s8vmszp2.js";
import { wo } from "../shared/chunk-rnxkk435.js";
import { b } from "../vendor/react/chunk-meds60nn.js";
import { basename as Sn, sep as Cn } from "path";
j();
j();
function St(o) {
  let p = w(36), { log: d, onExit: c, onSelect: l } = o, [u, m] = y(null), { storageV5: S } = Me(), _, R;
  if (p[0] !== d || p[1] !== S) _ = () => {
    if (m(null), Zle(d)) XMe(d, { storageV5: S }).then(m);
  }, R = [d, S], p[0] = d, p[1] = S, p[2] = _, p[3] = R;
  else _ = p[2], R = p[3];
  P(_, R);
  let E = Zle(d) && u === null, g = u ?? d, X;
  if (p[4] !== g.messages) X = gMe(_ne(gGn(g.messages)), { site: "preview" }), p[4] = g.messages, p[5] = X;
  else X = p[5];
  let M = X, Ve;
  if (p[6] !== g) Ve = Dm(g) || "", p[6] = g, p[7] = Ve;
  else Ve = p[7];
  let Fe = Ve, Se;
  if (p[8] === b) Se = BS(), p[8] = Se;
  else Se = p[8];
  let Ee = Se, J;
  if (p[9] === b) J = { context: "Confirmation" }, p[9] = J;
  else J = p[9];
  lt("confirm:no", c, J);
  let k;
  if (p[10] !== u || p[11] !== d || p[12] !== l) k = () => {
    l(u ?? d);
  }, p[10] = u, p[11] = d, p[12] = l, p[13] = k;
  else k = p[13];
  let T = k, qe;
  if (p[14] === b) qe = { context: "Confirmation" }, p[14] = qe;
  else qe = p[14];
  if (lt("confirm:yes", T, qe), E) {
    let ee2;
    if (p[15] === b) ee2 = e(qr, { message: "Loading session…" }), p[15] = ee2;
    else ee2 = p[15];
    let G2;
    if (p[16] === b) G2 = r(s, { flexDirection: "column", padding: 1, children: [ee2, e(n, { dimColor: true, children: e(ve, { children: e(pt, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" }) }) })] }), p[16] = G2;
    else G2 = p[16];
    return G2;
  }
  let ee;
  if (p[17] === b) ee = e(Tfe, { latchAnnouncementSlot: false }), p[17] = ee;
  else ee = p[17];
  let G;
  if (p[18] !== Fe || p[19] !== M) G = { kind: "static", messages: M, conversationId: Fe }, p[18] = Fe, p[19] = M, p[20] = G;
  else G = p[20];
  let Y;
  if (p[21] === b) Y = [], p[21] = Y;
  else Y = p[21];
  let Te;
  if (p[22] !== G) Te = e(Afe, { source: G, tools: Ee, commands: Y, screen: "transcript", history: "all" }), p[22] = G, p[23] = Te;
  else Te = p[23];
  let ne;
  if (p[24] !== g.modified) ne = h_(g.modified), p[24] = g.modified, p[25] = ne;
  else ne = p[25];
  const oe = g.gitBranch ? ` · ${g.gitBranch}` : "";
  let re;
  if (p[26] !== g.messageCount || p[27] !== ne || p[28] !== oe) re = r(n, { children: [ne, " ·", " ", g.messageCount, " messages", oe] }), p[26] = g.messageCount, p[27] = ne, p[28] = oe, p[29] = re;
  else re = p[29];
  let W;
  if (p[30] === b) W = e(n, { dimColor: true, children: r(ve, { children: [e(q, { chord: "enter", action: "resume" }), e(pt, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" })] }) }), p[30] = W;
  else W = p[30];
  let B;
  if (p[31] !== re) B = r(s, { flexShrink: 0, flexDirection: "column", borderTopDimColor: true, borderBottom: false, borderLeft: false, borderRight: false, borderStyle: "single", paddingLeft: 2, children: [re, W] }), p[31] = re, p[32] = B;
  else B = p[32];
  let K;
  if (p[33] !== Te || p[34] !== B) K = r(s, { flexDirection: "column", children: [ee, Te, B] }), p[33] = Te, p[34] = B, p[35] = K;
  else K = p[35];
  return K;
}
j();
function Eo(Ot) {
  return Ot ? "▼ " : "▶ ";
}
function To(N) {
  return "  ▸ ";
}
function Dt(o) {
  let T = w(49), { nodes: d, onSelect: c, onCancel: l, onFocus: u, focusNodeId: m, visibleOptionCount: S, layout: p, isDisabled: _, hidePromptWhileDisabled: R, hideIndexes: E, isNodeExpanded: g, onExpand: X, onCollapse: M, getParentPrefix: Ve, getChildPrefix: Fe, onUpFromFirstItem: Se } = o, Ee = p === void 0 ? "expanded" : p, J = _ === void 0 ? false : _, k = E === void 0 ? false : E, qe;
  if (T[0] === b) qe = /* @__PURE__ */ new Set(), T[0] = qe;
  else qe = T[0];
  let [ee, G] = y(qe), Y = A(false), Te = A(null), ne;
  if (T[1] !== ee || T[2] !== g) ne = (oe) => {
    if (g) {
      return g(oe);
    }
    return ee.has(oe);
  }, T[1] = ee, T[2] = g, T[3] = ne;
  else ne = T[3];
  let re = ne, W;
  if (T[4] !== re || T[5] !== d) {
    let ze = function(B, K, Pt) {
      let ae = !!B.children && B.children.length > 0;
      let ut = re(B.id);
      if (W.push({ node: B, depth: K, isExpanded: ut, hasChildren: ae, parentId: Pt }), ae && ut && B.children) {
        for (const Le of B.children) ze(Le, K + 1, B.id);
      }
    };
    W = [];
    for (const _t of d) ze(_t, 0);
    T[4] = re, T[5] = d, T[6] = W;
  } else W = T[6];
  let V = W, Xe = Eo, Rt = To, Oe = Ve ?? Xe, Ye = Fe ?? Rt, Ze;
  if (T[7] !== Ye || T[8] !== Oe) Ze = (ce) => {
    let et = "";
    if (ce.hasChildren) et = Oe(ce.isExpanded);
    else if (ce.depth > 0) et = Ye(ce.depth);
    return et + ce.node.label;
  }, T[7] = Ye, T[8] = Oe, T[9] = Ze;
  else Ze = T[9];
  let H = Ze, Be;
  if (T[10] !== H || T[11] !== V) Be = V.map((Z) => ({ label: H(Z), description: Z.node.description, dimDescription: Z.node.dimDescription ?? true, value: Z.node.id })), T[10] = H, T[11] = V, T[12] = Be;
  else Be = T[12];
  let tt = Be, mt;
  if (T[13] !== V) {
    let nt = /* @__PURE__ */ new Map();
    mt = (V.forEach((ot) => nt.set(ot.node.id, ot.node)), nt);
    T[13] = V, T[14] = mt;
  } else mt = T[14];
  let U = mt, ht;
  if (T[15] !== V) ht = (Ie) => V.find((Ft) => Ft.node.id === Ie), T[15] = V, T[16] = ht;
  else ht = T[16];
  let x = ht, I;
  if (T[17] !== x || T[18] !== M || T[19] !== X) I = (ue, gt) => {
    let fe = x(ue);
    if (!fe || !fe.hasChildren) {
      return;
    }
    if (gt) {
      if (X) X(ue);
      else G((rt) => new Set(rt).add(ue));
    } else if (M) M(ue);
    else G((kt) => {
      let xt = new Set(kt);
      return xt.delete(ue), xt;
    });
  }, T[17] = x, T[18] = M, T[19] = X, T[20] = I;
  else I = T[20];
  let we = I, De;
  if (T[21] !== x || T[22] !== m || T[23] !== J || T[24] !== U || T[25] !== u || T[26] !== we) De = (z) => {
    if (!m || J) {
      return;
    }
    let F = x(m);
    if (!F) {
      return;
    }
    if (z.key === "right" && F.hasChildren) z.preventDefault(), we(m, true);
    else if (z.key === "left") {
      if (F.hasChildren && F.isExpanded) z.preventDefault(), we(m, false);
      else if (F.parentId !== void 0) {
        if (z.preventDefault(), Y.current = true, we(F.parentId, false), u) {
          let st = U.get(F.parentId);
          if (st) u(st);
        }
      }
    }
  }, T[21] = x, T[22] = m, T[23] = J, T[24] = U, T[25] = u, T[26] = we, T[27] = De;
  else De = T[27];
  let se = De, We;
  if (T[28] !== U || T[29] !== c) We = (bt) => {
    let it = U.get(bt);
    if (!it) {
      return;
    }
    c(it);
  }, T[28] = U, T[29] = c, T[30] = We;
  else We = T[30];
  let $e = We, pe;
  if (T[31] !== U || T[32] !== u) pe = (Ae) => {
    if (Y.current) {
      Y.current = false;
      return;
    }
    if (Te.current === Ae) {
      return;
    }
    if (Te.current = Ae, u) {
      let D = U.get(Ae);
      if (D) u(D);
    }
  }, T[31] = U, T[32] = u, T[33] = pe;
  else pe = T[33];
  let Ne = pe, me;
  if (T[34] !== m || T[35] !== $e || T[36] !== Ne || T[37] !== k || T[38] !== R || T[39] !== J || T[40] !== Ee || T[41] !== l || T[42] !== Se || T[43] !== tt || T[44] !== S) me = e(Je, { options: tt, onChange: $e, onFocus: Ne, onCancel: l, defaultFocusValue: m, visibleOptionCount: S, layout: Ee, isDisabled: J, hidePromptWhileDisabled: R, hideIndexes: k, onUpFromFirstItem: Se }), T[34] = m, T[35] = $e, T[36] = Ne, T[37] = k, T[38] = R, T[39] = J, T[40] = Ee, T[41] = l, T[42] = Se, T[43] = tt, T[44] = S, T[45] = me;
  else me = T[45];
  let Pe;
  if (T[46] !== se || T[47] !== me) Pe = e(s, { tabIndex: 0, autoFocus: true, onKeyDown: se, children: me }), T[46] = se, T[47] = me, T[48] = Pe;
  else Pe = T[48];
  return Pe;
}
function Lo(o, d) {
  let c = o.replace(/\s+/g, " ").trim();
  return ft(c, d);
}
var Io = 2, Do = 4, No = 2e3, En = 1e3, Tn = 5e4, vo = 0.3;
var Po = { format: { modCase: "title", charCase: "upper" } }, _o = 6e4, Ro = 50, Fo = 5;
function Ln({ before: o, match: d, after: c }, l) {
  return he.dim(o) + l(d) + he.dim(c);
}
function ko(o) {
  return o.replace(new RegExp(P3n.source + '[^,\\s"]*', "g"), (d) => {
    let c = FJe(d);
    return c ? `PR #${c.prNumber} ${c.prRepository}` : d;
  });
}
function Oo(o, d, c) {
  let l = o.toLowerCase().indexOf(d.toLowerCase());
  if (l === -1) return null;
  let u = l + d.length, m = Math.max(0, l - c), S = Math.min(o.length, u + c), p = o.slice(m, l), _ = o.slice(l, u), R = o.slice(u, S);
  return { before: (m > 0 ? "…" : "") + p.replace(/\s+/g, " ").trimStart(), match: _.trim(), after: R.replace(/\s+/g, " ").trimEnd() + (S < o.length ? "…" : "") };
}
function Nt(o, d, c) {
  let { isGroupHeader: l = false, isChild: u = false, forkCount: m = 0 } = c || {}, S = l && m > 0 ? Io : u ? Do : 0, p = l && m > 0 ? ` (+${m} other ${m === 1 ? "session" : "sessions"})` : "", _ = o.isSidechain ? " (sidechain)" : "", R = o.artifactCount !== void 0 && o.artifactCount > 0 ? `  ${$u} ${o.artifactCount}` : "", E = d - S - _.length - p.length - le(R);
  return `${Lo(vX(o), E)}${_}${p}${R}`;
}
function vt(o, d) {
  let { isChild: c = false, showProjectPath: l = false } = d || {}, u = c ? "    " : "", m = wkn(o), S = l && o.projectPath ? ` · ${o.projectPath}` : "";
  return u + m + S;
}
function Ixn({ logs: o, maxHeight: d = 1 / 0, forceWidth: c, onCancel: l, onSelect: u, onLogsChanged: m, onLoadMore: S, initialSearchQuery: p, isLoading: _ = false, reloadGeneration: R = 0, showAllProjects: E = false, onToggleAllProjects: g, currentSessionId: X, footerNote: M }) {
  let { storageV5: Ve } = Me(), Fe = cs(Ce()), Se = c === void 0 ? Fe.columns : c, Ee = ds(l), J = false, k = EC(false), T = Po, qe = "show all projects", ee = 2, G = Pc(), Y = pn(), Te = false, ne = eE(), oe = te(() => (t) => z0e(t, ne.warning), [ne.warning]), re = te(() => M === void 0 ? 0 : le(M.join(" · ")), [M]), [W, B] = y(null), [K, Pt] = y(true), [ae, ut] = y(false), [Le, ze] = y(false), [_t, V] = y(null), [Xe, Rt] = y(null), [Oe, Ye] = y([]), [Ze, ce] = y(false), et = wC(), [H] = y(() => et.originalCwd), [Be, Z] = y(""), [tt, mt] = y(0), [nt, ot] = y(/* @__PURE__ */ new Set()), [U, ht] = y(null), [Ie, Ft] = y(1), [x, I] = y(p ? "search" : "list"), [ue, gt] = y(null), { query: fe, setQuery: rt, cursorOffset: kt, handleKeyDown: xt, handlePaste: we } = Z_({ isActive: x === "search", onExit: () => {
    I("list"), a("tengu_session_search_toggled", { enabled: false });
  }, onExitUp: () => {
    I("list"), a("tengu_session_search_toggled", { enabled: false });
  }, passthroughCtrlKeys: o.length === 0 ? ["n", "a"] : ["n"], initialQuery: p || "" }), De = ko(fe), z = R8(De), [F, st] = y("");
  P(() => {
    if (!z) {
      st("");
      return;
    }
    return Y.setTimeout(() => st(z), 300);
  }, [z, Y]);
  let [se, We] = y(null), bt = false;
  P(() => {
    vu().then((i) => B(i));
    let t = Date.now();
    n3t(H).then(async (i) => (i.length, i)).then((i) => {
      a("tengu_worktree_detection", { duration_ms: Date.now() - t, worktree_count: i.length, success: true }), ze(i.length > 1), Ye(i), V(i[0] ?? null);
      let h = i.filter((f) => H === f || H.startsWith(f + Cn));
      h.sort((f, L) => L.length - f.length), Rt(h[0] ?? null), ce(true);
    }).catch(() => {
      a("tengu_worktree_detection", { duration_ms: Date.now() - t, worktree_count: 0, success: false }), ce(true);
    });
  }, [H]);
  let it = te(() => new Map(o.map((t) => [t, $o(t)])), [o]), $e = te(() => null, [o, it, false]), pe = te(() => {
    let t = o.filter((i) => {
      let h = Dm(i);
      if (X && h === X) return true;
      if (i.customTitle ?? i.aiTitle) return true;
      if (hVn(i.messages)) return true;
      if (i.firstPrompt || i.customTitle || i.aiTitle) return true;
      return false;
    });
    if (!K && W) t = t.filter((i) => i.gitBranch === W);
    if (Le && !ae && !E) {
      let i = Xe ?? H;
      t = t.filter((h) => {
        if (h.isAlias) return true;
        let f = h.projectPath;
        if (f === void 0) return false;
        let L = null;
        for (let C of Oe) if (f === C || f.startsWith(C + Cn)) {
          if (L === null || C.length > L.length) L = C;
        }
        if (L === null) return f === i;
        return L === i;
      });
    }
    return t;
  }, [o, X, K, W, Le, ae, E, H, Xe, Oe]), Ae = te(() => {
    if (!De) return pe;
    let t = De.toLowerCase();
    return pe.filter((i) => {
      let h = vX(i).toLowerCase(), f = (i.gitBranch || "").toLowerCase(), L = (i.tag || "").toLowerCase(), C = i.prNumber ? `pr #${i.prNumber} ${i.prRepository || ""}`.toLowerCase() : "";
      return h.includes(t) || f.includes(t) || L.includes(t) || C.includes(t);
    });
  }, [pe, De]);
  P(() => {
    We(null);
    return;
  }, [F, z, $e, false, Y]);
  let { filteredLogs: D, snippets: Ne } = te(() => {
    let t = /* @__PURE__ */ new Map(), i = Ae;
    if (se && F && se.query === F) {
      for (let C of se.results) if (C.searchableText) {
        let ge = Oo(C.searchableText, F, Ro);
        if (ge) t.set(C.log, ge);
      }
      let h = new Set(i.map((C) => C.messages[0]?.uuid)), f = new Set(pe), L = se.results.map((C) => C.log).filter((C) => !h.has(C.messages[0]?.uuid) && f.has(C));
      i = [...i, ...L];
    }
    return { filteredLogs: i, snippets: t };
  }, [Ae, se, F, pe]), me = Se - 2 * aw, Pe = Math.max(30, me - 4), Ot = te(() => {
    let t = Ao(D);
    return Array.from(t.entries()).map(([i, h]) => {
      let f = h[0], L = D.indexOf(f), C = Ne.get(f), ge = C ? Ln(C, oe) : null;
      if (h.length === 1) {
        let ie = vt(f, { showProjectPath: E });
        return { id: `log:${i}:0`, value: { log: f, indexInFiltered: L }, label: Nt(f, Pe), description: ge ? `${ie}
  ${ge}` : ie, dimDescription: true };
      }
      let Wn = h.length - 1, $n = h.slice(1).map((ie, An) => {
        let Hn = D.indexOf(ie), Ut = Ne.get(ie), jt = Ut ? Ln(Ut, oe) : null, Gt = vt(ie, { isChild: true, showProjectPath: E });
        return { id: `log:${i}:${An + 1}`, value: { log: ie, indexInFiltered: Hn }, label: Nt(ie, Pe, { isChild: true }), description: jt ? `${Gt}
      ${jt}` : Gt, dimDescription: true };
      }), Ht = vt(f, { showProjectPath: E });
      return { id: `group:${i}`, value: { log: f, indexInFiltered: L }, label: Nt(f, Pe, { isGroupHeader: true, forkCount: Wn }), description: ge ? `${Ht}
  ${ge}` : Ht, dimDescription: true, children: $n };
    });
  }, [D, Pe, E, Ne, oe]), N = U?.value.log ?? null, Dn = () => {
    if (!N) return "";
    let t = Dm(N);
    if (!t) return "";
    let i = D.filter((C) => Dm(C) === t);
    if (!(i.length > 1)) return "";
    let f = nt.has(t);
    if (i.indexOf(N) > 0 || f) return e(q, { chord: "left", action: "collapse", ...k });
    return e(q, { chord: "right", action: "expand", ...k });
  }, Nn = async () => {
    let t = N ? Dm(N) : void 0;
    if (!N || !t) {
      I("list"), Z("");
      return;
    }
    if (Be.trim()) {
      if (await m3(t, Be.trim(), N.fullPath, "user", Ve), m) m();
    }
    I("list"), Z("");
  }, vn = () => {
    I("list"), rt(""), a("tengu_session_search_toggled", { enabled: false });
  }, Pn = () => {
    I("search"), a("tengu_session_search_toggled", { enabled: true });
  };
  P(() => {
    if (R === 0) return;
    We(null);
  }, [R]);
  let _n = (t) => {
    ht(t);
    let i = D.findIndex((h) => Dm(h) === Dm(t.value.log));
    if (i >= 0) Ft(i + 1);
  };
  lt("confirm:no", () => {
    I("list"), Z("");
  }, { context: "Settings", isActive: x === "rename" });
  function Rn(t) {
    if (x === "preview") return;
    if (x === "rename") ;
    else if (x === "search") {
      if (xt(t), t.ctrl && t.key === "n") t.preventDefault(), vn();
      else if (t.ctrl && t.key === "a" && g && o.length === 0) t.preventDefault(), g(), a("tengu_session_all_projects_toggled", { enabled: E });
    } else {
      if (D.length === 0 && (t.key === "up" || t.key === "down" || t.key === "return")) {
        t.preventDefault(), I("search");
        return;
      }
      let i = !t.ctrl && !t.meta, h = t.key.toLowerCase();
      if (t.ctrl && t.key === "a" && g) t.preventDefault(), g(), a("tengu_session_all_projects_toggled", { enabled: E });
      else if (t.ctrl && t.key === "b") {
        t.preventDefault();
        let f = !K;
        Pt(f), a("tengu_session_branch_filter_toggled", { enabled: !f });
      } else if (t.ctrl && t.key === "w" && Le) {
        t.preventDefault();
        let f = !ae;
        ut(f), a("tengu_session_worktree_filter_toggled", { enabled: !f });
      } else if (h === "/" && i) t.preventDefault(), I("search"), a("tengu_session_search_toggled", { enabled: true });
      else if (t.ctrl && t.key === "r" && N) t.preventDefault(), I("rename"), Z(""), a("tengu_session_rename_started", {});
      else if ((t.key === " " && i || t.ctrl && t.key === "v") && N) t.preventDefault(), gt(N), I("preview"), a("tengu_session_preview_opened", { messageCount: N.messageCount });
      else if (!t.defaultPrevented && i && t.key.length === 1 && t.key !== " ") t.preventDefault(), I("search"), rt(t.key), a("tengu_session_search_toggled", { enabled: true });
    }
  }
  function Fn(t) {
    if (x === "search") {
      we(t);
      return;
    }
    let i = (t.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
    if (x === "preview" || x === "rename" || !N || !i) return;
    t.preventDefault(), I("search"), rt(i), a("tengu_session_search_toggled", { enabled: true });
  }
  let _e = [], Mt = !!g && !E && Ze, Bt = _t ?? H;
  if (Mt) _e.push(Sn(Bt));
  if (!K && W) _e.push(W);
  if (Le && !ae && !E) {
    let t = Xe ?? H;
    if (!(Mt && Bt === t)) _e.push(Sn(t));
  }
  let kn = !!g && !E && !Ze, Wt = (_e.length > 0 || kn) && x !== "search", $t = 3, On = 5 + $t + (Wt ? 1 : 0), At = M !== void 0 && x !== "rename" && re <= me - 2 && d - (5 + $t + 1) - 3 >= 3, Mn = 2 + (At ? 1 : 0), He = Math.max(1, Math.floor((d - On - Mn) / 3)), Bn = o.length, at = A({ focusedIndex: -1, visible: -1, empty: 0 });
  if (P(() => {
    if (!S) return;
    let t = at.current;
    if (t.focusedIndex !== Ie || t.visible !== D.length) at.current = { focusedIndex: Ie, visible: D.length, empty: 0 };
    let i = He * 2;
    if (Ie + i >= D.length && at.current.empty < Fo) at.current.empty++, S(He * 3);
  }, [Ie, He, D.length, Bn, S]), o.length === 0 && !g) return null;
  if (x === "preview" && ue) return e(St, { log: ue, onExit: () => {
    I("list"), gt(null);
  }, onSelect: u });
  return e(s, { flexDirection: "column", maxHeight: d - 1, onKeyDown: Rn, onPaste: Fn, children: r(wn, { isRedesign: false, titleDetail: r(Q, { children: [x === "list" && D.length > He && r(n, { dimColor: true, children: [" ", "(", Ie, " of ", D.length, ")"] }), _ && e(n, { dimColor: true, children: " · Refreshing…" })] }), children: [e(ow, { query: fe, isFocused: x === "search", isTerminalFocused: G, cursorOffset: kt, isSearchLineUnpadded: true }), Wt && (_e.length > 0 ? e(s, { flexShrink: 0, paddingLeft: 2, children: e(n, { dimColor: true, children: e(ve, { children: _e }) }) }) : e(s, { flexShrink: 0, height: 1 })), e(s, { flexShrink: 0, children: e(n, { children: " " }) }), (x === "search" || x === "list") && Boolean(fe.trim()) && D.length === 0 && !bt && !_ && e(s, { paddingLeft: 1, marginBottom: 1, flexShrink: 0, children: r(Ho, { children: ['No sessions match "', fe, '".'] }) }), o.length === 0 && x === "list" && !_ && !fe.trim() && e(s, { paddingLeft: 1, marginBottom: 1, flexShrink: 0, children: e(Ho, { hint: E ? void 0 : e(q, { chord: "ctrl+a", action: "show all projects", ...T }), children: E ? "No conversations found." : "No conversations found in this project." }) }), x === "rename" && N ? r(s, { paddingLeft: 2, flexDirection: "column", children: [e(n, { bold: true, children: "Rename session:" }), e(s, { paddingTop: 1, children: e(Cr, { value: Be, onChange: Z, onSubmit: Nn, placeholder: vX(N, "Enter new session name"), columns: me - 2, cursorOffset: tt, onChangeCursorOffset: mt, showCursor: true, focus: true }) })] }) : e(Dt, { nodes: Ot, onSelect: (t) => {
    u(t.value.log);
  }, onFocus: _n, onCancel: l, focusNodeId: U?.id, visibleOptionCount: He, layout: "expanded", isDisabled: x === "search", hidePromptWhileDisabled: true, hideIndexes: false, isNodeExpanded: (t) => {
    if (x === "search" || !K) return true;
    let i = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
    return i ? nt.has(i) : false;
  }, onExpand: (t) => {
    let i = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
    if (i) ot((h) => new Set(h).add(i)), a("tengu_session_group_expanded", {});
  }, onCollapse: (t) => {
    let i = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
    if (i) ot((h) => {
      let f = new Set(h);
      return f.delete(i), f;
    });
  }, onUpFromFirstItem: Pn }), At && e(s, { paddingLeft: 2, flexShrink: 0, children: e(n, { dimColor: true, wrap: "truncate-end", children: e(ve, { children: M }) }) }), e(s, { paddingLeft: 2, children: Ee.pending ? r(n, { dimColor: true, italic: false, children: ["Press ", Ee.keyName, " again to exit"] }) : x === "rename" ? e(n, { dimColor: true, italic: false, children: r(ve, { children: [e(q, { chord: "enter", action: "save", ...k }), e(pt, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel", ...k })] }) }) : x === "search" ? e(n, { dimColor: true, italic: false, children: r(ve, { children: [e(n, { children: "Type to Search" }), o.length === 0 && g && e(q, { chord: "ctrl+a", action: E ? "only show current repo" : "show all projects", ...T }), e(q, { chord: "enter", action: "select", ...k }), e(pt, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "clear", ...k })] }) }) : e(n, { dimColor: true, italic: false, children: r(ve, { children: [g && e(q, { chord: "ctrl+a", action: E ? "only show current repo" : "show all projects", ...T }), W && e(q, { chord: "ctrl+b", action: K ? "only show current branch" : "show all branches", ...T }), Le && e(q, { chord: "ctrl+w", action: ae ? "only show current worktree" : "show all worktrees", ...T }), N && e(q, { chord: "space", action: "preview", ...k }), N && e(q, { chord: "ctrl+r", action: "rename", ...T }), e(n, { children: "Type to search" }), e(pt, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel", format: k.format }), Dn()] }) }) })] }) });
}
function wn(o) {
  let l = w(5), { titleDetail: d, children: c } = o, u;
  if (l[0] !== d) u = e(s, { flexShrink: 0, children: r(n, { bold: true, color: "suggestion", children: ["Resume session", d] }) }), l[0] = d, l[1] = u;
  else u = l[1];
  let m;
  if (l[2] !== c || l[3] !== u) m = r(Ds, { color: "suggestion", children: [u, c] }), l[2] = c, l[3] = u, l[4] = m;
  else m = l[4];
  return m;
}
function Wo(o) {
  if (o.type !== "user" && o.type !== "assistant") return "";
  let d = "message" in o ? o.message?.content : void 0;
  if (!d) return "";
  let c = o.type === "user" && o.isCompactSummary ? o.modelOnlyText : void 0;
  if (typeof d === "string") return Rfe(d, c);
  if (Array.isArray(d)) return d.map((l) => {
    if (typeof l === "string") return l;
    if ("text" in l && typeof l.text === "string") return Rfe(l.text, c);
    return "";
  }).filter(Boolean).join(" ");
  return "";
}
function $o(o) {
  let c = (o.messages.length <= No ? o.messages : [...o.messages.slice(0, En), ...o.messages.slice(-En)]).map(Wo).filter(Boolean).join(" "), u = `${[o.customTitle, o.aiTitle, o.summary, o.firstPrompt, o.gitBranch, o.tag, o.prNumber ? `PR #${o.prNumber}` : void 0, o.prRepository].filter(Boolean).join(" ")} ${c}`.trim();
  return u.length > Tn ? u.slice(0, Tn) : u;
}
function Ao(o) {
  let d = /* @__PURE__ */ new Map();
  for (let c of o) {
    let l = Dm(c);
    if (l) {
      let u = d.get(l);
      if (u) u.push(c);
      else d.set(l, [c]);
    }
  }
  return d.forEach((c) => c.sort((l, u) => new Date(u.modified).getTime() - new Date(l.modified).getTime())), d;
}
import { lstat as Uo } from "fs/promises";
import { posix as jo, sep as Go, win32 as Qo } from "path";
function tfr() {
  return O() === "windows" ? ";" : "&&";
}
async function Oxn(o, d, c) {
  let l = ke();
  if (!d || !o.projectPath || o.projectPath === l) return null;
  if (c.some((p) => o.projectPath === p || o.projectPath.startsWith(p + Go))) return null;
  if (!Yn(o.projectPath) && !bg(o.projectPath) && !await Ko(o.projectPath)) return null;
  let m = Dm(o), S = M5(m) ? ` ${m}` : "";
  return `cd ${wo([o.projectPath])} ${tfr()} claude --resume${S}`;
}
async function Ko(o) {
  let d = O() === "windows", { parse: c, sep: l } = d ? Qo : jo, u = d ? c(o).root.replaceAll("/", l) : c(o).root, m = o.slice(c(o).root.length).split(d ? /[\\/]+/ : l).filter(Boolean), S = u;
  for (let p of m) {
    S = S === "" || S.endsWith(l) ? S + p : S + l + p;
    try {
      if ((await Uo(S)).isSymbolicLink()) return true;
    } catch (_) {
      let R = v(_);
      return R !== "ENOENT" && R !== "ENOTDIR";
    }
  }
  return true;
}
export {
  Ixn,
  Oxn,
  tfr
};
