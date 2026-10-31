// linux/artifacts/chunk-1727cd82.js — Claude Code 2.1.310（linux）模块 chunk-vaw9tryj.js
import { DSo } from "./cobalt-plinth-samphire.js";
import { xSs } from "../telemetry/whiteboard-publish.js";
import { al } from "./cobalt-plinth-lovage.js";
import { JTs } from "./workshop-build-started.js";
import { MXn } from "../vendor/highlight/file-path.js";
import { Yb } from "../shared/general-purpose.js";
import { _ke } from "../core/conversation-engine.js";
import { Soe } from "../shared/chunk-67236fa7.js";
function a(e, r) {
  return Object.entries(e.frameUrls ?? {}).find(([o, s]) => s?.url !== void 0 && !_ke(o) && al(s.url) === r)?.[0];
}
function l(e) {
  return Object.entries(e.frameUrls ?? {}).flatMap(([r, o]) => {
    if (o?.url === void 0 || _ke(r)) return [];
    if (o.dismissed === true) return [];
    let s = al(o.url), n = o.routineUnasked === true || o.commentUnasked === true;
    return s === null ? [] : [{ path: r, slug: s, url: o.url, unasked: n }];
  });
}
function d(e, r) {
  return (e.workshopVerifiedSlugs ?? []).includes(r) || Object.entries(e.frameUrls ?? {}).some(([o, s]) => s?.url !== void 0 && al(s.url) === r && MXn(o));
}
var c = Object.freeze({}), m = Soe("artifactReadConsentSlugs", c), g = Soe("artifactConsentEpoch", 0);
function xco(e, r) {
  return { ownPublishes: DSo(e, r), workshopTelemetry: JTs(e, r), whiteboardTelemetry: xSs(e, r), recordedPages: { isWorkshopPage: (o) => d(e(), o), localSourcePath: (o) => a(e(), o), heldSourcePages: () => l(e()) }, sharedReadConsent: m(e, r), consentEpoch: g(e, r) };
}
function Sct() {
  let e = {};
  return xco(() => e, (r) => {
    e = r(e);
  });
}
var wct = { assign: () => Yb[0], get: () => {
  return;
} };
function E3e(e) {
  return { assign(r) {
    let o = e.get(), s = o.assignments.get(r);
    if (s) return s;
    let n = Yb[o.index % Yb.length];
    return e.set((t) => {
      if (t.assignments.has(r)) return t;
      let i = new Map(t.assignments);
      return i.set(r, n), { assignments: i, index: t.index + 1 };
    }), n;
  }, get(r) {
    return e.get().assignments.get(r);
  } };
}
var hae = Object.freeze({ bridge: void 0, channel: void 0 });
class fSr {
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
  E3e,
  Sct,
  fSr,
  hae,
  wct,
  xco
};
