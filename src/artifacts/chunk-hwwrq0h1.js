// artifacts/chunk-hwwrq0h1.js — Claude Code 2.1.310 模块 chunk-hwwrq0h1.js
import { awo } from "./cobalt-plinth-samphire.3k3d.js";
import { ows } from "../telemetry/whiteboard-publish.4wmp.js";
import { ll } from "./cobalt-plinth-lovage.hxm5.js";
import { TTs } from "./workshop-build-started.66d5.js";
import { JXn } from "../vendor/highlight/file-path.bk20.js";
import { XS } from "../shared/general-purpose.t0jz.js";
import { kke } from "../core/conversation-engine.31gx.js";
import { Aoe } from "../shared/chunk-bkvejkkf.js";
function a(e, r) {
  return Object.entries(e.frameUrls ?? {}).find(([o, s]) => s?.url !== void 0 && !kke(o) && ll(s.url) === r)?.[0];
}
function l(e) {
  return Object.entries(e.frameUrls ?? {}).flatMap(([r, o]) => {
    if (o?.url === void 0 || kke(r)) return [];
    if (o.dismissed === true) return [];
    let s = ll(o.url), n = o.routineUnasked === true || o.commentUnasked === true;
    return s === null ? [] : [{ path: r, slug: s, url: o.url, unasked: n }];
  });
}
function d(e, r) {
  return (e.workshopVerifiedSlugs ?? []).includes(r) || Object.entries(e.frameUrls ?? {}).some(([o, s]) => s?.url !== void 0 && ll(s.url) === r && JXn(o));
}
var c = Object.freeze({}), m = Aoe("artifactReadConsentSlugs", c), g = Aoe("artifactConsentEpoch", 0);
function Zco(e, r) {
  return { ownPublishes: awo(e, r), workshopTelemetry: TTs(e, r), whiteboardTelemetry: ows(e, r), recordedPages: { isWorkshopPage: (o) => d(e(), o), localSourcePath: (o) => a(e(), o), heldSourcePages: () => l(e()) }, sharedReadConsent: m(e, r), consentEpoch: g(e, r) };
}
function vct() {
  let e = {};
  return Zco(() => e, (r) => {
    e = r(e);
  });
}
var kct = { assign: () => XS[0], get: () => {
  return;
} };
function P9e(e) {
  return { assign(r) {
    let o = e.get(), s = o.assignments.get(r);
    if (s) return s;
    let n = XS[o.index % XS.length];
    return e.set((t) => {
      if (t.assignments.has(r)) return t;
      let i = new Map(t.assignments);
      return i.set(r, n), { assignments: i, index: t.index + 1 };
    }), n;
  }, get(r) {
    return e.get().assignments.get(r);
  } };
}
var kae = Object.freeze({ bridge: void 0, channel: void 0 });
class Abr {
  #e = void 0;
  #r = void 0;
  get bridge() {
    return this.#e;
  }
  get channel() {
    return this.#r;
  }
  connectBridge(e) {
    this.#e = e;
  }
  disconnectBridge() {
    this.#e = void 0;
  }
  setChannel(e) {
    this.#r = e;
  }
}
export {
  Abr,
  P9e,
  Zco,
  kae,
  kct,
  vct
};
