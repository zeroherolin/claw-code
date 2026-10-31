// linux/fs/chunk-b6b2e102.js — Claude Code 2.1.310（linux）模块 chunk-9gwe1sht.js
import { Ne } from "./async-hooks.93b1.js";
import { AYe, CTn } from "../context/not-admin-owned.js";
import { d, G } from "../telemetry/anthropic-workspace-id.js";
import { te, t } from "./gitlab-runner-authentication-token.js";
import { i } from "../shared/environment.js";
import { O } from "./chunk-ce5d00cd.js";
import { hrt } from "./chunk-b6c2193e.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { KNe, Yj, TH } from "../shell/invalid-type.js";
import { Fn, Ci } from "../models/total-tokens-reminder.js";
import { Xa } from "./daemon-worker.js";
import { ge, bn, Tt, pM, uh, P0 } from "../vendor/zod/invalid-return-type.js";
import { open as A } from "fs/promises";
import { isAbsolute as R } from "path";
var f = new Set(Yj), S = /* @__PURE__ */ new Set([...TH, ...Yj.filter((e) => e !== "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL" && !e.startsWith("CLAUDE_CODE_ARTIFACT") && !KNe(e)), "ANTHROPIC_CUSTOM_HEADERS", "CLAUDE_CODE_SKIP_VERTEX_AUTH"]), D = p(() => {
  let e = pM([bn(), ge()]).pipe(P0.number());
  return Tt({ env: uh(ge()), expiresAt: e.nullable().default(null), pid: bn().int(), procStart: e });
}), T = 2e3, E = /* @__PURE__ */ new Set(), l = null;
function _ht() {
  return i.CLAUDE_CODE_HOST_AUTH_ENV_VAR || "ANTHROPIC_AUTH_TOKEN";
}
function cTe() {
  return !!AYe() && (!(Fn() && Ci()) || i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST);
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
    let o = await r.readFile({ encoding: "utf8" }), s = D().safeParse(te(o));
    if (!s.success || !Number.isFinite(s.data.procStart)) return null;
    let a = s.data;
    if (!Xa(a.pid)) return null;
    let c = await hrt(a.pid);
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
async function Gqn() {
  if (AYe()) return;
  if (!i.CLAUDE_CODE_HOST_CREDS_FILE || !Ne(i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) return;
  let e = await C();
  if (e) {
    let r = /* @__PURE__ */ new Map(), n = {};
    for (let [o, s] of Object.entries(e.env)) if (f.has(o)) h(r, o, s);
    else n[o] = s;
    l = r, m(n);
  } else t(`CLAUDE_CODE_HOST_CREDS_FILE is set (${i.CLAUDE_CODE_HOST_CREDS_FILE}) but no usable host credentials were read`, { level: "warn" });
  CTn(async () => {
    let r = await C();
    if (!r) throw Error("host-creds file re-read failed (missing/stale/expired)");
    let n = {};
    for (let [s, a] of Object.entries(r.env)) if (!f.has(s)) n[s] = a;
    else if (l && l.get(s) !== a) throw t(`host-creds refresh rejected: endpoint changed (${s})`, { level: "warn" }), Error("host-creds refresh rejected: endpoint changed");
    let o = _ht();
    if (E.has(o) && !n[o]) throw Error("host-creds refresh dropped the bearer key");
    if (!l) {
      let s = /* @__PURE__ */ new Map();
      for (let [a, c] of Object.entries(r.env)) if (f.has(a)) h(s, a, c);
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
  for (let r of E) if (!(r in e)) delete process.env[r];
  Object.assign(process.env, e), E = new Set(Object.keys(e));
}
export {
  Gqn,
  _ht,
  cTe
};
