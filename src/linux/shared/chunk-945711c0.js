// linux/shared/chunk-945711c0.js — Claude Code 2.1.310（linux）模块 chunk-e0pm2dx9.js
import { Kt } from "./chunk-3b9c376b.js";
import { i } from "./environment.js";
import { Lh, uf } from "../settings/global-config-and-gates.js";
function Zho({ storedAccountUuid: t, hostAccountUuid: e }) {
  if (!e) return t ? { status: "resolved", accountUuid: t, source: "stored" } : { status: "missing" };
  if (!t) return { status: "resolved", accountUuid: e, source: "env" };
  return t.trim().toLowerCase() === e.toLowerCase() ? { status: "resolved", accountUuid: t, source: "env" } : { status: "mismatch" };
}
async function eyo(t) {
  let e = Kt(i.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();
  if (e === void 0) return;
  try {
    let n = await Lh(t);
    return n === "env" || n === "fd" ? e : void 0;
  } catch {
    return;
  }
}
async function _me(t) {
  let e;
  try {
    e = uf()?.accountUuid;
  } catch {
    e = void 0;
  }
  return Zho({ storedAccountUuid: e, hostAccountUuid: await eyo(t) });
}
export {
  Zho,
  _me,
  eyo
};
