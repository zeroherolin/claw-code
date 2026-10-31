// linux/shared/cli-error.js — Claude Code 2.1.310（linux）模块 chunk-0evsancd.js
import { cm } from "../context/not-admin-owned.js";
import { Pe } from "./chunk-57ff8cc1.js";
import { Kw } from "../fs/backed-up.js";
import { he } from "../terminal/xterm-ghostty.js";
import { tor } from "./chunk-3a99f127.js";
import { bM, rd } from "../shell/invalid-type.js";
function Fp(r) {
  console.error(he.red(r));
}
function pn(r, e = "cli_error") {
  if (r) Fp(r);
  if (!cm()) Kw(e);
  process.exit(1);
  return;
}
function HU(r) {
  if (r) process.stdout.write(r + `
`);
  process.exit(0);
  return;
}
function $Gt(r) {
  process.exit(r);
  return;
}
async function Ff(r) {
  await new Promise((e) => {
    process.stdout.write(r, () => e());
  });
}
function lj(r) {
  process.stderr.write(he.yellow(rd(r)) + `
`);
}
var i = 2e3;
async function dj({ waitForOAuthRefresh: r = true } = {}) {
  if (r) await tor();
  await Pe(bM(), i);
  try {
    let { flushAnalyticsSinks: e } = await import("../telemetry/flush-analytics-sinks.js");
    await e();
  } catch {
  }
}
async function Oo(r) {
  await dj(), process.exit(r);
  return;
}
async function rs(r) {
  if (r) Fp(r);
  return await dj(), pn();
}
async function eA(r) {
  if (r) process.stdout.write(r + `
`);
  return await dj(), HU();
}
export {
  $Gt,
  Ff,
  Fp,
  HU,
  Oo,
  dj,
  eA,
  lj,
  pn,
  rs
};
