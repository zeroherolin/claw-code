// darwin/vendor/zod/tool-use.js — Claude Code 2.1.310（darwin）模块 chunk-03fs925s.js
import { L, U } from "../../context/not-admin-owned.js";
import { eRt } from "../../telemetry/anthropic-workspace-id.js";
import { W } from "../../shared/chunk-37dd5dd4.js";
import { g, p } from "../../telemetry/chunk-9d6962d2.js";
import { t } from "../../fs/gitlab-runner-authentication-token.js";
import { l } from "../../artifacts/cowritten-artifact-html.js";
import { Rn, tH } from "../../context/tool-result-clearing-after-idle-server-report.js";
import { at, qt, Be } from "../../mcp/allowed-warning.js";
import { Nn } from "../../settings/global-config-and-gates.js";
import { vV } from "../../permissions/max-thinking-tokens.js";
import { Zd } from "../../shared/chunk-11bd2044.js";
import { qe } from "../../shared/allow-large.js";
import { hA } from "./string-format.js";
var T = { skill: "skill_tool", mcp: "mcp_tool", evalRegistered: "eval_registered", dynamic: "dynamic_tool", unreadable: "unreadable_tool" };
function Ig(e) {
  try {
    if (e.name.startsWith(vV)) return T.skill;
    let r = String(Nn(e.name));
    if (r !== e.name) return r;
    if (e.mcpInfo !== void 0) return T.mcp;
    if (e.name.startsWith("eval_registered__")) return T.evalRegistered;
    if (e.uiTableKey !== void 0 || e.name.includes("__")) return T.dynamic;
    return e.name;
  } catch {
    return T.unreadable;
  }
}
var E = [...Object.values(T), Be, Zd, at, qe, qt];
function XFr(e) {
  let r = Ig(e);
  return E.find((c) => c === r) ?? "other_tool";
}
var x = new W(() => /* @__PURE__ */ new Set());
function _(e, r) {
  return `${e}_${r}`;
}
var k = /_(\d+)$/;
function oGe(e) {
  let r = k.exec(e);
  return r ? e.slice(0, -r[0].length) : void 0;
}
function R(e, r, c) {
  let i = Rn(r, e.name);
  if (i === void 0 || !tH(i)) return null;
  let a = (u) => (p("batch_tools", u, { tool_name: Nn(i.name), isMcp: false }), [{ type: "tool_use", id: _(e.id, 0), name: i.name, input: e.input, ...e.caller !== void 0 && { caller: e.caller } }]);
  try {
    let u = i.inputSchema.safeParse(e.input);
    if (!u.success) return { synthetics: a("parse_failed"), decomposed: false };
    let { v1Tool: n, entries: o } = i.perEntryHookInputs(u.data);
    if (o.length === 0) return { synthetics: a("zero_entries"), decomposed: false };
    return { decomposed: true, synthetics: o.map((s, f) => {
      let m = s;
      try {
        m = c(n, s);
      } catch (d) {
        if (d instanceof Error && d.name === "ZodError") {
          let h = d instanceof hA ? L(d.issues.map((y) => y.code)).join(",") : "unknown";
          t(`Normalizing a batch entry's input for tool=${Ig(n)} was rejected: issues ${h}; the error text (${d.message.length} characters) is not logged`, { level: "error" });
        } else l(Error(`Normalizing a batch entry's input for tool=${XFr(n)} failed: ${eRt(d)} was thrown; its text is not logged`));
      }
      return { type: "tool_use", id: _(e.id, f), name: n.name, input: m, ...e.caller !== void 0 && { caller: e.caller } };
    }) };
  } catch {
    return { synthetics: a("per_entry_threw"), decomposed: false };
  }
}
function Z4n(e) {
  let r;
  for (let c of e) if (tH(c)) r ??= /* @__PURE__ */ new Set(), r.add(c.underlyingV1ToolName);
  if (r === void 0) return e;
  return e.filter((c) => !r.has(c.name));
}
function Ccn(e, r, c) {
  let i, a = [];
  for (let u = 0; u < e.length; u++) {
    let n = e[u];
    if (n.type !== "tool_use") {
      i?.push(n);
      continue;
    }
    let o = R(n, r, c);
    if (o === null) {
      i?.push(n);
      continue;
    }
    if (i ??= e.slice(0, u), i.push(...o.synthetics), o.decomposed) a.push({ id: n.id, name: n.name }), g("batch_tools", { tool_name: Nn(n.name), isMcp: false });
  }
  return { content: i ?? e, batchToolUses: a };
}
function h6s(e, r, c) {
  if (r === void 0 || r.length === 0) return e;
  let i = /* @__PURE__ */ new Map();
  for (let o of r) if (!i.has(o.id)) i.set(o.id, o);
  let a = /* @__PURE__ */ new Map();
  for (let o of i.values()) {
    let s = Rn(c, o.name);
    if (s === void 0 || !tH(s)) continue;
    let f = [], m;
    for (let d of e) if (d.type === "tool_use" && oGe(d.id) === o.id) m ??= d, f.push(d.input);
    try {
      a.set(o.id, { type: "tool_use", id: o.id, name: o.name, input: s.reassemble(f), ...m?.caller !== void 0 && { caller: m.caller } });
    } catch {
      let d = x.of(U().host);
      if (!d.has(o.id)) d.add(o.id), p("batch_tools", "reassemble_threw", { tool_name: Nn(o.name), isMcp: false });
    }
  }
  let u = /* @__PURE__ */ new Set(), n = [];
  for (let o of e) {
    if (o.type === "tool_use") {
      let s = oGe(o.id);
      if (s !== void 0 && a.has(s)) {
        if (!u.has(s)) u.add(s), n.push(a.get(s));
        continue;
      }
    }
    n.push(o);
  }
  return n;
}
function y6s(e, r) {
  let c = false;
  for (let n of e) {
    if (n.type === "assistant") {
      for (let o of n.message.content) if (o.type === "tool_use") {
        let s = Rn(r, o.name);
        if (s !== void 0 && tH(s)) c = true;
      }
    }
    if (n.type === "user" && !c) {
      if (Array.isArray(n.message.content) && n.message.content.some((o) => o.type === "tool_result" && oGe(o.tool_use_id) !== void 0)) c = true;
    }
  }
  if (!c) return e;
  let i = /* @__PURE__ */ new Map();
  for (let n of e) {
    if (n.type !== "assistant") continue;
    for (let o of n.message.content) if (o.type === "tool_use") i.set(o.id, o);
  }
  let a = /* @__PURE__ */ new Map();
  for (let n of e) {
    if (n.type !== "user" || !Array.isArray(n.message.content)) continue;
    for (let o of n.message.content) {
      if (o.type !== "tool_result") continue;
      let s = oGe(o.tool_use_id);
      if (s === void 0 || !i.has(s)) continue;
      let f = a.get(s);
      if (f === void 0) f = /* @__PURE__ */ new Map(), a.set(s, f);
      if (!f.has(o.tool_use_id)) f.set(o.tool_use_id, o);
    }
  }
  if (a.size === 0) return e;
  let u = /* @__PURE__ */ new Set();
  return e.flatMap((n) => {
    if (n.type !== "user" || !Array.isArray(n.message.content)) return [n];
    let o = false, s = [];
    for (let f of n.message.content) {
      if (f.type !== "tool_result") {
        s.push(f);
        continue;
      }
      let m = oGe(f.tool_use_id), d = m !== void 0 ? a.get(m) : void 0;
      if (m === void 0 || d === void 0) {
        s.push(f);
        continue;
      }
      if (o = true, u.has(m)) continue;
      u.add(m);
      let h = i.get(m), y = Rn(r, h.name), B = y !== void 0 && tH(y) ? y : void 0;
      s.push(w(B, m, O(B, h.input, m, d)));
    }
    if (!o) return [n];
    if (s.length === 0) return [];
    return [{ ...n, message: { ...n.message, content: s } }];
  });
}
function O(e, r, c, i) {
  let a;
  if (e !== void 0) try {
    let n = e.inputSchema.safeParse(r);
    if (n.success) a = e.perEntryHookInputs(n.data).entries;
  } catch {
  }
  let u = a?.length ?? 0;
  for (let n of i.keys()) {
    let o = k.exec(n);
    if (o) u = Math.max(u, Number(o[1]) + 1);
  }
  if (u > 1e3) u = a?.length ?? i.size;
  return Array.from({ length: u }, (n, o) => {
    let s = i.get(_(c, o));
    return s !== void 0 ? { input: a?.[o], result: s } : { input: a?.[o], error: "no result" };
  });
}
function w(e, r, c) {
  let i = [], a = "", u = false, n = (s) => {
    if (s.length > 0) a = a === "" ? s : `${a}
${s}`;
  }, o = () => {
    if (a !== "") i.push({ type: "text", text: a }), a = "";
  };
  for (let [s, f] of c.entries()) {
    let m = f.result === void 0 || f.result.is_error === true;
    if (m) u = true;
    if (n(`--- entry ${s + 1}${m ? " (error)" : ""} ---`), f.result !== void 0) {
      let d = f.result.content;
      if (typeof d === "string") n(d);
      else if (Array.isArray(d)) for (let h of d) if (h.type === "text") n(h.text);
      else o(), i.push(h);
    } else n(`[entry ${s + 1} error: ${f.error ?? "no result"}]`);
  }
  if (c.length === 1 && e !== void 0) n(`<system-reminder>Tip: ${e.name} accepts multiple entries in one call (\`${e.entryFieldName}: [{...}, {...}]\`). Batching related operations into a single call is faster than issuing them as separate or parallel calls. No action needed for this result.</system-reminder>`);
  return o(), { type: "tool_result", tool_use_id: r, content: i.length === 1 && i[0]?.type === "text" ? i[0].text : i, ...u && { is_error: true } };
}
var b = /* @__PURE__ */ new Map();
function BCe(e) {
  return b.get(e);
}
function e5n(e) {
  return e.map(BCe).filter((r) => r !== void 0).filter((r) => r.isEnabled());
}
function _6s(e, r) {
  return r.find((c) => c.underlyingV1ToolName === e)?.name ?? e;
}
function Ide(e) {
  for (let [r, c] of b) if (c.name === e) return r;
  return;
}
export {
  BCe,
  Ccn,
  Ide,
  Ig,
  XFr,
  Z4n,
  _6s,
  e5n,
  h6s,
  oGe,
  y6s
};
