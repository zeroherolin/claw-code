// darwin/shared/chunk-945711c0.js — Claude Code 2.1.310（darwin）模块 chunk-2vy3qmfn.js
import { Vt } from "./chunk-3b9c376b.js";
import { i } from "./environment.js";
import { Lh, cp } from "../settings/global-config-and-gates.js";
function wyo({ storedAccountUuid: t, hostAccountUuid: e }) {
  if (!e) return t ? { status: "resolved", accountUuid: t, source: "stored" } : { status: "missing" };
  if (!t) return { status: "resolved", accountUuid: e, source: "env" };
  return t.trim().toLowerCase() === e.toLowerCase() ? { status: "resolved", accountUuid: t, source: "env" } : { status: "mismatch" };
}
async function Eyo(t) {
  let e = Vt(i.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();
  if (e === void 0) return;
  try {
    let n = await Lh(t);
    return n === "env" || n === "fd" ? e : void 0;
  } catch {
    return;
  }
}
async function kme(t) {
  let e;
  try {
    e = cp()?.accountUuid;
  } catch {
    e = void 0;
  }
  return wyo({ storedAccountUuid: e, hostAccountUuid: await Eyo(t) });
}
export {
  Eyo,
  kme,
  wyo
};
