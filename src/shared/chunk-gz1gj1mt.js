// shared/chunk-gz1gj1mt.js — Claude Code 2.1.310 模块 chunk-gz1gj1mt.js
import { w } from "../ui/chunk-zqxc4qtb.js";
import { eS } from "../ui/chord-started.x7d9.js";
import { i } from "./environment.9a41.js";
import { e } from "../vendor/react/chunk-f790ajz4.js";
import { ro, Yr, P, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
var I = /* @__PURE__ */ new WeakMap();
function U(r) {
  let n = I.get(r);
  if (!n) n = { root: r, screen: null, rendered: false, run: 0, keys: 0, jobWrites: Promise.resolve() }, I.set(r, n);
  return n;
}
function mlt(r, n, t = {}) {
  let o = U(r), d = ++o.run, f = t.marksJobBlocked === true && !!i.CLAUDE_JOB_DIR;
  return new Promise((l, a) => {
    let S = false;
    function k(s) {
      if (S || o.run !== d) return;
      S = true, a(s);
    }
    function m(s) {
      let p = o.jobWrites.then(s).catch(() => {
        return;
      });
      return o.jobWrites = p, p;
    }
    function A(s) {
      for (let p = s; p < n.length; p++) {
        let y = false, J = true, N = false, v, V = false, M = () => {
          if (f && !v && !y && !V) v = m(() => import("../ui/clear-command-park-blocked.caev.js").then((c) => c.markStartupDialogBlocked()));
        }, D = () => {
          let c = v;
          if (v = void 0, V = true, c) m(async () => {
            let z = await c;
            if (z) {
              let F = await import("../ui/clear-command-park-blocked.caev.js");
              await F.clearStartupDialogBlocked(z);
            }
          });
        }, _ = (c) => {
          if (y || S || o.run !== d) return;
          if (y = true, N = c === "stop", D(), !J) R(N ? "done" : A(p + 1));
        }, u;
        try {
          u = n[p](_);
        } catch (c) {
          return k(c), "failed";
        } finally {
          J = false;
        }
        if (y) {
          if (N) return "done";
          continue;
        }
        if (u instanceof Promise) u = u.catch((c) => (k(c), new Promise(() => {
        }))), u.then((c) => {
          if (c !== null && c !== void 0) M();
        });
        else if (u === null || u === void 0) {
          y = true;
          continue;
        } else M();
        return { key: ++o.keys, dialog: u, pass: () => _(), tornDown: D, replaced: D, options: t };
      }
      return "done";
    }
    function R(s) {
      if (s === "failed" || o.run !== d) return;
      if (s === "done") {
        b(o, null), l();
        return;
      }
      if (!o.rendered && s.dialog instanceof Promise) {
        o.screen = s, s.dialog.then((p) => {
          if (o.screen !== s || o.run !== d) return;
          if (p === null || p === void 0) s.pass();
          else R({ ...s, dialog: p });
        });
        return;
      }
      b(o, s);
    }
    R(A(0));
  });
}
function aD(r, n, t = {}) {
  let o = U(r);
  o.run++;
  let d = () => {
  }, f = new Promise((a) => {
    d = a;
  }), l = { key: ++o.keys, dialog: n, pass: () => {
  }, tornDown: () => {
  }, replaced: d, options: t };
  return b(o, l), { update: (a) => {
    if (o.screen?.key === l.key) b(o, { ...l, dialog: a });
  }, replaced: f };
}
function b(r, n) {
  if (r.screen && r.screen.key !== n?.key) r.screen.replaced();
  if (r.screen = n, !r.rendered && n === null) return;
  r.rendered = true, r.root.render(e(q, { tree: r, screen: n }));
}
function q(r) {
  let o = w(8), { tree: n, screen: t } = r, d, f;
  if (o[0] !== n) d = () => () => {
    n.rendered = false, n.screen?.tornDown();
  }, f = [n], o[0] = n, o[1] = d, o[2] = f;
  else d = o[1], f = o[2];
  if (P(d, f), t === null) {
    return null;
  }
  let l;
  if (o[3] !== t) l = e(O, { screen: t }), o[3] = t, o[4] = l;
  else l = o[4];
  let a;
  if (o[5] !== t.key || o[6] !== l) a = e(ro, { fallback: null, children: l }, t.key), o[5] = t.key, o[6] = l, o[7] = a;
  else a = o[7];
  return a;
}
function O(r) {
  let d = w(12), { screen: n } = r, t = n.dialog instanceof Promise ? Yr(n.dialog) : n.dialog, o = t !== null && t !== void 0, f, l;
  if (d[0] !== n || d[1] !== o) f = () => {
    if (!o) n.pass();
  }, l = [n, o], d[0] = n, d[1] = o, d[2] = f, d[3] = l;
  else f = d[2], l = d[3];
  if (P(f, l), !o) {
    return null;
  }
  let { session: a, onChangeAppState: S, storageV5: k } = n.options;
  if (!a) {
    return t;
  }
  let m;
  if (d[4] !== S || d[5] !== a) m = S && ((A) => S(A, a)), d[4] = S, d[5] = a, d[6] = m;
  else m = d[6];
  let R;
  if (d[7] !== t || d[8] !== a || d[9] !== k || d[10] !== m) R = e(eS, { session: a, storageV5: k, onChangeAppState: m, children: t }), d[7] = t, d[8] = a, d[9] = k, d[10] = m, d[11] = R;
  else R = d[11];
  return R;
}
export {
  aD,
  mlt
};
