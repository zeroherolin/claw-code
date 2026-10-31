// linux/fs/not-utf8.js — Claude Code 2.1.310（linux）模块 chunk-hc5j8sxy.js
import { aee, Po, ie, fW, t } from "./gitlab-runner-authentication-token.js";
import { isUtf8 as p } from "buffer";
import { open as E } from "fs/promises";
function F(n, e, r) {
  let i = n.statSync(e);
  return j$e(i, e, r), i;
}
function j$e(n, e, r) {
  if (n.isDirectory()) throw Object.assign(Error("EISDIR: illegal operation on a directory, read"), { code: "EISDIR", errno: -21, syscall: "read", path: e });
  if (!n.isFile()) throw Object.assign(Error("Not a regular file (device, FIFO, or socket)"), { code: "ERR_NOT_REGULAR_FILE", path: e });
  if (r !== void 0 && n.size > r) throw Object.assign(Error("File exceeds maxBytes limit"), { code: "ERR_FILE_TOO_LARGE", path: e, size: n.size, maxBytes: r });
}
function ffi(n, e) {
  if (n.isFile() && Number(n.nlink) > 1) throw Object.assign(Error("File has more than one hard link"), { code: "ERR_MULTIPLE_LINKS", path: e });
}
function q8r(n, e, r) {
  if (r === void 0) return;
  if (n > r) throw Object.assign(Error("File exceeds maxBytes limit"), { code: "ERR_FILE_TOO_LARGE", path: e, size: n, maxBytes: r });
}
function Bse(n) {
  return n != null && typeof n === "object" && "code" in n && n.code === "ERR_NOT_REGULAR_FILE";
}
function bB(n) {
  return n != null && typeof n === "object" && "code" in n && n.code === "ERR_FILE_TOO_LARGE";
}
function zfe(n) {
  if (n.byteLength === 0) return "utf8";
  if (n.byteLength >= 2) {
    if (n[0] === 255 && n[1] === 254) return "utf16le";
  }
  if (n.byteLength >= 3 && n[0] === 239 && n[1] === 187 && n[2] === 191) return "utf8";
  return "utf8";
}
var f = 4096, b = 8e3;
function LZo(n) {
  return n.subarray(0, b).includes(0);
}
function $At(n) {
  let e = zfe(n.subarray(0, f));
  if (e !== "utf8") return { encoding: e };
  if (n.byteLength >= 2 && n[0] === 254 && n[1] === 255) return { encoding: e, notText: "utf16be" };
  if (LZo(n)) return { encoding: e, notText: "nul" };
  return p(n) ? { encoding: e } : { encoding: e, notText: "not_utf8" };
}
function Y8r(n, e) {
  return e !== "" && n?.charCodeAt(0) === 65279 && e.charCodeAt(0) !== 65279 ? `\uFEFF${e}` : e;
}
function jse(n) {
  let e = zfe(n.subarray(0, f));
  return Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString(e).replaceAll(`\r
`, `
`);
}
function NZo(n) {
  let { buffer: e, bytesRead: r } = ie().readSync(n, { length: f });
  return zfe(e.subarray(0, r));
}
function FAt(n) {
  let e = 0, r = 0;
  for (let i = 0; i < n.length; i++) if (n[i] === `
`) if (i > 0 && n[i - 1] === "\r") e++;
  else r++;
  return e > r ? "CRLF" : "LF";
}
function $Zo(n, e, r) {
  let i = ie(), { resolvedPath: o, isSymlink: s } = Po(i, n);
  if (s) t(`Reading through symlink: ${n} -> ${o}`);
  let u = F(i, n, e);
  r?.(u);
  let a = NZo(n), c;
  if (e === void 0) c = i.readFileSync(n, { encoding: a });
  else {
    let { buffer: g, bytesRead: d } = i.readSync(n, { length: e + 1 });
    q8r(d, n, e), c = g.subarray(0, d).toString(a);
  }
  let l = FAt(c.slice(0, 4096));
  return { content: c.replaceAll(`\r
`, `
`), encoding: a, lineEndings: l };
}
function SB(n, e, r) {
  return $Zo(n, e, r).content;
}
async function y_(n, e) {
  let r = ie(), { resolvedPath: i, isSymlink: o } = Po(r, n);
  if (o) t(`Reading through symlink: ${n} -> ${i}`);
  j$e(await r.stat(n), n, e);
  await using s = await E(n, aee());
  return await kxe(s, n, e);
}
async function kxe(n, e, r) {
  j$e(await n.stat(), e, r);
  let i = r === void 0 ? await n.readFile() : await fW(n, r + 1, "file");
  q8r(i.length, e, r);
  let { encoding: o, notText: s } = $At(i), u = i.toString(o), a = FAt(u.slice(0, 4096));
  return { content: u.replaceAll(`\r
`, `
`), encoding: o, lineEndings: a, ...s && { notText: s } };
}
export {
  $At,
  $Zo,
  Bse,
  FAt,
  LZo,
  NZo,
  SB,
  Y8r,
  bB,
  ffi,
  j$e,
  jse,
  kxe,
  q8r,
  y_,
  zfe
};
