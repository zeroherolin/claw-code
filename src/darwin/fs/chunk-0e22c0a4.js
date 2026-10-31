// darwin/fs/chunk-0e22c0a4.js — Claude Code 2.1.310（darwin）模块 chunk-s3dh4j2k.js
import { ke } from "../context/not-admin-owned.js";
import { In } from "./node-modules.js";
import { Re, ue } from "../settings/global-config-and-gates.js";
import { t } from "./gitlab-runner-authentication-token.js";
import { Wc } from "./utf-8.aa9a.js";
import { gxe, hr } from "../git/utf-8.js";
import { fst, pxe } from "../git/get-url.js";
import { realpath as u } from "fs/promises";
async function Ras(r) {
  try {
    let o = await fst();
    if (!o) {
      t("Not in a GitHub repository, skipping path mapping update");
      return;
    }
    let e = ke(), s = hr(e) ?? e, i;
    try {
      i = In(await u(s));
    } catch {
      i = s;
    }
    let a = o.toLowerCase(), p = ue().githubRepoPaths?.[a] ?? [];
    if (p[0] === i) {
      t(`Path ${i} already tracked for repo ${a}`);
      return;
    }
    let f = p.filter((c) => c !== i), h = [i, ...f];
    await Re((c) => ({ ...c, githubRepoPaths: { ...c.githubRepoPaths, [a]: h } }), r), t(`Added ${i} to tracked paths for repo ${a}`);
  } catch (o) {
    t(`Error updating repo path mapping: ${o}`);
  }
}
function SAn(r) {
  let o = ue(), e = r.toLowerCase();
  return o.githubRepoPaths?.[e] ?? [];
}
async function bAn(r) {
  let o = await Promise.all(r.map(Wc));
  return r.filter((e, n) => o[n]);
}
async function WJr(r, o) {
  try {
    let e = await gxe(r);
    if (!e) return false;
    let n = pxe(e);
    if (!n) return false;
    return n.toLowerCase() === o.toLowerCase();
  } catch {
    return false;
  }
}
function GJr(r, o, e) {
  let n = ue(), s = r.toLowerCase(), i = n.githubRepoPaths?.[s] ?? [], a = i.filter((p) => p !== o);
  if (a.length === i.length) return;
  let g = { ...n.githubRepoPaths };
  if (a.length === 0) delete g[s];
  else g[s] = a;
  Re((p) => ({ ...p, githubRepoPaths: g }), e), t(`Removed ${o} from tracked paths for repo ${s}`);
}
export {
  GJr,
  Ras,
  SAn,
  WJr,
  bAn
};
