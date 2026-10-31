// linux/shared/chunk-10bedd23.js — Claude Code 2.1.310（linux）模块 chunk-gryjwhw4.js
import { N } from "../telemetry/anthropic-workspace-id.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Ch, Mjs } from "../context/team-memory-sync.js";
function HZr() {
  let t, o = false, r = () => {
    if (Ch()) o = true, import("../permissions/create-remote-tool-hosts-runtime.js").then(({ createRemoteToolHostsRuntime: e }) => {
      t = e();
    }).catch((e) => {
      l(N(e)), o = false;
    });
  }, i = void 0;
  if (Mjs({ get remote() {
    if (!o) r();
    return t;
  }, ...i !== void 0 && { loopbackDev: i } }), Ch()) r();
}
export {
  HZr
};
