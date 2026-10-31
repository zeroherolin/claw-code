// 提取流水线的共用部分：读取 Bun 单文件可执行程序中的模块图、格式化 JS 模块、解析 AST。
import fs from "node:fs";
import * as acorn from "acorn";
import { transformSync } from "esbuild";

export const BUNFS = "/$bunfs/root/";

// ---------- Bun standalone 模块图 ----------
//
// 模块图存放在 Mach-O 的 __BUN,__bun 段或 ELF 的 .bun 节，两者布局相同（Bun 1.4.x）:
//   [u64 payload_len][payload]
//   payload 末尾: [Offsets 32 字节]["\n---- Bun! ----\n"]
//     Offsets = u64 byte_count, u32 modules.off, u32 modules.len, u32 entry_id,
//               u32 exec_argv.off, u32 exec_argv.len, u32 flags
//   modules: N 条 52 字节记录 = 12 × u32 (name, contents, sourcemap, bytecode, module_info,
//            bytecode_origin 各一组 off/len) + 4 × u8 (encoding, loader, format, side)
const TRAILER = "\n---- Bun! ----\n";
const RECORD = 52;
const LOADERS = ["jsx", "js", "ts", "tsx", "css", "file", "json", "jsonc", "toml", "wasm", "napi", "base64", "dataurl", "text", "bunsh", "sqlite", "sqlite_embedded", "html"];
const ENCODING = { 0: "binary", 1: "latin1", 2: "utf16le" };

/** 找到存放模块图的段或节，返回 { offset, size } */
function findBunSection(buf) {
  if (buf.readUInt32LE(0) === 0xfeedfacf) return findMachOSection(buf);
  if (buf.readUInt32BE(0) === 0x7f454c46 && buf[4] === 2 && buf[5] === 1) return findElfSection(buf);
  throw new Error("不是 64 位 Mach-O 或小端 64 位 ELF 文件");
}

/** 64 位小端 ELF：按节名找到 .bun */
function findElfSection(buf) {
  const shoff = Number(buf.readBigUInt64LE(0x28)), shentsize = buf.readUInt16LE(0x3a), shnum = buf.readUInt16LE(0x3c);
  const header = (i) => {
    const o = shoff + i * shentsize;
    return { name: buf.readUInt32LE(o), offset: Number(buf.readBigUInt64LE(o + 0x18)), size: Number(buf.readBigUInt64LE(o + 0x20)) };
  };
  const names = header(buf.readUInt16LE(0x3e));
  for (let i = 0; i < shnum; i++) {
    const s = header(i), at = names.offset + s.name;
    if (buf.toString("latin1", at, buf.indexOf(0, at)) === ".bun") return { offset: s.offset, size: s.size };
  }
  throw new Error("未找到 .bun 节（不是 Bun 编译的可执行程序？）");
}

/** 64 位 Mach-O：找到 __BUN,__bun 段 */
function findMachOSection(buf) {
  const ncmds = buf.readUInt32LE(16);
  let p = 32;
  for (let i = 0; i < ncmds; i++) {
    const cmd = buf.readUInt32LE(p), size = buf.readUInt32LE(p + 4);
    if (cmd === 0x19 /* LC_SEGMENT_64 */) {
      const nsects = buf.readUInt32LE(p + 64);
      for (let s = 0, q = p + 72; s < nsects; s++, q += 80) {
        const sect = buf.toString("latin1", q, q + 16).replace(/\0+$/, "");
        const seg = buf.toString("latin1", q + 16, q + 32).replace(/\0+$/, "");
        if (seg === "__BUN" && sect === "__bun") return { offset: buf.readUInt32LE(q + 48), size: Number(buf.readBigUInt64LE(q + 40)) };
      }
    }
    p += size;
  }
  throw new Error("未找到 __BUN,__bun 段（不是 Bun 编译的可执行程序？）");
}

/**
 * 读取模块图。
 * @returns {{ entry: string, modules: { name: string, contents: Buffer, encoding: string, loader: string }[] }}
 *   name 去掉了 /$bunfs/root/ 前缀；入口模块名为 "cli"
 */
export function readBunModules(binaryPath) {
  const buf = fs.readFileSync(binaryPath);
  const sec = findBunSection(buf);
  const len = Number(buf.readBigUInt64LE(sec.offset));
  const d = buf.subarray(sec.offset + 8, sec.offset + 8 + len);
  const t = d.lastIndexOf(TRAILER);
  if (t < 0) throw new Error("未找到 Bun 模块图结尾标记");
  const modOff = d.readUInt32LE(t - 24), modLen = d.readUInt32LE(t - 20), entryId = d.readUInt32LE(t - 16);
  const modules = [];
  for (let i = 0; i < modLen / RECORD; i++) {
    const r = modOff + i * RECORD;
    const slice = (k) => d.subarray(d.readUInt32LE(r + k * 8), d.readUInt32LE(r + k * 8) + d.readUInt32LE(r + k * 8 + 4));
    const name = slice(0).toString("utf8");
    modules.push({
      name: name.startsWith(BUNFS) ? name.slice(BUNFS.length) : name.replace(/^\/+/, ""),
      contents: Buffer.from(slice(1)),
      encoding: ENCODING[d[r + 48]] ?? String(d[r + 48]),
      loader: LOADERS[d[r + 49]] ?? String(d[r + 49]),
    });
  }
  return { entry: modules[entryId].name, modules };
}

/** 从可执行程序中读出版本号（原版构建宏 VERSION:"x.y.z"） */
export function readVersion(binaryPath) {
  const m = fs.readFileSync(binaryPath).toString("latin1").match(/VERSION:"(\d+\.\d+\.\d+)"/);
  if (!m) throw new Error("无法从可执行程序中读出版本号");
  return m[1];
}

// ---------- JS 模块 ----------

// 原版每个模块开头的 Bun 字节码标记与法律声明，由 LICENSE 统一说明，不保留在源码中
export const HEADER_RE = /^\/\/ @bun @bytecode\n(\/\/.*\n|\n)*?\/\/ Version: [^\n]*\n/;

/**
 * 格式化一个原版 JS 模块：去掉文件头，esbuild 等价重新打印。
 * 第三方库的许可注释（/*! … *\/、@license）抽出到 legal，由 LICENSE 汇总。
 * @returns {{ code: string, legal: string[] }}
 */
export function formatModule(raw) {
  const r = transformSync(raw.replace(HEADER_RE, ""), {
    loader: "js", format: "esm", charset: "utf8", legalComments: "external", target: "esnext",
  });
  return { code: r.code, legal: r.legalComments ? splitLegal(r.legalComments) : [] };
}

function splitLegal(s) {
  return s.split(/\n(?=\/[*/])/).map((x) => x.trim()).filter(Boolean);
}

const ACORN = { ecmaVersion: "latest", sourceType: "module", allowHashBang: true, allowAwaitOutsideFunction: true, allowReturnOutsideFunction: true };

export function parse(code) {
  return acorn.parse(code, { ...ACORN, locations: true });
}

/** 逐个产出 token（acorn 的 Token：type.label、value、start、end） */
export function tokens(code) {
  return acorn.tokenizer(code, ACORN);
}

// ---------- 输出 ----------

export function writeJson(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 1) + "\n");
}

export const readJson = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
