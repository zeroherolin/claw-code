// linux/shared/chunk-960c3301.js — Claude Code 2.1.310（linux）模块 chunk-pxvxgfdj.js
function O2(r) {
  try {
    if (!Bun.ant.setDumpable(false)) r("prctl(PR_SET_DUMPABLE,0) returned nonzero");
  } catch (e) {
    r(`prctl unavailable: ${e instanceof Error ? e.message : String(e)}`);
  }
}
export {
  O2
};
