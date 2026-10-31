// linux/context/chunk-d3a03b3c.js — Claude Code 2.1.310（linux）模块 chunk-2s471xa8.js
import { s0t } from "../core/conversation-engine.js";
import { isDeepStrictEqual as t } from "util";
function DBe(a, i) {
  i((r) => {
    let o = r;
    if ("cacheBreakerPhrase" in a) {
      let e = a.cacheBreakerPhrase, n = e == null ? void 0 : String(e);
      if (o.cacheBreakerPhrase !== n) o = { ...o, cacheBreakerPhrase: n };
    }
    if ("autoCompactWindow" in a) {
      let e = a.autoCompactWindow, n = e == null ? s0t() : Number(e);
      if (!t(o.autoCompactWindow, n)) o = { ...o, autoCompactWindow: n };
    }
    if ("briefTranscript" in a) {
      let e = Boolean(a.briefTranscript);
      if (o.briefTranscript !== e) o = { ...o, briefTranscript: e };
    }
    if ("isBriefOnly" in a) {
      let e = Boolean(a.isBriefOnly);
      if (o.isBriefOnly !== e) o = { ...o, isBriefOnly: e };
    }
    if ("slackTagConnected" in a) {
      let e = Boolean(a.slackTagConnected);
      if (o.slackTagConnected !== e) o = { ...o, slackTagConnected: e };
    }
    if ("fastMode" in a) {
      let e = Boolean(a.fastMode);
      if (o.fastMode !== e) o = { ...o, fastMode: e };
    }
    if ("model" in a) {
      let e = a.model, n = e == null ? null : String(e);
      if (o.mainLoopModelForSession !== n) o = { ...o, mainLoopModelForSession: n };
      if (o.mainLoopModel !== n) o = { ...o, mainLoopModel: n };
    }
    return o;
  });
}
export {
  DBe
};
