// linux/shared/chunk-e3957002.js — Claude Code 2.1.310（linux）模块 chunk-y0p9bb70.js
function NZn(e) {
  let n = e.indexOf("--handle-uri");
  if (n === -1 || !e[n + 1]) return null;
  if (e.length > n + 2) return `claude: rejected deep-link invocation — unexpected arguments after the URI.
The OS protocol handler passes exactly \`--handle-uri <uri>\`; extra arguments indicate argument injection via the URL. If invoking --handle-uri manually, place other flags before it.`;
  return null;
}
export {
  NZn
};
