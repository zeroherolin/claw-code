// linux/vendor/marked/absent-but-marked.js — Claude Code 2.1.310（linux）模块 chunk-szvp3b8n.js
import { q, J } from "../../context/not-admin-owned.js";
import { E, G } from "../../telemetry/anthropic-workspace-id.js";
import { _r } from "../../plugins/chunk-0a4c51cf.js";
import { _, te, t } from "../../fs/gitlab-runner-authentication-token.js";
import { Rm, dT, jEn } from "../../git/utf-8.js";
import { Dn } from "../../fs/utf-8.8f8e.js";
import { Np, L1o, A2e, $m } from "../../agents/in-process-teammate.9720.js";
import { BPs, Fjn } from "../../core/conversation-engine.js";
import { MQt } from "../../agents/chunk-46f56dee.js";
import { n8, RFt } from "../../telemetry/bg-roster-parse-failed.js";
import { BD } from "../../shared/chunk-b7346a10.js";
import { z } from "../../shared/chunk-be29de51.js";
import { lstat as k, mkdir as B, readFile as F } from "fs/promises";
import { basename as T, dirname as w, join as D, sep as y } from "path";
var f = 524288;
function Gct(e) {
  return { scoping: e.replace(/\.jsonl$/, ".forked-skill.json"), provenanceMarker: e.replace(/\.jsonl$/, ".forked-skill.marker.json") };
}
function R(e) {
  return Gct($m(e));
}
function v(e) {
  if (e === void 0) return;
  let r = MQt(e, ".forked-skill.json"), n = MQt(e, ".forked-skill.marker.json");
  return r !== void 0 && n !== void 0 ? { scoping: r, provenanceMarker: n } : void 0;
}
function b(e) {
  return _({ forkedSkill: true, ...e !== void 0 && { skillName: e } });
}
function p(e) {
  let r = L1o();
  if (typeof r !== "string") {
    let u = v(A2e(e));
    return u && K(u);
  }
  if (w(r) !== Np()) return;
  let n = T(r), i = q(), o = D(r, i) + y, a = $m(e);
  if (!a.startsWith(o)) return;
  let s = a.slice(o.length).split(y), d = s.at(-1);
  if (d === void 0 || !d.endsWith(".jsonl") || ![n, i, ...s].every(_r)) return;
  let x = s.slice(0, -1), m = (u) => ({ namespace: "sidecar", projectKey: n, sessionId: i, relPath: [...x, u] }), S = m(d.replace(/\.jsonl$/, ".forked-skill.json")), g = m(d.replace(/\.jsonl$/, ".forked-skill.marker.json"));
  return Rm(S) === void 0 && Rm(g) === void 0 ? { scoping: S, provenanceMarker: g } : void 0;
}
function K(e) {
  let r = jEn(e.scoping), n = jEn(e.provenanceMarker);
  return r && n ? { scoping: r, provenanceMarker: n } : void 0;
}
async function M(e, r) {
  let n = await e.statMeta(r);
  if (!n.ok) return n.error.code === "NotFound" ? { kind: "absent" } : { kind: "unusable", ...l(n.error) };
  if (n.value.size > f) return { kind: "unusable" };
  let i = await e.read([r]);
  if (!i.ok) return { kind: "unusable", ...l(i.error) };
  let o = i.value.items[0];
  return o.found ? { kind: "text", text: Buffer.from(o.value).toString("utf8") } : { kind: "absent" };
}
async function I(e, r) {
  let n = await e.statMeta(r);
  if (n.ok) return { present: true };
  return n.error.code === "NotFound" ? { present: false } : { present: true, ...l(n.error) };
}
function c(e) {
  return e === true ? { transientRead: true } : {};
}
function l(e) {
  return c(RFt(e));
}
async function j(e, r, n) {
  let i = await e.write(r, b(n), { mode: 438 & ~process.umask() });
  if (!i.ok) throw t(`forked-skill provenance marker write: ${i.error.code}`), Error("forked-skill provenance marker write failed");
}
function h() {
  if (J()) throw Error("forked-skill sidecar write refused: diskless session with no storage backend or key for the path");
}
async function _wr(e, r, n) {
  let i = z() && n ? dT(e) : void 0;
  if (n && i) return j(n, i, r);
  h(), await Dn(e, b(r));
}
async function vvs(e, r, n) {
  let i = z() && n ? p(e) : void 0;
  if (n && i) {
    await j(n, i.provenanceMarker, r.skillName);
    let a = await n.write(i.scoping, _(r), { mode: 438 & ~process.umask() });
    if (!a.ok) throw t(`forked-skill scoping write: ${a.error.code}`), Error("forked-skill scoping record write failed");
    return;
  }
  h();
  let o = R(e);
  await B(w(o.scoping), { recursive: true }), await _wr(o.provenanceMarker, r.skillName), await Dn(o.scoping, _(r));
}
async function Evs(e, r) {
  let n = z() && r ? p(e) : void 0;
  if (r && n) return A(r, n);
  let i = v(A2e(e));
  return i === void 0 ? { status: "diskless" } : CQt(i);
}
async function CQt(e, r) {
  let n = z() && r ? K(e) : void 0;
  if (r && n) return A(r, n);
  let i = BD(e.scoping), o = BD(e.provenanceMarker);
  if (i === void 0 || o === void 0) return { status: "diskless" };
  let a;
  try {
    let s = await k(i);
    if (!s.isFile() || s.size > f) return { status: "malformed" };
    a = await F(i, "utf-8");
  } catch (s) {
    if (G(s)) return await L(o);
    return { status: "malformed", ...c(n8(E(s))) };
  }
  return P(a);
}
function P(e) {
  let r;
  try {
    r = te(e);
  } catch {
    return { status: "malformed" };
  }
  let n = Fjn().safeParse(r);
  return n.success ? { status: "valid", scoping: n.data } : { status: "malformed" };
}
async function A(e, r) {
  let n = await M(e, r.scoping);
  switch (n.kind) {
    case "text":
      return P(n.text);
    case "unusable":
      return { status: "malformed", ...c(n.transientRead) };
    case "absent": {
      let i = await I(e, r.provenanceMarker);
      return i.present ? { status: "absent-but-marked", ...c(i.transientRead) } : { status: "absent" };
    }
  }
}
async function L(e) {
  try {
    return await k(e), { status: "absent-but-marked" };
  } catch (r) {
    return G(r) ? { status: "absent" } : { status: "absent-but-marked", ...c(n8(E(r))) };
  }
}
async function kvs(e, r) {
  let n, i = z() && r ? p(e) : void 0;
  if (r && i) {
    let s = await M(r, i.provenanceMarker);
    if (s.kind !== "text") return;
    n = s.text;
  } else if (J()) return;
  else {
    let { provenanceMarker: s } = R(e);
    try {
      let d = await k(s);
      if (!d.isFile() || d.size > f) return;
      n = await F(s, "utf-8");
    } catch {
      return;
    }
  }
  let o;
  try {
    o = te(n);
  } catch {
    return;
  }
  let a = BPs().safeParse(o);
  return a.success ? a.data.skillName : void 0;
}
export {
  CQt,
  Evs,
  Gct,
  _wr,
  kvs,
  vvs
};
