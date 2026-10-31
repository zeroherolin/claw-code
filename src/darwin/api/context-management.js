// darwin/api/context-management.js — Claude Code 2.1.310（darwin）模块 chunk-0z1gnhqm.js
import { U, V, J } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { je } from "../plugins/chunk-0a4c51cf.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { tce } from "../shared/chunk-f0d2d1c6.js";
import { Gy, _, qo } from "../fs/gitlab-runner-authentication-token.js";
import { lce } from "./anthropic-client.js";
import { Ci } from "../context/stream-no-events-fallback-warning.js";
import { lG } from "../context/tool-use-id.js";
import { et } from "../shared/chunk-061dbb8e.js";
import { z } from "../shared/chunk-be29de51.js";
import { promises as f } from "fs";
import { dirname as h, join as y } from "path";
var g = /* @__PURE__ */ new Set(["model", "system", "tools", "max_tokens", "thinking", "output_config", "context_management", "metadata"]), S = /* @__PURE__ */ new Set([...g, "thread"]), D = / cc_(?:prev_req|prompt_id|turn_origin|prompt_index|turn_index|workload)=[^;"\\]*;/g, R = /,\\"tk\\":\\"[0-9a-fA-F-]{36}\\"/g, k = 5;
class l {
  recording = true;
}
var A = new W(() => new l());
function w() {
  return A.of(U().host).recording;
}
function vTs(t) {
  let { stateByAgent: n, retiredInitHashes: e } = Ci().dumpPrompts, r = n.get(t)?.writtenInitDataHash;
  if (n.delete(t), r !== void 0) e.set(t, r);
}
function kTs() {
  Ci().dumpPrompts.stateByAgent.clear(), Ci().dumpPrompts.retiredInitHashes.clear();
}
function H(t) {
  return;
}
function P(t) {
  return y(Le(), "dump-prompts", `${t ?? V()}.jsonl`);
}
function E(t, n, e, r) {
  Ci().dumpPrompts.appendQueue.run(t, async () => {
    if (e) {
      if ((await e.storageV5.append(e.key, [{ data: n + `
` }])).ok) r();
      return;
    }
    if (J()) return;
    await f.mkdir(h(t), { recursive: true }), await f.appendFile(t, n + `
`), r();
  }).catch(() => {
  });
}
function v(t, n, e, r, p) {
  try {
    return;
  } catch {
  } finally {
    e.dumpInFlight = false;
  }
}
function CTs(t, n) {
  if (!w()) return lce;
  let e = P(t), r = z() && n !== void 0 ? { storageV5: n, key: je.log(t, "apiDump") } : void 0;
  return async (p, u) => {
    let { stateByAgent: m, retiredInitHashes: d } = Ci().dumpPrompts, i = d.get(t), o = m.get(t) ?? { initialized: i !== void 0, lastInitDataHash: i ?? "", writtenInitDataHash: i, dumpInFlight: false };
    if (m.set(t, o), u?.method === "POST" && u.body && !o.dumpInFlight) {
      o.dumpInFlight = true;
      let c = (/* @__PURE__ */ new Date()).toISOString();
      setImmediate(v, u.body, c, o, e, r);
    }
    return lce(p, u);
  };
}
function x(t) {
  let n = t.get("thread");
  if (n === void 0) return false;
  let e = qo(n);
  if (typeof e !== "object" || e === null || !("type" in e) || e.type !== "continue") return false;
  if (!t.has("tools")) return true;
  let r = qo(t.get("system") ?? "null");
  return Array.isArray(r) && r.length > 0 && r.every((p) => lG(p));
}
export {
  CTs,
  kTs,
  vTs
};
