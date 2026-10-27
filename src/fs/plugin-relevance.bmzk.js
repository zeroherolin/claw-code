// fs/plugin-relevance.bmzk.js — Claude Code 2.1.310 模块 chunk-bmzkaaat.js
import { Nt } from "../shared/chunk-3kevgx4j.js";
import { Le } from "../models/claude-3-5-sonnet.21mz.js";
import { J } from "../context/not-admin-owned.ersa.js";
import { t } from "./gitlab-runner-authentication-token.d7b0.js";
import { pe } from "../shared/async-hooks.m2fg.js";
import { hr } from "../git/utf-8.vh7e.js";
import { z2 } from "../shared/chunk-r4f1zac9.js";
import { OHn, MHn } from "../shared/tool-use.vxmn.js";
import { l8 } from "../git/bridge-child-tool-diff.m7a8.js";
import { kBt } from "../shell/sandbox.aet2.js";
import { eR, MSt } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { Um } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { Ae } from "../vendor/react/chunk-meds60nn.js";
function WSr() {
  let e = [Le()];
  try {
    e.push(Um());
  } catch {
  }
  return (a) => e.some((n) => l8(a, n, true));
}
var h = Ae(kBt(), 1);
import { readFile as d, stat as R } from "fs/promises";
function xHn(e, a) {
  return { readFileState: a, bashTools: OHn(e), bashHosts: MHn(e) };
}
function PHn(e, a) {
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
async function IHn(e, a) {
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
    let i = pe().replaceAll("\\", "/"), s = hr(pe())?.replaceAll("\\", "/"), f = [i];
    if (s && i.startsWith(`${s}/`)) f.push(i.slice(s.length + 1));
    for (let p of e.cwd) {
      let g = p.replace(/\/+$/, "").replace(/\/\*\*$/, "");
      if (!g) continue;
      if (f.some((r) => h.default.isMatch(r, [g, `${g}/**`], { nocase: true, dot: true }))) return { signal: "cwd" };
    }
  }
  let o = a?.readFileState, l = [];
  if (o && (e.filesRead?.length || e.manifestDep)) {
    let i = WSr();
    l = MSt(o).filter((s) => !i(s));
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
          let m = i.get(r), u = m && eR(m) ? m.content : void 0;
          if (!u) {
            if (J()) {
              z2("plugin_relevance");
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
  IHn,
  PHn,
  WSr,
  xHn
};
