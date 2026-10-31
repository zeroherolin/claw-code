// linux/shared/nonorigin-other.js — Claude Code 2.1.310（linux）模块 chunk-dcmkyehf.js
import { N9 } from "./chunk-065a7b6f.js";
var t = /cloudflare/i;
function zGt(e) {
  let n = e("request-id");
  if (typeof n === "string" && N9(n.trim())) return "origin";
  let r = e("cf-ray"), o = e("server");
  if (typeof r === "string" && r !== "" || typeof o === "string" && t.test(o)) return "nonorigin_cf";
  return "nonorigin_other";
}
function wKe(e) {
  return e === "nonorigin_cf" || e === "nonorigin_other";
}
function mzr(e) {
  switch (e) {
    case "nonorigin_cf":
      return "a network edge refused the connection before it reached Anthropic's server (HTTP 403 — Anthropic's CDN enforcing a region or network policy, or a Cloudflare gateway on this network) rather than this session; this often follows a VPN or network change";
    case "nonorigin_other":
      return "the connection was refused before it reached Anthropic (HTTP 403) — usually a proxy, VPN or firewall on this network";
  }
}
export {
  mzr,
  wKe,
  zGt
};
