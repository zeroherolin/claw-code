// fs/remote-tool-serving.kcs3.js — Claude Code 2.1.310 模块 chunk-kcs36epv.js
import { S, c } from "../agents/third-party.ydpb.js";
import { N, v, G } from "../telemetry/anthropic-workspace-id.36ys.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { _, ee } from "./gitlab-runner-authentication-token.d7b0.js";
import { Or } from "../shared/chunk-j79dwkaq.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { O } from "./chunk-dz0rx1wn.js";
import { eN } from "./utf-8.7pve.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { Fs } from "../shared/chunk-abagh0tt.js";
import { om } from "../shell/invalid-type.qnva.js";
import { Eo } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { P2 } from "../context/team-memory-sync.0s3j.js";
import { o, u, B, T } from "../vendor/zod/string-format.k395.js";
import { C1 } from "./not-utf8.sqq6.js";
import { et } from "../shared/chunk-tftf1nn4.js";
import { constants as H, lstatSync as z, mkdirSync as Y, unlinkSync as U, utimesSync as W, writeFileSync as F } from "fs";
import { lstat as b, mkdir as J, open as K, readdir as V, rm as j, writeFile as q } from "fs/promises";
import { randomBytes as Q } from "crypto";
import { basename as Z, join as w, resolve as A } from "path";
var y = 1, te = 8 * om, re = 9e5, P = "accepted-", h = ".jsonl", ne = ".seen", R = ".accepting-";
function cdt(e) {
  return e === null ? null : et(e);
}
var oe = f(() => u({ v: T(y), kind: T("file"), path: o(), text: o().nullable(), sha256: o().regex(/^[0-9a-f]{64}$/).nullable(), at: o(), by: B(["first_attach", "own_write", "person"]) })), ie = f(() => u({ v: T(y), kind: T("folder"), key: o(), project: o().nullable(), local: o().nullable(), legacy: o().nullable(), at: o() }));
function k(e, i) {
  return O() === "windows" ? C(e) === C(i) : e === i;
}
function C(e) {
  return e.replace(/^[a-z](?=:)/, (i) => i.toUpperCase());
}
function D(e) {
  return Eo(e.normalize("NFC"));
}
function x(e, i = P2()) {
  return w(i, `${P}settings-${et(D(A(e))).slice(0, 32)}${h}`);
}
function E(e, i = P2()) {
  return w(i, `${P}folder-${et(D(e)).slice(0, 32)}${h}`);
}
function M(e) {
  return `${e.slice(0, -h.length)}${ne}`;
}
function I(e) {
  try {
    return C1(e, te);
  } catch (i) {
    if (!G(i)) throw i;
  }
  try {
    z(M(e));
  } catch (i) {
    if (G(i)) return;
    throw i;
  }
  throw Error("record aged out");
}
function L(e) {
  try {
    let i = /* @__PURE__ */ new Date();
    W(e, i, i);
  } catch {
  }
}
function zwe(e = P2()) {
  let i = (r, n) => {
    Y(e, { recursive: true, mode: 448 });
    let t = M(r), p = false;
    try {
      F(t, "", { mode: 384, flag: "wx" }), p = true;
    } catch (g) {
      if (v(g) !== "EEXIST") throw g;
    }
    try {
      eN(r, `${_(n)}
`, 384);
    } catch (g) {
      let m;
      try {
        m = z(r).isFile();
      } catch (X) {
        m = !G(X);
      }
      if (p && !m) {
        try {
          U(t);
        } catch {
        }
        try {
          if (z(r).isFile()) F(t, "", { mode: 384, flag: "wx" });
        } catch {
        }
      }
      throw g;
    }
    try {
      F(t, "", { mode: 384, flag: "wx" });
    } catch (g) {
      if (v(g) !== "EEXIST") throw g;
    }
  }, s = /* @__PURE__ */ new Set(), d = (r, n, t) => {
    let p = Or(t);
    if (t.length > p.length + 1 && !s.has(n)) {
      s.add(n);
      try {
        a("tengu_remote_tool_serving", { event: S("accepted_record_has_tail"), record_kind: c(r) });
      } catch (g) {
        l(N(g));
      }
    }
    return p;
  };
  return { file: (r) => {
    try {
      let n = I(x(r, e));
      if (n === void 0) return "none";
      let t = oe().safeParse(ee(d("file", r, n)));
      if (!t.success || !k(A(t.data.path), A(r)) || cdt(t.data.text) !== t.data.sha256) return "unreadable";
      return { text: t.data.text, sha256: t.data.sha256 };
    } catch {
      return "unreadable";
    }
  }, recordFile: (r, n, t) => {
    if (n !== null && Buffer.byteLength(n) > om) throw Error("accepted settings text exceeds the settings size limit");
    i(x(r, e), { v: y, kind: "file", path: r, text: n, sha256: cdt(n), at: (/* @__PURE__ */ new Date()).toISOString(), by: t }), s.delete(r);
  }, folder: (r) => {
    try {
      let n = I(E(r, e));
      if (n === void 0) return "none";
      let t = ie().safeParse(ee(d("folder", r, n)));
      if (!t.success || !k(t.data.key, r)) return "unreadable";
      let { project: p, local: g, legacy: m } = t.data;
      return { project: p, local: g, legacy: m };
    } catch {
      return "unreadable";
    }
  }, recordFolder: (r, n) => {
    i(E(r, e), { v: y, kind: "folder", key: r, project: n.project, local: n.local, legacy: n.legacy, at: (/* @__PURE__ */ new Date()).toISOString() }), s.delete(r);
  }, noteServed: (r, n) => {
    L(E(r, e));
    for (let t of n) L(x(t, e));
  } };
}
async function ae(e) {
  try {
    let i = Date.now() - re;
    for (let s of await V(e)) {
      let d = s.lastIndexOf(R);
      if (d <= 0 || !/^[0-9a-f]{8}\.jsonl$/.test(s.slice(d + R.length))) continue;
      let r = w(e, s);
      if ((await b(r)).mtimeMs < i) await j(r, { recursive: true, force: true });
    }
  } catch {
  }
}
async function vfs(e, i) {
  let s = e.dir ?? P2();
  await J(s, { recursive: true, mode: 448 }), await ae(s);
  let d = w(s, `${Z(e.name)}${R}${Q(4).toString("hex")}${h}`);
  await q(d, e.text, { mode: 384, flag: "wx" });
  try {
    let r = await b(d);
    if (await i(d)) return "blocked";
    let n;
    try {
      if (O() === "windows" && (await b(d)).isSymbolicLink()) return "tampered";
      n = await K(d, H.O_RDONLY | Fs);
      let t = await n.stat();
      return t.isFile() && t.nlink === 1 && t.ino === r.ino && t.dev === r.dev && t.size === r.size && await n.readFile({ encoding: "utf8" }) === e.text ? "allowed" : "tampered";
    } catch (t) {
      if (G(t) || v(t) === "ELOOP") return "tampered";
      throw t;
    } finally {
      await n?.close().catch(() => {
      });
    }
  } finally {
    await j(d, { recursive: true, force: true }).catch(() => {
    });
  }
}
export {
  cdt,
  vfs,
  zwe
};
