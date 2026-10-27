// shared/chunk-2vy3qmfn.js — Claude Code 2.1.310 模块 chunk-2vy3qmfn.js
import { Vt } from "./chunk-9sbknd2z.js";
import { i } from "./environment.9a41.js";
import { Lh, cp } from "../settings/global-config-and-gates.27xj.js";
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
