// shared/chunk-wsj5ss19.js — Claude Code 2.1.310 模块 chunk-wsj5ss19.js
import { N } from "../telemetry/anthropic-workspace-id.36ys.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { Ah, oWs } from "../context/team-memory-sync.0s3j.js";
function $Zr() {
  let t, o = false, r = () => {
    if (Ah()) o = true, import("../permissions/create-remote-tool-hosts-runtime.sjvd.js").then(({ createRemoteToolHostsRuntime: e }) => {
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
