// darwin/shared/chunk-10bedd23.js — Claude Code 2.1.310（darwin）模块 chunk-wsj5ss19.js
import { N } from "../telemetry/anthropic-workspace-id.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Ah, oWs } from "../context/team-memory-sync.js";
function $Zr() {
  let t, o = false, r = () => {
    if (Ah()) o = true, import("../permissions/create-remote-tool-hosts-runtime.js").then(({ createRemoteToolHostsRuntime: e }) => {
      t = e();
    }).catch((e) => {
      l(N(e)), o = false;
    });
  }, i = void 0;
  if (oWs({ get remote() {
    if (!o) r();
    return t;
  }, ...i !== void 0 && { loopbackDev: i } }), Ah()) r();
}
export {
  $Zr
};
