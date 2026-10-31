// linux/telemetry/bg-cloud-lease.js — Claude Code 2.1.310（linux）模块 chunk-ay7ngexr.js
import { b, c } from "../agents/third-party.js";
import { d, E } from "./anthropic-workspace-id.js";
import { _, te, t } from "../fs/gitlab-runner-authentication-token.js";
import { a } from "./chunk-9097a12b.js";
import { fe } from "../shared/async-hooks.5238.js";
import { ot } from "../fs/chunk-86be9585.js";
import { Qp, dTe } from "./fleet-past-sessions.js";
import { WT, RY } from "../fs/attach-journal.js";
import { Oc, ROo, xOo } from "./bg-roster-parse-failed.js";
import { q3t } from "../shared/string-decoder.js";
import { f8n } from "./harbor-kite-pacing-off.js";
import { connect as v } from "net";
import { StringDecoder as O } from "string_decoder";
async function bh(g, m) {
  let s;
  try {
    s = v(RY());
  } catch (r) {
    return { ok: false, code: "ENOCONN", error: WT(d(r)), errno: E(r) };
  }
  let p = m?.timeoutMs ?? 5e3, o, l = new Promise((r) => {
    o = r;
  }), u = false, i = false, f = (r) => {
    if (u) return;
    u = true, s.destroy(), o(r);
  };
  s.setTimeout(p, () => f({ ok: false, code: "ETIMEOUT", error: "control socket timeout", connected: i })), s.on("error", (r) => f({ ok: false, code: "ENOCONN", error: WT(d(r)), connected: i, errno: E(r) })), s.once("connect", () => {
    i = true, s.write(_(g) + `
`);
  });
  let e = new O("utf8"), n = "";
  return s.on("data", (r) => {
    n += e.write(r);
    let y = n.indexOf(`
`);
    if (y < 0) return;
    let C = n.slice(0, y);
    try {
      f(te(C));
    } catch (k) {
      f({ ok: false, code: "ENOCONN", error: WT(d(k)), connected: i });
    }
  }), s.once("close", () => {
    if (!u) f({ ok: false, code: "ENOCONN", error: "connection dropped mid-request — it may have restarted; retry", connected: i });
  }), l;
}
var N = 4, S = /* @__PURE__ */ new Set(["shutdown_op", "upgrade", "yield", "displaced"]);
function V3t(g) {
  return w({ label: g, cwd: fe(), pid: process.pid });
}
function w(g, m) {
  let s = false, p = null, o = null, l = true, u = N, i = async (e) => {
    if (e || !m || !l || u === 0) {
      o = setTimeout(f, 1e3), o.unref();
      return;
    }
    let n = false;
    try {
      n = await m.ensureDaemon() === "started";
    } catch (r) {
      t(`daemon lease: ensureDaemon failed: ${WT(d(r))}`, { level: "error" });
    }
    if (l = n, u -= n ? 1 : 0, u === 0) a("tengu_bg_cloud_lease", { transition: b("starts_used_up") }), t(`daemon lease: started a daemon ${N} times; from here it only reconnects`, { level: "warn" });
    f();
  }, f = () => {
    if (s) return;
    let e;
    try {
      e = v(RY());
    } catch {
      p = null, i(false);
      return;
    }
    p = e;
    let n = false;
    if (e.on("error", () => e.destroy()), e.once("connect", () => {
      let r = process.getuid?.();
      if (m && r !== void 0 && f8n(e) !== r) {
        if (l) l = false, a("tengu_bg_cloud_lease", { transition: b("server_not_this_user") }), t("daemon lease: the control socket is not served by this user, or its server cannot be told; not taking a lease there", { level: "warn" });
        e.destroy();
        return;
      }
      e.write(_({ proto: Oc, op: "lease", client: g }) + `
`);
    }), m) q3t(e, (r) => {
      if (s) return;
      let y = ot(r, false), C = xOo().safeParse(y).data?.closing;
      if (C !== void 0) {
        if (S.has(C)) l = false;
        a("tengu_bg_cloud_lease", { transition: b("daemon_closing"), cause: c(C) }), m.onClosing(C);
      } else if (!n && ROo().safeParse(y).success) n = true, l = true, m.onAcknowledged();
    });
    else e.on("data", () => {
    });
    e.once("close", () => {
      if (p = null, s) return;
      i(n);
    }), e.unref();
  };
  return f(), () => {
    if (s = true, o) clearTimeout(o);
    p?.destroy();
  };
}
function Uto(g, m, s, p) {
  let o;
  try {
    o = v(RY());
  } catch (e) {
    return queueMicrotask(() => p(WT(d(e)))), () => {
    };
  }
  let l = false, u = false, i = (e) => {
    if (l) return;
    l = true, p(e);
  };
  o.setTimeout(1e4, () => {
    if (!u) i(`${Qp()} did not respond — it may be stalled${dTe("restart")}`), o.destroy();
  }), o.on("error", (e) => i(WT(d(e)))), o.on("close", () => i("control socket closed")), o.on("connect", () => o.write(_({ proto: Oc, op: "subscribe", short: g, tail: m }) + `
`));
  let f = q3t(o, (e) => {
    if (!u) u = true, o.setTimeout(0);
    try {
      let n = te(e);
      if ("ok" in n && n.ok === false) i(n.error);
      else s(n);
    } catch {
    }
  });
  return () => {
    l = true, f(), o.destroy();
  };
}
export {
  Uto,
  V3t,
  bh
};
