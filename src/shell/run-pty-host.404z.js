// shell/run-pty-host.404z.js — Claude Code 2.1.310 模块 chunk-404z7njb.js
import { __asset_src } from "../runtime/assets.js";
import "../agents/third-party.ydpb.js";
import "../telemetry/anthropic-workspace-id.36ys.js";
import "../fs/async-hooks.9s1z.js";
import "../shared/chunk-9sbknd2z.js";
import "../context/not-admin-owned.ersa.js";
import "../fs/chunk-kqpf5fh3.js";
import { X } from "../shared/chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import "../shared/chunk-3y73jbfr.js";
import "../fs/gitlab-runner-authentication-token.d7b0.js";
import "../shared/chunk-x6r6k81p.js";
import { Nz } from "../models/claude-3-5-sonnet.21mz.js";
import { Kw } from "../fs/backed-up.p1qn.js";
import "../shared/chunk-j79dwkaq.js";
import "../artifacts/cowritten-artifact-html.thm2.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { eN } from "../fs/utf-8.7pve.js";
import "../shared/chunk-nrx8c90j.js";
import { i } from "../shared/environment.9a41.js";
import "../auth/oauth-2025-04-20.ke15.js";
import "../shared/chunk-4kxy1036.js";
import { wkt, xL } from "../fs/chunk-q5g832za.js";
import { KT, YD, qJ } from "../fs/attach-journal.ths7.js";
import { mfs } from "../computer-use/chunk-p4yndg32.js";
import { gyt, i4n, _dn, U0e, bdn, cU, a4n } from "../shared/chunk-rvbkfqhn.js";
import "../shared/chunk-fc5zxj6s.js";
import { appendFileSync as Q, createWriteStream as V, mkdirSync as j } from "fs";
import { appendFile as q, mkdir as J, unlink as x, writeFile as Z } from "fs/promises";
import { createServer as ee } from "net";
import { getPriority as te, setPriority as ne } from "os";
import { dirname as F } from "path";
var re = 1048576;
async function _e(s) {
  let t = s.indexOf("--"), r = s.includes("--bg-spare", t + 1);
  if (!r) await mfs();
  if (i.unset("CLAUDE_PTY_HOST_NO_STABLE_PATH"), t < 3 || t === s.length - 1) return P(void 0, "bad argv: --bg-pty-host <sock> <cols> <rows> -- <file> [args...]");
  let c = s[0];
  process.on("uncaughtException", (e) => P(c, `uncaught: ${e?.stack ?? String(e)}`)), process.on("unhandledRejection", (e) => P(c, `unhandledRejection: ${e?.stack ?? String(e)}`));
  let l = Number(s[1]) || 200, u = Number(s[2]) || 50, m = s[t + 1], h = s.slice(t + 2), a = process.env.CLAUDE_PTY_HOST_EXEC === "1";
  delete process.env.CLAUDE_PTY_HOST_EXEC;
  let k = process.env.CLAUDE_BG_PTY_AUTH;
  delete process.env.CLAUDE_BG_PTY_AUTH;
  let C = process.env.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if (C) {
    let e = await wkt(C);
    if (e?.ptyAuth) k = e.ptyAuth;
    else if (!k) await Y(c, "tokens-file unreadable; DATA gate fail-open");
    if (a) delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, await x(C).catch(() => {
    });
  }
  if (O() !== "windows") try {
    ne(0, Math.min(te(0) + 5, 19));
  } catch {
  }
  let b = se(_dn), p = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakSet(), N = /* @__PURE__ */ new WeakSet(), S = false, y = false, G = false, M = process.ppid, B = 0, T = null, D = ce(process.env.CLAUDE_PTY_RECORD, l, u);
  function K(e) {
    for (let o of p) {
      if (o.destroyed) {
        p.delete(o);
        continue;
      }
      if (o.writableLength > re) {
        o.destroy(), p.delete(o);
        continue;
      }
      o.write(e);
    }
  }
  let I, d;
  try {
    I = new Bun.Terminal({ cols: l, rows: u, data(e, o) {
      G = true;
      let n = Buffer.from(o);
      if (b.push(n), D?.write(n), p.size) K(bdn(n));
    } }), d = Bun.spawn([m, ...h], { cwd: process.cwd(), env: { ...process.env, TERM: "xterm-256color" }, terminal: I, windowsHide: true, detached: false, ...r && { argv0: "claude bg-spare" } });
  } catch (e) {
    P(c, `spawn failed: ${String(e)}`);
  }
  function w(e, o) {
    if (!e.destroyed) e.write(o);
  }
  function z(e) {
    switch (e.t) {
      case "resize": {
        let o = Number(e.cols), n = Number(e.rows);
        if (o > 0 && o <= U0e && n > 0 && n <= U0e && !S && !y) {
          if (I.resize(o, n), O() !== "windows") {
            try {
              process.kill(-process.pid, "SIGWINCH");
            } catch {
            }
            try {
              d.kill("SIGWINCH");
            } catch {
            }
          }
        }
        return;
      }
      case "kill": {
        let o = e.sig === "SIGKILL" ? "SIGKILL" : "SIGTERM";
        try {
          y = oe(o, d, I) || y;
        } catch {
        }
        if (o === "SIGTERM") setTimeout(() => {
          if (!S) try {
            d.kill("SIGKILL");
          } catch {
          }
        }, 5e3).unref();
        return;
      }
      default:
        return;
    }
  }
  await x(c).catch(() => {
  });
  let g = ee((e) => {
    e.on("error", () => e.destroy()), e.once("close", () => p.delete(e)), w(e, cU({ t: "hello", replPid: d.pid, version: typeof { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" } < "u" ? { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION : void 0 }));
    for (let n of b.chunks) w(e, bdn(n));
    if (w(e, cU({ t: "live" })), p.add(e), B = 0, R.set(e, { armed: false, missed: 0 }), w(e, cU({ t: "ping" })), S) {
      w(e, cU({ t: "exit", code: v, signal: U })), e.end();
      return;
    }
    let o = a4n((n) => {
      if (n.kind === gyt) {
        if (k && !H.has(e)) {
          if (!N.has(e)) N.add(e), w(e, cU({ t: "auth-required" }));
          return;
        }
        if (!S && !y) {
          if (I.write(n.payload), a && O() !== "windows") {
            let f = n.payload.includes(3) ? "SIGINT" : n.payload.includes(28) ? "SIGQUIT" : null;
            if (f) {
              T = f;
              try {
                process.kill(-process.pid, f);
              } catch {
              }
              setImmediate(() => {
                T = null;
              });
            }
          }
        }
      } else if (n.kind === i4n) if (n.ctrl.t === "pong") {
        let f = R.get(e);
        if (f) f.armed = true, f.missed = 0;
      } else if (n.ctrl.t === "auth") {
        if (xL(n.ctrl.token, k)) H.add(e);
      } else z(n.ctrl);
    }, () => e.destroy());
    e.on("data", o);
  });
  g.on("error", (e) => {
    try {
      d.kill("SIGTERM");
    } catch {
    }
    P(c, `server error: ${String(e)}`);
  }), g.listen(c), g.unref();
  let E, _;
  if (O() !== "windows") {
    let e = Nz(process.env.CLAUDE_PTY_HEARTBEAT_MS) || 6e4, o = 3;
    _ = setInterval(() => {
      if (S) return;
      for (let A of p) {
        let L = R.get(A);
        if (!L?.armed) continue;
        if (L.missed++, L.missed >= 3) A.destroy(), p.delete(A);
        else w(A, cU({ t: "ping" }));
      }
    }, e), _.unref();
    let n = Nz(process.env.CLAUDE_PTY_ORPHAN_CHECK_MS) || 2e3, f = 30;
    E = setInterval(() => {
      if (S) return;
      if (process.ppid === M || p.size > 0) {
        B = 0;
        return;
      }
      if (++B < f) return;
      clearInterval(E), clearInterval(_), Y(c, `orphan watchdog: ppid ${M}→${process.ppid}, no client for ${f * n}ms`), Kw("ptyhost_orphan_watchdog");
      try {
        d.kill("SIGTERM");
      } catch {
      }
      setTimeout(() => {
        if (!S) try {
          d.kill("SIGKILL");
        } catch {
        }
      }, 5e3).unref();
    }, n), E.unref();
  }
  for (let e of ["SIGTERM", "SIGINT", "SIGHUP"]) process.on(e, () => {
    if (T === e) return;
    try {
      d.kill(e === "SIGHUP" ? "SIGTERM" : e);
    } catch {
    }
  });
  if (a && O() !== "windows") process.on("SIGQUIT", () => {
    if (T === "SIGQUIT") return;
    try {
      d.kill("SIGQUIT");
    } catch {
    }
  });
  let v = 0;
  v = await d.exited;
  let W = 0;
  for (let e = 0; e < 20; e++) if (G = false, await X(5), G) W = 0;
  else if (++W >= 2) break;
  let U = d.signalCode ?? void 0;
  if (S = true, a) try {
    let e = qJ(c), o = Buffer.concat(b.chunks).subarray(-4096), n = 0;
    while (n < 3 && n < o.length && (o[n] & 192) === 128) n++;
    let f = o.subarray(n).toString("utf8");
    eN(e, JSON.stringify({ code: v, signal: U, tail: f }), 384);
  } catch {
  }
  if (E) clearInterval(E);
  if (_) clearInterval(_);
  if (!y) I.close();
  if (D?.close(), a && O() !== "windows") {
    T = "SIGHUP";
    try {
      process.kill(-process.pid, "SIGHUP");
    } catch {
    }
  }
  if (K(cU({ t: "exit", code: v, signal: U })), p.size === 0) await ie(g, a ? () => Z(YD(c), Buffer.concat(b.chunks)) : void 0);
  for (let e of p) e.end();
  if (await Promise.race([new Promise((e) => g.close(() => e())), X(2e3, void 0, { unref: true })]), O() !== "windows") await x(c).catch(() => {
  });
  process.exit(v);
}
async function ie(s, t, r = 5e3) {
  let c = new Promise((u) => s.once("connection", () => u())), l = (t ? t().catch(() => {
  }) : Promise.resolve()).then(() => X(r));
  await Promise.race([c, l]);
}
function oe(s, t, r) {
  if (s === "SIGTERM" && O() === "windows") return r.close(), true;
  return t.kill(s), false;
}
function se(s) {
  let t = [], r = 0, c = 0;
  function l() {
    if (r > 0) t = t.slice(r), r = 0;
  }
  return { get chunks() {
    return l(), t;
  }, push(u) {
    t.push(u), c += u.length;
    while (c > s && t.length - r > 1) {
      c -= t[r++].length;
      for (let m = 0; m < 3; ) {
        let h = t[r], a = 0;
        while (m + a < 3 && a < h.length && (h[a] & 192) === 128) a++;
        if (a > 0) t[r] = h.subarray(a), c -= a, m += a;
        if (t[r].length > 0 || t.length - r === 1) break;
        r++;
      }
    }
    if (r >= t.length - r) l();
  } };
}
function ce(s, t, r) {
  if (!s) return;
  let c = process.hrtime.bigint(), l;
  try {
    l = V(s, { flags: "w" });
  } catch {
    return;
  }
  l.on("error", () => {
    l?.destroy(), l = void 0;
  });
  let u = Buffer.allocUnsafe(8);
  return u.writeUInt32BE(t, 0), u.writeUInt32BE(r, 4), l.write(u), { write(m) {
    if (!l) return;
    let h = Buffer.allocUnsafe(8 + m.length), a = Number((process.hrtime.bigint() - c) / 1000n);
    h.writeUInt32BE(a >>> 0, 0), h.writeUInt32BE(m.length, 4), m.copy(h, 8), l.write(h);
  }, close() {
    l?.end();
  } };
}
async function Y(s, t) {
  try {
    let r = KT(s);
    await J(F(r), { recursive: true }), await q(r, `${(/* @__PURE__ */ new Date()).toISOString()} ${t}
`);
  } catch {
  }
}
function P(s, t) {
  if (s) try {
    let r = KT(s);
    j(F(r), { recursive: true }), Q(r, `${(/* @__PURE__ */ new Date()).toISOString()} ${t}
`);
  } catch {
  }
  process.exit(1);
}
export {
  _e as runPtyHost
};
