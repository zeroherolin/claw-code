// shared/cli-error.bk7h.js — Claude Code 2.1.310 模块 chunk-bk7hcyjm.js
import { cm } from "../context/not-admin-owned.ersa.js";
import { Pe } from "./chunk-3kevgx4j.js";
import { Kw } from "../fs/backed-up.p1qn.js";
import { he } from "../terminal/xterm-ghostty.qrwz.js";
import { bor } from "./chunk-w13tcac4.js";
import { CM, rd } from "../shell/invalid-type.qnva.js";
function $f(r) {
  console.error(he.red(r));
}
function fn(r, e = "cli_error") {
  if (r) $f(r);
  if (!cm()) Kw(e);
  process.exit(1);
  return;
}
function $U(r) {
  if (r) process.stdout.write(r + `
`);
  process.exit(0);
  return;
}
function X2t(r) {
  process.exit(r);
  return;
}
async function Fp(r) {
  await new Promise((e) => {
    process.stdout.write(r, () => e());
  });
}
function gj(r) {
  process.stderr.write(he.yellow(rd(r)) + `
`);
}
var i = 2e3;
async function hj({ waitForOAuthRefresh: r = true } = {}) {
  if (r) await bor();
  await Pe(CM(), i);
  try {
    let { flushAnalyticsSinks: e } = await import("../telemetry/flush-analytics-sinks.ehyf.js");
    await e();
  } catch {
  }
}
async function Oo(r) {
  await hj(), process.exit(r);
  return;
}
async function rs(r) {
  if (r) $f(r);
  return await hj(), fn();
}
async function nT(r) {
  if (r) process.stdout.write(r + `
`);
  return await hj(), $U();
}
export {
  $U,
  $f,
  Fp,
  Oo,
  X2t,
  fn,
  gj,
  hj,
  nT,
  rs
};
