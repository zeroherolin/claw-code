// mcp/always-allow.9m89.js — Claude Code 2.1.310 模块 chunk-9m893g74.js
import { _ } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { yi, Td, Ze } from "../shared/chunk-j79dwkaq.js";
import { Mt } from "../terminal/chunk-9vttrktj.js";
import { TE, Dar } from "./chunk-ykcv164t.js";
import { dN } from "../shared/chunk-9sbknd2z.js";
import { L, nt, U, es } from "../context/not-admin-owned.ersa.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { vn } from "../shared/chunk-npfaxhr1.js";
import { D } from "../shared/chunk-6rnejvk7.js";
import { et } from "../shared/chunk-tftf1nn4.js";
import { randomUUID as pe } from "crypto";
var sTt = 200, gvn = 128;
function JJo(e) {
  if (e.length <= sTt) return false;
  let n = 0;
  for (let r of e) if (n++, n > sTt) return true;
  return false;
}
function Aar(e) {
  return typeof e === "string" && JJo(e) ? yi(e, sTt) : void 0;
}
function xci(e) {
  if (!Array.isArray(e)) return e;
  let n;
  return e.forEach((r, i) => {
    if (!P(r) || r.type !== "tool_use") return;
    let o = Aar(r.name);
    if (o === void 0) return;
    n ??= e.slice(), n[i] = { ...r, name: o };
  }), n === void 0 ? e : n;
}
function P(e) {
  return typeof e === "object" && e !== null;
}
var Pci = /^mem_[A-Za-z0-9_-]{1,120}$/;
function x(e) {
  let n = BigInt(58), r = Array(22).fill("1"), i = 21, o = e;
  while (o > 0n) {
    let s = Number(o % n);
    r[i] = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[s], o = o / n, i--;
  }
  return r.join("");
}
function E(e) {
  let n = e.replaceAll("-", "");
  if (n.length !== 32) throw Error(`Invalid UUID hex length: ${n.length}`);
  return BigInt("0x" + n);
}
function Rar(e, n) {
  try {
    let r = E(n);
    return `${e}_01${x(r)}`;
  } catch {
    return;
  }
}
function B(e) {
  if (e.length !== 22) return;
  let n = BigInt(58), r = 0n;
  for (let i of e) {
    let o = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".indexOf(i);
    if (o < 0) return;
    r = r * n + BigInt(o);
  }
  return r;
}
function fA(e) {
  let n = e.lastIndexOf("_");
  if (n < 0) return;
  let r = e.slice(n + 1);
  if (!r.startsWith("01")) return;
  let i = B(r.slice(2));
  if (i === void 0) return;
  let o = i.toString(16).padStart(32, "0");
  if (o.length !== 32) return;
  return `${o.slice(0, 8)}-${o.slice(8, 12)}-${o.slice(12, 16)}-${o.slice(16, 20)}-${o.slice(20, 32)}`;
}
import { isIPv6 as C } from "net";
var H = 2048, F = 54, G = 253, j = 21, w = 32, z = 8, X = 65535, Y = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", V = /* @__PURE__ */ new Set(["001d7d58914b066125876ce23d2d6d112d8289118e9a57f569a430c38d8faa3c", "058c32f177ce90792b36d516790f6443d632f83c6119d72ef32b1a815be6ee87", "08c07051187ca5d47aa75782fc2060a206e136d85cb398778a9f54e3db2caa47", "0ebe1e8065774e27792b7880d5caf63a366a8f4c135e5a42e15ba58769ae20f9", "0ff9d8927e9828d185f11126acb1b8da2e92a15012de9ed113b3d1a04a73f407", "10be6beef496b89dae799c37bd04e5eba2a6264a0a4d605f5661b50d7dc4d1ea", "1360816558a23fd518959284a182f4d9e1cb362f47e472cff3b455babcba3144", "1e5fb8ca7bc55583e22e442dbd431ba55b70a579c5d1e7429ec9c91d4d9cf008", "1f100a7fa106825b9587fc9102815e07bc345e84c6ef109b39ce776af439ce7f", "21a3230e03772a58aff1b3709a9e232850916337e1fba95c434076b6668c6e08", "243689f0a34348668a106d9b4c366eba9a279d3a38c831e34ca67a53430f35f8", "2824b7bb47f3e5ae3e0e90c4ea28182e5c0060e6497a4f7020a913a14d8c18cd", "2c1ce718525496974dc28bd457a3de87820bfd74fd5a499cac0db7aa6b33d9b8", "36c717254b394a2fd1d02f706960152d8d1ae2e7155a152037e730721dd3dbac", "380e87dd0048d82132f3259960c821b86a101e84da8ef94fa20cf8ceb4f905dd", "38c5db643cca7001e885f94c1c72bce5ffd5ca3e6c00f36b9381a1ff1c677515", "3d8c0d8ccdf38a6d9103dbda04b18dade7588e32db531e85b051a2bc07c55fe6", "4b75867727276e96a05d681ede545d314c7c7106b3fa9fbd5643c2dc1662cb94", "585b9501131729a7b00bd745e8fe7ab9687ffdaaf91e4c6408d94b7fc15e8f2b", "66b8245886077eaaa79f378369261e020fb19d2c6ae53f94dfd8dfbc0282d029", "750bd39768d2b52a276a0f16e37e8d89cc51808ed2aee34292a613728c215aec", "7b1694f99542e733abaa2b776ab1261a98fc697118538d53d3b0242ffed329d3", "7deb7a951ec3b81573a7bf1e375e584b444c1bdf4cf5fc820708c663ba57b292", "82142dc93de09756fc53b25be1e0cedbcc71bb8418ee720d9d8a0ca8fc74b71a", "836e98bf162bd453eb76c3115a7bfc6649b5d8e0b09c61288aee7a7214dcabe3", "8f68ef8293d7c78db41cb358a2a5f3e54eada3985950d78ec79640d804cf9c26", "a6ebfa4f158ef450cef3c6738c4107a87e4300cfa8900ffe801de9cca91dfe0c", "ac4db1553b96800b17a9badb490cd250e8957f1516b0755985f92b98e6e77fb5", "b1f3f7220f5aa8683d21539155e87e170952dbed4ecc5c6637979100cc791b5d", "b4126249adb972b50222897e622fa7980e4ac2cb717c1891a2e250798331aff7", "b6ed110d3683e593243d76a62dc45f6a7374ebf59d23aec3fc5361fb34bad9dd", "c064fbca9d9de8dd9bb0624984403b28d0da807a69365d4f7fb09123ecb0c405", "d4c3e8a11256ab82a4fc72560eb4a2b0e87bad820c290dd9b03616de240aa6db", "d780682093f3c46cce9817cf19a8ae72d8e863af8e11d2e3c2017af411b17893", "dd7f1bcb57a00ea6327356b1bf0751320daae910c9d3309d22e83924ddb67cc4", "df471311a60874f28a0b62b44b471480efda48bcc55af7659834f0af40f32f71", "e32dc9b0503a1d4982d028acd3a7fd5c4d30f044e7e336f78632d572b40d5328", "e537c3eb39f7a75157dfb1d52e0fc930bbf1af9a0040456e74b2ee7b62136d2c", "ea307c363088a80405d68d46e1b4117c1a982dbe35eaab9fcf1d51577e2b8181", "fb099cb999784a21b51ca9a017b44877826f93f380021e05e6fee571d3861edb", "fe2914f62e20325b719ba405e6a8f299f46ce8f1ad11b6f03681ceda5a935454"]), Z = /* @__PURE__ */ new Set(["0e4a7f621b2756c6d34c5f409d886ec7622482db96cbcfae01e14b142ce12b1d", "0f4dd7885db7d0bf0b1e86b5dd22c2d4f9937994c66e30f3cf0fd7468033f7d4", "12ca17b49af2289436f303e0166030a21e525d266e209267433801a8fd4071a0", "28cac3b96a52871fc67bc5f353858d4f945316d964778d026fafd408e9840cf5", "49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d9763", "d470ff28ce01e69add79d828d4085e3ec719a6536712b5d60afcf1a10976e451", "eff8e7ca506627fe15dda5e0e512fcaad70b6d520f37cc76597fdb4f2d83a1a3"]), q = /^(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?[^#]*)?(?:#(.*))?$/, Q = /[\u0000-\u0020\u007f\\\u0085\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]/, J = /^(?:[A-Za-z0-9\-._~!$&'()*+,;=:@/]|%[0-9A-Fa-f]{2})*$/, ee = /%(?![0-9A-Fa-f]{2})/, ne = /^([A-Za-z0-9._-]+)(?::(.*))?$/, re = /^\[([0-9A-Fa-f:.]*:[0-9A-Fa-f:.]*)\](?::(.*))?$/, te = /^[0-9]{1,5}$/, oe = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/, se = /^(?:[0-9]+|0x[0-9a-f]*)$/, ie = "org-connector-";
function v(e) {
  return dN(`mcp://claude.ai/client-integration/${e}`, Y);
}
function ae(e) {
  return /^[A-Za-z0-9_-]+$/.test(e) && !e.includes("__") && !e.startsWith("_") && !e.endsWith("_");
}
function de(e) {
  return e === void 0 || te.test(e) && Number(e) >= 1 && Number(e) <= X;
}
function ce(e) {
  return J.test(e) && !e.split("/").some((n) => n === "." || n === "..");
}
function fe(e) {
  if (e === "" || Array.from(e).length > H || !Td(e) || Q.test(e)) return;
  let [, n, r, i, o] = q.exec(e) ?? [], s = n?.toLowerCase();
  if (s !== "http" && s !== "https" || !r || i === void 0 || !ce(i) || ee.test(o ?? "")) return;
  let t = ne.exec(r) ?? re.exec(r);
  if (!t?.[1] || !de(t[2]) || t[1].includes(":") && !C(t[1])) return;
  let a = t[1].toLowerCase().replace(/\.$/, "");
  return a === "" || Z.has(et(a)) ? void 0 : { scheme: s, host: a };
}
function le(e) {
  for (let n = 1; n <= e.length; n++) if (V.has(et(e.slice(0, n)))) return true;
  return false;
}
function ue(e, n) {
  let r = n.split("."), i = r.at(-1) ?? "";
  if (e !== "https" || n.length > G || r.length < 2 || i.includes("-") || se.test(i) || !r.every((s) => oe.test(s))) return;
  let o = r.join("_");
  return le(o) ? void 0 : o;
}
function ye(e) {
  return `${e}-`.replace(/[_-]+/g, "-").startsWith(ie);
}
function Ici(e) {
  let n = fe(e);
  if (n === void 0) return;
  let { scheme: r, host: i } = n, o = `${r}://${i.includes(":") ? `[${i}]` : i}`, s = et(o).slice(0, w), t = ue(r, i), a = `h-${s}`, d = t === void 0 ? a : t.length > F ? `${t.slice(0, j).replace(/^[_-]+|[_-]+$/g, "")}-${s}` : t, c = ye(d) ? a : d;
  return ae(c) ? c : void 0;
}
function Oci(e, n) {
  let r = [e, ...n];
  return e !== "" && r.every(Td) ? `local-${et(_(r)).slice(0, w)}` : void 0;
}
function uqt(e, n) {
  let r = e.args ?? [];
  return e.command === n.command && r.length === (n.args?.length ?? 0) && r.every((i, o) => i === n.args?.[o]) ? void 0 : { command: e.command, args: r };
}
function g(e, n) {
  return `${e}-a${et(n).slice(0, z)}`;
}
function h(e) {
  let n = /* @__PURE__ */ new Map();
  for (let { id: o, key: s, pinned: t = false } of e) {
    let a = n.get(o);
    if (s !== void 0 && (a === void 0 || t && !a.pinned || t === a.pinned && s < a.key)) n.set(o, { key: s, pinned: t });
  }
  let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  for (let [o, { key: s, pinned: t }] of n) {
    if (t) {
      r.set(o, s);
      continue;
    }
    i.set(s, (i.get(s) ?? /* @__PURE__ */ new Set()).add(o));
  }
  for (let [o, s] of i) for (let t of s) r.set(t, s.size > 1 ? g(o, t) : o);
  return r;
}
var u = "mcp__", ge = [], N = "mcp__retired-", me = /-a[0-9a-f]{8}(?:__|$)/, be = /^(.*[^_])-a[0-9a-f]{8}$/;
function R() {
  return { active: false, readLegacyKeyOwner: () => {
    return;
  }, claimLegacyKeyOwner: async () => {
    return;
  }, legacyKeyOwners: /* @__PURE__ */ new Map(), unsavedLegacyKeys: /* @__PURE__ */ new Set(), refusedLegacyKeys: /* @__PURE__ */ new Map(), needsRebuild: false, servers: /* @__PURE__ */ new Map(), tools: /* @__PURE__ */ new Map(), wireByInternal: /* @__PURE__ */ new Map(), internalByWire: /* @__PURE__ */ new Map(), wireKeyByInternalKey: /* @__PURE__ */ new Map(), internalKeyByWireKey: /* @__PURE__ */ new Map(), keptLegacyNames: 0, sessionKeyById: /* @__PURE__ */ new Map(), formerKeys: /* @__PURE__ */ new Map(), spelledKeys: /* @__PURE__ */ new Map(), otherDenyOrAskNames: /* @__PURE__ */ new Map(), retiredWireNames: /* @__PURE__ */ new Map(), wireHolders: /* @__PURE__ */ new Map() };
}
var _e = new nt(R), I = new W(() => ({ used: false })), Se = R();
function y() {
  return es(I).used ? _e.of(U()) : Se;
}
function Mci(e) {
  es(I).used = true;
  let n = y();
  n.active = true, n.readLegacyKeyOwner = e.read, n.claimLegacyKeyOwner = e.claim;
}
function Ppe() {
  return y().active;
}
function Hci() {
  return y().keptLegacyNames;
}
function K(e) {
  return e.serverType === "claudeai-proxy" && e.serverId ? fA(e.serverId) ?? e.serverId : v(e.serverName);
}
function we(e, n, r, i) {
  let o = e.tools.get(n), s = o && e.servers.get(o.serverId)?.standardKey;
  if (o === void 0 || s === void 0 || s.pinned) return;
  let t = new Set(i.values());
  for (let a = 0; a <= e.tools.size; a++) {
    let d = a === 0 ? o.serverId : `${o.serverId}#${a}`, c = `${u}${g(s.key, d)}__${o.toolPart}`;
    if (c.length > gvn) return;
    if (!r.has(c) && !t.has(c)) return c;
  }
  return;
}
function ve(e) {
  let n = [...e.servers.values()], r = h([...n.map(({ id: t, standardKey: a }) => ({ id: t, key: a?.key, pinned: a?.pinned })), ...[...e.formerKeys].flatMap(([t, a]) => [...a].filter((d) => d !== e.servers.get(t)?.standardKey?.key).map((d) => ({ id: `former:${d}:${t}`, key: d })))]);
  for (let { id: t, legacyKey: a } of n) if (!r.has(t)) {
    let d = Ze(`${a}__`, "__");
    e.spelledKeys.set(d, (e.spelledKeys.get(d) ?? /* @__PURE__ */ new Set()).add(t));
  }
  for (let [t, a] of r) {
    let d = e.servers.get(t)?.standardKey;
    if ([...e.spelledKeys.get(a) ?? []].some((f) => f !== t) && d?.key === a && !d.pinned) r.set(t, g(a, t));
  }
  let i = /* @__PURE__ */ new Map();
  for (let { legacyKey: t } of n) i.set(t, (i.get(t) ?? 0) + 1);
  let o = e.internalByWire;
  e.sessionKeyById = r, e.wireByInternal = /* @__PURE__ */ new Map(), e.internalByWire = /* @__PURE__ */ new Map(), e.wireKeyByInternalKey = /* @__PURE__ */ new Map(), e.internalKeyByWireKey = /* @__PURE__ */ new Map(), e.keptLegacyNames = 0;
  for (let { id: t, legacyKey: a } of n) {
    let d = r.get(t);
    if (d !== void 0 && d !== a) {
      if (e.internalKeyByWireKey.set(d, a), i.get(a) === 1) e.wireKeyByInternalKey.set(a, d);
    }
  }
  let s = /* @__PURE__ */ new Map();
  for (let [t, { serverId: a, toolPart: d }] of e.tools) {
    let c = r.get(a), f = `${u}${c}__${d}`;
    if (c !== void 0 && f.length <= gvn) s.set(t, f);
  }
  for (let t = true; t; ) {
    t = false;
    let a = new Set([...e.tools.keys()].filter((c) => !s.has(c))), d = /* @__PURE__ */ new Set();
    for (let [c, f] of s) {
      let l = d.has(f) || a.has(f) && f !== c;
      if (d.add(f), l) {
        let p = we(e, c, a, s);
        if (p === void 0) s.delete(c);
        else s.set(c, p);
        t = true;
      }
    }
  }
  e.keptLegacyNames = e.tools.size - s.size;
  for (let [t, a] of s) {
    e.wireByInternal.set(t, a), e.internalByWire.set(a, t);
    let d = e.wireHolders.get(a);
    e.wireHolders.set(a, d === void 0 || d === t ? t : null);
  }
  for (let [t, { serverId: a, toolPart: d }] of e.tools) for (let c of e.formerKeys.get(a) ?? []) {
    let f = `${u}${c}__${d}`;
    if (e.wireHolders.get(f) === t && !e.internalByWire.has(f) && (f === t || !e.tools.has(f))) e.internalByWire.set(f, t);
  }
  for (let [t, a] of o) {
    let d = t === a && e.tools.has(t) && !e.wireByInternal.has(t);
    if (!e.internalByWire.has(t) && !e.retiredWireNames.has(t) && !d) e.retiredWireNames.set(t, `${N}${pe().replaceAll("-", "")}`);
  }
  e.otherDenyOrAskNames = /* @__PURE__ */ new Map();
  for (let [t, { serverId: a, toolPart: d }] of e.tools) {
    let c = s.get(t), f = L([...[r.get(a), e.servers.get(a)?.standardKey?.key].flatMap((l) => l === void 0 ? [] : [`${u}${l}__${d}`]), ...c === void 0 ? [] : [c], ...[...e.formerKeys.get(a) ?? []].map((l) => `${u}${l}__${d}`)]).filter((l) => l !== t);
    if (f.length > 0) e.otherDenyOrAskNames.set(t, f);
  }
}
async function xar(e, n = false) {
  let r = y();
  if (!r.active) return false;
  let i = vn(e.serverName), o = K(e), s = n || await he(r, i, o), t = r.refusedLegacyKeys.get(i) ?? /* @__PURE__ */ new Set();
  if (r.refusedLegacyKeys.set(i, t), s) t.add(o);
  else t.delete(o);
  return s;
}
async function he(e, n, r) {
  for (let a of e.servers.values()) if (a.legacyKey !== n && (a.standardKey?.key === n || e.sessionKeyById.get(a.id) === n || e.formerKeys.get(a.id)?.has(n))) return true;
  let i = e.unsavedLegacyKeys.has(n) ? void 0 : e.readLegacyKeyOwner(n), o = e.legacyKeyOwners.get(n);
  if (i !== void 0 || o !== void 0) return (i ?? r) !== r || (o ?? r) !== r;
  e.unsavedLegacyKeys.add(n);
  let s = await e.claimLegacyKeyOwner(n, r);
  if (s === void 0) return true;
  e.unsavedLegacyKeys.delete(n);
  let t = e.legacyKeyOwners.get(n) ?? s;
  return e.legacyKeyOwners.set(n, t), t !== r;
}
function Dci(e) {
  let n = y();
  if (!n.active) return;
  for (let { name: r, server: i, standardKey: o } of e) {
    let s = K(i), t = vn(i.serverName), a = n.servers.get(s)?.standardKey, d = o ?? a;
    if (!n.servers.has(s) || n.servers.get(s)?.legacyKey !== t || a?.key !== d?.key || a?.pinned !== d?.pinned) {
      if (a !== void 0 && !a.pinned && a.key !== d?.key) n.formerKeys.set(s, (n.formerKeys.get(s) ?? /* @__PURE__ */ new Set()).add(a.key));
      n.needsRebuild = true, n.servers.set(s, { id: s, legacyKey: t, standardKey: d });
    }
    if (n.tools.get(r)?.serverId !== s) n.needsRebuild = true, n.tools.set(r, { serverId: s, toolPart: r.slice(`${u}${t}__`.length) });
  }
  if (n.needsRebuild) ve(n), n.needsRebuild = false;
}
function iTt(e) {
  return y().wireByInternal.get(e) ?? e;
}
function Lci(e) {
  return (e.startsWith(N) ? [...y().retiredWireNames].find(([, r]) => r === e) : void 0)?.[0] ?? iTt(e);
}
function pqt(e) {
  let { internalByWire: n, retiredWireNames: r } = y();
  return n.get(e) ?? r.get(e) ?? e;
}
function Cqe(e) {
  return y().internalKeyByWireKey.get(e) ?? e;
}
function k(e, n) {
  if (!e.startsWith(u)) return e;
  let r = e.slice(u.length), i = r.indexOf("__"), o = i === -1 ? r : r.slice(0, i);
  return `${u}${n(o)}${i === -1 ? "" : r.slice(i)}`;
}
function bFe(e) {
  return k(e, Cqe);
}
function QJo(e, n) {
  let { wireKeyByInternalKey: r, refusedLegacyKeys: i } = y(), o;
  for (let [s, t] of r) {
    let a = `${u}${s}`;
    if ((e === a || e.startsWith(`${a}__`) || e.startsWith(`${a}(`)) && s.length > (o?.legacy.length ?? -1)) o = { legacy: s, wire: t };
  }
  return o === void 0 || n === "allow" && (i.get(o.legacy)?.size ?? 0) > 0 ? e : `${u}${o.wire}${e.slice(u.length + o.legacy.length)}`;
}
function A(e) {
  return y().otherDenyOrAskNames.get(e) ?? ge;
}
function ZJo(e) {
  if (!me.test(e) || !y().active) return;
  let n = k(e, (r) => be.exec(r)?.[1] ?? r);
  return n === e ? void 0 : n;
}
function hvn(e, n) {
  let r = ZJo(e);
  if (r === void 0) return;
  let { tools: i, servers: o, sessionKeyById: s } = y(), t = i.get(n), a = t === void 0 ? void 0 : o.get(t.serverId)?.standardKey?.key;
  return t === void 0 || a === void 0 || s.get(t.serverId) !== a ? void 0 : { rule: r, row: `${u}${a}__${t.toolPart}` };
}
function T(e) {
  return typeof e === "number" && Number.isInteger(e) && e > 0 ? e : void 0;
}
var Ne = { always_allow: true, always_ask: true, always_deny: true };
function Re(e) {
  return typeof e === "string" && Object.hasOwn(Ne, e);
}
function yvn(e) {
  if (!D(e) || typeof e.name !== "string") return;
  let { name: n, permission_policy: r } = e;
  if (r === void 0) return { policy: { name: n }, rewritten: false };
  return Re(r) ? { policy: { name: n, permission_policy: r }, rewritten: false } : { policy: { name: n, permission_policy: "always_ask" }, rewritten: true };
}
function Par(e, n) {
  if (e === void 0 || n === void 0) return e === n;
  return e.length === n.length && e.every((r, i) => r.name === n[i]?.name && r.permission_policy === n[i]?.permission_policy);
}
function Jot(e) {
  if (!D(e)) return { settings: {}, ignored: [] };
  let { timeout: n, disableAutoBackground: r, tools: i, connectorId: o } = e, s = T(n), t = [];
  if (n !== void 0 && s === void 0) t.push("timeout");
  if (r !== void 0 && typeof r !== "boolean") t.push("disableAutoBackground");
  let a = Ie(i);
  if (Qot(e) !== void 0) t.push("tools");
  let d = typeof o === "string" && o !== "";
  if (o !== void 0 && !d) t.push("connectorId");
  return { settings: { ...s !== void 0 && { timeout: s }, ...r === true && { disableAutoBackground: r }, ...a !== void 0 && { tools: a }, ...d && { connectorId: o } }, ignored: t };
}
function Qot(e) {
  let n = D(e) ? e.tools : void 0;
  if (n === void 0) return;
  if (!Array.isArray(n)) return { kind: "not_a_list" };
  let r = 0, i = 0;
  for (let o of n) {
    let s = yvn(o);
    if (s === void 0) r++;
    else if (s.rewritten) i++;
  }
  return r + i > 0 ? { kind: "entries", dropped: r, rewritten: i, kept: n.length - r } : void 0;
}
function aTt(e) {
  if (e.kind === "not_a_list") return "tools[] is not a list; no per-tool policy taken";
  let n = [];
  if (e.dropped > 0) n.push(`dropped ${e.dropped} malformed tools[] ${e.dropped === 1 ? "entry" : "entries"}`);
  if (e.rewritten > 0) n.push(`read ${e.rewritten} tools[] ${e.rewritten === 1 ? "entry" : "entries"} with an invalid permission_policy as always_ask`);
  return `${n.join(", ")}; kept ${e.kept}`;
}
function Ie(e) {
  if (!Array.isArray(e)) return;
  let n = [];
  for (let r of e) {
    let i = yvn(r);
    if (i !== void 0) n.push(i.policy);
  }
  return n;
}
var HH = "mcp__";
function Nr(e) {
  let n = e.split("__"), [r, i, ...o] = n;
  if (r !== "mcp" || !i) return null;
  let s = o.length > 0 ? o.join("__") : void 0;
  return { serverName: i, toolName: s };
}
function io(e) {
  return `${HH}${vn(e)}__`;
}
function jc(e, n, r) {
  if (e.mcpInfo?.serverName !== void 0) return e.mcpInfo.serverName === n;
  return e.name.startsWith(r ?? io(n));
}
function hT(e) {
  return Nr(`${io(e)}x`)?.serverName ?? vn(e);
}
function Nci(e, { listedServer: n, parsedServer: r }) {
  if (n !== void 0) return e === n;
  return r !== void 0 && fqt(r, e);
}
function jo(e, n) {
  return `${io(e)}${vn(n)}`;
}
var O = { always_allow: 0, always_ask: 1, always_deny: 2 };
function Zot(...e) {
  let n = /* @__PURE__ */ new Map();
  for (let s of e) for (let [t, a] of Object.entries(s)) {
    let d = a.type === "sdk";
    if (!d && a.type !== "http" && a.type !== "sse") continue;
    let c = a.tools;
    if (!Array.isArray(c)) continue;
    for (let f of c) {
      let l = yvn(f);
      if (l === void 0) continue;
      let p = l.policy.permission_policy;
      if (p === void 0 || (d ? p === "always_allow" : l.rewritten)) continue;
      let M = O[p], b = jo(t, l.policy.name), S = n.get(b);
      if (S === void 0 || M > O[S]) n.set(b, p);
    }
  }
  let r = [], i = [], o = [];
  for (let [s, t] of n) if (t === "always_allow") r.push(s);
  else if (t === "always_deny") i.push(s);
  else o.push(s);
  return { allow: r, deny: i, ask: o };
}
function Fci(e, n) {
  let r = Object.fromEntries(Object.entries(n).filter(([, t]) => t.scope === "dynamic" && t.type !== "sdk")), { allow: i, deny: o, ask: s } = Zot(r);
  if (i.length === 0 && o.length === 0 && s.length === 0) return e;
  return { ...e, alwaysAllowRules: { ...e.alwaysAllowRules, ...i.length > 0 && { mcpServerPolicy: i } }, alwaysDenyRules: { ...e.alwaysDenyRules, ...o.length > 0 && { mcpServerPolicy: o } }, alwaysAskRules: { ...e.alwaysAskRules, ...s.length > 0 && { mcpServerPolicy: s } } };
}
function Iar(e, n, r) {
  let i = (a, d) => {
    let c = a.mcpServerPolicy ?? [], f = r === "replace" ? d : [...c, ...d.filter((l) => !c.includes(l))];
    if (f.length === c.length && f.every((l, p) => l === c[p])) return a;
    if (f.length === 0) {
      let { mcpServerPolicy: l, ...p } = a;
      return p;
    }
    return { ...a, mcpServerPolicy: f };
  }, o = i(e.alwaysAllowRules, n.allow), s = i(e.alwaysDenyRules, n.deny), t = i(e.alwaysAskRules, n.ask);
  if (o === e.alwaysAllowRules && s === e.alwaysDenyRules && t === e.alwaysAskRules) return e;
  return { ...e, alwaysAllowRules: o, alwaysDenyRules: s, alwaysAskRules: t };
}
function Fl(e) {
  return e.mcpInfo ? jo(e.mcpInfo.serverName, e.mcpInfo.toolName) : e.name;
}
function Oar(e) {
  if (!e.mcpInfo || !Ppe()) return [];
  let n = Fl(e), r = A(n), i = e.mcpInfo.standardKey?.key;
  if (i === void 0) return r;
  let o = `${HH}${vn(e.mcpInfo.serverName)}__`, s = `${HH}${i}__${n.slice(o.length)}`;
  return s === n || r.includes(s) ? r : [...r, s];
}
function _vn(e, n) {
  let r = `mcp__${vn(n)}__`;
  return e.replace(r, "");
}
function Svn(e) {
  let n = e.replace(/\s*\(MCP\)\s*$/, "");
  n = n.trim();
  let r = n.indexOf(" - ");
  if (r !== -1) return n.substring(r + 3).trim();
  return n;
}
function est(e, n) {
  if (!n) return Mt(e, m);
  let r = nbe(e);
  return r ? `${Mt(r.serverName, m)} (from plugin ${Mt(r.pluginName, m)})` : Mt(e, m);
}
var m = 80;
function nbe(e) {
  if (!e.startsWith("plugin:")) return;
  let n = e.split(":");
  if (n.length < 3) return;
  return { pluginName: n[1], serverName: n.slice(2).join(":") };
}
function fqt(e, n) {
  if (e.startsWith("plugin:") || n.startsWith("plugin:")) return e === n;
  return vn(e) === vn(n);
}
function Z9r(e, n) {
  return eQo(e)(Nr(n));
}
function eQo(e) {
  let n = Nr(e);
  if (n === null) return () => false;
  let r = n.toolName === void 0 || n.toolName === "*", i = n.toolName !== void 0 && TE(n.toolName) ? n.toolName : void 0, o;
  return (s) => s !== null && n.serverName === s.serverName && (r || s.toolName !== void 0 && i !== void 0 && (o ??= Dar(i))(s.toolName));
}
function tst(e) {
  if (e.mcpInfo) {
    let { serverName: r } = e.mcpInfo;
    return [`${HH}${vn(r)}`, `${HH}${hT(r)}`];
  }
  let n = [];
  if (!e.name.startsWith(HH)) return n;
  for (let r = e.name.indexOf("__", HH.length); r !== -1; r = e.name.indexOf("__", r + 1)) n.push(e.name.slice(0, r));
  return n;
}
function $ci(e) {
  let n = Nr(e);
  if (n === null || n.toolName === void 0) return n === null ? [] : [n];
  return tst({ name: e }).map((r) => ({ serverName: r.slice(HH.length), toolName: e.slice(r.length + 2) }));
}
function tQo(e, n) {
  return (n.mcpInfo ? [`${HH}${vn(n.mcpInfo.serverName)}`] : tst(n)).every((r) => e === r || e.startsWith(`${r}__`));
}
function nst(e, n) {
  return Z9r(e, Fl(n)) && tQo(e, n);
}
function Uci(e, n) {
  if (!n.mcpInfo || !Ppe()) return false;
  let r = hvn(e, Fl(n));
  return Oar(n).includes(e) || r !== void 0 && r.rule === r.row || lTt(e, n);
}
function lTt(e, n) {
  let r = n.mcpInfo ? hvn(e, Fl(n)) : void 0;
  return r !== void 0 && lTt(r.rule, { name: r.row }) || Z9r(e, Fl(n)) || e.startsWith(HH) && tst(n).includes(e) || Oar(n).some((i) => lTt(e, { name: i }));
}
export {
  $ci,
  Aar,
  Cqe,
  Dci,
  Fci,
  Fl,
  HH,
  Hci,
  Iar,
  Ici,
  JJo,
  Jot,
  Lci,
  Mci,
  Nci,
  Nr,
  Oar,
  Oci,
  Par,
  Pci,
  Ppe,
  QJo,
  Qot,
  Rar,
  Svn,
  Uci,
  Z9r,
  ZJo,
  Zot,
  _vn,
  aTt,
  bFe,
  eQo,
  est,
  fA,
  fqt,
  gvn,
  hT,
  hvn,
  iTt,
  io,
  jc,
  jo,
  lTt,
  nbe,
  nst,
  pqt,
  sTt,
  tQo,
  tst,
  uqt,
  xar,
  xci,
  yvn
};
