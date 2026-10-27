// fs/chunk-gen8agw1.js — Claude Code 2.1.310 模块 chunk-gen8agw1.js
import { Ne } from "./async-hooks.9s1z.js";
import { H3e, GCn } from "../context/not-admin-owned.ersa.js";
import { d, G } from "../telemetry/anthropic-workspace-id.36ys.js";
import { ee, t } from "./gitlab-runner-authentication-token.d7b0.js";
import { i } from "../shared/environment.9a41.js";
import { O } from "./chunk-dz0rx1wn.js";
import { vrt } from "./chunk-tzqhxyjb.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { QNe, oW, xH } from "../shell/invalid-type.qnva.js";
import { $n, Ai } from "../models/total-tokens-reminder.psq3.js";
import { Ja } from "./daemon-worker.e01m.js";
import { ge, Sn, Ct, SM, uh, ML } from "../vendor/zod/invalid-return-type.ezsz.js";
import { open as A } from "fs/promises";
import { isAbsolute as R } from "path";
var E = new Set(oW), S = /* @__PURE__ */ new Set([...xH, ...oW.filter((e) => e !== "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL" && !e.startsWith("CLAUDE_CODE_ARTIFACT") && !QNe(e)), "ANTHROPIC_CUSTOM_HEADERS", "CLAUDE_CODE_SKIP_VERTEX_AUTH"]), D = f(() => {
  let e = SM([Sn(), ge()]).pipe(ML.number());
  return Ct({ env: uh(ge()), expiresAt: e.nullable().default(null), pid: Sn().int(), procStart: e });
}), T = 2e3, p = /* @__PURE__ */ new Set(), l = null;
function Dyt() {
  return i.CLAUDE_CODE_HOST_AUTH_ENV_VAR || "ANTHROPIC_AUTH_TOKEN";
}
function $Ce() {
  return !!H3e() && (!($n() && Ai()) || i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST);
}
async function C() {
  let e = i.CLAUDE_CODE_HOST_CREDS_FILE;
  if (!e || !R(e)) return null;
  let r;
  try {
    r = await A(e, "r");
    let n = await r.stat();
    if (n.size > 65536) return null;
    if (O() !== "windows") {
      if ((n.mode & 63) !== 0 || n.uid !== process.getuid?.()) return t("ignoring CLAUDE_CODE_HOST_CREDS_FILE with group/other-readable mode or wrong owner", { level: "warn" }), null;
    }
    let o = await r.readFile({ encoding: "utf8" }), s = D().safeParse(ee(o));
    if (!s.success || !Number.isFinite(s.data.procStart)) return null;
    let a = s.data;
    if (!Ja(a.pid)) return null;
    let c = await vrt(a.pid);
    if (c !== null && Math.abs(a.procStart - c) > T) return null;
    if (a.expiresAt !== null && a.expiresAt < Date.now()) return null;
    let _ = {};
    for (let [u, g] of Object.entries(a.env)) if (S.has(u)) _[u] = g;
    return { ...a, env: _ };
  } catch (n) {
    if (!G(n)) t(`readHostCredsFile failed: ${d(n)}`, { level: "warn" });
    return null;
  } finally {
    await r?.close().catch(() => {
    });
  }
}
async function F4n() {
  if (H3e()) return;
  if (!i.CLAUDE_CODE_HOST_CREDS_FILE || !Ne(i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) return;
  let e = await C();
  if (e) {
    let r = /* @__PURE__ */ new Map(), n = {};
    for (let [o, s] of Object.entries(e.env)) if (E.has(o)) h(r, o, s);
    else n[o] = s;
    l = r, m(n);
  } else t(`CLAUDE_CODE_HOST_CREDS_FILE is set (${i.CLAUDE_CODE_HOST_CREDS_FILE}) but no usable host credentials were read`, { level: "warn" });
  GCn(async () => {
    let r = await C();
    if (!r) throw Error("host-creds file re-read failed (missing/stale/expired)");
    let n = {};
    for (let [s, a] of Object.entries(r.env)) if (!E.has(s)) n[s] = a;
    else if (l && l.get(s) !== a) throw t(`host-creds refresh rejected: endpoint changed (${s})`, { level: "warn" }), Error("host-creds refresh rejected: endpoint changed");
    let o = Dyt();
    if (p.has(o) && !n[o]) throw Error("host-creds refresh dropped the bearer key");
    if (!l) {
      let s = /* @__PURE__ */ new Map();
      for (let [a, c] of Object.entries(r.env)) if (E.has(a)) h(s, a, c);
      l = s;
    }
    return m(n), { authToken: n[o] ?? null };
  });
}
function h(e, r, n) {
  let o = process.env[r];
  if (o && o !== n) {
    t(`host-creds seed: keeping the launch env's ${r}; the file names a different endpoint`, { level: "warn" }), e.set(r, o);
    return;
  }
  process.env[r] = n, e.set(r, n);
}
function m(e) {
  for (let r of p) if (!(r in e)) delete process.env[r];
  Object.assign(process.env, e), p = new Set(Object.keys(e));
}
export {
  $Ce,
  Dyt,
  F4n
};
