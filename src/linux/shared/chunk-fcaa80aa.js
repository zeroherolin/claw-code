// linux/shared/chunk-fcaa80aa.js — Claude Code 2.1.310（linux）模块 chunk-wa4mxzf9.js
import { yn } from "../fs/gitlab-runner-authentication-token.js";
import { HIn } from "../terminal/aria-preserve-whitespace.js";
import { w } from "../ui/chunk-0ed4c357.js";
import { BR, KB } from "../telemetry/render-glyph-cardinality.js";
import { Q, e } from "../vendor/react/chunk-40234545.js";
import { Gt, Xt, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
import { PassThrough as u } from "stream";
function m() {
}
var Lxt = Gt(false);
function XM(r) {
  let i = w(5), { children: t } = r, { exit: n } = BR(), a, o;
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
async function JM(r, t) {
  r.render(e(XM, { children: t })), await r.waitUntilExit();
}
async function i6e(r, { columns: t, storageV5: n }) {
  let i = "", a = false, o = new u();
  if (t !== void 0) o.columns = t;
  return o.on("data", (c) => {
    if (a) return;
    a = true, i = c.toString();
  }), await (await KB(e(XM, { children: e(Lxt.Provider, { value: true, children: e(HIn, { value: m, children: r }) }) }), { stdout: o, patchConsole: false }, { storageV5: n })).waitUntilExit(), i;
}
async function WPn(r, t) {
  let n = await i6e(r, t);
  return yn(n);
}
export {
  JM,
  Lxt,
  WPn,
  XM,
  i6e
};
