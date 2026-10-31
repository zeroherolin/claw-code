// linux/fs/chunk-81d6ccfe.js — Claude Code 2.1.310（linux）模块 chunk-a51vwwqx.js
import { G } from "../telemetry/anthropic-workspace-id.js";
import { _, te, t } from "./gitlab-runner-authentication-token.js";
import { Dn } from "./utf-8.8f8e.js";
import { mkdir as v, readFile as g } from "fs/promises";
import { dirname as P } from "path";
function hde(e, f, c) {
  let { defaultValue: a, mode: T, ensureDir: s = false, indent: p, trailingNewline: w = false } = c;
  function u() {
    return S(a) ? a() : a;
  }
  async function m() {
    let n;
    try {
      n = await g(e, "utf8");
    } catch (i) {
      if (G(i)) return u();
      throw i;
    }
    let r;
    try {
      r = te(n);
    } catch (i) {
      return t(`jsonStore: ${e} is not valid JSON: ${i}`, { level: "warn" }), u();
    }
    let o = f().safeParse(r);
    if (!o.success) return t(`jsonStore: ${e} failed schema validation: ${o.error.message}`, { level: "warn" }), u();
    return o.data;
  }
  async function d(n) {
    if (s !== false) await v(P(e), { recursive: true, mode: s === true ? void 0 : s.mode });
    let r = _(n, null, p) + (w ? `
` : "");
    await Dn(e, r, T);
  }
  let l = Promise.resolve();
  function y(n) {
    let r = l.then(async () => {
      let o = n(await m());
      return await d(o), o;
    });
    return l = r.then(() => {
      return;
    }, () => {
      return;
    }), r;
  }
  return { path() {
    return e;
  }, read: m, write: d, update: y };
}
function S(e) {
  return typeof e === "function";
}
export {
  hde
};
