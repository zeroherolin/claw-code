// darwin/cli/chunk-e12899b6.js — Claude Code 2.1.310（darwin）模块 chunk-phv01gat.js
import { X } from "../shared/chunk-57ff8cc1.js";
import { NE } from "../terminal/chunk-8f019bac.js";
import { createInterface as b } from "readline";
var E = 5, ydt = 250, Zoo = "That answer arrived too quickly after the question to count. Please answer again.";
async function G5e(e, a = process.stdin, { ignoreAnswersWithinMs: r = 0, reaskPreamble: c = "", signal: s } = {}) {
  if (r > 0) {
    if (await R(a, r)) return false;
  }
  if (s?.aborted === true) return false;
  let o = () => {
  }, n = new Promise((d) => {
    o = d;
  }), t = b({ input: a, output: process.stdout }), f = 0, l = () => {
    let d = performance.now();
    t.question(`${e} [y/N] `, (m) => {
      if (r > 0 && performance.now() - d < r) {
        if (++f > E) {
          o(false), t.close();
          return;
        }
        process.stdout.write(`${c}${Zoo}
`), l();
        return;
      }
      let i = m.trim().toLowerCase();
      o(i === "y" || i === "yes"), t.close();
    });
  };
  return l(), t.once("close", () => o(false)), s?.addEventListener("abort", () => t.close(), { once: true }), n;
}
async function R(e, a) {
  let r = "isTTY" in e && e.isTTY === true, c = "isRaw" in e && e.isRaw === true, s = false, o = () => {
    s = true;
  }, n = () => {
  };
  if (e.once("end", o), e.once("close", o), e.on("data", n), r) NE(e, true);
  try {
    e.resume(), await X(a);
  } finally {
    if (e.removeListener("data", n), e.removeListener("end", o), e.removeListener("close", o), e.pause(), r) NE(e, c);
  }
  return s || "readableEnded" in e && e.readableEnded === true || "destroyed" in e && e.destroyed === true;
}
export {
  G5e,
  Zoo,
  ydt
};
