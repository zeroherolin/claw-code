// linux/shared/chunk-5a9b74de.js — Claude Code 2.1.310（linux）模块 chunk-7cs9rhng.js
function Kgo() {
  return { view: void 0, logs: [], unreadErrors: 0, unreadWarnings: 0, cleanupRegistered: false };
}
function Vgo(n) {
  return (o) => n((e) => {
    let r = { webBrowser: e.webBrowser, bagelActive: e.bagelActive, bagelUrl: e.bagelUrl, bagelPanelVisible: e.bagelPanelVisible }, t = o(r);
    if (t === r) return e;
    return { ...e, ...t };
  });
}
export {
  Kgo,
  Vgo
};
