// darwin/shared/chunk-5a9b74de.js — Claude Code 2.1.310（darwin）模块 chunk-nrdx784s.js
function hho() {
  return { view: void 0, logs: [], unreadErrors: 0, unreadWarnings: 0, cleanupRegistered: false };
}
function yho(n) {
  return (o) => n((e) => {
    let r = { webBrowser: e.webBrowser, bagelActive: e.bagelActive, bagelUrl: e.bagelUrl, bagelPanelVisible: e.bagelPanelVisible }, t = o(r);
    if (t === r) return e;
    return { ...e, ...t };
  });
}
export {
  hho,
  yho
};
