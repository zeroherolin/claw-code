// linux/fs/remote-tool-serving.js — Claude Code 2.1.310（linux）模块 chunk-cag24fch.js
import { b, c } from "../agents/third-party.js";
import { N, E, G } from "../telemetry/anthropic-workspace-id.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { _, te } from "./gitlab-runner-authentication-token.js";
import { Or } from "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { O } from "./chunk-ce5d00cd.js";
import { X0 } from "./utf-8.8f8e.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { $s } from "../shared/chunk-4563156b.js";
import { om } from "../shell/invalid-type.js";
import { vo } from "../context/org-memory-writes-setting-changed.js";
import { SG } from "../context/team-memory-sync.js";
import { o, u, B, A } from "../vendor/zod/string-format.js";
import { SB } from "./not-utf8.js";
import { et } from "../shared/chunk-061dbb8e.js";
import { constants as H, lstatSync as v, mkdirSync as Y, unlinkSync as U, utimesSync as W, writeFileSync as h } from "fs";
import { lstat as z, mkdir as J, open as K, readdir as V, rm as j, writeFile as q } from "fs/promises";
import { randomBytes as Q } from "crypto";
import { basename as Z, join as w, resolve as R } from "path";
var y = 1, ee = 8 * om, re = 9e5, P = "accepted-", S = ".jsonl", ne = ".seen", k = ".accepting-";
function sdt(e) {
  return e === null ? null : et(e);
}
var oe = p(() => u({ v: A(y), kind: A("file"), path: o(), text: o().nullable(), sha256: o().regex(/^[0-9a-f]{64}$/).nullable(), at: o(), by: B(["first_attach", "own_write", "person"]) })), ie = p(() => u({ v: A(y), kind: A("folder"), key: o(), project: o().nullable(), local: o().nullable(), legacy: o().nullable(), at: o() }));
function C(e, i) {
  return O() === "windows" ? I(e) === I(i) : e === i;
}
function I(e) {
  return e.replace(/^[a-z](?=:)/, (i) => i.toUpperCase());
}
function D(e) {
  return vo(e.normalize("NFC"));
}
function F(e, i = SG()) {
  return w(i, `${P}settings-${et(D(R(e))).slice(0, 32)}${S}`);
}
function x(e, i = SG()) {
  return w(i, `${P}folder-${et(D(e)).slice(0, 32)}${S}`);
}
function M(e) {
  return `${e.slice(0, -S.length)}${ne}`;
}
function L(e) {
  try {
    return SB(e, ee);
  } catch (i) {
    if (!G(i)) throw i;
  }
  try {
    v(M(e));
  } catch (i) {
    if (G(i)) return;
    throw i;
  }
  throw Error("record aged out");
}
function T(e) {
  try {
    let i = /* @__PURE__ */ new Date();
    W(e, i, i);
  } catch {
  }
}
function Uwe(e = SG()) {
  let i = (r, n) => {
    Y(e, { recursive: true, mode: 448 });
    let t = M(r), g = false;
    try {
      h(t, "", { mode: 384, flag: "wx" }), g = true;
    } catch (f) {
      if (E(f) !== "EEXIST") throw f;
    }
    try {
      X0(r, `${_(n)}
`, 384);
    } catch (f) {
      let m;
      try {
        m = v(r).isFile();
      } catch (X) {
        m = !G(X);
      }
      if (g && !m) {
        try {
          U(t);
        } catch {
        }
        try {
          if (v(r).isFile()) h(t, "", { mode: 384, flag: "wx" });
        } catch {
        }
      }
      throw f;
    }
    try {
      h(t, "", { mode: 384, flag: "wx" });
    } catch (f) {
      if (E(f) !== "EEXIST") throw f;
    }
  }, s = /* @__PURE__ */ new Set(), d = (r, n, t) => {
    let g = Or(t);
    if (t.length > g.length + 1 && !s.has(n)) {
      s.add(n);
      try {
        a("tengu_remote_tool_serving", { event: b("accepted_record_has_tail"), record_kind: c(r) });
      } catch (f) {
        l(N(f));
      }
    }
    return g;
  };
  return { file: (r) => {
    try {
      let n = L(F(r, e));
      if (n === void 0) return "none";
      let t = oe().safeParse(te(d("file", r, n)));
      if (!t.success || !C(R(t.data.path), R(r)) || sdt(t.data.text) !== t.data.sha256) return "unreadable";
      return { text: t.data.text, sha256: t.data.sha256 };
    } catch {
      return "unreadable";
    }
  }, recordFile: (r, n, t) => {
    if (n !== null && Buffer.byteLength(n) > om) throw Error("accepted settings text exceeds the settings size limit");
    i(F(r, e), { v: y, kind: "file", path: r, text: n, sha256: sdt(n), at: (/* @__PURE__ */ new Date()).toISOString(), by: t }), s.delete(r);
  }, folder: (r) => {
    try {
      let n = L(x(r, e));
      if (n === void 0) return "none";
      let t = ie().safeParse(te(d("folder", r, n)));
      if (!t.success || !C(t.data.key, r)) return "unreadable";
      let { project: g, local: f, legacy: m } = t.data;
      return { project: g, local: f, legacy: m };
    } catch {
      return "unreadable";
    }
  }, recordFolder: (r, n) => {
    i(x(r, e), { v: y, kind: "folder", key: r, project: n.project, local: n.local, legacy: n.legacy, at: (/* @__PURE__ */ new Date()).toISOString() }), s.delete(r);
  }, noteServed: (r, n) => {
    T(x(r, e));
    for (let t of n) T(F(t, e));
  } };
}
async function ae(e) {
  try {
    let i = Date.now() - re;
    for (let s of await V(e)) {
      let d = s.lastIndexOf(k);
      if (d <= 0 || !/^[0-9a-f]{8}\.jsonl$/.test(s.slice(d + k.length))) continue;
      let r = w(e, s);
      if ((await z(r)).mtimeMs < i) await j(r, { recursive: true, force: true });
    }
  } catch {
  }
}
async function Qfs(e, i) {
  let s = e.dir ?? SG();
  await J(s, { recursive: true, mode: 448 }), await ae(s);
  let d = w(s, `${Z(e.name)}${k}${Q(4).toString("hex")}${S}`);
  await q(d, e.text, { mode: 384, flag: "wx" });
  try {
    let r = await z(d);
    if (await i(d)) return "blocked";
    let n;
    try {
      if (O() === "windows" && (await z(d)).isSymbolicLink()) return "tampered";
      n = await K(d, H.O_RDONLY | $s);
      let t = await n.stat();
      return t.isFile() && t.nlink === 1 && t.ino === r.ino && t.dev === r.dev && t.size === r.size && await n.readFile({ encoding: "utf8" }) === e.text ? "allowed" : "tampered";
    } catch (t) {
      if (G(t) || E(t) === "ELOOP") return "tampered";
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
  Qfs,
  Uwe,
  sdt
};
