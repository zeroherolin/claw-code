// vendor/marked/absent-but-marked.58ak.js — Claude Code 2.1.310 模块 chunk-58akab9h.js
import { V, J } from "../../context/not-admin-owned.ersa.js";
import { v, G } from "../../telemetry/anthropic-workspace-id.36ys.js";
import { _r } from "../../plugins/chunk-x0a7sawk.js";
import { _, ee, t } from "../../fs/gitlab-runner-authentication-token.d7b0.js";
import { Rm, uC, okn } from "../../git/utf-8.vh7e.js";
import { Hn } from "../../fs/utf-8.7pve.js";
import { Nf, ujo, Lze, Fm } from "../../agents/in-process-teammate.040f.js";
import { TIs, iWn } from "../../core/conversation-engine.31gx.js";
import { GJt } from "../../agents/chunk-wta7xw90.js";
import { g8, LUt } from "../../telemetry/bg-roster-parse-failed.yhsj.js";
import { z0 } from "../../shared/chunk-kmah9ecm.js";
import { z } from "../../shared/chunk-mxa4mwnj.js";
import { lstat as k, mkdir as B, readFile as F } from "fs/promises";
import { basename as T, dirname as w, join as D, sep as y } from "path";
var f = 524288;
function Kct(e) {
  return { scoping: e.replace(/\.jsonl$/, ".forked-skill.json"), provenanceMarker: e.replace(/\.jsonl$/, ".forked-skill.marker.json") };
}
function R(e) {
  return Kct(Fm(e));
}
function b(e) {
  if (e === void 0) return;
  let r = GJt(e, ".forked-skill.json"), n = GJt(e, ".forked-skill.marker.json");
  return r !== void 0 && n !== void 0 ? { scoping: r, provenanceMarker: n } : void 0;
}
function K(e) {
  return _({ forkedSkill: true, ...e !== void 0 && { skillName: e } });
}
function p(e) {
  let r = ujo();
  if (typeof r !== "string") {
    let u = b(Lze(e));
    return u && M(u);
  }
  if (w(r) !== Nf()) return;
  let n = T(r), i = V(), o = D(r, i) + y, a = Fm(e);
  if (!a.startsWith(o)) return;
  let s = a.slice(o.length).split(y), d = s.at(-1);
  if (d === void 0 || !d.endsWith(".jsonl") || ![n, i, ...s].every(_r)) return;
  let x = s.slice(0, -1), m = (u) => ({ namespace: "sidecar", projectKey: n, sessionId: i, relPath: [...x, u] }), S = m(d.replace(/\.jsonl$/, ".forked-skill.json")), g = m(d.replace(/\.jsonl$/, ".forked-skill.marker.json"));
  return Rm(S) === void 0 && Rm(g) === void 0 ? { scoping: S, provenanceMarker: g } : void 0;
}
function M(e) {
  let r = okn(e.scoping), n = okn(e.provenanceMarker);
  return r && n ? { scoping: r, provenanceMarker: n } : void 0;
}
async function j(e, r) {
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
  return c(LUt(e));
}
async function h(e, r, n) {
  let i = await e.write(r, K(n), { mode: 438 & ~process.umask() });
  if (!i.ok) throw t(`forked-skill provenance marker write: ${i.error.code}`), Error("forked-skill provenance marker write failed");
}
function P() {
  if (J()) throw Error("forked-skill sidecar write refused: diskless session with no storage backend or key for the path");
}
async function Hwr(e, r, n) {
  let i = z() && n ? uC(e) : void 0;
  if (n && i) return h(n, i, r);
  P(), await Hn(e, K(r));
}
async function QEs(e, r, n) {
  let i = z() && n ? p(e) : void 0;
  if (n && i) {
    await h(n, i.provenanceMarker, r.skillName);
    let a = await n.write(i.scoping, _(r), { mode: 438 & ~process.umask() });
    if (!a.ok) throw t(`forked-skill scoping write: ${a.error.code}`), Error("forked-skill scoping record write failed");
    return;
  }
  P();
  let o = R(e);
  await B(w(o.scoping), { recursive: true }), await Hwr(o.provenanceMarker, r.skillName), await Hn(o.scoping, _(r));
}
async function ZEs(e, r) {
  let n = z() && r ? p(e) : void 0;
  if (r && n) return A(r, n);
  let i = b(Lze(e));
  return i === void 0 ? { status: "diskless" } : FJt(i);
}
async function FJt(e, r) {
  let n = z() && r ? M(e) : void 0;
  if (r && n) return A(r, n);
  let i = z0(e.scoping), o = z0(e.provenanceMarker);
  if (i === void 0 || o === void 0) return { status: "diskless" };
  let a;
  try {
    let s = await k(i);
    if (!s.isFile() || s.size > f) return { status: "malformed" };
    a = await F(i, "utf-8");
  } catch (s) {
    if (G(s)) return await L(o);
    return { status: "malformed", ...c(g8(v(s))) };
  }
  return E(a);
}
function E(e) {
  let r;
  try {
    r = ee(e);
  } catch {
    return { status: "malformed" };
  }
  let n = iWn().safeParse(r);
  return n.success ? { status: "valid", scoping: n.data } : { status: "malformed" };
}
async function A(e, r) {
  let n = await j(e, r.scoping);
  switch (n.kind) {
    case "text":
      return E(n.text);
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
    return G(r) ? { status: "absent" } : { status: "absent-but-marked", ...c(g8(v(r))) };
  }
}
async function evs(e, r) {
  let n, i = z() && r ? p(e) : void 0;
  if (r && i) {
    let s = await j(r, i.provenanceMarker);
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
    o = ee(n);
  } catch {
    return;
  }
  let a = TIs().safeParse(o);
  return a.success ? a.data.skillName : void 0;
}
export {
  FJt,
  Hwr,
  Kct,
  QEs,
  ZEs,
  evs
};
