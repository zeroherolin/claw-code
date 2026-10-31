// darwin/telemetry/bg-cloud-lease.js — Claude Code 2.1.310（darwin）模块 chunk-d2259xe3.js
import { S, c } from "../agents/third-party.js";
import { d, v } from "./anthropic-workspace-id.js";
import { _, ee, t } from "../fs/gitlab-runner-authentication-token.js";
import { a } from "./chunk-9097a12b.js";
import { pe } from "../shared/async-hooks.5238.js";
import { ot } from "../fs/chunk-86be9585.js";
import { Qf, gCe } from "./fleet-past-sessions.js";
import { VC, F3 } from "../fs/attach-journal.js";
import { Oc, RHo, xHo } from "./bg-roster-parse-failed.js";
import { i8t } from "../shared/string-decoder.js";
import { lYn } from "./harbor-kite-pacing-off.js";
import { connect as E } from "net";
import { StringDecoder as k } from "string_decoder";
async function Sh(g, m) {
  let s;
  try {
    s = E(F3());
  } catch (r) {
    return { ok: false, code: "ENOCONN", error: VC(d(r)), errno: v(r) };
  }
  let p = m?.timeoutMs ?? 5e3, o, l = new Promise((r) => {
    o = r;
  }), u = false, i = false, f = (r) => {
    if (u) return;
    u = true, s.destroy(), o(r);
  };
  s.setTimeout(p, () => f({ ok: false, code: "ETIMEOUT", error: "control socket timeout", connected: i })), s.on("error", (r) => f({ ok: false, code: "ENOCONN", error: VC(d(r)), connected: i, errno: v(r) })), s.once("connect", () => {
    i = true, s.write(_(g) + `
`);
  });
  let e = new k("utf8"), n = "";
  return s.on("data", (r) => {
    n += e.write(r);
    let y = n.indexOf(`
`);
    if (y < 0) return;
    let C = n.slice(0, y);
    try {
      f(ee(C));
    } catch (N) {
      f({ ok: false, code: "ENOCONN", error: VC(d(N)), connected: i });
    }
  }), s.once("close", () => {
    if (!u) f({ ok: false, code: "ENOCONN", error: "connection dropped mid-request — it may have restarted; retry", connected: i });
  }), l;
}
var b = 4, O = /* @__PURE__ */ new Set(["shutdown_op", "upgrade", "yield", "displaced"]);
function s8t(g) {
  return w({ label: g, cwd: pe(), pid: process.pid });
}
function w(g, m) {
  let s = false, p = null, o = null, l = true, u = b, i = async (e) => {
    if (e || !m || !l || u === 0) {
      o = setTimeout(f, 1e3), o.unref();
      return;
    }
    let n = false;
    try {
      n = await m.ensureDaemon() === "started";
    } catch (r) {
      t(`daemon lease: ensureDaemon failed: ${VC(d(r))}`, { level: "error" });
    }
    if (l = n, u -= n ? 1 : 0, u === 0) a("tengu_bg_cloud_lease", { transition: S("starts_used_up") }), t(`daemon lease: started a daemon ${b} times; from here it only reconnects`, { level: "warn" });
    f();
  }, f = () => {
    if (s) return;
    let e;
    try {
      e = E(F3());
    } catch {
      p = null, i(false);
      return;
    }
    p = e;
    let n = false;
    if (e.on("error", () => e.destroy()), e.once("connect", () => {
      let r = process.getuid?.();
      if (m && r !== void 0 && lYn(e) !== r) {
        if (l) l = false, a("tengu_bg_cloud_lease", { transition: S("server_not_this_user") }), t("daemon lease: the control socket is not served by this user, or its server cannot be told; not taking a lease there", { level: "warn" });
        e.destroy();
        return;
      }
      e.write(_({ proto: Oc, op: "lease", client: g }) + `
`);
    }), m) i8t(e, (r) => {
      if (s) return;
      let y = ot(r, false), C = xHo().safeParse(y).data?.closing;
      if (C !== void 0) {
        if (O.has(C)) l = false;
        a("tengu_bg_cloud_lease", { transition: S("daemon_closing"), cause: c(C) }), m.onClosing(C);
      } else if (!n && RHo().safeParse(y).success) n = true, l = true, m.onAcknowledged();
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
function rno(g, m, s, p) {
  let o;
  try {
    o = E(F3());
  } catch (e) {
    return queueMicrotask(() => p(VC(d(e)))), () => {
    };
  }
  let l = false, u = false, i = (e) => {
    if (l) return;
    l = true, p(e);
  };
  o.setTimeout(1e4, () => {
    if (!u) i(`${Qf()} did not respond — it may be stalled${gCe("restart")}`), o.destroy();
  }), o.on("error", (e) => i(VC(d(e)))), o.on("close", () => i("control socket closed")), o.on("connect", () => o.write(_({ proto: Oc, op: "subscribe", short: g, tail: m }) + `
`));
  let f = i8t(o, (e) => {
    if (!u) u = true, o.setTimeout(0);
    try {
      let n = ee(e);
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
  Sh,
  rno,
  s8t
};
