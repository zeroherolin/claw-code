// linux/fs/unattended-serving-runs.js — Claude Code 2.1.310（linux）模块 chunk-jkhyqma9.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { _, te, t } from "./gitlab-runner-authentication-token.js";
import { Dn } from "./utf-8.8f8e.js";
import { vb, kd } from "./chunk-b6c2193e.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Xa } from "./daemon-worker.js";
import { o, v, u, A } from "../vendor/zod/string-format.js";
import { et } from "../shared/chunk-061dbb8e.js";
import { randomBytes as g, timingSafeEqual as y } from "crypto";
import { unlinkSync as h } from "fs";
import { mkdir as S, open as w, readdir as R, unlink as f } from "fs/promises";
import { homedir as b } from "os";
import { dirname as P, join as m } from "path";
var x = /^([1-9][0-9]{0,9})\.([0-9a-f]{64})$/, c = 4096, z = p(() => u({ version: A(1), pid: v().int().positive(), procStart: o().min(1), nonceSha256: o() }));
function l() {
  return m(b(), ".claude", "state", "unattended-serving-runs");
}
function a(n) {
  return m(l(), `${n}.json`);
}
async function uAi() {
  try {
    let n = await vb();
    if (n === void 0) return;
    let e = g(32).toString("hex"), r = a(process.pid);
    return await S(P(r), { recursive: true, mode: 448 }), await Dn(r, `${_({ version: 1, pid: process.pid, procStart: n, nonceSha256: et(e) })}
`, 384), await B(), process.once("exit", () => {
      try {
        h(r);
      } catch {
      }
    }), { token: `${process.pid}.${e}`, remove: async () => {
      try {
        await f(r);
      } catch {
      }
    } };
  } catch (n) {
    t(`unattended run grant: not recorded (${d(n)})`, { level: "warn" });
    return;
  }
}
async function Xmo(n) {
  try {
    let e = n === void 0 ? null : x.exec(n);
    if (!e) return false;
    let r = Number(e[1]), i = await T(a(r));
    if (i === void 0 || i.pid !== r || !j(i.nonceSha256, et(e[2])) || !Xa(r)) return false;
    return await kd(r, { skipCache: true }) === i.procStart;
  } catch {
    return false;
  }
}
async function T(n) {
  let e;
  try {
    e = await w(n, "r");
    let r = Buffer.alloc(c + 1), { bytesRead: i } = await e.read(r, 0, r.length, 0);
    if (i > c) return;
    let s = z().safeParse(te(r.subarray(0, i).toString("utf8")));
    return s.success ? s.data : void 0;
  } catch {
    return;
  } finally {
    await e?.close().catch(() => {
    });
  }
}
function j(n, e) {
  let r = Buffer.from(n), i = Buffer.from(e);
  return r.length === i.length && y(r, i);
}
async function B() {
  try {
    for (let n of await R(l())) {
      let e = Number(/^([1-9][0-9]{0,9})\.json$/.exec(n)?.[1]);
      if (Number.isInteger(e) && !Xa(e)) await f(a(e)).catch(() => {
      });
    }
  } catch {
  }
}
export {
  Xmo,
  uAi
};
