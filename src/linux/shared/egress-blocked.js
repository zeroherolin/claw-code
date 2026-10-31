// linux/shared/egress-blocked.js — Claude Code 2.1.310（linux）模块 chunk-w3ssq3dv.js
import { rn } from "../auth/oauth-2025-04-20.js";
import { _ } from "../fs/gitlab-runner-authentication-token.js";
import { I, re } from "./chunk-d2c47492.js";
import { _t } from "../artifacts/cowritten-artifact-html.js";
import { Ks } from "./chunk-f98598c3.js";
import { MQe } from "../context/team-memory-sync.js";
function fJ() {
  try {
    MQe(rn().BASE_API_URL);
  } catch {
    return "egress_blocked";
  }
  if (Ks("zdr")) return "egress_blocked";
  return _t() ? "essential_traffic" : void 0;
}
import { basename as f } from "path";
var l = 100, g = 900, a = 300;
function Rte(t) {
  return _(t).replace(/[^\x20-\x7e]/g, (n) => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function MTr(t) {
  let n = Rte(t);
  if (n.length <= a) return n;
  let e = [...t], r = e.length, s = 5;
  while (r > 0) {
    if (s += Rte(e[r - 1]).length - 2, s > a) break;
    r--;
  }
  return Rte(`...${e.slice(r).join("")}`);
}
function MCs(t) {
  let n = [], e = 0;
  for (let { path: s, name: i, size: c } of t) {
    let o = `${MTr(s)}${f(s) === i ? "" : `, the file ${MTr(i)}`} (${c} bytes)`;
    if (e += o.length + 2, e > g) break;
    n.push(o);
  }
  let r = t.length - n.length;
  return `Attaches ${t.length} ${I(t.length, "file")}: ${n.join("; ")}${r > 0 ? `; and ${r} more` : ""}`;
}
function DCs(t) {
  if (t === "") return;
  let n = t.slice(1).split("/").map((e) => e.replaceAll("~1", "/").replaceAll("~0", "~")).map((e, r) => r === 0 ? e : /^\d+$/.test(e) ? `[${e}]` : `.${e}`).join("");
  return pJ(n);
}
function pJ(t) {
  return Rte(t.length > l ? `${re(t, l)}...` : t);
}
export {
  DCs,
  MCs,
  MTr,
  Rte,
  fJ,
  pJ
};
