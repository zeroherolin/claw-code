// linux/fs/plugin-relevance.js — Claude Code 2.1.310（linux）模块 chunk-yvtke912.js
import { Nt } from "../shared/chunk-57ff8cc1.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { J } from "../context/not-admin-owned.js";
import { t } from "./gitlab-runner-authentication-token.js";
import { fe } from "../shared/async-hooks.5238.js";
import { hr } from "../git/utf-8.js";
import { DG } from "../shared/chunk-26f5a8ce.js";
import { bHn, SHn } from "../shared/tool-use.4be5.js";
import { Q3 } from "../git/bridge-child-tool-diff.js";
import { f1t } from "../shell/sandbox.js";
import { JC, Abt } from "../context/org-memory-writes-setting-changed.js";
import { Um } from "../context/tool-result-clearing-after-idle-server-report.js";
import { Ce } from "../vendor/react/chunk-0b0bf45d.js";
function Fbr() {
  let e = [Le()];
  try {
    e.push(Um());
  } catch {
  }
  return (a) => e.some((n) => Q3(a, n, true));
}
var h = Ce(f1t(), 1);
import { readFile as d, stat as R } from "fs/promises";
function hHn(e, a) {
  return { readFileState: a, bashTools: bHn(e), bashHosts: SHn(e) };
}
function yHn(e, a) {
  let n = a;
  if (!n?.signals || !n.signals.cli?.length && !n.signals.filesRead?.length && !n.signals.manifestDeps?.length && !n.signals.hosts?.length && !n.signals.cwd?.length) return null;
  let c;
  try {
    if (n.signals.manifestDeps?.length) c = n.signals.manifestDeps.map((l) => ({ file: new RegExp(l.file, "i"), pattern: new RegExp(l.pattern) }));
  } catch (l) {
    return t(`Skipping relevance signals for "${e}": invalid RegExp in relevance.signals: ${l}`, { level: "warn" }), null;
  }
  let o = n.signals.hosts?.map((l) => l.toLowerCase());
  return { cli: n.signals.cli, hosts: o, filesRead: n.signals.filesRead, manifestDep: c, cwd: n.signals.cwd };
}
async function _Hn(e, a) {
  let { bashTools: n, bashHosts: c } = a ?? {};
  if (e.cli && n?.size) {
    let i = e.cli.find((s) => n.has(s));
    if (i) return { signal: "cli", command: i };
  }
  if (e.hosts?.length && c?.size) {
    let i = e.hosts.find((s) => c.has(s));
    if (i) return { signal: "hosts", host: i };
  }
  if (e.cwd?.length) {
    let i = fe().replaceAll("\\", "/"), s = hr(fe())?.replaceAll("\\", "/"), f = [i];
    if (s && i.startsWith(`${s}/`)) f.push(i.slice(s.length + 1));
    for (let p of e.cwd) {
      let g = p.replace(/\/+$/, "").replace(/\/\*\*$/, "");
      if (!g) continue;
      if (f.some((r) => h.default.isMatch(r, [g, `${g}/**`], { nocase: true, dot: true }))) return { signal: "cwd" };
    }
  }
  let o = a?.readFileState, l = [];
  if (o && (e.filesRead?.length || e.manifestDep)) {
    let i = Fbr();
    l = Abt(o).filter((s) => !i(s));
  }
  if (e.filesRead?.length && l.length) {
    let i = l.find((s) => h.default.isMatch(s.replaceAll("\\", "/"), e.filesRead, { nocase: true, dot: true }));
    if (i) return { signal: "filesRead", file: i };
  }
  if (e.manifestDep && o && l.length > 0) {
    let i = new Map(o.entries()), s = (async () => {
      for (let { file: p, pattern: g } of e.manifestDep) for (let r of l) {
        if (!p.test(r)) continue;
        try {
          let m = i.get(r), u = m && JC(m) ? m.content : void 0;
          if (!u) {
            if (J()) {
              DG("plugin_relevance");
              continue;
            }
            if ((await R(r)).size > 524288) continue;
            u = await d(r, "utf8");
          }
          if (g.test(u)) return r;
        } catch {
        }
      }
      return null;
    })(), f = await Nt(s, 50, "manifestDep scan").catch(() => null);
    if (f) return { signal: "manifestDep", file: f };
  }
  return null;
}
export {
  Fbr,
  _Hn,
  hHn,
  yHn
};
