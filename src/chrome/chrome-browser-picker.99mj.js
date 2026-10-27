// chrome/chrome-browser-picker.99mj.js — Claude Code 2.1.310 模块 chunk-99mjna38.js
import { R } from "../telemetry/anthropic-workspace-id.36ys.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { ee, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { T2 } from "../vendor/mcp-sdk/chunk-mcb3r2r5.js";
import { m, p } from "../telemetry/chunk-wn8xtaqg.js";
import { v_o, eUn } from "../shared/chunk-13bg33w9.js";
import { o, C, u } from "../vendor/zod/string-format.k395.js";
var l = f(() => u({ deviceId: o(), name: o().default("Browser"), osPlatform: o().optional() })), xmr = "No browsers are connected. Open Chrome with the Claude extension and make sure you're signed in to the same claude.ai account.", Fgi = "Chrome can't be reached right now. Make sure Chrome is open with the Claude extension and signed in to the same claude.ai account, then try again.", ops = "That browser isn't connected right now. Make sure Chrome is open with the Claude extension on that computer, then try again.";
class Pmr extends R {
  listEmpty;
  namedABrowser;
  constructor(e, r) {
    if (r) super(ops, "claude-in-chrome browser not listed");
    else super(ops, "claude-in-chrome switch request named no browser");
    this.listEmpty = e, this.namedABrowser = r;
  }
}
class cno extends R {
  constructor(e) {
    super(e, "claude-in-chrome tool call failed");
  }
}
function sps(e) {
  return e instanceof Pmr;
}
function Imr(e) {
  if (a8t(e)) p("chrome_browser_picker", "bridge_unreachable");
  else if (sps(e) && e.namedABrowser) p("chrome_browser_picker", "browser_not_listed", { list_empty: e.listEmpty });
  else if (sps(e)) m("chrome_browser_picker", "invalid_request");
  else m("chrome_browser_picker", "select_failed");
}
class uno extends R {
  constructor() {
    super(Fgi, "claude-in-chrome bridge not reachable");
  }
}
function a8t(e) {
  return e instanceof uno;
}
function kki(e) {
  if (a8t(e)) return [];
  throw e;
}
async function WPn(e) {
  let r = await aps(e, "list_connected_browsers", {});
  if (!r) return [];
  let s = C(l()).safeParse(ee(r));
  if (!s.success) throw new ips();
  return s.data;
}
class ips extends R {
  constructor() {
    super("Claude Code couldn't read the browser list it got back. This is a bug on our side, not a problem with your setup.", "claude-in-chrome browser list in an unknown shape");
  }
}
async function Omr(e, r, s = (n) => n) {
  if (typeof r !== "string" || r === "") throw new Pmr(false, false);
  try {
    await s(aps(e, "select_browser", { deviceId: r }));
  } catch (n) {
    if (!(n instanceof cno)) throw n;
    t(`claude-in-chrome select_browser refused: ${n.message}`);
    let c = await s(WPn(e));
    if (c.some((i) => i.deviceId === r)) throw n;
    throw new Pmr(c.length === 0, true);
  }
}
async function aps(e, r, s) {
  let n = v_o(), c = await T2(e, { name: r, arguments: s }, void 0, true), i = Array.isArray(c.content) ? c.content[0] : void 0, a = i && typeof i === "object" && "text" in i && typeof i.text === "string" ? i.text : void 0;
  if (v_o() !== n && a !== void 0 && eUn(a)) throw t(`claude-in-chrome bridge not reachable: ${a}`, { level: "error" }), new uno();
  if (c.isError) throw new cno(a || `${r} failed`);
  return a;
}
export {
  Fgi,
  Imr,
  Omr,
  Pmr,
  WPn,
  a8t,
  aps,
  cno,
  ips,
  kki,
  ops,
  sps,
  uno,
  xmr
};
