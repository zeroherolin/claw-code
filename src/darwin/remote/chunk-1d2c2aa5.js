// darwin/remote/chunk-1d2c2aa5.js — Claude Code 2.1.310（darwin）模块 chunk-68b0hzbc.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
async function U5e(n, e) {
  return (await xoo(n, e))?.tags ?? null;
}
async function xoo(n, e) {
  try {
    let s = e.getAccessToken ? await e.getAccessToken() : void 0, { getBridgeSessionOrStatus: i } = await import("./create-bridge-session.js"), { session: r } = await i(n, { baseUrl: e.baseUrl, ...s && { getAccessToken: () => s }, credentials: e.credentials, useV2: true });
    if (!r || !Array.isArray(r.tags)) return null;
    let a = typeof r.created_at === "string" ? Date.parse(r.created_at) : Number.NaN;
    return { tags: r.tags, createdAtMs: Number.isNaN(a) ? void 0 : a };
  } catch (s) {
    return t(`[bridge:session] session tag read failed: ${d(s)}`, { level: "warn" }), null;
  }
}
export {
  U5e,
  xoo
};
