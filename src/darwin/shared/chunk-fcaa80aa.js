// darwin/shared/chunk-fcaa80aa.js — Claude Code 2.1.310（darwin）模块 chunk-x33n4f94.js
import { yn } from "../fs/gitlab-runner-authentication-token.js";
import { JIn } from "../terminal/aria-preserve-whitespace.js";
import { w } from "../ui/chunk-0ed4c357.js";
import { GR, J1 } from "../telemetry/render-glyph-cardinality.js";
import { Q, e } from "../vendor/react/chunk-40234545.js";
import { Gt, Xt, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
import { PassThrough as u } from "stream";
function m() {
}
var tPt = Gt(false);
function e0(r) {
  let i = w(5), { children: t } = r, { exit: n } = GR(), a, o;
  if (i[0] !== n) a = () => {
    let d = setTimeout(n, 0);
    return () => clearTimeout(d);
  }, o = [n], i[0] = n, i[1] = a, i[2] = o;
  else a = i[1], o = i[2];
  Xt(a, o);
  let c;
  if (i[3] !== t) c = e(Q, { children: t }), i[3] = t, i[4] = c;
  else c = i[4];
  return c;
}
async function t0(r, t) {
  r.render(e(e0, { children: t })), await r.waitUntilExit();
}
async function S5e(r, { columns: t, storageV5: n }) {
  let i = "", a = false, o = new u();
  if (t !== void 0) o.columns = t;
  return o.on("data", (c) => {
    if (a) return;
    a = true, i = c.toString();
  }), await (await J1(e(e0, { children: e(tPt.Provider, { value: true, children: e(JIn, { value: m, children: r }) }) }), { stdout: o, patchConsole: false }, { storageV5: n })).waitUntilExit(), i;
}
async function yIn(r, t) {
  let n = await S5e(r, t);
  return yn(n);
}
export {
  S5e,
  e0,
  t0,
  tPt,
  yIn
};
