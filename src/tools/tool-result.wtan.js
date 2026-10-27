// tools/tool-result.wtan.js — Claude Code 2.1.310 模块 chunk-wtanrwmb.js
import { f } from "../shared/chunk-nyvhtfb3.js";
import { Ye, Ve, R, d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { _, Kp, am, bts, git, GH, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { I } from "../shared/chunk-j79dwkaq.js";
import { si } from "../shared/chunk-3kevgx4j.js";
import { wi } from "../plugins/skills-dir.cemw.js";
import { is } from "../artifacts/cowritten-artifact-html.thm2.js";
import { Wp } from "../mcp/toolbox-mcp-server-id.fewh.js";
import { NN, EXe, wxr, Srn, PMs, Exr, mko, vxr, IMs, KWn, Vft, Txr, vrn, krn, yle } from "../core/conversation-engine.31gx.js";
import { ES } from "../mcp/allowed-warning.j2d4.js";
import { g } from "../telemetry/chunk-wn8xtaqg.js";
import { fUt } from "../context/team-memory-sync.0s3j.js";
import { e6e, tn } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { YA } from "../plugins/plugin-enabled-for-session.9xx8.js";
import { ij, p8s, f8s, aL, m8s, g8s, rG, h8s, y8s } from "../permissions/bot-protected-tengu-atomic-magpie.zc9j.js";
import { Xgt } from "../vendor/mcp-sdk/chunk-mcb3r2r5.js";
import { uS } from "../shared/chunk-cf9z5v65.js";
import { zT, Ode, Mde } from "../telemetry/binary-content-persisted.1yt1.js";
import { ncn } from "../shared/chunk-gbtn4sgn.js";
import { Z8, WWt } from "../mcp/mcp-answer-stream-ended.rcad.js";
import { D } from "../shared/chunk-6rnejvk7.js";
import { o, C, u } from "../vendor/zod/string-format.k395.js";
var B = f(() => u({ server: o().optional().describe("Optional server name to filter resources by") })), F = f(() => C(u({ uri: o().describe("Resource URI"), name: o().describe("Resource name"), mimeType: o().optional().describe("MIME type of the resource"), description: o().optional().describe("Resource description"), server: o().describe("Server that provides this resource") })));
function H(e) {
  let { hasMcpInboundDoor: r } = import.meta.require("../mcp/has-mcp-inbound-door.p23m.js");
  if (!Array.isArray(e) || !r()) return e;
  return e.filter(D).map(({ uri: a, name: s, mimeType: n, description: h, server: l }) => ({ uri: P("", a), name: P("", s), ...typeof n === "string" && { mimeType: n }, ...typeof h === "string" && { description: h }, server: P("", l) }));
}
function P(e, r) {
  return typeof r === "string" ? r : e;
}
var AN = tn({ isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, toAutoClassifierInput(e) {
  return e.server ?? "";
}, shouldDefer: true, name: rG, aliases: ["ListMcpResources"], searchHint: "list resources from connected MCP servers", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return h8s;
}, async prompt() {
  return y8s;
}, get inputSchema() {
  return B();
}, get outputSchema() {
  return F();
}, create(e) {
  return { async call(r, { signal: a }) {
    let s = e.turnMcpClients.filter((c) => !vrn(c, e.agentId)), { server: n } = r, h = n ? Vft(s, n) : s;
    if (n && h.length === 0) throw new R(`Server "${n}" not found. Available servers: ${s.map((c) => c.name).join(", ")}`, "MCP server not found");
    let l = await Promise.all(h.map(async (c) => {
      if (!wi(c) || !c.capabilities?.resources) return [];
      let y = import.meta.require("../mcp/emit-tripwire-event.zkve.js").mcpClientModule(), m = () => y.ensureConnectedClient(c, { signal: a, context: "MCP resource listing" });
      try {
        let S = await m();
        if (vrn(S, e.agentId)) return [];
        let M = await si(y.fetchResourcesForClient(S), a, () => new Ye());
        if ((c.config.type === "claudeai-proxy" || c.config.type === "http" && Wp(c.config.url)) && y.getDiscoveryFetchError(M) !== void 0) {
          let p = await m();
          if (p !== S) M = await si(y.fetchResourcesForClient(p), a, () => new Ye());
        }
        let T = M.filter((p) => !fUt(p));
        if (T.length < M.length) t(`MCP server "${c.name}": ${M.length - T.length} MCP Apps UI resource(s) left out of ${rG}'s list for the model (a ui:// URI, or text/html with profile=mcp-app); ${aL} can still read them by URI`);
        return T;
      } catch (S) {
        if (!Ve(S)) is(c.name, d(S));
        return [];
      }
    }));
    if (a.aborted) throw new Ye();
    return { data: l.flat() };
  } };
}, renderToolUseMessage(e) {
  return e.server ? `List MCP resources from server "${e.server}"` : "List all MCP resources";
}, userFacingName: () => "listMcpResources", stripForCreation: H, mapToolResultToToolResultBlockParam(e, r) {
  if (!e || e.length === 0) return { tool_use_id: r, type: "tool_result", content: "No resources found. MCP servers may still provide tools even if they have no resources." };
  return { tool_use_id: r, type: "tool_result", content: _(e) };
} });
var x = { size: Z8, textToSanitize: 1048576 }, W = 16, Y = 256, q = 16 * x.textToSanitize, V = 65536;
function z() {
  let e = { size: 0, sixteenthsToSanitize: 0, nonAsciiUnits: 0 };
  return (r) => {
    if (!O(e)) return false;
    return e.size += Y, A(r, e, true);
  };
}
function Q0t() {
  let e = z(), r = z(), a = false;
  return (s) => {
    if (a || !e(s)) return;
    let n = GH(s);
    return a = !r(n), a ? void 0 : n;
  };
}
function oYe(e, r, a) {
  return `Skipped the last ${r} of ${a} ${e}: the listing is too large. Only about the first 16 MB of a listing is used (less if it has many small values), and only about 1 million characters that are costly to normalize: combining marks, full-width forms, emoji and the like anywhere, and a tool's or prompt's name that is not all ASCII. The server must list fewer or shorter ${e} to get them back.`;
}
function O(e) {
  return e.size <= x.size && e.sixteenthsToSanitize <= q;
}
function A(e, r, a = false, s = false) {
  if (r.size += W, typeof e === "string") U(e, r, s);
  else if (Array.isArray(e)) {
    for (let n of e) if (!A(n, r)) return false;
  } else if (D(e)) {
    for (let n in e) if (U(n, r), !A(e[n], r, false, a && n === "name")) return false;
  }
  return O(r);
}
function U(e, r, a = false) {
  if (r.size += e.length, !O(r) || bts(e)) return;
  if (a) {
    r.sixteenthsToSanitize += 16 * e.length;
    return;
  }
  r.sixteenthsToSanitize += e.length;
  for (let s = 0; s < e.length && O(r); s++) {
    let n = e.charCodeAt(s);
    if (n > 127 && (r.nonAsciiUnits++ < V || K()[n] === 1)) r.sixteenthsToSanitize += 15;
  }
}
var K = ES(() => {
  let e = /[\p{M}\u1100-\u11ff\ua960-\ua97f\ud7b0-\udfff]/u;
  return Uint8Array.from({ length: 65536 }, (r, a) => {
    let s = String.fromCharCode(a);
    return e.test(s) || git(s) !== s ? 1 : 0;
  });
});
function k() {
  return import.meta.require("../mcp/emit-tripwire-event.zkve.js");
}
function X() {
  return k().mcpSdkErrorClassificationModule();
}
function Z() {
  return k().mcpClientModule();
}
function N() {
  return k().mcpDirectoryReadModule();
}
var G = f(() => u({ server: o().describe("The MCP server name"), uri: o().describe("The directory resource URI to list") })), J = f(() => u({ resources: C(u({ uri: o().describe("Child resource URI"), name: o().describe("Child resource name"), mimeType: o().optional().describe("Child MIME type") })).describe(`Direct children of the directory resource. Subdirectories appear with mimeType "${WWt}".`), error: o().optional().describe("Human-readable error when the server could not list the directory") })), Rq = tn({ isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, toAutoClassifierInput(e) {
  return `${e.server} ${e.uri}`;
}, shouldDefer: true, name: ij, aliases: ["ReadMcpResourceDir"], searchHint: "list the children of an MCP directory resource", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return p8s;
}, async prompt() {
  return f8s;
}, get inputSchema() {
  return G();
}, get outputSchema() {
  return J();
}, create(e) {
  return { async call(r, { signal: a }) {
    let s = e.turnMcpClients, { server: n, uri: h } = r, l = Txr(s, n);
    if (krn(l, e.agentId), !ncn()) return { data: { resources: [], error: "Directory listing is not enabled in this build." } };
    if (!N().serverDeclaresDirectoryRead(l.capabilities)) return { data: { resources: [], error: `Server "${l.name}" does not support directory listing.` } };
    if (l.config.pluginSource) YA(l.config.pluginSource), NN(l.config.pluginSource, "mcp", { kind: "mcp-server", name: l.name });
    let c = Q(h, Srn(l.name, e.messages(), e.inheritedMcpSkillMessages()));
    if (c !== void 0) return { data: c };
    let y = await Z().ensureConnectedClient(l, { signal: a, context: "MCP resource directory read" });
    krn(y, e.agentId);
    let m;
    try {
      m = await N().readMcpDirectory(y, h);
    } catch (p) {
      let i = X();
      if (i.isMcpNotADirectoryError(p)) return is(l.name, `resources/directory/read returned ${i.getMcpErrorCode(p)} — not a directory`), { data: { resources: [], error: `Not a directory resource: ${h}. If it is a file resource, use ${aL} instead.` } };
      throw p;
    }
    let S = z(), M = z(), T = (await yle(m, (p) => {
      if (!S([p.uri, p.name, p.mimeType])) return [];
      let i = { uri: Kp(p.uri), name: GH(p.name), mimeType: p.mimeType !== void 0 ? GH(p.mimeType) : void 0 };
      return M([i.uri, i.name, i.mimeType]) ? [i] : [];
    })).flat();
    if (T.length < m.length) return is(l.name, oYe("directory entries", m.length, m.length)), { data: { resources: [], error: `The listing of ${h} is too large to read.` } };
    return { data: { resources: T } };
  } };
}, renderToolUseMessage(e) {
  if (!e.uri || !e.server) return null;
  return `List directory resource "${e.uri}" from server "${e.server}"`;
}, userFacingName() {
  return "readMcpResourceDir";
}, mapToolResultToToolResultBlockParam(e, r) {
  if (e.error) return { tool_use_id: r, type: "tool_result", content: e.error };
  let a = e.resources.map((n) => `${n.name}${n.mimeType === WWt ? "/" : ""}`).join(`
`), s = e.resources.length > 0 ? `Directory listing (${e.resources.length} ${I(e.resources.length, "entry", "entries")}):
${a}` : "Directory is empty.";
  return { tool_use_id: r, type: "tool_result", content: `${s}

${_(e)}` };
} });
function Q(e, r) {
  if (r.length > 0 && Buffer.byteLength(e) > EXe) return { resources: [], error: `An address of ${Buffer.byteLength(e)} bytes: This directory was not read, because its address is longer than ${EXe} bytes. While a skill from this server is loaded, this app reads a directory only at an address of ${EXe} bytes or less.${r.map((s) => KWn(s.skillName)).join("")}` };
  if (!r.some((s) => e === s.root || e.startsWith(`${s.root}/`))) {
    let s = r.filter((n) => mko(`${e}/`, n.root));
    if (s.length > 0) return { resources: [], error: `${e6e(e)}: This directory was not read, because its address begins with another spelling of the address of a loaded skill. Write that part exactly as the skill writes it.${s.map((n) => KWn(n.skillName)).join("")}` };
    return r.length > 0 && !wxr(e) ? { resources: [], error: `${e6e(e)}: This directory was not read, because its address is not a valid URL. While a skill from this server is loaded, this app reads a directory only at a valid URL. Write the address as the server or the skill gives it.${r.map((n) => KWn(n.skillName)).join("")}` } : void 0;
  }
  let a = IMs(e, r);
  if (a === void 0) return { resources: [], error: `${e6e(e)} is not a directory of any skill loaded from this server: no loaded skill lists a file under it. If it is a file, use ${aL} instead.` };
  return { resources: a.map((s) => ({ uri: Kp(s.uri), name: am(s.uri.slice(s.uri.lastIndexOf("/") + 1)), ...s.isDirectory && { mimeType: WWt } })) };
}
function w() {
  return import.meta.require("../mcp/emit-tripwire-event.zkve.js");
}
function ee() {
  return w().mcpSdkErrorClassificationModule();
}
function j() {
  return w().mcpClientModule();
}
function re() {
  return w().mcpDirectoryReadModule();
}
var te = f(() => u({ server: o().describe("The MCP server name"), uri: o().describe("The resource URI to read") })), oe = f(() => u({ contents: C(u({ uri: o().describe("Resource URI"), mimeType: o().optional().describe("MIME type of the content"), text: o().optional().describe("Text content of the resource"), blobSavedTo: o().optional().describe("Path where binary blob content was saved") })), error: o().optional().describe("Human-readable error when the server could not read the resource") })), RN = tn({ isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, toAutoClassifierInput(e) {
  return `${e.server} ${e.uri}`;
}, shouldDefer: true, name: aL, aliases: ["ReadMcpResource"], searchHint: "read a specific MCP resource by URI", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return m8s;
}, async prompt() {
  return g8s;
}, get inputSchema() {
  return te();
}, get outputSchema() {
  return oe();
}, create(e) {
  return { async call(r, { signal: a }) {
    let { turnMcpClients: s, storageV5: n } = e, { server: h, uri: l } = r, c = Txr(s, h);
    if (krn(c, e.agentId), c.config.pluginSource) YA(c.config.pluginSource), NN(c.config.pluginSource, "mcp", { kind: "mcp-server", name: c.name });
    let y = await j().ensureConnectedClient(c, { signal: a, context: "MCP resource read" });
    krn(y, e.agentId);
    let m = Exr(l, Srn(y.name, e.messages(), e.inheritedMcpSkillMessages())), S = async (i, b) => ({ contents: [], error: await PMs({ connected: y, skills: i, uri: l, reason: b, signal: a }) });
    if (m.case === "unlisted") return { data: await S(m.skills, m.reason) };
    let M;
    try {
      M = await Xgt(y, l);
    } catch (i) {
      let b = ee();
      if (b.isMcpMethodNotFoundError(i)) return is(c.name, "resources/read returned -32601 MethodNotFound — server advertises resources but does not implement reads"), { data: { contents: [], error: `Server "${c.name}" advertises resource support but does not implement resource reads.` } };
      if (b.isMcpResourceNotFoundError(i)) {
        if (is(c.name, `resources/read returned ${b.getMcpErrorCode(i)} — resource not found`), j().invalidateMcpResourceListCaches(y), m.case === "listed") return { data: await S(m.skills, "not_found") };
        let E = re().serverDeclaresDirectoryRead(y.capabilities) ? ` If the URI is a directory resource, use ${ij} instead.` : "";
        return { data: { contents: [], error: `Resource not found: ${l} — it may have been deleted or the URI is stale. Re-run ${rG} to refresh.${E}` } };
      }
      throw i;
    }
    let T = M.contents;
    if (m.case === "listed") {
      let i = vxr(M.contents, l, m.rows);
      if (!i.ok) return { data: await S(m.skills, i.reason) };
      g("skill_mcp_read"), T = [i.item];
    }
    return { data: { contents: await Promise.all(T.map(async (i, b) => {
      if ("text" in i) return { uri: i.uri, mimeType: i.mimeType, text: i.text };
      if (!("blob" in i) || typeof i.blob !== "string") return { uri: i.uri, mimeType: i.mimeType };
      let E = `mcp-resource-${Date.now()}-${b}-${Math.random().toString(36).slice(2, 8)}`, v = await zT(Buffer.from(i.blob, "base64"), i.mimeType, E, void 0, n);
      if ("error" in v) {
        if (uS() !== void 0) return { uri: i.uri, mimeType: i.mimeType, text: Mde(i.mimeType, Buffer.byteLength(i.blob, "base64")) };
        return { uri: i.uri, mimeType: i.mimeType, text: `Binary content could not be saved to disk: ${v.error}` };
      }
      return { uri: i.uri, mimeType: i.mimeType, blobSavedTo: v.filepath, text: Ode(v.filepath, i.mimeType, v.size, `[Resource from ${c.name} at ${i.uri}] `) };
    })) } };
  } };
}, renderToolUseMessage(e) {
  if (!e.uri || !e.server) return null;
  return `Read resource "${e.uri}" from server "${e.server}"`;
}, userFacingName() {
  return "readMcpResource";
}, mapToolResultToToolResultBlockParam(e, r) {
  if (e.error) return { tool_use_id: r, type: "tool_result", content: e.error };
  return { tool_use_id: r, type: "tool_result", content: _(e) };
} });
export {
  AN,
  Q0t,
  RN,
  Rq,
  oYe
};
