// darwin/shared/egress-blocked.js — Claude Code 2.1.310（darwin）模块 chunk-6n8qnk03.js
import { rn } from "../auth/oauth-2025-04-20.js";
import { _ } from "../fs/gitlab-runner-authentication-token.js";
import { I, re } from "./chunk-d2c47492.js";
import { St } from "../artifacts/cowritten-artifact-html.js";
import { zs } from "./chunk-f98598c3.js";
import { RJe } from "../context/team-memory-sync.js";
function b7() {
  try {
    RJe(rn().BASE_API_URL);
  } catch {
    return "egress_blocked";
  }
  if (zs("zdr")) return "egress_blocked";
  return St() ? "essential_traffic" : void 0;
}
import { basename as f } from "path";
var l = 100, g = 900, a = 300;
function Lte(t) {
  return _(t).replace(/[^\x20-\x7e]/g, (n) => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function ZCr(t) {
  let n = Lte(t);
  if (n.length <= a) return n;
  let e = [...t], r = e.length, s = 5;
  while (r > 0) {
    if (s += Lte(e[r - 1]).length - 2, s > a) break;
    r--;
  }
  return Lte(`...${e.slice(r).join("")}`);
}
function yRs(t) {
  let n = [], e = 0;
  for (let { path: s, name: i, size: c } of t) {
    let o = `${ZCr(s)}${f(s) === i ? "" : `, the file ${ZCr(i)}`} (${c} bytes)`;
    if (e += o.length + 2, e > g) break;
    n.push(o);
  }
  let r = t.length - n.length;
  return `Attaches ${t.length} ${I(t.length, "file")}: ${n.join("; ")}${r > 0 ? `; and ${r} more` : ""}`;
}
function _Rs(t) {
  if (t === "") return;
  let n = t.slice(1).split("/").map((e) => e.replaceAll("~1", "/").replaceAll("~0", "~")).map((e, r) => r === 0 ? e : /^\d+$/.test(e) ? `[${e}]` : `.${e}`).join("");
  return w7(n);
}
function w7(t) {
  return Lte(t.length > l ? `${re(t, l)}...` : t);
}
export {
  Lte,
  ZCr,
  _Rs,
  b7,
  w7,
  yRs
};
