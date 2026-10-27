// plugins/chunk-3qffpjgv.js — Claude Code 2.1.310 模块 chunk-3qffpjgv.js
import { N } from "../telemetry/anthropic-workspace-id.36ys.js";
import { Sb, _C, Ybe, Ree, Ol } from "../context/not-admin-owned.ersa.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { ws } from "../settings/workflow-launch-exec.t4r2.js";
import { Ns, jw, FKt, jg, sr, Bh } from "../shell/invalid-type.qnva.js";
import { dpe, kS, fe, mt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { sb } from "../settings/built-in.5fzv.js";
import { br } from "../workflows/chunk-exaq0a52.js";
import { fbt } from "./not-found.2nbd.js";
import { Ie } from "./chunk-hxt89a41.js";
import { wf } from "../commands/claude-code.vy1w.js";
import { J5n } from "./plugin-command-source-refresh.bf5t.js";
import { aye } from "./chunk-tcdz2w3z.js";
import { Db } from "../shared/chunk-b6n7b0tm.js";
import { NV, gtr } from "../mcp/chunk-w6e08qgm.js";
function Icn() {
  try {
    return sb();
  } catch (e) {
    return l(N(e)), true;
  }
}
function kLo(e) {
  if (!wf(e)) return;
  let n = jw(e).slice(0, -`@${Ns}`.length);
  for (let [o, r] of br().builtinPlugins) if (jg(o, n)) return r.enabledFromTrustedSettingsOnly === true ? `${o}@${Ns}` : void 0;
  return;
}
var I3 = (e) => kLo(e) !== void 0;
import { join as c } from "path";
var a$r = ["settings.json", "settings.local.json"];
function DJ() {
  let e = {};
  if (dpe()) return e;
  for (let n of Ol()) for (let o of a$r) {
    let { settings: r } = kS(c(n, ".claude", o));
    if (!r?.enabledPlugins) continue;
    Object.assign(e, r.enabledPlugins);
  }
  return e;
}
function l$r() {
  if (dpe()) return {};
  let e = Ol(), n = `${ws().epoch}\0${e.join("\0")}`, o = Ie();
  if (o.addDirMarketplacesMemo?.key === n) return o.addDirMarketplacesMemo.value;
  let r = {};
  for (let i of e) for (let d of a$r) {
    let { settings: s } = kS(c(i, ".claude", d));
    if (!s?.extraKnownMarketplaces) continue;
    for (let [u, f] of Object.entries(s.extraKnownMarketplaces)) r[u] = m(u, f);
  }
  return o.addDirMarketplacesMemo = { key: n, value: r }, r;
}
function m(e, n) {
  let o = n.source;
  if (o.source === "url") {
    let { headersHelper: r, headers: i, ...d } = o;
    if (r !== void 0) t(`--add-dir marketplace ${Bh(e)}: dropping its headersHelper (an --add-dir declaration may not run commands)`, { level: "warn" });
    return { ...n, source: { ...d, ...i && { headers: J5n(i, `--add-dir marketplace ${Bh(e)}`) } } };
  }
  if (o.source === "settings") return { ...n, source: { ...o, plugins: o.plugins.filter((r) => {
    let i = typeof r.source === "object" && r.source.source === "command";
    if (i) t(`--add-dir marketplace ${Bh(e)}: dropping command-sourced entry ${Bh(r.name)}`, { level: "warn" });
    return !i;
  }).map(({ headersHelper: r, headers: i, ...d }) => {
    if (r !== void 0) t(`--add-dir marketplace ${Bh(e)}: dropping entry ${Bh(d.name)}'s headersHelper (an --add-dir declaration may not run commands)`, { level: "warn" });
    return { ...d, ...i && { headers: J5n(i, `--add-dir marketplace ${Bh(e)} entry ${Bh(d.name)}`) } };
  }) } };
  return n;
}
async function HQe() {
  return CLo();
}
function CLo() {
  let e = mt(), n = [], o = DJ();
  for (let [r, i] of Object.entries(o)) {
    if (I3(r)) continue;
    if (r.includes("@") && i) n.push(r);
  }
  if (e.enabledPlugins) for (let [r, i] of Object.entries(e.enabledPlugins)) {
    if (!r.includes("@")) continue;
    let d = I3(r) ? gtr(r) : i, s = n.indexOf(r);
    if (d) {
      if (s === -1) n.push(r);
    } else if (s !== -1) n.splice(s, 1);
  }
  return n;
}
function A8() {
  let e = /* @__PURE__ */ new Map(), n = DJ();
  for (let [r, i] of Object.entries(n)) {
    if (!r.includes("@")) continue;
    if (I3(r)) continue;
    if (i === true) e.set(r, "flag");
    else if (i === false) e.delete(r);
  }
  let o = [{ scope: "managed", source: "policySettings" }, { scope: "user", source: "userSettings" }, { scope: "project", source: "projectSettings" }, { scope: "local", source: "localSettings" }, { scope: "flag", source: "flagSettings" }];
  for (let { scope: r, source: i } of o) {
    let d = fe(i);
    if (!d?.enabledPlugins) continue;
    for (let [s, u] of Object.entries(d.enabledPlugins)) {
      if (!s.includes("@")) continue;
      if (s in n && n[s] !== u) t(`Plugin ${s} from --add-dir (${n[s]}) overridden by ${i} (${u})`);
      if (!NV.includes(i) && I3(s)) continue;
      if (u === true) e.set(s, r);
      else if (u === false) e.delete(s);
    }
  }
  return t(`Found ${e.size} enabled plugins with scopes: ${Array.from(e.entries()).map(([r, i]) => `${r}(${i})`).join(", ")}`), e;
}
function Ocn(e, n) {
  let o = e.get(n);
  if (o !== void 0 || !FKt(n)) return o;
  let r = sr(n);
  for (let [i, d] of e) if (sr(i) === r) return d;
  return;
}
function g() {
  try {
    let e = Ie();
    return CLo().some((o) => !wf(o)) || [...e.pluginsWithHooks].some((o) => !wf(o)) || e.loadedModules.some((o) => !Db(o)) || fbt() || sb() || Sb().length > 0 || _C().length > 0 || Ybe().length > 0 || Ree().length > 0;
  } catch (e) {
    return l(N(e)), true;
  }
}
function Dde() {
  try {
    let e = Ie();
    return (e.hookRegistrationOwed || e.hookRegistrationInFlight !== void 0 || e.hooksUnknownCause !== void 0 || e.hookRegistrationRanBlind || Icn()) && aye() && g();
  } catch (e) {
    return l(N(e)), true;
  }
}
export {
  A8,
  CLo,
  DJ,
  Dde,
  HQe,
  I3,
  Icn,
  Ocn,
  a$r,
  kLo,
  l$r
};
