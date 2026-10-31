// linux/agents/chunk-d78f2677.js — Claude Code 2.1.310（linux）模块 chunk-caj79d9v.js
import { AJ, tG, Qje } from "../core/conversation-engine.js";
import { hm } from "../context/team-memory-sync.js";
function s(i, r, d) {
  let { plugin: n } = i, e = n !== void 0 && AJ();
  if (e) hm(() => Qje(n));
  if (e && !i.recurring) tG(r, void 0, i.agentId ? "stays" : d);
  return e;
}
var lfr = (i) => (r, d) => {
  let n = () => {
    if (d !== void 0) hm(d);
  }, e = () => {
    if (s(r, e, n)) return;
    i(r, n);
  }, o = s(r, e, n);
  if (!o) i(r, () => {
  });
  return o && !r.recurring;
}, dfr = (i) => (r, d) => {
  let n = /* @__PURE__ */ new Map();
  return r.forEach((e) => {
    n.set(e.plugin, [...n.get(e.plugin) ?? [], e]);
  }), [...n].flatMap(([e, o]) => {
    let l = e === void 0 ? {} : { plugin: e }, t = () => hm(() => d(o)), u = () => {
      if (s(l, u, t)) return;
      i(o, e, t);
    }, a = s(l, u, t), f = false, g = false;
    if (!a) i(o, e, () => {
      if (f = true, g) t();
    });
    return g = true, a || !f ? o.map((c) => c.id) : [];
  });
};
export {
  dfr,
  lfr
};
